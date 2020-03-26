import { Bootcamp } from '../models'

/*
  @desc       Get all bootcamps
  @route      GET /api/bootcamps
  @access     Public
*/
const getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find()

    res.status(200).json({ success: true, data: bootcamps })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}

/*
  @desc       Get single bootcamp
  @route      GET /api/bootcamps/:id
  @access     Public
*/
const getBootcamp = async (req, res) => {
  try {
    const bootcampId = req.params.id
    const bootcamp = await Bootcamp.findById(bootcampId)

    if (!bootcamp) {
      res.status(400).json({ success: false, error: 'No bootcamp for this id' })
      return
    }

    res.status(200).json({ success: true, data: bootcamp })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}

/*
  @desc       Create new bootcamp
  @route      POST /api/bootcamps
  @access     Private
*/
const createBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.create(req.body)

    res.status(201).json({ success: true, data: bootcamp })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}

/*
  @desc       Update bootcamp
  @route      PUT /api/bootcamps/:id
  @access     Private
*/
const updateBootcamp = async (req, res) => {
  const bootcampId = req.params.id
  const data = req.body
  const updates = Object.keys(data)

  try {
    const foundBootcamp = await Bootcamp.findById(bootcampId)

    if (!foundBootcamp) {
      const error = JSON.stringify({ success: false, error: 'No bootcamp found' })
      throw new Error(error)
    }

    updates.forEach(update => (foundBootcamp[update] = data[update]))
    const updatedBootcamp = await foundBootcamp.save(req.body)

    res.status(200).json({ success: true, data: updatedBootcamp })
  } catch (error) {
    res.status(400).json({ success: false, error: 'Something went wrong.' })
  }
}

/*
  @desc       Delete bootcamp
  @route      DELETE /api/bootcamps/:id
  @access     Private
*/
const deleteBootcamp = async (req, res) => {
  const bootcampId = req.params.id

  try {
    const foundBootcamp = await Bootcamp.findOneAndDelete({ _id: bootcampId })

    if (!foundBootcamp) {
      const error = JSON.stringify({ success: false, error: 'No bootcamp found' })
      throw new Error(error)
    }

    res.status(200).json({ success: true, data: {} })
  } catch (error) {
    res.status(400).json({ success: false, error: 'Something went wrong.' })
  }
}

export default { createBootcamp, deleteBootcamp, getBootcamp, getBootcamps, updateBootcamp }
