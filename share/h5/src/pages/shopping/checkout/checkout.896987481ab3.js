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
    Z([3, 'container']);Z([3, 'address-box']);Z([[6],[[7],[3, "checkedAddress"]],[3, "id"]]);Z([3, 'selectAddress']);Z([3, 'address-item']);Z([3, 'l']);Z([3, 'name']);Z([a, [[6],[[7],[3, "checkedAddress"]],[3, "name"]]]);Z([[2, "==="], [[6],[[7],[3, "checkedAddress"]],[3, "is_default"]], [1, 1]]);Z([3, 'default']);Z([3, '默认']);Z([3, 'm']);Z([3, 'mobile']);Z([a, [[6],[[7],[3, "checkedAddress"]],[3, "mobile"]]]);Z([3, 'address']);Z([a, [[2, "+"], [[6],[[7],[3, "checkedAddress"]],[3, "full_region"]], [[6],[[7],[3, "checkedAddress"]],[3, "address"]]]]);Z([3, 'r']);Z([3, '/static/images/address_right.png']);Z([[2, "!"], [[6],[[7],[3, "checkedAddress"]],[3, "id"]]]);Z([3, 'addAddress']);Z([3, 'address-item address-empty']);Z([3, '\n               还没有收货地址，去添加\n            ']);Z([3, 'coupon-box']);Z([3, 'order-box']);Z([3, 'order-item']);Z([3, '商品合计']);Z([3, 'txt']);Z([a, [3, '￥'],[[7],[3, "goodsTotalPrice"]]]);Z([3, '运费']);Z([a, [3, '￥'],[[7],[3, "freightPrice"]]]);Z([3, 'goods-items']);Z([[7],[3, "checkedGoodsList"]]);Z([[6],[[7],[3, "item"]],[3, "id"]]);Z([3, 'item']);Z([3, 'img']);Z([a, [[7],[3, "host"]],[[6],[[7],[3, "item"]],[3, "list_pic_url"]]]);Z([3, 'info']);Z([3, 't']);Z([a, [[6],[[7],[3, "item"]],[3, "goods_name"]]]);Z([3, 'number']);Z([a, [3, 'x'],[[6],[[7],[3, "item"]],[3, "number"]]]);Z([a, [[6],[[7],[3, "item"]],[3, "goods_specifition_name_value"]]]);Z([3, 'b']);Z([a, [3, '￥'],[[6],[[7],[3, "item"]],[3, "retail_price"]]]);Z([3, 'order-total']);Z([a, [3, '实付：￥'],[[7],[3, "actualPrice"]]]);Z([3, 'submitOrder']);Z([3, '去付款']);Z([[7],[3, "pay_url"]]);
  })(z);d_["./pages/shopping/checkout/checkout.wxml"] = {};
  var m0=function(e,s,r,gg){
    var ojL = _n("view");_r(ojL, 'class', 0, e, s, gg);var okL = _n("view");_r(okL, 'class', 1, e, s, gg);var olL = _v();
      if (_o(2, e, s, gg)) {
        olL.wxVkey = 1;var omL = _m( "view", ["bindtap", 3,"class", 1], e, s, gg);var ooL = _n("view");_r(ooL, 'class', 5, e, s, gg);var opL = _n("text");_r(opL, 'class', 6, e, s, gg);var oqL = _o(7, e, s, gg);_(opL,oqL);_(ooL,opL);var orL = _v();
      if (_o(8, e, s, gg)) {
        orL.wxVkey = 1;var osL = _n("text");_r(osL, 'class', 9, e, s, gg);var ouL = _o(10, e, s, gg);_(osL,ouL);_(orL, osL);
      } _(ooL,orL);_(omL,ooL);var ovL = _n("view");_r(ovL, 'class', 11, e, s, gg);var owL = _n("text");_r(owL, 'class', 12, e, s, gg);var oxL = _o(13, e, s, gg);_(owL,oxL);_(ovL,owL);var oyL = _n("text");_r(oyL, 'class', 14, e, s, gg);var ozL = _o(15, e, s, gg);_(oyL,ozL);_(ovL,oyL);_(omL,ovL);var o_L = _n("view");_r(o_L, 'class', 16, e, s, gg);var oAM = _n("image");_r(oAM, 'src', 17, e, s, gg);_(o_L,oAM);_(omL,o_L);_(olL, omL);
      } _(okL,olL);var oBM = _v();
      if (_o(18, e, s, gg)) {
        oBM.wxVkey = 1;var oCM = _m( "view", ["bindtap", 19,"class", 1], e, s, gg);var oEM = _n("view");_r(oEM, 'class', 11, e, s, gg);var oFM = _o(21, e, s, gg);_(oEM,oFM);_(oCM,oEM);var oGM = _n("view");_r(oGM, 'class', 16, e, s, gg);var oHM = _n("image");_r(oHM, 'src', 17, e, s, gg);_(oGM,oHM);_(oCM,oGM);_(oBM, oCM);
      } _(okL,oBM);_(ojL,okL);var oIM = _n("view");_r(oIM, 'class', 22, e, s, gg);_(ojL,oIM);var oJM = _n("view");_r(oJM, 'class', 23, e, s, gg);var oKM = _n("view");_r(oKM, 'class', 24, e, s, gg);var oLM = _n("view");_r(oLM, 'class', 5, e, s, gg);var oMM = _n("text");_r(oMM, 'class', 6, e, s, gg);var oNM = _o(25, e, s, gg);_(oMM,oNM);_(oLM,oMM);_(oKM,oLM);var oOM = _n("view");_r(oOM, 'class', 16, e, s, gg);var oPM = _n("text");_r(oPM, 'class', 26, e, s, gg);var oQM = _o(27, e, s, gg);_(oPM,oQM);_(oOM,oPM);_(oKM,oOM);_(oJM,oKM);var oRM = _n("view");_r(oRM, 'class', 24, e, s, gg);var oSM = _n("view");_r(oSM, 'class', 5, e, s, gg);var oTM = _n("text");_r(oTM, 'class', 6, e, s, gg);var oUM = _o(28, e, s, gg);_(oTM,oUM);_(oSM,oTM);_(oRM,oSM);var oVM = _n("view");_r(oVM, 'class', 16, e, s, gg);var oWM = _n("text");_r(oWM, 'class', 26, e, s, gg);var oXM = _o(29, e, s, gg);_(oWM,oXM);_(oVM,oWM);_(oRM,oVM);_(oJM,oRM);_(ojL,oJM);var oYM = _n("view");_r(oYM, 'class', 30, e, s, gg);var oZM = _v();var oaM = function(oeM,odM,ocM,gg){var obM = _n("view");_r(obM, 'class', 33, oeM, odM, gg);var ogM = _n("view");_r(ogM, 'class', 34, oeM, odM, gg);var ohM = _n("image");_r(ohM, 'src', 35, oeM, odM, gg);_(ogM,ohM);_(obM,ogM);var oiM = _n("view");_r(oiM, 'class', 36, oeM, odM, gg);var ojM = _n("view");_r(ojM, 'class', 37, oeM, odM, gg);var okM = _n("text");_r(okM, 'class', 6, oeM, odM, gg);var olM = _o(38, oeM, odM, gg);_(okM,olM);_(ojM,okM);var omM = _n("text");_r(omM, 'class', 39, oeM, odM, gg);var onM = _o(40, oeM, odM, gg);_(omM,onM);_(ojM,omM);_(oiM,ojM);var ooM = _n("view");_r(ooM, 'class', 11, oeM, odM, gg);var opM = _o(41, oeM, odM, gg);_(ooM,opM);_(oiM,ooM);var oqM = _n("view");_r(oqM, 'class', 42, oeM, odM, gg);var orM = _o(43, oeM, odM, gg);_(oqM,orM);_(oiM,oqM);_(obM,oiM);_(ocM, obM);return ocM;};_2(31, oaM, e, s, gg, oZM, "item", "index", '{{item.id}}');_(oYM,oZM);_(ojL,oYM);var osM = _n("view");_r(osM, 'class', 44, e, s, gg);var otM = _n("view");_r(otM, 'class', 5, e, s, gg);var ouM = _o(45, e, s, gg);_(otM,ouM);_(osM,otM);var ovM = _m( "view", ["class", 16,"bindtap", 30], e, s, gg);var owM = _o(47, e, s, gg);_(ovM,owM);_(osM,ovM);_(ojL,osM);_(r,ojL);var oxM = _v();
      if (_o(48, e, s, gg)) {
        oxM.wxVkey = 1;var oyM = _n("web-view");_r(oyM, 'src', 48, e, s, gg);_(oxM, oyM);
      } _(r,oxM);
    return r;
  };
        e_["./pages/shopping/checkout/checkout.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:body{height:100%;background:#f4f4f4}.address-box{width:100%;height:%%?166.55rpx?%%;background:url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-bg-bd30f2bfeb.png) 0 0 repeat-x;background-size:%%?62.5rpx?%% %%?10.5rpx?%%;margin-bottom:%%?20rpx?%%;padding-top:%%?10.5rpx?%%}.address-item{display:flex;height:%%?155.55rpx?%%;background:#fff;padding:%%?41.6rpx?%% 0 %%?41.6rpx?%% %%?31.25rpx?%%}.address-item.address-empty{line-height:%%?75rpx?%%;text-align:center}.address-box .l{width:%%?125rpx?%%;height:100%}.address-box .l .name{margin-left:%%?6.25rpx?%%;margin-top:%%?-7.25rpx?%%;display:block;width:%%?125rpx?%%;height:%%?43rpx?%%;line-height:%%?43rpx?%%;font-size:%%?30rpx?%%;color:#333;margin-bottom:%%?5rpx?%%}.address-box .l .default{margin-left:%%?6.25rpx?%%;display:block;width:%%?62rpx?%%;height:%%?33rpx?%%;border-radius:%%?5rpx?%%;border:1px solid #b4282d;font-size:%%?20.5rpx?%%;text-align:center;line-height:%%?29rpx?%%;color:#b4282d}.address-box .m{flex:1;height:%%?72.25rpx?%%;color:#999}.address-box .mobile{display:block;height:%%?29rpx?%%;line-height:%%?29rpx?%%;margin-bottom:%%?6.25rpx?%%;font-size:%%?30rpx?%%;color:#333}.address-box .address{display:block;height:%%?37.5rpx?%%;line-height:%%?37.5rpx?%%;font-size:%%?25rpx?%%;color:#666}.address-box .r{width:%%?77rpx?%%;height:%%?77rpx?%%;display:flex;justify-content:center;align-items:center}.address-box .r wx-image{width:%%?52.078rpx?%%;height:%%?52.078rpx?%%}.coupon-box{width:100%;height:auto;overflow:hidden;background:#fff}.coupon-box .coupon-item{width:100%;height:%%?108.3rpx?%%;overflow:hidden;background:#fff;display:flex;padding-left:%%?31.25rpx?%%}.coupon-box .l{flex:1;height:%%?43rpx?%%;line-height:%%?43rpx?%%;padding-top:%%?35rpx?%%}.coupon-box .l .name{float:left;font-size:%%?30rpx?%%;color:#666}.coupon-box .l .txt{float:right;font-size:%%?30rpx?%%;color:#666}.coupon-box .r{margin-top:%%?15.5rpx?%%;width:%%?77rpx?%%;height:%%?77rpx?%%;display:flex;justify-content:center;align-items:center}.coupon-box .r wx-image{width:%%?52.078rpx?%%;height:%%?52.078rpx?%%}.order-box{margin-top:%%?20rpx?%%;width:100%;height:auto;overflow:hidden;background:#fff}.order-box .order-item{height:%%?104.3rpx?%%;overflow:hidden;background:#fff;display:flex;margin-left:%%?31.25rpx?%%;padding-right:%%?31.25rpx?%%;padding-top:%%?26rpx?%%;border-bottom:1px solid #d9d9d9}.order-box .order-item .l{float:left;height:%%?52rpx?%%;width:50%;line-height:%%?52rpx?%%;overflow:hidden}.order-box .order-item .r{float:right;text-align:right;width:50%;height:%%?52rpx?%%;line-height:%%?52rpx?%%;overflow:hidden}.order-box .order-item.no-border{border-bottom:none}.goods-items{margin-top:%%?20rpx?%%;width:100%;height:auto;overflow:hidden;background:#fff;padding-left:%%?31.25rpx?%%;margin-bottom:%%?120rpx?%%}.goods-items .item{height:%%?192rpx?%%;padding-right:%%?31.25rpx?%%;display:flex;align-items:center;border-bottom:1px solid rgba(0,0,0,.15)}.goods-items .item.no-border{border-bottom:none}.goods-items .item:last-child{border-bottom:none}.goods-items .img{height:%%?145.83rpx?%%;width:%%?145.83rpx?%%;background-color:#f4f4f4;margin-right:%%?20rpx?%%}.goods-items .img wx-image{height:%%?145.83rpx?%%;width:%%?145.83rpx?%%}.goods-items .info{flex:1;height:%%?145.83rpx?%%;padding-top:%%?5rpx?%%}.goods-items .t{height:%%?33rpx?%%;line-height:%%?33rpx?%%;margin-bottom:%%?10rpx?%%;overflow:hidden;font-size:%%?30rpx?%%;color:#333}.goods-items .t .name{display:block;float:left}.goods-items .t .number{display:block;float:right;text-align:right}.goods-items .m{height:%%?29rpx?%%;overflow:hidden;line-height:%%?29rpx?%%;margin-bottom:%%?25rpx?%%;font-size:%%?25rpx?%%;color:#666}.goods-items .b{height:%%?41rpx?%%;overflow:hidden;line-height:%%?41rpx?%%;font-size:%%?30rpx?%%;color:#333}.order-total{position:fixed;left:0;bottom:0;height:%%?100rpx?%%;width:100%;display:flex}.order-total .l{flex:1;height:%%?100rpx?%%;line-height:%%?100rpx?%%;color:#b4282d;background:#fff;font-size:%%?33rpx?%%;padding-left:%%?31.25rpx?%%;border-top:%%?1rpx?%% solid rgba(0,0,0,.2);border-bottom:%%?1rpx?%% solid rgba(0,0,0,.2)}.order-total .r{width:%%?233rpx?%%;height:%%?100rpx?%%;background:#b4282d;border:1px solid #b4282d;line-height:%%?100rpx?%%;text-align:center;color:#fff;font-size:%%?30rpx?%%}@code-separator-line:__wxRoute = "pages/shopping/checkout/checkout";__wxRouteBegin = true;
define("pages/shopping/checkout/checkout.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
const user = require('../../../services/user.js');
const pay = require('../../../services/pay.js');

var app = getApp();

Page({
  data: {
    checkedGoodsList: [],
    checkedAddress: {},
    checkedCoupon: [],
    couponList: [],
    goodsTotalPrice: 0.00, //商品总价
    freightPrice: 0.00,    //快递费
    couponPrice: 0.00,     //优惠券的价格
    orderTotalPrice: 0.00,  //订单总价
    actualPrice: 0.00,     //实际需要支付的总价
    addressId: 0,
    couponId: 0,
    host: api.Host,
    pay_url:null
  },
  onLoad: function (options) {

    // 页面初始化 options为页面跳转所带来的参数

    var address_id = options.address_id || 0
    this.setData({
      'addressId': address_id
    })
  },
  getCheckoutInfo: function () {
    let that = this;
    util.request(api.CartCheckout, { 'get_data': 1,'addr_id':this.data.addressId }).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          checkedGoodsList: res.data.checkedGoodsList,
          checkedAddress: res.data.checkedAddress,
          actualPrice: res.data.actualPrice,
          checkedCoupon: res.data.checkedCoupon,
          // couponList: res.data.couponList,
          // couponPrice: res.data.couponPrice,
          // freightPrice: res.data.freightPrice,
          goodsTotalPrice: res.data.goodsTotalPrice,
          // orderTotalPrice: res.data.orderTotalPrice,
          addressId: res.data.checkedAddress.id
        });
        }else if(res.errno == 10){
            wx.navigateTo({
              url: '/pages/index/index',
            })
        }
      wx.hideLoading();
    });
  },
  selectAddress() {
    wx.navigateTo({
      url: '/pages/shopping/address/address',
    })
  },
  addAddress() {
    wx.navigateTo({
      url: '/pages/shopping/addressAdd/addressAdd',
    })
  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {
    // 页面显示
    wx.showLoading({
      title: '加载中...',
    })
    this.getCheckoutInfo();

  },
  onHide: function () {
    // 页面隐藏

  },
  onPullDownRefresh: function(){
      this.onShow()
  },
  onUnload: function () {
    // 页面关闭

  },
    submitOrder: function () {
        if (this.data.addressId <= 0) {
            util.showErrorToast('请选择收货地址');
            return false;
        }
        util.request(api.OrderSubmit,
            {
                 addr_id: this.data.addressId,
                 couponId: this.data.couponId,
            },
        'POST').then(res => {
            const ordernum = res.data.orderInfo.num;
            if(res.errno === 0){
                wx.navigateTo({
                  url: '/pages/pay/pay?order_number={order_no}'.replace(/{order_no}/, ordernum),
                })
            }else{
                util.showErrorToast('下单失败');
            }
        });
    }
})

});require("pages/shopping/checkout/checkout.js")@code-separator-line:["div","view","text","image","web-view"]