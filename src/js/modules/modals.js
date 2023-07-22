
const modalsWindow =  (state) => {
	// получаем все модальные окна на странице (универсальный скрипт)
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
	
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]'),
			scroll = calcScroll();
			//нажатие на кнопку вызывает событие (forEach, потому что проходимся по 2 модальным окнам во 2 вызове)
		trigger.forEach(item => {
			let event = item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				if (modal.classList.contains('popup_calc_profile')) {
					if (!state.form || !state.height || !state.width) {
						event.removeEventListener();
					}	
				}
				if (modal.classList.contains('popup_calc_end')) {
					if (!state.type || !state.profile || !state.width) {
						event.removeEventListener();
					}
					
				}

				//закрытие всех модалок сразу
				windows.forEach(item => {
					item.style.display = 'none';
				});
				//показываем модальное окно и запрещаем скролл
				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${scroll}px`;
			});
		});
		//закрываем модальное окно и добавляем скролл
		close.addEventListener('click', () => {
			windows.forEach(item => {
				item.style.display = 'none';
			});
	
			modal.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = '0px';

		});
		//реализация закрытия модалки при нажатии на обертку модалки
		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {
				windows.forEach(item => {
					item.style.display = 'none';
				});
	
				modal.style.display = 'none';
				document.body.style.overflow = '';
			}
		});
		
	}
	function showModalByTime (selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';
		}, time);
	}
	showModalByTime('.popup', 60000);

	function calcScroll() {
		let div = document.createElement('div');
		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hidden';
		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();
		return scrollWidth;
	}
	
	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close');
	
};
export default modalsWindow;