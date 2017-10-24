


    const foodSelection = [
        {name: 'Pizza', 
        description: `Pizza is a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments.`, 
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
        description: 'A dish consisting of fried or grilled slices of bacon and one or more fried eggs, eaten especially as part of a traditional English breakfast I had bacon and eggs for breakfast.', 
        calories: `Generic: 2 Fried Eggs, 3 Pieces of Bacon & 2 slices of whole wheat light toast - <strong>275 Calories</strong>`,
        nutritionalFacts: `<strong>Protein: </strong> 26g <br>
        <strong>Carbohydrate: </strong> 3g <br>
        <strong>Fat: </strong> 21g`, 
        recommendation: `<strong><a href="https://www.facebook.com/rusticpearlcafe" target="_blank">Rustic Pearl</a></strong><br>
        <strong>Address: </strong>415 Crown Street, Surry Hills 2010</br>
        <strong>Hours: </strong>8am - 4pm,<br>
        <strong>Phone: </strong>0415 102 561<br>
        <br>
        <strong><a href="http://westjuliett.com.au/lunch/" target="_blank">West Juliett</a></strong><br>
        <strong>Address: </strong>30 Llewellyn St, Marrickville NSW 2204</br>
        <strong>Hours: </strong>7am - 4pm,<br>
        <strong>Phone: </strong>(02) 9519 0101<br>`},

        {name: 'Kebab', 
        description: 'Lamb, beef or chicken. Variations. İskender, Cağ Cookbook: Döner kebab Media: Döner kebab. Döner kebab (/ˈdɒnər kəˈbæb/, /ˈdoʊnər/; Turkish: döner or döner kebap, [døˈnɛɾ ˈcebɑp], in English often spelled doner or donner) is a Turkish kebab, made of meat cooked on a vertical rotisserie.', 
        calories: `Chicken/Beef Doner Kebab (301g) - <strong>1,000 Calories</strong>`,
        nutritionalFacts: `<strong>Protein: </strong> 25g <br>
        <strong>Carbohydrate: </strong> 54g <br>
        <strong>Fat: </strong> 26g`, 
        recommendation: `<strong><a href="https://www.erciyesrestaurant.com.au/" target="_blank">Erciyes Restaurant</a></strong><br>
        <strong>Address: </strong>409 Cleveland Street, Surry Hills 2010</br>
        <strong>Hours: </strong>11am - 3am,<br>
        <strong>Phone: </strong>(02) 9319 1309<br>
        <br>
        <strong><a href="https://www.zomato.com/sydney/brothers-kebabs-rockdale" target="_blank">Brothers Kebab</a></strong><br>
        <strong>Address: </strong>315 Princes Hwy, Banksia NSW 2216</br>
        <strong>Hours: </strong>10am - 1am,<br>
        <strong>Phone: </strong>(02) 9567 4194<br>`},

        {name: 'Taco', 
        description: 'A taco is a traditional Mexican dish composed of a corn or wheat tortilla folded or rolled around a filling. A taco can be made with a variety of fillings, including beef, pork, chicken, seafood, vegetables, and cheese, allowing for great versatility and variety. A taco is generally eaten without utensils and is often accompanied by garnishes such as salsa, chili pepper, avocado, guacamole, cilantro (coriander), tomatoes, onions, and lettuce.', 
        calories: `Taco, hard, with beef, cheese and lettuce (100g) - <strong>226 Calories</strong>`,
        nutritionalFacts: `<strong>Protein: </strong> 9g <br>
        <strong>Carbohydrate: </strong> 20g <br>
        <strong>Fat: </strong> 13g`, 
        recommendation: `<strong><a href="http://merivale.com.au/elloco" target="_blank">El Loco</a></strong><br>
        <strong>Address: </strong>64 Foveaux Street, Surry Hills NSW 2010</br>
        <strong>Hours: </strong>10am - 12am,<br>
        <strong>Phone: </strong>(02) 9254 8088<br>
        <br>
        <strong><a href="https://www.mejico.com.au/" target="_blank">Mejico</a></strong><br>
        <strong>Address: </strong>105 Pitt Street, Sydney NSW 2000</br>
        <strong>Hours: </strong>12pm - 12am,<br>
        <strong>Phone: </strong>(02) 9503 0119<br>`},

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


