import express from 'express';
import categories from './categoriesRoutes.js'

const routes = (app) => {
    app.route('/ping').get((req, res) => { 
        res.status(200).send('pong')
    })

    app.use(
        express.json(),
        categories
)}

export default routes;