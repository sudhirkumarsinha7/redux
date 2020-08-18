// @flow
import React, {Component} from 'react';
import {View, Keyboard, TouchableOpacity} from 'react-native';
import {
  Input,
  Text,
  Button,
  Form,
  Item,
  Container,
  Content,
  Label,
  Icon,
} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginRequest} from '../../actions/Authenticate';
import {DrawerActions} from '@react-navigation/native';

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componetDidmount() {}
  submit = () => {
    Keyboard.dismiss();

    var {email, password} = this.state;
    this.props.loginRequest(email, password);
    alert(JSON.stringify(this.state));
  };
  render() {
    return (
      <Container>
        <Content padder>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }>
            <Icon name="menu" style={{fontSize: 40, color: 'orange'}} />
          </TouchableOpacity>
          <Text>Hello World</Text>
        </Content>
      </Container>
    );
  }
}
function mapStateToProps(state: ReduxStore): StateToProps {
  return {
    state: state,
  };
}

function mapDispatchToProps(dispatch): DispatchToProps {
  return {
    loginRequest: bindActionCreators(loginRequest, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
