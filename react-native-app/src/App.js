import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//함수형 변수로 시작한다.(아래)
const App = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>첫 번째 리액트 앱</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
});
//외부 파일에서 App 변수를 호출/실행 할 수 있게 한다.(아래)
export default App;