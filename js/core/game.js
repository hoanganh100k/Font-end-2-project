
/**
 * file này xem tham khảo
 * xong pj xóa
 */
const time = document.getElementById("time");
const point = document.getElementById("point");
const coin = document.getElementById("coin");
const foods = document.getElementById("foods");
const shop = document.getElementById("shop");
const feel = document.getElementById("feel");
const hungdry = document.getElementById("hungdry");
const hungdryTime = document.getElementById("hungdryTime");

var player = new Player();
var shops = new Shop();
var timeNowPlay = 0;
var pet = player.getPet;
var timeNowFeed = pet.getTimeLunchCountdown / 1000;
var timeLunchCountdown_now = pet.getTimeLunchCountdown;
var timeCountdown = 0;
var timeout = Time.toHHMMSS(timeCountdown);
var foodArr = player.getFood;
var _point = pet.getPoint();
var _timedrop = 0;
var _time_drop = 30000;
time.innerHTML = timeout;
time.value = timeout;
var time_ponus = 0;



hungdryTime.innerHTML = Time.toHHMMSS(timeNowFeed);
hungdryTime.value = Time.toHHMMSS(timeNowFeed);


//cảm xúc
feel.innerHTML = pet.getFeel;

foodHTML();
shopHTML();

//shop
function shopHTML() {
    var food_html = '';
    var toy_html = '';
    var shop_html = '';

    shops.getFoods.forEach(function (element) {
        food_html += '<div>' + '<button onclick="buy_food('
            + element.getId
            + ')">food '
            + element.getId
            + '</button>'
            + '</div>';
    });

    shops.getToys.forEach(function (element) {
        toy_html += '<div>' + '<button onclick="buy_toy('
            + element.getId
            + ')">toy '
            + element.getId
            + '</button>'
            + '</div>';
    });

    shop_html = toy_html + food_html;

    shop.innerHTML = shop_html;
}

//thức ăn
function foodHTML() {
    foods.innerHTML = '';
    foodArr.forEach(function (element) {
        foods.innerHTML += '<button onclick="feed_pet('
            + element.getId
            + ')">feed'
            + element.getId
            + '</button>';
    });
}

//bắt đầu
function start() {
    time_out();
}

//tiền
coin.innerHTML = player.getCoin;

//điểm
point.innerHTML = _point;


function time_out() {
    const x = setInterval(function () {
        //giảm điểm
        _timedrop += 1000;
        time_ponus += 1000;
        if(time_ponus == 300000 && getPet.getPoint >=1000) {
            player.setPoint(getPet.getPoint + 5000);
            time_ponus = 0;
        }
        if (_timedrop % _time_drop == 0) {
            if (pet.getPoint == 0) {
                clearInterval(x);
            }
            if (pet.getLunchTime) {
                _time_drop /= 2;
            }
            pet.setPoint = pet.getPoint - 1;
        }

        //đồng hồ chính
        var timeCountdown1 = Time.toINT(time.value);
        timeCountdown1++;
        var timeout1 = Time.toHHMMSS(timeCountdown1);
        time.innerHTML = timeout1;
        time.value = timeout1;

        //tăng thời gian chơi đồ
        timeNowPlay += 1000;

        _point = pet.getPoint();
        point.innerHTML = _point;
        feel.innerHTML = pet.getFeel;
        hungdry.innerHTML = pet.getLunchTime;


        //đồng hồ cho ăn
        var feedCountdown1 = Time.toINT(hungdryTime.value);
        if (feedCountdown1 > 0) {
            feedCountdown1--;
        }
        var timeoutfeed = Time.toHHMMSS(feedCountdown1);
        hungdryTime.innerHTML = timeoutfeed;
        hungdryTime.value = timeoutfeed;
        timeLunchCountdown_now -= 1000;

        //set giờ ăn
        if (feedCountdown1 == 0) {
            pet.setLunchTime = true;
        }

        coin.innerHTML = player.getCoin;


        if (pet.getPoint <= 0) {
            clearInterval(x);
        }
    }, 1000);
}

//feed
function feed_pet(id) {
    player.feed(id, timeLunchCountdown_now);
    foodArr = player.getFood;
    
    timeLunchCountdown_now = pet.getTimeLunchCountdown;
    timeNowFeed = pet.getTimeLunchCountdown / 1000;
    
    pet.setLunchTime = false;
    _time_drop = 30000;
}

//chơi đồ chơi
function play_toy() {
    player.playToy(timeNowPlay);
    _point = pet.getPoint();
    point.innerHTML = _point;
    timeNowPlay = 0;
}

//mua  đồ chơi
function buy_toy(id) {
    var _food = shops.buyToy(id);
    player.buyToy(_food);
    coin.innerHTML = player.getCoin;
}


//mua thức ăn
function buy_food(id) {
    var _toy = shops.buyFood(id);
    player.buyFood(_toy);
    foodArr = player.getFood;
    foodHTML();
    coin.innerHTML = player.getCoin;
}