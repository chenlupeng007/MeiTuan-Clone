import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Menu from './Menu'
import { getMenu } from './actions'

class MenuContainer extends React.Component {

  componentDidMount() {
    if(!this.props.menu.length) {
      const { getMenu } = this.props
      getMenu()
    }
  }

  render() {
    const { menu } = this.props

    return <Menu menu={menu} />
  }
}

MenuContainer.loadData = (store) => {
  return store.dispatch(getMenu())
}

const mapStateToProps = state => ({
  menu: state.menu
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMenu
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);