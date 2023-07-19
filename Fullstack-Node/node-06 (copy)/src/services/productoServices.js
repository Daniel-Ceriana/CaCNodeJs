const producto = require("../models/Producto");

const getProducto = async(params) => {
    //todavia no hay mucho, pero a medida que agregemos cosas,
    // es mejor hacerlo aca
    //por ejemplo paraverificar que hay stock del producto antes de mostrarlo

    const item = await producto.getProducto(params);
    if (item.length > 0) {
        return item[0];
    }

    // return producto.getProducto(params);
    return ("No existe producto");
};
module.exports = {
    getProducto,
}