window.onload = function() {

    var tleft = 0;
    var tright = 0;
    var left = 0;
    var right = 0;
    var lineNum = 0;
    var sidesList = [];

    var keys = {
	LEFT: 37,
	RIGHT: 39,
	DOWN: 40,
	SPACE: 32,
	ENTER: 13
    };

    var sides = {
	LEFT: 0,
	RIGHT: 1
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

    $(".decrement-last").bind('touchstart', function(e){
	decrementLast();
    });

    $(document).keydown(function(e){
	var key = e.which;
	if (key == keys.SPACE || key == keys.LEFT || key == keys.RIGHT || key == keys.DOWN || key == keys.ENTER) {
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
	    decrementLast();
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
	sidesList.push(sides.LEFT);
	updateCounts();
    }

    function incrementRight() {
	right++;
	sidesList.push(sides.RIGHT);
	updateCounts();
    }

    function decrementLast() {
	var len = sidesList.length;
	if (len > 0) {
	    if (sidesList[len - 1] == sides.LEFT) {
		sidesList.pop();
		left--;
	    } else if (sidesList[len - 1] == sides.RIGHT) {
		sidesList.pop();
		right--;
	    }
	    updateCounts();
	}
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
	clearSidesList();
    }

    function resetTotalCounts() {
	tleft = 0;
	tright = 0;
	lineNum = 0;
	updateCounts();
	clearSidesList();
    }

    function clearSidesList() {
	sidesList.length = 0;
    }

    function clearData() {
	$(".data").remove();
	resetCurrentCounts();
	resetTotalCounts();
	updateCounts();
    }

}
