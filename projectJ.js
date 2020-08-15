var be=document.querySelector("#Apply");
var d=document.querySelector("#con");
var first=true;
var mainArr=new Array();
var MainObject=new Array();//n*m/2
var PRESELECTED=null;
var PRESELECTEDOBJECT=null;
var numOfSelected=0;
var sel=document.querySelector("#sel");
var score=0;
var running=false;
var images=new Array();
for(var i=0;i<50;i++){
    images.push("images\\"+i+".jpg");
}

be.addEventListener("click",function(){
    var end =false;
    
    if(!first){
        end=false;
        var del=document.querySelector("table");
        var dd=document.querySelector(".get");
        dd.parentNode.removeChild(dd);
        del.parentNode.removeChild(del);
        MainObject=new Array();
        mainArr=new Array();
         PRESELECTED=null;
        PRESELECTEDOBJECT=null;
        numOfSelected=0;
        score=0;
        var w=document.querySelector("#mod");
        w.textContent=score;
        var q=document.querySelector(".SS");
        q.classList.add("d-none");
        q.classList.remove("displat-inline");
        var theLast=document.querySelector(".delete");
        document.body.removeChild(theLast);
        end=false;
    }
    {
    var sacrifice=document.querySelector("#sac");
    sac.classList.remove("d-none");
    first=false;
    var t=document.createElement("table");
    var finRow="";
    var finCol="";
    t.setAttribute("border","3px solid black");
    var ss=sel.value;
    var fou=false;
    for(var e=0;e<ss.length;e++){
        if(ss[e]=="*"){
            fou=true;
            
            continue;
        }else{
            if(!fou){
                finRow+=ss[e];
            }else{
                finCol+=ss[e];
            }
        }
    }    
    for(var i=0;i<finRow;i++){
        var tempArray=new Array();
        var tR=document.createElement("tr");
        t.appendChild(tR);
        for(var j=0;j<finCol;j++){
            var Rc=document.createElement("td");
            var OB=new Object();
            Rc.setAttribute("height","100px");
            Rc.setAttribute("width","130px");
            Rc.setAttribute("border","10px solid black");
            Rc.classList.add("rounded");
            var img=document.createElement("img");
            //img.classList.add("img-fluid");
            img.classList.add("img-thumbnai");
            img.setAttribute("src","cam.jpg");
            img.setAttribute("width","130px");
            img.setAttribute("height","100px");
            Rc.appendChild(img);
            tR.appendChild(Rc);
            OB.REF=Rc;
            OB.deathImage=img;
            tempArray.push(OB);
        }
            mainArr.push(tempArray);
    }
    d.classList.add("d-flex");
    d.classList.add("flex-column");
    d.classList.add("align-items-center");
    d.classList.add("justify-content-center");
    d.classList.add("pb-5");
    d.appendChild(t);
    document.body.appendChild(d);
    for(var i=0;i<(finCol*finRow)/2;i++){
        var tO=new Object();
        tO.item=0;
        tO.full=false;
        tO.num=i;
        MainObject.push(tO);
    }
    mainArr.forEach(function(x){
        x.forEach(function(y){
            var br=true;
            while(br){ 
                Math.random();
                Math.random();
                Math.random();
                Math.random();
                Math.random();
                Math.random();
                Math.random();
                Math.random();
                var u =Math.floor(Math.random()* Math.random()*((finCol*finRow)/2)) ;
                Math.random();
                Math.random();
                Math.random();
                Math.random();
                Math.random();
                Math.random();
                Math.random();
                Math.random();


                if(MainObject[u].item==0){
                    MainObject[u].item=1;
                    br=false;
                    y.REFIMAGE=u;
                }else if(MainObject[u].item==1){
                    MainObject[u].item=2;
                    br=false;
                    y.REFIMAGE=u;

                }
            }
            y.done=false;
        })
    })
    
    mainArr.forEach(function(x){
        x.forEach(function(y){
            y.REF.addEventListener("click",function(){
                if(!y.done&&!running){
                   
                if(numOfSelected==0){
                    var sou= new Howl({ src: ['sounds/splits.mp3']});
                    sou.play();
                    numOfSelected++;
                    PRESELECTED=y.REF;
                    PRESELECTEDOBJECT=y;
                    y.REF.classList.add("border");
                    y.REF.classList.add("border-danger");
                    y.deathImage.setAttribute("src",images[y.REFIMAGE]);

                }
                else if(numOfSelected==1&&y!=PRESELECTEDOBJECT){
                    numOfSelected=0;
                   PRESELECTEDOBJECT.deathImage.setAttribute("src",images[PRESELECTEDOBJECT.REFIMAGE]);
                    y.REF.classList.add("border");
                    y.REF.classList.add("border-danger");
                    y.deathImage.setAttribute("src",images[y.REFIMAGE]);
                    running=true;
                    if(y.REFIMAGE==PRESELECTEDOBJECT.REFIMAGE){
                    var souu= new Howl({ src: ['sounds/pinwheel.mp3']});
                    souu.play();

                    }else{
                        var sou= new Howl({ src: ['sounds/splits.mp3']});
                    sou.play();
                    }
                    sleep(1000).then(() => {
                        
                    // Do something after the sleep!
                        if(y.REFIMAGE==PRESELECTEDOBJECT.REFIMAGE){
                            
                            score+=2;
                            var w=document.querySelector("#mod");
                            w.textContent=score;
                            if(score==finCol*finRow){
                                win();
                                end=true;
                            }
                            y.done=true;
                            PRESELECTEDOBJECT.done=true;
                            running=false;

                        }else{
                    y.REF.classList.remove("border");
                    y.REF.classList.remove("border-danger");
                    PRESELECTED.classList.remove("border");
                    PRESELECTED.classList.remove("border-danger");
                    PRESELECTEDOBJECT.deathImage.setAttribute("src","cam.jpg");
                    y.deathImage.setAttribute("src","cam.jpg");
                   running=false;
                        }
                });
                }
            }
            })
        })
    })
    var final=document.createElement("button");
    final.classList.add("fin");
    final.classList.add("btn");
    final.addEventListener("click",deathh);
        function deathh (){
        mainArr.forEach(function(x){
            x.forEach(function(y){
                y.done=true;
                y.deathImage.setAttribute("src",images[y.REFIMAGE]);
            })
        })
            end=true;
    }
    final.classList.add("get");
    final.textContent="SOLVE";
    d.appendChild(final);
    var tim=document.querySelector("#tim");
    var timeAll=5*tim.value*60;
    var n=0;
    var timer1=document.createElement("p");
    var timerextra=document.createElement("p");
    var theEndOfWar=document.createElement("div");
    theEndOfWar.classList.add("container");
    theEndOfWar.classList.add("d-flex");
    theEndOfWar.classList.add("delete");

    theEndOfWar.classList.add("justify-content-around");
    document.body.appendChild(theEndOfWar);
    timer1.classList.add("gett");
    timerextra.classList.add("gett");
    timer1.classList.add("pb-5");
    timerextra.classList.add("pb-5");
    var easy=(tim.value==0);
    theEndOfWar.appendChild(timer1);
    if(!easy){
            theEndOfWar.appendChild(timerextra);

    }

    setInterval(function(){
        
        var t1sec=n%60;
        var t1min=Math.floor(n/60);
        var tesec=(timeAll-n)%60;
        var temin=Math.floor((timeAll-n)/60);
        if(!end){
        timer1.textContent="Time :"+t1min+" : "+t1sec;
        timerextra.textContent="Remain :"+temin+" : "+tesec;
        n++;
        }
        
        if(n-1>=timeAll&&!easy){
            end=true;
            deathh();
        }
    },1000);

}})

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function win(){
     var som= new Howl({ src: ['sounds/confetti.mp3']});
                                som.play();
                                sleep(100).then(() => {
                                  som.play();
                                    sleep(100).then(() => {
                                  som.play();
                                     sleep(100).then(() => {
                                  som.play();
                                     sleep(100).then(() => {
                                  som.play();
                                    
                                });
                                });
                                });
                                });
    var q=document.querySelector(".SS");
    q.classList.remove("d-none");
}