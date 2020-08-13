## Project Description

App that helps users find/eat local produce. Simple to use, no overload of information. Want to make daily procurement/cooking easier.

## User Stories

As a user, I should be able to locate farmer's markets near me.  
As a user, I should be able to find recipes for the produce I bought/plan to buy.
As a user, I should be able to create an account.
As a user, I should be able to delete an account.
As a user, I should be able to save my favorite recipes.

## Ideas

Map with farm locations/times.  
Opt in alerts about farmers markets.  
Recipe ingredient scanner for local produce.  
Enter zipcode upon entry, gives next/closest farmers market.  
Input produce that you bought/plan to buy, outputs possible recipes.
Calendar w/ all farmers markets on there
Sign in to save your fav recipes

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
  Recipe_gen  
  Recipe_gen_results  
  Indiv_recipe  
  Faves  
  Account_settings

## MVP/Post MVP

MVP:

HOMEPAGE
add Layout component x  
add Nav component x  
add Footer comp x  
add login button  
generate Map x  
create markets/times/address model with seeded data  x
restrict to only GET routes  x
have markets locations display on map thru API call  x
allow user to find closest by entering zipcode  x
when market location on map clicked, display info from market/time/address models  x
style

DEPLOY  
backend  
frontend

NAV  
create hamburger menu  
style

USER ACCOUNT  
create user model  
create get, post, and delete routes  
create Login page w/ API call  
link Login page to homepage  
create account_settings page that displays username, email, and ability to delete
style

RECIPE GENERATOR  
Create produce model and seed data  
Create get route  
display all produce on page  
add filters and serch by name  
add handleonclick to produce div that stores name in useState
add get recipe button that links to results page  
style

RECIPE GENERATOR RESULTS
use produce stored in usestate to call Edamam recipe API using produce as queries  
display recipe API results on page  
create favorite model  
add favorite star to recipe div  
add handeonlclick to star so that recipe is added to faves model  
add back button that takes you back to recipe generator w/ previously selected items  
style

INDIVIDUAL RECIPE  
display recipe name, image, ingredients, and linke to recipe based on variable passed to it  
style

FAVE RECIPES  
display all recipes based on user who is logged in
use edamam_uri in fav model top make edama API to get recipe data  
style

LINKING/ROUTING  
create routes in App.js  
link nav elements to components

POST MVP:
Calendar  
Extra styling/effects

## Schedule

| Day           | Deliverable                                                 | Status     |
| ------------- | ----------------------------------------------------------- | ---------- |
| Day 1 (Tues)  | Finish planning & Layout, Nav, Footer from Homepage section | Complete   |
| Day 2 (Wed)   | Homepage partial                                            | Complete   |
| Day 3 (Thurs) | Rest of homepage, Deploy backend                            | Incomplete |
| Day 4 (Fri)   | User Account, Recipe Generator                              | Incomplete |
| Day 5 (Sat)   | TBD                                                         | Incomplete |
| Day 5 (Sun)   | Recipe Generator Results                                    | Incomplete |
| Day 5 (Mon)   | Individual/Fave Recipe & Linking/Routing                    | Incomplete |
| Day 5 (Tues)  | Final Touches                                               | Incomplete |

## Time Frames

MVP:  
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| ------------- | :------: | :------------: | :------------: | :---------: |
| add Layout | H | .5hrs | .5hrs | hrs |
| add Nav | H | .5hrs | .5hrs | hrs |
| add Footer | H | .5hrs | .5hrs | hrs |
| add login button | H | .5rs | -hrs | hrs |
| generate map | H | 4rs | 4hrs | hrs |
| create markets/times/address scaffold with seeded data | H | .5rs | .5hrs | hrs |
| restrict to only GET route | H | .5rs | 5:00 - hrs | hrs |
| have markets locations display on map thru API call | H | .5rs | 3hrs | hrs |
| allow user to find closest by entering zipcode | H | 3rs | 3hrs | hrs |
| when market location on map clicked, display info from market/time/address models | H | 3rs | 0hrs | hrs |
| style homepage | H | 2hrs | hrs | hrs |
| Total | H | hrs | -hrs | hrs |

POSTMVP:  
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| ------------- | :------: | :------------: | :------------: | :---------: |
| Calendar | L | 8hrs | -hrs | -hrs |
| Styling/effcts| L | 10hrs | -hrs | hrs |
| Total | L | 18hrs | -hrs | hrs |

## Additional Libraries

React-Map-GL
Mapbox GL JS

## Hurdles
