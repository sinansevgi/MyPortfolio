(()=>{var e=document.querySelector(".nav-toggle"),t=document.querySelectorAll(".nav__link");e.addEventListener("click",(function(){document.body.classList.toggle("nav-open")})),t.forEach((function(e){e.addEventListener("click",(function(){document.body.classList.remove("nav-open")}))}));var o=function(e,t,o,n,i){document.getElementById("project__name").textContent=e,document.getElementById("project__info").textContent=t,document.getElementById("project__image").src=o,document.getElementById("project__demo").href=i,document.getElementById("project__repo").href=n},n=function(e){document.getElementById("overlay").style.display="block"};document.getElementById("project1").addEventListener("click",(function(e){n(),o("Book Store","This is a html/css template for bookshop website","./images/portfolio-images/booksandscrolls.png","https://github.com/sinansevgi/capstonestore","https://sinansevgi.github.io/capstonestore/")})),document.getElementById("project2").addEventListener("click",(function(e){n(),o(" Dietify"," Calorie counting for weight management shouldn't be hard. Dietify helps you to keep track of your calorie intake.","https://media-exp1.licdn.com/dms/image/sync/C4D27AQFs6O8-f5WxeA/articleshare-shrink_1280_800/0/1640123927986?e=1640228400&v=beta&t=HwIsfbPstaPyeORcNqWTsVOQgA0TSfabv371FbIeGGM","https://github.com/sinansevgi/Dietify/","https://github.com/sinansevgi/Dietify/")})),document.getElementById("project3").addEventListener("click",(function(e){n(),o("Programming Articles","Ruby on Rails Blog/article management application","./images/portfolio-images/pmarticles.png","https://github.com/sinansevgi/capstonestore","https://sinansevgi.github.io/capstonestore/")})),document.getElementById("project4").addEventListener("click",(function(e){n(),o("Ruby Podcast","Podcast fetcher page generator with Nokogiri","./images/portfolio-images/rubypods.png","https://github.com/sinansevgi/RubyPods","https://repl.it/@sinansevgi/RubyPods/")})),document.getElementById("project5").addEventListener("click",(function(e){n(),o("Tic Tac Toe","Tic Tac Toe console game made with ruby","./images/portfolio-images/tictactoe.png","https://github.com/sinansevgi/Tic-Tac-Toe","https://repl.it/@sinansevgi/Tic-Tac-Toe#main.sh")})),document.getElementById("project6").addEventListener("click",(function(e){n(),o("Social Network App","Social network app made with Ruby on Rails","./images/portfolio-images/scaffold.png","https://github.com/sinansevgi/ror-social-scaffold","https://fast-cove-87414.herokuapp.com/")})),document.getElementById("close-modal").addEventListener("click",(function(){document.getElementById("overlay").style.display="none"}))})();