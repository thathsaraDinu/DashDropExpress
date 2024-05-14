const Ticket = require("./model");

const getTickets = (req, res, next) => {
  Ticket.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

const addTicket = (req, res, next) => {
  const ticket = new Ticket({
    id: req.body.id,
    cname: req.body.cname,
    inquery: req.body.inquery,
    date: req.body.date,
  });

  ticket
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

const updateTicket = (req, res, next) => {
  const id = req.body.id;
  const cname = req.body.cname;
  const inquery = req.body.inquery;
  const date = req.body.date;

  Ticket.updateOne(
    { id: id },
    {
      $set: {
        cname: cname,
        inquery: inquery,
        date: date,
      },
    }
  )
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

const deleteTicket = (req, res, next) => {
  const id = req.body.id;

  Ticket.deleteOne({ id: id })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

exports.getTickets = getTickets;
exports.addTicket = addTicket;
exports.updateTicket = updateTicket;
exports.deleteTicket = deleteTicket;
