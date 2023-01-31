/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
/**ES6 destructuring 문법
 * array, object 에 있던 자료를 변수에 쉽게 담고 싶을 때 사용
 * ex) 10,100을 a,b에 넣어주세요!
 * var [a,b] = [10, 100] 
 * 
 */
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 코트 추천', '여자 겨울 옷 추천']);

  let posts = '강남 고기 맛집';
  
  let [따봉, 따봉변경] = useState(0); // 따봉변경은 state 변경용 함수를 의미함

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={() => {
        let copy2 = [...글제목];
        글제목변경(copy2.sort());
      }}>가나다순정렬</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천'
        글제목변경(copy);
      }}>글수정</button>

      <div className="list" >
        <h3> { 글제목[0] } <span onClick={ () => { 따봉변경( 따봉+1 ) } }>👍</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list" >
        <h3> { 글제목[1] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list" >
        <h3> { 글제목[2] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
