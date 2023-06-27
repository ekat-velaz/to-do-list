"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/ProjectsUI.js":
/*!***************************!*\
  !*** ./src/ProjectsUI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showProjects)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _images_inbox_multiple_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/inbox-multiple.svg */ "./src/images/inbox-multiple.svg");
/* harmony import */ var _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/calendar-today.svg */ "./src/images/calendar-today.svg");
/* harmony import */ var _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/calendar-week.svg */ "./src/images/calendar-week.svg");
/* harmony import */ var _images_folder_outline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/folder-outline.svg */ "./src/images/folder-outline.svg");
/* harmony import */ var _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/trash-can-outline.svg */ "./src/images/trash-can-outline.svg");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg");









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
    const inbox = new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"]('Inbox');
    createProjectUI(inbox.getName(), _images_inbox_multiple_svg__WEBPACK_IMPORTED_MODULE_1__);

    const today = new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"]('Today');
    createProjectUI(today.getName(), _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_2__);

    const thisWeek = new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"]('This week');
    createProjectUI(thisWeek.getName(), _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_3__);
};

function createNewProject(projectName) {
    const newProject = new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"](`${projectName}`);
    createProjectUI(newProject.getName(), _images_folder_outline_svg__WEBPACK_IMPORTED_MODULE_4__);
};

function createProjectUI(projectName, imageSrc) {
    const newProjectContainer = document.createElement('div');
    newProjectContainer.classList.add('project-container');

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
        // newProjectContainer.appendChild(createEditBtn());
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
    addProjIcon.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_6__;

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
    addProjCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_7__;
    addProjCancel.appendChild(addProjCancelIcon);

    addProjectForm.appendChild(addProjectInput);
    addProjectForm.appendChild(addProjInputSubmit);
    addProjectForm.appendChild(addProjCancel);

    return addProjectForm;
};

function createDeleteBtn() {
    const deleteProjectIcon = new Image(20, 25);
    deleteProjectIcon.classList.add('del-proj-icon');
    deleteProjectIcon.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_5__;

    const projectDeleteBtn = document.createElement('button');
    projectDeleteBtn.classList.add('project-del-btn');
    projectDeleteBtn.appendChild(deleteProjectIcon);

    deleteProjectIcon.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.remove();
    });

    return projectDeleteBtn;
};


//TO-Do: make a button to edit a project name
// function createEditBtn() {
//     const projectEditBtn = document.createElement('button');
//     projectEditBtn.classList.add('edit-proj-btn');
//     projectEditBtn.textContent = 'Rename';
//     projectEditBtn.addEventListener('click', (e) => {
//         e.target.style.visibility = 'hidden';
//         e.target.parentNode.appendChild(createEditInput(e.target.parentNode));    
//     });

//     return projectEditBtn;
// };

// function createEditInput(container) {
//     const addProjectForm = document.createElement('form');
//     addProjectForm.setAttribute('id', 'add-proj-input-container');

//     const addProjectInput = document.createElement('input');
//     addProjectInput.setAttribute('id', 'add-proj-input');

//     const addProjInputSubmit = document.createElement('btn');
//     addProjInputSubmit.setAttribute('type', 'submit');
//     addProjInputSubmit.setAttribute('id', 'add-proj-submit');
//     addProjInputSubmit.textContent = 'Submit';
//     addProjInputSubmit.addEventListener('click', (event) => {
//         event.preventDefault();
//         // createNewProject(addProjectInput.value);

//         container.textContent = '';
//     });

//     const addProjCancel = document.createElement('button');
//     addProjCancel.setAttribute('id', 'add-proj-cancel');
//     addProjCancel.addEventListener('click', () => {
//         addProjCancel.parentNode.parentNode.querySelector('.edit-proj-btn').style.visibility = 'visible';
//         addProjCancel.parentNode.remove();
//     });

//     const addProjCancelIcon = new Image (20, 20);
//     addProjCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
//     addProjCancelIcon.src = cancelIcon;
//     addProjCancel.appendChild(addProjCancelIcon);

//     addProjectForm.appendChild(addProjectInput);
//     addProjectForm.appendChild(addProjInputSubmit);
//     addProjectForm.appendChild(addProjCancel);

//     return addProjectForm;
// };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xZDJmNTRjZTRkNTRhYWQyMTRjMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDYztBQUNBO0FBQ0Y7QUFDRztBQUNHO0FBQ2hCO0FBQ0k7O0FBRTdCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixzREFBTztBQUM3QixxQ0FBcUMsdURBQVM7O0FBRTlDLHNCQUFzQixzREFBTztBQUM3QixxQ0FBcUMsdURBQVM7O0FBRTlDLHlCQUF5QixzREFBTztBQUNoQyx3Q0FBd0Msc0RBQVE7QUFDaEQ7O0FBRUE7QUFDQSwyQkFBMkIsc0RBQU8sSUFBSSxZQUFZO0FBQ2xELDBDQUEwQyx1REFBVTtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxZQUFZOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBTzs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLDRCQUE0Qiw4Q0FBVTtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMERBQVU7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0TStEOztBQUVoRDtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JCd0M7O0FBRXhDLHVEQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Qcm9qZWN0c1VJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcbmltcG9ydCBpbmJveEljb24gZnJvbSBcIi4vaW1hZ2VzL2luYm94LW11bHRpcGxlLnN2Z1wiO1xuaW1wb3J0IHRvZGF5SWNvbiBmcm9tIFwiLi9pbWFnZXMvY2FsZW5kYXItdG9kYXkuc3ZnXCI7XG5pbXBvcnQgd2Vla0ljb24gZnJvbSBcIi4vaW1hZ2VzL2NhbGVuZGFyLXdlZWsuc3ZnXCI7XG5pbXBvcnQgZm9sZGVySWNvbiBmcm9tIFwiLi9pbWFnZXMvZm9sZGVyLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi9pbWFnZXMvcGx1cy5zdmdcIjtcbmltcG9ydCBjYW5jZWxJY29uIGZyb20gXCIuL2ltYWdlcy9jbG9zZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd1Byb2plY3RzKCkge1xuICAgIGNyZWF0ZURlZmF1bHRQcm9qZWN0cygpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWNvbnRhaW5lcicpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RVSSgpKTtcbn07XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0RPTShwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1saXN0Jyk7XG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3RzKCkge1xuICAgIGNvbnN0IGluYm94ID0gbmV3IFByb2plY3QoJ0luYm94Jyk7XG4gICAgY3JlYXRlUHJvamVjdFVJKGluYm94LmdldE5hbWUoKSwgaW5ib3hJY29uKTtcblxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IFByb2plY3QoJ1RvZGF5Jyk7XG4gICAgY3JlYXRlUHJvamVjdFVJKHRvZGF5LmdldE5hbWUoKSwgdG9kYXlJY29uKTtcblxuICAgIGNvbnN0IHRoaXNXZWVrID0gbmV3IFByb2plY3QoJ1RoaXMgd2VlaycpO1xuICAgIGNyZWF0ZVByb2plY3RVSSh0aGlzV2Vlay5nZXROYW1lKCksIHdlZWtJY29uKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoYCR7cHJvamVjdE5hbWV9YCk7XG4gICAgY3JlYXRlUHJvamVjdFVJKG5ld1Byb2plY3QuZ2V0TmFtZSgpLCBmb2xkZXJJY29uKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RVSShwcm9qZWN0TmFtZSwgaW1hZ2VTcmMpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gICAgY29uc3QgcHJvamVjdEljb24gPSBuZXcgSW1hZ2UoNTAsIDUwKTtcbiAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nKTtcbiAgICBwcm9qZWN0SWNvbi5zcmMgPSBpbWFnZVNyYztcblxuICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFRleHQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10ZXh0Jyk7XG4gICAgcHJvamVjdFRleHQudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TmFtZX1gO1xuXG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SWNvbik7XG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG4gICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcblxuICAgIGlmICgocHJvamVjdE5hbWUgIT09ICdJbmJveCcpICYmIChwcm9qZWN0TmFtZSAhPT0gJ1RvZGF5JykgJiYgKHByb2plY3ROYW1lICE9PSAnVGhpcyB3ZWVrJykpIHtcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEZWxldGVCdG4oKSk7XG4gICAgICAgIC8vIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWRpdEJ0bigpKTtcbiAgICB9O1xuXG4gICAgYWRkUHJvamVjdFRvRE9NKG5ld1Byb2plY3RDb250YWluZXIpO1xufTtcblxuY29uc3QgYWRkUHJvamVjdFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otY29udGFpbmVyJyk7XG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBZGRQcm9qQnRuKGFkZFByb2plY3RDb250YWluZXIpKTtcblxuICAgIHJldHVybiBhZGRQcm9qZWN0Q29udGFpbmVyO1xufTtcblxuXG5mdW5jdGlvbiBjcmVhdGVBZGRQcm9qQnRuKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcbiAgICBhZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2plY3QtYnRuJyk7XG5cbiAgICBjb25zdCBhZGRQcm9qSWNvbiA9IG5ldyBJbWFnZSgyMCwgMjApO1xuICAgIGFkZFByb2pJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otaWNvbicpO1xuICAgIGFkZFByb2pJY29uLnNyYyA9IGFkZEljb247XG5cbiAgICBjb25zdCBhZGRQcm9qVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFByb2pUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otdGV4dCcpO1xuICAgIGFkZFByb2pUZXh0LnRleHRDb250ZW50ID0gJ0FkZCBuZXcgcHJvamVjdCEnO1xuXG4gICAgYWRkUHJvamVjdEJ0bi5hcHBlbmRDaGlsZChhZGRQcm9qSWNvbik7XG4gICAgYWRkUHJvamVjdEJ0bi5hcHBlbmRDaGlsZChhZGRQcm9qVGV4dCk7XG5cbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0KGNvbnRhaW5lcikpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFkZFByb2plY3RCdG47XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dChjb250YWluZXIpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWlucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBhZGRQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1pbnB1dCcpO1xuXG4gICAgY29uc3QgYWRkUHJvaklucHV0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG4gICAgYWRkUHJvaklucHV0U3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBhZGRQcm9qSW5wdXRTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1zdWJtaXQnKTtcbiAgICBhZGRQcm9qSW5wdXRTdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBhZGRQcm9qSW5wdXRTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdChhZGRQcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFkZFByb2pCdG4oY29udGFpbmVyKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRQcm9qQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvakNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNhbmNlbCcpO1xuICAgIGFkZFByb2pDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkUHJvakJ0bihjb250YWluZXIpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZFByb2pDYW5jZWxJY29uID0gbmV3IEltYWdlICgyMCwgMjApO1xuICAgIGFkZFByb2pDYW5jZWxJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otY2FuY2VsLWljb24nKTtcbiAgICBhZGRQcm9qQ2FuY2VsSWNvbi5zcmMgPSBjYW5jZWxJY29uO1xuICAgIGFkZFByb2pDYW5jZWwuYXBwZW5kQ2hpbGQoYWRkUHJvakNhbmNlbEljb24pO1xuXG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdElucHV0KTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qSW5wdXRTdWJtaXQpO1xuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2pDYW5jZWwpO1xuXG4gICAgcmV0dXJuIGFkZFByb2plY3RGb3JtO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlQnRuKCkge1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RJY29uID0gbmV3IEltYWdlKDIwLCAyNSk7XG4gICAgZGVsZXRlUHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgnZGVsLXByb2otaWNvbicpO1xuICAgIGRlbGV0ZVByb2plY3RJY29uLnNyYyA9IGRlbGV0ZUljb247XG5cbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbC1idG4nKTtcbiAgICBwcm9qZWN0RGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RJY29uKTtcblxuICAgIGRlbGV0ZVByb2plY3RJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3REZWxldGVCdG47XG59O1xuXG5cbi8vVE8tRG86IG1ha2UgYSBidXR0b24gdG8gZWRpdCBhIHByb2plY3QgbmFtZVxuLy8gZnVuY3Rpb24gY3JlYXRlRWRpdEJ0bigpIHtcbi8vICAgICBjb25zdCBwcm9qZWN0RWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuLy8gICAgIHByb2plY3RFZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvai1idG4nKTtcbi8vICAgICBwcm9qZWN0RWRpdEJ0bi50ZXh0Q29udGVudCA9ICdSZW5hbWUnO1xuLy8gICAgIHByb2plY3RFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbi8vICAgICAgICAgZS50YXJnZXQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuLy8gICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGNyZWF0ZUVkaXRJbnB1dChlLnRhcmdldC5wYXJlbnROb2RlKSk7ICAgIFxuLy8gICAgIH0pO1xuXG4vLyAgICAgcmV0dXJuIHByb2plY3RFZGl0QnRuO1xuLy8gfTtcblxuLy8gZnVuY3Rpb24gY3JlYXRlRWRpdElucHV0KGNvbnRhaW5lcikge1xuLy8gICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuLy8gICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otaW5wdXQtY29udGFpbmVyJyk7XG5cbi8vICAgICBjb25zdCBhZGRQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGFkZFByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWlucHV0Jyk7XG5cbi8vICAgICBjb25zdCBhZGRQcm9qSW5wdXRTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcbi8vICAgICBhZGRQcm9qSW5wdXRTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuLy8gICAgIGFkZFByb2pJbnB1dFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLXN1Ym1pdCcpO1xuLy8gICAgIGFkZFByb2pJbnB1dFN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuLy8gICAgIGFkZFByb2pJbnB1dFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAvLyBjcmVhdGVOZXdQcm9qZWN0KGFkZFByb2plY3RJbnB1dC52YWx1ZSk7XG5cbi8vICAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4vLyAgICAgfSk7XG5cbi8vICAgICBjb25zdCBhZGRQcm9qQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4vLyAgICAgYWRkUHJvakNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNhbmNlbCcpO1xuLy8gICAgIGFkZFByb2pDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgICAgIGFkZFByb2pDYW5jZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2otYnRuJykuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbi8vICAgICAgICAgYWRkUHJvakNhbmNlbC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuLy8gICAgIH0pO1xuXG4vLyAgICAgY29uc3QgYWRkUHJvakNhbmNlbEljb24gPSBuZXcgSW1hZ2UgKDIwLCAyMCk7XG4vLyAgICAgYWRkUHJvakNhbmNlbEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1jYW5jZWwtaWNvbicpO1xuLy8gICAgIGFkZFByb2pDYW5jZWxJY29uLnNyYyA9IGNhbmNlbEljb247XG4vLyAgICAgYWRkUHJvakNhbmNlbC5hcHBlbmRDaGlsZChhZGRQcm9qQ2FuY2VsSWNvbik7XG5cbi8vICAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0SW5wdXQpO1xuLy8gICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2pJbnB1dFN1Ym1pdCk7XG4vLyAgICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvakNhbmNlbCk7XG5cbi8vICAgICByZXR1cm4gYWRkUHJvamVjdEZvcm07XG4vLyB9OyIsImltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSwgaXNUaGlzV2Vlaywgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgfVxuXG5cbiAgICBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spXG4gICAgfVxuICAgIFxufSIsImltcG9ydCBzaG93UHJvamVjdHMgZnJvbSBcIi4vUHJvamVjdHNVSVwiO1xuXG5zaG93UHJvamVjdHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==