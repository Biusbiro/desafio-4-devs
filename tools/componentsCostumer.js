function dataToInput(id){
    var currentCostumer = loadCostumerById(id);
    inputName.value = currentCostumer.name;
    inputContactName.value = currentCostumer.contactName;
    inputDate.value = currentCostumer.date;
    currentId = id;
    showButtonEdit();
}

function showButtonRegister(){
    editBtn = document.getElementById("editButton");
    cancelBtn = document.getElementById("cancelButton");
    registerBtn = document.getElementById("newButton");
    editBtn.classList.add("d-none");
    cancelBtn.classList.add("d-none");
    registerBtn.classList.add("d-block");
    editBtn.classList.remove("d-block");
    cancelBtn.classList.remove("d-block");
    registerBtn.classList.remove("d-none");
  }

  function showButtonEdit(){
    editBtn = document.getElementById("editButton");
    cancelBtn = document.getElementById("cancelButton");
    registerBtn = document.getElementById("newButton");
    editBtn.classList.add("d-block");
    cancelBtn.classList.add("d-block");
    registerBtn.classList.add("d-none");
    editBtn.classList.remove("d-none");
    cancelBtn.classList.remove("d-none");
    registerBtn.classList.remove("d-block");
  }

  function clearFields(){
    currentId = "";
    inputName.value = "";
    inputContactName.value = "";
    inputDate = "";
    showButtonRegister();
  }

  function clearList(){
    var list = document.getElementById("customerList");
    list.innerHTML = '';
  }

  function refresh(){
    clearList()
    mountCustomerList()
  }

function mountCustomerList(costumers){
    var list = document.getElementById("customerList");
    var size = document.getElementById("sizeCustomer");
    size.textContent = Object.keys(costumers).length;
    var evaluations = loadEvaluations();

    for (var id in costumers) {
      var costumerEvaluations = getEvaluationsByCostumer(id, evaluations);
      var li = document.createElement("li");
      var div = document.createElement("div");
      var h6 = document.createElement("h6");
      var small = document.createElement("small");
      var smallRank = document.createElement("small");
      var spam = document.createElement("spam");
      var i = document.createElement("i");
      var ii = document.createElement("i");
      var br = document.createElement("br");
      i.setAttribute("onclick","dataToInput('" + id + "');");
      ii.setAttribute("onclick","deleteCostumer('" + id + "');");
      var a = document.createElement("a");
      li.classList.add("list-group-item");
      li.classList.add("d-flex");
      li.classList.add("justify-content-between");
      li.classList.add("lh-condensed");
      list.appendChild(li);
      li.appendChild(div);
      li.appendChild(spam);
      div.appendChild(h6);
      div.appendChild(small);
      div.appendChild(br);
      div.appendChild(smallRank);
      spam.appendChild(i);
      spam.appendChild(ii);
      small.appendChild(a);
      spam.classList.add("text-muted");
      small.classList.add("text-muted");
      smallRank.classList.add("text-muted");
      i.classList.add("material-icons");
      ii.classList.add("material-icons");
      h6.textContent=costumers[id].name;
      small.textContent="Contato: " + costumers[id].contactName;
      smallRank.textContent="  Status: " + rankCostumer(costumerEvaluations);
      i.textContent="edit";
      ii.textContent="delete_forever";
    }
}

function getEvaluationsByCostumer(id, evaluations){
  var evaluationsOfId = [];
  for (var key in evaluations){
    if (evaluations[key].idCostumer == id){
      evaluationsOfId.push(evaluations[key]);
    }
  }
  return evaluationsOfId;
}

function convertMonthFloat(date){
  return parseFloat(date.substring(0,2))*0.01;
}

function convertYearFloat(date){
  return parseFloat(date.substring(3,5));
}

function rankCostumer(evaluations){
  moreRecentDate = 0;
  objectMoreRecentDate = "";
  

  for(var id in evaluations){
    console.log("moreRecentDate " + moreRecentDate);
    if((convertMonthFloat(evaluations[id].date) + convertYearFloat(evaluations[id].date)) > moreRecentDate){
      moreRecentDate = convertMonthFloat(evaluations[id].date) + convertYearFloat(evaluations[id].date);
      objectMoreRecentDate = evaluations[id];
    }
  }

  var rate = objectMoreRecentDate.rate;
  console.log("rate" + rate);
  
  if(rate >= 9){
    return "Promotor";
  }else if(rate === 7 || rate === 8){
    return "Neutro";
  }else if(rate >= 0 && rate < 7){
    return "Detrator";
  }else{
    return "Nenhum";
  }
}