var createError = require("http-errors");
var express = require("express");
var logger = require("morgan");
var cors = require("cors");
var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
/*-------------------------------------- ROUTERS -------------------------------*/
/*--------------------> Tablas Maestras */
/*
const master_router = require("./routes/master_tables/router_master_tables");
 TODO: ELIMINAR si el router master table funciona*/
let profile = require("./routes/master_tables/profile");
let type = require("./routes/master_tables/type");
// let social_media = require("./routes/master_tables/social_media");

/*--------------------> Tablas Comunes */
let user = require("./routes/common_tables/user");
let portofolio = require("./routes/common_tables/porfolio");
let file = require("./routes/common_tables/file");
// let enterprise = require("./routes/common_tables/enterprise");
// let project = require("./routes/common_tables/project");
// let commentary = require("./routes/common_tables/commentary");
// let favourite = require("./routes/common_tables/favourite");
// let message = require("./routes/common_tables/message");

/*--------------------> Tablas NM */
// let user_social_media = require("./routes/nm_tables/user_social_media");
let user_profile = require("./routes/nm_tables/user_profile");
let user_portofolio = require("./routes/nm_tables/user_porfolio");
// let user_enterprise = require("./routes/nm_tables/user_enterprise");
// let user_project = require("./routes/nm_tables/user_project");
// let enterprise_social_media = require("./routes/nm_tables/enterprise_social_media");
// let enterprise_project = require("./routes/nm_tables/enterprise_project");
 
/* Router de utilidades  */
let admin = require("./routes/admin/admin_user_router");
/* Router de Files */
let files_router = require ("./routes/files/files_router");

/* -------------------------------------USO DE ROUTERS ------------------------*/
/*--> Tablas Maestras */
app.use("/profile", profile);
app.use("/type", type);
// app.use("/social_media", social_media);

/*--> Tablas Comunes */
app.use("/user", user);
app.use("/portofolio", portofolio);
app.use("/file", file);
// app.use("/enterprise", enterprise);
// app.use("/project", project);
// app.use("/commentary", commentary);
// app.use("/favourite", favourite);
// app.use("/message", message);

/*--> Tablas NM */
// app.use("/user_social_media", user_social_media);
app.use("/user_profile", user_profile);
app.use("/user_portofolio", user_portofolio);
// app.use("/user_enterprise", user_enterprise);
// app.use("/user_project", user_project);
// app.use("/enterprise_social_media", enterprise_social_media);
// app.use("/enterprise_project", enterprise_project);

/* --> FILES */
app.use("/file", files_router);

/* --> Acciones especificas de la pagina como ADMIN */
app.use("/admin", admin);
/* DEFAULT PAGE */

app.get("/", (req, res) => {
  res.send("Bienvenido a la API de CoworkinGames.");
});

// ERROR SI NO ENTRA EN NINGUN ROUTER
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // // render the error page
  // res.status(err.status || 3000);
  // res.render('error');
  throw err;
  console.trace();
});
module.exports = app;
