function getRecentMonths(){
  var data = new Date();
  var currentYear = data.getFullYear();
  var currentMonth = data.getMonth()+1;
  //var currentMonth = 11;
  var data = new Date();
  var now = "";
  var preMonth = "";
  var prePreMonth = "";
  var blackList = [];
  var year= String(currentYear).substring(2,4);
  if (currentMonth === 2){
    now =  "02/" + year;
    preMonth = "01/" + year;
    prePreMonth = "12/" + parseInt(year - 1);
  }else if (currentMonth === 1){
    now =  "01/" + year;
    preMonth = "12/" + parseInt(year - 1);
    prePreMonth = "11/" + parseInt(year - 1);
  }else{
      now = currentMonth + "/" + year;
      if(now.length === 4)
        now = "0" + now;
      preMonth = currentMonth -1 + "/" + year;
      if(preMonth.length === 4)
        preMonth = "0" + preMonth;
      prePreMonth = currentMonth -2 + "/" + year;
      if(prePreMonth.length === 4)
        prePreMonth = "0" + prePreMonth;
  }
  blackList.push(now);
  blackList.push(preMonth);
  blackList.push(prePreMonth);
  return blackList;
}

function formatDate(date){
  return date.substring(3,6) + date.substring(8,10);
}

function formatInvertedDate(date){
  return date.substring(5,7) + "/" + date.substring(2,4);
}

function getIdBannedCustomers(blackList, evaluations){
  var banned = [];
  for (var id in evaluations) {
    for (var key in blackList){
      if(evaluations[id].date === blackList[key]){
        banned.push(evaluations[id].idCostumer);
      }
    }
  }
  return banned;
}

function mountEvaluationList(dateList, domComponent){
  for (var id in dateList) {
    var li = document.createElement("li");
    var div = document.createElement("div");
    var h6 = document.createElement("h6");
    var small = document.createElement("small");
    var spam = document.createElement("spam");
    var i = document.createElement("i");
    var ii = document.createElement("i");
    var a = document.createElement("a");
    li.classList.add("list-group-item");
    li.classList.add("d-flex");
    li.classList.add("justify-content-between");
    li.classList.add("lh-condensed");
    domComponent.appendChild(li);
    li.appendChild(div);
    li.appendChild(spam);
    div.appendChild(h6);
    div.appendChild(small);
    spam.appendChild(i);
    spam.appendChild(ii);
    small.appendChild(a);
    spam.classList.add("text-muted");
    small.classList.add("text-muted");
    i.classList.add("material-icons");
    ii.classList.add("material-icons");
    h6.textContent=dateList[id];
    i.textContent="edit";
    ii.textContent="delete_forever";
    small.textContent="Ver lista de clientes";
  }
}

