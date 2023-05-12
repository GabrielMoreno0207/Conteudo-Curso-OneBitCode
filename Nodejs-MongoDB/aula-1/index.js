const moment = require("moment/moment");

function sayMyName(name) {
  console.log(name);
  console.log(moment().format("HH:mm"));
}

sayMyName("Gabriel Moreno");
