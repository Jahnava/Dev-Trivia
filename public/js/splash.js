function random_3(){
    var myrandom=Math.round(Math.random()*2)
    var link1="/html/trivia.html"
    var link2="/html/trivia2.html"
    var link3="http://www.dynamicdrive.com"
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}
