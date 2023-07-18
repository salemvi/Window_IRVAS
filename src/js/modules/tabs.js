const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {

	const header = document.querySelector(headerSelector),
		tabs = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector);

	function hideTabContent() {
		content.forEach(item => {
			item.style.display = 'none';
		});
		tabs.forEach(item => {
			item.classList.remove(activeClass);
		});
	}
	
	function showTabContent(i = 0) {
		content[i].style.display = display;
		tabs[i].classList.add(activeClass);
	}
	hideTabContent();
	showTabContent();

	header.addEventListener('click', (e) => {
		if(e.target &&
			e.target.classList.contains(tabSelector.replace(/\./, '')) ||
		e.target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
			tabs.forEach((item, i) => {
				if(item === e.target || item === e.target.parentNode) {
					hideTabContent();
					showTabContent(i);
				}
			});

		}
	});





























	// const header = document.querySelector(headerSelector),
	// 	tabs = document.querySelectorAll(tabSelector),
	// 	content = document.querySelectorAll(contentSelector);

	// function hideTabContent() {
	// 	content.forEach(item => {
	// 		item.style.display = 'none';
	// 	});
	// 	tabs.forEach(item => {
	// 		item.classList.remove(activeClass);
	// 	});
	// }

	// function showTabContent(i = 0) {
	// 	content[i].style.display = 'block';
	// 	tabs[i].classList.add(activeClass);
	// }
	// hideTabContent();
	// showTabContent();

	// header.addEventListener('click', (e) => {
	// 	const target = e.target;

	// 	if(target && 
	//         target.classList.contains(tabSelector.replace(/\./, '')) ||
	//         target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
	// 		tabs.forEach((item, i) => {
	// 			if (target === item || target.parentNode === item) {
	// 				hideTabContent();
	// 				showTabContent(i);
	// 			}
	// 		});
                
	// 	}
	// });













	// const header = document.querySelector(headerSelector),
	// 	tabs = document.querySelectorAll(tabSelector),
	// 	content = document.querySelectorAll(contentSelector);

	// function hideTabContent() {
	// 	content.forEach(item => {
	// 		item.style.display = 'none';
	// 	});  
	// 	tabs.forEach(tab => {
	// 		tab.classList.remove(activeClass);
	// 	});
	// }

	// function showTabContent(i = 0) {
	// 	content[i].style.display = 'block';
	// 	tabs[i].classList.add(activeClass);
        
	// }
	// hideTabContent();
	// showTabContent();

	// header.addEventListener('click', (e) => {
	// 	const target = e.target;
	// 	if(target && 
	// 	(target.classList.contains(tabSelector.replace(/\./, '')) || 
	//     target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
	// 		tabs.forEach((tab, i) => {
	// 			if(target === tab || target.parentNode === tab) {
	// 				hideTabContent();
	// 				showTabContent(i);
                    
	// 			}

	// 		});
	// 	}
	// });
};

export default tabs;