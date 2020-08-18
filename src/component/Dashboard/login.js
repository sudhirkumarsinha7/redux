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

export class Login extends Component {
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
            <Icon name="arrow-back" />
          </TouchableOpacity>
          <Form>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={(text) => this.setState({email: text})}
                autoCorrect={false}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
                autoCorrect={false}
                secureTextEntry={true}
              />
            </Item>
          </Form>
          <View style={{padding: 10, width: '100%'}}>
            <Button
              onPress={() => {
                this.submit();
              }}
              info
              style={{width: '100%'}}>
              <Text style={{flex: 1, textAlign: 'center'}}>Submit</Text>
            </Button>
          </View>
          {/* <Text>{JSON.stringify(this.props)}</Text> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
