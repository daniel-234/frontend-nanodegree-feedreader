# Feed Reader Testing

This is the final project of the Front End Nanodegree and we have to provide a test suite that would run against the provided application.
The required tests for this project must be written using the Jasmine framework and should test the RSS feed, RSS feed properties, menu default state and menu hiding/showing.
All tests should be independent of one another and they should all pass.

## Getting Started

To load the app, download a copy of the project to your local machine and open the file index.html with your browser.
If all tests pass, you should see Jasmine's output showing the number of specs that ran with 0 failures, on a green background. Any failure, underlined by a red background, reports that there were tests that did not pass.

## Built With

* [Jasmine](https://jasmine.github.io/) - Framework for testing JavaScript code
* [jQuery](http://jquery.com/) - A JavaScript library for simpler HTML manipulation and event handling

## Author

* **Daniele Erbì** - [daniel-234](https://github.com/daniel-234)

## Notes

The code will run several tests on app.js and the results will be displayed.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* I relied on this answer in Stackoverflow to have a hint on how to treat the first looping test:
* [Stackoverflow - Loop through it() in Jasmine describes 'spec not found'](http://stackoverflow.com/questions/32184607/loop-through-it-in-jasmine-describe-output-spec-not-found)
* I relied on an answer in the Discussion Forums to write a test that ensures the menu element is hidden by default (i.e. has a certain class):
* [Udacity Discussion Forums - Menu visibility test](https://discussions.udacity.com/t/menu-visibility-test/187928/6)
* This discussion on the Udacity Forums helped me write the test for the menu icon behavior on click events:
* [Udacity Discussion Forums - Testing CSS Transitions](https://discussions.udacity.com/t/testing-css-transitions/181853/2)
* This question on the Discussion Forums with the suggestion from a reviewer helped me to clarify what the rubric was asking for the last spec:
* [Udacity Discussion Forums - I am stuck with last spec, please help!](https://discussions.udacity.com/t/am-stuck-with-last-spec-please-help/225982)