import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Text,
  Container,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  List,
  ListItem,
  Button,
} from 'native-base';
import VersionNumber from 'react-native-version-number';

export class SetteingScreen extends Component {
  render() {
    return (
      <Container>
        {/* <Header>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right/>
        </Header> */}
        <Content padder>
          <List>
            <ListItem
              key="Scanner"
              onPress={() => this.props.navigation.navigate('qrCodeScanner')}>
              <Text>Scanner</Text>
              <View>
                <Icon name="ios-arrow-forward" />
              </View>
            </ListItem>
            <ListItem
              key="uploadPhoto"
              onPress={() => this.props.navigation.navigate('uploadPhoto')}>
              <Text>uploadPhoto</Text>
              <View>
                <Icon name="ios-arrow-forward" />
              </View>
            </ListItem>
          </List>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'red',
            }}>
            App Version {VersionNumber.appVersion}
          </Text>
        </Content>
      </Container>
    );
  }
}

export default SetteingScreen;
