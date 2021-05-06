## Containers

São utilizados em larga escala no desenvolvimento, testes e principalmente no ambiente de produção de software.

### Definição

Container são uma forma de virtualização a nível de sistema operacional que permite rodar múltiplos sistemas isolados em um único sistema operacional real.

### Por que é um tipo de virtualização?

Porque containers não funciona exatamente como a virtualização que conhecemos. A diferença principal é que os contênires conseguem compartilhar o mesmo que o KERNEL do sistema operacional.

Linux possui um KERNEL todo modularizado, é possível provisionar o sistema muito mais enxuto e assim poupar recursos. Por isso que é uma forma de virtualização a nível de sistema operacional.

* Diferença daquelas máquinas virtuais que criamos como vm ware ou com o virutalbox.

### Conceito de conteiners:

* Ainda difere da virtualização em razão do seu conceito.

* A ideia dos containers é que cada container faça apenas uma coisa, e assuma uma só responsabilidade.

### Exemplo 1

Teria um container rodando MySQL outro com apache, php para aplicação pode até ser dividido em dois conteineres também se quiser e outro rodar php admin.

Mágica do container, você divide responsabilidade isolando os processos de cada ferramenta e assim garantindo que nenhuma se intrometa no funcionamento da outra para serviços web por exemplo os container deixam infraestrutura muito mais intercambiável, eficiente e flexível.

### Garante nos servidores de produção:

* Um ganho gigante de escala e performace.

