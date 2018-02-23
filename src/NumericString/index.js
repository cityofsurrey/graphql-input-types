import { GraphQLScalarType } from 'graphql'
import { GraphQLError } from 'graphql/error'
import { Kind } from 'graphql/language'
import is from 'is_js'

import { parseLiteral as sanitize } from '../SafeString'

const regex = /^[0-9]+$/

const validate = (value) => {
  if (!regex.test(value)) {
    throw new GraphQLError(`OUTPUT | Expected numeric but received: ${value}`)
  }
  return value
}

export default {
  NumericString: new GraphQLScalarType({
    name: 'NumericString',
    parseValue: validate,
    serialize: validate,
    parseLiteral({ kind, value }) {
      sanitize({ kind, value })

      if (kind !== Kind.STRING || !regex.test(value)) {
        throw new GraphQLError(`INPUT | Expected numeric but received: ${value}`)
      }

      return value
    },
  }),
}
