/*
Trac nghiem:
1 B
2 A
3 A 
4 A
5 D
6 A
7 A
8 A
9 B
10 C
*/

let i = 1
function startMe1(){

const clock1Second = setInterval(secondClock, 1000)
function secondClock(){
    document.getElementById("clock-1-second").innerHTML = i
    i++
    
    
    if(i>59){
        i = 0
    }
    
    
    }

}
let j = 1
function startMe2(){

const clock1Second = setInterval(secondClock, 1000)
function secondClock(){
    document.getElementById("clock-2-second").innerHTML = j
    j++
    
    
    if(j>59){
        j = 0
    }
    
    
    }

}
function stopMe2(){
    document.getElementById("clock-2-second") = 0
}




// }
    
