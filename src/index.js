import { merge } from 'lodash'

import PhoneString from './PhoneString'
import EmailString from './EmailString'
import PostalCodeString from './PostalCodeString'
import AlphaNumericString from './AlphaNumericString'
import NumericString from './NumericString'
import DateString from './DateString'
import SafeString from './SafeString'

export const schema = [`
  scalar EmailString
  scalar PhoneString
  scalar PostalCodeString
  scalar AlphaNumericString
  scalar NumericString
  scalar DateString
  scalar SafeString
`]
export const resolvers = merge(
  EmailString,
  PhoneString,
  PostalCodeString,
  AlphaNumericString,
  NumericString,
  DateString,
  SafeString,
)
