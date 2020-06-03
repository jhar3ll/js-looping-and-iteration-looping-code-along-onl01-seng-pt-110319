// Code your solutions in this file
function writeCards( gifters, event ) {
    let cards = []
    for ( let i = 0; i < gifters.length; i++ ) {
     cards.push( `Thank you, ${gifters[i]}, for the wonderful ${event} gift!` )
    }
    return cards
  }

  
 function countDown (beginNumber) {
     while (beginNumber >= 0) {
         console.log(beginNumber--);
     }
 }