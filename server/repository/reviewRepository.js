import { db } from '../db/database_mysql80.js';

/**
 * 구매평 리스트 가져오기
 */
export const getProductReview = async (params) => {
  const sql = `
        select rno, rid, rgrade, rcontent, rwriter, rdate, rimage, total from
        (select row_number() over(order by rid desc) as rno,
                rid, 
                rgrade,
                rcontent,
                rwriter,
                rdate,
                rimage,
		            (select count(*) from jb_product_review) total
          from jb_product_review) jb_product_review_copy
	        where rno between ? and ?
  `;

  return db.execute(sql, [params.startIndex, params.endIndex])
            .then((result) => result[0]);
};

/**
 * 구매평 갯수 가져오기
 */
export const getCountReview = async () => {
  const sql = `
    select count(*) as rcount 
    from jb_product_review;`;

  return db.execute(sql)
            .then((result) => result[0][0]);
};