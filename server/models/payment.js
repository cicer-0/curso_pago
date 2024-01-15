import { connectPaymentsDB } from "../db.js";
import mongoose from 'mongoose';

const paymentDB = await connectPaymentsDB();

const pagoSchema = new mongoose.Schema({
  concepto: String,
  IdCurso: Number,
  monto: Number,
  persona: String,
});

export default paymentDB.model("Pago", pagoSchema);
