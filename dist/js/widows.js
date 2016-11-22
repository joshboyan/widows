"use strict";

function widows() {
    console.log(arguments);
    //Array to hold all the text from inside the targeted tags
    var pageText = [];
    //Loop throght each of the HTML elements passed to the function as arguments
    for (var j = 0; j < arguments.length; j++) {
        //Test that arguments are valid HTML tags that generally contain text log error message message if not
        if (arguments[j] == "a" || arguments[j] == "article" || arguments[j] == "aside" || arguments[j] == "bio" || arguments[j] == "blockquote" || arguments[j] == "body" || arguments[j] == "code" || arguments[j] == "datalist" || arguments[j] == "dd" || arguments[j] == "details" || arguments[j] == "del" || arguments[j] == "dialog" || arguments[j] == "div" || arguments[j] == "em" || arguments[j] == "figcaption" || arguments[j] == "form" || arguments[j] == "h1" || arguments[j] == "h2" || arguments[j] == "h3" || arguments[j] == "h4" || arguments[j] == "h5" || arguments[j] == "h6" || arguments[j] == "header" || arguments[j] == "label" || arguments[j] == "legend" || arguments[j] == "li" || arguments[j] == "link" || arguments[j] == "menu" || arguments[j] == "menuitem" || arguments[j] == "strong" || arguments[j] == "table" || arguments[j] == "td" || arguments[j] == "thead" || arguments[j] == "var" || arguments[j] == "p" || arguments[j] == "param" || arguments[j] == "q" || arguments[j] == "samp" || arguments[j] == "section" || arguments[j] == "source" || arguments[j] == "span" || arguments[j] == "strike") {
            //Clear array for each html elements text
            pageText = [];
            //Variable containing all the targeted tags
            var elements = document.body.getElementsByTagName(arguments[j]);
            console.log(arguments[j]);
            //Loop through each of the element
            for (var i = 0; i < elements.length; i++) {
                var current = elements[i];
                // Check the element has no children && that it is not empty
                if (current.children.length === 0 && current.textContent.replace(/ |\n/g, '') !== '') {
                    //Push the text from each tag to the storing array
                    pageText.push(current.textContent);
                }
            }
            //console.log(pageText);
            //Loop through the text from each element
            var count = 1;
            //This i variable needs to know where to start based on what tag we are at. 0 for the first element, 0 + firstElement.length for the second etc.
            for (var _i = 0; _i < pageText.length; _i++) {
                var tag = pageText[_i];
                //Split each element into a subarray of words
                tag = tag.split(' ');
                //console.log(tag);
                //Create an array with a nonbreakng space
                var widow = ['&nbsp;'];
                //console.log(widow);
                //Push last word from tag to after &nbsp;
                widow.push(tag.pop());
                //console.log(widow);
                //Create and array with a space
                var preWidow = [' '];
                //Push second to last word from tag to after the space
                preWidow.push(tag.pop());
                //console.log(preWidow);
                //Create string from arrays containing space/second to last word and &nbsp;/last word
                widow = preWidow.concat(widow).join('');
                //console.log(widow);
                //create string from the rest of the words in the tag
                tag = tag.join(' ');
                //console.log(tag);
                //Create string completed widowless string from substrings
                var merged = tag.concat(widow);
                //console.log(arguments[j]);
                //insert edited string back into DOM 
                console.log(arguments[j] + ':nth-of-type(' + count + ')');
                document.querySelector(arguments[j] + ':nth-of-type(' + count + ')').innerHTML = merged;
                count++;
                //console.log(count);
            }
        } else {
            console.log("gulp-widows: *** " + arguments[j] + " is not a valid HTML tag. All other tags have had widows removed. Check your gulpfile.js to correct the tag name. ***");
        }
    }
}
// Function call with html tags to change text in
widows.apply(undefined, ['p', 'li', 'blockquote', 'duh']);