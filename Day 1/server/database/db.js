import { Router } from "express";
import  mongoose from "mongoose"

const Connection = async () => {
    try{
        // const URL='mongodb://himanshu:himanshu1212@blogweb-shard-00-00.6bzrl.mongodb.net:27017,blogweb-shard-00-01.6bzrl.mongodb.net:27017,blogweb-shard-00-02.6bzrl.mongodb.net:27017/MERNBLOG?ssl=true&replicaSet=atlas-chb6gk-shard-0&authSource=admin&retryWrites=true&w=majority'
        const URL = 'mongodb+srv://himanshu:himanshu1212@blogweb.6bzrl.mongodb.net/MERNBLOG?retryWrites=true&w=majority'
        console.log('Database connected successfully')

        await mongoose.connect(URL, {useNewUrlParser:true, useUnifiedTopology: true});  //this command is an async call
        console.log('Database connected successfully')
    } catch(error){
        console.log("Error while connecting to MongoDB ---- ", error)
    }
}


export default Connection;