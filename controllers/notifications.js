const notificationsService = require("../services/notifications")
const codes = require("../common/codes");


// get notification
const Get = (req, res) => {
    const { $sort, $limit, $skip, $filter, $expend, $q  } = req.query

    notificationsService.Get($sort, $limit, $skip, $filter, $expend, $q ).then(result => {
        res.status(codes.ok).json({ result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}
 
// add notification
const Add = (req, res) => {
    const { title, message, post } = req.body

    notificationsService.Add(title, message, post).then(result => {
        res.status(codes.ok).json({ result })
    }).catch(err => {
        res.status(codes.badRequest).json({ err: true, msg: err?.message || err })
    })
}

module.exports = { Get , Add }