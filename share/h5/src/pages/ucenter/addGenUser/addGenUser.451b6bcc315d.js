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
    Z([3, 'container']);Z([[7],[3, "add_partner"]]);Z([3, '/pages/ucenter/addGenUser/inviterList/inviterList']);Z([3, 'inviter-box']);Z([3, 'inviter-left']);Z([3, 'il-txt']);Z([3, '新的众创伙伴']);Z([3, 'inviter-right']);Z([3, 'ir-img']);Z([a, [[7],[3, "Host"]],[3, '/static/h5/static/images/public/red_right.png']]);Z([3, 'aaa']);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[[7],[3, "scan_img"]]]);Z([3, 'desc']);Z([3, '\n        扫码或分享邀请众创伙伴\n    ']);Z([3, 'invite-count']);Z([a, [3, '\n        已成功邀请'],[[7],[3, "gen_count"]],[3, '人\n    ']]);Z([3, 'gen_view_list']);Z([[7],[3, "gen_detail"]]);Z([[6],[[7],[3, "item"]],[3, "mobile"]]);Z([3, 'item']);Z([3, 'item-left']);Z([3, 'il-image']);Z([[6],[[7],[3, "item"]],[3, "image"]]);Z([3, 'name-mobile']);Z([3, 'gen-nickname']);Z([a, [3, '\n                        '],[[2, "||"],[[6],[[7],[3, "item"]],[3, "nickname"]],[1, ""]],[3, '\n                    ']]);Z([3, 'gen-mobile']);Z([a, [3, '\n                        '],[[6],[[7],[3, "item"]],[3, "mobile"]],[3, '\n                    ']]);Z([3, 'item-right']);Z([3, 'level']);Z([a, [3, '\n                    '],[[6],[[7],[3, "item"]],[3, "lv"]],[3, '\n                ']]);Z([3, 'time']);Z([a, [[6],[[7],[3, "item"]],[3, "add_prev_gen_date"]]]);
  })(z);d_["./pages/ucenter/addGenUser/addGenUser.wxml"] = {};
  var m0=function(e,s,r,gg){
    var orT = _n("view");_r(orT, 'class', 0, e, s, gg);var osT = _v();
      if (_o(1, e, s, gg)) {
        osT.wxVkey = 1;var otT = _n("navigator");_r(otT, 'url', 2, e, s, gg);var ovT = _n("view");_r(ovT, 'class', 3, e, s, gg);var owT = _n("view");_r(owT, 'class', 4, e, s, gg);var oxT = _n("view");_r(oxT, 'class', 5, e, s, gg);var oyT = _o(6, e, s, gg);_(oxT,oyT);_(owT,oxT);_(ovT,owT);var ozT = _n("view");_r(ozT, 'class', 7, e, s, gg);var o_T = _m( "image", ["class", 8,"src", 1], e, s, gg);_(ozT,o_T);_(ovT,ozT);_(otT,ovT);_(osT, otT);
      } _(orT,osT);var oAU = _n("view");_r(oAU, 'bindtap', 10, e, s, gg);var oBU = _m( "image", ["class", 11,"src", 1], e, s, gg);_(oAU,oBU);_(orT,oAU);var oCU = _n("view");_r(oCU, 'class', 13, e, s, gg);var oDU = _o(14, e, s, gg);_(oCU,oDU);_(orT,oCU);var oEU = _n("view");_r(oEU, 'class', 15, e, s, gg);var oFU = _o(16, e, s, gg);_(oEU,oFU);_(orT,oEU);var oGU = _n("view");_r(oGU, 'class', 17, e, s, gg);var oHU = _v();var oIU = function(oMU,oLU,oKU,gg){var oJU = _n("view");_r(oJU, 'class', 20, oMU, oLU, gg);var oOU = _n("view");_r(oOU, 'class', 21, oMU, oLU, gg);var oPU = _n("view");_r(oPU, 'class', 22, oMU, oLU, gg);var oQU = _m( "image", ["class", 11,"src", 12], oMU, oLU, gg);_(oPU,oQU);_(oOU,oPU);var oRU = _n("view");_r(oRU, 'class', 24, oMU, oLU, gg);var oSU = _n("view");_r(oSU, 'class', 25, oMU, oLU, gg);var oTU = _o(26, oMU, oLU, gg);_(oSU,oTU);_(oRU,oSU);var oUU = _n("view");_r(oUU, 'class', 27, oMU, oLU, gg);var oVU = _o(28, oMU, oLU, gg);_(oUU,oVU);_(oRU,oUU);_(oOU,oRU);_(oJU,oOU);var oWU = _n("view");_r(oWU, 'class', 29, oMU, oLU, gg);var oXU = _n("view");_r(oXU, 'class', 30, oMU, oLU, gg);var oYU = _o(31, oMU, oLU, gg);_(oXU,oYU);_(oWU,oXU);var oZU = _n("view");_r(oZU, 'class', 32, oMU, oLU, gg);var oaU = _o(33, oMU, oLU, gg);_(oZU,oaU);_(oWU,oZU);_(oJU,oWU);_(oKU, oJU);return oKU;};_2(18, oIU, e, s, gg, oHU, "item", "index", '{{item.mobile}}');_(oGU,oHU);_(orT,oGU);_(r,orT);
    return r;
  };
        e_["./pages/ucenter/addGenUser/addGenUser.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:body{background:#fff;min-height:100%}.container{background:#fff;min-height:100%;width:%%?750rpx?%%;background-color:rgba(255,255,255,1)}.inviter-box{height:%%?90rpx?%%;line-height:%%?90rpx?%%;width:100%;background:#cc2020}.inviter-box .inviter-left{height:%%?90rpx?%%;line-height:%%?90rpx?%%;padding-left:%%?20rpx?%%;display:inline-block;width:80%;float:left}.inviter-box .inviter-left .il-img{height:%%?90rpx?%%;line-height:%%?90rpx?%%;display:inline-block;float:left;width:%%?80rpx?%%}.inviter-box .inviter-left .il-txt{height:%%?90rpx?%%;line-height:%%?90rpx?%%;display:inline-block;float:left;color:#fff}.inviter-box .inviter-right{height:%%?90rpx?%%;display:inline-block;width:19%;text-align:right;padding-right:%%?30rpx?%%;float:right}.inviter-box .inviter-right .ir-img{width:%%?28rpx?%%;height:%%?30rpx?%%;margin-top:%%?30rpx?%%}.img{position:absolute;left:%%?200rpx?%%;top:%%?190rpx?%%;width:%%?350rpx?%%;height:%%?350rpx?%%}.desc{position:absolute;left:%%?196rpx?%%;top:%%?550rpx?%%;width:%%?350rpx?%%;height:%%?69rpx?%%;line-height:%%?42rpx?%%;color:rgba(102,102,102,1);font-size:%%?25rpx?%%;text-align:center;font-family:Arial}.mobile{position:absolute;left:%%?85rpx?%%;top:%%?627rpx?%%;width:%%?520rpx?%%;height:%%?82rpx?%%;border-radius:%%?78rpx?%%;color:rgba(204,204,204,1);font-size:%%?29rpx?%%;text-align:left;font-family:Arial;border:%%?1rpx?%% solid rgba(187,187,187,1);padding:0 %%?30rpx?%%}.invite{position:absolute;left:%%?85rpx?%%;top:%%?763rpx?%%;width:%%?580rpx?%%;height:%%?82rpx?%%;border-radius:%%?7rpx?%%;background-color:rgba(204,32,32,1);color:rgba(255,255,255,1);font-size:%%?29rpx?%%;text-align:center;font-family:Microsoft Yahei;border:%%?1rpx?%% solid rgba(255,255,255,0)}.invite-count{position:absolute;left:%%?243rpx?%%;top:%%?670rpx?%%;background:#fff;width:%%?266rpx?%%;height:%%?78rpx?%%;line-height:%%?78rpx?%%;z-index:10;color:rgba(102,102,102,1);font-size:%%?29rpx?%%;text-align:center;font-family:Arial;border:%%?1rpx?%% solid rgba(255,255,255,0)}.gen_view_list{position:absolute;top:%%?710rpx?%%;width:%%?730rpx?%%;margin-left:%%?10rpx?%%;border:%%?1rpx?%% solid #ccc;min-height:%%?90rpx?%%;padding:%%?20rpx?%% 0}.gen_view_list .item{width:100%;border-radius:%%?12rpx?%%;padding-top:%%?10rpx?%%;padding-bottom:%%?10rpx?%%;height:%%?110rpx?%%;border-bottom:%%?1rpx?%% solid #ddd}.gen_view_list .item .item-left{display:inline-block;float:left;width:70%}.gen_view_list .item .item-right{display:inline-block;float:left;width:30%}.gen_view_list .item .item-left .il-image{margin:%%?5rpx?%% %%?20rpx?%%;width:%%?80rpx?%%;height:%%?80rpx?%%;float:left;display:inline-block}.gen_view_list .item .item-left .img{width:%%?80rpx?%%;height:%%?80rpx?%%;position:inherit}.gen_view_list .item .item-left .name-mobile{height:%%?80rpx?%%;width:70%}.gen_view_list .item .item-left .name-mobile .gen-nickname{width:100%;height:%%?45rpx?%%;line-height:%%?45rpx?%%}.gen_view_list .item .item-left .name-mobile .gen-mobile{width:100%;font-size:%%?28rpx?%%;height:%%?45rpx?%%;line-height:%%?45rpx?%%}.gen_view_list .item .item-right .level{width:100%;height:%%?45rpx?%%;line-height:%%?45rpx?%%;text-align:right;padding-right:%%?30rpx?%%}.gen_view_list .item .item-right .time{width:100%;height:%%?45rpx?%%;line-height:%%?45rpx?%%;text-align:right;padding-right:%%?30rpx?%%}@code-separator-line:__wxRoute = "pages/ucenter/addGenUser/addGenUser";__wxRouteBegin = true;
define("pages/ucenter/addGenUser/addGenUser.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');

var app = getApp();

var lv_maps = {
    1 : '普通店铺',
    2 : '铜级店铺',
    3 : '银级店铺',
    4 : '金级店铺',
    5 : '导师店铺',
    6 : '导师店铺',
    7 : '导师店铺',
};

var wx_share_tmp = require('../../../lib/wx/jweixin-1.0.0.js');

Page({
    data: {
      gen_count: 0,
      mobile: null,
      gen_detail: [],
      Host: api.Host,
      add_partner: false,
      scan_img: 'static/h5/static/images/login/logo.png'
    },


    onLoad: function () {
      this.getGenCount()
      this.GetScanImg()
     if (app.global.user.show_invite_img){
          this.setData({
              add_partner: true
          })
      }
      // this.getInviteInfo()
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
    getGenCount: function(){
        wx.showLoading({
            title: '加载中...',
        });
        let that = this;
        util.request(api.GenCount).then(function(res){

            for(var i=0; i<res.detail.length; i++){
                // if(!res.detail[i]['image']){
                //     res.detail[i]['image'] = api.Host + '/static/h5/static/images/user/avatar.png'
                // }
                if (res.detail[i]['image'] && !res.detail[i]['image'].startsWith('http://')) {
                    res.detail[i]['image'] = api.Host + res.detail[i]['image'];
                }
                if (!res.detail[i].nickname){
                    res.detail[i].nickname = '樱桃会员'
                }
                res.detail[i].lv = lv_maps[res.detail[i].lv]
                res.detail[i].add_prev_gen_date = res.detail[i].add_prev_gen_date.slice(0,10)
            }
            that.setData({
                gen_count:res.count,
                gen_detail: res.detail
            });
            wx.hideLoading();
        })
    },
    bindinputmobile: function(e){
        this.setData({
          mobile: e.detail.value
        });
    },
    toInvite: function(){
        var mobile = this.data.mobile;
        if(!mobile){
            util.showErrorToast('请输入被邀请人的手机号');
            return
        };
        let that = this;
        util.request(api.AddGenUser.replace(/{mobile}/, mobile), {}, 'POST').then(function(res){
            if(res.errno === 0){
                that.getGenCount()
                wx.showToast({
                  title: '添加成功'
                });
            }else {
                util.showErrorToast(res.errmsg);
            }
        })
    },

    getInviteInfo: function(){
        let that = this
        util.request(api.handleInvite, {}, 'GET').then(function(res){
            if(res['code'] == 1){
                wx.showModal({
                    title: '提示',
                    content: res.nickname + '手机号' + res.mobile + '邀请你为众创伙伴？',
                    success: function(res) {
                        if (res.confirm) {
                            var status = 'agree'
                            that.handleInvite(status)
                        } else if (res.cancel) {
                            var status = 'refuse'
                            that.handleInvite(status)
                        }
                    }
                })
            }
        })

    },
    handleInvite: function(status){
        util.request(api.handleInvite, {'status': status}, 'POST').then(function(res){
            wx.showToast({
                title: res.desc,
                icon: 'success'
            })
        })
    },
    GetScanImg: function(){
        let that =this
        util.request(api.GetScanImg, {}, 'GET').then(function(res){
            if(res['errno'] == 0){
                that.setData({
                    scan_img: res.data
                })
                that.share_qrcode()
            }
        })
    },
    share_qrcode: function(){
        let that = this
        util.request(api.WxConfigSign, {url:(that.data.Host+'/static/h5/index.html')}, 'GET').then(function(res){
            if(res.code === 0){
                wx_share.config ({
                    debug : false,    // true:调试时候弹窗
                    appId : res.data.appid,  // 微信appid
                    timestamp : res.data.timestamp, // 时间戳
                    nonceStr : res.data.noncestr,  // 随机字符串
                    signature : res.data.sign, // 签名
                    jsApiList : [
                        // 所有要调用的 API 都要加到这个列表中
                        'onMenuShareTimeline',       // 分享到朋友圈接口
                        'onMenuShareAppMessage',  //  分享到朋友接口
                        'onMenuShareQQ',         // 分享到QQ接口
                        'onMenuShareWeibo'      // 分享到微博接口
                    ]
                });
                // 微信分享的数据

                var shareData = {
                    "imgUrl" : (app.global.user.avatar || (that.data.Host+'/static/images/user/avatar.png')),    // 分享显示的缩略图地址
                    // "link" : (that.data.Host+'/static/h5/index.html#!pages/ucenter/addGenUser/shareQrcode/shareQrcode?'+'profile_openid='+app.global.user.profile_openid),    // 分享地址
                    // "link" : (that.data.Host+'/static/h5/index.html#!pages/ucenter/addGenUser/shareQrcode/shareQrcode?scan_img='+that.data.Host + that.data.scan_img),
                    "link" : (that.data.Host+'/accounts/share-qrcode/?img_url='+that.data.Host + that.data.scan_img),
                    "desc" : '点开链接扫码',   // 分享描述
                    "title" : (app.global.user.phonenumber + '邀请您成为众创伙伴'),   // 分享标题
                    success : function () {
                           // 分享成功可以做相应的数据处理

                          //alert("分享成功"); }
                   }
               }
               wx_share.ready(function () {
                       wx_share.onMenuShareTimeline (shareData);
                       wx_share.onMenuShareAppMessage (shareData);
                       wx_share.onMenuShareQQ (shareData);
                       wx_share.onMenuShareWeibo (shareData);
                });

                wx_share.error(function(res){
                     // config信息验证失败会执行error函数，如签名过期导致验证失败，
                    // 具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，
                     //对于SPA可以在这里更新签名。
                    alert("好像出错了！！");
                });

            }else {
                wx_share.showToast({
                    title: res['desc'],
                    duration: 1000
                });
                return;
            }
        })
    },
})

});require("pages/ucenter/addGenUser/addGenUser.js")@code-separator-line:["div","view","navigator","image"]