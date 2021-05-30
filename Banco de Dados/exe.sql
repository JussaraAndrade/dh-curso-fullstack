* Matricula

- tabela chamada alunos

colunas: 
- nome not null
- idade not null 
- e-mail not null

- id

//1 - Exercicio: Criar restrição, caso não exista a tabela criar uma nova
CREATE TABLE if exists alunos(
	id int auto_increment,
	nome varchar (100) not null,
	idade tinyint not null,
	profissao varchar(100),
	email varchar(50) not null,
	matricula int not null unique,
	PRIMARY KEY (id)
);


//2- Exercicio: Alter table; alterar uma tabela existente

- criar um campo descricao tamanho 100
- aumentar 100 para 500 caracter (varchar 100)
- drop na tabela

// Adiciona o campo descricao com varchar(100) com restrição not null
ALTER TABLE alunos
ADD descricao varchar(100) not null; 

// Mostra descricao dos atributos, tipo, e o tamanho.
DESCRIBE usuarios;

// Modifica a coluna descricao para varchar tamanho 500 com restrição not null
ALTER TABLE alunos
MODIFY COLUMN descricao varchar(500) not null;

DESCRIBE usuarios;

ALTER TABLE alunos
DROP descricao;


// Inserir 

INSERT INTO alunos 
VALUES (DEFAULT, 'Jussara Andrade', 27, 'Desenvolvedora Full Stack', 'teste@email.com', 1354846);

INSERT INTO alunos 
VALUES (DEFAULT, 'Thomaz Henrique', 17, 'Professor de educação física', 'teste@email.com', 146585);

INSERT INTO alunos 
VALUES (DEFAULT, 'Maria Eduarda', 14, 'Empresária', 'teste@email.com', 315468);

INSERT INTO alunos 
VALUES (DEFAULT, 'Maria Eduarda', 14, 'Empresária', 'teste@email.com', 315468);

INSERT INTO alunos 
VALUES (DEFAULT, 'Luiz', 58, 'Boy', 'teste@email.com', 656985);

INSERT INTO alunos 
VALUES (DEFAULT, 'Andréa', 30, 'professores', 'teste@email.com', 365689);

// Deletar dados

DELETE FROM alunos WHERE id = 1;
DELETE FROM alunos WHERE nome = "Jussara";

DELETE FROM alunos WHERE id > 1;

// Alterar
UPDATE alunos SET profissao = 'programadores' WHERE id = 4; 

// Buscar
SELECT * FROM alunos WHERE profissao LIKE '%dor';
SELECT * FROM alunos ORDER BY idade DESC;
SELECT * FROM alunos ORDER BY idade ASC;

SELECT * FROM alunos ORDER BY idade DESC limit 3;

SELECT * FROM alunos limit 2 offset 2;

SELECT * FROM alunos ORDER BY idade ASC limit 4;
