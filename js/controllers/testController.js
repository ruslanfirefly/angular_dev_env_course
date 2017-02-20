export default class testController {
    constructor($timeout) {
        "ngInject";
        this.$timeout = $timeout;
        console.log(this.$timeout);
        this.text = "tello"
    }

    panic(){
        alert("hello");

        this.text = "btn";
    }
}