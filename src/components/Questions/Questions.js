import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='question-container'>
            <div>
                <h3>Q1.How React Works?</h3>
                <ol>
                    <li>React is component-based JavaScript's library.</li>
                    <li>React's component used multiple times to avoid code duplication</li>
                    <li>React look like Html structure but actually those Html look like syntax are called JavaScript XML/JSX.</li>
                    <li>Those Html structure are compiled by Babel transpiler.</li>
                    <li>Babel.js work using React.CreateElement method.</li>
                    <li>React.createElement render JavaScript code using Babel.js</li>
                    <li>React.createElement's parameters are element name,properties,child element.</li>
                </ol>
            </div>

            <div>
                <h3>Q2.props vs state?</h3>
                <ol>
                    <li>Props are sent by using attributes</li>
                    <li>Props sent and received as an object.</li>
                    <li>useState is a function that return an array.</li>
                    <li>The array contain a variable to use in website</li>
                    <li>The array contain a function to change the state variable and the website</li>
                    <li>Props can't be change where state can update using setState function.</li>
                    <li>Props can sent useState's function and value to one componenet to another component.</li>
                </ol>
            </div>

            <div>
                <h3>Q3.how useState works?</h3>
                <ol>
                    <li>UseState is a function which return array of a function and a state variable.</li>
                    <li>The state variable used to show the value in website and The function update variable.</li>
                    <li>UseState will not do anything until the value of state changes.</li>
                    <li>If the value of state is changed then useState change the value of the variable and update the website.</li>
                    <li>Usestate store Props and other value and update website if value change.</li>
                </ol>
            </div>
        </div>
    );
};

export default Questions;