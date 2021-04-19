class UI {
  constructor() {
    this.display = document.getElementById("displayRow");
    this.notify = document.getElementById("notification");
  }

  showResults(data) {
    const results = data.airports;
    console.log(data);

    let output = "";

    for (let index = 0; index < results.length; index++) {
      output += "<tr>";

      output += "<td>" + results[index].name + "</td>";
      output += "<td>" + results[index].iata + "</td>";
      output += "<td>" + results[index].state.type + "</td>";
      output += "<td>" + results[index].city + "</td>";
      output += "<td>" + results[index].state.name + "</td>";
      output += "<td>" + results[index].country.name + "</td>";

      output += "</tr>";
    }

    // output += "</tr>";
    this.notify.innerHTML = `
    
    <article class="message is-primary">
    <div class="message-body">
     Showing <span class="tag is-success">${results.length}</span>
     Results for ${data.term.toUpperCase()}
    </div>
  </article>`;

    // Timeout
    setTimeout(() => {
      const currentAlert = document.querySelector(".is-primary");

      if (currentAlert) {
        currentAlert.remove();
      }
    }, 3000);

    this.display.innerHTML = output;
  }

  // Show Alert
  showAlert(data) {
    console.log(data.message);

    this.notify.innerHTML = `
    
    <article class="message is-danger">
    <div class="message-body">
     ${data.message}
    </div>
  </article>`;

    // TimeOut
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message

  clearAlert() {
    const currentAlert = document.querySelector(".is-danger");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  // Spinner

  inputSpinner() {
    const spinner = document.getElementById("loading");
    spinner.classList.add("is-loading");

    setTimeout(() => {
      spinner.classList.remove("is-loading");
    }, 3000);
  }

  // Clear Profile

  clearProfile() {
    this.display.innerHTML = "";
  }
}

export const ui = new UI();
