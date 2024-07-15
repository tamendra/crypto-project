import { Router } from 'express';
import { getData } from '../controllers/dataController';

const router = Router();

router.get('/:symbol', getData);

export default router;
