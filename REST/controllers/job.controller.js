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

    async getAllOpenPendingJobs(req,res){
        var branch_id=req.query.branch_id;
       try{ 
            const[result,metadata]=await sequelize.query(
                `select j.uuid as job_id,j.customer_id as customer_id,u.name as customer_name, j.is_completed as is_job_completed,j.deliverer_id as deliverer_id,uu.name as deliverer
                from jobs j, users u,users uu
                where j.branch_id='${branch_id}' and j.customer_id = u.uuid and  (j.is_completed=${0} or j.is_completed=${1})  and uu.uuid=j.deliverer_id`
            );
            console.log(result);
            res.status(201).send(result);
        }catch(e){
            console.log(e);
            res.status(400).send("error");
        }
    },

    async getAllOpenDeliveries(req,res){
        var branch_id=req.query.branch_id;
       try{ 
            const[result,metadata]=await sequelize.query(
                `select j.uuid as job_id,j.customer_id as customer_id,u.name as customer_name, j.is_completed as is_job_completed, d.uuid as delivery_id, d.doc_id as doc_id, 
                 doc.doc_name as doc_name, d.end_customer_id as end_custmer_id, uu.name as end_customer_name, d.is_completed as is_delivery_completed
                from jobs j, users u, deliveries d, documents doc,users uu
                where j.branch_id='${branch_id}' and j.uuid=d.job_id and j.customer_id = u.uuid and  d.is_completed=${0} and  d.doc_id=doc.uuid and uu.uuid=d.end_customer_id`
            );
            console.log(result);
            res.status(201).send(result);
        }catch(e){
            console.log(e);
            res.status(400).send("error");
        }
    },

    async getAllPendingDeliveries(req,res){
        var branch_id=req.query.branch_id;
       try{ 
            const[result,metadata]=await sequelize.query(
                `select j.uuid as job_id,j.customer_id as customer_id,u.name as customer_name, j.is_completed as is_job_completed, d.uuid as delivery_id, d.doc_id as doc_id, 
                 doc.doc_name as doc_name, d.end_customer_id as end_custmer_id, uu.name as end_customer_name, d.is_completed as is_delivery_completed
                from jobs j, users u, deliveries d, documents doc,users uu
                where j.branch_id='${branch_id}' and j.uuid=d.job_id and j.customer_id = u.uuid and  d.is_completed=${1} and  d.doc_id=doc.uuid and uu.uuid=d.end_customer_id`
            );
            console.log(result);
            res.status(201).send(result);
        }catch(e){
            console.log(e);
            res.status(400).send("error");
        }
    },

    async getAllFinishedDeliveries(req,res){
        var branch_id=req.query.branch_id;
       try{ 
            const[result,metadata]=await sequelize.query(
                `select j.uuid as job_id,j.customer_id as customer_id,u.name as customer_name, j.is_completed as is_job_completed, d.uuid as delivery_id, d.doc_id as doc_id, 
                 doc.doc_name as doc_name, d.end_customer_id as end_custmer_id, uu.name as end_customer_name, d.is_completed as is_delivery_completed
                from jobs j, users u, deliveries d, documents doc,users uu
                where j.branch_id='${branch_id}' and j.uuid=d.job_id and j.customer_id = u.uuid and  d.is_completed=${2} and  d.doc_id=doc.uuid and uu.uuid=d.end_customer_id`
            );
            console.log(result);
            res.status(201).send(result);
        }catch(e){
            console.log(e);
            res.status(400).send("error");
        }
    },

    async getAllMyJobs(req,res){
        var deliverer_id=req.query.deliverer_id;
       try{ 
            const[result,metadata]=await sequelize.query(
                `select j.uuid as job_id,j.customer_id as customer_id,u.name as customer_name, j.is_completed as is_job_completed, d.uuid as delivery_id, d.doc_id as doc_id, 
                 doc.doc_name as doc_name, d.end_customer_id as end_custmer_id, uu.name as end_customer_name, d.is_completed as is_delivery_completed
                from jobs j, users u, deliveries d, documents doc,users uu
                where j.deliverer_id='${deliverer_id}' and j.is_completed=${1} and j.uuid=d.job_id and j.customer_id = u.uuid  and  d.doc_id=doc.uuid and uu.uuid=d.end_customer_id`
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
            where doc_id="${doc_id}" and (is_completed =${0} or is_completed=${1})`
        );
        console.log(result[0].count);
        res.status(200).send(result);
        
    }catch(e){
            console.log(e);
            res.status(400).send("error");
        }
    },

    async updateJobStateToPending(req,res){
        var job_id=req.query.job_id;
        var deliverer_id=req.query.deliverer_id;
        console.log(job_id);
       try{ 
        var newData = await job.update(
            { is_completed: 1,deliverer_id:deliverer_id },
            {
              where: {
                uuid: job_id,
              },
            }
          );
        console.log(newData);
        res.status(200).send(newData);
        
    }catch(e){
            console.log(e);
            res.status(400).send("error");
        }
    },

    async getDeliveryState(req,res){
        console.log('delivery state');
        var delivery_id=req.query.delivery_id;
       // console.log(deliveries);
       try{ 
        var [result,metadata]=await sequelize.query(
            `select is_completed as state
            from deliveries 
            where uuid="${delivery_id}"`
        );
        //console.log(result[0].count);
        res.status(200).send(result);
        
    }catch(e){
            console.log(e);
            res.status(400).send("error");
        }
    },

    async updateDeliveryStep(req,res){
        console.log('delivery step update');
        var doc_id=req.query.doc_id;
        var deliverer_id=req.query.deliverer_id;
       // console.log(deliveries);
       try{ 
        var [result,metadata]=await sequelize.query(
            `select j.uuid as job_id,d.uuid as delivery_id, d.is_completed as state
            from deliveries d, jobs j 
            where d.job_id=j.uuid and doc_id="${doc_id}" and j.deliverer_id = "${deliverer_id}" and (d.is_completed=${0} or d.is_completed=${2})`
        );
        console.log(result);
        if(result.length == 1){
            var state=result[0].state;
            var delivery_id = result[0].delivery_id;
            console.log(state,delivery_id);
            var newData = await delivery.update(
                { is_completed: (state+1) },
                {
                  where: {
                    uuid: delivery_id,
                  },
                }
              );
            res.status(200).send(newData);
        }else{
            res.status(401).send('bad request...');
        }
        //res.status(200).send(result);
        
    }catch(e){
            console.log(e);
            res.status(400).send("error");
        }
    },

    async updateDeliveryStep_customer(req,res){
        console.log('delivery step update');
        var doc_id=req.query.doc_id;
        var customer_id=req.query.customer_id;
       // console.log(deliveries);
       try{ 
        var [result,metadata]=await sequelize.query(
            `select j.uuid as job_id,d.uuid as delivery_id, d.is_completed as state
            from deliveries d, jobs j 
            where d.job_id=j.uuid and doc_id="${doc_id}" and d.end_customer_id = "${customer_id}" and d.is_completed=${1}`
        );
        console.log(result);
        if(result.length == 1){
            var state=result[0].state;
            var delivery_id = result[0].delivery_id;
            console.log(state,delivery_id);
            var newData = await delivery.update(
                { is_completed: (state+1) },
                {
                  where: {
                    uuid: delivery_id,
                  },
                }
              );
            res.status(200).send(newData);
        }else{
            res.status(401).send('bad request...');
        }
        //res.status(200).send(result);
        
    }catch(e){
            console.log(e);
            res.status(400).send("error");
        }

    },

    async getAllOpenPendingDeliveries(req,res){
        //console.log('delivery step update');
        var branch_id=req.query.branch_id;
       try{ 
        var [result,metadata]=await sequelize.query(
            `select j.uuid as job_id,j.customer_id as customer_id,u.name as customer_name, j.is_completed as is_job_completed, d.uuid as delivery_id, d.doc_id as doc_id, 
                 doc.doc_name as doc_name, d.end_customer_id as end_custmer_id, uu.name as end_customer_name, d.is_completed as is_delivery_completed
                from jobs j, users u, deliveries d, documents doc,users uu
                where j.branch_id='${branch_id}' and j.uuid=d.job_id and j.customer_id = u.uuid and  (d.is_completed=${0} or d.is_completed=${1} or d.is_completed=${0}) and  d.doc_id=doc.uuid and uu.uuid=d.end_customer_id`
        );
        console.log(result);
            res.status(200).send(newData);        
    }catch(e){
            console.log(e);
            res.status(400).send("error");
        }

    },
}
