"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _websiteUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websiteUI */ "./src/websiteUI.js");



(0,_websiteUI__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/projectLogic.js":
/*!*****************************!*\
  !*** ./src/projectLogic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });


class Project {
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

/***/ }),

/***/ "./src/taskLogic.js":
/*!**************************!*\
  !*** ./src/taskLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(name, dueDate, description) {
        this.name = name;
        this.dueDate = dueDate;
        this.description = description;
        // this.projectName = projectName;
    };

    setName(name) {
        this.name = name;
    };

    getName() {
        return this.name;
    };

    setDate(dueDate) {
        this.dueDate = dueDate;
    };

    getDate() {
        return this.dueDate
    };

    setDescription(description) {
        this.description = description;
    };

    getDescription() {
        return this.description;
    };

    // setProjectName(projectName) {
    //     this.projectName = projectName;
    // };

    // getProjectName() {
    //     return this.projectName;
    // };

};

/***/ }),

/***/ "./src/toDoList.js":
/*!*************************!*\
  !*** ./src/toDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoList)
/* harmony export */ });
/* harmony import */ var _projectLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectLogic */ "./src/projectLogic.js");



class ToDoList {
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
      }
    
      deleteProject(projectName) {
        const projectToDelete = this.projects.find(
          (project) => project.getName() === projectName
        )
        this.projects.splice(this.projects.indexOf(projectToDelete), 1)
      }
};

/***/ }),

/***/ "./src/websiteUI.js":
/*!**************************!*\
  !*** ./src/websiteUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showProjects),
/* harmony export */   toDoList: () => (/* binding */ toDoList)
/* harmony export */ });
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoList */ "./src/toDoList.js");
/* harmony import */ var _projectLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectLogic */ "./src/projectLogic.js");
/* harmony import */ var _taskLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskLogic */ "./src/taskLogic.js");
/* harmony import */ var _images_inbox_multiple_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/inbox-multiple.svg */ "./src/images/inbox-multiple.svg");
/* harmony import */ var _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/calendar-today.svg */ "./src/images/calendar-today.svg");
/* harmony import */ var _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/calendar-week.svg */ "./src/images/calendar-week.svg");
/* harmony import */ var _images_folder_outline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/folder-outline.svg */ "./src/images/folder-outline.svg");
/* harmony import */ var _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/trash-can-outline.svg */ "./src/images/trash-can-outline.svg");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg");











const toDoList = new _toDoList__WEBPACK_IMPORTED_MODULE_0__["default"];
const projectsList = document.getElementById('projects-list');
const activeSpace = document.getElementById('active-space');
const activeProject = document.querySelector('.active-project');
const activeProjectName = document.getElementById('active-project-name')
const activeTasks = document.getElementById('active-tasks');

function showProjects() {
    createDefaultProjects();
    
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.appendChild(addProjectUI());
};

function addProjectToDOM(projectName, container) {
    container.appendChild(projectName);
};

function createDefaultProjects() {
        const inbox = new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"]('Inbox');
        toDoList.addProject(inbox);
        createProjectUI(inbox.getName(), _images_inbox_multiple_svg__WEBPACK_IMPORTED_MODULE_3__, projectsList);
    
        const today = new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"]('Today');
        toDoList.addProject(today);
        createProjectUI(today.getName(), _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_4__, projectsList);
    
        const thisWeek = new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"]('This week');
        toDoList.addProject(thisWeek);
        createProjectUI(thisWeek.getName(), _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_5__, projectsList);
};

function createNewProject(projectName) {
    const newProject = new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"](`${projectName}`);
    toDoList.addProject(newProject);
    createProjectUI(newProject.getName(), _images_folder_outline_svg__WEBPACK_IMPORTED_MODULE_6__, projectsList);
};

function createProjectUI(projectName, imageSrc, container) {
    const newProjectContainer = document.createElement('div');
    newProjectContainer.classList.add('project-container');
    newProjectContainer.setAttribute('id', `${projectName}`);

    const newProject = document.createElement('button');
    newProject.classList.add('project');
    newProject.addEventListener('click', (e) => {
        const chosenProject = toDoList.getProject(`${e.target.parentNode.parentNode.id}`);
        console.log(chosenProject);
        clearActive();
        createActiveProjectUI(chosenProject.getName());
        renderTasks(chosenProject.getTasks());
        setActiveProject(newProject);
    });

    const projectIcon = new Image(50, 50);
    projectIcon.classList.add('project-icon');
    projectIcon.src = imageSrc;

    const projectText = document.createElement('div');
    projectText.classList.add('project-text');
    projectText.textContent = `${projectName}`;

    newProject.appendChild(projectIcon);
    newProject.appendChild(projectText);
    newProjectContainer.appendChild(newProject);

    if ((projectName !== 'Inbox') && (projectName !== 'Today') && (projectName !== 'This week')) {
        newProjectContainer.appendChild(createDeleteBtn());
        newProjectContainer.appendChild(createEditBtn());
    };

    if (projectName === 'Inbox') {
        newProject.classList.add('active');
    };

    addProjectToDOM(newProjectContainer, projectsList);
};

const addProjectUI = () => {
    const addProjectContainer = document.createElement('div');
    addProjectContainer.setAttribute('id', 'add-proj-container');
    addProjectContainer.appendChild(createAddProjBtn(addProjectContainer));

    return addProjectContainer;
};


function createAddProjBtn(container) {
    const addProjectBtn = document.createElement('btn');
    addProjectBtn.classList.add('add-project-btn');

    const addProjIcon = new Image(20, 20);
    addProjIcon.setAttribute('id', 'add-proj-icon');
    addProjIcon.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_8__;

    const addProjText = document.createElement('div');
    addProjText.setAttribute('id', 'add-proj-text');
    addProjText.textContent = 'Add new project!';

    addProjectBtn.appendChild(addProjIcon);
    addProjectBtn.appendChild(addProjText);

    addProjectBtn.addEventListener('click', () => {
        container.textContent = '';
        container.appendChild(createInput(container));
    });
  
    return addProjectBtn;
};

function createInput(container) {
    const addProjectForm = document.createElement('form');
    addProjectForm.setAttribute('id', 'add-proj-input-container');

    const addProjectInput = document.createElement('input');
    addProjectInput.setAttribute('id', 'add-proj-input');

    const addProjInputSubmit = document.createElement('btn');
    addProjInputSubmit.setAttribute('type', 'submit');
    addProjInputSubmit.setAttribute('id', 'add-proj-submit');
    addProjInputSubmit.textContent = 'Submit';
    addProjInputSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        if (checkInput(addProjectInput.value, toDoList) === false) {
        createNewProject(addProjectInput.value);
        container.textContent = '';
        container.appendChild(createAddProjBtn(container));
        };
    });

    const addProjCancel = document.createElement('button');
    addProjCancel.setAttribute('id', 'add-proj-cancel');
    addProjCancel.addEventListener('click', () => {
        container.textContent = '';
        container.appendChild(createAddProjBtn(container));
    });

    const addProjCancelIcon = new Image (20, 20);
    addProjCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
    addProjCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_9__;
    addProjCancel.appendChild(addProjCancelIcon);

    addProjectForm.appendChild(addProjectInput);
    addProjectForm.appendChild(addProjInputSubmit);
    addProjectForm.appendChild(addProjCancel);

    return addProjectForm;
};

function createDeleteBtn() {
    const deleteProjectIcon = new Image(20, 25);
    deleteProjectIcon.classList.add('del-proj-icon');
    deleteProjectIcon.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_7__;

    const projectDeleteBtn = document.createElement('button');
    projectDeleteBtn.classList.add('project-del-btn');
    projectDeleteBtn.appendChild(deleteProjectIcon);

    deleteProjectIcon.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.remove();
        toDoList.deleteProject(e.target.parentNode.parentNode.id);
        clearActive();
    });

    return projectDeleteBtn;
};

function createEditBtn() {
    const projectEditBtn = document.createElement('button');
    projectEditBtn.classList.add('edit-proj-btn');
    projectEditBtn.textContent = 'Rename';
    projectEditBtn.addEventListener('click', (e) => {
        e.target.style.visibility = 'hidden';
        e.target.parentNode.appendChild(createEditInput(e.target.parentNode));    
    });

    return projectEditBtn;
};

function createEditInput(container) {
    const addProjectForm = document.createElement('form');
    addProjectForm.setAttribute('id', 'add-proj-input-container');

    const addProjectInput = document.createElement('input');
    addProjectInput.setAttribute('id', 'add-proj-input');

    const addProjInputSubmit = document.createElement('btn');
    addProjInputSubmit.setAttribute('type', 'submit');
    addProjInputSubmit.setAttribute('id', 'add-proj-submit');
    addProjInputSubmit.textContent = 'Submit';
    addProjInputSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        let chosenProject = toDoList.getProject(container.id);
        chosenProject.setName(addProjectInput.value);
        createProjectUI(chosenProject.getName(), _images_folder_outline_svg__WEBPACK_IMPORTED_MODULE_6__);
        clearActive();
        createActiveProjectUI(chosenProject.getName());
        renderTasks(chosenProject.getTasks());
        container.textContent = '';
        console.log(toDoList);
    });

    const addProjCancel = document.createElement('button');
    addProjCancel.setAttribute('id', 'add-proj-cancel');
    addProjCancel.addEventListener('click', () => {
        addProjCancel.parentNode.parentNode.querySelector('.edit-proj-btn').style.visibility = 'visible';
        addProjCancel.parentNode.remove();
    });

    const addProjCancelIcon = new Image (20, 20);
    addProjCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
    addProjCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_9__;
    addProjCancel.appendChild(addProjCancelIcon);

    addProjectForm.appendChild(addProjectInput);
    addProjectForm.appendChild(addProjInputSubmit);
    addProjectForm.appendChild(addProjCancel);

    return addProjectForm;
};

function createAddTaskBtn() {
    const addTaskIcon = new Image(20, 25);
    addTaskIcon.classList.add('add-task-icon');
    addTaskIcon.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_8__;

    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('add-task-btn');
    addTaskBtn.appendChild(addTaskIcon);

    addTaskIcon.addEventListener('click', (e) => {
        const projectContainer = e.target.parentNode.parentNode;
        projectContainer.appendChild(createTaskForm(projectContainer));
    });

    return addTaskBtn;
};


function createTaskForm(container) {
    const addTaskForm = document.createElement('form');
    addTaskForm.setAttribute('id', 'add-task-input-container');

    const taskTitleInput = document.createElement('input');
    taskTitleInput.setAttribute('id', 'task-title-input');

    const taskDateInput = document.createElement('input');
    taskDateInput.setAttribute('type', 'date');
    taskDateInput.setAttribute('id', 'task-date-input');

    const taskDescriptionInput = document.createElement('textarea');
    taskDescriptionInput.setAttribute('rows', '4');
    taskDescriptionInput.setAttribute('cols', '50');
    taskDescriptionInput.setAttribute('id', 'task-description-input');

    const addTaskSubmit = document.createElement('button');
    addTaskSubmit.setAttribute('type', 'submit');
    addTaskSubmit.setAttribute('id', 'add-proj-submit');
    addTaskSubmit.textContent = 'Add task!';
    addTaskSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        const project = toDoList.getProject(container.id);
        if (checkInput(taskTitleInput.value, project) === false) {
            const newTask = new _taskLogic__WEBPACK_IMPORTED_MODULE_2__["default"](taskTitleInput.value, taskDateInput.value, taskDescriptionInput.value); 
            project.addTask(newTask);
            createTaskUI(newTask.getName(), newTask.getDate(), newTask.getDescription(), activeTasks);
            addTaskForm.remove();
        };
    });

    const addTaskCancel = document.createElement('button');
    addTaskCancel.setAttribute('id', 'add-proj-cancel');
    addTaskCancel.addEventListener('click', () => {
        // addTaskCancel.parentNode.parentNode.querySelector('.edit-proj-btn').style.visibility = 'visible';
        addTaskCancel.parentNode.remove();
    });

    const addTaskCancelIcon = new Image (20, 20);
    addTaskCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
    addTaskCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_9__;
    addTaskCancel.appendChild(addTaskCancelIcon);

    addTaskForm.appendChild(taskTitleInput);
    addTaskForm.appendChild(taskDateInput);
    addTaskForm.appendChild(taskDescriptionInput);
    addTaskForm.appendChild(addTaskSubmit);
    addTaskForm.appendChild(addTaskCancel);

    return addTaskForm;
};

function createTaskUI(taskTitle, taskDate, taskDescription, container) {
    const newTaskContainer = document.createElement('div');
    newTaskContainer.classList.add('task-container');
    newTaskContainer.setAttribute('id', `${taskTitle}`);

    const newTaskTitle = document.createElement('div');
    newTaskTitle.classList.add('task-title');
    newTaskTitle.textContent = `${taskTitle}`;

    const newTaskDate = document.createElement('div');
    newTaskDate.classList.add('task-date');
    newTaskDate.textContent = `${taskDate}`;

    const newTaskDescription = document.createElement('div');
    newTaskDescription.classList.add('task-description');
    newTaskDescription.textContent = `${taskDescription}`;

    newTaskContainer.appendChild(newTaskTitle);
    newTaskContainer.appendChild(newTaskDate);
    newTaskContainer.appendChild(newTaskDescription);
    newTaskContainer.appendChild(createTaskDeleteBtn());
    newTaskContainer.appendChild(createTaskEditBtn());

    container.appendChild(newTaskContainer);
};

function renderTasks(project) {
    if (project === undefined) {
        return;
    };
    project.forEach((task) => {
        createTaskUI(task.getName(), task.getDate(), task.getDescription(), activeTasks);
    });
};

function setActiveProject(project) {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
        if (project !== this) {
            project.classList.remove('active');
        }
    });
    project.classList.add('active');
};

function clearActive() {
    if (activeProject.querySelector('.add-task-btn')) {
    activeProject.querySelector('.add-task-btn').remove();
    };
    if (activeProject.querySelector('#add-task-input-container')) {
        activeProject.querySelector('#add-task-input-container').remove();
    }
    activeTasks.textContent = '';
    activeProjectName.textContent = '';
};

function createTaskDeleteBtn() {
    const deleteTaskIcon = new Image(20, 25);
    deleteTaskIcon.classList.add('del-task-icon');
    deleteTaskIcon.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_7__;

    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.classList.add('task-del-btn');
    taskDeleteBtn.appendChild(deleteTaskIcon);

    deleteTaskIcon.addEventListener('click', (e) => {
        const chosenProject = toDoList.getProject(e.target.closest('div.active-project').id);
        chosenProject.deleteTask(e.target.closest('div.active-project').querySelector(".task-title").textContent);
        e.target.parentNode.parentNode.remove();
    });

    return taskDeleteBtn;
};

function createTaskEditBtn() {
    const projectEditBtn = document.createElement('button');
    projectEditBtn.classList.add('edit-proj-btn');
    projectEditBtn.textContent = 'Edit';
    projectEditBtn.addEventListener('click', (e) => {
        e.target.style.visibility = 'hidden';
        e.target.parentNode.appendChild(createTaskEditForm(e.target.closest('.active-project')));    
    });

    return projectEditBtn;
};

function createTaskEditForm(container) {
    console.log(container.id);
    const oldTitle = document.querySelector('.task-title').textContent;
    const oldDate = document.querySelector('.task-date').textContent;
    const oldDescr = document.querySelector('.task-description').textContent;

    const chosenProject = toDoList.getProject(container.id);
    const chosenTask = chosenProject.getTask(oldTitle);
    console.log(chosenProject);
    console.log(chosenTask);

    const addTaskForm = document.createElement('form');
    addTaskForm.setAttribute('id', 'add-task-input-container');

    const taskTitleInput = document.createElement('input');
    taskTitleInput.setAttribute('id', 'task-title-input');
    taskTitleInput.value = oldTitle;

    const taskDateInput = document.createElement('input');
    taskDateInput.setAttribute('type', 'date');
    taskDateInput.setAttribute('id', 'task-date-input');
    taskDateInput.value = oldDate;

    const taskDescriptionInput = document.createElement('textarea');
    taskDescriptionInput.setAttribute('rows', '4');
    taskDescriptionInput.setAttribute('cols', '50');
    taskDescriptionInput.setAttribute('id', 'task-description-input');
    taskDescriptionInput.value = oldDescr;

    const addTaskSubmit = document.createElement('button');
    addTaskSubmit.setAttribute('type', 'submit');
    addTaskSubmit.setAttribute('id', 'add-proj-submit');
    addTaskSubmit.textContent = 'Edit task!';
    addTaskSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        chosenTask.setName(taskTitleInput.value);
        chosenTask.setDate(taskDateInput.value);
        chosenTask.setDescription(taskDescriptionInput.value);
        createTaskUI(chosenTask.getName(), chosenTask.getDate(), chosenTask.getDescription(), activeTasks);
        event.target.closest('.task-container').remove();
        
    });

    const addTaskCancel = document.createElement('button');
    addTaskCancel.setAttribute('id', 'add-proj-cancel');
    addTaskCancel.addEventListener('click', () => {
        addTaskCancel.parentNode.parentNode.querySelector('.edit-proj-btn').style.visibility = 'visible';
        addTaskCancel.parentNode.remove();
    });

    const addTaskCancelIcon = new Image (20, 20);
    addTaskCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
    addTaskCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_9__;
    addTaskCancel.appendChild(addTaskCancelIcon);

    addTaskForm.appendChild(taskTitleInput);
    addTaskForm.appendChild(taskDateInput);
    addTaskForm.appendChild(taskDescriptionInput);
    addTaskForm.appendChild(addTaskSubmit);
    addTaskForm.appendChild(addTaskCancel);

    return addTaskForm;
};

function checkInput(objectName, parentName) {
    if (parentName.contains(objectName)) {
        alert('The name should not be the same as the previous ones');
        return true;
    } else {
        return false;
    };
};



function createActiveProjectUI(projectName) {
    activeProject.setAttribute('id', `${projectName}`);
    activeProjectName.textContent = `${projectName}`;
    activeProject.appendChild(createAddTaskBtn());

    addProjectToDOM(activeProject, activeSpace );
};

/***/ }),

/***/ "./src/images/calendar-today.svg":
/*!***************************************!*\
  !*** ./src/images/calendar-today.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "233385e32206cd372d69.svg";

/***/ }),

/***/ "./src/images/calendar-week.svg":
/*!**************************************!*\
  !*** ./src/images/calendar-week.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "518ff47ec29e1552eabd.svg";

/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d4c0a10ac97607dc65.svg";

/***/ }),

/***/ "./src/images/folder-outline.svg":
/*!***************************************!*\
  !*** ./src/images/folder-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "637824bc8f2833004ccc.svg";

/***/ }),

/***/ "./src/images/inbox-multiple.svg":
/*!***************************************!*\
  !*** ./src/images/inbox-multiple.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a08d7d967ef5b3b143a.svg";

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ }),

/***/ "./src/images/trash-can-outline.svg":
/*!******************************************!*\
  !*** ./src/images/trash-can-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsNEJBQTRCLDhDQUFVO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLHdDQUF3QyxZQUFZO0FBQ3BELHVDQUF1QyxZQUFZO0FBQ25EOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdExvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza0xvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy93ZWJzaXRlVUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3dQcm9qZWN0cyBmcm9tIFwiLi93ZWJzaXRlVUlcIjtcbmltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vd2Vic2l0ZVVJXCI7XG5cbnNob3dQcm9qZWN0cygpO1xuIiwiaW1wb3J0IHsgdG9EYXRlLCBpc1RvZGF5LCBpc1RoaXNXZWVrLCBzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLnRhc2tzID0gW11cbiAgICB9XG5cbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICB9XG5cblxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzaylcbiAgICB9O1xuXG4gICAgZ2V0VGFzayh0YXNrTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpXG4gICAgICB9XG5cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfTtcblxuICAgIGNvbnRhaW5zKHRhc2tOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSlcbiAgICAgIH1cbiAgICBcbiAgICBkZWxldGVUYXNrKHRhc2tOYW1lKSB7XG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5uYW1lICE9PSB0YXNrTmFtZSlcbiAgICAgIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgLy8gdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgIH07XG5cbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9O1xuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9O1xuXG4gICAgc2V0RGF0ZShkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfTtcblxuICAgIGdldERhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGVcbiAgICB9O1xuXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH07XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfTtcblxuICAgIC8vIHNldFByb2plY3ROYW1lKHByb2plY3ROYW1lKSB7XG4gICAgLy8gICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAvLyB9O1xuXG4gICAgLy8gZ2V0UHJvamVjdE5hbWUoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnByb2plY3ROYW1lO1xuICAgIC8vIH07XG5cbn07IiwiaW1wb3J0IHsgY29tcGFyZUFzYywgdG9EYXRlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0TG9naWMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXVxuICAgIH07XG5cbiAgICBzZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgfTtcblxuICAgIGdldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgICB9O1xuXG4gICAgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpO1xuICAgIH07XG5cbiAgICBjb250YWlucyhwcm9qZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5zb21lKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpXG4gICAgfTtcblxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgICAgICBpZiAodGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5ld1Byb2plY3QubmFtZSkpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxuICAgICAgfVxuICAgIFxuICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSB0aGlzLnByb2plY3RzLmZpbmQoXG4gICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZVxuICAgICAgICApXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKVxuICAgICAgfVxufTsiLCJpbXBvcnQgVG9Eb0xpc3QgZnJvbSBcIi4vdG9Eb0xpc3RcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RMb2dpY1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza0xvZ2ljXCI7XG5pbXBvcnQgaW5ib3hJY29uIGZyb20gXCIuL2ltYWdlcy9pbmJveC1tdWx0aXBsZS5zdmdcIjtcbmltcG9ydCB0b2RheUljb24gZnJvbSBcIi4vaW1hZ2VzL2NhbGVuZGFyLXRvZGF5LnN2Z1wiO1xuaW1wb3J0IHdlZWtJY29uIGZyb20gXCIuL2ltYWdlcy9jYWxlbmRhci13ZWVrLnN2Z1wiO1xuaW1wb3J0IGZvbGRlckljb24gZnJvbSBcIi4vaW1hZ2VzL2ZvbGRlci1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vaW1hZ2VzL3RyYXNoLWNhbi1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4vaW1hZ2VzL3BsdXMuc3ZnXCI7XG5pbXBvcnQgY2FuY2VsSWNvbiBmcm9tIFwiLi9pbWFnZXMvY2xvc2Uuc3ZnXCI7XG5cbmV4cG9ydCBjb25zdCB0b0RvTGlzdCA9IG5ldyBUb0RvTGlzdDtcbmNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1saXN0Jyk7XG5jb25zdCBhY3RpdmVTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmUtc3BhY2UnKTtcbmNvbnN0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLXByb2plY3QnKTtcbmNvbnN0IGFjdGl2ZVByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZS1wcm9qZWN0LW5hbWUnKVxuY29uc3QgYWN0aXZlVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlLXRhc2tzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcbiAgICBjcmVhdGVEZWZhdWx0UHJvamVjdHMoKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1jb250YWluZXInKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0VUkoKSk7XG59O1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9ET00ocHJvamVjdE5hbWUsIGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdHMoKSB7XG4gICAgICAgIGNvbnN0IGluYm94ID0gbmV3IFByb2plY3QoJ0luYm94Jyk7XG4gICAgICAgIHRvRG9MaXN0LmFkZFByb2plY3QoaW5ib3gpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0VUkoaW5ib3guZ2V0TmFtZSgpLCBpbmJveEljb24sIHByb2plY3RzTGlzdCk7XG4gICAgXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IFByb2plY3QoJ1RvZGF5Jyk7XG4gICAgICAgIHRvRG9MaXN0LmFkZFByb2plY3QodG9kYXkpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0VUkodG9kYXkuZ2V0TmFtZSgpLCB0b2RheUljb24sIHByb2plY3RzTGlzdCk7XG4gICAgXG4gICAgICAgIGNvbnN0IHRoaXNXZWVrID0gbmV3IFByb2plY3QoJ1RoaXMgd2VlaycpO1xuICAgICAgICB0b0RvTGlzdC5hZGRQcm9qZWN0KHRoaXNXZWVrKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdFVJKHRoaXNXZWVrLmdldE5hbWUoKSwgd2Vla0ljb24sIHByb2plY3RzTGlzdCk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGAke3Byb2plY3ROYW1lfWApO1xuICAgIHRvRG9MaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgY3JlYXRlUHJvamVjdFVJKG5ld1Byb2plY3QuZ2V0TmFtZSgpLCBmb2xkZXJJY29uLCBwcm9qZWN0c0xpc3QpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFVJKHByb2plY3ROYW1lLCBpbWFnZVNyYywgY29udGFpbmVyKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcbiAgICBuZXdQcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtwcm9qZWN0TmFtZX1gKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgY2hvc2VuUHJvamVjdCA9IHRvRG9MaXN0LmdldFByb2plY3QoYCR7ZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhjaG9zZW5Qcm9qZWN0KTtcbiAgICAgICAgY2xlYXJBY3RpdmUoKTtcbiAgICAgICAgY3JlYXRlQWN0aXZlUHJvamVjdFVJKGNob3NlblByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICAgICAgcmVuZGVyVGFza3MoY2hvc2VuUHJvamVjdC5nZXRUYXNrcygpKTtcbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2plY3RJY29uID0gbmV3IEltYWdlKDUwLCA1MCk7XG4gICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pY29uJyk7XG4gICAgcHJvamVjdEljb24uc3JjID0gaW1hZ2VTcmM7XG5cbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RUZXh0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGV4dCcpO1xuICAgIHByb2plY3RUZXh0LnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWV9YDtcblxuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG5cbiAgICBpZiAoKHByb2plY3ROYW1lICE9PSAnSW5ib3gnKSAmJiAocHJvamVjdE5hbWUgIT09ICdUb2RheScpICYmIChwcm9qZWN0TmFtZSAhPT0gJ1RoaXMgd2VlaycpKSB7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRGVsZXRlQnRuKCkpO1xuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVkaXRCdG4oKSk7XG4gICAgfTtcblxuICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gJ0luYm94Jykge1xuICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH07XG5cbiAgICBhZGRQcm9qZWN0VG9ET00obmV3UHJvamVjdENvbnRhaW5lciwgcHJvamVjdHNMaXN0KTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RVSSA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNvbnRhaW5lcicpO1xuICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkUHJvakJ0bihhZGRQcm9qZWN0Q29udGFpbmVyKSk7XG5cbiAgICByZXR1cm4gYWRkUHJvamVjdENvbnRhaW5lcjtcbn07XG5cblxuZnVuY3Rpb24gY3JlYXRlQWRkUHJvakJ0bihjb250YWluZXIpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG4gICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idG4nKTtcblxuICAgIGNvbnN0IGFkZFByb2pJY29uID0gbmV3IEltYWdlKDIwLCAyMCk7XG4gICAgYWRkUHJvakljb24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1pY29uJyk7XG4gICAgYWRkUHJvakljb24uc3JjID0gYWRkSWNvbjtcblxuICAgIGNvbnN0IGFkZFByb2pUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkUHJvalRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai10ZXh0Jyk7XG4gICAgYWRkUHJvalRleHQudGV4dENvbnRlbnQgPSAnQWRkIG5ldyBwcm9qZWN0ISc7XG5cbiAgICBhZGRQcm9qZWN0QnRuLmFwcGVuZENoaWxkKGFkZFByb2pJY29uKTtcbiAgICBhZGRQcm9qZWN0QnRuLmFwcGVuZENoaWxkKGFkZFByb2pUZXh0KTtcblxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5wdXQoY29udGFpbmVyKSk7XG4gICAgfSk7XG4gIFxuICAgIHJldHVybiBhZGRQcm9qZWN0QnRuO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlSW5wdXQoY29udGFpbmVyKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1pbnB1dC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgYWRkUHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otaW5wdXQnKTtcblxuICAgIGNvbnN0IGFkZFByb2pJbnB1dFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J0bicpO1xuICAgIGFkZFByb2pJbnB1dFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgYWRkUHJvaklucHV0U3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otc3VibWl0Jyk7XG4gICAgYWRkUHJvaklucHV0U3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgYWRkUHJvaklucHV0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChjaGVja0lucHV0KGFkZFByb2plY3RJbnB1dC52YWx1ZSwgdG9Eb0xpc3QpID09PSBmYWxzZSkge1xuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0KGFkZFByb2plY3RJbnB1dC52YWx1ZSk7XG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkUHJvakJ0bihjb250YWluZXIpKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZFByb2pDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qQ2FuY2VsLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otY2FuY2VsJyk7XG4gICAgYWRkUHJvakNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBZGRQcm9qQnRuKGNvbnRhaW5lcikpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkUHJvakNhbmNlbEljb24gPSBuZXcgSW1hZ2UgKDIwLCAyMCk7XG4gICAgYWRkUHJvakNhbmNlbEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1jYW5jZWwtaWNvbicpO1xuICAgIGFkZFByb2pDYW5jZWxJY29uLnNyYyA9IGNhbmNlbEljb247XG4gICAgYWRkUHJvakNhbmNlbC5hcHBlbmRDaGlsZChhZGRQcm9qQ2FuY2VsSWNvbik7XG5cbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0SW5wdXQpO1xuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2pJbnB1dFN1Ym1pdCk7XG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvakNhbmNlbCk7XG5cbiAgICByZXR1cm4gYWRkUHJvamVjdEZvcm07XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVEZWxldGVCdG4oKSB7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEljb24gPSBuZXcgSW1hZ2UoMjAsIDI1KTtcbiAgICBkZWxldGVQcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKCdkZWwtcHJvai1pY29uJyk7XG4gICAgZGVsZXRlUHJvamVjdEljb24uc3JjID0gZGVsZXRlSWNvbjtcblxuICAgIGNvbnN0IHByb2plY3REZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0RGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsLWJ0bicpO1xuICAgIHByb2plY3REZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEljb24pO1xuXG4gICAgZGVsZXRlUHJvamVjdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgIHRvRG9MaXN0LmRlbGV0ZVByb2plY3QoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcbiAgICAgICAgY2xlYXJBY3RpdmUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0RGVsZXRlQnRuO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRWRpdEJ0bigpIHtcbiAgICBjb25zdCBwcm9qZWN0RWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RFZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvai1idG4nKTtcbiAgICBwcm9qZWN0RWRpdEJ0bi50ZXh0Q29udGVudCA9ICdSZW5hbWUnO1xuICAgIHByb2plY3RFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGNyZWF0ZUVkaXRJbnB1dChlLnRhcmdldC5wYXJlbnROb2RlKSk7ICAgIFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RFZGl0QnRuO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRWRpdElucHV0KGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGFkZFByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWlucHV0Jyk7XG5cbiAgICBjb25zdCBhZGRQcm9qSW5wdXRTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcbiAgICBhZGRQcm9qSW5wdXRTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGFkZFByb2pJbnB1dFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLXN1Ym1pdCcpO1xuICAgIGFkZFByb2pJbnB1dFN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIGFkZFByb2pJbnB1dFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgY2hvc2VuUHJvamVjdCA9IHRvRG9MaXN0LmdldFByb2plY3QoY29udGFpbmVyLmlkKTtcbiAgICAgICAgY2hvc2VuUHJvamVjdC5zZXROYW1lKGFkZFByb2plY3RJbnB1dC52YWx1ZSk7XG4gICAgICAgIGNyZWF0ZVByb2plY3RVSShjaG9zZW5Qcm9qZWN0LmdldE5hbWUoKSwgZm9sZGVySWNvbik7XG4gICAgICAgIGNsZWFyQWN0aXZlKCk7XG4gICAgICAgIGNyZWF0ZUFjdGl2ZVByb2plY3RVSShjaG9zZW5Qcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgICAgIHJlbmRlclRhc2tzKGNob3NlblByb2plY3QuZ2V0VGFza3MoKSk7XG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBjb25zb2xlLmxvZyh0b0RvTGlzdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRQcm9qQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvakNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNhbmNlbCcpO1xuICAgIGFkZFByb2pDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZFByb2pDYW5jZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2otYnRuJykuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgYWRkUHJvakNhbmNlbC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkUHJvakNhbmNlbEljb24gPSBuZXcgSW1hZ2UgKDIwLCAyMCk7XG4gICAgYWRkUHJvakNhbmNlbEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1jYW5jZWwtaWNvbicpO1xuICAgIGFkZFByb2pDYW5jZWxJY29uLnNyYyA9IGNhbmNlbEljb247XG4gICAgYWRkUHJvakNhbmNlbC5hcHBlbmRDaGlsZChhZGRQcm9qQ2FuY2VsSWNvbik7XG5cbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0SW5wdXQpO1xuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2pJbnB1dFN1Ym1pdCk7XG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvakNhbmNlbCk7XG5cbiAgICByZXR1cm4gYWRkUHJvamVjdEZvcm07XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVBZGRUYXNrQnRuKCkge1xuICAgIGNvbnN0IGFkZFRhc2tJY29uID0gbmV3IEltYWdlKDIwLCAyNSk7XG4gICAgYWRkVGFza0ljb24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2staWNvbicpO1xuICAgIGFkZFRhc2tJY29uLnNyYyA9IGFkZEljb247XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1idG4nKTtcbiAgICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZFRhc2tJY29uKTtcblxuICAgIGFkZFRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRm9ybShwcm9qZWN0Q29udGFpbmVyKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWRkVGFza0J0bjtcbn07XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0oY29udGFpbmVyKSB7XG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdGFzay1pbnB1dC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stdGl0bGUtaW5wdXQnKTtcblxuICAgIGNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICB0YXNrRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kYXRlLWlucHV0Jyk7XG5cbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdyb3dzJywgJzQnKTtcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCAnNTAnKTtcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGVzY3JpcHRpb24taW5wdXQnKTtcblxuICAgIGNvbnN0IGFkZFRhc2tTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBhZGRUYXNrU3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otc3VibWl0Jyk7XG4gICAgYWRkVGFza1N1Ym1pdC50ZXh0Q29udGVudCA9ICdBZGQgdGFzayEnO1xuICAgIGFkZFRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRvRG9MaXN0LmdldFByb2plY3QoY29udGFpbmVyLmlkKTtcbiAgICAgICAgaWYgKGNoZWNrSW5wdXQodGFza1RpdGxlSW5wdXQudmFsdWUsIHByb2plY3QpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tUaXRsZUlucHV0LnZhbHVlLCB0YXNrRGF0ZUlucHV0LnZhbHVlLCB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSk7IFxuICAgICAgICAgICAgcHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICAgICAgY3JlYXRlVGFza1VJKG5ld1Rhc2suZ2V0TmFtZSgpLCBuZXdUYXNrLmdldERhdGUoKSwgbmV3VGFzay5nZXREZXNjcmlwdGlvbigpLCBhY3RpdmVUYXNrcyk7XG4gICAgICAgICAgICBhZGRUYXNrRm9ybS5yZW1vdmUoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZFRhc2tDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQ2FuY2VsLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otY2FuY2VsJyk7XG4gICAgYWRkVGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gYWRkVGFza0NhbmNlbC5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvai1idG4nKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBhZGRUYXNrQ2FuY2VsLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRUYXNrQ2FuY2VsSWNvbiA9IG5ldyBJbWFnZSAoMjAsIDIwKTtcbiAgICBhZGRUYXNrQ2FuY2VsSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNhbmNlbC1pY29uJyk7XG4gICAgYWRkVGFza0NhbmNlbEljb24uc3JjID0gY2FuY2VsSWNvbjtcbiAgICBhZGRUYXNrQ2FuY2VsLmFwcGVuZENoaWxkKGFkZFRhc2tDYW5jZWxJY29uKTtcblxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25JbnB1dCk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza1N1Ym1pdCk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza0NhbmNlbCk7XG5cbiAgICByZXR1cm4gYWRkVGFza0Zvcm07XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrVUkodGFza1RpdGxlLCB0YXNrRGF0ZSwgdGFza0Rlc2NyaXB0aW9uLCBjb250YWluZXIpIHtcbiAgICBjb25zdCBuZXdUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgIG5ld1Rhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2tUaXRsZX1gKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgbmV3VGFza1RpdGxlLnRleHRDb250ZW50ID0gYCR7dGFza1RpdGxlfWA7XG5cbiAgICBjb25zdCBuZXdUYXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xuICAgIG5ld1Rhc2tEYXRlLnRleHRDb250ZW50ID0gYCR7dGFza0RhdGV9YDtcblxuICAgIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgbmV3VGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7dGFza0Rlc2NyaXB0aW9ufWA7XG5cbiAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tUaXRsZSk7XG4gICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRGF0ZSk7XG4gICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRGVzY3JpcHRpb24pO1xuICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0RlbGV0ZUJ0bigpKTtcbiAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tFZGl0QnRuKCkpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tDb250YWluZXIpO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyVGFza3MocHJvamVjdCkge1xuICAgIGlmIChwcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgcHJvamVjdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNyZWF0ZVRhc2tVSSh0YXNrLmdldE5hbWUoKSwgdGFzay5nZXREYXRlKCksIHRhc2suZ2V0RGVzY3JpcHRpb24oKSwgYWN0aXZlVGFza3MpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3QgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufTtcblxuZnVuY3Rpb24gY2xlYXJBY3RpdmUoKSB7XG4gICAgaWYgKGFjdGl2ZVByb2plY3QucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpKSB7XG4gICAgYWN0aXZlUHJvamVjdC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJykucmVtb3ZlKCk7XG4gICAgfTtcbiAgICBpZiAoYWN0aXZlUHJvamVjdC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2staW5wdXQtY29udGFpbmVyJykpIHtcbiAgICAgICAgYWN0aXZlUHJvamVjdC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2staW5wdXQtY29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgfVxuICAgIGFjdGl2ZVRhc2tzLnRleHRDb250ZW50ID0gJyc7XG4gICAgYWN0aXZlUHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSAnJztcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tEZWxldGVCdG4oKSB7XG4gICAgY29uc3QgZGVsZXRlVGFza0ljb24gPSBuZXcgSW1hZ2UoMjAsIDI1KTtcbiAgICBkZWxldGVUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWwtdGFzay1pY29uJyk7XG4gICAgZGVsZXRlVGFza0ljb24uc3JjID0gZGVsZXRlSWNvbjtcblxuICAgIGNvbnN0IHRhc2tEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsLWJ0bicpO1xuICAgIHRhc2tEZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0ljb24pO1xuXG4gICAgZGVsZXRlVGFza0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBjaG9zZW5Qcm9qZWN0ID0gdG9Eb0xpc3QuZ2V0UHJvamVjdChlLnRhcmdldC5jbG9zZXN0KCdkaXYuYWN0aXZlLXByb2plY3QnKS5pZCk7XG4gICAgICAgIGNob3NlblByb2plY3QuZGVsZXRlVGFzayhlLnRhcmdldC5jbG9zZXN0KCdkaXYuYWN0aXZlLXByb2plY3QnKS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGVcIikudGV4dENvbnRlbnQpO1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFza0RlbGV0ZUJ0bjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tFZGl0QnRuKCkge1xuICAgIGNvbnN0IHByb2plY3RFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdEVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qLWJ0bicpO1xuICAgIHByb2plY3RFZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIHByb2plY3RFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tFZGl0Rm9ybShlLnRhcmdldC5jbG9zZXN0KCcuYWN0aXZlLXByb2plY3QnKSkpOyAgICBcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0RWRpdEJ0bjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tFZGl0Rm9ybShjb250YWluZXIpIHtcbiAgICBjb25zb2xlLmxvZyhjb250YWluZXIuaWQpO1xuICAgIGNvbnN0IG9sZFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBvbGREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGF0ZScpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IG9sZERlc2NyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IGNob3NlblByb2plY3QgPSB0b0RvTGlzdC5nZXRQcm9qZWN0KGNvbnRhaW5lci5pZCk7XG4gICAgY29uc3QgY2hvc2VuVGFzayA9IGNob3NlblByb2plY3QuZ2V0VGFzayhvbGRUaXRsZSk7XG4gICAgY29uc29sZS5sb2coY2hvc2VuUHJvamVjdCk7XG4gICAgY29uc29sZS5sb2coY2hvc2VuVGFzayk7XG5cbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC10YXNrLWlucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay10aXRsZS1pbnB1dCcpO1xuICAgIHRhc2tUaXRsZUlucHV0LnZhbHVlID0gb2xkVGl0bGU7XG5cbiAgICBjb25zdCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgdGFza0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGF0ZS1pbnB1dCcpO1xuICAgIHRhc2tEYXRlSW5wdXQudmFsdWUgPSBvbGREYXRlO1xuXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncm93cycsICc0Jyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdjb2xzJywgJzUwJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBvbGREZXNjcjtcblxuICAgIGNvbnN0IGFkZFRhc2tTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBhZGRUYXNrU3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otc3VibWl0Jyk7XG4gICAgYWRkVGFza1N1Ym1pdC50ZXh0Q29udGVudCA9ICdFZGl0IHRhc2shJztcbiAgICBhZGRUYXNrU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNob3NlblRhc2suc2V0TmFtZSh0YXNrVGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgICAgIGNob3NlblRhc2suc2V0RGF0ZSh0YXNrRGF0ZUlucHV0LnZhbHVlKTtcbiAgICAgICAgY2hvc2VuVGFzay5zZXREZXNjcmlwdGlvbih0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSk7XG4gICAgICAgIGNyZWF0ZVRhc2tVSShjaG9zZW5UYXNrLmdldE5hbWUoKSwgY2hvc2VuVGFzay5nZXREYXRlKCksIGNob3NlblRhc2suZ2V0RGVzY3JpcHRpb24oKSwgYWN0aXZlVGFza3MpO1xuICAgICAgICBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgICAgIFxuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkVGFza0NhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2tDYW5jZWwuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1jYW5jZWwnKTtcbiAgICBhZGRUYXNrQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRUYXNrQ2FuY2VsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qLWJ0bicpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIGFkZFRhc2tDYW5jZWwucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZFRhc2tDYW5jZWxJY29uID0gbmV3IEltYWdlICgyMCwgMjApO1xuICAgIGFkZFRhc2tDYW5jZWxJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otY2FuY2VsLWljb24nKTtcbiAgICBhZGRUYXNrQ2FuY2VsSWNvbi5zcmMgPSBjYW5jZWxJY29uO1xuICAgIGFkZFRhc2tDYW5jZWwuYXBwZW5kQ2hpbGQoYWRkVGFza0NhbmNlbEljb24pO1xuXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlSW5wdXQpO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEYXRlSW5wdXQpO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrU3VibWl0KTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrQ2FuY2VsKTtcblxuICAgIHJldHVybiBhZGRUYXNrRm9ybTtcbn07XG5cbmZ1bmN0aW9uIGNoZWNrSW5wdXQob2JqZWN0TmFtZSwgcGFyZW50TmFtZSkge1xuICAgIGlmIChwYXJlbnROYW1lLmNvbnRhaW5zKG9iamVjdE5hbWUpKSB7XG4gICAgICAgIGFsZXJ0KCdUaGUgbmFtZSBzaG91bGQgbm90IGJlIHRoZSBzYW1lIGFzIHRoZSBwcmV2aW91cyBvbmVzJyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufTtcblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGl2ZVByb2plY3RVSShwcm9qZWN0TmFtZSkge1xuICAgIGFjdGl2ZVByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsIGAke3Byb2plY3ROYW1lfWApO1xuICAgIGFjdGl2ZVByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWV9YDtcbiAgICBhY3RpdmVQcm9qZWN0LmFwcGVuZENoaWxkKGNyZWF0ZUFkZFRhc2tCdG4oKSk7XG5cbiAgICBhZGRQcm9qZWN0VG9ET00oYWN0aXZlUHJvamVjdCwgYWN0aXZlU3BhY2UgKTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9