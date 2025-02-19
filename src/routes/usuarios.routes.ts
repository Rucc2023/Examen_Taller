import { Router } from "express";
import { obtenerUsuarios, registerUser } from "../controllers/usuarios.controller.ts";

const router = Router();

router.get("/find",  obtenerUsuarios);

router.get("/register", registerUser);

export default router;

