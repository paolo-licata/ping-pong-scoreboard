document.addEventListener("DOMContentLoaded", function() {
	const p1Button = document.querySelector("#p1Button");
	const p2Button = document.querySelector("#p2Button");
	const resetButton = document.querySelector("#reset");
	const p1Display = document.querySelector("#p1Display");
	const p2Display = document.querySelector("#p2Display");
	const playtoSelect = document.querySelector("#playto");

	let p1Score = 0;
	let p2Score = 0;

	if (!playtoSelect.value) {
		playtoSelect.value = "7"; // Default value is 7
	}
	
	// Initialize the winningScore to the current value of the dropdown
	let winningScore = parseInt(playtoSelect.value);
	let isGameOver = false;

	p1Button.addEventListener("click", function() {
		if (!isGameOver) {
			p1Score += 1;
			if (p1Score === winningScore) {
				isGameOver = true;
				p1Display.classList.add("winner");
				p2Display.classList.add("loser");
			}
			p1Display.textContent = p1Score;
		}
	});

	p2Button.addEventListener("click", function() {
		if (!isGameOver) {
			p2Score += 1;
			if (p2Score === winningScore) {
				isGameOver = true;
				p2Display.classList.add("winner");
				p1Display.classList.add("loser");
			}
			p2Display.textContent = p2Score;
		}
	});

	// Update the winning score when the dropdown changes
	playtoSelect.addEventListener("change", function() {
		winningScore = parseInt(this.value);
		reset();
	});

	resetButton.addEventListener("click", reset);

	function reset() {
		isGameOver = false;
		p1Score = 0;
		p2Score = 0;
		p1Display.textContent = 0;
		p2Display.textContent = 0;
		p1Display.classList.remove("winner", "loser");
		p2Display.classList.remove("winner", "loser");
	}

	// Prevent zooming when double clicking on mobile devices
	document.addEventListener('touchstart', function (event) {
		if (event.touches.length > 1) {
			event.preventDefault(); // Prevent multi-touch zoom
		}
	});

	let lastTouchEnd = 0;
	document.addEventListener('touchend', function (event) {
		const now = new Date().getTime();
		if (now - lastTouchEnd <= 300) {
			event.preventDefault(); // Prevent double-tap zoom
		}
		lastTouchEnd = now;
	});
});
