var bamfordArrs = [
    "/gldt/images/Bamford1.png",
    "/gldt/images/Bamford2.png",
    "/gldt/images/Bamford3.png",
    "/gldt/images/Bamford4.png",
    "/gldt/images/Bamford5.png",
    "/gldt/images/Bamford6.png",
    "/gldt/images/Bamford7.png",
    "/gldt/images/Bamford8.png",
    "/gldt/images/Bamford9.png",
    "/gldt/images/Bamford10.png"
]


var level = 1; 

var index = 0;

function getRandom(){
    var ranNum = Math.floor(Math.random() * 100);
    return ranNum;
}

var s = getRandom();
console.log(s);

function move(num) {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= num) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

function upgradeCard(){
    var num = getRandom();
    switch (level){
        case 1:
            {
                if (num<99){
                    document.getElementById("status").innerHTML = "Thành công";
                    document.getElementById("myBar").style.backgroundColor = "green";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level++;
                    document.getElementById("test").src = bamfordArrs[level-1];
                }
                else {
                    document.getElementById("status").innerHTML = "Thất bại";
                    document.getElementById("myBar").style.backgroundColor = "red";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level = 1;
                }
                break;
            }
        case 2:
            {
                if (num<80){
                    document.getElementById("status").innerHTML = "Thành công";
                    document.getElementById("myBar").style.backgroundColor = "green";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level++;
                    document.getElementById("test").src = bamfordArrs[level-1];
                }
                else {
                    document.getElementById("status").innerHTML = "Thất bại";
                    document.getElementById("myBar").style.backgroundColor = "red";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level = 1;
                    document.getElementById("test").src = bamfordArrs[level-1];
                }
                break;
            }
        case 3:
            {
                if (num<65){
                    document.getElementById("status").innerHTML = "Thành công";
                    document.getElementById("myBar").style.backgroundColor = "green";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level++;
                    document.getElementById("test").src = bamfordArrs[level-1];
                }
                else {
                    document.getElementById("status").innerHTML = "Thất bại";
                    document.getElementById("myBar").style.backgroundColor = "red";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level = Math.floor(Math.random() * (level-1) ) + 1;
                    document.getElementById("test").src = bamfordArrs[level-1];
                }
                break;
            }
        case 4:
            {
                if (num<50){
                    document.getElementById("status").innerHTML = "Thành công";
                    document.getElementById("myBar").style.backgroundColor = "green";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level++;
                    document.getElementById("test").src = bamfordArrs[level-1];
                }
                else {
                    document.getElementById("status").innerHTML = "Thất bại";
                    document.getElementById("myBar").style.backgroundColor = "red";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level = Math.floor(Math.random() * (level-1) ) + 1;
                    document.getElementById("test").src = bamfordArrs[level-1];
                }
                break;
            }
        case 5:
            {
                if (num<26){
                    document.getElementById("status").innerHTML = "Thành công";
                    document.getElementById("myBar").style.backgroundColor = "green";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level++;
                    document.getElementById("test").src = bamfordArrs[level-1];
                }
                else {
                    document.getElementById("status").innerHTML = "Thất bại";
                    document.getElementById("myBar").style.backgroundColor = "red";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level = Math.floor(Math.random() * (level-1) ) + 1;
                    document.getElementById("test").src = bamfordArrs[level-1];
                }
                break;
            }
        case 6:
            {
                if (num<16){
                    document.getElementById("status").innerHTML = "Thành công";
                    document.getElementById("myBar").style.backgroundColor = "green";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level++;
                    document.getElementById("test").src = bamfordArrs[level-1];
                }
                else {
                    document.getElementById("status").innerHTML = "Thất bại";
                    document.getElementById("myBar").style.backgroundColor = "red";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level = Math.floor(Math.random() * (level-1) ) + 1;
                    document.getElementById("test").src = bamfordArrs[level-1];
                }
                break;
            }
        case 7:
            {
                if (num<8){
                    document.getElementById("status").innerHTML = "Thành công";
                    document.getElementById("myBar").style.backgroundColor = "green";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level++;
                    document.getElementById("test").src = bamfordArrs[level-1];
                }
                else {
                    document.getElementById("status").innerHTML = "Thất bại";
                    document.getElementById("myBar").style.backgroundColor = "red";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level = Math.floor(Math.random() * (level-1) ) + 1;
                    document.getElementById("test").src = bamfordArrs[level-1];
                }
                break;
            }
        case 8:
            {
                if (num<4){
                    document.getElementById("status").innerHTML = "Thành công";
                    document.getElementById("myBar").style.backgroundColor = "green";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level++;
                    document.getElementById("test").src = bamfordArrs[level-1];
                }
                else {
                    document.getElementById("status").innerHTML = "Thất bại";
                    document.getElementById("myBar").style.backgroundColor = "red";
                    move(num);
                    document.getElementById("myBar").innerHTML = num;
                    level = Math.floor(Math.random() * (level-1) ) + 1;
                    document.getElementById("test").src = bamfordArrs[level-1];
                }
                break;
            }
            case 9:
                {
                    if (num<2){
                        document.getElementById("status").innerHTML = "Thành công";
                        document.getElementById("myBar").style.backgroundColor = "green";
                        move(num);
                        document.getElementById("myBar").innerHTML = num;
                        level++;
                        document.getElementById("test").src = bamfordArrs[level-1];
                    }
                    else {
                        document.getElementById("status").innerHTML = "Thất bại";
                        document.getElementById("myBar").style.backgroundColor = "red";
                        move(num);
                        document.getElementById("myBar").innerHTML = num;
                        level = Math.floor(Math.random() * (level-1) ) + 1;
                        document.getElementById("test").src = bamfordArrs[level-1];
                    }
                    break;
                }
    }
    setInterval(defaultImg,200);
    setInterval(effectImg,500);
    
}




var effectImg = function scaleDown(){
    document.getElementById("test").style.transform = "scale(0.9)";
    document.getElementById("test").style.transitionDuration = "1s";
}

var defaultImg = function scaleUp(){
    document.getElementById("test").style.transform = "scale(1.2)";
    document.getElementById("test").style.transitionDuration = "1s";
}

