

const express = require("express");
const router = express.Router();
var Todo = require('../../models/todo');
/**
 * @swagger
 * /todo:
 *   post:
 *     summary: Add new records in todo list
 *     description: "This API is for Adding new records in todo list"
 *     tags: [Todo]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: This contains Detail of Brands as JSON Object.
 *         in: body
 *         required: true
 *         schema:
 *          type: object
 *          required:
 *            - task
 *          properties:
 *            task:
 *              type: string
 *     responses:
 *       200:
 *         description: This contain to the success message
 *         schema:
 *           type: object
 *           properties:      
 *            message:
 *              type: string
 *       426:
 *         description: "Indicate that version in header is not supported"
 *       400:
 *         description: "Indicate body parameters are not valid."
 *       401:
 *         description: "User don't have permissions to execute this API or token is not valid"
 *       498:
 *         description: "Indicate Auth token is invalid or Expired"
 */


 router.post("/", (req, res, next) => {
   
  let data=req.body;
  let response={};
  data.created_by=1;

  response.status=res.statusCod;
   Todo.addNew(data, (err, post) => {
     if (err) {
      res.send('error:' + err);
     } else
     response.message="success";
     response.status=true;
     response.data="";
     res.send(response);
   });
 });


/**
   * @swagger
   * /todo:
   *   get:
   *     summary: List all todos
   *     description: List all todo as an JSON array
   *     tags: [Todo]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: "successful operation"

   */

router.get('/', (req, res) => {
   let response={}
        Todo.getAll(function(err, result) {
           if (err) {throw err;} 
           else {
            response.message="success";
            response.status=true;
            response.data=result;

            res.send(response);
           }
       });
      });

/**
 * @swagger
 * /todo/{id}:
 *   get:
 *     summary: get todos by id
 *     description: This API is used to get Tax detail.
 *     tags: [Todo]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: todo id of list to be retrieved.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Response contains Category details.
 *         schema:
 *          $ref: '#/definitions/Category'
 *       426:
 *         description: "Indicate that version in header is not supported"

 *       401:
 *         description: "User don't have permissions to execute this API or token is not valid"

 *       498:
 *         description: "Indicate Auth token is invalid or Expired"

 */

 router.get('/:id', (req, res) => {
   let response={}
   Todo.getByID(req.params.id, (err, result) => {
      if (err) {throw err;} 
      else {
       response.message="success";
       response.status=true;
       response.data=result;
       res.send(response);
      }
  });
});

/**
 * @swagger
 * /todo/{id}:
 *   put:
 *     summary: update todo by id
 *     description: This API is for updating.
 *     tags: [Todo]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: Application Version.
 *         in: body
 *         required: true
 *         schema:
 *          type: object
 *          required:
 *            - status
 *          properties:
 *            status:
 *              type: string
 *       - name: id
 *         description: id of todo to be updated.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Response contain success message.
 *         schema:
 *           type: object
 *           properties:
 *            message:
 *              type: string
 *       426:
 *         description: "Indicate that version in header is not supported"

 *       404:
 *         description: "Indicate driver_id is not valid."

 *       401:
 *         description: "User don't have permissions to execute this API or token is not valid"

 *       498:
 *         description: "Indicate Auth token is invalid or Expired"

 */

 
router.put('/:id', (req, res) => {
 let response={}
   Todo.update(req.body,req.params.id, (err, result) => {
      if (err) {throw err;} 
      else {
       response.message="updated successfully";
       response.status=true;
       response.data="";
       res.send(response);
      }
  });
});

/**
 * @swagger
 * /todo/{id}:
 *   delete:
 *     summary: List all todo
 *     description: This API is for deleting Tax in database.
 *     tags: [Todo]
 *     produces:
 *       - application/json
 *     parameters:

 *       - name: id
 *         description: id of todo to be deleted.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Response contain success message.
 *         schema:
 *           type: object
 *           properties:
 *            message:
 *              type: string
 *       426:
 *         description: "Indicate that version in header is not supported"

 *       404:
 *         description: "Indicate driver_id is not valid."

 *       401:
 *         description: "User don't have permissions to execute this API or token is not valid"

 *       498:
 *         description: "Indicate Auth token is invalid or Expired"

 */

router.delete('/:id', (req, res) => {
   let response={}
   Todo.delete(req.params.id, (err, result) => {
      if (err) {throw err;} 
      else {
       response.message="deleted successfully";
       response.status=true;
       response.data="";
       res.send(response);
      }
  });
});

 module.exports = router;
