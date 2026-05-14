# 🎨 Skill: Design System Premium & UX

## 🎯 Objetivo
Garantir que toda interface criada ou modificada mantenha o padrão "WOW" (Premium) e respeite as limitações físicas e preferências do usuário (Poco X7 Pro).

## 💎 Identidade Visual
- **Estilo:** Glassmorphism (efeito de vidro).
- **Fundo:** `#020617` (Deep Night).
- **Primária:** `#3b82f6` (Electric Blue) + Glow Effect.
- **Destaque:** Gradients entre `#3b82f6` e `#0ea5e9`.
- **Tipografia:** Fonte `Outfit`, pesos 400 e 700.

## 📱 Regras de Layout Mobile (Poco X7 Pro)
- **Alinhamento:** Botão Hambúrguer sempre em `left: 0` para alinhar perfeitamente com a borda dos cards de conteúdo.
- **Contêiner:** `width: 100%` com `padding: 0 1.5rem`.
- **Navegação:** Menu lateral deslizante (Sidebar) com `backdrop-filter: blur(20px)`.

## 📝 Regras de Formulários (Modais)
- **Alinhamento:** Todos os rótulos (labels) e textos de entrada (inputs) devem ser **CENTRALIZADOS**.
- **Distribuição:** Dados numéricos (Peso, Tempo, Estoque) devem usar uma **Grade 2x2** (`form-grid-2x2`).
- **Altura:** Priorizar layouts compactos para **EVITAR barra de rolagem** (Max height ~90vh).
- **Upload:** Design minimalista (apenas escolher arquivo + input de URL).

## ✨ Micro-interações
- Hover em cartões com elevação (`translateY(-5px)`).
- Pulsação suave em alertas de estoque baixo.
- Barras de progresso em gráficos com animação de crescimento (`cubic-bezier`).
