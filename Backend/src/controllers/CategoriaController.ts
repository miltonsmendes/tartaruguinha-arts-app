import { Request, Response } from 'express';
import knex from '../database/connection';


export default {

    async list(request: Request, response: Response) {

        var result = await knex('tb_categories').orderBy('id_category');

        return response.status(200).json({ data: result });
    },

    async findByCategory(request: Request, response: Response) {


        const { id_category } = request.params;
        const product = await knex('tb_products').where({ id_category });

        return response.status(200).json({ data: product });

    },

}