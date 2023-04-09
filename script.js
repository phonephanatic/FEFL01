const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
let carMiles = {
  odometer: 5000,
  traveled: 250,
  getUpdatedOdometer: function () {
    return this.odometer + this.traveled;
  },
};

carMiles.getUpdatedOdometer();

let 