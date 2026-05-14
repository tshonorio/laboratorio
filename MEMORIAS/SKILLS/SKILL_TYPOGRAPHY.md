# 🔡 Skill: Gestão de Tipografia e Escalonamento

## 🎯 Objetivo
Manter a consistência visual usando a fonte **Plus Jakarta Sans** e garantir que o texto seja legível e bem diagramado em todos os tamanhos de tela (especialmente Poco X7 Pro).

## 🔠 Especificações da Fonte
- **Fonte Principal:** `Plus Jakarta Sans`, sans-serif.
- **Pesos Utilizados:**
  - 400 (Regular): Para textos de corpo e descrições.
  - 600 (Semi-Bold): Para rótulos de campos e botões.
  - 800 (Extra-Bold): Para títulos de seções e valores monetários.

## 📏 Regras de Escalonamento (Responsive Typography)
- **Base:** `16px`.
- **Títulos (H1):** `clamp(1.8rem, 5vw, 2.5rem)` para evitar quebra de linha em telas pequenas.
- **Subtítulos (H2):** `1.25rem` com `letter-spacing: -0.5px`.
- **Inputs/Buttons:** `1rem`.
- **Legendas (Small):** `0.8rem`.

## 🛠️ Tratamento de Problemas
1. **Quebra de Linha:** Usar `white-space: nowrap` e `text-overflow: ellipsis` em nomes de produtos no catálogo.
2. **Contraste:** Garantir que o peso 400 tenha `opacity: 0.9` no mínimo para leitura em fundos de vidro.
3. **Renderização:** Utilizar `-webkit-font-smoothing: antialiased` para garantir que as curvas da Plus Jakarta Sans fiquem nítidas no Android/Poco.
4. **Espaçamento:** Devido à altura de linha (line-height) da Plus Jakarta Sans, aumentar o `padding-top` e `padding-bottom` de botões em 10% para manter a centralização visual.
