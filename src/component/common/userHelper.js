import React, {Component} from 'react';
import {View, Keyboard, Dimensions} from 'react-native';
import {
  Input,
  Text,
  Button,
  Form,
  Item,
  Container,
  Content,
  Label,
  Picker,
  Icon,
} from 'native-base';
import {renderEmptyStringIfUndefined} from '../common/Utils';
import Styles from './Styles';
let DeviceWidth = Dimensions.get('window').width;

export class InputElement extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const {eachRow, state, updateState} = this.props;
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{...Styles.flex1, marginRight: 10}}>
          <Label style={{...Styles.formLabel}}>{eachRow.displayName}</Label>
          <View>
            <Input
              style={{...Styles.input}}
              value={renderEmptyStringIfUndefined(state[eachRow.stateName])}
              keyboardType={eachRow.keyboardType}
              onChangeText={(text) => updateState({[eachRow.stateName]: text})}
            />
          </View>
        </View>
      </View>
    );
  }
}
export class InputDropDownElement extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      sensorType: 'Select Sensor Type',
    };
  }
  render() {
    const {eachRow, state, updateState, dataList} = this.props;
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{...Styles.flex1, marginRight: 10}}>
          <Label style={{...Styles.formLabel}}>{eachRow.displayName}</Label>
          <View style={{...Styles.input}}>
            <Picker
              note
              mode="dropdown"
              placeholder={'Select'}
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={state[eachRow.stateName]}
              onValueChange={(item) =>
                updateState({[eachRow.stateName]: item})
              }>
              {dataList.map((eachItem) => {
                return (
                  <Picker.Item
                    key={eachItem.key}
                    label={eachItem.label}
                    value={eachItem.value}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
      </View>
    );
  }
}
export class CustomButton extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const {eachRow, onCancel, onClick} = this.props;
    return (
      <View
        key={eachRow.displayName}
        style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{...Styles.flex1}}>
          <Button
            onPress={() => onCancel()}
            {...eachRow.leftButton.buttonStyles}>
            <Text>{eachRow.leftButton.displayName}</Text>
          </Button>
        </View>
        <View style={{...Styles.flex1}}>
          <Button
            onPress={() => onClick(eachRow.rightButton.displayName)}
            {...eachRow.rightButton.buttonStyles}>
            <Text>{eachRow.rightButton.displayName}</Text>
          </Button>
        </View>
      </View>
    );
  }
}
