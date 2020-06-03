import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    console.log(this.props.onFindPetsClick("5c142d9e-ea45-4231-8146-cccf71c704c0"))
    return <div className="ui cards">
      {/* <Pet /> */}
      </div>
  }
}

export default PetBrowser
