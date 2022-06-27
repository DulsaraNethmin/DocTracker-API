require("dotenv").config();
const { redirect } = require("express/lib/response");
const { Sequelize, sequelize } = require("../models");
const user = require("../models").User;
const organization = require("../models").Organization;
const jwt = require("jsonwebtoken");
//require('dotenv').config();

const nodemailer = require("nodemailer");

const handleErrors = (e) => {
  console.log(e.message, e.code);
  let errors = { username: "", password: "" };

  //validation errors
  if (e.message.includes("Validation error")) {
    Object.values(e.errors).forEach((error) => {
      //console.log(error.path);
      errors[error.path] = error.message;
    });
  }
  return errors;
};
module.exports = {
  async getAllUser(req, res) {
    console.log("request come");
    console.log(req.query.branch_id);
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId ,u.image_url as image_url
                from users u, branches b 
                where u.branch_id=b.uuid and u.branch_id='${req.query.branch_id}'`
      );
      res.status(200).send(result);
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
    console.log(result);
  },

  async getOneUser(req, res) {
    console.log("request come");
    var user_id = req.query.user_id;
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId,u.image_url as image_url 
                from users u, branches b 
                where  u.branch_id=b.uuid and u.uuid='${user_id}'`
      );
      //logic
      res.status(200).send(result);
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async getAUser(req, res) {
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId,u.image_url as image_url 
                from users u, branches b 
                where  u.branch_id=b.uuid and u.username='${req.body.username}' and  u.password='${req.body.password}'`
      );
      //logic
      if (result.length == 1) {
        var jwt_payload = {
          uuid: result[0].uuid,
          name: result[0].name,
        };
        var token = jwt.sign(result[0], process.env.JWT_SECRET, {
          expiresIn: "1H",
        });
        console.log(token);
        Object.assign(result[0], { token: token });
        res.status(200).send(result);
      } else {
        res.status(401).send("Unsuccessfull login");
      }
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async getACustomer(req, res) {
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId,u.image_url as image_url 
                from users u, branches b 
                where  u.branch_id=b.uuid and u.username='${req.body.username}' and  u.password='${req.body.password}' and u.role='Customer'`
      );
      //logic
      if (result.length == 1) {
        var jwt_payload = {
          uuid: result[0].uuid,
          name: result[0].name,
        };
        var token = jwt.sign(result[0], process.env.JWT_SECRET, {
          expiresIn: "1H",
        });
        console.log(token);
        Object.assign(result[0], { token: token });
        res.status(200).send(result);
      } else {
        res.status(401).send("Unsuccessfull login");
      }
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async getADeliverer(req, res) {
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId,u.image_url as image_url 
                from users u, branches b 
                where  u.branch_id=b.uuid and u.username='${req.body.username}' and  u.password='${req.body.password}' and role='Deliverer'`
      );
      //logic
      if (result.length == 1) {
        var jwt_payload = {
          uuid: result[0].uuid,
          name: result[0].name,
        };
        var token = jwt.sign(result[0], process.env.JWT_SECRET, {
          expiresIn: "1H",
        });
        console.log(token);
        Object.assign(result[0], { token: token });
        res.status(200).send(result);
      } else {
        res.status(401).send("Unsuccessfull login");
      }
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async getACustomer(req, res) {
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId,u.image_url as image_url 
                from users u, branches b 
                where  u.branch_id=b.uuid and u.username='${req.body.username}' and  u.password='${req.body.password}' and u.role='Customer'`
      );
      //logic
      if (result.length == 1) {
        var jwt_payload = {
          uuid: result[0].uuid,
          name: result[0].name,
        };
        var token = jwt.sign(result[0], process.env.JWT_SECRET, {
          expiresIn: "1H",
        });
        console.log(token);
        Object.assign(result[0], { token: token });
        res.status(200).send(result);
      } else {
        res.status(401).send("Unsuccessfull login");
      }
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async getADeliverer(req, res) {
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId,u.image_url as image_url 
                from users u, branches b 
                where  u.branch_id=b.uuid and u.username='${req.body.username}' and  u.password='${req.body.password}' and role='Deliverer'`
      );
      //logic
      if (result.length == 1) {
        var jwt_payload = {
          uuid: result[0].uuid,
          name: result[0].name,
        };
        var token = jwt.sign(result[0], process.env.JWT_SECRET, {
          expiresIn: "1H",
        });
        console.log(token);
        Object.assign(result[0], { token: token });
        res.status(200).send(result);
      } else {
        res.status(401).send("Unsuccessfull login");
      }
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async getABranchOwner(req, res) {
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId,u.image_url as image_url, o.uuid as organizationId
              from users u, branches b, organizations o 
              where  u.branch_id=b.uuid and u.username='${req.body.username}' and  u.password='${req.body.password}' and role='Branch Owner' and b.organization_id=o.uuid `
      );
      //logic
      if (result.length == 1) {
      
        //jwt
        var jwt_payload = {
          uuid: result[0].uuid,
          name: result[0].name,
        };
        var token = jwt.sign(result[0], process.env.JWT_SECRET, {
          expiresIn: "1H",
        });
        console.log(token);
        Object.assign(result[0], { token: token });
        res.status(200).send(result);
      } else {
        res.status(201).send("Unsuccessfull login");
      }
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async getAOrgOwner(req, res) {
    console.log("request come");

    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,o.name as organization,o.uuid as organizationId,o.owner as orgOwner,u.image_url as image_url 
            from users u, organizations o
            where  u.uuid=o.owner and u.username='${req.body.username}' and  u.password='${req.body.password}' and role='Organization Owner' `
      );
      //logic
      console.log(result);
      if (result.length) {
        //jwt
        var jwt_payload = {
          uuid: result[0].uuid,
          name: result[0].name,
        };
        var token = jwt.sign(result[0], process.env.JWT_SECRET, {
          expiresIn: "1H",
        });
        console.log(token);
        Object.assign(result[0], { token: token });
        res.status(200).send(result);
      } else {
        res.status(201).send("No result");
      }
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async email(req, res) {
    console.log("request come - Email");
    console.log(req.body.sendEmailStatus);
    try {
      let email = req.body.email;
      console.log(email);
      let username = req.body.username;
      console.log(username);
      let pass = req.body.password;
      console.log(pass);
      let role=req.body.role;
      const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      await transport.sendMail({
        from: process.env.MAIL_FROM,
        //to: "test@test.com",
        to: `${req.body.email}`,
        subject: `Greetings from ${req.body.organization_name}`,
        html: `<div className="email" style="
            border: 1px solid black;
            padding: 20px;
            font-family: sans-serif;
            line-height: 2;
            font-size: 20px;
            ">
            <h2>Congratulations! You are now registered with ${req.body.organization_name}</h2>
            <p>Here are your details regarding the registration.</p>
            <p>User Name: ${req.body.username}</p>
            <p>User Name: ${req.body.password}</p>
            <p>User Name: ${req.body.role}</p>
            <p>All the best, from @DocTracker Team</p>
             </div>
        `,
      });
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  // async addUser(req, res) {
  //   try {
  //     var newData = await user.create({
  //       name: req.body.name,
  //       username: req.body.username,
  //       email: req.body.email,
  //       password: req.body.password,
  //       telephone: req.body.telephone,
  //       role: req.body.role,
  //       branch_id: req.body.branch_id,
  //     });
  //     var organization_id = req.body.organization_id;
  //     console.log(newData.dataValues.uuid);
  //     // var result=await organization.update({owner:newData.dataValues.uuid},{where:{uuid:org_id}});
  //     var result = await sequelize.query(
  //       `update organizations set owner='${newData.dataValues.uuid}' where uuid='${organization_id}'`
  //     );
  //     res.status(200).send(newData.dataValues);
  //   } catch (e) {
  //     console.log("an error occured " + e);
  //     res.status(500).send("Server error");
  //   }
  // },

  async addUser(req, res) {
    try {
      var newData = await user.create({
        sendEmailStatus: req.body.sendEmailStatus,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        telephone: req.body.telephone,
        role: req.body.role,
        branch_id: req.body.branch_id,
        image_url:req.body.image_url
        
      });
      var organization_id = req.body.organization_id;
      console.log(newData.dataValues.uuid);
      // var result=await organization.update({owner:newData.dataValues.uuid},{where:{uuid:org_id}});
      var result = await sequelize.query(
        `update organizations set owner='${newData.dataValues.uuid}' where uuid='${organization_id}'`
      );

      if (req.body.sendEmailStatus) {
        //email
        console.log("request come - Email");

        let email = req.body.email;
        console.log(email);
        let username = req.body.username;
        console.log(username);
        let pass = req.body.password;
        console.log(pass);
        let role=req.body.role;
        const transport = nodemailer.createTransport({
          host: process.env.MAIL_HOST,
          port: process.env.MAIL_PORT,
          auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
          },
        });

        await transport.sendMail({
          from: process.env.MAIL_FROM,
          //to: "test@test.com",
          to: `${req.body.email}`,
          subject: `Greetings from ${req.body.organization_name}`,
          html: `<div className="email" style="
             border: 1px solid black;
             padding: 20px;
             font-family: sans-serif;
             line-height: 2;
             font-size: 20px;
             ">
             <h2>Congratulations! You are now registered with the ${req.body.organization_name}</h2>
             <p>User Name : ${req.body.username}</p>
             <p>Password : ${req.body.password}</p>
             <p>Role : ${req.body.role}</p>
 
             <p>All the best, from @DocTracker Team</p>
              </div>
         `,
        });
      }

      res.status(200).send(newData.dataValues);
    } catch (e) {
      const errors = handleErrors(e);
      res.status(201).json(errors);
    }
  },

  async getAllCustomersOfABranch(req, res) {
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId ,u.image_url as image_url
                from users u, branches b 
                where u.branch_id=b.uuid and u.branch_id='${req.query.branch_id}' and u.role='Customer'`
      );
      res.status(200).send(result);
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async getAllDelivererOfABranch(req, res) {
    console.log("request come");
    try {
      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId ,u.image_url as image_url
                from users u, branches b 
                where u.branch_id=b.uuid and u.branch_id='${req.query.branch_id}' and u.role='Deliverer'`
      );
      res.status(200).send(result);
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("Server error");
    }
  },

  async deleteUser(req, res) {
    try {
      uuid = req.query.uuid;
      var newData = await user.destroy({ where: { uuid: uuid } });
      res.status(200).send("user deleted");
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("server error");
    }
  },

  async updateProfilePic(req, res) {
    try {
      uuid = req.query.uuid;
      url = req.body.url;
      var newData = await user.update(
        { image_url: url },
        {
          where: {
            uuid: uuid,
          },
        }
      );

      var [result, metadata] = await sequelize.query(
        `select u.uuid ,u.name as name ,u.email,u.username,u.role,b.name as branch,b.uuid as branchId ,u.image_url as image_url
                from users u, branches b 
                where  u.branch_id=b.uuid and u.uuid='${uuid}'`
      );
      console.log(result);
      res.status(200).send(result);
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("server error");
    }
  },


  async updateProfile(req, res) {
    try {
      uuid = req.query.uuid;
      username = req.body.username;
      password = req.body.password;
      telephone = req.body.telephone;

      var newData = await user.update(
        { username:username,password:password,telephone:telephone },
        {
          where: {
            uuid: uuid,
          },
        }
      );
      console.log(newData);
      res.status(200).send(result);
    } catch (e) {
      console.log("an error occured " + e);
      res.status(500).send("server error");
    }
  },

  async getAdminId(req,res){
    console.log('request come');
    try{
        //var org=req.query.org_id;
        var branch=req.query.branch;
        var organization=req.query.organization;
        var [result,metadata]= await sequelize.query(
            `select u.uuid from users u, branches b,organizations o
            where u.branch_id=b.uuid and b.organization_id=o.uuid and o.name='${organization}' and b.name='${branch}' and u.role ="Branch Owner"`
        )
        console.log(result);
        if(result.length==1)
        {
            res.status(200).send(result);
        }
        else
        {
            res.status(401).send(result);
        }
        
        
    }catch(e){
        console.log('an error occured '+e)
        res.status(500).send('Server error')
    }
}, 
};