const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("LooK mama dara asche, tor giya nai jama, Tui pocha mama")
})
const users = [
    { id: 1, name: "kamran", email: 'kamran@gmail.com', phone: '013130002221' },
    { id: 2, name: "jarman", email: 'jarman@gmail.com', phone: '013130002224' },
    { id: 3, name: "arman", email: 'arman@gmail.com', phone: '013130002225' },
    { id: 4, name: "Bonda Ali", email: 'ali@gmail.com', phone: '013130002266' },
    { id: 5, name: "Kamal", email: 'kamal@gmail.com', phone: '013130002227' },
    { id: 6, name: "jamal", email: 'jamal@gmail.com', phone: '013130002229' },
    { id: 7, name: "bamal", email: 'bamal@gmail.com', phone: '013130002228' }
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }


});

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user)
});
app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
});

app.listen(port, () => {
    console.log("mama", port)
});