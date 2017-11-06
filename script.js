/**********************Бургер***************************/
var burgTap = function () {
    var menu = document.getElementById('card-bordered'),
        burg = document.getElementById('menu-icon');


    menu.onclick = function () {
        this.classList.toggle('menu-icon-open');
        console.log("Not error");
    };

};



burgTap();

/*************************************************************/
