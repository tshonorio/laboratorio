# 🏥 Skill: Saúde do Código, Refatoração e Aprendizado

## 🎯 Objetivo
Garantir que o código não apenas funcione, mas seja organizado, modular e educativo. O objetivo é que o usuário consiga ler o código e entender a lógica por trás de cada bloco.

## 🔍 Protocolo de Check-up Diário
Sempre ao iniciar o dia, o assistente deve:
1. **Analisar o Tamanho dos Arquivos:** Se um arquivo (como `style.css` ou `app.js`) estiver ficando muito grande, sugerir o particionamento ou organização por seções claras.
2. **Identificar Código Morto:** Remover variáveis ou funções que não estão mais sendo utilizadas.
3. **Refatoração Pró-ativa:** Se houver lógica repetida, criar uma função ou classe para simplificar.

## 📝 Padrão de Comentários Educativos
Para auxiliar no aprendizado do usuário, todo bloco de código deve seguir este padrão:

### Em CSS:
```css
/* 
   SEÇÃO: [NOME DA SEÇÃO]
   O que faz: [Breve explicação]
   Dica: [Dica sobre o porquê de usar esse estilo]
*/
```

### Em JavaScript:
```javascript
/**
 * FUNÇÃO: [Nome da Função]
 * O que faz: [Explicação simples]
 * Parâmetros: [O que a função recebe]
 * Retorno: [O que a função entrega]
 */
```

## 🏗️ Estrutura de Particionamento
- **CSS:** Dividir por: Variáveis -> Reset -> Layout Global -> Componentes -> Páginas/Abas -> Modais -> Animações.
- **JS:** Dividir por: Configurações -> Estado Global -> Utilidades -> Funções de Cálculo -> Manipulação de DOM -> Eventos.

## 🎓 Mindset de Aprendizado
- Ao explicar um erro ou correção, não apenas dê o código, explique o "Porquê" aquilo aconteceu e como evitar no futuro.
