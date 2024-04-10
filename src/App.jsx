import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { arabicToRoman, romanToArabic } from "./app";

function App() {
  let [arabicNumeral, setArabicNumeral] = useState(null);
  let [romanNumeral, setRomanNumeral] = useState(null);

  function buttonClickHandler(direction) {
    if (direction === "UP") {
      let romanNumber = arabicToRoman(arabicNumeral);
      console.log(arabicNumeral, romanNumber);
      setRomanNumeral(romanNumber);
    } else if (direction === "DOWN") {
      let arabicNumber = romanToArabic(romanNumeral);
      console.log(romanNumeral, arabicNumber);
      setArabicNumeral(arabicNumber);
    }
  }
  function inputChangeHandler(e, numeralType) {
    if (numeralType === "ARABIC") {
      setArabicNumeral(e.target.value);
    } else if (numeralType === "ROMAN") {
      setRomanNumeral(e.target.value);
    }
  }

  return (
    <main className="min-h-screen grid place-content-center gap-4">
      <h1 className="text-3xl font-bold text-center mb-16">
        <span className="flex gap-2 items-center justify-center">
          <span>Arabic</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
          <span>Roman</span>
        </span>{" "}
        Numeral converter
      </h1>
      <div className="">
        <Label htmlFor="roman-numeral-input" className="text-lg">
          Roman Numeral
        </Label>
        <Input
          type="text"
          id="roman-numeral-input"
          placeholder="VII"
          value={romanNumeral}
          onChange={(e) => inputChangeHandler(e, "ROMAN")}
        />
      </div>
      <div className="flex gap-2 justify-center">
        <Button onClick={() => buttonClickHandler("DOWN")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </Button>
        <Button onClick={() => buttonClickHandler("UP")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </Button>
      </div>
      <div className="">
        <Label htmlFor="roman-numeral-input" className="text-lg">
          Arabic Numeral
        </Label>
        <Input
          type="number"
          id="arabic-numeral-input"
          placeholder="8"
          value={arabicNumeral}
          onChange={(e) => inputChangeHandler(e, "ARABIC")}
        />
      </div>
    </main>
  );
}

export default App;