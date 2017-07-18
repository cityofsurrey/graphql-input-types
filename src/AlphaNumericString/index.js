import { GraphQLScalarType } from 'graphql'
import { GraphQLError } from 'graphql/error'
import { Kind } from 'graphql/language'
import is from 'is_js'

import { parseLiteral as sanitize } from '../SafeString'

const validate = (value) => {
  if (!is.alphaNumeric(value)) {
    throw new GraphQLError(`OUTPUT | Expected alpha numeric but received: ${value}`)
  }
  return value
}

export default {
  AlphaNumericString: new GraphQLScalarType({
    name: 'AlphaNumericString',
    parseValue: validate,
    serialize: validate,
    parseLiteral({ kind, value }) {
      sanitize({ kind, value })

      if (kind !== Kind.STRING || !is.alphaNumeric(value)) {
        throw new GraphQLError(`INPUT | Expected alpha numeric but received: ${value}`)
      }

      return value
    },
  }),
}
