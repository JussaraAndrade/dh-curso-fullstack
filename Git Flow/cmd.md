## Navegar entre pastas

1 - Entrar na pasta:

```js
    cd nome_da_pasta
```

2 - Sair da pasta:

```js
    cd ..
```

## Lista arquivos dentro de uma pasta

1 - Listagem simples:

```js
    ls
```
2 - Listagem completa:

```js
    ls-la
```

3 - Mostrar o caminho atual:

```js
    pws
```

## Visualiza modificações

1 - visualiza as alterações que foi feita em qual linha e qual arquivo
```js
    git diff
```

## Desfazendo modificações

1 - Desfaz apenas alteração em um arquivo
```js
    git restore nomeDoArquivo.md
```

## Nova pasta

1 - Cria uma pasta:

```js
    mkdir nome_da_pasta
```

2 - Cria um arquivo:

```js
    echo touch nome_do_arquivo
```

## Remove um arquivo ou pasta

1 - Remove arquivo:

```js
    rm nome_arquivo.txt
```

2 - Remove pasta:

```js
    rm -rf nome_da_pasta
```

3 - Move arquivo:

```js
    git mv nomeDoArquivo.md pasta/nomeDoArquivo.md
```

4 - Renomear arquivo ou pasta:

```js
    git mv nome_do_arquivo.md 2-nome_do_arquivo.md
```

### comandos básico 

1 - Clonar repositório criado/existente

```js
    git clone caminhoDaURL
```

2 - Verifica estado dos arquivos no repositório

```js
    git status
```

3 - Adiciona o stage

```js
    // adiciona apenas um arquivo 
    git add nome_do_arquivo

    // adiciona todos os arquivos que foi alterado/mexido
    git add .
```

4 - Informa uma mensagem ao commitar o arquivo

```js
    git commit -m "digite a mensagem"
```

5 - Baixa alterações do repositório remoto para máquina local

```js
    git pull
```

### Excluir commit

```js
    // HEAD é o ponteiro e ele terá um número as4fd8
    git reset -hard HEAD~1
    git push -force
```