import { GraphQLScalarType } from 'graphql'
import { GraphQLError } from 'graphql/error'
import { Kind } from 'graphql/language'
import is from 'is_js'

import { parseLiteral as sanitize } from '../SafeString'

const validate = (value) => {
  if (!is.caPostalCode(value)) {
    throw new GraphQLError(`OUTPUT | Expected postal code but received: ${value}`)
  }
  return value
}

export default {
  PostalCodeString: new GraphQLScalarType({
    name: 'PostalCodeString',
    parseValue: validate,
    serialize: validate,
    parseLiteral({ kind, value }) {
      sanitize({ kind, value })

      if (kind !== Kind.STRING || !is.caPostalCode(value)) {
        throw new GraphQLError(`INPUT | Expected postal code but received: ${value}`)
      }

      return value
    },
  }),
}
