import React, { Component } from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';
import  * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class MediaContainer extends Component {
  openModal = (id) => {
    this.props.actions.openModal(id)
  }
  render(){
    return (
      <Link
        to={{
          pathname: `/canciones/${this.props.data.get('id')}`,
          state: { modal: true },
        }}
      >
        <Media openModal={this.openModal} {...this.props.data.toJS()} />
      </Link>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.get('data').get('entities').get('media').get(props.id)
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer)
