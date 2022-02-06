import { model, Schema } from 'mongoose'

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    description: { type: String, required: true, trim: true },
    weeks: { type: Number, required: true },
    tuition: { type: Number, required: true },
    minimumSkill: {
      type: String,
      required: true,
      enum: ['beginner', 'intermediate', 'advanced']
    },
    scholarshipAvailable: {
      type: Boolean,
      default: false
    },
    bootcamp: {
      type: Schema.ObjectId,
      ref: 'Bootcamp',
      required: true
    }
  },
  { timestamps: true }
)

courseSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  transform: (doc, { _id, ...rest }) => rest
})

const course = model('Course', courseSchema)

export default course
