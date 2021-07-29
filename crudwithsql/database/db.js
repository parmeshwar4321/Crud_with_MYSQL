const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Anand@18',
    database: 'Subhash'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

    

module.exports=connection