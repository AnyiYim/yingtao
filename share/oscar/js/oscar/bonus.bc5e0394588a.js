var get_data = function(){
    $(".select-table-time").change(function(obj){
        console.log(23213, this);
        time_type = $('.select-table-time')
        console.log(444, time_type);
        console.log(obj);
        console.log(obj.options[obj.selectedIndex].value);
    })
}
