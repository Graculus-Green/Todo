import {uiCreate} from "./uiCreate"

let projects = [
    {id:1, name: "First", tasks: [{name:"one"}, {name:"two"}, {name:"three"}]},
    {id:2, name:"Second",tasks: [{name:"4"}, {name:"5"}, {name:"6"}]},
    {id:3, name: "Third",tasks: [{name:"7"}, {name:"8"}, {name:"9"}]},

]

class Project {
    constructor (id, name) {
        this.id = id;
        this.name = name;
        this.tasks = [];
    }
};

class Task {
    constructor(id, name) {
        this.id = id;
        this.name = name;

        //Add functionality to these
        this.taskDescription = '';
        this.taskDue = '';
    }
};

const justAlphaNum = (string) => {
    return string.replace(/[^A-Za-z0-9]/g, '');
};

const activeProject = () => {
    // first line, ignoring x from delete button
    let activeProjectName = document.querySelector("#activeProject").innerText.split('\n')[0];
    return projects.find(el => el.name == activeProjectName);
};

const inputTask = () => {

    let form = document.querySelector('.taskForm');
    let input = document.querySelector('.taskFormInput');
    form.addEventListener('submit', e => {
        if (input.value !== '') {
            e.preventDefault();
            let name = `${justAlphaNum(input.value)}`;
            let id = (activeProject().tasks.length) + 1;
            let newTask = new Task(id, name);

            activeProject().tasks.push(newTask);
            input.value = '';
            renderTasks();
        };
    })
};

const deleteTask = () => {
    let deleteButtons = document.querySelector('.taskBox').querySelectorAll('.deleteButton');
    deleteButtons.forEach(deleteButton => {
        deleteButton.addEventListener ('click', e => {
            let taskName = e.target.id.slice(10);
            activeProject().tasks = activeProject().tasks.filter(task => task.name !== taskName); 
            renderTasks();
        });
    });
    
};

const deleteProject = () => {
    let deleteButtons = document.querySelector('.projectList').querySelectorAll('.deleteButton');
    deleteButtons.forEach(deleteButton => {
        deleteButton.addEventListener ('click', e => {
            e.preventDefault();
            let projectName = e.target.id.slice(13);
            projects = projects.filter(project => project.name !== projectName);
            renderProjects();
            if (projects.length == 0) {
                renderTasks();
            }
            
        });
    });
    
};

const inputProject = () => {
    let form =document.querySelector('.projectForm');
    let input = document.querySelector('.projectFormInput');
    form.addEventListener('submit', (e) => {
        
        if (input.value !== "") {

            e.preventDefault();
            let name = `${justAlphaNum(input.value)}`;
            let id = (projects.length+1);
            let newProject = new Project(id, name);
            projects.push(newProject);

            // Added for test
            window.localStorage.setItem(`${name}`, JSON.stringify(newProject));

            renderProjects();
            input.value = ``;
            
       }
    });
};

const renderProjects = () => {
    document.querySelector(".projectList").innerHTML = '';

    if (projects.length >> 0) {
        projects.forEach( project => {
            let projectElement = document.createElement("li");
            projectElement.classList.add("projectName");
            if (projectElement.id !== 'activeProject') {
                projectElement.id = `project${project.name}`;
            };
            projectElement.innerText = project.name;
            document.querySelector(".projectList").appendChild(projectElement);

            // Add delete button
            let deleteButton = document.createElement("button");
            deleteButton.classList.add("deleteButton");
            deleteButton.id = `deleteProject${project.name}`;
            deleteButton.innerHTML = '&#215';
            if (projectElement.id === 'activeProject') {
                document.querySelector(`#activeProject`).appendChild(deleteButton);
            }

            else {
            document.querySelector(`#project${project.name}`).appendChild(deleteButton);
            };
        })
        document.querySelector(".projectName").id = "activeProject";
    }
    
    else {
        let noProject = document.createElement("div");
        noProject.classList.add("noProject");
        noProject.id = `noProject`;
        document.querySelector('.projectList').appendChild(noProject);
        noProject.innerHTML = 'Enter your next project';
    };
    
    // Select the first project by default
    
    deleteProject();
    selectProject();

};


const renderProjectsBox = () => {
  
    let projectHeader = document.createElement("h2");
    projectHeader.innerText = "Projects";
    projectHeader.classList.add("projectHeader");
    document.querySelector(".projectBox").appendChild(projectHeader);

    let projectList = document.createElement("ul");
    projectList.classList.add("projectList");
    document.querySelector(".projectBox").appendChild(projectList);

    renderProjects();

    let projectForm = document.createElement("form");
    projectForm.classList.add("projectForm");
    document.querySelector(".projectBox").appendChild(projectForm);

    let projectInput = document.createElement("input");
    projectInput.classList.add("projectFormInput");
    projectInput.type = "text";
    projectInput.name = "projectName";
    projectInput.id = "projectName1";
    document.querySelector(".projectForm").appendChild(projectInput);

    let projectLabel = document.createElement("label");
    projectLabel.classList.add("addProjectLabel");
    projectLabel.innerText = "Add a project";
    document.querySelector(".projectForm").appendChild(projectLabel);


};

const renderTasks = () => {
// This doesn't work fully yet
    
    document.querySelector(".taskList").innerHTML = '';

    if (projects.length > 0) { 
        activeProject().tasks.forEach( task => {
            let taskElement = document.createElement("li");
            taskElement.classList.add("taskName");
            taskElement.id = `task${task.name}`;
            taskElement.innerText = task.name;
            document.querySelector(".taskList").appendChild(taskElement);

            // Add delete button
            let deleteButton = document.createElement("button");
            deleteButton.classList.add("deleteButton");
            deleteButton.id = `deleteTask${task.name}`;
            deleteButton.innerHTML = '&#215';
            document.querySelector(`#task${task.name}`).appendChild(deleteButton);
        })
    }

    else {
        //let noTask = createDOMElement('div', 'noTaskHere', 'noTaskHere', '.taskList');
        let noTask = document.createElement("div");
        noTask.classList.add("noTask");
        noTask.id = `noTask`;
        document.querySelector('.taskList').appendChild(noTask);
        noTask.innerHTML = 'No tasks here.';
    };
    deleteTask();
    selectTask();
};

const renderTasksBox = () => {
  
    let taskHeader = document.createElement("h2");
    taskHeader.innerText = "Tasks";
    taskHeader.classList.add("taskHeader");
    document.querySelector(".taskBox").appendChild(taskHeader);

    let taskList = document.createElement("ul");
    taskList.classList.add("taskList");
    document.querySelector(".taskBox").appendChild(taskList);

    renderTasks();

    let taskForm = document.createElement("form");
    taskForm.classList.add("taskForm");
    document.querySelector(".taskBox").appendChild(taskForm);

    let taskInput = document.createElement("input");
    taskInput.classList.add("taskFormInput");
    taskInput.type = "text";
    taskInput.name = "taskName";
    taskInput.id = "taskName1";
    document.querySelector(".taskForm").appendChild(taskInput);

    let taskLabel = document.createElement("label");
    taskLabel.classList.add("addTaskLabel");
    taskLabel.innerText = "Add a task";
    document.querySelector(".taskForm").appendChild(taskLabel);

};

const selectProject = () => {
    let projectList = document.querySelector(".projectList");

    projectList.addEventListener('click', e => {
        if (e.target.classList == 'projectName') {
            let projectNames = Array.from(document.querySelectorAll(".projectName"));
            projectNames.forEach(name => {
                name.id = "";
            })
            e.target.id = "activeProject";
            renderTasks();
    
        }
    })
};

const selectTask = () => {
    let taskList = document.querySelector(".taskList");
    taskList.addEventListener('click', e => {
        if (e.target.classList == 'taskName') {
            let taskNames = Array.from(document.querySelectorAll(".taskName"));
            taskNames.forEach(name => {
                name.id = "";
            })
            e.target.id = "activeTask";
        }
    });
};
uiCreate();
renderProjectsBox();
renderTasksBox();
inputProject();
inputTask();



