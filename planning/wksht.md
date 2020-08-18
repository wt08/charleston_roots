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
add login button x  
generate Map x  
create markets/times model with seeded data x  
restrict to only GET routes x  
have markets locations display on map thru API call x  
allow user to find closest by entering zipcode x  
when market location on map clicked, display info from market/time/address models x  
style

DEPLOY  
backend X
frontend

NAV  
create hamburger menu x  
style

USER ACCOUNT  
create user model x  
create get(pluse custom get by username), post, and delete routes x
create Login page w/ API call x  
link Login page to homepage x
create account_settings page that displays username, email, and ability to delete x  
style

RECIPE GENERATOR  
Create produce model and seed data x  
Make get route only  
display all produce on page x
add filters and serch by name  
add handleonclick to produce div that stores name in useState x
add get recipe button that links to results page x  
style

RECIPE GENERATOR RESULTS
use produce stored in usestate to call Edamam recipe API using produce as queries x  
display recipe API results on page x  
create favorite model x  
add favorite star to recipe div x  
add handeonlclick to star so that recipe is added to faves model x  
add back button that takes you back to recipe generator w/ previously selected items  
style

INDIVIDUAL RECIPE  
display recipe name, image, ingredients, and linke to recipe based on variable passed to it x  
style

FAVE RECIPES  
display all recipes based on user who is logged in x  
use edamam_uri in fav model top make edama API to get recipe data x  
style

LINKING/ROUTING  
create routes in App.js x  
link nav elements to components x

POST MVP:
Calendar  
Extra styling/effects

## Schedule

| Day           | Deliverable                                                 | Status     |
| ------------- | ----------------------------------------------------------- | ---------- |
| Day 1 (Tues)  | Finish planning & Layout, Nav, Footer from Homepage section | Complete   |
| Day 2 (Wed)   | Homepage partial                                            | Complete   |
| Day 3 (Thurs) | Rest of homepage                                            | Complete   |
| Day 4 (Fri)   | Partial user account                                        | Complete   |
| Day 5 (Sat)   | Rest of user account, backend deploy                        | Complete   |
| Day 5 (Sun)   | Recipe Generator/Recipe Generator Results/Individual        | Complete   |
| Day 5 (Mon)   | Fave Recipe                                                 | Complete   |
| Day 5 (Tues)  | Deploy frontend, Style, Final Touches                       | Incomplete |

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
| restrict to only GET route | H | .5rs | -hrs | hrs |
| have markets locations display on map thru API call | H | .5rs | 3hrs | hrs |
| allow user to find closest by entering zipcode | H | 3rs | 3hrs | hrs |
| when market location on map clicked, display info from market/time/address models | H | 3rs | 0hrs | hrs |
| style homepage | H | 2hrs | hrs | hrs |
| create user model | H | 1hrs | .5hrs | hrs |
| create get, post, and delete routes | H | 1hrs | .5hrs | hrs |
| create Login page w/ API call | H | 3hrs | 2.5hrs | hrs |
| manipulate loginbutton upon login | H | 1hrs | 2.5hrs | hrs |
| create account settings page | H | 2hrs | 1hrs | hrs |
| deploy backend | H | 1hrs | 1hrs | hrs |
| create produce model/seed data | H | 1hrs | 1hrs | hrs |
| display all produce on Recipe Generator comp | H | 1hrs | .5hrs | hrs |
| recipe generator handleonclick | H | 1hrs | 1.5hrs | hrs |
| link get recipe button | H | 1hrs | .5hrs | hrs |
| call Edama food API on results recipe generator comp | H | 1hrs | .5hrs | hrs |
| call Edama food API on results recipe generator comp | H | 1hrs | 1hrs | hrs |
| individual recipe comp | H | 1hrs | .5hrs | hrs |
| create favorite model | H | 1hrs | 3hrs | hrs |
| add handeonlclick to star| H | 2hrs | 3hrs | hrs |
| fav recipe comp | H | 3hrs | 3hrs | hrs |
| styling | H | 3hrs | 1hrs 10:45 -  | hrs |
| deploy front | H | 2hrs | hrs | hrs |
| troubleshoot handleonclick star | H | 2hrs | hrs | hrs |
| fix select/unselect produce buttons | H | 1hrs | hrs | hrs |
| restrict routes | H | .5hrs | hrs | hrs |
| add filters to recipe gen | H | 1.5hrs | hrs | hrs |
| Total | H | hrs | -hrs | hrs |

POSTMVP:  
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| ------------- | :------: | :------------: | :------------: | :---------: |
| Calendar | L | 8hrs | -hrs | -hrs |
| Styling/effcts| L | 10hrs | -hrs | hrs |
| Total | L | 18hrs | -hrs | hrs |

## Bugs/Improvements

Make produce routes Get only
Fix select/unselect buttons and produce chosen list
Fix that even when new user is unique, isTaken alert still pops up!  
keep user logged in, even during page refresh

## Additional Libraries

React-Map-GL
Mapbox GL JS
Deck GL

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

Redirect: had issues with getting redirect to work. Initially had it in onSubmit function, ended up putting it in body and making it conditional on a state boolean.
