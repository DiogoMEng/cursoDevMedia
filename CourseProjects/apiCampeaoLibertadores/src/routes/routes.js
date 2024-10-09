import express from 'express';
import { championshipReturns, championshipIdReturns } from '../controllers/campeonatosController.js';
import { checkYear, checkTeam } from '../middlewares/checkValues.js';

const router = express.Router();

router.get('/campeonatos/:id', championshipIdReturns);
router.get('/campeonatos', checkYear, checkTeam, championshipReturns);

export default router;