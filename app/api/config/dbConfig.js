import mysql from 'mysql2/promise';
      export  const connection = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password:"root",
            database: 'help2earn',
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
            idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0,
          });