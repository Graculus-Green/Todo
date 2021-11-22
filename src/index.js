import {uiCreate} from "./uiCreate"

let projects = [
    {id:1, name: "First", tasks: ["one", "two", "three"]},
    {id:2, name:"Second",tasks: ["four", "five", "six"]},
    {id:3, name: "Third",tasks: ["7", "8", "9"]},
    {id:4, name: "Fourth",tasks: ["10", "11", "12"]},
    {id:5, name: "Fifth",tasks: ["13", "14", "15"]},
    {id:6, name: "Sixth",tasks: ["one16", "tw17o", "18"]},
    {id:7, name: "Seventh",tasks: ["19", "20", "21"]},
    {id:8, name: "Eighth",tasks: ["22", "23", "24"]},
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
    }
};
/*
let isProjectInList = (project) => {
    return projects.some((project) => {
        return project.name === name;
    });
};*/

const inputTask = () => {
    
    let form = document.querySelector('.taskForm');
    let input = document.querySelector('.taskFormInput');
    form.addEventListener('submit', e => {
        if (input.value !== '') {
            e.preventDefault();
            let activeProjectName = document.querySelector("#activeProject").innerText;
            let activeProjectSelect = projects.find(el => el.name == activeProjectName);
            /*let name = input.value;
            let id = (projects.tasks.length);
            let newTask = new Task(id, name);*/

            // temp task input
            let newTask = input.value;
            activeProjectSelect.tasks.push(newTask);
            input.value = '';
            renderTasks();
        }
    })
}

const inputProject = () => {
    let form =document.querySelector('.projectForm');
    let input = document.querySelector('.projectFormInput');
    form.addEventListener('submit', (e) => {
        
        if (input.value !== "") {

            e.preventDefault();
            let name = input.value;
            let id = (projects.length+1);
            let newProject = new Project(id, name);
            projects.push(newProject);
            renderProjects();
            input.value = "";
            
       }
    });
};

const renderProjects = () => {
    document.querySelector(".projectList").innerHTML = '';
    projects.forEach( project => {
        let projectElement = document.createElement("li");
        projectElement.classList.add("projectName");
        projectElement.innerText = project.name;
        document.querySelector(".projectList").appendChild(projectElement)
    })
    // Select the first project by default
  
    document.querySelector(".projectName").id = "activeProject";

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

}

const renderTasks = () => {
// This doesn't work fully yet
    let activeProjectName = document.querySelector("#activeProject").innerText;
    let activeProjectSelect = projects.find(el => el.name == activeProjectName);
    document.querySelector(".taskList").innerHTML = '';

    activeProjectSelect.tasks.forEach( project => {
        let taskElement = document.createElement("li");
        taskElement.classList.add("taskName");
        taskElement.innerText = project;
        document.querySelector(".taskList").appendChild(taskElement)
})
}

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

}

const selectProject = () => {
    let projectList = document.querySelector(".projectList");
    projectList.addEventListener('click', e => {
        let projectNames = Array.from(document.querySelectorAll(".projectName"));
        projectNames.forEach(name => {
            name.id = "";
        })
       if (e.target.classList == "projectName") {
            e.target.id = "activeProject";
            renderTasks();
        }
    })
}

const selectTask = () => {
    let taskList = document.querySelector(".taskList");
    taskList.addEventListener('click', e => {
        
        let taskNames = Array.from(document.querySelectorAll(".taskName"));
        taskNames.forEach(name => {
            name.id = "";
        })
       if (e.target.classList == "taskName") {
            e.target.id = "activeTask";
        }
    });
};
uiCreate();
renderProjectsBox();
renderTasksBox();
inputProject();
inputTask();
selectProject();
selectTask();