import { bootcampService } from '~/services'

/*
  @desc       Create a New Bootcamp
  @route      POST /api/bootcamps
  @access     Private
*/
const create = async ({ body }, res) => {
  const newBootcamp = await bootcampService.add(body)
  const response = {
    info: 'POST /api/bootcamps',
    message: 'Bootcamp has been successfully created.',
    bootcamp: newBootcamp
  }

  res.status(201).json(response)
}

export default create
