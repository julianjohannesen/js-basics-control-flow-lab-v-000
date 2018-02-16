  function scuberGreetingForFeet(feet){
    if(feet <= 400){
      return "This one is on me!";
    } else if(feet > 2000 && feet <= 2500){
      return "I will gladly take your thirty bucks.";
    } else if(feet > 2500){
      return "No can do.";
    }
  }
  function ternaryCheckCity(city){
    return city === "NYC" ? "Ok, sounds good." : "No go.";
  }
  function switchOnCharmFromTip(tip){
    switch (tip) {
      case "generous":
        return "Thank you so much.";
      case "not as generous":
        return "Thank you.";
      default:
        return "Bye.";
    }
  }
console.log(scuberGreetingForFeet(500));
console.log(ternaryCheckCity("NYC"));
console.log(switchOnCharmFromTip("generous"));
```
returns "Ok, sounds good." when the city is NYC ‣
AssertionError: expected undefined to equal 'Ok, sounds good.'
    at Context.<anonymous> (test/indexTest.js:20:42)
    should return "No go." if the destination city is not NYC ‣
AssertionError: expected undefined to equal 'No go.'
    at Context.<anonymous> (test/indexTest.js:24:49)
```
