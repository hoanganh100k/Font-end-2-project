class Pet {
    constructor(){
        this.point = 100;
        this.lunchTime = false;
        this.timeDrop = 30000;
        this.timeLunchCountdown = 600000;
        this.timePlayToy = 15000;
    
    }

    get getTimePlayToy() {
        return this.timePlayToy;
    }

    get getTimeLunchCountdown() {
        return this.timeLunchCountdown;
    }

    set setPoint(newPoint) {
        this.point = newPoint;
    }

    get getPoint() {
        return this.point;
    }

    set setLunchTime(newLunchTime) {
        this.lunchTime = newLunchTime;
    }

    get getLunchTime() {
        return this.lunchTime;
    }

    get getFeel() {
        var result = null;
         
        if (this.point <= 0) {
            result = 'die';
        }else if (this.lunchTime) {
            result = 'hungry';
        } else {
            if (this.point > 50) {
                result = 'happy';
            } else {
                result = 'sad';
            }
        }
        return result;
    }

    getPoints(){
        if(this.point >= 100){
            return 100;
        }
        return this.point;
    }
}