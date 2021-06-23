// GETTING THE CURSOR ELEMENT FROM OUR DOCUMENT
let cursor = document.querySelector(".cursor")

// GETTING THE INNER CURSOR ELEMENT FROM OUR DOCUMENT
let innerCursor = document.querySelector(".inner-cursor")


// LISTENNING FOR MOUSE MOVE EVENT
document.addEventListener("mousemove", event => {

    // SET THE POSITION OF BUT THE CURSOR AND THE INNNER CURSOR

    // REMEMBER BOTH THE CURSOR AND THE INNTER CURSOR ARE POSITIONED FIXED, SO THAT THE ARE DRAWN 
    // ON TOP OF OTHER CONTENT THAT WERE DEFINED BEFORE THEM IN THE DOCUMENT 
    cursor.style.cssText = `left: ${event.clientX}px; top:${event.clientY}px`
    innerCursor.style.cssText = `left: ${event.clientX}px; top:${event.clientY}px`
})