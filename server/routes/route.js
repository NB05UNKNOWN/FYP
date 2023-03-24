const routes = require('express').Router();
const controller = require('../controller/IEcontroller');
const { Categories } = require('../models/IEmodel');

routes
  .route('/api/categories')
  .post(controller.create_Categories)
  .get(controller.get_Categories);

routes
  .route('/api/transaction')
  .post(controller.create_Transaction)
  .get(controller.get_Transaction)
  .delete(controller.delete_Transaction);

routes.route('/api/labels').get(controller.get_Labels);

routes
  .route('/api/income')
  .post(controller.create_Income)
  .get(controller.get_Income);

routes
  .route('/api/source')
  .post(controller.create_Source)
  .get(controller.get_Source)
  .delete(controller.delete_Source);

routes.route('/api/labelsIncome').get(controller.get_labelsIncome);

module.exports = routes;
