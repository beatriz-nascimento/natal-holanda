# Natal na Holanda 2026 — roteiro

Página estática, sem build e sem bibliotecas externas (só Google Fonts).

```
index.html   estrutura + estilos (tokens de cor/fonte no :root, tema claro e escuro)
app.js       lê window.ITINERARIO e desenha a página
data.js      TODO o conteúdo do roteiro — é o único arquivo a editar na maioria das mudanças
```

## Como editar

- **Mudar um passeio**: em `data.js`, ache o dia em `dias` (ids `d16` … `d27`) e edite `programa`.
  Cada item: `{ hora, titulo, texto, tags: [...], link: { rotulo, url } }`.
- **Trocar dois dias de lugar**: troque apenas o campo `data` dos dois dias (e o `id`, se quiser manter `dNN` = dia do mês).
- **Novo selo/filtro**: adicione a chave em `TAGS` no `app.js` e uma classe `.t-<chave>` com `--c`/`--cs` no `index.html`.
- **Imagem**: `imagens` recebe nomes de arquivo do Wikimedia Commons, tentados em ordem. Sem imagem válida, aparece uma capa ilustrada.
- **Reservas**: lista `reservas`; o "feito" fica salvo só no navegador de quem marcou (localStorage).
- **Pontos a confirmar**: campo `confirmar` de cada dia, mostrado em amarelo.

Link direto para um dia: adicione `#d21` (por exemplo) ao final do link da página.

## Para rodar localmente

Abra `index.html` no navegador (funciona via `file://`), ou `npx serve .`.
