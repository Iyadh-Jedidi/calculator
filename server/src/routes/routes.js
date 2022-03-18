
/** This file is used to group all the routes of the different components of the project **/

import express from 'express';
const router = express.Router();

import calculatorRoutes from '../components/calculator/calculator.routes.js'

calculatorRoutes(router);

export default router;