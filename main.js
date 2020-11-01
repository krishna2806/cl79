var student=[];

function submit(){
var n1=document.getElementById("no_1").value;
var n2=document.getElementById("no_2").value;
var n3=document.getElementById("no_3").value;
var n4=document.getElementById("no_4").value;

student.push(n1);
student.push(n2);
student.push(n3);
student.push(n4);

document.getElementById("display").innerHTML=student;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}
function sort(){
student.sort();
document.getElementById("display").innerHTML=student;
}