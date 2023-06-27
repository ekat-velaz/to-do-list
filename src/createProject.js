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
    }
    
}