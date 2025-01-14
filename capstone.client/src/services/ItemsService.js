import { AppState } from '../AppState'
// import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ItemsService {
  async createItem(newItem) {
    newItem.location = AppState.account.location
    const res = await api.post('api/items', newItem)
    AppState.items.push(res.data)
    // this.getItemsByUserId()
  }

  async getAll(query) {
    const res = await api.get('api/items')
    if (query !== 'All') {
      AppState.items = res.data.filter(item => item.category === query)
    } else {
      AppState.items = res.data
    }
    // AppState.items = res.data.filter(item => item.category === query)
  }

  async search(searchQuery) {
    const res = await api.get('api/items/search', { params: { query: searchQuery.query, y: AppState.location.coords.longitude, x: AppState.location.coords.latitude, distance: searchQuery.distance } })
    if (searchQuery.category !== 'All') {
      AppState.items = res.data.filter(item => item.category === searchQuery.category)
    } else {
      AppState.items = res.data
    }
  }

  async getItemsByUserId(id) {
    const res = await api.get(`api/profile/${id}/items`)
    AppState.items = res.data
  }

  async deleteItem(id) {
    await api.delete(`api/items/${id}`)
    AppState.items = AppState.items.filter(i => i.id !== id)
    this.getAll()
  }

  async toggleAvailability(item) {
    if (item.availability === true) {
      item.availability = false
    } else if (item.availability === false) {
      item.availability = true
    }
    await api.put('api/items/' + item.id, item)
    const oldItem = AppState.items.findIndex(i => i.id === item.id)
    AppState.items[oldItem] = item
  }

  async editItem(editedItem) {
    console.log(editedItem)
    if (editedItem.title == null) {
      editedItem.title = AppState.activeItem.title
      AppState.activeItem.title = editedItem.title
    } else { AppState.activeItem.title = editedItem.title }

    if (editedItem.description == null) {
      editedItem.description = AppState.activeItem.description
      AppState.activeItem.description = editedItem.description
    } else { AppState.activeItem.description = editedItem.description }

    if (editedItem.picture == null) {
      editedItem.picture = AppState.activeItem.picture
      AppState.activeItem.picture = editedItem.picture
    } else { AppState.activeItem.picture = editedItem.picture }

    const res = await api.put('api/items/' + AppState.activeItem.id, editedItem)
    AppState.activeItem = res.data
  }

  assignActiveItem(item) {
    AppState.activeItem = item
  }
}

export const itemsService = new ItemsService()
