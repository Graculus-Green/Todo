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
    }
};
/*
let isProjectInList = (project) => {
    return projects.some((project) => {
        return project.name === name;
    });
};*/
const activeProject = () => {
    let activeProjectName = document.querySelector("#activeProject").innerText;
    return projects.find(el => el.name == activeProjectName);
}
const inputTask = () => {

    let form = document.querySelector('.taskForm');
    let input = document.querySelector('.taskFormInput');
    form.addEventListener('submit', e => {
        if (input.value !== '') {
            e.preventDefault();
            let name = input.value;
            let id = (activeProject().tasks.length) + 1;
            let newTask = new Task(id, name);

            activeProject().tasks.push(newTask);
            input.value = '';
            renderTasks();
        }
    })
}

const deleteTask = () => {

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
    
    document.querySelector(".taskList").innerHTML = '';

    activeProject().tasks.forEach( project => {
        let taskElement = document.createElement("li");
        taskElement.classList.add("taskName");
        taskElement.id = `task${project.name}`;
        taskElement.innerText = project.name;
        document.querySelector(".taskList").appendChild(taskElement);

        // Add delete button
        let deleteButton = document.createElement("div");
        deleteButton.classList.add("deleteButton");
        deleteButton.innerHTML = '&#215';
        document.querySelector(`#task${project.name}`).appendChild(deleteButton);
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