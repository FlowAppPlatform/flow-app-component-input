import React from 'react';

import AppComponent from 'flow-app-component';

import './css/theme/default.css';

class InputComponent extends AppComponent {
  static properties = {
    iconUrl: '/assets/images/input-component.png',
    name: 'Input',
    type: 'ui-component',
    componentType: 'input',
    category: 'Views',
    parent: null,
    showOnComponentsPanel: true,
    isValuable: true,
    allowsChildren: false
  };

  constructor() {
    super();
    const newState = {
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'Basic settings for the input',
          properties: [],
        },
        {
          categoryName: 'Events',
          categoryDescription: 'Events for the input',
          properties: [
            {
              id: 'event',
              name: 'Events',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
      ],

      ...InputComponent.properties
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    return (
      <div style={{ width: '100%' }}>
        <div className="input-container">
          <label className="input-label" htmlFor="input-component">
            Input Component
          </label>
          <div dir="ltr">
            <div className="input-inner-container">
              <div className="input-card">
                <input
                  type="text"
                  autoComplete="text"
                  className="input-component"
                  id="input-component"
                  name="input"
                  placeholder="Input Placeholder"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputComponent;
