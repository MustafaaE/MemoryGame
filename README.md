# Memory Game

This project is a part of my thesis.

## About

When you run the application you will be prompted by a settings page where you choose the `category`,`amount` and `difficulty`.

The `category` option changes what type of images are fetched, there is already a default value for the input but one is able to change it if it's desired. Making complicated or explicit searches will result in `no images` returned so be mindful that the API doesn't include the same amount of pictures as Google.

The `amount` option is for the amount of cards the game will have, fetching half the amount given in the input and duplicating them.

The `difficulty` option will change the amount of time the cards are flipped when 2 cards are flipped. The ranges go from 1.5s for the `easy` difficulty to 0.15s for the `hell` difficulty.

After picking your options and starting the game it's pretty straight forward, just match 'em until you've flipped all the cards.

# How to get the App working

The API used in this project is from the `pexels.com` site. Create an account and navigate to the `pexels.com/api/`and request an API key. When you have the key create an .env file and create the following constant:

**`REACT_APP_AUTH_KEY` and give it the value of your API key.**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
