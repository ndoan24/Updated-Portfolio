//dependencies (3)
// Connect to mysql database
//connect and create mysql db 
//see what each line is doing
var connection = mysql.createConnection({
    //set host as localhost
    host: 'localhost',
    // the user is root
    user: 'root',
    //your db password
    password: 'password',
    //your db name
    database: 'dbname'
});
//connects to server
connection.connect();
//what is line 23 doing?
router.get('/', function(req, res) {
    connection.query("SELECT * FROM projects", function(err, rows, fields){
        if(err) throw err;
        res.render('index', {
            "projects": rows
        });
    });
});
//duplicate the above code to add a route
//to deails file. 
// include parameters for :id
module.exports = router;
