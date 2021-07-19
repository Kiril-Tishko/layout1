jQuery(document).ready(function($) {
	$(".ajax-contact-form").submit(function() {
		var str = $(this).serialize();

		let messageTextElem = document.getElementById("messageText")
		let inputNameElem = document.getElementById("name")
		let inputEmailElem = document.getElementById("email")

		messageTextElem.style.visibility = 'visible'

		$.ajax({
			type: "POST",
			url: "../php/contact.php",
			data: str,
			success: function(msg) {
				if(msg == "Ваше сообщение отправлено!") {
					messageTextElem.style.color = "#008000d4"
					messageTextElem.innerHTML = "Сообщение отправлено!"
					inputNameElem.value = ""
					inputEmailElem.value = ""
				} else {
					messageTextElem.innerHTML = "" + msg;
				}
				// $('.note2').html(result);
			}
		});
		return false;
	});
});



// ANIMATION
//		img load atimation
function loadTextAnimation() {
	for (let a = 0; a <= 1; a++) {
		const images = document.querySelectorAll('.what-i-do-animate');
		let options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.3
		}


		function handleImg(myImg, observer) {
			myImg.forEach(myImgSingle => {
				if (myImgSingle.intersectionRatio > 0) {
					loadImage(myImgSingle.target);
				}
			})
		}



		function loadImage(image) {
			image.classList.add('animate__animated', 'animate__fadeInRight', 'visible')
			image.classList.remove('hidden')
		}


		const observer = new IntersectionObserver(handleImg, options);

		images.forEach(img => {
			observer.observe(img)
		})
	}
}

loadTextAnimation()

function loadTextAnimation1() {
	for (let a = 0; a <= 1; a++) {
		const images = document.querySelectorAll('.about-me-animate');
		let options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.3
		}
		// if (window.matchMedia("(max-width: 525px)").matches) {
		// 	options = {
		// 		root: null,
		// 		rootMargin: '-80px 0px -80px 0px',
		// 		threshold: 0
		// 	}
		// }

		function handleImg(myImg, observer) {
			myImg.forEach(myImgSingle => {
				if (myImgSingle.intersectionRatio > 0) {
					loadImage(myImgSingle.target);
				}
			})
		}



		function loadImage(image) {
			image.classList.add('animate__animated', 'animate__fadeInLeft', 'visible')
			image.classList.remove('hidden')
		}


		const observer = new IntersectionObserver(handleImg, options);

		images.forEach(img => {
			observer.observe(img)
		})
	}
}

loadTextAnimation1()


if (window.matchMedia("(max-width: 730px)").matches) {
	document.querySelectorAll('.what-i-do-animate')[0].classList.remove('hidden');
	document.querySelectorAll('.about-me-animate')[0].classList.remove('hidden');
}


function loadImgAnimation() {
	for (let a = 0; a <= 1; a++) {
		const images = document.querySelectorAll('.my-work__img-wrap');
		let options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.3
		}
		// if (window.matchMedia("(max-width: 525px)").matches) {
		// 	options = {
		// 		root: null,
		// 		rootMargin: '-80px 0px -80px 0px',
		// 		threshold: 0
		// 	}
		// }

		function handleImg(myImg, observer) {
			myImg.forEach(myImgSingle => {
				if (myImgSingle.intersectionRatio > 0) {
					loadImage(myImgSingle.target);
				}
			})
		}



		function loadImage(image) {
			image.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow', 'visible')
			image.classList.remove('hidden')
		}


		const observer = new IntersectionObserver(handleImg, options);

		images.forEach(img => {
			observer.observe(img)
		})
	}
}

loadImgAnimation()




// MEDIA
//		footer link for mobile
const viber = document.getElementById('viber')
const telegram = document.getElementById('telegram')

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	viber.removeAttribute('href')
	viber.setAttribute('href', 'viber://add?number=380969409698')
	telegram.removeAttribute('href')
	telegram.setAttribute('href', 'tg://resolve?domain=Kirill_Tishko')
}