var quote=[
  'Failure is the mother of success.——Thomas Paine',
  'The unexamined life is not worth living.——Socrates',
  'None is of freedom or of life deserving unless he daily conquers it anew.——Erasmus',
  'Our destiny offers not the cup of despair, but the chalice of opportunity. So let us seize it, not in fear, but in gladness.——R.M. Nixon',
  'Living without an aim is like sailing without a compass.——John Ruskin'
];

function newQuote(){
 var randomNumber=Math.floor(Math.random()*(quote.length));
 document.getElementById('quoteDisplay').innerHTML=quote[randomNumber];
}
