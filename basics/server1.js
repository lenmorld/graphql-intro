const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

const app = express()

const root = {
    hello: () => 'Hello world!'
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.get('/', (req, res) => {
    res.json({
        name: "Hello world!"
    })
})

app.listen(4000, () => {
    console.log("Graphql in /graphql")
})