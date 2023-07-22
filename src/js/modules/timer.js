const timer = (selector, deadline) => {
    
	const addZero = (number) => {
		if(number >= 0 && number <10) {
			return '0' + number;
		} else {
			return number;
		}
	};

	const getTimeRemaining = (deadLine) => {
		const time = Date.parse(deadLine) - Date.parse(new Date()),
			seconds = Math.floor((time/1000) % 60),
			minutes = Math.floor((time/1000/60) % 60),
			hours = Math.floor((time/(1000*60*60)) % 24),
			days = Math.floor(time/(1000*60*60*24));
		return {
			'total': time,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	const setTime = (selector, deadLine) => {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);
		updateClock();
		function updateClock() {
			const t = getTimeRemaining(deadLine);

			days.textContent = addZero(t.days);
			hours.textContent =addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);

			if (t.total <= 0) {
				days.textContent = '00';
				hours.textContent ='00';
				minutes.textContent = '00';
				seconds.textContent = '00';

				clearInterval(timeInterval);
			}
		}
	};
	setTime(selector, deadline);
};
export default timer;