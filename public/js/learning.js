var quote=[
  'Make it simple. Make it memorable. Make it inviting to look at. Make it fun to read.   ——Leo Burnett',

  'Inspiration exists, but it has to find us working.   ——Pablo Picasso',

  'Just dont give up trying to do what you really want to do. Where there is love and inspiration, I dont think you can go wrong.   ——Ella Fitzgerald',

  'Carpe Diem',

  'Living without an aim is like sailing without a compass.   ——John Ruskin.',

  'Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.   ——Harriet Tubman.'

];

function newQuote(){
 var randomNumber = Math.floor(Math.random()*(quote.length));
 document.getElementById('quoteDisplay').innerHTML='<br><h4>'+ quote[randomNumber] + '<br></h4>';
}
// 
// function randomImage(){
//   var myURL = 'http://lorempixel.com/400/200/business/';
//   return myURL;
// }
