import { Router } from 'express'

import { coursesController } from '~/controllers'

const router = new Router()

router.get('/', coursesController.getAll)
router.get('/:courseId', coursesController.getSingle)
router.post('/', coursesController.create)
router.put('/:courseId', coursesController.update)
router.delete('/:courseId', coursesController.remove)

export default router
