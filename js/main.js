jQuery(document).ready(function($) {
	$(window).scroll(function() {
    	if ($(this).scrollTop() > 0){
    		$(".menu").css({ 
    			"position":"fixed",
    			"z-index":"50"
    		});
    		$(".menu ul").css('padding', '2% 0');
    	}else{
    		$(".menu").css({ 
    			"position":"relative",
    			"z-index":"1"
    		});
    		$(".menu ul").css('padding', '10% 0');
    	}
    });
});