window.addEventListener('load', function(){
	
	let resolution = window.innerWidth;
	let wrapper = document.getElementById("wrapper");
	
	if(resolution >= 1000 && resolution <= 1366){
		
		wrapper.style.zoom = 0.73;
		wrapper.style.MozTransform = "scale(0.73)";
		wrapper.style.MozTransformOrigin = "0 0";
		
	}
	
}, false);

window.addEventListener('resize', function(){
	
	let resolution = window.innerWidth;
	let wrapper = document.getElementById("wrapper");
	
	if(resolution >= 1000 && resolution <= 1366){
		
		wrapper.style.zoom = 0.73;
		wrapper.style.MozTransform = "scale(0.73)";
		wrapper.style.MozTransformOrigin = "0 0";
		
	}
	
	
}, false);