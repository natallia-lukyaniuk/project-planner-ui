export interface IAppState {
  project: any;
}

export function rootReducer(state, action) {
  return state;
}

export const INITIAL_STATE: IAppState = {
  project: {
    id: 1,
    members: [1, 2, 4],
    events: [{
      id: 1,
      title: 'Test',
      author: 'Jhon Doe'
    }],
    tasks: [{
      id: 1,
      title: 'Test'
    }],
    title: 'Project1 test'
  }
};
