var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazonDB"
});



  for(var i = 0; i < results.length;i++){
    console.log("ID: " + results[i].ItemID + " | " + "Product: " + results[i].ProductName + " | " + "Department: " + results[i].DepartmentName + " | " + "Price: " + results[i].Price + " | " + "Quantity: " + results[i].StockQuantity);
    
  }

  inquirer.prompt([
    {
      type: "input",
      name: "Product id",
      message: "Enter the ID of the Product",
      validate: function(value){
        if(isNaN(value) == false && parseInt(value) <= results.length && parseInt(value) > 0){
          return true;
        } else{
          return false;
        }
      }
    },
    {
      type: "input",
      name: "quantity",
      message: "How many units would you like?",
      validate: function(value){
        if(isNaN(value)){
          return false;
        } else{
          return true;
        }
      }
    }
    ]).then(function(ans){
      var whatToBuy = (ans.id)-1;
      var howMuchToBuy = parseInt(ans.quantity);
      var grandTotal = parseFloat(((results[whatToBuy].Price) * howMuchToBuy).toFixed(2));

      
      if(results[whatToBuy].StockQuantity >= howMuchToBuy){
        
        connection.query("UPDATE ProductName SET ? WHERE ?", [
        {StockQuantity: (results[whatToBuy].StockQuantity - howMuchToBuy)},
        {ItemID: ans.id}
        ], function(err, result){
            if(err) throw err;
            console.log("Success! Your total is $" + grandTotal.toFixed(2));
        });

        connection.query("SELECT * FROM DepartmentName", function(err, deptResults){
          if(err) throw err;
          var index;
          for(var i = 0; i < deptRes.length; i++){
            if(deptRes[i].DepartmentName === res[whatToBuy].DepartmentName){
              index = i;
            }
          }
          
        
          connection.query("UPDATE Departments SET ? WHERE ?", [
          {TotalSales: deptResults[index].TotalSales + grandTotal},
          {DepartmentName: results[whatToBuy].DepartmentName}
          ], function(err, deptResults){
              if(err) throw err;
             
          });
        });

      } else{
        console.log("Insufficient Quantity!");
      }

      
    })