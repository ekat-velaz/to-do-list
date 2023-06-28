import { compareAsc, toDate } from 'date-fns';
import Project from './projectLogic';

export default class ToDoList {
    constructor() {
        this.projects = []
    };

    setProjects(projects) {
        this.projects = projects;
    };

    getProjects() {
        return this.projects;
    };

    getProject(projectName) {
        return this.projects.find((project) => project.getName() === projectName);
    };

    addProject(newProject) {
        if (this.projects.find((project) => project.name === newProject.name))
          return
        this.projects.push(newProject)
      }
    
      deleteProject(projectName) {
        const projectToDelete = this.projects.find(
          (project) => project.getName() === projectName
        )
        this.projects.splice(this.projects.indexOf(projectToDelete), 1)
      }
};