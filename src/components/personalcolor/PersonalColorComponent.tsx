import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './PersonalColor.css';

function PersonalColor() {
  return (
    <div className="pc-container">
      <div className="pc-description">
        <div className="pc-title">
          <p>#퍼스널컬러</p>
          <p>나만의 눈송이 색상</p>
          <p>알아보자!</p>
        </div>
        <div className="pc-input_area">
          <input type="text" className="pc-search" placeholder="나만의 닉네임 입력" />
          <a className="pc-search-btn" href="/" role="button">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PersonalColor;