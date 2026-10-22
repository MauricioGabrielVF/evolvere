# Evolvere — finanças pessoais

> Installable personal finance web app (PWA) with email/password login and an in-app chatbot that logs expenses. Built with HTML, CSS and JavaScript with AI assistance, deployed on Cloudflare Pages.

**Teste ao vivo:** https://evolvere-4hk.pages.dev/  
**Código de convite:** `convite-evolvere-2036`

## O que é

App web de finanças pessoais que pode ser instalado na tela inicial do celular. Ajuda a registrar gastos e ganhos sem precisar de planilha: dá para anotar um gasto escrevendo uma frase no chat do app.

## Funcionalidades

- Instalável no celular (PWA)
- Login por e-mail e senha
- Registro de gastos e ganhos
- Chatbot dentro do app que registra gastos

## Tecnologias

HTML · CSS · JavaScript · Service Worker · Cloudflare Pages · Cloudflare Workers (servidor de sincronização). Desenvolvido com apoio de IA.

## Como rodar

```bash
git clone https://github.com/MauricioGabrielVF/evolvere.git
cd evolvere
python -m http.server 8000
# abra http://localhost:8000
```

Para usar só no aparelho, sem sincronizar, deixe `window.EVOLVERE_API = ''` no arquivo `config.js`.

## Estrutura

```
index.html     telas do app
app.js         lógica (dados, login, chat)
config.js      endereço do servidor de sincronização
sw.js          service worker (funciona offline e permite instalar)
manifest.json  nome, cores e ícones do app instalado
icons/         ícones
```

## Status

Publicado e em uso, na 7ª versão.

## Contato

Maurício Fogaça — [LinkedIn](https://www.linkedin.com/in/mauriciog-valefogaca/) · mauriciogvalefogaca@gmail.com
