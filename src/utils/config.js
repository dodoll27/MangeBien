export const profiles = [
  {
    name: "Teo",
    status: "Student",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    isVisible: true,
  },
  {
    name: "Ruxy",
    status: "Student",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    isVisible: false,
  },
  {
    name: "Quentin",
    status: "Student",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    isVisible: false,
  },
  {
    name: "Gabi",
    status: "Student",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    isVisible: false,
  },
  {
    name: "Inga",
    status: "Student",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    isVisible: false,
  },
  {
    name: "Iulian",
    status: "Student",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    isVisible: false,
  },
];

export const posts = [
  {
    id: 1,
    image: "/images/food/vegan-chili-croped.jpeg",
    image_full: "/images/food/vegan-chili.jpeg",
    name: "Vegan Chili",
    creator: "@Ruxy",
    description: "viva mexico",
    type: "tried",
    ingredients: [
      "2 tsp ground cumin",
      "1 onion, chopped",
      "2 carrots, chopped",
      "2 celery sticks, chopped",
      "2 garlic cloves, crushed",
      "1-2 tsp chilli powder (depending on how hot you like it)",
      "1 tsp dried oregano",
      "1 tbsp tomato purée",
      "1 red pepper, cut into chunks",
      "2 x 400g cans chopped tomatoes",
      "400g can black beans, drained",
      "400g can kidney beans, drained",
      "lime wedges, guacamole, rice and coriander to serve",
    ],
    steps: [
      "STEP 1 Heat the oven to 200C/180C fan/gas 6. Put the sweet potato in a roasting tin and drizzle over 1½ tbsp oil, 1 tsp smoked paprika and 1 tsp ground cumin. Give everything a good mix so that all the chunks are coated in spices, season with salt and pepper, then roast for 25 mins until cooked. ",
      "STEP 2 Meanwhile, heat the remaining oil in a large saucepan over a medium heat. Add the onion, carrot and celery. Cook for 8-10 mins, stirring occasionally until soft, then crush in the garlic and cook for 1 min more. Add the remaining dried spices and tomato purée. Give everything a good mix and cook for 1 min more. ",
      "STEP 3 Add the red pepper, chopped tomatoes and 200ml water. Bring the chilli to a boil, then simmer for 20 mins. Tip in the beans and cook for another 10 mins before adding the sweet potato. Season to taste then serve with lime wedges, guacamole, rice and coriander. Will keep, in an airtight container in the freezer, for up to three months.",
    ],
    nutrition: {
      id: 1,
      kcal: 367,
      fat: "10g",
      carbs: "48g",
      sugars: "22g",
      fibre: "17g",
      protein: "12g",
      salt: "0.6g",
    },
  },
  {
    id: 2,
    image: "/images/food/mapo-tofu-croped.jpeg",
    image_full: "/images/food/mapo-tofu.jpeg",
    name: "Mapo Tofu",
    creator: "future user",
    description: "20min recipe",
    type: "saved",
    ingredients: [
      "450g tofu",
      "3 tbsp groundnut oil",
      "100g pork mince",
      "2 tbsp Sichuan chilli bean paste",
      "1½ tbsp fermented black beans rinsed",
      "2cm piece ginger peeled and finely chopped",
      "3 garlic cloves, chopped",
      "200ml light chicken stock or water",
      "1 tsp cornflour, mixed with 1 tbsp water",
      "6 spring onions, sliced on the diagonal",
      "1 tbsp Sichuan chilli oil (optional)",
      "½ tsp Sichuan peppercorns, crushed",
      "cooked white rice, to serve",
    ],
    steps: [
      "STEP 1 Get all the ingredients ready before you start cooking and set them out in bowls. Drain the tofu and cut it into 1.5cm cubes. Put it in a bowl and cover with very hot water. Leave this while you get on with everything else.",
      "STEP 2 Heat a wok and pour in the groundnut oil. Get this really hot and fry the pork until it's crispy. Remove with a slotted spoon but leave the oil behind.",
      "STEP 3 Add the bean paste and cook, stirring for a few mins until fragrant, then add the black beans, ginger and garlic. Cook, stirring, for a min or so, then add the stock and let it bubble away.",
      "STEP 4 Stir the cornflour and water into the mixture in the wok, drain the tofu and stir it into the sauce. Tip in the spring onions and the mince.",
      "STEP 5 Add the chilli oil, if using, and sprinkle over the Sichuan peppercorns. The sauce shouldn't need seasoning with salt, as many of the ingredients are salty already. Serve with boiled white rice.",
    ],
    nutrition: {
      id: 2,
      kcal: 310,
      fat: "21g",
      carbs: "6g",
      sugars: "2g",
      fibre: "3g",
      protein: "22g",
      salt: "1g",
    },
  },
  {
    id: 3,
    image: "/images/food/hummus-croped.jpeg",
    image_full: "/images/food/hummus.jpeg",
    name: "Hummus",
    creator: "@Ruxy",
    description: "libaneese food",
    type: "tried",
    ingredients: [
      "1 can chickpeas, drained",
      "60ml cold water, plus a 30ml for a looser consistency",
      "1 small garlic clove peeled and crushed",
      "1 lemon, juiced then ½ zested",
      "3 tbsp tahini",
      "1 tbsp olive oil, to garnish (optional)",
      "mixed crudités and toasted pitta bread, to serve (optional)",
    ],
    steps: [
      "STEP 1 Thoroughly rinse the chickpeas in a colander under cold running water. Tip into the large bowl of a food processor along with 60ml of water and blitz until almost smooth. Add the garlic, lemon and tahini, and blitz again. If the consistency is too thick, gradually pour in up to 30ml more water. Blitz again for about 5 mins, or until the hummus is smooth and silky.",
      "STEP 2 Season with a good pinch of sea salt and transfer to a bowl. Swirl the top of the hummus with the back of a dessert spoon and drizzle over a little olive oil. Serve with crunchy crudités and toasted pitta bread, if you like.",
    ],
    nutrition: {
      id: 3,
      kcal: 380,
      fat: "28g",
      carbs: "9g",
      sugars: "0.4g",
      fibre: "5g",
      protein: "7g",
      salt: "0.01g",
    },
  },

  {
    id: 4,
    image: "/images/food/saag-paneer-croped.jpeg",
    image_full: "/images/food/saag-paneer.jpeg",
    name: "Saag Paneer",
    creator: "@Ruxy",
    description: "Keto recipe",
    type: "made",
    ingredients: [
      " 2 tbsp ghee,or cooking oil",
      "1 tsp turmeric ",
      "1 tsp chili powder or Kashmiri chili powder",
      "450g paneer, cut into 3cm cubes",
      "500g spinach, mature fresh or frozen",
      "1 large onion, finely chopped",
      "3 garlic cloves",
      "thumb-sized piece of ginger",
      "1 green chilli, roughly chopped, (include seeds for extra spice)",
      "1 tsp garam masala",
      "½ lemon, juiced, to serve",
    ],
    steps: [
      "STEP 1 Melt the ghee, whisk in with the turmeric and chilli powder, then add the cubed paneer and toss well. Set aside. If using frozen spinach, microwave for 3-5 mins, then place in a sieve and squeeze out most of the water. If using fresh spinach, place in a colander, pour over boiling water, drain and cool, then put in a tea towel and squeeze out most of the water. Roughly chop.",
      "STEP 2 Blitz the onion with the garlic, ginger and green chilli. Cook the paneer in a large non-stick frying pan over medium heat for around 8 mins, tossing the pan so they become golden all over. Remove and set aside on a plate, leaving spices behind in the pan. Tip the onion mix into the pan, add a pinch of salt and turn the heat down. Fry until caramel coloured, around 10 mins, adding a splash of water if it looks a little dry. Add the garam masala, stir to coat the onion mix, fry for 2 mins.",
      "STEP 3 Add the spinach and cook for a further 2-3 mins, adding 100ml water to release all the flavours from the bottom of the pan. Season to taste. Add the paneer and cook for 2-3 mins to heat through. Spoon into bowls and squeeze over a little lemon juice, to serve.",
    ],
    nutrition: {
      id: 4,
      kcal: 326,
      fat: "24g",
      carbs: "4g",
      sugars: "3g",
      fibre: "2g",
      protein: "22g",
      salt: "0.2g",
    },
  },
  {
    id: 5,
    image: "/images/food/tofu-scramble-croped.jpeg",
    image_full: "/images/food/tofu-scramble.jpeg",
    name: "Tofu Scramble",
    creator: "@Ruxy",
    description: "vegan",
    type: "saved",
    ingredients: [
      "  1 tbsp olive oil ",
      "1 small onion, finely sliced",
      "1 large garlic clove, crushed",
      "½ tsp turmeric ",
      "1 tsp ground cumin ",
      "½ tsp sweet smoked paprika ",
      "280g extra firm tofu ",
      "100g cherry tomatoes, halved",
      "½ small bunch parsley, chopped",
      "Rye bread , to serve, (optional)",
    ],
    steps: [
      "STEP 1 Heat the oven to 200C/180C fan/gas 6. Put the sweet potato in a roasting tin and drizzle over 1½ tbsp oil, 1 tsp smoked paprika and 1 tsp ground cumin. Give everything a good mix so that all the chunks are coated in spices, season with salt and pepper, then roast for 25 mins until cooked. ",
      "STEP 2 Meanwhile, heat the remaining oil in a large saucepan over a medium heat. Add the onion, carrot and celery. Cook for 8-10 mins, stirring occasionally until soft, then crush in the garlic and cook for 1 min more. Add the remaining dried spices and tomato purée. Give everything a good mix and cook for 1 min more. ",
      "STEP 3 Add the red pepper, chopped tomatoes and 200ml water. Bring the chilli to a boil, then simmer for 20 mins. Tip in the beans and cook for another 10 mins before adding the sweet potato. Season to taste then serve with lime wedges, guacamole, rice and coriander. Will keep, in an airtight container in the freezer, for up to three months.",
    ],
    nutrition: {
      id: 5,
      kcal: 367,
      fat: "10g",
      carbs: "48g",
      sugars: "22g",
      fibre: "17g",
      protein: "12g",
      salt: "0.6g",
    },
  },
  {
    id: 6,
    image: "/images/food/tofu.jpeg",
    name: "Tofu",
    creator: "future user",
    description: "20min recipe",
    type: "saved",
  },
  {
    id: 7,
    image: "/images/food/peanut-butter-curry.jpeg",
    image_full: "/images/food/peanut-butter-curry.jpeg",
    name: " Chicken curry ",
    creator: "@Ruxy",
    description: "gluten-free meal",
    type: "tried",
    ingredients: [
      "1 large chicken, jointed, or 1.5kg bone-in chicken pieces",
      "6 garlic cloves, 2 finely chopped, 4 left whole",
      "3 lemongrass stalks, bashed and roughly chopped",
      "thumb-sized piece of ginger, peeled and finely chopped",
      "tbsp ground cumin ",
      "1 tbsp ground coriander",
      "1 tbsp ground turmeric ",
      "2 limes, juiced",
      "2 red chilies, 1 roughly chopped and 1 sliced to serve (optional)",
      "1 small onion, roughly chopped",
      "2 tbsp vegetable oil",
      "100g smooth peanut butter",
      "4 tbsp kecap manis, or 3 tbsp soy sauce mixed with 1 tbsp light brown soft sugar",
      "400g can coconut milk ",
    ],
    steps: [
      "STEP 1 Put the chicken, chopped garlic, a third of the lemongrass and half the ginger, spices and lime juice in a large bowl. Toss, then cover and leave for 30 mins, or chill for up to 24 hrs. Blitz the whole garlic, the rest of the lemongrass and ginger, remaining spices, chopped chilli, onion and a large splash of water to in a food processor. Set aside.",
      "STEP 2 Heat the oil in a pan and brown the chicken all over. Set aside on a plate. Cook the paste for 8-10 mins until it splits. Stir in the peanut butter and kecap manis. When thickened, add the coconut milk and half a can of water, bring to a simmer, season, then add the chicken with its juices. Continue to simmer for 40 mins, stirring often. Turn off the heat, add the rest of the lime juice and season. Leave to rest for 10 mins. Scatter over the sliced chilli, spring onions, fresh coriander and peanuts to serve.",
    ],
    nutrition: {
      id: 7,
      kcal: 570,
      fat: "37g",
      carbs: "9g",
      sugars: "4g",
      fibre: "2g",
      protein: "34g",
      salt: "0.35g",
    },
  },
  {
    id: 8,
    image: "/images/food/ny-cheesecake.jpeg",
    image_full: "/images/food/ny-cheesecake.jpeg",
    name: "Vegan Chili",
    creator: "@Ruxy",
    description: "viva mexico",
    type: "tried",
    ingredients: [
      "85g butter, plus extra for tin",
      "140g digestive biscuits, made into fine crumbs (add 2 extra biscuits if you like a thicker base)",
      "1 tbsp sugar, granulated or golden caster",

      "900g Philadelphia cheese, or other full-fat soft cheese",
      "250g golden caster sugar",
      "3 tbsp plain flour",
      "1 ½ tsp vanilla extract",
      "finely grated zest of 1 lemon (about 2 tsp)",
      "1 ½ tsp lemon juice",
      "3 large eggs, plus 1 yolk",
      "284ml carton soured cream",
      "142ml carton soured cream",
      "1 tbsp golden caster sugar",
      "2 tsp lemon juice",
    ],
    steps: [
      "STEP 1 Position an oven shelf in the middle of the oven. Heat the oven to 180C/ 160C fan/ gas 4.",
      "STEP 2 Line the base of a 23cm springform cake tin by putting a square piece of parchment paper or foil on top of the tin base and then clipping the side on so the paper or foil is trapped and any excess sticks out of the bottom.",
      "STEP 3For the crust, melt 85g butter in a medium pan. Stir in 140g digestive biscuit crumbs and 1 tbsp golden caster or granulated sugar so the mixture is evenly moistened.",
      "STEP 4 Press the mixture into the bottom of the pan and bake for 10 minutes. Cool on a wire rack while preparing the filling. ",
      "STEP 5 For the filling, increase the oven temperature to fan 220C/ 200C fan/ gas 7. In a table top mixer fitted with the paddle attachment, beat 900g full-fat soft cheese at medium-low speed until creamy, about 2 minutes.",
      "STEP 6 With the mixer on low, gradually add 250g golden caster sugar, then 3 tbsp plain flour and a pinch of salt, scraping down the sides of the bowl and the paddle twice.",
      "STEP 7 Swap the paddle attachment for the whisk. Continue by adding 1½ tsp vanilla extract, 2 tsp lemon zest and 1½ tsp lemon juice. Whisk in 3 large eggs and 1 yolk, one at a time, scraping the bowl and whisk at least twice.",
      "STEP 8 Stir a 284ml carton of soured cream until smooth, then measure 200ml (just over ¾ of the carton). Continue on low speed as you add the measured soured cream (reserve the rest). Whisk to blend, but don't over-beat. The batter should be smooth, light and somewhat airy.",
      "STEP 9 Brush the sides of the springform tin with melted butter and put on a baking sheet. Pour in the filling - if there are any lumps, sink them using a knife - the top should be as smooth as possible. Bake for 10 minutes.",
      "STEP 10 Reduce oven temperature to 110C/ 90C fan/ gas ¼ and bake for 45 minutes more. If you gently shake the tin, the filling should have a slight wobble.",
      "STEP 11 Turn off the oven and open the oven door for a cheesecake that's creamy in the centre, or leave it closed if you prefer a drier texture. Let cool in the oven for 2 hours. The cheesecake may get a slight crack on top as it cools.",
      "STEP 12 Combine the reserved soured cream with a 142ml carton soured cream, 1 tbsp golden caster sugar and 2 tsp lemon juice for the topping. Spread over the cheesecake right to the edges. Cover loosely with foil and refrigerate for at least 8 hours or overnight.",
      "STEP 13 Run a round-bladed knife around the sides of the tin to loosen any stuck edges. Unlock the side, slide the cheesecake off the bottom of the tin onto a plate, then slide the parchment paper out from underneath.",
    ],
    nutrition: {
      id: 8,
      kcal: 549,
      fat: "41g",
      carbs: "37g",
      sugars: "25g",
      fibre: "1g",
      protein: "11g",
      salt: "1.04g",
    },
  },
  {
    id: 9,
    image: "/images/food/vegetarian-lasagna-croped.jpeg",
    image_full: "/images/food/vegetarian-lasagna.jpeg",
    name: "Vegetarian lasagna",
    creator: "@Ruxy",
    description: "viva mexico",
    type: "tried",
    ingredients: [
      "9 dried lasagne sheets",
      "1 tbsp sunflower oil",
      "1 onion, finely chopped",
      "700g courgette (about 6), coarsely grated",
      "2 garlic cloves, crushed",
      "250g tub ricotta",
      "50g cheddar",
      "350g jar tomato sauce for pasta",
    ],
    steps: [
      "STEP 1 Heat oven to 220C/fan 200C/gas 7. Put a pan of water on to boil, then cook the lasagne sheets for about 5 mins until softened, but not cooked through. Rinse in cold water, then drizzle with a little oil to stop them sticking together.",
      "STEP 2 Meanwhile, heat the oil in a large frying pan, then fry the onion. After 3 mins, add the courgettes and garlic and continue to fry until the courgette has softened and turned bright green. Stir in 2/3 of both the ricotta and the cheddar, then season to taste. Heat the tomato sauce in the microwave for 2 mins on High until hot.",
      "STEP 3 In a large baking dish, layer up the lasagne, starting with half the courgette mix, then pasta, then tomato sauce. Repeat, top with blobs of the remaining ricotta, then scatter with the rest of the cheddar. Bake on the top shelf for about 10 mins until the pasta is tender and the cheese is golden.",
    ],
    nutrition: {
      id: 9,
      kcal: 405,
      fat: "21g",
      carbs: "38g",
      sugars: "13g",
      fibre: "4g",
      protein: "18g",
      salt: "1.36g",
    },
  },
  {
    id: 10,
    image: "/images/food/burrito-croped.jpeg",
    image_full: "/images/food/burrito.jpeg",
    name: "Burrito",
    creator: "@Ruxy",
    description: "viva mexico",
    type: "tried",
    ingredients: [
      "2 tbsp sunflower oil",
      "1 onion, finely chopped",
      "4 garlic cloves, very finely chopped",
      "1 tbsp ground cumin",
      "1 tbsp ground coriander",
      "small pinch of cayenne pepper (more if you want it spicier)",
      "1 tsp dried oregano",
      "500g beef mince",
      "pinch of golden caster sugar",
      "1 tbsp wine vinegar or cider vinegar",
      "400g can chopped tomatoes",
      "400g can black beans or kidney beans, with the can water",
      "8 flour or corn tortillas",
      "500g cooked rice, or our Mexican tomato rice (see recipe below right)",
      "a selection of sliced avocado or guacamole, chopped tomatoes, soured cream, shredded lettuce, sliced red onion, grated cheddar, sliced red chilli and lime halves, to serve",
    ],
    steps: [
      "STEP 1 Heat the oil in a large pan – a casserole is ideal. Fry the onions for 8 mins, then add the garlic, spices and oregano and cook for 1 min. Crumble over the mince and sizzle for 5 mins, stirring, until browned. Stir in the sugar and leave for a minute, then splash in the vinegar and pour in the tomatoes.",
      "STEP 2 Simmer for 5 mins then tip in the beans and the water from the can. Season, stir and simmer everything for 20 mins until the beef is in a thick gravy. The sauce can be prepared up to 2 days ahead, chilled and reheated with a splash of water or frozen for 6 months.",
      "STEP 3 To make the burritos, heat the tortillas following pack instructions. Pile some rice and beef sauce along each tortilla and scatter over your choice of topping. Fold over the ends and roll up to seal. Secure by wrapping with foil if you want. Eat immediately.",
    ],
    nutrition: {
      id: 10,
      kcal: 872,
      fat: "32g",
      carbs: "98g",
      sugars: "11g",
      fibre: "10g",
      protein: "42g",
      salt: "1.11g",
    },
  },
];
