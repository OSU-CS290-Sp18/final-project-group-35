


function randomNumber(){
    return Math.floor(Math.random()*5);
}

var nameContainer = document.getElementsByClassName('name-container');
var nameContent = document.getElementById('name-show');

function showName(event){
    var num = randomNumber();
    if (resturants[num].name){
      nameContent.innerText =  resturants[num].name;
    }else{
    nameContent.innerText = "?????";
    }
    nameContainer[0].style.display = "block";
}


//add name

function addname(event){
    var name = document.getElementById('name-input').value.trim();
    
    if (name.replace(/(^\s*)|(\s*$)/g, "").length == 0) {
        alert("Name is empty!");
      }
    else {
        var request = new XMLHttpRequest();
        var url = "/add/addname";
        request.open("POST", url);

        var requestBody = JSON.stringify({
          name: name
        });

        request.setRequestHeader('Content-Type', 'application/json');
        request.send(requestBody);
        alert("success");

    }
    document.getElementById('name-input').value = null;
}


//window.addEventListener('DOMContentLoaded', function (event) {
    var generator = document.getElementById('plate-button');
  generator.addEventListener('click', showName);


    var submitButton = document.getElementById('add-button');
  submitButton.addEventListener('click', addname);

//});

