const {createServer} = require('net');

const server = createServer(conn => {
  conn.on('data', data => {
    const asString = data.toString();
    console.log(asString);
  });

  conn.on('error', err => {
    console.error(err);
  });

  conn.on('end', () => {
    console.info('connection end');
  });

  conn.on('close', () => {
    console.info('connection close');
  });
});

server.listen(3000, () => {
  console.log('Listening on port 3000');
});
