const images = () => {
	const popupImg = document.createElement('div'),
		workSection = document.querySelector('.works'),
		bigImg = document.createElement('img');
    
	popupImg.classList.add('popupimg');
	workSection.appendChild(popupImg);

	popupImg.style.justifyContent = 'center';
	popupImg.style.alignItems = 'center';
	popupImg.style.display = 'none';
	bigImg.style.maxWidth = '85%';
	bigImg.style.maxHeight = '85%';



	popupImg.appendChild(bigImg);

	workSection.addEventListener('click', (e) => {
		e.preventDefault();
		const target = e.target;
        
		if(target && target.classList.contains('preview')) {
			popupImg.style.display = 'flex';
			document.body.style.overflow = 'hidden';

			const path = target.parentNode.getAttribute('href');
			bigImg.setAttribute('src', path);
		}
		if(target && target.matches('div.popupimg')) {
			popupImg.style.display = 'none';
			document.body.style.overflow = 'visible';

            
		}
	});
};
export default images;