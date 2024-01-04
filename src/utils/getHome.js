const getHome = (req, res) => {
    res.status(200).json({
        msg: "Welcome to homepage"
    })
}

module.exports = getHome;