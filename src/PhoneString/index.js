import { GraphQLScalarType } from 'graphql'
import { GraphQLError } from 'graphql/error'
import { Kind } from 'graphql/language'
import is from 'is_js'

import { parseLiteral as sanitize } from '../SafeString'

const validate = (value) => {
  if (!is.nanpPhone(value)) {
    throw new GraphQLError(`OUTPUT | Expected phone number but received: ${value}`)
  }
  return value
}

export default {
  PhoneString: new GraphQLScalarType({
    name: 'PhoneString',
    parseValue: validate,
    serialize: validate,
    parseLiteral({ kind, value }) {
      sanitize({ kind, value })

      if (kind !== Kind.STRING || !is.nanpPhone(value)) {
        throw new GraphQLError(`INPUT | Expected phone number but received: ${value}`)
      }

      return value
    },
  }),
}
