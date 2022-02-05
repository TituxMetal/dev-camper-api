import { courseService } from '~/services'

/*
  @desc       Delete a Course
  @route      DELETE /api/courses/:courseId
  @route      DELETE /api/bootcamps/:bootcampId/courses/:courseId
  @access     Private
*/
const remove = async ({ params }, res) => {
  const courseId = params.courseId
  const deletedCourse = await courseService.remove(courseId)
  const response = {
    info: ['DELETE /api/courses/:courseId', 'DELETE /api/bootcamps/:bootcampId/courses/:courseId'],
    message: 'Course has been successfully removed.',
    params,
    course: deletedCourse
  }

  res.status(200).json(response)
}

export default remove
