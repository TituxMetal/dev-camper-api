import { body, oneOf, param } from 'express-validator'

const ucFirst = ([first, ...rest]) => [first.toUpperCase(), ...rest].join('')

const requiredField = field =>
  body(field)
    .exists()
    .withMessage(`${ucFirst(field)} is required.`)

const titleField = body('title')
  .trim()
  .notEmpty()
  .withMessage(`${ucFirst('title')} must not be empty.`)
  .bail()
  .isLength({ max: 50 })
  .withMessage(`${ucFirst('title')} field must be less or equal to 50 characters long.`)
  .optional()

const descriptionField = body('description')
  .trim()
  .notEmpty()
  .withMessage(`${ucFirst('description')} must not be empty.`)
  .bail()
  .isLength({ max: 500 })
  .withMessage(`${ucFirst('description')} field must be less or equal to 500 characters long.`)
  .optional()

const weeksField = body('weeks')
  .isInt()
  .withMessage(`${ucFirst('weeks')} must be a number.`)
  .optional()

const tuitionField = body('tuition')
  .isInt()
  .withMessage(`${ucFirst('tuition')} must be a number.`)
  .optional()

const scholarshipAvailableField = body('scholarshipAvailable')
  .isBoolean()
  .withMessage(`${ucFirst('scholarshipAvailable')} must be a boolean.`)
  .optional()

const minimumSkillField = body('minimumSkill')
  .notEmpty()
  .withMessage(`${ucFirst('minimumSkill')} must not be empty.`)
  .bail()
  .isIn(['beginner', 'intermediate', 'advanced'])
  .optional()

const bootcampField = body('bootcamp')
  .isMongoId()
  .withMessage(`${ucFirst('bootcamp')} must be a valid ObjectId in body.`)
  .optional()

const coursesValidator = {
  create: [
    oneOf(
      [body('bootcamp').exists(), param('bootcampId').exists()],
      'An objectId is required in body or params'
    ),
    requiredField('title'),
    requiredField('description'),
    requiredField('weeks'),
    requiredField('tuition'),
    requiredField('minimumSkill'),
    titleField,
    descriptionField,
    weeksField,
    tuitionField,
    minimumSkillField,
    bootcampField,
    scholarshipAvailableField
  ],
  update: [
    titleField,
    descriptionField,
    weeksField,
    tuitionField,
    minimumSkillField,
    bootcampField,
    scholarshipAvailableField,
    oneOf(
      [body('bootcamp').exists(), param('bootcampId').exists()],
      'An objectId is required in body or params'
    )
  ]
}

export default coursesValidator
