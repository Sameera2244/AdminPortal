"use server";

import { revalidatePath } from "next/cache";
import { vendor, User,vendormanagement } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addvendor = async (formData) => {
  const {  vendorsName,email,password, PurchaseOrders } =
    Object.fromEntries(formData);
 
  try {
    connectToDB();

    const newvendor = new vendor({
      vendorsName,
      email,
      password,
      PurchaseOrders
    });

    await newvendor.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create vendor!");
  }

  revalidatePath("/dashboard/vendor");
  redirect("/dashboard/vendor");
};

export const updatevendor = async (formData) => {
  const { id,vendorsName,email,password, PurchaseOrders } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      vendorsName,
      email,
      password,
      PurchaseOrders
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await vendor.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update vendor!");
  }

  revalidatePath("/dashboard/vendor");
  redirect("/dashboard/vendor");
};


export const addvendormanagement = async (formData) => {
  const { CompanyName,Type,Location,TinNo,TinNoExpiryDate,PurchaseOrderNo,VendorDetails} =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newvendormanagement = new vendormanagement({
      CompanyName,
      Type,
      Location,
      TinNo,
      TinNoExpiryDate,
      PurchaseOrderNo,
      VendorDetails,
    });

    await newvendormanagement.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create vendormanagement!");
  }

  revalidatePath("/dashboard/vendormanagement");
  redirect("/dashboard/vendormanagement");
};

export const updatevendormanagement = async (formData) => {
  const { id,CompanyName,Type,Location,TinNo,TinNoExpiryDate,PurchaseOrderNo,VendorDetails } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      CompanyName,
      Type,
      Location,
      TinNo,
      TinNoExpiryDate,
      PurchaseOrderNo,
      VendorDetails,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await vendormanagement.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update vendormanagement!");
  }

  revalidatePath("/dashboard/vendormanagement");
  redirect("/dashboard/vendormanagement");
};



export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/user");
};

export const deletevendor = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await vendor.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete vendor!");
  }

  revalidatePath("/dashboard/vendor");
};

export const deletevendormanagement = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete vendormanagement!");
  }

  revalidatePath("/dashboard/vendormanagement");
};

export const authenticate = async (_prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};