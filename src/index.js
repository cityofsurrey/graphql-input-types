import { merge } from 'lodash'

import PhoneString from './PhoneString'
import EmailString from './EmailString'
import PostalCodeString from './PostalCodeString'
import AlphaNumericString from './AlphaNumericString'
import DateString from './DateString'
import SafeString from './SafeString'

export const schema = [`
  scalar EmailString
  scalar PhoneString
  scalar PostalCodeString
  scalar AlphaNumericString
  scalar DateString
  scalar SafeString
`]
export const resolvers = merge(PhoneString,
                               EmailString,
                               PostalCodeString,
                               AlphaNumericString,
                               DateString,
                               SafeString)
