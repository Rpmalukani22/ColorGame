x=[]
for(var i=0;i<6;i++){
  temp="rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")";
  while(x.indexOf(temp)!=-1)
  temp="rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")";
  x.push(temp);
}
y=document.querySelectorAll(".rect");
pickedcolor=x[Math.floor(Math.random()*6)];
putQuestion=document.getElementById("question");
putQuestion.textContent=pickedcolor.toUpperCase();
y.forEach((i,ind)=>{i.style.backgroundColor=x[ind];
i.addEventListener('click',()=>{
  console.log(pickedcolor.toUpperCase());
  console.log(i.style.backgroundColor);
  if(pickedcolor.toUpperCase()===i.style.backgroundColor.toUpperCase())
  {i.style.visibility='hidden';
}
});
});
