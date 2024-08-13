import express from 'express'
import * as controller from '../controller/memberController.js'

const router = express.Router();

router.post('/login', controller.getLogin)
router.post('/join', controller.getJoin)
router.post('/idCheck', controller.getIdCheck)
router.post("/findUserId", controller.findUserId);
router.post("/findUserPs", controller.findUserPs);
router.post("/emailcode", controller.emailCode);
router.post("/passreset", controller.passReset);
router.post("/quit", controller.getQuit);

export default router;