let obj = {
	'12:01:03 31.12.2019': 'Kutman',
	'12:02:03 31.12.2019': 'Soke',
	'12:03:03 31.12.2019': 'Hm'
}
let notes = {};
let edit = false;
let key;
let counter = 0;
let list = document.querySelector('#list');
let textarea = document.querySelector('#textarea');
textarea.addEventListener('blur', function() {
	if (edit) {
		notes[key].text = this.value;
		edit = false;
		key = undefined;
		this.value = '';
		console.log(key);
	}
	else {
		let date = new Date;
		let now = date.getHours() + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) + ' ' + addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear();
		counter++;	
		notes[counter] = {text : this.value, time: now};
		this.value = '';
		let li  = document.createElement('LI');
		li.dataset.num = counter;
		li.innerHTML  = now;
		list.appendChild(li);
		let self = this;
		if(notes[counter].text == '') {
			li.innerHTML = 'Вы ничего не ввели.';
		}
		li.addEventListener('click', function() {
			let num = this.dataset.num
			self.value = notes[num].text;
			edit = true;
			key = num;
		});
	}
	console.log(notes);
});

function addZero(num) {
	if(num >= 0 && num <= 9) {
		return '0' + num;
	}else {
		return num;
	}
}