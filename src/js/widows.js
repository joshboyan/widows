(function widows(tags = ['article', 'aside', 'blockquote', 'p', 'li', 'figcaption']) {
    //console.log(tags);
    //Array to hold all the text from inside the targeted tags
    let pageText = [];
    //Array of HTML5 elements that accept text
    const ACCEPTABLE_ELEMENTS = ['article', 'aside', 'bio', 'blockquote', 'body', 'code', 'datalist', 'dd', 'details', 'del', 'dialog', 'div', 'em', 'figcaption', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'label', 'legend', 'li', 'link', 'menu', 'menuitem', 'strong', 'table', 'td', 'thead', 'var', 'p', 'param', 'q', 'samp', 'section', 'source', 'span', 'strike'];
    //Loop throght each of the HTML elements passed to the function as taguments
    for (let tag of tags) {
        //Test that taguments are valid HTML tags that generally contain text log error message message if not
        if (ACCEPTABLE_ELEMENTS.indexOf(tag) > -1) {
            //Clear array for each html elements text
            pageText = [];
            //Variable containing all the targeted tags
            let elements = document.body.getElementsByTagName(tag);
            //console.log(tag);
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
                //console.log(tag);
                //insert edited string back into DOM 
                //console.log(tag + ':nth-of-type(' + count + ')');
                document.querySelector(tag + ':nth-of-type(' + count + ')').innerHTML = elem;
                count++;
                //console.log(count);
            }
        } else {
            alert(`gulp-widows: *** ${tag} is not a valid HTML tag. All other tags have had widows removed. Check your gulpfile.js to correct the tag name. ***`);
        }
    }
})();
