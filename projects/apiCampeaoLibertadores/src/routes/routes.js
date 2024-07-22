import express from 'express';
import { championshipReturns, championshipIdReturns, championshipYearReturns } from '../controllers/campeonatosController.js';

const router = express.Router();

// router.get('/campeonatos/:id', championshipIdReturns);
// router.get('/campeonatos/', championshipYearReturns);
router.get('/campeonatos', championshipReturns);

export default router;