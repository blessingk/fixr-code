import { Router } from 'express';
import { fixCode } from '../controllers/fixCode.js';
import { makeCodeChanges } from '../controllers/changeController.js';
const router = Router();
console.log('here');
router.post('/make-changes', makeCodeChanges);
router.post('/fixr', fixCode)
export default router;
