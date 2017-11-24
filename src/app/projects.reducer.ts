
export const projects = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      return action.payload;
    default:
      return state;
  }
};
