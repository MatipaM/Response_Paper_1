//NAV BAR
const navMenu = ["index.html", "References.html"];
// let navArea = document.getElementById('nav');
let header = document.getElementById("header");
header.classList.add("h-card");

let footer = document.getElementById("footer");
footer.classList.add("h-card");

let  nav = document.createElement("nav");
header.append(nav);
nav.classList.add("h-entry");
nav.classList.add("#nav");

let ul = document.createElement("ul");
nav.append(ul);

console.log("file is working");

// let navButtons = header.getElementsByTagName('a');
// let icons = navArea.getElementsByTagName('i');

for(let i = 0; i < navMenu.length; i++)
{
    let li = document.createElement("li");
    let a = document.createElement("a");
    let iLink =  document.createElement("i");

    ul.append(li);
    li.append(a);
    a.append(iLink);

    a.classList.add("u-url");
    iLink.classList.add("fa-solid");

    let className;
    let innerText;

    switch(i)
    {
        case 0:
            className = "fa-house-chimney";
            innerText = "Home";
            break;
        case 1:
            className = "fa-blog";
            innerText = "References";
            break;
    }

    iLink.classList.add(className);
    iLink.innerHTML = innerText;

    a.onclick = function()
    {
        location.href = navMenu[i]
    }
}

window.onresize = function(){ location.reload(); }