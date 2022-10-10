const arrowBtn = document.querySelector('.hdr__arrow');
const headerSub = document.querySelector('.hdr__sub');

arrowBtn.addEventListener('click', function(e) {
	e.preventDefault();
	headerSub.classList.toggle('active');
	arrowBtn.classList.toggle('active');
});


document.body.style.overflow = "hidden";

document.body.onload = function () {

	setTimeout(function() {
		const preloader = document.querySelector('.preloader');

		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');

			document.body.style.overflow = "auto";
		}

		setTimeout(() => {preloader.style.display = "none";}, 3000);
	}, 1500);

}