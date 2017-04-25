window.onload = function() {
	console.info('Hello, this is index.html');

	/*if(!window.sessionStorage.auth) {
		window.location.assign('login.html');	
	}*/

	function timeNow() {
        var images = new Array('images/0.jpg', 'images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg');
        var interval = setInterval(function () {

            var date = new Date();

            var hour = String(date.getHours());
            var minutes = String(date.getMinutes());
            var seconds = String(date.getSeconds());
            var hour1 = document.getElementById("hour1");
            var hour2 = document.getElementById("hour2");
            var minute1 = document.getElementById("minute1");
            var minute2 = document.getElementById("minute2");
            var second1 = document.getElementById("second1");
            var second2 = document.getElementById("second2");


        if (hour < 10) {
                hour1.setAttribute('src', images[0]);
                hour2.setAttribute('src', images[hour.charAt(0)]);

            }
            else {
                hour1.setAttribute('src', images[hour.charAt(0)]);
                hour2.setAttribute('src', images[hour.charAt(1)]);
            }
            if (minutes < 10) {
                minute1.setAttribute('src', images[0]);
                minute2.setAttribute('src', images[minutes.charAt(0)]);

            }
            else {
                minute1.setAttribute('src', images[minutes.charAt(0)]);
                minute2.setAttribute('src', images[minutes.charAt(1)]);
            }
            if (seconds < 10) {
                second1.setAttribute('src', images[0]);
                second2.setAttribute('src', images[seconds.charAt(0)]);

            }
            else {
                second1.setAttribute('src', images[seconds.charAt(0)]);
                second2.setAttribute('src', images[seconds.charAt(1)]);
            }
        }, 1000);
        return interval;
    }
    timeNow();

}