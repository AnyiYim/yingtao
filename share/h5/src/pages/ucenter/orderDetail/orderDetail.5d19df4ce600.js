/*v0.6vv_20170214_fbi*/
window.__wcc_version__='v0.6vv_20170214_fbi'
window.__wxml_transpiler_version__='v0.1'
var $gwxc
var $gaic={}
$gwx=function(path,global){
function _(a,b){b&&a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:tag.substr(0,3)=='wx-'?tag:'wx-'+tag,attr:{},children:[],n:[]}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}function _wl(tname,prefix){console.warn('WXMLRT:'+prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x(){}
x.prototype =
{
hn: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any=false;
for(var x in obj)
{
any|=x==='__value__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any && obj.hasOwnProperty('__wxspec__') ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj)==='n'?obj:this.rv(obj.__value__);
}
}
return new x;
}
wh=$gwh();
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o ) : rev( ops[3], e, s, g, o );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o );
_b = rev( ops[2], e, s, g, o );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o ) : rev( ops[1], e, s, g, o );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o )
{
var op = ops[0];
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4:
return rev( ops[1], e, s, g, o );
break;
case 5:
switch( ops.length )
{
case 2:
return should_pass_type_info ?
[rev(ops[1],e,s,g,o)] :
[wh.rv(rev(ops[1],e,s,g,o))];
break;
case 1:
return [];
break;
default:
_a = rev( ops[1],e,s,g,o );
_a.push(
should_pass_type_info ?
rev( ops[2],e,s,g,o ) :
wh.rv( rev(ops[2],e,s,g,o) )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' )
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' )
{
return undefined;
}
_d = _aa[_bb];
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7:
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
_a = _s && _s.hasOwnProperty(_b) ?
s : _e && ( _e.hasOwnProperty(_b) ? e : undefined );
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8:
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o);
return _a;
break;
case 9:
_a = rev(ops[1],e,s,g,o);
_b = rev(ops[2],e,s,g,o);
function merge( _a, _b, _ow )
{
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
if( should_pass_type_info )
{
if( _tb )
{
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
_aa[k]=wh.nh(_bb[k],'e');
}
}
else
{
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
_aa[k]=_bb[k];
}
}
}
else
{
for(var k in _bb)
{
if ( _ow || _aa.hasOwnProperty(k) )
_aa[k]=wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
return should_pass_type_info ? rev(ops[1],e,s,g,o) : wh.rv(rev(ops[1],e,s,g,o));
}
}
else
{
if( op === 3 || op === 1 ) return ops[1];
else if( op === 11 )
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
return rev;
}
gra=$gwrt(true);
grb=$gwrt(false);
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n';
var scope = wh.rv( _s );
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8];
if( type === 'N' && full[10] === 'l' ) type = 'X';
var _y;
if( _n )
{
if( type === 'A' )
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = wh.nh(i, 'h');
_y = keyname ? (keyname==="*this" ? _v(wh.rv(to_iter[i])) : _v(wh.rv(wh.rv(to_iter[i])[keyname]))) : _v();
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' )
{
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = wh.nh(k, 'h');
_y = keyname ? (keyname==="*this" ? _v(wh.rv(to_iter[k])) : _v(wh.rv(wh.rv(to_iter[k])[keyname]))) : _v();
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'S' )
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' )
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' )
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = wh.nh(i, 'h');
_y = keyname ? (keyname==="*this" ? _v(r_iter_item) : _v(wh.rv(r_iter_item[keyname]))) : _v();
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' )
{
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = wh.nh(k, 'h');
_y = keyname ? (keyname==="*this" ? _v(r_iter_item) : _v(wh.rv(r_iter_item[keyname]))) : _v();
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'S' )
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
scope[itemname] = wh.nh(r_to_iter[i],'h');
scope[indexname] = wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' )
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
scope[itemname] = wh.nh(i,'h');
scope[indexname]= wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else{delete scope[indexname];}}


function _r( node, attrname, opindex, env, scope, global )
{
var o = {};
var a = grb( z[opindex], env, scope, global, o );
node.attr[attrname] = a;
if( o.is_affected ) node.n.push( attrname );
}
function _o( opindex, env, scope, global )
{
var nothing = {};
return grb( z[opindex], env, scope, global, nothing );
}
function _1( opindex, env, scope, global )
{
var nothing = {};
return gra( z[opindex], env, scope, global, nothing );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var to_iter = _1( opindex, env, scope, global, father, itemname, indexname, keyname );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _gv( )
{
if( typeof(window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;
}
function _m(tag,attrs,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(attrs[i+1]<0)
{tmp.attr[attrs[i]]=true;}else{_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];}}return tmp;};function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');console.warn('WXMLRT:'+me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if(ppart[i]=='..')mepart.pop();else if(ppart[i]=='.' || !ppart[i])continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}
var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){console.warn('WXMLRT:-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{console.warn('WXMLRT:'+me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}function _w(tn,f,line,c){console.warn('WXMLRT:'+f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }var e_={}
if(global&&typeof(global.entrys)=='object')e_=global.entrys
var d_={}
if(global&&typeof(global.defines)=='object')d_=global.defines
var p_={}
var z = [];
  (function(z){
    var a = 11;
    function Z(ops){z.push(ops)};
    Z([3, 'container']);Z([3, 'order-info']);Z([3, 'item-a']);Z([a, [3, '下单时间：'],[[6],[[7],[3, "orderInfo"]],[3, "create_time"]]]);Z([3, 'item-b']);Z([a, [3, '订单编号：'],[[6],[[7],[3, "orderInfo"]],[3, "number"]]]);Z([3, 'order-goods']);Z([3, 'h']);Z([3, 'label']);Z([3, '商品信息:']);Z([3, 'r']);Z([[2, "=="], [[6],[[7],[3, "orderInfo"]],[3, "status"]], [1, "Paid"]]);Z([3, 'btn']);Z([3, '已付款']);Z([[2, "=="], [[6],[[7],[3, "orderInfo"]],[3, "status"]], [1, "Cancelled"]]);Z([3, '已取消']);Z([[2, "=="], [[6],[[7],[3, "orderInfo"]],[3, "status"]], [1, "Complete"]]);Z([3, '已完成']);Z([[2, "=="], [[6],[[7],[3, "orderInfo"]],[3, "sale_method"]], [1, "presale"]]);Z([3, 'payOrder1']);Z([3, 'btn active']);Z([3, '预售中...']);Z([3, 'goods']);Z([[6],[[7],[3, "orderInfo"]],[3, "lines"]]);Z([[6],[[7],[3, "item"]],[3, "product_id"]]);Z([3, 'item']);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "item"]],[3, "product_thumb"]]]);Z([3, 'info']);Z([3, 't']);Z([3, 'name']);Z([a, [[6],[[7],[3, "item"]],[3, "title"]]]);Z([3, 'number']);Z([a, [3, 'x'],[[6],[[7],[3, "item"]],[3, "quantity"]]]);Z([3, 'attr']);Z([a, [[6],[[7],[3, "item"]],[3, "goods_specifition_name_value"]]]);Z([3, 'price']);Z([a, [3, '￥'],[[6],[[7],[3, "item"]],[3, "line_price_incl_tax"]]]);Z([3, 'line-status']);Z([a, [3, '\n                        '],[[6],[[7],[3, "item"]],[3, "line_status"]],[3, '\n                    ']]);Z([[2, "&&"],[[2, "=="], [[6],[[7],[3, "item"]],[3, "status"]], [1, "Complete"]],[[2, "!="], [[7],[3, "ss_type"]], [1, "ss_upgrade"]]]);Z([3, 'options-refund']);Z([3, 'btn active refund-btn']);Z([a, [3, '../refund/refund?type\x3dApply return\x26order_number\x3d'],[[6],[[7],[3, "orderInfo"]],[3, "number"]],[3, '\x26line_id\x3d'],[[6],[[7],[3, "item"]],[3, "id"]]]);Z([3, '\n                             去退货\n                         ']);Z([3, 'onlyRefund']);Z([a, [3, '../refund/refund?type\x3dApply refund\x26order_number\x3d'],[[6],[[7],[3, "orderInfo"]],[3, "number"]],[3, '\x26line_id\x3d'],[[6],[[7],[3, "item"]],[3, "id"]]]);Z([3, '\n                            仅退款\n                            ']);Z([[2, "&&"],[[2, "&&"],[[2, "=="], [[6],[[7],[3, "orderInfo"]],[3, "status"]], [1, "Paid"]],[[2, "=="], [[6],[[7],[3, "item"]],[3, "status"]], [1, "Pending"]]],[[2, "!="], [[7],[3, "ss_type"]], [1, "ss_upgrade"]]]);Z([3, '\n                            去退款\n                            ']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "status"]], [1, "Transporting"]]);Z([3, 'line_complete']);Z([[6],[[7],[3, "item"]],[3, "id"]]);Z([3, '\n                            确认收货\n                        ']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "status"]], [1, ""]]);Z([3, 'order-bottom']);Z([3, 'address']);Z([a, [[6],[[7],[3, "orderInfo"]],[3, "consignee"]]]);Z([3, 'mobile']);Z([a, [[6],[[7],[3, "orderInfo"]],[3, "mobile"]]]);Z([3, 'b']);Z([a, [[6],[[7],[3, "orderInfo"]],[3, "address"]]]);Z([3, 'total']);Z([3, '商品合计：']);Z([3, 'txt']);Z([a, [3, '￥'],[[6],[[7],[3, "orderInfo"]],[3, "total_incl_tax"]]]);Z([3, '运费：']);Z([3, '￥0.00']);Z([3, 'pay-fee']);Z([3, '实付：']);Z([[2, "=="], [[6],[[7],[3, "orderInfo"]],[3, "status"]], [1, "Unpaid"]]);Z([3, 'actions']);Z([3, 'cancelOrder']);Z([3, 'btn active action']);Z([3, '取消订单']);Z([3, 'payOrder']);Z([3, '去付款']);
  })(z);d_["./pages/ucenter/orderDetail/orderDetail.wxml"] = {};
  var m0=function(e,s,r,gg){
    var oYZ = _n("view");_r(oYZ, 'class', 0, e, s, gg);var oZZ = _n("view");_r(oZZ, 'class', 1, e, s, gg);var oaZ = _n("view");_r(oaZ, 'class', 2, e, s, gg);var obZ = _o(3, e, s, gg);_(oaZ,obZ);_(oZZ,oaZ);var ocZ = _n("view");_r(ocZ, 'class', 4, e, s, gg);var odZ = _o(5, e, s, gg);_(ocZ,odZ);_(oZZ,ocZ);_(oYZ,oZZ);var oeZ = _n("view");_r(oeZ, 'class', 6, e, s, gg);var ofZ = _n("view");_r(ofZ, 'class', 7, e, s, gg);var ogZ = _n("view");_r(ogZ, 'class', 8, e, s, gg);var ohZ = _o(9, e, s, gg);_(ogZ,ohZ);_(ofZ,ogZ);var oiZ = _n("view");_r(oiZ, 'class', 10, e, s, gg);var ojZ = _v();
      if (_o(11, e, s, gg)) {
        ojZ.wxVkey = 1;var okZ = _n("view");var omZ = _n("view");_r(omZ, 'class', 12, e, s, gg);var onZ = _o(13, e, s, gg);_(omZ,onZ);_(okZ,omZ);_(ojZ, okZ);
      } _(oiZ,ojZ);var ooZ = _v();
      if (_o(14, e, s, gg)) {
        ooZ.wxVkey = 1;var opZ = _n("view");var orZ = _n("view");_r(orZ, 'class', 12, e, s, gg);var osZ = _o(15, e, s, gg);_(orZ,osZ);_(opZ,orZ);_(ooZ, opZ);
      } _(oiZ,ooZ);var otZ = _v();
      if (_o(16, e, s, gg)) {
        otZ.wxVkey = 1;var ouZ = _n("view");var owZ = _n("view");_r(owZ, 'class', 12, e, s, gg);var oxZ = _o(17, e, s, gg);_(owZ,oxZ);_(ouZ,owZ);_(otZ, ouZ);
      } _(oiZ,otZ);var oyZ = _v();
      if (_o(18, e, s, gg)) {
        oyZ.wxVkey = 1;var ozZ = _n("view");var oAa = _m( "view", ["bindtap", 19,"class", 1], e, s, gg);var oBa = _o(21, e, s, gg);_(oAa,oBa);_(ozZ,oAa);_(oyZ, ozZ);
      } _(oiZ,oyZ);_(ofZ,oiZ);_(oeZ,ofZ);var oCa = _n("view");_r(oCa, 'class', 22, e, s, gg);var oDa = _v();var oEa = function(oIa,oHa,oGa,gg){var oFa = _n("view");_r(oFa, 'class', 25, oIa, oHa, gg);var oKa = _n("view");_r(oKa, 'class', 26, oIa, oHa, gg);var oLa = _n("image");_r(oLa, 'src', 27, oIa, oHa, gg);_(oKa,oLa);_(oFa,oKa);var oMa = _n("view");_r(oMa, 'class', 28, oIa, oHa, gg);var oNa = _n("view");_r(oNa, 'class', 29, oIa, oHa, gg);var oOa = _n("text");_r(oOa, 'class', 30, oIa, oHa, gg);var oPa = _o(31, oIa, oHa, gg);_(oOa,oPa);_(oNa,oOa);var oQa = _n("text");_r(oQa, 'class', 32, oIa, oHa, gg);var oRa = _o(33, oIa, oHa, gg);_(oQa,oRa);_(oNa,oQa);_(oMa,oNa);var oSa = _n("view");_r(oSa, 'class', 34, oIa, oHa, gg);var oTa = _o(35, oIa, oHa, gg);_(oSa,oTa);_(oMa,oSa);var oUa = _n("view");_r(oUa, 'class', 36, oIa, oHa, gg);var oVa = _o(37, oIa, oHa, gg);_(oUa,oVa);_(oMa,oUa);var oWa = _n("view");_r(oWa, 'class', 38, oIa, oHa, gg);var oXa = _o(39, oIa, oHa, gg);_(oWa,oXa);_(oMa,oWa);var oYa = _v();
      if (_o(40, oIa, oHa, gg)) {
        oYa.wxVkey = 1;var oZa = _n("view");_r(oZa, 'class', 41, oIa, oHa, gg);var oba = _n("view");_r(oba, 'class', 42, oIa, oHa, gg);var oca = _n("navigator");_r(oca, 'url', 43, oIa, oHa, gg);var oda = _o(44, oIa, oHa, gg);_(oca,oda);_(oba,oca);_(oZa,oba);var oea = _m( "view", ["class", 42,"bindtap", 3], oIa, oHa, gg);var ofa = _n("navigator");_r(ofa, 'url', 46, oIa, oHa, gg);var oga = _o(47, oIa, oHa, gg);_(ofa,oga);_(oea,ofa);_(oZa,oea);_(oYa, oZa);
      } _(oMa,oYa);var oha = _v();
      if (_o(48, oIa, oHa, gg)) {
        oha.wxVkey = 1;var oia = _n("view");_r(oia, 'class', 41, oIa, oHa, gg);var oka = _m( "view", ["class", 42,"bindtap", 3], oIa, oHa, gg);var ola = _n("navigator");_r(ola, 'url', 46, oIa, oHa, gg);var oma = _o(49, oIa, oHa, gg);_(ola,oma);_(oka,ola);_(oia,oka);_(oha, oia);
      } _(oMa,oha);var ona = _v();
      if (_o(50, oIa, oHa, gg)) {
        ona.wxVkey = 1;var ooa = _n("view");_r(ooa, 'class', 41, oIa, oHa, gg);var oqa = _m( "view", ["class", 42,"bindtap", 9,"data-line-id", 10], oIa, oHa, gg);var ora = _o(53, oIa, oHa, gg);_(oqa,ora);_(ooa,oqa);_(ona, ooa);
      } _(oMa,ona);var osa = _v();
      if (_o(54, oIa, oHa, gg)) {
        osa.wxVkey = 1;var ota = _n("view");_r(ota, 'class', 41, oIa, oHa, gg);var ova = _m( "view", ["class", 42,"bindtap", 9,"data-line-id", 10], oIa, oHa, gg);var owa = _o(53, oIa, oHa, gg);_(ova,owa);_(ota,ova);_(osa, ota);
      } _(oMa,osa);_(oFa,oMa);_(oGa, oFa);return oGa;};_2(23, oEa, e, s, gg, oDa, "item", "index", '{{item.product_id}}');_(oCa,oDa);_(oeZ,oCa);_(oYZ,oeZ);var oxa = _n("view");_r(oxa, 'class', 55, e, s, gg);var oya = _n("view");_r(oya, 'class', 56, e, s, gg);var oza = _n("view");_r(oza, 'class', 29, e, s, gg);var o_a = _n("text");_r(o_a, 'class', 30, e, s, gg);var oAb = _o(57, e, s, gg);_(o_a,oAb);_(oza,o_a);var oBb = _n("text");_r(oBb, 'class', 58, e, s, gg);var oCb = _o(59, e, s, gg);_(oBb,oCb);_(oza,oBb);_(oya,oza);var oDb = _n("view");_r(oDb, 'class', 60, e, s, gg);var oEb = _o(61, e, s, gg);_(oDb,oEb);_(oya,oDb);_(oxa,oya);var oFb = _n("view");_r(oFb, 'class', 62, e, s, gg);var oGb = _n("view");_r(oGb, 'class', 29, e, s, gg);var oHb = _n("text");_r(oHb, 'class', 8, e, s, gg);var oIb = _o(63, e, s, gg);_(oHb,oIb);_(oGb,oHb);var oJb = _n("text");_r(oJb, 'class', 64, e, s, gg);var oKb = _o(65, e, s, gg);_(oJb,oKb);_(oGb,oJb);_(oFb,oGb);var oLb = _n("view");_r(oLb, 'class', 29, e, s, gg);var oMb = _n("text");_r(oMb, 'class', 8, e, s, gg);var oNb = _o(66, e, s, gg);_(oMb,oNb);_(oLb,oMb);var oOb = _n("text");_r(oOb, 'class', 64, e, s, gg);var oPb = _o(67, e, s, gg);_(oOb,oPb);_(oLb,oOb);_(oFb,oLb);_(oxa,oFb);var oQb = _n("view");_r(oQb, 'class', 68, e, s, gg);var oRb = _n("text");_r(oRb, 'class', 8, e, s, gg);var oSb = _o(69, e, s, gg);_(oRb,oSb);_(oQb,oRb);var oTb = _n("text");_r(oTb, 'class', 64, e, s, gg);var oUb = _o(65, e, s, gg);_(oTb,oUb);_(oQb,oTb);_(oxa,oQb);_(oYZ,oxa);var oVb = _v();
      if (_o(70, e, s, gg)) {
        oVb.wxVkey = 1;var oWb = _n("view");_r(oWb, 'class', 71, e, s, gg);var oYb = _m( "view", ["bindtap", 72,"class", 1], e, s, gg);var oZb = _o(74, e, s, gg);_(oYb,oZb);_(oWb,oYb);var oab = _m( "view", ["class", 73,"bindtap", 2], e, s, gg);var obb = _o(76, e, s, gg);_(oab,obb);_(oWb,oab);_(oVb, oWb);
      } _(oYZ,oVb);_(r,oYZ);
    return r;
  };
        e_["./pages/ucenter/orderDetail/orderDetail.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:body{height:100%;width:100%;background:#f4f4f4}.order-info{padding-top:%%?25rpx?%%;background:#fff;height:auto;overflow:hidden}.item-a{padding-left:%%?31.25rpx?%%;height:%%?42.5rpx?%%;padding-bottom:%%?12.5rpx?%%;line-height:%%?30rpx?%%;font-size:%%?30rpx?%%;color:#666}.item-b{padding-left:%%?31.25rpx?%%;height:%%?29rpx?%%;line-height:%%?29rpx?%%;margin-top:%%?12.5rpx?%%;margin-bottom:%%?41.5rpx?%%;font-size:%%?30rpx?%%;color:#666}.item-c{margin-left:%%?31.25rpx?%%;border-top:1px solid #f4f4f4;height:%%?103rpx?%%;line-height:%%?103rpx?%%}.item-c .l{float:left}.item-c .r{height:%%?103rpx?%%;float:right;display:flex;align-items:center;padding-right:%%?16rpx?%%}.item-c .r .btn{float:right}.cost{color:#b4282d}.btn{line-height:%%?93.75rpx?%%;border-radius:%%?5rpx?%%;text-align:center;margin:0 %%?15rpx?%%;padding:0 %%?20rpx?%%;height:%%?93.75rpx?%%}.btn.active{background:#b4282d;color:#fff}.order-goods{margin-top:%%?20rpx?%%;background:#fff}.order-goods .h{height:%%?93.75rpx?%%;line-height:%%?93.75rpx?%%;margin-left:%%?31.25rpx?%%;border-bottom:1px solid #f4f4f4;padding-right:%%?31.25rpx?%%}.order-goods .h .label{float:left;font-size:%%?30rpx?%%;color:#333}.order-goods .h .status{float:right;font-size:%%?30rpx?%%;color:#b4282d}.order-goods .item{display:flex;align-items:center;height:%%?192rpx?%%;margin-left:%%?31.25rpx?%%;padding-right:%%?31.25rpx?%%;border-bottom:1px solid #f4f4f4}.order-goods .item:last-child{border-bottom:none}.order-goods .item .img{height:%%?145.83rpx?%%;width:%%?145.83rpx?%%;background:#f4f4f4}.order-goods .item .img wx-image{height:%%?145.83rpx?%%;width:%%?145.83rpx?%%}.order-goods .item .info{flex:1;height:%%?145.83rpx?%%;margin-left:%%?20rpx?%%}.order-goods .item .t{margin-top:%%?8rpx?%%;margin-bottom:%%?10.5rpx?%%}.order-goods .item .t .name{width:80%;line-height:%%?33rpx?%%;color:#333;font-size:%%?29rpx?%%;display:-webkit-box;word-break:break-all;text-overflow:ellipsis;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;float:left}.order-goods .item .t .number{display:block;float:right;height:%%?33rpx?%%;text-align:right;line-height:%%?33rpx?%%;color:#333;font-size:%%?30rpx?%%}.order-goods .item .attr{height:%%?29rpx?%%;line-height:%%?29rpx?%%;color:#666;margin-bottom:%%?25rpx?%%;font-size:%%?25rpx?%%}.order-goods .item .price{height:%%?30rpx?%%;line-height:%%?30rpx?%%;color:#333;font-size:%%?30rpx?%%;text-align:right}.order-bottom{margin-top:%%?20rpx?%%;padding-left:%%?31.25rpx?%%;height:auto;overflow:hidden;background:#fff}.order-bottom .address{height:%%?128rpx?%%;padding-top:%%?25rpx?%%;border-bottom:1px solid #f4f4f4}.order-bottom .address .t{height:%%?35rpx?%%;line-height:%%?35rpx?%%;margin-bottom:%%?7.5rpx?%%}.order-bottom .address .name{display:inline-block;height:%%?35rpx?%%;width:%%?140rpx?%%;line-height:%%?35rpx?%%;font-size:%%?25rpx?%%}.order-bottom .address .mobile{display:inline-block;height:%%?35rpx?%%;line-height:%%?35rpx?%%;font-size:%%?25rpx?%%}.order-bottom .address .b{height:%%?35rpx?%%;line-height:%%?35rpx?%%;font-size:%%?25rpx?%%}.order-bottom .total{height:%%?106rpx?%%;padding-top:%%?20rpx?%%;border-bottom:1px solid #f4f4f4}.order-bottom .total .t{height:%%?25rpx?%%;line-height:%%?25rpx?%%;margin-bottom:%%?7.5rpx?%%;display:flex}.order-bottom .total .label{width:%%?140rpx?%%;display:inline-block;height:%%?35rpx?%%;line-height:%%?35rpx?%%;font-size:%%?25rpx?%%}.order-bottom .total .txt{flex:1;display:inline-block;height:%%?35rpx?%%;line-height:%%?35rpx?%%;font-size:%%?25rpx?%%}.order-bottom .pay-fee{height:%%?81rpx?%%;line-height:%%?81rpx?%%}.order-bottom .pay-fee .label{display:inline-block;width:%%?140rpx?%%;color:#b4282d}.order-bottom .pay-fee .txt{display:inline-block;width:%%?140rpx?%%;color:#b4282d}.line-status{display:inline-block;width:%%?200rpx?%%}.options-refund{height:%%?40rpx?%%;text-align:right;display:inline-block}.refund-btn{display:inline-block;height:%%?40rpx?%%;font-size:%%?30rpx?%%;line-height:%%?30rpx?%%;padding:%%?5rpx?%% %%?20rpx?%%}.actions{text-align:right}.action{display:inline;height:%%?60rpx?%%;font-size:%%?30rpx?%%;line-height:%%?30rpx?%%;padding:%%?15rpx?%% %%?20rpx?%%}@code-separator-line:__wxRoute = "pages/ucenter/orderDetail/orderDetail";__wxRouteBegin = true;
define("pages/ucenter/orderDetail/orderDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
const pay = require('../../../services/pay.js');


Page({
  data: {
    order_number: 0,
    orderInfo: {},
    orderGoods: [],
    handleOption: {},
    Host: api.Host,
    ss_type: null,
    order_status: { "Unpaid": "未付款", "Paid": "已付款", "Complete": "已完成",
        "Cancelled": "已取消", 'Pending':'待发货', 'Transporting':'运输中',
        'Apply refund':'申请退款待审核', 'Apply return':'申请退货待审核',
        'Waiting for goods':'退货运输中', 'Refund':'退款完成', 'Return':'退货完成' }

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      order_number: options.order_number,
      ss_type: options.ss_type,

    });
    this.getOrderDetail(true);
  },
  getOrderDetail(key){
    let that = this;
    util.request(api.OrderDetail + that.data.order_number +'/', {
    //   orderId: that.data.orderId
    }).then(function (res) {
        if (res.length == null) {
            res['ord_status'] = that.data.order_status[res[0].status]
        }else {
            res[0]['ord_status'] = that.data.order_status[res[0].status]
        }
        for(var i=0; i<res[0].lines.length; i++){
            res[0].lines[i].line_status = that.data.order_status[res[0].lines[i].status]
        }


        that.setData({
          orderInfo: res[0],
        //   orderGoods: res.data.orderGoods,
        //   handleOption: res.data.handleOption
        });
        if(that.data.orderInfo.status == 'Unpaid' && key){
            that.orderPaymentQuery();
        };
        //that.payTimer();

    });
  },

    returnGoods: function(){
        let that = this
        util.request().then(function(res){
            if(res.length == null){

            }
        })

    },
    onlyRefund: function(){
        let that = this
        util.reqeust().then(function(res){
            if(res.lentgth == null){

            }
        })
    },
    line_complete: function(event){
        var line_id = event.target.dataset.lineId;
        let that = this
        util.request(api.LineCompele.replace(/{order_number}/, that.data.order_number).replace(/{line_id}/, line_id), {}, 'POST').then(function(res){
            if(res.errno===0){
                that.getOrderDetail();
            }
        })
    },

  payTimer: function() {
    let that = this;
    let orderInfo = that.data.orderInfo;

    setInterval(() => {
      orderInfo.add_time -= 1;
      that.setData({
        orderInfo: orderInfo,
      });
    }, 1000);
  },
  cancelOrder: function(){
      let that = this;
      util.request(api.OrderCancel.replace(/{}/, that.data.orderInfo.number),
        {}).then(function (res) {
        if (res.errno === 0) {
            that.getOrderDetail();
        }else{
            wx.showToast({
              title: '取消失败'
            });
        }
      });

  },
  payOrder: function() {
    let that = this;
    const ordernum = that.data.orderInfo.number;

    wx.navigateTo({
        url: '../../pay/pay?order_number=' + ordernum + '&actualPrice='+ that.data.orderInfo.total_incl_tax
    })



    // pay.payOrder(parseInt(ordernum), 'alipay_wap').then(res => {
    //     __wxConfig__.start_pay(res+'&redirect_url='+encodeURIComponent(api.SSL+'/static/h5/index.html#!pages/ucenter/orderDetail/orderDetail?order_number='+ordernum))
    // }).catch(res => {
    //     __wxConfig__.start_pay(res+'&redirect_url='+encodeURIComponent(api.SSL+'/static/h5/index.html#!pages/ucenter/orderDetail/orderDetail?order_number='+ordernum))
    // });
    // util.request(api.Payment.replace(/{}/, that.data.orderInfo.number), {},
    //     'post').then(function (res) {
    //   if (res.errno === 0) {
    //
    //   }
    // });

  },
  orderPaymentQuery: function(){
      let that = this
      util.request(api.OrderPaymentQuery.replace(/{ordernum}/, that.data.orderInfo.number),
        {}, 'POST').then(function (res) {
            if(res.errno === 0){
                that.getOrderDetail()
            }
        })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})

});require("pages/ucenter/orderDetail/orderDetail.js")@code-separator-line:["div","view","image","text","navigator"]