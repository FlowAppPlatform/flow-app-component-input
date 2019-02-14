import React from 'react';

import AppComponent from 'flow-app-component';

import './css/theme/default.css';

class InputComponent extends AppComponent {
  constructor() {
    super();
    const newState = {
      interactiveMode: false,
      readOnly: false,
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
              id: 'hover',
              name: 'Hover Event',
              type: 'graph',
              options: {},
              data: null,
            },
            {
              id: 'keyup',
              name: 'Keyup Event',
              type: 'graph',
              options: {},
              data: null
            },
            {
              id: 'keydown',
              name: 'Keydown Event',
              type: 'graph',
              options: {},
              data: null
            },
            {
              id: 'load',
              name: 'Load Event',
              type: 'graph',
              options: {},
              data: null
            }
          ],
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

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }
  
  componentDidMount(){
    const interactiveMode = !(this.props.propertyData.interactiveMode === undefined);
    this.setState({interactiveMode, readOnly: interactiveMode});
    this.triggerGraphEvent('load');
  }

  handleDbClick = (e) => {
    e.preventDefault();
    if(this.state.interactiveMode){
        this.setState(prevState => ({readOnly: !prevState.readOnly}))
    }
  }

  triggerGraphEvent = (eventId) => {
    const graphId = this.getPropertyData(eventId);
    this.getElementProps().onEvent(graphId)
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
                  onMouseOver={() => this.triggerGraphEvent('hover')}
                  onKeyUp={() => this.triggerGraphEvent('keyup')}
                  onKeyDown={() => this.triggerGraphEvent('keydown')}
                  placeholder="Input Placeholder"
                  readOnly={this.state.readOnly}
                  onDoubleClick={this.handleDbClick}
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
