const { Pool } = require("pg");

class ServicioPG {
    constructor() {
        this.pool = new Pool({
            user: "postgres",
            host: "localhost",
            database: "bookmarks",
            password: "1234",
            port: 5432
        });
    }
    async ejecutarSql(sql) {
        let respuesta = await this.pool.query(sql);
        return respuesta;
    }
}

module.exports = ServicioPG;