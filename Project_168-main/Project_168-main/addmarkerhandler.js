AFRAME.registerComponent('markerhandler', {

    init: async function () {
        this.el.addEventListner("markerFound", ()=>{
            console.log("marker is found");
            this.handleMarkerFound();

        });

        this.el.addEventListner("markerLost",()=>{
            console.log("marker is lost");
            this.handleMarkerLost();
        })

    },



handleMarkerFound: function () {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var ratingButton = document.getElementById("order-button");
    var orderButtton = document.getElementById("order-summary-button");

    // Handling Click Events
    ratingButton.addEventListener("click",  ()=> {
      swal({
        icon: "warning",
        title: "Rate Dish",
        timer: 2000,
        buttons: false
      });
    });

    orderButtton.addEventListener("click", () => {
      swal({
        icon: "warning",
        title: "Order Summary",
        text: "Work In Progress"
      });
    });

},

    handleMarkerLost: function () {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  }

});