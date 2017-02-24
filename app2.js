//step 1
//var number = window.prompt("pick a number!");
//console.log(Math.abs(number))
//step 2
//
//var floating = window.prompt("pick a number with a decimal point.");
//var store = parseFloat(floating);
//console.log(Math.ceil(store));
//step 3
//var floating = window.prompt("pick a number with a decimal point.");
//var store = parseFloat(floating);
//console.log(Math.floor(store));
//4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
//var numbers = window.prompt("pick 5 numbers and seperate them by commas.");
//var y = parseInt(numbers);
//console.log(Math.max(y)); 
//step 5
//var number = window.prompt("Pick a number to find out the square root!");
//console.log(Math.sqrt(number));
//step 6
//var d = new Date();
//console.log(d.toDateString());
//step 7
//var getDaysInMonth = function (month, year) {
//    return new Date(year, month, 0).getDate();
//}
//console.log(getDaysInMonth(2, 2017));
//step 8
//var monthsName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//var d = new Date();
//console.log("The current month is " + monthsName[d.getMonth()]);
//
//step9
//var d = new Date();
//if(d.getDay() == 6 || d.getDay() == 0){
//    console.log("It's the weekend!!")}
//else{
//    console.log("It's not the weekend.");
//};
//step 10
//var weekName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//var d = new Date();
//var name = weekName[d.getDay() - 1];
//console.log(name);
//Step 11
//
//var weekName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//var d = new Date();
//var name = weekName[d.getDay()];
//var charCode = name.charCodeAt(0);
//var letter = String.fromCharCode(charCode);
//
//console.log(letter);
//step 12
//var firstInt = window.prompt("Type in a number.");
//var secondInt = window.prompt("Type in a second number");
//if (firstInt > secondInt){
//    console.log(firstInt);
//}
//else{
//    console.log(secondInt);
//};
//Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 
//var students = [['Urusula', 80], ['Paul', 77], ['Henry', 88], ['Tabitha', 95], ['Lucy', 68]];
//
//for (var i = 0; i < students.length; i++) {
//   if (students[i][1] < 60) {
//    console.log(students[i][0] + " F");
//}
//else if (students[i][1] < 70) {
//    console.log(students[i][0] + " D");
//}
//else if (students[i][1] < 80) {
//    console.log(students[i][0] + " C");
//}
//else if (students[i][1] < 90) {
//    console.log(students[i][0] + " B");
//}
//else if (students[i][1] < 100) {
//    console.log(students[i][0] + " A");
//}
//};
//
//
//The grades are computed as follows:
//
//
//
//step 14
//for (var x=0; x<=15; x++){
//    if (x === 0){
//        console.log(x + "is even");
//    }
//    else if (x % 2 === 0){
//        console.log(x + "is even");
//    }
//    else{
//        console.log(x + "is odd");
//    }
//}
//step 15
//for (var x=0; x<=100; x++){
//    if (x % 3){
//        console.log(x + " Fizz");
//    }
//    else if (x % 5 ){
//        console.log(x + " Buzz");
//    }
//    else if (x % 3 == x % 5 ) {
//        console.log(x + " FizzBuzz");
//    }
//   else{
//       console.log(x);
//   }
//}
part 4
//step 1
//var question = window.prompt('are you ready to play a game?');
//
//if (question === 'yes'){
//    window.alert("Awesome, our hero is waiting!");
//}
//else if (question === 'Yes') {
//    window.alert("Awesome, our hero is waiting!"); ;
//}
//else{
//    window.alert("Too Bad, we're going to play anywya because our hero desperately needs your help!");}
//step 2
//var message = window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");
//
//step 3
//var decide = window.prompt("Which direction would you like to head(please enter forward, left, or right).");
////step 4
//        
//switch(decide){
//    case "forward": 
//        alert("You walk about 100 yards and safely make your way out of the cave.");
//        break;
//    case "left":
//        alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
//        break;
//    case "right":
//        alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
//        break;
//    default:
//        alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
//}
////        
////                       }
//step 5 / 6
//var rate = window.prompt("Rate my game from a 1 to a 10!");
//var number = Number(rate);
//
//if (rate >= 6 && rate <= 10) {
//    alert("Thank you, we will continue to make improvements to the game!");
//}
//else if (rate >= 0 && rate <= 5) {
//    alert("Whatever, you weren't very good at this game anyway!");
//}
//else{
//  var rate = 10;
//  alert("Thank you, we will continue to make improvements to the game!");
//}
