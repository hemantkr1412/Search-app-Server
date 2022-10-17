import mongoose from "mongoose";

const Schema = mongoose.Schema;

const addSchema = new Schema({
    _id: { type: Number, required: true },
    companyId: { type: Number, required: true },
    primary_text: { type: String, required: true },
    headline: { type: String, required: true },
    CTA: { type: String, required: true },
    url:{ type: String, required: true }
},{collection:"adds"});


export default mongoose.model("ADD", addSchema);
