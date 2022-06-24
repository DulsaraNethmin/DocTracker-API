const { sequelize } = require('../models');

const delivery = require('../models').Delivery;
const job = require('../models').Job;

module.exports={
    
    async createNewJob(req,res){
        console.log("new request")
        try{
            var result=await job.create({
                branch_id:req.body.branch_id,
                deliverer_id:req.body.deliverer_id,
                customer_id:req.body.customer_id,
                is_completed:0
            });
            //console.log(result);
            res.status(201).send(result);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }

    },
    async getAllJobs(req,res){
        var branch_id=req.query.branch_id;
       try{ 
            const[result,metadata]=await sequelize.query(
                `select j.uuid as job_id,j.customer_id as customer_id,u.name as customer_name, j.is_completed as is_job_completed, d.uuid as delivery_id, d.doc_id as doc_id, 
                 doc.doc_name as doc_name, d.end_customer_id as end_custmer_id, uu.name as end_customer_name, d.is_completed as is_delivery_completed
                from jobs j, users u, deliveries d, documents doc,users uu
                where j.branch_id='${branch_id}' and j.uuid=d.job_id and j.customer_id = u.uuid and  j.is_completed=${0} and  d.doc_id=doc.uuid and uu.uuid=d.end_customer_id`
            );
            console.log(result);
            res.status(201).send(result);
        }catch(e){
            console.log(e);
            res.status(400).send("error");
        }
    },

    async addNewdeliveries(req,res){
        var deliveries=req.body["deliveries"];
        console.log(deliveries);
       try{ for(i=0;i<deliveries.length;i++){
            var response=await delivery.create({
                "end_customer_id":deliveries[i]["end_customer"],
                "doc_id":deliveries[i]["doc_id"],
                "is_completed":0,
                "job_id":req.body.job_id
            });
        }
        res.status(201).send("deliveries added.");
    }catch(e){
            console.log(e);
            res.status(400).send("error");
        }
    },

    async verifyNewdelivery(req,res){
        var doc_id=req.query.doc_id;
       // console.log(deliveries);
       try{ 
        var [result,metadata]=await sequelize.query(
            `select count(uuid) as count
            from deliveries 
            where doc_id="${doc_id}" and is_completed =${0}`
        );
        console.log(result[0].count);
        res.status(200).send(result);
        
    }catch(e){
            console.log(e);
            res.status(400).send("error");
        }
    }
}