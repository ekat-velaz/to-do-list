import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

export default class Project {
    constructor(name) {
        this.name = name
        this.tasks = []
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }


    addTask(newTask) {
        this.tasks.push(newTask)
    };

    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName)
      }

    getTasks() {
        return this.tasks;
    };

    contains(taskName) {
        return this.tasks.some((task) => task.getName() === taskName)
      }
    
    deleteTask(taskName) {
        this.tasks = this.tasks.filter((task) => task.name !== taskName)
      };
};