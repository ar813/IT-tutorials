/* ********** Boxes ********** */

// 1. Alert box
alert("Welcome")

// 2. Confirm Box
let confirmBox = confirm("Do you like our website")
if (confirmBox) {
    alert("Thanks")
} else {
    alert("Sorry")
}

// 3. Prompt Box
let promptBox = prompt("Enter your name")
alert("Welcome " + promptBox)
document.write("Welcome " + promptBox)

// Another Example of Prompt box

let dayInPromptBox:any = prompt("Enter Percentage")
if(dayInPromptBox >= 90){
    document.write("Excelent");
}else if(dayInPromptBox >= 80){
    document.write("Very Good");
}
else if(dayInPromptBox >= 70){
    document.write("Good");
}
else if(dayInPromptBox >= 60){
    document.write("Nice");
}
else if(dayInPromptBox >= 50){
    document.write("Poor");
}
else if(dayInPromptBox >= 40){
    document.write("Need to work Hard");
}
else if(dayInPromptBox < 40){
    document.write("Fail");
}
