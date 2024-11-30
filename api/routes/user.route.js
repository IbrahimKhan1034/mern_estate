import express from  'express';
import User from '../models/user.model.js';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);

export default router; 
