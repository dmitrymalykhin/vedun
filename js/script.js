//burger
const btnBurger = document.getElementById('hamburger');

btnBurger.addEventListener('click', function() {
	if (document.body.classList.contains("hamburger-active")) {
		closeBurger ();
	} else {
		openBurger ();
	}
})

function closeBurger () {
	document.body.classList.remove('hamburger-active');
}

function openBurger () {
	document.body.classList.add('hamburger-active');
}
//End burger


//Выпадашка
$('.dropdown-el').click(function (e) {
	e.preventDefault();
	e.stopPropagation();
	$(this).toggleClass('expanded');
	$(e.target).parent('.dropdown-item').find('input').prop('checked', true);
// $('#' + $(e.target).attr('for')).prop('checked', true);
});
$(document).click(function () {
	$('.dropdown-el').removeClass('expanded');
});

$('.open-modal').click(function(){
	let modalEl = $(this).data('modal');
	$('div[data-modal="'+modalEl+'"]').addClass('active');
	$('div[data-modal="'+modalEl+'"]').find('.modal').addClass('active');
});

$('.close-modal').click(function(){
	$(this).parents('.modal').removeClass('active');
	$(this).parents('.modal-overlay').removeClass('active');
});
$(document).click(function (e) {
	if ($(e.target).is('.modal-overlay')) {
		$(e.target).removeClass('active');
		$(e.target).find('.modal').removeClass('active');
	}
});