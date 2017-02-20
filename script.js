const users = [
    { name: "fabulouskitten", img: "./img/1 (1).jpg" },
    { name: "stomper", img: "./img/1.jpg" },
    { name: "junglejess", img: "./img/6 (1).jpg" }
]

window.onload = function() {

    const content = document.getElementById('content')

    var counter = 0

    var intervalStop = setInterval(function(){
        counter++
  
        var newArticle = content.getElementsByTagName('article')[0].cloneNode(true)
  
        // set new attributes
        var newImage = newArticle.getElementsByTagName('img')
        
        newImage[0].src = "https://en.gravatar.com/userimage/18343163/3fd908393aedf6423ec12cacec9a1f50.jpg?size=200"
  
        var newHeader = newArticle.getElementsByTagName('h4')
        newHeader[0].innerHTML = "Me"
  
        var newPara = newArticle.getElementsByTagName('p')
        newPara[0].innerHTML = "Got it to work"
  
        // append it
        content.appendChild(newArticle)
        content.scrollIntoView(false);
  
        if (counter == 5) {
            clearInterval(intervalStop)
        }
    }, 5000)
}
