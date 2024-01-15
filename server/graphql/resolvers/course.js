// src/resolvers/coursesResolvers.js

import Curso  from "../../models/course.js";

const coursesResolvers = {
  Query: {
    getCursos: async () => {
      return await Curso.find();
    },
    getCursoById: async (_, { id }) => {
      return await Curso.findById(id);
    },
  },
  Mutation: {
    createCurso: async (_, { input }) => {
      const curso = new Curso(input);
      return await curso.save();
    },
    updateCurso: async (_, { id, input }) => {
      return await Curso.findByIdAndUpdate(id, input, { new: true });
    },
    deleteCurso: async (_, { id }) => {
      return await Curso.findByIdAndDelete(id);
    },
  },
  Curso: {
    // Add any specific Curso resolvers here
  },
};

export default coursesResolvers;
