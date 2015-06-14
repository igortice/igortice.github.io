---
layout: post
date: 2015-06-04
title: Configurar Jekyll e AngularJS
permalink: /:categories/:title
categories: angular
tags: angulas js, jekyll
author: igor_rocha
desc: "Configurar jekyll"
keywords: "AngularJS Jekyll, angular jekyll, jekyll angular, angular with jekyll, jekyll with angular, jekyll com angular, configurar angular jekyll"
---


> Neste Post vamos aprender como configurar o **AngularJS** para que ele funcione de forma correta com o **Jekyll**.

<!--more-->

Se você usa o **Jekyll** para criar seus sites estáticos, vai perceber que ele usa o
<a href="https://github.com/Shopify/liquid/wiki" target="_blank">Liquid</a> como template engine para processar suas páginas.

{% highlight html %}
<h1 class="post-title">
  <a href="{% raw %}{{ post.url }}{% endraw %}">
    {% raw %}{{ post.title }}{% endraw %}
  </a>
</h1>

<span class="post-date">{% raw %}{{ post.date | date: "%d/%m/%Y" }}{% endraw %}</span>
{% endhighlight %}

O código acima serve, por exemplo, para mostrar o título e a data de publicação deste post que você está lendo.

Perceba que quem está fazendo todo processo de manipulação das variáveis é o template engine do <a href="#">Liquid</a>.

Se eu tentar usar o **AngularJS** para processar algo dentro do **Jekyll** teremos um problema, pois o <a href="#">Liquid</a>
utiliza o interpolador <code>{% raw %}{{ }}{% endraw %}</code> para fazer seu processamento, o mesmo do **AngularJS**.

Então se eu tentar fazer uso deste interpolador com o **AngularJS** no **Jekyll** , nada deve acontecer. Veja o exemplo
abaixo no qual estou tentando mostrar o nome digitado no input:

<section class="codepen-demo">
  <ul class="tabs" data-tab>
    <li class="tab-title active"><a href="#panel1">Código</a></li>
    <li class="tab-title"><a href="#panel2">Resultado</a></li>
  </ul>
  <div class="tabs-content">
    <div class="content active" id="panel1">
{% highlight html %}
Digite seu nome: <input ng-model="nome">

<h1 ng-show="nome">
  Olá {% raw %}{{ nome }}{% endraw %}
</h1>
{% endhighlight %}
    </div>
    <div class="content" id="panel2">
      Digite seu nome: <input ng-model="nome">

      <h1 ng-show="nome">
        Olá {% raw %}{{ nome }}{% endraw %}
      </h1>
    </div>
  </div>
</section>

Perceba no resultado acima que não conseguimos fazer com que o **AngularJS** renderize a variável
<code>{% raw %}{{ nome }}{% endraw %}</code> devido ao interpolador.

Então, para podermos trabalhar com o **AngularJS** de forma correta, vamos mudar o seu interpolador para ser diferente
do interpolador do <a href="#">Liquid</a>. Para isso, crie um arquivo chamado <em>config.js</em>, adicone o trecho de
código abaixo no seu conteúdo e importe esse arquivo no seu projeto.

{% highlight js %}
// config.js
(function () {
  'use strict';

  angular
    .module('app') // Atenção coloque aqui o modulo da sua aplicação
    .config(config);

  config.$inject = ['$interpolateProvider'];

  function config($interpolateProvider) {
    $interpolateProvider.startSymbol('[['); // mudar {% raw %}{{{% endraw %} para [[
    $interpolateProvider.endSymbol(']]'); // mudar {% raw %}}}{% endraw %} por isso ]]
  }
}());
{% endhighlight %}

Perceba que nós mudamos o interpolador que o **AngularJS** vai usar para fazer o processamento das páginas com suas
variáveis. Agora, para o nosso código anterior em **AngularJS** funcionar, basta mudarmos o seu interpolador.
Veja como ficou nosso exemplo:

<section class="codepen-demo">
  <ul class="tabs" data-tab>
    <li class="tab-title active"><a href="#panel1">Código</a></li>
    <li class="tab-title"><a href="#panel2">Resultado</a></li>
  </ul>
  <div class="tabs-content">
    <div class="content active" id="panel1">
{% highlight html %}
Digite seu nome: <input ng-model="nome">

<h1 ng-show="nome">
  Olá [[ nome ]]
</h1>
{% endhighlight %}
    </div>
    <div class="content" id="panel2">
      Digite seu nome: <input ng-model="nome">

      <h1 ng-show="nome">
        Olá {[ nome ]}
      </h1>
    </div>
  </div>
</section>
