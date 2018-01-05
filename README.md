# Hangŭl Jamo to Unicode Syllable Kata Boilerplate


## Requirements

* Node.js with a version >= 6

## Setting up

Once you have cloned this repo run

`npm install`

in the directory.

## Testing

Your tests live in the `./test` directory. Mocha is the testing library that I have used. I've written an example test file which you can find at `./tests/test`. Here is a link to the [documentation for the `expect` library Chai](http://chaijs.com/). Feel free to use any testing framework you want for your personal tests, but the final tests should be run with Mocha and Chai using the command:
`npm run test:final`

## So what am I trying to fix?!?!

Your aim is to resolve a Hangŭl syllable block from an array of Hangŭl Jamo (letters).
eg.

given the input `['ㅎ','ㅏ','ㄴ']`

your output should be `['한']`

In Unicode each Hangŭl letter has a value. These can be used to calculate the Unicode codepoint of the final syllable using this equation:

`[ { ( initial )  ×  588 } + { ( medial ) × 28 } + ( final ) ] + 44032`

I have provided an object of jamoValues in the `./src` directory.

If you are really stuck you can look at the [hints at the end of this document.]()

## Finished early?

There is a small extension in the `./extension` directory!

# Have fun and happy coding ! 😁

## Interesting links

## Hints
#### Warning! spoilers below:

* To get the final character from the unicode code point to a string you will probably need the [String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) method.
