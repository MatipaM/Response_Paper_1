let main = document.getElementById("main");

let ReferenceText = ["Premium vector: Set of pixelated speech bubbles with messages (2016) Freepik. Available at: https://www.freepik.com/premium-vector/set-pixelated-speech-bubbles-with-messages_948565.htm (Accessed: March 19, 2023). ",
"R/pixelart - [oc][tutorial] pixelart brikwork tutorial (no date) reddit. Available at: https://www.reddit.com/r/PixelArt/comments/82odqp/octutorial_pixelart_brikwork_tutorial/ (Accessed: March 19, 2023). ",
"Pixel art - page 2 (no date) polycount. Available at: https://polycount.com/discussion/120427/pixel-art/p2 (Accessed: March 19, 2023). ",
"Fonts, logos &amp; icons (no date) GraphicRiver. Available at: https://graphicriver.net/ (Accessed: March 19, 2023). ",
"Pin by Coco Mugg on pixel art: Pixel art games, pixel art tutorial, pixel art design (2023) Pinterest. Available at: https://za.pinterest.com/pin/902127369097629041/ (Accessed: March 19, 2023). ",
"(no date) Twitter. Twitter. Available at: https://twitter.com/saint11 (Accessed: March 19, 2023). ",
"Yogurt (no date) Portraits, Pixel Art Character. Available at: https://pixeljoint.com/pixelart/121399.htm (Accessed: March 19, 2023). ",
"Balamoot (no date) Set of carz 2.0, Pixel Art Character. Available at: https://pixeljoint.com/pixelart/47592.htm (Accessed: March 19, 2023). ",
"Stardew Valley - tilesets - pelican town (fall) (no date) The Spriter's Resource. Available at: https://www.spriters-resource.com/fullview/88626/ (Accessed: March 19, 2023). ",
"Tileset VER.3 [free*] by Magiscarf on DeviantArt (no date) by Magiscarf on DeviantArt. Available at: https://www.deviantart.com/magiscarf/art/Tileset-ver-3-Free-690477146 (Accessed: March 19, 2023). ",
"Bftd (no date) Green cave float, Pixel Art Character. Available at: https://pixeljoint.com/pixelart/101653.htm (Accessed: 01 June 2023). ",
"Feature time! #4 today’s post comes early because around noon (Pacific Time, my usual posting time), I’ll be ...: Cool pixel art, Pixel Art Games, pixel art tutorial (2023) Pinterest. Available at: https://za.pinterest.com/pin/902127369099815856/ (Accessed: 01 June 2023). ",
"(No date) PNG images | 100 000+ free PNG images. Available at: http://www.pngimg.com/ (Accessed: 01 June 2023). "];

let imageSources = ["SpeechBubble.PNG", "Path.jpeg", "Tree.png", "Road.PNG", "TrafficLights.PNG", "NPCs.jpeg", "Characters.PNG", "Vehicles.PNG", "Buildings.png", "Environment.PNG", "CityStart.gif", "Trees.jpeg", "Shop.jpeg"];

let section = document.createElement("section");
main.append(section);

let h1 = document.createElement("h1");
h1.innerText = "References";
main.append(h1);

section.classList.add("ReferenceGrid");

for(let i=0; i< ReferenceText.length; i++)
{
    let img = document.createElement("img");
    let text = document.createElement("p");
    section.append(img);
    section.append(text);

    let sourcePrefix = "Images/";

    text.innerText = ReferenceText[i];
    img.src=sourcePrefix+ imageSources[i];
}