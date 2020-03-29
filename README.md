# Basic webcomponents exercise

## Web components??

### Custom Elements
Custom Elements api used to create custom html tags
### Shadow DOM
Sub DOM tree to encapsulate styling
### ES Modules
Inclusion and reuse of JS documents
### HTML Templates
A common template for every instance of component

## Component Lifecycle

### constructor()
Runs whenever an element is created, but before the element is attached to the document.
### connectedCallback()
Invoked each time the custom element is appended into a document-connected element.
### disconnectedCallback()
Invoked each time the custom element is disconnected from the document's DOM.
### attributeChangedCallback(name, oldValue, newValue)
Invoked each time one of the custom element's attributes is added, removed, or changed.
### adoptedCallback()
Invoked each time the custom element is moved to a new document.

## Development

1. Install [polyserve](https://npmjs.com/polyserve):

    ```sh
    $ npm install -g polyserve
    ```

2. Start development server and open `http://localhost:8081/`.

    ```sh
    $ polyserve
    ```