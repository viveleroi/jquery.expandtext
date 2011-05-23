/**
 * jQuery ExpandText
 * Expands or shrinks text until it's height or width hits the edges of it's parent.
 * Michael Botsko (http://www.botsko.net)
 * 1.0 20110523
 */
(function($){
	$.fn.expandText = function(options){
		opts = $.extend({ min: 50, max: 120, increment: 2 },options);
		return this.each(function(){
			var me = $(this), max_w = me.width()-(opts.increment*2), max_y = me.height()-(opts.increment*2), span = me.find('.expandedText'), size = opts.min;
			me.css("font-size", size);
			if(!span.length){
				me.wrapInner('<span class="expandedText" />');
				span = me.find('span');
			}
			while(span.width() < max_w && span.height() < max_y){
				size += opts.increment
			  	me.css("font-size", size);
				if(size == opts.max) break;
			}
		});
	}
})(jQuery);