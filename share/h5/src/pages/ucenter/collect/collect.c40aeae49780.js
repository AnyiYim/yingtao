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
    Z([3, 'container']);Z([3, 'cate-nav']);Z([3, 'cate-nav-body']);Z([[7],[3, "scrollLeft"]]);Z([3, 'true']);Z([3, 'width: 750rpx;']);Z([3, 'bar-select']);Z([3, 'name collect-number']);Z([3, 'getcollectproduct']);Z([a, [3, 'goods-m  '],[[2,'?:'],[[2, "=="], [[7],[3, "type"]], [1, "collect"]],[1, "activate"],[1, ""]]]);Z([a, [3, '\n                        商品'],[[6],[[6],[[7],[3, "collectList"]],[1, 0]],[3, "number"]],[3, '\n                    ']]);Z([3, 'name select-footer ']);Z([3, 'getfooterList']);Z([a, [3, 'goods-m '],[[2,'?:'],[[2, "=="], [[7],[3, "type"]], [1, "footer"]],[1, "activate"],[1, ""]]]);Z([3, '\n                        足迹\n                    ']);Z([3, 'collect-list']);Z([[7],[3, "collectList"]]);Z([[6],[[7],[3, "item"]],[3, "id"]]);Z([3, 'openGoods']);Z([3, 'touchEnd']);Z([3, 'touchStart']);Z([3, 'item']);Z([[7],[3, "index"]]);Z([a, [3, 'display:'],[[7],[3, "hasdata"]]]);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "item"]],[3, "list_pic_url"]]]);Z([3, 'info']);Z([3, 'name']);Z([a, [[6],[[7],[3, "item"]],[3, "name"]]]);Z([3, 'subtitle']);Z([3, 'price-and-car']);Z([3, 'price']);Z([a, [3, '￥'],[[6],[[7],[3, "item"]],[3, "retail_price"]]]);Z([3, 'no-data']);Z([a, [3, 'display:'],[[7],[3, "nulldata"]]]);Z([[2, "=="], [[7],[3, "type"]], [1, "footer"]]);Z([3, 'nodata-img']);Z([a, [[7],[3, "Host"]],[3, '/static/h5/static/images/user/raw_nodata.png']]);Z([3, 'nodata-tip']);Z([3, '亲，你暂无浏览记录']);Z([3, '亲，你暂无收藏记录']);
  })(z);d_["./pages/ucenter/collect/collect.wxml"] = {};
  var m0=function(e,s,r,gg){
    var oDY = _n("view");_r(oDY, 'class', 0, e, s, gg);var oEY = _n("view");_r(oEY, 'class', 1, e, s, gg);var oFY = _m( "scroll-view", ["class", 2,"scrollLeft", 1,"scrollX", 2,"style", 3], e, s, gg);var oGY = _n("view");_r(oGY, 'class', 6, e, s, gg);var oHY = _n("view");_r(oHY, 'class', 7, e, s, gg);var oIY = _m( "view", ["bindtap", 8,"class", 1], e, s, gg);var oJY = _o(10, e, s, gg);_(oIY,oJY);_(oHY,oIY);_(oGY,oHY);var oKY = _n("view");_r(oKY, 'class', 11, e, s, gg);var oLY = _m( "view", ["bindtap", 12,"class", 1], e, s, gg);var oMY = _o(14, e, s, gg);_(oLY,oMY);_(oKY,oLY);_(oGY,oKY);_(oFY,oGY);_(oEY,oFY);_(oDY,oEY);var oNY = _n("view");_r(oNY, 'class', 15, e, s, gg);var oOY = _v();var oPY = function(oTY,oSY,oRY,gg){var oQY = _m( "view", ["bindtap", 18,"bindtouchend", 1,"bindtouchstart", 2,"class", 3,"data-index", 4,"style", 5], oTY, oSY, gg);var oVY = _m( "image", ["class", 24,"src", 1], oTY, oSY, gg);_(oQY,oVY);var oWY = _n("view");_r(oWY, 'class', 26, oTY, oSY, gg);var oXY = _n("view");_r(oXY, 'class', 27, oTY, oSY, gg);var oYY = _o(28, oTY, oSY, gg);_(oXY,oYY);_(oWY,oXY);var oZY = _n("view");_r(oZY, 'class', 29, oTY, oSY, gg);_(oWY,oZY);var oaY = _n("view");_r(oaY, 'class', 30, oTY, oSY, gg);var obY = _n("view");_r(obY, 'class', 31, oTY, oSY, gg);var ocY = _o(32, oTY, oSY, gg);_(obY,ocY);_(oaY,obY);_(oWY,oaY);_(oQY,oWY);_(oRY, oQY);return oRY;};_2(16, oPY, e, s, gg, oOY, "item", "index", '{{item.id}}');_(oNY,oOY);_(oDY,oNY);var odY = _m( "view", ["class", 33,"style", 1], e, s, gg);var oeY = _v();
      if (_o(35, e, s, gg)) {
        oeY.wxVkey = 1;var ofY = _n("view");var ohY = _m( "image", ["class", 36,"src", 1], e, s, gg);_(ofY,ohY);var oiY = _n("view");_r(oiY, 'class', 38, e, s, gg);var ojY = _o(39, e, s, gg);_(oiY,ojY);_(ofY,oiY);_(oeY, ofY);
      }else {
        oeY.wxVkey = 2;var okY = _n("view");var omY = _m( "image", ["class", 36,"src", 1], e, s, gg);_(okY,omY);var onY = _n("view");_r(onY, 'class', 38, e, s, gg);var ooY = _o(40, e, s, gg);_(onY,ooY);_(okY,onY);_(oeY, okY);
      }_(odY,oeY);_(oDY,odY);_(r,oDY);
    return r;
  };
        e_["./pages/ucenter/collect/collect.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:body{background:#f4f4f4;height:100%}.container{background:#f4f4f4;font-family:PingFangSC-Light,helvetica,'Heiti SC';height:100%;width:100%}.collect-list{margin-top:%%?18rpx?%%;width:100%;height:auto;overflow:hidden;background:#fff;padding-left:%%?30rpx?%%}.item{height:%%?212rpx?%%;width:%%?720rpx?%%;background:#fff;padding:%%?30rpx?%% %%?30rpx?%% %%?30rpx?%% 0;border-bottom:%%?1rpx?%% solid #e1e1e1}.item:last-child{border-bottom:%%?1rpx?%% solid #fff}.item .img{float:left;width:%%?150rpx?%%;height:%%?150rpx?%%}.item .info{float:right;width:%%?540rpx?%%;height:%%?150rpx?%%;display:flex;flex-direction:column;justify-content:center;padding-left:%%?20rpx?%%}.item .info .name{font-size:%%?28rpx?%%;color:#333;line-height:%%?40rpx?%%;display:-webkit-box;word-break:break-all;text-overflow:ellipsis;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2}.item .info .subtitle{margin-top:%%?8rpx?%%;font-size:%%?24rpx?%%;color:#999;line-height:%%?40rpx?%%}.item .info .price{margin-top:%%?8rpx?%%;font-size:%%?32rpx?%%;color:#333;height:%%?48rpx?%%;line-height:%%?48rpx?%%;display:inline-block}.add-car{display:inline-block;border:%%?1rpx?%% solid #ccc;width:%%?130rpx?%%;height:%%?48rpx?%%;line-height:%%?48rpx?%%;text-align:center;border-radius:%%?8rpx?%%;float:right;font-size:%%?28rpx?%%}.price-and-car{height:%%?48rpx?%%;line-height:%%?48rpx?%%}.cate-nav{background:#fff;height:%%?78rpx?%%}.goods-m{font-size:%%?28rpx?%%;margin:0 auto;height:%%?77rpx?%%;line-height:%%?77rpx?%%;width:%%?130rpx?%%;text-align:center}.collect-number,.select-footer{display:inline-block;width:50%}.activate{color:#cc2020;border-bottom:%%?3rpx?%% solid #cc2020}.no-data{top:25%;position:relative;text-align:center;color:#f2f2f2}.nodata-img{width:%%?220rpx?%%;height:%%?220rpx?%%;margin:0 auto}.nodata-tip{color:#ccc}@code-separator-line:__wxRoute = "pages/ucenter/collect/collect";__wxRouteBegin = true;
define("pages/ucenter/collect/collect.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');

var app = getApp();

Page({
  data: {
    typeId: 0,
    type: 'collect',
    collectList: [],
    Host: api.Host,
    nulldata: 'none',
    hasdata:'',
    tip_text: '足迹'

  },
  onPullDownRefresh: function(){
    this.onLoad();

  },
  getCollectList: function() {
    let that = this;
    util.request(api.CollectList, { typeId: that.data.typeId}).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          collectList: res.data.data
        });
        if (res.data.data[0].number == 0){
          that.setData({
            hasdata: 'none',
            nulldata: 'show',
            type: 'collect',
          })
        }
      }else{
        if (res.data.data == 'nologin') {
          wx.showToast({
            title: '您尚未登录请登录',
            icon: 'loading',
            duration: 1000,
            complete: wx.navigateBack()
          })
        }
      }
    });
  },
  onLoad: function (options) {
    this.getCollectList();

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
  openGoods(event) {

    let that = this;
    let goodsId = this.data.collectList[event.currentTarget.dataset.index].value_id;

    //触摸时间距离页面打开的毫秒数
    var touchTime = that.data.touch_end - that.data.touch_start;
    //如果按下时间大于350为长按
    if (touchTime > 350) {
      wx.showModal({
        title: '',
        content: '确定删除吗？',
        success: function (res) {
          if (res.confirm) {

            util.request(api.CollectAddOrDelete, { typeId: that.data.typeId, valueId: goodsId}, 'POST').then(function (res) {
              if (res.errno === 0) {
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 1000
                });
                that.getCollectList();
              }
            });
          }
        }
      })
    } else {

      wx.navigateTo({
        url: '/pages/goods/goods?id=' + goodsId,
      });
    }
  },
  //按下事件开始
  touchStart: function (e) {
    let that = this;
    that.setData({
      touch_start: e.timeStamp
    })
    // (e.timeStamp + '- touch-start')
  },
  //按下事件结束
  touchEnd: function (e) {
    let that = this;
    that.setData({
      touch_end: e.timeStamp
    })
    // (e.timeStamp + '- touch-end')
  },

  getfooterList: function(){
      let that =this
      this.setData({
          typeId: 0,
          type: 'footer',
          collectList: [],
          Host: api.Host,
          nulldata: 'none',
          hasdata:'',
          tip_text: '足迹'
      })
      this.getfooterProduct()
  },
  getfooterProduct: function(){
      // XXX  足迹功能暂无接口
      // util.request(api.CollectList, { typeId: that.data.typeId}).then(function(res){
      //     if(!res[0]){
      //         return
      //     }
      //     this.setData({
      //         collectList: res[0]
      //     })
      // })

      this.setData({
          hasdata: 'none',
          nulldata: 'show',
          tip_text: '足迹'
      })

  },
  getcollectproduct: function(){
      let that = this
      this.setData({
          typeId: 0,
          type: 'collect',
          collectList: [],
          Host: api.Host,
          nulldata: 'none',
          hasdata:'',
          tip_text: '足迹'
      })
      this.getCollectList();
  }

})

});require("pages/ucenter/collect/collect.js")@code-separator-line:["div","view","scroll-view","image"]