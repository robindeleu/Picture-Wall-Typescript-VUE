import express, { Application, Request, Response } from 'express'
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()
var cors = require('cors')

app.use(express.json(),
cors());

(async () => {

    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST || 'localhost',
        port: parseInt(process.env.MYSQL_PORT!) || 3306,
        user: process.env.MYSQL_USERNAME || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DATABASE || 'examen2021'
    })

    await connection.query('CREATE TABLE IF NOT EXISTS examen2021(id int auto_increment primary key, title varchar(255), timepost varchar(255) not null, url LONGTEXT not null);')

    app.get('/api', async (request: Request, response: Response) => {
        const [result] = await connection.query('SELECT * FROM examen2021 ORDER BY timepost DESC')
        response.json(result)
    })

    app.get('/api/:id', async (request: Request, response: Response) => {
        const id = request.params.id
        const result = await connection.query('SELECT * FROM examen2021 WHERE id = ?', [id])
        response.json( (result[0] as any)[0] )
    })

    app.post('/api', async (request: Request, response: Response) => {
        const data = request.body
        connection.query(
            'INSERT INTO examen2021 (title, timepost, url) VALUES (?, ?, ?)',
            [data.title, data.timepost, data.url]
        ).then( () => {
            response.json({ result: 'OK '})
        }).catch( (error) => {
            response.status(400).json({ result: error.message})
        })
        
    })

    app.put('/api/:id', async (request: Request, response: Response) => {
        const id = request.params.id
        const data = request.body
        const [result] = await connection.query('SELECT * from examen2021 WHERE id=?;',[id])
                if(Object.entries(result).length === 0){
                    response.status(400).json({ result: "ID don't exist"})
                }else{
                    await connection.query('UPDATE examen2021 SET timepost = ? WHERE id = ?;',[data.timepost,id])
                    connection.query('UPDATE examen2021 SET title = ? WHERE id = ?;', [data.title,id]
                    ).then( () => {
                        response.json({ result: 'title&timepost updated '})
                    }).catch( (error) => {
                        response.status(400).json({ result: error.message})
                    })
                }
            })
    
    app.delete('/api/:id', async (request: Request, response: Response) => {
        const id = parseInt(request.params.id!)
        connection.query('DELETE FROM examen2021 WHERE id = ?;', [id])
        .then( () => {
            response.json({ result: 'OK '})
        }).catch( (error) => {
            response.status(400).json({ result: error.message})
        })
    })

})()

app.listen(3000, () => {
    console.log("Listing on port 3000")
})