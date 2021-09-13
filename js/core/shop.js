
class Shop {

    constructor() {
        this.toys = [
            new Toy(3, 'Len', 1000, './asset/DoChoi/len.png', 1, 75000),
            new Toy(4, 'Mouse', 2000, './asset/DoChoi/chuot.png', 2, 150000)];
        this.foods = [new Food(0, 'Cat Food', 700, './asset/ThucAn/cat_food.png', 3,10),
        new Food(1, 'Fish Food', 1000, './asset/ThucAn/fish_food.png', 4,15),
        new Food(2, 'Milk', 3000, './asset/ThucAn/milk.png', 5,20)];
    }

    get getFoods() {
        return this.foods;
    }

    get getToys() {
        return this.toys;
    }

    buyToy(id) {
        var result = 1;
        this.toys.forEach(element => {
            if (element.getId == id) {
                result = element;
            }
        });
        return result;
    }

    buyFood(id) {
        var result = 1;
        this.foods.forEach(element => {
            if (element.getId == id) {
                result = element;
            }
        });
        return result;
    }
}