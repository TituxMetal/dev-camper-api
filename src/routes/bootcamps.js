import { Router } from 'express'

import { bootcampsController } from '~/controllers'

const router = new Router()

router.get('/', bootcampsController.getAll)
router.get('/:bootcampId', bootcampsController.getSingle)
router.post('/', bootcampsController.create)
router.put('/:bootcampId', bootcampsController.update)
router.delete('/:bootcampId', bootcampsController.remove)

export default router
