const sql = require('mssql');

class UserModel {
    async getAllMark() {
        try {
            const result = await sql.query("SELECT * FROM Tour");
            return result.recordset;  // Return the data
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;  // Let the controller handle the error
        }
    }
}

module.exports = new UserModel();
