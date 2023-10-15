let getVanbanPage = (req, res) => {
    return res.render("vanbanpage.ejs", {
        user: req.user
    })
};

module.exports = {
    getVanbanPage: getVanbanPage
};
