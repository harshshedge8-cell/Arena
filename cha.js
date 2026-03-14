javascript
/* SPORTS DATABASE */

const sports={

Football:{
rules:"11 players per team. Score by putting ball into net.",
tournaments:"FIFA World Cup, Champions League",
countries:"Brazil, Argentina, Germany",
players:["Messi","Ronaldo","Mbappe"]
},

Cricket:{
rules:"Two teams bat and bowl to score runs.",
tournaments:"ICC World Cup, IPL",
countries:"India, Australia, England",
players:["Sachin","Virat","Root"]
},

Basketball:{
rules:"Score points by shooting into hoop.",
tournaments:"NBA, Olympics",
countries:"USA, Spain",
players:["Jordan","LeBron","Curry"]
}

};



/* CREATE CARDS */

const grid=document.getElementById("sportsGrid");

for(let sport in sports){

let card=document.createElement("div");

card.className="card";

card.innerText=sport;

card.onclick=()=>showSport(sport);

grid.appendChild(card);

}



/* SPORT INFO */

function showSport(name){

let data=sports[name];

document.getElementById("sportTitle").innerText=name;

document.getElementById("rules").innerText=data.rules;

document.getElementById("tournaments").innerText=data.tournaments;

document.getElementById("countries").innerText=data.countries;

let players=document.getElementById("players");

players.innerHTML="";

data.players.forEach(p=>{

let div=document.createElement("div");

div.className="player";

div.innerText=p;

players.appendChild(div);

});

document.getElementById("infoPanel").style.display="block";

}



/* POPULARITY CHART */

new Chart(document.getElementById("popularityChart"),{

type:"bar",

data:{
labels:["Football","Cricket","Basketball"],
datasets:[{
label:"Popularity",
data:[95,90,80]
}]
}

});



/* TOURNAMENT TIMELINE */

const timeline=[

"1930: First FIFA World Cup",

"1975: First Cricket World Cup",

"1946: NBA Founded",

"2008: IPL Started"

];

const slider=document.getElementById("timelineSlider");

const timelineContent=document.getElementById("timelineContent");

slider.oninput=()=>{

timelineContent.innerText=timeline[slider.value];

};

timelineContent.innerText=timeline[0];



/* QUIZ */

const quiz=[

{
q:"Which country won most Cricket World Cups?",
a:["India","Australia","England"],
correct:1
},

{
q:"Who has most Ballon d'Or?",
a:["Messi","Ronaldo","Zidane"],
correct:0
}

];

let qIndex=0;

function loadQuiz(){

let q=quiz[qIndex];

document.getElementById("question").innerText=q.q;

let ans=document.getElementById("answers");

ans.innerHTML="";

q.a.forEach((a,i)=>{

let btn=document.createElement("button");

btn.innerText=a;

btn.onclick=()=>checkAnswer(i);

ans.appendChild(btn);

});

}

function checkAnswer(i){

let q=quiz[qIndex];

document.getElementById("result").innerText=i===q.correct?"Correct":"Wrong";

qIndex++;

if(qIndex<quiz.length) setTimeout(loadQuiz,1000);

}

loadQuiz();



/* LEADERBOARD */

const leaderboard=[

{player:"Alex",points:120},

{player:"Sam",points:95},

{player:"Jordan",points:80}

];

const table=document.getElementById("leaderboardTable");

leaderboard.forEach(p=>{

let row=document.createElement("tr");

row.innerHTML=`<td>${p.player}</td><td>${p.points}</td>`;

table.appendChild(row);

});



/* THREE JS BALL */

const scene=new THREE.Scene();

const camera=new THREE.PerspectiveCamera(75,500/400,0.1,1000);

const renderer=new THREE.WebGLRenderer();

renderer.setSize(500,400);

document.getElementById("canvasContainer").appendChild(renderer.domElement);

const geometry=new THREE.SphereGeometry(1,32,32);

const material=new THREE.MeshBasicMaterial({color:0xffffff,wireframe:true});

const sphere=new THREE.Mesh(geometry,material);

scene.add(sphere);

camera.position.z=3;

function animate(){

requestAnimationFrame(animate);

sphere.rotation.y+=0.01;

renderer.render(scene,camera);

}

animate();

