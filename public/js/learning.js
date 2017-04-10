 // google custom searchBar
 (function() {
   var cx = '016517091579891659157:3qyk0gpjfj8';
   var gcse = document.createElement('script');
   gcse.type = 'text/javascript';
   gcse.async = true;
   gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
   var s = document.getElementsByTagName('script')[0];
   s.parentNode.insertBefore(gcse, s);
 })();


var quote=[
  'Make it simple. Make it memorable. Make it inviting to look at. Make it fun to read.  —Leo Burnett',

  'Inspiration exists, but it has to find us working.   —Pablo Picasso',

  'Just dont give up trying to do what you really want to do. Where there is love and inspiration, I dont think you can go wrong.   —Ella Fitzgerald',

  'Carpe Diem',

  'Living without an aim is like sailing without a compass.   —John Ruskin.',

  'Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.   —Harriet Tubman.',

  'Develop a passion for learning. If you do, you will never cease to grow.  —Anthony J. D Angelo.',

  'Change is the end result of all true learning.  —Leo Buscaglia',

  'Always do your best. What you plant now, you will harvest later.  —Og Mandino.',
  
  'It does not matter how slowly you go as long as you do not stop. —Confucius.'

];

function newQuote(){
 var randomNumber = Math.floor(Math.random()*(quote.length));
 document.getElementById('quoteDisplay').innerHTML='<h4><br>'+ quote[randomNumber] + '<br></h4>';
}


/* navbar-Toggle */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
