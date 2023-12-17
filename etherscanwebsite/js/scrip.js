
const options = {
  headers: {
    'Content-Type': 'application/json',//requasting the data from the web json page
    // 'x-access-token': 'your-access-token-here',
  },
};

fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd')  
  .then((response) => response.json())
  .then((data) => test(data));

  function test(data) {
  console.log(data);
//getting the info frpm the jsonfile
    document.getElementById("Rank").innerHTML = data.data.coin.rank; // gets the out printed data from the written data in the conlsole from the jsonfile and converts int to a class wich is later can be printed out on with help of HTML paragraf or class 
    document.getElementById("Tier").innerHTML =  data.data.coin.tier; // gets the out printed data from the written data in the conlsole from the jsonfile and converts int to a class wich is later can be printed out on with help of HTML paragraf or class
    document.getElementById("Name").innerHTML = data.data.coin.name; // gets the out printed data from the written data in the conlsole from the jsonfile and converts int to a class wich is later can be printed out on with help of HTML paragraf or class
    document.getElementById("Price").innerHTML =  Math.floor(data.data.coin.price)+"US$"; // gets the out printed data from the written data in the conlsole from the jsonfile and converts int to a class wich is later can be printed out on with help of HTML paragraf or class
    document.getElementById("Symbol").innerHTML = data.data.coin.symbol; // gets the out printed data from the written data in the conlsole from the jsonfile and converts int to a class wich is later can be printed out on with help of HTML paragraf or class
    document.getElementById("highest").innerHTML = + Math.floor(data.data.coin.allTimeHigh.price)+"US$"; // gets the out printed data from the written data in the conlsole from the jsonfile and converts int to a class wich is later can be printed out on with help of HTML paragraf or class
    document.getElementById("description").innerHTML=data.data.coin.description // gets the out printed data from the written data in the conlsole from the jsonfile and converts int to a class wich is later can be printed out on with help of HTML paragraf or class
    
  }

//a simple clock 
  function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if(hh == 0){ //The equality (==) operator checks whether its two operands are equal and  returning a Boolean result. Unlike the strict equality operator. it attempts to convert and compare operands that are of different types.
        hh = 12; // This conditional statement checks if the hour is midnight to (00.00) and if it is. Then the clokc sets the hour to 12. This ensures that midnight is displayed as 12:00 AM instead of 00:00 AM.
    }
    if(hh > 12){ //in these if the time is more than 12 it will
        hh = hh - 12;
        session = "PM"; //
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
     //tis is a condition that  add a leading zero to every single h,min or sec if its under number 10. why did i add this?? becuase i wnated to This ensures that the time is displayed in a two-digit format.
      // To put it simply, the lines read as follows: "Leave the hour as is if it is less than 10, add a leading a '0'.



     let time = hh + ":" + mm + ":" + ss + " " + session; //prints out the : between the h,min,sec and prints out the session
  
    document.getElementById("clock").innerText = time; //gets the data via console and prints it out on the webpage in a certain class called clock 
    let t = setTimeout(function(){ currentTime() }, 1000); //1 one sec its 1000 miliseconds 
  }
  currentTime();

