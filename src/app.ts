import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
import usersRouter from './app/modules/users/users.route';

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

console.log(app.get('env'))

app.use('/api/v1/users', usersRouter);

app.get('/', async (req: Request, res: Response) => {
    res.send('Successfully Running!')
})

export default app