let date = new Date(); //2023-3-31T14:04:10:11.129z -- weird format
let day = date.getDate(); //1-31 returned based on date
let month = date.getMonth() + 1; //it can return 0 so add one to get actual month
let year = date.getFullYear();

const monthsArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
document.querySelector('img').addEventListener('click', calcAge)

function calcAge() {
    let inputYear = document.querySelector('#year').value
    let inputMonth = document.querySelector('#month').value
    let inputDay = document.querySelector('#day').value

    //year validation
    if(!inputYear){
        document.querySelector('#year').classList.add('error')
        document.querySelector('.yearError').innerText = 'This field is required'
    }
    
    if(inputYear > year){
        document.querySelector('#year').classList.add('error')
        document.querySelector('.yearError').innerText = 'Year must be in the past'
    } 



    //month validation
    if (!inputMonth){
        document.querySelector('#month').classList.add('error')
        document.querySelector('.monthError').innerText = 'This field is required'
    }
    
    if (inputMonth < 0 || inputMonth > 12){
        document.querySelector('#month').classList.add('error')
        document.querySelector('.monthError').innerText = 'Month must be a valid month'
    }
 
    
    if(inputMonth > month) {
        month = inputMonth + 12
        year = year - 1
    }
    

    //day validation
    if(!inputDay){
        document.querySelector('#day').classList.add('error')
        document.querySelector('.dayError').innerText = 'This field is required'

    } 
    
    if(inputDay > 31 || inputDay < 0){
        document.querySelector('#day').classList.add('error')
        document.querySelector('.dayError').innerText = 'day must be a valid day'
    }

    if(inputDay > day){
        day = day + monthsArr[month - 1];
        month = month - 1
    }

    let dayDiff = day - inputDay;
    let monthDiff = month - inputMonth;
    let yearDiff = year - inputYear;


    document.querySelector('.dayNum').innerText = dayDiff
    document.querySelector('.monthNum').innerText = monthDiff
    document.querySelector('.yearNum').innerText = yearDiff;
}





