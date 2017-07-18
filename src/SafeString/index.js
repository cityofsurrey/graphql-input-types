import { GraphQLScalarType } from 'graphql'
import { GraphQLError } from 'graphql/error'
import { Kind } from 'graphql/language'
import sanitizer from 'sanitizer'

const sanitize = (value) => {
  const newValue = sanitizer.sanitize(value)
  return newValue.length !== value.length
}

const sanitization = (value) => {
  if (sanitize(value)) {
    throw new GraphQLError(`OUTPUT | Expected string but received: ${value}`)
  }
  return value
}

export const parseLiteral = ({ kind, value }) => {
  if (kind !== Kind.STRING || sanitize(value)) {
    throw new GraphQLError(`INPUT | Expected string but received: ${value}`)
  }

  return value
}

export default {
  SafeString: new GraphQLScalarType({
    name: 'SafeString',
    parseValue: sanitization,
    serialize: sanitization,
    parseLiteral,
  }),
}
