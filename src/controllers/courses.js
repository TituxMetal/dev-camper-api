/*
  @desc       Create new course
  @route      POST /api/courses
  @access     Private
*/
const create = ({ body }, res) => {
  const newCourse = { ...body }
  const response = {
    info: 'POST /api/courses',
    message: 'Course has been successfully created.',
    course: newCourse
  }

  res.status(201).json(response)
}

/*
  @desc       Get all courses
  @route      GET /api/courses
  @access     Public
*/
const getAll = (req, res) => {
  const courses = []
  const response = {
    info: 'GET /api/courses',
    count: courses.length,
    courses
  }
  res.status(200).json(response)
}

/*
  @desc       Get single course
  @route      GET /api/courses/:courseId
  @access     Public
*/
const getSingle = ({ params }, res) => {
  const courseId = params.courseId
  const response = {
    info: 'GET /api/courses/:courseId',
    params: courseId,
    course: {}
  }

  res.status(200).json(response)
}

/*
  @desc       Delete course
  @route      DELETE /api/courses/:courseId
  @access     Private
*/
const remove = ({ params }, res) => {
  const courseId = params.courseId
  const response = {
    info: 'DELETE /api/courses/:courseId',
    params: courseId,
    message: 'Course has been successfully removed.',
    course: {}
  }

  res.status(200).json(response)
}

/*
  @desc       Update course
  @route      PUT /api/courses/:courseId
  @access     Private
*/
const update = ({ body, params }, res) => {
  const courseId = params.courseId
  const updatedCourse = { id: courseId, ...body }
  const response = {
    info: 'PUT /api/courses/:courseId',
    params: courseId,
    message: 'Course has been successfully updated.',
    bootcamp: updatedCourse
  }

  res.status(200).json(response)
}

export default { create, getAll, getSingle, remove, update }
