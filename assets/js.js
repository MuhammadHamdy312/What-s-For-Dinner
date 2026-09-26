
var recipes = [
    {
        recipe_name: "Creamy Spaghetti Carbonara",
        recipe_description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
        recipe_image: "./images/photo1.avif",
        rating_average: 4.8,
        rating_quantity: 234,
        prep_time: "15 min",
        cook_time: "20 min",
        total_time: 35,
        servings: "4 people",
        difficulty: "Easy",
        category: "Italian",
        ingredients: [
            "400g spaghetti pasta",
            "200g pancetta or guanciale, diced",
            "4 large eggs",
            "100g Pecorino Romano cheese, grated",
            "50g Parmesan cheese, grated",
            "Freshly ground black pepper",
            "Salt for pasta water"
        ],
        instructions: [
            "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
            "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
            "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
            "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
            "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
            "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"
        ],
        nutrition: {
            calories: "520 kcal",
            protein: "28g",
            carbs: "62g",
            fat: "18g",
            fiber: "3g",
            sodium: "680mg"
        },
        tips: [
            "Use room temperature eggs for a smoother sauce consistency",
            "Work quickly when mixing eggs with hot pasta to avoid scrambling",
            "Reserve extra pasta water — it's the secret to perfect creaminess",
            "Freshly grated cheese makes all the difference in flavor",
            "Never add cream — authentic carbonara is made with eggs only"
        ]
    },
    {
        recipe_name: "Honey Garlic Salmon",
        recipe_description: "Pan-seared salmon with a sweet and savory honey garlic glaze",
        recipe_image: "./images/14.avif",
        rating_average: 4.9,
        rating_quantity: 187,
        prep_time: "10 min",
        cook_time: "15 min",
        total_time: 25,
        servings: "2 people",
        difficulty: "Easy",
        category: "Seafood",
        ingredients: [
            "2 salmon fillets (6oz each)",
            "3 tablespoons honey",
            "2 tablespoons soy sauce",
            "4 cloves garlic, minced",
            "1 tablespoon olive oil",
            "1 teaspoon fresh ginger, grated",
            "Sesame seeds for garnish",
            "Green onions, sliced"
        ],
        instructions: [
            "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
            "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
            "Heat olive oil in a large skillet over medium-high heat.",
            "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
            "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
            "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice."
        ],
        nutrition: {
            calories: "380 kcal",
            protein: "35g",
            carbs: "28g",
            fat: "14g",
            fiber: "0g",
            sodium: "720mg"
        },
        tips: [
            "Don't overcook salmon — it should be slightly pink in the center",
            "Use wild-caught salmon for best flavor and nutrition",
            "Let the sauce caramelize slightly for a deeper flavor",
            "Pair with steamed broccoli or asparagus for a complete meal"
        ]
    },
    {
        recipe_name: "Thai Green Curry",
        recipe_description: "Vibrant and aromatic curry with vegetables and coconut milk",
        recipe_image: "./images/photo3.avif",
        rating_average: 4.7,
        rating_quantity: 312,
        prep_time: "15 min",
        cook_time: "25 min",
        total_time: 40,
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Asian",
        ingredients: [
            "2 tablespoons green curry paste",
            "400ml coconut milk",
            "300g chicken breast, sliced",
            "1 red bell pepper, sliced",
            "100g green beans",
            "1 eggplant, cubed",
            "2 tablespoons fish sauce",
            "1 tablespoon palm sugar",
            "Fresh Thai basil leaves"
        ],
        instructions: [
            "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
            "Add half the coconut milk and stir to combine with the curry paste.",
            "Add sliced chicken and cook until no longer pink, about 5 minutes.",
            "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
            "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
            "Stir in fresh Thai basil leaves. Serve hot with jasmine rice."
        ],
        nutrition: {
            calories: "420 kcal",
            protein: "26g",
            carbs: "22g",
            fat: "26g",
            fiber: "5g",
            sodium: "890mg"
        },
        tips: [
            "Adjust spice level by using more or less curry paste",
            "Add vegetables in stages based on their cooking time",
            "Fresh Thai basil is essential for authentic flavor",
            "Use full-fat coconut milk for the richest, creamiest sauce"
        ]
    },
    {
        recipe_name: "Classic Beef Burger",
        recipe_description: "Juicy homemade burger with all the fixings",
        recipe_image: "./images/13.avif",
        rating_average: 4.6,
        rating_quantity: 421,
        prep_time: "15 min",
        cook_time: "20 min",
        total_time: 35,
        servings: "4 people",
        difficulty: "Easy",
        category: "American",
        ingredients: [
            "500g ground beef (80/20)",
            "4 burger buns",
            "4 slices cheddar cheese",
            "Lettuce leaves",
            "Tomato slices",
            "Red onion, sliced",
            "Pickles",
            "Burger sauce or condiments"
        ],
        instructions: [
            "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
            "Season patties generously with salt and pepper on both sides.",
            "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
            "Add cheese slices in the last minute of cooking and cover to melt.",
            "Toast burger buns lightly on the grill or in a pan.",
            "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."
        ],
        nutrition: {
            calories: "650 kcal",
            protein: "38g",
            carbs: "42g",
            fat: "35g",
            fiber: "2g",
            sodium: "920mg"
        },
        tips: [
            "Don't press down on burgers while cooking — keeps them juicy",
            "Make an indent in the center to prevent the burger from puffing up",
            "Let patties rest for 2-3 minutes before serving",
            "Toast buns for better texture and to prevent sogginess"
        ]
    },
    {
        recipe_name: "Mediterranean Quinoa Bowl",
        recipe_description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
        recipe_image: "./images/6.avif",
        rating_average: 4.5,
        rating_quantity: 156,
        prep_time: "20 min",
        cook_time: "35 min",
        total_time: 55,
        servings: "2 people",
        difficulty: "Easy",
        category: "Mediterranean",
        ingredients: [
            "1 cup quinoa",
            "Cherry tomatoes, halved",
            "Cucumber, diced",
            "Red onion, sliced",
            "Kalamata olives",
            "Feta cheese, crumbled",
            "Fresh parsley",
            "Tahini dressing"
        ],
        instructions: [
            "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
            "While quinoa cooks, prepare all vegetables and set aside.",
            "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
            "Fluff cooked quinoa with a fork and let cool slightly.",
            "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
            "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
        ],
        nutrition: {
            calories: "480 kcal",
            protein: "18g",
            carbs: "58g",
            fat: "20g",
            fiber: "10g",
            sodium: "540mg"
        },
        tips: [
            "Rinse quinoa well to remove the bitter coating",
            "Let quinoa cool before adding fresh ingredients",
            "Make extra tahini dressing — it keeps well in the fridge",
            "Add grilled chicken or chickpeas for extra protein"
        ]
    },
    {
        recipe_name: "Chicken Tikka Masala",
        recipe_description: "Rich and creamy Indian curry with tender chicken pieces",
        recipe_image: "./images/9.avif",
        rating_average: 4.7,
        rating_quantity: 389,
        prep_time: "20 min",
        cook_time: "30 min",
        total_time: 50,
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Asian",
        ingredients: [
            "600g chicken breast, cubed",
            "1 cup plain yogurt",
            "2 tablespoons tikka masala paste",
            "400ml coconut cream",
            "1 onion, diced",
            "4 cloves garlic, minced",
            "2 tablespoons ginger, grated",
            "400g canned tomatoes",
            "Fresh cilantro for garnish"
        ],
        instructions: [
            "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
            "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
            "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
            "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
            "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
            "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice."
        ],
        nutrition: {
            calories: "520 kcal",
            protein: "42g",
            carbs: "18g",
            fat: "30g",
            fiber: "3g",
            sodium: "780mg"
        },
        tips: [
            "Marinate the chicken overnight for deeper flavor",
            "Use full-fat yogurt to prevent curdling in the sauce",
            "Toast whole spices before grinding for more aromatic curry",
            "Add a pinch of sugar to balance acidity from the tomatoes"
        ]
    },
    {
        recipe_name: "Vegetable Curry",
        recipe_description: "Hearty vegetarian curry with coconut milk",
        recipe_image: "./images/photo0.avif",
        rating_average: 4.6,
        rating_quantity: 289,
        prep_time: "15 min",
        cook_time: "30 min",
        total_time: 45,
        servings: "4 people",
        difficulty: "Easy",
        category: "Asian",
        ingredients: [
            "2 tablespoons curry powder",
            "400ml coconut milk",
            "1 large sweet potato, cubed",
            "1 can chickpeas, drained",
            "1 red bell pepper, chopped",
            "1 cup spinach leaves",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat oil in a large pot over medium heat. Sauté diced onion until golden, about 5 minutes.",
            "Add garlic and curry powder, stir and cook for 1 minute until fragrant.",
            "Add sweet potato cubes and pour in coconut milk. Bring to a gentle boil.",
            "Reduce heat and simmer for 15 minutes until sweet potato is nearly tender.",
            "Stir in chickpeas and red bell pepper. Simmer for another 10 minutes.",
            "Fold in spinach and cook until wilted, about 2 minutes. Serve over rice."
        ],
        nutrition: {
            calories: "390 kcal",
            protein: "12g",
            carbs: "48g",
            fat: "18g",
            fiber: "9g",
            sodium: "540mg"
        },
        tips: [
            "Cut sweet potato into even pieces for uniform cooking",
            "Taste and adjust spice level with more curry powder or chili",
            "Squeeze fresh lemon juice before serving for brightness",
            "Leftovers taste even better the next day as flavors meld"
        ]
    },
    {
        recipe_name: "Greek Moussaka",
        recipe_description: "Traditional layered eggplant casserole with lamb",
        recipe_image: "./images/11.avif",
        rating_average: 4.8,
        rating_quantity: 234,
        prep_time: "30 min",
        cook_time: "60 min",
        total_time: 60,
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Mediterranean",
        ingredients: [
            "3 large eggplants, sliced",
            "500g ground lamb",
            "400g canned tomatoes",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "500ml béchamel sauce",
            "100g parmesan cheese",
            "Cinnamon and oregano",
            "Olive oil"
        ],
        instructions: [
            "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
            "Brush eggplant slices with olive oil, grill or bake until softened.",
            "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
            "Preheat oven to 180°C (350°F).",
            "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
            "Bake for 45 minutes until golden. Let rest 15 minutes before serving."
        ],
        nutrition: {
            calories: "580 kcal",
            protein: "36g",
            carbs: "32g",
            fat: "32g",
            fiber: "8g",
            sodium: "820mg"
        },
        tips: [
            "Salt eggplant to remove bitterness",
            "Don't skip the resting time - it helps set the layers",
            "Use ground beef if lamb is unavailable",
            "Make ahead and reheat for easier serving"
        ]
    },
    {
        recipe_name: "Lasagna Bolognese",
        recipe_description: "Layered Italian pasta with rich meat sauce and béchame",
        recipe_image: "./images/10.avif",
        rating_average: 4.9,
        rating_quantity: 478,
        prep_time: "30 min",
        cook_time: "90 min",
        total_time: 90,
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Italian",
        ingredients: [
            "12 lasagna sheets",
            "500g ground beef",
            "400g canned tomatoes",
            "1 onion, diced",
            "2 carrots, diced",
            "500ml béchamel sauce",
            "200g mozzarella, grated",
            "100g parmesan cheese",
            "Fresh basil"
        ],
        instructions: [
            "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
            "Cook lasagna sheets according to package directions. Drain and set aside.",
            "Preheat oven to 180°C (350°F).",
            "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
            "Top final layer with béchamel, mozzarella, and parmesan cheese.",
            "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving."
        ],
        nutrition: {
            calories: "680 kcal",
            protein: "42g",
            carbs: "58g",
            fat: "28g",
            fiber: "6g",
            sodium: "920mg"
        },
        tips: [
            "Make bolognese sauce a day ahead for better flavor",
            "Don't skip the resting time after baking",
            "Use fresh pasta sheets for best texture",
            "Freeze leftovers in individual portions"
        ]
    },
    {
        recipe_name: "Teriyaki Chicken Bowl",
        recipe_description: "Sweet and savory chicken over rice with vegetables",
        recipe_image: "./images/15.avif",
        rating_average: 4.7,
        rating_quantity: 367,
        prep_time: "15 min",
        cook_time: "20 min",
        total_time: 20,
        servings: "2 people",
        difficulty: "Easy",
        category: "Asian",
        ingredients: [
            "400g chicken thighs, sliced",
            "1/2 cup teriyaki sauce",
            "2 cups cooked rice",
            "1 broccoli head, florets",
            "1 carrot, julienned",
            "Sesame seeds",
            "Green onions, sliced",
            "1 tablespoon sesame oil"
        ],
        instructions: [
            "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
            "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
            "Meanwhile, steam broccoli and carrots until tender-crisp.",
            "Divide rice between bowls.",
            "Top with teriyaki chicken and steamed vegetables.",
            "Garnish with sesame seeds and green onions. Serve hot."
        ],
        nutrition: {
            calories: "540",
            protein: "42g",
            carbs: "58g",
            fat: "14g",
            fiber: "4g",
            sodium: "1240mg"
        },
        tips: [
            "Use chicken thighs for juicier meat",
            "Make homemade teriyaki sauce for better flavor control",
            "Add edamame for extra protein",
            "Meal prep by cooking rice and chicken ahead"
        ]
    },
    {
        recipe_name: "BBQ Pulled Pork",
        recipe_description: "Slow-cooked tender pork in smoky barbecue sauce",
        recipe_image: "./images/photo2.avif",
        rating_average: 4.7,
        rating_quantity: 412,
        prep_time: "15 min",
        cook_time: "240 min",
        total_time: 240,
        servings: "4 people",
        difficulty: "Easy",
        category: "American",
        ingredients: [
            "1kg pork shoulder",
            "1 cup BBQ sauce",
            "1/2 cup apple cider vinegar",
            "2 tablespoons brown sugar",
            "1 tablespoon paprika",
            "1 tablespoon garlic powder",
            "Burger buns",
            "Coleslaw for serving"
        ],
        instructions: [
            "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
            "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
            "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
            "Remove pork and shred with two forks. Discard excess fat.",
            "Return shredded pork to slow cooker, mix with BBQ sauce.",
            "Serve on toasted buns with coleslaw on top."
        ],
        nutrition: {
            calories: "620",
            protein: "48g",
            carbs: "52g",
            fat: "22g",
            fiber: "3g",
            sodium: "1180mg"
        },
        tips: [
            "Use pork shoulder for best results - it stays moist",
            "Let pork rest before shredding for juicier meat",
            "Make your own BBQ sauce for better flavor",
            "Leftovers freeze well for up to 3 months"
        ]
    },
    {
        recipe_name: "Beef Tacos",
        recipe_description: "Flavorful Mexican tacos with seasoned ground beef",
        recipe_image: "./images/16.avif",
        rating_average: 4.6,
        rating_quantity: 278,
        prep_time: "15 min",
        cook_time: "20 min",
        total_time: 20,
        servings: "4 people",
        difficulty: "Easy",
        category: "American",
        ingredients: [
            "500g ground beef",
            "8 taco shells",
            "1 onion, diced",
            "2 tablespoons taco seasoning",
            "Shredded lettuce",
            "Diced tomatoes",
            "Shredded cheddar cheese",
            "Sour cream",
            "Salsa"
        ],
        instructions: [
            "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
            "Add diced onion and cook until softened, about 5 minutes.",
            "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
            "Warm taco shells according to package directions.",
            "Fill each shell with seasoned beef.",
            "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately."
        ],
        nutrition: {
            calories: "420",
            protein: "26g",
            carbs: "32g",
            fat: "20g",
            fiber: "4g",
            sodium: "780mg"
        },
        tips: [
            "Drain excess fat from beef for healthier tacos",
            "Warm shells in oven for better texture",
            "Prepare all toppings before cooking beef",
            "Use ground turkey for a lighter option"
        ]
    },
    {
        recipe_name: "Caprese Sandwich",
        recipe_description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
        recipe_image: "./images/8.avif",
        rating_average: 4.5,
        rating_quantity: 189,
        prep_time: "10 min",
        cook_time: "5 min",
        total_time: 5,
        servings: "2 people",
        difficulty: "Easy",
        category: "Italian",
        ingredients: [
            "1 ciabatta bread",
            "200g fresh mozzarella, sliced",
            "2 large tomatoes, sliced",
            "Fresh basil leaves",
            "3 tablespoons pesto",
            "2 tablespoons balsamic glaze",
            "Olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Slice ciabatta bread in half horizontally.",
            "Toast bread lightly until just crispy.",
            "Spread pesto on both sides of bread.",
            "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
            "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
            "Close sandwich, cut in half, and serve immediately."
        ],
        nutrition: {
            calories: "480",
            protein: "22g",
            carbs: "48g",
            fat: "22g",
            fiber: "3g",
            sodium: "680mg"
        },
        tips: [
            "Use ripe, in-season tomatoes for best flavor",
            "Buffalo mozzarella is traditional but harder to slice",
            "Toast bread lightly - not too crispy",
            "Add prosciutto or salami for a heartier sandwich"
        ]
    }
];

// Track copy array and current recipe object
var copy_of_recipes = recipes.slice();

// Pick a random recipe without repeating until all are shown


// Build ingredient list HTML 
function buildIngredients(ingredients) {
    var html = "";
    for (var i = 0; i < ingredients.length; i++) {
        html +=
            '<li class="d-flex align-items-start">' +
            `<span class="ingredient-num me-3">${i + 1}</span>` +
            `<span class="text-secondary small">${ingredients[i]}</span>` +
            '</li>';
    }
    return html;
}

// Build instruction steps HTML
function buildInstructions(instructions) {
    var html = "";
    for (var i = 0; i < instructions.length; i++) {
        html +=
            '<div class="d-flex align-items-start">' +
            `<div class="instruction-step-num me-3 me-md-4">${i + 1}</div>` +
            '<div class="flex-grow-1 pt-1">' +
            `<p class="text-secondary mb-0 small ">${instructions[i]}</p>` +
            '</div>' +
            '</div>';
    }
    return html;
}

// Build chef's tips HTML
function buildTips(tips) {
    var html = "";
    for (var i = 0; i < tips.length; i++) {
        html +=
            '<div class="tip-card d-flex align-items-start gap-3">' +
            '<i class="fa-solid fa-circle-check warning-dark fs-5 mt-1 flex-shrink-0"></i>' +
            '<p class="text-secondary mb-0 small">' + tips[i] + '</p>' +
            '</div>';
    }
    return html;
}

// Main render function
function displayRecipe() {
     if (copy_of_recipes.length === 1) {
    copy_of_recipes = recipes.slice();
  }

  // Pick random index from remaining items
  var randomIndex = Math.floor(Math.random() * copy_of_recipes.length);
    // Image
    document.getElementById("recipe-image").src = copy_of_recipes[randomIndex].recipe_image;
    document.getElementById("recipe-image").alt = copy_of_recipes[randomIndex].recipe_name;

    // Rating
    document.getElementById("rating-average").innerHTML = copy_of_recipes[randomIndex].rating_average;
    document.getElementById("rating-quantity").innerHTML = "(" + copy_of_recipes[randomIndex].rating_quantity + " reviews)";

    // Prep info overlay
    document.getElementById("prep-time-display").innerHTML = copy_of_recipes[randomIndex].prep_time;
    document.getElementById("cook-time-display").innerHTML = copy_of_recipes[randomIndex].cook_time;
    document.getElementById("servings-display").innerHTML = copy_of_recipes[randomIndex].servings;

    // Badges
    document.getElementById("difficulty-badge").innerHTML = copy_of_recipes[randomIndex].difficulty;
    document.getElementById("category-badge").innerHTML = copy_of_recipes[randomIndex].category;

    // Title & description
    document.getElementById("recipe-name").innerHTML = copy_of_recipes[randomIndex].recipe_name;
    document.getElementById("recipe-description").innerHTML = copy_of_recipes[randomIndex].recipe_description;

    // Extended time warning (show if total time > 45 min)
    var warning = document.getElementById("time-warning");
    if (copy_of_recipes[randomIndex].total_time > 45) {
        warning.classList.remove("d-none");
    } else {
        warning.classList.add("d-none");
    }

    // Ingredients tab
    document.getElementById("ingredients-list").innerHTML = buildIngredients(copy_of_recipes[randomIndex].ingredients);

    // Instructions tab
    document.getElementById("instructions-list").innerHTML = buildInstructions(copy_of_recipes[randomIndex].instructions);

    // Nutrition tab
    document.getElementById("calories-value").innerHTML = copy_of_recipes[randomIndex].nutrition.calories;
    document.getElementById("protein-value").innerHTML = copy_of_recipes[randomIndex].nutrition.protein;
    document.getElementById("carbs-value").innerHTML = copy_of_recipes[randomIndex].nutrition.carbs;
    document.getElementById("fat-value").innerHTML = copy_of_recipes[randomIndex].nutrition.fat;
    document.getElementById("fiber-value").innerHTML = copy_of_recipes[randomIndex].nutrition.fiber;
    document.getElementById("sodium-value").innerHTML = copy_of_recipes[randomIndex].nutrition.sodium;

    // Chef's Tips tab
    document.getElementById("tips-list").innerHTML = buildTips(copy_of_recipes[randomIndex].tips);

    copy_of_recipes.splice(randomIndex, 1);
}


// Load initial recipe on page load
 displayRecipe();