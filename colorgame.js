var x=[]
var size=6;
var y=document.querySelectorAll(".rect");
var pickedcolor="";
var message=document.getElementById("result");
var putQuestion=document.getElementById("question");
var lvl=document.querySelectorAll(".level");
var h1=document.querySelector("h1");

changeclr=(n)=>{
  if(n===3)
  {
    window.lvl[0].style.backgroundColor=h1.style.backgroundColor;
    window.lvl[1].style.backgroundColor=window.lvl[2].style.backgroundColor;
  }
  else{
    window.lvl[1].style.backgroundColor=h1.style.backgroundColor;
    window.lvl[0].style.backgroundColor=window.lvl[2].style.backgroundColor;
  }
}
generate=(x,y,n)=>{
  h1.style.backgroundColor="lightblue";
  changeclr(n);
  h1.style.backgroundColor="lightblue";
  window.lvl[2].textContent="New colours!"
  window.pickedcolor="";
  window.message.textContent="";
  x=[]
for(var i=0;i<n;i++){
  y[i].style.visibility="visible";
  temp="rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
  while(x.indexOf(temp)!=-1)
  temp="rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
  x.push(temp);
}
if(n===3)
{for(var i=3;i<6;i++)
y[i].style.visibility="hidden";
}
window.pickedcolor=x[Math.floor(Math.random()*n)];
window.putQuestion.textContent=pickedcolor.toUpperCase();
window.y.forEach((i,ind)=>{i.style.backgroundColor=x[ind];
i.addEventListener('click',()=>{
  console.log(pickedcolor.toUpperCase());
  console.log(i.style.backgroundColor);
  if(pickedcolor.toUpperCase()===i.style.backgroundColor.toUpperCase())
  {
  //message success
  console.log(n);
  message.textContent="Correct!!"
  window.lvl[2].textContent="Play again?"
  for(let k=0;k<6;k++){
    console.log("k :",k,"n :",n);
    if(k<n)
    {y[k].style.visibility="visible";
    y[k].style.backgroundColor=pickedcolor;
    h1.style.backgroundColor=pickedcolor;
    changeclr(n);
  }
  else{
    y[k].style.visibility="hidden";
  }
  }
}
else{
  message.textContent="Uh oh wrong!Try again.";
  i.style.visibility='hidden';
  //message=try again
}
});
});
return x;
}
x=generate(x,y,6);
console.log(lvl);
lvl[0].addEventListener('click',()=>{;window.size=3;x=generate(x,y,window.size);console.log(x);});
lvl[1].addEventListener('click',()=>{window.size=6;x=generate(x,y,window.size);console.log(x);});
lvl[2].addEventListener('click',()=>{x=generate(x,y,window.size);console.log(x);});
console.log(x);
