import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://akshatjaiswal:jKu6xBn06UdfT0fo@cluster0.t1ncc1c.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })
    console.log('MongoDB connected')
  }
  catch(error) {
      console.error(`Error: ${error.message}`)
      process.exit(1)
  }
}

export default connectDB
