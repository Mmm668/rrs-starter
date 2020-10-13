## 양식

👀 [[link]](https://Mmm668)

**[Stack]**
- React(Hook), React-router-dom, Styled-components
- Redux, Saga, Axios

**[Todo]**
- redux2 구조 추가 (slice 사용)
- 공통 컴포넌트 종류 추가
- 회원가입/로그인 샛 (saga 시나리오)

**[Structure]**

```
    |____src
    | |____api
    | | |____index.js
    | |____redux
    | | |____app
    | | | |____redux.js
    | | | |____saga.js
    | | |____store.js
    | | |____actionCreators.js
    | | |____sagas.js
    | | |____reducers.js
    | | |____photos
    | | | |____redux.js
    | | | |____saga.js
    | |____helpers
    | | |____HistoryHelper.js
    | | |____TokenHelper.js
    | | |____CommonHelper.js
    
    | |____mock
    | | |____mock.js
    | |____index.js
    
    | |____components
    | | |____SearchBar
    | | | |____index.js
    | | | |____SearchBar.js
    | | |____InfiniteScroll
    | | | |____InfiniteScroll.js
    | | |____Card
    | | | |____index.js
    | | | |____CardWrapper.js
    | | | |____ModalDetail.js
    | | | |____Card.js=
    | | |____Modal
    | | | |____ModalPortal.js
    | | | |____index.js
    | | | |____Modal.js
    | | |____ . . . .
    
    | |____views
    | | |____pages
    | | | |____home
    | | | | |____index.js
    | | | | |____components
    | | | | | |____MainCover.js
    | | |____ . . . . 
    
    | |____assets
    | | |____scss
    | | | |____style.scss
    | | | |____base
    | | | | |_____reset.scss
    | | | | |_____common.scss
    | | | | |_____color.scss
    | | |____image
    | | | |____index.js
    | | | |____user-icon.jpg
    | | | |____. . . .
    
    | |____Routes.js
    | |____App.js
```  
