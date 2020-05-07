const groups = [
  require('./config/reset'),
  require('./config/content'),
  require('./config/positioning'),
  require('./config/display'),
  require('./config/list'),
  require('./config/flexbox'),
  require('./config/grid'),
  require('./config/alignment'),
  require('./config/order'),
  require('./config/box-model'),
  require('./config/visibility'),
  require('./config/typography'),
  require('./config/background'),
  require('./config/transformation'),
  require('./config/animation')
];

module.exports = {
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'order/properties-order': [
      groups,
      {
        severity: 'warning'
      }
    ]
  }
};
