const express = require("express");
const cors = require("cors");
let app = express();

require("./subscriptionsWsServer/configs/database");

app.use(express.json());
app.use(cors());

let moviesRouter = require("./subscriptionsWsServer/Routers/moviesRouter");
let membeersRouter = require("./subscriptionsWsServer/Routers/membersRouter");
let usersRouter = require("./cinemaWsServer/Routers/usersRouter");
let permissionsRouter = require("./cinemaWsServer/Routers/permissionRouter");
let usernamesRouter = require("./cinemaWsServer/Routers/usersDbRouter");
let subscriptionsRouter = require("./cinemaWsServer/Routers/subscriptionsRouter");

app.use("/api/movies", moviesRouter);
app.use("/api/members", membeersRouter);
app.use("/api/users", usersRouter);
app.use("/api/permissions", permissionsRouter);
app.use("/api/usernames", usernamesRouter);
app.use("/api/subs", subscriptionsRouter);

app.listen(3001, () => {
  console.log("server is listening 3001");
});
