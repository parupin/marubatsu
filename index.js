var turnCount = 1;

function hantei() {
  var tdList = document.querySelectorAll("td");

  //１〜３行目（横）の処理
  for (var i = 0; i < 3; i++) {
    if (tdList[i * 3].innerText !== "") {
      if (
        tdList[i * 3].innerText == tdList[i * 3 + 1].innerText &&
        tdList[i * 3].innerText == tdList[i * 3 + 2].innerText
      ) {
        result.innerText = tdList[i * 3].innerText + "の勝ち";
      }
    }
  }

  //１〜３列目（縦）の処理
  for (var i = 0; i < 3; i++) {
    if (tdList[i].innerText !== "") {
      if (
        tdList[i].innerText == tdList[i + 3].innerText &&
        tdList[i].innerText == tdList[i + 6].innerText
      ) {
        result.innerText = tdList[i].innerText + "の勝ち";
      }
    }
  }

  //左上から斜めの処理
  // if (tdList[0].innerText !== "") {
  if (
    tdList[0].innerText !== "" &&
    tdList[0].innerText == tdList[4].innerText &&
    tdList[0].innerText == tdList[8].innerText
  ) {
    result.innerText = tdList[0].innerText + "の勝ち";
  }
  // }

  //右上から斜めの処理
  // if (tdList[2].innerText !== "") {
  if (
    tdList[2].innerText !== "" &&
    tdList[2].innerText == tdList[4].innerText &&
    tdList[2].innerText == tdList[6].innerText
  ) {
    result.innerText = tdList[2].innerText + "の勝ち";
  }

  //引き分け
  if (result.innerText == "" && turnCount == 10) {
    result.innerText = "引き分け！";
  }
}

function onClickCell(elem) {
  if (elem.innerText !== "") {
    return;
  }

  var result = document.getElementById("result");

  if (result.innerText !== "") {
    return;
  }

  if (turnCount % 2 == 0) {
    elem.innerText = "×";
  } else {
    elem.innerText = "○";
  }
  console.log("onClickCell", elem.innerText, turnCount);

  turnCount++;
  // 上　= turnCount = turnCount + 1;

  console.log(turnCount);

  hantei();
}
