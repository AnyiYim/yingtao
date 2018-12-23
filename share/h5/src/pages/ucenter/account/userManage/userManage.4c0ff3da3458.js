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
    Z([3, 'container']);Z([3, 'blank-set']);Z([3, 'setHeadShowHide']);Z([3, 'head-view']);Z([3, 'hv-left']);Z([3, '头像']);Z([3, 'hv-right']);Z([3, 'hv-img']);Z([3, 'head-img']);Z([[7],[3, "view_image"]]);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[3, '/static/h5/static/images/user/wallet_right_icon.png']]);Z([3, 'content']);Z([3, 'user-navigator']);Z([3, '/pages/ucenter/account/setNickName/setNickName']);Z([3, 'setNameShowHide']);Z([3, 'item']);Z([3, 'item-left']);Z([3, '昵称']);Z([3, 'item-right']);Z([[6],[[7],[3, "user_info"]],[1, "nickname"]]);Z([3, 'item-r-text']);Z([a, [[6],[[7],[3, "user_info"]],[1, "nickname"]]]);Z([a, [3, ' '],[[6],[[7],[3, "user_info"]],[1, "mobile"]]]);Z([3, 'item-r-img']);Z([a, [3, '/pages/ucenter/account/setSex/setSex?sex\x3d'],[[6],[[7],[3, "user_info"]],[1, "sex"]]]);Z([3, '性别']);Z([a, [[6],[[7],[3, "user_info"]],[1, "sex"]]]);Z([a, [3, 'head-set  '],[[2,'?:'],[[6],[[7],[3, "namekeydict"]],[3, "headimg_hide"]],[1, "hide"],[1, ""]]]);Z([3, 'hs-hv-img']);Z([3, 'preSetImg']);Z([3, 'hs-hvi']);Z([3, 'hs-head-img']);Z([[7],[3, "upload_img_back"]]);Z([3, 'upload-btnbox']);Z([3, 'setUserInfo']);Z([3, 'upload-headimg']);Z([3, '提交图片']);
  })(z);d_["./pages/ucenter/account/userManage/userManage.wxml"] = {};
  var m0=function(e,s,r,gg){
    var o_S = _n("view");_r(o_S, 'class', 0, e, s, gg);var oAT = _n("view");_r(oAT, 'class', 1, e, s, gg);_(o_S,oAT);var oBT = _m( "view", ["bindtap", 2,"class", 1], e, s, gg);var oCT = _n("view");_r(oCT, 'class', 4, e, s, gg);var oDT = _o(5, e, s, gg);_(oCT,oDT);_(oBT,oCT);var oET = _n("view");_r(oET, 'class', 6, e, s, gg);var oFT = _n("view");_r(oFT, 'class', 7, e, s, gg);var oGT = _m( "image", ["class", 8,"src", 1], e, s, gg);_(oFT,oGT);_(oET,oFT);var oHT = _n("view");_r(oHT, 'class', 7, e, s, gg);var oIT = _m( "image", ["class", 10,"src", 1], e, s, gg);_(oHT,oIT);_(oET,oHT);_(oBT,oET);_(o_S,oBT);var oJT = _n("view");_r(oJT, 'class', 1, e, s, gg);_(o_S,oJT);var oKT = _n("view");_r(oKT, 'class', 12, e, s, gg);var oLT = _m( "navigator", ["class", 13,"url", 1], e, s, gg);var oMT = _m( "view", ["bindtap", 15,"class", 1], e, s, gg);var oNT = _n("view");_r(oNT, 'class', 17, e, s, gg);var oOT = _o(18, e, s, gg);_(oNT,oOT);_(oMT,oNT);var oPT = _n("view");_r(oPT, 'class', 19, e, s, gg);var oQT = _v();
      if (_o(20, e, s, gg)) {
        oQT.wxVkey = 1;var oRT = _n("view");_r(oRT, 'class', 21, e, s, gg);var oTT = _o(22, e, s, gg);_(oRT,oTT);_(oQT, oRT);
      }else {
        oQT.wxVkey = 2;var oUT = _n("view");_r(oUT, 'class', 21, e, s, gg);var oWT = _o(23, e, s, gg);_(oUT,oWT);_(oQT, oUT);
      }_(oPT,oQT);var oXT = _n("view");_r(oXT, 'class', 24, e, s, gg);var oYT = _m( "image", ["class", 10,"src", 1], e, s, gg);_(oXT,oYT);_(oPT,oXT);_(oMT,oPT);_(oLT,oMT);_(oKT,oLT);var oZT = _m( "navigator", ["class", 13,"url", 12], e, s, gg);var oaT = _n("view");_r(oaT, 'class', 16, e, s, gg);var obT = _n("view");_r(obT, 'class', 17, e, s, gg);var ocT = _o(26, e, s, gg);_(obT,ocT);_(oaT,obT);var odT = _n("view");_r(odT, 'class', 19, e, s, gg);var oeT = _n("view");_r(oeT, 'class', 21, e, s, gg);var ofT = _o(27, e, s, gg);_(oeT,ofT);_(odT,oeT);var ogT = _n("view");_r(ogT, 'class', 24, e, s, gg);var ohT = _m( "image", ["class", 10,"src", 1], e, s, gg);_(ogT,ohT);_(odT,ogT);_(oaT,odT);_(oZT,oaT);_(oKT,oZT);var oiT = _n("view");_r(oiT, 'class', 1, e, s, gg);_(oKT,oiT);var ojT = _n("view");_r(ojT, 'class', 28, e, s, gg);var okT = _n("view");_r(okT, 'class', 29, e, s, gg);var olT = _m( "view", ["bindtap", 30,"class", 1], e, s, gg);var omT = _m( "image", ["class", 32,"src", 1], e, s, gg);_(olT,omT);_(okT,olT);_(ojT,okT);var onT = _n("view");_r(onT, 'class', 34, e, s, gg);var ooT = _m( "view", ["bindtap", 35,"class", 1], e, s, gg);var opT = _o(37, e, s, gg);_(ooT,opT);_(onT,ooT);_(ojT,onT);_(oKT,ojT);_(o_S,oKT);_(r,o_S);
    return r;
  };
        e_["./pages/ucenter/account/userManage/userManage.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:body{height:100%;min-height:100%;background:#f2f2f2}.container{background:#f2f2f2;width:100%;height:auto;min-height:100%;overflow:hidden}.head-view{height:%%?100rpx?%%;line-height:%%?100rpx?%%;padding:0 %%?30rpx?%%;background:#fff}.item{width:100%;height:%%?100rpx?%%;line-height:%%?100rpx?%%;padding:0 %%?30rpx?%%;background:#fff;border-bottom:1px solid #f8f8f8}.hv-img{height:%%?100rpx?%%;line-height:%%?100rpx?%%;display:inline-block;float:left}.head-img{width:%%?43.5rpx?%%;height:%%?43.5rpx?%%;line-height:%%?43.5rpx?%%;margin-top:%%?25rpx?%%}.img{width:%%?30rpx?%%;height:%%?30rpx?%%;line-height:%%?30rpx?%%;margin-top:%%?26rpx?%%}.hv-left{float:left;height:%%?100rpx?%%;line-height:%%?100rpx?%%}.hv-right{float:right;height:%%?100rpx?%%;line-height:%%?100rpx?%%}.item-left{height:%%?100rpx?%%;line-height:%%?100rpx?%%;float:left;font-size:%%?27rpx?%%;display:inline-block}.item-right{height:%%?100rpx?%%;line-height:%%?100rpx?%%;float:right;display:inline-block}.item-r-text{float:left;display:inline-block;font-size:%%?27rpx?%%;color:#999}.item-r-img{display:inline-block}.blank-set{height:%%?20rpx?%%;background:#f4f4f4}.head-set{background:#fff;width:100%;height:%%?400rpx?%%}.hs-hv-img{text-align:center;height:%%?220rpx?%%;width:100%;padding-top:%%?30rpx?%%}.hs-hv-img .hs-hvi{display:inline-block}.hs-head-img{height:%%?200rpx?%%;width:%%?200rpx?%%;border-radius:%%?120rpx?%%}.upload-btnbox{margin-top:%%?40rpx?%%;width:100%;height:%%?80rpx?%%;text-align:center}.upload-btnbox .upload-headimg{margin:%%?10rpx?%% auto;height:%%?60rpx?%%;line-height:%%?60rpx?%%;text-align:center;width:%%?200rpx?%%;border:1px solid #999;border-radius:%%?8rpx?%%}.name-sex-set{height:%%?250rpx?%%;background:#fff;width:100%;padding:%%?20rpx?%% %%?30rpx?%%}.name-sex-set .set-ss-text{height:%%?80rpx?%%;line-height:%%?80rpx?%%;min-width:60%}.name-sex-set .set-ss-text .set-ss-input{height:%%?80rpx?%%;line-height:%%?80rpx?%%;width:100%;border-bottom:1px solid #999}.set-ss-radio{height:%%?80rpx?%%;line-height:%%?80rpx?%%}.set-ss-btn{height:%%?50rpx?%%;line-height:%%?50rpx?%%;text-align:center;width:%%?90rpx?%%;border-radius:%%?8rpx?%%;border:1px solid #999}.hide{display:none}.show{display:block}@code-separator-line:__wxRoute = "pages/ucenter/account/userManage/userManage";__wxRouteBegin = true;
define("pages/ucenter/account/userManage/userManage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../../../utils/util.js');
var user = require('../../../../services/user.js');
var api = require('../../../../config/api.js');

var app = getApp();

Page({
  data: {
    Host: api.Host,
    user_info: '',
    is_bind: '未绑定',
    view_image: api.Host + '/static/h5/static/images/user/personal_avatar.png',
    upload_img_back: api.Host + '/static/h5/static/images/user/upload_image.png',
    tempFilePaths: null,

    inputvalue: null,
    radiovalue: '男',
    namekeydict: {'headimg_hide':true}
  },
  onLoad: function(){
    // 页面初始化 options为页面跳转所带来的参数
    this.getUserInfo()
  },
  onReady: function(){
    // 页面渲染完成
  },
  onShow: function(){
    // 页面显示
  },
  onHide: function(){
    // 页面隐藏
  },
  onUnload: function(){
    // 页面关闭
  },

  getUserInfo: function(){
      let that = this;
      util.request('/api/user/', {}).then(function (res) {
          if (res.avatar && !res.avatar.startsWith('http://')) {
              res.avatar = api.Host + res.avatar;
          }
          if(!res['sex']){
              res['sex'] = '未设置'
          }
          that.setData({
              user_info: res,
              view_image: res.avatar
          })
      });
  },
    showHide: function(namekey){
        var key = this.data.namekeydict
        key[namekey] = !key[namekey]
        this.setData({
            namekeydict:key
        })

    },

    setHeadShowHide: function(){
        this.showHide('headimg_hide')
    },
    setNameShowHide: function(){
        this.showHide('namesex_hide')
    },

  preSetImg: function(){
      let that = this
      wx.chooseImage({
          count:1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function(res){
              var tempFilePaths = res.tempFilePaths
              that.setData({
                  tempFilePaths: tempFilePaths[0],
                  view_image:tempFilePaths[0],
                  upload_img_back: tempFilePaths[0],
              })
          }
      })
  },
  setUserInfo: function(e){
      let that = this
      if(!(this.data.tempFilePaths)){
         wx.showToast({
             title: '请先选择图片',
             duration: 1000,
             icon: 'none'
         })
         return
      }
      wx.uploadFile({
          url:  api.UserInfoSet,
          filePath:  that.data.tempFilePaths,
          name: 'file',
          formData:{
              'options_type': 'headimg'
          },
          success: function(res){
              var data = res.data
              that.setData({
                  headimg_hide: false,
                  upload_img_back: api.Host + '/static/h5/static/images/user/upload_image.png',
              })
              wx.showToast({
                  'title':'修改成功',
                  'complete': function(){
                      wx.switchTab({
                          url:'/pages/ucenter/index/index'
                      });
                      __wxConfig__.reLaunch();
                  }
              })
          }
      })
  },



})

});require("pages/ucenter/account/userManage/userManage.js")@code-separator-line:["div","view","image","navigator"]