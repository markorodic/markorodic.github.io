var data = [
    { name: "fabulouskitten", image: "./img/1 (1).jpg", comment: "Wow is this the beginning? It just jumps straight into it!" },
    { name: "stomper", image: "./img/1.jpg", comment: "Haha see how Donald runs! I can tell this is going to be good" },
    { name: "daniel72", image: "./img/3.jpg", comment: "World Star! Don't say that!" },
    { name: "junglejess", image: "./img/6 (1).jpg", comment: "Darius is hilarious but I believe that's also kinda scratching the surface of what he's there for." },
    { name: "silvaboi", image: "./img/2.jpg", comment: "This kind of overblown fight is common in the world of our protagonists" },
    { name: "benjib", image: "./img/5.jpg", comment: "I get INSANE deja vu like that too!" },
    { name: "craig", image: "./img/6.jpg", comment: "Tense situation....." },
    { name: "mrmarkorodic", image: "./img/32.jpg", comment: "You're paperboy!" },
    { name: "kukuarthur", image: "./img/16.jpg", comment: "Please don't pull out a gun" },
    { name: "katievorgan", image: "./img/19 (1).jpg", comment: "It's destined to go on World Star! No it's not. Haha" },
    { name: "stephenro", image: "./img/5 (1).jpg", comment: "Donald doesn't know how to stop this situation." },
    { name: "natashauni", image: "./img/7 (1).jpg", comment: "Paperboy escalated a material crime into a shooting in less than 30 seconds. " },
    { name: "simonpmorgan", image: "./img/9.jpg", comment: "Birds eyes transition shot." },
    { name: "anniemac", image: "./img/11 (1).jpg", comment: "Atlanta looks like a nice place to live." },
    { name: "thebride", image: "./img/13 (1).jpg", comment: "Atlanta Title Typography" },
    { name: "driver", image: "./img/17.jpg", comment: "Going from birds eye view to daydreaming shows his head's in the sky, then he gets hit in the face. Saying something?" },
    { name: "bill", image: "./img/22.jpg", comment: "She look ugly." },
    { name: "sethgecko", image: "./img/20.jpg", comment: "I get that dream all the time, its called..." },
    { name: "fredrickzoller", image: "./img/12.jpg", comment: "Donald, never mention the girl mate" },
    { name: "hattorihanzo", image: "./img/18 (1).jpg", comment: "I think it's about society - then immediately who's the girl!" },
    { name: "aldorainer", image: "./img/30.jpg", comment: "She was fat that's why she was probably stuck underwater" },
    { name: "hanslanda", image: "./img/45.jpg", comment: "Making out" },
    { name: "miawallace", image: "./img/17 (1).jpg", comment: "Your breath, a very deep curry" },
    { name: "mrorange", image: "./img/27 (1).jpg", comment: "I always get curry breath in the morning." },
    { name: "jackiebrown", image: "./img/31 (1).jpg", comment: "Aw they love each other!" },
    { name: "beatrixkiddo", image: "./img/21 (1).jpg", comment: "He's yamming that curry sauce - just need some potato thing" },
    { name: "jules", image: "./img/35 (1).jpg", comment: "He fucked up again." },
    { name: "henryhill", image: "./img/34.jpg", comment: "That smile." },
    { name: "nickysantoro", image: "./img/25 (1).jpg", comment: "" },
    { name: "jordanbelfort", image: "./img/35.jpg", comment: "" },
    { name: "johnnyboy", image: "./img/38.jpg", comment: "" },
    { name: "jamesconway", image: "./img/41.jpg", comment: "" },
    { name: "twillixo", image: "./img/42.jpg", comment: "" },
    { name: "jakelamotta", image: "./img/36.jpg", comment: "" },
    { name: "iris", image: "./img/30 (1).jpg", comment: "" },
    { name: "donnieazoff", image: "./img/44 (1).jpg", comment: "" },
    { name: "travisbickle", image: "./img/43.jpg", comment: "" },
    { name: "tommydevito", image: "./img/54.jpg", comment: "" },
    { name: "naomilapaglia", image: "./img/32 (1).jpg", comment: "" },
    { name: "fasteddiefelson", image: "./img/51.jpg", comment: "" },
    { name: "teddydaniels", image: "./img/50.jpg", comment: "" },
    { name: "jimmydoyle", image: "./img/48.jpg", comment: "" },
    { name: "dennisville", image: "./img/68.jpg", comment: "" },
    { name: "billythekid", image: "./img/72.jpg", comment: "" },
    { name: "sayhellotomylittlefriend", image: "./img/34 (1).jpg", comment: "" },
    { name: "doncarlito", image: "./img/73.jpg", comment: "" },
    { name: "richardlinklate", image: "./img/74.jpg", comment: "" },
    { name: "johnwayne", image: "./img/82.jpg", comment: "" },
    { name: "davidfinch", image: "./img/81.jpg", comment: "" },
    { name: "hellamint", image: "./img/77 (1).jpg", comment: "" },
    { name: "ryangos", image: "./img/84.jpg", comment: "" },
    { name: "bernierose", image: "./img/80.jpg", comment: "" },
    { name: "shannon", image: "./img/39 (1).jpg", comment: "" },
    { name: "nicolasrefn", image: "./img/90.jpg", comment: "" },
    { name: "schleppingbag", image: "./img/47 (1).jpg", comment: "" },
    { name: "sideguyline", image: "./img/92.jpg", comment: "" },
    { name: "tensepockets", image: "./img/93.jpg", comment: "" },
    { name: "preystation", image: "./img/57 (1).jpg", comment: "" },
    { name: "ficklepixel", image: "./img/66 (1).jpg", comment: "" },
    { name: "sodcloth", image: "./img/90 (1).jpg", comment: "" },
    { name: "sketchycamper", image: "./img/89 (1).jpg", comment: "" },
    { name: "whatevdev", image: "./img/88 (1).jpg", comment: "" },
    { name: "indiaandyjones", image: "./img/58.jpg", comment: "" },
    { name: "mrwhite", image: "./img/89.jpg", comment: "" },
    { name: "jimmytwotimes", image: "./img/56.jpg", comment: "" },
    { name: "blackmamba", image: "./img/50 (1).jpg", comment: "" },
    { name: "vincentvega", image: "./img/57.jpg", comment: "" },
    { name: "marcelluswallace", image: "./img/55.jpg", comment: "" },
    { name: "fabulouskitten", image: "./img/1 (1).jpg", comment: "" },
    { name: "stomper", image: "./img/1.jpg", comment: "" },
    { name: "daniel72", image: "./img/3.jpg", comment: "" },
    { name: "junglejess", image: "./img/6 (1).jpg", comment: "" },
    { name: "silvaboi", image: "./img/2.jpg", comment: "" },
    { name: "benjib", image: "./img/5.jpg", comment: "" },
    { name: "craig", image: "./img/6.jpg", comment: "" },
    { name: "mrmarkorodic", image: "./img/32.jpg", comment: "" },
    { name: "kukuarthur", image: "./img/16.jpg", comment: "" },
    { name: "katievorgan", image: "./img/19 (1).jpg", comment: "" },
    { name: "stephenro", image: "", comment: "./img/5 (1).jpg" },
    { name: "natashauni", image: "./img/7 (1).jpg", comment: "" },
    { name: "simonpmorgan", image: "./img/9.jpg", comment: "" },
    { name: "anniemac", image: "./img/11 (1).jpg", comment: "" },
    { name: "thebride", image: "./img/13 (1).jpg", comment: "" },
    { name: "driver", image: "./img/17.jpg", comment: "" },
    { name: "bill", image: "./img/22.jpg", comment: "" },
    { name: "sethgecko", image: "./img/20.jpg", comment: "" },
    { name: "fredrickzoller", image: "./img/12.jpg", comment: "" },
    { name: "hattorihanzo", image: "./img/18 (1).jpg", comment: "" },
    { name: "aldorainer", image: "./img/30.jpg", comment: "" },
    { name: "hanslanda", image: "./img/45.jpg", comment: "" },
    { name: "miawallace", image: "./img/17 (1).jpg", comment: "" },
    { name: "mrorange", image: "./img/27 (1).jpg", comment: "" },
    { name: "jackiebrown", image: "./img/31 (1).jpg", comment: "" },
    { name: "beatrixkiddo", image: "./img/21 (1).jpg", comment: "" },
    { name: "jules", image: "./img/35 (1).jpg", comment: "" },
    { name: "henryhill", image: "./img/34.jpg", comment: "" },
    { name: "nickysantoro", image: "./img/25 (1).jpg", comment: "" },
    { name: "jordanbelfort", image: "./img/35.jpg", comment: "" },
    { name: "johnnyboy", image: "./img/38.jpg", comment: "" },
    { name: "jamesconway", image: "./img/41.jpg", comment: "" },
    { name: "twillixo", image: "./img/42.jpg", comment: "" },
    { name: "jakelamotta", image: "./img/36.jpg", comment: "" },
    { name: "iris", image: "./img/30 (1).jpg", comment: "" },
    { name: "donnieazoff", image: "./img/44 (1).jpg", comment: "" },
    { name: "travisbickle", image: "./img/43.jpg", comment: "" },
    { name: "tommydevito", image: "./img/54.jpg", comment: "" },
    { name: "naomilapaglia", image: "./img/32 (1).jpg", comment: "" },
    { name: "fasteddiefelson", image: "./img/51.jpg", comment: "" },
    { name: "teddydaniels", image: "./img/50.jpg", comment: "" },
    { name: "jimmydoyle", image: "./img/48.jpg", comment: "" },
    { name: "dennisville", image: "./img/68.jpg", comment: "" },
    { name: "billythekid", image: "./img/72.jpg", comment: "" },
    { name: "sayhellotomylittlefriend", image: "./img/34 (1).jpg", comment: "" },
    { name: "doncarlito", image: "./img/73.jpg", comment: "" },
    { name: "richardlinklate", image: "./img/74.jpg", comment: "" },
    { name: "johnwayne", image: "./img/82.jpg", comment: "" },
    { name: "davidfinch", image: "./img/81.jpg", comment: "" },
    { name: "hellamint", image: "./img/77 (1).jpg", comment: "" },
    { name: "ryangos", image: "./img/84.jpg", comment: "" },
    { name: "bernierose", image: "./img/80.jpg", comment: "" },
    { name: "shannon", image: "./img/39 (1).jpg", comment: "" },
    { name: "nicolasrefn", image: "./img/90.jpg", comment: "" },
    { name: "schleppingbag", image: "./img/47 (1).jpg", comment: "" },
    { name: "sideguyline", image: "./img/92.jpg", comment: "" },
    { name: "tensepockets", image: "./img/93.jpg", comment: "" },
    { name: "preystation", image: "./img/57 (1).jpg", comment: "" },
    { name: "ficklepixel", image: "./img/66 (1).jpg", comment: "" },
    { name: "sodcloth", image: "./img/90 (1).jpg", comment: "" },
    { name: "sketchycamper", image: "./img/89 (1).jpg", comment: "" },
    { name: "whatevdev", image: "./img/88 (1).jpg", comment: "" },
    { name: "indiaandyjones", image: "58.jpg", comment: "" },
    { name: "mrwhite", image: "./img/89.jpg", comment: "" },
    { name: "jimmytwotimes", image: "./img/56.jpg", comment: "" },
    { name: "blackmamba", image: "./img/50 (1).jpg", comment: "" },
    { name: "vincentvega", image: "./img/57.jpg", comment: "" },
    { name: "marcelluswallace", image: "./img/55.jpg", comment: "" },
    { name: "fabulouskitten", image: "./img/1 (1).jpg", comment: "" },
    { name: "stomper", image: "./img/1.jpg", comment: "" },
    { name: "daniel72", image: "./img/3.jpg", comment: "" },
    { name: "junglejess", image: "./img/6 (1).jpg", comment: "" },
    { name: "silvaboi", image: "./img/2.jpg", comment: "" },
    { name: "benjib", image: "./img/5.jpg", comment: "" },
    { name: "craig", image: "./img/6.jpg", comment: "" },
    { name: "mrmarkorodic", image: "./img/32.jpg", comment: "" },
    { name: "kukuarthur", image: "./img/16.jpg", comment: "" },
    { name: "katievorgan", image: "./img/19 (1).jpg", comment: "" },
    { name: "stephenro", image: "./img/5 (1).jpg", comment: "" },
    { name: "natashauni", image: "./img/7 (1).jpg", comment: "" },
    { name: "simonpmorgan", image: "./img/9.jpg", comment: "" },
    { name: "anniemac", image: "./img/11 (1).jpg", comment: "" },
    { name: "thebride", image: "./img/13 (1).jpg", comment: "" },
    { name: "driver", image: "./img/17.jpg", comment: "" },
    { name: "bill", image: "./img/22.jpg", comment: "" },
    { name: "sethgecko", image: "./img/20.jpg", comment: "" },
    { name: "fredrickzoller", image: "./img/12.jpg", comment: "" },
    { name: "hattorihanzo", image: "./img/18 (1).jpg", comment: "" },
    { name: "aldorainer", image: "./img/30.jpg", comment: "" },
    { name: "hanslanda", image: "./img/45.jpg", comment: "" },
    { name: "miawallace", image: "./img/17 (1).jpg", comment: "" },
    { name: "mrorange", image: "./img/27 (1).jpg", comment: "" },
    { name: "jackiebrown", image: "./img/31 (1).jpg", comment: "" },
    { name: "beatrixkiddo", image: "./img/21 (1).jpg", comment: "" },
    { name: "jules", image: "./img/35 (1).jpg", comment: "" },
    { name: "henryhill", image: "./img/34.jpg", comment: "" }
]

window.onload = function() {

    //timer
    var seconds = document.getElementById('seconds')
    var minutes = document.getElementById('minutes')
    var num = 0
    seconds.innerHTML = num.toString().length < 2 ? "0" + num : num

    setInterval(function(){
      num++
      let mins = Math.floor(num/60)
      let secs = num % 60
      seconds.innerHTML = secs.toString().length < 2 ? "0" + secs : secs
        minutes.innerHTML = mins.toString().length < 2 ? "0" + mins : mins
    }, 1000)

    const content = document.getElementById('content')

    var count = 0

    //comments load
    var intervalStop = setInterval(function(){

        //clone the current article element
        var newArticle = content.getElementsByTagName('article')[0].cloneNode(true)

        //create a variable time
        var time
        count === 0 ? time = 5 : time = (count+1) * 5 + Math.floor((Math.random()+1) * 5 - 8)

        // set new attributes
        var newImage = newArticle.getElementsByTagName('img')
        newImage[0].src = data[count].image
  
        var newHeader = newArticle.getElementsByTagName('h3')
        newHeader[0].innerHTML = data[count].name
  
        var newPara = newArticle.getElementsByTagName('p')
        newPara[0].innerHTML = data[count].comment

	   var newTime = newArticle.getElementsByTagName('h4')
        console.log(count, time)
        newTime[0].innerHTML = time + (time < 61 ? " secs" : " mins")
        count++

        // append it
        content.appendChild(newArticle)
        content.scrollIntoView(false);
  
        if (count == 28) {
            clearInterval(intervalStop)
        }

    }, 5000)
}


