import {uiCreate} from "./uiCreate"

let projects = [
    {id:1, name: "First",},
    {id:2, name:"Second",},
    {id:3, name: "Third",},
    {id:4, name: "Fourth",},
    {id:5, name: "Fifth",},
    {id:6, name: "Sixth",},
    {id:7, name: "Seventh",},
    {id:8, name: "Eighth",},
]

const renderProjects = () => {
  
    let projectHeader = document.createElement("h2");
    projectHeader.innerText = "Projects";
    projectHeader.classList.add("projectHeader");
    document.querySelector(".projectBox").appendChild(projectHeader);

    let projectList = document.createElement("ul");
    projectList.classList.add("projectList");
    document.querySelector(".projectBox").appendChild(projectList);

    projects.forEach( project => {
        let projectElement = document.createElement("li");
        projectElement.classList.add("projectName");
        projectElement.innerText = project.name;
        document.querySelector(".projectList").appendChild(projectElement)
    })

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
  
    let taskHeader = document.createElement("h2");
    taskHeader.innerText = "Tasks";
    taskHeader.classList.add("taskHeader");
    document.querySelector(".taskBox").appendChild(taskHeader);

    let taskList = document.createElement("ul");
    taskList.classList.add("taskList");
    document.querySelector(".taskBox").appendChild(taskList);

    projects.forEach( project => {
        let taskElement = document.createElement("li");
        taskElement.classList.add("taskName");
        taskElement.innerText = project.name;
        document.querySelector(".taskList").appendChild(taskElement)
    })

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
uiCreate();
renderProjects();
renderTasks();
       