// MODEL

const foodSelections = [
    // Pizza object
    {
        name: 'Pizza', 
        description: 'Pizza is a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments.', 
        calories: [266, 'Pizza, 14" regular crust, 100 grams'],
        nutrition: [11, 33, 10], //Protein, Carbs & fat
        recommendation: [
            {
                url: 'http://www.madpizzaebar.com/',
                name: 'Mad Pizza E Bar',
                address: '135 King Street, Newtown 2042',
                hours: [12, 12],
                phone: '1300 112 210',
            },
            {
                url: 'https://www.bondipizza.com.au/',
                name: 'Bondi Pizza Broadway',
                address: '208/1 Bay Street, Glebe NSW 2007',
                hours: [11, 9],
                phone: '(02) 9281 9677',
            }
        ]
    },
    // Bacon & Eggs Object
    {
        name: 'Bacon & Eggs', 
        description: 'A dish consisting of fried or grilled slices of bacon and one or more fried eggs, eaten especially as part of a traditional English breakfast I had bacon and eggs for breakfast.', 
        calories: [275, 'Generic: 2 Fried Eggs, 3 Pieces of Bacon & 2 slices of whole wheat light toast'],
        nutrition: [26, 3, 21], 
        recommendation: [
            {
                url: 'https://www.facebook.com/rusticpearlcafe',
                name: 'Rustic Pearl',
                address: '415 Crown Street, Surry Hills 2010',
                hours: [8, 4],
                phone: '0415 102 561',
            },
            {
                url: 'http://westjuliett.com.au/lunch/',
                name: 'West Juliett',
                address: '30 Llewellyn St, Marrickville NSW 2204',
                hours: [7, 4],
                phone: '(02) 9519 0101',
            },
        ]
    },
        // Kebab Object
        {
            name: 'Kebab', 
            description: 'Lamb, beef or chicken. Variations. İskender, Cağ Cookbook: Döner kebab Media: Döner kebab. Döner kebab (/ˈdɒnər kəˈbæb/, /ˈdoʊnər/; Turkish: döner or döner kebap, [døˈnɛɾ ˈcebɑp], in English often spelled doner or donner) is a Turkish kebab, made of meat cooked on a vertical rotisserie.', 
            calories: [1000, 'Chicken/Beef Doner Kebab (301g)'],
            nutrition: [25, 24, 56], 
            recommendation: [
                {
                    url: 'https://www.erciyesrestaurant.com.au/',
                    name: 'Erciyes Restaurant',
                    address: '409 Cleveland Street, Surry Hills 2010',
                    hours: [11, 3],
                    phone: '(02) 9319 1309',
                },
                {
                    url: 'https://www.zomato.com/sydney/brothers-kebabs-rockdale',
                    name: 'Brothers Kebab',
                    address: '315 Princes Hwy, Banksia NSW 2216',
                    hours: [10, 1],
                    phone: '(02) 9567 4194',
                },
            ]
        },
        // Taco Object
        {
            name: 'Taco', 
            description: 'A taco is a traditional Mexican dish composed of a corn or wheat tortilla folded or rolled around a filling. A taco can be made with a variety of fillings, including beef, pork, chicken, seafood, vegetables, and cheese, allowing for great versatility and variety. A taco is generally eaten without utensils and is often accompanied by garnishes such as salsa, chili pepper, avocado, guacamole, cilantro (coriander), tomatoes, onions, and lettuce.', 
            calories: [226, 'Taco, hard, with beef, cheese and lettuce (100g)'],
            nutrition: [9, 20, 13], 
            recommendation: [
                {
                    url: 'http://merivale.com.au/elloco',
                    name: 'El Loco',
                    address: '64 Foveaux Street, Surry Hills NSW 2010',
                    hours: [10, 12],
                    phone: '(02) 9254 8088',
                },
                {
                    url: 'https://www.mejico.com.au/',
                    name: 'Mejico',
                    address: '105 Pitt Street, Sydney NSW 2000',
                    hours: [12, 12],
                    phone: '(02) 9503 0119',
                },
            ]
        },
        // Croissant Object
        {
            name: 'Croissant', 
            description: 'A croissant is a buttery, flaky, viennoiserie pastry named for its well-known crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough.The process results in a layered, flaky texture, similar to a puff pastry.', 
            calories: [406, 'Croissant, butter (100g)'],
            nutrition: [8, 46, 21], 
            recommendation: [
                {
                    url: 'https://www.facebook.com/PennyFours/',
                    name: 'Penny Fours Leichhardt',
                    address: '141 Norton St, Leichhardt NSW 2040',
                    hours: [8, 4],
                    phone: '(02) 9572 8550',
                },
                {
                    url: 'http://www.textbookpatisserie.com.au/',
                    name: 'Textbook Boulangerie Patisserie',
                    address: '274 Botany Rd, Alexandria NSW 2015',
                    hours: [7, 4],
                    phone: '(02) 9699 6156',
                },
            ]
        },
        // Pancakes Object
        {
            name: 'Pancake', 
            description: 'A pancake (or hotcake, griddlecake, or flapjack) is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. In Britain, pancakes are often unleavened and resemble a crepe', 
            calories: [227, 'Pancakes (100g)'],
            nutrition: [6, 28, 10], 
            recommendation: [
                {
                    url: 'http://www.pancakesontherocks.com.au/menu/',
                    name: 'Pancakes On The Rocks',
                    address: '4 Hickson Rd, The Rocks NSW 2000',
                    hours: [24],
                    phone: '(02) 9247 6371',
                },
                {
                    url: 'http://threewilliamscafe.com/',
                    name: 'Three Williams',
                    address: '613A Elizabeth St, Redfern NSW 2016',
                    hours: [7, 4],
                    phone: '(02) 9698 1111',
                },
            ]
        },
        // Pad Thai Noodles Object
        {
            name: 'Pad Thai', 
            description: 'Pad Thai is a stir-fried noodle dish, typical street fare in Thailand and perhaps the #1 order at your local Thai restaurant. The traditional version is a bit funky (fish sauce and dried shrimp), sour (fresh tamarind paste), and sweet (palm sugar)', 
            calories: [610, 'Pad Thai Chicken (1 Plate)'],
            nutrition: [24, 92, 16], 
            recommendation: [
                {
                    url: 'http://www.saabwer.com.au/',
                    name: 'Saab Wer Thai Esan Restaurant',
                    address: '105 King St, Newtown NSW 2042',
                    hours: [11, 10],
                    phone: '(02) 8580 1345',
                },
                {
                    url: 'http://www.chatthai.com.au/',
                    name: 'Chat Thai',
                    address: '20 Campbell St, Haymarket NSW 2000',
                    hours: [10, 2],
                    phone: '(02) 9211 1808',
                },
            ]
        },
        // Sushi Object
        {
            name: 'Sushi', 
            description: 'Sushi can be prepared with either brown or white rice. It is often prepared with raw seafood, but some varieties of sushi use cooked ingredients, and many other are vegetarian. Sushi is often served with pickled ginger, wasabi, and soy sauce', 
            calories: [304, 'Salmon &amp Avocado Roll (1 Roll)'],
            nutrition: [20, 64, 21], 
            recommendation: [
                {
                    url: 'https://www.zomato.com/sydney/sushi-tengoku-kensington/menu',
                    name: 'Sushi Tengoku',
                    address: 'B/262 Anzac Parade, Kensington NSW 2033',
                    hours: [11, 9],
                    phone: '(02) 9663 3388',
                },
                {
                    url: 'http://nijisushi.com.au/',
                    name: 'Niji Sushi Bar',
                    address: '333 Anzac Parade, Kingsford NSW 2032',
                    hours: [12, 10],
                    phone: '(02) 8068 4849',
                },
            ]
        },
        // Hamburger Object
        {
            name: 'Hamburger', 
            description: 'Hamburgers are often served with cheese, lettuce, tomato, bacon, onion, pickles, or chiles; condiments such as mustard, mayonnaise, ketchup, relish, or "special sauce"; and are frequently placed on sesame seed buns', 
            calories: [295, 'Hamburger, double patty (100 grams)'],
            nutrition: [17, 24, 14], 
            recommendation: [
                {
                    url: 'http://bigdaddysburgerbar.com.au/',
                    name: 'Big Daddys Burger Bar',
                    address: '227 King St, Newtown NSW 2042',
                    hours: [11, 12],
                    phone: '(02) 9517 4335',
                },
                {
                    url: 'https://www.moogourmetburgers.com.au/',
                    name: 'Moo Gourmet Burgers Newtown',
                    address: '232 King St, Newtown NSW 2042',
                    hours: [11, 9],
                    phone: '(02) 9565 4001',
                },
            ]
        },
        // Bacon Object
        {
            name: 'Bacon', 
            description: 'Bacon is a meat product prepared from cured pork. It is first cured using large quantities of salt, either a brine or a dry packing. ... Fresh and dried bacon are typically cooked before eating, often by pan frying. Boiled bacon is ready to eat, as is some smoked bacon, but they may be cooked further before eating.', 
            calories: [548, 'Bacon, baked (100 grams)'],
            nutrition: [37, 2, 42], 
            recommendation: [
                {
                    url: 'http://www.cuckoo-callay.com.au/',
                    name: 'Cuckoo Callay',
                    address: '324A King St, Newtown NSW 2042',
                    hours: [8, 4],
                    phone: '(02) 9557 7006',
                },
                {
                    url: 'http://www.devoncafe.com.au/',
                    name: 'Devon Cafe',
                    address: '76 Devonshire St, Surry Hills NSW 2010',
                    hours: [8, 3],
                    phone: '(02) 9211 8777',
                },
            ]
        },
        // Korean BBQ Object
        {
            name: 'Korean BBQ', 
            description: 'Korean barbecue. Korean barbecue refers to the popular method in Korean cuisine of grilling meat, typically beef, pork, or chicken. Such dishes are often prepared on gas or charcoal grills built into the dining table itself', 
            calories: [331, 'Samgyeopsal (Grilled Pork) (100 grams)'],
            nutrition: [17, 1, 28], 
            recommendation: [
                {
                    url: 'https://www.zomato.com/sydney/hanyang-galbi-strathfield',
                    name: 'Hanyang Galbi',
                    address: '28/45-47 The Boulevarde, Strathfield NSW 2135',
                    hours: [11, 10],
                    phone: '(02) 9763 7374',
                },
                {
                    url: 'https://www.facebook.com/Madang2006',
                    name: 'Sydney Madang Korean BBQ',
                    address: '371A Pitt St, Sydney NSW 2000',
                    hours: [11, 2],
                    phone: '(02) 9264 7010',
                },
            ]
        },
        // Ice Cream Object
        {
            name: 'Ice Cream', 
            description: 'Ice cream (derived from earlier iced cream or cream ice) is a sweetened frozen food typically eaten as a snack or dessert. It is usually made from dairy products, such as milk and cream, and often combined with fruits or other ingredients and flavors. It is typically sweetened with sugar or sugar substitutes', 
            calories: [207, 'Ice cream, vanilla (100 grams)'],
            nutrition: [4, 24, 11], 
            recommendation: [
                {
                    url: 'https://www.facebook.com/Cow-and-the-Moon-GelatoCoffeeDessert-Bar-145041955555930/',
                    name: 'Cow &amp The Moon',
                    address: '181 Enmore Rd, Enmore NSW 2042',
                    hours: [8, 11],
                    phone: '(02) 9557 4255',
                },
                {
                    url: 'http://www.gelatomessina.com/au/',
                    name: 'Gelato Messina - Surry Hills',
                    address: '389 Crown St, Surry Hills NSW 2010',
                    hours: [12, 11],
                    phone: '(02) 9332 1191',
                },
            ]
        },
        // Pasta Object
        {
            name: 'Pasta', 
            description: 'Also commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking.', 
            calories: [131, 'Pasta, fresh-refrigerated, cooked (100 grams)'],
            nutrition: [5, 25, 1], 
            recommendation: [
                {
                    url: 'https://www.gpogrand.com/intermezzo-best-italian-restaurant-sydney-cbd',
                    name: 'Intermezzo Italian Restaurant',
                    address: '4 & 5 Ground Floor, Sydney GPO Building, 1 Martin Pl, Sydney NSW 2000',
                    hours: [8, 10],
                    phone: '(02) 9229 7788',
                },
                {
                    url: 'http://www.mantecato.com.au/',
                    name: 'Mantecato',
                    address: '129/85 Reynolds St, Balmain NSW 2041',
                    hours: [12, 10],
                    phone: '(02) 9810 9125',
                },
            ]
        },

        // Sashimi Object
        {
            name: 'Sashimi', 
            description: 'Sashimi is thinly sliced, raw food. Seafood is most commonly eaten as sashimi, but other types of meats (such as beef, horse and deer) and foods (such as yuba tofu skin and konnyaku) can also be served as sashimi. Some people confuse sashimi with sushi. Unlike sashimi, sushi includes vinegared rice', 
            calories: [120, 'Salmon - Wild (Sashimi) (3 pieces)'],
            nutrition: [15, 0, 6], 
            recommendation: [
                {
                    url: 'http://tetsuyas.com/',
                    name: 'Tetsuya\'s',
                    address: '529 Kent St, Sydney NSW 2000',
                    hours: [11, 10],
                    phone: '(02) 9267 2900',
                },
                {
                    url: 'http://www.yukis.com.au/',
                    name: 'Yukis Japanese Restaurant',
                    address: 'Overseas Passenger Terminal, Circular Quay W, The Rocks NSW 2000',
                    hours: [6, 10],
                    phone: '(02) 9252 8600',
                },
            ]
        },
        // Coffee Object
        {
            name: 'Coffee', 
            description: 'There are two distinct points to note your coffee\'s aroma: When the beans are just ground (known as Dry aroma) and when just completing the brew (called Wet aroma or at Break). Flavor / Taste – The variety of discernable tastes, such as chocolate, berry, citrus, caramel, sweet, used in describing coffee', 
            calories: [9, 'Coffee, espresso'],
            nutrition: [1, 1, 0], 
            recommendation: [
                {
                    url: 'https://coffeealchemy.com.au/',
                    name: 'Coffee Alchemy',
                    address: '24 Addison Rd, Marrickville NSW 2204',
                    hours: [8, 3],
                    phone: '(02) 9516 1997',
                },
                {
                    url: 'https://www.gpogrand.com/maximus-best-espresso-cafe-sydney-cbd',
                    name: 'Maximus Cafe, Sydney',
                    address: '14 Ground Floor, No. 1 Martin Place, Sydney GPO Building, Sydney, NSW, Sydney NSW 2000',
                    hours: [7, 4],
                    phone: '(02) 9229 7711',
                },
            ]
        },
        // Orange Juice Object
        {
            name: 'Orange Juice', 
            description: 'Orange juice is the liquid extract of the fruit of the orange tree, produced by squeezing oranges. It comes in several different varieties, including blood orange, navel oranges, valencia orange, clementine, and tangerine. As well as variations in oranges used, some varieties include differing amounts of juice vesicles, known as "pulp" in American English, and "juicy bits" in British English. These vesicles contain the juice of the orange and can be left in or removed during the manufacturing process. How juicy these vesicles are depend upon many factors, such as species, variety, and season. In American English, the beverage name may be abbreviated as "OJ".', 
            calories: [45, 'Orange Juice (100 grams)'],
            nutrition: [1, 10, 1], 
            recommendation: [
                {
                    url: 'http://www.fruitologist.com.au/',
                    name: 'Fruitologist Union Place',
                    address: '120 Terry St, Rozelle NSW 2039',
                    hours: [7, 8],
                    phone: '(02) 9555 1612',
                },
                {
                    url: 'http://www.nudie.com.au/',
                    name: 'nudie Foods',
                    address: '77 Corish Cir, Eastgardens NSW 2036',
                    hours: [8, 5],
                    phone: '(02) 9316 3700',
                },
            ]
        },
        // Beer Object
        {
            name: 'Beer', 
            description: 'The definition of beer goes something like this: an alcoholic beverage, made from malted cereal grain, flavored with hops, and brewed by slow fermentation. The English word “beer” comes from the Latin “bibere” meaning, “to drink”. Mainly, beer is made from malted barley, hops, yeast and water.', 
            calories: [92, 'Pure Blonde - Beer (Low Carb) (1 Bottle (355mL))'],
            nutrition: [1, 2, 0], 
            recommendation: [
                {
                    url: 'http://www.willietheboatman.com/',
                    name: 'Willie the Boatman',
                    address: '202/75 Mary St, St Peters NSW 2044',
                    hours: [12, 7],
                    phone: '0413 514 026',
                },
                {
                    url: 'http://www.kegandbrew.com.au/',
                    name: 'Keg & Brew',
                    address: '26 Foveaux St, Surry Hills NSW 2010',
                    hours: [10, 11],
                    phone: '(02) 9212 1740',
                },
            ]
        },
        // Salad Object
        {
            name: 'Salad', 
            description: 'Salad. A garden salad consisting of lettuce, cucumber, scallions, cherry tomatoes, olives, sun-dried tomatoes, and cheese. Main ingredients. A base of vegetables, fruits, meat, eggs, or grains; mixed with a sauce.', 
            calories: [81, 'Bacon Ranch Salad with Grilled Chicken (100 grams)'],
            nutrition: [10, 4, 3], 
            recommendation: [
                {
                    url: 'https://www.facebook.com/goodlifesalad/',
                    name: 'Good Life',
                    address: '77 York St, Sydney NSW 2000',
                    hours: [6, 4],
                    phone: '(02) 9290 1223',
                },
                {
                    url: 'http://sumosalad.com/introducing-sumosalad-green-label/',
                    name: 'SumoSalad Green Label',
                    address: 'RG15/500 George St, Sydney NSW 2000',
                    hours: [9, 10],
                    phone: '(02) 9212 1740',
                },
            ]
        },
        // Champagne Object
        {
            name: 'Champagne', 
            description: 'Champagne is a bubbly white wine that people often drink to celebrate happy occasions. When you pull the cork out of a bottle of champagne, it makes a loud pop. Traditionally, the sparkling wine known as champagne came from a specific region of France and was made from certain grapes grown there.', 
            calories: [76, 'Champagne (100mL)'],
            nutrition: [1, 1, 0], 
            recommendation: [
                {
                    url: 'http://www.grandmasbarsydney.com.au/',
                    name: 'Grandmar\'s Bar',
                    address: '275 Clarence St, Sydney NSW 2000',
                    hours: [5, 11],
                    phone: '(02) 9264 3004',
                },
                {
                    url: 'http://champagneroom.com.au/',
                    name: 'Champagne Room',
                    address: ' l1/285A Crown St, Surry Hills NSW 2010',
                    hours: [11, 11],
                    phone: '(02) 8322 2007',
                },
            ]
        },
        
// end
]
    
// CONTROLLER

function formatDescription(description) {
    return `<strong>${description}</strong>`
}

function formatRecommendations(recommendations) {
    var htmlStr = ''
    recommendations.forEach((recommend) => {
        htmlStr += formatStrongNormal('Name:', formatHref(recommend.url, recommend.name))
        htmlStr += formatStrongNormal('Address:', recommend.address)
        htmlStr += formatStrongNormal('Hours:', openingTimeFormat(recommend.hours))
        htmlStr += formatStrongNormal('Phone:', recommend.phone) + '<br>'
    })
    return htmlStr;

}

function formatStrongNormal(strong, normal) {
    return `<strong>${strong}</strong> ${normal}<br>`
}

function formatHref(url, name){
    return `<a ref="${url} target="_blank">${name}</a>`
}

function formatCalories(caloriesArray){
    return `${caloriesArray[1]} - <strong>${caloriesArray[0]} Calories</strong>`
}

function openingTimeFormat(timeArray){

    if(timeArray.length === 1){
        return 'Open 24 Hours';
    }else{
        return `${timeArray[0]}am to ${timeArray[1]}pm`
    }
}

function formatNutrition(nutritionArray){
    return `<strong>Protein: </strong>${nutritionArray[0]}g<br><strong>Carbohydrate: </strong>${nutritionArray[1]}g<br><strong>Fat: </strong>${nutritionArray[2]}g`
}

function randomizeFoodImage(randomNum){
    return `img/meal-${randomNum}.png`
}

function ontopOfPage(){
    document.body.scrollTop = 0;
}

// VIEW

    function runProgram() {

        //Top of Page Function Call
        ontopOfPage();
        
        //Random Calculation
        const rand = Math.floor(Math.random() * foodSelections.length);

        //Food Descriptions
        const mealText = document.getElementById('meal-name');
        mealText.innerHTML = formatDescription(foodSelections[rand].name);
        const mealDescription = document.getElementById('food-description');
        mealDescription.innerHTML = foodSelections[rand].description;
        const mealCalories = document.getElementById('calories');
        mealCalories.innerHTML = formatCalories(foodSelections[rand].calories);
        const mealNutrition = document.getElementById('nutrition');
        mealNutrition.innerHTML = formatNutrition(foodSelections[rand].nutrition);
        const mealRecommendation = document.getElementById('recommendation');
        mealRecommendation.innerHTML = formatRecommendations(foodSelections[rand].recommendation);

        //CSS Styling
        var tableBox = document.getElementById('tableBox');
        tableBox.style.display = 'block';
        const mealDeciderLogo = document.getElementById('meal-decider-logo');
        mealDeciderLogo.style.display = 'none';
        var mealImage = document.getElementById('meal-image');
        mealImage.style.display = 'block';
        mealImage.src = randomizeFoodImage(rand);
        var authorText = document.getElementById('author');
        authorText.style.display = 'none';

        
        //Execution Button
        var runButton = document.getElementById('run');
        runButton.innerHTML = "RELOAD";
    }
