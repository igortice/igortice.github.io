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

Nesse Post vamos ver como usar o MySql Workbench. Vamos entender para que ele serve e como utilizá-lo para gerenciar
nossos projetos com base de dados MySql.

Veremos sua parte administrativa para DBAs, que nós desenvolvedores podemos usar perfeitamente para gerenciar bancos
locais e remotos, e sua parte de modelagem visual, que pode ser utilizado tanto para importar quanto exportar um
projeto, bem como para manipular um banco específico.


<!--more-->

## O que vamos fazer:

* Instalar o MySql Workbench.
* Configurar o Workbench com nossa conexão local do MySql.
* Gerenciar um usuário a partir do Workbench.
* Criar um Banco de Dados a partir da Modelagem do Workbench.
* Gerar uma Modelagem de um Banco de Dados para o Workbench.

## O que vamos precisar:

* Ubuntu 12.04 ou 14.04(por fins didáticos, mas os procedimentos nesse sistema operacional são similares no Windows e no Mac OS X).
* Do pacote do MySql.
* Do Workbench.


## Passo 1 – Sobre Workbench:

<div class="message">
  <strong>Sobre:</strong>
  <p>
    MySql Workbench é uma ferramenta visual unificada para Arquitetos de Banco de Dados, Programadores e DBAs.
    MySql Workbench fornece modelagem de dados, desenvolvimento de SQL e ferramentas de administração abrangentes para
    administração e configuração do usuário do servidor, backup e muito mais. MySql Workbench está disponível no Windows,
    Linux e Mac OS X.
  </p>

  <strong>Projeto:</strong>
  <p>
    MySql Workbench permite que um DBA , Desenvolvedor ou Arquiteto de Dados possa projetar visualmente o modelo,
    gerar e gerenciar  um Bancos de Dados . Ele inclui tudo o que um modelador de dados necessita para a criação de
    modelos complexos , para a criação e engenharia reversa, e, também, oferece recursos essenciais para a realização
    de gestão de mudanças e tarefas de documentação.
  </p>

  <strong>Desenvolvedor:</strong>
  <p>
    MySQL Workbench oferece ferramentas visuais para criar, executar e otimizar consultas SQL. O Editor de SQL fornece
    realce de cores de sintaxe, auto-completar, reutilização de trechos SQL e história execução de SQL. O painel de
    conexões de Banco de Dados permite aos desenvolvedores gerenciar facilmente as conexões com Banco de Dados .
    O Navegador de Objetos oferece acesso instantâneo a esquema de Banco de Dados e Objetos.
  </p>

  <strong>Administrador:</strong>
  <p>
    MySql Workbench fornece um console visual para administrar facilmente ambientes MySql e obter uma melhor
    visibilidade em bases de dados . Desenvolvedores e DBAs podem usar as ferramentas visuais para configuração de
    servidores, administração de usuários, realização de backups, inspecionamento de dados de auditoria.
  </p>

  <strong>Migração de Banco de Dados:</strong>
  <p>
    MySql Workbench agora oferece um fácil solução completa para usar a migração de bancos como: Microsoft SQL Server,
    Sybase ASE , PostgreSQL , e outras tabelas RDBMS , objetos e dados para MySql . Desenvolvedores e DBAs podem
    rapidamente e facilmente converter aplicações existentes para serem executados no MySQL tanto no Windows como em
    outras plataformas. A migração também suporta a migração de versões anteriores do MySQL com os últimos lançamentos.
  </p>

  <small class="right">Descrição traduzida da documentação do MySql Workbench.</small>
</div>

## Passo 2 – Instalar o MySql Workbench:

Como nosso foco para esse tutorial é o MySql Workbench, precisamos do MySql rodando no nosso sistema operacional.
Vamos usar o Ubuntu 12.04(homologado também para o Ubuntu 14.04) para fins didáticos, então, no terminal, digite o
seguinte comando para verificar se você já possui o MySql como um serviço do Ubuntu:

```
> sudo service mysql status
```


<ul class="clearing-thumbs small-9 small-centered columns" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/mysqlworkbench_img_01.png"><img src="/assets/images/post_01/mysqlworkbench_img_01.png"></a></li>
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
  <li><a class="not-animsition" href="/assets/images/post_01/mysqlworkbench_img_02.png"><img src="/assets/images/post_01/mysqlworkbench_img_02.png"></a></li>
</ul>


Para finalizar, vamos rodar um simples script de segurança para fazer algumas configurações básicas no MySql(perceba que
na imagem acima existe a sugestão do comando abaixo):

```
> sudo mysql_secure_installation
```

Veja as opções que eu geralmente escolho:


<ul class="clearing-thumbs small-9 small-centered columns" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/mysqlworkbench_img_03.png"><img src="/assets/images/post_01/mysqlworkbench_img_03.png"></a></li>
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
  <li><a class="not-animsition" href="/assets/images/post_01/mysqlworkbench_img_04.png"><img data-caption="logar como root no mysql" src="/assets/images/post_01/mysqlworkbench_img_04.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/mysqlworkbench_img_05.png"><img data-caption="visualizar banco mysql" src="/assets/images/post_01/mysqlworkbench_img_05.png"></a></li>
  <li><a class="not-animsition" href="/assets/images/post_01/mysqlworkbench_img_06.png"><img data-caption="usar banco, visualizar tabelas e sair do mysql" src="/assets/images/post_01/mysqlworkbench_img_06.png"></a></li>
</ul>

Agora você pode desenvolver qualquer projeto com MySql utilizado o terminal, mas como o foco desse tutorial não é esse,
mas sim o MySql Wokbench vamos instalar ele.

Para trabalhar com o MySql Workbench precisamos baixar e instalar ele. Como estamos usando o Sistema Operacional
Ubuntu 12.04, como combinado para esse Post, precisamos apenas nos preocupar se vamos baixar a versão 32 ou 64 bits.
Clique aqui para baixar uma versão para você(lembrando que para baixar essa ferramenta, você precisa ter uma conta na
Oracle, não se preocupe, pois isso é free).

Como você baixa um arquivo do tipo .deb, então só precisamos dar um duplo clique nesse arquivo para instalá-lo. Depois
de sua instalação, basta digitar mysql na busca do Ubuntu que ele estará visível para uso:

<ul class="clearing-thumbs small-9 small-centered columns" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/mysqlworkbench_img_07.png"><img src="/assets/images/post_01/mysqlworkbench_img_07.png"></a></li>
</ul>

Veja o que apareceu para mim após clicar no Workbench:

<ul class="clearing-thumbs small-9 small-centered columns" data-clearing>
  <li><a class="not-animsition" href="/assets/images/post_01/mysqlworkbench_img_08.png"><img src="/assets/images/post_01/mysqlworkbench_img_08.png"></a></li>
</ul>

Pela descrição que traduzi do MySql Workbench ele oferece vários recursos, mas vou abordar dois que, com eles,
conseguimos fazer tudo a nível de Banco de Dados para um projeto. São eles:

<div class="message">
  <strong>MySql Connections:</strong>
  <p>
    Com esse recurso podemos fazer o Workbench tanto gerenciar o MySql local como de um Servidor remoto. Esse blog
    que vocês estão lendo usa uma base de dados MySql e seu gerenciamento é feito através dele. Com ele gerencio os
    usuários do banco, monitoro as conexões com o banco, o trafego de dados, enfim, tenho uma ferramenta administrativa
    de DBA na minhas mãos.
  </p>

  <strong>Models:</strong>
  <p>
    Esse recurso é um dos melhores que eu encontrei até hoje em uma ferramenta de modelagem visual, e olhe que já
    trabalhei com alguns bancos como Oracle, Postgres, MongoDb, SQLite. O que estou querendo mostrar aqui é que,
    para mim, todos esses bancos citados são ótimos e cada um com suas qualidades e defeitos, mas um ferramenta free,
    de modelagem visual, que tanto exporta como importa um projeto com vários recursos, não encontrei nesses outros
    bancos citados(digo modelagem visual free).
  </p>
</div>

Pronto, agora temos o Workbench funcional para nossas necessidades.
