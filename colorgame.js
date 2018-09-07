var x=[]
var y=document.querySelectorAll(".rect");
var pickedcolor="";
var message=document.getElementById("result");
var putQuestion=document.getElementById("question");
generate=(x,y,n)=>{
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
  for(let k=0;k<6;k++){
    console.log("k :",k,"n :",n);
    if(k<n)
    {y[k].style.visibility="visible";
    y[k].style.backgroundColor=pickedcolor;
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
var lvl=document.querySelectorAll(".level");
console.log(lvl);
lvl[0].addEventListener('click',()=>{x=generate(x,y,3);console.log(x);});
lvl[1].addEventListener('click',()=>{x=generate(x,y,6);console.log(x);});
console.log(x);
