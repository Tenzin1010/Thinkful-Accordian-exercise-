import React from 'react';
import './Accordion.css'



class Accordion extends React.Component {
    static defaultProps = { 
      accordion: [] 
    };
    state =  {
      currentIndex: 0
    };

    renderButtons() {
     return (
        this.props.accordion.map((accordion, index) => (
        <button className="buttons" key={index} onClick={ () => this.handleClickButtons(index)}>
          {accordion.title}
        </button>
      ))
     )}

    renderContent() {
      const currentTab = this.props.accordion[this.state.currentIndex];
      return (
      <div className="content">
        <p>
        "I'm the content of button:" {this.state.currentIndex} <br />
        {currentTab.content}
        </p>
      </div>
    )}

    handleClickButtons(index) {
      this.setState( {currentIndex: index} );
    }

    render() {
      return (
        <div>
          <ul>
            <li className="list-li">
              {this.renderButtons()}
              {this.props.accordion.length && this.renderContent()}
            </li>
          </ul>
        </div>
    )}
  }

  export default Accordion