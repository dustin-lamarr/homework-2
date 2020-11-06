var passgenInfo = document.querySelector("#passgen-info");
var codequizInfo = document.querySelector("#codequiz-info");
var dayplannerInfo = document.querySelector("#dayplanner-info");
var weatherdadInfo = document.querySelector("#weatherdad-info");
var bingerInfo = document.querySelector("#binger-info");
var projectModal = document.querySelector("#modal");
var modalX = document.querySelector(".delete");
var cancelModal = document.querySelector("#cancel-button");
var modalTitle = document.querySelector("#modal-title");
var projectInfo = document.querySelector("#project-info");
var gifDiv = document.querySelector("#project-gif");
var projectGIF = document.createElement("img");
var liveSite = document.querySelector("#live-site");
var repoLink = document.querySelector("#repo-link");

function openModal(){
projectModal.setAttribute("class", "modal is-active is-clipped");
};

function closeModal(){
    modalTitle.textContent = "";
    gifDiv.removeChild(projectGIF)
    projectModal.setAttribute("class", "modal is-closed")
};

// populate modal with passgen project info
passgenInfo.addEventListener("click", function(){
openModal();
modalTitle.textContent = "P4s$g3N";

projectInfo.textContent = "PassGen takes user inputs that specify password criteria such as characters to include and length" + "," + "and generates a random password. It's basically the same thing as that 'suggested password' feature on Chrome, but with more options, and I built it for my first Javascript assignment. I think that really says something about my coding level."

projectGIF.setAttribute("src", "./Assets/passgen.gif");
projectGIF.setAttribute("class", "is-fullwidth");
gifDiv.appendChild(projectGIF);

liveSite.setAttribute("href", "https://dustin-lamarr.github.io/homework-3/");
liveSite.textContent = "Live Site"
});

// populate modal with code quiz project info
codequizInfo.addEventListener("click", function(){
    openModal();
    modalTitle.textContent = "Code Quiz";
    
    projectInfo.textContent = "Code Quiz is an interactive quiz game to test front-end developer knowledge. Use Code Quiz as a pre-interview test to save valuable hiring resources, because you are going to want to weed out these 'boot-campers', am I right?"
    
    projectGIF.setAttribute("src", "./Assets/codequiz.gif");
    projectGIF.setAttribute("class", "is-fullwidth");
    gifDiv.appendChild(projectGIF);
    });

    // populate modal with day planner project info
dayplannerInfo.addEventListener("click", function(){
    openModal();
    modalTitle.textContent = "Day Planner: Plan Your Day";
    
    projectInfo.textContent = "Enter your events at the start of every day, and Day Planner: Plan Your Day will show you that you forgot to do the thing you planned because it's background will be red, informing you of your failure at your job, but also reminding you at your general ineptitude at life. Day Planner: Plan YOUR Day."
    
    projectGIF.setAttribute("src", "./Assets/dayplanner.gif");
    projectGIF.setAttribute("class", "is-fullwidth");
    gifDiv.appendChild(projectGIF);
    });    

   // populate modal with weather project info
   weatherdadInfo.addEventListener("click", function(){
    openModal();
    modalTitle.textContent = "Weather Dad";
    
    projectInfo.textContent = "Have you recently become an 'old' like me? If so, then you know about the irresistable urge to know the weather conditions at all times. Well pals, I'd like to introduce you to Weather Dad. This baby is really somethin, I'll tell ya what. Enter your city and find out the current conditions. Oh you want features, chief? How about we also throw in the five day forecast? Welcome your favorite new tool."
    
    projectGIF.setAttribute("src", "./Assets/weatherdad.gif");
    projectGIF.setAttribute("class", "is-fullwidth");
    gifDiv.appendChild(projectGIF);
    });    

      // populate modal with binger project info
   bingerInfo.addEventListener("click", function(){
    openModal();
    modalTitle.textContent = "Binger";
    
    projectInfo.textContent = "Feeling bad about that COVID 15? Well, Binger is here to help you feel a whole lot worse. Use Binger to track the movies and tv series' you've watched, and its handy binge tracker to show how much time you've put into creating that crater in the couch."
    
    projectGIF.setAttribute("src", "./Assets/bingerdemo.gif");
    projectGIF.setAttribute("class", "is-fullwidth");
    gifDiv.appendChild(projectGIF);
    }); 

modalX.addEventListener("click", function(){
closeModal();
});

cancelModal.addEventListener("click", function(){
    closeModal();
});