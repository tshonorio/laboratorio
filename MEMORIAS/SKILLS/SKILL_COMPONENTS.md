# 🧱 Skill: Componentes UI Premium (Design System)

## 🎯 Objetivo
Padronizar os elementos visuais para garantir consistência "WOW" e facilitar a criação de novas telas sem repetir código CSS desnecessário.

## 💎 Design Tokens (CSS Variables)
Sempre utilizar as variáveis definidas no `:root` do `style.css`:
- `--bg-color`: Fundo principal.
- `--card-bg`: Fundo dos elementos com transparência.
- `--glass-border`: Borda sutil de vidro.
- `--primary`: Azul elétrico de destaque.

## 📦 Componentes Padronizados

### 1. Card Glassmorphism (`.glass-card`)
- **Estilo:** Fundo translúcido, borda sutil, blur de fundo.
- **Uso:** Contêineres de conteúdo, itens de lista.

### 2. Botão Premium (`.btn-premium`)
- **Estilo:** Gradiente, sombra colorida (glow), transição de escala no hover.
- **Variações:** `.btn-primary`, `.btn-success`, `.btn-danger`.

### 3. Inputs Centralizados (`.input-premium`)
- **Estilo:** Texto centralizado, fundo escuro, borda que brilha no foco.
- **Regra:** Usar `form-grid-2x2` para dados numéricos.

### 4. Modais (`.modal-content`)
- **Regra:** Max-height de 90vh, sem scroll interno se possível, centralizado.

## ✨ Micro-animações de Componente
- **Hover:** `transform: translateY(-2px)`.
- **Active (Click):** `transform: scale(0.98)`.
- **Entrance:** Opacidade de 0 para 1 com leve subida.

## 📱 Mobile-First (Poco X7 Pro)
- Todo componente deve ser testado para toque (mínimo 44px de altura).
- Espaçamento interno (padding) generoso para evitar "aperto" visual.
