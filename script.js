const mainPage = document.getElementById("main-button");
const shopPage = document.getElementById("shop-button");
const aboutPage = document.getElementById("about-button");
const productPage = document.getElementsByClassName("container")

function loadXMLDoc(url) {
    var xmlhttp = new XMLHttpRequest();
 
    xmlhttp.onload = function() {
           if (xmlhttp.status == 200) {
               document.querySelector("#all").innerHTML = xmlhttp.responseText;
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
    };

    xmlhttp.open("GET", url);
    xmlhttp.send();
}

shopPage.addEventListener('click', function(){
    loadXMLDoc("sklep.html")
})
mainPage.addEventListener('click', function(){
    loadXMLDoc("index2.html")
})
aboutPage.addEventListener('click', function(){
    loadXMLDoc("o_nas.html")
})
productPage[0].addEventListener('click', function(){
    loadXMLDoc("produkt.html")
})

