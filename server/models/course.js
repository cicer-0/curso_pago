import { connectCoursesDB } from "../db.js";
import mongoose from 'mongoose';

const courseDB = await connectCoursesDB();

const cursoSchema = new mongoose.Schema({
  nombre: String,
  horario: String,
  lugar: String,
});

export default courseDB.model("Curso", cursoSchema);
