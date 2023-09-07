import mongoose from "mongoose";
let isConnected = false
export const connectToDB = async () => {
	mongoose.set('strictQuery', true);
{
		if (isConnected) {
			console.log('MongoDB is already connnected')
			return;
		}
		try {
			await mongoose.connect(process.env.MONGODB_URI, {
				dcName: "share_prompt",
				useNewUrlParser: true,
				useUnifiedTopology:true,
			})
			isConnected = true;
			console.log('mongodb connected');
		} catch (error) {
			console.log(error);
		}
	}
}