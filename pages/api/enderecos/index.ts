import {NextApiRequest, NextApiResponse} from 'next';
import {query} from '../../../lib/db';

export default async function listarEnderecos(req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {
        case 'GET':
            try {
                const resultado = await query(`
                    SELECT id, cep, logradouro, numero, complemento, bairro, localidade, uf 
                    FROM enderecos`
                );

                return res.status(200).json({
                    sucesso: true,
                    mensagem: "Lista recuperada com sucesso!",
                    data: resultado
                });
            } catch (e) {
                return res.status(400).json({
                    successo: false,
                    mensagem: e.message
                });
            }
            break;
        case 'POST':
            try {
                const {cep, logradouro, numero, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi} = req.body

                const resultado = await query(`
                    INSERT INTO enderecos (cep, logradouro, numero, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [cep, logradouro, numero, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi]
                );

                return res.status(201).json({
                    sucesso: true,
                    mensagem: "Registro cadastrado com sucesso!",
                    data: resultado
                });
            } catch (e) {
                return res.status(400).json({
                    successo: false,
                    mensagem: e.message
                });
            }
            break;
        case 'PUT':
            try {
                const {id, cep, logradouro, numero, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi} = req.body

                const resultado = await query(`
                    UPDATE enderecos set cep =?, logradouro=?, numero=?, complemento=?, bairro=?, localidade=?, uf=?, ibge=?, gia=?, ddd=?, siafi=?
                    WHERE id = ?`,
                    [cep, logradouro, numero, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi, id]
                );

                return res.status(200).json({
                    sucesso: true,
                    mensagem: "Registro atualizado com sucesso!",
                    data: resultado
                });
            } catch (e) {
                return res.status(400).json({
                    successo: false,
                    mensagem: e.message
                });
            }
            break;
        case 'DELETE':
            try {
                const {id} = req.body;

                if (!id) {
                    return res.status(400).json({mensagem: 'É necessário fornecer um id'});
                }
                if (typeof parseInt(<string>id) !== 'number') {
                    return res.status(400).json({mensagem: 'O id tem que ser um número'})
                }

                const resultado = await query(`
                    DELETE FROM enderecos
                    WHERE id = ?`,
                    id
                );

                return res.status(200).json({
                    sucesso: true,
                    mensagem: "Registro excluído com sucesso!",
                    data: resultado
                });
            } catch (e) {
                return res.status(400).json({
                    successo: false,
                    mensagem: e.message
                });
            }
            break;
    }
}