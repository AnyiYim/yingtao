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
    Z([3, 'container']);Z([3, 'head-blank']);Z([3, 'reset-head']);Z([3, 'head-image']);Z([3, 'head-img']);Z([a, [[7],[3, "Host"]],[3, '/static/images/login/logo.png']]);Z([3, 'reset-head-text']);Z([3, 'form-title']);Z([3, 'Hi, 欢迎来到樱桃乐享商城 ']);Z([3, 'form-box']);Z([3, 'form-item']);Z([3, 'bindMobileInput']);Z([3, 'mobile']);Z([3, '手机号码']);Z([[2, ">"], [[6],[[7],[3, "mobile"]],[3, "length"]], [1, 0]]);Z([3, 'clearInput']);Z([3, 'clear']);Z([3, 'clear-mobile']);Z([3, '/static/images/clear_input.png']);Z([3, 'form-item-code']);Z([3, 'form-item code-item']);Z([3, 'bindCodeInput']);Z([3, 'code']);Z([3, '短信验证码']);Z([[7],[3, "code"]]);Z([[2, ">"], [[6],[[7],[3, "code"]],[3, "length"]], [1, 0]]);Z([3, 'clear-code']);Z([3, 'sendCode']);Z([3, 'vcode-btn']);Z([[7],[3, "sendCodeDisabled"]]);Z([3, 'mini']);Z([3, 'default']);Z([a, [[7],[3, "sendCodeDisabledTime"]],[3, '获取验证码']]);Z([3, 'resetStep1']);Z([3, 'reset-btn']);Z([3, 'button']);Z([3, '下一步']);
  })(z);d_["./pages/auth/reset/resetIndex/resetIndex.wxml"] = {};
  var m0=function(e,s,r,gg){
    var oXE = _n("view");_r(oXE, 'class', 0, e, s, gg);var oYE = _n("view");_r(oYE, 'class', 1, e, s, gg);_(oXE,oYE);var oZE = _n("view");_r(oZE, 'class', 2, e, s, gg);var oaE = _n("view");_r(oaE, 'class', 3, e, s, gg);var obE = _m( "image", ["class", 4,"src", 1], e, s, gg);_(oaE,obE);_(oZE,oaE);var ocE = _n("view");_r(ocE, 'class', 6, e, s, gg);var odE = _n("view");_r(odE, 'class', 7, e, s, gg);var oeE = _o(8, e, s, gg);_(odE,oeE);_(ocE,odE);_(oZE,ocE);_(oXE,oZE);var ofE = _n("view");_r(ofE, 'class', 9, e, s, gg);var ogE = _n("view");_r(ogE, 'class', 10, e, s, gg);var ohE = _m( "input", ["bindinput", 11,"class", 1,"placeholder", 2], e, s, gg);_(ogE,ohE);var oiE = _v();
      if (_o(14, e, s, gg)) {
        oiE.wxVkey = 1;var ojE = _m( "image", ["catchtap", 15,"class", 1,"id", 2,"src", 3], e, s, gg);_(oiE, ojE);
      } _(ogE,oiE);_(ofE,ogE);var olE = _n("view");_r(olE, 'class', 19, e, s, gg);var omE = _n("view");_r(omE, 'class', 20, e, s, gg);var onE = _m( "input", ["bindinput", 21,"class", 1,"placeholder", 2,"value", 3], e, s, gg);_(omE,onE);var ooE = _v();
      if (_o(25, e, s, gg)) {
        ooE.wxVkey = 1;var opE = _m( "image", ["catchtap", 15,"class", 1,"src", 3,"id", 11], e, s, gg);_(ooE, opE);
      } _(omE,ooE);_(olE,omE);var orE = _m( "button", ["bindtap", 27,"class", 1,"disabled", 2,"size", 3,"type", 4], e, s, gg);var osE = _o(32, e, s, gg);_(orE,osE);_(olE,orE);_(ofE,olE);var otE = _m( "button", ["bindtap", 33,"class", 1,"type", 2], e, s, gg);var ouE = _o(36, e, s, gg);_(otE,ouE);_(ofE,otE);_(oXE,ofE);_(r,oXE);
    return r;
  };
        e_["./pages/auth/reset/resetIndex/resetIndex.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:.head-blank{height:%%?132rpx?%%;width:100%}.reset-head{height:%%?163rpx?%%;width:100%;text-align:center}.reset-head .head-image .head-img{width:%%?232rpx?%%;height:%%?92rpx?%%}.reset-head-text{width:100%;height:%%?52.5rpx?%%;text-align:center;line-height:%%?52.5rpx?%%;margin-top:%%?16.3rpx?%%}.form-title{width:%%?391.3rpx?%%;height:%%?52.5rpx?%%;color:#333;font-size:%%?32.6rpx?%%;line-height:%%?52.5rpx?%%;text-align:center;margin:0 auto}.form-box{width:100%;height:auto;overflow:hidden;padding:0 %%?40rpx?%%;margin-top:%%?40rpx?%%;height:100%}.form-item{position:relative;height:%%?96rpx?%%;border-bottom:1px solid #d9d9d9}.form-item .code,.form-item .mobile,.form-item .password{position:absolute;top:%%?26rpx?%%;left:0;display:block;width:100%;height:%%?44rpx?%%;color:#333;font-size:%%?30rpx?%%}.form-item-code{height:auto;overflow:hidden;width:100%}.form-item-code .form-item{float:left;width:%%?380rpx?%%}.form-item-code .code-img{float:right;margin-top:%%?4rpx?%%;height:%%?88rpx?%%;width:%%?236rpx?%%}.form-item-code .vcode-btn{font-size:%%?30rpx?%%;margin-top:%%?18rpx?%%}.form-item .clear{position:absolute;top:%%?26rpx?%%;right:%%?18rpx?%%;z-index:2;display:block;background:#fff;height:%%?44rpx?%%;width:%%?44rpx?%%}.reset-btn{color:#fff;float:left;height:%%?96rpx?%%;line-height:%%?96rpx?%%;font-size:%%?40rpx?%%;width:100%;background:#cc2020;border-radius:%%?8rpx?%%;margin:%%?60rpx?%% 0 %%?50rpx?%%}.form-item-text{height:%%?35rpx?%%;width:100%}.form-item-text .reset{display:block;height:%%?34rpx?%%;float:left;font-size:%%?28rpx?%%;color:#999}@code-separator-line:__wxRoute = "pages/auth/reset/resetIndex/resetIndex";__wxRouteBegin = true;
define("pages/auth/reset/resetIndex/resetIndex.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var api = require('../../../../config/api.js');
var user = require('../../../../services/user.js');
var app = getApp();

var mobile_reg = /^(?:13\d|15\d|14\d|16\d|18\d|17\d|19\d)\d{5}(\d{3}|\*{3})$/;;
var disable_sendcode_btn_timer = null;
var start_disable_sendcode_btn = function(that){
    var time = parseInt((app.global.timer && app.global.timer.reset) || 60);
    disable_sendcode_btn_timer = setInterval(function(){
        that.setData({
            sendCodeDisabled: true,
            sendCodeDisabledTime: time
        });
        time -= 1;
        if (time < 0) {
            cancel_disable_sendcode_btn(that);
        }
    }, 1000);
}
var cancel_disable_sendcode_btn = function(that){
    clearInterval(disable_sendcode_btn_timer);
    app.global.timer.reset = that.data.sendCodeDisabledTime;
    that.setData({
        sendCodeDisabled: false,
        sendCodeDisabledTime: ''
    });
}

Page({
    data: {
        mobile: '',
        code: '',
        password: '',
        sendCodeDisabled: true,
        sendCodeDisabledTime: '',
        loginErrorCount: 0,
        profile_openid:''
    },

    onLoad: function (options) {
        var profile_openid = options.profile_openid
        if(profile_openid){
            this.setData({
                profile_openid: profile_openid
            })
        }

        if(app.global.timer == undefined) {
            app.global.timer.reset = 0;
        }
    },

    onReady: function () {

    },

    onShow: function () {
        var that = this
        if(app.global.timer.reset > 0){
            start_disable_sendcode_btn(that)
        }else{
            this.setData({
                sendCodeDisabled: false
            })
        }
    },

    onHide: function () {
        cancel_disable_sendcode_btn(this)
    },

    onUnload: function () {
        cancel_disable_sendcode_btn(this)
    },

    // 获取验证码/api/user/{{mobile}}/
    sendCode: function(e) {
        if(!mobile_reg.test(this.data.mobile)){
            wx.showToast({
                title:'手机号格式错误'
            });
            return
        }
        var that = this;
        that.setData({
          sendCodeDisabled: true
        });
        wx.showLoading({
          mask: true,
          success: function() {
              start_disable_sendcode_btn(that)
              user.get_reset_vcode(that.data.mobile).then((res) => {
                  wx.hideLoading();
                  if(res['code'] != 0 || res['code'].constructor == Array){
                      var desc = res['desc'].constructor == Array? res['desc'].join(''): res['desc'];
                      wx.showToast({title: desc, icon:'none'});
                      cancel_disable_sendcode_btn(that);
                  }
              }).catch((err) => {
                  (err);
                  cancel_disable_sendcode_btn(that);
              });
          }, fail: function() {
              wx.showToast({title: '获取验证码错误，请重试', icon:'none'});
              cancel_disable_sendcode_btn(that);
          }
        });
    },

    bindMobileInput: function(e) {
        var mobile =  e.detail.value;
        this.data.mobile = mobile;
        return {
          mobile: mobile,
          cursor: e.detail.cursor
        }

    },

    bindInput: function(e) {
        var mobile =  e.detail.value;
        this.data.mobile = mobile;
        return {
          mobile: mobile,
          cursor: e.detail.cursor
        }
    },

    resetStep1: function () {
        var that = this;

        if (that.data.mobile.length < 11) {
            wx.showToast({
                title: '手机格式不正确',
                duration: 1000,
                icon: 'none'
            });
            return ;
        }
        if (that.data.code.length < 6) {
            wx.showToast({
                title: '验证码错误',
                duration: 1000,
                icon: 'none'
            });
            return;
        }

        // wx.navigateTo({
        //   // url: '/pages/auth/reset/reset?mobile='+ that.data.mobile + '&code='+ that.data.code
        //   url: '/pages/auth/reset/test/test?mobile=18768299673&code=233322',
        //
        // })
        if(that.data.mobile && that.data.code) {
            user.code_verify(that.data.mobile, that.data.code).then((res) => {
                if(res['msg'] == 'OK'){
                    wx.redirectTo({
                      url: ('/pages/auth/reset/reset?mobile='+ that.data.mobile + '&code='+ that.data.code + '&profile_openid=' + that.data.profile_openid)
                    })
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
        } else {
            wx.showToast({
                title: '手机号未填',
                icon: 'none',
                duration: 1000
            })
        }
    },

    bindCodeInput: function (e) {
        var code =  e.detail.value;
        this.data.code = code;
        return {
          code: code,
          cursor: e.detail.cursor
        }
    },

    clearInput: function (e) {
        switch (e.currentTarget.id) {
            case 'clear-mobile':
                this.setData({
                    mobile: ''
                });
                break;
            case 'clear-code':
                this.setData({
                    code: ''
                });
                break;
        }
    }
})

});require("pages/auth/reset/resetIndex/resetIndex.js")@code-separator-line:["div","view","image","input","button"]