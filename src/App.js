import React, { Component } from 'react';
import Projects from './Projects';
import { projectData } from './projectData';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      programs: []
    }
  }

  componentDidMount(){
    console.log('componentDidMount', projectData)
    this.setState({ programs: [...projectData] })
  }

  render() {
    console.log('InsideRender', this.state.programs)
    return (
      <main className="App">
        <h1>Codes By Angie</h1>
        <h2>passion to experience</h2>
        <h3>About Me</h3>
          <p>Creative Latinx Software Engineer with strong customer empathy and honed interpersonal skills due to extensive experience leading and delivering in high demand service industries like bartending and massage therapy. Passionate about technology for social justice, rigorous test driven development and beautiful client side styling. Outside work, usually enjoying delicious food in good company, sipping a well paired wine, or recharging with yoga and meditation.</p>
        <h3>Projects</h3>
        <Projects

          projects={this.state.programs}
        />
      </main>
    )
  }
}

export default App;
