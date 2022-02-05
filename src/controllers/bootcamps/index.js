import { requestValidator } from '@lgdweb/common-express-helpers'

import { bootcampsValidator, objectIdValidator } from '~/validation'

import create from './create'
import getAll from './getAll'
import getSingle from './getSingle'
import remove from './remove'
import update from './update'

export default {
  create: [requestValidator(bootcampsValidator.create), create],
  getAll,
  getSingle: [requestValidator(objectIdValidator('bootcampId')), getSingle],
  remove: [requestValidator(objectIdValidator('bootcampId')), remove],
  update: [
    requestValidator(objectIdValidator('bootcampId')),
    requestValidator(bootcampsValidator.update),
    update
  ]
}
