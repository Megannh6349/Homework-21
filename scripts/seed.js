const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:3000');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("Connection Successful!");
});

const bookSeed = [
    {
        authors: [""],
        _id: "",
        googleId: "",
        title: "",
        subtitle: "",
        link:
            "",
        description:
            "",
        image:
            ""
    },
    {
        authors: [""],
        _id: "",
        googleId: "",
        title: "",
        subtitle: "",
        link:
            "",
        description:
            "",
        image:
            ""
    },
    {
        authors: [""],
        _id: "",
        googleId: "",
        title: "",
        subtitle: "",
        link:
            "",
        description:
            "",
        image:
            ""
    },
    {
        authors: [""],
        _id: "",
        googleId: "",
        title: "",
        subtitle: "",
        link:
            "",
        description:
            "",
        image:
            ""
    }
];

async function seed() {
    await mongoose
        .connect(
            MONGODB_URI,
            options
        )
        .then(() => {
            console.log("Connected to database");
        })
        .catch(err => {
            console.log("Error", err);
        });
        
    // will need this eventually
    // for (let book of bookSeed) {
    //         title: book.title,
    //         subtitle: book.subtitle,
    //         authors: book.authors,
    //         link: book.link,
    //         description: book.description,
    //         image: book.image,
    //         googleId: book.googleId
    // }

    mongoose.disconnect();

    console.info("Seed: Done!");
}

seed();