 
 let UWcount = 0;
 let CMPcount = 0;
 let TYEcount = 0;
  
 
 
 function B(){


    console.log('you have choseon BAT');
    let ran = Math.random() * 3;
    let com;
    let relt;
    let comchose;
    let userchose ='user choose BAT';

    if(ran > 0 && ran<= 1){
        com = 'BAT'
        comchose ='computer chose is BAT';
    }

   else if(ran > 1 && ran <= 2){
         com = 'Ball';
        comchose ='computer chose is Ball';
    }

    else{
         com = 'stump';
        comchose ='computer chose is stump';
    }
    if(com === 'Ball'){

         relt ='user is win';
         UWcount += 1;
          
         document.querySelector('#userwin').innerHTML =`User: ${UWcount}`;

   }
    else if(com === 'BAT'){

        relt= 'match is tye';
        TYEcount += 1; 
         
        document.querySelector('#tye').innerHTML =` MatchTye: ${TYEcount}`;

    }
 
    else if(com === 'stump'){
        relt= 'computer has win';
        CMPcount += 1;
        document.querySelector('#camp').innerHTML =`computer: ${CMPcount}`;


    }
    
    document.querySelector('#result').innerHTML= ` ${userchose} <--::--> ${comchose}`;

    document.querySelector('#result1').innerHTML= `Hey ${relt}`;
 
    
 }

 function Ball(){


    console.log('you have choseon BAT');
    let ran = Math.random() * 3;
    let com;
    let relt;
    let comchose;
    let userchose ='user choose  Ball';

    if(ran > 0 && ran<= 1){
        com = 'BAT'
        comchose ='computer chose is BAT';
    }

   else if(ran > 1 && ran <= 2){
         com = 'Boll';
        comchose ='computer chose is Ball';
    }

    else{
         com = 'stump';
        comchose ='computer chose is stump';
    }
    if(com === 'BAT'){

         relt ='user is win';
         UWcount += 1;
         document.querySelector('#userwin').innerHTML =`User: ${UWcount}` ;
          
   }
    else if(com === 'Boll'){

        relt= 'match is tye';
        TYEcount += 1;
        document.querySelector('#tye').innerHTML =` MatchTye: ${TYEcount}`;

    }
 
    else if(com === 'stump'){
        relt= 'computer has win';
        CMPcount += 1;
        document.querySelector('#camp').innerHTML =`computer: ${CMPcount}`;

    }
    
    document.querySelector('#result').innerHTML= ` ${userchose} <--::--> ${comchose}`;

    document.querySelector('#result1').innerHTML= `Hey ${relt}`;
 
    
 }
 
 function stump(){


    console.log('you have choseon BAT');
    let ran = Math.random() * 3;
    let com;
    let relt;
    let comchose;
    let userchose ='user choose stump';

    if(ran > 0 && ran<= 1){
        com = 'BAT'
        comchose ='computer chose is BAT';
    }

   else if(ran > 1 && ran <= 2){
         com = 'Boll';
        comchose ='computer chose is Ball';
    }

    else{
         com = 'stump';
        comchose ='computer chose is stump';
    }
    if(com === 'BAT'){

         relt ='user is win';
         UWcount += 1;
         document.querySelector('#userwin').innerHTML =`User: ${UWcount}` ;
   }
    else if(com === 'stump'){

        relt = 'match is tye';

        TYEcount += 1;
        document.querySelector('#tye').innerHTML =`MatchTye: ${TYEcount}`;

    }
 
    else if(com === 'Boll'){
        relt= 'computer has win';
        CMPcount += 1;
        document.querySelector('#camp').innerHTML =`computer: ${CMPcount}`;

    }
    
    document.querySelector('#result').innerHTML= ` ${userchose} <--::--> ${comchose}`;

    document.querySelector('#result1').innerHTML= `Hey ${relt}`;
    
 }

  


 