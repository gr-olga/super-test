# Success Factory Frontend code challenge

This code challenge aims to analyze the candidate's coding skills by implementing a simple application.

### Tech Requirements.

In order to implement this application, the following technologies are mandatory to be used:

* [React](https://reactjs.org)
* [Nextjs](https://nextjs.org)
* [Typescript](https://www.typescriptlang.org)

Not mandatory, but it's a bonus the usage:
* [styled-components](https://styled-components.com)
* [prettier](https://prettier.io)
* [eslint](https://eslint.org)

## The challenge

Create a React application that connects to [spotify REST API](https://developer.spotify.com/documentation/web-api/) and shows artist' albums. For this task, follow the layout from this [Figma project](https://www.figma.com/file/fifRkWzXmlvwOzRLPUAX8N/Albums-by-Artists?node-id=0%3A1&t=JVwvAQLSH8mqbCPl-0) that includes both desktop and mobile representations.

#### Basic functionalities

* `Auth page`: The user shouldn't access other pages of the application if he isn't authenticated. [See documentation](https://developer.spotify.com/documentation/general/guides/authorization/use-access-token/) in order to learn how to authenticate the user. 

    NOTE: You must set up a [spotify app](https://developer.spotify.com/documentation/general/guides/authorization/app-settings/) to get a `client Secret` token to perform calls against their API.

* `Home page`: This is the second and main page of the application. Consider the following functionalities:

    * `Search by artists`. There is no loading in the design, but it's nice to consider that as well in order to improve the user experience;

    * `Initial state message` to suggest the user start searching for an artist;

    * `No results message` to show in case the search terms do not match with any result information;

    * `Artist's albums list`;

    * `Logout`.

## What we expect

The following points will be considered when we check your code assessment:

* Project structure;
* Usage of typescript;
* Component composition, clean code, and code standards;
* Styling and responsive design;
* Connection with REST API;
* Unit tests;

## How to share the assessment

Create a branch based on `develop` like:

```
FIRST_NAME-LAST_NAME-spotify-code-challange

# example: 
renato-ferreira-spotify-code-challange
```

Push the changes to it and notify us when you have finished it.

## Good luck and we'll see you in the next step!
