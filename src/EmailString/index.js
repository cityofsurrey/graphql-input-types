import { GraphQLScalarType } from 'graphql'
import { GraphQLError } from 'graphql/error'
import { Kind } from 'graphql/language'
import is from 'is_js'

import { parseLiteral as sanitize } from '../SafeString'

const validate = (value) => {
  if (!is.email(value)) {
    throw new GraphQLError(`OUTPUT | Expected email address but received: ${value}`)
  }
  return value
}

export default {
  EmailString: new GraphQLScalarType({
    name: 'EmailString',
    parseValue: validate,
    serialize: validate,
    parseLiteral({ kind, value }) {
      sanitize({ kind, value })

      if (kind !== Kind.STRING || !is.email(value)) {
        throw new GraphQLError(`INPUT | Expected email address but received: ${value}`)
      }

      return value
    },
  }),
}
