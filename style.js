let choiceid= document.getElementById("1").innerText;

let submit=document.querySelector("button");

//music

let play=document.getElementById('2');
function loser_music(){
    let audio= new Audio("lose.mp3");
    audio.play();
}

function winner_music(){
    let audio1= new Audio("win.mp3");
    audio1.play();
}
let g1;
let g2;
let g3;
let g4;
//variable 
let a=1;
while(a!=0){
    g1=Math.floor(Math.random() * 10);
    g2=Math.floor(Math.random() * 10);
    g3=Math.floor(Math.random() * 10);
    g4=Math.floor(Math.random() * 10);
    console.log("time");
    if(g1===g2 || g1===g3 || g1===g4 || g2===g3 || g2===g4 || g3===g4 ){
        a=1;
    }
    else{
        if(g1===0 || g2===0 || g3===0 || g4===0){
            a=1;
        }
        else{
            a=0;
        }
    }
}

document.getElementById("1").textContent=`Chances left =${choiceid}`;
console.log(g1);
console.log(g2);
console.log(g3);
console.log(g4);
let c1= document.getElementById("g11");
let c2= document.getElementById("g12");
let c3= document.getElementById("g13");
let c4= document.getElementById("g14");

//shifting block event
document.getElementById('n11').focus();


// if(tru==true){
//     tru=false;
//     document.getElementById("n11").focus();
//     addEventListener("keydown", () => {
//     document.getElementById("n11").focus();
//     addEventListener("keydown", () => {
//         document.getElementById("n12").focus();
//         addEventListener("keydown", () => {
//             document.getElementById("n13").focus();
//             addEventListener("keydown", () => {
//                 document.getElementById("n14").focus();
//                 addEventListener("keydown", () => {
//                     document.getElementById("2").focus();
//                 });
//             });
//         });

//     });
// });

// }


submit.addEventListener("click" , ()=>{
let n1= document.getElementById("n11").value;
let n2= document.getElementById("n12").value;
let n3= document.getElementById("n13").value;
let n4= document.getElementById("n14").value;
console.log("..."); 
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
    


//checking winner
if(n1==g1 && n2==g2 && n3==g3 && n4==g4){
    document.getElementById("1").textContent="YOU WON";
    document.getElementById("title1").textContent="YES , YOU GUESSED THE NUMBER";
    winner_music();
}


//check for chances
    choiceid=choiceid-1;

    if(choiceid==0){
        console.log(choiceid);
        console.log("GAME OVER");
        document.getElementById("1").textContent="GAME OVER";
        document.getElementById("title1").textContent="NO, YOU CANNOT";
        document.getElementById("2").classList.add("lose");
        submit.disabled=true;
        loser_music();
            
    }   
    else{
        document.getElementById("1").textContent=`Chances left =${choiceid}`;
        document.getElementById("n11").value=null;
        document.getElementById("n12").value=null;
        document.getElementById("n13").value=null;
        document.getElementById("n14").value=null;
        
        //shifting block event

        // if(tru==false){
        //     document.getElementById("n11").focus();
        //     addEventListener("keydown", () => {
        //     document.getElementById("n11").focus();
        //     addEventListener("keydown", () => {
        //         document.getElementById("n12").focus();
        //         addEventListener("keydown", () => {
        //             document.getElementById("n13").focus();
        //             addEventListener("keydown", () => {
        //                 document.getElementById("n14").focus();
        //                 addEventListener("keydown", () => {
        //                     document.getElementById("2").focus();
        //                 });
        //             });
        //         });

        //     });
        // });

        // }



    }

    //checking all colors
    
    if(n1==g1){
        c1.classList.add("w");
        c1.classList.remove("g");
        c1.classList.remove("wr");
        
    }
    else if(n1==""){
        c1.classList.remove("w");
        c1.classList.remove("g");
        c1.classList.add("wr");
    }
    else if(n1==g2 || n1==g3 || n1==g4){
        c1.classList.remove("w");
        c1.classList.add("g");
        c1.classList.remove("wr");
    }
    
    else{
        c1.classList.remove("w");
        c1.classList.remove("g");
        c1.classList.add("wr");
    }
    

    if(n2==g2){
        c2.classList.add("w");
        c2.classList.remove("g");
        c2.classList.remove("wr");
    }
    else if(n2==""){
        c2.classList.remove("w");
        c2.classList.remove("g");
        c2.classList.add("wr");
    }
    else if(n2==g1 || n2==g3 || n2==g4){
        c2.classList.remove("w");
        c2.classList.add("g");
        c2.classList.remove("wr");
    }
    else if(n2==""){
        c2.classList.remove("w");
        c2.classList.remove("g");
        c2.classList.add("wr");
    }
    else{
        c2.classList.remove("w");
        c2.classList.remove("g");
        c2.classList.add("wr");
    }

    if(n3==g3){
        c3.classList.add("w");
        c3.classList.remove("g");
        c3.classList.remove("wr");
    }
    else if(n3==""){
        c3.classList.remove("w");
        c3.classList.remove("g");
        c3.classList.add("wr");
    }
    else if(n3==g2 || n3==g1 || n3==g4){
        c3.classList.remove("w");
        c3.classList.add("g");
        c3.classList.remove("wr");
    }
    
    else{
        c3.classList.remove("w");
        c3.classList.remove("g");
        c3.classList.add("wr");
    }

    if(n4==g4){
        c4.classList.add("w");
        c4.classList.remove("g");
        c4.classList.remove("wr");
    }
    else if(n4==""){
        c4.classList.remove("w");
        c4.classList.remove("g");
        c4.classList.add("wr");
    }
    else if(n4==g2 || n4==g3 || n4==g1){
        c4.classList.remove("w");
        c4.classList.add("g");
        c4.classList.remove("wr");
    }
    
    else{
        c4.classList.remove("w");
        c4.classList.remove("g");
        c4.classList.add("wr");
    }

    c1.innerText=n1;
    c2.innerText=n2;
    c3.innerText=n3;
    c4.innerText=n4;

    //reset value after submit


    
})


