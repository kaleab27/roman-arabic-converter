export function arabicToRoman(arabic) {
  // only works for numbers less than 4000 guaranteed

  const letterMapping = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  let thousand = 0;
  let fiveHundred = 0;
  let hundred = 0;
  let fifty = 0;
  let ten = 0;
  let five = 0;
  let one = 0;
  thousand = (arabic - (arabic % 1000)) / 1000;
  let underThousand = arabic % 1000;
  if (underThousand >= 500 && underThousand < 900) {
    fiveHundred = 1;
    hundred = (underThousand - 500 - ((underThousand - 500) % 100)) / 100;
    let underHundred = (underThousand - 500) % 100;
    if (underHundred >= 50 && underHundred < 90) {
      fifty = 1;
      ten = (underHundred - 50 - ((underHundred - 50) % 10)) / 10;
      let underTen = (underHundred - 50) % 10;
      if (underTen >= 5 && underTen < 9) {
        five = 1;
        one = underTen - 5;
      } else {
        one = underTen;
      }
    } else {
      ten = (underHundred - (underHundred % 10)) / 10;
      let underTen = underHundred % 10;
      if (underTen >= 5) {
        five = 1;
        one = underTen - 5;
      } else {
        one = underTen;
      }
    }
  } else {
    hundred = (underThousand - (underThousand % 100)) / 100;
    let underHundred = underThousand % 100;
    if (underHundred >= 50 && underHundred < 90) {
      fifty = 1;
      ten = (underHundred - 50 - ((underHundred - 50) % 10)) / 10;
      let underTen = (underHundred - 50) % 10;
      if (underTen >= 5 && underTen < 9) {
        five = 1;
        one = underTen - 5;
      } else {
        one = underTen;
      }
    } else {
      ten = (underHundred - (underHundred % 10)) / 10;
      let underTen = underHundred % 10;
      if (underTen >= 5 && underTen < 9) {
        five = 1;
        one = underTen - 5;
      } else {
        one = underTen;
      }
    }
  }

  let romanNumber = "";

  for (let i = 0; i < thousand; i++) {
    romanNumber += letterMapping[1000];
  }
  romanNumber += fiveHundred == 1 ? letterMapping[500] : "";
  if (hundred < 4) {
    for (let i = 0; i < hundred; i++) {
      romanNumber += letterMapping[100];
    }
  } else if (hundred == 9) {
    romanNumber += letterMapping[100];
    romanNumber += letterMapping[1000];
  } else {
    romanNumber += letterMapping[100];
    romanNumber += letterMapping[500];
  }
  romanNumber += fifty == 1 ? letterMapping[50] : "";
  if (ten < 4) {
    for (let i = 0; i < ten; i++) {
      romanNumber += letterMapping[10];
    }
  } else if (ten == 9) {
    romanNumber += letterMapping[10];
    romanNumber += letterMapping[100];
  } else {
    romanNumber += letterMapping[10];
    romanNumber += letterMapping[50];
  }
  romanNumber += five == 1 ? letterMapping[5] : "";
  if (one < 4) {
    for (let i = 0; i < one; i++) {
      romanNumber += letterMapping[1];
    }
  } else if (one == 9) {
    romanNumber += letterMapping[1];
    romanNumber += letterMapping[10];
  } else {
    romanNumber += letterMapping[1];
    romanNumber += letterMapping[5];
  }

  return romanNumber;
}

export function romanToArabic(roman) {
  // only works for numbers less than 4000 guaranteed

  const letterMapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arabicNumber = 0;

  roman = roman.toUpperCase();

  for (let i = 0; i < roman.length; i++) {
    if (i == roman.length - 1) {
      arabicNumber += letterMapping[roman[i]];
    }

    if (letterMapping[roman[i]] >= letterMapping[roman[i + 1]]) {
      arabicNumber += letterMapping[roman[i]];
    } else if (letterMapping[roman[i]] < letterMapping[roman[i + 1]]) {
      arabicNumber += letterMapping[roman[i + 1]] - letterMapping[roman[i]];
      i++;
    }
  }

  return arabicNumber;
}
