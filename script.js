var passgenInfo = document.querySelector("#passgen-info");
var codeQuizInfo = document.querySelector("#codequiz-info");

var projectModal = document.querySelector("#modal");
var modalX = document.querySelector(".delete");
var cancelModal = document.querySelector("#cancel-button");
var modalTitle = document.querySelector("#modal-title");
var modalBody = document.querySelector("#modal-body");
var projectInfo = document.querySelector("#project-info");
var gifDiv = document.querySelector("#project-gif");
var projectGIF = document.createElement("img");

function openModal(){
projectModal.setAttribute("class", "modal is-active is-clipped");
};

function closeModal(){
    modalTitle.textContent = "";
    gifDiv.removeChild(projectGIF)
    projectModal.setAttribute("class", "modal is-closed")
};

passgenInfo.addEventListener("click", function(){
openModal();
modalTitle.textContent = "P4s$g3N";

projectInfo.textContent = "PassGen takes user inputs that specify password criteria such as characters to include and length" + "," + "and generates a random password. It's basically the same thing as that 'suggested password' feature on Chrome, but with more options, and I built it for my first Javascript assignment. I think that really says something about my coding level."

projectGIF.setAttribute("src", "./Assets/passgen.gif");
projectGIF.setAttribute("class", "is-fullwidth");
gifDiv.appendChild(projectGIF);
});

modalX.addEventListener("click", function(){
closeModal();
});

cancelModal.addEventListener("click", function(){
    closeModal();
});