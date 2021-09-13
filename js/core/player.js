
class Player {

    constructor() {
        this.coins = 3000;
        this.foods = [new Food(0, 'Cat Food', 700, './asset/ThucAn/cat_food.png', 3,10), new Food(0, 'Cat Food', 700, './asset/ThucAn/cat_food.png', 3,10)];
        this.toys = [];
        this.pet = new Pet();
    }


    get getPet() {
        return this.pet;
    }

    get getFood() {
        return this.foods;
    }

    get getCoin() {
        return this.coins;
    }

    get getToys() {
        return this.toys;
    }

    //mua đồ chơi (thêm đồ chơi vào mảng toys)
    buyToy(toy) {
        if (coins < toy.getPrice) {
            return false;
        }
        this.toys.push(toy);
        toyPrice = toy.getPrice;
        this.coins -= toyPrice;
        return true;
    }

    //mua đồ ăn (thêm đồ ăn vào mảng foods)
    buyFood(food) {
        if (this.foods.indexOf(food) > -1) {
            return false;
        }
        if (coins < food.getPrice) {
            return false;
        }
        this.foods.push(food);
        foodPrice = food.getPrice;
        this.coins -= foodPrice;
        return true;
    }

    set setCoin(newCoin) {
        this.coins = newCoin;
    }

    /*
    cho ăn
    nếu id không khớp với thức ăn người chơi sở hữu sẽ ăn thất bại
    nếu trong khoản thời gian ăn người chơi được thưởng 500 tiền
    */ 
    feed(id, timeNow) {
        // var food = this.findFood(this.foods, id);
        // if (this.foods.indexOf(food) > -1) {
        //     food.feed();
        //     if (timeNow <= 150000 && timeNow >= -150000) {
        //         this.coins += 500;
        //     }
        //     if (food.getTimes == 0) {
        //         this.removeElement(this.foods, food);
        //     }
        //     this.pet.setPoint = this.pet.getPoint + food.getPoint;
        // }
        this.pet.setPoint = this.pet.getPoint + 10;
    }

    /*
    chơi đồ chơi
    nếu như đang trong thời gian chơi pet được nhận (1 + (tổng điểm đồ chơi)) điểm cảm xúc
    */
    playToy(timeNow) {
        if (timeNow >= this.pet.getTimePlayToy) {
            var point_ponus = 1;
            if (this.toys.length > 0) {
                this.toys.forEach(element => {
                    point_ponus += element.getPoint;
                });
            }
            this.pet.setPoint = this.pet.getPoint + point_ponus;
        }
    }

    //xóa phần tử khỏi mảng
    removeElement(array, elem) {
        var index = array.indexOf(elem);
        if (index > -1) {
            array.splice(index, 1);
        }
    }

    //tìm đồ ăn trong mảng
    findFood(arr, id) {
        var result = null;
        arr.forEach((element) => {
            if (element.getId == id) {
                result = element;
                return;
            }
        });
        return result;
    }
}
