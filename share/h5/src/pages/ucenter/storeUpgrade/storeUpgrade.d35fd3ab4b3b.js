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
    Z([3, 'container']);Z([3, 'cur_head']);Z([3, 'head-text']);Z([3, '八大神器']);Z([3, 'head-text1']);Z([3, ' —— 全方位，赋能每一位创业者 ——']);Z([3, 'cur_content']);Z([3, 'cur_type']);Z([3, 'type-title']);Z([3, '\n                利润分红\n            ']);Z([3, 'type-brife']);Z([3, '\n                除高达20%的销售利润提成，还能获得平台80%利润分红\n            ']);Z([3, '\n                私人定制产品\n            ']);Z([3, '\n                自主私人定制产品，分享众创合伙经验\n            ']);Z([3, '\n                一键开店\n            ']);Z([3, '\n                60秒开店，专门客服一对一辅导\n            ']);Z([3, '\n                裂变流量\n            ']);Z([3, '\n                收入结算，运营状况，一目了然\n            ']);Z([3, '\n                saas管理\n            ']);Z([3, '\n                个人IP打造\n            ']);Z([3, '\n                免费运营课堂辅导，打造个人IP形象，孵化大咖店主\n            ']);Z([3, '\n                营销支持\n            ']);Z([3, '\n                丰富营销素材、一键转发、轻松卖货\n            ']);Z([3, '\n                入门商学院\n            ']);Z([3, '\n                联合优质商学院资源，全国传播经营理念与实践技巧\n            ']);Z([3, 'upgrade']);Z([3, 'agree_authorize']);Z([3, 'agree']);Z([[7],[3, "agree"]]);Z([3, 'agree-btn']);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[3, '/static/h5/static/images/public/successattend.png']]);Z([a, [[7],[3, "Host"]],[3, '/static/h5/static/images/public/no_selected.png']]);Z([3, 'agree-text']);Z([3, '阅读并同意《开店协议》']);Z([3, 'jump_page']);Z([3, 'go-upgrape']);Z([3, '\n                我要升级\n            ']);
  })(z);d_["./pages/ucenter/storeUpgrade/storeUpgrade.wxml"] = {};
  var m0=function(e,s,r,gg){
    var oge = _n("view");_r(oge, 'class', 0, e, s, gg);var ohe = _n("view");_r(ohe, 'class', 1, e, s, gg);var oie = _n("view");_r(oie, 'class', 2, e, s, gg);var oje = _o(3, e, s, gg);_(oie,oje);_(ohe,oie);var oke = _n("view");_r(oke, 'class', 4, e, s, gg);var ole = _o(5, e, s, gg);_(oke,ole);_(ohe,oke);_(oge,ohe);var ome = _n("view");_r(ome, 'class', 6, e, s, gg);var one = _n("view");_r(one, 'class', 7, e, s, gg);var ooe = _n("view");_r(ooe, 'class', 8, e, s, gg);var ope = _o(9, e, s, gg);_(ooe,ope);_(one,ooe);var oqe = _n("view");_r(oqe, 'class', 10, e, s, gg);var ore = _o(11, e, s, gg);_(oqe,ore);_(one,oqe);_(ome,one);var ose = _n("view");_r(ose, 'class', 7, e, s, gg);var ote = _n("view");_r(ote, 'class', 8, e, s, gg);var oue = _o(12, e, s, gg);_(ote,oue);_(ose,ote);var ove = _n("view");_r(ove, 'class', 10, e, s, gg);var owe = _o(13, e, s, gg);_(ove,owe);_(ose,ove);_(ome,ose);var oxe = _n("view");_r(oxe, 'class', 7, e, s, gg);var oye = _n("view");_r(oye, 'class', 8, e, s, gg);var oze = _o(14, e, s, gg);_(oye,oze);_(oxe,oye);var o_e = _n("view");_r(o_e, 'class', 10, e, s, gg);var oAf = _o(15, e, s, gg);_(o_e,oAf);_(oxe,o_e);_(ome,oxe);var oBf = _n("view");_r(oBf, 'class', 7, e, s, gg);var oCf = _n("view");_r(oCf, 'class', 8, e, s, gg);var oDf = _o(16, e, s, gg);_(oCf,oDf);_(oBf,oCf);var oEf = _n("view");_r(oEf, 'class', 10, e, s, gg);var oFf = _o(17, e, s, gg);_(oEf,oFf);_(oBf,oEf);_(ome,oBf);var oGf = _n("view");_r(oGf, 'class', 7, e, s, gg);var oHf = _n("view");_r(oHf, 'class', 8, e, s, gg);var oIf = _o(18, e, s, gg);_(oHf,oIf);_(oGf,oHf);var oJf = _n("view");_r(oJf, 'class', 10, e, s, gg);var oKf = _o(11, e, s, gg);_(oJf,oKf);_(oGf,oJf);_(ome,oGf);var oLf = _n("view");_r(oLf, 'class', 7, e, s, gg);var oMf = _n("view");_r(oMf, 'class', 8, e, s, gg);var oNf = _o(19, e, s, gg);_(oMf,oNf);_(oLf,oMf);var oOf = _n("view");_r(oOf, 'class', 10, e, s, gg);var oPf = _o(20, e, s, gg);_(oOf,oPf);_(oLf,oOf);_(ome,oLf);var oQf = _n("view");_r(oQf, 'class', 7, e, s, gg);var oRf = _n("view");_r(oRf, 'class', 8, e, s, gg);var oSf = _o(21, e, s, gg);_(oRf,oSf);_(oQf,oRf);var oTf = _n("view");_r(oTf, 'class', 10, e, s, gg);var oUf = _o(22, e, s, gg);_(oTf,oUf);_(oQf,oTf);_(ome,oQf);var oVf = _n("view");_r(oVf, 'class', 7, e, s, gg);var oWf = _n("view");_r(oWf, 'class', 8, e, s, gg);var oXf = _o(23, e, s, gg);_(oWf,oXf);_(oVf,oWf);var oYf = _n("view");_r(oYf, 'class', 10, e, s, gg);var oZf = _o(24, e, s, gg);_(oYf,oZf);_(oVf,oYf);_(ome,oVf);var oaf = _n("view");_r(oaf, 'class', 7, e, s, gg);var obf = _n("view");_r(obf, 'class', 8, e, s, gg);var ocf = _o(9, e, s, gg);_(obf,ocf);_(oaf,obf);var odf = _n("view");_r(odf, 'class', 10, e, s, gg);var oef = _o(11, e, s, gg);_(odf,oef);_(oaf,odf);_(ome,oaf);_(oge,ome);var off = _n("view");_r(off, 'class', 25, e, s, gg);var ogf = _m( "view", ["bindtap", 26,"class", 1], e, s, gg);var ohf = _v();
      if (_o(28, e, s, gg)) {
        ohf.wxVkey = 1;var oif = _n("view");_r(oif, 'class', 29, e, s, gg);var okf = _m( "image", ["class", 30,"src", 1], e, s, gg);_(oif,okf);_(ohf, oif);
      }else {
        ohf.wxVkey = 2;var olf = _n("view");_r(olf, 'class', 29, e, s, gg);var onf = _m( "image", ["class", 30,"src", 2], e, s, gg);_(olf,onf);_(ohf, olf);
      }_(ogf,ohf);var oof = _n("view");_r(oof, 'class', 33, e, s, gg);var opf = _o(34, e, s, gg);_(oof,opf);_(ogf,oof);_(off,ogf);var oqf = _m( "view", ["bindtap", 35,"class", 1], e, s, gg);var orf = _o(37, e, s, gg);_(oqf,orf);_(off,oqf);_(oge,off);_(r,oge);
    return r;
  };
        e_["./pages/ucenter/storeUpgrade/storeUpgrade.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:body{height:100%;min-height:100%;background:#f7eed3}.container{background:#f4f4f4;width:100%;height:auto;min-height:100%;overflow:hidden}.cur_head{height:%%?260rpx?%%;width:%%?750rpx?%%;background-color:#141414;opacity:.9;text-align:center}.cur_head .head-text{padding-top:%%?80rpx?%%;height:%%?92rpx?%%;color:#cda85a;font-size:%%?58rpx?%%}.cur_head .head-text1{margin-top:%%?70rpx?%%;height:%%?92rpx?%%;line-height:%%?92rpx?%%;color:#cda85a;font-size:%%?27rpx?%%;text-align:center}.cur_type{height:%%?123rpx?%%;width:%%?670rpx?%%;margin-top:%%?20rpx?%%;margin-left:%%?30rpx?%%}.cur_type .type-title{height:%%?60rpx?%%;line-height:%%?60rpx?%%;border-radius:%%?22rpx?%%;text-align:center;border:1px solid #cda85a;width:%%?200rpx?%%;font-size:%%?27rpx?%%;color:#cda85a}.cur_type .type-brife{margin-top:%%?24rpx?%%;height:%%?38rpx?%%;font-size:%%?25rpx?%%}.upgrade{background:#ccc;position:fixed;bottom:0;width:%%?750rpx?%%;height:%%?150rpx?%%}.agree{padding-left:%%?220rpx?%%;padding-top:%%?15rpx?%%;height:%%?60rpx?%%;background:#fff}.agree-text{height:%%?30rpx?%%;line-height:%%?30rpx?%%;text-align:center;background:#fff;font-size:%%?22rpx?%%;position:absolute;display:inline-block}.go-upgrape{height:%%?90rpx?%%;line-height:%%?90rpx?%%;text-align:center;background:#cda85a;color:#fff}.agree-btn{margin:0 %%?20rpx?%% 0 0;width:%%?30rpx?%%;height:%%?30rpx?%%;display:inline-block;border-radius:%%?1rpx?%% solid #ccc}.img{height:%%?30rpx?%%;width:%%?30rpx?%%}@code-separator-line:__wxRoute = "pages/ucenter/storeUpgrade/storeUpgrade";__wxRouteBegin = true;
define("pages/ucenter/storeUpgrade/storeUpgrade.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');

var app = getApp();

Page({
  data: {
    store_dic:{},
    agree: false,
    Host: api.Host
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // this.getCartList()

  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  },

    agree_authorize: function(){
        var tmp = this.data.agree
        this.setData({
            agree: !this.data.agree
        })
    },
    jump_page: function(){
        if (this.data.agree){
            wx.navigateTo({
                url: '/pages/ucenter/vipproduct/vipproduct'
            })
        }
    }

})

});require("pages/ucenter/storeUpgrade/storeUpgrade.js")@code-separator-line:["div","view","image"]