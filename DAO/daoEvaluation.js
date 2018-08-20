function loadEvaluations(){
    var requestEvaluations = new XMLHttpRequest();
    requestEvaluations.open('GET',URL_EVALUATIONS, false);
    requestEvaluations.setRequestHeader("Authorization", "forlogic-5f180");
    requestEvaluations.setRequestHeader("Content-type", "application/javascript");
    requestEvaluations.send();
    var requestEvaluations = requestEvaluations.response;
    var evaluations = JSON.parse(requestEvaluations);
    return evaluations;
}

function registerEvaluation(json){
	var request = new XMLHttpRequest();
  	request.open('POST', URL_EVALUATIONS, false);
  	request.setRequestHeader("Authorization", "forlogic-5f180");
  	request.setRequestHeader("Content-type", "application/json ; charset=UTF-8");
  	request.send(json);
}

function loadEvaluationById(id){
    var request = new XMLHttpRequest();
    request.open('GET', URL_EVALUATIONS + id, false);
    request.setRequestHeader("Authorization", "forlogic-5f180");
    request.setRequestHeader("Content-type", "application/json ; charset=UTF-8");
    request.send();
    var request = request.response;
    var evaluations = JSON.parse(request);
    return evaluations;
}

function deleteEvaluation(id){
  var requestCustomers = new XMLHttpRequest();
  requestCustomers.open('DELETE', URL_EVALUATIONS + id, false);
  requestCustomers.setRequestHeader("Authorization", "forlogic-5f180");
  requestCustomers.setRequestHeader("Content-type", "application/json ; charset=UTF-8");
  requestCustomers.send();
}

function editEvaluation(id){

    var rate = document.getElementById("rate"+ id);
    var reason = document.getElementById("reason"+ id);

    var currentEvaluation = loadEvaluationById(id);
    currentEvaluation.rate = rate.value;
    currentEvaluation.reason = reason.value
    var editedEvaluation = JSON.stringify(currentEvaluation);

    var request = new XMLHttpRequest();
    request.open('PUT', URL_EVALUATIONS + id, false);
    request.setRequestHeader("Authorization", "forlogic-5f180");
    request.setRequestHeader("Content-type", "application/json ; charset=UTF-8");
    request.send(editedEvaluation);
}