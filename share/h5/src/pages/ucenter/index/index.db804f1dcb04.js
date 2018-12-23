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
    Z([3, 'container']);Z([[2, "=="], [[7],[3, "client_type"]], [1, "default"]]);Z([3, 'onUserInfo']);Z([3, 'profile-info']);Z([3, 'avatar']);Z([[7],[3, "avatar"]]);Z([3, 'info']);Z([3, 'name']);Z([a, [[2, "||"],[[2, "||"],[[7],[3, "nickname"]],[[7],[3, "phonenumber"]]],[[7],[3, "welcome"]]]]);Z([3, 'level']);Z([a, [[2, "||"],[[7],[3, "experience_pack"]],[1, "绑定手机登录"]]]);Z([[2, "=="], [[7],[3, "client_type"]], [1, "weixin"]]);Z([3, 'goLogin']);Z([3, 'userAvatarUrl']);Z([3, 'userNickName']);Z([a, [[2, "||"],[[7],[3, "phonenumber"]],[1, "请点击绑定手机"]]]);Z([3, 'user-menu']);Z([3, 'my-module']);Z([3, 'item']);Z([3, 'jumpModel']);Z([3, 'a']);Z([3, 'order']);Z([3, 'icon order']);Z([3, 'txt']);Z([3, '我的订单']);Z([3, 'wallet']);Z([3, 'icon coupon']);Z([3, '我的钱包']);Z([3, 'collect']);Z([3, 'icon collect']);Z([3, '我的收藏']);Z([[7],[3, "show_invite_img"]]);Z([3, 'invited-tip']);Z([3, 'addGenUser']);Z([3, 'icon feedback']);Z([3, '邀请众创伙伴']);Z([3, 'storeUpgrade']);Z([3, 'icon storeupgrade']);Z([3, '升级专区']);Z([3, 'address']);Z([3, 'icon address']);Z([3, '收货地址']);Z([3, 'my_company']);Z([3, 'icon commonmanage']);Z([3, '合伙管理']);Z([3, 'account']);Z([3, 'icon account']);Z([3, '帐号设置']);
  })(z);d_["./pages/ucenter/index/index.wxml"] = {};
  var m0=function(e,s,r,gg){
    var ohN = _n("view");_r(ohN, 'class', 0, e, s, gg);var oiN = _v();
      if (_o(1, e, s, gg)) {
        oiN.wxVkey = 1;var olN = _m( "view", ["bindtap", 2,"class", 1], e, s, gg);var omN = _m( "image", ["class", 4,"src", 1], e, s, gg);_(olN,omN);var onN = _n("view");_r(onN, 'class', 6, e, s, gg);var ooN = _n("text");_r(ooN, 'class', 7, e, s, gg);var opN = _o(8, e, s, gg);_(ooN,opN);_(onN,ooN);var oqN = _n("text");_r(oqN, 'class', 9, e, s, gg);var orN = _o(10, e, s, gg);_(oqN,orN);_(onN,oqN);_(olN,onN);_(oiN,olN);
      } _(ohN,oiN);var osN = _v();
      if (_o(11, e, s, gg)) {
        osN.wxVkey = 1;var ovN = _m( "view", ["class", 3,"bindtap", 9], e, s, gg);var owN = _m( "open-data", ["class", 4,"type", 9], e, s, gg);_(ovN,owN);var oxN = _n("view");_r(oxN, 'class', 6, e, s, gg);var oyN = _m( "open-data", ["class", 7,"type", 7], e, s, gg);_(oxN,oyN);var ozN = _n("text");_r(ozN, 'class', 9, e, s, gg);var o_N = _o(15, e, s, gg);_(ozN,o_N);_(oxN,ozN);_(ovN,oxN);_(osN,ovN);
      } _(ohN,osN);var oAO = _n("view");_r(oAO, 'class', 16, e, s, gg);var oBO = _n("view");_r(oBO, 'class', 17, e, s, gg);var oCO = _n("view");_r(oCO, 'class', 18, e, s, gg);var oDO = _m( "view", ["bindtap", 19,"class", 1,"data-module", 2], e, s, gg);var oEO = _n("view");_r(oEO, 'class', 22, e, s, gg);_(oDO,oEO);var oFO = _n("view");_r(oFO, 'class', 23, e, s, gg);var oGO = _o(24, e, s, gg);_(oFO,oGO);_(oDO,oFO);_(oCO,oDO);_(oBO,oCO);var oHO = _n("view");_r(oHO, 'class', 18, e, s, gg);var oIO = _m( "view", ["bindtap", 19,"class", 1,"data-module", 6], e, s, gg);var oJO = _n("text");_r(oJO, 'class', 26, e, s, gg);_(oIO,oJO);var oKO = _n("text");_r(oKO, 'class', 23, e, s, gg);var oLO = _o(27, e, s, gg);_(oKO,oLO);_(oIO,oKO);_(oHO,oIO);_(oBO,oHO);var oMO = _n("view");_r(oMO, 'class', 18, e, s, gg);var oNO = _m( "view", ["bindtap", 19,"class", 1,"data-module", 9], e, s, gg);var oOO = _n("text");_r(oOO, 'class', 29, e, s, gg);_(oNO,oOO);var oPO = _n("text");_r(oPO, 'class', 23, e, s, gg);var oQO = _o(30, e, s, gg);_(oPO,oQO);_(oNO,oPO);_(oMO,oNO);_(oBO,oMO);_(oAO,oBO);var oRO = _n("view");_r(oRO, 'class', 17, e, s, gg);var oSO = _n("view");_r(oSO, 'class', 18, e, s, gg);var oTO = _v();
      if (_o(31, e, s, gg)) {
        oTO.wxVkey = 1;var oUO = _n("view");_r(oUO, 'class', 32, e, s, gg);_(oTO, oUO);
      } _(oSO,oTO);var oWO = _m( "view", ["bindtap", 19,"class", 1,"data-module", 14], e, s, gg);var oXO = _n("text");_r(oXO, 'class', 34, e, s, gg);_(oWO,oXO);var oYO = _n("text");_r(oYO, 'class', 23, e, s, gg);var oZO = _o(35, e, s, gg);_(oYO,oZO);_(oWO,oYO);_(oSO,oWO);_(oRO,oSO);var oaO = _n("view");_r(oaO, 'class', 18, e, s, gg);var obO = _m( "view", ["bindtap", 19,"class", 1,"data-module", 17], e, s, gg);var ocO = _n("text");_r(ocO, 'class', 37, e, s, gg);_(obO,ocO);var odO = _n("text");_r(odO, 'class', 23, e, s, gg);var oeO = _o(38, e, s, gg);_(odO,oeO);_(obO,odO);_(oaO,obO);_(oRO,oaO);var ofO = _n("view");_r(ofO, 'class', 18, e, s, gg);var ogO = _m( "view", ["bindtap", 19,"class", 1,"data-module", 20], e, s, gg);var ohO = _n("text");_r(ohO, 'class', 40, e, s, gg);_(ogO,ohO);var oiO = _n("text");_r(oiO, 'class', 23, e, s, gg);var ojO = _o(41, e, s, gg);_(oiO,ojO);_(ogO,oiO);_(ofO,ogO);_(oRO,ofO);_(oAO,oRO);var okO = _n("view");_r(okO, 'class', 17, e, s, gg);var olO = _n("view");_r(olO, 'class', 18, e, s, gg);var omO = _m( "view", ["bindtap", 19,"class", 1,"data-module", 23], e, s, gg);var onO = _n("text");_r(onO, 'class', 43, e, s, gg);_(omO,onO);var ooO = _n("text");_r(ooO, 'class', 23, e, s, gg);var opO = _o(44, e, s, gg);_(ooO,opO);_(omO,ooO);_(olO,omO);_(okO,olO);var oqO = _n("view");_r(oqO, 'class', 18, e, s, gg);var orO = _m( "view", ["bindtap", 19,"class", 1,"data-module", 26], e, s, gg);var osO = _n("text");_r(osO, 'class', 46, e, s, gg);_(orO,osO);var otO = _n("text");_r(otO, 'class', 23, e, s, gg);var ouO = _o(47, e, s, gg);_(otO,ouO);_(orO,otO);_(oqO,orO);_(okO,oqO);_(oAO,okO);_(ohN,oAO);_(r,ohN);
    return r;
  };
        e_["./pages/ucenter/index/index.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:.head{display:none}.scrollable{position:absolute;margin-top:-42px}body{height:100%;width:100%;background:#f4f4f4}.container{background:#fff;height:auto;overflow:hidden;width:100%;height:100%}.profile-info{width:100%;height:%%?280rpx?%%;display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;padding:0 %%?30.25rpx?%%;background:#333}.profile-info .avatar{height:%%?148rpx?%%;width:%%?148rpx?%%;border-radius:50%}.profile-info .info{flex:1;height:%%?85rpx?%%;padding-left:%%?31.25rpx?%%}.profile-info .name{display:block;height:%%?45rpx?%%;line-height:%%?45rpx?%%;color:#fff;font-size:%%?37.5rpx?%%;margin-bottom:%%?10rpx?%%}.profile-info .level{display:block;height:%%?30rpx?%%;line-height:%%?30rpx?%%;margin-bottom:%%?10rpx?%%;color:#7f7f7f;font-size:%%?30rpx?%%}.user-menu{width:100%;height:auto;overflow:hidden;background:#fff}.user-menu .item{float:left;width:33.33333%;height:%%?180rpx?%%;text-align:center}.my-module{height:%%?180rpx?%%;border-bottom:1px solid rgba(0,0,0,.15)}.user-menu .item .a{display:flex;width:100%;height:100%;flex-direction:column;align-items:center;justify-content:center}.user-menu .item.no-border{border-right:0}.user-menu .item.item-bottom{border-bottom:none}.user-menu .icon{margin:0 auto;display:block;height:%%?52.803rpx?%%;width:%%?52.803rpx?%%;margin-bottom:%%?30rpx?%%}.user-menu .icon.order{background:url(static/images/user/orders.png) 0 %%?0rpx?%% no-repeat;background-size:%%?52.803rpx?%%}.user-menu .icon.presale{background:url(static/images/user/presale.png) 0 %%?0rpx?%% no-repeat;background-size:%%?52.803rpx?%%}.user-menu .icon.coupon{background:url(static/images/user/wallet.png) 0 %%?0rpx?%% no-repeat;background-size:%%?52.803rpx?%%}.user-menu .icon.gift{background:url(static/images/user/wallet.png) 0 %%?0rpx?%% no-repeat;background-size:%%?52.803rpx?%%}.user-menu .icon.address{background:url(static/images/user/shipping_address.png) 0 0 no-repeat;background-size:%%?52.803rpx?%%}.user-menu .icon.security{background:url(static/images/user/wallet.png) 0 %%?0rpx?%% no-repeat;background-size:%%?52.803rpx?%%}.user-menu .icon.kefu{background:url(static/images/user/wallet.png) 0 %%?0rpx?%% no-repeat;background-size:%%?52.803rpx?%%}.user-menu .icon.help{background:url(static/images/user/wallet.png) 0 %%?0rpx?%% no-repeat;background-size:%%?52.803rpx?%%}.user-menu .icon.storeupgrade{background:url(static/images/user/shop_upgrade.png) 0 %%?0rpx?%% no-repeat;background-size:%%?52.803rpx?%%}.user-menu .icon.feedback{background:url(static/images/user/invite.png) 0 %%?0rpx?%% no-repeat;background-size:%%?52.803rpx?%%}.user-menu .icon.commonmanage{background:url(static/images/user/partnership_company.png) 0 %%?0rpx?%% no-repeat;background-size:%%?52.803rpx?%%}.user-menu .icon.collect{background:url(static/images/user/collection.png) 0 %%?0rpx?%% no-repeat;background-size:%%?52.803rpx?%%}.user-menu .icon.verity{background:url(static/images/user/verified.png) 0 %%?0rpx?%% no-repeat;background-size:%%?52.803rpx?%%}.user-menu .icon.account{background:url(static/images/user/verified.png) 0 %%?0rpx?%% no-repeat;background-size:%%?52.803rpx?%%}.user-menu .txt{display:block;height:%%?24rpx?%%;width:100%;font-size:%%?26rpx?%%;color:#333}.logout{margin-top:%%?50rpx?%%;height:%%?101rpx?%%;width:100%;line-height:%%?101rpx?%%;text-align:center;background:#fff;color:#333;font-size:%%?30rpx?%%}.invited-tip{height:%%?20rpx?%%;width:%%?20rpx?%%;border-radius:%%?20rpx?%%;background-color:#3cc51f;position:fixed;margin:%%?40rpx?%% 25%}@code-separator-line:__wxRoute = "pages/ucenter/index/index";__wxRouteBegin = true;
define("pages/ucenter/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var user = require('../../../services/user.js');
var app = getApp();

var jumplist = {
    'order': '/pages/ucenter/order/order?salekey=sale',
    'wallet': '/pages/ucenter/wallet/wallet',
    'collect': '/pages/ucenter/collect/collect',
    'addGenUser': '/pages/ucenter/addGenUser/addGenUser',
    // 'addGenUser': '/pages/ucenter/addGenUser/invitedInfo/invitedInfo',
    'storeUpgrade': '/pages/ucenter/storeUpgrade/storeUpgrade',
    'address': '/pages/ucenter/address/address',
    'my_company': '/pages/ucenter/company/my_company/my_company',
    'account': '/pages/ucenter/account/account',
}

var get_experience_pack_img = function(experience_pack) {
    experience_pack += '';
    var data = {
        '1': ['普通店铺', '/static/images/user/default.png'],
        '2': ['铜级店铺', '/static/images/user/bronze_medal.png'],
        '3': ['银级店铺', '/static/images/user/silver_medal.png'],
        '4': ['金级店铺', '/static/images/user/gold_medal.png'],
        '5': ['众创导师', '/static/images/user/default.png']
    };
    if(experience_pack && experience_pack != 'undefined') {
        return data[experience_pack];
    } else {
        return '';
    }
}

var flush_userinfo = function(that) {
    let user = app.global.user;
    if (user.phonenumber && (user.nickname !== that.data.nickname ||
        user.phonenumber !== that.data.phonenumber ||
        user.experience_pack !== that.data.experience_pack)) {
        if (user.avatar && !user.avatar.startsWith('http://')) {
            user.avatar = api.Host + user.avatar;
        }
        that.setData({
            avatar: user.avatar || '/static/images/user/avatar.png',
            nickname: user.nickname || '',
            phonenumber: user.phonenumber || '',
            experience_pack: get_experience_pack_img(app.global.user.experience_pack)[0],
            experience_pack_img: get_experience_pack_img(app.global.user.experience_pack)[1],
        });
    }
}

Page({
    data: {
        module: null,
        client_type: __wxConfig__?'default':'weixin',
        welcome: '登录/注册',
        avatar: app.global.user.avatar || '/static/images/user/avatar.png',
        nickname: app.global.user.nickname || '',
        phonenumber: app.global.user.phonenumber || '',
        experience_pack: get_experience_pack_img(app.global.user.experience_pack)[0],
        experience_pack_img: get_experience_pack_img(app.global.user.experience_pack)[1],
        show_invite_img: false,

    },

    onLoad: function (options) {
        var that = this;
        if(!app.global.user.show_invite_img){
            that.setData({
                show_invite_img: false
            })
        }
        flush_userinfo(that)
        this.getInviteInfo()
    },

    onReady: function () {

    },

    onShow: function () {
        var that = this;
        setTimeout(function(){
            flush_userinfo(that);
        }, 0);
    },

    onHide: function () {

    },

    onUnload: function () {

    },

    onUserInfo: function() {
        if(!(app.global.user && app.global.user.phonenumber != ''
            && app.global.user.phonenumber != undefined)) {
            wx.navigateTo({url: '/pages/auth/login/login'});
        }
    },

    onPullDownRefresh: function () {
        this.onLoad()
    },

    jumpModel: function(e){
        this.setData({
            module: e.currentTarget.dataset.module
        })
        var data = app.global.user
        if(data.phonenumber){
            wx.navigateTo({
                url: jumplist[this.data.module]
            })
        }else{
            wx.navigateTo({
                url: '/pages/auth/login/login'
            })
        }
    },

    getInviteInfo: function(){
        let that = this
        if (!(app.global.user.prev_gen1 && app.global.user_invite_img)){
            util.request(api.handleInvite, {}, 'GET').then(function(res){
                if(res['code'] == 1){
                    if (!(app.global.user && app.global.user.show_invite_img)){
                        app.global.user.show_invite_img = true;
                    }
                    that.setData({
                        show_invite_img: true
                    })
                }
            })
        }

    },


});

});require("pages/ucenter/index/index.js")@code-separator-line:["div","view","block","image","text","open-data"]