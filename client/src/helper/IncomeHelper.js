import _ from 'lodash';

export function getIncomeSum(source, type) {
  let IncomeSum = _(source)
    .groupBy('type')
    .map((objs, key) => {
      if (!type) return _.sumBy(objs, 'amount');
      return {
        type: key,
        color: objs[0].color,
        total: _.sumBy(objs, 'amount'),
      };
    })
    .value();
  return IncomeSum;
}

export function getIncomeLabels(source) {
  let incomeAmountSum = getIncomeSum(source, 'type');

  let Total = _.sum(getIncomeSum(source));

  let percent = _(incomeAmountSum)
    .map((objs) => _.assign(objs, { percent: (100 * objs.total) / Total }))
    .value();

  return percent;
}

export function getTotalSource(source) {
  return _.sum(getIncomeSum(source));
}
