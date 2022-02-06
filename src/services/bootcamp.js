import HttpError from 'http-errors'

import { Bootcamp } from '~/models'

const add = async ({ name, description, address, careers, ...rest }) => {
  if (await Bootcamp.exists({ name })) {
    const message = { msg: 'One or more fields already exists.' }

    throw new HttpError(422, { reason: Array(message) })
  }

  const newBootcamp = await Bootcamp.create({
    name,
    description,
    address,
    careers,
    ...rest
  })

  return newBootcamp
}

const all = async (field = null) =>
  Bootcamp.find(field).populate({
    path: 'courses',
    select: 'title -bootcamp'
  })

const details = async (value = '', field = '_id') => {
  const bootcampDetails = await Bootcamp.findOne({ [field]: value }).populate({
    path: 'courses',
    select: 'title -bootcamp'
  })

  if (!bootcampDetails) {
    throw new HttpError(404, { reason: 'No bootcamp found.' })
  }

  return bootcampDetails
}

const remove = async (bootcampId = '') => {
  const bootcamp = await Bootcamp.findByIdAndDelete(bootcampId)

  if (!bootcamp) {
    throw new HttpError(404, { reason: 'No bootcamp found.' })
  }

  return bootcamp
}

const update = async (bootcampId, updatedBootcamp = {}) => {
  if (await Bootcamp.exists({ name: updatedBootcamp.name })) {
    const message = { msg: 'One or more fields already exists.' }

    throw new HttpError(422, { reason: Array(message) })
  }

  const bootcamp = await Bootcamp.findById(bootcampId)

  if (!bootcamp) {
    throw new HttpError(404, { reason: 'No bootcamp found.' })
  }

  Object.assign(bootcamp, { ...updatedBootcamp })
  await bootcamp.save()

  return bootcamp
}

export default { add, all, details, remove, update }
