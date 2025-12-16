const loadDate = () => {
  const search_Text = document.getElementById("search_Text").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search_Text}`)
    .then((res) => res.json()) // Parse JSON
    .then((data) => displayDate(data.meals)) // Handle data
    .catch((err) => console.error(err));
};

const displayDate = (data) => {
  
  document.getElementById("total_meal").innerText = data.length;
  console.log(data);
  const meal_card = document.getElementById("meal_card");
  meal_card.innerText=" ";

  data.forEach((meal) => {
    const card = document.createElement("div");
    card.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src=${meal.strMealThumb} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" class="btn btn-primary">Details...</a>
  </div>
</div>
  `;

    meal_card.appendChild(card);
  });
};
