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
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list" >
        <h3> { 글제목[0] } </h3>
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
