import express from 'express'
import middleware from '../middleware/authMiddleware.js'
import { addSalary,getSalary } from '../controllers/salaryController.js';

const router = express.Router();

router.post("/add", middleware, addSalary)
router.get("/:id", middleware, getSalary)






export default router