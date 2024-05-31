const CITIES = [
    {name: "Beijing", image: "beijing.png", country: "China", continent: "Asia", nbResidents: 21540000},
    {name: "Brussels", image: "brussels.jpg", country: "Belgium", continent: "Europe", nbResidents: 1850000},
    {name: "Buenos Aires", image: "buenosaires.jpeg", country: "Argentina", continent: "South America", nbResidents: 2891000},
    {name: "Lisboa", image: "lisboa.jpg", country: "Portugal", continent: "Europe", nbResidents: 504718},
    {name: "London", image: "london.jpg", country: "United Kingdom", continent: "Europe", nbResidents: 8982000},
    {name: "Madrid", image: "madrid.jpg", country: "Spain", continent: "Europe", nbResidents: 3266000},
    {name: "Ottawa", image: "ottawa.jpg", country: "Canada", continent: "North America", nbResidents: null},
    {name: "Paris", image: "paris.jpg", country: "France", continent: "Europe", nbResidents: 2148000},
    {name: "Rome", image: "rome.jpg", country: "Italy", continent: "Europe", nbResidents: 2873000},
    {name: "Tokyo", image: "tokyo.jpg", country: "Japan", continent: "Asia", nbResidents: 13960000},
    {name: "Washington", image: "washington.jpg", country: "USA", continent: "North America", nbResidents: null},
    {name: "Zagreb", image: "zagreb.jpg", country: "Croatia", continent: "Europe", nbResidents: 806341}
];

document.addEventListener('DOMContentLoaded', () => {
    const cityContainer = document.getElementById('city-container');
    CITIES.forEach(city => {
        const cityCard = createCityCard(city);
        cityContainer.appendChild(cityCard);
    });
});

function createCityCard(city) {
    const card = document.createElement('div');
    card.className = 'city-card';

    const img = document.createElement('img');
    img.src = city.image;
    img.alt = city.name;
    card.appendChild(img);

    const name = document.createElement('h2');
    name.textContent = city.name;
    card.appendChild(name);

    const details = document.createElement('div');
    details.className = 'city-details';

    const country = document.createElement('p');
    country.textContent = `Country: ${city.country}`;
    details.appendChild(country);

    const continent = document.createElement('p');
    continent.textContent = `Continent: ${city.continent}`;
    details.appendChild(continent);

    const nbResidents = document.createElement('p');
    nbResidents.textContent = city.nbResidents ? `Residents: ${city.nbResidents}` : "Data unknown";
    details.appendChild(nbResidents);

    card.appendChild(details);

    card.addEventListener('click', () => {
        details.classList.toggle('show');
        card.classList.add('shadow-inset-tr');
    });

    return card;
}
