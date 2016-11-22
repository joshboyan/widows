'use strict';

(function widows() {
    var tags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['article', 'aside', 'blockquote', 'p', 'li', 'figcaption'];

    //console.log(tags);
    //Array to hold all the text from inside the targeted tags
    var pageText = [];
    //Array of HTML5 elements that accept text
    var ACCEPTABLE_ELEMENTS = ['article', 'aside', 'bio', 'blockquote', 'body', 'code', 'datalist', 'dd', 'details', 'del', 'dialog', 'div', 'em', 'figcaption', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'label', 'legend', 'li', 'link', 'menu', 'menuitem', 'strong', 'table', 'td', 'thead', 'var', 'p', 'param', 'q', 'samp', 'section', 'source', 'span', 'strike'];
    //Loop throght each of the HTML elements passed to the function as taguments
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var tag = _step.value;

            //Test that taguments are valid HTML tags that generally contain text log error message message if not
            if (ACCEPTABLE_ELEMENTS.indexOf(tag) > -1) {
                //Clear array for each html elements text
                pageText = [];
                //Variable containing all the targeted tags
                var elements = document.body.getElementsByTagName(tag);
                //console.log(tag);
                //Loop through each of the element
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var elem = _step2.value;

                        // Check the element has no children && that it is not empty
                        if (elem.children.length === 0 && elem.textContent.replace(/ |\n/g, '') !== '') {
                            //Push the text from each tag to the storing array
                            pageText.push(elem.textContent);
                        }
                    }
                    //console.log(pageText);
                    //Loop through the text from each element
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                var count = 1;
                //This i variable needs to know where to start based on what tag we are at. 0 for the first element, 0 + firstElement.length for the second etc.
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = pageText[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var _elem = _step3.value;


                        //Split each element into a subarray of words
                        _elem = _elem.split(' ');
                        //console.log(elem);
                        //Create an array with a nonbreakng space
                        var widow = ['&nbsp;'];
                        //console.log(widow);
                        //Push last word from tag to after &nbsp;
                        widow.push(_elem.pop());
                        //console.log(widow);
                        //Create and array with a space
                        var preWidow = [' '];
                        //Push second to last word from tag to after the space
                        preWidow.push(_elem.pop());
                        //console.log(preWidow);
                        //Create string from arrays containing space/second to last word and &nbsp;/last word
                        widow = preWidow.concat(widow).join('');
                        //console.log(widow);
                        //create string from the rest of the words in the tag
                        _elem = _elem.join(' ').concat(widow);
                        //console.log(elem);    
                        //console.log(tag);
                        //insert edited string back into DOM 
                        //console.log(tag + ':nth-of-type(' + count + ')');
                        document.querySelector(tag + ':nth-of-type(' + count + ')').innerHTML = _elem;
                        count++;
                        //console.log(count);
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
            } else {
                alert('gulp-widows: *** ' + tag + ' is not a valid HTML tag. All other tags have had widows removed. Check your gulpfile.js to correct the tag name. ***');
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
})();