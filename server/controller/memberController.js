import * as repository from '../repository/memberRepository.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto'; // crypto 모듈을 임포트합니다.

/* 회원탈퇴 처리 */
export const getQuit = async (req, res) => {
  const { userId } = req.body;
  const result = await repository.getQuit(userId);
  res.json(result);
};

/* 로그인 처리 */
export const getLogin = async (req, res) => {
  const { userId, userPass } = req.body;
  const result = await repository.getLogin(userId, userPass);
  res.json(result);
};

/* 회원가입 처리 */
export const getJoin = async (req, res) => {
  const formData = req.body;
  const result = await repository.getJoin(formData);
  res.json(result);
};

/* 아이디 중복체크 */
export const getIdCheck = async (req, res) => {
  const { userId } = req.body;
  const result = await repository.getIdCheck(userId);
  res.json(result);
};

/* 아이디 찾기 */
export const findUserId = async (req, res) => {
  const { userName, phoneNumber } = req.body;
  const result = await repository.findUserId(userName, phoneNumber);
  res.json(result);
};

/* 비밀번호 찾기 */
export const findUserPs = async (req, res) => {
  const { userId, userName } = req.body;
  const result = await repository.findUserPs(userId, userName);
  res.json(result);
};

/* 이메일 인증 */
export const emailCode = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return
  }
  const authCode = crypto.randomBytes(3).toString('hex');
  const transporter = nodemailer.createTransport({
    host: 'smtp.naver.com',
    port: 587,
    secure: false,
    auth: {
      user: 'jeju_beer@naver.com',
      pass: '9KLFPYPB1T71',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: 'jeju_beer@naver.com',
    to: email,
    subject: '[제주맥주] 비밀번호 찾기 인증번호 입니다.',
    text: `안녕하세요 제주맥주입니다. \n 비밀번호 재설정을 위한 인증번호는 [ ${authCode} ] 입니다.`,
  };
  try {
    console.log('Sending email to:', email);
    console.log('Auth code:', authCode);
    await transporter.sendMail(mailOptions);
    res.json({ authCode });
  } catch (error) {
    res.status(500).json({ error: '인증번호 전송에 실패했습니다.' });
  }
};

/* 비밀번호 재설정 */
export const passReset = async (req, res) => {
  const { userId, newPassword } = req.body;

  try {
    if (!userId || !newPassword) return res
    const user = await repository.findUserById(userId);
    if (!user || user.length === 0) {
      console.log("User not found for userId:", userId);
      return res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
    }
    await repository.passReset(userId, newPassword);
    res.json({ success: true });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ error: "비밀번호 변경에 실패했습니다." });
  }
};
