import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'

class ItemsService {
  // ANCHOR how to do query for getAllItems
  async getAllItems(query = {}) {
    const data = await dbContext.Items.find(query)
    return data
  }

  async getOneItem(id) {
    const data = await dbContext.Items.findOne({ _id: id })
    return data
  }

  async createItem(body) {
    return await dbContext.Items.create(body)
  }

  async deleteItem(id) {
    const data = await dbContext.Items.findOneAndDelete({ _id: id })
    return data
  }

  async editItem(body) {
    const data = await dbContext.Items.findOneAndUpdate({ _id: body.id }, body, { new: true })
    return data
  }
}
export const itemsService = new ItemsService()
