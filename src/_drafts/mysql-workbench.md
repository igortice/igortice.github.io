---
layout: post
date: 2015-06-06
title: Usando o MySQL Workbench
permalink: /:title
categories: mysql
tags: mysql
author: igor_rocha
desc: "Usando o MySQL Workbench"
keywords: "mysql, mysql workbench, workbench, instalar mysql workbench, instalar workbench"
---

Nesse Post vamos ver como usar o *MySql Workbench*. Vamos entender para que ele serve e como utilizá-lo para gerenciar
nossos projetos com Banco de Dados MySql.

Veremos sua parte administrativa para DBAs, que nós desenvolvedores podemos usar perfeitamente para gerenciar bancos
locais e remotos, e sua parte de modelagem visual, que pode ser utilizado tanto para importar quanto exportar um
projeto, bem como para manipular um banco específico.


<!--more-->

## O que vamos fazer:

<div class="message">
  <ul class="disc">
    <li>Instalar o <em>MySql Workbench</em>.</li>
    <li>Configurar o <em>Workbench</em> com nossa conexão local do MySql.</li>
    <li>Gerenciar um usuário a partir do <em>Workbench</em>.</li>
    <li>Criar um Banco de Dados a partir da Modelagem do <em>Workbench</em>.</li>
    <li>Gerar uma Modelagem de um Banco de Dados para o <em>Workbench</em>.</li>
  </ul>
</div>


## O que vamos precisar:

<div class="message">
  <ul class="disc">
    <li>Ubuntu 12.04 ou 14.04(por fins didáticos, mas os procedimentos nesse sistema operacional são similares no Windows e no Mac OS X).</li>
    <li>Do pacote do MySql.</li>
    <li>Do <em>Workbench</em>.</li>
  </ul>
</div>


## Passo 1 – Sobre Workbench:

<div class="message">
  <strong>Sobre:</strong>
  <p>
    <em>MySql Workbench</em> é uma ferramenta visual unificada para Arquitetos de Banco de Dados, Programadores e DBAs.
    <em>MySql Workbench</em> fornece modelagem de dados, desenvolvimento de SQL e ferramentas de administração abrangentes para
    administração e configuração do usuário do servidor, backup e muito mais. <em>MySql Workbench</em> está disponível no Windows,
    Linux e Mac OS X.
  </p>

  <strong>Projeto:</strong>
  <p>
    <em>MySql Workbench</em> permite que um DBA , Desenvolvedor ou Arquiteto de Dados possa projetar visualmente o modelo,
    gerar e gerenciar  um Bancos de Dados . Ele inclui tudo o que um modelador de dados necessita para a criação de
    modelos complexos , para a criação e engenharia reversa, e, também, oferece recursos essenciais para a realização
    de gestão de mudanças e tarefas de documentação.
  </p>

  <strong>Desenvolvedor:</strong>
  <p>
    <em>MySql Workbench</em> oferece ferramentas visuais para criar, executar e otimizar consultas SQL. O Editor de SQL fornece
    realce de cores de sintaxe, auto-completar, reutilização de trechos SQL e história execução de SQL. O painel de
    conexões de Banco de Dados permite aos desenvolvedores gerenciar facilmente as conexões com Banco de Dados .
    O Navegador de Objetos oferece acesso instantâneo a esquema de Banco de Dados e Objetos.
  </p>

  <strong>Administrador:</strong>
  <p>
    <em>MySql Workbench</em> fornece um console visual para administrar facilmente ambientes MySql e obter uma melhor
    visibilidade em bases de dados . Desenvolvedores e DBAs podem usar as ferramentas visuais para configuração de
    servidores, administração de usuários, realização de backups, inspecionamento de dados de auditoria.
  </p>

  <strong>Migração de Banco de Dados:</strong>
  <p>
    <em>MySql Workbench</em> agora oferece um fácil solução completa para usar a migração de bancos como: Microsoft SQL Server,
    Sybase ASE , PostgreSQL , e outras tabelas RDBMS , objetos e dados para MySql . Desenvolvedores e DBAs podem
    rapidamente e facilmente converter aplicações existentes para serem executados no MySQL tanto no Windows como em
    outras plataformas. A migração também suporta a migração de versões anteriores do MySQL com os últimos lançamentos.
  </p>

  <small class="right">Descrição traduzida da documentação do <em>MySql Workbench</em>.</small>
</div>

## Passo 2 – Instalar o MySql Workbench:

Como nosso foco para esse tutorial é o *MySql Workbench*, precisamos do MySql rodando no nosso sistema operacional.
Vamos usar o Ubuntu 12.04(homologado também para o Ubuntu 14.04) para fins didáticos, então, no terminal, digite o
seguinte comando para verificar se você já possui o MySql como um serviço do Ubuntu:

```
> sudo service mysql status
```


<ul class="clearing-thumbs small-9 small-centered columns" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_01.png"><img src="/assets/images/post_01/img_01.png"></a></li>
</ul>


Caso sua saída seja diferente da imagem acima, então você precisa instalar o MySql. Para isso digite o comando abaixo
e quando for solicitado para uma senha do administrador para o Banco de Dados, digite uma de sua preferência(não deixe
essa senha em branco, pois poderemos ter problema depois para configurá-la).

```
> sudo apt-get install mysql-server
```


Agora inicialize a estrutura de diretórios base que o mysql necessita.

```
> sudo mysql_install_db
```


<ul class="clearing-thumbs small-9 small-centered columns" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_02.png"><img src="/assets/images/post_01/img_02.png"></a></li>
</ul>


Para finalizar, vamos rodar um simples script de segurança para fazer algumas configurações básicas no MySql(perceba que
na imagem acima existe a sugestão do comando abaixo):

```
> sudo mysql_secure_installation
```

Veja as opções que eu geralmente escolho:


<ul class="clearing-thumbs small-9 small-centered columns" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_03.png"><img src="/assets/images/post_01/img_03.png"></a></li>
</ul>


No comando acima você vai ser obrigado a digitar a senha do usuário root do MySql

Reinicie o MySql com o comando abaixo:


```
> sudo service mysql restart
```

Agora digite o seguinte comando no terminal:

```
> mysql -u root -p
```

Veja os teste que eu fiz:


<ul class="clearing-thumbs small-block-grid-3" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_04.png"><img data-caption="logar como root no mysql" src="/assets/images/post_01/img_04.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_05.png"><img data-caption="visualizar banco mysql" src="/assets/images/post_01/img_05.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_06.png"><img data-caption="usar banco, visualizar tabelas e sair do mysql" src="/assets/images/post_01/img_06.png"></a></li>
</ul>

Agora você pode desenvolver qualquer projeto com MySql utilizado o terminal, mas como o foco desse tutorial não é esse,
mas sim o MySql Wokbench vamos instalar ele.

Para trabalhar com o *MySql Workbench* precisamos baixar e instalar ele. Como estamos usando o Sistema Operacional
Ubuntu 12.04, como combinado para esse Post, precisamos apenas nos preocupar se vamos baixar a versão 32 ou 64 bits.
<a href="http://dev.mysql.com/downloads/tools/workbench" target="_blank">Clique aqui</a> para baixar uma versão para você(lembrando que para baixar essa ferramenta, você precisa ter uma conta na
Oracle, não se preocupe, pois isso é free).

Como você baixa um arquivo do tipo **.deb**, então só precisamos dar um duplo clique nesse arquivo para instalá-lo. Depois
de sua instalação, basta digitar mysql na busca do Ubuntu que ele estará visível para uso:

<ul class="clearing-thumbs small-9 small-centered columns" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_07.png"><img src="/assets/images/post_01/img_07.png"></a></li>
</ul>

Veja o que apareceu para mim após clicar no Workbench:

<ul class="clearing-thumbs small-9 small-centered columns" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_08.png"><img src="/assets/images/post_01/img_08.png"></a></li>
</ul>

Pela descrição que traduzi do *MySql Workbench* ele oferece vários recursos, mas vou abordar dois que, com eles,
conseguimos fazer tudo a nível de Banco de Dados para um projeto. São eles:

<div class="message">
  <ul class="disc">
    <li>
      <strong>MySql Connections:</strong>
      <p>
        Com esse recurso podemos fazer o *Workbench* tanto gerenciar o MySql local como de um Servidor remoto. Esse blog
        que vocês estão lendo usa uma base de dados MySql e seu gerenciamento é feito através dele. Com ele gerencio os
        usuários do banco, monitoro as conexões com o banco, o trafego de dados, enfim, tenho uma ferramenta administrativa
        de DBA na minhas mãos.
      </p>
    </li>
    
    <li>
      <strong>Models:</strong>
      <p>
        Esse recurso é um dos melhores que eu encontrei até hoje em uma ferramenta de modelagem visual, e olhe que já
        trabalhei com alguns bancos como Oracle, Postgres, MongoDb, SQLite. O que estou querendo mostrar aqui é que,
        para mim, todos esses bancos citados são ótimos e cada um com suas qualidades e defeitos, mas um ferramenta free,
        de modelagem visual, que tanto exporta como importa um projeto com vários recursos, não encontrei nesses outros
        bancos citados(digo modelagem visual free).
      </p>
    </li>
  </ul>
</div>

Pronto, agora temos o *Workbench* funcional para nossas necessidades.

## Passo 3 – Configurar o Workbench:

Agora vamos configurar o *Workbench* com o MySql local, para isso abra o *Workbench* e click na imagem do 
<kbd>+</kbd> em **MySQL Connections**. Veja nas imagens abaixo os procedimentos que eu fiz para isso:

<ul class="clearing-thumbs small-block-grid-3" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_09.png"><img data-caption="Criar conexão com MySql local. Perceba a configuração que eu fiz." src="/assets/images/post_01/img_09.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_10.png"><img data-caption="Configurar a senha de root do MySql local para o Workbench poder manipular o MySql(botão "Store in Keychain …")." src="/assets/images/post_01/img_10.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_11.png"><img data-caption="Testar conexão com dados fornecidos do MySql(botão "Test Connection")." src="/assets/images/post_01/img_11.png"></a></li>
</ul>

Um passo muito importante antes de você apertar no botão <kbd>ok</kbd> e configurar o servidor local do MySql para ser 
utilizado pelo *Workbench*. Para isso, antes de criar sua conexão local do *Workbench* com o MySql, clique no 
botão <kbd>Configure Server Management ...</kbd>. Tente repetir os passos das imagens abaixo antes de 
criar sua conexão local:

<ul class="clearing-thumbs small-block-grid-4" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_12.png"><img data-caption="iniciar configuração" src="/assets/images/post_01/img_12.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_13.png"><img data-caption="iniciar conexão" src="/assets/images/post_01/img_13.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_14.png"><img data-caption="pacote mysql" src="/assets/images/post_01/img_14.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_15.png"><img data-caption="conexão mysql" src="/assets/images/post_01/img_15.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_16.png"><img data-caption="configurar mysql" src="/assets/images/post_01/img_16.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_17.png"><img data-caption="editar conexão" src="/assets/images/post_01/img_17.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_18.png"><img data-caption="validar conexão" src="/assets/images/post_01/img_18.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_19.png"><img data-caption="arquivos mysql" src="/assets/images/post_01/img_19.png"></a></li>
</ul>

Veja o que apareceu para mim após a criação dessa conexão:

<ul class="clearing-thumbs small-9 small-centered columns" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_20.png"><img src="/assets/images/post_01/img_20.png"></a></li>
</ul>

Agora clique nessa conexão e navegue pelos recursos que temos a nossa disposição:

<ul class="clearing-thumbs small-9 small-centered columns" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_21.png"><img src="/assets/images/post_01/img_21.png"></a></li>
</ul>

Perceba que você pode gerenciar os usuários do MySql por essa tela, que você pode ver como está o trafego de 
dados, manipular seu esquema e muito mais.

Como teste, vamos criar um usuário para MySql através do *Workbench* chamado **usertestmysql**. Clique no menu 
<kbd>Users and Privileges > Add Account</kbd>. Veja como ficou minha tela para **Login** e **Administrative Rules** 
para esse usuário:

<ul class="clearing-thumbs small-block-grid-2" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_22.png"><img data-caption="criar um novo usuário" src="/assets/images/post_01/img_22.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_23.png"><img data-caption="permissões para esse usuário" src="/assets/images/post_01/img_23.png"></a></li>
</ul>

Perceba que nós criamos um usuário apenas com alguns privilégios a nível de Banco de Dados. Isso é uma boa 
prática, pois um erro muito comum, de segurança, que eu vejo nos desenvolvedores é sempre estar usando o 
usuário root do Banco de Dados. Se o banco nos fornece esses recursos de privilégios, então porque não termos 
usuários específicos com suas regras de acordo com suas necessidades.

Faça outro teste. Abra o terminal e tente logar no MySql com esse usuário que acabamos de criar:

```
> sudo mysql -u usertestmysql -p
```

## Passo 4 – Modelagem Workbench para MySql:

Vamos aproveitar um exemplo de uma modelagem que o *Workbench* fornece para gente e gerar um Banco de Dados a 
partir dele. Na página inicial do *Workbench*, clique no arquivo **sakila_full** em Models:

<ul class="clearing-thumbs small-9 small-centered columns" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_24.png"><img src="/assets/images/post_01/img_24.png"></a></li>
</ul>

Perceba que estamos com dois menus abertos no topo do *Workbench*:

<ul class="clearing-thumbs small-block-grid-2" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_25.png"><img data-caption="modelagem visual" src="/assets/images/post_01/img_25.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_26.png"><img data-caption="detalhes do model" src="/assets/images/post_01/img_26.png"></a></li>
</ul>


Não cabe a mim ensinar os conceitos em cada menu sobre as opções para se trabalhar com o MySql através do 
*Workbench*, vou passar apenas o que foi combinado para esse Post, criar um banco a partir de uma modelagem, 
então siga os passos abaixo para criar o banco para a modelagem do arquivo de exemplo do *Workbench*:

<ul class="clearing-thumbs small-block-grid-4" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_27.png"><img src="/assets/images/post_01/img_27.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_28.png"><img src="/assets/images/post_01/img_28.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_29.png"><img src="/assets/images/post_01/img_29.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_30.png"><img src="/assets/images/post_01/img_30.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_31.png"><img src="/assets/images/post_01/img_31.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_32.png"><img src="/assets/images/post_01/img_32.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_33.png"><img src="/assets/images/post_01/img_33.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_34.png"><img src="/assets/images/post_01/img_34.png"></a></li>
</ul>

Se você for na nossa conexão localhost do *Workbench* vai perceber que temos agora dois bancos, um chamado **test**, 
que não possui nada e o banco **sakila**, que acabamos de exportar:

<ul class="clearing-thumbs small-9 small-centered columns" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_35.png"><img src="/assets/images/post_01/img_35.png"></a></li>
</ul>

## Passo 5 – Banco MySql para Modelagem Workbench:

Vamos deletar o model sakila e depois importar ele a partir do Banco de Dados MySql que criamos no passo 
anterior. Para isso elimine o model sakila clicando com o botão direito do mouse em cima desse arquivo e 
crie um novo modelo a partir de uma banco já existente:

<ul class="clearing-thumbs small-block-grid-2" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_36.png"><img data-caption="modelagem visual" src="/assets/images/post_01/img_36.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_37.png"><img data-caption="detalhes do model" src="/assets/images/post_01/img_37.png"></a></li>
</ul>

Agora siga os passos das imagens abaixo:

<ul class="clearing-thumbs small-block-grid-4" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/img_38.png"><img src="/assets/images/post_01/img_38.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_39.png"><img src="/assets/images/post_01/img_39.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_40.png"><img src="/assets/images/post_01/img_40.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_41.png"><img src="/assets/images/post_01/img_41.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_42.png"><img src="/assets/images/post_01/img_42.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_43.png"><img src="/assets/images/post_01/img_43.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_44.png"><img src="/assets/images/post_01/img_44.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/img_45.png"><img src="/assets/images/post_01/img_45.png"></a></li>
</ul>

Perceba que agora temos uma modelagem a partir de uma banco existente. Perceba também que nossa modelagem 
não ficou igual ao exemplo que veio no *Workbench*. O que aconteceu foi que nós criamos nosso usuário apenas 
com algumas permissões, então, na hora de criar o banco a partir da modelagem, ele só criou o que tinha 
direito e na hora de criar uma modelagem a partir desse banco, ele gerou o que esse banco possuía para esse usuário.


## Passo 6 – Conclusão:

Pelo pouco que mostrei, dar para perceber que o *MySql Workbench* é uma ferramenta com muitos recursos e ele 
não se limita apenas ao MySql, pois ele se integra com outros bancos como o Postgres.

Eu considero o *MySql Workbench* uma ferramenta fantástica para nós desenvolvedores, então, se você não 
trabalha com essa ferramenta, passe a usá-lo, pois sua produtividade vai aumentar.
