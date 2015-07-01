---
layout: post
date: 2015-07-01
title: Configurando Cucumber e Selenium no Rails 4
permalink: /rails/:title
categories: rails
tags: documentos
author: igor_rocha
desc: 'Configurando Cucumber com Selenium no Rails 4'
keywords: ''
---

Neste Post vou mostrar como configurar o **Cucumber** com o **Selenium** para fazer nossos teste de 
integração com Rails 4.

<!--more-->

Para isso utilizarei o **Getting Started** da documentação do Rails como base de aplicação para criar nossos
testes (<a target='_black' href='http://guides.rubyonrails.org/getting_started.html'>clique aqui</a> 
para ver o Getting Started). 

Adicione o trecho de código abaixo no Gemfile: 

```
group :test do
  # Rspec methods
  gem 'rspec-rails'

  # Cucumber
  gem 'cucumber-rails', :require => false

  # Database clear
  gem 'database_cleaner'

  # Selenium
  gem 'selenium-webdriver'
end
```

Instale as Gems:

```
bundle install
```

Instale o Cucumber:

```
rails generate cucumber:install
```

Crie o banco de testes do Cucumber:

```
rake db:migrate
```

Adicione o trecho de código abaixo, no arquivo de configuração do Cucumber, para utilizar o
Google Chrome como nosso browser default de testes.

```
# seu_projeto/features/support/env.rb

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end
```

Baseado no tutorial **Getting Started** do Rails, vamos criar testes para a parte de Articles deste tutorial.
