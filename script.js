import {
  getDatabase,
  get,
  set,
  update,
  remove,
  child,
  ref,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

var roomV, nameV, checkinV, checkoutV;
const db = getDatabase();

var RoomNo = document.getElementById("roomNo");
var TravellerName = document.getElementById("travellerName");
var Checkin = document.getElementById("checkin");
var Checkout = document.getElementById("checkout");

function insertData(e) {
  e.preventDefault();
  readFormData();
  const dbref = ref(db);
  get(child(dbref, "data/" + roomV))
    .then((snapshot) => {
      if (snapshot.exists()) {
        var check = snapshot.val().ROOM_NO;
        if (check == roomV) {
          alert("Room already Booked");
        }
      } else {
        if(roomV==""||nameV==""||checkinV=="")
          {
            alert("Some Fiels are empty")
          }
          else if(roomV<=100 || roomV>=150)
          {
            alert("Invalid Room Number");
          }
          else if(checkoutV!="" && checkinV>checkoutV)
          {
            alert("Invalid Checkout Date");
          }
          else{
        set(ref(db, "data/" + roomV), {
          ROOM_NO: roomV,
          NAME: nameV,
          CHECK_IN: checkinV,
          CHECK_OUT: checkoutV,
          
        })
          .then(() => {
            alert("Room Booked");
            clearFormData();

          })
          .catch((error) => {
            alert("Unsuccessfull"), error;
          });
        }
      }
    })
    .check((error) => {
      alert("Unsuccessful "), error;
    });
  //Code to send data to firebase

}
function getData(e) {
  e.preventDefault();
  readFormData();
  //Code to read the data from firebase
  const dbref = ref(db);
  get(child(dbref, "data/" + roomV))
    .then((snapshot) => {
      if (snapshot.exists()) {
        RoomNo.value = snapshot.val().ROOM_NO;
        TravellerName.value = snapshot.val().NAME;
        Checkin.value = snapshot.val().CHECK_IN;
        Checkout.value = snapshot.val().CHECK_OUT;
      } else {
        alert("No Data Found");
      }
    })
    .check((error) => {
      alert("Unsuccessful "), error;
    });
}
function updateData(e) {
  e.preventDefault();
  readFormData();
//update data in firebase 

if(roomV==""||nameV==""||checkinV=="")
{
    alert("Fields cannot be empty")
}
else if(checkinV>checkoutV)
{
  alert("Invalid Checkout Date");
     }
else if(roomV>=100 || roomV<=150)
{
  if(confirm("Are you sure to update entry"))
  {update(ref(db, "data/" + roomV), {
    NAME: nameV,
    CHECK_IN: checkinV,
    CHECK_OUT: checkoutV,
  })
    .then(() => {
      alert("Room Data Updated successfully");
    })
    .catch((error) => {
      alert("Unsuccessfull"), error;
    });
}}
else
{
  alert("Invalid Room Number");
}
  clearFormData();
}
function deleteData(e) {
  e.preventDefault();
  readFormData();
//Delete From firebase  
if(roomV=="")
{
    alert("Fields cannot be empty")
}
else
{if(confirm("Are you sure you want to delete ?"))
{
  remove(ref(db, "data/" + roomV), {
    
  })
    .then(() => {
      alert("Room Data Deleted successfully");
    })
    .catch((error) => {
      alert("Unsuccessfull", error);
    });
  }}
  clearFormData();
}

function readFormData(e) {
  roomV = RoomNo.value;
  nameV = TravellerName.value;
  checkinV = Checkin.value;
  checkoutV = Checkout.value;

  console.log(roomV, nameV, checkinV, checkoutV);
}

function clearFormData() {
  RoomNo.value = "";
  TravellerName.value = "";
  Checkin.value = "";
  Checkout.value = "";
}
document.querySelectorAll(".btn")[0].onclick = insertData;
document.querySelectorAll(".btn")[1].onclick = getData;
document.querySelectorAll(".btn")[2].onclick = updateData;
document.querySelectorAll(".btn")[3].onclick = deleteData;
