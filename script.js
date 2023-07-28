let timeButt = document.querySelector('.time');
timeButt.addEventListener('click', timeClicked);
let speedButt = document.querySelector('.speed');
speedButt.addEventListener('click', speedClicked);
let distanceButt = document.querySelector('.distance');
distanceButt.addEventListener('click', distanceClicked);
let active = 'time';

document.querySelector('.submit').addEventListener('click', calculate);

function timeClicked(){
    document.getElementsByClassName('first_input')[0].placeholder = 'Distance: (km)';
    document.getElementsByClassName('second_input')[0].placeholder = 'Speed: (km/h)';
    active = 'time';
    console.log(active);
}

function speedClicked(){
    document.getElementsByClassName('first_input')[0].placeholder = 'Distance: (km)';
    document.getElementsByClassName('second_input')[0].placeholder = 'Time: (h)';
    active = 'speed';
    console.log(active);
}

function distanceClicked(){
    document.getElementsByClassName('first_input')[0].placeholder = 'Speed: (km/h)';
    document.getElementsByClassName('second_input')[0].placeholder = 'Time: (h)';
    active = 'dis';
    console.log(active);
}

function calculate(){
    console.log(`counting ${active}`)
    if (active === 'time'){
        let distance = document.getElementsByClassName('first_input')[0].value;
        let speed = document.getElementsByClassName('second_input')[0].value;
        let result = distance / speed;
        if(isNaN(result) === true){
            document.getElementsByTagName('p')[0].innerText = 'You have to input data first!';
        }
        else{
            document.getElementsByTagName('p')[0].innerText = `It will take ${result.toFixed(4)} hour(s) to pass ${distance} kilometer(s) wiith speed of ${speed} kph.`;
        }
        
    }
    else if(active === 'speed'){
        let distance = document.getElementsByClassName('first_input')[0].value;
        let time = document.getElementsByClassName('second_input')[0].value;
        let result = distance / time;
        if(isNaN(result) === true){
            document.getElementsByTagName('p')[0].innerText = 'You have to input data first!';
        }
        else{
            document.getElementsByTagName('p')[0].innerText = `You have to move with a speed of ${result.toFixed(4)} kph to pass ${distance} kilometer(s) in ${time} hour(s).`;
        }
    }
    else if(active === 'dis'){
        let speed = document.getElementsByClassName('first_input')[0].value;
        let time = document.getElementsByClassName('second_input')[0].value;
        let result = speed * time;
        console.log(result)
        if(result === 0){
            document.getElementsByTagName('p')[0].innerText = 'You have to input data first!';
        }
        else{
            document.getElementsByTagName('p')[0].innerText = `You will pass ${result.toFixed(4)} kilometer(s) if you move with a speed of ${speed} kph for ${time} hour(s).`;
        }
    }
    else{
        document.getElementsByTagName('p')[0].innerText = 'Oops.. Something went wrong :(';
    }
}