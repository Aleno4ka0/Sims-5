var rest = 75
var happy = 20
var food = 50
var money = 100

var restZero = false
var happyZero = false
var foodZero = false

function restart(){
    rest = 75
    happy = 20
    food = 50
    money = 100
    restZero = false
    happyZero = false
    foodZero = false
}

function validateRest (){
    if(rest == 0){
        if(restZero){
            alert('Вы умерли от усталости')
            restart()
        }else{
            restZero = true
        }
    }else{
        foodZero = false
    }

}
function validateHappy (){
    if(happy == 0){
        if(happyZero){
            alert('Вы умерли с горя')
            restart()
        }else(happyZero = true)
    }
    else{
        happyZero = false
    }

}
function validateFood (){
    if(food == 0){
        if(foodZero){
            alert('Вы умерли от голода')
            restart()
        }else(foodZero = true)
    }   
    else{
        foodZero = false
    }
}

refresh()
clearInfo()



function plus(num1, num2){
    var summ = num1 + num2 
    if(summ > 100){
        summ = 100
    }
    if(summ < 0){
        summ = 0
    }
    return summ
    
}

function refresh(){
    document.getElementById("happy").style.width = happy + '%'
    document.getElementById("happy").innerHTML = happy + '%'

    document.getElementById("rest").style.width = rest + '%'
    document.getElementById("rest").innerHTML = rest + '%'

    document.getElementById("food").style.width = food + '%'
    document.getElementById("food").innerHTML = food + '%'

    document.getElementById("money").innerHTML = money
}
function changeValues(_rest, _happy, _food, _money){

    if(money + _money < 0){
        alert('У вас закончились деньги')
    }else{
        money =  money + _money
        rest = plus(rest, _rest)
        happy = plus(happy, _happy)
        food = plus(food, _food)
    }
    validateFood()
    validateRest()
    validateHappy()
    refresh()
}

function printInfo(_rest, _happy, _food, _money){
    var result = ""
    if(_rest != 0){
        result += "<p>Отдых: " + (_rest > 0 ? "+" + _rest : _rest) + "</p>"
    }

    if(_happy != 0){
        result += "<p>Счастье: " + (_happy > 0 ? "+" + _happy : _happy) + "</p>"
    }

    if(_food != 0){
        result += "<p>Еда: " + (_food > 0 ? "+" + _food : _food) + "</p>"
    }

    if(_money != 0){
        result += "<p>Деньги: " + (_money > 0 ? "+" + _money : _money) + "</p>"
    }
    document.getElementById("result").innerHTML = result

}

function clearInfo(){
    document.getElementById("result").innerHTML = "<p>Выберите действие</p>"  
}