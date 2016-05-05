"use strict"

// $('#edible').click(function getCategories(successCallback, failedCallback){
//   $.ajax({
//     url:"data/categories.json"
//   }).done(function(jsonData){
//       console.log("API call successful and responded with", jsonData );
//     })
//     .fail(function(){
//       console.log("API call not successful")
//     })
//   })
let acmeCat = [];
let acmeTyp = [];
let acmeProd = [];

// Categories Ajax
var categoriesAjax = function() {
  return new Promise ((resolve, reject) => {
    $.ajax({
      url: "data/categories.json"
    }).done(function(data1){
      resolve(data1);
    }).fail(function(xhr,status,error){
      reject(error);
    });
  })
}

// Types Ajax
var typesAjax = function() {
  return new Promise ((resolve, reject) => {
    $.ajax({
      url: "data/types.json"
    }).done(function(data2){
      resolve(data2);
    }).fail(function(xhr,status,error){
      reject(error);
    });
  })
}

// Products Ajax
var productsAjax = function() {
  return new Promise ((resolve, reject) => {
    $.ajax({
      url: "data/products.json"
    }).done(function(data3){
      resolve(data3);
    }).fail(function(xhr,status,error){
      reject(error);
    });
  })
}


// Take data1 as an argument and sets acmeCat array equal to data that is returned from first ajax
categoriesAjax()
.then(function(data1){
  acmeCat = data1.categories;
})

// Take data2 as an argument and sets acmeTyp array equal to data that is returned from second ajax
typesAjax()
.then(function(data2){
  acmeTyp = data2.types;
  console.log("acmeTyp", acmeTyp);
})

// Take data3 as an argument and sets acmeProd array equal to data that is returned from third ajax
productsAjax()
  .then(function(data3) {
  acmeProd = data3.products
  console.log("acmeProd", acmeProd);
  })

