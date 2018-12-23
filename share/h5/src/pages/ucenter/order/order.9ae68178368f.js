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
    Z([3, 'container']);Z([3, 'second-menu']);Z([3, 'selectType']);Z([a, [3, 'select-nomal  '],[[2,'?:'],[[2, "=="], [[7],[3, "select_type"]], [1, "ss_nomal"]],[1, "select-actiavte"],[1, ""]]]);Z([3, 'ss_nomal']);Z([3, '普通订单']);Z([a, [3, 'select-upgrade '],[[2,'?:'],[[2, "=="], [[7],[3, "select_type"]], [1, "ss_upgrade"]],[1, "select-actiavte"],[1, ""]]]);Z([3, 'ss_upgrade']);Z([3, '升级区已购订单']);Z([3, 'upgrade']);Z([3, 'user-menu']);Z([[2, "=="], [[7],[3, "select_type"]], [1, "ss_nomal"]]);Z([3, 'item item-order']);Z([3, 'getSaleorderlist']);Z([3, 'item1']);Z([3, '1']);Z([3, 'sale']);Z([3, 'a1']);Z([a, [3, 'txt  '],[[2,'?:'],[[2, "=="], [[7],[3, "_num"]], [1, 1]],[1, "activate"],[1, ""]]]);Z([3, ' 全部']);Z([3, 'item1 ']);Z([3, '2']);Z([3, 'Unpaid']);Z([3, 'Pending']);Z([a, [3, 'txt '],[[2,'?:'],[[2, "=="], [[7],[3, "_num"]], [1, 2]],[1, "activate"],[1, ""]]]);Z([3, '待付款']);Z([3, '3']);Z([3, 'Paid']);Z([3, 'a1 ']);Z([a, [3, 'txt  '],[[2,'?:'],[[2, "=="], [[7],[3, "_num"]], [1, 3]],[1, "activate"],[1, ""]]]);Z([3, '待发货']);Z([3, '4']);Z([3, 'Transporting']);Z([a, [3, 'txt '],[[2,'?:'],[[2, "=="], [[7],[3, "_num"]], [1, 4]],[1, "activate"],[1, ""]]]);Z([3, '已发货']);Z([3, '5']);Z([3, 'Complete']);Z([a, [3, 'txt '],[[2,'?:'],[[2, "=="], [[7],[3, "_num"]], [1, 5]],[1, "activate"],[1, ""]]]);Z([3, '已收货']);Z([3, '6']);Z([a, [3, 'txt '],[[2,'?:'],[[2, "=="], [[7],[3, "_num"]], [1, 6]],[1, "activate"],[1, ""]]]);Z([3, '售后']);Z([3, 'item2']);Z([3, 'item2 ']);Z([3, 'fill-top']);Z([3, 'orders']);Z([[2, "!="], [[7],[3, "select_type"]], [1, "ss_upgrade"]]);Z([[7],[3, "orderList"]]);Z([[6],[[7],[3, "item"]],[3, "number"]]);Z([3, 'order']);Z([a, [3, '../orderDetail/orderDetail?order_number\x3d'],[[6],[[7],[3, "item"]],[3, "number"]],[3, '\x26ss_type\x3d'],[[7],[3, "select_type"]]]);Z([3, 'order-split-line']);Z([3, 'h']);Z([3, 'l']);Z([a, [3, '订单编号：'],[[6],[[7],[3, "item"]],[3, "number"]]]);Z([3, 'r']);Z([a, [[6],[[7],[3, "item"]],[3, "order_status"]]]);Z([[6],[[7],[3, "item"]],[3, "lines"]]);Z([3, 'gitem']);Z([[6],[[7],[3, "gitem"]],[3, "id"]]);Z([3, 'goods']);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "gitem"]],[3, "product_thumb"]]]);Z([3, 'info']);Z([3, 't']);Z([3, 'name']);Z([a, [[6],[[7],[3, "gitem"]],[3, "title"]]]);Z([3, 'number']);Z([a, [3, '￥'],[[6],[[7],[3, "gitem"]],[3, "unit_price_incl_tax"]]]);Z([3, 'attr']);Z([a, [[6],[[7],[3, "item"]],[3, "goods_specifition_name_value"]]]);Z([3, 'status']);Z([3, 'b']);Z([a, [3, '实付：￥'],[[6],[[7],[3, "item"]],[3, "total_incl_tax"]]]);Z([[2, "&&"],[[2, "&&"],[[2, "!="], [[6],[[7],[3, "item"]],[3, "status"]], [1, "Paid"]],[[2, "!="], [[6],[[7],[3, "item"]],[3, "status"]], [1, "Unpaid"]]],[[2, "!="], [[6],[[7],[3, "item"]],[3, "status"]], [1, "Cancelled"]]]);Z([3, 'gologistics']);Z([3, 's2 s2-logistics']);Z([3, '\n                            查看物流\n                        ']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "status"]], [1, "Unpaid"]]);Z([3, 'goPayPage']);Z([3, 's2 s2-gopay']);Z([[6],[[7],[3, "item"]],[3, "total_incl_tax"]]);Z([3, '\n                            去支付\n                       ']);Z([[2, "&&"],[[2, "=="], [[6],[[7],[3, "item"]],[3, "status"]], [1, "Paid"]],[[2, "!="], [[6],[[7],[3, "item"]],[3, "is_refund"]], [1, 1]]]);Z([3, 's2 s2-no']);Z([3, '\n                           未发货\n                       ']);Z([3, 'vip-order']);Z([3, 'vip-goods']);Z([3, 'vip-img']);Z([3, 'vip-info']);Z([3, 'vip-name']);Z([a, [[6],[[7],[3, "gitem"]],[3, "title"]],[[6],[[7],[3, "orderList"]],[3, "length"]]]);Z([[2, "!"], [[7],[3, "loading_next"]]]);Z([3, 'show-loading']);Z([3, 'show-loading-text']);Z([3, '加载中...']);Z([[7],[3, "is_all_loaded"]]);Z([3, 'show-loading01']);Z([3, '\n                已经到底了\n            ']);Z([3, 'no-data']);Z([a, [3, 'display:'],[[7],[3, "nodata"]]]);Z([3, 'no-data-tip']);Z([a, [[7],[3, "Host"]],[3, '/static/h5/static/images/public/no_order.png']]);
  })(z);d_["./pages/ucenter/order/order.wxml"] = {};
  var m0=function(e,s,r,gg){
    var ozp = _n("view");_r(ozp, 'class', 0, e, s, gg);var o_p = _n("view");_r(o_p, 'class', 1, e, s, gg);var oAq = _m( "view", ["bindtap", 2,"class", 1,"data-sstype", 2], e, s, gg);var oBq = _o(5, e, s, gg);_(oAq,oBq);_(o_p,oAq);var oCq = _m( "view", ["bindtap", 2,"class", 4,"data-sstype", 5], e, s, gg);var oDq = _o(8, e, s, gg);_(oCq,oDq);_(o_p,oCq);_(ozp,o_p);var oEq = _n("view");_r(oEq, 'class', 9, e, s, gg);var oFq = _n("view");_r(oFq, 'class', 10, e, s, gg);var oGq = _v();
      if (_o(11, e, s, gg)) {
        oGq.wxVkey = 1;var oHq = _n("view");_r(oHq, 'class', 12, e, s, gg);var oJq = _m( "view", ["data-status", -1,"data-transport", -1,"bindtap", 13,"class", 1,"data-num", 2,"data-salekey", 3], e, s, gg);var oKq = _n("view");_r(oKq, 'class', 17, e, s, gg);var oLq = _n("view");_r(oLq, 'class', 18, e, s, gg);var oMq = _o(19, e, s, gg);_(oLq,oMq);_(oKq,oLq);_(oJq,oKq);_(oHq,oJq);var oNq = _m( "view", ["bindtap", 13,"data-salekey", 3,"class", 7,"data-num", 8,"data-status", 9,"data-transport", 10], e, s, gg);var oOq = _n("view");_r(oOq, 'class', 17, e, s, gg);var oPq = _n("view");_r(oPq, 'class', 24, e, s, gg);var oQq = _o(25, e, s, gg);_(oPq,oQq);_(oOq,oPq);_(oNq,oOq);_(oHq,oNq);var oRq = _m( "view", ["bindtap", 13,"class", 1,"data-salekey", 3,"data-transport", 10,"data-num", 13,"data-status", 14], e, s, gg);var oSq = _n("view");_r(oSq, 'class', 28, e, s, gg);var oTq = _n("view");_r(oTq, 'class', 29, e, s, gg);var oUq = _o(30, e, s, gg);_(oTq,oUq);_(oSq,oTq);_(oRq,oSq);_(oHq,oRq);var oVq = _m( "view", ["bindtap", 13,"data-salekey", 3,"class", 7,"data-num", 18,"data-status", 19,"data-transport", 19], e, s, gg);var oWq = _n("view");_r(oWq, 'class', 17, e, s, gg);var oXq = _n("view");_r(oXq, 'class', 33, e, s, gg);var oYq = _o(34, e, s, gg);_(oXq,oYq);_(oWq,oXq);_(oVq,oWq);_(oHq,oVq);var oZq = _m( "view", ["bindtap", 13,"data-salekey", 3,"class", 7,"data-num", 22,"data-status", 23,"data-transport", 23], e, s, gg);var oaq = _n("view");_r(oaq, 'class', 17, e, s, gg);var obq = _n("view");_r(obq, 'class', 37, e, s, gg);var ocq = _o(38, e, s, gg);_(obq,ocq);_(oaq,obq);_(oZq,oaq);_(oHq,oZq);var odq = _m( "view", ["bindtap", 13,"data-salekey", 3,"class", 7,"data-status", 23,"data-transport", 23,"data-num", 26], e, s, gg);var oeq = _m( "view", ["url", -1,"class", 28], e, s, gg);var ofq = _n("view");_r(ofq, 'class', 40, e, s, gg);var ogq = _o(41, e, s, gg);_(ofq,ogq);_(oeq,ofq);_(odq,oeq);_(oHq,odq);_(oGq, oHq);
      }else {
        oGq.wxVkey = 2;var ohq = _n("view");_r(ohq, 'class', 12, e, s, gg);var ojq = _m( "view", ["data-status", -1,"data-transport", -1,"bindtap", 13,"data-num", 2,"data-salekey", 3,"class", 29], e, s, gg);var okq = _n("view");_r(okq, 'class', 17, e, s, gg);var olq = _n("view");_r(olq, 'class', 18, e, s, gg);var omq = _o(19, e, s, gg);_(olq,omq);_(okq,olq);_(ojq,okq);_(ohq,ojq);var onq = _m( "view", ["bindtap", 13,"data-salekey", 3,"data-num", 8,"data-status", 9,"data-transport", 10,"class", 30], e, s, gg);var ooq = _n("view");_r(ooq, 'class', 17, e, s, gg);var opq = _n("view");_r(opq, 'class', 24, e, s, gg);var oqq = _o(25, e, s, gg);_(opq,oqq);_(ooq,opq);_(onq,ooq);_(ohq,onq);var orq = _m( "view", ["bindtap", 13,"data-salekey", 3,"data-transport", 10,"data-num", 13,"data-status", 14,"class", 29], e, s, gg);var osq = _n("view");_r(osq, 'class', 28, e, s, gg);var otq = _n("view");_r(otq, 'class', 29, e, s, gg);var ouq = _o(30, e, s, gg);_(otq,ouq);_(osq,otq);_(orq,osq);_(ohq,orq);var ovq = _m( "view", ["bindtap", 13,"data-salekey", 3,"data-num", 18,"data-status", 19,"data-transport", 19,"class", 30], e, s, gg);var owq = _n("view");_r(owq, 'class', 17, e, s, gg);var oxq = _n("view");_r(oxq, 'class', 33, e, s, gg);var oyq = _o(34, e, s, gg);_(oxq,oyq);_(owq,oxq);_(ovq,owq);_(ohq,ovq);var ozq = _m( "view", ["bindtap", 13,"data-salekey", 3,"data-num", 22,"data-status", 23,"data-transport", 23,"class", 30], e, s, gg);var o_q = _n("view");_r(o_q, 'class', 17, e, s, gg);var oAr = _n("view");_r(oAr, 'class', 37, e, s, gg);var oBr = _o(38, e, s, gg);_(oAr,oBr);_(o_q,oAr);_(ozq,o_q);_(ohq,ozq);_(oGq, ohq);
      }_(oFq,oGq);_(oEq,oFq);var oCr = _n("view");_r(oCr, 'class', 44, e, s, gg);_(oEq,oCr);var oDr = _n("view");_r(oDr, 'class', 45, e, s, gg);var oEr = _v();
      if (_o(46, e, s, gg)) {
        oEr.wxVkey = 1;var oFr = _n("view");var oHr = _v();var oIr = function(oMr,oLr,oKr,gg){var oJr = _n("view");_r(oJr, 'class', 49, oMr, oLr, gg);var oOr = _n("navigator");_r(oOr, 'url', 50, oMr, oLr, gg);var oPr = _n("view");_r(oPr, 'class', 51, oMr, oLr, gg);_(oOr,oPr);var oQr = _n("view");_r(oQr, 'class', 52, oMr, oLr, gg);var oRr = _n("view");_r(oRr, 'class', 53, oMr, oLr, gg);var oSr = _o(54, oMr, oLr, gg);_(oRr,oSr);_(oQr,oRr);var oTr = _n("view");_r(oTr, 'class', 55, oMr, oLr, gg);var oUr = _o(56, oMr, oLr, gg);_(oTr,oUr);_(oQr,oTr);_(oOr,oQr);var oVr = _v();var oWr = function(oar,oZr,oYr,gg){var oXr = _n("view");_r(oXr, 'class', 60, oar, oZr, gg);var ocr = _n("view");_r(ocr, 'class', 61, oar, oZr, gg);var odr = _n("image");_r(odr, 'src', 62, oar, oZr, gg);_(ocr,odr);_(oXr,ocr);var oer = _n("view");_r(oer, 'class', 63, oar, oZr, gg);var ofr = _n("view");_r(ofr, 'class', 64, oar, oZr, gg);var ogr = _n("text");_r(ogr, 'class', 65, oar, oZr, gg);var ohr = _o(66, oar, oZr, gg);_(ogr,ohr);_(ofr,ogr);var oir = _n("text");_r(oir, 'class', 67, oar, oZr, gg);var ojr = _o(68, oar, oZr, gg);_(oir,ojr);_(ofr,oir);_(oer,ofr);var okr = _n("view");_r(okr, 'class', 69, oar, oZr, gg);var olr = _o(70, oar, oZr, gg);_(okr,olr);_(oer,okr);_(oXr,oer);var omr = _n("view");_r(omr, 'class', 71, oar, oZr, gg);_(oXr,omr);_(oYr, oXr);return oYr;};_2(57, oWr, oMr, oLr, gg, oVr, "gitem", "index", '{{gitem.id}}');_(oOr,oVr);var onr = _n("view");_r(onr, 'class', 72, oMr, oLr, gg);var oor = _n("view");_r(oor, 'class', 53, oMr, oLr, gg);var opr = _o(73, oMr, oLr, gg);_(oor,opr);_(onr,oor);var oqr = _v();
      if (_o(74, oMr, oLr, gg)) {
        oqr.wxVkey = 1;var orr = _m( "view", ["data-order_number", 48,"catchtap", 27,"class", 28], oMr, oLr, gg);var otr = _o(77, oMr, oLr, gg);_(orr,otr);_(oqr, orr);
      } _(onr,oqr);var our = _v();
      if (_o(78, oMr, oLr, gg)) {
        our.wxVkey = 1;var ovr = _m( "view", ["data-numberId", 48,"data-order_number", 0,"catchtap", 31,"class", 32,"data-totalprice", 33], oMr, oLr, gg);var oxr = _o(82, oMr, oLr, gg);_(ovr,oxr);_(our, ovr);
      } _(onr,our);var oyr = _v();
      if (_o(83, oMr, oLr, gg)) {
        oyr.wxVkey = 1;var ozr = _n("view");_r(ozr, 'class', 84, oMr, oLr, gg);var oAs = _o(85, oMr, oLr, gg);_(ozr,oAs);_(oyr, ozr);
      } _(onr,oyr);_(oOr,onr);_(oJr,oOr);_(oKr, oJr);return oKr;};_2(47, oIr, e, s, gg, oHr, "item", "index", '{{item.number}}');_(oFr,oHr);_(oEr, oFr);
      }else {
        oEr.wxVkey = 2;var oBs = _n("view");var oDs = _v();var oEs = function(oIs,oHs,oGs,gg){var oFs = _n("view");_r(oFs, 'class', 86, oIs, oHs, gg);var oKs = _n("navigator");_r(oKs, 'url', 50, oIs, oHs, gg);var oLs = _n("view");_r(oLs, 'class', 51, oIs, oHs, gg);_(oKs,oLs);var oMs = _v();var oNs = function(oRs,oQs,oPs,gg){var oOs = _n("view");_r(oOs, 'class', 87, oRs, oQs, gg);var oTs = _n("view");_r(oTs, 'class', 88, oRs, oQs, gg);var oUs = _n("image");_r(oUs, 'src', 62, oRs, oQs, gg);_(oTs,oUs);_(oOs,oTs);var oVs = _n("view");_r(oVs, 'class', 89, oRs, oQs, gg);var oWs = _n("view");_r(oWs, 'class', 64, oRs, oQs, gg);var oXs = _n("text");_r(oXs, 'class', 90, oRs, oQs, gg);var oYs = _o(91, oRs, oQs, gg);_(oXs,oYs);_(oWs,oXs);_(oVs,oWs);var oZs = _n("view");_r(oZs, 'class', 67, oRs, oQs, gg);var oas = _o(68, oRs, oQs, gg);_(oZs,oas);_(oVs,oZs);var obs = _n("view");_r(obs, 'class', 69, oRs, oQs, gg);var ocs = _o(70, oRs, oQs, gg);_(obs,ocs);_(oVs,obs);_(oOs,oVs);var ods = _n("view");_r(ods, 'class', 71, oRs, oQs, gg);_(oOs,ods);_(oPs, oOs);return oPs;};_2(57, oNs, oIs, oHs, gg, oMs, "gitem", "index", '{{gitem.id}}');_(oKs,oMs);_(oFs,oKs);_(oGs, oFs);return oGs;};_2(47, oEs, e, s, gg, oDs, "item", "index", '{{item.number}}');_(oBs,oDs);_(oEr, oBs);
      }_(oDr,oEr);var oes = _v();
      if (_o(92, e, s, gg)) {
        oes.wxVkey = 1;var ofs = _n("view");_r(ofs, 'class', 93, e, s, gg);var ohs = _n("view");_r(ohs, 'class', 94, e, s, gg);var ois = _o(95, e, s, gg);_(ohs,ois);_(ofs,ohs);_(oes, ofs);
      } _(oDr,oes);var ojs = _v();
      if (_o(96, e, s, gg)) {
        ojs.wxVkey = 1;var oks = _n("view");_r(oks, 'class', 97, e, s, gg);var oms = _o(98, e, s, gg);_(oks,oms);_(ojs, oks);
      } _(oDr,ojs);var ons = _m( "view", ["class", 99,"style", 1], e, s, gg);var oos = _m( "image", ["class", 101,"src", 1], e, s, gg);_(ons,oos);_(oDr,ons);_(oEq,oDr);_(ozp,oEq);_(r,ozp);
    return r;
  };
        e_["./pages/ucenter/order/order.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:body{height:100%;width:100%;background:#f4f4f4}.orders{height:auto;width:100%;overflow:hidden}.fill-top{height:%%?158rpx?%%}.order{width:100%;background:#fff;min-height:%%?342rpx?%%}.vip-order{width:100%;background:#fff;height:%%?210rpx?%%;border-bottom:%%?1rpx?%% solid #f4f4f4}.order .order-split-line{height:%%?20rpx?%%;background:#f2f2f2}.vip-order .order-split-line{height:%%?20rpx?%%;background:#f2f2f2}.order .h{height:%%?78rpx?%%;line-height:%%?78rpx?%%;margin-left:%%?26rpx?%%;padding-right:%%?31.25rpx?%%;border-bottom:1px solid #f4f4f4;font-size:%%?28rpx?%%;color:#333}.order .h .l{float:left}.order .h .r{float:right;color:#cc2020;font-size:%%?26rpx?%%}.order .goods{width:100%;height:%%?180rpx?%%;margin-left:%%?26rpx?%%}.vip-order .vip-goods{margin-top:%%?10rpx?%%;width:100%;height:%%?180rpx?%%;margin-left:%%?26rpx?%%}.order .goods .img{height:%%?168rpx?%%;width:%%?168rpx?%%;background:#f4f4f4;display:inline-block;float:left}.vip-order .vip-goods .vip-img{height:%%?168rpx?%%;width:%%?168rpx?%%;background:#f4f4f4;display:inline-block;float:left}.order .goods .img wx-image{height:%%?168rpx?%%;width:%%?168rpx?%%}.vip-order .vip-goods .vip-img wx-image{height:%%?168rpx?%%;width:%%?168rpx?%%}.order .goods .info{width:%%?520rpx?%%;height:%%?168rpx?%%;padding-left:%%?20rpx?%%;margin-right:%%?10rpx?%%;display:inline-block;float:left}.vip-order .vip-goods .vip-info{width:%%?520rpx?%%;height:%%?168rpx?%%;padding-left:%%?20rpx?%%;margin-right:%%?10rpx?%%;display:inline-block;float:left}.order .goods .info .t{width:100%}.vip-order .vip-goods .vip-info .t{width:100%;height:%%?100rpx?%%;overflow-y:hidden;padding-top:%%?8rpx?%%}.order .goods .name{margin-top:%%?25rpx?%%;height:%%?68rpx?%%;width:75%;line-height:%%?34rpx?%%;color:#333;overflow-y:hidden;font-size:%%?28rpx?%%;display:inline-block;display:-webkit-box;word-break:break-all;text-overflow:ellipsis;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2}.vip-order .vip-goods .vip-info .vip-name{margin-top:%%?25rpx?%%;height:%%?68rpx?%%;line-height:%%?34rpx?%%;color:#333;font-size:%%?28rpx?%%;display:-webkit-box;word-break:break-all;text-overflow:ellipsis;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2}.order .goods .number{height:%%?44rpx?%%;line-height:%%?44rpx?%%;color:#666;font-size:%%?28rpx?%%;width:20%;display:inline-block;text-align:left;float:right}.vip-order .vip-goods .number{margin-top:%%?10rpx?%%;height:%%?44rpx?%%;line-height:%%?44rpx?%%;color:#666;font-size:%%?28rpx?%%;width:20%;display:inline-block;text-align:left;float:left}.order .goods .price{display:block;height:%%?37rpx?%%;line-height:%%?37rpx?%%;color:#333;text-align:right;font-size:%%?25rpx?%%}.vip-order .vip-goods .price{display:block;height:%%?37rpx?%%;line-height:%%?37rpx?%%;color:#333;text-align:right;font-size:%%?25rpx?%%}.order .goods .status{width:%%?105rpx?%%;color:#b4282d;font-size:%%?25rpx?%%}.vip-order .vip-goods .status{width:%%?105rpx?%%;color:#b4282d;font-size:%%?25rpx?%%}.order .b{height:%%?92rpx?%%;line-height:%%?92rpx?%%;margin-left:%%?26rpx?%%;padding-right:%%?31.25rpx?%%;border-top:1px solid #f4f4f4;font-size:%%?32rpx?%%;color:#333}.order .b .l{float:left;font-size:%%?32rpx?%%}.order .b .s2{width:%%?160rpx?%%;height:%%?70rpx?%%;line-height:%%?70rpx?%%;display:inline-block;float:right}.order .b .r{float:right}.order .b .btn{margin-top:%%?19rpx?%%;height:%%?64.5rpx?%%;line-height:%%?64.5rpx?%%;text-align:center;padding:0 %%?20rpx?%%;border-radius:%%?5rpx?%%;font-size:%%?28rpx?%%;color:#fff;background:#b4282d}.user-menu{position:fixed;width:100%;top:%%?153rpx?%%;height:auto;overflow:hidden;background:#fff}.user-menu .item{height:%%?90rpx?%%;border-bottom:1px solid rgba(0,0,0,.15);margin-left:5%;line-height:%%?89rpx?%%}.user-menu .item-order{border-bottom:0 solid #ccc;width:inherit}.user-menu .item-order .item1{text-align:center;display:inline-block;width:15%}.user-menu .item-order .item2{text-align:center;display:inline-block;width:18%}.publish-tip{margin-top:%%?86rpx?%%;height:%%?72rpx?%%;width:inherit;background:#fef8db;line-height:%%?72rpx?%%}.publish-tip .pt-l{display:inline-block;height:inherit;line-height:inherit;margin-left:%%?30rpx?%%}.publish-tip .pt-l{width:%%?40rpx?%%;height:%%?40rpx?%%}.publish-tip .pt-r{margin-left:%%?30rpx?%%;display:inline-block;height:%%?72rpx?%%;line-height:%%?72rpx?%%;font-size:%%?28rpx?%%;color:#e6943b;float:left}.no-data{width:100%;position:absolute;top:25%;background:#fff;text-align:center}.no-data .no-data-tip{width:50%}.activate{color:#cc2020;border-bottom:2px solid #cc2020}.to-logistics{width:inherit;color:red;margin-left:%%?20rpx?%%;text-align:right}.s2.s2-gopay{background:#cc2020;height:%%?80rpx?%%;color:#fff;line-height:%%?80rpx?%%;font-size:%%?28rpx?%%;margin:%%?10rpx?%% 0;border-radius:%%?8rpx?%%;width:%%?160rpx?%%;text-align:center}.s2.s2-logistics{height:%%?80rpx?%%;color:#7e7e7e;line-height:%%?80rpx?%%;font-size:%%?28rpx?%%;margin:%%?10rpx?%% 0;border-radius:%%?8rpx?%%;border:%%?1rpx?%% solid #7e7e7e;width:%%?160rpx?%%;text-align:center}.s2-no{text-align:right}.second-menu{position:fixed;width:100%;top:%%?76rpx?%%;height:%%?80rpx?%%;background:#fff;border-bottom:%%?1rpx?%% solid #f4f4f4}.select-nomal{display:inline-block;width:50%;height:%%?80rpx?%%;line-height:%%?80rpx?%%;text-align:center}.select-upgrade{display:inline-block;width:50%;height:%%?80rpx?%%;line-height:%%?80rpx?%%;text-align:center}.select-actiavte{color:#fff;background:#cc2020}.show-loading{margin-top:%%?10rpx?%%;width:%%?750rpx?%%;text-align:center;opacity:.7;height:%%?50rpx?%%;line-height:%%?50rpx?%%}.show-loading-text{height:100%;text-align:center}.show-loading01{margin-top:%%?10rpx?%%;width:%%?750rpx?%%;text-align:center;opacity:.7;height:%%?50rpx?%%;line-height:%%?50rpx?%%}.show-loading-text01{height:100%;text-align:center}@code-separator-line:__wxRoute = "pages/ucenter/order/order";__wxRouteBegin = true;
define("pages/ucenter/order/order.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var npage = require('../../../services/page.js');

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

        salekey: 'sale',
        next_url: api.OrderList + '?is_sale=sale&page=1',
        btn_status: '',
        select_type: 'ss_nomal',
        loading_next:false,
        is_all_loaded: false,
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        if (options.select_type){
            this.setData({
                select_type : options.select_type,
                next_url: api.OrderList + '?is_sale=vip&page=1',
                salekey: 'vip',
            })
        }
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

            // var list_ = that.data.orderList
            // var res_list = res[0]
            // list_ = list_.concat(res_list);
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
        if (that.data.select_type == 'ss_upgrade'){
            var salekey = 'vip'
        }else{
            var salekey = 'sale'
        }
        that.setData({
            orderList: [],
            Host: api.Host,
            nodata: 'none',
            _num: event.currentTarget.dataset.num,
            salekey: salekey,
            next_url: api.OrderList + '?is_sale=' +salekey+'&page=1',
            btn_status: order_status_key,
            btn_transport: event.currentTarget.dataset.transport
        })
        this.getOrderList()
    },
    goPayPage:function(event){
        let that =this;
        var orderId = event.currentTarget.dataset.order_number;
        var actualPrice = event.currentTarget.dataset.totalprice;
        wx.navigateTo({
        url: '../../pay/pay?order_number=' + orderId + '&actualPrice='+ actualPrice,
      })
    },

    selectType: function(event){
         var sstype = event.currentTarget.dataset.sstype

         this.setData({
             orderList: [],
             Host: api.Host,
             nodata: 'none',
             _num: 1,
             salekey: 'sale',
             next_url: api.OrderList + '?is_sale=sale&page=1',
             btn_status: '',
             select_type: sstype,
             loading_next:false,
             is_all_loaded:false,
             // select_type: event.currentTarget.dataset.sstype,
         })
         if (sstype == 'ss_upgrade'){
             this.setData({
                 salekey: 'vip',
                 next_url: api.OrderList + '?is_sale=vip&page=1',
             })
         }
         // 页面初始化 options为页面跳转所带来的参数
         this.getOrderList();
    },

    onPullDownRefresh: function () {
        let that = this
        that.setData({
            orderList: [],
            Host: api.Host,
            nodata: 'none',
            _num: 1,
            next_url: api.OrderList + '?is_sale=sale&page=1',
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

});require("pages/ucenter/order/order.js")@code-separator-line:["div","view","navigator","image","text"]