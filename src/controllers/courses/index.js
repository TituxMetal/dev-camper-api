import { requestValidator } from '@lgdweb/common-express-helpers'

import { coursesValidator, objectIdValidator } from '~/validation'

import create from './create'
import getAll from './getAll'
import getSingle from './getSingle'
import remove from './remove'
import update from './update'

export default {
  create: [
    requestValidator(coursesValidator.create),
    requestValidator(objectIdValidator('bootcampId')),
    create
  ],
  getAll,
  getSingle: [requestValidator(objectIdValidator('courseId')), getSingle],
  remove: [requestValidator(objectIdValidator('courseId')), remove],
  update: [
    requestValidator(coursesValidator.update),
    requestValidator(objectIdValidator('courseId')),
    requestValidator(objectIdValidator('bootcampId')),
    update
  ]
}
