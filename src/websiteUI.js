import ToDoList from "./toDoList";
import Project from "./projectLogic";
import Task from "./taskLogic";
import inboxIcon from "./images/inbox-multiple.svg";
import todayIcon from "./images/calendar-today.svg";
import weekIcon from "./images/calendar-week.svg";
import folderIcon from "./images/folder-outline.svg";
import deleteIcon from "./images/trash-can-outline.svg";
import addIcon from "./images/plus.svg";
import cancelIcon from "./images/close.svg";

export const toDoList = new ToDoList;

export default function showProjects() {
    createDefaultProjects();
    
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.appendChild(addProjectUI());
};

function addProjectToDOM(projectName) {
    const projectsList = document.getElementById('projects-list');
    projectsList.appendChild(projectName);
}

function createDefaultProjects() {
        const inbox = new Project('Inbox');
        toDoList.addProject(inbox);
        createProjectUI(inbox.getName(), inboxIcon);
    
        const today = new Project('Today');
        toDoList.addProject(today);
        createProjectUI(today.getName(), todayIcon);
    
        const thisWeek = new Project('This week');
        toDoList.addProject(thisWeek);
        createProjectUI(thisWeek.getName(), weekIcon);
};

function createNewProject(projectName) {
    const newProject = new Project(`${projectName}`);
    toDoList.addProject(newProject);
    createProjectUI(newProject.getName(), folderIcon);
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

    const taskList = document.createElement('div');
    taskList.classList.add('task-list');

    newProject.appendChild(projectIcon);
    newProject.appendChild(projectText);
    newProjectContainer.appendChild(newProject);
    newProjectContainer.appendChild(createAddTaskBtn());
    newProjectContainer.appendChild(taskList);

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
    addProjIcon.src = addIcon;

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
    addProjCancelIcon.src = cancelIcon;
    addProjCancel.appendChild(addProjCancelIcon);

    addProjectForm.appendChild(addProjectInput);
    addProjectForm.appendChild(addProjInputSubmit);
    addProjectForm.appendChild(addProjCancel);

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
        createProjectUI(project.getName(), folderIcon);
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
    addProjCancelIcon.src = cancelIcon;
    addProjCancel.appendChild(addProjCancelIcon);

    addProjectForm.appendChild(addProjectInput);
    addProjectForm.appendChild(addProjInputSubmit);
    addProjectForm.appendChild(addProjCancel);

    return addProjectForm;
};

function createAddTaskBtn() {
    const addTaskIcon = new Image(20, 25);
    addTaskIcon.classList.add('add-task-icon');
    addTaskIcon.src = addIcon;

    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('add-task-btn');
    addTaskBtn.appendChild(addTaskIcon);

    addTaskIcon.addEventListener('click', (e) => {
        // const project = toDoList.getProject(e.target.parentNode.parentNode.id);
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
        const newTask = new Task(taskTitleInput.value, taskDateInput.value, taskDescriptionInput.value);
        const project = toDoList.getProject(container.id);
        project.addTask(newTask);
        createTaskUI(newTask.getName(), newTask.getDate(), newTask.getDescription(), container.querySelector('.task-list'));
        addTaskForm.remove();
    });

    const addTaskCancel = document.createElement('button');
    addTaskCancel.setAttribute('id', 'add-proj-cancel');
    addTaskCancel.addEventListener('click', () => {
        // addTaskCancel.parentNode.parentNode.querySelector('.edit-proj-btn').style.visibility = 'visible';
        addTaskCancel.parentNode.remove();
    });

    const addTaskCancelIcon = new Image (20, 20);
    addTaskCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
    addTaskCancelIcon.src = cancelIcon;
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
    newTaskContainer.appendChild(createDeleteBtn());
    // newTaskContainer.appendChild(createEditBtn());

    container.appendChild(newTaskContainer);
};