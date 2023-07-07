import ToDoList from "./toDoList";
import Project from "./projectLogic";
import Task from "./taskLogic";
import Storage from "./storage";
import inboxIcon from "./images/inbox-multiple.svg";
import todayIcon from "./images/calendar-today.svg";
import weekIcon from "./images/calendar-week.svg";
import folderIcon from "./images/folder-outline.svg";
import deleteIcon from "./images/trash-can-outline.svg";
import addIcon from "./images/plus.svg";
import cancelIcon from "./images/close.svg";
import todoLogo from "./images/check-outline.svg";
import githubLogo from "./images/github.svg";
import editIcon from "./images/pencil.svg";
import "./style.css";


export const toDoList = Storage.getTodoList();

const projectsList = document.getElementById('projects-list');
const activeSpace = document.getElementById('active-space');
const activeProject = document.querySelector('.active-project');
const activeProjectName = document.getElementById('active-project-name')
const activeTasks = document.getElementById('active-tasks');

export default function showProjects() {
    createHeader();
    createFooter();
    createDefaultProjects();
    loadProjects();

    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.appendChild(addProjectUI());
};

function loadProjects() {
    Storage.getTodoList().getProjects().forEach((project) => {
      if (
        project.name !== 'Inbox' &&
        project.name !== 'Today' &&
        project.name !== 'This week'
      ) {
        createProjectUI(project.name);
      }
    })
};

function loadTasks(projectName) {
    Storage.getTodoList().getProject(projectName).getTasks().forEach((task) => createTaskUI(task.getName(), task.getDate(), task.getDescription()));
};

function createHeader() {
    const headerContainer = document.getElementById('header');

    const logo = document.createElement('div');
    logo.setAttribute('id', 'logo');

    const logoName = document.createElement('div');
    logoName.setAttribute('id', 'logo-name');
    logoName.textContent = 'ToDo-List';

    const logoPic = new Image(50, 50);
    logoPic.src = todoLogo;
    logoPic.setAttribute('id', 'logo-pic');

    logo.appendChild(logoPic);
    logo.appendChild(logoName);
    
    headerContainer.appendChild(logo);

    return headerContainer;
};

function createFooter() {
    const footerContainer = document.getElementById('footer');

    const copyright = document.createElement('div');
    copyright.textContent = `Copyright © ${new Date().getFullYear()} ekat-velaz`;
    copyright.setAttribute('id', 'copyright');

    const githubLink = document.createElement('a');
    githubLink.setAttribute('id', 'github-link');
    githubLink.href = "https://github.com/ekat-velaz";

    const githubIcon = new Image(50,50);
    githubIcon.setAttribute('id', 'github-icon');
    githubIcon.src = githubLogo;

    githubLink.appendChild(githubIcon);
    footerContainer.appendChild(copyright);
    footerContainer.appendChild(githubLink);

    return footerContainer;
};

function addProjectToDOM(projectName, container) {
    container.appendChild(projectName);
};

function createDefaultProjects() {
        const inbox = new Project('Inbox');
        Storage.addProject(inbox);
        createProjectUI(inbox.getName());
    
        const today = new Project('Today');
        Storage.addProject(today);
        createProjectUI(today.getName());
    
        const thisWeek = new Project('This week');
        Storage.addProject(thisWeek);
        createProjectUI(thisWeek.getName());
};

function createNewProject(projectName) {
    const newProject = new Project(`${projectName}`);
    Storage.addProject(newProject);
    Storage.updateTodayProject();
    Storage.updateWeekProject();
    createProjectUI(newProject.getName());
};

function createProjectUI(projectName) { 
    const newProjectContainer = document.createElement('div');
    newProjectContainer.classList.add('project-container');
    newProjectContainer.setAttribute('id', `${projectName}`);

    const stylingProjContainer = document.createElement('div');
    stylingProjContainer.classList.add('styling-proj-container');

    const newProject = document.createElement('button');
    newProject.classList.add('project');
    newProject.addEventListener('click', (e) => {
        const chosenProject = Storage.getTodoList().getProject(`${e.target.closest('.project-container').id}`);
        console.log(chosenProject);
        toDoList.updateTodayProject();
        toDoList.updateWeekProject();
        clearActive();
        createActiveProjectUI(chosenProject.getName());
        renderTasks(chosenProject.getTasks());
        setActiveProject(newProject, stylingProjContainer);
    });

    const projectIcon = new Image(30, 30);
    projectIcon.classList.add('project-icon');

    const projectText = document.createElement('div');
    projectText.classList.add('project-text');
    projectText.textContent = `${projectName}`;

    const projBtnContainer = document.createElement('div');
    projBtnContainer.classList.add('proj-btn-container');

    newProject.appendChild(projectIcon);
    newProject.appendChild(projectText);
    stylingProjContainer.appendChild(newProject);
    stylingProjContainer.appendChild(projBtnContainer);

    newProjectContainer.appendChild(stylingProjContainer);
    
    if (projectName === 'Inbox') {
        projectIcon.src = inboxIcon;
        setActiveProject(newProject, stylingProjContainer);
        createActiveProjectUI(Storage.getTodoList().getProject('Inbox').getName());
        loadTasks('Inbox');
    } else if (projectName === 'Today') {
        projectIcon.src = todayIcon;
    } else if (projectName === 'This week') {
        projectIcon.src = weekIcon;
    } else {
        projectIcon.src = folderIcon;
        projBtnContainer.appendChild(createDeleteBtn());
        projBtnContainer.appendChild(createEditBtn());
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
    addProjIcon.src = addIcon;

    const addProjText = document.createElement('div');
    addProjText.setAttribute('id', 'add-proj-text');
    addProjText.textContent = 'Add project';

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

    const inputBtnContainer = document.createElement('div');
    inputBtnContainer.setAttribute('id', 'input-btn-container');

    const addProjInputSubmit = document.createElement('btn');
    addProjInputSubmit.setAttribute('type', 'submit');
    addProjInputSubmit.setAttribute('id', 'add-proj-submit');
    addProjInputSubmit.textContent = 'Add';
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

    const addProjCancelIcon = new Image (23, 23);
    addProjCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
    addProjCancelIcon.src = cancelIcon;
    addProjCancel.appendChild(addProjCancelIcon);

    inputBtnContainer.appendChild(addProjInputSubmit);
    inputBtnContainer.appendChild(addProjCancel);

    addProjectForm.appendChild(addProjectInput);
    addProjectForm.appendChild(inputBtnContainer);

    return addProjectForm;
};

function createDeleteBtn() {
    const deleteProjectIcon = new Image(20, 25);
    deleteProjectIcon.classList.add('del-proj-icon');
    deleteProjectIcon.src = deleteIcon;

    const projectDeleteBtn = document.createElement('button');
    projectDeleteBtn.classList.add('project-del-btn');
    projectDeleteBtn.appendChild(deleteProjectIcon);

    deleteProjectIcon.addEventListener('click', (e) => {
        const chosenContainer = e.target.closest('.project-container');
        chosenContainer.remove();
        Storage.deleteProject(chosenContainer.id)
        clearActive();
    });

    return projectDeleteBtn;
};

function createEditBtn() {
    const projectEditBtn = document.createElement('button');
    projectEditBtn.classList.add('edit-proj-btn');

    const editProjIcon = new Image(20, 25);
    editProjIcon.classList.add('edit-icon');
    editProjIcon.src = editIcon;

    projectEditBtn.appendChild(editProjIcon);

    editProjIcon.addEventListener('click', (e) => {
        e.target.style.visibility = 'hidden';   
        e.target.closest('.project-container').appendChild(createEditInput(e.target.closest('.project-container')));
    });

    return projectEditBtn;
};

function createEditInput(container) {
    const addProjectForm = document.createElement('form');
    addProjectForm.setAttribute('id', 'add-proj-input-container');

    const addProjectInput = document.createElement('input');
    addProjectInput.setAttribute('id', 'add-proj-input');

    const inputBtnContainer = document.createElement('div');
    inputBtnContainer.setAttribute('id', 'input-btn-container');

    const addProjInputSubmit = document.createElement('btn');
    addProjInputSubmit.setAttribute('type', 'submit');
    addProjInputSubmit.setAttribute('id', 'add-proj-submit');
    addProjInputSubmit.textContent = 'Change name';
    addProjInputSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        let chosenProject = Storage.getTodoList().getProject(container.id);
        chosenProject.setName(addProjectInput.value);
        createProjectUI(chosenProject.getName());
        clearActive();
        createActiveProjectUI(chosenProject.getName());
        renderTasks(chosenProject.getTasks());
        container.remove();
        console.log(Storage.getTodoList());
    });

    const addProjCancel = document.createElement('button');
    addProjCancel.setAttribute('id', 'add-proj-cancel');
   

    const addProjCancelIcon = new Image (20, 20);
    addProjCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
    addProjCancelIcon.src = cancelIcon;
    addProjCancelIcon.addEventListener('click', (e) => {
        e.target.closest('.project-container').querySelector('.edit-icon').style.visibility = 'visible';
        addProjectForm.remove();
    });

    addProjCancel.appendChild(addProjCancelIcon);

    inputBtnContainer.appendChild(addProjInputSubmit);
    inputBtnContainer.appendChild(addProjCancel);

    addProjectForm.appendChild(addProjectInput);
    addProjectForm.appendChild(inputBtnContainer);

    return addProjectForm;
};

function createAddTaskBtn() {
    const addTaskIcon = new Image(50, 50);
    addTaskIcon.classList.add('add-task-icon');
    addTaskIcon.src = addIcon;

    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('add-task-btn');
    addTaskBtn.appendChild(addTaskIcon);

    addTaskIcon.addEventListener('click', (e) => {
        const projectContainer = e.target.parentNode.parentNode;
        if (document.querySelector("#add-task-input-container")) {
            document.querySelector("#add-task-input-container").remove();
        };
        projectContainer.appendChild(createTaskForm(projectContainer));
        
    });

    return addTaskBtn;
};


function createTaskForm(container) {
    const addTaskForm = document.createElement('form');
    addTaskForm.setAttribute('id', 'add-task-input-container');

    const taskTitleInput = document.createElement('input');
    taskTitleInput.setAttribute('id', 'task-title-input');
    taskTitleInput.required = true;
    taskTitleInput.placeholder = 'Task title';

    const taskDateInput = document.createElement('input');
    taskDateInput.setAttribute('type', 'date');
    taskDateInput.setAttribute('id', 'task-date-input');

    const taskDescriptionInput = document.createElement('textarea');
    taskDescriptionInput.setAttribute('rows', '4');
    taskDescriptionInput.setAttribute('cols', '50');
    taskDescriptionInput.setAttribute('id', 'task-description-input');
    taskDescriptionInput.placeholder = 'Any notes?';

    const addTaskSubmit = document.createElement('button');
    addTaskSubmit.setAttribute('type', 'submit');
    addTaskSubmit.setAttribute('id', 'add-task-submit');
    addTaskSubmit.textContent = 'Add task!';
    addTaskSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        const project = Storage.getTodoList().getProject(container.id);
        console.log(project);
        if (checkInput(taskTitleInput.value, project) === false) {
            const newTask = new Task(taskTitleInput.value, taskDateInput.value, taskDescriptionInput.value); 
            Storage.addTask(project.getName(), newTask);
            Storage.updateTodayProject();
            Storage.updateWeekProject();
            createTaskUI(newTask.getName(), newTask.getDate(), newTask.getDescription());
            addTaskForm.remove();
        };
    });

    const addTaskCancel = document.createElement('button');
    addTaskCancel.setAttribute('id', 'add-proj-cancel');
    addTaskCancel.addEventListener('click', () => {
        addTaskCancel.parentNode.remove();
    });

    const addTaskCancelIcon = new Image (20, 20);
    addTaskCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
    addTaskCancelIcon.src = cancelIcon;
    addTaskCancel.appendChild(addTaskCancelIcon);

    addTaskForm.appendChild(addTaskCancel);
    addTaskForm.appendChild(taskTitleInput);
    addTaskForm.appendChild(taskDateInput);
    addTaskForm.appendChild(taskDescriptionInput);
    addTaskForm.appendChild(addTaskSubmit);

    return addTaskForm;
};

function createTaskUI(taskTitle, taskDate, taskDescription) { 

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
    if (taskDescription === undefined) {
        newTaskDescription.textContent = '';
    } else {
    newTaskDescription.textContent = `${taskDescription}`;
    };

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('task-btn-container');

    newTaskContainer.appendChild(newTaskTitle);
    newTaskContainer.appendChild(newTaskDate);
    newTaskContainer.appendChild(newTaskDescription);
    newTaskContainer.appendChild(btnContainer);

    if (activeProject.id !== 'Today' && activeProject.id !== 'This week') {
    btnContainer.appendChild(createTaskDeleteBtn());
    btnContainer.appendChild(createTaskEditBtn());
    };
    activeTasks.appendChild(newTaskContainer);
};

function renderTasks(project) {
    if (project === undefined) {
        return;
    };
    project.forEach((task) => {
        createTaskUI(task.getName(), task.getDate(), task.getDescription(), activeTasks);
    });
};

function setActiveProject(project, container) {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
        if (project !== this) {
            project.classList.remove('active');
        }
    });
    project.classList.add('active');

    const containers = document.querySelectorAll('.styling-proj-container');
    containers.forEach((container) => {
        if (container !== this) {
            container.classList.remove('active-container');
        }
    });
    container.classList.add('active-container');

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
    deleteTaskIcon.src = deleteIcon;

    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.classList.add('task-del-btn');
    taskDeleteBtn.appendChild(deleteTaskIcon);

    deleteTaskIcon.addEventListener('click', (e) => {
        Storage.deleteTask(e.target.closest('div.active-project').id, e.target.closest('div.active-project').querySelector(".task-title").textContent);
        e.target.closest('.task-container').remove();
    });

    return taskDeleteBtn;
};

function createTaskEditBtn() {
    const editTaskIcon = new Image(20, 25);
    editTaskIcon.classList.add('edit-task-icon');
    editTaskIcon.src = editIcon;

    const taskEditBtn = document.createElement('button');
    taskEditBtn.classList.add('edit-task-btn');
    taskEditBtn.appendChild(editTaskIcon);

    editTaskIcon.addEventListener('click', (e) => {
        e.target.style.visibility = 'hidden';
        e.target.closest('.task-container').appendChild(createTaskEditForm(e.target.closest('.active-project'), e.target.closest('.task-container')));    
    });

    return taskEditBtn;
};

function createTaskEditForm(container, taskContainer) {
    console.log(container.id);
    const oldTitle = taskContainer.querySelector('.task-title').textContent;
    const oldDate = taskContainer.querySelector('.task-date').textContent;
    const oldDescr = taskContainer.querySelector('.task-description').textContent;

    const chosenProject = Storage.getTodoList().getProject(container.id);

    const addTaskForm = document.createElement('form');
    addTaskForm.setAttribute('id', 'add-task-input-container');

    const taskTitleInput = document.createElement('input');
    taskTitleInput.setAttribute('id', 'task-title-input');
    taskTitleInput.value = oldTitle;
    taskTitleInput.placeholder = 'Task title';

    const taskDateInput = document.createElement('input');
    taskDateInput.setAttribute('type', 'date');
    taskDateInput.setAttribute('id', 'task-date-input');
    taskDateInput.value = oldDate;

    const taskDescriptionInput = document.createElement('textarea');
    taskDescriptionInput.setAttribute('rows', '4');
    taskDescriptionInput.setAttribute('cols', '50');
    taskDescriptionInput.setAttribute('id', 'task-description-input');
    taskDescriptionInput.value = oldDescr;
    taskDescriptionInput.placeholder = 'Any notes?';

    const addTaskSubmit = document.createElement('button');
    addTaskSubmit.setAttribute('type', 'submit');
    addTaskSubmit.setAttribute('id', 'add-task-submit');
    addTaskSubmit.textContent = 'Edit task!';
    addTaskSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        Storage.renameTask(chosenProject.getName(), oldTitle, taskTitleInput.value);
        Storage.setTaskDate(chosenProject.getName(), taskTitleInput.value, taskDateInput.value);
        Storage.setTaskDescription(chosenProject.getName(), taskTitleInput.value, taskDescriptionInput.value);
        Storage.updateTodayProject();
        Storage.updateWeekProject();
        const chosenTask = Storage.getTodoList().getProject(chosenProject.getName()).getTask(taskTitleInput.value);
        createTaskUI(chosenTask.getName(), chosenTask.getDate(), chosenTask.getDescription(), activeTasks);
        event.target.closest('.task-container').remove();
        
    });

    const addTaskCancel = document.createElement('button');
    addTaskCancel.setAttribute('id', 'add-proj-cancel');
    addTaskCancel.addEventListener('click', () => {
        addTaskCancel.closest('.task-container').querySelector('.edit-task-icon').style.visibility = 'visible';
        addTaskCancel.parentNode.remove();
    });

    const addTaskCancelIcon = new Image (20, 20);
    addTaskCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
    addTaskCancelIcon.src = cancelIcon;
    addTaskCancel.appendChild(addTaskCancelIcon);

    addTaskForm.appendChild(addTaskCancel);
    addTaskForm.appendChild(taskTitleInput);
    addTaskForm.appendChild(taskDateInput);
    addTaskForm.appendChild(taskDescriptionInput);
    addTaskForm.appendChild(addTaskSubmit);
    

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
    if (activeProject.id !== 'Today' && activeProject.id !== 'This week') {
        activeProject.appendChild(createAddTaskBtn());
    };

    addProjectToDOM(activeProject, activeSpace );
};