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
    Z([3, 'container']);Z([3, 'select-cart select-cart-fixed']);Z([3, 'select_cart']);Z([a, [3, 'cart-item '],[[2,'?:'],[[2, "=="], [[7],[3, "type"]], [1, "normal"]],[1, "active"],[1, ""]]]);Z([3, 'normal']);Z([3, '\n            普通商品\n        ']);Z([a, [3, 'cart-item '],[[2,'?:'],[[2, "=="], [[7],[3, "type"]], [1, "vip"]],[1, "active"],[1, ""]]]);Z([3, 'vip']);Z([3, '\n            升级区商品\n        ']);Z([3, 'select-cart']);Z([[2, "<="], [[6],[[7],[3, "cartGoods"]],[3, "length"]], [1, 0]]);Z([3, 'no-cart']);Z([3, 'c']);Z([3, 'http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/noCart-a8fe3f12e5.png']);Z([3, '去添加点什么吧']);Z([[2, ">"], [[6],[[7],[3, "cartGoods"]],[3, "length"]], [1, 0]]);Z([3, 'cart-view']);Z([3, 'list']);Z([3, 'group-item']);Z([3, 'goods']);Z([[7],[3, "cartGoods"]]);Z([[6],[[7],[3, "item"]],[3, "id"]]);Z([3, 'space']);Z([3, 'item edit']);Z([3, '0']);Z([3, 'true']);Z([3, 'checkbox-container']);Z([3, 'checkedItem']);Z([a, [3, 'checkbox '],[[2,'?:'],[[6],[[7],[3, "item"]],[3, "checked"]],[1, "checked"],[1, ""]]]);Z([[7],[3, "index"]]);Z([3, 'cart-goods']);Z([a, [3, '../goods/goods?id\x3d'],[[6],[[7],[3, "item"]],[3, "goods_id"]]]);Z([3, 'img']);Z([a, [[7],[3, "host"]],[[6],[[7],[3, "item"]],[3, "list_pic_url"]]]);Z([3, 'info']);Z([3, 't']);Z([3, 'name']);Z([a, [[6],[[7],[3, "item"]],[3, "goods_name"]]]);Z([3, 'attr']);Z([a, [[6],[[7],[3, "item"]],[3, "cate_value"]]]);Z([3, 'b']);Z([3, 'price']);Z([a, [3, '￥'],[[6],[[7],[3, "item"]],[3, "retail_price"]]]);Z([3, 'selnum']);Z([3, 'cutNumber']);Z([3, 'cut']);Z([3, '-']);Z([3, 'number']);Z([[6],[[7],[3, "item"]],[3, "number"]]);Z([3, 'addNumber']);Z([3, 'add']);Z([3, '+']);Z([3, 'delete']);Z([3, 'delete_only']);Z([3, 'delete_text']);Z([3, '\n                                    删除\n                                ']);Z([3, 'cart-bottom']);Z([3, 'checkedAll']);Z([a, [3, 'checkbox '],[[2,'?:'],[[7],[3, "checkedAllStatus"]],[1, "checked"],[1, ""]]]);Z([a, [3, '全选('],[[6],[[7],[3, "cartTotal"]],[3, "checkedGoodsCount"]],[3, ')']]);Z([3, 'editCart']);Z([a, [[2,'?:'],[[2, "!"], [[7],[3, "isEditCart"]]],[1, "编辑"],[1, "完成"]]]);Z([3, 'total']);Z([a, [3, '\n                '],[[2,'?:'],[[2, "!"], [[7],[3, "isEditCart"]]],[[2, "+"], [1, "￥"], [[6],[[7],[3, "cartTotal"]],[3, "checkedGoodsAmount"]]],[1, ""]],[3, '\n            ']]);Z([[7],[3, "isEditCart"]]);Z([3, 'deleteCart']);Z([3, 'checkout']);Z([3, '删除所选']);Z([[2, "!"], [[7],[3, "isEditCart"]]]);Z([3, 'checkoutOrder']);Z([3, '下单']);
  })(z);d_["./pages/cart/cart.wxml"] = {};
  var m0=function(e,s,r,gg){
    var oTD = _n("view");_r(oTD, 'class', 0, e, s, gg);var oUD = _n("view");_r(oUD, 'class', 1, e, s, gg);var oVD = _m( "view", ["bindtap", 2,"class", 1,"data-type01", 2], e, s, gg);var oWD = _o(5, e, s, gg);_(oVD,oWD);_(oUD,oVD);var oXD = _m( "view", ["bindtap", 2,"class", 4,"data-type01", 5], e, s, gg);var oYD = _o(8, e, s, gg);_(oXD,oYD);_(oUD,oXD);_(oTD,oUD);var oZD = _n("view");_r(oZD, 'class', 9, e, s, gg);_(oTD,oZD);var oaD = _v();
      if (_o(10, e, s, gg)) {
        oaD.wxVkey = 1;var obD = _n("view");_r(obD, 'class', 11, e, s, gg);var odD = _n("view");_r(odD, 'class', 12, e, s, gg);var oeD = _n("image");_r(oeD, 'src', 13, e, s, gg);_(odD,oeD);var ofD = _n("text");var ogD = _o(14, e, s, gg);_(ofD,ogD);_(odD,ofD);_(obD,odD);_(oaD, obD);
      } _(oTD,oaD);var ohD = _v();
      if (_o(15, e, s, gg)) {
        ohD.wxVkey = 1;var oiD = _n("view");_r(oiD, 'class', 16, e, s, gg);var okD = _n("view");_r(okD, 'class', 17, e, s, gg);var olD = _n("view");_r(olD, 'class', 18, e, s, gg);var omD = _n("view");_r(omD, 'class', 19, e, s, gg);var onD = _v();var ooD = function(osD,orD,oqD,gg){var opD = _n("view");var ouD = _n("view");_r(ouD, 'class', 22, osD, orD, gg);_(opD,ouD);var ovD = _m( "scroll-view", ["class", 23,"scrollLeft", 1,"scrollX", 2], osD, orD, gg);var owD = _n("view");_r(owD, 'class', 26, osD, orD, gg);var oxD = _m( "view", ["bindtap", 27,"class", 1,"data-item-index", 2], osD, orD, gg);_(owD,oxD);_(ovD,owD);var oyD = _m( "navigator", ["class", 30,"url", 1], osD, orD, gg);var ozD = _m( "image", ["class", 32,"src", 1], osD, orD, gg);_(oyD,ozD);var o_D = _n("view");_r(o_D, 'class', 34, osD, orD, gg);var oAE = _n("view");_r(oAE, 'class', 35, osD, orD, gg);var oBE = _n("text");_r(oBE, 'class', 36, osD, orD, gg);var oCE = _o(37, osD, orD, gg);_(oBE,oCE);_(oAE,oBE);_(o_D,oAE);var oDE = _n("view");_r(oDE, 'class', 38, osD, orD, gg);var oEE = _o(39, osD, orD, gg);_(oDE,oEE);_(o_D,oDE);var oFE = _n("view");_r(oFE, 'class', 40, osD, orD, gg);var oGE = _n("text");_r(oGE, 'class', 41, osD, orD, gg);var oHE = _o(42, osD, orD, gg);_(oGE,oHE);_(oFE,oGE);var oIE = _n("view");_r(oIE, 'class', 43, osD, orD, gg);var oJE = _m( "view", ["data-item-index", 29,"catchtap", 15,"class", 16], osD, orD, gg);var oKE = _o(46, osD, orD, gg);_(oJE,oKE);_(oIE,oJE);var oLE = _m( "input", ["disabled", 25,"class", 22,"type", 22,"value", 23], osD, orD, gg);_(oIE,oLE);var oME = _m( "view", ["data-item-index", 29,"catchtap", 20,"class", 21], osD, orD, gg);var oNE = _o(51, osD, orD, gg);_(oME,oNE);_(oIE,oME);_(oFE,oIE);_(o_D,oFE);_(oyD,o_D);_(ovD,oyD);var oOE = _m( "view", ["data-item-index", 29,"bindtap", 23,"class", 24], osD, orD, gg);var oPE = _m( "view", ["data-item-index", 29,"class", 25], osD, orD, gg);var oQE = _o(55, osD, orD, gg);_(oPE,oQE);_(oOE,oPE);_(ovD,oOE);_(opD,ovD);_(oqD, opD);return oqD;};_2(20, ooD, e, s, gg, onD, "item", "index", '{{item.id}}');_(omD,onD);_(olD,omD);_(okD,olD);_(oiD,okD);var oRE = _n("view");_r(oRE, 'class', 56, e, s, gg);var oSE = _m( "view", ["bindtap", 57,"class", 1], e, s, gg);var oTE = _o(59, e, s, gg);_(oSE,oTE);_(oRE,oSE);var oUE = _m( "view", ["class", 52,"bindtap", 8], e, s, gg);var oVE = _o(61, e, s, gg);_(oUE,oVE);_(oRE,oUE);var oWE = _n("view");_r(oWE, 'class', 62, e, s, gg);var oXE = _o(63, e, s, gg);_(oWE,oXE);_(oRE,oWE);var oYE = _v();
      if (_o(64, e, s, gg)) {
        oYE.wxVkey = 1;var oZE = _m( "view", ["bindtap", 65,"class", 1], e, s, gg);var obE = _o(67, e, s, gg);_(oZE,obE);_(oYE, oZE);
      } _(oRE,oYE);var ocE = _v();
      if (_o(68, e, s, gg)) {
        ocE.wxVkey = 1;var odE = _m( "view", ["class", 66,"bindtap", 3], e, s, gg);var ofE = _o(70, e, s, gg);_(odE,ofE);_(ocE, odE);
      } _(oRE,ocE);_(oiD,oRE);_(ohD, oiD);
      } _(oTD,ohD);_(r,oTD);
    return r;
  };
        e_["./pages/cart/cart.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:.head{display:none}.scrollable{position:absolute;margin-top:-42px}body{height:100%;min-height:100%;background:#f2f2f2}.container{background:#f2f2f2;width:100%;height:auto;min-height:100%;overflow:hidden}.select-cart{width:%%?750rpx?%%;background:#fff;height:%%?70rpx?%%;display:inline-flex;border-bottom:#f4f4f4}.select-cart-fixed{position:fixed;z-index:999}.cart-item{display:inline;width:50%;text-align:center;font-size:%%?36rpx?%%;padding:%%?17rpx?%% 0;line-height:%%?36rpx?%%}.active{color:#fff;background:#cc2020}.service-policy{width:100%;height:%%?72rpx?%%;background:#fef8db;padding:0 %%?30rpx?%%;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;font-size:%%?28rpx?%%;color:#e6943b}.service-policy .item{background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/servicePolicyRed-518d32d74b.png) 0 center no-repeat;background-size:%%?10rpx?%%;padding-left:%%?15rpx?%%;align-items:center;font-size:%%?25rpx?%%;color:#666}.service-policy .item01{float:left;color:#e6943b;font-size:%%?28rpx?%%}.service-policy .item02{float:right;color:#e6943b;font-size:%%?28rpx?%%}.no-cart{width:100%;height:auto;margin:0 auto}.no-cart .c{width:100%;height:auto;margin-top:%%?200rpx?%%}.no-cart .c wx-image{margin:0 auto;display:block;text-align:center;width:%%?258rpx?%%;height:%%?258rpx?%%}.no-cart .c wx-text{margin:0 auto;display:block;width:%%?258rpx?%%;height:%%?29rpx?%%;line-height:%%?29rpx?%%;text-align:center;font-size:%%?29rpx?%%;color:#999}.cart-view{width:100%;height:auto;overflow:hidden}.cart-view .list{height:auto;width:100%;overflow:hidden;margin-bottom:%%?120rpx?%%}.cart-view .group-item{height:auto;width:100%;background:#fff;margin-bottom:%%?18rpx?%%;background:#f2f2f2}.cart-view .item{height:%%?214rpx?%%;width:100%;overflow:hidden;display:inline;overflow:scroll;white-space:nowrap;width:%%?870rpx?%%}.cart-view .space{height:%%?30rpx?%%;background:#f2f2f2}.cart-view .checkbox-container{display:inline-block;height:%%?164rpx?%%;width:%%?90rpx?%%;background:#fff}.cart-view .item .set-blank{height:%%?30rpx?%%;background:#f4f4f4}.cart-view .item .checkbox{display:inline-block;height:%%?34rpx?%%;width:%%?46rpx?%%;margin:%%?65rpx?%% %%?10rpx?%% %%?65rpx?%% %%?34rpx?%%;background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-0e09baa37e.png) no-repeat;background-size:%%?34rpx?%%}.cart-view .item .checkbox.checked{background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-checked-822e54472a.png) no-repeat;background-size:%%?34rpx?%%}.cart-view .item .cart-goods{height:%%?164rpx?%%;width:%%?660rpx?%%;display:inline-block;background:#fff}.cart-view .item .img{float:left;height:%%?125rpx?%%;width:%%?125rpx?%%;background:#f4f4f4;margin:%%?19.5rpx?%% %%?18rpx?%% %%?19.5rpx?%% 0}.cart-view .item .info{float:left;height:%%?125rpx?%%;width:%%?491rpx?%%;margin:%%?19.5rpx?%% %%?26rpx?%% %%?19.5rpx?%% 0}.cart-view .item .t{margin:%%?8rpx?%% 0;height:%%?28rpx?%%;font-size:%%?25rpx?%%;color:#333;overflow:hidden}.cart-view .item .name{height:%%?28rpx?%%;line-height:%%?28rpx?%%;font-size:%%?28rpx?%%;color:#333;overflow:hidden}.cart-view .item .num{height:%%?28rpx?%%;line-height:%%?28rpx?%%;display:inline-block;display:inline-block}.cart-view .item .attr{height:%%?24rpx?%%;line-height:%%?24rpx?%%;font-size:%%?26rpx?%%;color:#999;overflow:hidden}.cart-view .item .b{height:%%?68rpx?%%;line-height:%%?68rpx?%%;font-size:%%?25rpx?%%;color:#333;overflow:hidden}.cart-view .item .price{float:left;font-size:%%?32rpx?%%;color:#cc2020}.cart-view .item .open{height:%%?28rpx?%%;width:%%?150rpx?%%;display:block;display:inline-block;background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/arrowDown-d48093db25.png) right center no-repeat;background-size:%%?25rpx?%%;font-size:%%?25rpx?%%;color:#333}.cart-view .item.edit .attr{text-align:right;padding-right:%%?25rpx?%%;background-size:%%?12rpx?%% %%?20rpx?%%;height:%%?39rpx?%%;line-height:%%?39rpx?%%;font-size:%%?24rpx?%%;color:#999;overflow:hidden}.cart-view .item.edit .b{display:flex;height:%%?68rpx?%%;overflow:hidden}.cart-view .item.edit .price{line-height:%%?52rpx?%%;height:%%?52rpx?%%;flex:1}.cart-view .item .selnum{display:inline-block;height:%%?60rpx?%%;width:%%?274rpx?%%;float:right;border:1px solid #ccc}.selnum .cut{width:%%?90rpx?%%;height:100%;text-align:center;line-height:%%?60rpx?%%;float:left;color:#666;font-size:%%?28rpx?%%}.selnum .number{flex:1;width:%%?90rpx?%%;height:100%;text-align:center;line-height:%%?60rpx?%%;border-left:1px solid #ccc;border-right:1px solid #ccc;float:left;font-size:%%?28rpx?%%;color:#666}.selnum .add{height:100%;text-align:center;line-height:%%?60rpx?%%;color:#666;font-size:%%?28rpx?%%}.cart-view .group-item .header{width:100%;height:%%?94rpx?%%;line-height:%%?94rpx?%%;padding:0 %%?26rpx?%%;border-bottom:1px solid #f4f4f4}.cart-view .promotion .icon{display:inline-block;height:%%?24rpx?%%;width:%%?15rpx?%%}.cart-view .promotion{margin-top:%%?25.5rpx?%%;display:inline-block;height:%%?43rpx?%%;width:%%?480rpx?%%;line-height:%%?43rpx?%%;font-size:0}.cart-view .promotion .tag{border:1px solid #f48f18;height:%%?37rpx?%%;line-height:%%?31rpx?%%;padding:0 %%?9rpx?%%;margin-right:%%?10rpx?%%;color:#f48f18;font-size:%%?24.5rpx?%%}.cart-view .promotion .txt{height:%%?43rpx?%%;line-height:%%?43rpx?%%;padding-right:%%?10rpx?%%;color:#333;font-size:%%?29rpx?%%;overflow:hidden}.cart-view .get{margin-top:%%?18rpx?%%;display:inline-block;height:%%?58rpx?%%;padding-left:%%?14rpx?%%;border-left:1px solid #d9d9d9;line-height:%%?58rpx?%%;font-size:%%?29rpx?%%;color:#333}.cart-bottom{position:fixed;bottom:56px;left:0;height:%%?98rpx?%%;width:100%;background:#fff;display:flex}.cart-bottom .checkbox{height:%%?34rpx?%%;padding-left:%%?60rpx?%%;line-height:%%?34rpx?%%;margin:%%?33rpx?%% %%?18rpx?%% %%?33rpx?%% %%?26rpx?%%;background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-0e09baa37e.png) no-repeat;background-size:%%?34rpx?%%;font-size:%%?28rpx?%%;color:#999}.cart-bottom .checkbox.checked{background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-checked-822e54472a.png) no-repeat;background-size:%%?34rpx?%%}.cart-bottom .total{height:%%?34rpx?%%;line-height:%%?34rpx?%%;flex:1;margin:%%?33rpx?%% %%?10rpx?%%;font-size:%%?36rpx?%%;text-align:right;color:#cc2020}.cart-bottom .delete{height:%%?34rpx?%%;width:auto;margin:%%?33rpx?%% %%?18rpx?%%;font-size:%%?29rpx?%%}.cart-bottom .checkout{height:%%?98rpx?%%;width:%%?260rpx?%%;text-align:center;line-height:%%?100rpx?%%;font-size:%%?36rpx?%%;background:#b4282d;color:#fff}.delete_only{padding:%%?67rpx?%% %%?30rpx?%%;line-height:%%?30rpx?%%;width:%%?120rpx?%%;height:%%?164rpx?%%;background:#cc2020;display:inline-block}.delete_only .delete_text{color:#fff;font-size:%%?30rpx?%%;float:left}@code-separator-line:__wxRoute = "pages/cart/cart";__wxRouteBegin = true;
define("pages/cart/cart.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../utils/util.js');
var api = require('../../config/api.js');
var user = require('../../services/user.js');

var app = getApp();

Page({
  data: {
    cartGoods: [],
    cartTotal: {
      "goodsCount": 0,
      "goodsAmount": 0.00,
      "checkedGoodsCount": 0,
      "checkedGoodsAmount": 0.00
    },
    isEditCart: false,
    checkedAllStatus: true,
    editCartList: [],
    host: api.Host,
    type:'normal'

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // this.getCartList()
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    this.getCartList();
  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  },

  onPullDownRefresh: function () {
    //   let that = this
      this.setData({
            cartGoods: [],
            cartTotal: {
                "goodsCount": 0,
                "goodsAmount": 0.00,
                "checkedGoodsCount": 0,
                "checkedGoodsAmount": 0.00
            },
            isEditCart: false,
            checkedAllStatus: true,
            editCartList: [],
            host: api.Host,
      });
      this.getCartList();
  },
  getCartList: function () {
    let that = this;
    util.request(api.CartList, {type:this.data.type}).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          cartGoods: res.data.cartList,
          cartTotal: res.data.cartTotal
        });
      }
      that.setData({
        checkedAllStatus: that.isCheckedAll()
      });
    });
  },
  isCheckedAll: function () {
    //判断购物车商品已全选
    let that = this;
    that.setData({
        'cartTotal.checkedGoodsAmount': that.total_amount()
    });
    return this.data.cartGoods.every(function (element, index, array) {

      if (element.checked == true) {
        return true;
      } else {
        return false;
      }
    });
  },
  checkedItem: function (event) {
    let itemIndex = event.target.dataset.itemIndex;
    let that = this;

    if (!this.data.isEditCart) {
      that.data.cartGoods[itemIndex].checked = !that.data.cartGoods[itemIndex].checked
      that.setData({
        cartGoods: that.data.cartGoods,
        'cartTotal.checkedGoodsCount': that.getCheckedGoodsCount(),
        checkedAllStatus: that.isCheckedAll()
      })

    } else {
      //编辑状态
      let tmpCartData = this.data.cartGoods.map(function (element, index, array) {
        if (index == itemIndex){
          element.checked = !element.checked;
        }

        return element;
      });

      that.setData({
        cartGoods: tmpCartData,
        checkedAllStatus: that.isCheckedAll(),
        'cartTotal.checkedGoodsCount': that.getCheckedGoodsCount()
      });
    }
  },
  getCheckedGoodsCount: function(){
    let checkedGoodsCount = 0;
    this.data.cartGoods.forEach(function (v) {
      if (v.checked === true) {
        checkedGoodsCount += v.number;
      }
    });
    return checkedGoodsCount;
  },
  checkedAll: function () {
    let that = this;
    if (!this.data.isEditCart) {
      let checkedAllStatus = that.isCheckedAll();
      let tmpCartData = this.data.cartGoods.map(function (v) {
        v.checked = !checkedAllStatus;
        return v;
      });

      that.setData({
        cartGoods: tmpCartData,
        checkedAllStatus: that.isCheckedAll(),
        'cartTotal.checkedGoodsCount': that.getCheckedGoodsCount()
      });
    } else {
      //编辑状态
      let checkedAllStatus = that.isCheckedAll();
      let tmpCartData = this.data.cartGoods.map(function (v) {
        v.checked = !checkedAllStatus;
        return v;
      });

      that.setData({
        cartGoods: tmpCartData,
        checkedAllStatus: that.isCheckedAll(),
        'cartTotal.checkedGoodsCount': that.getCheckedGoodsCount()
      });
    }

  },
  editCart: function () {
    var that = this;
    if (this.data.isEditCart) {
      this.getCartList();
      this.setData({
        isEditCart: !this.data.isEditCart
      });
    } else {
      //编辑状态
      let tmpCartList = this.data.cartGoods.map(function (v) {
        v.checked = false;
        return v;
      });
      this.setData({
        editCartList: this.data.cartGoods,
        cartGoods: tmpCartList,
        isEditCart: !this.data.isEditCart,
        checkedAllStatus: that.isCheckedAll(),
        'cartTotal.checkedGoodsCount': that.getCheckedGoodsCount()
      });
    }

  },
  updateCart: function (productId, goodsId, number, id, index) {
    let that = this;
    util.request(api.CartUpdate, {
      'line_list':[
          {'quantity': number,
          'index': index}
          ],
    }, 'POST').then(function (res) {
      that.setData({
        checkedAllStatus: that.isCheckedAll()
      });
    });

  },
  cutNumber: function (event) {

    let itemIndex = event.target.dataset.itemIndex;
    let cartItem = this.data.cartGoods[itemIndex];
    let number = (cartItem.number - 1 > 1) ? cartItem.number - 1 : 1;
    cartItem.number = number;
    this.setData({
      cartGoods: this.data.cartGoods,
      'cartTotal.checkedGoodsCount': this.getCheckedGoodsCount(),
    });
    this.updateCart(cartItem.product_id, cartItem.goods_id, number, cartItem.id, cartItem.index);
  },
  addNumber: function (event) {
    let itemIndex = event.target.dataset.itemIndex;
    let cartItem = this.data.cartGoods[itemIndex];
    let number = cartItem.number + 1;
    cartItem.number = number;
    this.setData({
      cartGoods: this.data.cartGoods,
      'cartTotal.checkedGoodsCount': this.getCheckedGoodsCount(),
    });
    this.updateCart(cartItem.product_id, cartItem.goods_id, number, cartItem.id, cartItem.index);

  },
  checkoutOrder: function () {
    //获取已选择的商品
    if(!Object.keys(app.global.user).length && !(typeof(WeixinJSBridge)=="undefined")){
        wx.showToast({
          image: '/static/images/icon_error.png',
          title: '请先登入',
          mask: true
        });
        setTimeout(function(){
            wx.navigateTo({
                url: '/pages/auth/login/login',
            })
        }, 1000);
        return
    }
    if(!app.global.user.wx && !(typeof(WeixinJSBridge)=="undefined")){
        user.wx_auth();
    }


    let that = this;

    var checkedGoods = this.data.cartGoods.filter(function (element, index, array) {
      if (element.checked == true) {
        return true;
      } else {
        return false;
      }
    });

    if (checkedGoods.length <= 0) {
      return false;
    }
    var request_data = '';
    var quantity;
    var index;
    var type_valid = checkedGoods[0].type
    for (var i = 0; i < checkedGoods.length; i++){
      if(type_valid != checkedGoods[i].type){
          wx.showToast({
                title: '升级区商品与普通商品无法同时下单购买'
              });
          return ;
      }
      quantity = checkedGoods[i]['number']
      index = checkedGoods[i]['index']
      if (request_data){
        request_data = request_data + '-'
      }
      request_data = request_data + index + '_' + quantity
    };
    util.request(api.CartCheckout, {
      'line_data': request_data
    }, 'GET').then(function (res) {
        wx.navigateTo({
          url: '../shopping/checkout/checkout'
        })
    });


  },
  deleteCart: function () {
    //获取已选择的商品
    let that = this;

    let productIds = this.data.cartGoods.filter(function (element, index, array) {
      if (element.checked == true) {
        return true;
      } else {
        return false;
      }
    });

    if (productIds.length <= 0) {
      return false;
    }
    var line_list = []
    for (var i = 0; i < productIds.length;i++){
      line_list.push({
        'quantity': -1,
        'index': productIds[i].index,
      })
    }
    util.request(api.CartDelete, {
      'line_list': line_list
    }, 'POST').then(function (res) {
      if (res.errno === 0) {
        that.getCartList();
        that.setData({
          checkedAllStatus: that.isCheckedAll()
        })
      }
    });
    },
    delete:function(event){
      var itemIndex = event.target.dataset.itemIndex;
      let that = this;
      util.request(api.CartDelete, {
        'line_list': [{
            'quantity': -1,
            'index': itemIndex,
        },]
      }, 'POST').then(function (res) {
        if (res.errno === 0) {
            that.getCartList();
            that.setData({
              checkedAllStatus: that.isCheckedAll()
            })
        }
      });
    },
    total_amount: function(){
        let that = this;
        var checkedGoods = this.data.cartGoods.filter(function (element, index, array) {
          if (element.checked == true) {
            return true;
          } else {
            return false;
          }
        });

        if (checkedGoods.length <= 0) {
          return 0;
        }
        var total = 0;
        for (var i = 0; i < checkedGoods.length; i++){
          total = checkedGoods[i]['number']*checkedGoods[i]['retail_price'] + total
        };
        return total.toFixed(2);

    },

    select_cart: function(e){
        this.setData({
            type: e.currentTarget.dataset.type01
        })
        this.getCartList()
    }

})

});require("pages/cart/cart.js")@code-separator-line:["div","view","image","text","scroll-view","navigator","input"]