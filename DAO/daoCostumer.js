function deleteCostumer(id){
    var requestCustomers = new XMLHttpRequest();
    requestCustomers.open('DELETE', URL_COSTUMER + id, false);
    requestCustomers.setRequestHeader("Authorization", "forlogic-5f180");
    requestCustomers.setRequestHeader("Content-type", "application/json ; charset=UTF-8");
    requestCustomers.send();
    refresh();
}

function loadCostumerById(id){
    var requestCustomers = new XMLHttpRequest();
    requestCustomers.open('GET', URL_COSTUMER + id, false);
    requestCustomers.setRequestHeader("Authorization", "forlogic-5f180");
    requestCustomers.setRequestHeader("Content-type", "application/json ; charset=UTF-8");
    requestCustomers.send();
    var requestCustomers = requestCustomers.response;
    var responseJsonCustomers = JSON.parse(requestCustomers);
    return responseJsonCustomers;
}

function editCostumer(){
    var currentCostumer = loadCostumerById(currentId);
    currentCostumer.name = inputName.value;
    currentCostumer.contactName = inputContactName.value;
    currentCostumer.date = inputDate.value;
    var editedCostumer = JSON.stringify(currentCostumer);

    var requestCustomers = new XMLHttpRequest();
    requestCustomers.open('PUT', URL_COSTUMER + currentId, false);
    requestCustomers.setRequestHeader("Authorization", "forlogic-5f180");
    requestCustomers.setRequestHeader("Content-type", "application/json ; charset=UTF-8");
    requestCustomers.send(editedCostumer);
    refresh();
}

function registerCostumer(){
    var inputName = document.getElementById("inputName");
    var inputContactName = document.getElementById("inputContactName");
    var inputDate = document.getElementById("inputDate");
    
    var costumer = new Costumer();
    costumer.contactName = inputContactName.value;
    costumer.entryDate = inputDate.value;
    costumer.name = inputName.value;
    costumer.permition = "0";
    costumer.rate = "0"

    var newCostumer = JSON.stringify(costumer);
    var requestCustomers = new XMLHttpRequest();
    requestCustomers.open('POST', URL_COSTUMER, false);
    requestCustomers.setRequestHeader("Authorization", "forlogic-5f180");
    requestCustomers.setRequestHeader("Content-type", "application/json ; charset=UTF-8");
    requestCustomers.send(newCostumer);
}

function loadCostumerList(){
      var requestCustomers = new XMLHttpRequest();
      requestCustomers.open('GET', URL_COSTUMER, false);
      requestCustomers.setRequestHeader("Authorization", "forlogic-5f180");
      requestCustomers.setRequestHeader("Content-type", "application/javascript");
      requestCustomers.send();
      var requestCustomers = requestCustomers.response;
      var responseJsonCustomers = JSON.parse(requestCustomers);
      return responseJsonCustomers;
  }