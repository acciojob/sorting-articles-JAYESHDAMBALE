//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticles(name) {
	name = name.toLowerCase();

	if(name.startsWith("the ")){
		return name.slice(4);
	}else if (name.startsWith("a")) {
		return name.slice(2);
	}else if (name.startsWith("an")) {
		return name.slice(3);
	}

	return name;
}

bands.sort(function(a,b) {
	const nameA = removeArticles(a);
	const nameB = removeArticles(b);

	if(nameA < nameB) return -1;
	if(nameA > nameB) return 1;

	return 0;
})

const ul = document.getElementById("bands");

for (let index = 0; index < bands.length; index++) {
	const li = document.createElement("li");

	li.textContent = bands[index];
	ul.appendChild(li);
}