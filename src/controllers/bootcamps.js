/*
  @desc       Get all bootcamps
  @route      GET /api/bootcamps
  @access     Public
*/
const getBootcamps = (req, res) => {
  res.status(200).json({ success: true, msg: 'show all bootcamps' })
}

/*
  @desc       Get single bootcamp
  @route      GET /api/bootcamps/:id
  @access     Public
*/
const getBootcamp = (req, res) => {
  res.status(200).json({ success: true, msg: `show bootcamp ${req.params.id}` })
}

/*
  @desc       Create new bootcamp
  @route      POST /api/bootcamps
  @access     Private
*/
const createBootcamp = (req, res) => {
  res.status(200).json({ success: true, msg: 'create bootcamp' })
}

/*
  @desc       Update bootcamp
  @route      PUT /api/bootcamps/:id
  @access     Private
*/
const updateBootcamp = (req, res) => {
  res.status(200).json({ success: true, msg: `update bootcamp ${req.params.id}` })
}

/*
  @desc       Delete bootcamp
  @route      DELETE /api/bootcamps/:id
  @access     Private
*/
const deleteBootcamp = (req, res) => {
  res.status(200).json({ success: true, msg: `delete bootcamp ${req.params.id}` })
}

export default { createBootcamp, deleteBootcamp, getBootcamp, getBootcamps, updateBootcamp }
