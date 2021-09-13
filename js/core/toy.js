//đồ chơi
class Toy {

    constructor(id,name,price,photo, point,  time ){
        this.point = point;
        this.price = price;
        this.id = id;
        this.time = time;
        this.name = name;
        this.photo = photo;
    }

    set setId(id) {
        this.id = id;
    }

    set setName(name) {
        this.name = name;
    }

    set setPrice(price) {
        this.price = price;
    }

    set setPhoto(photo) {
        this.photo = photo;
    }

    set setPoint(point) {
        this.point = point;
    }

    set setTimes(times){
        this.times = times;
    }

    get getPrice() {
        return this.price;
    };

    get getPoint() {
        return this.point;
    }

    get getId() {
        return this.id;
    }

    get getTime(){
        return this.time;
    }
    get getName() {
        return this.name;
    }

    get getPhoto(){
        return this.photo;
    }
}