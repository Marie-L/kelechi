/********************************************************************************************************************/
/*                                                    SEARCH FILTER                                                 */
/********************************************************************************************************************/

searchFilter = () => {

// use reference to search input field which is the form id and input element. Then store into search object
    const search = document.forms['search_form'].querySelector("input");

// call event listener method on search object, two params : keyup and callback function
// keyup events provide a code indicating which character/key is pressed, therefore a submit button is not necessary
    search.addEventListener('keyup', function (e) {
        //store users input and store into term object. It's value is e which is the event object, target element (input field)
        // it's value and call lowercase method so the string is converted
        const term = e.target.value.toLowerCase();
        // use reference to unordered list which is the id
        const list = document.querySelector('#gallery');
        //select element by li tag which creates a HTML collection
        const picture = list.getElementsByTagName("li");
        // convert HTML collection to array on picture, call forEach method and pass through callback function, picture is
        // the only parameter
        Array.from(picture).forEach(function (picture) {
            //store first child of li to title (span class name + text content), then check that the title is equal title of the picture
            const title = picture.firstElementChild.textContent;
            // check that title of the picture is not equal to. call method indexOf which returns values to indicate whether
            // the characters are present
            if (title.toLowerCase().indexOf(term) != -1) {
                picture.style.display = 'block';
            } else {
                //if not do not display
                picture.style.display = 'none';
            }
        })
    });
};


searchFilter();
