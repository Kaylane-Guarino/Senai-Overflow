const User = require("../models/User");


module.exports = {
    index(req, res) {
        const posts = [{
            author: {
                name: "Fulano",
            },
            created_at: "10/10/2021",
            title: "Este é um post sobre JS",
            description: "JS é uma linguagem de programação muito top",
            image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            gist: "https://github.com.br/",
            categories: [
                "JS", "Back-end", "Express"
            ],
            coments: [
                {
                    author: {
                        name: "Ciclano",
                    },
                    created_at: "11/10/2021",
                    description: "Realmente JS é muito legal"
                }
            ]
        }];

        res.send(posts);
    },

    find(req, res) {

    },

    async store(req, res) {
        const{title, description, gist} = req.body;

        const {userId} = req;

        let user = await User.findByPk(userId);

        if(!user)
            return res.status(404).send({ error: "Aluno não encontrado" });
        
        let post = await user.createPost({
            title,
            description,
            gist,
            image: req.file.fileName
        });

        res.status(201).send(post);

    },

    update(req, res) {

    },

    delete(req, res) {

    }
}