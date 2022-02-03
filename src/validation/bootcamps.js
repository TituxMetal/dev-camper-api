import { body } from 'express-validator'

const ucFirst = ([first, ...rest]) => [first.toUpperCase(), ...rest].join('')

const requiredField = field =>
  body(field)
    .exists()
    .withMessage(`${ucFirst(field)} is required.`)

const nameField = body('name')
  .trim()
  .notEmpty()
  .withMessage(`${ucFirst('name')} must not be empty.`)
  .bail()
  .isLength({ max: 50 })
  .withMessage(`${ucFirst('name')} field must be less or equal to 50 characters long.`)
  .optional()

const descriptionField = body('description')
  .trim()
  .notEmpty()
  .withMessage(`${ucFirst('description')} must not be empty.`)
  .bail()
  .isLength({ max: 500 })
  .withMessage(`${ucFirst('description')} field must be less or equal to 500 characters long.`)
  .optional()

const websiteField = body('website')
  .trim()
  .isURL()
  .withMessage(`${ucFirst('website')} must be a valid url (http or https).`)
  .optional()

const phoneField = body('phone')
  .trim()
  .isLength({ min: 10, max: 20 })
  .withMessage(`${ucFirst('phone')} must be 10 characters long.`)
  .optional()

const emailField = body('email')
  .trim()
  .isEmail()
  .withMessage(`${ucFirst('email')} must be a valid email.`)
  .optional()

const addressField = body('address')
  .trim()
  .notEmpty()
  .withMessage(`${ucFirst('address')} must not be empty.`)
  .optional()

const careersField = body('careers')
  .notEmpty()
  .withMessage(`${ucFirst('careers')} must not be empty.`)
  .bail()
  .isIn(['Web Development', 'Mobile Development', 'UI/UX', 'Data Science', 'Business', 'Other'])
  .optional()

const averageRatingField = body('averageRating')
  .isInt()
  .withMessage(`${ucFirst('averageRating')} must be a number.`)
  .bail()
  .isNumeric({ min: 1, max: 10 })
  .withMessage(`${ucFirst('averageRating')} must be a value between 1 and 10.`)
  .optional()

const bootcampsValidator = {
  create: [
    requiredField('name'),
    requiredField('description'),
    requiredField('address'),
    requiredField('careers'),
    nameField,
    descriptionField,
    websiteField,
    phoneField,
    emailField,
    addressField,
    careersField,
    averageRatingField
  ],
  update: [
    nameField,
    descriptionField,
    websiteField,
    phoneField,
    emailField,
    addressField,
    careersField,
    averageRatingField
  ]
}

export default bootcampsValidator
