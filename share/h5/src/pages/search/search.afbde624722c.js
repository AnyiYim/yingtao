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
    Z([3, 'container']);Z([3, 'search-header']);Z([3, 'input-box']);Z([3, 'icon']);Z([3, 'http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png']);Z([3, 'onKeywordConfirm']);Z([3, 'onInputFocus']);Z([3, 'onInputChange']);Z([3, 'keywrod']);Z([3, 'search']);Z([3, 'input']);Z([[6],[[7],[3, "defaultKeyword"]],[3, "keyword"]]);Z([[7],[3, "keyword"]]);Z([3, 'clearKeyword']);Z([3, 'del']);Z([3, 'http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png']);Z([3, 'closeSearch']);Z([3, 'right']);Z([3, '取消']);Z([[6],[[7],[3, "goodsList"]],[3, "length"]]);Z([3, 'search-result']);Z([3, 'cate-item']);Z([3, 'b']);Z([[7],[3, "goodsList"]]);Z([3, 'iitem']);Z([3, 'iindex']);Z([3, 'item']);Z([a, [3, '/pages/goods/goods?id\x3d'],[[6],[[7],[3, "iitem"]],[3, "id"]]]);Z([3, 'cover']);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[7],[3, "iitem"]],[3, "images"]],[1, 0]]]);Z([3, 'name']);Z([a, [[6],[[7],[3, "iitem"]],[3, "title"]],[3, '  ']]);Z([3, 'price']);Z([a, [3, '￥'],[[6],[[6],[[7],[3, "iitem"]],[3, "stockrecords"]],[1, 0]]]);Z([[2, "!"], [[7],[3, "loading_next"]]]);Z([3, 'show-loading']);Z([3, 'show-loading-text']);Z([3, '加载中...']);Z([[7],[3, "displayHistoryBar"]]);Z([3, 'search-result-empty']);Z([3, 'http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noSearchResult-7572a94f32.png']);Z([3, 'text']);Z([3, '您寻找的商品还未上架']);
  })(z);d_["./pages/search/search.wxml"] = {};
  var m0=function(e,s,r,gg){
    var oZK = _n("view");_r(oZK, 'class', 0, e, s, gg);var oaK = _n("view");_r(oaK, 'class', 1, e, s, gg);var obK = _n("view");_r(obK, 'class', 2, e, s, gg);var ocK = _m( "image", ["class", 3,"src", 1], e, s, gg);_(obK,ocK);var odK = _m( "input", ["bindconfirm", 5,"bindfocus", 1,"bindinput", 2,"class", 3,"confirmType", 4,"confirmType", 4,"name", 5,"placeholder", 6,"value", 7], e, s, gg);_(obK,odK);var oeK = _v();
      if (_o(12, e, s, gg)) {
        oeK.wxVkey = 1;var ofK = _m( "image", ["bindtap", 13,"class", 1,"src", 2], e, s, gg);_(oeK, ofK);
      } _(obK,oeK);_(oaK,obK);var ohK = _m( "view", ["bindtap", 16,"class", 1], e, s, gg);var oiK = _o(18, e, s, gg);_(ohK,oiK);_(oaK,ohK);_(oZK,oaK);var ojK = _n("scroll-view");var okK = _v();
      if (_o(19, e, s, gg)) {
        okK.wxVkey = 1;var olK = _n("view");_r(olK, 'class', 20, e, s, gg);var onK = _n("view");_r(onK, 'class', 21, e, s, gg);var ooK = _n("view");_r(ooK, 'class', 22, e, s, gg);var opK = _v();var oqK = function(ouK,otK,osK,gg){var orK = _m( "navigator", ["class", 26,"url", 1], ouK, otK, gg);var owK = _m( "image", ["backgroundSize", 28,"class", 1,"src", 2], ouK, otK, gg);_(orK,owK);var oxK = _n("text");_r(oxK, 'class', 31, ouK, otK, gg);var oyK = _o(32, ouK, otK, gg);_(oxK,oyK);_(orK,oxK);var ozK = _n("text");_r(ozK, 'class', 33, ouK, otK, gg);var o_K = _o(34, ouK, otK, gg);_(ozK,o_K);_(orK,ozK);_(osK, orK);return osK;};_2(23, oqK, e, s, gg, opK, "iitem", "iindex", '');_(ooK,opK);_(onK,ooK);_(olK,onK);_(okK, olK);
      } _(ojK,okK);var oAL = _v();
      if (_o(35, e, s, gg)) {
        oAL.wxVkey = 1;var oBL = _n("view");_r(oBL, 'class', 36, e, s, gg);var oDL = _n("view");_r(oDL, 'class', 37, e, s, gg);var oEL = _o(38, e, s, gg);_(oDL,oEL);_(oBL,oDL);_(oAL, oBL);
      } _(ojK,oAL);var oFL = _v();
      if (_o(39, e, s, gg)) {
        oFL.wxVkey = 1;var oGL = _n("view");_r(oGL, 'class', 40, e, s, gg);var oIL = _m( "image", ["class", 3,"src", 38], e, s, gg);_(oGL,oIL);var oJL = _n("text");_r(oJL, 'class', 42, e, s, gg);var oKL = _o(43, e, s, gg);_(oJL,oKL);_(oGL,oJL);_(oFL, oGL);
      } _(ojK,oFL);_(oZK,ojK);_(r,oZK);
    return r;
  };
        e_["./pages/search/search.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:body{min-height:100%;background-color:#f4f4f4}.container{min-height:100%;background-color:#f4f4f4}.search-header{position:fixed;top:42px;width:%%?750rpx?%%;height:%%?91rpx?%%;display:flex;background:#fff;border-bottom:1px solid rgba(0,0,0,.15);padding:0 %%?31.25rpx?%%;font-size:%%?29rpx?%%;color:#333;z-index:10}.search-header .input-box{position:relative;margin-top:%%?16rpx?%%;float:left;width:0;flex:1;height:%%?59rpx?%%;line-height:%%?59rpx?%%;padding:0 %%?20rpx?%%;background:#f4f4f4}.search-header .icon{position:absolute;top:%%?14rpx?%%;left:%%?20rpx?%%;width:%%?31rpx?%%;height:%%?31rpx?%%}.search-header .del{position:absolute;top:%%?3rpx?%%;right:%%?10rpx?%%;width:%%?53rpx?%%;height:%%?53rpx?%%;z-index:10}.search-header .keywrod{position:absolute;top:0;left:%%?40rpx?%%;width:%%?506rpx?%%;height:%%?59rpx?%%;padding-left:%%?30rpx?%%}.search-header .right{margin-top:%%?24rpx?%%;margin-left:%%?31rpx?%%;margin-right:%%?6rpx?%%;width:%%?58rpx?%%;height:%%?43rpx?%%;line-height:%%?43rpx?%%;float:right}.search-result{margin-top:%%?100rpx?%%}.no-search{height:auto;overflow:hidden;margin-top:%%?91rpx?%%}.serach-keywords{background:#fff;width:%%?750rpx?%%;height:auto;overflow:hidden;margin-bottom:%%?20rpx?%%}.serach-keywords .h{padding:0 %%?31.25rpx?%%;height:%%?93rpx?%%;line-height:%%?93rpx?%%;width:100%;color:#999;font-size:%%?29rpx?%%}.serach-keywords .title{display:block;width:%%?120rpx?%%;float:left}.serach-keywords .icon{margin-top:%%?19rpx?%%;float:right;display:block;margin-left:%%?511rpx?%%;height:%%?55rpx?%%;width:%%?55rpx?%%}.serach-keywords .b{width:%%?750rpx?%%;height:auto;overflow:hidden;padding-left:%%?31.25rpx?%%}.serach-keywords .item{display:inline-block;width:auto;height:%%?48rpx?%%;line-height:%%?48rpx?%%;padding:0 %%?15rpx?%%;border:1px solid #999;margin:0 %%?31.25rpx?%% %%?31.25rpx?%% 0;font-size:%%?24rpx?%%;color:#333}.serach-keywords .item.active{color:#b4282d;border:1px solid #b4282d}.shelper-list{width:%%?750rpx?%%;height:auto;overflow:hidden;background:#fff;padding:0 %%?31.25rpx?%%}.shelper-list .item{height:%%?93rpx?%%;width:%%?687.5rpx?%%;line-height:%%?93rpx?%%;font-size:%%?24rpx?%%;color:#333;border-bottom:1px solid #f4f4f4}.sort{top:%%?91rpx?%%;background:#fff;width:100%;height:%%?78rpx?%%}.sort-box{background:#fff;width:100%;height:%%?78rpx?%%;overflow:hidden;padding:0 %%?30rpx?%%;display:flex;border-bottom:1px solid #d9d9d9}.sort-box .item{height:%%?78rpx?%%;line-height:%%?78rpx?%%;text-align:center;flex:1;color:#333;font-size:%%?30rpx?%%}.sort-box .item .txt{display:block;width:100%;height:100%;color:#333}.sort-box .item.active .txt{color:#b4282d}.sort-box .item.by-price{background:url(//yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/no-3127092a69.png) %%?155rpx?%% center no-repeat;background-size:%%?15rpx?%% %%?21rpx?%%}.sort-box .item.by-price.active.asc{background:url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/up-636b92c0a5.png) %%?155rpx?%% center no-repeat;background-size:%%?15rpx?%% %%?21rpx?%%}.sort-box .item.by-price.active.desc{background:url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/down-95e035f3e5.png) %%?155rpx?%% center no-repeat;background-size:%%?15rpx?%% %%?21rpx?%%}.sort-box-category{background:#fff;width:100%;height:auto;overflow:hidden;padding:%%?0rpx?%% %%?40rpx?%% 0 0;border-bottom:1px solid #d9d9d9}.sort-box-category .item{height:%%?54rpx?%%;line-height:%%?54rpx?%%;text-align:center;float:left;padding:0 %%?16rpx?%%;margin:0 0 %%?40rpx?%% %%?40rpx?%%;border:1px solid #666;color:#333;font-size:%%?24rpx?%%}.sort-box-category .item.active{color:#b4282d;border:1px solid #b4282d}.cate-item{height:auto;overflow:hidden}.cate-item .h{height:%%?145rpx?%%;width:%%?750rpx?%%;display:flex;flex-direction:column;align-items:center;justify-content:center}.cate-item .h .name{display:block;height:%%?35rpx?%%;margin-bottom:%%?18rpx?%%;font-size:%%?30rpx?%%;color:#333}.cate-item .h .desc{display:block;height:%%?24rpx?%%;font-size:%%?24rpx?%%;color:#999}.cate-item .b{width:%%?750rpx?%%;padding:0 %%?6.25rpx?%%;height:auto;overflow:hidden}.cate-item .list-filter{height:%%?80rpx?%%;width:100%;background:#fff;margin-bottom:%%?6.25rpx?%%}.cate-item .b .item{float:left;background:#fff;width:%%?368rpx?%%;margin-bottom:%%?6.25rpx?%%;padding-bottom:%%?33.333rpx?%%;height:auto;overflow:hidden;text-align:center}.cate-item .b .item-b{margin-left:%%?6.25rpx?%%}.cate-item .item .img{width:%%?302rpx?%%;height:%%?302rpx?%%}.cate-item .item .name{display:block;width:%%?365.625rpx?%%;height:%%?58rpx?%%;margin:%%?11.5rpx?%% 0 %%?22rpx?%% 0;text-align:center;overflow:hidden;padding:0 %%?20rpx?%%;font-size:%%?30rpx?%%;color:#333}.cate-item .item .price{display:block;width:%%?365.625rpx?%%;height:%%?30rpx?%%;text-align:center;font-size:%%?30rpx?%%;color:#b4282d}.search-result-empty{width:100%;height:100%;padding-top:%%?300rpx?%%}.search-result-empty .icon{margin:0 auto;display:block;width:%%?240rpx?%%;height:%%?240rpx?%%}.search-result-empty .text{display:block;width:100%;height:%%?40rpx?%%;font-size:%%?28rpx?%%;text-align:center;color:#999}.active{color:#fb030c;border-bottom:1px solid #fb030c}.show-loading{margin-top:%%?20rpx?%% 0;width:%%?750rpx?%%;text-align:center;opacity:.7;height:%%?50rpx?%%;line-height:%%?50rpx?%%}.show-loading-text{height:100%;text-align:center}@code-separator-line:__wxRoute = "pages/search/search";__wxRouteBegin = true;
define("pages/search/search.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../utils/util.js');
var api = require('../../config/api.js');
var npage = require('../../services/page.js');
var app = getApp()

Page({
    data: {
        Host: api.Host,
        keywrod: null,
        displayHistoryBar: false,
        goodsList: [],
        helpKeyword: [],
        historyKeyword: [],
        categoryFilter: false,
        defaultKeyword: {},
        hotKeyword: [],
        nexturl: null,
        loading_next:false,
    },
    closeSearch: function () {
        wx.navigateBack()
    },
    clearKeyword: function () {
        this.setData({
            keyword: null,
            displayHistoryBar: false
        });
    },
    onLoad: function(options){
        this.getSearchKeyword(options.q)
    },
    getSearchKeyword: function(anywordkey) {
        let that = this;
        util.request(api.SearchIndex, {'q': anywordkey }).then(function (res) {

            if(res[0].length != 0){
                that.setData({
                    goodsList: res[0],
                    nexturl:res[1],
                });
            }else{
                that.setData({
                    displayHistoryBar:true,
                });
            }
        });
    },
    onReachBottom: function(){
        let that = this
        if (that.data.nexturl){
            if (this.data.loading_next){
                var url = that.data.nexturl;
                var method = 'GET' ;
                var data = {};
                this.setData({
                    loading_next: false
                })
                npage.nextPage(url, data, method).then(function(res){
                    if(res[0].length != 0){
                        var list_ = that.data.goodsList
                        var res_list = res[0]
                        list_ = list_.concat(res_list);
                        that.setData({
                            goodsList: list_,
                            nexturl:res[1],
                            loading_next:true,
                        });
                    }else{
                        that.setData({
                            displayHistoryBar:true,
                        });
                    }
                })
            }
            // that.getGoodsList(that.data.nexturl);
        }else{
            wx.showToast({
                title:'已经是全部了',
                icon: 'none',
            })
        }
    },
    onInputChange: function (e) {
        let that =this
        this.setData({
            historyKeyword: that.data.historyKeyword
        });
    },
    onInputFocus: function () {
        this.setData({
            displayHistoryBar:true,
        });
    },
    clearHistory: function () {
        this.setData({
            historyKeyword: []
        })
        util.request(api.SearchClearHistory, {}, 'POST').then(function (res) {
        });
    },
    getGoodsList: function (url) {
        let that = this;
        // if (url){
        //     var data = {}
        // }else{
        //     var data = {'q': that.data.keyword}
        // }
        // url = url || api.SearchIndex;
        var data ={'q': that.data.keyword}
        url = api.SearchIndex
        util.request(url, data).then(function (res) {
            if(res[0].length != 0){
                // var list_ = that.data.goodsList
                // var res_list = res[0]
                // list_ = list_.concat(res_list);
                that.setData({
                    goodsList: res[0],
                    nexturl:res[1],
                    loading_next: true,
                });
            }else{
                that.setData({
                    displayHistoryBar:true,
                });
            }
        });
    },
    onKeywordTap: function (event) {
        this.getSearchResult(event.target.dataset.keyword);
    },
    getSearchResult(keyword) {
        this.setData({
            keyword: keyword,
            categoryId: 0,
            goodsList: []
        });
        this.getGoodsList();
    },
    onKeywordConfirm(event) {
        let that = this;
        that.data.historyKeyword.push(event.detail.value)
        this.setData({
            keyword: null,
            historyKeyword: that.data.historyKeyword,
            displayHistoryBar: false
        })
        this.getSearchResult(event.detail.value);
    },


})

});require("pages/search/search.js")@code-separator-line:["div","view","image","input","scroll-view","navigator","text"]