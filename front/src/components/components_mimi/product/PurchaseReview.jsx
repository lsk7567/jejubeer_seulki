import React, { useEffect, useState } from 'react';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PurchaseReviewModal from './PurchaseReviewModal.jsx';
import axios from 'axios';
import Pagination from 'rc-pagination';
// import 'bootstrap/dist/css/bootstrap.css';
import 'rc-pagination/assets/index.css';
import '../../../css/css_mimi/review.css';

export default function PurchaseReview() {
  // const [isSelected, setIsSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // '포토 구매평만 보기' 버튼 색깔 변환 적용
  // const handleClick = () => {
  //   setIsSelected(!isSelected);
  // }

  /* 모달창 관련 함수 시작 */
  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeForceModal = () => {
    setIsModalOpen(false);
  }

  const closeSubmitModal = () => {
    alert("구매평이 작성되었습니다.");
    setIsModalOpen(false);
  }
  /* 모달창 관련 함수 종료 */

  // 구매평 리스트 가져오기, 구매평 페이징 처리
  const [reviewList, setReviewList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(3);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    let startIndex = 0;
    let endIndex = 0;
    startIndex = (currentPage-1) * pageSize + 1;
    endIndex = currentPage * pageSize;
    
    const url = 'http://localhost:8080/review';
    axios({
      method: 'post',
      url: url,
      data: {
              "startIndex": startIndex,
              "endIndex": endIndex
            }
    })
      .then((result) => {
        setReviewList(result.data);
        setTotalCount(result.data[0].total);
      })
      .catch(error => console.log(error));
  }, [currentPage]);

  // console.log('totalCount =>', totalCount);
  // console.log('reviewList =>', reviewList);

  // 구매평 개수 가져오기
  const [reviewCount, setReviewCount] = useState({});

  useEffect(() => {
    const url = 'http://localhost:8080/review/count';
    axios({
      method: 'post',
      url: url
    })
    .then((result) =>
      setReviewCount(result.data))
    .catch(error => console.log(error));
  }, []);

  const [expandedImageId, setExpandedImageId] = useState('');

  const toggleImageSize = (imageId) => {
    setExpandedImageId(prevId => prevId === imageId ? '' : imageId);
  };

  // console.log('reviewCount =>', reviewCount);

  return (
    <div className='content'>
      <div className='purchase-review-title-box'>
        <div className='purchase-review-title'>
          <p>구매평</p>
          <p>({reviewCount.rcount})</p>
        </div>
        <p className='purchase-review-title-desc'>상품을 구매하신 분들이 작성한 리뷰입니다.</p>
      </div>
      <div className='purchase-review-content-bar'>
        {/* <p
          onClick={handleClick}
          style={{color: isSelected ? 'var(--color-login)' : 'var(--color-main)'}}>
          <FontAwesomeIcon icon={faImage} className='purchase-review-content-bar-icon'/>
          포토 구매평만 보기
        </p> */}
        <select className='purchase-review-content-bar-select-box'>
          <option value="all">전체 평점 보기</option>
          <option value="5">최고 ❤️❤️❤️❤️❤️</option>
          <option value="4">좋음 ❤️❤️❤️❤️🩶</option>
          <option value="3">보통 ❤️❤️❤️🩶🩶</option>
          <option value="2">별로 ❤️❤️🩶🩶🩶</option>
          <option value="1">나쁨 ❤️🩶🩶🩶🩶</option>
        </select>
      </div>
      <table border="1" className='purchase-review-table'>
        <thead>
          {reviewList.map((review, index) => (
            <tr key={index} className='purchase-review-table-row'>
              <td className='purchase-review-table-data1'>
                <p className='purchase-review-table-rating'>{review.rgrade}</p>
                <p>{review.rcontent}</p>
                <div className='purchase-review-image-box'
                    style={{
                      width: expandedImageId === `review-${index}` ? 'auto' : '70px',
                      height: expandedImageId === `review-${index}` ? 'auto' : '70px',
                      overflow: 'hidden'
                    }}>
                  <div 
                    className='purchase-review-image'
                    onClick={() => toggleImageSize(`review-${index}`)}
                    style={{
                      width: '100%',
                      height: '100%',
                      cursor: 'pointer'
                    }}
                    >
                    <img 
                      src={review.rimage}
                      alt={`Review ${review.id}`}
                      style={{
                        width: expandedImageId === `review-${index}` ? 'auto' : '100%',
                        height: expandedImageId === `review-${index}` ? 'auto' : '100%',
                        maxWidth: expandedImageId === `review-${index}` ? '500px' : '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </div>
              </td>
              <td className='purchase-review-table-data2'>
                <p>{review.rwriter}</p>
                <p>{review.rdate}</p>
              </td>
            </tr>
          ))}
        </thead>
      </table>
      <div className='purchase-review-button-box'>
        <button type='button' className='purchase-review-button'
                onClick={openModal}>구매평 작성</button>
      </div>
      <PurchaseReviewModal isOpen={isModalOpen} onForceClose={closeForceModal} onSubmitClose={closeSubmitModal}/>
      <Pagination 
                className='d-flex justify-content-left'
                current={currentPage}
                total={totalCount}
                pageSize={pageSize}
                onChange={(page) => setCurrentPage(page)}
                />
    </div>
  );
}