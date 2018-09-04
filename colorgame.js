x=[]
for(var i=0;i<6;i++){
  temp="rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
  while(x.indexOf(temp)!=-1)
  temp="rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
  x.push(temp);
}
var message=document.getElementById("result");
y=document.querySelectorAll(".rect");
pickedcolor=x[Math.floor(Math.random()*6)];
putQuestion=document.getElementById("question");
putQuestion.textContent=pickedcolor.toUpperCase();
y.forEach((i,ind)=>{i.style.backgroundColor=x[ind];
i.addEventListener('click',()=>{
  console.log(pickedcolor.toUpperCase());
  console.log(i.style.backgroundColor);
  if(pickedcolor.toUpperCase()===i.style.backgroundColor.toUpperCase())
  {
  //message success
  message.textContent="Correct!!"
  for(let k=0;k<y.length;k++){
    y[k].style.visibility="visible";
    y[k].style.backgroundColor=pickedcolor;
  }
}
else{
  message.textContent="Uh oh wrong!Try again.";
  i.style.visibility='hidden';
  //message=try again
}
});
});
