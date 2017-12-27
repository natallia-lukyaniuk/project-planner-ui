export function currentProject(state: any = {}, action) {
  switch (action.type) {
    case 'SELECT_PROJECT':
      return action.payload;
    case 'CHANGE_TASK-STATUS':
      const editTask = state.tasks.filter(task => task._id !== action.payload._id);
      const tasks = [...editTask, action.payload];
      console.log({...state, tasks});
      return {...state, tasks};
    default:
      return state;
  }
}
