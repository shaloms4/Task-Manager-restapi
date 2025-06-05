import mongoose, {model, Schema} from "mongoose";

const taskSchema = new Schema({
    text: {type: String, required: true},
    priority: {type: String, required: true},
    deadline: {type: String, required: true},
    completed: {type: Boolean, default: false}
});

export const Task = mongoose.models.Task || new model("Task", taskSchema);