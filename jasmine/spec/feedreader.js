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
                expect(allFeeds[i].url).toBeDefined();
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
                expect(allFeeds[j].name).toBeDefined();
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
        var feedDiv = $('.feed');
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('there should be at least a single intial .entry element within the .feed container', function(done) {
            console.log(feedDiv.children().children()[0].className);
            console.log(feedDiv.children().children().className);
            console.log(feedDiv.find('article').css('.entry'));
            console.log(feedDiv.find('article').className);
            // expect(feedDiv.html()).toContain('entry');
            // expect(feedDiv.find('.entry')).toContain('entry');
            // expect(feedDiv.find('.entry')).toBe(true);
            console.log(feedDiv.children());
            console.log(feedDiv.children().length);
            expect(feedDiv.children().children()[0].className).toContain('entry');
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var feedDiv = $('.feed');
        var firstFeedContent;
        var secondFeedContent;
        beforeEach(function(done) {
            loadFeed(1, function() {
                secondFeedContent = feedDiv.children().children()[0].textContent;
                loadFeed(0, function() {
                    firstFeedContent = feedDiv.children().children()[0].textContent;
                    done();
                });
            });
        });
        it('the content of a new feed that is loaded by the loadFeed function should change', function(done) {
            console.log(feedDiv.children().children()[0].textContent);
            console.log(firstFeedContent);
            console.log(secondFeedContent);
            expect(firstFeedContent).not.toBe(secondFeedContent);
            done();
        });
     });
}());
