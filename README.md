### 녹스 애뮬레이터에서 리액트 네이티브 앱 배포 및 실행 기술참조 ( https://github.com/GrotesQ/Codelab-React-Native-2nd/blob/master/ReactNativeWithNoxPlayer.md )
- 녹스애뮬레이터는 이전 수업에 사용했던 7.0.1.8 버전을 사용한다. (다운로드 위치는 강의시 알려줌. 녹스란? https://gloria94.tistory.com/21 )
- 깃에서 다운받아 사용하시는 분들은 C:\MobileApp 폴더와 C:\MobileApp\react-native-app폴더에서 각각 npm install 하고 실행합니다.
- React Native Cli 대신 Expo Cli를 사용합니다.
------------------------------------------------------------------------------------------------------
### 리액트는 노드js기반이기 때문에 nvm(노드버전매니저) 설치 후 노드js설치(아래)
- nvm-setup.exe 를 다운로드 받아서 설치 : https://github.com/coreybutler/nvm-windows/releases
- Cmd를 관리자권한으로 열고, nvm install 18.12.0 을 입력한다.
- 사용할 버전 확인 : nvm use 18.12.0
- 설치된 버전 확인 : nvm list
------------------------------------------------------------------------------------------------------
### 리액트네이티브 실행환경 설치(아래)
- 리액트네이티브 실행폴더 생성 후 폴더로 이동 : cd C:\MobileApp
- 리액트네이티브 실행환경 설치 : npm install expo-cli
- Expo사이트와 개발자(ide)를 이어주는 환경설치 : npm install eas-cli //설치오류가 나면 뒤에 ` --force` 를 붙여줍니다.
------------------------------------------------------------------------------------------------------
### 윈도우 [고급시스템설정]-[환경변수]-[시스템변수]에 전역변수 추가
- 추가 전 안드로이드 스튜디오 븍극여우 버전에서 설치된 Sdk 폴더 중 tools 와 platform-tools 폴더 2개만 MobileApp폴더에 붙여 넣는다.
- 위 폴더를 사용하는 이유는 앱 빌드 시 필요하기 때문이고, 오픈소스 이지만 구하기 번거로우니 강의용 git 소스의 폴더를 그대로 사용합니다.
- 시스템변수 추가에서 변수이름 : ANDROID_HOME , 변수값 : C:\MobileApp\Sdk
- [Path] 에서 expo와 eas명령에 대한 전역경로 추가 : C:\MobileApp\node_modules\.bin
- [Path] 에서 안드로이드 SDK 경로 설정(아래)
- %ANDROID_HOME%\tools ( emulator.exe 로 애뮬레이터를 실행하기 위해서 )
- %ANDROID_HOME%\tools\bin ( sdkmanager.bat 로 외부 라이브러리를 다운로드 받기 위해서 )
- %ANDROID_HOME%\platform-tools ( adb.exe 안드로이드 디버그 브릿지로 애뮬레이터와 연동실행하기 위해서 )
- expo -v (설치확인 버전 0.7.3, expo-cli --version : 7.1.2)
- eas -v (Expo Application Service 설치확인 eas-cli/7.1.2)
------------------------------------------------------------------------------------------------------
### 리액트 네이티브 앱 프로젝트 추가 : 용어설명 eas: Expo Application Service(아래)
- //Expo 사이트에서 react-native-app 프로젝트 추가 후(사이트주소 https://expo.dev/) App을 Expo사이트에 배포할 때 필요 지금은 안하고 건너띔.
- npx create-expo-app react-native-app // native환경의 폴더 생성! (app 뒤로는 프로젝트명)
- 위 초기앱 생성 후 package.json에 자동으로 입력된 값:  expo SDK 버전 50.0.5, react 버전 18.2.0, react-native 버전 0.73.2 및
- cd react-native-app //아래부터는 생성된 폴더 안으로 들어가서 입력!
- //eas init --id Expo사이트에서 프로젝트 추가시 생성된ID // 교육용이라서 .git폴더를 제거했음. App을 Expo사이트에 배포할 때 필요 지금은 사용안함.
- 결과확인 : √ Project successfully linked (ID: Expo사이트에서 프로젝트 추가 시 생성된 ID) (modified app.json)
- 위 app.json 이 Expo사이트와 연동 시 추가된 코드는 app.json 파일 하단 부분에 있다.

```,
    "extra": {
      "eas": {
        "projectId": "Expo사이트에생성한프로젝트ID"
      }
    },
    "owner": "kimilguk"
```
- npx expo install react-native-web react-dom // web 방식으로 결과보기에 필요
------------------------------------------------------------------------------------------------------
### 리액트네이티브 앱 실행(아래) 
- 녹스와 ide 연결 : adb.exe connect 127.0.0.1:62001 (별도 cmd창을 관리자권한으로 실행한 후 이 명령을 실행하면 수월하게 진행 됩니다.)
- 간혹 앱이 응답이 없이 무한반복 되면 : adb.exe kill-server 로 초기화 시킨 후 다시 위 명령으로 connection 한다.
- 연결 확인 : adb.exe devices
- //expo login (필요시 Expo사이트에 콘솔로 로그인, 지금은 녹스애뮬레이터에서만 실행하기 때문에 필요 없음)
- npm run start 
- 터미널에서 실행 후 w 키보드를 누르면 수정된 화면이 웹에 바로 보여진다.(참고로, 앱 화면 상단에 reload 버튼이 있음)
- 단 a 키로 안드로이드 앱으로 실행하면, 최초 Expo Go라는 앱을 녹스에 다운받는 모습이 터미널에 표시되고, 이후 앱이 실행 된다.
- 간혹 앱이 응답이 없이 무한반복 되면 :  로 초기화 시킨 후 다시 위 명령으로 connection 한다.
