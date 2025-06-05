import express from 'express';
import { Task } from '../models/taskModel.js';

const router = express.Router();


// Create a new task item
router.post("/api/tasks", async(req, res) => {
    const taskDetails = req.body;
    try {
        const result = await Task.create(taskDetails)
        res.send({
            success: true,
            message: "Task is created succesfully",
            data: result
        })
    } catch (error) {
        console.log(error);
        res.send({
            success: false,
            message: "Failed to create task",
            data: result
        });
    }
})


// Retrieve all task items from the database
router.get("/api/tasks", async (req, res) => {
    try{
        const result = await Task.find()
        res.send({
            success: true,
            message: "Task lists retrived succesfully",
            data: result
        });

    }catch (error){
        res.send({
            success: true,
            message: "Failed to retrive task list",
            data: result
    });
  }
})

// Update a task item by its ID
router.put("/api/tasks/:id", async (req, res) => {
    const taskId = req.params.id;
    try {
        const task = await Task.findById(taskId);
        
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
                data: null
            });
        }

        const result = await Task.findByIdAndUpdate(
            taskId,
            { completed: true },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Task marked as completed successfully",
            data: result
        });
    } catch (error) {
        console.error("Error marking task as completed:", error);
        res.status(500).json({
            success: false,
            message: "Failed to mark task as completed",
            data: null
        });
    }
});


// Delete a task item by its ID
router.delete("/api/tasks/:id", async (req, res) =>{
    const taskId = req.params.id
    try {
        await Task.findByIdAndDelete(taskId);
        res.send({
            success: true,
            message: "Task deleted succesfully.",
            data: null
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Task deleted succesfully.",
            data: null
        });
    }
});

export default router;