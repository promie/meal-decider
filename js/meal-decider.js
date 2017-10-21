$(document).ready(function(){

    const foodSelection = [
        'Pizza', 
        'Bacon & Eggs', 
        'Kebab', 
        'Taco', 
        'Croissant', 
        'Pancakes', 
        'Stir Fried Noodles', 
        'Sushi', 
        'Hamburger',
        'Bacon',
        'BBQ',
        'Ice Cream',
        'Pasta',
        'Stuffed Chicken',
        'Coffee',
        'Orange Juice',
        'Beer',
        'Grilled Chicken',
        'Champaign'
    ];
    const mealText = document.querySelector('.meal-name');
    const rand = Math.floor(Math.random() * foodSelection.length);
    var mealImage = document.querySelector('#meal-image');


    mealImage.src = 'img/meal-' + rand + '.png';
    mealText.innerHTML = foodSelection[rand];
    
    
});