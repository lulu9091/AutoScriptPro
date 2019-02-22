var db = require("./db");
module.exports = {
    getIndexPage: function(req, res){ 
        var page = req.page;
        var limit = req.pagelimit;
        var orderIndex = req.query.orderBy;
        if (!page && !limit) {
            page = 1;
            limit = 2;
            orderIndex = "recent";
        }

        orders = {
            "recent": 'ilance_projects.date_added',
            "category": 'categories.name',
            "username": 'ilance_users.username',
            "project": 'ilance_projects.project_title'
        }
        order = orders[orderIndex];
        const sql =
            `SELECT p.project_title AS ProjectTitle, u.username AS Username, c.categories AS CategoryName
            FROM ilance_projects AS p
            INNER JOIN ilance_users AS u ON p.user_id = u.user_id
            LEFT JOIN ilance_categories AS c ON p.cid = c.cid`
            // ORDER BY ${order}`
        db.query(sql, function(err, result) {
            if (err) {
                return res.json({ 'error': true, 'message': 'Error occured ' + err });
            }
            res.json(result);
        })
        
    },
    setLimit: function(req,res) {

    }
};