---
layout: post
date: 2015-06-23
title: Configurar CentOS 7 com Rails
permalink: /documentação/:title
categories: documentos
tags: documentos
author: igor_rocha
desc: 'Configurar CentOS 7 com Rails'
keywords: ''
---

Este Post é uma documentação base para configurar uma máquina CentOS 7 com os seguintes recursos:

<div class='message'>
  <ul class='disc'>
    <li><strong>Vagrant</strong> com CentOS 7.</li>
    <li><strong>Dependências</strong> básicas.</li>
    <li><strong>Segurança</strong> do servidor.</li>
    <li><strong>RVM</strong> para Rails.</li>
    <li><strong>PostgreSQL</strong> database.</li>
    <li><strong>NGINX</strong> Servidor de Aplicação.</li>
  </ul>
</div>

<!--more-->

<hr/>

<dl class='accordion' data-accordion>
  <dd class='accordion-navigation'>
    <a href='#panel1'>Vagrant</a>
    <div id='panel1' class='content'>
      <ul class='square'>
        <li><h6>download <a href='http://www.vagrantbox.es/' target='_blank'>CentOS 7</a></h6></li>
        <li><h6>vagrant box add {title} {url}</h6></li>
        <li><h6>mkdir projectname</h6></li>
        <li><h6>cd projectname</h6></li>
        <li><h6>vagrant init {title}</h6></li>
        <li>
          <h6>vim Vagrantfile</h6>
{% highlight shell %}
config.vm.network "private_network", ip: "192.168.33.10"

config.vm.provider "virtualbox" do |vb|
  vb.name = "vm_ssp"
  vb.customize ["modifyvm", :id, "--memory", "4096"]
end
{% endhighlight %}
        </li>
        <li><h6>vagrant up</h6></li>
        <li><h6>vagrant ssh</h6></li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel2'>CentOS 7</a>
    <div id='panel2' class='content'>
      <ul class='square'>
        <li><h6><a href='http://www.server-world.info/en/note?os=CentOS_7&p=openstack_kilo&f=1' target='_blank'>wiki</a></h6></li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel3'>Extras</a>
    <div id='panel3' class='content'>
      <ul class='square'>
        <li><h6>sudo yum -y update</h6></li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel4'></a>
    <div id='panel4' class='content'>
      <ul class='square'>
        <li><h6></h6></li>
      </ul>
    </div>
  </dd>
</dl>
