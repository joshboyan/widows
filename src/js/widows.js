(function widows() {
        console.log(arguments);
        //Array to hold all the text from inside the targeted tags
        let pageText = [];
        //Loop throght each of the HTML elements passed to the function as arguments
        for (let arg of arguments) {
            //Test that arguments are valid HTML tags that generally contain text log error message message if not
            if (arg == "a" ||
                arg == "article" ||
                arg == "aside" ||
                arg == "bio" ||
                arg == "blockquote" ||
                arg == "body" ||
                arg == "code" ||
                arg == "datalist" ||
                arg == "dd" ||
                arg == "details" ||
                arg == "del" ||
                arg == "dialog" ||
                arg == "div" ||
                arg == "em" ||
                arg == "figcaption" ||
                arg == "form" ||
                arg == "h1" ||
                arg == "h2" ||
                arg == "h3" ||
                arg == "h4" ||
                arg == "h5" ||
                arg == "h6" ||
                arg == "header" ||
                arg == "label" ||
                arg == "legend" ||
                arg == "li" ||
                arg == "link" ||
                arg == "menu" ||
                arg == "menuitem" ||
                arg == "strong" ||
                arg == "table" ||
                arg == "td" ||
                arg == "thead" ||
                arg == "var" ||
                arg == "p" ||
                arg == "param" ||
                arg == "q" ||
                arg == "samp" ||
                arg == "section" ||
                arg == "source" ||
                arg == "span" ||
                arg == "strike") {
                //Clear array for each html elements text
                pageText = [];
                //Variable containing all the targeted tags
                let elements = document.body.getElementsByTagName(arg);
                console.log(arg);
                //Loop through each of the element
                for (let elem of elements) {            
                    // Check the element has no children && that it is not empty
                    if (elem.children.length === 0 && elem.textContent.replace(/ |\n/g, '') !== '') {
                        //Push the text from each tag to the storing array
                        pageText.push(elem.textContent);
                    }
                }
                //console.log(pageText);
                //Loop through the text from each element
                let count = 1;
                //This i variable needs to know where to start based on what tag we are at. 0 for the first element, 0 + firstElement.length for the second etc.
                for (let elem of pageText) {
    
                    //Split each element into a subarray of words
                    elem = elem.split(' ');
                    //console.log(elem);
                    //Create an array with a nonbreakng space
                    let widow = ['&nbsp;'];
                    //console.log(widow);
                    //Push last word from tag to after &nbsp;
                    widow.push(elem.pop());
                    //console.log(widow);
                    //Create and array with a space
                    let preWidow = [' '];
                    //Push second to last word from tag to after the space
                    preWidow.push(elem.pop());
                    //console.log(preWidow);
                    //Create string from arrays containing space/second to last word and &nbsp;/last word
                    widow = preWidow.concat(widow).join('');
                    //console.log(widow);
                    //create string from the rest of the words in the tag
                    elem = elem.join(' ').concat(widow);
                    //console.log(elem);    
                    //console.log(arg);
                    //insert edited string back into DOM 
                    //console.log(arg + ':nth-of-type(' + count + ')');
                    document.querySelector(arg + ':nth-of-type(' + count + ')').innerHTML = elem;
                    count++;
                    //console.log(count);
                }
            } else {
                alert(`gulp-widows: *** ${arg} is not a valid HTML tag. All other tags have had widows removed. Check your gulpfile.js to correct the tag name. ***`);
            }
        }
    })(...['p', 'li', 'blockquote', 'duh']);
   