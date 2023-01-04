var Body = {
	setBackgroundColor : function(color) {
		document.querySelector('body').style.backgroundColor=color;
	},
	setColor : function(color) {
		document.querySelector('body').style.color=color;
	}
}
var Links = {
	setColor : function(color) {
		var alist = document.querySelectorAll('a');
		var i = 0
		while(i < alist.length) {
			alist[i].style.color = color;
			i = i+1;
		}
	}
}

function nightDayHandler (self) {
	if(self.value === 'night🌛'){
		Body.setBackgroundColor('black');
		Body.setColor('white');
		self.value = 'day🌞';
		Links.setColor('white');

	} else {
		Body.setBackgroundColor('white');
		Body.setColor('black');
		self.value = 'night🌛';
		Links.setColor('black');
	}
}