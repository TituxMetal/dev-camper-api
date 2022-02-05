import { courseService } from '~/services'

/*
  @desc       Update a Course
  @route      PUT /api/courses/:courseId
  @route      PUT /api/bootcamps/:bootcampId/courses/:courseId
  @access     Private
*/
const update = async ({ body, params }, res) => {
  const bootcampId = params.bootcampId || undefined
  const courseId = params.courseId
  const updatedCourse = await courseService.update(courseId, {
    ...body,
    bootcamp: body.bootcamp || bootcampId
  })
  const response = {
    info: ['PUT /api/courses/:courseId', 'PUT /api/bootcamps/:bootcampId/courses'],
    message: 'Course has been successfully updated.',
    params,
    course: updatedCourse
  }

  res.status(200).json(response)
}

export default update
