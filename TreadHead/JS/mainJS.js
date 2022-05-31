//Dark button class toggle
function toggleDark() {
	document.getElementById("darkJS").classList.toggle("dark");
}
let dark = document.getElementById("darkButton");
dark.onclick = toggleDark;

//Index Page Dark button image Swap Function
function darkImageIndex() {
	let buttonIMG = document.getElementById("darkButtonIMG");
	let darkBody = document.getElementById("darkJS");
	let darkBodyTF = darkBody.classList.contains("dark");

	if (darkBodyTF === true) {
		buttonIMG.setAttribute("src", "images/Sun_Icon.png");
	} else {
		buttonIMG.setAttribute("src", "images/Moon_Icon.png");
	}
}

//Lower File Path Dark button image Swap Function
function darkImage() {
	let buttonIMG = document.getElementById("darkButtonIMG");
	let darkBody = document.getElementById("darkJS");
	let darkBodyTF = darkBody.classList.contains("dark");

	if (darkBodyTF === true) {
		buttonIMG.setAttribute("src", "../images/Sun_Icon.png");
	} else {
		buttonIMG.setAttribute("src", "../images/Moon_Icon.png");
	}
}

//Index or Lower Path Else/If function and MutationObserver 
let indexID = document.getElementById("darkButton");
let indexTF = indexID.hasAttribute("images/Moon_Icon.png");
if (indexTF === true) {
	let darkBodyMO = document.getElementById("darkJS");
	const observer = new MutationObserver(darkImageIndex);
	observer.observe(darkBodyMO, {
		attributes: true
	});
} else {
	let darkBodyMO = document.getElementById("darkJS");
	const observer = new MutationObserver(darkImage);
	observer.observe(darkBodyMO, {
		attributes: true
	});
}


//Functions to add and remove light text to a tags when dark mode active, called by darkArticleAStyleFunction.
function darkArticleAAdd() {
	let darkArticle = document.getElementById("darkJS");
	let darkArticleA = darkArticle.querySelectorAll("a");
	darkArticleA.forEach(link => {
		link.classList.add("darkA");
	});

}

function darkArticleARemove() {
	let darkArticle = document.getElementById("darkJS");
	let darkArticleA = darkArticle.querySelectorAll("a");
	darkArticleA.forEach(link => {
		link.classList.remove("darkA");
	});

}

//MutationObserver Function to call darkArticleAStyleFunction when darkJS has an attribute change.
let darkBodyAMO = document.getElementById("darkJS");
const observer = new MutationObserver(darkArticleAStyleFunction);
observer.observe(darkBodyAMO, {
	attributes: true
});

// ifElse function to add and remove <a> styles for dark mode
function darkArticleAStyleFunction() {
	let articleADark = document.getElementById("darkJS");
	let articleADarkTF = articleADark.classList.contains("dark");
	if (articleADarkTF === false) {
		let darkBodyMO = document.getElementById("darkJS");
		const observer = new MutationObserver(darkArticleAAdd);
		observer.observe(darkBodyMO, {
			attributes: true
		});
	} else {
		let darkBodyMO = document.getElementById("darkJS");
		const observer = new MutationObserver(darkArticleARemove);
		observer.observe(darkBodyMO, {
			attributes: true
		});
	}
}