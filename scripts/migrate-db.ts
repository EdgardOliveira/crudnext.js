import {query} from '../lib/db'

// Cria a tabela se ela não existir
async function migrate() {
    try {
        await query(`
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
    `)
        console.log('A migração de endereços rodou com sucesso!')
    } catch (e) {
        console.error('Não conseguimos rodar a migração. Verifique as suas credencias no banco de dados!')
        process.exit(1)
    }
}

migrate().then(() => process.exit())