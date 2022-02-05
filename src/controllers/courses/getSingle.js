import { courseService } from '~/services'

/*
  @desc       Get a Single Course
  @route      GET /api/courses/:courseId
  @access     Public
*/
const getSingle = async ({ params }, res) => {
  const courseId = params.courseId
  const course = await courseService.details(courseId)
  const response = {
    info: 'GET /api/courses/:courseId',
    params: courseId,
    course
  }

  res.status(200).json(response)
}

export default getSingle
