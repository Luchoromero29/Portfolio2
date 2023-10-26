

// document.addEventListener("DOMContentLoaded", () => {
    
//     var target = document.querySelector("#contact");
    
//     target.scrollIntoView({block: "end", behavior: "smooth"});
      
// })

//     const habilities = [
//         { nombre: "JavaScript", image: "icons/javascript.png", alt: "icon javascript" },
//         { nombre: "HTML", image: "icons/html.png", alt: "icon html" },
//         { nombre: "CSS", image: "icons/css.png", alt: "icon css" },
//         { nombre: "Java", image: "icons/java.png", alt: "icon java" },
//         { nombre: "MySQL", image: "icons/mysql.png", alt: "icon mysql" },
//         { nombre: "Bootstrap", image: "icons/bootstrap.png", alt: "icon bootstrap" },
//         { nombre: "Unity", image: "icons/unity.png", alt: "icon unity" },
//         { nombre: "Github", image: "icons/github.png", alt: "icon github" },
//         { nombre: "Git", image: "icons/git.png", alt: "icon git" },
//         { nombre: "Autocad", image: "icons/autocad.png", alt: "icon autocad" },
//     ]

//     let grid = document.getElementsByClassName("grid-habilities");
//     habilities.forEach(item => {

//         let div = document.createElement("div")

//         let habilitie = `
//             <div class="padding-img ${item.nombre.toLowerCase()}"> 
//                 <img src="${item.image}" alt="icon ${item.nombre.toLowerCase()}">
//             </div>
//             <span>${item.nombre}</span>
//         `
//         div.setAttribute("class", "skills-icon")
//         div.innerHTML = habilitie
        

//         let grid = document.getElementsByClassName("grid-habilities");
//         grid.innerHTML = habilitie
//         console.log(grid);

//             grid.innerHTML = "";
//             habilities.forEach(item => {
//                 let div = document.createElement("div")
//                 const habilitie = d.createElement("div");
//                 const habilitie2 = d.createElement("img");
//                 const habilitie3 = d.createElement("span");
//                 habilitie2.src = item.image;
//                 habilitie2.alt = "icon" + item.nombre.toLowerCase();
//                 habilitie3.innerHTML = item.nombre;

//                 habilitie.append(habilitie2);
//                 habilitie.append(habilitie3);
//                 div.append(habilitie);

//                 div.setAttribute("class", "skills-icon")

//             })
//         });


//     })
// });
