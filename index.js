  function scuberGreetingForFeet(feet){
    if(feet <= 400){
      return "This one is on me!";
    } else if(feet > 400 && feet <= 2000){
      return "I will gladly take your thirty bucks.";
    } else if(feet > 2500){
      return "No can do.";
    }
  }
  function ternaryCheckCity(city){
    city === "NYC" ? "Ok, sounds good." : "No go.";
  }
  function switchOnCharmFromTip(tip){
    switch (tip === "generous") {
      case true:
        return "Thank you so much.";
      case false:
        return "Thank you.";
      default:
        return "Bye.";
    }
  }
console.log(scuberGreetingForFeet(500));
console.log(ternaryCheckCity("NYC"));
console.log(switchOnCharmFromTip("generous"));
