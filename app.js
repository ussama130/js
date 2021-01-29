


















// num = 2
// for  ( var loopCount=1 ; loopCount<=20 ; loopCount=loopCount +1) {
// prompt(num + " x " + loopCount + " = " + num*loopCount)
// }

// var polititianName = prompt("ENter your fav polititian?")
// if (polititianName == 'zardari')
// {
//     alert("ek zardari sub par bhari")
// }
// else if ((polititianName == 'nawaz') || (polititianName == 'maryam'))
// {
//     alert("mujhe ku nikala")
// }
// else {
//     alert('sub chor hai')
// }

//                          TEMPERATURE AND TABLE              

// var temperature = prompt("Enter a number \n enter 1 to convert celsius to farenheit \n enter 0 to convert farenheit to celsius \n enter 2 to run table?")
// if (temperature==1)
// {
//     alert("convert celsius to farenheit")
//     var degree=prompt("Enter number for convertsion")
  
//     document.write(((9*degree)+(32*5))/5);

    
// }
// else if (temperature==0)
// {
//     alert("convert farenheit to celsius")
//     var f=prompt("Enter number for convertion")
//     document.write(((5*(f-32))/9));
// }

// else if (temperature==2)
// {
//   alert("show table")
//   var num=prompt("Enter a number");
//   for (var table=1 ; table<=10 ; table++)
//   document.writeln(num + "  *  " + table + "   =   " + num*table + "<br>");
//   document.write("<br>");

// }
// else 
// {
//     alert ("nothing")
// }












//                         ENEV /ODD Programe 

// var num= prompt("Enter a number");
// if (num % 2 ==0)
// {
//   document.write("number is even")
// }
// else if (num % 3 ==0)
// {
//   document.write("number is odd")
// }
// else 
// {
//   document.write("nothing")
// }



//                                        Days programe //                   ///

// var day=prompt("enter a day \n press 1 for monday \n press 2 for tuesday \n press 3 for wednesday \n press 4 for thursday \n press 5 for friday \n press 6 for saturday \n press 7 for sunday ");
// if (day =1)
// {
//     document.write("Monday")
// }
// else if (day =2)
// {
//     document.write("tuesdaty")
// }
// else if (day =3)
// {
//     document.write("wednesday")
// }
// else if(day =4)
// {
//     document.write("thursday")
// }
// else if(day =5)
// {
//     document.write("friday")
// }
// else if(day =6)
// {
//     document.write("saturday")
// }
// else if(day =7)
// {
//     document.write("sunday")
// }
// else 
// {
//     document.write("nothing")
// }

// var prompt("enter a number")
// switch(dayNumber){

//   case 1:
//     alert("the day is monday")
//     break;
//     case 2:
//       alert("the day is monday")
//       break;
// default:
//   alert("enter a valid number")


// }







// var evenCount =0;
// var oddCount =0;
// for (var num=1 ; num <=10 ; num ++)
// {
//    if (num % 2 ==0){
//     evenCount++
//    }
//     else
// {
//     oddCount++
// }
// }
// console.log(evenCount)
// console.log(oddCount)







// var num ="";
// var size = prompt("Enter the size of the pyramid");
// for(var i=1; i<=size; i++)
// {
//   num = num + i
//   console.log(num);
// }
   



// /                               CLASS : 5  ///////////////////////////////////////////////



// studentNames.push('usama')



// function greet(name)
// {
//   document.write("hello  " + name + " :)")
// }
// let name = prompt("enter a name")

// greet(name)

function add(number1, number2) {
  return number1 + number2;
}
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));
document.write("The sum is " + result);
add(number1, number2)





// function getEvenNumber()
// {
//   var arr=[1,3,4,6,8,9];
//   for (var i=0 ; i < arr.length ; i++)
//   {
//     if (arr[i] % 2 ===0)
//     {
//       console.log(arr[i] + "even");
//   }

//    else
//     {
//       console.log(arr[i] + "odd");
//   }

// }}
// getEvenNumber();

// function getOddNUmber()
// {
//   var arr =[1,2,3,4,5,6,7,8,9]
//   for( var i=0 ; i< arr.length ; i++)
//   {
//     if (arr[i] % 2 !=0)
//     {
//       document.writeln(arr[i] + "</br>");
//     }
//   }
// }
// getOddNUmber();



// // // console.log(remove_character("islamabad",0));

// function getEvenNumber()
// {
//   var arr=[1,3,4,6,8,9];
//   for (var i=0 ; i < arr.length ; i++)
//   {
//     if (arr[i] % 2 ===0)
//     {
//       document.write(arr[i] + "even" + "</br>");
//   }

//    else
//     {
//       document.write(arr[i] + "odd" + "</br>");
//   }

// }}
// getEvenNumber();

// function getCaps()
// {
// var caps =['careem','uber','bykea'];
// for(var i =0;i<caps.length;i++)
// {
// for(var j=0;j<caps.length;j++)
// {
// if(i!==j)
// document.writeln(caps[i],' and ',caps[j],' are good services ' + "</br>");
// }
// }}
// getCaps()

// function cappital()
// {
//     var name="osama"
//     res=name.toLowerCase()
//     document.write(res)
// }
// cappital()

// function cityName() {
//     var str = 'ISLAMABAD'; 
//     var res = str.replace("ISLAM", "HYDER");
//     document.write(res);
//   }
//   cityName()

