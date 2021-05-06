## Docker

#### O que é docker?

É um software que fornece containers virtuais que empacota a sua aplicação e suas dependências para dentro de um container.

A partir desse momento, o container se torna portável para utilizar em qualquer outro lugar que tenha o docker instalado, seja na máquina de outras pessoas ou em servidores.


### 1 - Não é um sistema de virutalização tradicional, baseado em máquinas virtuais.

Por exemplo; cria uma máquina virtual em cima do Virtual Box: 

* Instala no seu computador Virtual Box e começa a criar máquinas virtuais completas. Tem um sistema Linux, e instala o supervisor no caso o Virutal Box e consegue instalar. 

* Numa máquina Linux um sistema operacional Windows e rodar esse sistema virtualizado.

* Tem um sistema operacional completo, inclusive pode ter uma máquina host sendo Linux, e a máquina virutal sendo Windows.

Não exige nenhum tipo de compatibilização entre essas duas arquiteturas:

* São KERNEL diferentes, biblioteca diferentes formas de interpretar as linguagens diferentes mas com a máquina virutal você consegue fazer isso.

### 2 - Engine de Administração de Containers? 

Ele nada mais é do que um serviço que vai administrar os containers que irá criar a partir do docker.

### 3 - Utiliza os Serviços do LXC (Linux Containers)

Essa tecnologia pertence ao Linux. Consegue criar máquinas virutais com qualquer sistema operacional mesmo que o host seja um tipo específico.

* Consegue criar uma máquina Linux, dentro de uma máquina host Linux.

* Também consegue criar uma máquina virtual Windows dentro de um host Linux.

* Pode criar uma máquina virutal Mac, embora seja um pouco mais difícil, também consegue criar um host diferentes, ou seja, criar máquinas virtuais com qualquer sistema operacional mesmo que o host seja específico.

Informação importante:

- Essa não é uma realidade dos contêineres.

Por que os container como um processo é segregado ele usa recursos da máquina host. Então ele vai usar o Kernel da máquina. 

Ele é baseado no XLC que são Linux contêiners.

Pode restartar um contênier baseado em Debian. Pode restartar um container baseado no Ubuntu, Red Hat mas não pode ter um contêiner baseado em Mac OS, e não pode restartar um contênier baseado em Windows. Por que essa tecnologia só está disponível nos sistemas operacionais baseado em Linux.


* Maior parte dos servidores é Linux

### 4 - Open Source e Escrito em GO

Ela foi desenvolvida com a linguagem GO que foi criada pelo google, o tipo de virutalização que o Docker utiliza é justamente virtualização baseado em software, baseado em sistema operacional.

### 5 - Sistema de Virutalização Baseado em Software (SO)

Tipo de virtualização que o Docker utiliza justamente virutalização baseado em software, baseado no sistema operacional. 

### 6 - Host e container compartilham o Kernel

Kernel da máquina host é compartilhado com container, ou seja, o kernel utiliza a máquina host com algumas outras coisas como biblioteca alguns binários. Compartilhamento é uma coisa que é muito central na tecnologia e isso é uma das grandes vantagens do Docker por isso que ele consome muito menos memória por isso que ele é muito mais rápido.

### 7 - Empacota software com vários níveis de isolamento

Existem vários níveis de isolamento que você pode conseguir com Docker:

* Quantidade de memória determinado container utiliza
* Isolamento ou controle de quanto a CPU aquele container usa
* Quantidade de rede aquele container vai consumir

Obs: ele tem um endereço IP específico, também tem um isolamento do sistema de arquivos é fundamental para o controle isolamento do Docker.

## Vantagem

* Docker traz beneficios na otimização muito mais eficiente dos recursos que são trabalhados, possui também uma inicialização muito mais rápida quando comparado com as máquinas virtuais por ser bem mais leve.

* É importante quando trabalha em uma arquitetura de sistemas distribuidos.

#### Exemplo 1 - (microserviços):

Microserviços - são serviços independentes porém eles se comunicam entre si.

Docker - no microserviços garante então um ambiente isolado com as depedências específicas para aquele serviço.

#### Exemplo 2 

Trabalhar com microserviço é utilizar multilinguagens, então pode ter um microserviço construido em Java e o outro em Node.

Quando coloca esses microserviço e containers garante que cada um desses container vai ter dependencias para executar aquele serviço:

* Serviço Java; vai ter JDK e o Maven.
* Serviço Node; enquanto o node vai ter instalado o npm entre outros.

Obs: Faz esse isolamento e garante então com que esse serviços vão ser executados em qualquer ambiente ou em qualquer servidor.

#### Exemplo 3 - (novo integrante)

* Irá trabalhar com algum determinado microserviços, ele vai ter que preparar a sua máquina no ambiente de trabalho. 

* Quando tem um Docker instalado pronto com esse microserviço ele só vai baixar essa imagem de Docker pra máquina dele e já vai ter todo esse ambiente pronto e garantido com que esse serviço vai ser executado com sucesso.

* O sistema fica mais robusto, pode criar novas aplicações criando novos container Docker e aumentando e complementando aplicação de uma maneira muito mais eficiente.

#### Quanto mais container a gente tem, mais Docker a gente cria:

* Fica mais díficil de monitorar

### Ferramentas para gerenciar e orquestrar os containers

Mais utilizada são hoje no mercado:

* Kubernetes; ele é uma ferramenta, plataforma bem robusta que traz esse gerenciamento de container.

### Docker Swarm:

É um componente de orquestração nativo de Docker, com essa ferramenta consegue trabalhar com Docker de forma muito mais fácil.








