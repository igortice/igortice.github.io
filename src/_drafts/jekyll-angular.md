---
layout: post
date: 2015-05-26
title: Jekyll e Angular
permalink: /:categories/:title.html
categories: post
---


Neste post vamos ver como configurar o AngularJS para que ele funcione de forma correta com o Jekyll.

<!--more-->

Se você usa o Jekyll para criar seus sites estáticos, vai perceber que ele usa o 
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

Perceba que quem está fazendo todo processo de manipulação das variáveis é o template engine do
<a href="#">Liquid</a>.

Se eu tentar usar o AngularJS para processar algo dentro do Jekyll teremos um problema, pois o <a href="#">Liquid</a>
utiliza o interpolador <code>{% raw %}{{ }}{% endraw %}</code> para fazer seu processamento, o mesmo do AngularJS.

Então se eu tentar fazer uso deste interpolador com o Angular no Jekyll, nada deve acontecer. Veja o exemplo abaixo:

{% highlight html %}
Digite seu nome: <input ng-model="nome">

<h1 ng-show="nome">
  Olá {% raw %}{{ nome }}{% endraw %}
</h1>
{% endhighlight %}

Para podermos trabalhar com o AngularJS, vamos mudar o seu interpolador para ser diferente do interpolador do <a href="#">Liquid</a>.
Para isso crie um arquivo chamado <em>config.js</em> (não esqueça de importá-lo) e adicone o trecho de código 
abaixo no seu conteúdo:
 
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

Agora, para o nosso código com AngularJS funcionar, bastar mudar o seu interpolador. Veja como ficou nosso
exemplo:

{% highlight html %}
Digite seu nome: <input ng-model="nome">
 
<h1 ng-show="nome">
  Olá [[ nome ]]
</h1>
{% endhighlight %}

Digite seu nome: <input ng-model="nome"> 
<h1 ng-show="nome">
  Olá {[ nome ]}
</h1>
