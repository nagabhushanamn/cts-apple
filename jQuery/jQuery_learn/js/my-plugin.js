/**
 * http://usejsdoc.org/
 */

(function() {
	$.fn.colorify = function(uconfig) {
		
		var config={
				color:'green'
		};
		
		$.extend(config, uconfig);
		
		this.css('background-color', config.color);
		var that=this;
		this.click(function() {
			that.css('background-color', '#fff');
		});
	}
})();
