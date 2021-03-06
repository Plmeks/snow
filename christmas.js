(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)){ return; }
    js = d.createElement(s); js.id = id;
    js.onload = function(){
        // remote script has loaded
    };
    js.src = "https://code.jquery.com/jquery-3.2.1.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'jquery'));

document.body.insertAdjacentHTML('beforeend', `
   <div id="snow" style="z-index: 9999; pointer-events: none; position: fixed; top: 0; left: 0; background-color: rgba(0, 50, 255, 0.1)"></div>
`);

(function touchJquery () {
	if (!window.jQuery) {
		window.requestAnimationFrame(touchJquery);
	} else {
		$("#snow").height(screen.height);
		$("#snow").width(screen.width);
		
		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)){ return; }
			js = d.createElement(s); js.id = id;
			js.onload = function(){
				// remote script has loaded
			};
			js.src = "https://cdn.rawgit.com/Plmeks/snow/6f58ac7e/jquery.flurry.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'www'));
		
		(function touchFlurry() {
			if(!$().flurry) {
				window.requestAnimationFrame(touchFlurry);
			} else {
				$('#snow').flurry({
					character: "❄",
					height: $(window).innerHeight() + 200,
					speed: 14000,
					small: 10,
					large: 68
				});
			}
			
		})();
	}
})();





