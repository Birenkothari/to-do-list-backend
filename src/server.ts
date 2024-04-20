import app from "./app";

console.log("App is Running on port: ", app.get("port"));
console.log("Press ctrl + c to stop execution");
app.listen(app.get("port"));