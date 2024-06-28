function filterRecipes() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const recipes = document.querySelectorAll('.recipe');

    recipes.forEach(recipe => {
        const title = recipe.getAttribute('data-title').toLowerCase();
        if (title.includes(searchInput)) {
            recipe.style.display = '';
        } else {
            recipe.style.display = 'none';
        }
    });
}