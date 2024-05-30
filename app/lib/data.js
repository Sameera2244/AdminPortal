import { vendor, User,vendormanagement } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchvendors = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await vendor.find({ Vendors: { $regex: regex } }).count();
    const vendors = await vendor.find({Vendors: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, vendors };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch vendors!");
  }
};

export const fetchvendor = async (id) => {
  try {
    connectToDB();
    const vendor = await vendor.findById(id);
    return vendor;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch vendor!");
  }
};

export const fetchvendormanagements = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await vendormanagement.find({ CompanyName: { $regex: regex } }).count();
    const vendormanagements = await vendormanagement.find({ CompanyName: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, vendormanagements };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch vendormanagements!");
  }
};

export const fetchvendormanagement = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const vendormanagement = await vendormanagement.findById(id);
    return vendormanagement;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch vendormanagement!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Orders",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
