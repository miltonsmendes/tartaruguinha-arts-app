import { Request, Response } from 'express';
import knex from '../database/connection';


export default {

    async list(request: Request, response: Response) {
 
        var result = await knex('tb_products').orderBy('name');
    
        return response.status(200).json({ data: result });

    },

    async find(request: Request, response: Response) {

        const { id_product } = request.params;
        const product = await knex('tb_products').where({ id_product });

        return response.status(200).json({ data: product });

    },

}