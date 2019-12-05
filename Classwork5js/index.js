// function Example() {
//     this.field1 = 123;
//     this.field2 = 'qweqwe';
//     this.log = function() {
//             console.log(this)
//     };
// }
// const ex1 = new Example();
//     console.log(ex1)

function Car(selector, speed, distance) {
    this.carWidth = 100;
    this.car = document.querySelector(selector)
    this.car.style.width = `${this.carWidth}px;`
    this.speed = speed;
    this.distance = distance;
    this.isRun = null;
    this.run = function() { 
        if (this.isRun) return;
        this.isRun = setInterval(() => {
                this.distance+= this.speed;

                const maxWidth = window.innerWidth;
                const currentWidth = this.distance + this.carWidth;
                if (currentWidth >= maxWidth) {
                    this.stop();
                    this.distance = maxWidth - this.carWidth;
                }
                this.move();
        }, 1000);
    }
    this.accelerate = function() {
        this.speed *= 2;
    }
    this.stop = function() {
        clearInterval(this.isRun);
        this.isRun = null;
    }

    this.move = function() {
    this.car.style.left = `${this.distance}px`;
    }
}
const car1 = new Car('#car1', 10, 0);
const car2 = new Car('#car2', 5, 0);