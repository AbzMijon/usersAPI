import express, { NextFunction, Request, Response } from 'express';
import { userRouter } from './src/routes/user.route';
import { postRouter } from './src/routes/post.route';

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/api', userRouter)
app.use('/api', postRouter)

app.all('/{*splat}', (req, res) => {
    res.status(404).json({ message: 'Not found' });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: 'Something wrong!' });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});