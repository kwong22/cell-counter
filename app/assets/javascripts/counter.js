window.onload = function() {

    var tleft = 0;
    var tright = 0;
    var left = 0;
    var right = 0;
    var lineNum = 0;

    var keys = {
	LEFT: 37,
	RIGHT: 39,
	DOWN: 40,
	SPACE: 32,
	ENTER: 13
    };

    $(".click-instructions").click(function(e) {
	$(".instructions").slideToggle();
    });

    $(".click-clear-data").click(function(e) {
	clearData();
    });

    $(".click-reset-counts").click(function(e) {
	resetCurrentCounts();
    });

    $(".click-record-counts").click(function(e) {
	recordCounts();
    });

    $(".increment-left").bind('touchstart', function(e){
	incrementLeft();
    });

    $(".increment-right").bind('touchstart', function(e){
	incrementRight();
    });

    $(document).keydown(function(e){
	var key = e.which;
	if (key == keys.SPACE) {
	    e.preventDefault(); // to prevent spacebar scrolling
	}
    });

    $(document).keyup(function(e){
	var key = e.which;
	if (key == keys.LEFT) {
	    incrementLeft();
	    e.preventDefault();
	} else if (key == keys.RIGHT) {
	    incrementRight();
	    e.preventDefault();
	} else if (key == keys.DOWN) {
	    decrementBoth();
	    e.preventDefault();
	} else if (key == keys.SPACE) {
	    resetCurrentCounts();
	    e.preventDefault();
	} else if (key == keys.ENTER) {
	    recordCounts();
	    e.preventDefault();
	}
    });

    function incrementLeft() {
	left++;
	updateCounts();
    }

    function incrementRight() {
	right++;
	updateCounts();
    }

    function decrementBoth() {
	if (left > 0) {
	    left--;
	}
	if (right > 0) {
	    right--;
	}
	updateCounts();
    }

    function updateCounts() {
	$(".left").text(left);
	$(".right").text(right);
	$(".total-left").text(tleft);
	$(".total-right").text(tright);
    }

    function recordCounts() {
	addData();
	tleft += left;
	tright += right;
	resetCurrentCounts();
	lineNum++;
    }

    function addData() {
	$(".records").append("<h3 class='data'><i>" + lineNum + "</i> | " + left + ":" + right + "</h3>");
    }

    function resetCurrentCounts() {
	left = 0;
	right = 0;
	updateCounts();
    }

    function resetTotalCounts() {
	tleft = 0;
	tright = 0;
	lineNum = 0;
	updateCounts();
    }

    function clearData() {
	$(".data").remove();
	resetCurrentCounts();
	resetTotalCounts();
	updateCounts();
    }
}
