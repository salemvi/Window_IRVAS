import checkNumInputs from './checkNumInputs';


const changeModalStatejsjs = (modalState) => {
	const windowForm = document.querySelectorAll('.balcon_icons_img'),
		windowWidth = document.querySelectorAll('#width'),
		windowHeight = document.querySelectorAll('#height'),
		windowType = document.querySelectorAll('#view_type'),
		windowProfile = document.querySelectorAll('.checkbox');

	checkNumInputs('#width');
	checkNumInputs('#height');

	function bindActionToElems(event, elem, prop) {
		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch(item.nodeName) {
				case 'SPAN': 
					modalState[prop] = i+1;
					break;
				case 'INPUT':
					if(item.getAttribute('type') === 'checkbox') {
						i === 0 ? modalState[prop] = 'Холодное' : modalState[prop] = 'Теплое';
						elem.forEach((box, j) => {
							box.checked = false;
							if(i == j) {
								box.checked = true;
							}
						});
					} else {
						modalState[prop] = item.value;
					}
					break;
				case 'SELECT':
					modalState[prop] = item.value;
					break;
				}
				console.log(modalState);	
			});
	
		});
	}
	bindActionToElems('click', windowForm, 'form');
	bindActionToElems('input', windowHeight, 'height');
	bindActionToElems('input', windowWidth, 'width');
	bindActionToElems('change', windowType, 'type');
	bindActionToElems('change', windowProfile, 'profile');























	// 	const windowForm = document.querySelectorAll('.balcon_icons_img'),
	// 		windowWidth = document.querySelectorAll('#width'),
	// 		windowHeight = document.querySelectorAll('#height'),
	// 		windowType = document.querySelectorAll('#view_type'),
	// 		windowProfile = document.querySelectorAll('.checkbox');

	// 	checkNumInputs('#width');
	// 	checkNumInputs('#height');

	// 	function bindActionToElems (event, elem, prop) {
	// 		elem.forEach((item, i) => {
	// 			item.addEventListener(event, () => {
	// 				switch(item.nodeName) {
	// 				case 'SPAN':
	// 					modalState[prop] = i;
	// 					break;
	// 				case 'INPUT':
	// 					if (item.getAttribute('type') === 'checkbox'){
	// 						i == 0 ? modalState[prop] = 'Холодное' : modalState[prop] = 'Теплое';
	// 						elem.forEach((box, j) => {
	// 							box.checked = false;
	// 							if (i === j) {
	// 								box.checked = true;
	// 							}
	// 						});
	// 					} else {
	// 						modalState[prop] = item.value;
	// 					}
	// 					break;
	// 				case 'SELECT':
	// 					modalState[prop] = item.value;
	// 					break;
	// 				}
	// 				console.log(modalState);
	// 			});
	// 		});
	// 	}

	// 	bindActionToElems('click', windowForm, 'form');
	// 	bindActionToElems('input', windowWidth, 'weight');
	// 	bindActionToElems('input', windowHeight, 'height');
	// 	bindActionToElems('change', windowType, 'type');
	// 	bindActionToElems('change', windowProfile, 'profile');




	



    
};
export default changeModalStatejsjs;