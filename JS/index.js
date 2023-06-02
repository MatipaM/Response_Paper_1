let main = document.getElementById("main");

let section1 = document.createElement("section");
let article1 = document.createElement("article1");

main.append(section1);
main.append(article1);

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

p2.innerHTML = "This week, I focused more on the smaller details as opposed to large factors such as gameplay and mechanics. I thought it would be approprtiate to use this week to determine the visual aesthetic of my game, as well as use what I learn this week about spaces, to recreate a space, which player interaction could be expanded upon. Within this build, I created a town which is divided by a road, on one side of the two are housing and shops/buildings for residents and opposite the road is a forest. I wanted the road to signal a clear parting between a calm forest and busy city life for residents. Upon further iteration in upcoming weeks. I plan to add in mini-games which the player can interact with when they enter each building. My aim is also to create a cohesive world where each minigame's outcome will contribute to the resources of the world in general.";

// let W2img1 = document.createElement("img"); 
let p2b = document.createElement("p");
p2b = "In terms of spacing for the player, I thought it would be more apropriate for the player to always have a view of the world as a whole as opposed to a zoomed in view as the world is not that large. I also wanted to avoid the iritation/complication of player's having to find certain buildings/locations in order to complete certain tasks.";

let imageComparison = document.createElement("section");
let W2comparison1 = document.createElement("img"); 
let W2comparison2 = document.createElement("img"); 
let W2comparison1Heading = document.createElement("h3"); 
let W2comparison2Heading = document.createElement("h3");


// main.append(section2);

for(let i=0; i<=3; i++)
{
    let heading = document.createElement("h2");
    let subHeading=document.createElement("h3");
    let pArray =[];

    switch(i)
    {
        case 0:
            heading.innerText = "Neuroscience";
            subHeading.innerText = "";
            let pa1 = "p1";
            pArray.push(pa1);
            break;
        case 1:
            heading.innerText = "Project Management";
            subHeading.innerText = "";
            let pb2 = "p1";
            pArray.push(pb2);
            break;
        case 2:
            heading.innerText = "Economy";
            subHeading.innerText = "";
            let pc3 = "p1";
            pArray.push(pc3);
            break;
            
    }

    article1.append(heading);
    article1.append(subHeading);
    
    for(let a=0; a<pArray.length; a++)
    {
        article1.append(pArray[a]);
    }
}

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
           
            

            imageComparison.classList.add("imgCompareGrid");
            imageComparison.append(W2comparison1Heading);
            imageComparison.append(W2comparison2Heading);
            imageComparison.append(W2comparison1);
            imageComparison.append(W2comparison2);

            W2comparison1Heading.innerText = "Close-Up";
            W2comparison2Heading.innerText = "Long Shot";

            W2comparison1.src = "Images/CloseUpView.png";
            W2comparison2.src = "Images/LongShotView.png";

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
                        source = "Images/ChefRPG.png";

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
                        source = "Images/StardewValley.png";

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
                        source = "Images/AnimalCrossing.jpg";

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
                        gameName = "Sims 4";
                        source = "Images/Sims4.png";

                        p1 = document.createElement("li")
                        p1.innerText = "a world where players can interact with multiple spaces and engage with other characters, including NPCs.";

                        p2 = document.createElement("li")
                        // p2.innerText = "AI system for NPCs not that good. As soon as player switches to another character, original character is stuck in whatever residence/job level they were left at.";

                        positivePointsArray = [p1, p2];

                        n1 = document.createElement("li")
                        n1.innerText = "AI system for NPCs not that good. As soon as player switches to another character, original character is stuck in whatever residence/job level they were left at.";

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

main.append(h2b);
main.append(p2);
main.append(p2b);
main.append(imageComparison);
main.append(article1);

