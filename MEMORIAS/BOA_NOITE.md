# 🌙 Boa Noite! - Protocolo de Encerramento

> [!IMPORTANT]
> **PROTOCOLO DE FECHAMENTO (BOA NOITE):**
> Sempre que o usuário disser "Boa noite", o assistente **DEVE** realizar as seguintes ações antes de encerrar:
> 
> 1. **Gerar Log Detalhado:** Criar/Atualizar o arquivo `MEMORIAS/sessao_[DATA]_detalhada.md` com todos os prompts e decisões do dia.
> 2. **Atualizar Status:** Atualizar a seção "Onde Paramos" no `BOM_DIA.md`.
> 3. **Verificação de Saúde:** Garantir que todo o código do dia está comentado e particionado conforme a `SKILL_CODE_HEALTH`.
> 4. **Backup Git (Laboratório):**
>    - `git add .`
>    - `git commit -m "sessão [DATA]: finalização e backup automático"`
>    - `git push origin main` (ou branch atual no Laboratório).
> 5. **Relatório de Encerramento:** Apresentar um resumo do progresso e os próximos passos.

---

## 🏁 Check-list de Saída
- [ ] Logs gerados?
- [ ] `BOM_DIA.md` atualizado?
- [ ] Código comentado?
- [ ] Git push realizado?

---

## 📝 Resumo de Amanhã (Sugestão)
*Definido dinamicamente durante o fechamento...*
