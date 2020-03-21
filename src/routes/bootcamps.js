import express from 'express'

import bootcampsController from '../controllers'

const {
  createBootcamp,
  deleteBootcamp,
  getBootcamp,
  getBootcamps,
  updateBootcamp
} = bootcampsController

const router = express.Router()

router.route('/').get(getBootcamps).post(createBootcamp)
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)

export default router
