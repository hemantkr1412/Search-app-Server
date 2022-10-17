import mongoose from "mongoose";

const Schema = mongoose.Schema;

const companySchema = new Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    url:{ type: String, required: true }
},{collection:"company"});


export default mongoose.model("COMPANY", companySchema);