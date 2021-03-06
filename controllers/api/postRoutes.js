const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  console.log("reached /api/posts route", req.body);
  console.log("req.session.user_id", req.session.user_id);
  Post.create({
    ...req.body,
    user_id: req.session.user_id,
  })
    .then((newPost) => {
      console.log("newPost", newPost);
      res.json(newPost);
    })
    .catch((err) => {
      console.log("erro creating the new post :::: ", err);
    });
  //     console.log("newPost", newPost)
  //     res.status(200).json(newPost);
  //   } catch (err) {
  //     res.status(400).json(err);
  //   }
});




router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  console.log(req.body)
  try {
    const [putData] = await Post.update({...req.body}, {where: {id: req.params.id}}
    );
    console.log(putData)
    if (!putData) { 
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
