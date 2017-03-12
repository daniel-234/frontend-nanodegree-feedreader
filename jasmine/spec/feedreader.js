/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        // Define a function to test that the URL is defined for the i-th feed and that it is not empty,
        // i.e. it has a value that is not falsy.
        function testFeedUrl(i) {
            it('ensure item at position ' + i + ' has a URL and the URL is not empty', function() {
                expect(allFeeds[i].url).toBeTruthy();
            });
        }
        // Loop over the feeds array to test each feed.
        for (var i = 0; i < allFeeds.length; i++) {
            testFeedUrl(i);
        }

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        // Define a function to test that the name is defined for the j-th feed and that it is not empty,
        // i.e. it has a value that is not falsy.
        function testFeedName(j) {
            it('ensure item at position ' + j + ' has a name and the name is not empty', function() {
                expect(allFeeds[j].name).toBeTruthy();
            });
        }
        // Loop over the feeds array to test each feed.
        for (var j = 0; j < allFeeds.length; j++) {
            testFeedName(j);
        }
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        // Use Element.classList to get the class attributes of the element and
        // use the toContain() matcher.
        // Hint taken from the Udacity Discussion Forums:
        // https://discussions.udacity.com/t/menu-visibility-test/187928/6
        var menuElem = document.body.classList;
        it('ensures the menu element is hidden by default', function() {
            expect(menuElem).toContain('menu-hidden');
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        // Use the jQuery trigger method to trigger the click event and its default behavior for the selected element,
        // in this case the menu icon. Expect the body element to not contain the 'menu-hidden' class the first time
        // it is selected and to have it again the second time.
        // Note that the 'menu-hidden' class hides the menu.
        // Suggestion on how to write this test taken from the Udacity Discussion Forums:
        // https://discussions.udacity.com/t/testing-css-transitions/181853/2
        it('should display the menu when the menu icon is clicked and hide it when clicked again', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.trigger('click');
            expect(menuElem).not.toContain('menu-hidden');
            menuIcon.trigger('click');
            expect(menuElem).toContain('menu-hidden');
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        // Take a single argument 'done' that should be called when the async work is complete.
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        // This spec will not start until the 'done' function is called in the call to 'beforeEach' above.
        it('there should be at least a single intial .entry element within the .feed container', function() {
            // Select the '.entry' elements that are inside the '.feed' container element.
            var entries = $('.feed .entry-link .entry');
            // Check that the actual matches the expected value, making sure that
            // there is at least one entry element in the DOM.
            // As the spec requires, the loadFeed function completes its work if
            // there is at least a single .entry element within the .feed container.
            expect(entries.length).toBeGreaterThan(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        // Store the div element with class='feed'.
        var feedDiv = $('.feed');
        // Define the text content of the first article from the first call to loadFeed.
        var firstFeedContent;
        // Define the text content of the first article from the second call to loadFeed.
        var secondFeedContent;
        // This spec will not complete until its 'done' is called (see the Jasmine documentation about
        // asynchronous support).
        it('the content of a new feed that is loaded by the loadFeed function should change', function(done) {
            // Call loadFeed the first time, passing as argument the second item of the allFeeds array.
            loadFeed(1, function() {
                // Store the text content of the first article of the second item.
                secondFeedContent = feedDiv.children().children()[0].textContent;
                // Call loadFeed as inner function, passing as argument the first item of the allFeeds array.
                loadFeed(0, function() {
                    // Store the text content of the first article of the first item.
                    firstFeedContent = feedDiv.children().children()[0].textContent;
                    // Check that the actual matches the expected value.
                    // Here the actual is given by the text content of the first article of the first feed.
                    // As the spec requires, if a new feed is loaded by the loadFeed function,
                    // the content should actually change.
                    expect(firstFeedContent).not.toBe(secondFeedContent);
                    done();
                });
            });
        });
     });
}());
