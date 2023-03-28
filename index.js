function scuberGreetingForFeet(num){
  // Write your code here!
  let response = '';
  if(num <= 400){
    response = 'This one is on me!';
    return response;
  }
  else if(num >= 400 && num <= 2000){
    response = 'That will be twenty bucks.';
    return response;
  }
  else if(num > 2000 && num <= 2500){
    response = 'I will gladly take your thirty bucks.';
    return response;
  }
  else if(num > 2500){
   return response = 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let response = '';
  city === 'NYC'? response = 'Ok, sounds good.' : response = 'No go.';
  return response;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response = '';
  switch (tip) {
    case 'generous':
      return response = 'Thank you so much.';
  
    case 'not as generous':
      return response = 'Thank you.';
    default:
      return response = 'Bye.';
      break;
  }
}