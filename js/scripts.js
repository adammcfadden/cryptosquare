// var cryptograph = function(sentence) {
//   var sentence = sentence.replace(/\W+/g, '').toLowerCase();
//   var coded_array = [];
//   var len = sentence.length
//   var column_length = Math.ceil(Math.sqrt(len));
//   var sentence_array = sentence.split("");
//   for (; len > 0 ; len -= column_length) {
//     var row = sentence_array.splice(0,column_length).join("");   //[a, e, e, s, s, f, g, g, i]
//     coded_array.push(row);
//   };
//   len = sentence.length
//   var word_array = []
//   var word1 = coded_array.shift()
//   var word2 = coded_array.shift()
//   var word3 = coded_array.shift()
//   for (; len > 0; len -= 3) {
//     word_array.push(coded_array.forEac(currentValue.split("").splice(0,1)))
//
//     // word_array.push(word1.split("").splice(0,1))
//     // word1 = word1.split("").slice(1).join("")
//     // word_array.push(word2.split("").splice(0,1))
//     // word2 = word2.split("").slice(1).join("")
//     // word_array.push(word3.split("").splice(0,1))
//     // word3 = word3.split("").slice(1).join("")
//   }
//
//   // return word1
//   return word_array.join("");
// };


var cryptograph = function(sentence) {
  var sentence = sentence.replace(/\W+/g, '').toLowerCase();
  var column_length = Math.ceil(Math.sqrt(sentence.length));
  var cryptosquare = new Array(column_length);

  for(var x = 0; x < column_length; x++) {
    cryptosquare[x] = new Array(column_length)
    for(var y = 0; y < column_length; y++) {
      cryptosquare[x][y] = sentence.charAt(x + y * column_length);
    }
  }
};
