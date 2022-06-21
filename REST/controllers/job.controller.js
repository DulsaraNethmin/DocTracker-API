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
                is_completed:false
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
                `select j.uuid as job_id,j.customer_id as customer_id,u.name as customer_name from 
                jobs j, users u
                where j.customer_id = u.uuid and j.branch_id='${branch_id}' and j.is_completed=${false}`
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
                "is_completed":false,
                "job_id":req.body.job_id
            });
        }
        res.status(201).send("deliveries added.");
    }catch(e){
            console.log(e);
            res.status(400).send("error");
        }
    }
}