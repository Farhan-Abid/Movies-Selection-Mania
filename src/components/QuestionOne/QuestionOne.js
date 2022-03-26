import React from 'react';
import './Question-one.css'

const QuestionOne = () => {
    return (
        <div className='questionAns'>
            <h4>How React JS works?</h4>
            <p className='text-start'>React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. React applies a virtual DOM that is mainly a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual demonstration of this. Then the virtual DOM will try to find the best way to update the browser’s DOM. Unlike browser DOM elements, React elements are simple objects and are easy to make. React DOM takes care of manipulation of the DOM to create the React elements. The reason for this is that JS is very fast and it’s worth keeping a DOM tree in it to geer up its manipulation. Although React was used to be used in the browser, because of its design it can also be prepared to used in the server with Node.js. </p>
            <h4>Difference between props and State</h4>
            <p className='text-start'>Two important data manipulation methods are the state and props in React JS.
            The state is a set of variables that determine the current condition of the component. The state of a component is internal, i.e., defined inside the component and changeable only within the component. Any change in state renders the component again. Props is short for properties. It is the set of attributes that are passed from a parent component to a child component. These can be data variables or functions. Props are primarily used to communicate between parent and child components. Moreover, props cannot be altered inside the child component. That's the basic difference between these two
            </p>
        </div>
    );
};

export default QuestionOne;