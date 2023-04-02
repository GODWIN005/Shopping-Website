

// form action


const formEl = document.querySelector("form");

// const submit = (event) => {
    
//     event.preventDefault();

//     const data = new FormData(formEl);

//     // const datas = [...data.entries()];

//     const json =JSON.stringify(Object.fromEntries(data));
 
//     // console.log(json)

//     fetch("https://reqres.in/api/users/2", {
//         method: "post",
//         body:json,
//         // body:new FormData(formEl),
//     })
// }
/////////////////////////////////////////////////////////////////////////
// formEl.addEventListener('submit', submit);

// 2.event

// const categoryEl = formEl.elements.type;

// const arrcat = [...categoryEl];

// const inputcat = document.querySelector("#input-catagories");
// console.log(arrcat);

// inputcat.addEventListener("change", (event) => {
    
//   console.log(event.target.value );

// })

// 3.method

// inputcat.addEventListener('change', (event) =>{
    
// //   const checked =  a`rrcat.find((cat) =>cat.checked)

//     if (event.target.value === "pants") {

//         setTimeout(() => {
//              alert("you click pant is susefully")
//         }, 1000);
// }
    
// })


//  checkbox event /


// 1.attributes

// const select = formEl.elements.country;

// const arrcheck = [...check];




//2.event



// 3.method


//  menubar Click

const menu = document.getElementById("menuBar");
const navbars = document.getElementById("navbar");

menu.addEventListener("click", () => {

      menu.classList.toggle('fa-times');
        navbars.classList.toggle('active');
})














