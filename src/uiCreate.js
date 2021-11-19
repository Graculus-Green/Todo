const mainView = () => {

    const mainHeader = document.createElement("h1");
    mainHeader.classList.add("mainHeader");
    mainHeader.innerText = "What am I doing?";
    document.querySelector(".content").appendChild(mainHeader);

    const panelBox = document.createElement("div");
    panelBox.classList.add("panelBox");

    const taskBox = document.createElement("div");
    taskBox.classList.add("taskBox");

    const projectBox = document.createElement("div");
    projectBox.classList.add("projectBox");
    panelBox.appendChild(projectBox);
    panelBox.appendChild(taskBox);

    const createUI = document.querySelector(".content");
    createUI.appendChild(mainHeader);
    createUI.appendChild(panelBox);

}

export {mainView as uiCreate};