import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/product";
const connection = new Sequelize({
    database: 'sisweb_db',
    dialect: 'mysql',
    username: 'root',
    password: '12345',
    host: 'localhost',
    port: 3306,
    models: [
    Product
]
});

async function connectionDB(){
    try {
        await connection.authenticate();  // Verifica conexión con MySQL
        await connection.sync();
        console.log("Conectado a MySQL correctamente");
    } catch (e) {
        console.error("Error al conectar a MySQL:", e);
    }
}


export default connectionDB;
