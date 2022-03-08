const mysql = require("mysql2/promise");
const Koa = require("koa");

(async () => {
  const app = new Koa();

  app.use(async (ctx) => {
    const connection = await mysql.createConnection({
      uri: "mysql://root:admin123@mysql:3306",
    });
    const [result] = await connection.query("show databases");
    console.log(result);
    ctx.response.body = result;
  });

  app.listen(3000, () => console.log("app is running on port 3000"));
})();
