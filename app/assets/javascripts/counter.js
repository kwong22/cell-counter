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
	e.preventDefault();
	$(".instructions").slideToggle();
    });

    $(".click-clear-data").click(function(e) {
	e.preventDefault();
	if (confirm("Are you sure you want to clear the data?")) {
	    clearData();
	}
    });

    $(document).keydown(function(e){
	var key = e.which;
	if (key == keys.LEFT) {
	    left++;
	    e.preventDefault();
	} else if (key == keys.RIGHT) {
	    right++;
	    e.preventDefault();
	} else if (key == keys.DOWN) {
	    if (left > 0) {
		left--;
	    }
	    if (right > 0) {
		right--;
	    }
	    e.preventDefault();
	} else if (key == keys.SPACE) {
	    resetCurrentCounts();
	    e.preventDefault();
	} else if (key == keys.ENTER) {
	    addData();
	    tleft += left;
	    tright += right;
	    resetCurrentCounts();
	    lineNum++;
	    e.preventDefault();
	}
	updateCounts();
    });

    function updateCounts() {
	$(".left").text(left);
	$(".right").text(right);
	$(".total-left").text(tleft);
	$(".total-right").text(tright);
    }

    function addData() {
	$(".records").append("<p class='data'><i>" + lineNum + "</i> | " + left + ":" + right + "</p>");
    }

    function resetCurrentCounts() {
	left = 0;
	right = 0;
    }

    function resetTotalCounts() {
	tleft = 0;
	tright = 0;
	lineNum = 0;
    }

    function clearData() {
	$(".data").remove();
	resetCurrentCounts();
	resetTotalCounts();
	updateCounts();
    }
}
