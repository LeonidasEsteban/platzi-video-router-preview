import React, { Component } from 'react';
import '../components/generic-page.css';

class NotFound extends Component {
  handleRandomClick = () => {
    // this.props.history.push('/videos');
    const random = Math.round(Math.random() * (10 - 1) + 1);
    // this.props.history.push({
    //   pathname: '/videos',
    //   search: `?id=${random}`,
    //   state: {
    //     id: random
    //   }
    // })
    this.props.history.push(`/videos?id=${random}`, { id: random })

  }
  handleForwardClick = () => {
    this.props.history.goForward();
  }
  handleBackClick = () => {
    this.props.history.goBack();
    // this.props.history.go(-1);
  }
  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>No hemos encontrado la página que buscabas</h2>
        <button
          className="Button"
          onClick={this.handleForwardClick}
        >
          Ir a la siguiente ruta 👉
        </button>
        <button
          className="Button"
          onClick={this.handleBackClick}
        >
          Ir a la ruta anterior 👈
        </button>
        <button
          onClick={this.handleRandomClick}
          className="Button"
        >
          Video random 🍀
        </button>
      </div>
    )
  }
}

export default NotFound
