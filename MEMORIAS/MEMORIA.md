# 🧠 Memória de Contexto: Calculadora 3D Pro

> [!IMPORTANT]
> **INSTRUÇÃO DE INICIALIZAÇÃO (AUTO-RUN PROTOCOL):**
> Sempre que esta memória for acessada para iniciar uma nova sessão, o assistente **DEVE** seguir este caminho de leitura sequencial antes de responder:
> 1. Ler `MEMORIAS/SKILLS/SKILL_GIT_WORKFLOW.md` (Protocolo de Segurança).
> 2. Ler `MEMORIAS/SKILLS/SKILL_DESIGN_PREMIUM.md` (Padrões de UI/UX).
> 3. Ler `MEMORIAS/SKILLS/SKILL_DATA_LOGIC.md` (Regras de Cálculo/Estoque).
> 4. Ler o último log detalhado em `MEMORIAS/sessao_..._detalhada.md` (Contexto de prompts e gostos).
> 5. Resumir o progresso baseado no "Onde Paramos" abaixo.

---

## 📍 ONDE PARAMOS (STATUS ATUAL)
> **Última Sessão:** 14/05/2026 (Finalizada)
> **Resumo:** Transformação completa do Web App. Implementamos design premium com **Plus Jakarta Sans**, workflow de **Embalamento/Fechamento**, sistema de **Alertas 30%**, **Dashboard com Gráficos** e suporte a **Google Drive**.
> **Próxima Ação:** Refinar o visual dos relatórios diários e expandir as configurações de custos fixos.

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
*   **Tipografia:** Fonte **Plus Jakarta Sans** (Moderna/Premium).

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

## 🛠️ Skills Ativas (Protocolos de IA)
O assistente opera sob os seguintes protocolos salvos em `MEMORIAS/SKILLS/`:
- **`SKILL_DESIGN_PREMIUM.md`**: Regras de UI, Glassmorphism e especificações do Poco X7 Pro.
- **`SKILL_TYPOGRAPHY.md`**: Gestão da fonte **Plus Jakarta Sans** e escalonamento.
- **`SKILL_GIT_WORKFLOW.md`**: Protocolo de Commits, Repositórios e Logs.
- **`SKILL_DATA_LOGIC.md`**: Regras de estoque (30%), precificação e sanitização de Drive.

---

## 🔄 Fluxo de Trabalho (Workflow)
1. **Produção:** Configuração de material + produto.
2. **Embalagem:** Itens prontos são movidos para a aba de **Fechamento**.
3. **Fechamento:** Cálculo pro (fórmula reversa) e geração de **Relatório Diário**.

---

## 📅 Log de Progresso (Última atualização: 14/05/2026)

### 📌 Sessão de 14/05/2026 (Resumo)
*   [x] **Navegação:** Implementação de Sidebar (PC) e Hambúrguer (Mobile).
*   [x] **Imagens:** Lightbox e suporte a links do Google Drive.
*   [x] **Dashboard:** Gráfico de vendas dinâmico e Alertas Inteligentes (limite de 30%).
*   [x] **UI/UX:** Reorganização do Modal de Produtos (Grade 2x2, Centrado, Sem Scroll).
*   [x] **Sistematização:** Criação da estrutura de **Skills** para garantir consistência.
*   [x] **Histórico:** Detalhes salvos em [sessao_14052026_detalhada.md](file:///c:/Users/mlwkt500/Documents/Soft/MEMORIAS/sessao_14052026_detalhada.md).
*   [ ] **Próximos Passos:** Refinar identidade visual e expandir calculadoras.

---

## 📝 Notas de Sinergia e Preferências
*   **Impacto Visual:** O usuário prefere designs "WOW" com gráficos e brilhos.
*   **Responsividade:** Otimização específica para o **Poco X7 Pro** e alinhamento com cards.
*   **Formulários:** Preferência por **textos centralizados** e layouts em **grade (2x2)**.
*   **Compacidade:** Modais devem ser curtos para **evitar barra de rolagem**.
*   **Armazenamento:** Priorizar links externos (Google Drive) para imagens.
*   **Foco exclusivo:** Web App PWA.
