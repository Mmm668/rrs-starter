#### ✨ `Purpose`
```
[React, Redux, Saga] 프론트엔드 스타트킷
```
- 추가 중인 건...
```angular2
로그인 Auth HOC 추가
```
---

#### ✨ `Author`
- YHOMZ git [@Mmm668](https://github.com/Mmm668)

---

#### ✨ `Stack`
```
react
react-router-dom
styled-components
react-redux
redux-saga
axios
history
react-icons
```

---

#### ✨ `Structure`

📁 *프로젝트*
```
--- api : axios모듈, api호출함수 선언
--- assets : static image•scss파일 등
--- components : 공통 컴포넌트
--- helper : 각종 helper 함수
--- mock : mock 데이터 모음
--- pages : view page 모음
--- redux : redux 구조 (하위 기술)
--- App : Route || Routes.js
--- index : App index

```

📁 *Redux*
```
|____redux
| | |____app
| | | |____redux.js : 해당 redux
| | | |____saga.js : 해당 saga
| | |
| | |____actionCreators : combine action•creator, dispatch
| | |____rootReducer : combine reducers
| | |____sagas : saga per redux merge 
| | |____store : 스토어 기본 세팅 (redux, saga)
```

---

#### ✨ `Environment variables`
```
yarn start → .env.development 참고
yarn build → .env.production 참고
yarn test → .env.test 참고
```
- 사용은 process.env.REACT_APP_...
- .env.---의 내용 수정 시 앱 재구동하여야 반영됨
