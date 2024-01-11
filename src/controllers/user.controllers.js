const catchError = require('../utils/catchError');
const User = require('../models/User');

// ********* Traer a todos los usuarios ***********
const getAll = catchError(async(req, res) => {
    // Operaciones...
    const users=await User.findAll();
    return res.json(users);
});

// **********  CREAR UN USUARIO ***********

const createUser = catchError(async(req, res) => {
    // Operaciones...
    const {first_name, last_name, email, password, birthday}=req.body
    const user=await User.create({
        first_name,
        last_name,
        email,
        password,
        birthday,

    });
    return res.json(user);
});

const getOne = catchError(async(req, res) => {
    // Operaciones...
    const {id}=req.params;
    const user=await User.findOne({where: {id:id}});
    //const user= await User.findByPk(id); este tambien puede ser
    return res.json(user);
});

const removeOne = catchError(async(req, res) => {
    // Operaciones...
    const {id}=req.params;
    await User.destroy({ where: {id:id}});
    //const user= await User.findByPk(id); este tambien puede ser
    return res.sendStatus(204);
});

const updateUser = catchError(async(req, res) => {
    // Operaciones...
    const{id}=req.params;
    const {first_name, last_name, email, password, birthday}=req.body
    
    const user=await User.update({
        first_name:first_name,
        last_name,
        email,
        password,
        birthday,
    },{where: {id:id},returning:true});
    
    return res.json(user);

});

module.exports = {
    getAll,
    createUser,
    getOne,
    removeOne,
    updateUser,
 }