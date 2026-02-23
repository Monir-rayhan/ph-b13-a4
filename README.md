1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:getElementById selects a single element by id attribute.and id values is unique.
getElementsByClassName selects all elements that have a given class name.
querySelector selects the first element that matches a CSS selector such as .class, #id, tag. It returns the element directly or null if none match.
querySelectorAll selects all elements matching a CSS selector and returns a NodeList
   
2. How do you create and insert a new element into the DOM?
Ans:We can create a new element with document.createElement() and then insert it using methods like appendChild(), append(), insertBefore(), or insertAdjacentElement().
   
3. What is Event Bubbling? And how does it work?
Ans: Event bubbling is a mechanism in the DOM where an event triggered on a nested element "bubbles up" through its ancestors, triggering any matching event handlers along the way.
How it works: When an event (like a click) occurs on an element, the browser first runs handlers on that element itself. Then it moves to its parent, then its grandparent, and so on, until it reaches the document root (the bubbling phase). This allows parent elements to
respond to events that happen on their children.
   
4. What is Event Delegation in JavaScript? Why is it useful?
Ans:Event delegation is a technique where you attach a single event listener to a parent element to handle events for all its current and future child elements, taking advantage of event bubbling.It is usefull for performance for Fewer event listeners, especially for large lists or tables.Content will be dynamic .
   
5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:Both are methods on the event object, but they serve different purposes: preventDefault() → cancels the default action. stopPropagation() → stops the event from reaching parent elements.
