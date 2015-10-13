---
layout: post
date: 2015-08-06
title: Tutorial Zend Framework 2
permalink: /:title
categories: php
tags: php, zend
author: igor_rocha
desc: 'Tutorial Zend Framework 2'
keywords: 'zend framework,zend framework 2,tutorial zend,tutorial zend 2,tutorial zend framework,tutorial zend framework 2,aplicação zend framework 2,quick start zend framework,quick start zend,quick start zend framework 2,zend tutorial,zend framework tutorial,zend framework 2 tutorial,linux,php,ubuntu,zend server'
---

Esse post é um preparativo para nosso tutorial básico sobre Zend Framework 2. Veremos de sua instalação a 
configuração de um projeto de uma agenda de contatos em Zend Framework 2 com Zend Server 7 e Apache 2 no 
Ubuntu 14.04 LTS com PHP 5.5.

Antes de começar o tutorial sobre o Zend Framework 2, vou ressaltar alguns pontos bastante importantes. 
Caso você consiga absorver todos os pontos abaixo, esse tutorial será perfeito para você ter uma base 
inicial no Zend Framework 2.

<!--more-->

<div class='message'>
  <p>
    Esse tutorial é  baseado na documentação do Zend Framework 2. O que vamos fazer aqui é tentar detalhar 
    e melhorar essa documentação com um simples projeto de uma agenda de contatos.
  </p>
    
  <p>
    Não se assuste se você perceber que muitos dos trechos desse tutorial é uma mera tradução do tutorial 
    do site ZF2, pois é. Como já falei, vou tentar melhorar essa documentação com minhas palavras, meu 
    ponto de vista e acrescentar ou tirar detalhes que eu acho importantes para esse tutorial.
  </p>
    
  <p>
    Recomendo que você utilize e siga fielmente todos os passos que forem mostrados nesse tutorial, 
    pois utilizaremos vários produtos da Zend Technologies para desenvolver esse projeto.
  </p>
    
  <p>
    Utilizaremos o Sistema Operacional Ubuntu 14.04 LTS com o Zend Server Free com Apache e PHP 5.5. 
    Tudo que você precisa para o desenvolvimento desse tutorial se encontra no meu blog em outros 
    posts(caso você queria saber como utilizar o Zend Server, com o Ubuntu 14.04 LTS, clique aqui).
  </p>
</div>

Por ser um tutorial muito longo, vamos dividi-lo em algumas partes. São elas:

<div class='message'>
  <ul class='disc'>
    <li><a href="#">Tutorial ZF2 parte 1 - Visão Geral</a></li>
    <li><a href="#">Tutorial ZF2 parte 2 - Requisitos Básicos</a></li>
    <li><a href="#">Tutorial ZF2 parte 3 - Sobre o Projeto</a></li>
    <li><a href="#">Tutorial ZF2 parte 4 - Instalação</a></li>
    <li><a href="#">Tutorial ZF2 parte 5 - Módulos e Configurações</a></li>
    <li><a href="#">Tutorial ZF2 parte 6 - Rotas, Controllers, Actions, Helpers e jQuery</a></li>
    <li><a href="#">Tutorial ZF2 parte 7 - DB, Models e Zend Developer Tools</a></li>
    <li><a href="#">Tutorial ZF2 parte 8 - Formulários, Validações e Filtros</a></li>
    <li><a href="#">Tutorial ZF2 parte 9 - Paginação, Busca e Listagem</a></li>
    <li><a href="#">Tutorial ZF2 parte 10 - Cache, Ajax e Recursos Bootstrap</a></li>
  </ul>
</div>
