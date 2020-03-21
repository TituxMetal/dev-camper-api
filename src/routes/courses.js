import express from 'express'

import coursesController from '../controllers'

const { createCourse, deleteCourse, getCourse, getCourses, updateCourse } = coursesController

const router = express.Router()

router.route('/').get(getCourses).post(createCourse)
router.route('/:id').get(getCourse).put(updateCourse).delete(deleteCourse)

export default router
