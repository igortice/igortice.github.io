---
layout: post
date: 2015-06-23
title: Expressão Regular CPF CNPJ
permalink: /:title
categories: regex
tags: regex
author: igor_rocha
desc: "Expressão Regular CPF CNPJ"
keywords: 'expressão regular cpf,expressão regular cnpj,expressão regular cpf cnpj,epressão regular cpf/cnpj,regex cpf,regex cnpj,regex cpf cnpj,regex cpf/cnpj,expressão regular,javascript'
---

Neste Post vamos ver como criar uma **Expressão Regular** que possa ser usada para validar tanto um 
**CPF** como um **CNPJ** ou os dois a mesmo tempo.

<!--more-->

Certo dia, no trabalho, precisava validar um campo de input para ser CPF ou CNPJ contendo números e caracteres apenas.

Se fosse **CPF** deveria seguir o seguinte estilo: <kbd>XXX.XXX.XXX-XX</kbd>

Se fosse **CNPJ** devereia seguir esse estilo: <kbd>XX.XXX.XXX/XXXX-XX</kbd>

Então acabei estudado o material fornecido no Site do 
<a href='http://aurelio.net/regex/guia/' target='_blank'>Aurelio Marinho Vargas</a> 
e cheguei as seguintes expressões:

Para **CPF** a expressão seria essa:

```
/^d{3}.d{3}.d{3}-d{2}$/
```


Para **CNPJ** a expressão seria essa:

```
/^d{2}.d{3}.d{3}/d{4}-d{2}$/
```


Para **CPF e CNPJ** a expressão seria essa:

```
/(^d{3}.d{3}.d{3}-d{2}$)|(^d{2}.d{3}.d{3}/d{4}-d{2}$)/
```

Atenção, vale informar que os trechos de código acima são apenas para validar o formato de um determinado campo contendo
determinada sequência de caracteres, não servindo para validar se um CPF ou CNPJ são válidos.

<section class="codepen-demo">
  <ul class="tabs" data-tab>
    <li class="tab-title active"><a href="#panel1">Teste um CPF ou CNPJ</a></li>
  </ul>
  <div class="tabs-content">
    <div class="content active" id="panel1">
      <form name="formCpfCnpj">
        <div class="row">
          <div class="large-6 columns">
            <label class="error">CPF
              <input ng-model="form.cpf" ng-pattern="/^\d{3}.\d{3}.\d{3}-\d{2}$/" name="cpf" type="text" class="error" placeholder="XXX.XXX.XXX-XX" required />
            </label>
            <small class="error">
              XXX.XXX.XXX-XX
              <span class="label success" ng-show="formCpfCnpj.cpf.$valid" >==</span>
              <span class="label" ng-show="formCpfCnpj.cpf.$viewValue && formCpfCnpj.cpf.$invalid" >!=</span>
              {[formCpfCnpj.cpf.$viewValue]}
            </small>
          </div>
          <div class="large-6 columns error">
            <label class="error">CPF
              <input ng-model="form.cnpj" ng-pattern="/^\d{2}.\d{3}.\d{3}/\d{4}-\d{2}$/" name="cnpj" type="text" class="error" placeholder="XX.XXX.XXX/XXXX-XX" required />
            </label>
            <small class="error">
              XX.XXX.XXX/XXXX-XX
              <span class="label success" ng-show="formCpfCnpj.cnpj.$valid" >==</span>
              <span class="label" ng-show="formCpfCnpj.cnpj.$viewValue && formCpfCnpj.cnpj.$invalid" >!=</span>
              {[formCpfCnpj.cnpj.$viewValue]}
            </small>
          </div>
          <div class="large-12 columns error">
            <label class="error">CPF ou CNPJ
              <input ng-model="form.cpfCnpj" ng-pattern="/(^\d{3}.\d{3}.\d{3}-\d{2}$)|(^\d{2}.\d{3}.\d{3}/\d{4}-\d{2}$)/" name="cpfCnpj" type="text" class="error" placeholder="XXX.XXX.XXX-XX ou XX.XXX.XXX/XXXX-XX" required />
            </label>
            <small class="error" ng-show="formCpfCnpj.cpfCnpj.$viewValue">
              Formato
              <span class="label success" ng-show="formCpfCnpj.cpfCnpj.$valid" >CORRETO</span>
              <span class="label" ng-show="formCpfCnpj.cpfCnpj.$viewValue && formCpfCnpj.cpfCnpj.$invalid" >ERRADO</span>
            </small>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>
