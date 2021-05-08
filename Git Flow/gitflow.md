## Fluxo Git Flow

1 - Cria uma branch para cada página exemplo front end:

* home, login, cadastra, recupera a senha, etc.

```js
    git branch home // Cria uma nova branch
    git checkout home // Muda de branch 
```

2 - Terminou desenvolver a página, digitar seguintes comandos para branch `home`:


```js
    git add . //Adiciona o arquivo que foi feita alteração 

    git commit -m "feat: comentário da alteração" //Adiciona um comentário 

    git push origin home // Envia as alterações 
```

3 - Puxa alteração da branch `develop` para o repositório `home` evitando futuros conflitos:

```
    git pull origin develop
```

4 - Muda de branch para `develop`:

```
    git checkout develop
```

5 - Mescla as alterações da branch `home` para `develop`:

* Junta as alterações sobrescrevendo o código fonte

```
    git merge home
```

6 - Envia as alterações para o repositório git `develop`:

```
    git push origin develop
```

### Commits semânticos:

* `feat` -  uma nova funcionalidade
* `fix` -  uma correção de bug
* `docs` - alteração na documentação
* `style` - formatação de código
* `refactor` - refatoração de código em produção
* `test` - adiciona ou refatora testes, sem impacto em código em produção
* `chore` - adiciona ou edita tasks do Grunt, ou Webpace, sem impacto em produção. 




