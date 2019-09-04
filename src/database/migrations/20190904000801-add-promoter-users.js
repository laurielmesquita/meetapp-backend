module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'promoter', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'promoter')
  }
}
