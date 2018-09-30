import { Router } from "express";
import blogRouter from "./blogs";
import authRouter from "./auth";
import classesRouter from "./classes";
import usersRouter from "./users";
import { isLoggedIn, tokenMiddleware } from "../middleware/auth.mw";

let router = Router();

router.use("/auth", authRouter);

router
  .route("*")
  .post(tokenMiddleware, isLoggedIn)
  .put(tokenMiddleware, isLoggedIn)
  .delete(tokenMiddleware, isLoggedIn);

router.use("/classes", classesRouter);
router.use("/users", usersRouter);
router.use("/blogs", blogRouter);

export default router;
