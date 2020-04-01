// * Inside `burger.js`, import `orm.js` into `burger.js`

//     * Also inside `burger.js`, create the code that will call 
//       the ORM functions using burger specific input for the ORM.

//     * Export at the end of the `burger.js` file.

module.exports = function(sequelize, DataTypes) {

    const Burger = sequelize.define('Burger', {
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN, 
            defaultValue: false,
    }});

    return Burger;
}

