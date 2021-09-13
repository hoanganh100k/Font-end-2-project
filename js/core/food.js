//thức ăn
class Food {
    constructor(id, name, price, photo ,times, point){
        this.times = times;
        this.price = price;
        this.id = id;
        this.photo = photo;
        this.name = name;
        this.point = point;
    }

    get getPoint(){
        return this.point;
    }

    get getPrice() {
        return this.price;
    }

    get getTimes() {
        return this.times;
    }

    get getId() {
        return this.id;
    }

    set setPrice(price) {
        this.price = price;
    }

    set setTimes(times) {
        this.times = times;
    }

    set setPoint(point) {
        this.point = point;
    }
    get getPhoto() {
        return this.photo;
    }

    feed() {
        this.times--;
    }
}