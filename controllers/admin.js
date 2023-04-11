const AdminsService = require("../services/admin")
const codes = require("../common/codes");


// get user
const Get = (req, res) => {
    const { sort, limit, skip, filter, expend } = req.query

    AdminsService.Get(sort, limit, skip, filter, expend).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}
 
// me
const Me = (req, res) => {

    const user = req.user

    if (user) {
        res.status(codes.ok).json({ err: false, msg: user })
    } else {
        res.status(codes.badRequest).json({ err: true, msg: "empty" })
    }

}



// login
const Login = (req, res) => {
    const { email, password } = req.body

    AdminsService.Login(email, password).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}
 
// create
const Create = (req, res) => {
    const { fullname, password, email, avatar } = req.body

    AdminsService.Create(fullname, password, email, avatar ).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}


// edit User
const Edit = (req, res) => {
    const { fullname, email, avatar } = req.body
    const { id } = req.params
    
    AdminsService.Edit(id, fullname, email, avatar).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

// reset password
const Reset = (req, res) => {
    const { oldPass, newPass } = req.body
    const { id } = req.params

    AdminsService.Reset(id, oldPass, newPass).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}


// forgot Password User
const Forgot = (req, res) => {
    const { email } = req.body

    AdminsService.Forgot(email).then(result => {
        res.status(codes.ok).json({ err: false, msg: result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

module.exports = { Get , Edit, Login, Create, Forgot, Me, Reset }