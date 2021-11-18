const mainView = () => {

    const mainHeader = document.createElement("h1");
    mainHeader.classList.add("mainHeader");
    mainHeader.innerText = "What am I doing?";
    document.querySelector(".content").appendChild(mainHeader);

    const panelBox = document.createElement("div");
    panelBox.classList.add("panelBox");

    const mainBox = document.createElement("div");
    mainBox.classList.add("mainBox");

    const projectBox = document.createElement("div");
    projectBox.classList.add("projectBox");
    panelBox.appendChild(projectBox);
    panelBox.appendChild(mainBox);

    const createUI = document.querySelector(".content");
    createUI.appendChild(mainHeader);
    createUI.appendChild(panelBox);

}

export {mainView as uiCreate};