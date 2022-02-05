import { Router } from 'express'

import { bootcampsController } from '~/controllers'

import coursesRoutes from './courses'

const router = new Router({ mergeParams: true })

router.use('/:bootcampId/courses', coursesRoutes)

router.get('/', bootcampsController.getAll)
router.get('/:bootcampId', bootcampsController.getSingle)
router.post('/', bootcampsController.create)
router.put('/:bootcampId', bootcampsController.update)
router.delete('/:bootcampId', bootcampsController.remove)

export default router
