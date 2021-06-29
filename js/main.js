const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

const setProject = (projectTitle, projectDesc, projectImg, projectRepo, projectDemo) => {
    document.getElementById("project__name").textContent = projectTitle;
    document.getElementById("project__info").textContent = projectDesc;
    document.getElementById("project__image").src = projectImg;
    document.getElementById("project__demo").href = projectDemo;
    document.getElementById("project__repo").href = projectRepo;
}

const openModal = (e) => {
    document.getElementById("overlay").style.display = "block";
}

document.getElementById("project1").addEventListener('click',(e)=>{
    openModal(e);
    const prTitle = "Book Store";
    const prDesc = "This is a html/css template for bookshop website";
    const prImg = "./images/portfolio-images/booksandscrolls.png";
    const prRepo = "https://github.com/sinansevgi/capstonestore";
    const prDemo = "https://sinansevgi.github.io/capstonestore/";
    setProject(prTitle,prDesc,prImg,prRepo,prDemo);
});
document.getElementById("project2").addEventListener('click',(e)=>{
    openModal(e);
    const prTitle = "Homecook";
    const prDesc = "This is a C++ recipe management/suggestion project";
    const prImg = "./images/portfolio-images/homecook.png";
    const prRepo = "https://github.com/ericgfx/CPP_HomeCook";
    const prDemo = "https://github.com/ericgfx/CPP_HomeCook";
    setProject(prTitle,prDesc,prImg,prRepo,prDemo);
});
document.getElementById("project3").addEventListener('click',(e)=>{
    openModal(e);
    const prTitle = "Programming Articles";
    const prDesc = "Ruby on Rails Blog/article management application";
    const prImg = "./images/portfolio-images/booksandscrolls.png";
    const prRepo = "https://github.com/sinansevgi/capstonestore";
    const prDemo = "https://sinansevgi.github.io/capstonestore/";
    setProject(prTitle,prDesc,prImg,prRepo,prDemo);
});
document.getElementById("project4").addEventListener('click',(e)=>{
    openModal(e);
    const prTitle = "Ruby Podcast";
    const prDesc = "Podcast fetcher page generator with Nokogiri";
    const prImg = "./images/portfolio-images/rubypods.png";
    const prRepo = "https://github.com/sinansevgi/RubyPods";
    const prDemo = "https://repl.it/@sinansevgi/RubyPods/";
    setProject(prTitle,prDesc,prImg,prRepo,prDemo);
});
document.getElementById("project5").addEventListener('click',(e)=>{
    openModal(e);
    const prTitle = "Tic Tac Toe";
    const prDesc = "Tic Tac Toe console game made with ruby";
    const prImg = "./images/portfolio-images/tictactoe.png";
    const prRepo = "https://github.com/sinansevgi/Tic-Tac-Toe";
    const prDemo = "https://repl.it/@sinansevgi/Tic-Tac-Toe#main.sh";
    setProject(prTitle,prDesc,prImg,prRepo,prDemo);
});
document.getElementById("project6").addEventListener('click',(e)=>{
    openModal(e);
    const prTitle = "Social Network App";
    const prDesc = "Social network app made with Ruby on Rails";
    const prImg = "./images/portfolio-images/scaffold.png";
    const prRepo = "https://github.com/sinansevgi/ror-social-scaffold";
    const prDemo = "https://fast-cove-87414.herokuapp.com/";
    setProject(prTitle,prDesc,prImg,prRepo,prDemo);
});


document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
})
