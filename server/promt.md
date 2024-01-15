```js
import { config } from "dotenv";

config();

export const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/projectsdb";
```
```js
import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.name}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

```
```js
import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello: String
    projects: [Project]
    project(_id: ID!): Project
    tasks: [Task]
    task(_id: ID!): Task
  }

  type Mutation {
    createProject(name: String!, description: String!): Project
    updateProject(_id: ID!, name: String!, description: String): Project
    deleteProject(_id: ID!): Project
    createTask(title: String!, projectId: ID!): Task
    updateTask(_id: ID!, title: String!, projectId: ID!): Task
    deleteTask(_id: ID!): Task
  }

  type Project {
    _id: ID!
    name: String!
    description: String!
    createdAt: String
    updatedAt: String
    tasks: [Task]
  }

  type Task {
    _id: ID!
    title: String!
    project: Project
    createdAt: String
    updatedAt: String
  }
`;
```
```js
import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const resolvers = {
	Query: {
		hello: () => "Hello world!",
		projects: async () => {
			return await Project.find();
		},
		project: async (_, { _id }) => {
			return await Project.findById(_id);
		},
		tasks: async () => {
			return await Task.find();
		},
		task: async (_, { _id }) => {
			return await Task.findById(_id);
		},
	},
	Mutation: {
		createProject: async (_, { name, description }) => {
			const project = new Project({
				name,
				description,
			});
			const savedProject = project.save();
			return savedProject;
		},
		deleteProject: async (_, { _id }) => {
			const deletedProject = await Project.findByIdAndDelete(_id);
			if (!deletedProject) throw new Error("Project not found");
			return deletedProject;
		},
		updateProject: async (_, args) => {
			const updatedProject = await Project.findByIdAndUpdate(
				args._id,
				args,
				{ new: true }
			);
			if (!updatedProject) throw new Error("Project not found");
			return updatedProject;
		},
		createTask: async (_, { title, projectId }) => {
			const projectFound = await Project.findById(projectId);
			if (!projectFound) {
				throw new Error("Project not found");
			}

			const task = new Task({
				title,
				projectId,
			});
			const savedTask = task.save();
			return savedTask;
		},
		deleteTask: async (_, { _id }) => {
			const deletedTask = await Task.findByIdAndDelete(_id);
			if (!deletedTask) throw new Error("Task not found");
			return deletedTask;
		},
		updateTask: async (_, args) => {
			const updatedTask = await Task.findByIdAndUpdate(args._id, args, {
				new: true,
			});
			if (!updatedTask) throw new Error("Task not found");
			return updatedTask;
		}
	},
	Project: {
		tasks: async (parent) => {
			return await Task.find({ projectId: parent._id });
		}
	},
	Task: {
		project: async (parent) => {
			return await Project.findById(parent.projectId);
		}
	}
};

```
```js
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import http from "http";
import cors from "cors";

export async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000`);
}

```