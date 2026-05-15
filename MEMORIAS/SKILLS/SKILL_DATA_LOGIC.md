# 📊 Skill: Lógica de Dados & Regras de Negócio

## 🎯 Objetivo
Padronizar os cálculos matemáticos e a gestão de estoque do sistema para evitar falhas de precificação ou falta de material.

## 📦 Gestão de Estoque (Regra dos 30%)
- Todo material (Filamento, Produto ou Item Extra) deve disparar um alerta visual na Home quando o estoque atual for **≤ 30%** do valor inicial cadastrado.
- O sistema deve salvar o `estoque_inicial` no momento do primeiro cadastro ou edição.

## 🖼️ Gestão de Imagens (Cloud-First)
- Priorizar o uso de URLs externas (Google Drive) para economizar armazenamento Git.
- **Sanitização de Link:** Sempre converter links de compartilhamento do Drive para o formato direto: `https://drive.google.com/uc?export=view&id=FILE_ID`.
- Imagens locais via `FileReader` (Base64) devem ser tratadas como secundárias devido ao limite do `localStorage`.

## 💰 Regras de Precificação
- **Markup:** Manter multiplicadores entre **2.5x e 3.0x** sobre o custo total.
- **Cálculo de Tempo:** Incluir depreciação da impressora e custo de energia (kWh) em todos os cálculos automáticos de projeto.
- **Taxas de Venda:** Aplicar logicamente as taxas de ML (Clássico/Premium), Shopee e Venda Direta conforme definido no `app.js`.
- **Custos Base:** Devem incluir energia (kWh), amortização da máquina, taxa de falhas (15%) e embalagem.
