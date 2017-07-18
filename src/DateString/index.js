import { GraphQLScalarType } from 'graphql'
import { GraphQLError } from 'graphql/error'
import { Kind } from 'graphql/language'
import is from 'is_js'

import { parseLiteral as sanitize } from '../SafeString'

const validate = (value) => {
  if (!is.dateString(value)) {
    throw new GraphQLError(`OUTPUT | Expected date but received: ${value}`)
  }
  return value
}

export default {
  DateString: new GraphQLScalarType({
    name: 'DateString',
    parseValue: validate,
    serialize: validate,
    parseLiteral({ kind, value }) {
      sanitize({ kind, value })

      if (kind !== Kind.STRING || !is.dateString(value)) {
        throw new GraphQLError(`INPUT | Expected date but received: ${value}`)
      }

      return value
    },
  }),
}
