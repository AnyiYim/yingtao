var csrftoken = $("input[name='csrfmiddlewaretoken']").val()
var request_url = 'http://127.0.0.1:8000/';
var uri = request_url + 'bonus';
var url = {
    '销售订单':             uri+'/bill/',
    '乐享券资金':             uri+'/coupon_record/',
    '30天消费分红表':         uri+'/consume_bonus_record/',
    '体验包分红表':           uri+'/new_store_bonus_record/',
    '131分红基础统计表':       uri+'/account_daily_record/', //type=matrix
    '产品推荐奖计算表':        uri+'/recommend_bonus_record/',
    '产品推荐奖':             uri+'/account_daily_record/',
    '30天店铺创业奖':         uri+'/account_daily_record/', //type=store
    '众创导师奖':             uri+'/account_daily_record/', //type=zc_leader
    '账户每天记录表':          uri+'/account_daily_record/', //type=daily_record
    '平台每天记录':            uri+'/platform_daily_record/'
};
var title = {
    '乐享券资金': {'create_time':'创建日期', 'billno':'订单号', 'uid':'客户ID',
        'pay_amount':'支付金额', 'total_consume_bonus':'30天分红累计',
        'coupons':'乐享券', 'consume_detail':'30天分红详情'},
    '销售订单': {'billno':'订单编号', 'payer_id':'客户ID', 'total_fee':'商品金额',
        'amount':'支付金额', 'new_store_bonus':'体验包提成', 'product_cost':'产品成本',
        'profit':'订单利润', 'finish_time':'订单完成时间'},

    '30天店铺创业奖': {'data_date':'日期', 'create_time':'创建日期', 'uid':'客户ID',
        'gen1_amount':'一级店铺业绩', 'gen2_amount':'二级店铺业绩',
        'gen_total_amount':'个人店铺业绩', 'pf_gen_amount':'总店铺业绩',
        'ratio_gen':'占比', 'pf_bonus_store':'总创业奖', 'bonus_store':'应付分红'},

    '30天消费分红表': {'data_date':'日期', 'create_time':'创建日期', 'billno':'订单编号',
        'uid':'客户ID', 'amount':'支付金额', 'pf_total_amount':'总累计销售额',
        'ratio':'占比', 'pf_bonus_consume':'消费分红总计', 'bonus':'应付分红'},

    '体验包分红表': {'data_date':'日期', 'create_time':'创建日期', 'billno':'订单编号',
        'uid':'客户ID', 'amount':'支付金额', 'prev_gen1_uid':'一级上级',
        'prev_gen1_lv':'一级店铺级别', 'prev_gen1_total_bonus':'一级收益',
        'prev_gen1_daily_bonus':'一级发放',  'prev_gen2_uid':'二级上级',
        'pre_gen2_lv':'二级店铺级别', 'prev_gen2_total_bonus':'二级收益',
        'prev_gen2_daily_bonus':'二级发放'},

    '131分红基础统计表': {'data_date':'日期', 'create_time':'创建日期', 'uid':'客户ID',
        'x':'131排位', 'y':'131队列排位', 'total_amount':'客户30天有效消费金额',
        'iteration_amount':'个人下排消费金额', 'pf_amount_queue_of_matrix':'本队列业绩',
        'pf_ratio_queue_of_matrix':'本队列占比', 'pf_bonus_queue_of_matrix':'本队列分红',
         'bonus_matrix':'个人分红'},

    // '产品推荐奖': ['创建日期', '产品名称', '产品售价', '产品成本', '产品利润', '推荐人',
    //     '利润之和', '本日总利润', '占比', '推荐将分红', '日期'],
    '产品推荐奖计算表': {'create_time':'创建日期',  'billno':'订单编号',
        'recommend_uid':'推荐人', 'bonus':'推荐奖分红'},
    '产品推荐奖': {'create_time':'创建日期', 'uid':'客户ID', 'bonus_recommend':'推荐奖分红'},

    '众创导师奖': {'data_date':'日期',  'create_time':'创建日期', 'level':'级别',
        'uid':'客户ID', 'gen_total_amount':'店铺业绩', 'bonus_zc_leader':'应付分红'},

    '账户每天记录表': {'create_time':'创建日期', 'uid':'客户ID', 'level':'客户等级',
        'daily_amount':'个人当天消费金额', 'total_amount':'30天消费销金额',
        'iteration_amount':'131个人下排消费金额', 'gen1_amount':'一级店铺业绩',
        'gen2_amount':'二级店铺业绩', 'gen_total_amount':'个人店铺总业绩',
        'ratio_gen':'个人业绩占比', 'ratio_zc_leader':'众创导师业绩占比',
        'bonus_consume':'30天消费分红', 'bonus_matrix':'131队列分红',
        'bonus_store':'店铺创业奖', 'bonus_zc_leader':'众创导师奖'},
    '平台每天记录': {'data_date':'日期', 'create_time':'创建日期', 'daily_amount':'平台每天销售额',
        'total_amount':'平台30销售额', 'daily_profit':'平台每天利润',
        'daily_cost':'平台每天销售货物总成本', 'gen_amount':'平台每天总业绩',
        'zc_leader_amount':'众创导师总业绩','bonus_consume':'30天消费分红',
        'bonus_matrix':'131队列分红','bonus_store':'30天店铺创业奖',
        'bonus_zc_leader':'众创导师奖','bonus_zc_fund':'众创基金','bonus_coupon':'乐享券',
        'bonus_recommend':'优秀产品推荐奖', 'bonus_new_store':'店铺体验红包'}
}
var title_english = {
    '乐享券资金': ['create_time', 'billno', 'uid', 'pay_amount',
        'total_consume_bonus', 'coupons', 'consume_detail'],

    '销售订单': ['billno', 'payer_id', 'total_fee', 'amount', 'new_store_bonus',
        'product_cost', 'profit', 'finish_time'],

    '30天店铺创业奖': ['data_date', 'create_time', 'uid', 'gen1_amount', 'gen2_amount',
        'gen_total_amount', 'pf_gen_amount', 'ratio_gen', 'pf_bonus_store',
        'bonus_store'],

    '30天消费分红表': ['data_date', 'create_time', 'billno', 'uid', 'amount', 'pf_total_amount',
        'ratio', 'pf_bonus_consume', 'bonus'],

    '体验包分红表': ['data_date', 'create_time', 'billno', 'uid', 'amount', 'prev_gen1_uid',
        'prev_gen1_lv', 'prev_gen1_total_bonus', 'prev_gen1_daily_bonus',
        'prev_gen2_uid', 'pre_gen2_lv', 'prev_gen2_total_bonus',
        'prev_gen2_daily_bonus'],

    '131分红基础统计表': ['data_date', 'create_time', 'uid', 'x', 'y', 'total_amount',
        'iteration_amount', 'pf_amount_queue_of_matrix', 'pf_ratio_queue_of_matrix',
        'pf_bonus_queue_of_matrix' , 'bonus_matrix'],

    // '产品推荐奖': ['create_time', 'shop_name', 'price', 'cost', 'profit',
    //    'recommend', 'profit_num', 'daily_profit', 'ratio', 'bonus_recommend'],
    '产品推荐奖计算表': ['create_time',  'billno','recommend_uid', 'bonus'],

    '产品推荐奖': ['create_time', 'uid', 'bonus_recommend'],

    '众创导师奖': ['data_date', 'create_time', 'level', 'uid', 'gen_total_amount',
        'bonus_zc_leader'],

    '账户每天记录表': ['create_time','uid', 'level', 'daily_amount', 'total_amount',
        'iteration_amount','gen1_amount', 'gen2_amount','gen_total_amount',
        'ratio_gen', 'ratio_zc_leader','bonus_consume', 'bonus_matrix',
        'bonus_store', 'bonus_zc_leader'],

    '平台每天记录': ['data_date', 'create_time', 'daily_amount', 'total_amount', 'daily_profit',
        'daily_cost', 'gen_amount', 'zc_leader_amount', 'bonus_consume',
        'bonus_matrix', 'bonus_store', 'bonus_zc_leader', 'bonus_zc_fund',
        'bonus_coupon', 'bonus_recommend', 'bonus_new_store']
}

var level_map = {
    1: '普通',
    2: '铜级',
    3: '银级',
    4: '金级',
    5: '众创导师'
}

var no_format_whitelist = ['create_time', 'coupons', 'prev_gen1_lv',
    'pre_gen2_lv', 'billno', 'pf_create_time', 'finish_time', 'data_date',
    'level', 'x', 'y']
var page_size = 50;
var page_num = 0;
var offset = 0;
var limit = 100;
var current_page = 1;
var time_type = '';
var type = '';

var first_load = 1;
//入口
var get_data = function(){
    $('.click-color ul li a').on('click', function(){
        if(!$('.select-table-show').hasClass('disable-click')){
            if($('.click-color ul li').hasClass('li-active')){
                $('.click-color ul li').removeClass('li-active')
            }
            $(this).parent().addClass('li-active');
        }

    })
    $('.select-table-show').click(function(){
        //判断是否加载完成
        if(!$('.handle-table-div').children().hasClass('form-table') && first_load !=1){
            $('.select-table-show').addClass('disable-click');

        }

        first_load = first_load +1
        if(first_load == 100){
            first_load = 2;
        }
        $('.page-num-show').hide();
        //删除select-table-show中所有的active
        if($('.select-table-show').hasClass('active')){
            $('.select-table-show').removeClass('active');
        }

        //重置select选项
        time_type = '';
        //重置select显示文字
        //为当前活动表重新添加active类
        $(this).addClass('active')
        $('.am-selected-status.am-fl').html('选择时间')
        current_page = 1;
        page_num = 0;
        var table_name = $(this).html();
        var data = {
            //'table': table_name,
            'offset': offset,
            'limit': limit,
            'first': true,
            'time_type':time_type,
            'csrfmiddlewaretoken':csrftoken
        }
        // 同一个uri下的不同接口，后台用type的值来区分
        type =uri_branch(table_name);
        if(type !=''){
            data['type'] = type;
        }
        //获取数据, 分页
        if(!$('.select-table-show').hasClass('disable-click')){
            post_data(data, table_name, offset, limit)
        }

    });

    $('.select-table-time').change(function(){
        $('.page-num-show').hide();
        time_type = $('.select-table-time').val();
        if(time_type == 'all-date'){
            time_type = '';
        }
        table_name = $('.select-table-show.active').html();
        var data = {
            'offset': offset,
            'limit': limit,
            'first': true,
            'time_type':time_type,
        }
        type =uri_branch(table_name);
        if(type !=''){
            data['type'] = type;
        }
        post_data(data, table_name, offset, limit);
    });



    // $('.date_xls_bt01').on('click', function() {
    //     var start_time = $('#my-start-1').val();
    //     console.log(start_time);
    //     start_time =  start_time.replace(/-/g, '/');
    //     start_time = time_to_timenum(start_time); //时间转化时间戳
    //
    //     var end_time = $('#my-end-1').val();
    //     var endtime = end_time
    //     end_time = end_time.replace(/-/g, '/');
    //     end_time = time_to_timenum(end_time);
    //
    //     if(!end_time){
    //         alert('你输入的时间有误：' + e.data[1] || '' );
    //         return
    //     }
    //     if(!start_time && !end_time){
    //         alert('你输入的时间有误：' + e.data[0] || '');
    //         return
    //     }
    //     var days = 1
    //     if(start_time){
    //         days= (end_time - start_time)/(24*60*60*1000) +1
    //     }
    //
    //     var download_a_path = '../excel/download_days_excel?';
    //     $('.download_excel_a').attr('href', download_a_path + 'date='+endtime +"&days="+days);
    //     $('.download_excel_a')[0].click();
    //
    // //   日期插件相关函数
    // });


    // 监控单选按钮
    $('input:radio').on('click', function(){
        if($(this).hasClass('radio-month')){
            $('.select-month').show();
            $('.select-day').hide();
        }
        if($(this).hasClass('radio-day')){
            $('.select-day').show();
            $('.select-month').hide();
        }

    })

    $('.date-xls-bt02').on('click', function() {
        // download_excel
        var time_name = $('input[name="time_radio1"]:checked').val();
        if(time_name == 'month'){
            var c_time = $('.select-month').val();

        }else{
            var c_time = $('#my-end-2').val();
        }
        var download_a_path = request_url + 'excel/download_excel?';

        var ctime = c_time;

        // c_time =  c_time.replace(/-/g, '/');
        c_time = time_to_timenum(c_time); //时间转化时间戳
        if(!c_time){
            alert('你输入的时间有误：' + ctime || '' );
            return
        }

        download_a_path = download_a_path + time_name+"="+ctime
        $('.download_excel_a').attr('href', download_a_path);
        $('.download_excel_a')[0].click();
    })

    // date_handle01()
    date_handle02()
    $('.am-datepicker-dropdown').css('margin-left', '143px');
    $('.am-datepicker-caret').css('border-bottom', '0');


}


var time_to_timenum = function(date){
    var datetmp = new Date(date);
    datetmp = datetmp.getTime();
    return datetmp
}

// 日期插件
var date_handle01 = function(){
    $('#my-start-1').datepicker().on('changeDate.datepicker.amui', function(event) {
    }).data('amui.datepicker');

    $('#my-end-1').datepicker().on('changeDate.datepicker.amui', function(event) {

    }).data('amui.datepicker');
}

var date_handle02 = function(){
    var nowTemp = new Date('2017-9-20');
    var nowDay = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0).valueOf();
    var nowMoth = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), 1, 0, 0, 0, 0).valueOf();
    var nowYear = new Date(nowTemp.getFullYear(), 0, 1, 0, 0, 0, 0).valueOf();
    $('#my-end-2').datepicker(
        {
          onRender: function(date, viewMode) {
            var viewDate = nowDay;
            switch (viewMode) {
                case 1:
                    viewDate = nowMoth;// moths 视图，与当前月份比较
                    break;
                case 2:
                    viewDate = nowYear; // years 视图，与当前年份比较
                    break;
            }
            var  current_time = new Date().getTime();
            if((date.valueOf() < viewDate)){
                return date.valueOf() < viewDate ? 'am-disabled' : '';
            }else{
                return date.valueOf() > current_time? 'am-disabled' : ''
            }
          }
        }
    ).on('changeDate.datepicker.amui', function(event) {}).data('amui.datepicker');

    var nowTemp02 = new Date('2017-9');
    var nowMoth02 = new Date(nowTemp02.getFullYear(), nowTemp02.getMonth(), 1, 0, 0, 0, 0).valueOf();
    var nowYear02 = new Date(nowTemp02.getFullYear(), 0, 1, 0, 0, 0, 0).valueOf();
    $('#my-end-3').datepicker(

        {
          format: 'yyyy-mm',
          viewMode: 'years',
          minViewMode: 'months',

          onRender: function(date, viewMode) {
            var viewDate = nowDay;
            switch (viewMode) {
                case 1:
                    viewDate = nowMoth02;// moths 视图，与当前月份比较
                    break;
                case 2:
                    viewDate = nowYear02; // years 视图，与当前年份比较
                    break;
            }
            var  current_time = new Date().getTime();
            if((date.valueOf() < viewDate)){
                return date.valueOf() < viewDate ? 'am-disabled' : '';
            }else{
                return date.valueOf() > current_time? 'am-disabled' : ''
            }
          }
        }
    ).on('changeDate.datepicker.amui', function(event) {}).data('amui.datepicker');
}

var render = function(data, table_name, data_branch){
    if($('.table-name-title').children('.fix-tab')){
        $('.fix-tab').remove();
    }
    if($('.handle-table-div').children().hasClass('form-table')){
        $('.form-table').remove();
    }
    var handle_table_div = $('.handle-table-div');
    //var col = title.length;
    var form = $('<form>'),
        table = $('<table>'),
        thead = $('<thead>'),
        tr = $('<tr>'),
        th = $('<th>'),
        td =$('<td>'),
        img = $('<img>'),
        col = $('<col />'),
        div = $('<div>'),
        tbody = $('<tbody>'),
        colgroup = $('<colgroup>');
    var form_table = div.clone(),
        table_one = div.clone(),
        table_two = table.clone(),
        thead_tags = thead.clone(),
        // thead_clone = thead.clone(),
        thead_tr = tr.clone(),
        thead_th = th.clone(),
        div_tip = div.clone(),
        table_body = div.clone(),
        tbody_tags = tbody.clone();

    form_table.addClass('am-u-sm-12 form-table');
    thead_tags.addClass('thead-div');
    thead_tr.addClass('flxed-table-element');
    table_one.addClass('thead-fixd');
    table_two.addClass('am-table am-table-striped  am-table-bordered am-table-hover table-main table-name');
    table_body.addClass('table-body-set');
    for(var i in title_english[table_name]){
        var thead_th = th.clone();
        var col_tab_header = col.clone();
        var class_name = title_english[table_name][i].replace(/_/g, '-');
        thead_th.addClass('table-'+class_name);
        thead_th.html(title[table_name][title_english[table_name][i]]);
        thead_tr.append(thead_th);
    }
    thead_tags.append(thead_tr);
    table_one.append(thead_tags.clone(true));
    for(var j in data){

        var tbody_tr = tr.clone();
        var count_stop = 0;
        for(var t_name_i in title_english[table_name]){
            t_name = title_english[table_name][parseInt(t_name_i)];
            var tbody_td = td.clone();
            var value;
            if(t_name == 'data_date'){
                // 'data_date（某条）数据具体属于那一天', ‘create_time当前数据表生成时间’
                data[j][t_name] = data[j]['create_time']- 86400;
                value = data[j][t_name];

            }
            if(data[j].hasOwnProperty(t_name)){
                value = data[j][t_name];
            }else{
                // 用到两个表时处理平台表数据
                var tmp_pf_data = pf_dict[format_date_simple(data[j]['create_time'])];
                if(t_name == 'pf_amount_queue_of_matrix'){
                    if (tmp_pf_data){
                        var value_tmp = tmp_pf_data['amount'][data[j]['x']-1];
                    }else{
                        var value_tmp = '-'
                    }

                    value = value_tmp
                }else if(t_name == 'pf_bonus_queue_of_matrix'){
                    if (tmp_pf_data){
                        var value_tmp = tmp_pf_data['bonus'][data[j]['x']-1];
                    }else{
                        var value_tmp = '-'
                    }
                    value = value_tmp
                }else if(t_name == 'pf_ratio_queue_of_matrix'){
                    if (tmp_pf_data){
                        var value_tmp = tmp_pf_data['ratio'][data[j]['x']-1];
                    }else{
                        var value_tmp = '-'
                    }
                    value = value_tmp
                }else{
                    for(var sequence=0;  sequence<data_branch.length; sequence++){
                        if(format_date_simple(data_branch[sequence]['pf_create_time']) == format_date_simple(data[j]['create_time'])){
                            value = data_branch[sequence][t_name];
                        }
                        continue;
                    }
                }
            }

            if(t_name =='create_time'){
                value = format_date(value);
            }else if(t_name =='finish_time'){
                value = format_date(value);
            }else if(t_name == 'data_date'){
                value = format_date_simple(value);
            }
            if(typeof(value) == 'number'){
                if(value >= 1 || value == 0 || value < 0){
                    if($.inArray(t_name, no_format_whitelist) == -1){
                        tbody_td.css('text-align', 'right');
                        if(value < 0){
                            value = '￥- ' + parseInt(value / 100).toLocaleString() + '.' + (value / 100).toFixed(2).split('.')[1];
                        }else{
                            value = '￥' + parseInt(value / 100).toLocaleString() + '.' + (value / 100).toFixed(2).split('.')[1];
                        }

                    }
                }
            }
            //隐藏日期‘data_date’
            var class_key = t_name.replace(/_/g, '-');
            tbody_td.addClass('table-'+class_key);
            if(table_name=="乐享券资金" && t_name=='consume_detail'){
                value = coupons_everyday_bonus_rander(value, data[j]['create_time'])
                $('.table-consume-detail').width('1930px');
            }

            if(t_name == 'level' || t_name =='prev_gen1_lv' || t_name =='pre_gen2_lv'){
                value = level_map[data[j][t_name]];
            }
            if(value == '' || !value){
                value = '-';
            }
            tbody_td.html(value);
            tbody_tr.append(tbody_td);
        }
        tbody_tags.append(tbody_tr);
    }
    table_two.append(thead_tags).append(tbody_tags);
    table_body.append(table_one).append(table_two);
    if(data == ''){
        div_tip.addClass('div-tip');
        div_tip.html('数据为空');
        table_two.append(div_tip);
    }
    form_table.append(table_body);
    $('.uploading').hide();
    handle_table_div.append(form_table);
    if($('.table-name').children('thead').children('tr').children('th').hasClass('table-data-date')){
        $('.table-data-date').css({'display':'none'});
    }

    var body_h = document.body.scrollHeight;
    $('.data-show-table').height((body_h-131)+'px');
    $('.data-show-table').css('overflow-y', 'scroll');

    var tr_td = $('.table-name tbody tr').first().children();
    var tr_width = $('.table-name tbody').width();
    $('.thead-fixd thead').width(tr_width);
    $('.thead-fixd').width(tr_width);
    $('.thead-fixd thead tr').height($('.table-name thead').height());
    for(z=0; z<tr_td.length; z++){
        var td_width= tr_td.eq(z).width();
        $('.thead-fixd thead tr').first().children().eq(z).width(td_width);
    }

    $('.page-num-show').show();
    $('.page.fl').show(); //分页显示
    $('.select-table-show').removeClass('disable-click');
}

var post_data = function(data, table_name, offset, limit){
    if($('div').is('.am-u-sm-12.form-table')){
        $('.am-u-sm-12.form-table').remove()
    }
    $('.uploading').show();
    $('.page.fl').hide(); //分页显示
    data['csrfmiddlewaretoken'] = csrftoken
    $.post(url[table_name], data, function(raw){
        //初始计算页数
        if(data['first'] == true){
            page_num = Math.ceil(raw['msg']['count'] /page_size);
        }
        var data_branch= [];

        if(raw['msg']['platform_daily_records']){
            data_branch = raw['msg']['platform_daily_records']
            data_branch = modify_pf_key(data_branch);
            // 131队列字段处理
            matrix_handle(data, data_branch);
        };
        //
        current_page = 1;
        $('#current2').html(current_page);
        $('#current3').html(page_num);
        raw = raw['data'];
        //渲染
        render(raw, table_name, data_branch);
        //分页
        $('#pagination2').pagination({
            currentPage: current_page,
            totalPage: page_num,
            //isShow: false,
            count: 10,
            prevPageText: '< 上一页',
            nextPageText: '下一页 >',
            callback: function(current) {
                $('.uploading').show();
                $('.page.fl').hide(); //分页显示
                $('.page-num-show').hide();
                current_page = current;
                if($('.page.fl').children().children().hasClass('ui-pagination-page-item active')){
                    $('.ui-pagination-page-item.active').css('color', 'red')
                }
                $('.am-u-sm-12.form-table').remove();
                var data_tmp = {
                    'time_type':time_type,
                    'offset': (current_page - 1)*page_size,
                    'first': null,
                    'status': 0,
                    'limit': limit,
                    'csrfmiddlewaretoken':csrftoken

                }
                if(type !=''){
                    data_tmp['type'] = type;
                }
                console.log(data);
                $.post(url[table_name], data_tmp, function(raw){
                    var data_branch= [];
                    if(raw['msg']['platform_daily_records']){
                        data_branch = raw['msg']['platform_daily_records']
                    };
                    data_branch = modify_pf_key(data_branch);
                    // 131队列字段处理
                    matrix_handle(data, data_branch);
                    $('#current2').html(current_page);
                    raw = raw['data'];
                    render(raw, table_name, data_branch);
                });

            }
        });

    });

}

var uri_branch = function(table_name){
    var type_tmp ='';
    if(table_name=='账户每天记录表'){
        type_tmp = 'daily_record';
    }
    if(table_name=='众创导师奖'){
        type_tmp = 'zc_leader';
    }
    if(table_name=='30天店铺创业奖'){
        type_tmp = 'store';
    }
    if(table_name == '产品推荐奖'){
        type_tmp = 'recommend';
    }
    if(table_name=='131分红基础统计表'){
        type_tmp = 'matrix';
    }
    return type_tmp
}

var modify_pf_key = function(data_branch){
    for(i in data_branch){
        for(j in data_branch[i]){
            var vkey = 'pf_'+ j;
            data_branch[i][vkey] = data_branch[i][j];
            delete data_branch[i][j];
        }
        //
        // data_branch[i]['pf_create_time'] = data_branch[i]['pf_create_time'] - 86400;
    }
    return data_branch
}

var coupons_everyday_bonus_rander = function(data, time){
    var daily_bonus = data.split(',');
    var tr = $('<tr>'),
        th = $('<th>'),
        td =$('<td>'),
        div = $('<div>'),
        thead = $('<thead>'),
        table = $('<table>');
    var tr_bonus = tr.clone(),
        tr_td_bonus = tr.clone(),
        div_bonus = div.clone(),
        c_table = table.clone();
    div_bonus.addClass('div-bonus');
    for(var i=0; i<daily_bonus.length; i++){
        var th_bonus = th.clone();
        time = time - 60*60*24*i;
        var time_format = format_date_simple(time)
        th_bonus.addClass('child-th-bonus');
        tr_bonus.addClass('child-tr-bonus');
        th_bonus.html(time_format);
        tr_bonus.append(th_bonus);
        var td_bonus = td.clone();
        td_bonus.addClass('child-td-bonus');
        tr_td_bonus.addClass('child-tr-td-bonus');
        value = '￥' + parseInt(parseInt(daily_bonus[i]) / 100).toLocaleString() + '.' + (parseInt(daily_bonus[i]) / 100).toFixed(2).split('.')[1];
        td_bonus.html(value);
        tr_td_bonus.append(td_bonus);
    }
    c_table.addClass('child-table-render');
    c_table.append(tr_bonus).append(tr_td_bonus);
    div_bonus.append(c_table);
    return div_bonus
}

// 131数据处理

var pf_dict ={};
var matrix_handle= function(data, data_branch){
    for(i=0; i<data_branch.length; i++){
        var data_branch_tmp =data_branch[i];
        var create_time = format_date_simple(data_branch_tmp['pf_create_time']);
        var amount_tmp = data_branch_tmp['pf_amount_queue_of_matrix'].split(',');
        var bonus_tmp = data_branch_tmp['pf_bonus_queue_of_matrix'].split(',');
        var ratio_tmp = data_branch_tmp['pf_ratio_queue_of_matrix'].split(',');
        for(j in amount_tmp){
            amount_tmp[j] = Number(amount_tmp[j]);
        }
        for(j in bonus_tmp){
            bonus_tmp[j] = Number(bonus_tmp[j]);
        }
        for(j in ratio_tmp){
            ratio_tmp[j] = Number(ratio_tmp[j]);
        }
        pf_dict[create_time] = {
                'amount': amount_tmp,
                'bonus': bonus_tmp,
                'ratio': ratio_tmp
        };
    }


}

// “年/月/日 上下午， 时：分：秒”
var format_date = function(time){
    if(time == null){
        return
    }
    var  now = new Date(time*1000);
    return  now.toLocaleString()
}
// “年/月/日”
var format_date_simple = function(time){
    if(time == null){
        return
    }
    var time = new Date(time*1000);
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var date = time.getDate();
    return year+'/'+month+'/'+date;
}


//上传文件
var upload = function(){
 $('.chiose_file').on('click', function(){
     $('.chiose_file').addClass('chiose-file-rename');
     $('.upload-li-btn').show();
 });
 $('.file-uplods-btn').on('click', function(){
     $('.upload-li-btn').hide();
     $('.chiose_file').removeClass('chiose-file-rename');
 });

 $('.init-btn').on('click', function(){
     $.post(request_url + 'bonus/daily_record', '', function(raw){
     });
 })

}

window.onresize=resizeBannerImage

function resizeBannerImage(){
    var body_h = document.body.scrollHeight;
    $('.data-show-table').height((body_h-131)+'px');
    $('.data-show-table').css('overflow-y', 'scroll');

    var tr_td = $('.table-name tbody tr').first().children();
    var tr_width = $('.table-name tbody').width();
    $('.thead-fixd thead').width(tr_width);
    $('.thead-fixd').width(tr_width);
    $('.thead-fixd thead tr').height($('.table-name thead').height());
    for(z=0; z<tr_td.length; z++){
        var td_width= tr_td.eq(z).width();
        $('.thead-fixd thead tr').first().children().eq(z).width(td_width);
    }
}
