import { get, post, patch } from './helpers/ApiRequestsHelper'
function getAll () {
  return get('users/myrestaurants')
}

function getDetail (id) {
  return get(`restaurants/${id}`)
}

function getRestaurantCategories () {
  return get('restaurantCategories')
}

function create (data) {
  return post('restaurants', data)
}

function promote (id) {
  return patch(`restaurants/${id}/promote`)
}

export { getAll, getDetail, getRestaurantCategories, create, promote }
