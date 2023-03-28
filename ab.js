const Razorpay = require('razorpay');
var instance = new Razorpay({ key_id: 'rzp_test_KqVq9CvPUoeAMC', key_secret: 'dCMTz4qx4TQzZPfnReb3yBbi' })

var options = {
  amount: 100000,  // amount in the smallest currency unit
  currency: "INR",
  receipt: "order_rcpt_00111"
};
instance.orders.create(options, function(err, order) {
  console.log(order);
});