getUser(function (user) {
  getOrders(user.id, function (orders) {
    getPayment(orders[0].id, function (payment) {
      console.log(payment);
    });
  });
});