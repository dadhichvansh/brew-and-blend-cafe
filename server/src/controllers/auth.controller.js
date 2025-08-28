import { User } from "../models/user.model.js";
import {
  clearUserSession,
  createUserSession,
} from "../services/auth.service.js";
import { hashPassword, verifyPassword } from "../utils/password.util.js";
import {
  loginSchema,
  registrationSchema,
} from "../validations/auth.validation.js";

export const register = async (req, res) => {
  try {
    if (req.user) {
      return res.status(400).json({
        success: false,
        message: "Already logged in.",
      });
    }

    const { success, data, error } = registrationSchema.safeParse(req.body);

    // check if user input is valid
    if (!success) {
      return res
        .status(400)
        .json({ success: false, message: error.errors[0].message });
    }

    // check if user already exists
    const userExists = await User.findOne({ email: data.email });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message:
          "User with that email already exists. Try using a different email.",
      });
    }

    // destructure user input from data variable and hash the password
    const { username, email, fullName, password } = data;
    const passwordHash = await hashPassword(password);

    // finally, create the user and save to the database
    const user = await User.create({
      username,
      email,
      fullName,
      passwordHash,
      role: "user",
    });

    // create user session and generate access and refresh tokens
    const { accessToken, refreshToken, session } = await createUserSession(
      user,
      req.clientIp,
      req.headers["user-agent"]
    );

    // base config for sending cookie
    const baseCookieConfig = { httpOnly: true, secure: true };

    // send access_token and refresh_token in res.cookie object
    res.cookie("access_token", accessToken, {
      ...baseCookieConfig,
      maxAge: process.env.ACCESS_TOKEN_EXPIRES,
    });

    res.cookie("refresh_token", refreshToken, {
      ...baseCookieConfig,
      maxAge: process.env.REFRESH_TOKEN_EXPIRES,
    });

    res
      .status(201)
      .json({ success: true, message: "User registered successfully.", user });
  } catch (error) {
    console.error("Error registering user:", error);

    res.status(500).json({
      success: false,
      message: "User registration failed. Try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export const login = async (req, res) => {
  try {
    if (req.user) {
      return res.status(400).json({
        success: false,
        message: "Already logged in.",
      });
    }

    const { success, data, error } = loginSchema.safeParse(req.body);

    // check if user input is valid
    if (!success) {
      return res
        .status(400)
        .json({ success: false, message: error.errors[0].message });
    }

    // check if user is already registered
    const user = await User.findOne({ email: data.email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User with that email does not exists. Try registering first.",
      });
    }

    // destructure user input from data variable and verify password
    const { username, email, password } = data;
    const verifiedPassword = await verifyPassword(user.passwordHash, password);

    // check if password is verified
    if (!verifiedPassword) {
      return res.status(401).json({
        success: false,
        message: "The credentials you entered are invalid.",
      });
    }

    // create user session and generate access and refresh tokens
    const { accessToken, refreshToken, session } = await createUserSession(
      user,
      req.clientIp,
      req.headers["user-agent"]
    );

    // base config for sending cookie
    const baseCookieConfig = { httpOnly: true, secure: true };

    // send access_token and refresh_token in res.cookie object
    res.cookie("access_token", accessToken, {
      ...baseCookieConfig,
      maxAge: process.env.ACCESS_TOKEN_EXPIRES,
    });

    res.cookie("refresh_token", refreshToken, {
      ...baseCookieConfig,
      maxAge: process.env.REFRESH_TOKEN_EXPIRES,
    });

    res
      .status(200)
      .json({ success: true, message: "User logged in successfully.", user });
  } catch (error) {
    console.error("Error logging in:", error);

    res.status(500).json({
      success: false,
      message: "User login failed. Try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export const logout = async (req, res) => {
  try {
    const userSession = await clearUserSession(req.user.sessionId);

    // clear cookies
    res.clearCookie("access_token");
    res.clearCookie("refresh_token");

    // session didn't exist (already expired/deleted)
    if (!userSession) {
      res.status(204).end();
    }

    // successfully logged out
    return res.status(200).json({
      success: true,
      message: "You have been logged out successfully.",
    });
  } catch (error) {
    console.error("Error logging out:", error);

    res.status(500).json({
      success: false,
      message: "User logout failed. Try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
