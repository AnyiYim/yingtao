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
    Z([3, 'container']);Z([3, 'modify-mobile']);Z([3, 'show-current']);Z([3, 'mobile-image']);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[3, '/static/images/user/mobile.png']]);Z([3, 'cur-tip']);Z([3, '\r\n            当前绑定手机号\r\n        ']);Z([3, 'phone-number']);Z([a, [[7],[3, "cur_mobile"]]]);Z([3, 'item-mobile']);Z([3, 'input-left']);Z([3, '\r\n            +86\r\n        ']);Z([3, 'input-right']);Z([3, 'getMobileValue']);Z([3, 'input-input']);Z([3, '请输入新手机号']);Z([[7],[3, "new_mobile"]]);Z([3, 'input-left02']);Z([3, 'il02-img']);Z([a, [[7],[3, "Host"]],[3, '/static/images/public/nav_more.png']]);Z([3, 'getPasswordValue']);Z([3, '请输入密码']);Z([[7],[3, "password"]]);Z([3, 'input-center02']);Z([3, 'getVcodeValue']);Z([3, '请输入验证码']);Z([[7],[3, "vcode"]]);Z([3, 'getCode']);Z([3, 'input-right02']);Z([[7],[3, "sendCodeDisabled"]]);Z([3, 'mini']);Z([3, 'button']);Z([a, [[7],[3, "sendCodeDisabledTime"]],[3, '获取验证码']]);Z([3, 'varyMobile']);Z([a, [3, 'mp-btn '],[[2,'?:'],[[2, "=="], [[7],[3, "btn_color"]], [1, "red"]],[1, "btn-color"],[1, ""]]]);Z([3, '确认']);
  })(z);d_["./pages/ucenter/account/setMobile/setMobile.wxml"] = {};
  var m0=function(e,s,r,gg){
    var ogT = _n("view");_r(ogT, 'class', 0, e, s, gg);var ohT = _n("view");_r(ohT, 'class', 1, e, s, gg);var oiT = _n("view");_r(oiT, 'class', 2, e, s, gg);var ojT = _n("view");_r(ojT, 'class', 3, e, s, gg);var okT = _m( "image", ["class", 4,"src", 1], e, s, gg);_(ojT,okT);_(oiT,ojT);var olT = _n("view");_r(olT, 'class', 6, e, s, gg);var omT = _o(7, e, s, gg);_(olT,omT);_(oiT,olT);var onT = _n("view");_r(onT, 'class', 8, e, s, gg);var ooT = _o(9, e, s, gg);_(onT,ooT);_(oiT,onT);_(ohT,oiT);var opT = _n("view");_r(opT, 'class', 10, e, s, gg);var oqT = _n("view");_r(oqT, 'class', 11, e, s, gg);var orT = _o(12, e, s, gg);_(oqT,orT);_(opT,oqT);var osT = _n("view");_r(osT, 'class', 13, e, s, gg);var otT = _m( "input", ["bindinput", 14,"class", 1,"placeholder", 2,"value", 3], e, s, gg);_(osT,otT);_(opT,osT);_(ohT,opT);var ouT = _n("view");_r(ouT, 'class', 10, e, s, gg);var ovT = _n("view");_r(ovT, 'class', 18, e, s, gg);var owT = _m( "image", ["class", 19,"src", 1], e, s, gg);_(ovT,owT);_(ouT,ovT);var oxT = _n("view");_r(oxT, 'class', 13, e, s, gg);var oyT = _m( "input", ["password", -1,"class", 15,"bindinput", 6,"placeholder", 7,"value", 8], e, s, gg);_(oxT,oyT);_(ouT,oxT);_(ohT,ouT);var ozT = _n("view");_r(ozT, 'class', 10, e, s, gg);var o_T = _n("view");_r(o_T, 'class', 18, e, s, gg);var oAU = _m( "image", ["class", 19,"src", 1], e, s, gg);_(o_T,oAU);_(ozT,o_T);var oBU = _n("view");_r(oBU, 'class', 24, e, s, gg);var oCU = _m( "input", ["class", 15,"bindinput", 10,"placeholder", 11,"value", 12], e, s, gg);_(oBU,oCU);_(ozT,oBU);var oDU = _m( "button", ["bindtap", 28,"class", 1,"disabled", 2,"size", 3,"type", 4], e, s, gg);var oEU = _o(33, e, s, gg);_(oDU,oEU);_(ozT,oDU);_(ohT,ozT);var oFU = _m( "button", ["type", 32,"bindtap", 2,"class", 3], e, s, gg);var oGU = _o(36, e, s, gg);_(oFU,oGU);_(ohT,oFU);_(ogT,ohT);var oHU = _n("view");_(ogT,oHU);_(r,ogT);
    return r;
  };
        e_["./pages/ucenter/account/setMobile/setMobile.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:body{height:100%;min-height:100%;background:#f2f2f2}.container{background:#f2f2f2;width:100%;height:auto;min-height:100%;overflow:hidden}.item-mobile{height:%%?72rpx?%%;line-height:%%?72rpx?%%;width:96%;margin-left:2%;background:#fff;border-bottom:%%?1rpx?%% solid #f2f2f2;border-radius:%%?100rpx?%%;margin-top:%%?35rpx?%%}.item-mobile .input-left{width:15%;text-align:center;height:%%?72rpx?%%;line-height:%%?72rpx?%%;display:inline-block;float:left;border-right:%%?1rpx?%% solid #f2f2f2}.item-mobile .input-right{width:84.5%;height:%%?72rpx?%%;line-height:%%?72rpx?%%;display:inline-block;float:left;text-align:left;padding-left:%%?20rpx?%%}.item-mobile .input-left02{width:15%;text-align:center;height:%%?72rpx?%%;line-height:%%?72rpx?%%;display:inline-block;float:left}.item-mobile .input-left02 .il02-img{width:%%?36rpx?%%;height:%%?36rpx?%%;display:inline-block;margin:%%?18rpx?%% auto}.item-mobile .input-center02{width:45%;padding-left:%%?20rpx?%%;height:%%?72rpx?%%;line-height:%%?72rpx?%%;display:inline-block;float:left}.item-mobile .input-right02{width:40%;height:%%?72rpx?%%;line-height:%%?72rpx?%%;display:inline-block;float:right;text-align:center;background:#ff9800;border-top-right-radius:26px;border-bottom-right-radius:26px;color:#fff}.item-mobile .input-right .img{margin-top:%%?15rpx?%%;width:%%?60rpx?%%;height:%%?60rpx?%%}.input-input{margin-top:%%?10rpx?%%}.input-tip{margin:%%?10rpx?%%;color:#ccc;font-size:%%?24rpx?%%}.mp-btn{margin-top:%%?100rpx?%%;width:96%;margin-left:2%;height:%%?72rpx?%%;line-height:%%?72rpx?%%;text-align:center;color:#fff;font-size:%%?32rpx?%%;background:#cc2020}.btn-color{background:#cc2020}.mobile-image{padding-top:%%?100rpx?%%;text-align:center}.mobile-image .img{width:%%?120rpx?%%;height:%%?160rpx?%%}.cur-tip{margin:%%?15rpx?%% 0;text-align:center;color:#101010;font-size:%%?23rpx?%%}.phone-number{text-align:center;margin-bottom:%%?20rpx?%%}@code-separator-line:__wxRoute = "pages/ucenter/account/setMobile/setMobile";__wxRouteBegin = true;
define("pages/ucenter/account/setMobile/setMobile.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../../../utils/util.js');
var user = require('../../../../services/user.js');
var api = require('../../../../config/api.js');



var app = getApp();

Page({
  data: {
    host: api.Host,
    hide_clean: false,
    new_mobile: null,
    code: '',
    cur_mobile: null,
    sendCodeDisabled: false,
    sendCodeDisabledTime: '',
    password: null,
  },
  onLoad: function () {
    // 页面初始化 options为页面跳转所带来的参数
    var cur_mobile = app.global.user['phonenumber'].substring(0,3)+"****"+
        app.global.user['phonenumber'].substring(8,11);
    this.setData({
        cur_mobile: cur_mobile
    })
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

  getMobileValue: function(e){
      var new_mobile = e.detail.value;
      this.data.new_mobile = new_mobile
      return {
          new_mobile: new_mobile,
          cursor: e.detail.cursor
      }

  },

  getVcodeValue: function(e){
      var code = e.detail.value;
      this.data.code = code
      return {
          code: code,
          cursor: e.detail.cursor
      }
  },
  getPasswordValue: function(e){
      var password = e.detail.value;
      this.data.password = password
      return {
          password: password,
          cursor: e.detail.cursor
      }

  },

  cleanInput: function(){
      this.setData({
          btn_color: ''
      })
  },

  getCode: function(e) {
    var that = this;
    that.setData({
        sendCodeDisabled: true
    });
    wx.showLoading({
        mask: true,
        success: function() {
            var time = 60;
            var id = setInterval(function(){
                that.setData({sendCodeDisabledTime: time});
                time -= 1;
                if (time < 0) {
                    clearInterval(id);
                    that.setData({
                        sendCodeDisabled: false,
                        sendCodeDisabledTime: ''
                    });
                }
            }, 1000);
            user.get_vary_mobile_vcode(that.data.new_mobile).then((res) => {
                wx.hideLoading();
                if(res['code'] != 0){
                    try {
                        wx.showToast({title: res['desc'], icon:'none'});
                    }catch(err){
                        wx.showToast({title: res['desc'][0], icon:'none'});
                    }
                }
            }).catch((err) => {
                // wx.showToast({title: err, icon:'none'});
            });
        }, fail: function() {
            wx.showToast({title: '获取验证码错误，请重试', icon:'none'});
            that.setData({sendCodeDisabled: false});
        }
    });
  },

  varyMobile: function () {
      var that = this;
      user.vary_mobile_code_verify(that.data.new_mobile, that.data.code).then((res) => {
          if(res['code'] == 0){
              user.vary_mobile_with_vcode(that.data.new_mobile,
                  that.data.code, that.data.password, 'POST').then((res) => {
                  if(res['code'] == 0){
                      wx.showToast({
                          title: res['desc'],
                          icon: 'none',
                          duration: 1000,
                          complete: function(){
                              wx.switchTab({
                                  url: '/pages/ucenter/index/index',
                              });
                          }
                      })
                  }else{
                      wx.showToast({
                          title: res['desc'][0],
                          icon: 'none',
                          duration: 1000
                      })
                  }
              }).catch((err) => {
                  console.log(err);
              });
          }else{
              wx.showToast({
                  title: JSON.parse(res['desc'])['verification_code'][0].message,
                  icon: 'none',
                  duration: 1000
              })
          }
      }).catch((err) => {
          (err);
      })
  },

  setUserInfo: function(e){
      let that = this
          if(!that.data.inputvalue){
              wx.showToast({
                  title: '昵称不能为空',
                  duration: 1000,
                  icon: 'none'
              })
              return
          }
          util.request(api.UserInfoSet, {
              'options_type': 'namesex',
              'mobile': that.data.inputvalue,
              'sex': that.data.radiovalue
          }, 'POST').then(function(res){
              wx.showToast({
                  title: '修改成功',
                  duration: 1000,
                  icon: 'none'
              })
              that.setData({
                  btn_color:null
              })
          }).catch((err) => {
          });
  },
})

});require("pages/ucenter/account/setMobile/setMobile.js")@code-separator-line:["div","view","image","input","button"]