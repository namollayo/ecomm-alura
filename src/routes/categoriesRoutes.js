import express from 'express'; 
import { CategoryController } from '../controllers/categoriesController.js';

const router = express.Router();

router
    .get('/categories', CategoryController.getAllCategories)
    .get('/categories/:id', CategoryController.getCategoryById)
    .post('/categories', CategoryController.createCategories)
    // .put('/categories/:id', CategoryController.updateCategories)
    // .delete('/categories/:id', CategoryController.deleteCategories)
    
export default router; 