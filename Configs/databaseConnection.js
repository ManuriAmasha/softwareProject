import pkg from 'pg';
const { Client } = pkg;
import databaseConfigurations from "./databaseConfig.js";

const client = new Client(databaseConfigurations)
// const user = new user(databaseConfigurations)

client.connect((error) => {
    if (error) {
      console.error("Error connecting to database:", error);
      return;
    }
  
     console.log("Connected to database!");
  });

  export default client;