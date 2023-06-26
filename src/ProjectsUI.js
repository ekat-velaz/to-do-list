import Project from "./createProject";
import inboxIcon from "./images/inbox-multiple.svg";
import todayIcon from "./images/calendar-today.svg";
import weekIcon from "./images/calendar-week.svg";
import folderIcon from "./images/folder-outline.svg";
import deleteIcon from "./images/trash-can-outline.svg";
import addIcon from "./images/plus.svg";
import cancelIcon from "./images/close.svg";

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
    createProjectUI(inbox.getName(), inboxIcon);

    const today = new Project('Today');
    createProjectUI(today.getName(), todayIcon);

    const thisWeek = new Project('This week');
    createProjectUI(thisWeek.getName(), weekIcon);
};

function createNewProject(projectName) {
    const newProject = new Project(`${projectName}`);
    createProjectUI(newProject.getName(), folderIcon);
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
        deleteProjectIcon.src = deleteIcon;

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

const addProjectUI = () => {
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
        addProjCancelIcon.src = cancelIcon;
    
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
        addProjIcon.src = addIcon;

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



