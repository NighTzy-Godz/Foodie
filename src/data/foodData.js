const foodData = [
  {
    id: 15,
    name: "Rainbow Fried Rice",
    desc: "To keep the rice texture firm in the finished dish, rinse the cold cooked rice and drain it well before adding it to the stir-fry. For variety, substitute chicken or shrimp for the pork.",
    image:
      "https://cdn-prd.healthymealplans.com/recipe/073f82bd03f0c82cda848bc6cfdc4c3f-Rainbow-Fried-Rice_16x9_1200_Healthy-Meal-Plans.jpg",
    category: { id: 3, name: "Rice" },
    price: 206,
    rating: 4.7,
    stock: 18,
    minutesToCook: 30,
  },

  {
    id: 3,
    name: "Cheeseburger",
    desc: "Cheeseburger is a natural evolution of the beloved hamburger, the only difference between the two being that the cheeseburger has a slice of cheese added on top of the meat patty. Although American cheese was the original choice, Swiss, Cheddar, and numerous blue cheeses were all used later to make this mouth-watering sandwich.",
    image:
      "https://www.yumofchina.com/wp-content/uploads/2017/09/The-Perfect-American-Cheeseburger-1200x1118.jpg",
    category: { id: 1, name: "Burger" },
    price: 173,
    rating: 4.9,
    stock: 15,
    minutesToCook: 26,
  },
  {
    id: 6,
    name: "Cheeze Pizza",
    desc: "It should be no shocker that a classic is the statistical favorite. Cheese pizza is one of the most popular choices. It will always be a simple, unadorned masterpiece on its own.",
    image: "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900",
    category: { id: 2, name: "Pizza" },
    price: 390,
    rating: 4.6,
    stock: 7,
    minutesToCook: 30,
  },
  {
    id: 13,
    name: "Yang Chao Fried Rice",
    desc: "This is a vegetarian version of the classic Chinese dish that traditionally includes shrimp and ham. The fried rice can stand alone as a one-dish meal.",
    image:
      "https://pilipinasrecipes.com/wp-content/uploads/2018/07/yang-chow-fried-rice.jpg",
    category: { id: 3, name: "Rice" },
    price: 134,
    rating: 4.7,
    stock: 14,
    minutesToCook: 29,
  },
  {
    id: 4,
    name: "Onion Burger",
    desc: "Oklahoma onion burger is prepared by smashing thin slices of onions into a beef patty. The meat and onions cook together until the onions become caramelized and crispy and the meat is fully cooked. The burger usually also contains a slice of American cheese, pickles, and mustard or mayonnaise (or both), all tucked inside soft and fluffy burger buns.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/05/07/0/FNK_OKLAHOMA_ONION_BURGERS_H_f_s4x3.jpg.rend.hgtvcom.616.462.suffix/1620410569399.jpeg",
    category: { id: 1, name: "Burger" },
    price: 169,
    rating: 4.2,
    stock: 12,
    minutesToCook: 20,
  },
  {
    id: 5,
    name: "Deep Fried Burgers",
    desc: "Deep-fried burger is an American burger variety originating from a place called Dyer’s in Memphis, Tennessee. It’s made with a combination of ground beef, beef tallow, hamburger buns, yellow mustard, sliced onions, dill pickles, and American cheese.",
    image:
      "https://truffle-assets.imgix.net/pxqrocxwsjcc_1hI6qfR8OoUUaGIcMMYsWG_deep-fried-cheeseburgers_landscapeThumbnail_en.png",
    category: { id: 1, name: "Burger" },
    price: 230,
    rating: 4.8,
    stock: 12,
    minutesToCook: 27,
  },
  {
    id: 9,
    name: "BBQ Chicken Pizza",
    desc: "If you love BBQ chicken and you love pizza, why not put them together? This has long been a cult favorite of sports fans and college kids. The chicken slathered over the top of a pie gives it a tangy, sweet flavor that can’t be beaten.",
    image:
      "https://www.rachelcooks.com/wp-content/uploads/2022/02/bbq-chicken-pizza-2022-1500r-12-square.jpg",
    category: { id: 2, name: "Pizza" },
    price: 510,
    rating: 4.5,
    stock: 8,
    minutesToCook: 34,
  },
  {
    id: 1,
    name: "Chilli burger With Pepper Relish",
    desc: "This scrumptious burger sits under a chilli lamb pattie, roasted bell pepper dip, onions, tomatoes and lettuce.",
    image:
      "https://pbs.twimg.com/media/CdHghOHWAAAxsJY?format=jpg&name=4096x4096",
    category: { id: 1, name: "Burger" },
    price: 189,
    rating: 4.6,
    stock: 8,
    minutesToCook: 23,
  },
  {
    id: 12,
    name: "Snow Pea-And-Pork Fried Rice",
    desc: "This easy stir-fry is filled with lean pork, fresh vegetables, and leftover rice and makes a great one-dish meal for busy weeknights.",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/19/1999/01/01/pork-rice-ck-223608-x.jpg",
    category: { id: 3, name: "Rice" },
    price: 145,
    rating: 4.3,
    stock: 13,
    minutesToCook: 33,
  },

  {
    id: 7,
    name: "Pepperoni Pizza",
    desc: "There’s a reason this is one of the most popular types of pizza. Who doesn’t love biting into a crispy, salty round of pepperoni?",
    image:
      "https://www.simplehomecookedrecipes.com/wp-content/uploads/2021/02/Pepperoni-Pizza.png",
    category: { id: 2, name: "Pizza" },
    price: 410,
    rating: 4.7,
    stock: 11,
    minutesToCook: 35,
  },
  {
    id: 14,
    name: "Pork and Edamame Fried Rice",
    desc: "Thai chili sauce, cilantro, and roasted peanuts add zip to this easy dish. For the best texture and flavor, use leftover rice, which has less moisture than fresh-cooked grains",
    image:
      "https://www.foodandwine.com/thmb/j7vAgApd-bE0t5ge31ksOiHQ6C4=/2000x1500/smart/filters:no_upscale()/201301-r-xl-edamame-fried-brown-rice-2000-6cba7ae22b074dbbb3e5cb2b1bc5579c.jpg",
    category: { id: 3, name: "Rice" },
    price: 176,
    rating: 4.5,
    stock: 4,
    minutesToCook: 27,
  },
  {
    id: 8,
    name: "Margherita Pizza",
    desc: "Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. There’s a reason it’s an Italian staple and one of the most popular types of pizza in the country.",
    image:
      "https://cdn.shopify.com/s/files/1/0205/9582/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1644590192&width=800",
    category: { id: 2, name: "Pizza" },
    price: 420,
    rating: 4.3,
    stock: 18,
    minutesToCook: 32,
  },

  {
    id: 10,
    name: "Hawaiian Pizza",
    desc: "Pineapple might not be the first thing that comes to mind when you think pizza. But add in some ham and it creates an unexpectedly solid sweet and salty combination for this type of pizza.",
    image:
      "https://www.drozshow.com/media-library/image.jpg?id=24952787&width=980&quality=85",
    category: { id: 2, name: "Pizza" },
    price: 524,
    rating: 4.8,
    stock: 21,
    minutesToCook: 33,
  },

  {
    id: 2,
    name: "Lentil and Mushroom Burger",
    desc: "For the healthy and calorie conscious folks we've got this tasty burger. A lentil, mushroom and sun dried tomato pattie packed between a whole wheat bun.",
    image:
      "https://publish.purewow.net/wp-content/uploads/sites/2/2019/01/vegan-lentil-mushroom-burgers-recipe.jpg?resize=636%2C460",
    category: { id: 1, name: "Burger" },
    price: 206,
    rating: 4.3,
    stock: 11,
    minutesToCook: 25,
  },
  {
    id: 11,
    name: "Tofu Fried Rice",
    desc: "Fried rice can actually be a healthy main course or side dish. Plus, the ability to incorporate leftovers of virtually any type—meat or vegetable—makes fried rice dishes a great go-to in a time crunch.",
    image:
      "https://www.vanillabeancuisine.com/wp-content/uploads/2020/05/Tofu-Fried-Rice-12-735x490.jpg",
    category: { id: 3, name: "Rice" },
    price: 120,
    rating: 4.4,
    stock: 9,
    minutesToCook: 26,
  },
];

export { foodData };
