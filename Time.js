function create(){
	let $ = parent.$;
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds();
	let blc = $('#bottomleftcorner2');
	
	blc.find('#time').remove();
	blc.find('#box').remove();
	let time = $('<div id="box"><p id="time"></p></div>').text(h + ':' + m + ':' + s)
	blc.prepend(time);
	time.css({
		backgroundColor: "black",
		width: "312",
		padding: "3px 4px 3px 4px",
		border: "5px solid gray",
		fontSize: "24px",
		lineHeight: "22px",
		marginBottom: "-6px",
		textAlign: "center"
	});
}

create();

function update(){
	let $ = parent.$;
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds();
	if(h > 12){
		h -= 12;
		if(h < 10){
			h = '0' + h;
		}
	}
	if(m < 10){
		m = '0' + m;
	}
	if(s < 10){
		s = '0' + s;
	}
	$('#box').text(h + ':' + m + ':' + s);
}

setInterval(function(){
	update();
},100);