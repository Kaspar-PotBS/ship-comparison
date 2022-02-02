
function myFunction() {
  var table = document.getElementById("myId5");
  /*var header = table.createTHead();*/
  /*var row = header.insertRow(0);*/
  var row = table.insertRow(0);
  
  var cell = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  var cell4 = row.insertCell(4);
  var cell5 = row.insertCell(5);
  var cell6 = row.insertCell(6);
  var cell7 = row.insertCell(7);
  var cell8 = row.insertCell(8);
  var cell9 = row.insertCell(9);
  var cell10 = row.insertCell(10);
  var cell11 = row.insertCell(11);
  var cell12 = row.insertCell(12);
  
  cell.innerHTML = "This is a table header";
  cell1.innerHTML = "1";
  cell2.innerHTML = "2";
  cell3.innerHTML = "3";
  cell4.innerHTML = "4";
  cell5.innerHTML = "5";
  cell6.innerHTML = "6";
  cell7.innerHTML = "7";
  cell8.innerHTML = "8";
  cell9.innerHTML = "9";
  cell10.innerHTML = "10";
  cell11.innerHTML = "11";
  cell12.innerHTML = "12";
 
$(document).ready(function() {
    $('#myId5').DataTable();
});

 
}


function myFunction1() {
  var table = document.getElementById("myId5");
  var header = table.createTHead();
  var row = header.insertRow(0);
  var cell = row.insertCell(0);
  cell.innerHTML = "<b>This is a table header</b>";
}


function headerFunction() {
  var tr = document.getElementById('myId8table').tHead.children[0],
    th = document.createElement('th');
th.innerHTML = "First";
tr.appendChild(th);

var tr = document.getElementById('myId8table').tHead.children[0],
    th = document.createElement('th');
th.innerHTML = "Second";
tr.appendChild(th);



}


function headerFunction1() {
  var tr = document.getElementById('myId5').tHead.children[0],
    th = document.createElement('th');
th.innerHTML = "First";
tr.appendChild(th);

var tr = document.getElementById('myId5').tHead.children[0],
    th = document.createElement('th');
th.innerHTML = "Second";
tr.appendChild(th);

var tr = document.getElementById('myId5').tHead.children[0],
    th = document.createElement('th');
th.innerHTML = "3";
tr.appendChild(th);

var tr = document.getElementById('myId5').tHead.children[0],
    th = document.createElement('th');
th.innerHTML = "4";
tr.appendChild(th);

var tr = document.getElementById('myId5').tHead.children[0],
    th = document.createElement('th');
th.innerHTML = "5";
tr.appendChild(th);

var tr = document.getElementById('myId5').tHead.children[0],
    th = document.createElement('th');
th.innerHTML = "6";
tr.appendChild(th);

var tr = document.getElementById('myId5').tHead.children[0],
    th = document.createElement('th');
th.innerHTML = "7";
tr.appendChild(th);

var tr = document.getElementById('myId5').tHead.children[0],
    th = document.createElement('th');
th.innerHTML = "8";
tr.appendChild(th);

var tr = document.getElementById('myId5').tHead.children[0],
    th = document.createElement('th');
th.innerHTML = "9";
tr.appendChild(th);

var tr = document.getElementById('myId5').tHead.children[0],
    th = document.createElement('th');
th.innerHTML = "10";
tr.appendChild(th);

var tr = document.getElementById('myId5').tHead.children[0],
    th = document.createElement('th');
th.innerHTML = "11";
tr.appendChild(th);

var tr = document.getElementById('myId5').tHead.children[0],
    th = document.createElement('th');
th.innerHTML = "12";
tr.appendChild(th);

$('#myId5').DataTable();

}