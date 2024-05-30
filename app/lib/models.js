import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const vendorSchema = new mongoose.Schema(
  {
    Vendors: {
      type: String,
      required: true,
      unique: true,
    },
    VendorDetails: {
      type: String,
      required: true,
    },
    PurchaseOrders: {
      type: Number,
      required: true,
      min: 0,
    },
    Orders: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

const vendormanagementSchema = new mongoose.Schema(
  {
    CompanyName: {
      type: String,
      required: true,
      unique: true,
    },
    Type: {
      type: String,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
    TinNo: {
      type: Number,
      required: true,
      min: 0,
    },
    TinNoExpiryDate: {
      type: Number,
      required: true,
      min: 0,
    },
    PurchaseOrderNo: {
      type: Number,
      required: true,
      min: 0,
    },
    VendorDetails: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);



export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const vendor = mongoose.models.vendor || mongoose.model("vendor", vendorSchema);
export const vendormanagement = mongoose.models.vendormanagement || mongoose.model("vendormanagement", vendormanagementSchema);
