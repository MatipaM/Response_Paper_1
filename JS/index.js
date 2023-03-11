let main = document.getElementById("main");

let section1 = document.createElement("section");

main.append(section1);

let h1 = document.createElement("h1");
section1.append(h1);

h1.innerHTML =  "Future Direction for my Game Design Portfolio.";

let h3b = document.createElement("h3");
let h3c = document.createElement("h3");
let h2a = document.createElement("h2");
let p1 = document.createElement("p");
let h2b = document.createElement("h2");
let p2 = document.createElement("p");

let h3a = document.createElement("h3")

h2a.innerHTML = "Week 1: Directing Games";

p1.innerHTML = "This week, for my reponse paper, I wanted to detail the future direction of my portfolio. I aim to challenge myself to create a new component of the same game in order to challenge myself to become a better programmer and designer. In order to create one cohesive project, my plan is to build a dynamic game world. One where, each topic expanded upon in class, can be seen in the form of a mini game/expansion of the avatar's abilities in the game world. The game will be single player, they will be placed in a virual world, in which they can explore the different spaces provided. Each space will provide different functionality related to the different lessons provided on Tuesday lectures. The mini-games/mechanics involved with the game will be based on future lectures.";

h3a.innerHTML = "Themes: cozy, pixel-art, dynamic game world"; 

h3c.innerHTML = "Future Improvements" 
h3b.innerHTML = "Other game inspitations: (detail what you like about each game)" 



//Future improvements - Ideally, for the final submission I would like to convert this response/website into a webapplication, i.e. kind of like how kickstarts have books with supporting artworks and how the game is made, but instead an application as it is more accessible. The duality of a webapplication allows users to interact with the program, in a way which is most convenient for them.


h2b.innerHTML = "Week 2: Architecture and Space";

p2.innerHTML = "Write more about...";

for(let i = 0; i<= 3; i++)
{
    let section = document.createElement("section");
    main.append(section);

    let aside = document.createElement("aside");

        switch(i)
    {
        case(0): 
            
            break;
        case(1): 
            section.append(h2a);
            section.append(p1);
            section.append(h3a);
            section.append(h3b);
            section.append(h2b);
            section.append(p2);

            break;
        case(2): 

            for(let j = 0; j<= 3; j++)
            {
                aside = document.createElement("aside");
                section.append(aside);

                let img = document.createElement("img");
                // let pImg = document.createElement("p");
                let title  = document.createElement("a");

                let csTextSection = document.createElement("section"); //cs is case study
               

                let csProsHeading = document.createElement("h4");
                csProsHeading.innerText = "Positives :";
                // let csPros = document.createElement("p");
                let csConsHeading = document.createElement("h4");
                csConsHeading.innerText = "Negatives :";
                // let csCons = document.createElement("p");
                let csLink = document.createElement("a");

                let positivePointsArray = {};
                let negativePointsArray;

                let p1;
                let p2;
                let n1;
                let n2;

                switch(j)
                {
                    case 0:
                        gameName = "ChefRPG";
                        source = "../Images/ChefRPG.png";

                        p1 = document.createElement("li")
                        p1.innerText = "the 2-d pixel art is visually appealing";

                        p2 = document.createElement("li")
                        p2.innerText = "The developer has released youtube videos, detailing how he created each section of the game";

                        positivePointsArray = [p1, p2];

                        n1 = document.createElement("li")
                        n1.innerText = "the games has not been released yet";

                        negativePointsArray = [n1];

                        title.href = "https://www.kickstarter.com/projects/chefrpg/chef-rpg";
                        // csLink.innerText = "Chef RPG";
                    

                        break;
                    case 1:
                        gameName = "Stardew Valley";
                        source = "../Images/StardewValley.png";

                        p1 = document.createElement("li")
                        p1.innerText = "the 2-d pixel art is visually appealing";

                        p2 = document.createElement("li")
                        p2.innerText = "The developer has released youtube videos, detailing how he created each section of the game";

                        positivePointsArray = [p1, p2];

                        n1 = document.createElement("li")
                        n1.innerText = "the games has not been released yet";

                        negativePointsArray = [n1];

                        title.href = "https://www.stardewvalley.net";

    
                        break;
                    case 2:
                        gameName = "Animal Crossing";
                        source = "../Images/AnimalCrossing.jpg";

                        p1 = document.createElement("li")
                        p1.innerText = "the 2-d pixel art is visually appealing";

                        p2 = document.createElement("li")
                        p2.innerText = "The developer has released youtube videos, detailing how he created each section of the game";

                        positivePointsArray = [p1, p2];

                        n1 = document.createElement("li")
                        n1.innerText = "the games has not been released yet";

                        negativePointsArray = [n1];

                        title.href = "https://animal-crossing.com";

                   
                        break;
                    case 3:
                        gameName = "Oxenfree";
                        source = "../Images/Oxenfree.jpg";

                        p1 = document.createElement("li")
                        p1.innerText = "the 2-d pixel art is visually appealing";

                        p2 = document.createElement("li")
                        p2.innerText = "The developer has released youtube videos, detailing how he created each section of the game";

                        positivePointsArray = [p1, p2];

                        n1 = document.createElement("li")
                        n1.innerText = "the games has not been released yet";

                        negativePointsArray = [n1];

                        title.href = "https://store.steampowered.com/app/388880/Oxenfree/";

                  
                        break;
                }


                title.innerText = gameName;
                img.src = source;
                csTextSection.append(csProsHeading);

                for(let k = 0; k<positivePointsArray.length; k++)
                {
                    csTextSection.append(positivePointsArray[k]);
                }
                
                csTextSection.append(csConsHeading);

                for(let k = 0; k<positivePointsArray.length; k++)
                {
                    csTextSection.append(negativePointsArray[k]);
                }
                
                csTextSection.append(csLink);

                aside.append(title);
                aside.append(img);
                aside.append(csTextSection);
                aside.append(csLink);

            }

            section.classList.add("grid");

            break;
        case(3): 

            // aside = aside4;
            // title = title4;
            // pImg = pImg4;

            caseStudyText = "write pros and cons of ChefRPG";

            source = "/Images/Oxenfree.jpg";
            break;
            
    }

};

