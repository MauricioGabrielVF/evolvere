# Evolvere — passo a passo completo

Este guia leva você do zero até o Evolvere instalado no Samsung, com ícone na tela inicial.
Você vai precisar de: computador com internet, conta no GitHub (gratuita) e o celular Samsung com Chrome.

---

## PARTE 1 — Criar sua conta no GitHub (só se ainda não tiver)

1. Abra o navegador no computador e acesse **github.com**.
2. Clique em **Sign up** (Cadastrar).
3. Digite seu e-mail, crie uma senha e um nome de usuário (ex: `chefe-evolvere`).
   - Esse nome de usuário vai fazer parte do endereço do seu app, então escolha algo simples, sem espaços.
4. Confirme o e-mail: o GitHub manda um código, digite ele na tela.
5. Pronto, você já está logado.

**Se aparecer um quebra-cabeça ou pedido de "verificar que você é humano":** resolva normalmente, é só segurança.

---

## PARTE 2 — Criar o repositório (a "pasta" do site no GitHub)

Um **repositório** é uma pasta online onde os arquivos do site ficam guardados.

1. Logado no GitHub, no canto **superior direito** da tela, clique no botão **+**.
2. No menu que abrir, clique em **New repository** (Novo repositório).
3. Preencha assim:
   - **Repository name** (nome do repositório): `evolvere` — exatamente assim, minúsculo, sem acento e sem espaço.
   - **Description**: pode deixar em branco.
   - Marque a opção **Public** (pública). É ela que deixa o site funcionar de graça.
   - **NÃO** marque "Add a README file" nem outras opções de baixo. Deixe tudo desmarcado.
4. Clique no botão verde **Create repository**.
5. Você vai cair numa página com várias instruções em código. **Ignore elas.**

---

## PARTE 3 — Enviar os arquivos do Evolvere

1. Na mesma página, procure o link azul escrito **uploading an existing file** (no meio do texto "...or create a new repository on the command line..."). Clique nele.
   - Se você já saiu dessa página, dá para chegar do mesmo jeito: no seu repositório `evolvere`, clique em **Add file** → **Upload files**.
2. **Descompacte o arquivo `evolvere_web.zip`** no computador (botão direito → **Extrair tudo**). Vai aparecer uma pasta `evolvere-web` com dentro:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icons` (uma pasta com 5 imagens)
   - `LEIA-ME.md` (este arquivo, pode não subir)
3. Abra a pasta `evolvere-web` no computador.
4. Selecione **todos** os arquivos e a pasta `icons` e **arraste** tudo para a área cinza do GitHub, onde está escrito "Drag files here to add them to your repository".
   - Aguarde a barra de envio terminar. Vai aparecer a lista de arquivos com um ✓.
   - **Confira**: precisam aparecer `index.html`, `manifest.json`, `sw.js` e `icons`.
5. Role a página até o final. Em **Commit changes**, deixe a mensagem padrão.
6. Clique no botão verde **Commit changes**.

**Se o GitHub disser que o arquivo é grande demais:** o Evolvere é leve (cerca de 500 KB), então isso não deve acontecer. Se acontecer, me avise.

---

## PARTE 4 — Ligar o site (GitHub Pages)

Isso transforma a pasta em um endereço de internet.

1. Dentro do repositório `evolvere`, clique na aba **Settings** (Configurações), no alto da página. Ela fica à direita, perto de Insights.
   - Se não aparecer, confira se você está dentro do repositório e não na sua página de perfil.
2. No menu da **esquerda**, role até a seção **Code and automation** e clique em **Pages**.
3. Em **Build and deployment**, no campo **Source**, deixe **Deploy from a branch**.
4. Em **Branch**, abra a lista e escolha **main**. Ao lado, escolha **/ (root)**.
5. Clique em **Save**.
6. A página vai recarregar. Espere **1 a 3 minutos**.
7. Atualize a página (F5). No topo vai aparecer uma caixa verde com o endereço:
   `https://SEU-USUARIO.github.io/evolvere/`
   Copie esse endereço.

**Se ainda não aparecer o endereço depois de 5 minutos:** clique na aba **Actions** do repositório. Se houver um item com erro vermelho, tire um print e me mande.

---

## PARTE 5 — Testar no computador (opcional, mas recomendado)

1. Abra o endereço copiado em uma aba do navegador.
2. Deve aparecer a tela de abertura do Evolvere com a sua logo.
3. Toque em **Agora não** e veja o app funcionando.

---

## PARTE 6 — Instalar no Samsung como um app

Aqui o celular vai tratar o site como um aplicativo de verdade.

1. No celular Samsung, abra o app **Chrome** (o ícone de bolinha colorida).
   - **Importante:** use o Chrome, não o navegador Samsung Internet. O Samsung Internet até instala, mas o Chrome é mais confiável para esse tipo de app.
2. Na barra de endereço, digite ou cole o endereço: `https://SEU-USUARIO.github.io/evolvere/` e aperte **Ir** no teclado.
3. Aguarde a página carregar com a tela de abertura do Evolvere.
4. Toque nos **três pontinhos** ⋮ no canto **superior direito** do Chrome.
5. No menu, procure **Instalar app** (ou **Adicionar à tela inicial**).
   - Se aparecer **Adicionar à tela inicial**, toque nele. Na janela que abrir, confirme em **Adicionar** ou **Instalar**.
6. O ícone do Evolvere aparece na sua tela inicial. Toque nele: ele abre em tela cheia, sem a barra do navegador, como qualquer app.

**Se não aparecer nenhuma opção de instalar:** feche o Chrome, abra de novo, entre no endereço e tente de novo. Se continuar, é possível que o Chrome esteja desatualizado: vá na Play Store, procure **Google Chrome** e toque em **Atualizar**.

---

## PARTE 7 — Ativar os lembretes

1. Ao abrir o app pela primeira vez, aparece a tela de abertura com a pergunta sobre lembretes.
2. Toque em **Ativar lembretes**.
3. O celular vai perguntar se pode enviar notificações. Toque em **Permitir**.
4. Se você tocou em **Agora não** ou **Bloquear** por engano:
   - Abra o app → aba **Relatório** → toque em **Ativar lembretes**.
   - Se o botão não funcionar, vá em **Configurações do celular → Apps → Chrome → Notificações** e ative.

**Observação:** os lembretes chegam ao longo do dia, mas o horário exato é decidido pelo Chrome, então não é garantido que caiam certinho de 8 em 8 horas.

---

## PARTE 8 — Atualizar o app depois

Quando eu te mandar uma versão nova:
1. Descompacte o novo `evolvere_web.zip`.
2. No repositório do GitHub, clique em **Add file** → **Upload files**.
3. Arraste os arquivos novos. Se aparecer a pergunta "substituir?", confirme.
4. Clique em **Commit changes**.
5. Espere 1 a 2 minutos e feche e abra o app no celular. Ele se atualiza sozinho.

---

## PARTE 9 — Seus dados (importante)

- Os registros ficam **salvos só no celular**. Não existe conta na nuvem.
- Por isso, **faça backup de vez em quando**: abra **Relatório** → **Salvar backup**. Vai baixar um arquivo `.json`. Guarde esse arquivo (no Google Drive, por exemplo).
- Se trocar de celular, desinstalar o app ou limpar os dados do Chrome, abra o app → **Relatório** → **Restaurar backup** e escolha o arquivo guardado.

---

## PARTE 10 — Importar o extrato do banco

O Evolvere não se conecta direto no banco (isso exige autorização do Banco Central). Em vez disso, você baixa o extrato do banco e importa no app. É seguro: você não digita senha de banco em lugar nenhum.

**1. Baixar o extrato no banco**
- Procure no app ou no site do banco por **Extrato** → **Exportar**, **Baixar** ou **Compartilhar extrato**.
- Escolha o formato **OFX** (melhor opção, traz até o horário em alguns bancos). Se não tiver, escolha **CSV** ou **Excel/planilha em CSV**.
- Escolha o período (ex: último mês) e salve o arquivo no celular (pasta Downloads).
- Cada banco coloca essa opção num lugar diferente. Se não achar, pesquise no Google: "como exportar extrato OFX [nome do banco]".

**2. Importar no Evolvere**
1. Abra o app → aba **Extrato** → botão **Importar extrato** (ou aba **Relatório** → **Importar extrato do banco**).
2. Escolha o arquivo que você baixou.
3. Vai abrir a tela **Conferir extrato**. Nada é salvo antes de você confirmar.

**3. Conferir antes de salvar**
- No topo aparecem o total de **entradas** e **saídas** do arquivo. Compare com o extrato do banco: se bater, nada ficou de fora.
- Cada transação tem uma marca:
  - **Sem aviso** = nova, já vem marcada ✓.
  - **Borda vermelha "Duplicado"** = você já tinha registrado (ou importado antes). Vem desmarcada.
  - **Borda amarela "Confira"** = pode ser repetida (mesmo valor e data parecida), pagamento de fatura ou resgate de investimento. Vem desmarcada, você decide.
- Toque no quadradinho para marcar/desmarcar. Dá para trocar o tipo, a categoria e marcar **Imbecil** ali mesmo.
- Se o arquivo for de **fatura de cartão** e as compras aparecerem como ganho (azul), toque em **Inverter entradas e saídas**.
- Toque em **Importar** no final.

**Dica:** quando você corrige a categoria de algo (ex: "Padaria do Zé" → Alimentação), o Evolvere aprende e acerta sozinho nas próximas vezes.

---

## PARTE 11 — Subir esta versão (login + chat)

Esta versão tem **2 arquivos novos** (`app.js` e `worker.js`) e **3 alterados** (`index.html`, `sw.js`, `LEIA-ME.md`).

1. No GitHub, abra o repositório `evolvere` → **Add file** → **Upload files**.
2. Arraste `index.html`, `app.js`, `sw.js` e `LEIA-ME.md`.
   - **Não suba o `worker.js` no GitHub.** Ele vai para a Cloudflare (Parte 13).
3. **Commit changes**. Espere 2 minutos.
4. No celular, feche o app e abra de novo. Se ainda aparecer a versão antiga, feche e abra mais uma vez.

---

## PARTE 12 — Criar seu acesso (e-mail e senha)

1. Ao abrir, aparece a tela **Crie seu acesso**.
2. Digite seu e-mail e uma senha **forte**: 10 ou mais caracteres, com letra maiúscula, minúscula, número e símbolo.
   - Use uma senha **diferente** da do seu Gmail.
3. Repita a senha e toque em **Criar acesso**.
4. Se você já tinha dados no app, eles são mantidos e passam a ficar trancados com essa senha.

**Como a segurança funciona:**
- Seus dados ficam **criptografados** no celular. Sem a senha, ninguém consegue ler, nem quem pegar o celular, nem quem abrir o código no GitHub.
- A senha **não fica salva em lugar nenhum**, nem no código. Ela só serve para destrancar os dados.
- Errou a senha 5 vezes? O app faz você esperar antes de tentar de novo.
- O app **bloqueia sozinho** depois de 3 minutos fora dele.
- O backup agora também sai **criptografado**: para restaurar, você precisa da senha que usava quando fez o backup.

⚠️ **Não existe "recuperar senha".** Como só você tem a chave, se esquecer a senha os dados não abrem. Guarde a senha num lugar seguro e faça backup de vez em quando.

Para trocar a senha: **Relatório → Segurança → Trocar senha**.

---

## PARTE 13 — Usar o chat

1. Na tela inicial, toque em **Chat** (canto de cima).
2. Escreva do jeito que você fala, sempre com o valor:
   - `gastei 32,50 no ifood`
   - `uber 18 ontem`
   - `recebi 3500 de salário`
   - `investi 500 no tesouro`
   - `camiseta 120 imbecil` (já marca como gasto imbecil)
   - `mercado 87 dia 5 às 19h`
   - Várias de uma vez: `uber 18; almoço 25`
3. Ele responde **Anotado ✓** mostrando como registrou. Se algo saiu errado, toque em **Desfazer**.
4. Perguntas que ele responde: **saldo**, **gastos**, **imbecis**, **desfazer**.

Isso funciona **sem internet e sem custo**: o próprio app entende a frase.

### IA gratuita (opcional), para frases mais livres
Sem a IA, o chat precisa de uma frase com valor. Com a IA, ele entende coisas como "paguei a conta de luz, deu cento e vinte".

1. No computador, acesse **aistudio.google.com** e entre com sua conta Google.
2. Clique em **Get API key** → **Create API key**. Copie a chave.
3. **Proteja a chave:** clique na chave → restrinja para "Sites da Web" e coloque `https://SEU-USUARIO.github.io/*`. Assim ela só funciona no seu app.
4. No app: **Relatório → Assistente e WhatsApp** → cole em **Chave da API Gemini** → **Salvar conexões**.
5. Quando a IA entende algo, ela **pergunta antes de salvar** (botões Salvar / Descartar).

**Sobre privacidade:** no plano gratuito, o Google pode usar o texto das mensagens que vão para a IA para melhorar os modelos dele. Só as frases que o chat não entendeu sozinho são enviadas, nunca o resto dos seus dados. Se não quiser isso, não coloque a chave: o chat continua funcionando.

---

## PARTE 14 — Registrar pelo WhatsApp (opcional, mais trabalhoso)

Um site no GitHub não consegue receber mensagens do WhatsApp sozinho. Por isso existe a **ponte**: um pequeno programa grátis na Cloudflare que recebe suas mensagens e guarda até o app buscar.

**Como fica no dia a dia:** você manda "gastei 20 no lanche" para o número do Evolvere no WhatsApp, ele responde "Anotado ✓", e quando você abre o app o gasto aparece.

**Reserve uns 40 minutos.** Você vai precisar de: conta no Facebook/Meta, conta na Cloudflare (grátis) e o arquivo `worker.js`.

### 14.1 — Criar o app do WhatsApp na Meta
1. Acesse **developers.facebook.com** → entre com seu Facebook → **Meus apps** → **Criar app**.
2. Escolha o caso de uso de **WhatsApp** (ou tipo **Empresa** e depois adicione o produto **WhatsApp**). Siga as telas até criar.
3. No menu da esquerda: **WhatsApp → Configuração da API** (API Setup). Lá você vê:
   - Um **número de teste** da Meta (é para esse número que você vai mandar as mensagens). Salve ele nos contatos do celular.
   - O **ID do número de telefone** (Phone number ID). **Anote.**
   - Em **Para** (To), adicione o **seu número** e confirme com o código que chega no WhatsApp.
4. **Chave secreta do app:** menu **Configurações do app → Básico** → **Chave secreta do app** → Mostrar. **Anote.**
5. **Token permanente** (o token que aparece na tela de API expira em 24 horas):
   - Acesse **business.facebook.com** → **Configurações** → **Usuários do sistema** → **Adicionar** (função Administrador).
   - Clique no usuário → **Atribuir ativos** → escolha seu app → controle total.
   - **Gerar token** → escolha o app → marque `whatsapp_business_messaging` e `whatsapp_business_management` → validade **Nunca** → Gerar. **Anote** (só aparece uma vez).

As telas da Meta mudam de vez em quando. Se algum nome estiver diferente, tire um print e me mande.

### 14.2 — Criar a ponte na Cloudflare
1. Acesse **dash.cloudflare.com** e crie uma conta grátis.
2. Menu **Storage & Databases → KV** → **Create** → nome `evolvere-inbox` → Create.
3. Menu **Workers & Pages → Create → Worker** → nome `evolvere-whatsapp` → **Deploy**.
4. Clique em **Edit code**, apague tudo, cole o conteúdo do arquivo `worker.js` → **Deploy**.
5. Volte ao worker → **Settings → Bindings → Add → KV namespace**: nome da variável `INBOX`, escolha `evolvere-inbox` → Save.
6. **Settings → Variables and Secrets → Add**, escolha o tipo **Secret** para cada um:

| Nome | O que colocar |
|---|---|
| `VERIFY_TOKEN` | Uma palavra-senha que você inventa (ex: `evolvere-verifica-8273`) |
| `APP_SECRET` | A chave secreta do app (14.1, passo 4) |
| `WA_TOKEN` | O token permanente (14.1, passo 5) |
| `PHONE_NUMBER_ID` | O ID do número de telefone (14.1, passo 3) |
| `ALLOWED_NUMBER` | Seu número só com dígitos, com e sem o 9: `5541999998888,554199998888` |
| `PULL_TOKEN` | No app: **Relatório → Assistente → Gerar** (copia sozinho) e cole aqui |
| `ALLOWED_ORIGIN` | `https://SEU-USUARIO.github.io` (sem barra no final) |

7. Copie o endereço do worker, algo como `https://evolvere-whatsapp.SEU-NOME.workers.dev`.

**Por que o número aparece duas vezes?** O WhatsApp às vezes manda números do Brasil sem o 9 da frente. Com os dois, funciona nos dois casos.

### 14.3 — Ligar a Meta na ponte
1. Na Meta: **WhatsApp → Configuração** (Configuration) → **Webhook → Editar**.
2. **URL de retorno**: o endereço do worker + `/webhook` (ex: `https://evolvere-whatsapp.SEU-NOME.workers.dev/webhook`).
3. **Token de verificação**: o mesmo `VERIFY_TOKEN` que você inventou.
4. **Verificar e salvar**. Depois, em **Campos do webhook**, clique em **Assinar** no campo `messages`.

### 14.4 — Ligar o app na ponte
1. No app: **Relatório → Assistente e WhatsApp**.
2. **Endereço da ponte**: o endereço do worker (sem `/webhook`).
3. **Código secreto**: o mesmo `PULL_TOKEN` da Cloudflare.
4. **Salvar conexões**.
5. Mande `gastei 20 no lanche` para o número de teste no WhatsApp. Deve chegar "Anotado ✓".
6. No app, toque em **Buscar mensagens do WhatsApp**. O gasto aparece no chat e no extrato.

Depois disso, o app busca sozinho toda vez que você abre.

**Segurança da ponte:**
- Ela só aceita mensagens que vêm de verdade da Meta (confere uma assinatura digital).
- Ela só aceita mensagens do **seu** número; mensagens de qualquer outro número são ignoradas.
- Ela só entrega as mensagens para quem tem o código secreto.
- As mensagens são apagadas da ponte assim que o app pega (ou depois de 30 dias).

**Custos:** Cloudflare Workers e KV têm plano gratuito que sobra para uso pessoal. Na Meta, responder mensagens que você mandou (dentro de 24 horas) não é cobrado, e o número de teste é gratuito. Os planos e regras da Meta mudam, então confira no painel se aparecer qualquer aviso de cobrança.

---

## Novidades desta versão

- **Gráfico "Para onde seu dinheiro foi"** na tela inicial: mostra os destinos (Moradia, Mercado, Alimentação…) e quanto foi para investimentos. A visão antiga (ganhos x gastos x investimentos) continua no botão **Visão geral**.
- **Aba Planejar** (antiga Fixos):
  - **Limites de gastos**: ex. R$ 600 em Alimentação. O app avisa quando chegar em 80% (você escolhe) e mostra quando estourar.
  - **Metas**: ex. Viagem R$ 2.000 até junho. Mostra quanto falta e quanto guardar por mês.
  - **Fixos e recorrentes**: igual antes.
- **Contas dos próximos 7 dias** na tela inicial, a partir dos seus fixos.
- **Horário** em cada registro.

---

## Resolução rápida de problemas

| O que aconteceu | O que fazer |
|---|---|
| A página do GitHub Pages dá erro 404 | Espere mais 5 min. Confira se a branch é `main` e a pasta é `/ (root)` |
| O app abre com tela branca | Atualize a página (puxe para baixo no Chrome) |
| Não aparece "Instalar app" | Use o Chrome, não outro navegador, e confirme que está em `https://` |
| Não chegam notificações | Configurações do celular → Apps → Chrome → Notificações → ativar |
| O extrato não abre / "Não achei transações" | Baixe de novo em OFX. Se só tiver PDF, o app não consegue ler: peça CSV ou OFX |
| Esqueci a senha | Não tem como recuperar. Em "Esqueci a senha" você apaga tudo e restaura um backup (com a senha da época do backup) |
| WhatsApp não responde "Anotado" | Confira o webhook (14.3), o `ALLOWED_NUMBER` com e sem o 9 e se o campo `messages` está assinado |
| App diz "Não consegui falar com a ponte" | Confira o endereço (sem `/webhook`) e se o código secreto é igual nos dois lugares |
| Perdi os dados | Só se não tiver backup. Por isso faça o backup periodicamente |
