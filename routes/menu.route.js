/** load library express */
const express = require(`express`)
const app = express()

/** allow to read another file */
app.use(express.json())

/** load controller of menu */
const menuController = require(`../controllers/menu.controller`)

/** call authorization method */
const { authorization } = require('../controllers/auth.controller')

/** create route */
app.post(`/menu`, authorization(["admin", "kasir", "manajer"]),menuController.addMenu)
app.get(`/menu`, authorization(["admin", "kasir", "manajer"]),menuController.getMenu)
app.post(`/menu/find`, authorization(["admin", "kasir", "manajer"]),menuController.findMenu)
app.put(`/menu/:id_menu`,authorization(["admin", "kasir","manajer"]), menuController.updateMenu)
app.delete(`/menu/:id_menu`, authorization(["admin", "kasir","manajer"]),menuController.deleteMenu)

/** epxort module nya */
module.exports = app