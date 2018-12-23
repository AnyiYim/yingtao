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
    Z([3, 'container']);Z([3, 'user-menu']);Z([3, 'item item-order']);Z([3, 'getSaleorderlist']);Z([3, 'item1']);Z([3, '1']);Z([3, 'presale']);Z([3, 'a1']);Z([a, [3, 'txt  '],[[2,'?:'],[[2, "=="], [[7],[3, "_num"]], [1, 1]],[1, "activate"],[1, ""]]]);Z([3, ' 全部']);Z([3, 'item1 ']);Z([3, '2']);Z([3, 'Unpaid']);Z([3, 'Pending']);Z([a, [3, 'txt '],[[2,'?:'],[[2, "=="], [[7],[3, "_num"]], [1, 2]],[1, "activate"],[1, ""]]]);Z([3, '待付款']);Z([3, '3']);Z([3, 'Paid']);Z([3, 'a1 ']);Z([a, [3, 'txt  '],[[2,'?:'],[[2, "=="], [[7],[3, "_num"]], [1, 3]],[1, "activate"],[1, ""]]]);Z([3, '待发货']);Z([3, '4']);Z([3, 'Transporting']);Z([a, [3, 'txt '],[[2,'?:'],[[2, "=="], [[7],[3, "_num"]], [1, 4]],[1, "activate"],[1, ""]]]);Z([3, '已发货']);Z([3, '5']);Z([3, 'Complete']);Z([a, [3, 'txt '],[[2,'?:'],[[2, "=="], [[7],[3, "_num"]], [1, 5]],[1, "activate"],[1, ""]]]);Z([3, '已收货']);Z([3, '6']);Z([a, [3, 'txt '],[[2,'?:'],[[2, "=="], [[7],[3, "_num"]], [1, 6]],[1, "activate"],[1, ""]]]);Z([3, '售后']);Z([3, 'publish-tip']);Z([3, 'pt-l']);Z([3, 'static/images/user/']);Z([3, 'pt-r']);Z([3, '港澳台不包邮！']);Z([3, 'orders']);Z([[7],[3, "orderList"]]);Z([[6],[[7],[3, "item"]],[3, "number"]]);Z([3, 'order']);Z([a, [3, '../orderDetail/orderDetail?order_number\x3d'],[[6],[[7],[3, "item"]],[3, "number"]]]);Z([3, 'order-split-line']);Z([3, 'h']);Z([3, 'l']);Z([a, [3, '订单编号：'],[[6],[[7],[3, "item"]],[3, "number"]]]);Z([3, 'r']);Z([a, [[6],[[7],[3, "item"]],[3, "order_status"]]]);Z([[6],[[7],[3, "item"]],[3, "lines"]]);Z([3, 'gitem']);Z([[6],[[7],[3, "gitem"]],[3, "id"]]);Z([3, 'goods']);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "gitem"]],[3, "product_thumb"]]]);Z([3, 'info']);Z([3, 't']);Z([3, 'name']);Z([a, [[6],[[7],[3, "gitem"]],[3, "title"]]]);Z([3, 'number']);Z([a, [3, '￥'],[[6],[[7],[3, "gitem"]],[3, "unit_price_incl_tax"]]]);Z([3, 'attr']);Z([a, [[6],[[7],[3, "item"]],[3, "goods_specifition_name_value"]]]);Z([3, 'status']);Z([3, 'b']);Z([a, [3, '实付：￥'],[[6],[[7],[3, "item"]],[3, "total_incl_tax"]]]);Z([[2, "!="], [[6],[[7],[3, "item"]],[3, "shipping_state"]], [1, "untransporting"]]);Z([3, 'gologistics']);Z([3, 's2 s2-logistics']);Z([3, '\n                    查看物流\n                ']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "status"]], [1, "Unpaid"]]);Z([3, 'go_pay_page']);Z([3, 's2 s2-gopay']);Z([[6],[[7],[3, "item"]],[3, "total_incl_tax"]]);Z([3, '\n                    去支付\n               ']);Z([[2, "&&"],[[2, "=="], [[6],[[7],[3, "item"]],[3, "shipping_state"]], [1, "untransporting"]],[[2, "=="], [[6],[[7],[3, "item"]],[3, "status"]], [1, "Paid"]]]);Z([3, 's2 s2-no']);Z([3, '\n                   未发货\n               ']);Z([[2, "!"], [[7],[3, "loading_next"]]]);Z([3, 'show-loading']);Z([3, 'show-loading-text']);Z([3, '加载中...']);Z([[7],[3, "is_all_loaded"]]);Z([3, 'show-loading01']);Z([3, '\n            已经到底了\n        ']);Z([3, 'no-data']);Z([a, [3, 'display:'],[[7],[3, "nodata"]]]);Z([3, '您还没有相关订单哦！！！']);
  })(z);d_["./pages/ucenter/preOrder/preOrder.wxml"] = {};
  var m0=function(e,s,r,gg){
    var oud = _n("view");_r(oud, 'class', 0, e, s, gg);var ovd = _n("view");_r(ovd, 'class', 1, e, s, gg);var owd = _n("view");_r(owd, 'class', 2, e, s, gg);var oxd = _m( "view", ["data-status", -1,"data-transport", -1,"bindtap", 3,"class", 1,"data-num", 2,"data-salekey", 3], e, s, gg);var oyd = _n("view");_r(oyd, 'class', 7, e, s, gg);var ozd = _n("view");_r(ozd, 'class', 8, e, s, gg);var o_d = _o(9, e, s, gg);_(ozd,o_d);_(oyd,ozd);_(oxd,oyd);_(owd,oxd);var oAe = _m( "view", ["bindtap", 3,"data-salekey", 3,"class", 7,"data-num", 8,"data-status", 9,"data-transport", 10], e, s, gg);var oBe = _n("view");_r(oBe, 'class', 7, e, s, gg);var oCe = _n("view");_r(oCe, 'class', 14, e, s, gg);var oDe = _o(15, e, s, gg);_(oCe,oDe);_(oBe,oCe);_(oAe,oBe);_(owd,oAe);var oEe = _m( "view", ["bindtap", 3,"class", 1,"data-salekey", 3,"data-transport", 10,"data-num", 13,"data-status", 14], e, s, gg);var oFe = _n("view");_r(oFe, 'class', 18, e, s, gg);var oGe = _n("view");_r(oGe, 'class', 19, e, s, gg);var oHe = _o(20, e, s, gg);_(oGe,oHe);_(oFe,oGe);_(oEe,oFe);_(owd,oEe);var oIe = _m( "view", ["bindtap", 3,"data-salekey", 3,"class", 7,"data-num", 18,"data-status", 19,"data-transport", 19], e, s, gg);var oJe = _n("view");_r(oJe, 'class', 7, e, s, gg);var oKe = _n("view");_r(oKe, 'class', 23, e, s, gg);var oLe = _o(24, e, s, gg);_(oKe,oLe);_(oJe,oKe);_(oIe,oJe);_(owd,oIe);var oMe = _m( "view", ["bindtap", 3,"data-salekey", 3,"class", 7,"data-num", 22,"data-status", 23,"data-transport", 23], e, s, gg);var oNe = _n("view");_r(oNe, 'class', 7, e, s, gg);var oOe = _n("view");_r(oOe, 'class', 27, e, s, gg);var oPe = _o(28, e, s, gg);_(oOe,oPe);_(oNe,oOe);_(oMe,oNe);_(owd,oMe);var oQe = _m( "view", ["bindtap", 3,"data-salekey", 3,"class", 7,"data-status", 23,"data-transport", 23,"data-num", 26], e, s, gg);var oRe = _m( "view", ["url", -1,"class", 18], e, s, gg);var oSe = _n("view");_r(oSe, 'class', 30, e, s, gg);var oTe = _o(31, e, s, gg);_(oSe,oTe);_(oRe,oSe);_(oQe,oRe);_(owd,oQe);_(ovd,owd);_(oud,ovd);var oUe = _n("view");_r(oUe, 'class', 32, e, s, gg);var oVe = _n("view");_r(oVe, 'class', 33, e, s, gg);var oWe = _n("image");_r(oWe, 'src', 34, e, s, gg);_(oVe,oWe);_(oUe,oVe);var oXe = _n("view");_r(oXe, 'class', 35, e, s, gg);var oYe = _o(36, e, s, gg);_(oXe,oYe);_(oUe,oXe);_(oud,oUe);var oZe = _n("view");_r(oZe, 'class', 37, e, s, gg);var oae = _v();var obe = function(ofe,oee,ode,gg){var oce = _m( "navigator", ["class", 40,"url", 1], ofe, oee, gg);var ohe = _n("view");_r(ohe, 'class', 42, ofe, oee, gg);_(oce,ohe);var oie = _n("view");_r(oie, 'class', 43, ofe, oee, gg);var oje = _n("view");_r(oje, 'class', 44, ofe, oee, gg);var oke = _o(45, ofe, oee, gg);_(oje,oke);_(oie,oje);var ole = _n("view");_r(ole, 'class', 46, ofe, oee, gg);var ome = _o(47, ofe, oee, gg);_(ole,ome);_(oie,ole);_(oce,oie);var one = _v();var ooe = function(ose,ore,oqe,gg){var ope = _n("view");_r(ope, 'class', 51, ose, ore, gg);var oue = _n("view");_r(oue, 'class', 52, ose, ore, gg);var ove = _n("image");_r(ove, 'src', 53, ose, ore, gg);_(oue,ove);_(ope,oue);var owe = _n("view");_r(owe, 'class', 54, ose, ore, gg);var oxe = _n("view");_r(oxe, 'class', 55, ose, ore, gg);var oye = _n("text");_r(oye, 'class', 56, ose, ore, gg);var oze = _o(57, ose, ore, gg);_(oye,oze);_(oxe,oye);var o_e = _n("text");_r(o_e, 'class', 58, ose, ore, gg);var oAf = _o(59, ose, ore, gg);_(o_e,oAf);_(oxe,o_e);_(owe,oxe);var oBf = _n("view");_r(oBf, 'class', 60, ose, ore, gg);var oCf = _o(61, ose, ore, gg);_(oBf,oCf);_(owe,oBf);_(ope,owe);var oDf = _n("view");_r(oDf, 'class', 62, ose, ore, gg);_(ope,oDf);_(oqe, ope);return oqe;};_2(48, ooe, ofe, oee, gg, one, "gitem", "index", '{{gitem.id}}');_(oce,one);var oEf = _n("view");_r(oEf, 'class', 63, ofe, oee, gg);var oFf = _n("view");_r(oFf, 'class', 44, ofe, oee, gg);var oGf = _o(64, ofe, oee, gg);_(oFf,oGf);_(oEf,oFf);var oHf = _v();
      if (_o(65, ofe, oee, gg)) {
        oHf.wxVkey = 1;var oIf = _m( "view", ["data-order_number", 39,"catchtap", 27,"class", 28], ofe, oee, gg);var oKf = _o(68, ofe, oee, gg);_(oIf,oKf);_(oHf, oIf);
      } _(oEf,oHf);var oLf = _v();
      if (_o(69, ofe, oee, gg)) {
        oLf.wxVkey = 1;var oMf = _m( "view", ["data-numberId", 39,"data-order_number", 0,"catchtap", 31,"class", 32,"data-totalprice", 33], ofe, oee, gg);var oOf = _o(73, ofe, oee, gg);_(oMf,oOf);_(oLf, oMf);
      } _(oEf,oLf);var oPf = _v();
      if (_o(74, ofe, oee, gg)) {
        oPf.wxVkey = 1;var oQf = _n("view");_r(oQf, 'class', 75, ofe, oee, gg);var oSf = _o(76, ofe, oee, gg);_(oQf,oSf);_(oPf, oQf);
      } _(oEf,oPf);_(oce,oEf);_(ode, oce);return ode;};_2(38, obe, e, s, gg, oae, "item", "index", '{{item.number}}');_(oZe,oae);var oTf = _v();
      if (_o(77, e, s, gg)) {
        oTf.wxVkey = 1;var oUf = _n("view");_r(oUf, 'class', 78, e, s, gg);var oWf = _n("view");_r(oWf, 'class', 79, e, s, gg);var oXf = _o(80, e, s, gg);_(oWf,oXf);_(oUf,oWf);_(oTf, oUf);
      } _(oZe,oTf);var oYf = _v();
      if (_o(81, e, s, gg)) {
        oYf.wxVkey = 1;var oZf = _n("view");_r(oZf, 'class', 82, e, s, gg);var obf = _o(83, e, s, gg);_(oZf,obf);_(oYf, oZf);
      } _(oZe,oYf);_(oud,oZe);var ocf = _m( "view", ["class", 84,"style", 1], e, s, gg);var odf = _o(86, e, s, gg);_(ocf,odf);_(oud,ocf);_(r,oud);
    return r;
  };
        e_["./pages/ucenter/preOrder/preOrder.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:body{height:100%;width:100%;background:#f4f4f4}.orders{height:auto;width:100%;overflow:hidden}.order{background:#fff}.order .order-split-line{height:%%?20rpx?%%;background:#f2f2f2}.order .h{height:%%?83.3rpx?%%;line-height:%%?83.3rpx?%%;margin-left:%%?26rpx?%%;padding-right:%%?31.25rpx?%%;border-bottom:1px solid #f4f4f4;font-size:%%?28rpx?%%;color:#333}.order .h .l{float:left}.order .h .r{float:right;color:#b4282d;font-size:%%?28rpx?%%}.order .goods{display:flex;align-items:center;height:%%?180rpx?%%;margin-left:%%?26rpx?%%}.order .goods .img{height:%%?145.83rpx?%%;width:%%?145.83rpx?%%;background:#f4f4f4}.order .goods .img wx-image{height:%%?145.83rpx?%%;width:%%?145.83rpx?%%}.order .goods .info{height:%%?145.83rpx?%%;padding-left:%%?20rpx?%%;flex:%%?750rpx?%%}.order .goods .name{height:%%?44rpx?%%;width:80%;line-height:%%?44rpx?%%;color:#333;font-size:%%?30rpx?%%;display:inline-block}.order .goods .number{height:%%?44rpx?%%;line-height:%%?44rpx?%%;color:#666;font-size:%%?25rpx?%%;width:19%;display:inline-block;text-align:right;float:right}.order .goods .price{display:block;height:%%?37rpx?%%;line-height:%%?37rpx?%%;color:#333;text-align:right;font-size:%%?25rpx?%%}.order .goods .status{width:%%?105rpx?%%;color:#b4282d;font-size:%%?25rpx?%%}.order .b{height:%%?103rpx?%%;line-height:%%?103rpx?%%;margin-left:%%?26rpx?%%;padding-right:%%?31.25rpx?%%;border-top:1px solid #f4f4f4;font-size:%%?30rpx?%%;color:#333}.order .b .l{float:left}.order .b .s2{width:%%?160rpx?%%;display:inline-block;float:right}.order .b .r{float:right}.order .b .btn{margin-top:%%?19rpx?%%;height:%%?64.5rpx?%%;line-height:%%?64.5rpx?%%;text-align:center;padding:0 %%?20rpx?%%;border-radius:%%?5rpx?%%;font-size:%%?28rpx?%%;color:#fff;background:#b4282d}.user-menu{position:fixed;width:100%;top:%%?41rpx?%%;height:auto;overflow:hidden;background:#fff}.user-menu .item{height:%%?90rpx?%%;border-bottom:1px solid rgba(0,0,0,.15);margin-left:5%;line-height:%%?89rpx?%%}.user-menu .item-order{border-bottom:0 solid #ccc;width:inherit}.user-menu .item-order .item1{text-align:center;display:inline-block;width:15%}.publish-tip{margin-top:%%?90rpx?%%;height:%%?72rpx?%%;width:inherit;background:#fef8db;line-height:%%?72rpx?%%}.publish-tip .pt-l{display:inline-block;height:inherit;line-height:inherit;margin-left:%%?30rpx?%%}.publish-tip .pt-l{width:%%?40rpx?%%;height:%%?40rpx?%%}.publish-tip .pt-r{margin-left:%%?30rpx?%%;display:inline-block;height:%%?72rpx?%%;line-height:%%?72rpx?%%;font-size:%%?28rpx?%%;color:#e6943b;float:left}.no-data{display:show;top:40%;position:relative;background:#fff;text-align:center}.activate{color:#cc2020;border-bottom:2px solid #cc2020}.to-logistics{width:inherit;color:red;margin-left:%%?20rpx?%%;text-align:right}.s2.s2-gopay{background:#cc2020;height:%%?80rpx?%%;color:#fff;line-height:%%?80rpx?%%;font-size:%%?28rpx?%%;margin:%%?10rpx?%% 0;border-radius:%%?8rpx?%%;width:%%?160rpx?%%;text-align:center}.s2.s2-logistics{height:%%?80rpx?%%;color:#7e7e7e;line-height:%%?80rpx?%%;font-size:%%?28rpx?%%;margin:%%?10rpx?%% 0;border-radius:%%?8rpx?%%;border:%%?1rpx?%% solid #7e7e7e;width:%%?160rpx?%%;text-align:center}.s2-no{text-align:right}@code-separator-line:__wxRoute = "pages/ucenter/preOrder/preOrder";__wxRouteBegin = true;
define("pages/ucenter/preOrder/preOrder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');

api.PayPrepayId = api.SSL + '/mini-payment/'

Page({
    data: {
        orderList: [],
        Host: api.Host,
        nodata: 'none',
        _num: 1,
        order_status: { "Unpaid": "未付款", "Paid": "已付款", "Complete": "已完成", "Transporting":"已发货", "Cancelled": "已取消"},
        shipping_status:{
            "untransporting":"未发货",
            "transporting":"运输中",
            "transported":"已收货",
        },

        salekey: 'presale',
        pages_status: true,
        next_url: api.OrderList + '?is_sale=presale&page=1',
        btn_status: '',
        loading_next:false,
        is_all_loaded: false,
    },
    onLoad: function (options) {
        if(typeof(options) == "undefined"){
            var options = {"salekey": "presale"}
        }
        this.setData({
            sale_list: options.salekey,
            status: options.status,
        });
        // 页面初始化 options为页面跳转所带来的参数

        this.getOrderList();
    },
    getOrderList: function () {
        let that = this;
        util.request(this.data.next_url, { 'status': this.data.btn_status}
            ).then(function (res) {
            for (var i=0; i<res[0].length; i++){
                res[0][i]['ordre_status'] = that.data.order_status[res[0][i].status]
            }
            if (res[1]) {
                that.setData({  next_url: res[1]  })
            } else {
                that.setData({
                    next_url: null,
                    is_all_loaded: true,
                })
            }
            that.setData({
                orderList: res[0],
                loading_next:true,
            });

            if (res[0].length == 0) {
                that.setData({'nodata': 'show'})
            } else {
                that.setData({'nodata': 'none'})
            }
        });

    },

    gologistics: function(event){
        var order_number = event.currentTarget.dataset.order_number
        wx.navigateTo({
            url: '../logistics/logistics?order_number=' + order_number
        })
    },

    getSaleorderlist: function(event) {
        let that = this
        var order_status_key = event.currentTarget.dataset.status
        if(order_status_key == true){
            order_status_key= ''
        }
        that.setData({
            orderList: [],
            Host: api.Host,
            nodata: 'none',
            _num: event.currentTarget.dataset.num,
            salekey: 'presale',
            pages_status: true,
            // url_data: {},
            next_url: api.OrderList + '?is_sale=presale&page=1',
            btn_status: order_status_key,
            btn_transport: event.currentTarget.dataset.transport
        })
        this.getOrderList()
    },
    go_pay_page:function(event){
        let that =this;
        var orderId = event.currentTarget.dataset.numberId;
        var actualPrice = event.currentTarget.dataset.totalprice;
        wx.navigateTo({
        url: '../../pay/pay?orderId=' + orderId + '&actualPrice='+ actualPrice,
      })
    },
    onPullDownRefresh: function () {
        let that = this
        that.setData({
            orderList: [],
            Host: api.Host,
            nodata: 'none',
            _num: 1,
            salekey: 'presale',
            pages_status: true,
            next_url: api.OrderList + '?is_sale=presale&page=1',
            btn_status: '',
            loading_next:false,
            is_all_loaded: false,
        })
        this.getOrderList()
    },
    onReachBottom: function () {
        if (this.data.next_url) {
            if(this.data.loading_next){
                var that = this;
                var url = this.data.next_url;
                var data = { 'status': this.data.btn_status};
                var method = 'GET';
                that.setData({
                    loading_next: false
                })
                npage.nextPage(url, data, method).then(function(res){
                    // 翻译状态
                    for (var i=0; i<res[0].length; i++){
                        res[0][i]['ordre_status'] = that.data.order_status[res[0][i].status]
                    }
                    if (res[1]) {
                        that.setData({
                            next_url: res[1],
                        })
                    } else {
                        that.setData({
                            next_url: null,
                            is_all_loaded: true,
                        })
                    }
                    var list_ = that.data.orderList
                    var res_list = res[0]
                    list_ = list_.concat(res_list);
                    that.setData({
                        orderList: list_,
                        loading_next:true,
                    });
                    if (res[0].length == 0) {
                        that.setData({'nodata': 'show'})
                    } else {
                        that.setData({'nodata': 'none'})
                    }
                })
            }
            // this.getOrderList()
        }
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

});require("pages/ucenter/preOrder/preOrder.js")@code-separator-line:["div","view","image","navigator","text"]