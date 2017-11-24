import {combineReducers} from 'redux';

import {projects as ProjectReducer} from './projects.reducer';
import { ProjectModel } from './models';

export interface IAppState {
  projects: ProjectModel[];
}

// export function rootReducer(state = {}, action)  {
//   return combineReducers({
//     projects: ProjectReducer
//   });
// }

export const rootReducer = combineReducers({
  projects: ProjectReducer
});

export const INITIAL_STATE: IAppState = {
  projects: [
    {
      id: 1,
      tasks: [1, 2, 2],
      title: 'Project1 test',
      avatar: 'fff'
    }
  ]
};
