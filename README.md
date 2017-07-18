# graphql-input-types
Basic input types for City of Surrey graphql services

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
