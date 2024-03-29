
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");

      let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
        }

//js code to toggle dark and light mode
      modToggle.addEventListener("click", () =>{
        modToggle.classList.toggle("active");
        body.classList.toggle("dark");

        //js code to keep user selcted mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode", "light-mode");
        }else {
            localStorage.setItem("mode", "dark-mode");
        }
      });

//js code to toggle search box mode
       searchToggle.addEventListener("click", () =>{
       searchToggle.classList.toggle("active");
       });

//js code to toggle sidebar
        sidebarOpen.addEventListener("click", () =>{
            nav.classList.add("active");
        });

        body.addEventListener("click", e =>{
            let clickedElm = e.target;

            if(!clickedElm.classList.contains('sidebarOpen') && !clickedElm.classList.contains("menu")){
                nav.classList.remove("active");
            }
        });