/*
  @desc       Get all courses
  @route      GET /api/courses
  @access     Public
*/
const getCourses = (req, res) => {
  res.status(200).json({ success: true, msg: 'show all courses' })
}

/*
  @desc       Get single course
  @route      GET /api/courses/:id
  @access     Public
*/
const getCourse = (req, res) => {
  res.status(200).json({ success: true, msg: `show course ${req.params.id}` })
}

/*
  @desc       Create new course
  @route      POST /api/courses
  @access     Private
*/
const createCourse = (req, res) => {
  res.status(200).json({ success: true, msg: 'create course' })
}

/*
  @desc       Update course
  @route      PUT /api/courses/:id
  @access     Private
*/
const updateCourse = (req, res) => {
  res.status(200).json({ success: true, msg: `update course ${req.params.id}` })
}

/*
  @desc       Delete course
  @route      DELETE /api/courses/:id
  @access     Private
*/
const deleteCourse = (req, res) => {
  res.status(200).json({ success: true, msg: `delete course ${req.params.id}` })
}

export default { createCourse, deleteCourse, getCourse, getCourses, updateCourse }
