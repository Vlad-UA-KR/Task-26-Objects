// // ------------------Task-1------------------------

// let car = {
// 	name: 'honda',
// 	model: 'civic',
// 	year: 1986,
// 	speed: 80,
// };

// // --------------------1-1-------------------------

// function output(obj) {
// 	for (let key in obj) {
// 		alert(key);
// 		alert(obj[key]);
// 	}
// };

// output(car);

// // --------------------1-2--------------------------

// function resultTime(distanse) {

// 	result = distanse / car.speed * 3600;
// 	time = result;

// 	for (let i = 14400; result - i > 0; i = i + 14400) {
// 		time = time + 3600;
// 	}

// 	return time;
// }

// function convertTime(time) {
// 	hours = Math.trunc(time / 3600);
// 	minutes = Math.trunc((time - (hours * 3600)) / 60);
// 	time = time - ((hours * 3600) + (minutes * 60));
// 	if (hours <= 9) {
// 		hours = '0' + hours;
// 	}
// 	if (minutes <= 9) {
// 		minutes = '0' + minutes;
// 	}
// 	if (time <= 9) {
// 		time = '0' + time;
// 	}

// 	return alert('Вы проедете:' + distanse + 'км за' + ' ' + hours + ':' + minutes + ':' + time)
// }


// resultTime(distanse = +prompt('Введите дистанцию в км'));

// convertTime(time);


// // ------------------Task-2------------------------

// let time = {
// 	hour: 0,
// 	minutes: 0,
// 	seconds: 0,
// 	// // --------------------2-1----------------------
// 	output() {
// 		if (this.hour < 9) {
// 			this.hour = '0' + this.hour;
// 		}
// 		if (this.minutes < 9) {
// 			this.minutes = '0' + this.minutes;
// 		}
// 		if (this.seconds < 9) {
// 			this.seconds = '0' + this.seconds;
// 		}
// 		alert(`${this.hour}:${this.minutes}:${this.seconds}`);
// 	},
// 	// // --------------------2-2----------------------
// 	changeTimeInSec(sec) {
// 		while (sec > 3600) {
// 			this.hour++;
// 			sec -= 3600;
// 		}
// 		while (sec > 60) {
// 			this.minutes++;
// 			sec -= 60;
// 		}
// 		this.seconds = sec;
// 	},
// 	// // --------------------2-3----------------------
// 	changeTimeInMin(min) {
// 		while (min > 60) {
// 			this.hour++;
// 			min -= 60;
// 		}
// 		this.minutes = this.minutes + min;
// 	},
// 	// // --------------------2-4----------------------
// 	changeTimeInHou(hou) {
// 		this.hour = this.hour + hou;
// 	},
// }

// time.changeTimeInSec(sec = +prompt('Введите колличество секунд, на которое хотите увеличить время'));
// time.changeTimeInMin(min = +prompt('Введите колличество минут, на которое хотите увеличить время'));
// time.changeTimeInHou(hou = +prompt('Введите колличество часов, на которое хотите увеличить время'));

// time.output();
