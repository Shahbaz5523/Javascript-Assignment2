// Chapter form 21-25

// Assignment no 1:
// let first_name = prompt("Enter your first name: ");
// let last_name = prompt("Enter your last name: ");
// let titled = first_name + " " + last_name;
// alert("Welcome " + titled + " to our website");

// Assignment no 2:
// let favorite_mobile = prompt("Enter your favriot mobile model: ");
// let strings_len = favorite_mobile.length;
// document.write("Favorite Mobile Model is: "+favorite_mobile);
// document.write("<br>Lenght of string is: "+strings_len);

// Assignment no 3:
// let country  = "Pakistan";
// let index_of_n_is = country.indexOf('n');
// document.write("<br>String: "+country);
// document.write("<br>Index of n is: "+index_of_n_is);

// Assignment no 4:
// let helloworld = 'Hello World';
// let index_of_last_l = helloworld.lastIndexOf('l');
// document.write("<br>String: "+helloworld);
// document.write("<br>Index of last l is: "+index_of_last_l);

// Assignment no 5:
// let country_name = 'Pakistan';
// let value_at_3rd_index = country_name.charAt(3);
// document.write("<br>String: "+country_name);
// document.write("<br>Character at index 3: "+value_at_3rd_index);

// Assignment no 6:
// let first_name2 = prompt("Enter your first name: ");
// let last_name2 = prompt("Enter your last name: ");
// let titled2 = first_name2.concat(' ',last_name2);
// alert("Welcome " + titled2 + " to our website");

// Assignment no 7:
// let cityName = 'Hyderabad';
// let replacedCityName = cityName.replace('Hydera','Islama');
// document.write("<br>City: "+cityName);
// document.write("<br>After Replacement: "+replacedCityName);

// Assignment no 8:
// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let replacedMessage = message.replace(/and/g,'&');
// document.write("<br><b>Message:</b> "+message);
// document.write("<br><b>After Replacement:</b> "+replacedMessage);

// Assignment no 9:
// let n = "472";
// document.write("<br>Value: " + n);
// document.write("<br>Type: " + typeof(n));
// n = parseInt(n)
// document.write("<br>Value: " + n);
// document.write("<br>Type: " + typeof(n));

// Assignment no 10:
// let userText = prompt("Enter some text: ");
// let updatedText = userText.toUpperCase();
// document.write("<br><b>User Input:</b> "+userText);
// document.write("<br><b>Upper Case:</b> "+updatedText);

// Assignment no 11:
// let userText = prompt("Enter some text: ");
// let updatedText = userText.slice(0,1).toUpperCase() + userText.slice(1);
// document.write("<br><b>User Input:</b> "+userText);
// document.write("<br><b>Title Case:</b> "+updatedText);

// Assignment no 12:
// let num = 35.36;
// let strNum = num.toString();
// strNum = strNum.slice(0,2) + strNum.slice(3);
// document.write("<br><b>Number:</b> "+num);
// document.write("<br><b>Result:</b> "+strNum);

// Assignment no 13:
// let userName  = prompt("Enter your name here: ");
// if(userName.includes('!') || userName.includes(',') || userName.includes('.') || userName.includes('@')){
//     alert("please enter a valid name.")
// }else{
//     alert("Name = "+userName)
// }

// Assignment no 14:
// let findedFoodindex;
// let foods  = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// let findFood = prompt("Welcome to ABC Bakary. What do you want to order.").toLowerCase();
// for(let m=0;m<foods.length;m++){
//   if(findFood === foods[m]){
//     findedFoodindex = m;
//     break;
//   }
// }
// if(findedFoodindex >=0){
//     alert(findFood + ' is available at index ' + findedFoodindex + ' in our bakary');
// }else{
//     alert("We are sorry. "+findFood+" is not available in our bakary.")
// }

// Assignment no 15:
// let pass = prompt("Enter password: ");
// let containNum = false;
// let containChar = false;
// document.write("<br>Password: "+pass);
// if(pass.length<6){
//   document.write("<br>Password must contain 6 characters");
// }
// if(pass[0] >=0 && pass[0]<=9){
//   document.write("<br>Number is not used at starting");
// }
// for(let i = 0;i<pass.length; i++){
//   if(pass[i] >=0 && pass[i]<=9){
//     containNum = true;
//   }
//   if(pass[i]>='A'&&pass[i]<='Z' || pass[i]>='a'&&pass[i]<='z'){
//     containChar = true;
//   }
// }
// if(containNum == false){
//   document.write("<br>Password must contain numbers");
// }
// if(containChar == false){
//   document.write("<br>Password must contain alphabets");
// }

// Assignment no 16:
// var university = "University of Karachi";
// university = university.split("");
// for(let i=0;i<university.length;i++){
//     document.write(university[i] +"<br>")
// }

// Assignment no 17:
// let userInput = prompt("Enter some text here: ");
// let lastChar = userInput[userInput.length-1];
// document.write("<br><b>User Input:</b> "+userInput);
// document.write("<br><b>Last Character of input: </b> "+lastChar);

// Assignment no 18:
// let cont = 0;
// let text = "The quick brown fox jumps over the lazy dog.";
// for(let j=0;j<text.length;j++){
//     if(text.toLowerCase().slice(j,j+3) == 'the'){
//         cont = cont+1;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
//     }
// }
// document.write("<br><b>Text:</b> "+text);
// document.write("<br>There are " + cont + " occourrance(s) of the word 'the'");

// End of Chapter form 21-25


// Starting of Chapter 26-30

// Assignment no 1:
// let number = prompt("Enter a number:","3.45214");
// document.write("<br>Number: "+number);
// document.write("<br>Round off value: "+Math.round(number));
// document.write("<br>Floor Value: "+Math.floor(number));
// document.write("<br>Ciel Value: "+Math.ceil(number));

// Assignment no 2:
// let number = prompt("Enter a number:","-2.673");
// document.write("<br>Number: "+number);
// document.write("<br>Round off value: "+Math.round(number));
// document.write("<br>Floor Value: "+Math.floor(number));
// document.write("<br>Ciel Value: "+Math.ceil(number));

// Assignment no 3:
// let number = prompt("Enter a number: ");
// let absoulteNumber = Math.abs(number);
// alert(absoulteNumber)

// Assignment no 4:
// let diceNum = Math.floor(Math.random()*(6-1+1)+1);  //Generate number from 1to6 (0 is not include in it)
// document.write("<br>Random Dice value: "+diceNum);

// Assignment no 5:
// let toss = Math.floor(Math.random()*2);
// if(toss==1){
//     document.write("<br>Random Coin value: Head");   
// }else{
//     document.write("<br>Random Coin value: Tails");   
// }

// Assignment no 6:
// let randomNumber = Math.floor(Math.random()*(100-1+1)+1);   // Generate number from 1to100;
// document.write("<br>Random number between 1,100 is: "+randomNumber);   

// Assignment no 7:
// let weight = prompt("Enter your Weigth:");
// document.write("<br>The weight of the user is: "+weight);   

// Assignment no 8:
// let ranNum = Math.floor(Math.random()*(10-1+1)+1);   // Generate number from 1to10
// let userInput = prompt("Enter a number between 1to10: ");
// if(userInput == ranNum){
//     alert("You win, you guess the number sucessfully.")
// }else{
//     alert("Sorry try again.")
// }

// End of Chapter 26 to 30

// Starting of Chapter 31 to 34

// Assignment no 1:
// let date = new Date();
// document.write("<br>"+date);

// Assignment no 2:
// let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
// let month = new Date().getMonth();
// document.write("<br>current month is: "+months[month]);

// Assignment no 3:
// let day = new Date().getDay();
// let days =['Sun','Mon','Tue','Wen','Ths','Fri','Sat']
// document.write("<br>Today is: "+days[day]);

// Assignment no 4:
// let day = new Date().getDay();
// if(day == 0 || day == 1){
//     alert("Its fun day")
// }

// Assignment no 5:
// let now = new Date();
// let days = ['Sun', 'Mon', 'Tue', 'Wen', 'Ths', 'Fri', 'Sat'];
// let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

// if (now.getDate() < 16) {
//     for (let i = 1; i <16; i++) {
//         let d = new Date(now.getFullYear(), now.getMonth(), i);
//         document.write("<br>Date is " + days[d.getDay()] + " " + d.getDate() + " " + months[d.getMonth()])
//     }
// }else{
//     document.write("<br>Last day of the month is: "+ daysInMonth)
// }

// Assignment no 6:
// let currentDate = new Date();
// let todayMili = currentDate.getTime();
// let sinceDate = new Date("January 1 1970");
// let sinceMili = sinceDate.getTime();
// let elapedMiliSeconds = todayMili - sinceMili;
// let elapedMiuntes = elapedMiliSeconds/6000;
// document.write("<br>Current Date: "+currentDate);
// document.write("<br>Elapsed miliseconds since Jan 1,1970 : "+elapedMiliSeconds);
// document.write("<br>Elapsed minute since Jan 1,1970 : "+elapedMiuntes);

// Assignment no 7:
// let checkDate = new Date();
// if(checkDate.getHours()<12){
//     document.write("its a AM");
// }else{
//     document.write("its a PM");
// }

// Assignment no 8:
// let laterDate = new Date('Dec 31 2020');
// document.write("<br>Late date: "+laterDate);

// Assignment no 9:
// let currentDate = new Date();
// let startingOfRamdan  = new Date("24 April 2020");
// let todayMili = currentDate.getTime();
// let ramdanMili = startingOfRamdan.getTime();
// let elapedMiliSeconds = todayMili - ramdanMili;
// let daysAfterRamdan = Math.floor((elapedMiliSeconds/(1000*60*60*24)));
// document.write(daysAfterRamdan  + " days have passed since 1st Ramdan 2020");

// Assignment no 10:
// let refDate = new Date("Dec 5 2015");
// let refMili = refDate.getTime();
// let beginingDate = new Date("January 1 2015");
// let begMili = beginingDate.getTime();
// let elapedMiliSeconds = refMili - begMili;
// let elapedSeconds = elapedMiliSeconds/1000;
// document.write(elapedSeconds  + " seconds had beed passed since begning of 2015");

// Assignment no 11:
// let currentDate = new Date();
// document.write("Current date is: "+currentDate);
// currentDate.setHours(currentDate.getHours()-1);
// document.write("<br>1 hours ago: "+currentDate);

// Assignment no 12:
// let currentDate = new Date();
// document.write("Current date is: "+currentDate);
// currentDate.setFullYear(currentDate.getFullYear()-100);
// document.write("<br>100 year back: "+currentDate);

// Assignment no 13:
// let age = +prompt("Enter your age please: ");
// let currentYear = new Date().getFullYear();
// let dobYear = currentYear - age;
// document.write("Your age is: "+age);
// document.write("<br>Your birth year is: "+dobYear);

// Assignment no 14:
// let userName = prompt("Enter your name: ");
// let currentMonth = prompt("Enter month name: ");
// let noOfUnits = prompt("Enter number of units used: ");
// let chargesPerUnit = prompt("Enter Charges per unit is:");
// let latePaymentCharges = prompt("Enter late payment charges: ");
// let netBillPrice = noOfUnits * chargesPerUnit;
// let billAfterDueDate = netBillPrice + latePaymentCharges;
// document.write('Customer name: '+userName);
// document.write("<br>Month: "+currentMonth);
// document.write("<br>Number of units: "+noOfUnits);
// document.write("<br>Charges per Units: "+chargesPerUnit);
// document.write("<br><br>Net Amount payable(within Due Date): "+netBillPrice);
// document.write("<br>Late payment surcharge : "+latePaymentCharges);
// document.write("<br>Gross Amount payable(after Due Date): "+billAfterDueDate);


// End of Chapeter 31 to 34

// Starting of Chapter 35 to 38

// Assignment no 1:
// let currentDate = new Date();
// document.write(currentDate);

// Assignment no 2:
// function greeting(){
//     let firstName = prompt("enter first name: ");
//     let lastName = prompt("enter last name: ");
//     let fullName = firstName+" "+lastName;
//     alert("Welcome to our website "+fullName);
// }
// greeting();

// Assignment no 3:
// function sumofnumber(){
//     let n1 = +prompt("enter a number: ");
//     let n2 = +prompt("enter an other number: ");
//     let res = n1 + n2;
//     return res;
// }
// alert(sumofnumber());

// Assignment no 4:
// let a = +prompt("enter a number: ");
// let b = +prompt("enter an other number: ");
// let op = prompt("enter a operater(+ - * /): ");
// function claculator(a, b, operater) {
//     if (operater == '+') {
//         return a + b;
//     } else if (operater == '-') {
//         return a - b;
//     } else if (operater == '*') {
//         return a * b;
//     } else if (operater == '/') {
//         return a / b;
//     } else if (operater == '%') {
//         return a % b;
//     }
// }
// let result = claculator(a, b, op);
// document.write("<h1>Calculater</h1>")
// document.write("<br>A = " + a);
// document.write("<br>b = " + b);
// document.write("<br>operation = " + op);
// document.write("<br>result = " + result);

// Assignment no 5:
// function square(n){
//     return(n*n);
// }
// alert(square(5));

// Assignment no 6:
// function factorial(number){
//     let factorial = 1;
//     for(let i = number; i >= 1; i--){
//         factorial = factorial * i;
//     }
//       return factorial;
// }  
//   let n = +prompt("Enter a number Please: ");
//   result = factorial(n);
//   document.write("The factorial of " + n + " is " + result);

// Assignment no 7:
// function count(start,end){
//     let arr =[];
//     for(let i = start; i<=end; i++){
//         arr.push(i);
//     }
//     return arr;
// }
// let startingNum = +prompt("Enter starting number: ");
// let endingNum = +prompt("Enter ending number: ");
// let numbers = count(startingNum,endingNum);
// for(let i=1;i<=numbers.length;i++){
//     document.write(i+"<br>");
// }

// Assignment no 8:
// function square(a,b){
//     let s = [];
//     s.push(a*a);
//     s.push(b*b);
//     return s;
// }
// function Hypotenuse(){
//     let base = prompt("Enter Base of a right angle triangle: ")
//     let perendicular= prompt("Enter Perendicular of a right angle triangle: ")
//     let squares = square(base,perendicular);
//     let h = squares[0] + squares[1];
//     alert("hypotenuse = "+h)
// }
// Hypotenuse();

// Assignment no 9:
// function area(width,height){
//     alert("area = "+width*height);
// }
// area(40,35);

// Assignment no 10:
// function palindrome(word){
//     let reverseWord = word.split("").reverse().join("");
//     if(word == reverseWord){
//         alert("The given string is palindrome.");
//     }else{
//         alert("The given string is not a palindrome.");
//     }
// }
// let str = prompt("enter a string: ");
// palindrome(str);

// Assignment no 11:
// function convertString(str){
//     document.write("<br><b>This is before convert first lettes: </b><br>"+str)
//     for(let i=0;i<str.length;i++){
//         if(i===0){
//             str = str.slice(0,1).toUpperCase() + str.slice(1);
//         }
//         if(str.slice(i,i+1) == " "){
//             str = str.slice(0,i) + str.slice(i,i+2).toUpperCase() + str.slice(i+2);
//         }
//     }
//     document.write("<br><br><b>This is after convert first lettes: </b><br>"+str)
// }
// convertString("hello i am shahbaz ali and i am from pakistan.")


// Assignment no 12:
// function longWordFinder(str) {
//     let s = str.split(" ");
//     let check=0;
//     for(let i=0;i<s.length;i++){
//         if(s[i].length>check){
//             check = s[i].length; 
//         }
//     }  
//     for(let j=0;j<s.length;j++){
//         if(s[j].length == check){
//             alert("longest word is "+s[j]);
//         }
//     }
// }
// longWordFinder("Web Development Tutorial");


// Assignment no 13:
// function checkLetterInString(str,ch){
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]==ch){
//             count +=1;
//         }
//     }
//     alert("The letter a is "+count+" times in this string.")
// }
// checkLetterInString("Shahbazali",'a');


// Assignment no 14:
// document.writeln("<h1>The Geometerizer</h1><br>");

// function calcCircumference(r){
//     return 2*3.14*r;
// }
// function calcArea(r){
//     return 3.14*r*r;
// }
// let radius = prompt("Enter radius of the circle: ");
// document.write("Circumference = "+calcCircumference(radius));
// document.write("<br>Area = "+calcArea(radius));

                            // End of the assignment