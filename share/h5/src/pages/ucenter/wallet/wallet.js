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
    Z([3, 'container']);Z([3, 'wallet-box']);Z([3, 'show-money']);Z([3, 'balance-box']);Z([3, '/pages/ucenter/wallet/balanceSend/balanceSend']);Z([3, 'sm-box']);Z([3, 'txt']);Z([3, '我的余额']);Z([3, 'use-money']);Z([a, [3, '￥'],[[7],[3, "balance"]]]);Z([3, 'cz-tx']);Z([3, 'cz-tx-set cz-tx-left']);Z([3, './withdraw/withdraw']);Z([3, 'cz-images']);Z([a, [[7],[3, "Host"]],[3, '/static/h5/static/images/tx-wallet01']]);Z([3, '\r\n            申请提现\r\n        ']);Z([3, 'set-fill-color']);Z([3, 'all-detail']);Z([3, 'ad-text']);Z([3, '\r\n            全部明细\r\n        ']);Z([3, 'detail-list']);Z([[7],[3, "details"]]);Z([3, 'dl-item']);Z([3, 'dl-item-box']);Z([3, 'dl-item-left']);Z([3, 'profit-name']);Z([a, [[6],[[7],[3, "item"]],[3, "type"]]]);Z([3, 'profit-time']);Z([a, [[6],[[7],[3, "item"]],[3, "time"]]]);Z([3, 'dl-item-right profit-money']);Z([a, [3, '+'],[[6],[[7],[3, "item"]],[3, "bonus"]]]);
  })(z);d_["./pages/ucenter/wallet/wallet.wxml"] = {};
  var m0=function(e,s,r,gg){
    var omj = _n("view");_r(omj, 'classs', 0, e, s, gg);var onj = _n("view");_r(onj, 'class', 1, e, s, gg);var ooj = _n("view");_r(ooj, 'class', 2, e, s, gg);var opj = _n("view");_r(opj, 'class', 3, e, s, gg);var oqj = _n("navigator");_r(oqj, 'url', 4, e, s, gg);_(opj,oqj);_(ooj,opj);var orj = _n("view");_r(orj, 'class', 5, e, s, gg);var osj = _n("view");_r(osj, 'class', 6, e, s, gg);var otj = _o(7, e, s, gg);_(osj,otj);_(orj,osj);var ouj = _n("view");_r(ouj, 'class', 8, e, s, gg);var ovj = _o(9, e, s, gg);_(ouj,ovj);_(orj,ouj);_(ooj,orj);_(onj,ooj);_(omj,onj);var owj = _n("view");_r(owj, 'class', 10, e, s, gg);var oxj = _m( "navigator", ["class", 11,"url", 1], e, s, gg);var oyj = _m( "view", ["class", 13,"src", 1], e, s, gg);_(oxj,oyj);var ozj = _o(15, e, s, gg);_(oxj,ozj);_(owj,oxj);_(omj,owj);var o_j = _n("view");_r(o_j, 'class', 16, e, s, gg);_(omj,o_j);var oAk = _n("view");_r(oAk, 'class', 17, e, s, gg);var oBk = _n("view");_r(oBk, 'class', 18, e, s, gg);var oCk = _o(19, e, s, gg);_(oBk,oCk);_(oAk,oBk);_(omj,oAk);var oDk = _n("view");_r(oDk, 'class', 20, e, s, gg);var oEk = _v();var oFk = function(oJk,oIk,oHk,gg){var oGk = _n("view");_r(oGk, 'class', 22, oJk, oIk, gg);var oLk = _n("view");_r(oLk, 'class', 23, oJk, oIk, gg);var oMk = _n("view");_r(oMk, 'class', 24, oJk, oIk, gg);var oNk = _n("view");_r(oNk, 'class', 25, oJk, oIk, gg);var oOk = _o(26, oJk, oIk, gg);_(oNk,oOk);_(oMk,oNk);var oPk = _n("view");_r(oPk, 'class', 27, oJk, oIk, gg);var oQk = _o(28, oJk, oIk, gg);_(oPk,oQk);_(oMk,oPk);_(oLk,oMk);var oRk = _n("view");_r(oRk, 'class', 29, oJk, oIk, gg);var oSk = _o(30, oJk, oIk, gg);_(oRk,oSk);_(oLk,oRk);_(oGk,oLk);_(oHk, oGk);return oHk;};_2(21, oFk, e, s, gg, oEk, "item", "index", '');_(oDk,oEk);_(omj,oDk);_(r,omj);
    return r;
  };
        e_["./pages/ucenter/wallet/wallet.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:.head-tip{height:%%?100rpx?%%;width:100%;background:#fdf8e3}.head-tip-box{height:100%;padding:%%?20rpx?%%}.balance-box{text-align:right}.balance-send{display:inline-block;padding-right:%%?20rpx?%%;color:#fff}.tip-img{display:inline-block;height:100%;float:left}.tip-img .img{width:%%?30rpx?%%;height:%%?30rpx?%%}.tip-txt{float:left;text-align:left;padding-left:%%?20rpx?%%;line-height:%%?34rpx?%%;height:100%;width:%%?680rpx?%%;display:inline-block;color:#ebab63}.wallet-box{height:%%?265rpx?%%;background-color:#e72b2b}.options-list .btn-list .imgaes-tag{width:%%?20rpx?%%;height:%%?20rpx?%%;float:right;margin-top:%%?35rpx?%%;margin-right:%%?25rpx?%%}.options-list .btn-list{height:%%?98rpx?%%;line-height:%%?98rpx?%%;margin-left:%%?25rpx?%%;border-bottom:1px solid #ccc}.cz-tx{background:#fff}.cz-tx-set{display:inline-block;width:100%;text-align:center;height:%%?90rpx?%%;line-height:%%?90rpx?%%}.show-money{height:%%?267rpx?%%;color:#fff;text-align:center;padding-top:%%?35rpx?%%}.show-money .use-money{margin-top:%%?20rpx?%%;font-size:%%?56rpx?%%;color:#f4f4f4}.show-money .txt{color:#f4f4f4;padding-top:%%?15rpx?%%;font-size:%%?30rpx?%%}.cz-tx .icon.wallet{background:url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sdf6a55ee56-f2c2b9c2f0.png) 0 %%?-62.4997rpx?%% no-repeat;background-size:%%?52.803rpx?%%}.set-fill-color{height:%%?20rpx?%%;background:#f2f2f2}.set-fill-color02{height:%%?15rpx?%%;background:#f2f2f2}.all-detail{height:%%?90rpx?%%;line-height:%%?90rpx?%%;padding:%%?20rpx?%% 0}.all-detail .ad-text{height:%%?50rpx?%%;line-height:%%?50rpx?%%;padding-left:%%?20rpx?%%;border-left:%%?5rpx?%% solid red}.dl-item{height:%%?90rpx?%%;width:100%;padding:%%?5rpx?%% %%?20rpx?%%;border-bottom:%%?1rpx?%% solid #f2f2f2}.dl-item .dl-item-box{width:100%}.dl-item-left{height:%%?90rpx?%%;width:50%;display:inline-block;float:left}.dl-item-right{height:%%?90rpx?%%;width:50%;color:red;display:inline-block;line-height:%%?90rpx?%%;float:right;text-align:right}.profit-name{height:%%?50rpx?%%;line-height:%%?50rpx?%%}.profit-time{height:%%?40rpx?%%;line-height:%%?40rpx?%%;color:#ccc;font-size:%%?20rpx?%%}.money-show{width:100%;height:%%?160rpx?%%;display:block}.money-show .ms-item{width:50%;height:%%?80rpx?%%;line-height:%%?80rpx?%%;float:left}.item-img{padding-top:%%?10rpx?%%;display:inline-block;float:left}.item-img .img{width:%%?40rpx?%%;height:%%?40rpx?%%}.item-text{display:inline-block;float:left}@code-separator-line:__wxRoute = "pages/ucenter/wallet/wallet";__wxRouteBegin = true;
define("pages/ucenter/wallet/wallet.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var user = require('../../../services/user.js');

var bonus_type_maps = {
    'bonus_leader': '每月导师奖',
    'bonus_recommend': '个人产品推荐奖',
    'bonus_vip': '个人推荐奖',
    'bonus_share': '店铺销售提成奖',
    'bonus_consume': '个人消费提成奖',
    'bonus_store': '店铺消费分红'
}

Page({
    data: {
        balance: 0,
        details: [],
        Host: api.Host,
        money01: 100.00,
        money02: 100.00,
        money02: 100.00,
        record_next_url:api.DailyBonusRecord

    },
    onLoad: function () {
        // 页面初始化 options为页面跳转所带来的参数
       this.getbalance()
       this.get_daily_bonus_record()

    },
    onReady: function () {

    },
    onShow: function () {

    },
    onHide: function () {
        // 页面隐藏

    },
    onUnload: function () {
        // 页面关闭
    },
    getbalance: function(){
        let that = this;
        util.request(api.Balance,{}).then(function (res) {
            if(res.errno==0){
                var int_, float_, balance
                balance = res.data.balance.split('.')
                int_ = balance[0]
                float_ = balance[1]
                float_ = float_.slice(0,2);
                if (int_ == 0 &&  float_==0){
                    that.setData({
                      balance: '0.00'
                    });
                }else{
                    that.setData({
                      balance: (int_ + '.' + float_)
                    });
                }

            }else {
              util.showErrorToast('帐户异常');
            }
        });
    },
    get_daily_bonus_record: function(){
        let that = this;
        if(! that.data.record_next_url){
            util.showErrorToast('没有更多记录了');
        }
        util.request((that.data.record_next_url),{}).then(function (res) {
            var detail = that.data.details
            var int_, float_, tmp, bonus
            for(var i=0; i<res[0].length; i++){
                for(var key in bonus_type_maps){
                    tmp = res[0][i][key].split('.')
                    int_ = tmp[0]
                    float_ = tmp[1]
                    float_ = float_.slice(0,2);
                    bonus = (int_ + '.' + float_)
                    if(bonus != '0.00'){
                        detail.push({
                            'type': bonus_type_maps[key],
                            'bonus': bonus,
                            'time':res[0][i].create_time
                        })
                    }
                }
            }

            that.setData({
              details: detail,
              record_next_url: res[1]
            });

        });
    },
    onReachBottom: function(){
        this.get_daily_bonus_record()
    }


})

});require("pages/ucenter/wallet/wallet.js")@code-separator-line:["div","view","navigator"]