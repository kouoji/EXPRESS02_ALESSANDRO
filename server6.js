const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log('Servidor no ar mano!!!')
});

const funcoes = require('./functions')

app.get('/',(req,res)=>{
    res.send('Teste de com arquivos externos')
})

//rota para função add
app.get('/add/:a/:b',(req,res)=> {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    const resultado = funcoes.add(a,b);

    res.send(`A soma de ${a} com ${b} é ${resultado}`);
})

//rota para função sub
app.get('/sub/:a/:b',(req,res)=> {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    const resultado = funcoes.sub(a,b);

    res.send(`A subtração de ${a} por ${b} é ${resultado}`);
})

//rota para função mul
app.get('/mul/:a/:b',(req,res)=> {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    const resultado = funcoes.mul(a,b);

    res.send(`A multiplicação de ${a} por ${b} é ${resultado}`);
})

//rota para função div
app.get('/div/:a/:b',(req,res)=> {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    try {
        const resultado = funcoes.div(a,b);
        res.send(`A divisão de ${a} por ${b} é ${resultado}`);
    } catch (error) {
        res.send(`Erro: ${error.message}`);
    }
})