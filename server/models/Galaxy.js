import mongoose from "mongoose";
const Schema = mongoose.Schema

export const GalaxySchema = new Schema(
    {
        name: { type: String, required: true, minlength: 3, maxlength: 100 },
    },
    { timestamps: true, toJSON: { virtuals: true } }
)