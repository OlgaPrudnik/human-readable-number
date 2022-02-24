module.exports = function toReadable (number) {
  let res = "";
  let first = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
  ];
  let tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
  ];
  let num = number.toString();
  if (number === 0 || number == "") {
      return "zero";
  }
  if (number < 0) {
      res = "Error! number < 0";
  }
  if (number < 20) {
      res = first[number];
  }
  if (num.length === 2 && number >= 20) {
      res = tens[num[0]] + " " + first[num[1]];
  }


  if (num.length == 3) {
      if (num[1] === "0" && num[2] === "0") {
          res = first[num[0]] + " hundred";
      } else {
          res =
              first[num[0]] +
              " " +
              "hundred " +
              toReadable(+(num[1] + num[2]));
      }
  }

  if (num.length === 4) {
      let finish = +(num[1] + num[2] + num[3]);
      if (finish === 0) {
          res = first[num[0]] + " thousand";
      }
      if (finish < 100) {
          res = first[num[0]] + " " + "thousand " + toReadable(finish);
      }
      res = first[num[0]] + "thousand " + toReadable(finish);
  }
  return res.trim();
}
 


