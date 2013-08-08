/**
 * Java Script Code for IE (Internet Explorer)
 * 
 */

    /* Add HTML 5 Elements in IE */
    var elements = [ 'article', 'section', 'footer', 'header', 'hgroup', 'nav'];
    
    for (var i = 0; i < elements.length; i++) {
        document.createElement(elements[i]);
    }
