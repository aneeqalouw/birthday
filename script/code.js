
let btnDisplay = document.querySelector('[data-btn]')
let output = document.querySelector('[data-output]')

function daysTillBday (){
    let firstName = document.querySelector('[data-name]').value
    let bday = new Date(document.querySelector('[data-date]').value)
    let today = new Date()
    let upcomingBday = new Date(today.getFullYear(), bday.getMonth(), bday.getDate());
  
    if(today > upcomingBday) {
      upcomingBday.setFullYear(today.getFullYear() + 1);
    }

    let one_day = 24 * 60 * 60 * 1000;

    let daysLeft = Math.ceil((upcomingBday.getTime() - today.getTime()) / (one_day));
    output.textContent = firstName + ', your birthday is in ' + daysLeft + ' days'

}
btnDisplay.addEventListener('click', daysTillBday)