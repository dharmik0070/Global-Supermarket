var productModal = $("#productModal");
$(function() {
    //JSON data by API call
    $.get(productListApiUrl, function(response) {
        if (response) {
            var table = '';
            $.each(response, function(index, product) {
                table += '<tr data-id="' + product.product_id +
                    '" data-name="' + product.name + '" data-unit="' + product.uom_id +
                    '" data-price="' + product.price_per_unit +
                    '" data-uomname="' + product.uom_name + '">' +
                    '<td>' + product.name + '</td>' +
                    '<td>' + product.uom_name + '</td>' +
                    '<td>' + product.price_per_unit + '</td>' +
                    '<td><span class="btn btn-xs btn-danger delete-product mx-4">Delete</span>' +
                    '<span class="edit-product btn btn-xs btn-success mx-3"> Edit </span></td></tr>';
            });
            $("table").find('tbody').empty().html(table);
        }
    });
});

// Save Product
$("#saveProduct").on("click", function() {
    // If we found id value in form then update product detail
    var data = $("#productForm").serializeArray();
    var requestPayload = {
        product_name: null,
        uom_id: null,
        price_per_unit: null,
        id: null
    };
    for (var i = 0; i < data.length; ++i) {
        var element = data[i];
        if (element.value == '') {
            alert("Enter all fields");
            break;
        } else {
            switch (element.name) {
                case 'name':
                    requestPayload.product_name = element.value;
                    break;
                case 'uoms':
                    requestPayload.uom_id = element.value;
                    break;
                case 'price':
                    requestPayload.price_per_unit = element.value;
                    break;
                case 'id':
                    requestPayload.id = element.value;
                    break;
            }
        }
    }
    if (productModal.find('.modal-title').text() == 'Edit Product') {
        callApi("POST", productEditApiUrl, {
            'data': JSON.stringify(requestPayload)
        });
    } else {
        callApi("POST", productSaveApiUrl, {
            'data': JSON.stringify(requestPayload)
        });
    }
});
$(document).on("click", ".edit-product", function() {
    var tr = $(this).closest('tr');
    $("#id").val(tr.data('id'));
    $("#name").val(tr.data('name'));
    $("#uoms").val(tr.data('unit'));
    $("#price").val(tr.data('price'));
    productModal.find('.modal-title').text('Edit Product');
    productModal.modal('show');
});
$(document).on("click", ".delete-product", function() {
    var tr = $(this).closest('tr');
    var data = {
        product_id: tr.data('id')
    };
    var isDelete = confirm("Are you sure to delete " + tr.data('name') + " item?");
    if (isDelete) {
        callApi("POST", productDeleteApiUrl, data);
    }
});

productModal.on('hide.bs.modal', function() {
    $("#id").val('0');
    $("#name, #unit, #price").val('');
    productModal.find('.modal-title').text('Add New Product');
});

productModal.on('show.bs.modal', function() {
    //JSON data by API call
    $.get(uomListApiUrl, function(response) {
        if (response) {
            var options = '<option value="">--Select--</option>';
            $.each(response, function(index, uom) {
                options += '<option value="' + uom.uom_id + '">' + uom.uom_name + '</option>';
            });
            $("#uoms").empty().html(options);
        }
    });
});