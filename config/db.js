import mongoose from "mongoose";

export  const connectDB = async () => {
   await mongoose.connect('mongodb+srv://gowthammr120703_db_user:1207035434@cluster0.6icinmq.mongodb.net/Food-del').then(()=>console.log("DB connected"));

}