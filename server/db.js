import mongoose from "mongoose";
import { mongodb } from "../config/sererConf";

import userSchema from "./schema/User.schema";

mongoose.connect(mongodb)
Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connect error'))
db.once('open', function () {
	console.log('Mongodb started successfully')
})

const model = {
	// 在此处扩展 model，例如：
	// Article: mongoose.model('Article', articleSchema),
	User: mongoose.model('User', userSchema)
}

export default model;
