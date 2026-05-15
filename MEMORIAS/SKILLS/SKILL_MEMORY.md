# 🧠 Skill: Gestão de Memória e Contexto

## 🎯 Objetivo
Garantir que a IA tenha continuidade perfeita entre as sessões, lembrando de todas as decisões técnicas, preferências estéticas e status do projeto.

## 📂 Estrutura de Memória
- **`BOM_DIA.md`**: O ponto de entrada da sessão. Contém o status atual e o protocolo de leitura.
- **`SKILLS/`**: Arquivos de competência específica. Atuam como as "leis" do projeto.
- **`sessao_DDMMAAAA_detalhada.md`**: Logs históricos de decisões e prompts.

## 🔄 Protocolo de Persistência
- **Início (Bom dia):** Executar leitura sequencial das Skills e Logs.
- **Fim (Boa noite):** Executar protocolo de fechamento (Logs, Status, Git Push).

## 💬 Gatilhos de Contexto
- **Gatilho de Entrada:** "Bom dia" -> Lê `BOM_DIA.md`.
- **Gatilho de Saída:** "Boa noite" -> Lê `BOA_NOITE.md` e executa backup.
