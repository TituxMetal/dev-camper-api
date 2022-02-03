import { requestValidator } from '@lgdweb/common-express-helpers'

import { bootcampService } from '~/services'
import { bootcampsValidator, objectIdValidator } from '~/validation'

/*
  @desc       Create new bootcamp
  @route      POST /api/bootcamps
  @access     Private
*/
const create = async ({ body }, res) => {
  const newBootcamp = await bootcampService.add(body)
  const response = {
    info: 'POST /api/bootcamps',
    message: 'Bootcamp has been successfully created.',
    bootcamp: newBootcamp
  }

  res.status(201).json(response)
}

/*
  @desc       Get all bootcamps
  @route      GET /api/bootcamps
  @access     Public
*/
const getAll = async (_req, res) => {
  const bootcamps = await bootcampService.all()
  const response = {
    info: 'GET /api/bootcamps',
    count: bootcamps.length,
    bootcamps
  }
  res.status(200).json(response)
}

/*
  @desc       Get single bootcamp
  @route      GET /api/bootcamps/:bootcampId
  @access     Public
*/
const getSingle = async ({ params }, res) => {
  const bootcampId = params.bootcampId
  const bootcamp = await bootcampService.details(bootcampId)
  const response = {
    info: 'GET /api/bootcamps/:bootcampId',
    params: bootcampId,
    bootcamp
  }

  res.status(200).json(response)
}

/*
  @desc       Delete bootcamp
  @route      DELETE /api/bootcamps/:bootcampId
  @access     Private
*/
const remove = async ({ params }, res) => {
  const bootcampId = params.bootcampId
  const deletedBootcamp = await bootcampService.remove(bootcampId)
  const response = {
    info: 'DELETE /api/bootcamps/:bootcampId',
    params: bootcampId,
    message: 'Bootcamp has been successfully removed.',
    bootcamp: deletedBootcamp
  }

  res.status(200).json(response)
}

/*
  @desc       Update bootcamp
  @route      PUT /api/bootcamps/:bootcampId
  @access     Private
*/
const update = async ({ body, params }, res) => {
  const bootcampId = params.bootcampId
  const updatedBootcamp = await bootcampService.update(bootcampId, body)
  const response = {
    info: 'PUT /api/bootcamps/:bootcampId',
    params: bootcampId,
    message: 'Bootcamp has been successfully updated.',
    bootcamp: updatedBootcamp
  }

  res.status(200).json(response)
}

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
