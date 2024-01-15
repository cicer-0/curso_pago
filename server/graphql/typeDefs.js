import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    getCursos: [Curso]
    getCursoById(id: String!): Curso
    getPagos: [Pago]
    getPagoById(id: ID!): Pago
    getPagosByCurso(IdCurso: String!): [Pago]
  }

  type Mutation {
    createCurso(input: CursoInput): Curso
    updateCurso(id: String!, input: CursoInput): Curso
    deleteCurso(id: String!): Curso
    createPago(input: PagoInput): Pago
    updatePago(id: ID!, input: PagoInput): Pago
    deletePago(id: ID!): Pago
  }

  input CursoInput {
    nombre: String
    horario: String
    lugar: String
  }

  input PagoInput {
    concepto: String
    IdCurso: String
    monto: Float
    persona: String
  }

  type Curso {
    _id: ID!
    nombre: String
    horario: String
    lugar: String
  }

  type Pago {
    _id: ID!
    concepto: String
    IdCurso: String
    monto: Float
    persona: String
  }
`;

export default typeDefs;
