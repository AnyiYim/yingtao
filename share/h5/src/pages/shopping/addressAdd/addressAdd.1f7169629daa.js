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
    Z([3, 'add-address']);Z([3, 'add-form']);Z([3, 'form-item']);Z([3, 'bindinputName']);Z([3, 'input']);Z([3, '姓名']);Z([[6],[[7],[3, "address"]],[3, "full_name"]]);Z([3, 'bindinputMobile']);Z([3, '手机号码']);Z([[6],[[7],[3, "address"]],[3, "phone_number"]]);Z([3, 'chooseRegion']);Z([3, 'true']);Z([3, '省份、城市、区县']);Z([[6],[[7],[3, "address"]],[3, "line4"]]);Z([3, 'blurFocus']);Z([3, 'getfocus']);Z([3, 'bindinputAddress']);Z([3, '详细地址, 如街道、楼盘号等']);Z([[6],[[7],[3, "address"]],[3, "line1"]]);Z([3, 'form-default']);Z([3, 'bindIsDefault']);Z([a, [3, 'default-input '],[[2,'?:'],[[2, "=="], [[6],[[7],[3, "address"]],[3, "is_default_for_shipping"]], [1, 1]],[1, "selected"],[1, ""]]]);Z([3, '设为默认地址']);Z([a, [3, 'btns '],[[2,'?:'],[[2, "=="], [[7],[3, "btnsite"]], [1, "options0"]],[1, "opcity-btn"],[1, ""]]]);Z([3, 'cancelAddress']);Z([3, 'cannel']);Z([3, '取消']);Z([3, 'saveAddress']);Z([3, 'save']);Z([3, '保存']);Z([[7],[3, "openSelectRegion"]]);Z([3, 'region-select']);Z([3, 'hd']);Z([3, 'region-selected']);Z([[7],[3, "selectRegionList"]]);Z([[6],[[7],[3, "item"]],[3, "id"]]);Z([3, 'selectRegionType']);Z([a, [3, 'item '],[[2,'?:'],[[2, "=="], [[6],[[7],[3, "item"]],[3, "id"]], [1, 0]],[1, "disabled"],[1, ""]],[3, ' '],[[2,'?:'],[[2, "==="], [[2, "-"], [[7],[3, "regionType"]], [1, 1]], [[7],[3, "index"]]],[1, "selected"],[1, ""]]]);Z([[7],[3, "index"]]);Z([a, [[6],[[7],[3, "item"]],[3, "name"]]]);Z([3, 'doneSelectRegion']);Z([a, [3, 'done '],[[2,'?:'],[[7],[3, "selectRegionDone"]],[1, ""],[1, "disabled"]]]);Z([3, '确定']);Z([3, 'bd']);Z([3, 'region-list']);Z([[7],[3, "regionList"]]);Z([3, 'selectRegion']);Z([a, [3, 'item '],[[2,'?:'],[[6],[[7],[3, "item"]],[3, "selected"]],[1, "selected"],[1, ""]]]);Z([3, 'cancelSelectRegion']);Z([3, 'bg-mask']);
  })(z);d_["./pages/shopping/addressAdd/addressAdd.wxml"] = {};
  var m0=function(e,s,r,gg){
    var oyN = _n("view");_r(oyN, 'class', 0, e, s, gg);var ozN = _n("view");_r(ozN, 'class', 1, e, s, gg);var o_N = _n("view");_r(o_N, 'class', 2, e, s, gg);var oAO = _m( "input", ["bindinput", 3,"class", 1,"placeholder", 2,"value", 3], e, s, gg);_(o_N,oAO);_(ozN,o_N);var oBO = _n("view");_r(oBO, 'class', 2, e, s, gg);var oCO = _m( "input", ["class", 4,"bindinput", 3,"placeholder", 4,"value", 5], e, s, gg);_(oBO,oCO);_(ozN,oBO);var oDO = _n("view");_r(oDO, 'class', 2, e, s, gg);var oEO = _m( "input", ["class", 4,"bindtap", 6,"disabled", 7,"placeholder", 8,"value", 9], e, s, gg);_(oDO,oEO);_(ozN,oDO);var oFO = _n("view");_r(oFO, 'class', 2, e, s, gg);var oGO = _m( "input", ["class", 4,"bindblur", 10,"bindfocus", 11,"bindinput", 12,"placeholder", 13,"value", 14], e, s, gg);_(oFO,oGO);_(ozN,oFO);var oHO = _n("view");_r(oHO, 'class', 19, e, s, gg);var oIO = _m( "text", ["bindtap", 20,"class", 1], e, s, gg);var oJO = _o(22, e, s, gg);_(oIO,oJO);_(oHO,oIO);_(ozN,oHO);_(oyN,ozN);var oKO = _n("view");_r(oKO, 'class', 23, e, s, gg);var oLO = _m( "button", ["bindtap", 24,"class", 1], e, s, gg);var oMO = _o(26, e, s, gg);_(oLO,oMO);_(oKO,oLO);var oNO = _m( "button", ["bindtap", 27,"class", 1], e, s, gg);var oOO = _o(29, e, s, gg);_(oNO,oOO);_(oKO,oNO);_(oyN,oKO);var oPO = _v();
      if (_o(30, e, s, gg)) {
        oPO.wxVkey = 1;var oQO = _n("view");_r(oQO, 'class', 31, e, s, gg);var oSO = _n("view");_r(oSO, 'class', 32, e, s, gg);var oTO = _n("view");_r(oTO, 'class', 33, e, s, gg);var oUO = _v();var oVO = function(oZO,oYO,oXO,gg){var oWO = _m( "view", ["bindtap", 36,"class", 1,"data-region-type-index", 2], oZO, oYO, gg);var obO = _o(39, oZO, oYO, gg);_(oWO,obO);_(oXO, oWO);return oXO;};_2(34, oVO, e, s, gg, oUO, "item", "index", '{{item.id}}');_(oTO,oUO);_(oSO,oTO);var ocO = _m( "view", ["bindtap", 40,"class", 1], e, s, gg);var odO = _o(42, e, s, gg);_(ocO,odO);_(oSO,ocO);_(oQO,oSO);var oeO = _n("view");_r(oeO, 'class', 43, e, s, gg);var ofO = _n("view");_r(ofO, 'class', 44, e, s, gg);var ogO = _v();var ohO = function(olO,okO,ojO,gg){var oiO = _m( "view", ["data-region-index", 38,"bindtap", 8,"class", 9], olO, okO, gg);var onO = _o(39, olO, okO, gg);_(oiO,onO);_(ojO, oiO);return ojO;};_2(45, ohO, e, s, gg, ogO, "item", "index", '{{item.id}}');_(ofO,ogO);_(oeO,ofO);_(oQO,oeO);_(oPO, oQO);
      } _(oyN,oPO);_(r,oyN);var ooO = _v();
      if (_o(30, e, s, gg)) {
        ooO.wxVkey = 1;var opO = _m( "view", ["bindtap", 48,"class", 1], e, s, gg);_(ooO, opO);
      } _(r,ooO);
    return r;
  };
        e_["./pages/shopping/addressAdd/addressAdd.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:body{height:100%;background:#f4f4f4}.add-address .add-form{background:#fff;width:100%;height:auto;overflow:hidden}.add-address .form-item{height:%%?116rpx?%%;padding-left:%%?31.25rpx?%%;border-bottom:1px solid #d9d9d9;display:flex;align-items:center;padding-right:%%?31.25rpx?%%}.add-address .input{flex:1;height:%%?44rpx?%%;line-height:%%?44rpx?%%;overflow:hidden}.add-address .form-default{border-bottom:1px solid #d9d9d9;height:%%?96rpx?%%;background:#fafafa;padding-top:%%?28rpx?%%;font-size:%%?28rpx?%%}.default-input{margin:0 auto;display:block;width:%%?240rpx?%%;height:%%?40rpx?%%;padding-left:%%?50rpx?%%;line-height:%%?40rpx?%%;background:url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/checkbox-sed825af9d3-a6b8540d42.png) %%?1rpx?%% %%?-448rpx?%% no-repeat;background-size:%%?38rpx?%% %%?486rpx?%%;font-size:%%?28rpx?%%}.default-input.selected{background:url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/checkbox-sed825af9d3-a6b8540d42.png) 0 %%?-192rpx?%% no-repeat;background-size:%%?38rpx?%% %%?486rpx?%%}.add-address .btns{position:fixed;bottom:0;left:0;overflow:hidden;display:flex;height:%%?100rpx?%%;width:100%}.add-address .cannel,.add-address .save{flex:1;height:%%?100rpx?%%;text-align:center;line-height:%%?100rpx?%%;font-size:%%?28rpx?%%;color:#fff;border:none;border-radius:0}.add-address .cannel{background:#333}.add-address .save{background:#b4282d}.region-select{width:100%;height:%%?600rpx?%%;background:#fff;position:fixed;z-index:10;left:0;bottom:0}.region-select .hd{height:%%?108rpx?%%;width:100%;border-bottom:1px solid #f4f4f4;padding:%%?46rpx?%% %%?30rpx?%% 0 %%?30rpx?%%}.region-select .region-selected{float:left;height:%%?60rpx?%%;display:flex}.region-select .region-selected .item{max-width:%%?140rpx?%%;margin-right:%%?30rpx?%%;text-align:left;line-height:%%?60rpx?%%;height:100%;color:#333;font-size:%%?28rpx?%%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.region-select .region-selected .item.disabled{color:#999}.region-select .region-selected .item.selected{color:#b4282d}.region-select .done{float:right;height:%%?60rpx?%%;width:%%?60rpx?%%;border:none;background:#fff;line-height:%%?60rpx?%%;text-align:center;color:#333;font-size:%%?28rpx?%%}.region-select .done.disabled{color:#999}.region-select .bd{height:%%?492rpx?%%;width:100%;padding:0 %%?30rpx?%%;overflow:scroll}.region-select .region-list{height:auto;overflow:scroll}.region-select .region-list .item{width:100%;height:%%?104rpx?%%;line-height:%%?104rpx?%%;text-align:left;color:#333;font-size:%%?28rpx?%%}.region-select .region-list .item.selected{color:#b4282d}.bg-mask{height:100%;width:100%;background:rgba(0,0,0,.4);position:fixed;top:42px;left:0;z-index:8}.opcity-btn{opacity:0}@code-separator-line:__wxRoute = "pages/shopping/addressAdd/addressAdd";__wxRouteBegin = true;
define("pages/shopping/addressAdd/addressAdd.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var app = getApp();
Page({
  data: {
    address: {
        id:0,
        province_id: 0,
        city_id: 0,
        district_id: 0,
        line1: '',
        line4:'',
        // full_region: '',
        full_name: '',
        phone_number: '',
        is_default_for_shipping: 0,
    },
    addressId: 0,
    openSelectRegion: false,
    selectRegionList: [
      { id: 0, name: '省份', parent_id: 1, type: 1 },
      { id: 0, name: '城市', parent_id: 1, type: 2 },
      { id: 0, name: '区县', parent_id: 1, type: 3 }
    ],
    regionType: 1,
    regionList: [],
    selectRegionDone: false,
    btnsite: 'options1',
  },
  bindinputMobile(event) {
    let address = this.data.address;
    address.phone_number = event.detail.value;
    // this.setData({
    //   address: address
    // });
    return {
        address:address,
        cursor: event.detail.cursor
    }
  },
  bindinputName(event) {
    let address = this.data.address;
    address.full_name = event.detail.value;
    return{
      address: address,
      cursor: event.detail.cursor

    };
  },
  bindinputAddress (event){
    let address = this.data.address;
    address.line1 = event.detail.value;
    // this.setData({
    //   address: address
    // });
    return {
        address:address,
        cursor: event.detail.cursor
    }
  },
  bindIsDefault(){
    let address = this.data.address;
    address.is_default_for_shipping = !address.is_default_for_shipping;
    this.setData({
      address: address
    });
  },

  getfocus: function(e){
      this.setData({
         btnsite: 'options0'
      })
  },
  blurFocus: function(e){
      this.setData({
         btnsite: 'options1'
      })
  },
  getAddressDetail() {
    let that = this;
    util.request(api.AddressDetail.replace(/{}/,that.data.addressId)).then(function (res) {
        var data = res.data
        /////////////////
        // var full_name = data.line4.split('-')
        // var province_name = full_name[0]
        // var city_name = full_name[1]
        // var district_name = full_name[2]
        var full_code = data.address_code.split('_')
        var province_id = Number(full_code[0]);
        var city_id = Number(full_code[1]);
        var district_id = Number(full_code[2]);
        data['province_id'] = province_id
        data['city_id'] = city_id
        data['district_id'] = district_id
        ///////////////
        if (res.errno === 0) {
          that.setData({
            address: res.data
          });
        }
    });
  },
  setRegionDoneStatus() {
    let that = this;
    let doneStatus = that.data.selectRegionList.every(item => {
      return item.id != 0;
    });

    that.setData({
      selectRegionDone: doneStatus
    })

  },
  chooseRegion() {
    let that = this;
    this.setData({
      openSelectRegion: !this.data.openSelectRegion
    });

    //设置区域选择数据
    let address = this.data.address;
    if (address.province_id > 0 && address.city_id > 0 && address.district_id > 0) {
      let selectRegionList = this.data.selectRegionList;
      var full_name = address.line4.split('-')
      var province_name = full_name[0]
      var city_name = full_name[1]
      var district_name = full_name[2]
      selectRegionList[0].id = address.province_id;
      selectRegionList[0].name = province_name;
      selectRegionList[0].parent_id = 1;

      selectRegionList[1].id = address.city_id;
      selectRegionList[1].name = city_name;
      selectRegionList[1].parent_id = address.province_id;

      selectRegionList[2].id = address.district_id;
      selectRegionList[2].name = district_name;
      selectRegionList[2].parent_id = address.city_id;

      this.setData({
        selectRegionList: selectRegionList,
        regionType: 3
      });
      this.getRegionList(address.city_id);
    } else {
      this.setData({
        selectRegionList: [
          { id: 0, name: '省份', parent_id: 1, type: 1 },
          { id: 0, name: '城市', parent_id: 1, type: 2 },
          { id: 0, name: '区县', parent_id: 1, type: 3 }
        ],
        regionType: 1
      })
      this.getRegionList();
    }

    this.setRegionDoneStatus();

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    if (options.id) {
      this.setData({
        addressId: options.id
      });
      this.getAddressDetail();
    }

    this.getRegionList();

  },
  onReady: function () {

  },
  selectRegionType(event) {
    let that = this;
    let regionTypeIndex = event.target.dataset.regionTypeIndex;
    let selectRegionList = that.data.selectRegionList;

    //判断是否可点击
    if (regionTypeIndex + 1 == this.data.regionType || (regionTypeIndex - 1 >= 0 && selectRegionList[regionTypeIndex-1].id <= 0)) {
      return false;
    }

    this.setData({
      regionType: regionTypeIndex + 1
    })
    regionTypeIndex = regionTypeIndex - 1
    let selectRegionItem = selectRegionList[regionTypeIndex];

    if(selectRegionItem){
        this.getRegionList(selectRegionItem.id);
    }else {
        this.getRegionList();
    }

    this.setRegionDoneStatus();

  },
  selectRegion(event) {
    let that = this;
    let regionIndex = event.target.dataset.regionIndex;
    let regionItem = this.data.regionList[regionIndex];
    let regionType = regionItem.depth;
    let selectRegionList = this.data.selectRegionList;
    selectRegionList[regionType - 1] = regionItem;


    if (regionType != 3) {
      this.setData({
        selectRegionList: selectRegionList,
        regionType: regionType + 1
      })
      this.getRegionList(regionItem.id);
    } else {
      this.setData({
        selectRegionList: selectRegionList
      })
    }

    //重置下级区域为空
    selectRegionList.map((item, index) => {
      if (index > regionType - 1) {
        item.id = 0;
        item.name = index == 1 ? '城市' : '区县';
        item.parent_id = 0;
      }
      return item;
    });
    this.setData({
      selectRegionList: selectRegionList
    })

    that.setData({
      regionList: that.data.regionList.map(item => {

        //标记已选择的
        if (that.data.regionType == item.type && that.data.selectRegionList[that.data.regionType - 1].id == item.id) {
          item.selected = true;
        } else {
          item.selected = false;
        }

        return item;
      })
    });

    this.setRegionDoneStatus();

  },
  doneSelectRegion() {
    if (this.data.selectRegionDone === false) {
      return false;
    }

    let address = this.data.address;
    let selectRegionList = this.data.selectRegionList;
    address.province_id = selectRegionList[0].id;
    address.city_id = selectRegionList[1].id;
    address.district_id = selectRegionList[2].id;
    address.province_name = selectRegionList[0].name;
    address.city_name = selectRegionList[1].name;
    address.district_name = selectRegionList[2].name;
    address.line4 = selectRegionList.map(item => {
      return item.name;
  }).join('-');
    address.address_code = selectRegionList.map(item => {
      return item.id;
  }).join('_');

    this.setData({
      address: address,
      openSelectRegion: false
    });

  },
  cancelSelectRegion() {
    this.setData({
      openSelectRegion: false,
      regionType: this.data.regionDoneStatus ? 3 : 1
    });

  },
  getRegionList(regionId) {
    let that = this;
    let regionType = that.data.regionType;
    if(regionId){
        var url = api.RegionList+regionId+'/'
    }else {
        var url = api.RegionList
    }
    util.request(url).then(function (res) {

      if (res.errno === 0) {
        that.setData({
          regionList: res.data.map(item => {

            //标记已选择的
            if (regionType == item.type && that.data.selectRegionList[regionType - 1].id == item.id) {
              item.selected = true;
            } else {
              item.selected = false;
            }

            return item;
          })
        });
      }
    });
  },
  cancelAddress(){
    wx.reLaunch({
      url: '/pages/shopping/address/address',
    })
  },
  saveAddress(){
    let address = this.data.address;

    if (address.full_name == '') {
      util.showErrorToast('请输入姓名');

      return false;
    }

    if (address.phone_number == '') {
      util.showErrorToast('请输入手机号码');
      return false;
    }


    if (address.district_id == 0) {
      util.showErrorToast('请输入省市区');
      return false;
    }

    if (address.line1 == '') {
      util.showErrorToast('请输入详细地址');
      return false;
    }


    let that = this;
    if(address.id){
        var url = api.AddressUpdate.replace(/{}/, address.id)
    }else {
        var url = api.AddressCreate
    }
    util.request(url, {
        name: address.full_name,
        mobile: address.phone_number,
        province_id: address.province_id,
        city_id: address.city_id,
        district_id: address.district_id,
        address: address.line1,
        is_default: address.is_default_for_shipping,
    }, 'POST').then(function (res) {
      if (res.errno === 0) {
        // wx.navigateBack(1)
        wx.navigateTo({
          url: '/pages/shopping/address/address'
        })
      }else {
          util.showErrorToast(res.desc);
      }
    });

  },
  onShow: function () {
    // 页面显示

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  }
})

});require("pages/shopping/addressAdd/addressAdd.js")@code-separator-line:["div","view","input","text","button"]