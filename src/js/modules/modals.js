
const modals = (modalState) => {

	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]');

		trigger.forEach(item => {
			let event = item.addEventListener('click', (e) => {
				if(e.target) {
					e.preventDefault();
				}
				if(modal.classList.contains('popup_calc_profile')) {
					if (modalState.form == undefined || !modalState.width || !modalState.height) {
						event.removeEventListener();
					}
				}
				if(modal.classList.contains('popup_calc_end')) {
					if (!modalState.type || !modalState.profile) {
						event.removeEventListener();
					}
				}

				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
				// document.body.classList.add('modal-open');
			});

			windows.forEach(item => {
				item.style.display = 'none';
			});


		});
		close.addEventListener('click', () => {
			modal.style.display = 'none';
			document.body.style.overflow = '';  
			// document.body.classList.remove('modal-open');

			windows.forEach(item => {
				item.style.display = 'none';
			});
		});
		modal.addEventListener('click', (e) => {
			if(e.target === modal && closeClickOverlay) {
				modal.style.display = 'none';
				document.body.style.overflow = '';  
				// document.body.classList.remove('modal-open');

				windows.forEach(item => {
					item.style.display = 'none';
				});
			}
		});
	}
	function showModuleMyTime(selector, timer) {
		setTimeout(function() {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = '';  
		}, timer);
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_end_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false );
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false );


	showModuleMyTime('.popup', 6000000);
};
export default modals;