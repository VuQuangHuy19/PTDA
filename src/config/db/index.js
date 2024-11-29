const mongoose = require('mongoose');

async function connect() {
    try {
        // Thêm thông báo thành công
        await mongoose.connect('mongodb://localhost:27017/VietTravel');
        console.log('Connect Successfully!');
    } catch (error) {
        // Thêm thông tin lỗi chi tiết
        console.log('Connect Failure!', error.message);
    }
}

module.exports = { connect };
