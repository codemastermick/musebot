# musebot
A Discord bot for suggesting random things, custom built for a pixel art server

If you have any feature requests, or would like to contribute to the word lists, you can either open an issue or submit a pull request, and I would be happy to look at adding it in.

## Getting Started
Running a Discord bot is not terribly hard, but it does require a little bit of setup on your part. This repository is pretty much ready to go, you just need to download it, install dependencies, and add your own token for the bot to use. Let's get you running!

1. Open a terminal window and run the following commands
1. `git clone https://github.com/codemastermick/musebot.git`
1. `cd musebot`
1. `npm i`
1. Now head to the official Discord developer page [here](https://discordapp.com/developers/applications/me)
1. Hit the New Application button and give your bot a name
1. Head over to the Bot tab and click "Add a Bot"
1. Give your bot a username and click the link that says "Click to Reveal Token"
1. Copy that token exactly as it is shown, and paste it into .env-SAMPLE and rename the file to `.env`
1. Now just run `npm start` in the terminal to start your bot


## Supported Commands
- !inspire
- !inspire#
- !animals

inspire is a simple command that will just return a single random word from words.txt

inspire# expects you to pass it a number instead of the #, for example `!inspire3` would return three random words

animals will return two random words from animals.txt, ensuring they are not the same