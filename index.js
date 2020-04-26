let turnCount = 1;
let tdList = document.querySelectorAll("td");
console.log(tdList);

function hantei() {
  //１〜３行目（横）の処理
  for (let i = 0; i < 3; i++) {
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
  for (let i = 0; i < 3; i++) {
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

let getAkimasu = () => {
  let akimasuList = [];
  //中の内容とindex番号を、一つ一つ出力する（＝console.logが別の行として出力され、それぞれを処理できる様になる）
  tdList.forEach((atai, bangou) => {
    console.log(bangou, atai.innerText);

    //（全tdの中で）もしマスが空の場合、マスの番号を末尾に追加。
    if (atai.innerText == "") {
      akimasuList.push(bangou);
      console.log(atai, "akimasuList " + akimasuList);
    }
  });
  return akimasuList;
};

function selectRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function onClickCell(elem) {
  console.log(32);
  //マスに何か文字入っていたら、実行しない
  if (elem.innerText !== "") {
    return;
  }

  if (true) {
    var aa = "hoge";
    let bb = "fuga";

    console.log(aa, bb);
  }

  let result = document.getElementById("result");

  //どちらかが勝っていたらこれ以上進まない
  if (result.innerText !== "") {
    return;
  }

  // let akimasuList = [];
  // let akimasuList = getAkimasu();

  //もし、２で割った時のあまり＝０であれば、、
  if (turnCount % 2 == 0) {
    // console.log(akimasuList);

    // //中の内容とindex番号を、一つ一つ出力する（＝console.logが別の行として出力され、それぞれを処理できる様になる）
    // tdList.forEach(function(atai, bangou) {
    //   console.log(bangou, atai.innerText);

    //   //（全tdの中で）もしマスが空の場合、マスの番号を末尾に追加。
    //   if (atai.innerText == "") {
    //     akimasuList.push(bangou);
    //     console.log(atai, "akimasuList " + akimasuList);
    //   }
    // });

    let akimasuList = getAkimasu();

    //ランダムな場所を選ぶ
    console.log(akimasuList.length);
    let random = selectRandom(akimasuList);
    // let random = akimasuList[Math.floor(Math.random() * akimasuList.length)];
    console.log("random", random);

    tdList[random].innerText = "×";
    console.log("onClickCell", elem.innerText, turnCount);

    turnCount++;
    // 上　= turnCount = turnCount + 1;

    hantei();
  } else {
    elem.innerText = "○";

    //○が入る（＝奇数回）時、クリックイベントを起こす
    console.log("onClickCell", elem.innerText, turnCount);

    turnCount++;
    // 上　= turnCount = turnCount + 1;

    hantei();

    let akimasuList = getAkimasu();
    let a = selectRandom(akimasuList);
    document.querySelectorAll("td")[a].click();
  }
  // console.log("onClickCell", elem.innerText, turnCount);

  // turnCount++;
  // // 上　= turnCount = turnCount + 1;

  // hantei();
}

// 複合体の説明　by 大谷くん
// let g = function() {
//   console.warn("hello");
// };

// let aa = {
//   hoge: 42,
//   f: g
// };

// console.log(aa.hoge);
// aa.f();
