


    const foodSelection = [
        {name: 'Pizza', 
        description: `Pizza is a yeasted flatbread typically topped with 
                    tomato sauce and cheese and baked in an oven. 
                    It is commonly topped with a selection of meats, vegetables and condiments.
                    The term pizza was first recorded in the 10th century, 
                    in a Latin manuscript from Gaeta in Central Italy.
                    Modern pizza was invented in Naples, Italy, and the dish and its variants have since become popular and common in many areas of the world.
                    In 2009, upon Italy's request, Neapolitan pizza was safeguarded in the European Union as a Traditional Speciality Guaranteed dish.
                    Associazione Verace Pizza Napoletana (True Neapolitan Pizza Association), 
                    a non-profit organization founded in 1984 with headquarters in Naples, 
                    aims to "promote and protect... the true Neapolitan pizza". Pizza is sold fresh or frozen, 
                    either whole or in portions, and is a common fast food item in Europe and 
                    North America.Various types of ovens are used to cook them and many varieties exist. 
                    Several similar dishes are prepared from ingredients commonly used in 
                    pizza preparation, such as calzone and stromboli.`, 
        calories: `Pizza, 14" regular crust, 100 grams - <strong>266 Calories</strong>`,
        nutritionalFacts: `<strong>Protein: </strong> 11g <br>
                            <strong>Carbohydrate: </strong> 33g <br>
                            <strong>Fat: </strong> 10g`, 
        recommendation: `<strong><a href="http://www.madpizzaebar.com/" target="_blank">Mad Pizza E Bar</a></strong><br>
                        <strong>Address: </strong>135 King Street, Newtown 2042</br>
                        <strong>Hours: </strong>12pm - 12am,<br>
                        <strong>Phone: </strong>1300 112 210<br>
                        <br>
                        <strong><a href="https://www.bondipizza.com.au/" target="_blank">Bondi Pizza Broadway</a></strong><br>
                        <strong>Address: </strong>208/1 Bay Street, Glebe NSW 2007</br>
                        <strong>Hours: </strong>11am - 9pm,<br>
                        <strong>Phone: </strong>(02) 9281 9677<br>`},

        {name: 'Bacon & Eggs', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},

        {name: 'Kebab', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},

        {name: 'Taco', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},

        {name: 'Croissant', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},

        {name: 'Pancakes', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},        
        
        {name: 'Stir Fried Noodles', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},

        {name: 'Sushi', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},

        {name: 'Hamburger', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},

        {name: 'Bacon', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},        
        
        {name: 'BBQ', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},

        {name: 'Ice Cream', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},        
        
        {name: 'Pasta', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},

        {name: 'Stuffed Chicken', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},

        {name: 'Coffee', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},        
        
        {name: 'Orange Juice', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},        
        
        {name: 'Beer', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},

        {name: 'Grilled Chicken', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'},    

        {name: 'Champagne', 
        description: 'Pizza is Great', 
        calories: '120 Calories',
        nutritionalFacts: '120 of Sugar', 
        recommendation: 'SaabWer'}        
        
    ];


    

    function runProgram(){
        
        const mealText = document.getElementById('meal-name');
        const mealDescription = document.getElementById('food-description');
        const mealCalories = document.getElementById('calories');
        const mealNutrition = document.getElementById('nutrition');
        const mealRecommendation = document.getElementById('recommendation');
        const rand = Math.floor(Math.random() * foodSelection.length);
        const mealDeciderLogo = document.querySelector('#meal-decider-logo');
        var mealImage = document.querySelector('#meal-image');
        var tableBox = document.querySelector('.tableBox');
        var runButton = document.getElementById('run');
        
        tableBox.style.display = 'block';
        mealDeciderLogo.style.display = 'none';
        mealImage.style.display = 'block';
        mealImage.src = 'img/meal-' + rand + '.png';
        runButton.innerHTML = "REFRESH";

        mealText.innerHTML = foodSelection[rand].name;
        mealDescription.innerHTML = foodSelection[rand].description;
        mealCalories.innerHTML = foodSelection[rand].calories;
        mealNutrition.innerHTML = foodSelection[rand].nutritionalFacts;
        mealRecommendation.innerHTML = foodSelection[rand].recommendation;
    }


