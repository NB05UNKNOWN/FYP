const model = require('../models/IEmodel');

//get categories
//post: http://localhost:8080/api/categories
async function create_Categories(req, res) {
  const Create = new model.Categories({
    type: 'Investment',
    color: '#FCBE44',
  });

  await Create.save(function (err) {
    if (!err) return res.json(Create);
    return res
      .status(400)
      .json({ message: `Error whild creating categories ${err}` });
  });
}

//get: http://localhost:8080/api/categories
async function get_Categories(req, res) {
  let data = await model.Categories.find({});

  let filter = await data.map((v) =>
    Object.assign({}, { type: v.type, color: v.color })
  );
  return res.json(filter);
}

//post: http://localhost:8080/api/transaction
async function create_Transaction(req, res) {
  if (!req.body) return res.status(400).json('Post HTTP Data not Provided');
  let { name, type, amount } = req.body;

  const create = await new model.Transaction({
    name,
    type,
    amount,
    date: new Date(),
  });

  create.save(function (err) {
    if (!err) return res.json(create);
    return res
      .status(400)
      .json({ message: `Erro while creating transaction ${err}` });
  });
}

//get: http://localhost:8080/api/transaction
async function get_Transaction(req, res) {
  let data = await model.Transaction.find({});
  return res.json(data);
}

//delete: http://localhost:8080/api/transaction
async function delete_Transaction(req, res) {
  if (!req.body) res.status(400).json({ message: 'Request body not Found' });
  await model.Transaction.deleteOne(req.body, function (err) {
    if (!err) res.json('Record Deleted...!');
  })
    .clone()
    .catch(function (err) {
      res.json('Error while deleting Transaction Record');
    });
}

//get: http://localhost:8080/api/labels
async function get_Labels(req, res) {
  model.Transaction.aggregate([
    {
      $lookup: {
        from: 'categories',
        localField: 'type',
        foreignField: 'type',
        as: 'categories_info',
      },
    },
    {
      $unwind: '$categories_info',
    },
  ])
    .then((result) => {
      let data = result.map((v) =>
        Object.assign(
          {},
          {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categories_info['color'],
          }
        )
      );
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json('Lookup Collection Error');
    });
}

//get Income
//post: http://localhost:8080/api/income
async function create_Income(req, res) {
  const Create = new model.Income({
    type: 'Active Income',
    color: '#90EE90',
  });
  await Create.save(function (err) {
    if (!err) return res.json(Create);
    return res
      .status(400)
      .json({ message: `Error while creating Income ${err}` });
  });
}

//get: http://localhost:8080/api/income
async function get_Income(req, res) {
  let data = await model.Income.find({});
  let Ifilter = await data.map((v) =>
    Object.assign({}, { type: v.type, color: v.color })
  );
  return res.json(Ifilter);
}

//post: http://localhost:8080/api/source
async function create_Source(req, res) {
  if (!req.body) return res.status(400).json('Post HTTP DAata not provided');
  let { name, type, amount } = req.body;

  const create = await new model.Source({
    name,
    type,
    amount,
    date: new Date(),
  });

  create.save(function (err) {
    if (!err) return res.json(create);
    return res
      .status(400)
      .json({ message: `Error while creating a source ${err}` });
  });
}

//get: http://localhost:8080/api/source
async function get_Source(req, res) {
  let data = await model.Source.find({});
  return res.json(data);
}

//delete: http://localhost:8080/api/Source
async function delete_Source(req, res) {
  if (!req.body) res.status(400).json({ message: 'Request body not Found' });
  await model.Source.deleteOne(req.body, function (err) {
    if (!err) res.json('Record Deleted...!');
  })
    .clone()
    .catch(function (err) {
      res.json('Error while deleting Source Record');
    });
}

//get: http://localhost:8080/api/labelsIncome
async function get_labelsIncome(req, res) {
  model.Source.aggregate([
    {
      $lookup: {
        from: 'incomes',
        localField: 'type',
        foreignField: 'type',
        as: 'Incomes_info',
      },
    },
    {
      $unwind: '$Incomes_info',
    },
  ])
    .then((result) => {
      let data = result.map((v) =>
        Object.assign(
          {},
          {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.Incomes_info['color'],
          }
        )
      );
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json('Looup Collection Error');
    });
}

module.exports = {
  create_Categories,
  get_Categories,
  create_Transaction,
  get_Transaction,
  delete_Transaction,
  get_Labels,
  create_Income,
  get_Income,
  create_Source,
  get_Source,
  delete_Source,
  get_labelsIncome,
};
