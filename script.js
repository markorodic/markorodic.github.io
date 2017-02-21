
window.onload = function() {

    const content = document.getElementById('content')

    var counter = 0

    var intervalStop = setInterval(function(){
        counter++
  
        let userNumber = Math.floor(Math.random() * 80)
        let commentNumber = Math.floor(Math.random() * 152)

        var newArticle = content.getElementsByTagName('article')[0].cloneNode(true)
  
        // set new attributes
        var newImage = newArticle.getElementsByTagName('img')
        newImage[0].src = "users[userNumber].img"
  
        var newHeader = newArticle.getElementsByTagName('h4')
        newHeader[0].innerHTML = "users[userNumber].name"
  
        var newPara = newArticle.getElementsByTagName('p')
        newPara[0].innerHTML = "comments[commentNumber]"
  
        // append it
        content.appendChild(newArticle)
        content.scrollIntoView(false);
  
        if (counter == 5) {
            clearInterval(intervalStop)
        }
    }, 5000)
}
