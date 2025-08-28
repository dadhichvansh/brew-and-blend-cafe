import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isValid: { type: Boolean, default: true },
    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7d expiry
    },
    userAgent: { type: String, maxlength: 500 },
    ipAddress: {
      type: String,
      maxlength: 45, // supports IPv6
      validate: {
        validator: (v) => /^(\d{1,3}\.){3}\d{1,3}$|^[a-fA-F0-9:]+$/.test(v),
        message: (props) => `${props.value} is not a valid IP address`,
      },
    },
  },
  { timestamps: true }
);

// TTL index: deletes session automatically after expiresAt
sessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const Session = mongoose.model("Session", sessionSchema);
