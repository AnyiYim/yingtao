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
    Z([3, 'container']);Z([3, 'm-menu']);Z([3, 'search-header']);Z([3, 'input-box']);Z([3, 'onKeywordConfirm']);Z([3, 'search-key']);Z([3, 'keyword']);Z([3, '搜索']);Z([3, 'input']);Z([3, '输入你想搜索的物品']);Z([[7],[3, "keyword"]]);Z([a, [3, 'search-icon '],[[2,'?:'],[[2, "=="], [[7],[3, "icon_hide"]], [1, "hide"]],[1, "icon-hide"],[1, ""]]]);Z([3, 'search-icon']);Z([3, 's-icon']);Z([3, '../../static/images/first_page/home_search.png']);Z([3, 'true']);Z([3, 'banner']);Z([3, '1000']);Z([3, '3000']);Z([[7],[3, "banner"]]);Z([3, 'item']);Z([[6],[[7],[3, "item"]],[3, "id"]]);Z([a, [3, '/pages/promotions/promotions?id\x3d'],[[6],[[7],[3, "item"]],[3, "id"]]]);Z([3, 'activate-img']);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "item"]],[3, "image"]]]);Z([3, 'width: 100%; height: 200px;']);Z([3, 'hot']);Z([3, 'hot-title']);Z([3, '今日爆款']);Z([3, 'hot-item']);Z([3, 'width: 752px; display: flex;']);Z([[7],[3, "hotGoodsList"]]);Z([a, [3, '/pages/goods/goods?id\x3d'],[[6],[[7],[3, "item"]],[3, "id"]]]);Z([3, 'image']);Z([a, [[7],[3, "Host"]],[3, '/media/'],[[6],[[7],[3, "item"]],[3, "image"]]]);Z([3, 'name']);Z([a, [[6],[[7],[3, "item"]],[3, "title"]]]);Z([3, 'price']);Z([a, [3, '￥'],[[6],[[6],[[6],[[7],[3, "item"]],[3, "stockrecords"]],[1, 0]],[3, "price_retail"]]]);Z([[7],[3, "category"]]);Z([3, 'time-activate cate-item']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[7],[3, "item"]],[3, "data"]],[3, "image"]]]);Z([3, 'width:100%;']);Z([3, 'b']);Z([[6],[[6],[[7],[3, "item"]],[3, "products"]],[1, 0]]);Z([3, 'iitem']);Z([3, 'iindex']);Z([a, [3, 'item '],[[2,'?:'],[[2, "=="], [[2, "%"], [[2, "+"], [[7],[3, "iindex"]], [1, 1]], [1, 2]], [1, 0]],[1, "item-b"],[1, ""]]]);Z([a, [3, '/pages/goods/goods?id\x3d'],[[6],[[7],[3, "iitem"]],[3, "id"]]]);Z([a, [3, '\n                    '],[[6],[[6],[[6],[[7],[3, "iitem"]],[3, "images"]],[1, 0]],[3, "thumb"]],[3, '\n                    ']]);Z([3, 'cover']);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[6],[[7],[3, "iitem"]],[3, "images"]],[1, 0]],[3, "thumb"]]]);Z([a, [[6],[[7],[3, "iitem"]],[3, "title"]]]);Z([a, [3, '￥'],[[6],[[6],[[6],[[7],[3, "iitem"]],[3, "stockrecords"]],[1, 0]],[3, "price_retail"]]]);
  })(z);d_["./pages/index/index.wxml"] = {};
  var m0=function(e,s,r,gg){
    var oC = _n("view");_r(oC, 'class', 0, e, s, gg);var oD = _n("view");_r(oD, 'class', 1, e, s, gg);var oE = _n("view");_r(oE, 'class', 2, e, s, gg);var oF = _n("view");_r(oF, 'class', 3, e, s, gg);var oG = _m( "input", ["bindconfirm", 4,"class", 1,"class", 2,"confirmType", 3,"name", 4,"placeholder", 5,"value", 6], e, s, gg);_(oF,oG);var oH = _m( "view", ["class", 11,"id", 1], e, s, gg);var oI = _m( "image", ["class", 13,"src", 1], e, s, gg);_(oH,oI);_(oF,oH);_(oE,oF);_(oD,oE);var oJ = _m( "swiper", ["autoplay", 15,"indicatorDots", 0,"class", 1,"duration", 2,"interval", 3], e, s, gg);var oK = _v();var oL = function(oP,oO,oN,gg){var oM = _n("swiper-item");var oR = _n("navigator");_r(oR, 'url', 22, oP, oO, gg);var oS = _m( "image", ["class", 23,"src", 1,"style", 2], oP, oO, gg);_(oR,oS);_(oM,oR);_(oN, oM);return oN;};_2(19, oL, e, s, gg, oK, "item", "index", '{{item.id}}');_(oJ,oK);_(oD,oJ);var oT = _n("view");_r(oT, 'class', 26, e, s, gg);var oU = _n("view");_r(oU, 'class', 27, e, s, gg);var oV = _o(28, e, s, gg);_(oU,oV);_(oT,oU);var oW = _m( "scroll-view", ["scrollX", -1,"class", 29], e, s, gg);var oX = _n("view");_r(oX, 'style', 30, e, s, gg);var oY = _n("view");_r(oY, 'class', 20, e, s, gg);var oZ = _v();var oa = function(oe,od,oc,gg){var ob = _n("navigator");_r(ob, 'url', 32, oe, od, gg);var og = _m( "image", ["class", 33,"src", 1], oe, od, gg);_(ob,og);var oh = _n("text");_r(oh, 'class', 35, oe, od, gg);var oi = _o(36, oe, od, gg);_(oh,oi);_(ob,oh);var oj = _n("text");_r(oj, 'class', 37, oe, od, gg);var ok = _o(38, oe, od, gg);_(oj,ok);_(ob,oj);_(oc, ob);return oc;};_2(31, oa, e, s, gg, oZ, "item", "index", '');_(oY,oZ);_(oX,oY);_(oW,oX);_(oT,oW);_(oD,oT);var ol = _v();var om = function(oq,op,oo,gg){var on = _n("view");_r(on, 'class', 40, oq, op, gg);var os = _m( "image", ["class", 23,"src", 18,"style", 19], oq, op, gg);_(on,os);var ot = _n("view");_r(ot, 'class', 43, oq, op, gg);var ou = _v();var ov = function(oz,oy,ox,gg){var ow = _m( "navigator", ["class", 47,"url", 1], oz, oy, gg);var oAB = _o(49, oz, oy, gg);_(ow,oAB);var oBB = _m( "image", ["backgroundSize", 50,"class", 1,"src", 2], oz, oy, gg);_(ow,oBB);var oCB = _n("text");_r(oCB, 'class', 35, oz, oy, gg);var oDB = _o(53, oz, oy, gg);_(oCB,oDB);_(ow,oCB);var oEB = _n("text");_r(oEB, 'class', 37, oz, oy, gg);var oFB = _o(54, oz, oy, gg);_(oEB,oFB);_(ow,oEB);_(ox, ow);return ox;};_2(44, ov, oq, op, gg, ou, "iitem", "iindex", '');_(ot,ou);_(on,ot);_(oo, on);return oo;};_2(39, om, e, s, gg, ol, "item", "index", '');_(oD,ol);_(oC,oD);_(r,oC);
    return r;
  };
        e_["./pages/index/index.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:.head{display:none}.scrollable{position:absolute;margin-top:-42px}.container{width:100%}.search-header .keyword{margin-top:%%?12rpx?%%}.banner{margin-top:%%?30rpx?%%;border-top:%%?1rpx?%% solid #f4f4f4;width:%%?750rpx?%%;height:%%?417rpx?%%}.banner wx-image{width:100%;height:%%?417rpx?%%}.time-activate{margin-top:%%?10rpx?%%}.time-activate .activate-img{width:%%?750rpx?%%;height:%%?410rpx?%%}.m-menu{width:%%?750rpx?%%;flex-flow:row nowrap;align-items:center;justify-content:space-between;background-color:#fff}.m-menu .menu-c{display:inline-flex;margin:0 %%?10rpx?%%;height:%%?181rpx?%%;flex-flow:row nowrap;align-items:center;justify-content:space-between}.a-section{width:%%?750rpx?%%;height:auto;overflow:hidden;background:#fff;color:#333}.a-section .h{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;height:%%?96rpx?%%}.h .txt{background:url("") right %%?4rpx?%% no-repeat;background-size:%%?16.656rpx?%% %%?27rpx?%%;display:inline-block;height:%%?96rpx?%%;font-size:%%?33rpx?%%;line-height:%%?96rpx?%%;float:left}.type-right-icon{height:%%?96rpx?%%;line-height:%%?96rpx?%%;display:inline-block;float:left}.right-image-icon{margin-top:%%?28rpx?%%;width:%%?40rpx?%%;height:%%?40rpx?%%}.a-brand .b{width:%%?750rpx?%%;height:%%?411rpx?%%}.a-brand .item-1 .brand{display:block;font-size:%%?33rpx?%%;height:%%?43rpx?%%;overflow:hidden;color:#333;padding-left:%%?10rpx?%%;padding-top:%%?10rpx?%%}.a-brand .item-1 .price,.a-brand .item-1 .unit{padding-left:%%?10rpx?%%;padding-top:%%?10rpx?%%;font-size:%%?25rpx?%%;color:#999}.set-blank{height:%%?10rpx?%%;background:#fff}.a-brand .item-1{width:%%?750rpx?%%;height:%%?411rpx?%%;padding:%%?30rpx?%%;border-top:%%?1rpx?%% solid #fff;margin-left:%%?1rpx?%%}.a-brand .item-1 .item-block{margin:0 auto;height:100%}.a-brand .item-1 .item-url{height:100%}.supply-left{background:#ecede8;height:%%?350rpx?%%;width:%%?310rpx?%%;display:inline-block;float:left}.supply-left .sl-wrap{height:100%;width:100%}.supply-left .sl-wrap .sl-mt{height:%%?100rpx?%%;width:100%}.supply-left .sl-wrap .sl-img{height:%%?254rpx?%%;width:100%}.a-brand .item-1 .supply-left .img{width:%%?310rpx?%%;height:%%?200rpx?%%;height:%%?250rpx?%%}.supply-right{background:#e6eaeb;height:%%?350rpx?%%;width:%%?375rpx?%%;display:inline-block;float:right}.sr-child{height:%%?175rpx?%%;padding:%%?8rpx?%% %%?5rpx?%%;width:%%?375rpx?%%}.supply-right .sr-child .sr-wrap{width:100%;height:100%}.supply-right .sr-child .sr-mt{display:inline-block;float:left;width:%%?170rpx?%%}.supply-right .sr-child .sr-img{width:%%?185rpx?%%;height:%%?150rpx?%%;display:inline-block;float:left}.a-brand .item-1 .supply-right .img{width:%%?185rpx?%%;height:%%?150rpx?%%}.a-new .b{width:%%?750rpx?%%;height:auto;overflow:hidden;padding:0 %%?31rpx?%% %%?45rpx?%% %%?31rpx?%%}.a-new .b .item{float:left;width:%%?302rpx?%%;margin-top:%%?10rpx?%%;margin-left:%%?21rpx?%%;margin-right:%%?21rpx?%%}.a-new .b .item-b{margin-left:%%?42rpx?%%}.a-new .b .img{width:%%?302rpx?%%;height:%%?302rpx?%%}.a-new .b .name{text-align:center;display:block;width:%%?302rpx?%%;height:%%?35rpx?%%;margin-bottom:%%?14rpx?%%;overflow:hidden;font-size:%%?30rpx?%%;color:#333}.a-new .b .price{display:block;text-align:center;line-height:%%?30rpx?%%;font-size:%%?30rpx?%%;color:#b4282d}.a-popular{width:%%?750rpx?%%;height:auto;overflow:hidden}.a-popular .b .item{border-top:%%?1rpx?%% solid #f4f4f4;height:%%?264rpx?%%;width:%%?1358.5rpx?%%}.a-popular .b .item .img{margin-right:%%?12rpx?%%;float:left;width:%%?240rpx?%%;height:%%?240rpx?%%}.a-popular .b .right{justify-content:center;height:%%?112rpx?%%;padding:%%?20rpx?%%;width:%%?125rpx?%%;background:#faeeee}.a-popular .b .text{justify-content:center;height:%%?112rpx?%%;padding:%%?20rpx?%%;width:%%?125rpx?%%;background:#faeeee}.a-popular .b .name{width:%%?436rpx?%%;display:block;color:#333;line-height:%%?50rpx?%%;max-height:%%?100rpx?%%;overflow:hidden;font-size:%%?30rpx?%%;bottom:0;position:absolute}.a-popular .b .desc{width:%%?436rpx?%%;display:block;color:#999;line-height:%%?50rpx?%%;font-size:%%?25rpx?%%}.a-popular .b .price{width:%%?436rpx?%%;display:block;color:#b4282d;line-height:%%?50rpx?%%;font-size:%%?33rpx?%%}.a-popular .b .item .recommond-item0 .img{margin:%%?12rpx?%%;width:%%?240rpx?%%;height:%%?240rpx?%%}.a-topic .b{height:%%?533rpx?%%;width:%%?750rpx?%%;padding:0 0 %%?48rpx?%% 0}.a-topic .b .list{height:%%?533rpx?%%;width:%%?750rpx?%%;white-space:nowrap}.a-topic .b .item{display:inline-block;height:%%?533rpx?%%;width:%%?680.5rpx?%%;margin-left:%%?30rpx?%%;overflow:hidden}.a-topic .b .item:last-child{margin-right:%%?30rpx?%%}.a-topic .b .img{height:%%?387.5rpx?%%;width:%%?680.5rpx?%%;margin-bottom:%%?30rpx?%%}.a-topic .b .np{height:%%?35rpx?%%;margin-bottom:%%?13.5rpx?%%;color:#333;font-size:%%?30rpx?%%}.a-topic .b .np .price{margin-left:%%?20.8rpx?%%;color:#b4282d}.a-topic .b .desc{display:block;height:%%?30rpx?%%;color:#999;font-size:%%?24rpx?%%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.good-grid{width:100%;height:auto;overflow:hidden}.good-grid .h{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;height:%%?130rpx?%%;font-size:%%?33rpx?%%;color:#333}.good-grid .b{width:100%;padding:0 %%?3rpx?%%;height:auto;overflow:hidden}.good-grid .b .item{float:left;background:#fff;width:%%?340rpx?%%;margin-left:%%?20rpx?%%;margin-top:%%?20rpx?%%;margin-right:%%?10rpx?%%;height:%%?520rpx?%%;overflow:hidden}.good-grid .b .item .a{height:%%?520rpx?%%;width:100%}.good-grid .b .item-b{margin-left:%%?20rpx?%%}.good-grid .item .img{width:inherit;height:%%?340rpx?%%;background:#f2f2f2}.b-goods-brief{background:#f1ece2;height:%%?178rpx?%%;padding:0 %%?10rpx?%%}.good-grid .item .name{width:inherit;height:%%?96rpx?%%;padding:%%?15rpx?%% 0;font-size:%%?26rpx?%%;line-height:%%?30rpx?%%;color:#333;display:-webkit-box;word-break:break-all;text-overflow:ellipsis;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:3}.good-grid .item .price{margin-top:%%?10rpx?%%;display:block;width:inherit;height:%%?30rpx?%%;font-size:%%?36rpx?%%;color:#cc2020;margin-bottom:%%?20rpx?%%}.good-grid .more-item{height:100%;width:100%}.cate-nav{width:100%;left:0;top:90px;z-index:1000}.cate-nav-body{white-space:nowrap;background:#fff;overflow:hidden}.cate-nav .item{display:inline-block;height:%%?84rpx?%%;min-width:%%?80rpx?%%;padding:0 %%?8rpx?%%}.cate-nav .item .name{display:block;height:%%?84rpx?%%;padding:0 %%?20rpx?%%;line-height:%%?84rpx?%%;color:#333;font-size:%%?30rpx?%%;width:auto}.cate-nav .item.active .name{color:#cc0202;border-bottom:%%?2rpx?%% solid #cc0202}.search-header{top:%%?80rpx?%%;left:0;z-index:1000;width:100%;height:%%?56rpx?%%;background:#fff;padding:0 %%?20rpx?%%;text-align:center;color:#333}.search-header .input-box{position:relative;float:left;width:94%;flex:1;height:%%?56rpx?%%;line-height:%%?65rpx?%%;margin-left:5%}.scavenging{display:inline-block;width:%%?78rpx?%%;height:%%?56rpx?%%;text-align:center}.scavenging .scaven-text{font-size:%%?20rpx?%%;position:absolute;top:%%?16rpx?%%;height:%%?24rpx?%%;width:%%?78rpx?%%;text-align:center;float:left}.search-header .icon{position:absolute;left:3%;width:%%?41rpx?%%;height:%%?30rpx?%%}.search-header .search-input{display:inline-block;width:%%?511rpx?%%;height:%%?56rpx?%%}.search-header wx-input{margin-left:%%?20rpx?%%;margin-right:%%?20rpx?%%;display:inline-block;width:%%?511rpx?%%;height:%%?56rpx?%%;text-align:center;border-radius:%%?5rpx?%%;background:#ececec;color:#999;font-size:%%?23rpx?%%}.search-header wx-input:-ms-input-placeholder{color:#999;opacity:1}.search-header wx-input:-webkit-input-placeholder{color:#999;opacity:1}.search-icon{position:absolute;width:17px;height:24px;top:8px;left:20%;z-index:1}.search-icon .s-icon{width:%%?30rpx?%%;height:%%?30rpx?%%}.icon-hide{display:none}.transport-tip{width:%%?750rpx?%%;height:%%?65rpx?%%;line-height:%%?65rpx?%%;text-align:center;border:%%?1rpx?%% solid rgba(255,255,255,1);background:#fff}.tt-view{height:%%?65rpx?%%;line-height:%%?65rpx?%%}.ttv-tip{text-align:center;height:%%?65rpx?%%;line-height:%%?65rpx?%%;margin:0 %%?20rpx?%%;display:inline-block}.ttv-tip .img{display:inline-block;width:%%?30rpx?%%;height:%%?30rpx?%%;float:left}.ttv-tip .text{text-align:center;margin-left:%%?6rpx?%%;float:left;display:inline-block;height:%%?30rpx?%%;color:#cc2020;font-size:%%?22rpx?%%}.ttv-tip .img .images{display:inline-block;width:%%?30rpx?%%;height:%%?30rpx?%%}.set-fill-color{height:%%?18rpx?%%;background:#f4f4f4}.show-loading{margin-top:%%?20rpx?%% 0;width:%%?750rpx?%%;text-align:center;opacity:.7;height:%%?50rpx?%%;line-height:%%?50rpx?%%}.show-loading-text{height:100%;text-align:center}.hot .hot-title{width:%%?750rpx?%%;height:%%?120rpx?%%;color:rgba(51,51,51,1);background-color:rgba(255,255,255,1);font-size:%%?32rpx?%%;line-height:%%?32rpx?%%;padding:%%?44rpx?%% 0;text-align:center}.hot .hot-item{height:%%?504rpx?%%;color:rgba(80,80,80,1);background-color:rgba(255,255,255,1);font-size:%%?28rpx?%%;line-height:150%;text-align:center;display:flex}.hot .item{display:flex}.hot .item .left{float:left}.hot .item .right{float:right}.hot .item .image{width:%%?282rpx?%%;height:%%?302rpx?%%;color:rgba(80,80,80,1);border-radius:%%?4rpx?%%;font-size:%%?28rpx?%%;line-height:150%;border:rgba(238,238,238,1) solid 1px;text-align:center}.hot .item .name{width:%%?282rpx?%%;height:%%?84rpx?%%;color:rgba(51,51,51,1);font-size:%%?28rpx?%%;line-height:150%;text-align:left;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.hot .item .price{width:%%?146rpx?%%;height:%%?44rpx?%%;color:rgba(204,32,32,1);font-size:%%?30rpx?%%;line-height:150%;text-align:left}.cate-item{padding:%%?20rpx?%%;height:auto;overflow:hidden}.cate-item .b{width:%%?750rpx?%%;padding:0 %%?6.25rpx?%%;height:auto;overflow:hidden}.cate-item .b .item{float:left;background:#fff;width:%%?233rpx?%%;margin-bottom:%%?6.25rpx?%%;padding-bottom:%%?30.333rpx?%%;height:auto;overflow:hidden;text-align:center}.cate-item .b .item-b{margin-left:%%?6.25rpx?%%}.cate-item .item .img{width:%%?220rpx?%%;height:%%?220rpx?%%}.cate-item .item .name{display:block;width:%%?233rpx?%%;height:%%?64rpx?%%;margin:%%?11.5rpx?%% 0 %%?18rpx?%% 0;text-align:center;overflow:hidden;padding:0 %%?20rpx?%%;font-size:%%?30rpx?%%;line-height:%%?32rpx?%%;color:#333;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.cate-item .item .price{display:block;width:%%?233rpx?%%;height:%%?30rpx?%%;text-align:center;font-size:%%?30rpx?%%;color:#b4282d}@code-separator-line:__wxRoute = "pages/index/index";__wxRouteBegin = true;
define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');
const npage = require('../../services/page.js');

//获取应用实例
const app = getApp();
Page({
    data: {
        newGoods: [],
        hotGoods: [],
        hotGoodsList: [],
        topics: [],
        brands: [],
        floorGoods: [],
        banner: [],
        channel: [],
        Host: api.Host,
        pages: 1,
        pages_status: true,
        moredata: 'none',
        helpKeyword: {},
        parent_id: null,
        category: [],
        loading_next:false,
        type_maps : {
            default : 'HandPickedProductList',
            raw: 'RawHTML',
            pickle: 'HandPickedProductList',
            auto: 'AutoMaticProductList',
            multi: 'MultiImage',
            picture: 'Image',
            single: 'SingleProduct',
        }

    },
    onShareAppMessage: function () {
        return {
            title: '樱桃乐享',
            desc: '樱桃乐享微信小程序商城',
            path: '/pages/index/index'
        }
    },

    getIndexData: function () {
        let that = this;
        util.request(api.Promotions, {'type':'default'}).then(function (res) {
            that.setData({
                banner: res.data,
            });
        });
        util.request(api.CatalogCurrent).then(function (res) {
            that.setData({
                category:res,
            });
        })
    },
    getBestSaleGoods: function () {
        let that = this;
        util.request(api.BestSaleGoods).then(function (res) {
            var data = res.data;
            var products = that.data.hotGoods;
            products = products.concat(data);
            // res = res[0];
            that.setData({
                hotGoodsList: res.data
            });
        });
    },

    getAllGoodsData: function(){
        let that = this;
        util.request(api.GoodsCategory, {"page": this.data.pages}).then(function (res) {
            if(res[0].length !=0){
                if(res[1] !=  null){
                    var  naxt_pages = res[1].split('=')[1]
                }else{
                    naxt_pages = that.data.pages
                    that.data.pages_status = false
                }
            }else{
                wx.showToast({
                    title: '暂时没有商品',
                    icon: 'loading',
                    duration: 1000
                })
                return
            }
            that.setData({
                // floorGoods: list_,
                floorGoods: res[0],
                pages: naxt_pages,
                brand: res[0],
                hotGoods: res[0],
                loading_next: true,
            });
        });
    },

    onReachBottom: function(){
        if (this.data.pages_status){
            if (this.data.loading_next){
                this.setData({
                    loading_next: false
                })
                var url = api.GoodsCategory;
                var data = {
                    page: this.data.pages
                }
                var method = 'GET'
                let that = this;
                npage.nextPage(url, data, method).then(function(res){
                    if(res[0].length !=0){
                        if(res[1] !=  null){
                            var  naxt_pages = res[1].split('=')[1]
                        }else{
                            naxt_pages = that.data.pages
                            that.data.pages_status = false
                        }
                    }else{
                        wx.showToast({
                            title: '暂时没有商品',
                            icon: 'loading',
                            duration: 1000
                        })
                        return
                    }
                    var list_ = that.data.floorGoods
                    var res_list = res[0]
                    list_ = list_.concat(res_list);
                    that.setData({
                        floorGoods: list_,
                        pages: naxt_pages,
                        brand: list_,
                        hotGoods: list_,
                        loading_next: true,
                    });

                })
            }
        }

    },
    onLoad: function (options) {
        this.getIndexData();
        // this.getPromitionsActivate();
        this.getAllGoodsData();
        this.getBestSaleGoods();

    },
    // onPullDownRefresh: function () {
    //       let that = this
    //       this.setData({
    //           newGoods: [],
    //           hotGoods: [],
    //           topics: [],
    //           brands: [],
    //           floorGoods: [],
    //           banner: [],
    //           channel: [],
    //           Host: api.Host,
    //           pages: 1,
    //           pages_status: true,
    //           moredata: 'none',
    //       });
    //
    //     this.onLoad()
    // },
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
    },
    // getPromitionsActivate: function(){
    //     util.request(api.PromotionActivate, {}).then(function(res){
    //     })
    // },
    switchCate: function (event) {
        if (this.data.id == event.currentTarget.dataset.id) {
            return false;
        }
        var that = this;
        var clientX = event.detail.x;
        var currentTarget = event.currentTarget;
        if (clientX < 60) {
            that.setData({
                scrollLeft: currentTarget.offsetLeft - 100
            });
        } else if (clientX > 270) {
            that.setData({
                scrollLeft: currentTarget.offsetLeft - 100
            });
        }
        this.setData({
            id: event.currentTarget.dataset.id
        });
    },

//  搜索功能
    inputFocus: function () {
        // wx.navigateTo({
        //     url:'./search/search?p='+ event.detail.value
        // });
    },

    onKeywordConfirm(e) {
        wx.navigateTo({
            url:'/pages/search/search?q='+ e.detail.value
        });

    },

    inputChange: function() {

    },

});

});require("pages/index/index.js")@code-separator-line:["div","view","input","image","swiper","swiper-item","navigator","scroll-view","text"]