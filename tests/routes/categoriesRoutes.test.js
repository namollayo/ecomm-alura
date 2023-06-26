import { app } from '../../src/app';
import request from 'supertest';

let server; 
beforeEach(() => {
    const port = 3000;
    server = app.listen(port)
})

afterEach(() => {
    server.close();
})

let idResposta

describe('GET /categories', () => {
    it('Should return list of Categories', async () => {
        await request(app)
            .get('/categories')
            .expect("content-type", /json/)
            .set('Accept', 'application/json')
            .expect(200)
    })
})

describe('POST /categories', () => {
    it('Should create a new category and return it', async () => {
        const resposta = await request(app)
            .post('/categories')
            .send({
                "name": "INFORMÁTICA",
                "status": "ATIVA"
            })
            .expect(201)
            
        idResposta = resposta.body._id
    })
})

describe('GET by Id in /categories', () => {
    it('Should return the requested Category (by id)', async () => {
        await request(app)
            .get(`/categories/${idResposta}`)
            .expect(200)
    })
})