import { Router } from 'express';
import db from '../my_db'
// import table from "../table";


let router = Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
  if (id) {
    db.GetBlog(id).then(results => {
      res.send(results)
    })
  } else {
    db.GetBlogs().then(results => {
      res.send(results);
    });
  }
});



router.post("/", (req, res) => {
    db.PostBlog(req.body.title, req.body.content);
    // console.log("req.body = ", req.body.text);
    console.log("req.body = ", req.body);
    //   console.log('req.body.text = ', req.body.text)
    // console.log('router.post() ... ... title = ', title);
    // console.log('router.post() ... ... content = ', content);
    res.status(200);
    res.redirect("/");
  });

export default router;