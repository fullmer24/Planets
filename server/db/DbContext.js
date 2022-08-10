import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account';
import { ValueSchema } from '../models/Value';
import { GalaxySchema } from '../models/Galaxy';
import { StarSchema } from '../models/Star.js'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Galaxy = mongoose.model('Galaxy', GalaxySchema)
  Stars = mongoose.model('star', StarSchema)
}

export const dbContext = new DbContext()
