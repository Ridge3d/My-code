import { Router } from "express";
import Table from "../table.js";

let router = Router();

let blogs = new Table("blogs");

//router.get("/blogs/:id?", (req, res) => {
//let id = req.params.id;
//if (id) {
//blogs.getAll().then(blogs => {
//res.json(blogs);
//});
//}
//});

//GET - read resource - retrieve the blog
router.get("/:id?", (req, res) => {
  let id = req.params.id;
  if (id) {
    blogs.getOne(id).then(blog => {
      res.json(blog);
    });
  } else {
    blogs.getAll().then(blog => {
      res.json(blogs);
    });
  }
});

//POST - create resource - create the blog
router.post("/", (req, res) => {
  blogs.insert(req.body).then(id => {
    res.json(id);
  });
});

//PUT - update resource - update the blog
router.put("/blogs:id?", (req, res) => {
  let id = req.params.id;
  blogs.update(id, req.body);
  res.json(blogs);
});

//DELETE - delete resource - delete the blog by it's id
router.delete("/blogs:id?", (req, res) => {
  blogs.delete(req.params.id);
  res.json(blogs);
});

export default router;
