const serve = require('koa-static')
const views = require('koa-views')
import { graphiqlKoa, graphqlKoa } from 'graphql-server-koa'
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import { render } from 'koa-ejs'
import * as KoaRouter from 'koa-router'
import * as path from 'path'
import { Schema } from './schemas'

const myGraphQLSchema = null
const app: Koa = new Koa()
const router: KoaRouter = new KoaRouter()
const PORT = 3000

app.use(views(path.join(__dirname, 'assets'), { extension: 'html' }))
app.use(serve(path.join(__dirname, 'assets')))

app.use(bodyParser())
router.post('/graphql', graphqlKoa({ schema: Schema }))
router.get('/graphql', graphqlKoa({ schema: Schema  }))
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))
router.get('/', async (context: any) => {
    await context.render('index')
})
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, () => console.log(`Listening at ${PORT}`))