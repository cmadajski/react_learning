import React from 'react';

export class TestForm extends React.Component {
    render() {
        return (
            <form action="#">
                <label for="latin-input">They (masculine): </label>
                <input id="latin-input" type="text" placeholder="Enter conjugation here"></input>
                <input type="submit" value="Check Answer"></input>
            </form>
        );
    }
};