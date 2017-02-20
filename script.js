const users = [
    { name: "fabulouskitten", img: "./img/1 (1).jpg" },
    { name: "stomper", img: "./img/1.jpg" },
    { name: "junglejess", img: "./img/6 (1).jpg" }
]

window.onload = function() {

    let div = document.getElementById('content')

    let counter = 0

    let intervalStop = setInterval(function(){
        counter++
  
        let newArticle = div.getElementsByTagName('article')[0].cloneNode(true)
  
        // set new attributes
        let newImage = newArticle.getElementsByTagName('img')
        
        newImage[0].src = "https://en.gravatar.com/userimage/18343163/3fd908393aedf6423ec12cacec9a1f50.jpg?size=200"
  
        let newHeader = newArticle.getElementsByTagName('h4')
        newHeader[0].innerHTML = "Me"
  
        let newPara = newArticle.getElementsByTagName('p')
        newPara[0].innerHTML = "Got it to work"
  
        // append it
        div.appendChild(newArticle)
        div.scrollIntoView(false);
  
        if (counter == 5) {
            clearInterval(intervalStop)
        }
    }, 5000)
}
