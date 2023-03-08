function checkDateCarRental() {
    let pickupDate = document.forms["form-car-rental"]["pickup-date"].value;
    let returnDate = document.forms["form-car-rental"]["return-date"].value;
    let curDate = new Date().toLocaleString();

    if (curDate > pickupDate || returnDate < pickupDate) {
        alert("Invalid Pickup Date or/and Return Date!");
        return false;
    }

    return true;
}
