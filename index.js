// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
  }
  
  function wrapAdjective(Flair = "*") {
    return function (adjective = "special") {
      return `You are ${Flair}${adjective}${Flair}!`;
    };
  }
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  
  console.log(saturdayFun());  
  console.log(saturdayFun("bathe my dog"));  
  
  console.log(mondayWork());  
  console.log(mondayWork("work from home"));  
  
  console.log(encouragingPromptFunction("a dedicated programmer")); 
  console.log(wrapAdjective("%")("amazing"));  
   
      