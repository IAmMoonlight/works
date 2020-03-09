function Popup(){

	/*
	* var p = new Popup();
	* p.open('content');
	*/
	
	var Popup = this;
	this.overlay = document.querySelector('.overlay');
	this.popup = document.querySelector('.popup');

	this.open = function(content){
		Popup.popup.innerHTML = content;
		Popup.overlay.classList.add('showOverlay');
	}

	this.close = function(){
		Popup.overlay.classList.remove('showOverlay');
	}
	this.overlay.onclick = this.close;
	this.popup.onclick = function(event){
		event.stopPropagation();
	}

}