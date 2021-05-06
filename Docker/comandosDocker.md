# Docker

Verificar instalação do Docker:

```js
    docker --version
        ou
    docker version
```

Baixar imagens:

```js
   docker pull mysql (imagem no site: hub.docker.com/_/mysql)
```

Verificar imagens baixadas:

```js
  docker image ls
```

Verificar os containers que estão rodando:

```js
   docker ps
```

Parar a execução:

```js
   docker stop c6ee6ba60ac6(nome do container) 
```

Ver todos os containers que tem:

```js
   docker ps -a
```

Remover containers:

```js
   docker rm c6ee6ba60ac6(nome do container)
```


#### Testar Hello World:

```js
   docker run hello-world
```

### Criação do Container e instalação da imagem MySQL:

```js
   docker run -e MYSQL_ROOT_PASSWORD=root -p 3310:3306 --rm --name=mysql  mysql:8.0

```

## Executar o MySQL:

Rodar o mysql:

```js
   docker run mysql
         ou
   docker run -it mysql
         ou
   docker run mysql:8.0
```

### Conectar o mysql na ferramenta dbeaver:

1 - Adicionar nova conexão

2 - Selecionar banco de dados (mysql)

3 - Configurações:

* Server Host: localhost

* Port: 3310 (verificar a porta cadastrada no passo antetior - 3310)

* Username: root (cadastrado na criação do container)

* Senha: root (cadastrado na criação do container)

Obs: Alterar no Driver Proprietes a opcao AllowPublicKeyRetrieval para true. (5 opção da lista)


### Executar imagem MySQL

Para executar a imagem do mysql, e também para executar os comandos de SCRIPT SQL:

```js
   [nome/id] - mysql1
   [comando] - mysql
```

```js
   docker exec -it mysql1 mysql -u root -p
```

### Executar comandos MySQL pelo prompt de comando com Docker

Executar comandos MySQL atraves do mysql no terminal aberto no passo anterior (docker exec -it mysql1 mysql -u root -p):

1 - Criar banco de dados:

```js
   CREATE DATABASE avanade;
```

2 - Criar um novo usuario:

```js
   CREATE USER 'avanade'@'%' IDENTIFIED BY 'password';
```

3 - Habilitar permissões de usuário

```js
   GRANT ALL PRIVILEGES on avanade.*  to 'avanade'@'%';
```
Para pegar o ip pra usar na configuração do dbeaver se for necessário:

```js
   docker inspect meu-mysql 
````



