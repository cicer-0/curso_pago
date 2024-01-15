import coursesResolvers from "./resolvers/course.js";
import paymentsResolvers from "./resolvers/payment.js";

const unifiedResolvers = {
  Query: {
    ...coursesResolvers.Query,
    ...paymentsResolvers.Query,
  },
  Mutation: {
    ...coursesResolvers.Mutation,
    ...paymentsResolvers.Mutation,
  },
  Curso: {
    ...coursesResolvers.Curso,
  },
  Pago: {
    ...paymentsResolvers.Pago,
  },
};

export default unifiedResolvers;
