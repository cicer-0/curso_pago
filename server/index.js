import { startApolloServer } from "./app.js";
import typeDefs from "./graphql/typeDefs.js";
import unifiedResolvers from "./graphql/resolvers.js";
// index.js (or app.js)
import { connectCoursesDB, connectPaymentsDB } from "./db.js";

(async () => {
  await connectCoursesDB();
  await connectPaymentsDB();

  // Start Apollo Server
  await startApolloServer(typeDefs, unifiedResolvers);
})();
