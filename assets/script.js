//adds moment.js to display date 
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//current hour logic
let timeNow = new Date().getHours();
console.log(timeNow);
//depending on the current hour output- titles will 
//dynamically change color to reflect past, present, and future times.
if (timeNow === 0) {
        $("#0").addClass("present");
    } else if (timeNow > 0) {
        $("#0").addClass("past");
    } else if (timeNow < 0) {
        $("#0").addClass("future");
    };

if (timeNow === 1) {
        $("#1").addClass("present");
    } else if (timeNow > 1) {
        $("#1").addClass("past");
    } else if (timeNow < 1) {
        $("#1").addClass("future");
    };

if (timeNow === 2) {
        $("#2").addClass("present");
    } else if (timeNow > 2) {
        $("#2").addClass("past");
    } else if (timeNow < 2) {
        $("#2").addClass("future");
    };

if (timeNow === 3) {
        $("#3").addClass("present");
    } else if (timeNow > 3) {
        $("#3").addClass("past");
    } else if (timeNow < 3) {
        $("#3").addClass("future");
    };

if (timeNow === 4) {
    $("#4").addClass("present");
    } else if (timeNow > 4) {
    $("#4").addClass("past");
    } else if (timeNow < 4) {
    $("#4").addClass("future");
    };

if (timeNow === 5) {
        $("#5").addClass("present");
    } else if (timeNow > 5) {
        $("#5").addClass("past");
    } else if (timeNow < 5) {
        $("#5").addClass("future");
    };

if (timeNow === 6) {
        $("#6").addClass("present");
    } else if (timeNow > 6) {
        $("#6").addClass("past");
    } else if (timeNow < 6) {
        $("#6").addClass("future");
    };

if (timeNow === 7) {
        $("#7").addClass("present");
    } else if (timeNow > 7) {
        $("#7").addClass("past");
    } else if (timeNow < 7) {
        $("#7").addClass("future");
    };

if (timeNow === 8) {
        $("#8").addClass("present");
    } else if (timeNow > 8) {
        $("#8").addClass("past");
    } else if (timeNow < 8) {
        $("#8").addClass("future");
    };

if (timeNow === 9) {
        $("#9").addClass("present");
    } else if (timeNow > 9) {
        $("#9").addClass("past");
    } else if (timeNow < 9) {
        $("#9").addClass("future");
    };

if (timeNow === 10) {
        $("#10").addClass("present");
    } else if (timeNow > 10) {
        $("#10").addClass("past");
    } else if (timeNow < 10) {
        $("#10").addClass("future");
    };

if (timeNow === 11) {
        $("#11").addClass("present");
    } else if (timeNow > 11) {
        $("#11").addClass("past");
    } else if (timeNow < 11) {
        $("#11").addClass("future");
    };
  
if (timeNow === 12) {
        $("#12").addClass("present");
    } else if (timeNow > 12) {
        $("#12").addClass("past");
    } else if (timeNow < 12) {
        $("#12").addClass("future");
    };
  
if (timeNow === 13) {
        $("#13").addClass("present");
    } else if (timeNow > 13) {
        $("#13").addClass("past");
    } else if (timeNow < 13) {
        $("#13").addClass("future");
    };

if (timeNow === 14) {
        $("#14").addClass("present");
    } else if (timeNow > 14) {
        $("#14").addClass("past");
    } else if (timeNow < 14) {
        $("#14").addClass("future");
    };


if (timeNow === 15) {
        $("#15").addClass("present");
    } else if (timeNow > 15) {
        $("#15").addClass("past");
    } else if (timeNow < 15) {
        $("#15").addClass("future");
    };

if (timeNow === 16) {
        $("#16").addClass("present");
    } else if (timeNow > 16) {
        $("#16").addClass("past");
    } else if (timeNow < 16) {
        $("#16").addClass("future");
    };

if (timeNow === 17) {
        $("#17").addClass("present");
    } else if (timeNow > 17) {
        $("#17").addClass("past");
    } else if (timeNow < 17) {
        $("#17").addClass("future");
    };

if (timeNow === 18) {
        $("#18").addClass("present");
    } else if (timeNow > 18) {
        $("#18").addClass("past");
    } else if (timeNow < 18) {
        $("#18").addClass("future");
    };

if (timeNow === 19) {
        $("#19").addClass("present");
    } else if (timeNow > 19) {
        $("#19").addClass("past");
    } else if (timeNow < 19) {
        $("#19").addClass("future");
    };

if (timeNow === 20) {
        $("#20").addClass("present");
    } else if (timeNow > 20) {
        $("#20").addClass("past");
    } else if (timeNow < 20) {
        $("#20").addClass("future");
    };

if (timeNow === 21) {
        $("#21").addClass("present");
    } else if (timeNow > 21) {
        $("#21").addClass("past");
    } else if (timeNow < 21) {
        $("#21").addClass("future");
    };

if (timeNow === 22) {
        $("#22").addClass("present");
    } else if (timeNow > 22) {
        $("#22").addClass("past");
    } else if (timeNow < 22) {
        $("#22").addClass("future");
    };

if (timeNow === 23) {
        $("#23").addClass("present");
    } else if (timeNow > 23) {
        $("#23").addClass("past");
    } else if (timeNow < 23) {
        $("#23").addClass("future");
    };


//save button logic

var saveBtn = $('#saveBtn');
var textarea = document.getElementsByClassName(".textarea");
var text = localStorage.getItem("text");

let myObj = {
    name: "Dan",
    age: "25",
};

let myObj_serialized = JSON.stringify(myObj);
console.log(myObj_serialized);

localStorage.setItem("myObj", myObj);
console.log(localStorage);
