import { bootcampService } from '~/services'

/*
  @desc       Get a Single Bootcamp
  @route      GET /api/bootcamps/:bootcampId
  @access     Public
*/
const getSingle = async ({ params }, res) => {
  const bootcampId = params.bootcampId
  const bootcamp = await bootcampService.details(bootcampId)
  const response = {
    info: 'GET /api/bootcamps/:bootcampId',
    params,
    bootcamp
  }

  res.status(200).json(response)
}

export default getSingle
