let userSeq=[];
let gameSeq=[];
let btns=["red","yellow","purple","blue"];
let level=0;
let start=false;
let h2=document.querySelector('h2');
document.addEventListener("keypress",function(){
  if(start==false){
    console.log("game is started");
    start=true;

    levelUp();
  }
});
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
}
function userFlash(btn){
  btn.classList.add("flashGreen");
  setTimeout(function(){
    btn.classList.remove("flashGreen");
  },250);
}

function levelUp() {
  userSeq=[];
  level++;
  h2.innerText=`lavel  ${level}`;

  let ranIdx=Math.floor(Math.random()*3);
  let ranCol=btns[ranIdx];
  let ranBtn=document.querySelector(`.${ranCol}`);
  gameSeq.push(ranCol);
  gameFlash(ranBtn);
  console.log(gameSeq);
}

function checkAns(idx){
  // let idx= level-1;
  if(gameSeq[idx] === userSeq[idx]){
    if(gameSeq.length === userSeq.length){
      setTimeout(levelUp,100);
    }
    // console.log("same value")
  }else{
    h2.innerHTML=`game is over! Your scrose was <b>${level}<b> <br>press any key to start`;
    let body=document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      body=document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
  }
}

function btnPress(){
  let btn=this;
  userFlash(btn);
  let userCol = btn.getAttribute('id');
  userSeq.push(userCol);
  checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll('.btn');
for(let btn of allBtn){
  btn.addEventListener("click",btnPress);
}

function reset(){
  start=false;
  level=0;
  gameSeq=[]
  userSeq=[];
}