
function getUrlQueries(){
	return window.location.search.split("&")
}

function getstarssFromUrlQueries(urlQueries){ // input => ['quer',...,'stars=5,2']
	// output => ['stars=5,2']
	const starsQuery = urlQueries.filter(q => q.startsWith('stars'));
	
	const starss = (starsQuery?.[0] // output => 'stars=5,2' 
		.split("=")             // output => ['stars','5,2']
		?.[1]?.split(","));         // output => ['5','2']
	return starss;
}


function getIdsFromUrlQueries(starss){ // input=> ['5','2','m']
	const starssIds = {
		5:"excellent",
		4:"Bien",
		3:"moyen",
		2:"bas",
		1:"mauvais"
	};
	const ids = starss
		?.map(stars=> starssIds?.[stars]) // output => ['excellent','bas', undefined]
		.filter(i=> i);                     // output => ['excellent','bas',]
	return ids;
}

function checkSelectedstarssById(starssIds) // input => ['excellent','bas',]
{
	starssIds?.forEach(id=>{
			document.getElementById(id).checked = true;
		}
	);
}

function checkstarss(){
	const urlQueries =	getUrlQueries();
	const starss = getstarssFromUrlQueries(urlQueries);
	const ids = getIdsFromUrlQueries(starss);
	checkSelectedstarssById(ids);
}

window.addEventListener('load', (event) => {
    
    checkstarss();
  
});