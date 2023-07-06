import { compareAsc, toDate } from 'date-fns';
import Project from './projectLogic';
import Task from './taskLogic';

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

    contains(projectName) {
        return this.projects.some((project) => project.getName() === projectName)
    };

    addProject(newProject) {
        if (this.projects.find((project) => project.name === newProject.name))
          return
        this.projects.push(newProject)
    };
    
    deleteProject(projectName) {
        const projectToDelete = this.projects.find(
          (project) => project.getName() === projectName
        )
        this.projects.splice(this.projects.indexOf(projectToDelete), 1)
    };

    updateTodayProject() {
        this.getProject('Today').tasks = [];
    
        this.projects.forEach((project) => {
          if (project.getName() === 'Today' || project.getName() === 'This week') {
            return
          } else { 
          const todayTasks = project.getTasksToday();
            todayTasks.forEach((task) => {
                const taskName = `${task.getName()} (From: ${project.getName()})`;
                this.getProject('Today').addTask(new Task(taskName, task.getDate(), task.getDescription()));
            });
          };
        });
    };
    
      updateWeekProject() {
        this.getProject('This week').setTasks([]);
    
        this.projects.forEach((project) => {
          if (project.getName() === 'Today' || project.getName() === 'This week') {
            return;
          };
            const weekTasks = project.getTasksThisWeek();
            weekTasks.forEach((task) => {
            const taskName = `${task.getName()} (From: ${project.getName()})`;
            this.getProject('This week').addTask(new Task(taskName, task.getDate(), task.getDescription()));
            });
        });
    
        this.getProject('This week').setTasks(
            this.getProject('This week')
              .getTasks()
              .sort((taskA, taskB) =>
                compareAsc(
                  toDate(new Date(taskA)),
                  toDate(new Date(taskB))
                )
              )
        );
      };

      //TODO: make inbox collect all tasks
      // updateInboxProjects(task, project) {
      //   if (project.getName() !== 'Inbox') {
      //     const inboxProject = this.getProject('Inbox');
      //     inboxProject.addTask(new Task(task.getName(), task.getDate(), task.getDescription()));
      //   };
      // };

      // editInboxProject(task, project) {
      //   if (project.getName() !== 'Inbox') {
      //     const inboxProject = this.getProject('Inbox');
      //     inboxProject.getTask()
      //     inboxProject.addTask(new Task(task.getName(), task.getDate(), task.getDescription()));
      //   };
      // };
};