import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Col, Grid } from 'react-native-easy-grid';
import { Text, Thumbnail } from 'native-base';

const im = require('../assets/icon.png');

export default function FollowingCard({ navigation, following }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('MemberInfo');
      }}
    >
      <Grid>
        <Col
          size={4}
          style={{
            height: 50,
            marginBottom: 30,
            flexDirection: 'row',
          }}
        >
          <Thumbnail
            small
            source={im}
            style={{ marginTop: 10, marginLeft: 10 }}
          />
          <Text
            style={{
              marginLeft: 15,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            {following.name}
          </Text>
          <Text
            style={{
              position: 'absolute',
              marginLeft: 60,
              paddingTop: 30,
              fontSize: 15,
              color: 'gray',
            }}
          >
            {following.role}
          </Text>
        </Col>
      </Grid>
    </TouchableOpacity>
  );
}
