var video;

    window.onload=function(){
        sheet = document.styleSheets;
        video=document.getElementsByClassName('videos');
        contenidorVideo = document.getElementsByClassName("jugador");
        imgNav = document.getElementsByClassName("imgNav");
        imatgeTancar = document.getElementById("tancar");
        reproductor = document.getElementById("reproductor");
        parar = document.getElementById("parar");
        avançar = document.getElementById("avançar");
        atrasar = document.getElementById("atrasar");
        commutar = document.getElementById("commutar");
        est = document.getElementsByClassName("est");
        oest = document.getElementsByClassName("oest");
        
            if(video[0].readyState >= video[0].HAVE_METADATA){
                funcioProgramarVideos();
            }
            else{
                video[0].addEventListener("loadedmetadata", funcioProgramarVideos);
            }



}
        function funcioProgramarVideos () {
        var valorsTop = ["250px","320px","480px","400px","600px","250px","320px","480px","400px","600px" ];
        var valorsLeft = ["450px","290px","340px","570px","440px","450px","290px","340px","570px","440px"];
        var comprovacio = false;

        //play/pause button event listener
            commutar.addEventListener("click", () => {
                    [...video].map((elem, i) => { 
                    if (contenidorVideo[i].style.borderRadius === "0%"){
                        if (!video[i].paused) {
                            document.getElementById("playPause").innerHTML="&#x25BA;";

                        video[i].pause();

                        }
                        else {
                            video[i].play();
                            document.getElementById("playPause").innerHTML="&#9122;&#9125;";
                        }
                    }
                });
            });
            //parar button eventListener
            parar.addEventListener("click", () => {
                [...video].map((elem, i) => { 
                if (contenidorVideo[i].style.borderRadius === "0%"){
                    video[i].pause();
                    video[i].currentTime = 0;
                    document.getElementById("playPause").innerHTML="&#x25BA;";
                    }
                });
            });
            //avançar 20s button event listener
            avançar.addEventListener("click", () => {
                [...video].map((elem, i) => { 
                if (contenidorVideo[i].style.borderRadius === "0%"){
                    video[i].currentTime +=20;
                    }
                });
            });
            //atrasar 20s button event listener
            atrasar.addEventListener("click", () => {
                [...video].map((elem, i) => { 
                if (contenidorVideo[i].style.borderRadius === "0%"){
                    video[i].currentTime -=20;
                    }
                });
            });
            //event listener del botó de tancar els videos
            imatgeTancar.addEventListener("click", () => {
                [...video].map((elem, i) => { 
                    video[i].muted = true;
                });
            });

            //Comprovacio de que no hi hagi cap video actiu en aquell moment quan cliques als jugadors de la pista
            [...contenidorVideo].map((elem,j) => { 

                contenidorVideo[j].addEventListener("click", () => 
                {
                [...contenidorVideo].map((elem,i) => { 
                    if (contenidorVideo[i].style.borderRadius === "0%"){
                        [...contenidorVideo].map((elem, i) => { 
                        if (contenidorVideo[i].style.borderRadius === "0%") {
                            contenidorVideo[i].style.transition="all 1s";

                        if (contenidorVideo[i].classList.contains("present")) {
                            contenidorVideo[i].style.top= valorsTop[i];
                            contenidorVideo[i].style.left=valorsLeft[i];
                        }
                        else {
                            contenidorVideo[i].style.top= valorsTop[i];
                            contenidorVideo[i].style.right=valorsLeft[i];
                        }
                            contenidorVideo[i].style.width="100px";
                            contenidorVideo[i].style.height="100px";
                            contenidorVideo[i].style.borderRadius="50%";
                            contenidorVideo[i].style.overflow="hidden";
                            contenidorVideo[i].style.position="absolute";
                            video[i].muted = true;

                            [...contenidorVideo].map((elem, i) => { 
                            contenidorVideo[i].addEventListener('mouseover',  myfunction1);
                            contenidorVideo[i].addEventListener('mouseout',   myfunction2);
                            }     );                   
                        }
                    });
                    }
                });

                });
            });
            //comprovacio de que no hi hagi cap video actiu quan cliques als elements del nav
            [...contenidorVideo].map((elem,j) => { 

                imgNav[j].addEventListener("click", () => 
                {
                [...contenidorVideo].map((elem,i) => { 
                    if (contenidorVideo[i].style.borderRadius === "0%"){
                        [...contenidorVideo].map((elem, i) => { 
                        if (contenidorVideo[i].style.borderRadius === "0%") {
                            contenidorVideo[i].style.transition="all 1s";

                        if (contenidorVideo[i].classList.contains("present")) {
                            contenidorVideo[i].style.top= valorsTop[i];
                            contenidorVideo[i].style.left=valorsLeft[i];
                        }
                        else {
                            contenidorVideo[i].style.top= valorsTop[i];
                            contenidorVideo[i].style.right=valorsLeft[i];
                        }
                            contenidorVideo[i].style.width="100px";
                            contenidorVideo[i].style.height="100px";
                            contenidorVideo[i].style.borderRadius="50%";
                            contenidorVideo[i].style.overflow="hidden";
                            contenidorVideo[i].style.position="absolute";
                            video[i].muted = true;

                            [...contenidorVideo].map((elem, i) => { 
                            contenidorVideo[i].addEventListener('mouseover',  myfunction1);
                            contenidorVideo[i].addEventListener('mouseout',   myfunction2);
                            }     );                   
                        }
                    });
                    }
                });

                });
            });

            //map de la colocació dels elements a la posicio de reproduccio al clicar els contenidors de video de la pista
            [...contenidorVideo].map((elem,j) => { 
               contenidorVideo[j].addEventListener('mouseover',  myfunction1);
               contenidorVideo[j].addEventListener('mouseout',  myfunction2);

                contenidorVideo[j].addEventListener("click", () => 
                    {
                        contenidorVideo[j].removeEventListener('mouseover', myfunction1);
                        contenidorVideo[j].removeEventListener('mouseout', myfunction2);
                        contenidorVideo[j].style.transition="all 1s";
                        contenidorVideo[j].style.zIndex="+1";
                        imatgeTancar.style.zIndex="+1";

                        if (contenidorVideo[j].classList.contains("present")) {
                            contenidorVideo[j].style.left="550px";
                            contenidorVideo[j].style.top="220px";
                        }
                        else {
                            contenidorVideo[j].style.right="600px";
                            contenidorVideo[j].style.top="220px";                            
                        }
                        contenidorVideo[j].style.width ="750px";
                        contenidorVideo[j].style.height ="600px";
                        contenidorVideo[j].style.borderRadius="0%";
                        contenidorVideo[j].style.overflow="hidden";
                        contenidorVideo[j].style.position="absolute";  
                    

                            


                        });

                    });
                //map per afegir addeventlistener de desmutejar elements i ensenyar el reproductor per els elements de video
            [...video].map((elem, i) => { 
                video[i].addEventListener('click', functionSpecial);

            });
                //map per afegir addeventlistener de desmutejar elements i ensenyar el reproductor per els elements de la pista

                [...imgNav].map((elem, i) => { 
                    imgNav[i].addEventListener('click', functionSpecial);
                });

                //mouseovers per els estils del nav
                [...est].map((elem, i) => { 
                    est[i].addEventListener('mouseover', myfunction3);
                    est[i].addEventListener('mouseout', myfunction4);
                    });
                //mouseovers per els estils del nav
                [...oest].map((elem, i) => { 
                    oest[i].addEventListener('mouseover', myfunction5);
                    oest[i].addEventListener('mouseout', myfunction6);
                    });
                //event listener per cada element de la animaciço dels hovers
                [...contenidorVideo].map((elem, i) => { 
                    var y = 0;
                    contenidorVideo[i].addEventListener('mouseover',  myfunction1);
                    contenidorVideo[i].addEventListener('mouseout',  myfunction2);
                //add event listener per les imatges del nav per la colocacio del reproductor
                    imgNav[i].addEventListener("click", () => 
                        {   

                        contenidorVideo[i].removeEventListener('mouseover', myfunction1);
                        contenidorVideo[i].removeEventListener('mouseout', myfunction2);
                        contenidorVideo[i].style.transition="all 1s";
                        contenidorVideo[i].style.zIndex="+1";
                        imatgeTancar.style.zIndex="+1";

                        if (contenidorVideo[i].classList.contains("present")) {
                            contenidorVideo[i].style.left="550px";
                            contenidorVideo[i].style.top="220px";
                        }
                        else {
                            contenidorVideo[i].style.right="600px";
                            contenidorVideo[i].style.top="220px";                            
                        }
                        contenidorVideo[i].style.width ="750px";
                        contenidorVideo[i].style.height ="600px";
                        contenidorVideo[i].style.borderRadius="0%";
                        contenidorVideo[i].style.overflow="hidden";
                        contenidorVideo[i].style.position="absolute";  
                        video[i].muted = false;
                        console.log("hola?");


                        });

                    });


                //addeventlistener del procés de tancar el reproductor per la creu
                imatgeTancar.addEventListener("click", () => {
                    [...contenidorVideo].map((elem, i) => { 
                        if (contenidorVideo[i].style.borderRadius === "0%") {
                            contenidorVideo[i].style.transition="all 1s";
                            reproductor.style.zIndex="-1";
                            imatgeTancar.style.zIndex="-1";

                        if (contenidorVideo[i].classList.contains("present")) {
                            contenidorVideo[i].style.top= valorsTop[i];
                            contenidorVideo[i].style.left=valorsLeft[i];
                        }
                        else {
                            contenidorVideo[i].style.top= valorsTop[i];
                            contenidorVideo[i].style.right=valorsLeft[i];
                        }
                            contenidorVideo[i].style.width="100px";
                            contenidorVideo[i].style.height="100px";
                            contenidorVideo[i].style.borderRadius="50%";
                            contenidorVideo[i].style.overflow="hidden";
                            contenidorVideo[i].style.position="absolute";    
                    [...contenidorVideo].map((elem, i) => { 
                            contenidorVideo[i].addEventListener('mouseover',  myfunction1);
                            contenidorVideo[i].addEventListener('mouseout',   myfunction2);
                            }     );                   
                        }
                    });
                });
                                
                //funcions per el hover (mouseover), this apuntant a l'element actiu
                 function myfunction1 () {
                        this.style.transition="none";
                        this.style.width="200px";
                        this.style.height="200px";
                        var x = window.getComputedStyle(this).getPropertyValue("top");
                        var y = window.getComputedStyle(this).getPropertyValue("left");
                        var z = window.getComputedStyle(this).getPropertyValue("right");

                        if (this.classList.contains("present")) {
                            this.style.top=parseInt(x)-50+"px";
                            this.style.left=parseInt(y)-50+"px";
                        }
                        else {
                            this.style.top=parseInt(x)-50+"px";
                            this.style.right=parseInt(z)-50+"px";
                        }
                    }
                    //funcions per el hover (mouseout), this apuntat a l'element actiu
                    function  myfunction2 () {
                        this.style.transition="none";
                        this.style.width="100px";
                        this.style.height="100px";
                        var x = window.getComputedStyle(this).getPropertyValue("top");
                        var y = window.getComputedStyle(this).getPropertyValue("left");
                        var z = window.getComputedStyle(this).getPropertyValue("right");

                        if (this.classList.contains("present")) {
                            this.style.top=parseInt(x)+50+"px";
                            this.style.left=parseInt(y)+50+"px";
                        }
                        else {
                            this.style.top=parseInt(x)+50+"px";
                            this.style.right=parseInt(z)+50+"px";

                        }
                    }
                    function myfunction3 () {
                        this.style.border="5px solid blue";

                    }
                    function myfunction4 () {
                        this.style.border="5px solid black";

                    }
                    function myfunction5 () {
                        this.style.border="5px solid red";

                    }
                    function myfunction6 () {
                        this.style.border="5px solid black";
                    }
                    function functionSpecial () {
                        reproductor.style.zIndex="+1";
                        this.muted=false;

                    }


    }




            