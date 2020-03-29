class NewComponent extends HTMLElement {
    constructor() {
        // The constructor runs whenever an element is created, but before the element is attached to the document.
        // always call super() first
        super(); 
        this.innerHTML = "New component boiler";
        console.log('constructed!');
    }

    connectedCallback() {
        // The connectedCallback is called when the element is inserted to the DOM.
        // It's a good place to run setup code, like fetching data, or setting default attributes.
        console.log('connected!');
    }

    disconnectedCallback() {
        // The disconnectedCallback is called whenever the element is removed from the DOM.
        // We can use the disconnectedCallback to remove any event listeners, or cancel intervals.
        console.log('disconnected!');
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log(`Attribute: ${name} changed!`);
    }

    adoptedCallback() {
        // The adoptedCallback is called each time the custom element is moved to a new document. 
        // You'll only run into this use case when you have <iframe> elements in your page.
        console.log('adopted!');
    }
}

// Register the component
// Custom element names must always contain a hyphen '-'
// Custom elements also cannot be self-closing
window.customElements.define('new-component', NewComponent);