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
    projectsContainer.appendChild(createAddProjectUI());
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
        const deleteProjectIcon = new Image(50, 50);
        deleteProjectIcon.classList.add('del-proj-icon');
        deleteProjectIcon.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_5__;

        const projectDeleteBtn = document.createElement('button');
        projectDeleteBtn.classList.add('project-del-btn');

        projectDeleteBtn.appendChild(deleteProjectIcon);
        projectDeleteBtn.addEventListener('click', (e) => {
            e.target.parentNode.remove();
        });

        newProjectContainer.appendChild(projectDeleteBtn);
    };

    addProjectToDOM(newProjectContainer);
};

const createAddProjectUI = () => {
    const addProjectContainer = document.createElement('div');
    addProjectContainer.setAttribute('id', 'add-proj-container');

    addProjectContainer.appendChild(createAddProjBtn());

    function createInput() {
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
            addProjectContainer.textContent = '';
            addProjectContainer.appendChild(createAddProjBtn());
        });
    
        const addProjCancel = document.createElement('button');
        addProjCancel.setAttribute('id', 'add-proj-cancel');
        addProjCancel.addEventListener('click', () => {
            addProjectContainer.textContent = '';
            addProjectContainer.appendChild(createAddProjBtn());
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


    function createAddProjBtn() {
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
            addProjectContainer.textContent = '';
            addProjectContainer.appendChild(createInput());
        });

        return addProjectBtn;
    };

    


    
    return addProjectContainer;
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43MWUxYWY1OTMzMDAzYjc5OTZmNy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDYztBQUNBO0FBQ0Y7QUFDRztBQUNHO0FBQ2hCO0FBQ0k7O0FBRTdCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixzREFBTztBQUM3QixxQ0FBcUMsdURBQVM7O0FBRTlDLHNCQUFzQixzREFBTztBQUM3QixxQ0FBcUMsdURBQVM7O0FBRTlDLHlCQUF5QixzREFBTztBQUNoQyx3Q0FBd0Msc0RBQVE7QUFDaEQ7O0FBRUE7QUFDQSwyQkFBMkIsc0RBQU8sSUFBSSxZQUFZO0FBQ2xELDBDQUEwQyx1REFBVTtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxZQUFZOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDBEQUFVOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLGdDQUFnQyw4Q0FBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFPOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySitEOztBQUVoRDtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QndDOztBQUV4Qyx1REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvUHJvamVjdHNVSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgaW5ib3hJY29uIGZyb20gXCIuL2ltYWdlcy9pbmJveC1tdWx0aXBsZS5zdmdcIjtcbmltcG9ydCB0b2RheUljb24gZnJvbSBcIi4vaW1hZ2VzL2NhbGVuZGFyLXRvZGF5LnN2Z1wiO1xuaW1wb3J0IHdlZWtJY29uIGZyb20gXCIuL2ltYWdlcy9jYWxlbmRhci13ZWVrLnN2Z1wiO1xuaW1wb3J0IGZvbGRlckljb24gZnJvbSBcIi4vaW1hZ2VzL2ZvbGRlci1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vaW1hZ2VzL3RyYXNoLWNhbi1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4vaW1hZ2VzL3BsdXMuc3ZnXCI7XG5pbXBvcnQgY2FuY2VsSWNvbiBmcm9tIFwiLi9pbWFnZXMvY2xvc2Uuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcbiAgICBjcmVhdGVEZWZhdWx0UHJvamVjdHMoKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1jb250YWluZXInKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBZGRQcm9qZWN0VUkoKSk7XG59O1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9ET00ocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtbGlzdCcpO1xuICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0cygpIHtcbiAgICBjb25zdCBpbmJveCA9IG5ldyBQcm9qZWN0KCdJbmJveCcpO1xuICAgIGNyZWF0ZVByb2plY3RVSShpbmJveC5nZXROYW1lKCksIGluYm94SWNvbik7XG5cbiAgICBjb25zdCB0b2RheSA9IG5ldyBQcm9qZWN0KCdUb2RheScpO1xuICAgIGNyZWF0ZVByb2plY3RVSSh0b2RheS5nZXROYW1lKCksIHRvZGF5SWNvbik7XG5cbiAgICBjb25zdCB0aGlzV2VlayA9IG5ldyBQcm9qZWN0KCdUaGlzIHdlZWsnKTtcbiAgICBjcmVhdGVQcm9qZWN0VUkodGhpc1dlZWsuZ2V0TmFtZSgpLCB3ZWVrSWNvbik7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGAke3Byb2plY3ROYW1lfWApO1xuICAgIGNyZWF0ZVByb2plY3RVSShuZXdQcm9qZWN0LmdldE5hbWUoKSwgZm9sZGVySWNvbik7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0VUkocHJvamVjdE5hbWUsIGltYWdlU3JjKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcblxuICAgIGNvbnN0IHByb2plY3RJY29uID0gbmV3IEltYWdlKDUwLCA1MCk7XG4gICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pY29uJyk7XG4gICAgcHJvamVjdEljb24uc3JjID0gaW1hZ2VTcmM7XG5cbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RUZXh0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGV4dCcpO1xuICAgIHByb2plY3RUZXh0LnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWV9YDtcblxuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG5cbiAgICBpZiAoKHByb2plY3ROYW1lICE9PSAnSW5ib3gnKSAmJiAocHJvamVjdE5hbWUgIT09ICdUb2RheScpICYmIChwcm9qZWN0TmFtZSAhPT0gJ1RoaXMgd2VlaycpKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RJY29uID0gbmV3IEltYWdlKDUwLCA1MCk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbC1wcm9qLWljb24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEljb24uc3JjID0gZGVsZXRlSWNvbjtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3REZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWwtYnRuJyk7XG5cbiAgICAgICAgcHJvamVjdERlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0SWNvbik7XG4gICAgICAgIHByb2plY3REZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnRuKTtcbiAgICB9O1xuXG4gICAgYWRkUHJvamVjdFRvRE9NKG5ld1Byb2plY3RDb250YWluZXIpO1xufTtcblxuY29uc3QgY3JlYXRlQWRkUHJvamVjdFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otY29udGFpbmVyJyk7XG5cbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFkZFByb2pCdG4oKSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJbnB1dCgpIHtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otaW5wdXQtY29udGFpbmVyJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGFkZFByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWlucHV0Jyk7XG5cbiAgICAgICAgY29uc3QgYWRkUHJvaklucHV0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG4gICAgICAgIGFkZFByb2pJbnB1dFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgIGFkZFByb2pJbnB1dFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLXN1Ym1pdCcpO1xuICAgICAgICBhZGRQcm9qSW5wdXRTdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgYWRkUHJvaklucHV0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdChhZGRQcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgYWRkUHJvamVjdENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBZGRQcm9qQnRuKCkpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgY29uc3QgYWRkUHJvakNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRQcm9qQ2FuY2VsLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otY2FuY2VsJyk7XG4gICAgICAgIGFkZFByb2pDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFkZFByb2pCdG4oKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGFkZFByb2pDYW5jZWxJY29uID0gbmV3IEltYWdlICgyMCwgMjApO1xuICAgICAgICBhZGRQcm9qQ2FuY2VsSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNhbmNlbC1pY29uJyk7XG4gICAgICAgIGFkZFByb2pDYW5jZWxJY29uLnNyYyA9IGNhbmNlbEljb247XG4gICAgXG4gICAgICAgIGFkZFByb2pDYW5jZWwuYXBwZW5kQ2hpbGQoYWRkUHJvakNhbmNlbEljb24pO1xuICAgIFxuICAgICAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0SW5wdXQpO1xuICAgICAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qSW5wdXRTdWJtaXQpO1xuICAgICAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qQ2FuY2VsKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIGFkZFByb2plY3RGb3JtO1xuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFkZFByb2pCdG4oKSB7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qZWN0LWJ0bicpO1xuXG4gICAgICAgIGNvbnN0IGFkZFByb2pJY29uID0gbmV3IEltYWdlKDIwLCAyMCk7XG4gICAgICAgIGFkZFByb2pJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otaWNvbicpO1xuICAgICAgICBhZGRQcm9qSWNvbi5zcmMgPSBhZGRJY29uO1xuXG4gICAgICAgIGNvbnN0IGFkZFByb2pUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZFByb2pUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otdGV4dCcpO1xuICAgICAgICBhZGRQcm9qVGV4dC50ZXh0Q29udGVudCA9ICdBZGQgbmV3IHByb2plY3QhJztcblxuICAgICAgICBhZGRQcm9qZWN0QnRuLmFwcGVuZENoaWxkKGFkZFByb2pJY29uKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5hcHBlbmRDaGlsZChhZGRQcm9qVGV4dCk7XG5cbiAgICAgICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFkZFByb2plY3RDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5wdXQoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhZGRQcm9qZWN0QnRuO1xuICAgIH07XG5cbiAgICBcblxuXG4gICAgXG4gICAgcmV0dXJuIGFkZFByb2plY3RDb250YWluZXI7XG4gICAgXG59O1xuXG5cblxuIiwiaW1wb3J0IHsgdG9EYXRlLCBpc1RvZGF5LCBpc1RoaXNXZWVrLCBzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLnRhc2tzID0gW11cbiAgICB9XG5cbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICB9XG5cblxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzaylcbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG59IiwiaW1wb3J0IHNob3dQcm9qZWN0cyBmcm9tIFwiLi9Qcm9qZWN0c1VJXCI7XG5cbnNob3dQcm9qZWN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9