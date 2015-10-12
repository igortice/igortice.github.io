---
layout: post
date: 2015-08-04
title: Gem Informante
permalink: /:title
categories: rails
tags: rails
author: igor_rocha
desc: 'Gem Informante'
keywords: 'gem,gem rails,rails gem,plugin,plugin rails,configurar rails,configurar Ruby on Rails,configuration rails application,configuration rails,informante rails,informante gem,informante gem rails,informante plugin,yaml configuration rails,yaml plugin rails,gem configurarion rails,rails,ruby'
---

É com muito prazer que eu disponibilizo minha primeira gem para comunidade de *Ruby on Rails*, **Informante**. 
Essa é uma simples gem para aplicações *Ruby on Rails* com o papel de centralizar dados de configurações em um 
único local e que possibilite o acesso a esses dados, facilmente, em qualquer ponto de uma aplicação *Ruby on Rails*.

<!--more-->

Imagine que você necessite registrar informações da sua aplicação como, por exemplo, nome do sistema, ou um 
email de acesso, ou nome da equipe de desenvolvimento ou armazenar dados de login com twitter ou facebook. 
Enfim, se você precisa armazenar dados em único ponto que não seja seu banco de dados para ser utilizado em 
qualquer ponto de uma aplicação *Ruby on Rails*, essa gem cumpre este papel perfeitamente.

Essa gem encontra-se publicada nos seguintes locais:

<div class='message'>
  <ul class='disc'>
    <li><a href='https://rubygems.org/gems/informante' target='_blank'>RubyGems.org</a> – repositório oficial de gem ruby</li>
    <li><a href='https://www.ruby-toolbox.com/projects/informante' target='_blank'>The Ruby Toolbox</a> – repositório oficial de gem rails</li>
    <li><a href="https://github.com/igortice/informante" target='_blank'>GitHub</a> – versionamento git online</li>
    <li><a href="https://travis-ci.org/" target='_blank'>Travis CI</a> – integração contínua</li>
  </ul>
</div>

Como essa gem encontra-se publicada no GitHub com documentação em inglês, e como fui em que criei essa gem, 
vou traduzir aqui, nesse post, para facilitar seu uso pela comunidade Brasileira.

## Informante <a href='https://travis-ci.org/igortice/informante'><img src='https://travis-ci.org/igortice/informante.png?branch=master' alt='Build Status'></a>

Simples Rails Gem para configuração de informações globais.

Essa gem providencia um simples modo de armazenar informações em um lugar e depois utilizar essas informações 
em qualquer ponto de uma aplicação Rails.

### Instalação

Adicione o trecho de código abaixo no arquivo Gemfile:

```
gem 'informante'
```

Agora, execute o seguinte comando no terminal na raiz da aplicação:

```
bundle install
```

Finalizando, use o rails generator para prover nosso Informante:

```
rails g informante:install
```

<div class='message'>
  <p>O comando acima é responsável por gerar dois arquivos na nossa aplicação:</p>
  <ul class='disc'>
    <li><strong>informante.yml</strong> – arquivo com marcação yaml para armazenar informações para nossa aplicação.</li>
    <li><strong>informante.rb</strong> – arquivo com método global informante para nossa aplicação.</li>
  </ul>
</div>


### Uso

Por padrão, nosso informant.yml contém a seguinte configuração:

```ruby
# -- basic example for informante.yml --
#
system:
  name          : 'Name System'
  title         : 'Title System'
  description   : 'Description System'
  company       : '© Company System'
  business      : 'Business System'
  developers    : [
    {
      name  : 'name',
      email : 'email',
      site  : 'site'
    },
  ]
```

```
Você pode armazenar, nesse arquivo, as informações que desejar, basta seguir o formato padrão para yaml e 
salvar o arquivo informante.yml
```

Em qualquer ponto da nossa aplicação, basta usar o método global informante.

Veja um exemplo no console do rails:

```ruby
$ informante(:hash) # informante(:hash) == informante
$ informante(:object)
$ informante(:array)
$ informante(:string)
```

Exemplo para responder com objeto:

```
informante(:object).system.description
```

Exemplo para responder como string:

```
informante(:string)
```

### Notas

Você pode usar o método informante diretamente em:

<ul>
  <li><strong>controllers</strong></li>
  <li><strong>views</strong></li>
  <li><strong>models</strong></li>
  <li><strong>helpers</strong></li>
</ul>

Importante, toda vez que você modificar o arquivo informante.yml será necessário reiniciar a aplicação Rails.

### Versão

0.0.1
