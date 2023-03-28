
const express = require("express");
const app = express();
const port = 3650;
const Razorpay = require('razorpay');

var orderId ;

var instance = new Razorpay({
  key_id: 'rzp_test_6SVZoE1I1DBdxO',
  key_secret: 'VcbuVZ7Jx6IFAWPKvkVHBf20',
  });

  instance.orders.create({
    amount: 50000,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
      key1: "value3",
      key2: "value2"
    }
  })



app.listen(3650, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/create/orderId",(req,res)=> {
  console.log("Create Orderid Request",req.body);
  var options = {
    amount: 50000,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  instance.orders.create(options, function(err, order) {
    console.log(order);
    res.send({orderId : order.id});
  });
  
})

app.post("/api/payment/verify",(req,res)=>{

  let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
 
   var crypto = require("crypto");
   var expectedSignature = crypto.createHmac('sha256', 'VcbuVZ7Jx6IFAWPKvkVHBf20')
                                   .update(body.toString())
                                   .digest('hex');
                                   console.log("sig received " ,req.body.response.razorpay_signature);
                                   console.log("sig generated " ,expectedSignature);
   var response = {"signatureIsValid":"false"}
   if(expectedSignature === req.body.response.razorpay_signature)
    response={"signatureIsValid":"true"}
       res.send(response);
   });
 
 
app.post("/", (req, res) => {
    res.send("Thank you for subscribing");
  });