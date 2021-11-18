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

uiCreate();
renderProjects();
       