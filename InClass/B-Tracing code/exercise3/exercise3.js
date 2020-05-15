// var getRepos = function (repoName) {
//   fetch('https://api.github.com/users/' + repoName + '/repos')
//     .then(response => response.json())
//     .then(function (data) {

//       //console.log(data.map(rep => rep.name));
//       return data.map(rep => rep.name);

//     })
// };




// var migracodeRepos = getRepos('migracode-barcelona');
// console.log("Loading...");


// var myElement = document.querySelector("#main");
// var paragraph = document.createElement("p");
// getRepos('migracode-barcelona');

// paragraph.innerHTML = getRepos('migracode-barcelona');
// myElement.appendChild(paragraph);

// //Task1. Fix the code
// //Task2. Create a <p> for each repository


var getRepos = function (repoName) {
  return fetch(`https://api.github.com/users/${repoName}/repos`)
    .then(response => response.json())
    .then(function (data) {
      return (data.map(function (rep) {
        console.log(rep.name);
        return rep.name;
      }));

    });
};


console.log("Loading...");
var migracodeRepos = getRepos('migracode-barcelona');
migracodeRepos.then(function (repos) {
  // use repos in here
  return repos.forEach(function (name) {
    var myElement = document.querySelector("#main");
    var paragraph = document.createElement("p");
    paragraph.innerHTML = name;
    myElement.appendChild(paragraph);
  }

  );
});



