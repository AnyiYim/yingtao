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
    Z([3, 'container']);Z([3, 'm-menu']);Z([3, 'presale-tip']);Z([3, 'pre-tip-img']);Z([3, 'pre-tip-images']);Z([a, [[7],[3, "Host"]],[3, '/static/h5/static/images/first_page/clock.png']]);Z([3, 'pre-tip-text']);Z([3, 'pre-tip-textchild']);Z([3, '正在预售']);Z([3, 'pregood']);Z([3, 'b']);Z([[7],[3, "floorGoods"]]);Z([3, 'item']);Z([3, 'index']);Z([[6],[[7],[3, "item"]],[3, "id"]]);Z([a, [3, 'item '],[[2,'?:'],[[2, "=="], [[2, "%"], [[7],[3, "index"]], [1, 2]], [1, 0]],[1, ""],[1, "item-b"]]]);Z([3, 'a']);Z([a, [3, '../goods/goods?id\x3d'],[[6],[[7],[3, "item"]],[3, "id"]]]);Z([3, 'b-img']);Z([3, 'cover']);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[6],[[7],[3, "item"]],[3, "images"]],[1, 0]],[3, "thumb"]]]);Z([3, 'b-goods-brief']);Z([3, 'name']);Z([a, [[6],[[7],[3, "item"]],[3, "title"]]]);Z([3, 'price']);Z([a, [3, '￥'],[[6],[[6],[[6],[[7],[3, "item"]],[3, "stockrecords"]],[1, 0]],[3, "price_retail"]]]);Z([3, 'progress-bar']);Z([3, 'presale-progress-bar']);Z([3, 'default-prigress']);Z([3, '/static/images/first_page/progressbar_default.png']);Z([3, 'show-prigress']);Z([3, '/static/images/first_page/progressba.png']);Z([3, 'progress-bar-text']);Z([3, ' 68%']);Z([3, 'presale-options']);Z([3, 'pre-helper']);Z([3, 'helper-img']);Z([3, 'hi-image']);Z([3, '/static/images/ic_menu_me_nor.png']);Z([3, 'helper-text']);Z([a, [[7],[3, "number"]],[3, '人支持']]);Z([3, 'pre-object']);Z([3, '\n                            支持该商品\n                        ']);Z([a, [3, 'display:'],[[7],[3, "moredata"]]]);
  })(z);d_["./pages/preSale/preSale.wxml"] = {};
  var m0=function(e,s,r,gg){
    var ocJ = _n("view");_r(ocJ, 'class', 0, e, s, gg);var odJ = _n("view");_r(odJ, 'class', 1, e, s, gg);var oeJ = _n("view");_r(oeJ, 'class', 2, e, s, gg);var ofJ = _n("view");_r(ofJ, 'class', 3, e, s, gg);var ogJ = _m( "image", ["class", 4,"src", 1], e, s, gg);_(ofJ,ogJ);_(oeJ,ofJ);var ohJ = _n("view");_r(ohJ, 'class', 6, e, s, gg);var oiJ = _n("view");_r(oiJ, 'class', 7, e, s, gg);var ojJ = _o(8, e, s, gg);_(oiJ,ojJ);_(ohJ,oiJ);_(oeJ,ohJ);_(odJ,oeJ);_(ocJ,odJ);var okJ = _n("view");_r(okJ, 'class', 9, e, s, gg);var olJ = _n("view");_r(olJ, 'class', 10, e, s, gg);var omJ = _v();var onJ = function(orJ,oqJ,opJ,gg){var otJ = _n("view");_r(otJ, 'class', 15, orJ, oqJ, gg);var ouJ = _m( "navigator", ["class", 16,"url", 1], orJ, oqJ, gg);var ovJ = _n("view");_r(ovJ, 'class', 18, orJ, oqJ, gg);var owJ = _m( "image", ["backgroundSize", 19,"class", 1,"src", 2], orJ, oqJ, gg);_(ovJ,owJ);_(ouJ,ovJ);var oxJ = _n("view");_r(oxJ, 'class', 22, orJ, oqJ, gg);var oyJ = _n("view");_r(oyJ, 'class', 23, orJ, oqJ, gg);var ozJ = _o(24, orJ, oqJ, gg);_(oyJ,ozJ);_(oxJ,oyJ);var o_J = _n("view");_r(o_J, 'class', 25, orJ, oqJ, gg);var oAK = _o(26, orJ, oqJ, gg);_(o_J,oAK);_(oxJ,o_J);var oBK = _n("view");_r(oBK, 'class', 27, orJ, oqJ, gg);var oCK = _n("view");_r(oCK, 'class', 28, orJ, oqJ, gg);var oDK = _m( "image", ["class", 29,"src", 1], orJ, oqJ, gg);_(oCK,oDK);var oEK = _m( "image", ["class", 31,"src", 1], orJ, oqJ, gg);_(oCK,oEK);_(oBK,oCK);var oFK = _n("view");_r(oFK, 'class', 33, orJ, oqJ, gg);var oGK = _o(34, orJ, oqJ, gg);_(oFK,oGK);_(oBK,oFK);_(oxJ,oBK);var oHK = _n("view");_r(oHK, 'class', 35, orJ, oqJ, gg);var oIK = _n("view");_r(oIK, 'class', 36, orJ, oqJ, gg);var oJK = _n("view");_r(oJK, 'class', 37, orJ, oqJ, gg);var oKK = _m( "image", ["class", 38,"src", 1], orJ, oqJ, gg);_(oJK,oKK);_(oIK,oJK);var oLK = _n("view");_r(oLK, 'class', 40, orJ, oqJ, gg);var oMK = _o(41, orJ, oqJ, gg);_(oLK,oMK);_(oIK,oLK);_(oHK,oIK);var oNK = _n("view");_r(oNK, 'class', 42, orJ, oqJ, gg);var oOK = _o(43, orJ, oqJ, gg);_(oNK,oOK);_(oHK,oNK);_(oxJ,oHK);_(ouJ,oxJ);_(otJ,ouJ);_(opJ,otJ);return opJ;};_2(11, onJ, e, s, gg, omJ, "item", "index", '{{item.id}}');_(olJ,omJ);_(okJ,olJ);var oPK = _m( "view", ["class", 10,"style", 34], e, s, gg);_(okJ,oPK);_(ocJ,okJ);_(r,ocJ);
    return r;
  };
        e_["./pages/preSale/preSale.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:.container{width:100%;height:100%}.presale-tip{height:%%?90rpx?%%;line-height:%%?90rpx?%%;text-align:center;background:#f2f2f2}.presale-tip .pre-tip-text{text-align:center;height:%%?90rpx?%%;line-height:inherit;font-size:30px;display:inline-block}.presale-tip .pre-tip-textchild{float:left}.presale-tip .pre-tip-img{display:inline-block;width:%%?36rpx?%%;height:%%?90rpx?%%;line-height:%%?90rpx?%%}.presale-tip .pre-tip-img .pre-tip-images{width:%%?36rpx?%%;height:%%?36rpx?%%;float:left;margin-top:%%?25rpx?%%}.pregood{width:100%}.pregood .item{height:%%?260rpx?%%;margin:%%?10rpx?%%;width:100%}.pregood .item .b-img{float:left;width:%%?260rpx?%%;display:inline-block;text-align:center}.pregood .item .img{height:%%?260rpx?%%;max-width:%%?225rpx?%%;margin:0 auto}.b-goods-brief{width:%%?490rpx?%%;height:%%?290rpx?%%;float:left;padding-left:%%?15rpx?%%;display:inline-block}.b-goods-brief .name{width:%%?450rpx?%%;overflow:hidden;height:%%?35rpx?%%;line-height:%%?35rpx?%%;margin-bottom:%%?10rpx?%%;font-size:%%?28rpx?%%;color:#333}.b-goods-brief .price{color:#ff8401;font-size:%%?36rpx?%%;height:%%?45rpx?%%;margin:%%?15rpx?%% 0}.progress-bar{width:%%?450rpx?%%;height:%%?20rpx?%%;margin:%%?25rpx?%% 0}.presale-progress-bar{display:inline-block;float:left}.progress-bar .progress-bar-text{display:inline-block;float:left;font-size:%%?26rpx?%%;color:#ff8401;margin-left:%%?10rpx?%%}.default-prigress{height:%%?20rpx?%%;width:%%?300rpx?%%}.show-prigress{height:%%?20rpx?%%;position:relative;top:-16.5px;width:0}.presale-options{width:%%?450rpx?%%;border-top:1px dotted #999;height:%%?60rpx?%%;display:inline-block}.presale-options .pre-helper{display:inline-block;height:%%?60rpx?%%;line-height:%%?60rpx?%%;width:%%?200rpx?%%;float:left}.presale-options .pre-helper .helper-img{display:inline-block;width:%%?30rpx?%%;height:%%?60rpx?%%;float:left}.presale-options .pre-helper .helper-img .hi-image{width:%%?30rpx?%%;height:%%?30rpx?%%}.presale-options .pre-helper .helper-text{display:inline-block;width:%%?120rpx?%%;height:%%?60rpx?%%;color:#333;font-size:%%?24rpx?%%;float:left}.presale-options .pre-object{display:inline-block;width:%%?180rpx?%%;height:%%?60rpx?%%;line-height:%%?60rpx?%%;border-radius:%%?8rpx?%%;border:1px solid #ff8401;text-align:center;float:right;color:#ff8401}@code-separator-line:__wxRoute = "pages/preSale/preSale";__wxRouteBegin = true;
define("pages/preSale/preSale.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
      Host: api.Host,
      pages:1,
      floorGoods: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getAllGoodsData();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },

  getAllGoodsData: function(){
    let that = this;
    util.request(api.GoodsList, {'type':'presale', "page": this.data.pages}).then(function (res) {
        if(res[0].length !=0){
            var res_res = {
                "data": res[0],
                "errno": 0,
            }
            if(res[1] !=  null){
                var  naxt_pages = res[1].split('=')[1]
            }else{
                naxt_pages = that.data.pages
                that.data.pages_status = false
            }
        }
      if (res_res.errno == 0) {
        var list_ = that.data.floorGoods
        var res_list = res_res.data
        list_ = list_.concat(res_list);
        that.setData({
            floorGoods: list_,
            pages: naxt_pages,
        });
      };
    });
  },


})

});require("pages/preSale/preSale.js")@code-separator-line:["div","view","image","block","navigator"]