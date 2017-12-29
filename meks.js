
var meks = function() {
	console.log('here');
	$('body').flurry({
	  character: "❄",
	  color: "white",
	  frequency: 100,
	  speed: 3000,
	  small: 8,
	  large: 28,
	  wind: 40,
	  windVariance: 20,
	  rotation: 90,
	  rotationVariance: 180,
	  startOpacity: 1,
	  endOpacity: 0,
	  opacityEasing: "cubic-bezier(1,.3,.6,.74)",
	  blur: true,
	  overflow: "hidden",
	  zIndex: 9999
	});
};