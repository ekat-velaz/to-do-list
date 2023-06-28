"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/ProjectsUI.js":
/*!***************************!*\
  !*** ./src/ProjectsUI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showProjects),
/* harmony export */   toDoList: () => (/* binding */ toDoList)
/* harmony export */ });
/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoList */ "./src/ToDoList.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _images_inbox_multiple_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/inbox-multiple.svg */ "./src/images/inbox-multiple.svg");
/* harmony import */ var _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/calendar-today.svg */ "./src/images/calendar-today.svg");
/* harmony import */ var _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/calendar-week.svg */ "./src/images/calendar-week.svg");
/* harmony import */ var _images_folder_outline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/folder-outline.svg */ "./src/images/folder-outline.svg");
/* harmony import */ var _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/trash-can-outline.svg */ "./src/images/trash-can-outline.svg");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg");










const toDoList = new _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"];

function showProjects() {
    createDefaultProjects();
    
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.appendChild(addProjectUI());
};

function addProjectToDOM(projectName) {
    const projectsList = document.getElementById('projects-list');
    projectsList.appendChild(projectName);
}

function createDefaultProjects() {
        const inbox = new _createProject__WEBPACK_IMPORTED_MODULE_1__["default"]('Inbox');
        toDoList.addProject(inbox);
        createProjectUI(inbox.getName(), _images_inbox_multiple_svg__WEBPACK_IMPORTED_MODULE_2__);
    
        const today = new _createProject__WEBPACK_IMPORTED_MODULE_1__["default"]('Today');
        toDoList.addProject(today);
        createProjectUI(today.getName(), _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_3__);
    
        const thisWeek = new _createProject__WEBPACK_IMPORTED_MODULE_1__["default"]('This week');
        toDoList.addProject(thisWeek);
        createProjectUI(thisWeek.getName(), _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_4__);
};

function createNewProject(projectName) {
    const newProject = new _createProject__WEBPACK_IMPORTED_MODULE_1__["default"](`${projectName}`);
    toDoList.addProject(newProject);
    createProjectUI(newProject.getName(), _images_folder_outline_svg__WEBPACK_IMPORTED_MODULE_5__);
};

function createProjectUI(projectName, imageSrc) {
    const newProjectContainer = document.createElement('div');
    newProjectContainer.classList.add('project-container');
    newProjectContainer.setAttribute('id', `${projectName}`);

    const newProject = document.createElement('button');
    newProject.classList.add('project');

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

    addProjectToDOM(newProjectContainer);
};

const addProjectUI = () => {
    const addProjectContainer = document.createElement('div');
    addProjectContainer.setAttribute('id', 'add-proj-container');
    addProjectContainer.appendChild(createAddProjBtn(addProjectContainer));

    return addProjectContainer;
};


function createAddProjBtn(container) {
    const addProjectBtn = document.createElement('btn');
    addProjectBtn.setAttribute('id', 'add-project-btn');

    const addProjIcon = new Image(20, 20);
    addProjIcon.setAttribute('id', 'add-proj-icon');
    addProjIcon.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_7__;

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
        createNewProject(addProjectInput.value);
        container.textContent = '';
        container.appendChild(createAddProjBtn(container));
    });

    const addProjCancel = document.createElement('button');
    addProjCancel.setAttribute('id', 'add-proj-cancel');
    addProjCancel.addEventListener('click', () => {
        container.textContent = '';
        container.appendChild(createAddProjBtn(container));
    });

    const addProjCancelIcon = new Image (20, 20);
    addProjCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
    addProjCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_8__;
    addProjCancel.appendChild(addProjCancelIcon);

    addProjectForm.appendChild(addProjectInput);
    addProjectForm.appendChild(addProjInputSubmit);
    addProjectForm.appendChild(addProjCancel);

    return addProjectForm;
};

function createDeleteBtn() {
    const deleteProjectIcon = new Image(20, 25);
    deleteProjectIcon.classList.add('del-proj-icon');
    deleteProjectIcon.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_6__;

    const projectDeleteBtn = document.createElement('button');
    projectDeleteBtn.classList.add('project-del-btn');
    projectDeleteBtn.appendChild(deleteProjectIcon);

    deleteProjectIcon.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.remove();
        toDoList.deleteProject(e.target.parentNode.parentNode.id);
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
        const project = toDoList.getProject(container.id);
        project.setName(addProjectInput.value);
        createProjectUI(project.getName(), _images_folder_outline_svg__WEBPACK_IMPORTED_MODULE_5__);
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
    addProjCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_8__;
    addProjCancel.appendChild(addProjCancelIcon);

    addProjectForm.appendChild(addProjectInput);
    addProjectForm.appendChild(addProjInputSubmit);
    addProjectForm.appendChild(addProjCancel);

    return addProjectForm;
};

/***/ }),

/***/ "./src/ToDoList.js":
/*!*************************!*\
  !*** ./src/ToDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoList)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");



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

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
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
    }
    
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectsUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectsUI */ "./src/ProjectsUI.js");



(0,_ProjectsUI__WEBPACK_IMPORTED_MODULE_0__["default"])();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41NTNiNDg1MWNlOGFiYmI5NzA3Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNJO0FBQ2M7QUFDQTtBQUNGO0FBQ0c7QUFDRztBQUNoQjtBQUNJOztBQUVyQyxxQkFBcUIsaURBQVE7O0FBRXJCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixzREFBTztBQUNqQztBQUNBLHlDQUF5Qyx1REFBUztBQUNsRDtBQUNBLDBCQUEwQixzREFBTztBQUNqQztBQUNBLHlDQUF5Qyx1REFBUztBQUNsRDtBQUNBLDZCQUE2QixzREFBTztBQUNwQztBQUNBLDRDQUE0QyxzREFBUTtBQUNwRDs7QUFFQTtBQUNBLDJCQUEyQixzREFBTyxJQUFJLFlBQVk7QUFDbEQ7QUFDQSwwQ0FBMEMsdURBQVU7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFlBQVk7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsWUFBWTs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQU87O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSw0QkFBNEIsOENBQVU7QUFDdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBEQUFVOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdURBQVU7QUFDckQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLDRCQUE0Qiw4Q0FBVTtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL004QztBQUNSOztBQUV2QjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoQytEOztBQUVoRDtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JCd0M7QUFDQTs7QUFFeEMsdURBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1Byb2plY3RzVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9Eb0xpc3QgZnJvbSBcIi4vVG9Eb0xpc3RcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcbmltcG9ydCBpbmJveEljb24gZnJvbSBcIi4vaW1hZ2VzL2luYm94LW11bHRpcGxlLnN2Z1wiO1xuaW1wb3J0IHRvZGF5SWNvbiBmcm9tIFwiLi9pbWFnZXMvY2FsZW5kYXItdG9kYXkuc3ZnXCI7XG5pbXBvcnQgd2Vla0ljb24gZnJvbSBcIi4vaW1hZ2VzL2NhbGVuZGFyLXdlZWsuc3ZnXCI7XG5pbXBvcnQgZm9sZGVySWNvbiBmcm9tIFwiLi9pbWFnZXMvZm9sZGVyLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi9pbWFnZXMvcGx1cy5zdmdcIjtcbmltcG9ydCBjYW5jZWxJY29uIGZyb20gXCIuL2ltYWdlcy9jbG9zZS5zdmdcIjtcblxuZXhwb3J0IGNvbnN0IHRvRG9MaXN0ID0gbmV3IFRvRG9MaXN0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93UHJvamVjdHMoKSB7XG4gICAgY3JlYXRlRGVmYXVsdFByb2plY3RzKCk7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtY29udGFpbmVyJyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFVJKCkpO1xufTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvRE9NKHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWxpc3QnKTtcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdHMoKSB7XG4gICAgICAgIGNvbnN0IGluYm94ID0gbmV3IFByb2plY3QoJ0luYm94Jyk7XG4gICAgICAgIHRvRG9MaXN0LmFkZFByb2plY3QoaW5ib3gpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0VUkoaW5ib3guZ2V0TmFtZSgpLCBpbmJveEljb24pO1xuICAgIFxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBQcm9qZWN0KCdUb2RheScpO1xuICAgICAgICB0b0RvTGlzdC5hZGRQcm9qZWN0KHRvZGF5KTtcbiAgICAgICAgY3JlYXRlUHJvamVjdFVJKHRvZGF5LmdldE5hbWUoKSwgdG9kYXlJY29uKTtcbiAgICBcbiAgICAgICAgY29uc3QgdGhpc1dlZWsgPSBuZXcgUHJvamVjdCgnVGhpcyB3ZWVrJyk7XG4gICAgICAgIHRvRG9MaXN0LmFkZFByb2plY3QodGhpc1dlZWspO1xuICAgICAgICBjcmVhdGVQcm9qZWN0VUkodGhpc1dlZWsuZ2V0TmFtZSgpLCB3ZWVrSWNvbik7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGAke3Byb2plY3ROYW1lfWApO1xuICAgIHRvRG9MaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgY3JlYXRlUHJvamVjdFVJKG5ld1Byb2plY3QuZ2V0TmFtZSgpLCBmb2xkZXJJY29uKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RVSShwcm9qZWN0TmFtZSwgaW1hZ2VTcmMpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Byb2plY3ROYW1lfWApO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gICAgY29uc3QgcHJvamVjdEljb24gPSBuZXcgSW1hZ2UoNTAsIDUwKTtcbiAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nKTtcbiAgICBwcm9qZWN0SWNvbi5zcmMgPSBpbWFnZVNyYztcblxuICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFRleHQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10ZXh0Jyk7XG4gICAgcHJvamVjdFRleHQudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TmFtZX1gO1xuXG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SWNvbik7XG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG4gICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcblxuICAgIGlmICgocHJvamVjdE5hbWUgIT09ICdJbmJveCcpICYmIChwcm9qZWN0TmFtZSAhPT0gJ1RvZGF5JykgJiYgKHByb2plY3ROYW1lICE9PSAnVGhpcyB3ZWVrJykpIHtcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEZWxldGVCdG4oKSk7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWRpdEJ0bigpKTtcbiAgICB9O1xuXG4gICAgYWRkUHJvamVjdFRvRE9NKG5ld1Byb2plY3RDb250YWluZXIpO1xufTtcblxuY29uc3QgYWRkUHJvamVjdFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otY29udGFpbmVyJyk7XG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBZGRQcm9qQnRuKGFkZFByb2plY3RDb250YWluZXIpKTtcblxuICAgIHJldHVybiBhZGRQcm9qZWN0Q29udGFpbmVyO1xufTtcblxuXG5mdW5jdGlvbiBjcmVhdGVBZGRQcm9qQnRuKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcbiAgICBhZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2plY3QtYnRuJyk7XG5cbiAgICBjb25zdCBhZGRQcm9qSWNvbiA9IG5ldyBJbWFnZSgyMCwgMjApO1xuICAgIGFkZFByb2pJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otaWNvbicpO1xuICAgIGFkZFByb2pJY29uLnNyYyA9IGFkZEljb247XG5cbiAgICBjb25zdCBhZGRQcm9qVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFByb2pUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otdGV4dCcpO1xuICAgIGFkZFByb2pUZXh0LnRleHRDb250ZW50ID0gJ0FkZCBuZXcgcHJvamVjdCEnO1xuXG4gICAgYWRkUHJvamVjdEJ0bi5hcHBlbmRDaGlsZChhZGRQcm9qSWNvbik7XG4gICAgYWRkUHJvamVjdEJ0bi5hcHBlbmRDaGlsZChhZGRQcm9qVGV4dCk7XG5cbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0KGNvbnRhaW5lcikpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFkZFByb2plY3RCdG47XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dChjb250YWluZXIpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWlucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBhZGRQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1pbnB1dCcpO1xuXG4gICAgY29uc3QgYWRkUHJvaklucHV0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG4gICAgYWRkUHJvaklucHV0U3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBhZGRQcm9qSW5wdXRTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1zdWJtaXQnKTtcbiAgICBhZGRQcm9qSW5wdXRTdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBhZGRQcm9qSW5wdXRTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdChhZGRQcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFkZFByb2pCdG4oY29udGFpbmVyKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRQcm9qQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvakNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNhbmNlbCcpO1xuICAgIGFkZFByb2pDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkUHJvakJ0bihjb250YWluZXIpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZFByb2pDYW5jZWxJY29uID0gbmV3IEltYWdlICgyMCwgMjApO1xuICAgIGFkZFByb2pDYW5jZWxJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otY2FuY2VsLWljb24nKTtcbiAgICBhZGRQcm9qQ2FuY2VsSWNvbi5zcmMgPSBjYW5jZWxJY29uO1xuICAgIGFkZFByb2pDYW5jZWwuYXBwZW5kQ2hpbGQoYWRkUHJvakNhbmNlbEljb24pO1xuXG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdElucHV0KTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qSW5wdXRTdWJtaXQpO1xuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2pDYW5jZWwpO1xuXG4gICAgcmV0dXJuIGFkZFByb2plY3RGb3JtO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlQnRuKCkge1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RJY29uID0gbmV3IEltYWdlKDIwLCAyNSk7XG4gICAgZGVsZXRlUHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgnZGVsLXByb2otaWNvbicpO1xuICAgIGRlbGV0ZVByb2plY3RJY29uLnNyYyA9IGRlbGV0ZUljb247XG5cbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbC1idG4nKTtcbiAgICBwcm9qZWN0RGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RJY29uKTtcblxuICAgIGRlbGV0ZVByb2plY3RJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgICB0b0RvTGlzdC5kZWxldGVQcm9qZWN0KGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdERlbGV0ZUJ0bjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUVkaXRCdG4oKSB7XG4gICAgY29uc3QgcHJvamVjdEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0RWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2otYnRuJyk7XG4gICAgcHJvamVjdEVkaXRCdG4udGV4dENvbnRlbnQgPSAnUmVuYW1lJztcbiAgICBwcm9qZWN0RWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjcmVhdGVFZGl0SW5wdXQoZS50YXJnZXQucGFyZW50Tm9kZSkpOyAgICBcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0RWRpdEJ0bjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUVkaXRJbnB1dChjb250YWluZXIpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWlucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBhZGRQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1pbnB1dCcpO1xuXG4gICAgY29uc3QgYWRkUHJvaklucHV0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG4gICAgYWRkUHJvaklucHV0U3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBhZGRQcm9qSW5wdXRTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1zdWJtaXQnKTtcbiAgICBhZGRQcm9qSW5wdXRTdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBhZGRQcm9qSW5wdXRTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRvRG9MaXN0LmdldFByb2plY3QoY29udGFpbmVyLmlkKTtcbiAgICAgICAgcHJvamVjdC5zZXROYW1lKGFkZFByb2plY3RJbnB1dC52YWx1ZSk7XG4gICAgICAgIGNyZWF0ZVByb2plY3RVSShwcm9qZWN0LmdldE5hbWUoKSwgZm9sZGVySWNvbik7XG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBjb25zb2xlLmxvZyh0b0RvTGlzdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRQcm9qQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvakNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNhbmNlbCcpO1xuICAgIGFkZFByb2pDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZFByb2pDYW5jZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2otYnRuJykuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgYWRkUHJvakNhbmNlbC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkUHJvakNhbmNlbEljb24gPSBuZXcgSW1hZ2UgKDIwLCAyMCk7XG4gICAgYWRkUHJvakNhbmNlbEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1jYW5jZWwtaWNvbicpO1xuICAgIGFkZFByb2pDYW5jZWxJY29uLnNyYyA9IGNhbmNlbEljb247XG4gICAgYWRkUHJvakNhbmNlbC5hcHBlbmRDaGlsZChhZGRQcm9qQ2FuY2VsSWNvbik7XG5cbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0SW5wdXQpO1xuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2pJbnB1dFN1Ym1pdCk7XG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvakNhbmNlbCk7XG5cbiAgICByZXR1cm4gYWRkUHJvamVjdEZvcm07XG59OyIsImltcG9ydCB7IGNvbXBhcmVBc2MsIHRvRGF0ZSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vY3JlYXRlUHJvamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdXG4gICAgfTtcblxuICAgIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICB9O1xuXG4gICAgZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICAgIH07XG5cbiAgICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSk7XG4gICAgfTtcblxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgICAgICBpZiAodGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5ld1Byb2plY3QubmFtZSkpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxuICAgICAgfVxuICAgIFxuICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSB0aGlzLnByb2plY3RzLmZpbmQoXG4gICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZVxuICAgICAgICApXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKVxuICAgICAgfVxufTsiLCJpbXBvcnQgeyB0b0RhdGUsIGlzVG9kYXksIGlzVGhpc1dlZWssIHN1YkRheXMgfSBmcm9tICdkYXRlLWZucydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMudGFza3MgPSBbXVxuICAgIH1cblxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cblxuXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKVxuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQgc2hvd1Byb2plY3RzIGZyb20gXCIuL1Byb2plY3RzVUlcIjtcbmltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vUHJvamVjdHNVSVwiO1xuXG5zaG93UHJvamVjdHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==