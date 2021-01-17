const { startServer, chai, collection } = require('./setup');

describe('GET /todos', function () {
  let server;

  before(function () {
    server = startServer();
  });

  it('returns status code 200', function () {
    return chai
      .request(server)
      .get('/todos')
      .then((res) => {
        res.should.have.status(200);
      });
  });

  it('returns the todos in JSON format', function () {
    return chai
      .request(server)
      .get('/todos')
      .then((res) => {
        res.should.be.json;

        res.body.should.be.an('array');
        res.body.should.deep.equal(collection.getTodos());
      });
  });

  after(function () {
    server.close();
  });
});
