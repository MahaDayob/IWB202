function Addname(){
  var nameid= document.getElementById("user");
  var name_id=nameid.value.search(/^[A-Z][a-z]+_\d/) ;
  if(name_id != 0){alert("Please enter your username ");nameid.value="";
  return false;}
  var student=document.getElementById("studentname");
  var studentnme=student.value.search(/^[أ-ي]/);
  if(studentnme != 0){alert("Please enter the student's name");student.value=""; return false; }
  var phone=document.getElementById("mobail-user")
  var mobail_user=phone.value.search(/^[\+][(]?([9][6][3])[)]?[-\s\.]+([9])[0-9]{8}$/)
  var mobail_user4=phone.value.search(/^[\+][(]?[0-9]{3}[)]?[-\s\.]?[0-9]{7}$/)
  if((mobail_user !=0)&(mobail_user4 !=0)){alert("Please enter the phone number ");phone.value=""
  return false;}
  var inputField = document.querySelector(".input-area input");
  let inputVal = inputField.value.split('').join(' ');
  if(inputVal != captcha.innerText){ //if captcha matched
    statusTxt.style.color = "#ff0000";
    statusTxt.innerText = "Captcha not matched. Please try again!";
    setTimeout(()=>{ //calling removeContent & getCaptcha after 4 seconds
      removeContent();
      getCaptcha();
    }, 2000);
  }
  else{
    var tbodyRef = document.getElementById('show').getElementsByTagName('tbody')[0];
    var lastRow = tbodyRef.rows[tbodyRef.rows.length - 1];
    var lastCell = lastRow.cells[lastRow.cells.length - 1];
      // Insert a row at the end of table
    var newRow = tbodyRef.insertRow();
      // Insert a cell at the end of the row
    var newCell = newRow.insertCell();
    newCell.innerHTML = lastRow.rowIndex+1;
    newCell = newRow.insertCell();
    newCell.innerHTML = document.getElementById('user').value;
    newCell.className = 'td-color';
    newCell = newRow.insertCell();
    newCell.innerHTML = document.getElementById('studentname').value;
    newCell = newRow.insertCell();
    newCell.innerHTML = document.getElementById('program').value;
    document.getElementById('user').style.color = 'blue';
    statusTxt.style.color = "#4db2ec";
    statusTxt.innerText = "Nice! You don't appear to be a robot.";
    nameid.value="";
    student.value="";
    phone.value="";
    setTimeout(()=>{ //calling removeContent & getCaptcha after 4 seconds
      removeContent();
      getCaptcha();
    }, 2000);
  }	
}
const captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector(".input-area input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-text");
//storing all captcha characters in array   
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getCaptcha(){
  for (let i = 0; i < 6; i++) { //getting 6 random characters from the array
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
  }
}
getCaptcha(); //calling getCaptcha when the page open
checkBtn.addEventListener("click", e =>{
  e.preventDefault(); //preventing button from it's default behaviour
  statusTxt.style.display = "block";
  //adding space after each character of user entered values because I've added spaces while generating captcha
});

function removeContent(){
 inputField.value = "";
 captcha.innerText = "";
 statusTxt.style.display = "none";
}
// FILTER 

function filterTable() {

  var input, filter, table, tr, td, i, txtValue;

  input = document.getElementById("program2").value;
  table = document.getElementById("show1");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.innerText || td.innerText;
      console.log(txtValue);
      if (txtValue.indexOf(input) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("show1");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < (rows.length-1 ); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("td")[2];
      y = rows[i + 1].getElementsByTagName("td")[2];
      //check if the two rows should switch place:
      if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function sortTable1() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("show1");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < (rows.length ); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (Number(x.innerText) > Number(y.innerText)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function sortTable2() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("show1");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < (rows.length ); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[3];
      y = rows[i + 1].getElementsByTagName("TD")[3];
      //check if the two rows should switch place:
      if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function Convert() {
  var tjsn=document.getElementById("tojson");
  var table = document.getElementById("show1");
  var j = [].reduce.call(table.rows, function(res, row) {
      res["{"+"No"+row.cells[0].innerText] =row.cells[0].innerText;
      res["Username"+row.cells[0].innerText] = row.cells[1].innerText;
      res["Bdata"+row.cells[0].innerText] = "";
      res["Name"+row.cells[0].innerText] =row.cells[2].innerText;
      res["Program"+row.cells[0].innerText] = row.cells[3].innerText;
      res["Mobile"+row.cells[0].innerText] = ""+"}";
   return res;
  },{});
  tjsn.value=JSON.stringify(j, null, 4,{});
}


