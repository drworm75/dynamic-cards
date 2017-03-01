![Title Banner](https://raw.githubusercontent.com/drworm75/dynamic-cards/master/images/dynamic-cards.png)

### Description: 

*Create an HTML page that contains a text area and a button labeled Create.

*When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.

*When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

### Final Result:
> A blue card is created with the user's text in in white, with the newest card appering at the left of the div.  Each card has a anchor styled as a small square butoon with an x inside of it, in the upper right hand corner of the card.  When clicked, the card that the button appers on is removed.


![Page Screenshot]()

### Takehome Lesson:

> Checking for a specific element with event.target, then using the DOM handler to get a reference to another element.  In this case, I looked for the close anchor with event.target.className === 'close', and was able to remove the parent div with event.target.parentElement.remove();


### How to run (Node must be installed on your machine):
```
git clone https://github.com/morecallan/CSS-exercise-articles.git
cd CSS-exercise-articles
npm install http-server -g
http-server -p 8080
```

This will show in your browser at:
`http://localhost:8080`

### Contributors:
[Dwayne Pate](https://github.com/drworm75)