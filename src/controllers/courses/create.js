import { courseService } from '~/services'

/*
  @desc       Create a New Course
  @route      POST /api/courses
  @route      POST /api/bootcamps/:bootcampId/courses
  @access     Private
*/
const create = async ({ body, params }, res) => {
  const bootcampId = params.bootcampId
  const newCourse = await courseService.add({ ...body, bootcamp: body.bootcamp || bootcampId })
  const response = {
    info: ['POST /api/courses', 'POST /api/bootcamps/:bootcampId/courses'],
    message: 'Course has been successfully created.',
    params,
    course: newCourse
  }

  res.status(201).json(response)
}

export default create
