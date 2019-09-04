import User from '../models/User'
import File from '../models/File'

class PromoterController {
  async index (req, res) {
    const promoters = await User.findAll({
      where: { promoter: true },
      attributes: ['id', 'name', 'email', 'banner_id'],
      include: [{
        model: File,
        as: 'avatar',
        attributes: ['name', 'path', 'url']
      }]
    })

    return res.json(promoters)
  }
}

export default new PromoterController()
