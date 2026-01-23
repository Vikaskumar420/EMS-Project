import express from 'express'
import middleware from '../middleware/authMiddleware.js'
import { addLeave,getLeave } from '../controllers/leaveController.js';

const router = express.Router();

router.post("/add", middleware, addLeave);
router.get("/:id", middleware, getLeave);





export default router