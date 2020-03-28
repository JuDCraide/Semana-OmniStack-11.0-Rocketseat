const connection = require('../database/connection')

module.exports = {

    async create(req, res) {
        const { id } = req.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first()



        if (typeof ong === 'undefined'){            
            return res.status(400).json({error: "ONG doesn't exist" });
        }

        return res.json(ong);
    },
}