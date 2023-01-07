/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap(arr) {
  //Write your code here
  arr.map(printByMap); 

  function printByMap(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(printingByForEach); // Each element is stored in "printingThroghForEach" variable
 
  function printingByForEach(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }

} 

function addData() {
  //Write your code here
  let newObj = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newObj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  let new_arr = arr.filter(function (x) {
  
    if (x.profession !== "admin") {
    
      return x;
    }
  });
  console.log(new_arr);
}

function concatenateArray() {
  //Write your code here
  let arr1 = [
    { id: 5, name: "Rito", age: "23", profession: "Intern" },
    { id: 6, name: "Saptami", age: "25", profession: "developer" },
    { id: 7, name: "Teji", age: "21", profession: "developer" },
  ];
 
  let concatArr = arr.concat(arr1);
  console.log(concatArr);
}
