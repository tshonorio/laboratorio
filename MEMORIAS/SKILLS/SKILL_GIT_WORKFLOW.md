# 🔧 Skill: Workflow Git & Gestão de Memória

## 🎯 Objetivo
Manter o código seguro através do versionamento em dois níveis e garantir que a memória do projeto seja persistida com detalhes de prompts e decisões.

## 🧪 Gestão de Repositórios
1. **Laboratório (Default):** Todo `git push` deve ir para `https://github.com/tshonorio/laboratorio.git`.
2. **Sistema (Produção):** Apenas realizar push para `https://github.com/tshonorio/sistema.git` sob solicitação explícita "Git sistema".

## 📝 Protocolo de Memória
Após cada `git push`, o assistente DEVE:
1. Atualizar o `MEMORIAS/MEMORIA.md` com o status "Onde Paramos".
2. Criar ou atualizar um **Log Detalhado de Sessão** (`sessao_DDMMAAAA_detalhada.md`).
3. Registrar no log:
   - Os prompts originais do usuário.
   - Os problemas técnicos encontrados e como foram corrigidos.
   - Novas preferências de gosto detectadas.

## 💬 Padrão de Commits
- `feat:` para novas funcionalidades.
- `fix:` para correções de bugs.
- `style:` para mudanças puramente visuais.
- `docs:` para atualizações de memória/skills.
- `chore:` para organização de pastas.
