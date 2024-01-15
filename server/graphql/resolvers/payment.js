import Pago from "../../models/payment.js";

const paymentsResolvers = {
  Query: {
    getPagos: async () => {
      return await Pago.find();
    },
    getPagoById: async (_, { id }) => {
      return await Pago.findById(id);
    },
    getPagosByCurso: async (_, { IdCurso }) => {
      return await Pago.find({ IdCurso });
    },
  },
  Mutation: {
    createPago: async (_, { input }) => {
      const pago = new Pago(input);
      return await pago.save();
    },
    updatePago: async (_, { id, input }) => {
      return await Pago.findByIdAndUpdate(id, input, { new: true });
    },
    deletePago: async (_, { id }) => {
      return await Pago.findByIdAndDelete(id);
    },
  },
  Pago: {
    // Add any specific Pago resolvers here
  },
};

export default paymentsResolvers;
