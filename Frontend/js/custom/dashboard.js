$(function() {
    //Json data by api call for order table
    $.get(orderListApiUrl, function(response) {
        if (response) {
            var table = '';
            var totalCost = 0;
            $.each(response, function(index, order) {
                totalCost += parseFloat(order.total);
                table += '<tr data-id="' + order.order_id + '">' +
                    '<td>' + order.datetime + '</td>' +
                    '<td>' + order.order_id + '</td>' +
                    '<td>' + order.customer_name + '</td>' +
                    '<td>' + order.total.toFixed(2) + ' Rs</td>' +
                    '<td><center><span class="btn btn-xs btn-success order-details" onclick="o_details(' +
                    order.order_id + ')">View Details</span></center></td></tr>'
            });
            table += '<tr><td colspan="3" style="text-align: end"><b>Total Sales:</b></td><td colspan="2"><b>' + totalCost.toFixed(2) + ' Rs</b></td></tr>';
            $("table").find('tbody').empty().html(table);
        }
    });
});



var id;

function o_details(o_id) {
    id = o_id;
}
$(document).on("click", ".order-details", function() {
    //JSON data by API call
    var data = {
        order_id: id
    };
    $("table thead th:eq(0)").html("Order ID#");
    $("table thead th:eq(1)").html("Product Name");
    $("table thead th:eq(2)").html("Quantity");
    $("table thead th:eq(3)").html("Price per Product");
    $("table thead th:eq(4)").html("Total");

    $.get(displayOrdersApiUrl + '/' + id, function(response) {
        if (response) {
            var table = '';
            $.each(response, function(index, order) {
                table += '<tr>' +
                    '<td>' + order.order_id + '</td>' +
                    '<td>' + order.name + '</td>' +
                    '<td>' + order.quantity + '</td>' +
                    '<td>' + order.price_per_unit + '</td>' +
                    '<td>' + order.total_price + '</td></tr>';
            });
            $("table").find('tbody').empty().html(table);
            $("#back").removeClass("hidden");
        }
    });
});