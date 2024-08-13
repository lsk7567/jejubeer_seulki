import express from "express";
import cors from "cors";
import path from "path";

import productRouter from "./router/productRouter.js";
import memberRouter from "./router/memberRouter.js";
import newsRouter from "./router/newsRouter.js";
import cartRouter from "./router/cartRouter.js";
import uploadRouter from "./router/uploadRouter.js";
import ticketRouter from "./router/ticketRouter.js";
import modifyRouter from "./router/modifyRouter.js";
import reviewRouter from "./router/reviewRouter.js";
import wishRouter from "./router/wishRouter.js";

const server = express();
const port = 8080;

//TODO 공통적인 요청
// server.use(express.urlencoded());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());
server.use("/uploads", express.static(path.join("uploads")));

server.use("/product", productRouter);
server.use("/upload", uploadRouter);
server.use("/member", memberRouter);
  server.use("/modify", modifyRouter);
// server.use("/auth", kakoRouter);

server.use("/cart", cartRouter);
server.use("/mypage", wishRouter);
server.use("/news", newsRouter);
server.use("/ticket", ticketRouter);
server.use("/review", reviewRouter);

server.listen(port, () => {
  console.log(`server start ==> ${port}`);
});
