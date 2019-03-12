import React from 'react';

import AppComponent from 'flow-app-component';

import './css/theme/default.css';

class InputComponent extends AppComponent {
  constructor() {
    super();
    const newState = {
      interactiveMode: false,
      readOnly: false,
      properties: [{
          categoryName: 'General',
          categoryDescription: 'Basic settings for the input',
          properties: [{
            id: 'name',
            name: 'Name',
            type: 'text',
            options: {},
            data: null,
          }, {
            id: 'value',
            name: 'Value',
            type: 'text',
            options: {},
            data: null,
          }],
        },
        {
          categoryName: 'Events',
          categoryDescription: 'Events for the input',
          properties: [{
            id: 'event',
            name: 'Events',
            type: 'graph',
            options: {},
            data: null,
          }, ],
        },
      ],
      iconUrl: '/assets/images/input-component.png',
      name: 'Input',
      type: 'ui-component',
      componentType: 'input',
      category: 'Views',
      parent: null,
      showOnComponentsPanel: true,
      isValuable: true,
      allowsChildren: false,
    };

    this.state = Object.assign(this.state, newState);
    // merge two states together, and dont lose any parent state properties
  }

  componentDidMount() {
    const interactiveMode = !(this.props.propertyData.interactiveMode === undefined);
    this.setState({
      interactiveMode,
      readOnly: interactiveMode
    });
  }

  handleDbClick = (e) => {
    e.preventDefault();
    if (this.state.interactiveMode) {
      this.setState(prevState => ({
        readOnly: !prevState.readOnly
      }))
    }
  }

  componentDidMount() {
    const interactiveMode = !(this.props.propertyData.interactiveMode === undefined);
    this.setState({
      interactiveMode,
      readOnly: interactiveMode
    });
  }

  handleDbClick = (e) => {
    e.preventDefault();
    if (this.state.interactiveMode) {
      this.setState(prevState => ({
        readOnly: !prevState.readOnly
      }))
    }
  }

  handleChange = e => {
    this.setPropertyData(this.props.id, 'value', e.target.value);
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
                  style={{cursor: 'pointer'}}
                  type="text"
                  autoComplete="text"
                  className="input-component"
                  id="input-component"
                  name="input"
                  placeholder="Input Placeholder"
                  readOnly={this.state.readOnly}
                  onDoubleClick={this.handleDbClick}
                  onChange={this.handleChange}
                  value={this.getPropertyData('value') || ''}
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