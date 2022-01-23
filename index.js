const express = require('express');
const User = require('./user');
const app = express();
app.use(express.json());
app.get("/users", async (req, resp)=> {
    const listUsers = await User.findAll();
    return resp.send(listUsers);
});
app.post('/user', async (req, resp) =>{
    const {body} = req;
    const {name, email, password} = body;
    const user = await User.create({
        name,
        email,
        password 
    });
    return resp.status(201).send(user);
});
router.put('/user/:id', async(req, resp) => {
    const { body } = req;
    const user = await User.update(body, 
        {where: { id: req.params.id }})
    return resp.status(200).send(user)
})
router.delete('/user/:id', async(req, resp) => {
    const user = User.destroy(
        { where: { id: req.params.id }});
    return resp.status(200).send(user)
})
app.listen(3000, ()=> console.log("server ta rodando...."))