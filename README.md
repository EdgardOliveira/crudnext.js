# CRUD com Next.js
Web app criado para testes com o novo framework Next.js

## Tecnologias utilizadas
1. Next.js
2. MariaDB
3. TypeScript

## Dependências utilizadas
1. serverless-mysql
2. dotenv

## Requisitos necessários
### Crie um banco de dados no MariaDB e dê o nome de crudnextjs
```mysql
            CREATE TABLE IF NOT EXISTS enderecos
            (
                id          INT AUTO_INCREMENT PRIMARY KEY,
                cep         varchar(8)  NOT NULL,
                logradouro  varchar(80) NOT NULL,
                numero      varchar(10) NOT NULL,
                complemento varchar(80) NOT NULL,
                bairro      varchar(40) NOT NULL,
                localidade  varchar(40) NOT NULL,
                uf          varchar(2)  NOT NULL,
                ibge        varchar(7)  NOT NULL,
                gia         varchar(4)  NOT NULL,
                ddd         varchar(3)  NOT NULL,
                siafi       varchar(4)  NOT NULL,
                created_at  TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at  TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
```