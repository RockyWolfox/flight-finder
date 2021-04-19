import { multi } from "./air-port-codes-api-node";
import { UI, ui } from "./ui";

// Search Airport

const searchAirport = document.getElementById("search");

// Add Event Listener

searchAirport.addEventListener("keyup", (e) => {
  ui.inputSpinner();

  // Get User Input
  const term = e.target.value;

  console.log(term);

  if (term !== "") {
    // Make an HTTP Call to API
    const api = multi({
      key: "9cae7c9607",
      secret: "dee228ce29608b0", // Your API Secret Key: use this if you are not connecting from a web server
      limit: 20,
    });

    api.request(term);

    // SUCCESS we found some airports
    api.onSuccess = (data) => {
      ui.showResults(data);
    };

    // FAIL no airports found
    api.onError = (data) => {
      ui.showAlert(data);
    };
  } else {
    ui.clearProfile();
  }
});
