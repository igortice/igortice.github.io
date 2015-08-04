---
layout: post
date: 2015-06-29
title: Configurar CentOS 7 com Rails
permalink: /documentação/:title
categories: documentos
tags: documentos
author: igor_rocha
desc: 'Configurar CentOS 7 com Rails'
keywords: 'centos 7, rails centos 7, postgres centos 7, rvm centos 7, nginx centos 7'
---

Este Post é uma documentação base para configurar uma máquina **CentOS 7** com os seguintes recursos:

<div class='message'>
  <ul class='disc'>
    <li><strong>Vagrant</strong> com CentOS 7.</li>
    <li><strong>Dependências</strong> básicas.</li>
    <li><strong>Segurança</strong> do servidor.</li>
    <li><strong>RVM</strong> para Rails.</li>
    <li><strong>PostgreSQL</strong> database.</li>
    <li><strong>Nginx</strong> Servidor de Aplicação.</li>
  </ul>
</div>

<!--more-->

<hr/>

<dl class='accordion' data-accordion>
  <dd class='accordion-navigation'>
    <a href='#panel1'><span class='label'>Vagrant</span></a>
    <div id='panel1' class='content'>
      <ul class='square'>
        <li><kbd>download <a href='http://www.vagrantbox.es/' target='_blank'>CentOS 7</a></kbd></li>
        <li><kbd>vagrant box add {title} {url}</h6></li>
        <li><kbd>mkdir projectname</kbd></li>
        <li><kbd>cd projectname</kbd></li>
        <li><kbd>vagrant init {title}</kbd></li>
        <li>
          <kbd>vim Vagrantfile</kbd>
{% highlight shell %}
config.vm.network "private_network", ip: "192.168.33.10"

config.vm.provider "virtualbox" do |vb|
  vb.name = "vm_ssp"
  vb.customize ["modifyvm", :id, "--memory", "4096"]
end
{% endhighlight %}
        </li>
        <li><kbd>vagrant up</kbd></li>
        <li><kbd>vagrant ssh</kbd></li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel2'><span class='label'>CentOS 7 - Extras</span></a>
    <div id='panel2' class='content'>
      <ul class='square'>
        <li><kbd><a href='http://www.server-world.info/en/note?os=CentOS_7&p=openstack_kilo&f=1' target='_blank'>wiki</a></kbd></li>
        <li><kbd>sudo yum update -y</h6></li>
        <li><kbd>sudo yum install -y bash-completion</kbd></li>
        <li><kbd>sudo yum install -y net-tools</kbd></li>
        <li><kbd>sudo yum install -y screen</kbd></li>
        <li><kbd>sudo yum install -y nano</kbd></li>
        <li>
          <kbd>sudo yum install -y lsof</kbd>
{% highlight vim %}
lsof -i -P | grep -i listen
{% endhighlight %}
        </li>
        <li>
          <kbd>sudo yum install -y vim-enhanced</kbd><br/>
          <kbd>> sudo vi /etc/profile</kbd>
{% highlight vim %}
# add at the last line
alias vi='vim'
{% endhighlight %}
          <kbd>> source /etc/profile</kbd><br/>
        <li>
          <kbd>sudo vim /etc/vimrc</kbd>
{% highlight vim %}
" Show partial command in status line.
set showcmd

" Enable the use of the mouse.
set mouse=a

" Specify encoding
set encoding=utf-8

" Specify file encoding
set fileencoding=utf-8

" Specify file formats
set fileformats=unix,dos,

" Show the line and column number of the cursor position,
set ruler

" When set to 'dark', Vim will try to use colors that look
set background=dark

" Take backup
set backup

" Specify backup directory
set backupdir=~/backup

" Maximum width of text that is being inserted. A longer
set textwidth=110

" Number of spaces that a <Tab> in the file counts for.
set tabstop=2

" Number of spaces to use for each step of autoindent.
set shiftwidth=2

" Use the appropriate number of spaces to insert a <Tab>
set expandtab

" When on, a <Tab> in front of a line inserts blanks
set smarttab

" Show line numbers.
set number

" highlights parentheses
set showmatch

" When there is a previous search pattern, highlight all
set hlsearch

" While typing a search command, show immediately where the
set incsearch

" Ignore case in search patterns.
set ignorecase

" Override the 'ignorecase' option if the search pattern
set smartcase

" Influences the working of <BS>, <Del>, CTRL-W
set backspace=2

" Copy indent from current line when starting a new line
"set autoindent

" wrap lines
set wrap

filetype plugin indent on
syntax on
{% endhighlight %}
        </li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel3'><span class='label'>CentOS 7 - Time Zone</span></a>
    <div id='panel3' class='content'>
      <ul class='square'>
        <li><kbd>timedatectl list-timezones | grep For</kbd></li>
        <li><kbd>sudo timedatectl set-timezone America/Fortaleza</kbd></li>
        <li><kbd>timedatectl</kbd></li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel4'><span class='label'>CentOS 7 - Language</span></a>
    <div id='panel4' class='content'>
      <ul class='square'>
        <li><kbd>localectl</kbd></li>
        <li><kbd>localectl list-locales | grep pt</kbd></li>
        <li><kbd>localectl set-locale LANG=pt_BR.utf8</kbd></li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel5'><span class='label'>CentOS 7 - Keymap</span></a>
    <div id='panel5' class='content'>
      <ul class='square'>
        <li><kbd>localectl</kbd></li>
        <li><kbd>localectl list-keymaps | grep br</kbd></li>
        <li><kbd>localectl set-keymap br-abnt2</kbd></li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel6'><span class='label'>Roles Groups</span></a>
    <div id='panel6' class='content'>
      <ul class='square'>
        <li>
          <kbd>Permissões e Grupos</kbd>
{% highlight vim %}
# mudar permissões r-leitura w-escritra x-execução
chmod [opções] modo arquivo

chmod ugo(+ou-)rwx (arquivo ou pasta)

chmod u=rwx, g=rwx, x=rwx (arquivo ou pasta)

chmod (0-7)(0-7)(0-7) (arquivo ou pasta)

# mudar usuario e grupo:
chown [opções] usuário[:grupo] arquivo

# mudar usuario
chown [opções] usuario arquivo

# mudar grupo
chgrp [opções] grupo arquivo
{% endhighlight %}
        </li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel7'><span class='label'>New User</span></a>
    <div id='panel7' class='content'>
      <ul class='square'>
        <li><kbd>sudo su -</kbd></li>
        <li><kbd>adduser deployer</kbd></li>
        <li><kbd>passwd deployer</kbd></li>
        <li>
          <kbd>visudo</kbd>
{% highlight vim %}
## Same thing without a password
# %wheel        ALL=(ALL)       NOPASSWD: ALL
%deployer       ALL=(ALL)       NOPASSWD: ALL
{% endhighlight %}
          <kbd>> awk -F':' '{ print $1}' /etc/passwd</kbd><br/>
          <kbd>> cat /etc/passwd</kbd>
        </li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel8'><span class='label'>Group User</span></a>
    <div id='panel8' class='content'>
      <ul class='square'>
        <li><kbd>sudo su -</kbd></li>
        <li><kbd>groupadd sshlogin</kbd></li>
        <li>
          <kbd>visudo</kbd>
{% highlight vim %}
## Allows people in group wheel to run all commands
%wheel          ALL=(ALL)       ALL
%sshlogin       ALL=(ALL)       ALL
{% endhighlight %}
          <kbd>> awk -F':' '{ print $1}' /etc/group</kbd><br/>
          <kbd>> cat /etc/group</kbd>
        </li>
        <li>
          <kbd>usermod -a -G sshlogin deployer</kbd>
        </li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel9'><span class='label'>Configure SSH</span></a>
    <div id='panel9' class='content'>
      <ul class='square'>
        <li><kbd>sudo su -</kbd></li>
        <li>
          <kbd>vim /etc/ssh/sshd_config</kbd>
{% highlight vim %}
PermitRootLogin no

PermitEmptyPasswords no
PasswordAuthentication yes
{% endhighlight %}
          <kbd>> systemctl restart sshd </kbd>
        </li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel10'><span class='label'>Keys Authentication</span></a>
    <div id='panel10' class='content'>
      <ul class='square'>
        <li><kbd>sudo su - user #servidor</h6></li>
        <li><kbd>ssh-keygen -t rsa -C "$USER@$GROUPS" #servidor</kbd></li>
        <li>
          <kbd>scp ~/.ssh/id_rsa.pub user@ip:/home/user/ #cliente</kbd><br/>
          <kbd>> ssh-keygen -R hostname #if client problem host</kbd>
        </li>
        <li><kbd>cat id_rsa.pub >> ~/.ssh/authorized_keys #servidor</kbd></li>
        <li><kbd>chmod 600 ~/.ssh/authorized_keys #servidor</kbd></li>
        <li>
          <kbd>sudo vim /etc/ssh/sshd_config</kbd>
{% highlight vim %}
PasswordAuthentication no

X11Forwarding no

UseDNS no

AllowGroups sshlogin
{% endhighlight %}
          <kbd>> sudo systemctl restart sshd </kbd>
        </li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel11'><span class='label'>Git</span></a>
    <div id='panel11' class='content'>
      <ul class='square'>
        <li><kbd>sudo yum install - y git</kbd></li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel12'><span class='label'>Services</span></a>
    <div id='panel12' class='content'>
      <ul class='square'>
        <li><kbd>systemctl -t service</kbd></li>
        <li><kbd>systemctl list-unit-files -t service</kbd></li>
        <li><kbd>systemctl (enable|disable|status|stop|start) service</kbd></li>
        <li><kbd>chkconfig --list</kbd></li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel13'><span class='label'>Nginx<span></a>
    <div id='panel13' class='content'>
      <ul class='square'>
        <li>
          <kbd>sudo vim /etc/yum.repos.d/nginx.repo</kbd>
{% highlight vim %}
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
{% endhighlight %}
        </li>
        <li>
          <kbd>sudo yum install -y nginx</kbd><br/>
          <kbd>> sudo usermod -a -G nginx user</kbd>
        </li>
        <li><kbd>sudo systemctl enable nginx</kbd></li>
        <li><kbd>sudo systemctl start nginx</kbd></li>
        <li><kbd>sudo systemctl (enable|disable|status|stop|start) nginx</kbd></li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel14'><span class='label'>Firewall<span></a>
    <div id='panel14' class='content'>
      <ul class='square'>
        <li><kbd>sudo systemctl (enable|disable|status|stop|start) firewalld</kbd></li>
        <li><kbd>sudo firewall-cmd --permanent --zone=public --add-service=http</kbd></li>
        <li><kbd>sudo firewall-cmd --permanent --zone=public --[add|remove]-port=3000/tcp </kbd></li>
        <li><kbd>sudo firewall-cmd --reload</kbd></li>
        <li><kbd>sudo firewall-cmd --zone=public --list-all</kbd></li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel15'><span class='label'>SELinux</span></a>
    <div id='panel15' class='content'>
      <ul class='square'>
        <li>
          <kbd>sudo vim /etc/selinux/config</kbd>
{% highlight vim %}
# This file controls the state of SELinux on the system.
# SELINUX= can take one of these three values:
#     enforcing - SELinux security policy is enforced.
#     permissive - SELinux prints warnings instead of enforcing.
#     disabled - No SELinux policy is loaded.
SELINUX=disabled
{% endhighlight %}
          <kbd>sudo reboot</kbd>
        </li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel16'><span class='label'>Memcached</span></a>
    <div id='panel16' class='content'>
      <ul class='square'>
        <li><kbd>sudo yum install -y memcached</kbd></li>
        <li><kbd>sudo systemctl enable memcached</kbd></li>
        <li><kbd>sudo systemctl start memcached</kbd></li>
        <li><kbd>sudo systemctl (enable|disable|status|stop|start) memcached</kbd></li>
        <li><kbd>sudo vim /etc/sysconfig/memcached</kbd></li>
        <li><kbd>memcached-tool</kbd></li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel17'><span class='label'>Node JS</span></a>
    <div id='panel17' class='content'>
      <ul class='square'>
        <li><kbd>sudo su -</kbd></li>
        <li><kbd>curl -sL https://rpm.nodesource.com/setup | bash -</kbd></li>
        <li><kbd>yum install -y nodejs</kbd></li>
        <li><kbd>yum install -y gcc-c++ make</kbd></li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel18'><span class='label'>PostgreSQL</span></a>
    <div id='panel18' class='content'>
      <ul class='square'>
        <li><kbd>sudo su -</kbd></li>
        <li><kbd><a href='http://yum.postgresql.org/repopackages.php' target='_blank' >repositório</a></kbd></li>
        <li><kbd>rpm -iUvh [versão repositório]</kbd></li>
        <li><kbd>yum -y update</kbd></li>
        <li><kbd>yum install -y postgresql94-server.x86_64 postgresql94-libs.x86_64 postgresql94-contrib.x86_64 postgresql94-devel.x86_64</kbd></li>
        <li><kbd>systemctl enable postgresql-9.4</kbd></li>
        <li><kbd>/usr/pgsql-9.4/bin/postgresql94-setup initdb</kbd></li>
        <li><kbd>systemctl start postgresql-9.4</kbd></li>
        <li><kbd>sudo systemctl (enable|disable|status|stop|start) postgresql-9.4</kbd></li>
        <li>
          <kbd>su - postgres</kbd><br/>
          <kbd>> psql</kbd><br/>
          <kbd>> \password postgres</kbd>
        </li>
        <li>
          <kbd>vim /var/lib/pgsql/9.4/data/postgresql.conf</kbd>
{% highlight vim %}
listen_addresses = '*' # what IP address(es) to listen on;
{% endhighlight %}
        </li>
        <li>
          <kbd>vim /var/lib/pgsql/9.4/data/pg_hba.conf</kbd>
{% highlight vim %}
# "local" is for Unix domain socket connections only
local   all             all                                     md5
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
# IPv6 local connections:
host    all             all             ::1/128                 md5

host    all             all             0.0.0.0/0               md5
{% endhighlight %}
        </li>
        <li><kbd>systemctl restart postgresql-9.4</kbd></li>
        <li><kbd>echo 'export PATH=$PATH:/usr/pgsql-9.4/bin/' >> /etc/bashrc && source /etc/bashrc</kbd></li>
      </ul>
    </div>
  </dd>
  <dd class='accordion-navigation'>
    <a href='#panel19'><span class='label'>RVM, Ruby 2.X</span></a>
    <div id='panel19' class='content'>
      <ul class='square'>
        <li>
          <kbd>\curl -L https://get.rvm.io | sudo bash -s stable #global</kbd><br>
          <kbd>> sudo usermod -a -G rvm deployer</kbd>
        </li>
        <li><kbd>logout/login</kbd></li>
        <li><kbd>type rvm | head -n 1</kbd></li>
        <li><kbd>rvm requirements</kbd></li>
        <li><kbd>rvm list known</kbd></li>
        <li>
          <kbd>rvm install ruby</kbd><br/>
          <kbd>> gem install bundle pry awesome_print</kbd><br/>
          <kbd>vim ~/.pryrc</kbd>
{% highlight vim %}
Pry.config.prompt = proc do |obj, level, _|
  prompt = ""
  prompt << "rails[#{Rails.version}]@" if defined?(Rails)
  prompt << "ruby[#{RUBY_VERSION}]"
  "#{prompt} (#{obj})> "
end

Pry.config.exception_handler = proc do |output, exception, _|
  output.puts "\e[31m#{exception.class}: #{exception.message}"
  output.puts "from #{exception.backtrace.first}\e[0m"
end

if defined?(Rails)
  require "rails/console/app"
  require "rails/console/helpers"
  TOPLEVEL_BINDING.eval("self").extend ::Rails::ConsoleMethods
end

begin
  require "awesome_print"
  Pry.config.print = proc {|output, value| Pry::Helpers::BaseHelpers.stagger_output("=> #{value.ai}", output)}
rescue LoadError => err
   warn "=> Unable to load awesome_print"
end
{% endhighlight %}
          <kbd>vim ~/.irbrc</kbd>
{% highlight vim %}
begin
  require "pry"
  Pry.start
  exit
rescue LoadError => e
  warn "=> Unable to load pry"
end
{% endhighlight %}
        </li>
      </ul>
    </div>
  </dd>
</dl>
