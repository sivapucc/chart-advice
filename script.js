var container = document.createElement('div');
container.className = 'container';
var box = document.createElement('div');
box.className = 'box';
var content = document.createElement('div');
content.className = 'content';
content.innerHTML=advice();
var h1=document.createElement('h1');
h1.innerHTML="Advice Chart"
var button=document.createElement('button');
button.classList.add("button","btn","btn-primary");
var i=document.createElement('i');
i.className="fa fa-refresh"
button.appendChild(i);
button.innerHTML+=" Refresh";
button.addEventListener("click",advice)
box.append(button,content);
container.append(h1,box);
document.body.appendChild(container);

async function advice() {
    try{
        var api=await fetch("https://api.adviceslip.com/advice");
        var res=await api.json();
        content.innerHTML=`${res.slip.advice}`;
    }catch(error){
        console.log(error);
        content.innerHTML="Please check Your Internet connection"
    }
}