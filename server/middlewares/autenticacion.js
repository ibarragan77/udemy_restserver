
const jwt = require('jsonwebtoken');

//=================
// Verificar token
//=================

let verificaToken = (req, res, next) =>{
    let token = req.get('token');

    // res.json({
    //    token:token
    // });

    jwt.verify( token, process.env.SEED, (err,decode)=>{
        if (err) {
            return res.status(401).json({
                ok: false,
                err : {
                    message:'Token no valido'
                }
            });
        }

        req.usuario = decode.usuario;

        next();
    });
};



//=================
// Verificar AdminRole
//=================
let verificaAdmin_Role = (req, res, next)=>{
    let usuario = req.usuario;

    if (usuario.role ==='ADMIN_ROLE'){
        next();
    }else {
        res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }
};

module.exports = {
    verificaToken,
    verificaAdmin_Role
};