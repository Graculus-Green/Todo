import {uiCreate} from "./uiCreate"

let projects = [
    {id:1, name: "First",},
    {id:2, name:"Second",}
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
}

uiCreate();
renderProjects();
       