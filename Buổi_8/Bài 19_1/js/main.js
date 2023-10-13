//  Window scroll sticky class add
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})


// number counter
const counter = document.querySelectorAll('.counter_value');
const speed = 250; // The lower the slower

counter.forEach(counter_value => {
	const updateCount = () => {
		const target = +counter_value.getAttribute('data-target');
		const count = +counter_value.innerText;

		const inc = target / speed;

		// Check if target is reached
		if (count < target) {
            // Add inc to count and output in counter_value
			counter_value.innerText = (count + inc).toFixed(0);
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter_value.innerText = target;
		}
	};

	updateCount();
});
