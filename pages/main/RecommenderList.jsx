import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

// import Loading from './Loading';

import HeaderBack from '../../components/header/HeaderBack';
import RecommenderCard from '../../components/RecommenderCard';

import { getRecommenderList } from '../../config/PostAPI';

export default function RecommenderList({ navigation, route }) {
  const postId = route.params;

  // const [ready, setReady] = useState(false);
  const [recommenderList, setRecommenderList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      download();
    });
  }, []);

  const download = async () => {
    const result = await getRecommenderList(postId);

    setRecommenderList(result);
  };

  return (
    <Container>
      <HeaderBack navigation={navigation} title={'추천'} />
      <Content style={{ marginTop: 30 }}>
        {recommenderList.map((recommender, i) => {
          return (
            <RecommenderCard
              navigation={navigation}
              recommender={recommender}
              key={i}
            />
          );
        })}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({});
