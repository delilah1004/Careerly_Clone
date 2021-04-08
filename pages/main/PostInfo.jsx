import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Footer, Input, Text, View } from 'native-base';

import Loading from '../Loading';

import HeaderBack from '../../components/header/HeaderBack';
import CommentComponent from '../../components/CommentComponent';

import { readPost } from '../../config/PostAPI';
import { createComment } from '../../config/commentAPI';
import MainCard from '../../components/main/PostCard';

export default function PostInfo({ navigation, route }) {
  const postId = route.params.postId;
  const userId = route.params.userId;

  const [ready, setReady] = useState(false);
  const [post, setPost] = useState('');
  const [currentComment, setCurrentComment] = useState('');

  useEffect(() => {
    setTimeout(() => {
      download();
    });
  }, []);

  const download = async () => {
    const postInfo = await readPost(postId);

    setPost(postInfo);
    setReady(true);
  };

  const commentUpload = async () => {
    if (comment == '') {
      Alert.alert('내용을 입력해주세요');
      return false;
    }

    let result = await createComment(post.id, content);
    if (result) {
      await Alert.alert('댓글 작성 완료!');
      setCurrentComment('');
    } else {
      Alert.alert('댓글 작성 실패');
    }
  };

  return ready ? (
    <Container style={styles.container}>
      <HeaderBack
        title={post.user.name + ' 님의 게시물'}
        navigation={navigation}
      />
      <ScrollView>
        <MainCard
          navigation={navigation}
          post={post}
          userId={userId}
          loc={'detail'}
        />

        {/* 댓글 목록 */}
        <View style={{ paddingBottom: 10 }}>
          {post.comment.map((comment, i) => {
            return (
              <CommentComponent
                navigation={navigation}
                comment={comment}
                key={i}
              />
            );
          })}
        </View>
      </ScrollView>

      {/* 댓글 작성란 */}
      <Footer style={styles.commentBox}>
        <Input
          style={styles.input}
          placeholder="게시물에 대해 이야기를 나눠보세요"
          placeholderTextColor="#999"
          value={currentComment}
          onChangeText={(text) => {
            setCurrentComment(text);
          }}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => commentUpload()}
        >
          <Text style={styles.addButtonText}>등록</Text>
        </TouchableOpacity>
      </Footer>
    </Container>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },

  commentBox: {
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DBDBDB',
    alignItems: 'center',
  },
  input: {
    paddingLeft: 20,
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#ed6653',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
    margin: 10,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 14,
    color: 'white',
  },
});
