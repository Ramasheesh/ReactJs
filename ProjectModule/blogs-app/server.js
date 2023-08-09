const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const PORT = 8000 || 5000;

// middleware
// we have use body parser but now it is buield in middleware
// function of express its passes incomming of payload
app.use(express.json({ extended: false }));

const withDb = async (operations ,res)=>{
  try {
    const dburl = "mongodb://127.0.0.1:27017/";
    const client = await MongoClient.connect(dburl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("MernBlogs");
    await operations(db)
    client.close();
  } catch (error) {
    console.log('error: ', error);
    
    // res.status(500).json({ Error: error });
  }
}
app.get("/api/articles/:name", async (req, res) => {
    withDb(async (db)=>{
      const articleName = req.params.name;
      const articlesCollection = db.collection("articles");
      const articlesInfo = await articlesCollection.findOne({
        name: articleName,
      }); // Use articleName variable
      if (articlesInfo) {
        res.status(200).json(articlesInfo);
      } else {
        res.status(404).json({ message: "Article not found" });
      }
    })
    
});

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { userName, text } = req.body;
  const articlesName = req.params.name;
  withDb(async (db)=>{
    const articlesInfo = await db.collection("articles").findOne({name: articlesName});
    console.log('articlesInfo: ', articlesInfo);
    await db.collection("articles").updateOne({name: articlesName},{$set:{
        comments: articlesInfo.comments.concat({userName , text})
      }
    })
    const updateArticlesInfo = await db.collection("articles").findOne({name: articlesName});
    console.log('updateArticlesInfo: ', updateArticlesInfo);
    res.status(200).json(updateArticlesInfo);
  },res)
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
