
/** Ce ficher sert à regrouper tous les routes des différents composants du projet **/

import express from 'express';
const router = express.Router();

import calculatorRoutes from '../components/calculator/calculator.routes.js'

calculatorRoutes(router);

export default router;