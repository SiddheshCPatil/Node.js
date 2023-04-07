const EventEmiiter = require("events");

const event = new EventEmiiter();

// Event Defining
event.on("sayHello", () => {
    console.log("Hello to Siddhesh!");
})

// Event Firing
event.emit("sayHello");

event.on("checkPage", (sc, msg) => {
    console.log(`Status Code is ${sc} and Message is ${msg}`);

});

event.emit("checkPage", 200, "Fine");