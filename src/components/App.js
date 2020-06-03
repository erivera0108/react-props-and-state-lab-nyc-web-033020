import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) =>{
    this.setState({
      filters: {
        ...this.state.filters,
        type: e.target.value
      }
    })
  }

  // componentDidMount(){
  //   fetch('/api/pets')
  //   .then(res => res.json())
  //   .then(pets => {
  //     this.setState({pets})
  //   })
  // }


  onAdoptPet = (id) => {
    const pet = this.state.pets.find(id)
    console.log(pet)
  }

  onFindPetsClick = () => {
    const endPoint =  this.state.filters.type === 'all' ? '': `?type=${this.state.filters.type}`
    fetch(`/api/pets${endPoint}`)
    .then(res => res.json())
    .then(console.log)
  }


  render() {
    console.log(this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters pets={this.state.pets} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onFindPetsClick={this.onFindPetsClick}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
