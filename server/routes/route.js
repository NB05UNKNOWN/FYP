const routes = require('express').Router();
const IEcontroller = require('../controller/IEcontroller');
const { Categories } = require('../models/IEmodel');
const usercontroller = require('../controller/usercontroller');

routes
  .route('/api/categories')
  .post(IEcontroller.create_Categories)
  .get(IEcontroller.get_Categories);

routes
  .route('/api/transaction')
  .post(IEcontroller.create_Transaction)
  .get(IEcontroller.get_Transaction)
  .delete(IEcontroller.delete_Transaction);

routes.route('/api/labels').get(IEcontroller.get_Labels);

routes
  .route('/api/income')
  .post(IEcontroller.create_Income)
  .get(IEcontroller.get_Income);

routes
  .route('/api/source')
  .post(IEcontroller.create_Source)
  .get(IEcontroller.get_Source)
  .delete(IEcontroller.delete_Source);

routes.route('/api/labelsIncome').get(IEcontroller.get_labelsIncome);

routes.route('/api/user').get(usercontroller.getAllUser);

routes.route('/api/user/signup').post(usercontroller.signup);

routes.route('/api/user/login').post(usercontroller.login);

module.exports = routes;
