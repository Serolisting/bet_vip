const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Simulação de base de dados de usuários com senhas hasheadas
let users = [
  { username: 'vasco', password: '$2b$10$zWjm8j.G6LsMQB43aq8LXeV10bODI1yVp7Bx15Ow7gtIwaZABYzXa' }, // senha: super123
  { username: 'Assana', password: '$2b$10$AA8E9DScOZ/DMSZ38pSZsefhw9lJADUowL4PMNTT/EBbx6dnw6qG2' }, // senha: top456
  { username: 'miguel', password: '$2b$10$dKSRkOZPHEJ/lpWaVJ/xRebkIMymk6TEGhM9G3frNGS/9Hy0D1gKm' }, // senha: senha789
];

// Rota para o login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Encontra o usuário na "base de dados"
  const user = users.find(user => user.username === username);

  if (user && await bcrypt.compare(password, user.password)) {
    // Se o login for bem-sucedido
    res.json({ message: 'Login bem-sucedido', success: true });
  } else {
    // Se falhar
    res.status(401).json({ message: 'Usuário ou senha incorretos!', success: false });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
