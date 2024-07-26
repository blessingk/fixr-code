import { Router } from 'express';
import { fixCode } from '../controllers/fixCode.js';
import { makeCodeChanges } from '../controllers/changeController.js';
const router = Router();
console.log('here');
router.post('/pull-request', makeCodeChanges);
router.post('/fix-code', fixCode)
export default router;
