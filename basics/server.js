const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express()

const schema = buildSchema(`
    type Query {
        me: User
        pet: Dog
    }

    type User {
        id: ID
        name: String
    }

    type Dog {
        id: ID
        name: String
        legs: Int,
        owner: User
    }
`)


const userLenny = {
    id: 1,
    name: "Lenny"
}

const root = {
    hello: () => 'Hello world!',
    me: () => {
        // resolve user
        return userLenny
    },
    pet: () => {
        // resolve user
        return {
            id: 2,
            name: "Doggie",
            legs: 4,
            owner: userLenny
        }
    }
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