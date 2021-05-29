function open_slide_bar() {
	var slide_bar = document.getElementsByClassName("slide-menu")[0];
	slide_bar.style.left="60%";

	var slide_bar_button = document.getElementsByClassName("slide-menu-button")[0]
	slide_bar_button.setAttribute("onclick", "close_slide_bar();");
	slide_bar_button.style.right = "40%";
}

function close_slide_bar() {
	var slide_bar = document.getElementsByClassName("slide-menu")[0];
	slide_bar.style.left="100%";

	var slide_bar_button = document.getElementsByClassName("slide-menu-button")[0]
	slide_bar_button.setAttribute("onclick", "open_slide_bar();");
	slide_bar_button.style.right = "0";
}