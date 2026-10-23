/* Renderiza a página a partir de window.ITINERARIO (data.js). Sem bibliotecas. */
(function () {
  "use strict";
  const D = window.ITINERARIO;
  if (!D) return;

  const TAGS = {
    pt: "Em português",
    natal: "Natal",
    reserva: "Reservar",
    familia: "Família",
    compras: "Compras"
  };
  const WD = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
  const WD_FULL = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
  const STORE_KEY = "natal-holanda-2026:reservas";

  // helper: h("div.classe", {attrs}, ...filhos)
  function h(sel, attrs, ...kids) {
    const [tag, ...cls] = sel.split(".");
    const el = document.createElement(tag || "div");
    if (cls.length) el.className = cls.join(" ");
    if (attrs) for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "text") el.textContent = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (const k of kids.flat()) if (k != null && k !== false) el.append(k.nodeType ? k : document.createTextNode(k));
    return el;
  }
  const $ = (id) => document.getElementById(id);
  const parseDate = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const commons = (f) => "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(f) + "?width=1400";

  function tag(t) {
    return h("span.tag.t-" + t, null, h("span.dot"), TAGS[t] || t);
  }

  function extLink(url, label) {
    return h("a", { href: url, target: "_blank", rel: "noopener" }, label + " ↗");
  }

  // ---------- header ----------
  function header() {
    const dias = D.dias.length;
    const ptCount = D.dias.reduce((n, d) => n + d.programa.filter((p) => (p.tags || []).includes("pt")).length, 0);
    const natalCount = D.dias.filter((d) => d.tags.includes("natal")).length;
    $("lede").textContent = D.meta.subtitulo + ". Passeios culturais, mercados de Natal e tempo em família, com tudo o que dá para fazer em português marcado em azul.";

    const today = new Date(); today.setHours(0, 0, 0, 0);
    const start = parseDate(D.dias[0].data);
    const diff = Math.round((start - today) / 86400000);
    const facts = [
      ["dias", dias],
      ["países", "2 (NL · BE)"],
      ["dias com Natal", natalCount],
      ["programas em português", ptCount]
    ];
    if (diff > 0) facts.unshift(["faltam", diff + " dias"]);
    $("facts").append(...facts.map(([k, v]) => h("span", null, h("b", null, String(v)), " " + k)));
  }

  // ---------- filtros ----------
  let active = null;
  function filters() {
    const box = $("filters");
    const make = (key, label) => h("button.chip" + (key ? ".t-" + key : ""), {
      type: "button", "aria-pressed": String(active === key), "data-key": key || "",
      onclick: () => { active = active === key ? null : key; applyFilter(); }
    }, key ? h("span.dot") : null, label);
    box.append(make(null, "Tudo"), ...Object.keys(TAGS).map((k) => make(k, TAGS[k])));
  }
  function applyFilter() {
    document.querySelectorAll("#filters .chip").forEach((c) => {
      const k = c.dataset.key || null;
      c.setAttribute("aria-pressed", String(k === active));
    });
    document.querySelectorAll("[data-tags]").forEach((el) => {
      const t = el.dataset.tags.split(" ");
      el.classList.toggle("dim", !!active && !t.includes(active));
    });
  }

  // ---------- tiles ----------
  function tiles() {
    $("tiles").append(...D.dias.map((d) => {
      const dt = parseDate(d.data);
      return h("button.tile" + (d.tags.includes("natal") ? ".is-xmas" : ""), {
        type: "button", "data-tags": d.tags.join(" "), "aria-label": `${WD_FULL[dt.getDay()]} ${dt.getDate()}: ${d.titulo}`,
        onclick: () => openDay(d.id, true)
      },
        h("span.wd", null, WD[dt.getDay()]),
        h("span.num", null, String(dt.getDate()), h("small", null, "dez")),
        h("span.tt", null, d.titulo),
        h("span.city", null, d.cidade),
        h("span.dots", { "aria-hidden": "true" }, d.tags.map((t) => h("span.dot.t-" + t)))
      );
    }));
  }

  // ---------- cards de dia ----------
  const carSvg = () => {
    const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("width", "18"); s.setAttribute("height", "18"); s.setAttribute("viewBox", "0 0 24 24");
    s.setAttribute("fill", "none"); s.setAttribute("stroke", "currentColor"); s.setAttribute("stroke-width", "1.8");
    s.setAttribute("aria-hidden", "true");
    s.innerHTML = '<path d="M5 17h14M3 13l2-6h14l2 6v4h-3M3 13v4h3M3 13h18"/><circle cx="7.5" cy="17" r="1.8"/><circle cx="16.5" cy="17" r="1.8"/>';
    return s;
  };
  const chevSvg = () => {
    const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("width", "14"); s.setAttribute("height", "14"); s.setAttribute("viewBox", "0 0 24 24");
    s.setAttribute("fill", "none"); s.setAttribute("stroke", "currentColor"); s.setAttribute("stroke-width", "2.2");
    s.innerHTML = '<path d="M6 9l6 6 6-6"/>';
    return s;
  };

  function cover(d) {
    const fig = h("figure.cover", { style: "margin:0" });
    const fallback = h("div.fallback", null, h("span", null, d.cidade));
    const list = d.imagens || [];
    if (!list.length) { fig.append(fallback); return fig; }
    let i = 0;
    const img = h("img", { alt: d.cidade, loading: "lazy", decoding: "async", src: commons(list[0]) });
    const cap = h("figcaption", null, "Wikimedia Commons");
    img.addEventListener("error", () => {
      i += 1;
      if (i < list.length) img.src = commons(list[i]);
      else { img.remove(); cap.remove(); fig.append(fallback); }
    });
    fig.append(img, cap);
    return fig;
  }

  function dayCard(d) {
    const dt = parseDate(d.data);
    const items = d.programa.map((p) => h("li", { "data-tags": (p.tags || []).join(" ") },
      h("span.h", null, p.hora || ""),
      h("div.b", null,
        h("strong", null, p.titulo),
        p.texto ? h("p", null, p.texto) : null,
        p.tags && p.tags.length ? h("div.tags", null, p.tags.map(tag)) : null,
        p.link ? extLink(p.link.url, p.link.rotulo) : null
      )
    ));

    const notes = [];
    if (d.comer && d.comer.length) notes.push(h("div.note.food", null, h("h4", null, "Onde comer"), h("ul", null, d.comer.map((c) => h("li", null, h("strong", null, c.nome), " — " + c.tipo + (c.onde ? " · " + c.onde : ""))))));
    if (d.dicas && d.dicas.length) notes.push(h("div.note", null, h("h4", null, "Dicas"), h("ul", null, d.dicas.map((t) => h("li", null, t)))));
    if (d.confirmar && d.confirmar.length) notes.push(h("div.note.warn", null, h("h4", null, "Confirmar mais perto da data"), h("ul", null, d.confirmar.map((t) => h("li", null, t)))));

    const det = h("details.day", { id: d.id, "data-tags": d.tags.join(" ") },
      h("summary", null,
        h("div.dateblock", null, h("div.n", null, String(dt.getDate())), h("div.w", null, WD[dt.getDay()])),
        h("div.sumtext", null,
          h("h3", null, d.titulo),
          h("div.city", null, d.cidade),
          h("div.res", null, d.resumo),
          h("div.tags", null, d.tags.map(tag))
        ),
        h("span.chev", { "aria-hidden": "true" }, chevSvg())
      ),
      h("div.daybody", null,
        cover(d),
        d.deslocamento ? h("div.move", null, carSvg(), h("span", null, d.deslocamento)) : null,
        h("ol.timeline", null, items),
        notes.length ? h("div.notes", null, notes) : null
      )
    );
    det.addEventListener("toggle", () => {
      if (det.open) { try { history.replaceState(null, "", "#" + d.id); } catch (e) {} }
    });
    return det;
  }

  function days() {
    $("days").append(...D.dias.map(dayCard));
    $("abrir-todos").addEventListener("click", () => document.querySelectorAll("details.day").forEach((x) => (x.open = true)));
    $("fechar-todos").addEventListener("click", () => document.querySelectorAll("details.day").forEach((x) => (x.open = false)));
  }

  function openDay(id, scroll) {
    const el = $(id);
    if (!el) return;
    el.open = true;
    if (scroll) el.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }

  // ---------- reservas ----------
  function loadDone() { try { return JSON.parse(localStorage.getItem(STORE_KEY) || "[]"); } catch (e) { return []; } }
  function saveDone(arr) { try { localStorage.setItem(STORE_KEY, JSON.stringify(arr)); } catch (e) {} }

  function checklist() {
    let done = new Set(loadDone());
    const list = $("checklist");
    const update = () => { $("progress").textContent = `${done.size} de ${D.reservas.length} feitos`; };
    D.reservas.forEach((r) => {
      const day = D.dias.find((d) => d.id === r.dia);
      const id = "chk-" + r.id;
      const li = h("li" + (done.has(r.id) ? ".done" : ""));
      const cb = h("input", { type: "checkbox", id, checked: done.has(r.id) });
      cb.addEventListener("change", () => {
        cb.checked ? done.add(r.id) : done.delete(r.id);
        li.classList.toggle("done", cb.checked);
        saveDone([...done]); update();
      });
      li.append(
        cb,
        h("label", { for: id }, h("span", null, r.item), h("span.when", null, (day ? parseDate(day.data).getDate() + "/12 · " : "") + "quando: " + r.quando)),
        r.url ? h("a.go", { href: r.url, target: "_blank", rel: "noopener" }, "abrir ↗") : h("span")
      );
      list.append(li);
    });
    update();
  }

  // ---------- blocos de informação ----------
  function infoCard(x, extraClass) {
    const day = x.dia ? D.dias.find((d) => d.id === x.dia) : null;
    return h("div.info" + (extraClass || ""), null,
      day ? h("span.meta.eyebrow", null, WD[parseDate(day.data).getDay()] + " " + parseDate(day.data).getDate() + "/12") : null,
      h("h3", null, x.titulo),
      h("p", null, x.texto),
      x.url ? extLink(x.url, "ver") : null,
      day ? h("a", { href: "#" + day.id, onclick: (e) => { e.preventDefault(); openDay(day.id, true); } }, "ir para o dia") : null
    );
  }

  function flights() {
    const leg = (title, segs) => h("div.leg", null, h("h3", null, title),
      segs.map((s) => {
        const dt = parseDate(s.data);
        return h("div.seg", null,
          h("div.code", null, dt.getDate() + "/12", h("small", null, WD_FULL[dt.getDay()])),
          h("div", null, h("div.route", null, s.de + " → " + s.para), h("p", null, s.obs))
        );
      }));
    $("flights").append(leg("Ida", D.voos.ida), leg("Volta", D.voos.volta));
  }

  function footer() {
    $("fontes").append(...D.fontes.map((f) => h("li", null, h("a", { href: f.url, target: "_blank", rel: "noopener" }, f.rotulo))));
  }

  // ---------- init ----------
  header();
  filters();
  tiles();
  days();
  checklist();
  $("pt").append(...D.emPortugues.map((x) => infoCard(x, ".pt")));
  flights();
  $("praticas-list").append(...D.praticas.map((x) => infoCard(x)));
  $("extras-list").append(...D.extras.map((x) => infoCard(x)));
  footer();
  applyFilter();

  const hash = (location.hash || "").slice(1);
  if (/^d\d{2}$/.test(hash)) openDay(hash, true);
  else openDay(D.dias[1].id, false); // abre o primeiro dia de passeio como exemplo
})();
