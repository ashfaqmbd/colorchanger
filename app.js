const button=document.querySelector("button");
const body=document.querySelector("body");
const color=['red','green','orange','pink','purple','yellow','khaki'];
body.style.backgroundColor="violet";
button.addEventListener('click',cb);
function cb(){
 const colorIndex=parseInt(Math.random()*color.length);
 body.style.backgroundColor=color[colorIndex];
}