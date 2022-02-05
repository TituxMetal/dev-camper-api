import { bootcampService } from '~/services'

/*
  @desc       Delete a Bootcamp
  @route      DELETE /api/bootcamps/:bootcampId
  @access     Private
*/
const remove = async ({ params }, res) => {
  const bootcampId = params.bootcampId
  const deletedBootcamp = await bootcampService.remove(bootcampId)
  const response = {
    info: 'DELETE /api/bootcamps/:bootcampId',
    params,
    message: 'Bootcamp has been successfully removed.',
    bootcamp: deletedBootcamp
  }

  res.status(200).json(response)
}

export default remove
