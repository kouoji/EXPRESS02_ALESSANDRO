const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log('Servidor em execução')
});

//rotas com paramêtros

app.get('/',(req,res)=>{
    res.send('Olá, mundo!')
})

//Rota com um parâmetro
app.get('/ola/:nome',(req,res)=>{
    console.log(req,params.nome)
    res.send('Olá'+req.params.nome)
} )
//rota com dois parametrios
app.get('/ola:nome/:empresa',(req,res)=>{
    res.send('Ola' + req.params.nome+"da empresa"+req.params.empresa)
})

//rota com soma de dois parametros
app.get('/soma/:a/:b',(req,res)=>{
    res.send('O resultado da soma de: '+req.params.a + 'é:'+ req.params.b + 'e' + (parseInt(req,params.b)))
})