import multer from "multer";

//multer 라이브러리를 이용한 파일업로드
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); //uploads 폴더에 자동으로 파일 넣어줌
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // cb(null, file.fieldname + '-' + uniqueSuffix)
    cb(null, uniqueSuffix + "_" + file.originalname);
  },
});

const fupload = multer({ storage: storage }).single("file"); //single = 파일 하나를 storage를 가지고 업로드

/**
 * 파일 업로드 : 파일을 /uploads 폴더에 저장하는 작업
 */
export function upload(req, res) {
  fupload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(`${JSON.stringify(res.req.file)}`);
      console.log(`${JSON.stringify(res.req.file.path)}`);
      res.json({
        postImage: res.req.file.path,
        // orgImage: req.file.originalname,
      }); // => ImageUpload.jsx에서 요청한 것에 대한 응답
    }
  });
}
