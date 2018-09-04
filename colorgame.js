x=[]
for(var i=0;i<6;i++){
  temp="rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")";
  while(x.indexOf(temp)!=-1)
  temp="rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")";
  x.push(temp);
}
y=document.querySelectorAll(".rect");
pickedcolor=x[Math.floor(Math.random()*6)];
y.forEach((i,ind)=>{i.style.backgroundColor=x[ind];});
