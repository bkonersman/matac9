var bs = require("browser-sync").create();

// .init starts the server
bs.init({

    server: ".",
    port: process.env.PORT,
    host: '0.0.0.0'
});

bs.watch("*.html").on("change", bs.reload);