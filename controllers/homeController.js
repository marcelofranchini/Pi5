const homeController = {
    index: (req, res) => {

        res.render("index", { titulo: "Home" })
    },
    create: async(req, res) => {
        try {
            const { comprimento, temperatura, coeficiente } = req.body
            let l = comprimento;
            let t = temperatura
            let c = 0.00012

            let linear = l + (l * c * t);

            console.log(c)
            return res.status(200).json(linear)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }
}
module.exports = homeController