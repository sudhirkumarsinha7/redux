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
import {user, userRole, displayNames} from '../../common/defaultData';
import {DrawerActions} from '@react-navigation/native';
import {
  InputElement,
  InputDropDownElement,
  CustomButton,
} from '../common/userHelper';
export class Register extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onClick = this.onClick.bind(this);
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
  };
  updateState(updateElements) {
    this.setState(updateElements);
  }
  onClick() {
    var isNotValid = false;
    var invalidKey = '';
    var fetchBody = {};
    user.userFormValidation.requiredFields.map((key) => {
      if (this.state[key] || this.state[key] === 0) {
        if (isNaN(Number(this.state[key]))) {
          fetchBody[key] = this.state[key];
        } else {
          fetchBody[key] = Number(this.state[key]);
        }
      } else {
        isNotValid = true;
        invalidKey = key;
      }
    });
    if (isNotValid) {
      alert('Please enter valid ' + displayNames[invalidKey]);
    } else {
      alert(JSON.stringify(fetchBody));
    }
  }
  onCancel() {
    alert('cancel');
  }
  render() {
    var data = user.registerationForm;
    return (
      <Container>
        <Content padder>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }>
            <Icon name="arrow-back" />
          </TouchableOpacity>
          {Object.keys(data).map((stateName) => {
            var eachRow = data[stateName];
            switch (eachRow.type) {
              case 'String':
                return (
                  <View>
                    <InputElement
                      eachRow={eachRow}
                      state={this.state}
                      updateState={this.updateState}
                    />
                  </View>
                );
              case 'dropdown':
                var dataList = userRole;
                return (
                  <View>
                    <InputDropDownElement
                      eachRow={eachRow}
                      dataList={dataList}
                      state={this.state}
                      updateState={this.updateState}
                    />
                  </View>
                );
              case 'buttons':
                return (
                  <View>
                    <CustomButton
                      eachRow={eachRow}
                      onCancel={this.onCancel}
                      onClick={this.onClick}
                    />
                  </View>
                );
              default:
                return <View />;
            }
          })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
