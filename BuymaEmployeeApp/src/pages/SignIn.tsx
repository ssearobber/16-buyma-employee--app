import React, {useCallback, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);
  const onChangePassword = useCallback(text => {
    setPassword(text);
  }, []);

  const onSubmit = useCallback(() => {
    Alert.alert('알림', '에러 등등..');
  }, []);

  const canGoNext = email && password;

  return (
    <View>
      <View style={styles.inputWapper}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          placeholder="이메일을 입력해 주세요"
          onChange={onChangeEmail}
          style={styles.textInput}
        />
      </View>
      <View style={styles.inputWapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          placeholder="비밀번호를 입력해 주세요"
          onChange={onChangePassword}
          style={styles.textInput}
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          onPress={onSubmit}
          style={
            !canGoNext
              ? styles.logInButton
              : [styles.logInButton, styles.logInButtonAction]
          }
          disabled={!canGoNext}>
          <Text style={styles.logInButtonText}>로그인</Text>
        </Pressable>
        <Pressable>
          <Text>회원가입</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWapper: {padding: 20},
  label: {fontWeight: 'bold', fontSize: 16, marginBottom: 20},
  textInput: {padding: 5, borderBottomWidth: StyleSheet.hairlineWidth},
  logInButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  logInButtonAction: {
    backgroundColor: 'blue',
  },
  logInButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonZone: {
    alignItems: 'center',
  },
});

export default SignIn;
