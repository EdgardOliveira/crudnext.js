import {NextApiRequest, NextApiResponse} from 'next';
import {query} from '../../../lib/db';

export default async function listarEndereco(req: NextApiRequest, res: NextApiResponse) {

    const { id } = req.query;

    try {
        if (!id) {
            return res.status(400).json({ mensagem: 'É necessário fornecer um id' });
        }
        if (typeof parseInt(<string>id) !== 'number') {
            return res.status(400).json({ mensagem: 'O id tem que ser um número' })
        }

        const resultado = await query(`
            SELECT id, cep, logradouro, numero, complemento, bairro, localidade, uf 
            FROM enderecos
            WHERE id = ?
            `,
            id
        )

        return res.status(200).json({
            sucesso: true,
            data: resultado
        })
    } catch (e) {
        res.status(500).json({
            sucesso: false,
            mensagem: e.message
        })
    }
}