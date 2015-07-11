---
layout: post
date: 2015-07-11
title: Usar Cucumber e Selenium no Rails 4
permalink: /rails/:title
categories: rails
tags: rails cucumber testes
author: igor_rocha
desc: 'Usar Cucumber com Selenium no Rails 4'
keywords: ''
---

Neste Post vou mostrar como configurar e usar o **Cucumber** com o **Selenium** para fazer nossos teste de
integração com *Rails 4*.

<!--more-->

Para isso, utilizarei o **Getting Started** da documentação do *Rails* como base de aplicação para criarmos nossos
testes (<a target='_blank' href='http://guides.rubyonrails.org/getting_started.html'>clique aqui</a>
para ver o *Getting Started*).

Adicione o trecho de código abaixo no *Gemfile* do projeto:

```ruby
group :test do
  # Rspec methods
  gem 'rspec-rails'

  # Cucumber
  gem 'cucumber-rails', :require => false

  # Database clear
  gem 'database_cleaner'

  # Selenium
  gem 'selenium-webdriver'

  # Faker dados
  gem 'faker'
end
```

Instale as *Gems*:

```
bundle install
```

Instale o *Cucumber* na aplicação:

```
rails generate cucumber:install
```

Crie o banco de testes do *Cucumber*:

```
rake db:migrate
```

Baseado no tutorial **Getting Started** do *Rails*, vamos criar testes para a parte de **Articles**
deste tutorial.

Para começar vamos criar uma *feature* chamada articles com o seguinte conteúdo:

```
> touch seu_projeto/features/articles.feature
```

```yaml
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

Agora vamos escrever um *Cenário de Fundo* que vai ser chamado sempre antes de todos os cenários, que é visitar
a página de articles.

Adicione o seguinte trecho de código a nossa feature:

```yaml
Cenário de Fundo: Visitar página de Articles.
    Dado que estou na página de "Articles"
```

Veja como ficou minha feature:

```yaml
# language: pt

Funcionalidade: Articles
  Testar funcionalidades da parte de Articles da aplicação.

  Cenário de Fundo: Visitar página de Articles.
    Dado que estou na página de "Articles"
```

Rode o *Cucumber* e veja se sua saída é similar a imagem abaixo:

<ul class='clearing-thumbs small-9 small-centered columns' data-clearing>
  <li><a class='not-animsition' href='/assets/images/post_02/img_02.png'><img src='/assets/images/post_02/img_02.png'></a></li>
</ul>

Agora vamos criar nossos **steps** para o nosso cenário. Crie o aquivo **articles_steps.rb** com o trecho de
código abaixo:

```
> touch seu_projeto/features/step_definitions/articles_steps.rb
```

```ruby
Dado(/^que estou na página de "(.*?)"$/) do |arg1|
  pending # express the regexp above with the code you wish you had
end
```

Rode novamente o *Cucumber*:

<ul class='clearing-thumbs small-9 small-centered columns' data-clearing>
  <li><a class='not-animsition' href='/assets/images/post_02/img_03.png'><img src='/assets/images/post_02/img_03.png'></a></li>
</ul>

Perceba que agora temos um cénario montado, mas os passos (*steps*) para executar os testes deste cenârio estão pendentes. Então
vamos criar esses passos para nosso *Cenário de Fundo*.

```ruby
Dado(/^que estou na página de "(.*?)"$/) do |arg1|
  visit articles_path

  has_content?(arg1)
end
```

Se sua saída é similar a imagem abaixo, então estamos no caminho correto.

<ul class='clearing-thumbs small-9 small-centered columns' data-clearing>
  <li><a class='not-animsition' href='/assets/images/post_02/img_04.png'><img src='/assets/images/post_02/img_04.png'></a></li>
</ul>

Agora vamos fazer o **Selenium** rodar e abrir nossos testes no browser, para isso, toda vez que quisermos que
o browser execute os testes, devemos adicionarmos a seguinte tag <kbd>@javascript</kbd>
antes da nossa *Funcionalidade* da feature.


```yaml
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

Não se assuste se o browser abrir e fechar rápido, isso é reflexo da quantidade de testes que escrevemos, como só
escrevemos um cenário, que é visitar uma página e checar se aquela página condiz com a página visitada, então
nossos testes escritos até aqui serão rápidos. O importante é que o *Selenium* entrou em ação juntamente
com o *Cucumber*.

Agora vamos escrever um cenário, de fato, para simular a criação de um *article*.


```yaml
Cenário: Criar um Article
  Quando clicar no link "New Article"
  E for redirecionado para página de "Create Articles"
  E preencher o formulário
  E clicar no botão "Create Article"
  Então receberei a mensagem "Article was successfully created."
```

Veja como ficou minha feature:

```yml
# language: pt

@javascript
Funcionalidade: Articles
  Testar funcionalidades da parte de Articles da aplicação.

  Cenário de Fundo: Visitar página de Articles.
    Dado que estou na página de "Articles"

  Cenário: Criar um Article
    Quando clicar no link "New Article"
    E for redirecionado para página de "Create Articles"
    E preencher o formulário
    E clicar no botão "Create Article"
    Então receberei a mensagem "Article was successfully created."

```

Perceba que o cenário nada mais é do que um conjunto de passos (*workflow*) que nós faríamos, manualmente, para testar
nossa aplicação na hora do desenvolvimento. A vatagem de escrevemos nossos testes são que ao mesmo tempo que
estamos testando nossa aplicação, estamos documentando seu fluxo, como também estamos garantindo que qualquer
alteração feita no desenvolvimento fique coberta nos testes, evitado possíveis erros que passariam no desenvolvimento
sem testes.

Proseguindo, falta escrevermos nossos passos (*steps*) a serem executados pelo cenário. Abaixo vou tentar dar
um breve resumo de cada passo criado para nosso cenário.

### Passo 1

```ruby
Dado(/^que estou na página de "(.*?)"$/) do |arg1|
  visit articles_path

  has_content?(arg1)
end
```

Essa parte é bem simples, olhando para o código acima, nós estamos visitando a página de articles e depois
estamos verificando se a página visitada tem um conteúdo de texto no HTML **New Article**

### Passo 2

```ruby
Quando(/^clicar no link "(.*?)"$/) do |arg1|
  usuario = 'dhh'
  senha   = 'secret'
  visit current_url.gsub('://', "://#{usuario}:#{senha}@") + '/new'

  visit articles_path

  click_link(arg1)
end
```

Essa parte envolve o teste mais complicado, pois como estamos usando o **Getting Started** do *Rails* e este
tutorial usa **basic access authentication** para fazer alguns procedimentos, então temos que digitar
um usuário e senha como forma de login, só que para fazer isso no browser, o *Selenium* não tem domínio. A solução
que encontrei foi visitar a página de **authentication** com usuário e senha corretos, voltar para página
de articles e só depois clicar no link.

### Passo 3

```ruby
E(/^for redirecionado para página de "(.*?)"$/) do |arg1|
  has_content?(arg1)
end
```

Esta parte é bem simples, verificamos se a página tem determinado conteúdo HTML.

### Passo 4

```ruby
E(/^preencher o formulário$/) do
  fill_in('Title', with: Faker::Lorem.sentence(2))
  fill_in('Text', with: Faker::Lorem.paragraph(2, true, 4))
end
```

Aqui nós estamos preenchendo o formulário com dados *faker* (lembre que nós colocamos uma gem só para isso).

### Passo 5

```ruby
E(/^clicar no botão "(.*?)"$/) do |arg1|
  click_button(arg1)
end
```

Outra part simples, simulamos o click no botão **Create Article**.

### Passo 6

```ruby
Então(/^receberei a mensagem "(.*?)"$/) do |arg1|
  has_content?(arg1)
end
```

Para finalizar este cenário, verificamos se exite uma mensagem de **Article was successfully created.** após criamos
um article.

Veja como ficou meu step:

```ruby
Dado(/^que estou na página de "(.*?)"$/) do |arg1|
  visit articles_path

  has_content?(arg1)
end

Quando(/^clicar no link "(.*?)"$/) do |arg1|
  usuario = 'dhh'
  senha   = 'secret'
  visit current_url.gsub('://', "://#{usuario}:#{senha}@") + '/new'

  visit articles_path

  click_link(arg1)
end

E(/^for redirecionado para página de "(.*?)"$/) do |arg1|
  has_content?(arg1)
end

E(/^preencher o formulário$/) do
  fill_in('Title', with: Faker::Lorem.sentence(2))
  fill_in('Text', with: Faker::Lorem.paragraph(2, true, 4))
end

E(/^clicar no botão "(.*?)"$/) do |arg1|
  click_button(arg1)
end

Então(/^receberei a mensagem "(.*?)"$/) do |arg1|
  has_content?(arg1)
end
```

Com isso feito rode o *Cucumber*:

<ul class='clearing-thumbs small-9 small-centered columns' data-clearing>
  <li><a class='not-animsition' href='/assets/images/post_02/img_06.png'><img src='/assets/images/post_02/img_06.png'></a></li>
</ul>

Perceba que o cenário para criar um articlo esta escrito. Vale ressaltar que essa foi uma forma simples de escrever
um teste (existem outras formas melhores para isso). Como esse *Post* era apenas para mostra o uso e uma configuração
e não uma aula de teste, preferi fazer da forma mais simples.

Abaixo vou listar o que é preciso para se trabalhar com o *Cucumber* no *Rails*, com isso todos serão capazes de
escreverem testes.

<div class='message'>
  <ul class='disc'>
    <li>Para <strong>configuração do projeto</strong>: <a target='_blank' href='https://github.com/cucumber/cucumber-rails'>Cucumber Rails</a></li>
    <li>Para <strong>features</strong>: <a target='_blank' href='https://github.com/cucumber/cucumber/wiki'>Cucumber</a></li>
    <li>Para <strong>steps</strong>: <a target='_blank' href='https://github.com/jnicklas/capybara'>Capybara</a></li>
    <li>Para <strong>dados falsos</strong>: <a target='_blank' href='https://github.com/stympy/faker'>Faker</a></li>
  </ul>
</div>
