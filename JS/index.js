let main = document.getElementById("main");

let section1 = document.createElement("section");
let article1 = document.createElement("article1");

let article2 = document.createElement("article");

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

h2a.innerHTML = "Directing Games (Theatre)";

p1.innerHTML = "This week, for my reponse paper, I wanted to detail the future direction of my portfolio. I aim to challenge myself to create a new component of the same game in order to challenge myself to become a better programmer and designer. In order to create one cohesive project, my plan is to build a dynamic game world. One where, each topic expanded upon in class, can be seen in the form of a mini game/expansion of the avatar's abilities in the game world. The game will be single player, they will be placed in a virual world, in which they can explore the different spaces provided. Each space will provide different functionality related to the different lessons provided on Tuesday lectures. The mini-games/mechanics involved with the game will be based on future lectures.";

h3a.innerHTML = "Themes: cozy, pixel-art, dynamic game world"; 

h3c.innerHTML = "Future Improvements" 
h3b.innerHTML = "Other game inspitations: " 



//Future improvements - Ideally, for the final submission I would like to convert this response/website into a webapplication, i.e. kind of like how kickstarts have books with supporting artworks and how the game is made, but instead an application as it is more accessible. The duality of a webapplication allows users to interact with the program, in a way which is most convenient for them.


h2b.innerHTML = "Architecture and Space";

p2.innerHTML = "This week, I focused more on the smaller details as opposed to large factors such as gameplay and mechanics. I thought it would be appropriate to use this week to determine the visual aesthetic of my game, as well as use what I learnt this week about spaces, to recreate a space, which would allow player interaction to be expanded upon. Within this build, I created a town which is divided by a road, on one side of the two are housing and shops/buildings for residents and opposite the road is a forest. I wanted the road to signal a clear parting between a calm forest and busy city life for residents. Upon further iteration in upcoming weeks. I plan to add in mini-games which the player can interact with when they enter each building. My aim is also to create a cohesive world where each minigame's outcome will contribute to the resources of the world in general.";

// let W2img1 = document.createElement("img"); 
let p2b = document.createElement("p");
p2b = "In terms of spacing for the player, I thought it would be more apropriate for the player to always have a view of the world as a whole as opposed to a zoomed in view as the world is not that large. I also wanted to avoid the iritation/complication of player's having to find certain buildings/locations in order to complete certain tasks.";

let imageComparison = document.createElement("section");
let W2comparison1 = document.createElement("img"); 
let W2comparison2 = document.createElement("img"); 
let W2comparison1Heading = document.createElement("h3"); 
let W2comparison2Heading = document.createElement("h3");


for(let i=0; i<=2; i++)
{
    let heading = document.createElement("h2");
    let pArray =[];

    switch(i)
    {
        case 0:
            heading.innerText = "Economy";
            let pb1 = "This lecture spoke about the ‘Economic Man’. The ‘Economic Man’ is the ideal human being on which economic models are based. One specific methodology used to create economic models, is Utilitarianism, this concept was created by Jeremy Bentham. Bentham used the felicific calculus to calculate the degree of pleasure an action could produce. In response to this, I made balancing the economy against ‘sou’ happiness, the main mechanic of my game. ";
            let pb2 = "The player is in charge of ensuring the ‘soul’s’ which occupy their city are satisfied and are as happy as possible. As a result, the player has a volume of resources which they are in charge of managing. Each resource affects the souls’ happiness differently. It becomes the player’s prerogative to find how to best manage the soul’s happiness against the cost of providing the services which keep them satisfied. Bentham’s greatest happiness principle stated that the goal of human decisions, should be to maximize happiness for the largest number of people. In my game the happiness of all the soul’s is accumulated and then averaged, to emphasize that the player loses when the souls at large are unhappy as opposed to when the least happy soul is completely depressed. My game takes a macroeconomic perspective on this concept, as happiness is averaged, and game statistics are not provided in any sort of individual capacity and only in specific groupings of souls.";
            pArray.push(pb1);
            pArray.push(pb2);
            break;
        case 1:
            heading.innerText = "Neuropsychology";
            let pc1 = "I found this lecture, the most challenging one to respond to, as the content spoken about in the lecture was very specific. I instead created a wholistic representation of the concepts and case studies brought to us in class, into my game. The game I built is largely a resource management game, in which the player oversees the happiness of a group of souls. No soul can physically get hurt in the game (as you will see, when they are repeatedly run over by cars when randomly crossing the street), the mechanics of the game are largely concerned with the soul’s mental health. Abusing the soul’s via providing them with inadequate meals and forcing them to work all day, reduces the happiness of the souls. However, the challenge of the game, mimics that of real life, in that, the soul’s work to produce money which in turn is used to create food. However, if soul’s get too depressed, they become hospitalized, which in turn leaves the soul’s unable to work, and costs the economy more money. It is a vicious cycle, in which soul’s need to work to afford the services which make them happy, but working makes them unhappy. Depressed souls are unable to work and are hospitalized until they recover from their depression. Resources need to be dispersed in terms of doctors, which only cost the system money. The player must struggle to balance caring for their soul’s using the least amount of money possible.";
            pArray.push(pc1);
            break;
            
    }
    article1.append(heading);
    
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
                        p2.innerText = "The developer has released youtube videos, detailing how he created each section of the game, includind detailed videos on how the assets where created and high level overview of their code structures.";

                        positivePointsArray = [p1, p2];

                        n1 = document.createElement("li")
                        n1.innerText = "The game has not been released yet, therefore cannot comment on mechanics";

                        negativePointsArray = [n1];

                        title.href = "https://www.kickstarter.com/projects/chefrpg/chef-rpg";
                        // csLink.innerText = "Chef RPG";
                    

                        break;
                    case 1:
                        gameName = "Stardew Valley";
                        source = "Images/StardewValley.png";

                        p1 = document.createElement("li")
                        p1.innerText = "visually aesthtic pixel art";

                        p2 = document.createElement("li")
                        p2.innerText = "Lots of gameplay content for player to engage with";

                        positivePointsArray = [p1, p2];

                        n1 = document.createElement("li")
                        n1.innerText = "Island given to user at beginning of gameplay is large and not well labelled, it therefore becomes difficult to find places on map which are not labelled. ";

                        n2 = document.createElement("li")
                        n2.innerText = "Overwhelming for beginner. I had to watch a lot of playthroughs to figure out how to complete initial tasks.";

                        negativePointsArray = [n1, n2];

                        title.href = "https://www.stardewvalley.net";

    
                        break;
                    case 2:
                        gameName = "Animal Crossing";
                        source = "Images/AnimalCrossing.jpg";

                        p1 = document.createElement("li")
                        p1.innerText = "Completely customizable island. Player can create custom patterns which can be placed on almost any ground material (apart from the beach).";

                        p2 = document.createElement("li")
                        p2.innerText = "Player can customize their avatar’s outfits and appearance.";

                        positivePointsArray = [p1, p2];

                        n1 = document.createElement("li")
                        n1.innerText = "Gameplay not as extensive. Gameplay can become boring when once player has achieved a five-star island and has no more tasks left.";

                        negativePointsArray = [n1];

                        title.href = "https://animal-crossing.com";

                   
                        break;
                    case 3:
                        gameName = "Sims 4";
                        source = "Images/Sims4.png";

                        p1 = document.createElement("li")
                        p1.innerText = "Watching your sim/family grow.";

                        p2 = document.createElement("li")
                        p2.innerText = "Whims, sims suggesting activities which they may enjoy makes them see more real.";

                        positivePointsArray = [p1, p2];

                        n1 = document.createElement("li")
                        n1.innerText = "If you are playing one sim in a world, another sim which you own will not age appropriately without your gameplay. E.g., if you leave a young adult sim in a university residence, they will age in that residence and die there, without completing their degree or starting the career, they have spent weeks studying for.";

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

main.append(article2);
main.append(h2b);



h2b.classList.add("ArchitectureHeading");
main.append(p2);
main.append(p2b);
main.append(imageComparison);
main.append(article1);




let h5a = document.createElement("h2");
h5a.innerText = "Project Management (24 Bit - Game Production (&QA)";
let h5b = document.createElement("h3");
h5b.innerText = "Timeline";

let section2a = document.createElement("section");
let section2b = document.createElement("section");
let section2Grid = document.createElement("section");
section2Grid.classList.add("timelineGrid");


for(let i=0; i<=6; i++)
{
    let h5c = document.createElement("h4");

    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");

    let liArray=[]

    switch(i)
    {
        case 0:
            h5c.innerText = "Week 1";
            li1.innerText="Compile reference games.";
            li2.innerText="highlight aspects of the game which I think contributes to its success. ";
            li3.innerText ="highlight aspects of the game which I think could have been done better or differently. ";
            liArray = [li1, li2, li3];
            break;
        case 1:
            h5c.innerText = "Week 2";
            li1.innerText="Setup basic architecture and spacing for my game.";
            li2.innerText="Determine areas where NPCs and players could/could not walk. ";
            li3.innerText ="Insert final assets for architecture layout (excluding UI).";
            li4.innerText = "reference assets on website.";
            liArray = [li1, li2, li3, li4];
            break;
        case 2:
            h5c.innerText = "Week 3";
            li1.innerText="Code movement of cars, NPC’s and Player. ";
            li2.innerText="Code panel which allows player to choose their own character. ";
            li3.innerText="";
            liArray = [li1, li2, li3];
            break;
        case 3:
            h5c.innerText = "Week 4";
            li1.innerText="Code resource-management mechanics. ";
            li2.innerText="Work on balance between economy with neuroscience lecture response mechanics in game.";
            li3.innerText="";
            liArray = [li1, li2];
        case 4:
            h5c.innerText = "Week 5";
            li1.innerText="Tweak balance of mechanics. (Currently, the game is more difficulty to lose than ‘win’ therefore there is no win state. Player’s goal is to last as long as possible).";
            li2.innerText="Playtest balance.";
            li3.innerText="";
            liArray = [li1, li2];
            break;
        case 5:
            h5c.innerText = "Week 6";
            li1.innerText="Final Playtesting stage";
            li2.innerText="";
            li3.innerText="";
            liArray = [li1];
            break;   
    }

    
   
    section2a.append(h5c);

    for(let a=0; a<=liArray.length; a++)
    {
        section2a.append(liArray[a]);
    }

    section2Grid.append(section2a);
}

let pD = document.createElement("p");
p1.innerText = "This was the initial timeline for my game. However, even though I did end up working on mechanics in the order as seen in my timeline, they were some weeks where I did not work at all, and other weeks where I did more work than others. Because I was team of one, I did not use any accountability techniques such as scrum and I instead used Notion to create a list of tasks, in order of priority. I prioritized tasks which were essential for gameplay, so I could begin tweaking balance as soon as possible. I then prioritized refining the aesthetics of the game last. I did this, so that in the worst-case scenario, I would be able to hand in a not-so aesthetically pleasing game which had working mechanics. ";



article2.append(h5a);
article2.append(h5b);
article2.append(section2a);
article2.append(pD);