document.body.style.cssText = "margin: 0px; background-color: rgb(236,236,236);font-family: Tahoma, Ariel;"
let myHeader = document.createElement("header");
let logoDiv = document.createElement("div");
let logoText = document.createTextNode("Elzero");
let ulMenu = document.createElement("ul");
let contentDiv = document.createElement("div");
let footerDiv = document.createElement("div");
let footerDivText = document.createTextNode("Copyright 2022");


myHeader.className = "website-head";
myHeader.style.cssText = "background-color:#fff; display: flex; padding: 20px; justify-conent: space-between;align-items:center;";


logoDiv.className = "logo";
logoDiv.setAttribute("title", "Website Logo");
logoDiv.style.cssText = "font-weight: bold; color: rgb(35,169,110); font-size: 26px;";
logoDiv.appendChild(logoText);
myHeader.appendChild(logoDiv);

ulMenu.className = "menu";
ulMenu.style.cssText = "padding: 0px; margin:0px; display: flex; list-style: none; float:right;";
let ilMenuList = ["Home", "About", "Service", "Contact"];
for (let i=0; i<4; i++){
    let liMenu = document.createElement("li");
    let liMenuText = document.createTextNode(ilMenuList[i]);
    liMenu.style.cssText = "margin: 5px; padding: 5px;"

    liMenu.appendChild(liMenuText);
    ulMenu.appendChild(liMenu);
    myHeader.appendChild(ulMenu);
    
}

contentDiv.className = "content";
contentDiv.style.cssText = "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;";

for (let i=1; i<=15; i++){
    let productDiv = document.createElement("div");
    let productSpan = document.createElement("span");
    let productSpanNumberText = document.createTextNode(`${i}`);
    let productDivText = document.createTextNode("Product");

    productDiv.className = `product ${i}`;
    productDiv.style.cssText = "padding: 20px; background-color: rgb(255,255,255); border: 1px solid rgb(221,221,221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136,136,136); border-radius: 6px;";
    productSpan.style.cssText = "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px;";
    
    productSpan.appendChild(productSpanNumberText);
    productDiv.appendChild(productSpan);
    productDiv.appendChild(productDivText);
    contentDiv.appendChild(productDiv);
}   

footerDiv.className = "footer";
footerDiv.style.cssText = "background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
footerDiv.appendChild(footerDivText);

document.body.appendChild(myHeader);
document.body.appendChild(contentDiv);
document.body.appendChild(footerDiv);



