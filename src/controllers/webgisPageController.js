let getWebgisPage = (req, res) => {
    return res.render("webgispage.ejs", {
        user: req.user
    })
};

module.exports = {
    getWebgisPage: getWebgisPage
};
