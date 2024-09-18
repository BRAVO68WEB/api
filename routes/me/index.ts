import { Hono } from "hono";

import discord from "./discord.routes";
import gaming from "./gaming";
import github from "./github.routes";
import gitlab from "./gitlab.routes";
import hackthebox from "./hackthebox.routes";
import hashnode from "./hashnode.routes";
import lastfm from "./lastfm.routes";
import mastodon from "./mastodon.routes";
import spotify from "./spotify.routes";
import twitter from "./twitter.routes";
import vscode from "./vscode.routes";
import wakatime from "./wakatime.routes";

const router = new Hono();

router.route("/gaming", gaming);
router.route("/discord", discord);
router.route("/github", github);
router.route("/gitlab", gitlab);
router.route("/hackthebox", hackthebox);
router.route("/hashnode", hashnode);
router.route("/lastfm", lastfm);
router.route("/mastodon", mastodon);
router.route("/spotify", spotify);
router.route("/twitter", twitter);
router.route("/vscode", vscode);
router.route("/wakatime", wakatime);

export default router;
