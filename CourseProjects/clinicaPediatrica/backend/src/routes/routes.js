import express from 'express';
import { medicalList } from '../controllers/listamedicos.js';

const router = express.Router();

router.get('/medicos', medicalList);

export default router;