import { bootcampService } from '~/services'

/*
  @desc       Get All Bootcamps
  @route      GET /api/bootcamps
  @access     Public
*/
const getAll = async (_req, res) => {
  const bootcamps = await bootcampService.all()
  const response = {
    info: 'GET /api/bootcamps',
    count: bootcamps.length,
    bootcamps
  }
  res.status(200).json(response)
}

export default getAll
