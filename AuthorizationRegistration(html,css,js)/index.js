window.onload = function() {
	console.info('Hello, this is index.html');

	if(!window.sessionStorage.auth) {
		window.location.assign('login.html');	
	}

	    function timeNowUkraine(){
            var clock,
                time,
                timeNow;


            clock = document.getElementById('timeUkraine');

            function timeNow(){
                var hours, minutes, seconds;
                time = new Date();
                hours = time.getHours();
                minutes = time.getMinutes();
                seconds = time.getSeconds();
                if (hours<10){
                    hours="0"+hours;
                }
                if(minutes<10){
                    minutes="0"+minutes;
                }
                if(seconds<10){
                    seconds="0"+seconds;
                }
                return console.log(clock.innerHTML = hours+":"+minutes+":"+seconds);

            }
            setInterval(timeNow,1000);

        }
       timeNowUkraine();
}