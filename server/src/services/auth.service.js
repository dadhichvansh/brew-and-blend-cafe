import { Session } from "../models/session.model.js";
import { signAccessToken, signRefreshToken } from "../utils/token.util.js";

export const createUserSession = async (user, ipAddress, userAgent) => {
  try {
    // validate inputs (defensive check)
    if (!user?._id) {
      throw new Error("Invalid user object passed to createUserSession");
    }

    // create a session in DB
    const session = await Session.create({
      userId: user._id,
      ipAddress: ipAddress || "unknown",
      userAgent: userAgent || "unknown",
    });

    if (!session) {
      throw new Error("Failed to create user session");
    }

    // generate access token
    let accessToken;
    try {
      accessToken = signAccessToken({
        userId: user._id,
        username: user.username,
        email: user.email,
        sessionId: session._id,
      });
    } catch (err) {
      throw new Error("Failed to generate access token: " + err.message);
    }

    // generate refresh token
    let refreshToken;
    try {
      refreshToken = signRefreshToken({ sessionId: session._id });
    } catch (err) {
      throw new Error("Failed to generate refresh token: " + err.message);
    }

    return { accessToken, refreshToken, session };
  } catch (error) {
    console.error("Error in createUserSession:", error);
    throw error;
  }
};

export const clearUserSession = async (sessionId) => {
  try {
    return await Session.findByIdAndDelete({ sessionId });
  } catch (error) {
    console.error("Error in clearUserSession:", error);
    throw error;
  }
};
