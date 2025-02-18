import { Router } from "express";
import { getUserById, registerUser } from "../controllers/usuarios.controller.ts";

const router = Router();

router.get("/find/:id", getUserById);

router.get("/register", registerUser);

export default router;

