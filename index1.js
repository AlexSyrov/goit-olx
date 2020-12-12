// export default class FetchCategoriesList {
//     constructor() {
//       this.refs = {
//         requestOptions: {
//           method: 'GET',
//           headers: { "accept": "application/json"},
//           redirect: 'follow',
  
//         },
//       }
//     }
//     fetchCategoriesListReguest() {
//       return fetch("https://callboard-backend.herokuapp.com/call/categories", this.refs.requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
//     }
//   }





const select = document.querySelector("select");

function fetchCategoriesListReguest(){
          return fetch("https://callboard-backend.herokuapp.com/call/categories")
            .then(response => response.json())
            .then(result => result.map(e=>select.innerHTML+=`<option>${e}</optiom>`).join(""))
            .catch(error => console.log('error', error))
        }


fetchCategoriesListReguest();


const xyz = document.querySelector(".xyz");
const description = document.querySelector(".description");
const button = document.querySelector("button");

const list = [
    {
        "title": "Red Shirt",
        "description": "New red shirt, made from cotton",
        "category": "Trade",
        "price": 0,
        "phone": "+380000000000",
        "imageUrls": [
          "string"
        ],
        "isOnSale": false,
        "userId": "507f1f77bcf86cd799439011",
        "id": "507f1f77bcf86cd799439012"
      }
]

// newItem = {
    
//     "title": xyz.value,
//     "description": description.nodeValue,
//     "category": onChange,
   
//     "isOnSale": false,



  
// }



let newItem = {};

select.addEventListener("change",onChange)

function onChange(){


   let i = select.options.selectedIndex;


  
  newItem.category = select.options[i].value;

}



function addItem(i){

newItem = {
    
        "title": xyz.value,
        "description": description.value,
        "category": onChange,
       
        "isOnSale": false,



      
}
list.push(newItem);
console.log(list);
console.log(newItem);
}
addItem()


