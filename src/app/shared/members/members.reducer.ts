export function members(state = [], action) {
  switch (action.type) {
    case 'FETCH_MEMBERS':
      return action.payload;
    case 'DELETE_PROJECT_MEMBER':
      return state.filter(member => member._id !== action.payload);
    default:
      return state;
  }
}
