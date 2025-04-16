import express, { NextFunction, Request, Response } from 'express';
import { userRouter } from './src/user/user.controller';

const app = express();
const PORT = 5000;

async function main() {
    app.use(express.json());

    app.use('/api/users', userRouter);

    app.all('/{*splat}', (req, res) => {
        res.status(404).json({ message: 'Not found' });
    });

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({ message: 'Something wrong!' });
    })

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

main();