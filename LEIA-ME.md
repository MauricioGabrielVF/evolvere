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
| Perdi os dados | Só se não tiver backup. Por isso faça o backup periodicamente |
