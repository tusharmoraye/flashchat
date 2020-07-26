import { Request, Response, Router } from 'express';
import { OK } from 'http-status-codes';

const router = Router();

router.get('/all', async (req: Request, res: Response) => {
    return res.status(OK).json({ status: 'OK' });
});


export default router;
