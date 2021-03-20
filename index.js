// //ajax sysntax
// var xhttp=new XMLHttpRequest();

// //requesting from the server
// xhttp.open("GET","bazu.html",true);
// xhttp.send();
// //ajax server response
// xhttp.responseText;
// xhttp.responseXML;
// const sub=document.getElementById("sub");
// sub.addEventListener('click',mydoc());
const mydoc = ()=> {
    const xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
     if(readystate == 4 && status == 200){
         document.getElementById('demo').innerHTML=xhttp.responseText;
     }
    }
    xhttp.open("POST","name.txt",true);
    xhttp.send();
};


