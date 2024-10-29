import  mongoose from "mongoose";

const connectionString = process.env.NEXT_PUBLIC_MONGODB_URI as string

const connectToDatabase = async () => {
    try {
        await mongoose.connect(connectionString)
    }
    catch (err) {
        console.log(err)
    }
} 

export default connectToDatabase