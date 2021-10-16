const driveHeader = document.getElementById("drive-header");
const eatHeader = document.getElementById("eat-header");
const rideHeader = document.getElementById("ride-header");
const rideBody = document.getElementById("ride-body");
const driveBody = document.getElementById("drive-body");
const eatBody = document.getElementById("eat-body");
const uberServices= document.getElementById("uber-services");

// Event Listeners

driveHeader.addEventListener("click", 
()=>{
    displayDriveSection();
}
)

eatHeader.addEventListener("click", 
()=>{
    displayEatSection();
}
)

rideHeader.addEventListener("click", ()=>{
    displayRideSection();
})

function displayEatSection(){
    eatBody.style.display = "block";
    driveBody.style.display="none";
    rideBody.style.display="none";

    eatHeader.style.borderBottom = "3px solid #000";
    driveHeader.style.borderBottom="none";
    rideHeader.style.borderBottom="none";


uberServices.style.backgroundImage = "url(../images/eat.jpeg)";


}

function displayDriveSection(){
    eatBody.style.display = "none";
    driveBody.style.display="block";
    rideBody.style.display="none";

    eatHeader.style.borderBottom = "none";
    driveHeader.style.borderBottom="3px solid #000";
    rideHeader.style.borderBottom="none";


uberServices.style.backgroundImage = "url(../images/drive.jpeg)";


}

function displayRideSection(){
    eatBody.style.display = "none";
    driveBody.style.display="none";
    rideBody.style.display="block";

    eatHeader.style.borderBottom = "none";
    driveHeader.style.borderBottom="none";
    rideHeader.style.borderBottom="3px solid #000";


uberServices.style.backgroundImage = "url(../images/ride.jpeg)";


}


