import { bootcampService } from '~/services'

/*
  @desc       Update a Bootcamp
  @route      PUT /api/bootcamps/:bootcampId
  @access     Private
*/
const update = async ({ body, params }, res) => {
  const bootcampId = params.bootcampId
  const updatedBootcamp = await bootcampService.update(bootcampId, body)
  const response = {
    info: 'PUT /api/bootcamps/:bootcampId',
    params,
    message: 'Bootcamp has been successfully updated.',
    bootcamp: updatedBootcamp
  }

  res.status(200).json(response)
}

export default update
