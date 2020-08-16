export default function cart(state = [], action) {
  console.log(state)
  switch (action.type) {
    case 'ADD_TO_CART':
      return [action.products]
    default:
      return state
  }
}
