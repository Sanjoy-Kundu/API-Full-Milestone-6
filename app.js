const searchFood = () => {
	const searchField = document.getElementById("search-field");
	const seachText = searchField.value;
	//console.log(searhText);
	//clear input data
	searchField.value = " ";

	//conditon 
	/* 	if (seachText = " ") {
			alert("You can write something");
		} else {
	
		}
	 */
	//added api
	const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${seachText}`;
	fetch(url)
		.then(res => res.json())
		.then(data => shiowDisplayOutput(data.meals));
}

const shiowDisplayOutput = mealfist => {
	//console.log(mealfist);
	//we can strat loop
	mealfist.forEach(mealName => {
		console.log(mealName);
		const searchResult = document.getElementById("search-result");
		searchResult.textContent = " ";
		/* 	if (mealfist.length == 0) {
				alert(`show no result`);
			} */
		const newDiv = document.createElement("div");
		newDiv.classList.add("col");
		newDiv.innerHTML = `
		
		<div class="card h-100" onclick="loadMealDetail('${mealName.idMeal}')">
		<img src="${mealName.strMealThumb}" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">${mealName.strMeal}</h5>
			<p class="card-text">${mealName.strInstructions.slice(0, 200)}</p>
		</div>
	</div>
		`;
		searchResult.appendChild(newDiv);

	});

}
const loadMealDetail = mealIdNumber => {
	//console.log(mealIdNumber);
	const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealIdNumber}`;
	//console.log(url);
	fetch(url)
		.then(res => res.json())
		.then(data => finalOutput(data.meals[0]))
}

const finalOutput = outputfinal => {
	//console.log(outputfinal);
	const mealOuput = document.getElementById("mela-output");
	mealOuput.textContent = " "; //text content diye lekha clear korlam
	const div = document.createElement("div");
	div.classList.add("card-body");
	div.innerHTML = `
		<h5 class="card-title">${outputfinal.strMeal}</h5>
		<img src="${outputfinal.strMealThumb}" class="card-img-top-last" alt="..." style = "width: 100%; height: 300px>
		<p class="card-text">${outputfinal.strInstructions.slice(0, 100)}</p>
		<a href="${outputfinal.strYoutube}" class="btn btn-primary">Go Youtube</a>
	`;
	mealOuput.appendChild(div);
}