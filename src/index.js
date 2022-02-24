module.exports = function toReadable (number) {
const firstNum = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const secondNum = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const numStr = String(number).split('');
let str = '';

   if (numStr.length === 1) {
       numStr.unshift('0', '0');
   }else if (numStr.length === 2) {
       numStr.unshift('0');
   }

   if (number === 0) {
       str += 'zero';
   };
   switch (numStr[0]) {
       case '1':
           str += firstNum[0] + ' hundred ';
           break;
       case '2':
           str += firstNum[1] + ' hundred ';
           break;
       case '3':
            str += firstNum[2] + ' hundred ';
            break;
        case '4':
            str += firstNum[3] + ' hundred ';
            break;
       case '5':
            str += firstNum[4] + ' hundred ';
            break;
       case '6':
            str += firstNum[5] + ' hundred ';
            break;
   }



let toReadable = n => {
    let a = [
      '', 'one', 'two', 'three', 'four',
      'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
      'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    let b = [
      '', '', 'twenty', 'thirty', 'forty',
      'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    let g = [
      '', 'thousand'
    ];
    
    let makeGroup = ([ones,tens,huns]) => {
      return [
        num(huns) === 0 ? '' : a[huns] + ' hundred ',
        num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
        a[tens+ones] || a[ones]
      ].join('');
    };
    
    
    if (typeof n === 'number') {
      return toReadable(String(n));
  } if (n === '0'){
      return 'zero';
  }
  return comp (chunk(3)) (reverse) (arr(n))
    .map(makeGroup)
    .filter(comp(not)(isEmpty))
    .reverse()
    .join(' ');
}
  };


