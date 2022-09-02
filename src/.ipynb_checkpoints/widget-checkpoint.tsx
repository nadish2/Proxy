import { ReactWidget, InputDialog} from '@jupyterlab/apputils';
//import React, { useState } from 'react';
import React from 'react';

/**
 * React component for a counter.
 *
 * @returns The React component
 */
const CounterComponent = (): JSX.Element => {
  //const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Access a workspace internal port </p>
      <button
        onClick={(): void => {
          //setCounter(counter + 1);
            
        // Request a number
          InputDialog.getNumber({ title: 'Select a port:' }).then(value => {
              window.open('http://localhost:'+ value.value);

          })


        }}
      >
        Access
      </button>
          
    </div>
  );
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

  render(): JSX.Element {
    return <CounterComponent />;
  }
}