import mongoose from 'mongoose'

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: [50, 'Name field must be less or equal to 50 characters long'],
    required: [true, 'Name field is required'],
    trim: true,
    unique: true
  },
  slug: String,
  description: {
    type: String,
    maxlength: [500, 'Description field must be less or equal to 500 characters long'],
    required: [true, 'Description field is required'],
    trim: true
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
      'Website field must be a valid url (http or https)'
    ]
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone field must be less or equal to 20 characters long']
  },
  email: {
    type: String,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Email field must be a valid email'
    ]
  },
  address: {
    type: String,
    required: [true, 'Address field is required']
  },
  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    country: String,
    zipcode: String
  },
  careers: {
    type: [String],
    required: true,
    enum: [
      'Web Development',
      'Mobile Development',
      'UI/UX',
      'Data Science',
      'Business',
      'Other'
    ]
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating can not be more than 10']
  },
  averageCost: Number,
  photo: {
    type: String,
    default: 'no-photo.jpg'
  },
  housing: {
    type: Boolean,
    default: false
  },
  jobAssistance: {
    type: Boolean,
    default: false
  },
  jobGuarantee: {
    type: Boolean,
    default: false
  },
  acceptGi: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

const Bootcamp = mongoose.model('Bootcamp', BootcampSchema)

export default Bootcamp
