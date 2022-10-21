let search = document.getElementById("search")
let submit = document.getElementById("submit")
let mealEl = document.getElementById("meals")
let resultHeading = document.getElementsByClassName("result-heading")
let single_mealEl = document.getElementById("single-meal")

function searchMeal(e) {
   e.preventDefault();

   single_mealEl.innerHTML = "";

   let term = search.value;

   if (term.trim()) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data)

            resultHeading.innerHTML = `<h2>Search Result for${term}`;

            if (data.meals === null) {
               resultHeading.innerHTML = `<h2>There Are No Result for${term}`;
            }
            else {
               mealEl.innerHTML = data.meals.map(
                  (meal) => `<div class="meal">
                     <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                     <div class="meal-info" data-mealID="${meal.idMeal}">
                     <h3>${meal.strMeal}</h3>
                     </div>
                     </div>`
               )
                  .join("");
            }
         });

   } else {
      alert("Please insert a value in Search")
   }
}

submit.addEventListener('submit', searchMeal);




















   // fetch(`https://collectionapi.metmuseum.org/public/collection/v1/object&hasImages`)
   //    .then((res) => {
   //       return res.json();
   //    })
   //    .then((data) => {
   //       console.log(data);
   //       search = data.objectIDs;
   //       console.log(search)

   //       for (let i = 0; i < 50; i++) {
   //          const r = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${search[i]}`)
   //             .then((r) => {
   //                return r.json
   //             })
   //             .then((result) => {
   //                console.log(result);
   //             })

   //       }












         // if (term === null) {
         //    resultHeading.innerHTML = `<h2>There Are No Result for ${term}`;
         //    console.log(resultHeading)
         // }

         // else {
         //    artEl.innerHTML = [data].map(
         //       (art) => `<div class="art">
         //          <img src="${art.primaryImage}" alt="${art.objectID}">
         //          <div class="art-info" data-artID="${art.objectName}">
         //          <h3>${art.objectName}</h3>
         //          </div>
         //          </div>`
         //    )
         //       .join("");
         // }
//       }
//    }
// }

// function showOnScreen() {
//    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search`)
//    .then((response)=>{
//       if (!response.ok) {
//          throw Error("Error")
//       }
//       return response.json()
//    })
//    .then((data)=>{
//       let html = data.data
//       .map((img) =>{
//          return `
//          <div>
//          <p><img src="${img.objectURL}" alt="${img.objectName}"></p>
//          <p>${img.objectName}</p>
//          </div>`;
//       })
//       .join("");
//       console.log(html)
//    })
//    .catch((error)=>{
//       console.log(error);
//    })
// }

// showOnScreen()






// async function showOnScreen() {

//    let searchResult = []

//    let res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects`)
//    let data = await res.json();
//    searchResult = data;


//    for (let i = 0; i < 20; i++) {
//       const element = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchResult[i]}`)
//          let rs = await element.json()
//          console.log(rs)
//          .then(function (dt) {
//             dt.objectIDs.forEach(element => {
//                let e = document.createElement('div')
//                let img = document.createElement('img')
//                let text = document.createElement('h3')

//                text.innerHTML = `${element.objectName}`
//                console.log(text)
//                img.src = element.primaryImage
//                console.log(img);
//                e.appendChild(img);
//                e.appendChild(text);
//                main.appendChild(e);
//             });
//          })
//    }
// }




// function showOnScreen() {
//    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects`)
//       .then(rs => rs.json())
//       .then(function (dt) {
//          dt.objectIDs.forEach(element => {
//             let e = document.createElement('div')
//             let img = document.createElement('img')
//             let text = document.createElement('h3')

//             text.innerHTML = `${element.objectName}`
//             console.log(text)
//             img.src = imgdiv + element.primaryImage
//             console.log(img);
//             e.appendChild(img);
//             e.appendChild(text);
//             main.appendChild(e);
//          });
//       })
// }

// showOnScreen()