# 🧠 Memória de Contexto do Projeto: Calculadora 3D Pro

Este arquivo serve para manter a sinergia entre o usuário (tshonorio) e o assistente IA (Antigravity). Ele deve ser lido no início de cada sessão para retomar o progresso e manter as diretrizes de design.

---

## 📍 ONDE PARAMOS (STATUS ATUAL)
> **Última Sessão:** 14/05/2026
> **Resumo:** Implementamos o layout responsivo completo. O app agora se adapta a Desktops (com Sidebar lateral) e Celulares (com Menu Hambúrguer no topo esquerdo). Corrigimos bugs de visibilidade dos modais e alinhamento de componentes no Poco X7 Pro.
> **Próxima Ação:** Refinar a identidade visual (ícones, cores, glassmorphism) e realizar correções finas de layout conforme o feedback do usuário.

---

## 🚀 Visão Geral
Estamos desenvolvendo um **Web App Premium (PWA)** de precificação para impressão 3D — versão mobile-friendly para consulta rápida e orçamentos, hospedada no GitHub Pages.

---

## 🎨 Identidade Visual (Design System)
*   **Tema:** Ultra Dark / Premium.
*   **Estilo:** Glassmorphism (efeito de vidro translúcido).
*   **Paleta de Cores:** 
    *   Fundo: `#020617` (Deep Blue/Black).
    *   Primária: `#3b82f6` (Electric Blue) com brilho (glow).
    *   Sucesso: `#10b981` (Emerald Green) para valores de lucro.
*   **Tipografia:** Fonte `Outfit` ou `Inter` para um visual tecnológico e limpo.

---

## 💰 Regras de Negócio e Precificação
*   **Multiplicador Base (Markup):** Recomendado entre **2.5x e 3.0x** sobre o custo total.
*   **Custos Base:** Incluem energia (kWh), amortização da máquina, taxa de falhas (15%) e embalagem.
*   **Canais de Venda:** Cálculo automático de taxas para Mercado Livre (Clássico/Premium), Shopee e Venda Direta.

---

## 🛠️ Configuração Técnica
*   **Hospedagem:** GitHub Pages na raiz do repositório principal.
*   **Arquivos Críticos:**
    *   `index.html`, `style.css`, `app.js` (Web App na raiz)

### 📦 Repositórios GitHub
| Ambiente | URL | Finalidade |
|---|---|---|
| 🟢 **Main (Produção)** | `https://github.com/tshonorio/sistema` | Versão estável publicada no GitHub Pages |
| 🧪 **Laboratório (Testes)** | `https://github.com/tshonorio/laboratorio` | Ambiente de desenvolvimento e validação |

> **Instrução:** As URLs dos repositórios estão definidas. Seguir o protocolo de trabalho abaixo.

---

## 🔄 Protocolo de Trabalho (LEIA SEMPRE AO INICIAR)

### ▶️ Início de Sessão
Ao iniciar o dia de trabalho, **registrar automaticamente** no Log de Progresso:
```
- [DATA] Sessão iniciada — trabalhando no laboratorio
```

### 🧪 Padrão: Repositório LABORATÓRIO
> **Todo comando Git gerado por padrão aponta para o repositório `laboratorio`.**
```bash
git remote set-url origin https://github.com/tshonorio/laboratorio.git
```
- Todo o desenvolvimento e testes acontecem aqui primeiro.
- Usar este remote em todos os commits e pushes do dia.

### 🟢 Exceção: Repositório SISTEMA (Produção)
> **Somente quando o usuário digitar exatamente `Git sistema`**, gerar comandos apontando para:
```bash
git remote set-url origin https://github.com/tshonorio/sistema.git
```
- Representa a versão estável aprovada para produção.
- **Nunca** usar este remote sem a solicitação explícita `Git sistema`.

---

## 📅 Log de Progresso (Última atualização: 14/05/2026)

### 📌 Sessão de 14/05/2026
*   [x] **Reestruturação do Projeto:** Foco exclusivo no Web App PWA.
*   [x] **Limpeza:** Backup e remoção de arquivos Python legado.
*   [x] **Layout Responsivo (Desktop):** Implementação de Sidebar lateral fixa e sistema de Grid para cartões em telas grandes.
*   [x] **Navegação Mobile:** Implementação do Menu Hambúrguer no canto superior esquerdo e remoção da barra inferior.
*   [x] **Correções CSS:** Ajuste de visibilidade dos modais e alinhamento do menu no Poco X7 Pro.
*   [x] **Git:** Todos os avanços commitados e enviados para o repositório `laboratorio`.
*   [ ] **Próximos Passos:** Correção do layout e definição de identidade visual (Refinamento Premium).

### 📌 Histórico Anterior
*   [x] Desenvolvimento do Web App com design premium e modo escuro.
*   [x] Configuração de deploy no GitHub Pages.
*   [x] Definição de estratégia de precificação e lucro líquido.

---

## 📝 Notas de Sinergia
*   O usuário prefere designs que causem impacto visual ("WOW").
*   Foco em responsividade real: o app deve ser perfeito em qualquer dispositivo.
*   **Identidade Visual:** Buscar um visual cada vez mais limpo, tecnológico e "Apple-like" (Premium).
*   **Foco exclusivo:** Web App PWA.
