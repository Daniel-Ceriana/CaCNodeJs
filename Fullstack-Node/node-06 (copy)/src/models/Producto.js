const { conn } = require("../config/conn");

const getProductos = async() => {
    try {
        //devuelve promesa
        const [rows] = await conn.query("SELECT * FROM productos");
        return rows;
    } catch (error) {
        throw error;
    } finally {
        //solo tenemos 10 lugares para consultas,
        //hay que ir liberandolos
        conn.releaseConnection();
    }
}
const getProducto = async(params) => {
    const { id } = params
    try {
        //devuelve promesa
        const [rows] = await conn.query("SELECT * FROM productos WHERE ?", { id });
        // const [rows] = await conn.query("SELECT * FROM productos WHERE ?", { id:id });
        //se reemplaza el ? por id
        return rows;
    } catch (error) {
        throw error;
    } finally {
        //solo tenemos 10 lugares para consultas,
        //hay que ir liberandolos
        conn.releaseConnection();
    }
}

module.exports = {
    getProductos,
    getProducto,
};