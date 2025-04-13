import express from 'express';
import { userRouter } from './src/user/user.controller.js';

const app = express();
const PORT = 5000;

async function main() {
    app.use(express.json());

    app.use('/api/users', userRouter);
    app.all('*', (req, res) => {
        res.status(404).json({ message: 'Not found' });
    });

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

main();