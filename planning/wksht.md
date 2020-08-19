## User Stories

As a user, I should be able to locate farmer's markets near me.  
As a user, I should be able to find recipes for the produce I bought/plan to buy.
As a user, I should be able to create an account.
As a user, I should be able to delete an account.
As a user, I should be able to save my favorite recipes.

## Models

User  
Email: string  
Username: string

Markets  
Name: string  
Address: string  
Exits: integer
Coordinates: decimals (array)

Times (one to many relationship with markets)  
Day: string  
Hours: string  
markets_id

Faves (one to many relationship with user)  
edamam_uri: string  
user_id: string

Produce  
Name: string  
img: string

## Project Links

[Live Site Link](https://sourced-charleston.netlify.app/#/)
[Backend Repo](https://github.com/wt08/sourced_charleston_backend)

## API

- [Edamam](https://developer.edamam.com/)

## Wireframes

MOBILE:

- [Homepage](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1597159070/capstone/IMG_0408_yu8gfp.jpg)
- [Login](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1597159050/capstone/IMG_0409_g7l1a5.jpg)
- [Recipe_Generator1](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1597158841/capstone/IMG_0410_lochpv.jpg)
- [Recipe_Generator2](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1597159010/capstone/IMG_0411_jx0jzk.jpg)
- [Faves](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1597158866/capstone/IMG_0413_s1qhhp.jpg)
- [Individual_Recipe](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1597158947/capstone/IMG_0412_p1rded.jpg)

DESKTOP/TABLET:

- [Homepage](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1597158964/capstone/IMG_0414_kjvuom.jpg)
- [Login](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1597158983/capstone/IMG_0415_ujrcdy.jpg)
- [Recipe_Generator1](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1597158816/capstone/IMG_0416_gsbia4.jpg)
- [Recipe_Generator2](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1597159031/capstone/IMG_0417_c9f2vs.jpg)
- [Faves](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1597158895/capstone/IMG_0419_fvh88t.jpg)
- [Individual_Recipe](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1597158918/capstone/IMG_0418_acioeh.jpg)

## React Architecture

- [Architecture](https://res.cloudinary.com/dgbf3yxnd/image/upload/v1597158719/capstone/IMG_0420_qte7ug.jpg)  
  COMPONENTS:  
  Layout  
  Nav  
  Burger  
  Menu  
  Footer  
  HomePage
  Map  
  Login  
  RecipeGenerator
  ResultsRecipeGenerator
  IndividualRecipe
  FavRecipes
  AccountSettings

## MVP/Post MVP

MVP:

HOMEPAGE
add Layout component  
add Nav component  
add Footer comp  
add login button  
generate Map  
create markets/times model with seeded data  
restrict to only GET routes  
have markets locations display on map thru API call  
allow user to find closest by entering zipcode  
when market location on map clicked, display info from market/time/address models  
style

DEPLOY  
backend  
frontend

NAV  
create hamburger menu  
style

USER ACCOUNT  
create user model  
create get(pluse custom get by username), post, and delete routes  
create Login page w/ API call  
link Login page to homepage  
create account_settings page that displays username, email, and ability to delete  
style

RECIPE GENERATOR  
Create produce model and seed data  
Make get route only  
display all produce on page  
add handleonclick to produce div that stores name in useState  
add get recipe button that links to results page  
style

RECIPE GENERATOR RESULTS
use produce stored in usestate to call Edamam recipe API using produce as queries  
display recipe API results on page  
create favorite model  
add favorite star to recipe div  
add handeonlclick to star so that recipe is added to faves model  
style

INDIVIDUAL RECIPE  
display recipe name, image, ingredients, and linke to recipe based on variable passed to it  
style

FAVE RECIPES  
display all recipes based on user who is logged in  
use edamam_uri in fav model top make edamam API to get recipe data  
style

LINKING/ROUTING  
create routes on frontend in App.js  
link nav elements to components
on backend, restrict routes to only what's needed

POST MVP:
Calendar  
Extra styling/effects

## Schedule

| Day           | Deliverable                                                 | Status   |
| ------------- | ----------------------------------------------------------- | -------- |
| Day 1 (Tues)  | Finish planning & Layout, Nav, Footer from Homepage section | Complete |
| Day 2 (Wed)   | Homepage partial                                            | Complete |
| Day 3 (Thurs) | Rest of homepage                                            | Complete |
| Day 4 (Fri)   | Partial user account                                        | Complete |
| Day 5 (Sat)   | Rest of user account, backend deploy                        | Complete |
| Day 5 (Sun)   | Recipe Generator/Recipe Generator Results/Individual        | Complete |
| Day 5 (Mon)   | Fave Recipe                                                 | Complete |
| Day 5 (Tues)  | Deploy frontend, Style, Final Touches                       | Complete |

## Time Frames

MVP:  
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| ------------- | :------: | :------------: | :------------: | :---------: |
| add Layout | H | .5hrs | .5hrs | .5hrs |
| add Nav | H | .5hrs | .5hrs | .5hrs |
| add Footer | H | .5hrs | .5hrs | .5hrs |
| generate map | H | 4rs | 4hrs | 4hrs |
| create markets/times/address scaffold with seeded data | H | .5rs | .5hrs | .5hrs |
| have markets locations display on map thru API call | H | .5rs | 3hrs | 3hrs |
| allow user to find closest by entering zipcode | H | 3rs | 3hrs | 3hrs |
| create user model | H | 1hrs | .5hrs | .5hrs |
| create get, post, and delete routes | H | 1hrs | .5hrs | .5hrs |
| create Login page w/ API call | H | 3hrs | 2.5hrs | 2.5hrs |
| manipulate loginbutton upon login | H | 1hrs | 2.5hrs | 2.5hrs |
| create account settings page | H | 2hrs | 1hrs | 1hrs |
| deploy backend | H | 1hrs | 1hrs | 1hrs |
| create produce model/seed data | H | 1hrs | 1hrs | 1hrs |
| display all produce on Recipe Generator comp | H | 1hrs | .5hrs | .5hrs |
| recipe generator handleonclick | H | 1hrs | 1.5hrs | 1.5hrs |
| link get recipe button | H | 1hrs | .5hrs | .5hrs |
| call Edama food API on results recipe generator comp | H | 1hrs | .5hrs | .5hrs |
| call Edama food API on results recipe generator comp | H | 1hrs | 1hrs | 1hrs |
| individual recipe comp | H | 1hrs | .5hrs | .5hrs |
| create favorite model | H | 1hrs | 3hrs | 3hrs |
| add handeonlclick to star| H | 2hrs | 3hrs | 3hrs |
| fav recipe comp | H | 3hrs | 3hrs | 3hrs |
| styling | H | 3hrs | 2.5hrs | 2.5hrs |
| deploy front | H | 2hrs | .5hrs | .5hrs |
| troubleshoot handleonclick star | H | 2hrs | 1hrs | 1hrs |
| fix select/unselect produce buttons | H | 1hrs | 1.5hrs | 1.5hrs |
| final touches | H | 1hrs | 1.5hrs | 1.5hrs |
| Total | H | hrs | hrs | 41.5hrs |

POSTMVP:  
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| ------------- | :------: | :------------: | :------------: | :---------: |
| Calendar | L | 8hrs | -hrs | -hrs |
| Styling/effcts| L | 10hrs | -hrs | hrs |
| Total | L | 18hrs | -hrs | hrs |

## Additional Libraries

React-Map-GL
Mapbox GL JS
Deck GL
Bootstrap
Fontawesome

## Hurdles

Had to manipulate backend data to fit format needed to display pins on map. Mapped over data from API call and transformed array:

```
markets.map((market) => {
                return {
                  name: market.name,
                  address: market.address,
                  exits: market.exits,
                  coordinates: [market.long, market.lat],
                };
              })

```

Redirect: originally used react's Redirect component based on a manipulatd state. It was causing issues when going back to that page, so switched redirect method to history.push.

Edamam API needed special characters replaced when searching by recipe URI. Wrote a function usign regex to accomplish this:

```
  const reformatFavUris = (uris) => {
    let holder = [];
    for (let i = 0; i < uris.length; i++) {
      holder.push(`r=${uris[i].uri}&`);
    }
    return holder.join("");
  };
```

Learned a lot about the time it takes state to update when you're using it in a conditional or in the resolve of a promise. Made some functions more streamlined so as to not rely on state so much.
