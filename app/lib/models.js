import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 10,
    },
    first: {
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
    VendorsName: {
      type: String,
      required: true,                       
      unique: true,
    },
    PurchaseOrderNumber: {
      type: String,
      required: true,
      unique: true,
    },
    NumberOfMRUAssigned: {
      type: Number,
      required: true,
    },
    VendorUser: {
      type: String,
      required: true,
      min: 0,
    },
     VendorAssigned:{
      type: String,
      required: true,
      min:0,
     },
    Status:{
      type:Boolean,
      required:true,
      min:0,
    }
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
