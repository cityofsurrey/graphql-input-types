# graphql-input-types
This project provides additional graphQL input types to the basic graphQL input types to enforce data format validation. 

**Usage**
```
import { schema as inputsSchema, resolvers as inputsResolvers } from 'graphql-input-types'

...

const schema = [...rootSchema, ...inputsSchema]
const resolvers = merge(rootResolvers, inputsResolvers)

...

makeExecutableSchema({
  typeDefs: schema,
  resolvers,
})
```
