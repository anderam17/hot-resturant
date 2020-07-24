

$(".submit").on("click", function (event) {
    event.preventDefault();

    var newReservation = { //why the .trim
        customerName: $("#reserve-name").val().trim(),
        phoneNumber: $("#reserve-phone").val().trim(),
        customerEmail: $("#reserve-email").val().trim(),
        customerID: $("#reserve-id").val().trim(),
    };
    console.log(newReservation);

    $.post("/api/tables", newReservation, function (data) {
        if (data) {
            alert("You Are Booked at our Restaurant!");

        } else {
            alert("Sorry Your On the Waitlist");
        }
        //you should clear out the form here
    })
})
