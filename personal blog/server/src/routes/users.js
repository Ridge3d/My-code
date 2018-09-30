import { Router } from "express";
import { tokenMiddleware, isLoggedIn } from "../middleware/auth.mw";

let router = Router();

//actually  /api/users/me
router.get("/me", tokenMiddleware, isLoggedIn, (req, res) => {
  res.json(req.user);
});

export default router;
