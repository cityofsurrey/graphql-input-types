import fs from 'fs'
import { join } from 'path'
import { merge } from 'lodash'

import PhoneString from './PhoneString'
import EmailString from './EmailString'
import PostalCodeString from './PostalCodeString'
import AlphaNumericString from './AlphaNumericString'
import DateString from './DateString'
import SafeString from './SafeString'

export const schema = [fs.readFileSync(join(__dirname, 'schema.graphql'), 'utf-8')]
export const resolvers = merge(PhoneString,
                               EmailString,
                               PostalCodeString,
                               AlphaNumericString,
                               DateString,
                               SafeString)
