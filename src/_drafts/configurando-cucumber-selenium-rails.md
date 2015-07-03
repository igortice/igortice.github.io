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

Para isso, utilizarei o **Getting Started** da documentação do Rails como base de aplicação para criar nossos
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

Adicione o trecho de código abaixo, no arquivo de configuração do Cucumber, para utilizar-mos o
*Google Chrome* como nosso browser default de testes.

```
# seu_projeto/features/support/env.rb

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end
```

Baseado no tutorial **Getting Started** do Rails, vamos criar testes para a parte de **Articles** 
deste tutorial.

Para começar vamos criar uma *feature* chamada articles com o seguinte conteúdo:

<kbd>seu_projeto/features/articles.feature</kbd>


```
# language: pt

Funcionalidade: Articles
  Testar funcionalidades da parte de Articles da aplicação.
```

Rode um dos comandos abaixo para executar nossos testes:

```
cucumber ou rake cucumber
```

Veja minha saida:

<ul class='clearing-thumbs small-9 small-centered columns' data-clearing>
  <li><a class='not-animsition' href='/assets/images/post_02/img_01.png'><img src='/assets/images/post_02/img_01.png'></a></li>
</ul>

Agora vamos escrever um *Cenário de Fundo* que vai ser chamado sempre antes de todos os Cenários, que é visitar
a página de Articles.

Adicione o seguinte trecho de código a nossa feature:

```
Cenário de Fundo: Visitar página de Articles.
    Dado que estou na página de "Articles"
```

Veja como ficou minha feature:

```
# language: pt

Funcionalidade: Articles
  Testar funcionalidades da parte de Articles da aplicação.

  Cenário de Fundo: Visitar página de Articles.
    Dado que estou na página de "Articles"
```

Rode o cucumber e veja se sua saída é similar a imagem abaixo:

<ul class='clearing-thumbs small-9 small-centered columns' data-clearing>
  <li><a class='not-animsition' href='/assets/images/post_02/img_02.png'><img src='/assets/images/post_02/img_02.png'></a></li>
</ul>

Agora vamos criar nossos **steps** para o nosso cenário. Crie o aquivo **articles_steps** com o trecho de
código abaixo:

<kbd>seu_projeto/features/step_definitions/articles_steps.rb</kbd>

```
Dado(/^que estou na página de "(.*?)"$/) do |arg1|
  pending # express the regexp above with the code you wish you had
end
```

Rode o cucumber:

<ul class='clearing-thumbs small-9 small-centered columns' data-clearing>
  <li><a class='not-animsition' href='/assets/images/post_02/img_03.png'><img src='/assets/images/post_02/img_03.png'></a></li>
</ul>

Perceba que agora temos um cénario montado, mas os passos para executar os testes estão pendentes. Então
vamos criar esses passos para nosso Cenário de Fundo.

```
Dado(/^que estou na página de "(.*?)"$/) do |arg1|
  visit articles_path
  
  expect(current_path).to eq "/#{arg1.downcase}"
end
```

Se sua saída é similar a imagem abaixo, então estamos no caminho correto.

<ul class='clearing-thumbs small-9 small-centered columns' data-clearing>
  <li><a class='not-animsition' href='/assets/images/post_02/img_04.png'><img src='/assets/images/post_02/img_04.png'></a></li>
</ul>

Agora vamos fazer o **Selenium** rodar e abrir nossos testes no browser, para isso, toda vez que quisermos
isto basta adicionarmos a seguinte tag <kbd>@javascript</kbd> antes da nossa *Funcionalidade* da feature.


```
# language: pt

@javascript
Funcionalidade: Articles
  Testar funcionalidades da parte de Articles da aplicação.

  Cenário de Fundo: Visitar página de Articles.
    Dado que estou na página de "Articles"
```

Rode o cucumber e veja seu browser entrar em ação.

<ul class='clearing-thumbs small-9 small-centered columns' data-clearing>
  <li><a class='not-animsition' href='/assets/images/post_02/img_05.png'><img src='/assets/images/post_02/img_05.png'></a></li>
</ul>

Não se assuste se o browser abrir e fechar, isso é reflexo da quantidade de testes que escrevemos, como só 
escrevemos um cenário, que é visitar uma página e checar se aquela página condiz com a página visitada, então
os testes serão rápidos. O importante é que o selenium entrou em ação juntamente com o cucumber.

Agora vamos escrever um cenário de fato para simular a criação de um *article*.


```
# language: pt

@javascript
Funcionalidade: Articles
  Testar funcionalidades da parte de Articles da aplicação.

  Cenário de Fundo: Visitar página de Articles.
    Dado que estou na página de "Articles"

  Cenário: Criar um Article
    Quando clicar "New Article"
    E for redirecionado para página de "Create Articles"
```


```
Dado(/^que estou na página de "(.*?)"$/) do |arg1|
  visit articles_path

  expect(current_path).to eq "/#{arg1.downcase}"
end

Quando(/^clicar "(.*?)"$/) do |arg1|
  visit current_url.gsub('://', '://dhh:secret@') + '/new'

  visit articles_path

  click_link('New Article')
end

E(/^for redirecionado para página de "(.*?)"$/) do |arg1|
  has_content?('New Article')
end
```
