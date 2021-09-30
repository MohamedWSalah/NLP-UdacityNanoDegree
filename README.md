# Evaluate news article using NLP

This project aims to evaluate an article by passing it through an NLP API powered by MeaningCloud.

### Installing

The project consists of a server, client, and tests.
First you should run `npm install`.

Mainly you would run server and client by using the following commands:

- `npm start` to run the server
- `npm run build-dev` to run webpack development server
  OR if you want to have a production build you can use `npm run build-prod`
  and it will create a `dist` folder in your project which u can run it's index.html

### Testing

Jest library was used for testing in this project.
Test can be initiated by using `npm test` command.

### Usage

Simply, put an article link in the text field and press submit.
Due to the heavy of the process, the API might take up to `6 secs` to respond.
The result will be displayed on the webpage below the form.

## NOTE

This project is an assignment by udacity for The advanced web track nanodegre.e.

### Author

Mohamed Salah
