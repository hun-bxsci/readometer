(() =>{

document.addEventListener("DomContentLoaded", function (){
    var section = document.getElementById("feedback");
    var button = document.createElement("input");
    button.setAttribute("type", button);
    button.appendChild(document.createTextNode("test"));
    section.appendChild(button);

});
})