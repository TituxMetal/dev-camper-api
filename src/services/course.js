import HttpError from 'http-errors'

import { Bootcamp, Course } from '~/models'

const add = async ({ title, description, weeks, tuition, minimumSkill, bootcamp, ...rest }) => {
  if (await Course.exists({ title })) {
    const message = { msg: 'One or more fields already exists.' }

    throw new HttpError(422, { reason: Array(message) })
  }

  const relatedBootcamp = await Bootcamp.findById(bootcamp)

  if (!relatedBootcamp) {
    throw new HttpError(404, { reason: 'No bootcamp found.' })
  }

  const newCourse = await Course.create({
    title,
    description,
    weeks,
    tuition,
    minimumSkill,
    bootcamp,
    ...rest
  })

  return newCourse
}

const all = async (field = null) => Course.find(field)

const details = async (value = '', field = '_id') => {
  const courseDetails = await Course.findOne({ [field]: value }).populate({
    path: 'bootcamp',
    select: 'name description'
  })

  if (!courseDetails) {
    throw new HttpError(404, { reason: 'No course found.' })
  }

  return courseDetails
}

const update = async (courseId, updatedCourse = {}) => {
  const course = await Course.findById(courseId)

  if (!course) {
    throw new HttpError(404, { reason: 'No course found.' })
  }

  if (course.bootcamp.toString() !== updatedCourse.bootcamp.toString()) {
    throw new HttpError(404, { reason: 'No bootcamp found.' })
  }

  if (await Course.exists({ title: updatedCourse.title })) {
    const message = { msg: 'One or more fields already exists.' }

    throw new HttpError(422, { reason: Array(message) })
  }

  Object.assign(course, { ...updatedCourse })
  await course.save()

  return course
}

const remove = async (courseId = '') => {
  const course = await Course.findByIdAndDelete(courseId)

  if (!course) {
    throw new HttpError(404, { reason: 'No course found.' })
  }

  return course
}

export default { add, all, details, update, remove }
