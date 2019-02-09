const server = require("./server");
const port = 9500;

 server.listen(port, () => console.log(`Listening to port ${port}`));