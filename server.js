var mysql = require("mysql");
var inquirer = require("inquirer")
var dataArr = [];

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].product + " | $ " + res[i].price)
        }
        dataArr = res;
        ItemPurchase();
    });
}

function ItemPurchase() {
    inquirer.prompt([
        {
            name: "id",
            message: "Which Item Would You Like To Purchase?:",
            validate: function (value) {
                if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 12) {
                    return true;
                }
                return false;
            }
        }, {
            name: "quantity",
            message: "How Many Would You Like To Purchase?",
        }])
        .then(function (answers) {
        if (parseInt(answers.quantity) > dataArr[answers.id - 1].quantity) {
            console.log("Insufficient Quantity! There are only " + dataArr[answers.id - 1].quantity + " left in stock!")
            ItemPurchase();
        } else {
            console.log("Order Placed!")
            var newInv = parseInt(dataArr[answers.id - 1].quantity - answers.quantity);
            var total = (parseInt(answers.quantity) * (dataArr[answers.id - 1].price));
            updateProduct(newInv, answers.id, total);
            connection.end()
        }
    })
}

function updateProduct(update, place, num) {
    connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                quantity: update
            },
            {
                id: parseInt(place)
            }
        ],
        function (err, res) {
        }
    ); totalAmt(num);
}

function totalAmt(amount) {
    console.log("Your Total Spent Is: " + amount);
}