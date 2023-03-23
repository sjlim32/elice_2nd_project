import { Schema } from "mongoose";

const supportUserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: new Schema(
        {
          zonecode: String,
          address: String,
          detailAddress: String,
        },
        {
          _id: false,
        },
      ),
      required: true,
    },
    history: {
      type: String,
      required: false,
    },
    certification: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: ["pending", "support"],
      default: "pending",
    },
  },
  { discriminatorKey: "kind", timestamps: true },
);

export { supportUserSchema };
