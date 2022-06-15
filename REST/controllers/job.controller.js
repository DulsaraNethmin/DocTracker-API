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
    async addNewdeliveries(req,res){
        var deliveries=req.body["deliveries"];
        console.log(deliveries);
       try{ for(i=0;i<deliveries.length;i++){
            var validate_result=await sequelize.query(`select * from deliveries 
            where doc_id='${deliveries[i]["doc_id"]}' and is_completed=${false}`);
            console.log(validate_result.length);
            if(validate_result.length!=0){
                throw "already in queue"
                //res.status(401).send("doc alread in the queue.");
            }
            var response=await delivery.create({
                "end_customer_id":deliveries[i]["end_customer"],
                "doc_id":deliveries[i]["doc_id"],
                "is_completed":false,
                "job_id":req.body.job_id
            });
        }
        res.status(201).send("deliveries added.");
    }catch(e){
            if(e == "already in queue")
                res.status(401).send(e);
            else{
                console.log(e);
                res.status(400).send(e);
                }

        }
    }
}