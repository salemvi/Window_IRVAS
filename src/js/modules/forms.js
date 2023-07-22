import checkNumInputs from './checkNumInputs';

const forms = (modalState) => {

	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input'),
		windows = document.querySelectorAll('[data-modal]');

	checkNumInputs('input[name="user_phone"]');


	const message = {
		loading: 'Загрузка...',
		success: 'Мы скоро с вами свяжемся!',
		failure: 'Что-то пошло не так'
	}; 

	const  postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		const result = await fetch(url, {
			method: 'POST',
			body: data
		});
		return await result.text();
	};
	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = '';
		});
	};

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();
			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);

			const formData = new FormData(item);
			if(item.getAttribute('data-calc') === 'end') {
				for(let key in modalState) {
					formData.append(key, modalState[key]);
				} 	
			}
		
			postData('assets/server.php', formData)
				.then(result => {
					console.log(result);
					statusMessage.textContent = message.success;
				}).catch(() => {
					statusMessage.textContent = message.failure;
				}).finally(() => {
					clearInputs();
					for(let key in modalState) {
						delete modalState[key];
					}
					
					setTimeout( () => {
						statusMessage.remove();
						windows.forEach(item => {
							item.style.display = 'none';
						});
						document.body.style.overflow = 'visible';
					}, 3000);
				});
		});
	});













    
	// const form = document.querySelectorAll('form'),
	// 	inputs = document.querySelectorAll('input'),
	// 	phoneInputs = document.querySelectorAll('input[name="user_phone"');

	// const message = {
	// 	loading: 'Загрузка',
	// 	success: 'Спасибо, мы скоро с вами свяжемся!',
	// 	failure: 'Что-то пошло не так...'
	// };
	// phoneInputs.forEach(item => {
	// 	item.addEventListener('input', () => {
	// 		item.value = item.value.replace(/\D/gi, '');
	// 	});
	// });

	// const postData = async (url, data) => {
	// 	document.querySelector('.status').textContent = message.loading;
	// 	let result = await fetch(url, {
	// 		method: 'POST',
	// 		body: data
	// 	});
	// 	return await result.text();
	// };
	// const clearInputs = () => {
	// 	inputs.forEach(item => {
	// 		item.value = '';
	// 	});
	// };


	// form.forEach(item => {
	// 	item.addEventListener('submit', (e) => {
	// 		e.preventDefault();

	// 		let statusMessage = document.createElement('div');
	// 		statusMessage.classList.add('status');
	// 		item.appendChild(statusMessage);

	// 		const formData = new FormData(item);
	// 		postData('assets/server.php', formData)
	// 			.then(result => {
	// 				console.log(result);
	// 				statusMessage.textContent = message.success;

	// 			}).catch(() => {
	// 				statusMessage.textContent = message.failure;

	// 			}).finally(() => {
	// 				clearInputs();

	// 				setTimeout(() => {
	// 					statusMessage.remove();
	// 				}, 5000);
	// 			});

            
	// 	});
	// });

};
export default forms;