require("dotenv").config();

const app = require("./app"); 

const PORT = process.env.PORT ;
const pool = require("./config/db.js");

async function startServer() {
    try {
        await pool.getConnection();
        console.log("✅ MySQL Connected");

       

    } catch (error) {
        console.error("❌ Database Connection Failed");
        console.error(error.message);
    }
}
 app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });

startServer();