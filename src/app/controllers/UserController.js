import User from '../models/User'

class UserController {
  async store (req, res) {
    const userExists = await User.findOne({ where: { mail: req.body.email } })

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existente!' })
    }

    const { id, name, email } = await User.create(req.body)

    return res.json({ id, name, email })
  }

  async update (req, res) {
    console.log(req.userId)
    return res.json({ Ok: true })
  }
}

export default new UserController()
