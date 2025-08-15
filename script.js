let btn = document.getElementsByTagName("button");
let cal = document.getElementById("p");
let str = ""; let a=0; 
let callsum =0;
let callsub =0;
let callmut =0;
let calldiv =0;
btn[0].onclick = function(){
    cal.innerText = cal.innerText + "1";
    str += "1";
};
btn[1].onclick = function(){
    cal.innerText += "2";
    str += "2";
};
btn[2].onclick = function(){
    cal.innerText += "3";
    str += "3";
};
btn[4].onclick = function(){
    cal.innerText += "4";
    str += "4";
};
btn[3].onclick = function(){
    cal.innerText += "+";
    callsum = 1;
   if(a== 0)
    a = parseInt(str);
   else if(str != "")
    a += parseInt(str);
    str = "";
};
btn[5].onclick = function(){
    cal.innerText += "5";
    str += "5";
};
btn[6].onclick = function(){
    cal.innerText += "6";
    str += "6";
};
btn[7].onclick = function(){
    cal.innerText += "-";
    callsub = 1;
    if(a== 0)
    a = parseInt(str);
   else if(str != "")
    a = a - parseInt(str);
    str = "";
}
btn[8].onclick = function(){
    cal.innerText += "7";
    str += "7";
}
btn[9].onclick = function(){
    cal.innerText += "8";
    str += "8";
}
btn[10].onclick = function(){
    cal.innerText += "9";
    str += "9";
}
btn[11].onclick = function(){
    cal.innerText += "x";
    callmut = 1;
    if(a== 0)
    a = parseInt(str);
   else if(str != "")
    a *= parseInt(str);
    str = "";
}
btn[12].onclick = function(){
    cal.innerText += "0";
    str += "0";
}
btn[13].onclick = function(){
    cal.innerText = "";
    str = "";
    a = 0;
}
btn[14].onclick = function(){
    cal.innerText += "/";
     calldiv = 1;
    if(a== 0)
    a = parseInt(str);
   else if(str != "")
    a /= parseInt(str);
    str = "";
}
btn[15].onclick = function(){
    if(callsum != 0){
    cal.innerText = a + parseInt(str);
    callsum =0;
    }
    if(callsub != 0){
        cal.innerText = a - parseInt(str);
        callsub =0;
    }
    if(callmut !=0){
        cal.innerText = a * parseInt(str);
        callmut =0;
    }
    if(calldiv !=0){
        cal.innerText = a/ parseInt(str);
        calldiv =0;
    }
     a = parseInt(cal.innerText);
    str = "";
}