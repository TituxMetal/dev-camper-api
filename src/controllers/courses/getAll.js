import { courseService } from '~/services'

/*
  @desc       Get All Courses
  @route      GET /api/courses
  @route      GET /api/bootcamps/:bootcampId/courses
  @access     Public
*/
const getAll = async ({ params }, res) => {
  const bootcampId = params.bootcampId
  const field = bootcampId ? { bootcamp: bootcampId } : null
  const courses = await courseService.all(field)
  const response = {
    info: ['GET /api/courses', 'GET /api/bootcamps/:bootcampId/courses'],
    count: courses.length,
    params,
    courses
  }
  res.status(200).json(response)
}

export default getAll
