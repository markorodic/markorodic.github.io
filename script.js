var data = [
    { name: "fabulouskitten", image: "./img/1 (1).jpg", comment: "Wow is this the beginning? It just jumps straight into it!" },
    { name: "stomper", image: "./img/1.jpg", comment: "I would be pissssssed....." },
    { name: "daniel72", image: "./img/3.jpg", comment: "Haha see how Donald runs! I can tell his character will be good." },
    { name: "junglejess", image: "./img/6 (1).jpg", comment: "Tense situation" },
    { name: "silvaboi", image: "./img/2.jpg", comment: "World Star! No don't do that. Haha" },
    { name: "benjib", image: "./img/5.jpg", comment: "This kind of overblown fight is common in the world of our protagonists" },
    { name: "craig", image: "./img/6.jpg", comment: "Everyone is broke there, well put Donald. I think it's fair to say he's not an aggressive character here." },
    { name: "mrmarkorodic", image: "./img/32.jpg", comment: "This is all because of that girl, these situations always come about because of women!" },
    { name: "kukuarthur", image: "./img/16.jpg", comment: "He shouldn't have been cat calling her before then. What does he expect?" },
    { name: "katievorgan", image: "./img/19 (1).jpg", comment: "I get INSANE deja vu like that too!" },
    { name: "stephenro", image: "./img/5 (1).jpg", comment: "Maybe he's time travelling back to this moment. How else did he remember a dog with a texas spot." },
    { name: "natashauni", image: "./img/7 (1).jpg", comment: "That dude is high." },
    { name: "simonpmorgan", image: "./img/9.jpg", comment: "So he's famous?" },
    { name: "anniemac", image: "./img/11 (1).jpg", comment: "Don't say he's garbage! Seriously!?" },
    { name: "thebride", image: "./img/13 (1).jpg", comment: "I'd like to know what muckin' is? #hoodtalk" },
    { name: "driver", image: "./img/17.jpg", comment: "Paperboy, I like that name! He makes money, but also like delivery boy because I'm guessing he sells drugs." },
    { name: "sethgecko", image: "./img/20.jpg", comment: "It's destined to go on World Star. You tell em no, Donald." },
    { name: "fredrickzoller", image: "./img/12.jpg", comment: "Everyone's got guns at this party." },
    { name: "hattorihanzo", image: "./img/18 (1).jpg", comment: "Too much pride going on here." },
    { name: "aldorainer", image: "./img/30.jpg", comment: "Something strang is going on here, all is not what it seems." },
    { name: "hanslanda", image: "./img/45.jpg", comment: "They keep cutting back to that dog??" },
    { name: "miawallace", image: "./img/17 (1).jpg", comment: "Paperboy escalated a material crime into a shooting in less than 30 seconds. " },
    { name: "mrorange", image: "./img/27 (1).jpg", comment: "Birds eyes transition shot, liking it." },
    { name: "jackiebrown", image: "./img/31 (1).jpg", comment: "This is what it looks like when they're looking for someone in a helicopter." },
    { name: "beatrixkiddo", image: "./img/21 (1).jpg", comment: "Atlanta looks much nicer from up here." },
    { name: "jules", image: "./img/35 (1).jpg", comment: "This makes me wish I could fly." },
    { name: "henryhill", image: "./img/34.jpg", comment: "Had to be a basketball court" },
    { name: "nickysantoro", image: "./img/25 (1).jpg", comment: "The typography here looks similar to Baskerville." },
    { name: "jordanbelfort", image: "./img/35.jpg", comment: "Love that transition" },
    { name: "johnnyboy", image: "./img/38.jpg", comment: "Going from birds eye view to daydreaming shows his head's in the sky, then he gets hit in the face. Saying something?" },
    { name: "jamesconway", image: "./img/41.jpg", comment: "And then gets brought back to reality with that 'slap in the face'" },
    { name: "twillixo", image: "./img/42.jpg", comment: "My girlfriend does that to me. That's why I don't have one anymore." },
    { name: "jakelamotta", image: "./img/36.jpg", comment: "Is that why he's naked?I get that dream all the time too bro" },
    { name: "iris", image: "./img/30 (1).jpg", comment: "I get that dream all the time too bro" },
    { name: "donnieazoff", image: "./img/44 (1).jpg", comment: "How does he remember all that? I don't remember anything when I wake up." },
    { name: "travisbickle", image: "./img/43.jpg", comment: "Sea weed!" },
    { name: "tommydevito", image: "./img/54.jpg", comment: "I think it's about society - then immediately who's the girl!" },
    { name: "naomilapaglia", image: "./img/32 (1).jpg", comment: "Donald, never mention the girl mate" },
    { name: "fasteddiefelson", image: "./img/51.jpg", comment: "She was fat that's why she was probably stuck underwater" },
    { name: "teddydaniels", image: "./img/50.jpg", comment: "OMG why does she HAVE to make it about the girl" },
    { name: "jimmydoyle", image: "./img/48.jpg", comment: "Because he's obviously fantasising about this girl, why else would she be in his dream?" },
    { name: "dennisville", image: "./img/68.jpg", comment: "Its the way he casually said it" },
    { name: "billythekid", image: "./img/72.jpg", comment: "Donald is funny...hahaha he was making out with the girl!" },
    { name: "sayhellotomylittlefriend", image: "./img/34 (1).jpg", comment: "Aw they love each other!" },
    { name: "doncarlito", image: "./img/73.jpg", comment: "Has she just washed her hair?" },
    { name: "richardlinklate", image: "./img/74.jpg", comment: "Your breath is a very deep curry" },
    { name: "johnwayne", image: "./img/82.jpg", comment: "He's yamming that curry sauce - just needs some rice." },
    { name: "davidfinch", image: "./img/81.jpg", comment: "That's a long kiss" },
    { name: "hellamint", image: "./img/77 (1).jpg", comment: "The sound is picking up every little bit of that kiss. Have they got microphones in their mouths?" },
    { name: "ryangos", image: "./img/84.jpg", comment: "She's lazy making him do all the work." },
    { name: "bernierose", image: "./img/80.jpg", comment: "He messed up again. Rookie mistake." },
    { name: "shannon", image: "./img/39 (1).jpg", comment: "He needs to come up with a good answer!" },
    { name: "nicolasrefn", image: "./img/90.jpg", comment: "Not good enough" },
    { name: "schleppingbag", image: "./img/47 (1).jpg", comment: "Got the smile though" },
    { name: "sideguyline", image: "./img/92.jpg", comment: "She left me hanging like a wet cloth" },
    { name: "tensepockets", image: "./img/93.jpg", comment: "That scene finished with the same shot of him from above" },
    { name: "preystation", image: "./img/57 (1).jpg", comment: "Cute baby" },
    { name: "ficklepixel", image: "./img/66 (1).jpg", comment: "So they're mummy and daddy then?" },
    { name: "sodcloth", image: "./img/90 (1).jpg", comment: "Mummy is the responsible one, he must not usually take care of her." },
    { name: "sketchycamper", image: "./img/89 (1).jpg", comment: "She's got same hair as her dad." },
    { name: "whatevdev", image: "./img/88 (1).jpg", comment: "What's wrong with his parents house" },
    { name: "indiaandyjones", image: "./img/58.jpg", comment: "That little girl is hella cute" },
    { name: "mrwhite", image: "./img/89.jpg", comment: "Just moved back in?" },
    { name: "jimmytwotimes", image: "./img/56.jpg", comment: "I think the daughter has curry breath aswell like her mum" },
    { name: "blackmamba", image: "./img/50 (1).jpg", comment: "She gon be home LATE" },
    { name: "vincentvega", image: "./img/57.jpg", comment: "Wait what!? Are they together? Why is she going on a date." },
    { name: "marcelluswallace", image: "./img/55.jpg", comment: "I think he's as suprised as we are." },
    { name: "fabulouskitten", image: "./img/1 (1).jpg", comment: "Corny dude ha" },
    { name: "stomper", image: "./img/1.jpg", comment: "Lol, this is a great enviornment for you" },
    { name: "daniel72", image: "./img/3.jpg", comment: "Relationship issues" },
    { name: "junglejess", image: "./img/6 (1).jpg", comment: "That's just rude! Who would say that" },
    { name: "silvaboi", image: "./img/2.jpg", comment: "Donald face looks blitz." },
    { name: "benjib", image: "./img/5.jpg", comment: "3 Hoes a piece? Don't you hate it when you friends make up crap like that." },
    { name: "craig", image: "./img/6.jpg", comment: "Is his name Earn?" },
    { name: "mrmarkorodic", image: "./img/32.jpg", comment: "That's funny beause he's clearly trying, and failing, to earn the paper!" },
    { name: "kukuarthur", image: "./img/16.jpg", comment: "He needs to follow his dream man, that's what happens when you settle. He has dream hasn't he?" },
    { name: "katievorgan", image: "./img/19 (1).jpg", comment: "Friends know how to kick you when you're down." },
    { name: "stephenro", image: "./img/5 (1).jpg", comment: "He just said he's broke, but he also mentioned that at the beginning." },
    { name: "natashauni", image: "./img/7 (1).jpg", comment: "She's a good saleswoman" },
    { name: "simonpmorgan", image: "./img/9.jpg", comment: "Flirting is the best sales technique" },
    { name: "anniemac", image: "./img/11 (1).jpg", comment: "Her face! Hahaha" },
    { name: "thebride", image: "./img/13 (1).jpg", comment: "Omg that's soooo funny. Watch and learn" },
    { name: "driver", image: "./img/17.jpg", comment: "You wouldn't watch?" },
    { name: "bill", image: "./img/22.jpg", comment: "Paperboiii!" },
    { name: "sethgecko", image: "./img/20.jpg", comment: "Donald got bills to pay, he ain't got time for no mixtape!" },
    { name: "fredrickzoller", image: "./img/12.jpg", comment: "Get out your cave lil boy" },
    { name: "hattorihanzo", image: "./img/18 (1).jpg", comment: "Since when could you watch youtube on your phone at work?" },
    { name: "aldorainer", image: "./img/30.jpg", comment: "His cousin what!? " },
    { name: "hanslanda", image: "./img/45.jpg", comment: "This guy is definitely not a good friend" },
    { name: "miawallace", image: "./img/17 (1).jpg", comment: "Get in there quick and make you some paper" },
    { name: "mrorange", image: "./img/27 (1).jpg", comment: "What's 7 m's?" },
    { name: "jackiebrown", image: "./img/31 (1).jpg", comment: "7 Million!" },
    { name: "beatrixkiddo", image: "./img/21 (1).jpg", comment: "Earn's gone to earn some real money." },
    { name: "jules", image: "./img/35 (1).jpg", comment: "He's jealous now" },
    { name: "henryhill", image: "./img/34.jpg", comment: "I'm liking these black transitions" },
    { name: "nickysantoro", image: "./img/25 (1).jpg", comment: "He's outfit is hella cool" },
    { name: "jordanbelfort", image: "./img/35.jpg", comment: "His dad just stands in the doorway all day long?" },
    { name: "johnnyboy", image: "./img/38.jpg", comment: "Can see why Earn is broke" },
    { name: "jamesconway", image: "./img/41.jpg", comment: "This is awkward" },
    { name: "twillixo", image: "./img/42.jpg", comment: "Can't go into his own house" },
    { name: "jakelamotta", image: "./img/36.jpg", comment: "They're broke because of Earn!" },
    { name: "iris", image: "./img/30 (1).jpg", comment: "I thought he said to bae his parents wouldn't pick her up?" },
    { name: "donnieazoff", image: "./img/44 (1).jpg", comment: "He's getting a job? He just left his job." },
    { name: "travisbickle", image: "./img/43.jpg", comment: "His parents are cold" },
    { name: "tommydevito", image: "./img/54.jpg", comment: "Ew are they're talking about his poo" },
    { name: "naomilapaglia", image: "./img/32 (1).jpg", comment: "He's the smart one trapped in the poverty cycle." },
    { name: "fasteddiefelson", image: "./img/51.jpg", comment: "How did she check? I don't want to know." },
    { name: "teddydaniels", image: "./img/50.jpg", comment: "Who's alfred? Maybe Paperboy" },
    { name: "jimmydoyle", image: "./img/48.jpg", comment: "When you love someone, sometimes you have to do things that hurt." },
    { name: "dennisville", image: "./img/68.jpg", comment: "The hard life" },
    { name: "billythekid", image: "./img/72.jpg", comment: "Does that song say Paperboy?" },
    { name: "sayhellotomylittlefriend", image: "./img/34 (1).jpg", comment: "Just your local drug gang" },
    { name: "doncarlito", image: "./img/73.jpg", comment: "Well it is set in ATL" },
    { name: "richardlinklate", image: "./img/74.jpg", comment: "Who dis?" },
    { name: "johnwayne", image: "./img/82.jpg", comment: "Love the apron" },
    { name: "davidfinch", image: "./img/81.jpg", comment: "It's good but only if you're not drinking it" },
    { name: "hellamint", image: "./img/77 (1).jpg", comment: "These two look shady" },
    { name: "ryangos", image: "./img/84.jpg", comment: "Is that the way you answer your door in Atlanta?" },
    { name: "bernierose", image: "./img/80.jpg", comment: "This guy with the knife! He looks like a character." },
    { name: "shannon", image: "./img/39 (1).jpg", comment: "He's going to be big, the actor that plays Darius. He play Snoop in Straight Outta Compton" },
    { name: "nicolasrefn", image: "./img/90.jpg", comment: "He was well prepared. Either stab you or offer you a cookie" },
    { name: "schleppingbag", image: "./img/47 (1).jpg", comment: "He knew straight away why he's there." },
    { name: "sideguyline", image: "./img/92.jpg", comment: "This big dude is Paperboy right?" },
    { name: "tensepockets", image: "./img/93.jpg", comment: "Did he just say his daughter!" },
    { name: "preystation", image: "./img/57 (1).jpg", comment: "Good point!" },
    { name: "ficklepixel", image: "./img/66 (1).jpg", comment: "Earn is smart oh yea. Don't test him." }
]

window.onload = function(){
    //timer
    var seconds = document.getElementById('seconds')
    var minutes = document.getElementById('minutes')
    var num = 0
    seconds.innerHTML = num.toString().length < 2 ? "0" + num : num

    setInterval(function(){
      num++
      var mins = Math.floor(num/60)
      var secs = num % 60
      seconds.innerHTML = secs.toString().length < 2 ? "0" + secs : secs
        minutes.innerHTML = mins.toString().length < 2 ? "0" + mins : mins
    }, 1000)

    //progress on the header
    var bar = document.getElementById("my-bar")   
    var width = 0
    var id = setInterval(frame, 10)
    function frame() {
        if (width >= 100) {
            clearInterval(id)
        } else {
            width = width + 0.000655
            bar.style.width = width + '%' 
        }
    }

    //click to like
    document.getElementById("like").addEventListener("click", likeButton)

    function likeButton() {
        document.getElementById("like").src = "./img/heart2.png"
    }

    //commenting
    document.getElementById('add-comment').addEventListener("click", commentButton)

    function commentButton() {

        clearInterval(intervalStop)

        var commentSection = document.getElementById("comment")

        //comment
        commentSection.getElementsByTagName('p')[0].style.display = 'none'

        var commentField = document.createElement("input")
        commentField.setAttribute('type', 'text')
        commentField.setAttribute('placeholder', 'Write something')
        commentField.style.margin = "90px 30px 0px 20px"
        commentField.style.fontSize = "37px"
        commentField.style.fontWeight = "200"
        commentField.style.color = "white"
        commentField.style.background = "transparent"
        commentField.style.border = "none"
        commentField.style.borderBottom = "solid 3px white"
        document.getElementById("comment").appendChild(commentField);

        //image
        // document.getElementById('profile').style.display = 'none'
        document.getElementById('profile').style.position = "absolute"
        document.getElementById('profile').style.marginTop = "90px"
        document.getElementById('profile').style.width = "30px"
        document.getElementById('profile').style.marginLeft = "20px"

        //name
        document.getElementById('time').style.position = "absolute"
        document.getElementById('time').style.marginTop = "90px"
        document.getElementById('time').style.marginLeft = "60px"
        document.getElementById('time').style.opacity = "1"

        //time
        document.getElementById('username').innerHTML = ""

        //heart
        document.getElementById('like').style.display = 'none'

    }

    //see next comment
    // document.getElementById("change-comment").addEventListener("click", myFunction)

    // var count = 0

    // function myFunction() {
 //     var commentSection = document.getElementById("comment")

 //     //comment
 //     commentSection.getElementsByTagName('p')[0].innerHTML = data[count].comment

 //     //image
 //     document.getElementById('profile').src = data[count].image

 //     //name
 //     document.getElementById('username').innerHTML = data[count].name

 //     //time

 //        //heart
 //        document.getElementById('like').src = "./img/heart.svg"
    // count++
    // }

    var count = 0

    var intervalStop = setInterval(function(){

        var commentSection = document.getElementById("comment")

        //create a variable time
        var time
        count === 0 ? time = 5 : time = (count+1) * 5 + Math.floor((Math.random()+1) * 5 - 8)

        //comment
        commentSection.getElementsByTagName('p')[0].innerHTML = data[count].comment

        //image
        document.getElementById('profile').src = data[count].image

        //name
        document.getElementById('username').innerHTML = data[count].name

        //time
        document.getElementById('time').innerHTML = time + (time < 61 ? " secs" : " mins")

        //heart
        document.getElementById('like').src = "./img/heart.svg"

        count++
  
        if (count == 126) {
            clearInterval(intervalStop)
        }

    }, 5000)
}