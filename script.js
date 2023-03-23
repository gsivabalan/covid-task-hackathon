var div=document.createElement('div');
div.style.textAlign="center";
var input =document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.style.marginLeft="5px";
button.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");
div.append(input,button,active);
document.body.append(div);

async function foo(){
    try{
    let data=document.getElementById("country").value;
    console.log(data);
    let url=`https://api.covid19api.com/total/dayone/country/${data}`;
    let data1 =await fetch(url);
    let data2=await data1.json();
    let res=data2.length-1;
    console.log(data2[res].Active);
    active.innerHTML=`Active case:${data2[res].Active} 
    Deaths:${data2[res].Deaths} 
    Recovered:${data2[res].Recovered}`;
    

} catch (error) {
    console.error(error);
  }
}
    