// Qn 1: Compare two JSON having the same properties without order
// solution:
   let obj1 ={name:"Person 1", age:5}
   let obj2= {age:5, name:"Person1"}

   let JSON1 =JSON.stringify(obj1);
   let JSON2 =JSON.stringify(obj2);

   if (JSON1 ==JSON2)
   {
    console.log("Both are equal");
   }
   else
   {
    console.log("Both are not equal");
   };



// Qn:2 To display all the country flags in the console from the API rest countries.
// solution:
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
   for (var i=0;i<result.length;i++)
{
  console.log(result[i].flags.png) 
}
};



// Qn:3 To print all country names, region,sub regions and population:
// solution:
var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () 
{
  var data1 = request1.response;
  var result1 = JSON.parse(data1);
  for (var i=0;i<result1.length;i++)
  {
    console.log(result1[i].name.common, result1[i].region, result1[i].subregion, result1[i].population);
  }
}




