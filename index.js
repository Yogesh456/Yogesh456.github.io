//Assigning Variabels 

var ImageName = ["c++.png",
    "javascript.png",
    "php.png",
    "python.png"];

var score = null ;
var imgRes = "myImg"
var myindex = "value";
//Creating Function 
function getImage() {
    var randomImage = Math.floor(Math.random() * ImageName.length);
    myindex = randomImage;
    document.getElementById("sbmt_area").style = "display:flex"
    document.getElementById("chng").style = "display:none"
    return document.getElementById('image').innerHTML =
        "<img src=" + ImageName[randomImage] + " value=" + ImageName[randomImage] + " id="+imgRes+"></img>";
        
        


    // var  number = Image[randomImage];
    // console.log(number);
}

function getAnswer() {
     var radioBtn = document.getElementsByName("language");
    for (let i = 0; i < radioBtn.length; i++) {
        if(radioBtn[i].checked){
            
                var imgAns = ImageName[myindex];
                var userAns = radioBtn[i].value;
                console.log(imgAns)
                console.log(userAns)
                if(imgAns == userAns){
                    
                    var trueAns = 5;
                     score = score+trueAns;
                    document.getElementById("score").innerHTML =  "Your Score is  <span > "+ score +"</span>";
                    getImage();
                } else{
                    
                    
                    
                    
                    document.getElementById("sbmt_area").style.display = "none";
                    document.getElementById("chng").style.display = "block";
                
                
            
            
                }
        
    }
    
}
}






















// function open_popup(){
//     document.getElementById("pop_up").style.display= "block";
// }
// function close_popup(){
//     document.getElementById("pop_up").style.display= "none";
// }

// // User_Data
// var UserName = "";
// function start_game(){
//     if(document.getElementById("username").value != ""){
// UserName = document.getElementById("username").value;
// window.open('game.html',"_self")
// document.getElementById("name").innerHTML = UserName;
//     }else{
//         alert("Pleas Enter YOur Nme")
//     }
// }
// console.log(UserName)