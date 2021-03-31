import * as Yup from 'yup'

class MeetupController {
  async store (req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.strint().required(),
      date: Yup.date().required()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!' })
    }

    return res.json()
  }

  async index (req, res) {
    return res.json()
  }
}

export default new MeetupController()
