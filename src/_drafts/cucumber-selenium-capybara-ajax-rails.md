---
layout: post
date: 2015-07-01
title: Cucumber, Selenium, Capybara e Ajax com Rails
permalink: /rails/:title
categories: documentos
tags: documentos
author: igor_rocha
desc: 'Cucumber, Selenium, Capybara e Ajax com Rails'
keywords: ''
---

Neste Post vamos ver como trabalhar de forma correta com **Serviços Assíncronos** na hora de criar nossos 
testes usando **Capybara**, **Cucumber** e **Selenium** nas aplicações **Rails**.

<!--more-->

Se você está trabalhando com **Rails** e **Turbolinks**, então você deve ter uma preocupação na hora 
de montar seus testes com as tecnologias citadas acima, pois você vai está trabalhando com links, na 
sua aplicação, que são carregados de forma assíncrona devido ao **Turbolinks** (protocolo GET).  

Se em algum momento, ná hora de criar seus testes, você utilizou o <kbd>sleep()</kbd> para esperar 
o carregamento de algo e executar algum teste, pare de escreve-los, pois eles estão errados.

Então porque usar o <kbd>sleep()</kbd> está errado? A resposta para isso está no uso dos 
**Serviços Assíncronos**, estes serviços não tem garatia de tempo de entrega ou mesmo se serão entegues,
logo, a melhor maneira de se trabalhar com esse serviços, é criar tecnicas de tempo de espera pela estrega
destes serviços.

Abaixo listarei dois casos comuns que identifiquei na equipe de Testes onde trabalho.

## Caso 1 - Turbolinks

Trabalhar com turbolinks siguifica que as requisiçoes GET de links na aplicação serão **assíncronas**, logo,
por exemplo, se você fizer uma chamada de uma *action* que tenha um processamento um pouco maior, então
os testes irão furar.

Vamos testar isso, vou utilizar o *Getting Started* da documentação do Rails como exemplo. Existe um outro
Post meu que mostro como fazer a configuração do *Getting Started* com **Cucumber** e **Selenium**, caso
queira vê-lo, clique aqui.
