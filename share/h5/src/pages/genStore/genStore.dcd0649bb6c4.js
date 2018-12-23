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
    Z([3, 'container']);Z([3, 'gstore-head']);Z([3, 'gh-left']);Z([3, 'ghl-img']);Z([a, [[7],[3, "Host"]],[3, '/static/h5/static/images/public/logo01.jpg']]);Z([3, 'gh-right']);Z([3, 'ghr-text']);Z([a, [[7],[3, "storename"]],[3, '店铺名称']]);Z([3, 'ghr-collect']);Z([3, 'ghrc-img']);Z([3, 'ghrc-images']);Z([[7],[3, "noCollectImage"]]);Z([3, 'ghrc-text']);Z([3, '收藏']);Z([3, 'cate-nav']);Z([3, 'cate-nav-body']);Z([[7],[3, "scrollLeft"]]);Z([3, 'true']);Z([3, 'width: 750rpx;']);Z([[7],[3, "bartype"]]);Z([3, 'switchCate']);Z([a, [3, 'bartype item '],[[2,'?:'],[[2, "=="], [[7],[3, "barclassActivate"]], [[7],[3, "index"]]],[1, "active"],[1, ""]]]);Z([[7],[3, "index"]]);Z([a, [3, '\n              '],[[7],[3, "item"]],[3, '\n          ']]);Z([3, 'content']);Z([[6],[[7],[3, "goodsList"]],[3, "length"]]);Z([3, 'search-result']);Z([3, 'cate-item']);Z([3, 'b']);Z([a, [3, '\n                '],[[7],[3, "helpKeyword"]],[3, '\n                ']]);Z([[7],[3, "goodsList"]]);Z([3, 'item']);Z([3, 'index']);Z([a, [3, '/pages/goods/goods?id\x3d'],[[6],[[7],[3, "item"]],[3, "id"]]]);Z([3, 'cover']);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[6],[[7],[3, "item"]],[3, "images"]],[1, 0]],[3, "thumb"]]]);Z([3, 'name']);Z([a, [[6],[[7],[3, "item"]],[3, "title"]]]);Z([3, 'price']);Z([a, [3, '￥'],[[6],[[6],[[6],[[7],[3, "item"]],[3, "stockrecords"]],[1, 0]],[3, "price_retail"]]]);Z([[7],[3, "displayHistoryBar"]]);Z([3, 'search-result-empty']);Z([3, 'icon']);Z([3, 'http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noSearchResult-7572a94f32.png']);Z([3, 'text']);Z([3, '您寻找的商品还未上架']);
  })(z);d_["./pages/genStore/genStore.wxml"] = {};
  var m0=function(e,s,r,gg){
    var oOI = _n("view");_r(oOI, 'class', 0, e, s, gg);var oPI = _n("view");_r(oPI, 'class', 1, e, s, gg);var oQI = _n("view");_r(oQI, 'class', 2, e, s, gg);var oRI = _n("view");var oSI = _m( "image", ["class", 3,"src", 1], e, s, gg);_(oRI,oSI);_(oQI,oRI);_(oPI,oQI);var oTI = _n("view");_r(oTI, 'class', 5, e, s, gg);var oUI = _n("view");_r(oUI, 'class', 6, e, s, gg);var oVI = _o(7, e, s, gg);_(oUI,oVI);_(oTI,oUI);var oWI = _n("view");_r(oWI, 'class', 8, e, s, gg);var oXI = _n("view");_r(oXI, 'class', 9, e, s, gg);var oYI = _m( "image", ["class", 10,"src", 1], e, s, gg);_(oXI,oYI);_(oWI,oXI);var oZI = _n("view");_r(oZI, 'class', 12, e, s, gg);var oaI = _o(13, e, s, gg);_(oZI,oaI);_(oWI,oZI);_(oTI,oWI);_(oPI,oTI);_(oOI,oPI);var obI = _n("view");_r(obI, 'class', 14, e, s, gg);var ocI = _m( "scroll-view", ["class", 15,"scrollLeft", 1,"scrollX", 2,"style", 3], e, s, gg);var odI = _v();var oeI = function(oiI,ohI,ogI,gg){var ofI = _m( "view", ["bindtap", 20,"class", 1,"data-barclassactivate", 2], oiI, ohI, gg);var okI = _o(23, oiI, ohI, gg);_(ofI,okI);_(ogI, ofI);return ogI;};_2(19, oeI, e, s, gg, odI, "item", "index", '');_(ocI,odI);_(obI,ocI);_(oOI,obI);var olI = _n("view");_r(olI, 'class', 24, e, s, gg);var omI = _v();
      if (_o(25, e, s, gg)) {
        omI.wxVkey = 1;var onI = _n("view");_r(onI, 'class', 26, e, s, gg);var opI = _n("view");_r(opI, 'class', 27, e, s, gg);var oqI = _n("view");_r(oqI, 'class', 28, e, s, gg);var orI = _o(29, e, s, gg);_(oqI,orI);var osI = _v();var otI = function(oxI,owI,ovI,gg){var ouI = _m( "navigator", ["class", 31,"url", 2], oxI, owI, gg);var ozI = _m( "image", ["backgroundSize", 34,"class", 1,"src", 2], oxI, owI, gg);_(ouI,ozI);var o_I = _n("text");_r(o_I, 'class', 37, oxI, owI, gg);var oAJ = _o(38, oxI, owI, gg);_(o_I,oAJ);_(ouI,o_I);var oBJ = _n("text");_r(oBJ, 'class', 39, oxI, owI, gg);var oCJ = _o(40, oxI, owI, gg);_(oBJ,oCJ);_(ouI,oBJ);_(ovI, ouI);return ovI;};_2(30, otI, e, s, gg, osI, "item", "index", '');_(oqI,osI);_(opI,oqI);_(onI,opI);_(omI, onI);
      } _(olI,omI);var oDJ = _v();
      if (_o(41, e, s, gg)) {
        oDJ.wxVkey = 1;var oEJ = _n("view");_r(oEJ, 'class', 42, e, s, gg);var oGJ = _m( "image", ["class", 43,"src", 1], e, s, gg);_(oEJ,oGJ);var oHJ = _n("text");_r(oHJ, 'class', 45, e, s, gg);var oIJ = _o(46, e, s, gg);_(oHJ,oIJ);_(oEJ,oHJ);_(oDJ, oEJ);
      } _(olI,oDJ);_(oOI,olI);_(r,oOI);
    return r;
  };
        e_["./pages/genStore/genStore.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:.banner{margin-top:%%?30rpx?%%;border-top:%%?1rpx?%% solid #ccc;width:%%?750rpx?%%;height:%%?417rpx?%%}.gstore-head{height:%%?100rpx?%%;padding:0 %%?20rpx?%%;border-bottom:1px solid #ccc}.gh-left{width:%%?100rpx?%%;height:%%?100rpx?%%;display:inline-block;line-height:%%?100rpx?%%;float:left}.gh-left .ghl-img{width:%%?88rpx?%%;height:%%?88rpx?%%}.gh-right{margin-left:%%?20rpx?%%;height:%%?100rpx?%%;line-height:%%?100rpx?%%;display:inline-block;float:left}.gh-right .ghr-text{height:%%?60rpx?%%;line-height:%%?60rpx?%%}.gh-right .ghr-collect{height:%%?40rpx?%%;line-height:%%?40rpx?%%}.gh-right .ghr-collect .ghrc-img{line-height:%%?40rpx?%%;height:%%?40rpx?%%;width:%%?30rpx?%%;text-align:center;display:inline-block;float:left}.gh-right .ghr-collect .ghrc-img .ghrc-images{width:%%?30rpx?%%;height:%%?30rpx?%%}.gh-right .ghr-collect .ghrc-text{display:inline-block;float:left;line-height:%%?40rpx?%%;margin-left:%%?20rpx?%%;font-size:%%?24rpx?%%}.cate-nav-body .bartype{text-align:center;display:inline-block;min-width:%%?120rpx?%%;height:%%?80rpx?%%;line-height:%%?80rpx?%%}. .cate-item .b{width:%%?750rpx?%%;padding:0 %%?6.25rpx?%%;height:auto;overflow:hidden}.cate-item .b .item{float:left;background:#fff;width:%%?365rpx?%%;margin-bottom:%%?6.25rpx?%%;padding-bottom:%%?33.333rpx?%%;height:auto;overflow:hidden;text-align:center}.cate-item .b .item-b{margin-left:%%?6.25rpx?%%}.cate-item .item .img{width:%%?302rpx?%%;height:%%?302rpx?%%}.cate-item .item .name{display:block;width:%%?365.625rpx?%%;height:%%?58rpx?%%;margin:%%?11.5rpx?%% 0 %%?22rpx?%% 0;text-align:left;overflow:hidden;padding:0 %%?20rpx?%%;font-size:%%?30rpx?%%;color:#333}.cate-item .item .price{display:block;width:%%?365.625rpx?%%;height:%%?30rpx?%%;text-align:left;font-size:%%?30rpx?%%;padding:0 %%?20rpx?%%;color:#b4282d}.search-result-empty{width:100%;height:100%;padding-top:%%?300rpx?%%}.search-result-empty .icon{margin:0 auto;display:block;width:%%?240rpx?%%;height:%%?240rpx?%%}.search-result-empty .text{display:block;width:100%;height:%%?40rpx?%%;font-size:%%?28rpx?%%;text-align:center;color:#999}.active{color:#b4282d;border-bottom:1px solid #b4282d}@code-separator-line:__wxRoute = "pages/genStore/genStore";__wxRouteBegin = true;
define("pages/genStore/genStore.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');
const npage = require('../../services/page.js');
//获取应用实例
const app = getApp()
Page({
  data: {
      Host: api.Host,
      bartype: ['全部',  '分类'],
      noCollectImage: "/static/images/icon_collect.png",
      hasCollectImage: "/static/images/icon_collect_checked.png",
      barclassActivate: 0,
      store_id: null,
      url: null,
      goodsList: [],
      loading_next: false,
  },

  onLoad: function (options) {
      this.setData({
          store_id: options.store_id
      })
      this.getStoreGoods()
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
  },

  switchCate: function (event) {
    if (this.data.barclassActivate == event.currentTarget.dataset.barclassactivate) {
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
      barclassActivate: event.currentTarget.dataset.barclassactivate
    });
    if(event.currentTarget.dataset.barclassactivate == 0){
        this.setData({
            url: null,
        })
        this.getStoreGoods()
    }
  },

  getStoreGoods: function(){
      let that = this
      var url = api.GenStoreApi + this.data.store_id + '/products-list/'
      // if (!this.data.url){
      //     var url = api.GenStoreApi + this.data.store_id + '/products-list/'
      // }else{
      //     var url = this.data.url
      // }
      util.request(url, {}).then( function(res){
          if(!res[1]){
              this.setData({
                  url: null,
              })
          }else{
              this.setData({
                  url: res[1]
              })
          }
          that.setData({
              goodsList: res[0],
              loading_next: true,
          });
      })
  },

  onReachBottom: function(){
      let that = this
      if(that.data.loading_next){
          that.setData({
              loading_next: false;
          })
          if(that.data.url){
              var url = that.data.url;
              var data = {};
              var method = 'GET';
              npage.nextPage(url, data, method).then(function(res){
                  if(!res[1]){
                      that.setData({
                          url: null,
                      })
                  }else{
                      that.setData({
                          url: res[1]
                      })
                  }
                  // 添加下一页数据
                  var list_ = that.data.goodsList
                  var res_list = res[0]
                  list_ = list_.concat(res_list);
                  that.setData({
                      goodsList: list_,
                      loading_next: true
                  });
              })
              // this.getStoreGoods();
          }else{
              wx.showToast({
                  title:'已经是全部了',
                  icon: 'none',
              })
          }
      }

  },


  getStoreclass: function(){

  },


})

});require("pages/genStore/genStore.js")@code-separator-line:["div","view","image","scroll-view","navigator","text"]