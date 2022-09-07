function displayTime(){
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    let today = dayNames[date.getDay()];
    document.getElementById('time').innerHTML = today;
}