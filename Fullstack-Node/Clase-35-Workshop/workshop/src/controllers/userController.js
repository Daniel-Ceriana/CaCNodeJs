const { render } = require("ejs");
const service = require("../services/userService");



const index = async(req, res) => {
    const rows = await service.findAll();

    res.render("users", { rows });
};
const show = async(req, res) => {
    const rows = await service.findOne(req.params);
    res.send(rows);
};

const store = async(req, res) => {
    const result = await service.store(req.body);
    res.send(result);
};
const create = async(req, res) => {
    res.render("users/create");
};


module.exports = {
    index,
    show,
    store,
    create,
}