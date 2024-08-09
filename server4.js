const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('ola povo abençoado, servidor esta no ar');
});

// dados de clientes
const clientes = [
  { id: 1, nome: 'Atamiro', telefone: '12345-6789', email: 'Alta@gmail.com' },
  { id: 2, nome: 'Berigenilda', telefone: '22222-6789', email: 'Berigenilda@gmail.com' },
  { id: 3, nome: 'Comengues', telefone: '3333-6789', email: 'Comengues@gmail.com' },
  { id: 4, nome: 'Ameingarda', telefone: '4444-6789', email: 'Ameingarda@gmail.com' },
];

// rota
app.get('/', (req, res) => {
  res.send('API do cliente');
});

// rota 2 o total de clientes
app.get('/total_clientes', (req, res) => {
  res.send('total de clientes: ' + clientes.length);
});

// rota 3 apresentar dados de um cliente especifico
app.get('/clientes/:id', (req, res) => {
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  // se o cliente não existir
  if (!cliente) res.status(404).send("Cliente não existe");

  // se o cliente existe, vamo apresentar uma frase de resposta   
  res.send(`O cliente é: ${cliente.nome}, telefone ${cliente.telefone}, email: ${cliente.email}`);
});