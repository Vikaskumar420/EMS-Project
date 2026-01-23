import mongoose, { Schema } from "mongoose";
import User from "./User.js";


const leaveSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    leaveType: {type: String , required:true},
    startDate: {type: Date , required:true},
    endDate: {type: Date , required:true},
    reason: {type: String , required:true},
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});

const Leave = mongoose.model('Leave', leaveSchema);
export default Leave;