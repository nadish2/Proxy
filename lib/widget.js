import { ReactWidget, InputDialog } from '@jupyterlab/apputils';
//import React, { useState } from 'react';
import React from 'react';
/**
 * React component for a counter.
 *
 * @returns The React component
 */
const CounterComponent = () => {
    //const [counter, setCounter] = useState(0);
    return (React.createElement("div", null,
        React.createElement("p", null, "Access a workspace internal port "),
        React.createElement("button", { onClick: () => {
                //setCounter(counter + 1);
                // Request a number
                InputDialog.getNumber({ title: 'Select a port:' }).then(value => {
                    window.open('http://localhost:' + value.value);
                });
            } }, "Access")));
};
/**
 * A Counter Lumino Widget that wraps a CounterComponent.
 */
export class CounterWidget extends ReactWidget {
    /**
     * Constructs a new CounterWidget.
     */
    constructor() {
        super();
        this.addClass('jp-ReactWidget');
    }
    render() {
        return React.createElement(CounterComponent, null);
    }
}
