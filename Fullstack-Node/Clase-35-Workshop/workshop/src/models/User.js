const { conn } = require("../config/conn");

const findAll = async() => {
    try {
        //array con dos rows
        const [rows] = await conn.query("SELECT * FROM users");
        // const [rows] = await conn.query("SELECT * FROM Productos");
        return rows;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
}


const findOne = async(params) => {
    //hay que validar si viene id
    const { id } = params
    try {
        //array con dos rows
        const [rows] = await conn.query("SELECT * FROM users where ?", { id });
        return rows;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
}
const store = async(body) => {

    const { email, password } = body
    try {
        //array con dos rows
        const [rows] = await conn.query("INSERT INTO users SET ?", { email, password });
        return rows;
    } catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
            return "Registro duplicado"
        }
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

module.exports = {
    findAll,
    findOne,
    store,
}