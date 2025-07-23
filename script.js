function f1(event) {
    event.preventDefault();
   if(document.getElementById("name").value === "Divya"){
         alert("Welcome Divya");
         window.location.href = "divya.html";
         

   }
else{
         alert("You are not Divya😤!!");
        }}
function gift(){
    window.location.href="gift.html";
}
function surp(){
    window.location.href="surprise.html";
}
function home(){
    alert("Redirecting to home or doing something cool 😄");
    window.location.href="index.html";
}   