const countdown = document.querySelector('.countdown');
const main = document.querySelector('.main-1');
const image = document.querySelector('#start');
// Set Launch date in (ms)
const launchDate = new Date('December 31, 2018 24:00:00').getTime();


// Update Every Second
const interval = setInterval(function()  {
    
    
    //Get todays date and time in (ms)
    
    const today = new Date().getTime();

//differene from today's date to launch date
    
    const difference = launchDate - today;

//Time Calculations
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((difference % (1000 * 60)) / 1000);


// Display Result
    countdown.innerHTML = `
     <div class="change">${days}<span>Days</span></div>
     <div>${hours}<span>Hours</span></div>
     <div>${mins}<span>Minutes</span></div>
     <div>${sec}<span>Seconds</span></div>

`;
    
    
    
    // If Launch date pessed
    if(difference < 0){
        
        //stop time
        clearInterval(interval);
        
        //style and output
        //image.style.backgroundImage = "url(pic2.png)";
        countdown.style.backgroundColor = 'rgba(0,0,0,0.7)';
        countdown.style.color = 'yellow';
        main.style.color = 'white';
        main.innerHTML ="Here starts 2019..."
        countdown.innerHTML =`
        <div>Happy New Year!!!</div>
`;
    }
}, 1000);
