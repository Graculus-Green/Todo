const mainView = () => {
    const mainBox = document.createElement("div");
    mainBox.classList.add("mainBox");

    const projectBox = document.createElement("div");
    projectBox.classList.add("projectBox");

    const createUI = document.querySelector(".content");
    createUI.appendChild(projectBox);
    createUI.appendChild(mainBox);

    return createUI;
}

export {mainView as uiCreate};