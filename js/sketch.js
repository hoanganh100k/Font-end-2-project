
var player = new Player();
var shops = new Shop();
var timeNowPlay = 0;
var pet = player.getPet;
var timeNowFeed = pet.getTimeLunchCountdown / 1000;
var timeLunchCountdown_now = pet.getTimeLunchCountdown;
var timeCountdown = 0;
var timeout = Time.toHHMMSS(timeCountdown);
var foodArr = player.getFood;
var _point = pet.getPoints();
var _timedrop = 0;
var _time_drop = 30000;
var time_ponus = 0;
var timeoutfeed = Time.toHHMMSS(timeNowFeed);

const width = 1000;
const height = 700;
var btnShop;
var mode = 0;
var btnShopBackHome;
var monney = 9999;
var petNommal, petSad;
var petFeel;
let fellingProcess = pet.getPoints(); //Tính Bằng % 100 là 100%
let showBagStatus = false;
let BagProcess = [];
const shopItem = [[
  { 'id': 0, 'name': 'Cat Food', 'price': 700, 'photo': './asset/ThucAn/cat_food.png', 'times': 3 },
  { 'id': 1, 'name': 'Fish Food', 'price': 1000, 'photo': './asset/ThucAn/fish_food.png', 'times': 4 },
  { 'id': 2, 'name': 'Milk', 'price': 3000, 'photo': './asset/ThucAn/milk.png', 'times': 5 }
],
  , [{ 'id': 3, 'name': 'Len', 'price': 1000, 'photo': './asset/DoChoi/len.png', 'point': 1, 'time': 75000 },
  { 'id': 4, 'name': 'Mouse', 'price': 2000, 'photo': './asset/DoChoi/chuot.png', 'point': 2, 'time': 150000 }]]

var arrShopItem = [];
var bagItem = [];
function preload() {
  bg = loadImage('./asset/background/BackgroundChinhMo.png');
  bowl = createImg('./asset/background/bowl.png');
  btnShop = createImg('./asset/iconButton/shop1.png');

  coin = loadImage('./asset/iconButton/coin.png');
  play = loadImage('./asset/iconButton/PlayPet.png');
  bgShop = loadImage('./asset/background/backgroundshop.PNG');
  btnShopBackHome = createImg('./asset/iconButton/house1.png');

  //Cat
  petNommal = loadImage('./asset/Meo/binhthuong/catnormal.png');
  petSad = loadImage('./asset/Meo/buon/catsad.png');

}

function setup() {
  var tempArr = [];

  shopItem.forEach(element => {
    element.forEach(element => {
      tempArr.push({ 'id': element.id, 'btn': createImg(element.photo), 'price': element.price, 'photo': element.photo })
    });
    arrShopItem.push(tempArr);
    tempArr = [];
  });

  //Event Buy
  arrShopItem.forEach(element => {
    element.forEach(element => {
      element.btn.mousePressed(() => {
        if (monney >= element.price) {
          monney -= element.price
          var tempBag = { 'id': element.id }
          bagItem.push(tempBag)
        }
      });
    });
  });

  bowl.mousePressed(() => {
    //Check Balo Item
    var z = findOdd(bagItem)
    bagRemoveAllItem();
    BagProcess = [];
    for (const [key, value] of Object.entries(z)) {
      var itemTheBag = itemBagByID(key);
      var BtnItemBag = createImg(itemTheBag.photo, 120);
      BtnItemBag.size(100, 100)
      BagProcess.push({ 'key': key, 'quality': value, 'btnBag': BtnItemBag })

    }
    BagProcess.forEach(element => {
      element.btnBag.mousePressed(() => {
        element.quality--;
        feed_pet(element.key);
        if (element.quality <= 0) {
          bagItem.splice(element.key)
          element.btnBag.remove();
          var i = 0;
          BagProcess.forEach(element1 => {
            if (element1.key == element.key) {
              BagProcess.splice(i, 1)
            }
            i++;
          })
        } else {
          bagItem.splice(element.key, 1)
        }
      });
    });

    if (showBagStatus == true) {
      showBagStatus = false;
    } else {
      showBagStatus = true;
    }
  });
  btnShop.mousePressed(() => {
    mode = 1;

  });
  createCanvas(width, height);

  const x = setInterval(function () {
    //tăng thời gian
    _timedrop += 1000;
    time_ponus += 1000;
    timeNowPlay += 1000;

    //giữ điểm cảm xúc 100 trong 5p cộng 5000 tiền
    if (time_ponus == 300000 && getPet.getPoint >= 1000) {
      player.setPoint(getPet.getPoint + 5000);
      time_ponus = 0;
    }

    //giảm điểm, nếu đang trong giờ ăn điểm giảm gấp đôi
    if (_timedrop % _time_drop == 0) {
      //nếu điểm cảm xúc == 0 ngưng setInterval (pet die)
      if (pet.getPoint == 0) {
        clearInterval(x);
      }
      if (pet.getLunchTime) {
        _time_drop /= 2;
      }
      pet.setPoint = pet.getPoint - 1;
    }

    //cập nhật điểm liên tục
    fellingProcess = pet.getPoints();

    //đồng hồ cho ăn
    if (timeNowFeed > 0) {
      timeNowFeed--;
      timeoutfeed = Time.toHHMMSS(timeNowFeed);
    }

    //thời gian hiện tại
    timeLunchCountdown_now-=1000;

    //set trạng thái đói
    if (timeNowFeed == 0) {
      pet.setLunchTime = true;
    }

    if (pet.getPoint <= 0) {
      clearInterval(x);
    }
  }, 1000);
}

function draw() {
  if (mode == 0) {
    screenCenter();
    if (showBagStatus == true) {
      showBag();
    } else {
      bagRemoveAllItem();
    }
  } else if (mode == 1) {
    bagRemoveAllItem();
    showBagStatus = false;
    screenShop();
  }
}
function screenCenter() {
  background(bg);

  btnShop.position(width - 150, 30);
  btnShop.size(150, 100)
  btnShopBackHome.position(0, 0);
  btnShopBackHome.size(0, 0);
  //Cat
  image(petNommal, 350, 350, 300, 300)
  //Bowl
  bowl.position(425, 500);
  bowl.size(150, 150);
  //coin Show
  image(coin, 0, 20, 100, 100);
  fill('#e2de8a');
  textSize(60);
  text(monney, 85, 90);
  image(play, 0, height - 150, 100, 100);
  //Eat icon
  //Feel Pet
  var a = 360 * fellingProcess / 100;
  rect(30, 150, 20, 360, 20);
  fill(0, 0, 255);
  rect(30, 150, 20, Math.ceil(a), 20);

  textSize(50);
  text(timeoutfeed, 350, 250);

  //HidenShop
  arrShopItem.forEach(element => {
    element.forEach(element => {
      element.btn.position(0, 0)
      element.btn.size(0, 0)
    });
  });
}
function screenShop() {
  bowl.position(0, 0);
  bowl.size(0, 0);
  background(bgShop)
  image(coin, width - 300, 10, 100, 100);
  fill('#e2de8a');
  textSize(60);
  text(monney, width - 200, 70);
  btnShop.position(0, 0);
  btnShop.size(0, 0)
  //itemShop
  var tempX = 50;
  var tempY = 200;
  arrShopItem.forEach(element => {
    element.forEach(element => {
      element.btn.position(tempX, tempY)
      element.btn.size(200, 200)
      image(coin, tempX - 20, tempY - 100, 100, 100);
      fill('#e2de8a');
      textSize(50);
      text(element.price, tempX + 65, tempY - 32);
      tempX += 350;
    });
    tempX = 50;
    tempY += 300;
  });

  btnShopBackHome.position(10, 10);
  btnShopBackHome.size(100, 100);
  btnShopBackHome.mousePressed(() => {
    mode = 0;
  });
}
function showBag() {
  fill('#2ACAEA')
  rect(550, 150, 400, 200);
  x = 570;
  y = 150;
  BagProcess.forEach(element => {
    element.btnBag.position(x, y)
    textSize(15);
    fill('#D71F5F');
    text('Số Lượng: ' + element.quality, x, 250);
    x += 100
  });
}
function itemBagByID(id) {
  var temp = false;
  shopItem.forEach(element => {
    element.forEach(element => {
      if (element.id == id) {
        temp = element
      }
    });
  });
  return temp;
}
//Tim vật phẩm trùng
function findOdd(para) {
  var count = {};
  para.forEach(function (para) {
    count[para.id] = (count[para.id] || 0) + 1;
  });
  return count;
}
function bagRemoveAllItem() {
  BagProcess.forEach(element => {
    element.btnBag.remove();
  })
}

//cho ăn
function feed_pet(id) {
  player.feed(id, timeLunchCountdown_now);

  timeLunchCountdown_now = pet.getTimeLunchCountdown;
  timeNowFeed = pet.getTimeLunchCountdown / 1000;

  pet.setLunchTime = false;
  _time_drop = 30000;
}

//chơi đồ
function play_toy() {
  player.playToy(timeNowPlay);
  _point = pet.getPoint();
  timeNowPlay = 0;
}

//mua  đồ chơi
function buy_toy(id) {
  var _food = shops.buyToy(id);
  player.buyToy(_food);
}

//mua thức ăn
function buy_food(id) {
  var _toy = shops.buyFood(id);
  player.buyFood(_toy);
  foodArr = player.getFood;
}