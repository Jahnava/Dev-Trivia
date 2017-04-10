function randomlinks(){
    var myrandom=Math.round(Math.random()*9)
    var links=new Array()
    links[0]="/html/trivia.html"
   links[1]="/html/trivia2.html"
   links[2]="/html/trivia3.html"
   links[3]="/html/trivia4.html"
   links[4]="/html/trivia5.html"
   links[5]="/html/trivia6.html"
   links[6]="/html/trivia7.html"
   links[7]="/html/trivia8.html"
   links[8]="/html/trivia9.html"
   links[9]="/html/trivia10.html"

   window.location=links[myrandom]
}

//     var link1="/html/trivia.html"
//     var link2="/html/trivia2.html"
//     var link3="/html/trivia2.html"
//     if (myrandom==0)
//         window.location=link1
//     else if (myrandom==1)
//         window.location=link2
//     else if (myrandom==2)
//         window.location=link3
// }
