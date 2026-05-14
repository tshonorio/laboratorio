# 🧠 Memória de Contexto do Projeto: Calculadora 3D Pro

Este arquivo serve para manter a sinergia entre o usuário (tshonorio) e o assistente IA (Antigravity). Ele deve ser lido no início de cada sessão para retomar o progresso e manter as diretrizes de design.

---

## 📍 ONDE PARAMOS (STATUS ATUAL)
> **Última Sessão:** 14/05/2026
> **Resumo:** Removemos todo o legado em Python e migramos 100% do foco para o Web App PWA. Organizamos os repositórios (`sistema` para produção e `laboratorio` para testes diários). O ambiente está limpo, configurado e o código já foi enviado para o `laboratorio`.
> **Próxima Ação:** Definir quais serão as novas funcionalidades do Web App (ex: melhorias na UI, novos cálculos ou ajustes no código JS existente) e iniciar o desenvolvimento.

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
*   [x] **Reestruturação do Projeto:** Decisão de manter foco exclusivo no Web App PWA, abandonando o desenvolvimento Python.
*   [x] **Limpeza de Arquivos Python:** Remoção de arquivos `.py`, `.bat`, `.spec` e pastas de build. Backup salvo em `backup_python_14052026.zip`.
*   [x] **Limpeza da pasta web_app:** Pasta duplicada excluída para manter o `index.html` completo na raiz do projeto.
*   [x] **Configuração de Repositórios:** Definição das URLs para `sistema` (Produção) e `laboratorio` (Testes).
*   [x] **Sincronização:** Git reconfigurado para apontar para o `laboratorio` e push inicial realizado com sucesso.
*   [▶️] **Sessão iniciada — trabalhando no laboratorio.**
*   [ ] **Próximo Passo:** Configurar e evoluir o Web App com novas funcionalidades.

### 📌 Histórico Anterior
*   [x] Desenvolvimento do Web App com design premium e modo escuro.
*   [x] Configuração de deploy no GitHub Pages.
*   [x] Definição de estratégia de precificação e lucro líquido.

---

## 📝 Notas de Sinergia
*   O usuário prefere designs que causem impacto visual ("WOW").
*   A precificação deve ser justa, mas garantir o lucro sobre todos os custos ocultos.
*   Manter a simplicidade de uso mesmo com cálculos complexos por trás.
*   **Foco exclusivo:** Web App PWA — sem desenvolvimento Python.
