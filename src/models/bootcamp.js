import { model, Schema } from 'mongoose'

const bootcampSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    slug: String,
    description: {
      type: String,
      required: true,
      trim: true
    },
    website: String,
    phone: String,
    email: String,
    address: {
      type: String,
      required: true
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
      enum: ['Web Development', 'Mobile Development', 'UI/UX', 'Data Science', 'Business', 'Other']
    },
    averageRating: Number,
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
  },
  { timestamps: true }
)

bootcampSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  transform: (doc, { _id, ...rest }) => rest
})

const bootcamp = model('bootcamp', bootcampSchema)

export default bootcamp
