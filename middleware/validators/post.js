const { check } = require('express-validator')

const Add = [
    check("title").notEmpty().withMessage("title field is required"),
    check("description").notEmpty().withMessage("description field is required"),
    check("phone").notEmpty().withMessage("phone field is required"),
    check("address").notEmpty().withMessage("address field is required"),
    check("gender").notEmpty().withMessage("gender field is required"),
    check("image").notEmpty().withMessage("image field is required"),
    check("category").notEmpty().withMessage("category field is required"),
    check("user").notEmpty().withMessage("user field is required"),
    check("status").notEmpty().withMessage("status field is required"),
    check("visible").notEmpty().withMessage("visible field is required"),
    check("localisation.longitude").notEmpty().withMessage("longitude field is required"),
    check("localisation.latitude").notEmpty().withMessage("latitude field is required"),
]

const Edit = [
    // check("title").notEmpty().withMessage("title field is required"),
    // check("description").notEmpty().withMessage("description field is required"),
    // check("phone").notEmpty().withMessage("phone field is required"),
    // check("address").notEmpty().withMessage("address field is required"),
    // check("gender").notEmpty().withMessage("gender field is required"),
    // check("image").notEmpty().withMessage("image field is required"),
    // check("category").notEmpty().withMessage("category field is required"),
    // check("user").notEmpty().withMessage("user field is required"),
    // check("status").notEmpty().withMessage("status field is required"),
    // check("visible").notEmpty().withMessage("visible field is required"),
    // check("localisation.longitude").notEmpty().withMessage("longitude field is required"),
    // check("localisation.latitude").notEmpty().withMessage("latitude field is required"),
    check("id").isLength({min: 10}).withMessage("id field is required"),
]


const Signal = [
    check("id").isLength({min: 10}).withMessage("id field is required"),
]


module.exports = { Add, Edit, Signal }