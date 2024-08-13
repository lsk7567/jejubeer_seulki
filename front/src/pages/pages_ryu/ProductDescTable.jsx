import { useEffect, useState } from "react";
import "../../css/css_ryu/productDesc.css";

/**
 * 상품정보 테이블
 **/
export function ProductDescTable({ type, id }) {
  const [data, setData] = useState([]);
  const [ingreData, setIngreData] = useState([]);
  // useEffect( () => {
  //   fetch("/data/data_ryu/productInfo.json")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (type === "desc1") {
  //         const desc1Result = result["foodDesc"];
  //         setData(desc1Result[0]);
  //       } else if (type === "desc2") {
  //         setData(result[""]);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/data_ryu/productInfo.json");
        const result = await res.json();

        // console.log(result);

        if (type === "desc") {
          const descResult = result["foodDesc"].filter((obj) => obj.id === id);
          setData(descResult);
        } else if (type === "ingredient") {
          const ingreResult = result["foodIngredient"].filter(
            (obj) => obj.id === id
          );
          setIngreData(ingreResult);
        } else if (type === "info") {
          const infoResult = result["productInfo"].filter(
            (obj) => obj.id === id
          );
          setData(infoResult);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [type, id]);

  // console.log("result data =>", data);

  return (
    <div className="ProductDescTable">
      {type === "desc" && (
        <div className="ProductDescTable-foodDesc">
          <p>상품정보</p>
          <table>
            <tbody>
              {data &&
                data.map((item) => (
                  <div>
                    <tr>
                      <td>제품명</td>
                      <td>{item.title}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>식품유형</td>
                      <td>{item.type}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>포장재질</td>
                      <td>{item.packaging}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>내용량</td>
                      <td>{item.capacity}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>영양성분</td>
                      <td>{item.ingredient}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>유통기한</td>
                      <td>{item.exp}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>성분명 및 함량</td>
                      <td>{item.ingredient_name}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>업소명 및 소재지</td>
                      <td>{item.location}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>유전자재조합식품에 해당하는 경우의 표시</td>
                      <td>{item.gmo}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>
                        영유아식 또는 체중조절 식품 등에
                        <br /> 해당하는 경우 표시 <br />
                        (광고사전심의필)
                      </td>
                      <td>{item.baby}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>
                        ‘수입식품에 해당하는 경우’,
                        <br /> ‘식품위생법에 따른 수입신고를 필함’의 문구
                      </td>
                      <td>{item.import}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>소비자상담 전화번호</td>
                      <td>{item.contact}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                  </div>
                ))}
            </tbody>
          </table>
        </div>
      )}
      {type === "ingredient" && (
        <div className="ProductDescTable-foodIngredient">
          <p>영양정보</p>
          <table>
            <tbody>
              {ingreData.map((item) => (
                <div>
                  <tr>
                    <td>총 내용량</td>
                    <td colSpan={2}>{item.full}</td>
                  </tr>
                  <div className="ProductDescTable-div"></div>
                  <tr>
                    <td>열량</td>
                    <td colSpan={2}>{item.kcal}</td>
                  </tr>
                  <div className="ProductDescTable-div"></div>
                  <tr className="ProductDescTable-multieRows">
                    <td>나트륨</td>
                    <td>{item.na1}</td>
                    <td>{item.na2}</td>
                    <div className="ProductDescTable-vericalDiv"></div>
                    <td className="ProductDescTable-multieRows-title">
                      탄수화물
                    </td>
                    <td>{item.tan1}</td>
                    <td>{item.tan2}</td>
                  </tr>
                  <div className="ProductDescTable-div"></div>
                  <tr className="ProductDescTable-multieRows">
                    <td>당류</td>
                    <td>{item.dang1}</td>
                    <td>{item.dang2}</td>
                    <td className="ProductDescTable-multieRows-title">
                      단백질
                    </td>
                    <td>{item.dan1}</td>
                    <td>{item.dan2}</td>
                  </tr>
                  <div className="ProductDescTable-div"></div>
                  <tr className="ProductDescTable-multieRows">
                    <td>포화지방</td>
                    <td>{item.po1}</td>
                    <td>{item.po2}</td>
                    <td className="ProductDescTable-multieRows-title">지방</td>
                    <td>{item.ji1}</td>
                    <td>{item.ji2}</td>
                  </tr>
                  <div className="ProductDescTable-div"></div>
                  <tr className="ProductDescTable-multieRows">
                    <td>콜레스테롤</td>
                    <td>{item.col1}</td>
                    <td>{item.col2}</td>
                    <td className="ProductDescTable-multieRows-title">
                      트랜스지방
                    </td>
                    <td>{item.tran1}</td>
                    <td>{item.tran2}</td>
                  </tr>
                  <div className="ProductDescTable-div"></div>
                  <tr>
                    <td>1일 영양성분 기준치에 대한 비율(%)</td>
                    <td colSpan={5}>{item.oneDay}</td>
                  </tr>
                  <div className="ProductDescTable-div"></div>
                </div>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {type === "info" && (
        <div className="ProductDescTable-productInfo">
          <p>상품정보</p>
          <table>
            <tbody>
              {data &&
                data.map((item) => (
                  <div>
                    <tr>
                      <td>품명 및 모델명</td>
                      <td>{item.name}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>재질</td>
                      <td>{item.texture}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>크기</td>
                      <td>{item.size}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>제조자</td>
                      <td>{item.maker}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>제조국</td>
                      <td>{item.madeCountry}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>유통 판매원</td>
                      <td>{item.distribution}</td>
                    </tr>
                    <div className="ProductDescTable-div"></div>
                    <tr>
                      <td>A/S</td>
                      <td>{item.a_s}</td>
                    </tr>
                  </div>
                ))}
            </tbody>
          </table>
        </div>
      )}
      {type === "desc" ||
        type === "ingredient" ||
        (type === "info" && (
          <>
            <div className="ProductDescTable-delivery">
              <p>배송안내</p>
              <table>
                <thead>
                  <tr>
                    <th>전국택배배송 | CJ대한통운</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>배송비</td>
                    <td>
                      회원 가입하면 상시 무료배송!
                      <br />
                      미가입 시 건당 3,000원
                    </td>
                  </tr>
                  <tr>
                    <td>배송기간</td>
                    <td>공휴일/일요일을 제외하고 발송일 이후 2-3일 소요</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="ProductDescTable-change">
              <p>교환 및 환불 안내</p>
              <ul>
                <li>
                  제주맥주에서 구매하신 제품은 받으셨을 때와 동일한 상태로, 구매
                  후 7일 이내 교환/환불이 가능합니다.
                </li>
                <li>
                  단순 변심으로 인한 교환 시 왕복 배송비 6천원, 환불 시 3천원을
                  청구합니다.
                </li>
                <li>오배송, 불량으로 인한 교환/환불 시 배송비 무료입니다.</li>
                <li>
                  제품 배송 이후 환불 요청 시에는 제품 회수 후에 환불이
                  완료됩니다.
                </li>
                <li>자세한 사항은 고객센터 혹은 문의 게시판에 문의해주세요.</li>
              </ul>
            </div>
          </>
        ))}
    </div>
  );
}
