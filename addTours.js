const mongoose = require("mongoose");
const Tour = require("./src/app/models/Tours"); // Ensure the Tour model is imported
const { connect } = require("./src/config/db"); // Import the DB connection function

// Connect to MongoDB
const generateTour = async () => {
    const tours = [
        {
            addstart: "Hanoi, Vietnam",
            datestart: new Date("2024-01-15"),
            description: "Explore the culture and heritage of Hanoi.",
            img: "https://example.com/hanoi.jpg",
            name: "Hanoi City Tour",
            price: 120.0,
            slot: 20,
            timetrip: "3 days, 2 nights",
        },
        {
            addstart: "Ho Chi Minh City, Vietnam",
            datestart: new Date("2024-02-10"),
            description: "Discover the vibrant energy of Ho Chi Minh City.",
            img: "https://example.com/hcm.jpg",
            name: "Ho Chi Minh Adventure",
            price: 150.0,
            slot: 15,
            timetrip: "4 days, 3 nights",
        },
        {
            addstart: "Da Nang, Vietnam",
            datestart: new Date("2024-03-20"),
            description: "Relax on the beautiful beaches of Da Nang.",
            img: "https://example.com/danang.jpg",
            name: "Da Nang Getaway",
            price: 200.0,
            slot: 10,
            timetrip: "5 days, 4 nights",
        },
        {
            addstart: "Hue, Vietnam",
            datestart: new Date("2024-04-05"),
            description: "Discover the ancient royal city of Hue.",
            img: "https://example.com/hue.jpg",
            name: "Hue Historical Tour",
            price: 100.0,
            slot: 25,
            timetrip: "2 days, 1 night",
        },
        {
            addstart: "Nha Trang, Vietnam",
            datestart: new Date("2024-05-10"),
            description: "Experience the stunning beaches of Nha Trang.",
            img: "https://example.com/nhatrang.jpg",
            name: "Nha Trang Beach Holiday",
            price: 220.0,
            slot: 18,
            timetrip: "5 days, 4 nights",
        },
        {
            addstart: "Phu Quoc, Vietnam",
            datestart: new Date("2024-06-15"),
            description: "Escape to the tropical paradise of Phu Quoc.",
            img: "https://example.com/phuquoc.jpg",
            name: "Phu Quoc Island Retreat",
            price: 250.0,
            slot: 12,
            timetrip: "6 days, 5 nights",
        },
        {
            addstart: "Sapa, Vietnam",
            datestart: new Date("2024-07-05"),
            description: "Enjoy the breathtaking mountain views of Sapa.",
            img: "https://example.com/sapa.jpg",
            name: "Sapa Adventure",
            price: 180.0,
            slot: 15,
            timetrip: "4 days, 3 nights",
        },
        {
            addstart: "Hoi An, Vietnam",
            datestart: new Date("2024-08-20"),
description: "Wander through the charming streets of Hoi An.",
            img: "https://example.com/hoian.jpg",
            name: "Hoi An Ancient Town Tour",
            price: 140.0,
            slot: 20,
            timetrip: "3 days, 2 nights",
        },
        {
            addstart: "Halong Bay, Vietnam",
            datestart: new Date("2024-09-10"),
            description: "Sail through the stunning Halong Bay.",
            img: "https://example.com/halong.jpg",
            name: "Halong Bay Cruise",
            price: 300.0,
            slot: 10,
            timetrip: "3 days, 2 nights",
        },
        {
            addstart: "Mekong Delta, Vietnam",
            datestart: new Date("2024-10-01"),
            description: "Explore the vibrant culture of the Mekong Delta.",
            img: "https://example.com/mekong.jpg",
            name: "Mekong Delta Experience",
            price: 130.0,
            slot: 30,
            timetrip: "2 days, 1 night",
        },
        {
            addstart: "Ha Giang, Vietnam",
            datestart: new Date("2024-11-15"),
            description: "Experience the majestic beauty of Ha Giang.",
            img: "https://example.com/hagiang.jpg",
            name: "Ha Giang Loop Adventure",
            price: 170.0,
            slot: 20,
            timetrip: "4 days, 3 nights",
        },
        {
            addstart: "Con Dao, Vietnam",
            datestart: new Date("2024-12-05"),
            description: "Discover the serenity of Con Dao Island.",
            img: "https://example.com/condao.jpg",
            name: "Con Dao Island Escape",
            price: 280.0,
            slot: 15,
            timetrip: "5 days, 4 nights",
        }
    ];


    try {
        // Clear old data
        await Tour.deleteMany({});
        console.log("Old data cleared.");

        // Insert sample data
        await Tour.insertMany(tours);
        console.log("Sample data added.");
    } catch (err) {
        console.error("Error inserting data:", err);
    } finally {
        // Close the connection
        mongoose.connection.close();
    }
};

// Main function to establish connection and populate data
const main = async () => {
    try {
        await connect(); // Assuming this connects to the database
        console.log("Database connected.");
        await generateTour(); // Call the data generation function
    } catch (err) {
        console.error("Error during the process:", err);
    }
};

main();