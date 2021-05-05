
let form  = new Object();
let value  = new Object();
let timerId = setInterval(calc, 200);
let repair_price = document.getElementById('repair_price')

function calc(){
    form.house_type = document.forms.house_type1;
    value.house_type = select__house_type.value;

    form.electrics = document.forms.electrics;
    value.electrics = select__electrics.value;

    form.repair = document.forms.repair;
    value.repair = select__repair.value;

    form.ceiling = document.forms.ceiling;
    value.ceiling = select__ceiling.value;

    form.bathroom = document.forms.bathroom;
    value.bathroom = select__bathroom.value;

    form.floor = document.forms.floor;
    value.floor = select__floor.value;

    form.doors = document.forms.doors;
    value.doors = select__doors.value;

    value.san_range = san_range.value;

    value.repair_range = repair_range.value;

    value.wall_perimeter = wall_perimeter.value;
    
    value.front_door = front_door.checked;
    
        wall_perimeter.value=parseInt(wall_perimeter.value);
        if(isNaN(wall_perimeter.value)){
            value[key]=0;
        }

    let price;

    if(value.house_type=='новостойка'){
        price = 8500 * value.repair_range;
    }else{
        price = 6000 * value.repair_range;
    }

    if(value.electrics == 'частичная'){
        price = price + 300 * value.repair_range;
    }else if(value.electrics == 'новая'){
        price = price + 600 * value.repair_range;
    }

    if(value.repair=='дизайнерский'){
        price = price + 3000 * value.repair_range;
    }else if(value.repair=='капитальный'){
        price = price + 1500 * value.repair_range;
    }

    if(value.bathroom=="да"){
        price = price + 13000 * value.san_range;
    }
    if(value.ceiling=='гипсокартон'){
        price = price + 300 * value.repair_range;
    }else if(value.ceiling=='натяжной'){
        price = price + 450 * value.repair_range;
    }else if(value.ceiling=='2-уровня'){
        price = price + 600 * value.repair_range;
    }

    if(value.floor=="да"){
        price = price + 200 * value.repair_range;
    }
    if(isFinite(value.doors)){
        price = price+8500*parseInt(value.doors);
    }
    
    if(value.front_door){
        price = price*1.05;
    }

    repair_price.innerHTML = price;
}