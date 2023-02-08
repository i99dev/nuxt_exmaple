const express = require("express");
const router = express.Router();

/**
 * for more information about github oauth
 * https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#2-users-are-redirected-back-to-your-site-by-github
 */
router.post("/github", async (req, res) => {
  const { code } = req.body;
  if (code) {
    const { access_token, token_type, scope } = await fetch(
      "https://github.com/login/oauth/access_token" +
        new URLSearchParams({
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        }),
      {
        method: "POST",
      }
    );
    res.status(200).json({
      access_token,
      token_type,
      scope,
    });
  } else {
    res.status(400).json({
      error: "code is required",
    });
  }
});

/**
 * this APi still ned to be developed
 */
