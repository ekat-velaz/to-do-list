export default class Task {
  constructor(name, dueDate, description) {
    this.name = name;
    this.dueDate = dueDate;
    this.description = description;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }
}
