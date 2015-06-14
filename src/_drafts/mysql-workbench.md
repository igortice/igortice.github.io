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

{% highlight %}
  > sudo service mysql status
{% endhighlight %}
