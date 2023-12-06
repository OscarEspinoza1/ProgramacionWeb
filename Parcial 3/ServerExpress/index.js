const express = require('express');
const cors = require('cors')
const mysql2 = require('mysql2')
const app = express();
const { jsPDF } = require("jspdf");
const fs = require('fs');
const path = require('path');

app.use(cors());

//create connection database
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
   // password:'',
    port:'3306',
    database: 'simpsons_database'
})

//Consulta todos los personajes
app.get('/', (req, res) => {
    console.log(req.query.id_personaje);
    let consulta = ''
    if (typeof (req.query.id_personaje) == 'undefined') {
        consulta = `select * from personajes`
    } else {
        consulta = `select * from personajes where id_personaje=${req.query.id_personaje}`
    }
    console.log(consulta);

    connection.query(
        consulta,
        function (err, results, fields) {
            if (results.length == 0) {
                res.json({ mensaje: "Este personaje no esta registrado" });
            }
            else {
                res.json(results);
            }
        }
    );
});

//Consulta un personaje
app.get('/personajes', (req, res) => {
    console.log(req.query.id_personaje);
    let consulta = ''
    if (typeof (req.query.id_personaje) == 'undefined') {
        consulta = `SELECT * FROM personajes`;
    }
    else {
        consulta = `SELECT * FROM personajes WHERE id_personaje = ${req.query.id_personaje}`;
    }
    console.log(consulta)
    connection.query(
        consulta,
        function (err, results, fields) {
            if (results.length == 0) {
                res.json({
                    status: 0,
                    mensaje: "Este personaje no esta registrado, intente con otro ID por favor",
                    datos: {}
                });
            }
            else {
                res.json({
                    status: 1,
                    mensaje: "Personaje encontrado exitosamente",
                    datos: (results.length == 1) ? results[0] : results
                });
            }
        }
    )
});

//eliminacion de registro
app.delete('/personajes', (req, res) => {
    console.log(req.query.id_personaje);
    let sentenciaSQL = ''
    if (typeof (req.query.id_personaje) == 'undefined') {
        res.json({
            status: 0,
            mensaje: "Ingresa el ID de el personaje que deseas borrar",
            datos: {}
        });
    }
    else {
        sentenciaSQL = `DELETE FROM personajes WHERE id_personaje = ${req.query.id_personaje}`;
    }
    console.log(sentenciaSQL);
    connection.query(
        sentenciaSQL,
        function (err, results, fields) {
            console.log(results);
            if (results.affectedRows == 1) {
                res.json({
                    status: 1,
                    mensaje: "Personaje eliminado",
                    datos: {}
                });
            }
            else {
                res.json({
                    status: 0,
                    mensaje: "Este personaje no esta registrado, intente con otro ID por favor",
                    datos: {}
                });
            }
        }
    )
});

//agregacion
app.post('/personajes', (req, res) => {
    console.log(req.query);
    let sentenciaSQL = '';
    if (typeof (req.query.nombre) == 'undefined' || typeof (req.query.apellido) == 'undefined' || typeof (req.query.ocupacion) == 'undefined') {
        res.json({
            status: 0,
            mensaje: "Llena correctamente todos los campos",
            datos: {}
        });
    }
    else {
        sentenciaSQL = `INSERT INTO personajes (nombre, apellido, ocupacion) VALUES ('${req.query.nombre}', '${req.query.apellido}', '${req.query.ocupacion}')`;
        console.log(sentenciaSQL);
        connection.query(
            sentenciaSQL,
            function (err, results, fields) {
                console.log(results);
                if (results && results.affectedRows == 1) {
                    res.json({
                        status: 1,
                        mensaje: "Personaje agregado",
                        datos: {}
                    });
                } else {
                    res.json({
                        status: 0,
                        mensaje: "Hubo un error a la hora de agregar al personaje, intenta de nuevo",
                        datos: {}
                    });
                }
            }
        )
    }
});

//modificacion
app.put('/personajes', (req, res) => {
    console.log(req.query);
    let sentenciaSQL = '';
    if (typeof (req.query.id_personaje) == 'undefined' || typeof (req.query.apellido) == 'undefined' || typeof (req.query.ocupacion) == 'undefined') {
        res.json({
            status: 0,
            mensaje: "Completa todos los campos por favor",
            datos: {}
        });
    }
    else {
        sentenciaSQL = `UPDATE personajes SET nombre = '${req.query.nombre}', apellido = '${req.query.apellido}', ocupacion = '${req.query.ocupacion}' WHERE id_personaje = ${req.query.id_personaje}`;
        console.log(sentenciaSQL);
        connection.query(
            sentenciaSQL,
            function (err, results, fields) {
                console.log(results);
                if (results && results.affectedRows == 1) {
                    res.json({
                        status: 1,
                        mensaje: "Registro modificado exitosamente",
                        datos: {}
                    });
                } else {
                    res.json({
                        status: 0,
                        mensaje: "Hubo un error al modificar el personaje",
                        datos: {}
                    });
                }
            }
        )
    }
});

//formulario pdf
app.get('/personajes/formato', (req, res) => {
    let doc = new jsPDF();
    doc.setFontSize(12);
    const nombre = req.query.nombre;
    const apellido = req.query.apellido;
    const ocupacion = req.query.ocupacion;
    doc.text('Nombre:', 10, 10);
    doc.text(nombre, 10, 20);
    doc.text('Apellido:', 10, 40);
    doc.text(apellido, 10, 50);
    doc.text('Ocupacion:', 10, 70);
    doc.text(ocupacion, 10, 80);
    let archivoPDF = path.join('C:\\wamp64\\www\\ProgramacionWeb\\Parcial 3\\formulario\\elPDF', 'consulta.pdf');
    doc.save(archivoPDF, function (err) {
        if (err) {
            return res.sendStatus(500);
        }
        res.download(archivoPDF);
    });
});

app.listen(8082,(req,res)=>{
    console.log("Servidor express corriendo en  puerto 8082")
});
