const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// MongoDB connection string
const mongoURI =
  "mongodb+srv://atulsoam5:WI3sXtidiR5Zw1zD@cluster0.4eljbil.mongodb.net/";

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define Schemas
const ParkingSpaceSchema = new Schema({
  parking_space_id: { type: String },
  vehicle_transaction_id: { type: Schema.Types.String },
  parking_space_title: { type: String },
  parking_zone_id: { type: String },
  is_available: { type: Boolean },
  vehicle_no: { type: String },
});

const ParkingZoneSchema = new Schema(
  {
    parking_zone_id: { type: String },
    parking_zone_title: { type: String },
  },
  { timestamps: true }
);

const UserSchema = new Schema({
  _userId: { type: Number },
  name: { type: String },
  email: { type: String },
  password: { type: String },
  type: { type: String },
});

const VehicleParkingSchema = new Schema(
  {
    vehicle_parking_id: { type: Number },
    parking_zone_id: { type: String },
    parking_space_id: { type: String },
    booking_date_time: { type: Date },
    release_date_time: { type: Date },
    vehicle_no: { type: String },
  },
  { timestamps: true }
);

// Define Models
const ParkingSpace = mongoose.model("ParkingSpace", ParkingSpaceSchema);
const ParkingZone = mongoose.model("ParkingZone", ParkingZoneSchema);
const User = mongoose.model("User", UserSchema);
const VehicleParking = mongoose.model("VehicleParking", VehicleParkingSchema);

// Sample Data
const parkingSpaces = [
  {
    parking_space_id: "PS001",
    vehicle_transaction_id: "VT001",
    parking_space_title: "Space 1",
    parking_zone_id: "PZ001",
    is_available: true,
    vehicle_no: "",
  },
  {
    parking_space_id: "PS002",
    vehicle_transaction_id: "VT002",
    parking_space_title: "Space 2",
    parking_zone_id: "PZ001",
    is_available: false,
    vehicle_no: "ABC1234",
  },
  {
    parking_space_id: "PS003",
    vehicle_transaction_id: "VT003",
    parking_space_title: "Space 3",
    parking_zone_id: "PZ002",
    is_available: true,
    vehicle_no: "",
  },
  {
    parking_space_id: "PS004",
    vehicle_transaction_id: "VT004",
    parking_space_title: "Space 4",
    parking_zone_id: "PZ002",
    is_available: false,
    vehicle_no: "XYZ5678",
  },
  {
    parking_space_id: "PS005",
    vehicle_transaction_id: "VT005",
    parking_space_title: "Space 5",
    parking_zone_id: "PZ003",
    is_available: true,
    vehicle_no: "",
  },
];

const parkingZones = [
  {
    parking_zone_id: "PZ001",
    parking_zone_title: "Zone A",
  },
  {
    parking_zone_id: "PZ002",
    parking_zone_title: "Zone B",
  },
  {
    parking_zone_id: "PZ003",
    parking_zone_title: "Zone C",
  },
  {
    parking_zone_id: "PZ004",
    parking_zone_title: "Zone D",
  },
  {
    parking_zone_id: "PZ005",
    parking_zone_title: "Zone E",
  },
];

const users = [
  {
    _userId: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
    type: "admin",
  },
  {
    _userId: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "securepassword456",
    type: "user",
  },
  {
    _userId: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "mypassword789",
    type: "user",
  },
  {
    _userId: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    password: "anotherpassword321",
    type: "admin",
  },
  {
    _userId: 5,
    name: "Charlie Black",
    email: "charlie.black@example.com",
    password: "password654",
    type: "user",
  },
  {
    _userId: 6,
    name: "Atul Soam",
    email: "atulsoam50@gmail.com",
    password: "password",
    type: "user",
  },
  {
    _userId: 7,
    name: "Atul_soam",
    email: "atulsoam5@gmail.com",
    password: "password",
    type: "admin",
  },
];

const vehicleParkings = [
  {
    vehicle_parking_id: 1,
    parking_zone_id: "PZ001",
    parking_space_id: "PS001",
    booking_date_time: new Date("2024-06-01T08:30:00Z"),
    release_date_time: new Date("2024-06-01T10:30:00Z"),
    vehicle_no: "ABC1234",
  },
  {
    vehicle_parking_id: 2,
    parking_zone_id: "PZ002",
    parking_space_id: "PS003",
    booking_date_time: new Date("2024-06-01T09:00:00Z"),
    release_date_time: new Date("2024-06-01T11:00:00Z"),
    vehicle_no: "XYZ5678",
  },
  {
    vehicle_parking_id: 3,
    parking_zone_id: "PZ001",
    parking_space_id: "PS002",
    booking_date_time: new Date("2024-06-02T12:00:00Z"),
    release_date_time: new Date("2024-06-02T14:00:00Z"),
    vehicle_no: "LMN9101",
  },
  {
    vehicle_parking_id: 4,
    parking_zone_id: "PZ003",
    parking_space_id: "PS005",
    booking_date_time: new Date("2024-06-02T15:30:00Z"),
    release_date_time: new Date("2024-06-02T17:30:00Z"),
    vehicle_no: "GHI2345",
  },
  {
    vehicle_parking_id: 5,
    parking_zone_id: "PZ002",
    parking_space_id: "PS004",
    booking_date_time: new Date("2024-06-03T07:00:00Z"),
    release_date_time: new Date("2024-06-03T09:00:00Z"),
    vehicle_no: "JKL6789",
  },
];

// Insert Sample Data
Promise.all([
  ParkingSpace.insertMany(parkingSpaces),
  ParkingZone.insertMany(parkingZones),
  User.insertMany(users),
  VehicleParking.insertMany(vehicleParkings),
])
  .then(() => {
    console.log("Sample data inserted");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error inserting sample data:", err);
    mongoose.disconnect();
  });
