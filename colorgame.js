var x=[]
var size=6;
var y=document.querySelectorAll(".rect");
var pickedcolor="";
var message=document.getElementById("result");
var putQuestion=document.getElementById("question");
var lvl=document.querySelectorAll(".level");
var h1=document.querySelector("h1");
var fillcolour=(x,n)=>{
  for(var i=0;i<n;i++)
  y[i].style.backgroundColor=x[i];
}
changeclr=(n)=>{
  if(n===3)
  {
    window.lvl[1].style.backgroundColor=h1.style.backgroundColor;
    window.lvl[1].style.color="white";
    window.lvl[2].style.backgroundColor=window.lvl[0].style.backgroundColor;
    window.lvl[2].style.color=window.h1.style.backgroundColor;
    window.lvl[0].style.color=window.h1.style.backgroundColor;

  }
  else{
    window.lvl[2].style.backgroundColor=h1.style.backgroundColor;
    window.lvl[2].style.color="white";
    window.lvl[1].style.backgroundColor=window.lvl[0].style.backgroundColor;
    window.lvl[1].style.color=window.h1.style.backgroundColor;
    window.lvl[0].style.color=window.h1.style.backgroundColor;
  }
}
generate=(x,y,n)=>{
  h1.style.backgroundColor="steelblue";
  window.lvl[1].style.color=h1.style.backgroundColor;
  window.lvl[2].style.color=h1.style.backgroundColor;
  window.lvl[0].style.color=h1.style.backgroundColor;
  changeclr(n);
  window.lvl[0].textContent="New colours!"
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
y[i].style.backgroundColor="Black";
}
window.pickedcolor=x[Math.floor(Math.random()*n)];
window.putQuestion.textContent=pickedcolor.toUpperCase();
fillcolour(x,n);
return x;
}
x=generate(x,y,6);
console.log(lvl);
lvl[1].addEventListener('click',()=>{window.size=3;x=generate(x,y,window.size);console.log(x);});
lvl[2].addEventListener('click',()=>{window.size=6;x=generate(x,y,window.size);console.log(x);});
lvl[0].addEventListener('click',()=>{x=generate(x,y,window.size);console.log(x);});
console.log(x);
window.y.forEach((i,ind)=>{
i.addEventListener('click',()=>{
  console.log(pickedcolor.toUpperCase());
  console.log(i.style.backgroundColor);
  if(pickedcolor.toUpperCase()===i.style.backgroundColor.toUpperCase())
  {
  //message success
  console.log(size);
  message.textContent="Correct!!"
  window.lvl[0].textContent="Play again?"
  for(let k=0;k<6;k++){
    console.log("k :",k,"size :",size);
    if(k<size)
    {y[k].style.visibility="visible";
    y[k].style.backgroundColor=pickedcolor;
    h1.style.backgroundColor=pickedcolor;
    changeclr(size);
  }
  else{
    y[k].style.backgroundColor="Black";
  }
  }
}
else{
  message.textContent="wrong!Try again.";
  i.style.backgroundColor='Black';
  //message=try again
}
});
});
