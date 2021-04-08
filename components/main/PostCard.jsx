import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Share } from 'react-native';
import { Text, View } from 'native-base';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import RNUrlPreview from 'react-native-url-preview';

import { sharePost, addRecommend, unRecommend } from '../../config/PostAPI';
import MainCardHeader from './MainCardHeader';
import DetailCardHeader from './DetailCardHeader';

export default function PostCard({ navigation, post, userId, loc }) {
  // console.log(post);
  const [recommendCnt, setRecommendCnt] = useState(post.recommendedCnt);
  const [recommended, setRecommended] = useState(false);
  const [shared, setShared] = useState(post.sharedCnt);

  useEffect(() => {
    getRecommendedInfo();
  }, []);

  const getRecommendedInfo = async () => {
    await post.recommended.map((recommender, i) => {
      if (recommender._id == userId) {
        setRecommended(true);
      }
    });
  };

  const share = async () => {
    const result = await Share.share({
      message: `${post.content}\n${post.url}`,
    });
    if (result.action === Share.sharedAction) {
      const success = await sharePost(post._id);
      if (success) setShared(shared + 1);
    }
  };

  const recommend = async () => {
    // 추천 정보 업데이트
    if (recommended) {
      await unRecommend(post._id);
      setRecommendCnt(recommendedCnt - 1);
    } else {
      await addRecommend(post._id);
      setRecommendCnt(recommendedCnt + 1);
    }
    setRecommended(!recommended);
  };

  const read = () => {
    navigation.push('PostInfo', { postId: post._id, userId: userId });
  };

  const showHeader = () => {
    if (loc == 'main') {
      return <MainCardHeader post={post} />;
    } else if (loc == 'detail') {
      return <DetailCardHeader post={post} />;
    }
  };

  const showButton = () => {
    let iconName = 'lightbulb-on-outline';

    if (recommended) {
      iconName = 'lightbulb-on';
    }

    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          recommend();
        }}
      >
        <MaterialCommunityIcons name={iconName} size={20} color="#A2D9D3" />
        <Text style={styles.buttonText}>추천해요</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.post}>
      {showHeader()}

      {/* 글 */}
      <Text style={styles.content} numberOfLines={6} ellipsizeMode={'tail'}>
        {post.content}
      </Text>

      {/* 링크 연결 */}
      <RNUrlPreview text={post.url} />

      {/* 추천 현황 */}
      <TouchableOpacity onPress={() => navigation.navigate('RecommenderList')}>
        <View style={styles.recommend}>
          <Text style={styles.number}>{recommendCnt}명</Text>
          <Text style={{ fontSize: 13 }}>이 추천했어요</Text>
        </View>
      </TouchableOpacity>

      {/* 각종 버튼 */}
      <View style={styles.buttonContainer}>
        {/* 추천해요 */}
        {showButton()}

        <View style={{ flexDirection: 'row' }}>
          {/* 공유하기 */}
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              share();
            }}
          >
            <MaterialIcons name="share" size={20} color="#A2D9D3" />
            <Text style={styles.buttonText}>공유하기</Text>
            <Text style={styles.number}>{shared}</Text>
          </TouchableOpacity>

          <Text
            style={{
              color: '#C7C7C7',
              fontSize: 13,
              marginHorizontal: 10,
            }}
          >
            |
          </Text>

          {/* 댓글 */}
          <TouchableOpacity style={styles.button} onPress={read}>
            <MaterialCommunityIcons
              name="comment-processing-outline"
              size={20}
              color="#A2D9D3"
            />
            <Text style={styles.buttonText}>댓글</Text>
            <Text style={styles.number}>{post.commentCnt}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: '#FFF',
    padding: 20,
    marginVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
  },

  content: {
    marginVertical: 10,
    fontSize: 14,
    lineHeight: 27,
  },

  itemUrl: {},

  recommend: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 13,
    marginLeft: 5,
  },
  number: {
    fontSize: 13,
    fontWeight: '700',
    marginLeft: 4,
  },
});
