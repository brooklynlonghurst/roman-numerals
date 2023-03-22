//write a function that converts an integer (<=1,000) to its Roman numerals equivalent.

// function romanNum(num){
//     let roman = ''
//     let numString = String(num)

//     const romanDigit = {
//         1: 'I',
//         5: 'V',
//         10: 'X',
//         50: 'L',
//         100: 'C',
//         500: 'D',
//     }

//     for(let i = 0; i < num; i++){

//     }
// }

function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }

console.log(romanize(4))

// function romanize (num) {
//     if (isNaN(num))
//         return NaN;
//     var digits = String(+num).split(""),
//         key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
//                "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
//                "","I","II","III","IV","V","VI","VII","VIII","IX"],
//         roman = "",
//         i = 3;
//     while (i--)
//         roman = (key[+digits.pop() + (i * 10)] || "") + roman;
//     return Array(+digits.join("") + 1).join("M") + roman;
// }

// console.log(romanize(4))