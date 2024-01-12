/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];  

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

// define function, parameters in(). array of objects, string for usernames
function findUserByUsername(usersArray, username) {
  //look(find) something within usersArray(use function that will be applied to each item in array)
  //find method iterates over each object in usersArray(). In this answer it searches user. User is the object
  return usersArray.find(function(user){
    return user.username === username;
 })
   //concise arrow function used for call back...more concise
  // return usersArray.find(user => user.username === username)
}



/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/


function removeUser(usersArray, username) {
  //declare variable 'foundIndex' to store index of user
  //the anon function passed to .findIndex checks that username of each 'userArrays' objext matches the username passed to removeUser function
  //if match found it will return the index of elemtn, if not found it returns -1
  let foundIndex= usersArray.findIndex(function(user){
    return user.username === username;
  });
  //if -1 comes back that means no match found
  if (foundIndex=== -1) return;
  //if the first return condition (return user.username===username) is met then that means the 'if' condition is not met. I can then return users and splice to remove that element or in this case the username that was returned
  //(1) is how many elements I am removing
  //[0] is needed because the splice method returns the returns array containing the removed elements.  Without [0], the return value of splice would be an array and I wouldnt get the actural removed object. It also allows me to EXTRACCT the removed object from array and return its as the result of the function
  return usersArray.splice(foundIndex,1)[0];
}