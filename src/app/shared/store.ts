import { ProjectModel } from './projects/project.model';

export interface IAppState {
  projects: ProjectModel[];
  currentProject: ProjectModel;
  projectMembers: any;
}
