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
    Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]]]);Z([[6],[[7],[3, "item"]],[3, "styleStr"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]],[3, '-video']]);Z([[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "src"]]);Z([3, 'wxParseImgLoad']);Z([3, 'wxParseImgTap']);Z([[6],[[7],[3, "item"]],[3, "from"]]);Z([[6],[[7],[3, "item"]],[3, "imgIndex"]]);Z([3, 'aspectFit']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "src"]]]);Z([a, [3, 'width:'],[[6],[[7],[3, "item"]],[3, "width"]],[3, 'px;height:'],[[6],[[7],[3, "item"]],[3, "height"]],[3, 'px;'],[[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "style"]]]);Z([3, 'WxEmojiView wxParse-inline']);Z([[6],[[7],[3, "item"]],[3, "textArray"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "node"]], [1, "text"]]);Z([[2,'?:'],[[2, "=="], [[6],[[7],[3, "item"]],[3, "text"]], [1, "\n"]],[1, "wxParse-hide"],[1, ""]]);Z([a, [[6],[[7],[3, "item"]],[3, "text"]]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "node"]], [1, "element"]]);Z([3, 'wxEmoji']);Z([a, [[6],[[7],[3, "item"]],[3, "baseSrc"]],[[6],[[7],[3, "item"]],[3, "text"]]]);Z([[7],[3, "wxParseData"]]);Z([3, 'wxParse0']);Z([[8], "item", [[7],[3, "item"]]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "button"]]);Z([3, 'mini']);Z([3, 'default']);Z([[6],[[7],[3, "item"]],[3, "nodes"]]);Z([3, 'item']);Z([3, 'wxParse1']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "li"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-inner']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-text']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-circle']]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "video"]]);Z([3, 'wxParseVideo']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "img"]]);Z([3, 'wxParseImg']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "a"]]);Z([3, 'wxParseTagATap']);Z([a, [3, 'wxParse-inline '],[[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]]]);Z([[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "href"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "table"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tagType"]], [1, "block"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tagType"]]]);Z([3, 'WxEmojiView']);Z([3, 'wxParse2']);Z([3, 'wxParse3']);Z([3, 'wxParse4']);Z([3, 'wxParse5']);Z([3, 'wxParse6']);Z([3, 'wxParse7']);Z([3, 'wxParse8']);Z([3, 'wxParse9']);Z([3, 'wxParse10']);Z([3, 'wxParse11']);Z([3, 'wxParse12']);Z([3, 'container']);Z([3, 'scroll']);Z([3, 'list']);Z([[7],[3, "toView"]]);Z([3, 'true']);Z([3, 'goodsimgs']);Z([3, '1000']);Z([3, 'maodian']);Z([3, '3000']);Z([[7],[3, "gallery"]]);Z([[6],[[7],[3, "item"]],[3, "id"]]);Z([3, 'cover']);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "item"]],[3, "original"]]]);Z([3, 'goods-info']);Z([3, 'c']);Z([3, 'name']);Z([a, [[6],[[7],[3, "goods"]],[3, "title"]]]);Z([3, 'wx_share']);Z([3, 'share-icon']);Z([3, 'btn']);Z([3, '/static/images/first_page/nav_share@2x.png']);Z([3, 'desc']);Z([3, 'price']);Z([a, [3, '￥'],[[7],[3, "price_range"]]]);Z([[6],[[7],[3, "brand"]],[3, "name"]]);Z([3, 'brand']);Z([a, [3, '../brandDetail/brandDetail?id\x3d'],[[6],[[7],[3, "brand"]],[3, "brandId"]]]);Z([3, 'gray-fill']);Z([3, 'switchAttrPop']);Z([3, 'section-nav section-attr']);Z([3, 't']);Z([3, '请选择规格数量']);Z([3, 'i']);Z([3, '/static/images/first_page/details_right_icon.png']);Z([3, 'section-nav section-attr ']);Z([3, '运费： 免运费']);Z([3, 't-server-text']);Z([3, '服务： ']);Z([3, 't-tip-text']);Z([3, '七天无理由退换货，48小时快速退款']);Z([3, 'more-details']);Z([3, '更多详情']);Z([3, 'details-box']);Z([3, 'details-tip']);Z([3, 'details-border']);Z([3, 'details-content']);Z([3, 'goods-desc']);Z([3, 'wxParse']);Z([[8], "wxParseData", [[6],[[7],[3, "description"]],[3, "nodes"]]]);Z([[7],[3, "detailsGallery"]]);Z([3, 'goods-item']);Z([3, 'detail-img']);Z([3, 'widthFix']);Z([3, 'jumpTo']);Z([3, 'no-more-data']);Z([3, ' 已经到底了 ']);Z([a, [3, 'nodata-jump '],[[2,'?:'],[[2, "=="], [[7],[3, "jumpTobtn"]], [1, "show"]],[1, "jumpTobtn"],[1, ""]]]);Z([3, '回到顶部']);Z([[2, ">"], [[6],[[7],[3, "comment"]],[3, "count"]], [1, 0]]);Z([3, 'comments']);Z([3, 'h']);Z([a, [3, '../comment/comment?valueId\x3d'],[[6],[[7],[3, "goods"]],[3, "id"]],[3, '\x26typeId\x3d0']]);Z([a, [3, '评价('],[[2,'?:'],[[2, ">"], [[6],[[7],[3, "comment"]],[3, "count"]], [1, 999]],[1, "999+"],[[6],[[7],[3, "comment"]],[3, "count"]]],[3, ')']]);Z([3, '查看全部']);Z([3, 'b']);Z([3, 'info']);Z([3, 'user']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "avatar"]]]);Z([a, [[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "nickname"]]]);Z([3, 'time']);Z([a, [[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "add_time"]]]);Z([3, 'content']);Z([a, [3, '\n          '],[[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "content"]],[3, '\n        ']]);Z([[2, ">"], [[6],[[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "pic_list"]],[3, "length"]], [1, 0]]);Z([3, 'imgs']);Z([[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "pic_list"]]);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "item"]],[3, "pic_url"]]]);Z([3, 'detail']);Z([[6],[[7],[3, "goods"]],[3, "pic_list"]]);Z([[2, ">"], [[6],[[7],[3, "relatedGoods"]],[3, "length"]], [1, 0]]);Z([3, 'related-goods']);Z([3, 'line']);Z([3, 'title']);Z([3, '大家都在看']);Z([[7],[3, "relatedGoods"]]);Z([a, [3, '/pages/goods/goods?id\x3d'],[[6],[[7],[3, "item"]],[3, "id"]]]);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "item"]],[3, "list_pic_url"]]]);Z([a, [[6],[[7],[3, "item"]],[3, "name"]]]);Z([a, [3, '￥'],[[6],[[7],[3, "item"]],[3, "retail_price"]]]);Z([3, 'attr-pop-box']);Z([[2, "!"], [[7],[3, "openAttr"]]]);Z([3, 'attr-pop']);Z([3, 'closeAttr']);Z([3, 'close']);Z([3, 'icon']);Z([3, '/static/images/icon_close.png']);Z([3, 'img-info']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[7],[3, "gallery"]],[1, 0]],[3, "original"]]]);Z([3, 'p']);Z([a, [3, '价格：￥'],[[7],[3, "current_price"]]]);Z([[2, ">"], [[6],[[7],[3, "specificationList"]],[3, "length"]], [1, 0]]);Z([3, 'a']);Z([a, [3, '已选择：'],[[7],[3, "checkedSpecText"]]]);Z([3, 'spec-con']);Z([[7],[3, "specificationList"]]);Z([3, 'select_cate_value']);Z([a, [3, 'spec-item value '],[[2,'?:'],[[6],[[7],[3, "item"]],[3, "checked"]],[1, "selected"],[1, ""]]]);Z([a, [[6],[[7],[3, "item"]],[3, "cate_value"]]]);Z([3, 'number-item']);Z([3, '数量']);Z([3, 'selnum']);Z([3, 'cutNumber']);Z([3, 'cut']);Z([3, '-']);Z([3, 'number']);Z([[7],[3, "number"]]);Z([3, 'addNumber']);Z([3, 'add']);Z([3, '+']);Z([3, 'bottom-second-btn']);Z([3, 'bsb-left']);Z([3, '\x26nbsp;']);Z([3, 'goCreateOrder']);Z([3, 'bsb-right']);Z([3, '确认']);Z([3, 'bottom-btn']);Z([3, 'l l-customserver']);Z([3, 'l-imgaes']);Z([3, '/static/images/first_page/details_customeservice.png']);Z([3, 'l-text']);Z([3, '客服']);Z([3, 'addCannelCollect']);Z([3, 'l l-collect']);Z([[7],[3, "collectBackImage"]]);Z([3, '收藏']);Z([3, 'l l-cart']);Z([3, 'cart-count']);Z([a, [[7],[3, "cartGoodsCount"]]]);Z([3, 'openCartPage']);Z([3, '/static/images/first_page/details_shoppingcar.png']);Z([3, '购物车']);Z([3, 'addToCart']);Z([3, 'r']);Z([3, '加入购物车']);Z([3, 'buy']);Z([3, '立即购买']);
  })(z);d_["./lib/wxParse/wxParse.wxml"] = {};d_["./lib/wxParse/wxParse.wxml"]["wxParseVideo"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParseVideo'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var ocKC = _m( "view", ["class", 0,"style", 1], e, s, gg);var odKC = _m( "video", ["class", 2,"src", 1], e, s, gg);_(ocKC,odKC);_(r,ocKC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };d_["./lib/wxParse/wxParse.wxml"]["wxParseImg"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParseImg'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var ofKC = _m( "image", ["class", 0,"data-src", 3,"bindload", 1,"bindtap", 2,"data-from", 3,"data-idx", 4,"mode", 5,"src", 6,"style", 7], e, s, gg);_(r,ofKC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };d_["./lib/wxParse/wxParse.wxml"]["WxEmojiView"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:WxEmojiView'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var ohKC = _m( "view", ["style", 1,"class", 10], e, s, gg);var oiKC = _v();var ojKC = function(onKC,omKC,olKC,gg){var opKC = _v();
      if (_o(13, onKC, omKC, gg)) {
        opKC.wxVkey = 1;var osKC = _o(15, onKC, omKC, gg);_(opKC,osKC);
      }else if (_o(16, onKC, omKC, gg)) {
        opKC.wxVkey = 2;var ovKC = _m( "image", ["class", 17,"src", 1], e, s, gg);_(opKC,ovKC);
      } _(olKC,opKC);return olKC;};_2(12, ojKC, e, s, gg, oiKC, "item", "index", '');_(ohKC,oiKC);_(r,ohKC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };d_["./lib/wxParse/wxParse.wxml"]["wxParse"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParse'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var oxKC = _v();var oyKC = function(oBLC,oALC,o_KC,gg){var oDLC = _v();
       var oELC = _o(20, oBLC, oALC, gg);
       var oGLC = _gd('./lib/wxParse/wxParse.wxml', oELC, e_, d_);
       if (oGLC) {
         var oFLC = _1(21,oBLC,oALC,gg);
         oGLC(oFLC,oFLC,oDLC, gg);
       } else _w(oELC, './lib/wxParse/wxParse.wxml', 0, 0);_(o_KC,oDLC);return o_KC;};_2(19, oyKC, e, s, gg, oxKC, "item", "index", '');_(r,oxKC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };d_["./lib/wxParse/wxParse.wxml"]["wxParse0"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParse0'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var oILC = _v();
      if (_o(16, e, s, gg)) {
        oILC.wxVkey = 1;var oLLC = _v();
      if (_o(22, e, s, gg)) {
        oLLC.wxVkey = 1;var oOLC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oPLC = _v();var oQLC = function(oULC,oTLC,oSLC,gg){var oWLC = _v();
       var oXLC = _o(27, oULC, oTLC, gg);
       var oZLC = _gd('./lib/wxParse/wxParse.wxml', oXLC, e_, d_);
       if (oZLC) {
         var oYLC = _1(21,oULC,oTLC,gg);
         oZLC(oYLC,oYLC,oWLC, gg);
       } else _w(oXLC, './lib/wxParse/wxParse.wxml', 0, 0);_(oSLC,oWLC);return oSLC;};_2(25, oQLC, e, s, gg, oPLC, "item", "index", '');_(oOLC,oPLC);_(oLLC,oOLC);
      }else if (_o(28, e, s, gg)) {
        oLLC.wxVkey = 2;var ocLC = _n("view");_r(ocLC, 'class', 29, e, s, gg);var odLC = _n("view");_r(odLC, 'class', 30, e, s, gg);var oeLC = _n("view");_r(oeLC, 'class', 31, e, s, gg);var ofLC = _n("view");_r(ofLC, 'class', 32, e, s, gg);_(oeLC,ofLC);_(odLC,oeLC);var ogLC = _n("view");_r(ogLC, 'class', 31, e, s, gg);var ohLC = _v();var oiLC = function(omLC,olLC,okLC,gg){var ooLC = _v();
       var opLC = _o(27, omLC, olLC, gg);
       var orLC = _gd('./lib/wxParse/wxParse.wxml', opLC, e_, d_);
       if (orLC) {
         var oqLC = _1(21,omLC,olLC,gg);
         orLC(oqLC,oqLC,ooLC, gg);
       } else _w(opLC, './lib/wxParse/wxParse.wxml', 0, 0);_(okLC,ooLC);return okLC;};_2(25, oiLC, e, s, gg, ohLC, "item", "index", '');_(ogLC,ohLC);_(odLC,ogLC);_(ocLC,odLC);_(oLLC,ocLC);
      }else if (_o(33, e, s, gg)) {
        oLLC.wxVkey = 3;var ouLC = _v();
       var ovLC = _o(34, e, s, gg);
       var oxLC = _gd('./lib/wxParse/wxParse.wxml', ovLC, e_, d_);
       if (oxLC) {
         var owLC = _1(21,e,s,gg);
         oxLC(owLC,owLC,ouLC, gg);
       } else _w(ovLC, './lib/wxParse/wxParse.wxml', 0, 0);_(oLLC,ouLC);
      }else if (_o(35, e, s, gg)) {
        oLLC.wxVkey = 4;var o_LC = _v();
       var oAMC = _o(36, e, s, gg);
       var oCMC = _gd('./lib/wxParse/wxParse.wxml', oAMC, e_, d_);
       if (oCMC) {
         var oBMC = _1(21,e,s,gg);
         oCMC(oBMC,oBMC,o_LC, gg);
       } else _w(oAMC, './lib/wxParse/wxParse.wxml', 0, 0);_(oLLC,o_LC);
      }else if (_o(37, e, s, gg)) {
        oLLC.wxVkey = 5;var oFMC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-c", 39], e, s, gg);var oGMC = _v();var oHMC = function(oLMC,oKMC,oJMC,gg){var oNMC = _v();
       var oOMC = _o(27, oLMC, oKMC, gg);
       var oQMC = _gd('./lib/wxParse/wxParse.wxml', oOMC, e_, d_);
       if (oQMC) {
         var oPMC = _1(21,oLMC,oKMC,gg);
         oQMC(oPMC,oPMC,oNMC, gg);
       } else _w(oOMC, './lib/wxParse/wxParse.wxml', 0, 0);_(oJMC,oNMC);return oJMC;};_2(25, oHMC, e, s, gg, oGMC, "item", "index", '');_(oFMC,oGMC);_(oLLC,oFMC);
      }else if (_o(41, e, s, gg)) {
        oLLC.wxVkey = 6;var oTMC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oUMC = _v();var oVMC = function(oZMC,oYMC,oXMC,gg){var obMC = _v();
       var ocMC = _o(27, oZMC, oYMC, gg);
       var oeMC = _gd('./lib/wxParse/wxParse.wxml', ocMC, e_, d_);
       if (oeMC) {
         var odMC = _1(21,oZMC,oYMC,gg);
         oeMC(odMC,odMC,obMC, gg);
       } else _w(ocMC, './lib/wxParse/wxParse.wxml', 0, 0);_(oXMC,obMC);return oXMC;};_2(25, oVMC, e, s, gg, oUMC, "item", "index", '');_(oTMC,oUMC);_(oLLC,oTMC);
      }else if (_o(42, e, s, gg)) {
        oLLC.wxVkey = 7;var ohMC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oiMC = _v();var ojMC = function(onMC,omMC,olMC,gg){var opMC = _v();
       var oqMC = _o(27, onMC, omMC, gg);
       var osMC = _gd('./lib/wxParse/wxParse.wxml', oqMC, e_, d_);
       if (osMC) {
         var orMC = _1(21,onMC,omMC,gg);
         osMC(orMC,orMC,opMC, gg);
       } else _w(oqMC, './lib/wxParse/wxParse.wxml', 0, 0);_(olMC,opMC);return olMC;};_2(25, ojMC, e, s, gg, oiMC, "item", "index", '');_(ohMC,oiMC);_(oLLC,ohMC);
      }else {
        oLLC.wxVkey = 8;var otMC = _m( "view", ["style", 1,"class", 42], e, s, gg);var ovMC = _v();var owMC = function(o_MC,ozMC,oyMC,gg){var oBNC = _v();
       var oCNC = _o(27, o_MC, ozMC, gg);
       var oENC = _gd('./lib/wxParse/wxParse.wxml', oCNC, e_, d_);
       if (oENC) {
         var oDNC = _1(21,o_MC,ozMC,gg);
         oENC(oDNC,oDNC,oBNC, gg);
       } else _w(oCNC, './lib/wxParse/wxParse.wxml', 0, 0);_(oyMC,oBNC);return oyMC;};_2(25, owMC, e, s, gg, ovMC, "item", "index", '');_(otMC,ovMC);_(oLLC, otMC);
      }_(oILC,oLLC);
      }else if (_o(13, e, s, gg)) {
        oILC.wxVkey = 2;var oHNC = _v();
       var oINC = _o(44, e, s, gg);
       var oKNC = _gd('./lib/wxParse/wxParse.wxml', oINC, e_, d_);
       if (oKNC) {
         var oJNC = _1(21,e,s,gg);
         oKNC(oJNC,oJNC,oHNC, gg);
       } else _w(oINC, './lib/wxParse/wxParse.wxml', 0, 0);_(oILC,oHNC);
      } _(r,oILC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };d_["./lib/wxParse/wxParse.wxml"]["wxParse1"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParse1'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var oMNC = _v();
      if (_o(16, e, s, gg)) {
        oMNC.wxVkey = 1;var oPNC = _v();
      if (_o(22, e, s, gg)) {
        oPNC.wxVkey = 1;var oSNC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oTNC = _v();var oUNC = function(oYNC,oXNC,oWNC,gg){var oaNC = _v();
       var obNC = _o(45, oYNC, oXNC, gg);
       var odNC = _gd('./lib/wxParse/wxParse.wxml', obNC, e_, d_);
       if (odNC) {
         var ocNC = _1(21,oYNC,oXNC,gg);
         odNC(ocNC,ocNC,oaNC, gg);
       } else _w(obNC, './lib/wxParse/wxParse.wxml', 0, 0);_(oWNC,oaNC);return oWNC;};_2(25, oUNC, e, s, gg, oTNC, "item", "index", '');_(oSNC,oTNC);_(oPNC,oSNC);
      }else if (_o(28, e, s, gg)) {
        oPNC.wxVkey = 2;var ogNC = _n("view");_r(ogNC, 'class', 29, e, s, gg);var ohNC = _n("view");_r(ohNC, 'class', 30, e, s, gg);var oiNC = _n("view");_r(oiNC, 'class', 31, e, s, gg);var ojNC = _n("view");_r(ojNC, 'class', 32, e, s, gg);_(oiNC,ojNC);_(ohNC,oiNC);var okNC = _n("view");_r(okNC, 'class', 31, e, s, gg);var olNC = _v();var omNC = function(oqNC,opNC,ooNC,gg){var osNC = _v();
       var otNC = _o(45, oqNC, opNC, gg);
       var ovNC = _gd('./lib/wxParse/wxParse.wxml', otNC, e_, d_);
       if (ovNC) {
         var ouNC = _1(21,oqNC,opNC,gg);
         ovNC(ouNC,ouNC,osNC, gg);
       } else _w(otNC, './lib/wxParse/wxParse.wxml', 0, 0);_(ooNC,osNC);return ooNC;};_2(25, omNC, e, s, gg, olNC, "item", "index", '');_(okNC,olNC);_(ohNC,okNC);_(ogNC,ohNC);_(oPNC,ogNC);
      }else if (_o(33, e, s, gg)) {
        oPNC.wxVkey = 3;var oyNC = _v();
       var ozNC = _o(34, e, s, gg);
       var oAOC = _gd('./lib/wxParse/wxParse.wxml', ozNC, e_, d_);
       if (oAOC) {
         var o_NC = _1(21,e,s,gg);
         oAOC(o_NC,o_NC,oyNC, gg);
       } else _w(ozNC, './lib/wxParse/wxParse.wxml', 0, 0);_(oPNC,oyNC);
      }else if (_o(35, e, s, gg)) {
        oPNC.wxVkey = 4;var oDOC = _v();
       var oEOC = _o(36, e, s, gg);
       var oGOC = _gd('./lib/wxParse/wxParse.wxml', oEOC, e_, d_);
       if (oGOC) {
         var oFOC = _1(21,e,s,gg);
         oGOC(oFOC,oFOC,oDOC, gg);
       } else _w(oEOC, './lib/wxParse/wxParse.wxml', 0, 0);_(oPNC,oDOC);
      }else if (_o(37, e, s, gg)) {
        oPNC.wxVkey = 5;var oJOC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oKOC = _v();var oLOC = function(oPOC,oOOC,oNOC,gg){var oROC = _v();
       var oSOC = _o(45, oPOC, oOOC, gg);
       var oUOC = _gd('./lib/wxParse/wxParse.wxml', oSOC, e_, d_);
       if (oUOC) {
         var oTOC = _1(21,oPOC,oOOC,gg);
         oUOC(oTOC,oTOC,oROC, gg);
       } else _w(oSOC, './lib/wxParse/wxParse.wxml', 0, 0);_(oNOC,oROC);return oNOC;};_2(25, oLOC, e, s, gg, oKOC, "item", "index", '');_(oJOC,oKOC);_(oPNC,oJOC);
      }else if (_o(42, e, s, gg)) {
        oPNC.wxVkey = 6;var oXOC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oYOC = _v();var oZOC = function(odOC,ocOC,obOC,gg){var ofOC = _v();
       var ogOC = _o(45, odOC, ocOC, gg);
       var oiOC = _gd('./lib/wxParse/wxParse.wxml', ogOC, e_, d_);
       if (oiOC) {
         var ohOC = _1(21,odOC,ocOC,gg);
         oiOC(ohOC,ohOC,ofOC, gg);
       } else _w(ogOC, './lib/wxParse/wxParse.wxml', 0, 0);_(obOC,ofOC);return obOC;};_2(25, oZOC, e, s, gg, oYOC, "item", "index", '');_(oXOC,oYOC);_(oPNC,oXOC);
      }else {
        oPNC.wxVkey = 7;var ojOC = _m( "view", ["style", 1,"class", 42], e, s, gg);var olOC = _v();var omOC = function(oqOC,opOC,ooOC,gg){var osOC = _v();
       var otOC = _o(45, oqOC, opOC, gg);
       var ovOC = _gd('./lib/wxParse/wxParse.wxml', otOC, e_, d_);
       if (ovOC) {
         var ouOC = _1(21,oqOC,opOC,gg);
         ovOC(ouOC,ouOC,osOC, gg);
       } else _w(otOC, './lib/wxParse/wxParse.wxml', 0, 0);_(ooOC,osOC);return ooOC;};_2(25, omOC, e, s, gg, olOC, "item", "index", '');_(ojOC,olOC);_(oPNC, ojOC);
      }_(oMNC,oPNC);
      }else if (_o(13, e, s, gg)) {
        oMNC.wxVkey = 2;var oyOC = _v();
       var ozOC = _o(44, e, s, gg);
       var oAPC = _gd('./lib/wxParse/wxParse.wxml', ozOC, e_, d_);
       if (oAPC) {
         var o_OC = _1(21,e,s,gg);
         oAPC(o_OC,o_OC,oyOC, gg);
       } else _w(ozOC, './lib/wxParse/wxParse.wxml', 0, 0);_(oMNC,oyOC);
      } _(r,oMNC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };d_["./lib/wxParse/wxParse.wxml"]["wxParse2"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParse2'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var oCPC = _v();
      if (_o(16, e, s, gg)) {
        oCPC.wxVkey = 1;var oFPC = _v();
      if (_o(22, e, s, gg)) {
        oFPC.wxVkey = 1;var oIPC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oJPC = _v();var oKPC = function(oOPC,oNPC,oMPC,gg){var oQPC = _v();
       var oRPC = _o(46, oOPC, oNPC, gg);
       var oTPC = _gd('./lib/wxParse/wxParse.wxml', oRPC, e_, d_);
       if (oTPC) {
         var oSPC = _1(21,oOPC,oNPC,gg);
         oTPC(oSPC,oSPC,oQPC, gg);
       } else _w(oRPC, './lib/wxParse/wxParse.wxml', 0, 0);_(oMPC,oQPC);return oMPC;};_2(25, oKPC, e, s, gg, oJPC, "item", "index", '');_(oIPC,oJPC);_(oFPC,oIPC);
      }else if (_o(28, e, s, gg)) {
        oFPC.wxVkey = 2;var oWPC = _n("view");_r(oWPC, 'class', 29, e, s, gg);var oXPC = _n("view");_r(oXPC, 'class', 30, e, s, gg);var oYPC = _n("view");_r(oYPC, 'class', 31, e, s, gg);var oZPC = _n("view");_r(oZPC, 'class', 32, e, s, gg);_(oYPC,oZPC);_(oXPC,oYPC);var oaPC = _n("view");_r(oaPC, 'class', 31, e, s, gg);var obPC = _v();var ocPC = function(ogPC,ofPC,oePC,gg){var oiPC = _v();
       var ojPC = _o(46, ogPC, ofPC, gg);
       var olPC = _gd('./lib/wxParse/wxParse.wxml', ojPC, e_, d_);
       if (olPC) {
         var okPC = _1(21,ogPC,ofPC,gg);
         olPC(okPC,okPC,oiPC, gg);
       } else _w(ojPC, './lib/wxParse/wxParse.wxml', 0, 0);_(oePC,oiPC);return oePC;};_2(25, ocPC, e, s, gg, obPC, "item", "index", '');_(oaPC,obPC);_(oXPC,oaPC);_(oWPC,oXPC);_(oFPC,oWPC);
      }else if (_o(33, e, s, gg)) {
        oFPC.wxVkey = 3;var ooPC = _v();
       var opPC = _o(34, e, s, gg);
       var orPC = _gd('./lib/wxParse/wxParse.wxml', opPC, e_, d_);
       if (orPC) {
         var oqPC = _1(21,e,s,gg);
         orPC(oqPC,oqPC,ooPC, gg);
       } else _w(opPC, './lib/wxParse/wxParse.wxml', 0, 0);_(oFPC,ooPC);
      }else if (_o(35, e, s, gg)) {
        oFPC.wxVkey = 4;var ouPC = _v();
       var ovPC = _o(36, e, s, gg);
       var oxPC = _gd('./lib/wxParse/wxParse.wxml', ovPC, e_, d_);
       if (oxPC) {
         var owPC = _1(21,e,s,gg);
         oxPC(owPC,owPC,ouPC, gg);
       } else _w(ovPC, './lib/wxParse/wxParse.wxml', 0, 0);_(oFPC,ouPC);
      }else if (_o(37, e, s, gg)) {
        oFPC.wxVkey = 5;var o_PC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oAQC = _v();var oBQC = function(oFQC,oEQC,oDQC,gg){var oHQC = _v();
       var oIQC = _o(46, oFQC, oEQC, gg);
       var oKQC = _gd('./lib/wxParse/wxParse.wxml', oIQC, e_, d_);
       if (oKQC) {
         var oJQC = _1(21,oFQC,oEQC,gg);
         oKQC(oJQC,oJQC,oHQC, gg);
       } else _w(oIQC, './lib/wxParse/wxParse.wxml', 0, 0);_(oDQC,oHQC);return oDQC;};_2(25, oBQC, e, s, gg, oAQC, "item", "index", '');_(o_PC,oAQC);_(oFPC,o_PC);
      }else if (_o(42, e, s, gg)) {
        oFPC.wxVkey = 6;var oNQC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oOQC = _v();var oPQC = function(oTQC,oSQC,oRQC,gg){var oVQC = _v();
       var oWQC = _o(46, oTQC, oSQC, gg);
       var oYQC = _gd('./lib/wxParse/wxParse.wxml', oWQC, e_, d_);
       if (oYQC) {
         var oXQC = _1(21,oTQC,oSQC,gg);
         oYQC(oXQC,oXQC,oVQC, gg);
       } else _w(oWQC, './lib/wxParse/wxParse.wxml', 0, 0);_(oRQC,oVQC);return oRQC;};_2(25, oPQC, e, s, gg, oOQC, "item", "index", '');_(oNQC,oOQC);_(oFPC,oNQC);
      }else {
        oFPC.wxVkey = 7;var oZQC = _m( "view", ["style", 1,"class", 42], e, s, gg);var obQC = _v();var ocQC = function(ogQC,ofQC,oeQC,gg){var oiQC = _v();
       var ojQC = _o(46, ogQC, ofQC, gg);
       var olQC = _gd('./lib/wxParse/wxParse.wxml', ojQC, e_, d_);
       if (olQC) {
         var okQC = _1(21,ogQC,ofQC,gg);
         olQC(okQC,okQC,oiQC, gg);
       } else _w(ojQC, './lib/wxParse/wxParse.wxml', 0, 0);_(oeQC,oiQC);return oeQC;};_2(25, ocQC, e, s, gg, obQC, "item", "index", '');_(oZQC,obQC);_(oFPC, oZQC);
      }_(oCPC,oFPC);
      }else if (_o(13, e, s, gg)) {
        oCPC.wxVkey = 2;var ooQC = _v();
       var opQC = _o(44, e, s, gg);
       var orQC = _gd('./lib/wxParse/wxParse.wxml', opQC, e_, d_);
       if (orQC) {
         var oqQC = _1(21,e,s,gg);
         orQC(oqQC,oqQC,ooQC, gg);
       } else _w(opQC, './lib/wxParse/wxParse.wxml', 0, 0);_(oCPC,ooQC);
      } _(r,oCPC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };d_["./lib/wxParse/wxParse.wxml"]["wxParse3"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParse3'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var otQC = _v();
      if (_o(16, e, s, gg)) {
        otQC.wxVkey = 1;var owQC = _v();
      if (_o(22, e, s, gg)) {
        owQC.wxVkey = 1;var ozQC = _m( "button", ["size", 23,"type", 1], e, s, gg);var o_QC = _v();var oARC = function(oERC,oDRC,oCRC,gg){var oGRC = _v();
       var oHRC = _o(47, oERC, oDRC, gg);
       var oJRC = _gd('./lib/wxParse/wxParse.wxml', oHRC, e_, d_);
       if (oJRC) {
         var oIRC = _1(21,oERC,oDRC,gg);
         oJRC(oIRC,oIRC,oGRC, gg);
       } else _w(oHRC, './lib/wxParse/wxParse.wxml', 0, 0);_(oCRC,oGRC);return oCRC;};_2(25, oARC, e, s, gg, o_QC, "item", "index", '');_(ozQC,o_QC);_(owQC,ozQC);
      }else if (_o(28, e, s, gg)) {
        owQC.wxVkey = 2;var oMRC = _n("view");_r(oMRC, 'class', 29, e, s, gg);var oNRC = _n("view");_r(oNRC, 'class', 30, e, s, gg);var oORC = _n("view");_r(oORC, 'class', 31, e, s, gg);var oPRC = _n("view");_r(oPRC, 'class', 32, e, s, gg);_(oORC,oPRC);_(oNRC,oORC);var oQRC = _n("view");_r(oQRC, 'class', 31, e, s, gg);var oRRC = _v();var oSRC = function(oWRC,oVRC,oURC,gg){var oYRC = _v();
       var oZRC = _o(47, oWRC, oVRC, gg);
       var obRC = _gd('./lib/wxParse/wxParse.wxml', oZRC, e_, d_);
       if (obRC) {
         var oaRC = _1(21,oWRC,oVRC,gg);
         obRC(oaRC,oaRC,oYRC, gg);
       } else _w(oZRC, './lib/wxParse/wxParse.wxml', 0, 0);_(oURC,oYRC);return oURC;};_2(25, oSRC, e, s, gg, oRRC, "item", "index", '');_(oQRC,oRRC);_(oNRC,oQRC);_(oMRC,oNRC);_(owQC,oMRC);
      }else if (_o(33, e, s, gg)) {
        owQC.wxVkey = 3;var oeRC = _v();
       var ofRC = _o(34, e, s, gg);
       var ohRC = _gd('./lib/wxParse/wxParse.wxml', ofRC, e_, d_);
       if (ohRC) {
         var ogRC = _1(21,e,s,gg);
         ohRC(ogRC,ogRC,oeRC, gg);
       } else _w(ofRC, './lib/wxParse/wxParse.wxml', 0, 0);_(owQC,oeRC);
      }else if (_o(35, e, s, gg)) {
        owQC.wxVkey = 4;var okRC = _v();
       var olRC = _o(36, e, s, gg);
       var onRC = _gd('./lib/wxParse/wxParse.wxml', olRC, e_, d_);
       if (onRC) {
         var omRC = _1(21,e,s,gg);
         onRC(omRC,omRC,okRC, gg);
       } else _w(olRC, './lib/wxParse/wxParse.wxml', 0, 0);_(owQC,okRC);
      }else if (_o(37, e, s, gg)) {
        owQC.wxVkey = 5;var oqRC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var orRC = _v();var osRC = function(owRC,ovRC,ouRC,gg){var oyRC = _v();
       var ozRC = _o(47, owRC, ovRC, gg);
       var oASC = _gd('./lib/wxParse/wxParse.wxml', ozRC, e_, d_);
       if (oASC) {
         var o_RC = _1(21,owRC,ovRC,gg);
         oASC(o_RC,o_RC,oyRC, gg);
       } else _w(ozRC, './lib/wxParse/wxParse.wxml', 0, 0);_(ouRC,oyRC);return ouRC;};_2(25, osRC, e, s, gg, orRC, "item", "index", '');_(oqRC,orRC);_(owQC,oqRC);
      }else if (_o(42, e, s, gg)) {
        owQC.wxVkey = 6;var oDSC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oESC = _v();var oFSC = function(oJSC,oISC,oHSC,gg){var oLSC = _v();
       var oMSC = _o(47, oJSC, oISC, gg);
       var oOSC = _gd('./lib/wxParse/wxParse.wxml', oMSC, e_, d_);
       if (oOSC) {
         var oNSC = _1(21,oJSC,oISC,gg);
         oOSC(oNSC,oNSC,oLSC, gg);
       } else _w(oMSC, './lib/wxParse/wxParse.wxml', 0, 0);_(oHSC,oLSC);return oHSC;};_2(25, oFSC, e, s, gg, oESC, "item", "index", '');_(oDSC,oESC);_(owQC,oDSC);
      }else {
        owQC.wxVkey = 7;var oPSC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oRSC = _v();var oSSC = function(oWSC,oVSC,oUSC,gg){var oYSC = _v();
       var oZSC = _o(47, oWSC, oVSC, gg);
       var obSC = _gd('./lib/wxParse/wxParse.wxml', oZSC, e_, d_);
       if (obSC) {
         var oaSC = _1(21,oWSC,oVSC,gg);
         obSC(oaSC,oaSC,oYSC, gg);
       } else _w(oZSC, './lib/wxParse/wxParse.wxml', 0, 0);_(oUSC,oYSC);return oUSC;};_2(25, oSSC, e, s, gg, oRSC, "item", "index", '');_(oPSC,oRSC);_(owQC, oPSC);
      }_(otQC,owQC);
      }else if (_o(13, e, s, gg)) {
        otQC.wxVkey = 2;var oeSC = _v();
       var ofSC = _o(44, e, s, gg);
       var ohSC = _gd('./lib/wxParse/wxParse.wxml', ofSC, e_, d_);
       if (ohSC) {
         var ogSC = _1(21,e,s,gg);
         ohSC(ogSC,ogSC,oeSC, gg);
       } else _w(ofSC, './lib/wxParse/wxParse.wxml', 0, 0);_(otQC,oeSC);
      } _(r,otQC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };d_["./lib/wxParse/wxParse.wxml"]["wxParse4"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParse4'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var ojSC = _v();
      if (_o(16, e, s, gg)) {
        ojSC.wxVkey = 1;var omSC = _v();
      if (_o(22, e, s, gg)) {
        omSC.wxVkey = 1;var opSC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oqSC = _v();var orSC = function(ovSC,ouSC,otSC,gg){var oxSC = _v();
       var oySC = _o(48, ovSC, ouSC, gg);
       var o_SC = _gd('./lib/wxParse/wxParse.wxml', oySC, e_, d_);
       if (o_SC) {
         var ozSC = _1(21,ovSC,ouSC,gg);
         o_SC(ozSC,ozSC,oxSC, gg);
       } else _w(oySC, './lib/wxParse/wxParse.wxml', 0, 0);_(otSC,oxSC);return otSC;};_2(25, orSC, e, s, gg, oqSC, "item", "index", '');_(opSC,oqSC);_(omSC,opSC);
      }else if (_o(28, e, s, gg)) {
        omSC.wxVkey = 2;var oCTC = _n("view");_r(oCTC, 'class', 29, e, s, gg);var oDTC = _n("view");_r(oDTC, 'class', 30, e, s, gg);var oETC = _n("view");_r(oETC, 'class', 31, e, s, gg);var oFTC = _n("view");_r(oFTC, 'class', 32, e, s, gg);_(oETC,oFTC);_(oDTC,oETC);var oGTC = _n("view");_r(oGTC, 'class', 31, e, s, gg);var oHTC = _v();var oITC = function(oMTC,oLTC,oKTC,gg){var oOTC = _v();
       var oPTC = _o(48, oMTC, oLTC, gg);
       var oRTC = _gd('./lib/wxParse/wxParse.wxml', oPTC, e_, d_);
       if (oRTC) {
         var oQTC = _1(21,oMTC,oLTC,gg);
         oRTC(oQTC,oQTC,oOTC, gg);
       } else _w(oPTC, './lib/wxParse/wxParse.wxml', 0, 0);_(oKTC,oOTC);return oKTC;};_2(25, oITC, e, s, gg, oHTC, "item", "index", '');_(oGTC,oHTC);_(oDTC,oGTC);_(oCTC,oDTC);_(omSC,oCTC);
      }else if (_o(33, e, s, gg)) {
        omSC.wxVkey = 3;var oUTC = _v();
       var oVTC = _o(34, e, s, gg);
       var oXTC = _gd('./lib/wxParse/wxParse.wxml', oVTC, e_, d_);
       if (oXTC) {
         var oWTC = _1(21,e,s,gg);
         oXTC(oWTC,oWTC,oUTC, gg);
       } else _w(oVTC, './lib/wxParse/wxParse.wxml', 0, 0);_(omSC,oUTC);
      }else if (_o(35, e, s, gg)) {
        omSC.wxVkey = 4;var oaTC = _v();
       var obTC = _o(36, e, s, gg);
       var odTC = _gd('./lib/wxParse/wxParse.wxml', obTC, e_, d_);
       if (odTC) {
         var ocTC = _1(21,e,s,gg);
         odTC(ocTC,ocTC,oaTC, gg);
       } else _w(obTC, './lib/wxParse/wxParse.wxml', 0, 0);_(omSC,oaTC);
      }else if (_o(37, e, s, gg)) {
        omSC.wxVkey = 5;var ogTC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ohTC = _v();var oiTC = function(omTC,olTC,okTC,gg){var ooTC = _v();
       var opTC = _o(48, omTC, olTC, gg);
       var orTC = _gd('./lib/wxParse/wxParse.wxml', opTC, e_, d_);
       if (orTC) {
         var oqTC = _1(21,omTC,olTC,gg);
         orTC(oqTC,oqTC,ooTC, gg);
       } else _w(opTC, './lib/wxParse/wxParse.wxml', 0, 0);_(okTC,ooTC);return okTC;};_2(25, oiTC, e, s, gg, ohTC, "item", "index", '');_(ogTC,ohTC);_(omSC,ogTC);
      }else if (_o(42, e, s, gg)) {
        omSC.wxVkey = 6;var ouTC = _m( "view", ["class", 0,"style", 1], e, s, gg);var ovTC = _v();var owTC = function(o_TC,ozTC,oyTC,gg){var oBUC = _v();
       var oCUC = _o(48, o_TC, ozTC, gg);
       var oEUC = _gd('./lib/wxParse/wxParse.wxml', oCUC, e_, d_);
       if (oEUC) {
         var oDUC = _1(21,o_TC,ozTC,gg);
         oEUC(oDUC,oDUC,oBUC, gg);
       } else _w(oCUC, './lib/wxParse/wxParse.wxml', 0, 0);_(oyTC,oBUC);return oyTC;};_2(25, owTC, e, s, gg, ovTC, "item", "index", '');_(ouTC,ovTC);_(omSC,ouTC);
      }else {
        omSC.wxVkey = 7;var oFUC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oHUC = _v();var oIUC = function(oMUC,oLUC,oKUC,gg){var oOUC = _v();
       var oPUC = _o(48, oMUC, oLUC, gg);
       var oRUC = _gd('./lib/wxParse/wxParse.wxml', oPUC, e_, d_);
       if (oRUC) {
         var oQUC = _1(21,oMUC,oLUC,gg);
         oRUC(oQUC,oQUC,oOUC, gg);
       } else _w(oPUC, './lib/wxParse/wxParse.wxml', 0, 0);_(oKUC,oOUC);return oKUC;};_2(25, oIUC, e, s, gg, oHUC, "item", "index", '');_(oFUC,oHUC);_(omSC, oFUC);
      }_(ojSC,omSC);
      }else if (_o(13, e, s, gg)) {
        ojSC.wxVkey = 2;var oUUC = _v();
       var oVUC = _o(44, e, s, gg);
       var oXUC = _gd('./lib/wxParse/wxParse.wxml', oVUC, e_, d_);
       if (oXUC) {
         var oWUC = _1(21,e,s,gg);
         oXUC(oWUC,oWUC,oUUC, gg);
       } else _w(oVUC, './lib/wxParse/wxParse.wxml', 0, 0);_(ojSC,oUUC);
      } _(r,ojSC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };d_["./lib/wxParse/wxParse.wxml"]["wxParse5"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParse5'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var oZUC = _v();
      if (_o(16, e, s, gg)) {
        oZUC.wxVkey = 1;var ocUC = _v();
      if (_o(22, e, s, gg)) {
        ocUC.wxVkey = 1;var ofUC = _m( "button", ["size", 23,"type", 1], e, s, gg);var ogUC = _v();var ohUC = function(olUC,okUC,ojUC,gg){var onUC = _v();
       var ooUC = _o(49, olUC, okUC, gg);
       var oqUC = _gd('./lib/wxParse/wxParse.wxml', ooUC, e_, d_);
       if (oqUC) {
         var opUC = _1(21,olUC,okUC,gg);
         oqUC(opUC,opUC,onUC, gg);
       } else _w(ooUC, './lib/wxParse/wxParse.wxml', 0, 0);_(ojUC,onUC);return ojUC;};_2(25, ohUC, e, s, gg, ogUC, "item", "index", '');_(ofUC,ogUC);_(ocUC,ofUC);
      }else if (_o(28, e, s, gg)) {
        ocUC.wxVkey = 2;var otUC = _n("view");_r(otUC, 'class', 29, e, s, gg);var ouUC = _n("view");_r(ouUC, 'class', 30, e, s, gg);var ovUC = _n("view");_r(ovUC, 'class', 31, e, s, gg);var owUC = _n("view");_r(owUC, 'class', 32, e, s, gg);_(ovUC,owUC);_(ouUC,ovUC);var oxUC = _n("view");_r(oxUC, 'class', 31, e, s, gg);var oyUC = _v();var ozUC = function(oCVC,oBVC,oAVC,gg){var oEVC = _v();
       var oFVC = _o(49, oCVC, oBVC, gg);
       var oHVC = _gd('./lib/wxParse/wxParse.wxml', oFVC, e_, d_);
       if (oHVC) {
         var oGVC = _1(21,oCVC,oBVC,gg);
         oHVC(oGVC,oGVC,oEVC, gg);
       } else _w(oFVC, './lib/wxParse/wxParse.wxml', 0, 0);_(oAVC,oEVC);return oAVC;};_2(25, ozUC, e, s, gg, oyUC, "item", "index", '');_(oxUC,oyUC);_(ouUC,oxUC);_(otUC,ouUC);_(ocUC,otUC);
      }else if (_o(33, e, s, gg)) {
        ocUC.wxVkey = 3;var oKVC = _v();
       var oLVC = _o(34, e, s, gg);
       var oNVC = _gd('./lib/wxParse/wxParse.wxml', oLVC, e_, d_);
       if (oNVC) {
         var oMVC = _1(21,e,s,gg);
         oNVC(oMVC,oMVC,oKVC, gg);
       } else _w(oLVC, './lib/wxParse/wxParse.wxml', 0, 0);_(ocUC,oKVC);
      }else if (_o(35, e, s, gg)) {
        ocUC.wxVkey = 4;var oQVC = _v();
       var oRVC = _o(36, e, s, gg);
       var oTVC = _gd('./lib/wxParse/wxParse.wxml', oRVC, e_, d_);
       if (oTVC) {
         var oSVC = _1(21,e,s,gg);
         oTVC(oSVC,oSVC,oQVC, gg);
       } else _w(oRVC, './lib/wxParse/wxParse.wxml', 0, 0);_(ocUC,oQVC);
      }else if (_o(37, e, s, gg)) {
        ocUC.wxVkey = 5;var oWVC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oXVC = _v();var oYVC = function(ocVC,obVC,oaVC,gg){var oeVC = _v();
       var ofVC = _o(49, ocVC, obVC, gg);
       var ohVC = _gd('./lib/wxParse/wxParse.wxml', ofVC, e_, d_);
       if (ohVC) {
         var ogVC = _1(21,ocVC,obVC,gg);
         ohVC(ogVC,ogVC,oeVC, gg);
       } else _w(ofVC, './lib/wxParse/wxParse.wxml', 0, 0);_(oaVC,oeVC);return oaVC;};_2(25, oYVC, e, s, gg, oXVC, "item", "index", '');_(oWVC,oXVC);_(ocUC,oWVC);
      }else if (_o(42, e, s, gg)) {
        ocUC.wxVkey = 6;var okVC = _m( "view", ["class", 0,"style", 1], e, s, gg);var olVC = _v();var omVC = function(oqVC,opVC,ooVC,gg){var osVC = _v();
       var otVC = _o(49, oqVC, opVC, gg);
       var ovVC = _gd('./lib/wxParse/wxParse.wxml', otVC, e_, d_);
       if (ovVC) {
         var ouVC = _1(21,oqVC,opVC,gg);
         ovVC(ouVC,ouVC,osVC, gg);
       } else _w(otVC, './lib/wxParse/wxParse.wxml', 0, 0);_(ooVC,osVC);return ooVC;};_2(25, omVC, e, s, gg, olVC, "item", "index", '');_(okVC,olVC);_(ocUC,okVC);
      }else {
        ocUC.wxVkey = 7;var owVC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oyVC = _v();var ozVC = function(oCWC,oBWC,oAWC,gg){var oEWC = _v();
       var oFWC = _o(49, oCWC, oBWC, gg);
       var oHWC = _gd('./lib/wxParse/wxParse.wxml', oFWC, e_, d_);
       if (oHWC) {
         var oGWC = _1(21,oCWC,oBWC,gg);
         oHWC(oGWC,oGWC,oEWC, gg);
       } else _w(oFWC, './lib/wxParse/wxParse.wxml', 0, 0);_(oAWC,oEWC);return oAWC;};_2(25, ozVC, e, s, gg, oyVC, "item", "index", '');_(owVC,oyVC);_(ocUC, owVC);
      }_(oZUC,ocUC);
      }else if (_o(13, e, s, gg)) {
        oZUC.wxVkey = 2;var oKWC = _v();
       var oLWC = _o(44, e, s, gg);
       var oNWC = _gd('./lib/wxParse/wxParse.wxml', oLWC, e_, d_);
       if (oNWC) {
         var oMWC = _1(21,e,s,gg);
         oNWC(oMWC,oMWC,oKWC, gg);
       } else _w(oLWC, './lib/wxParse/wxParse.wxml', 0, 0);_(oZUC,oKWC);
      } _(r,oZUC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };d_["./lib/wxParse/wxParse.wxml"]["wxParse6"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParse6'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var oPWC = _v();
      if (_o(16, e, s, gg)) {
        oPWC.wxVkey = 1;var oSWC = _v();
      if (_o(22, e, s, gg)) {
        oSWC.wxVkey = 1;var oVWC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oWWC = _v();var oXWC = function(obWC,oaWC,oZWC,gg){var odWC = _v();
       var oeWC = _o(50, obWC, oaWC, gg);
       var ogWC = _gd('./lib/wxParse/wxParse.wxml', oeWC, e_, d_);
       if (ogWC) {
         var ofWC = _1(21,obWC,oaWC,gg);
         ogWC(ofWC,ofWC,odWC, gg);
       } else _w(oeWC, './lib/wxParse/wxParse.wxml', 0, 0);_(oZWC,odWC);return oZWC;};_2(25, oXWC, e, s, gg, oWWC, "item", "index", '');_(oVWC,oWWC);_(oSWC,oVWC);
      }else if (_o(28, e, s, gg)) {
        oSWC.wxVkey = 2;var ojWC = _n("view");_r(ojWC, 'class', 29, e, s, gg);var okWC = _n("view");_r(okWC, 'class', 30, e, s, gg);var olWC = _n("view");_r(olWC, 'class', 31, e, s, gg);var omWC = _n("view");_r(omWC, 'class', 32, e, s, gg);_(olWC,omWC);_(okWC,olWC);var onWC = _n("view");_r(onWC, 'class', 31, e, s, gg);var ooWC = _v();var opWC = function(otWC,osWC,orWC,gg){var ovWC = _v();
       var owWC = _o(50, otWC, osWC, gg);
       var oyWC = _gd('./lib/wxParse/wxParse.wxml', owWC, e_, d_);
       if (oyWC) {
         var oxWC = _1(21,otWC,osWC,gg);
         oyWC(oxWC,oxWC,ovWC, gg);
       } else _w(owWC, './lib/wxParse/wxParse.wxml', 0, 0);_(orWC,ovWC);return orWC;};_2(25, opWC, e, s, gg, ooWC, "item", "index", '');_(onWC,ooWC);_(okWC,onWC);_(ojWC,okWC);_(oSWC,ojWC);
      }else if (_o(33, e, s, gg)) {
        oSWC.wxVkey = 3;var oAXC = _v();
       var oBXC = _o(34, e, s, gg);
       var oDXC = _gd('./lib/wxParse/wxParse.wxml', oBXC, e_, d_);
       if (oDXC) {
         var oCXC = _1(21,e,s,gg);
         oDXC(oCXC,oCXC,oAXC, gg);
       } else _w(oBXC, './lib/wxParse/wxParse.wxml', 0, 0);_(oSWC,oAXC);
      }else if (_o(35, e, s, gg)) {
        oSWC.wxVkey = 4;var oGXC = _v();
       var oHXC = _o(36, e, s, gg);
       var oJXC = _gd('./lib/wxParse/wxParse.wxml', oHXC, e_, d_);
       if (oJXC) {
         var oIXC = _1(21,e,s,gg);
         oJXC(oIXC,oIXC,oGXC, gg);
       } else _w(oHXC, './lib/wxParse/wxParse.wxml', 0, 0);_(oSWC,oGXC);
      }else if (_o(37, e, s, gg)) {
        oSWC.wxVkey = 5;var oMXC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oNXC = _v();var oOXC = function(oSXC,oRXC,oQXC,gg){var oUXC = _v();
       var oVXC = _o(50, oSXC, oRXC, gg);
       var oXXC = _gd('./lib/wxParse/wxParse.wxml', oVXC, e_, d_);
       if (oXXC) {
         var oWXC = _1(21,oSXC,oRXC,gg);
         oXXC(oWXC,oWXC,oUXC, gg);
       } else _w(oVXC, './lib/wxParse/wxParse.wxml', 0, 0);_(oQXC,oUXC);return oQXC;};_2(25, oOXC, e, s, gg, oNXC, "item", "index", '');_(oMXC,oNXC);_(oSWC,oMXC);
      }else if (_o(42, e, s, gg)) {
        oSWC.wxVkey = 6;var oaXC = _m( "view", ["class", 0,"style", 1], e, s, gg);var obXC = _v();var ocXC = function(ogXC,ofXC,oeXC,gg){var oiXC = _v();
       var ojXC = _o(50, ogXC, ofXC, gg);
       var olXC = _gd('./lib/wxParse/wxParse.wxml', ojXC, e_, d_);
       if (olXC) {
         var okXC = _1(21,ogXC,ofXC,gg);
         olXC(okXC,okXC,oiXC, gg);
       } else _w(ojXC, './lib/wxParse/wxParse.wxml', 0, 0);_(oeXC,oiXC);return oeXC;};_2(25, ocXC, e, s, gg, obXC, "item", "index", '');_(oaXC,obXC);_(oSWC,oaXC);
      }else {
        oSWC.wxVkey = 7;var omXC = _m( "view", ["style", 1,"class", 42], e, s, gg);var ooXC = _v();var opXC = function(otXC,osXC,orXC,gg){var ovXC = _v();
       var owXC = _o(50, otXC, osXC, gg);
       var oyXC = _gd('./lib/wxParse/wxParse.wxml', owXC, e_, d_);
       if (oyXC) {
         var oxXC = _1(21,otXC,osXC,gg);
         oyXC(oxXC,oxXC,ovXC, gg);
       } else _w(owXC, './lib/wxParse/wxParse.wxml', 0, 0);_(orXC,ovXC);return orXC;};_2(25, opXC, e, s, gg, ooXC, "item", "index", '');_(omXC,ooXC);_(oSWC, omXC);
      }_(oPWC,oSWC);
      }else if (_o(13, e, s, gg)) {
        oPWC.wxVkey = 2;var oAYC = _v();
       var oBYC = _o(44, e, s, gg);
       var oDYC = _gd('./lib/wxParse/wxParse.wxml', oBYC, e_, d_);
       if (oDYC) {
         var oCYC = _1(21,e,s,gg);
         oDYC(oCYC,oCYC,oAYC, gg);
       } else _w(oBYC, './lib/wxParse/wxParse.wxml', 0, 0);_(oPWC,oAYC);
      } _(r,oPWC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };d_["./lib/wxParse/wxParse.wxml"]["wxParse7"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParse7'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var oFYC = _v();
      if (_o(16, e, s, gg)) {
        oFYC.wxVkey = 1;var oIYC = _v();
      if (_o(22, e, s, gg)) {
        oIYC.wxVkey = 1;var oLYC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oMYC = _v();var oNYC = function(oRYC,oQYC,oPYC,gg){var oTYC = _v();
       var oUYC = _o(51, oRYC, oQYC, gg);
       var oWYC = _gd('./lib/wxParse/wxParse.wxml', oUYC, e_, d_);
       if (oWYC) {
         var oVYC = _1(21,oRYC,oQYC,gg);
         oWYC(oVYC,oVYC,oTYC, gg);
       } else _w(oUYC, './lib/wxParse/wxParse.wxml', 0, 0);_(oPYC,oTYC);return oPYC;};_2(25, oNYC, e, s, gg, oMYC, "item", "index", '');_(oLYC,oMYC);_(oIYC,oLYC);
      }else if (_o(28, e, s, gg)) {
        oIYC.wxVkey = 2;var oZYC = _n("view");_r(oZYC, 'class', 29, e, s, gg);var oaYC = _n("view");_r(oaYC, 'class', 30, e, s, gg);var obYC = _n("view");_r(obYC, 'class', 31, e, s, gg);var ocYC = _n("view");_r(ocYC, 'class', 32, e, s, gg);_(obYC,ocYC);_(oaYC,obYC);var odYC = _n("view");_r(odYC, 'class', 31, e, s, gg);var oeYC = _v();var ofYC = function(ojYC,oiYC,ohYC,gg){var olYC = _v();
       var omYC = _o(51, ojYC, oiYC, gg);
       var ooYC = _gd('./lib/wxParse/wxParse.wxml', omYC, e_, d_);
       if (ooYC) {
         var onYC = _1(21,ojYC,oiYC,gg);
         ooYC(onYC,onYC,olYC, gg);
       } else _w(omYC, './lib/wxParse/wxParse.wxml', 0, 0);_(ohYC,olYC);return ohYC;};_2(25, ofYC, e, s, gg, oeYC, "item", "index", '');_(odYC,oeYC);_(oaYC,odYC);_(oZYC,oaYC);_(oIYC,oZYC);
      }else if (_o(33, e, s, gg)) {
        oIYC.wxVkey = 3;var orYC = _v();
       var osYC = _o(34, e, s, gg);
       var ouYC = _gd('./lib/wxParse/wxParse.wxml', osYC, e_, d_);
       if (ouYC) {
         var otYC = _1(21,e,s,gg);
         ouYC(otYC,otYC,orYC, gg);
       } else _w(osYC, './lib/wxParse/wxParse.wxml', 0, 0);_(oIYC,orYC);
      }else if (_o(35, e, s, gg)) {
        oIYC.wxVkey = 4;var oxYC = _v();
       var oyYC = _o(36, e, s, gg);
       var o_YC = _gd('./lib/wxParse/wxParse.wxml', oyYC, e_, d_);
       if (o_YC) {
         var ozYC = _1(21,e,s,gg);
         o_YC(ozYC,ozYC,oxYC, gg);
       } else _w(oyYC, './lib/wxParse/wxParse.wxml', 0, 0);_(oIYC,oxYC);
      }else if (_o(37, e, s, gg)) {
        oIYC.wxVkey = 5;var oCZC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oDZC = _v();var oEZC = function(oIZC,oHZC,oGZC,gg){var oKZC = _v();
       var oLZC = _o(51, oIZC, oHZC, gg);
       var oNZC = _gd('./lib/wxParse/wxParse.wxml', oLZC, e_, d_);
       if (oNZC) {
         var oMZC = _1(21,oIZC,oHZC,gg);
         oNZC(oMZC,oMZC,oKZC, gg);
       } else _w(oLZC, './lib/wxParse/wxParse.wxml', 0, 0);_(oGZC,oKZC);return oGZC;};_2(25, oEZC, e, s, gg, oDZC, "item", "index", '');_(oCZC,oDZC);_(oIYC,oCZC);
      }else if (_o(42, e, s, gg)) {
        oIYC.wxVkey = 6;var oQZC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oRZC = _v();var oSZC = function(oWZC,oVZC,oUZC,gg){var oYZC = _v();
       var oZZC = _o(51, oWZC, oVZC, gg);
       var obZC = _gd('./lib/wxParse/wxParse.wxml', oZZC, e_, d_);
       if (obZC) {
         var oaZC = _1(21,oWZC,oVZC,gg);
         obZC(oaZC,oaZC,oYZC, gg);
       } else _w(oZZC, './lib/wxParse/wxParse.wxml', 0, 0);_(oUZC,oYZC);return oUZC;};_2(25, oSZC, e, s, gg, oRZC, "item", "index", '');_(oQZC,oRZC);_(oIYC,oQZC);
      }else {
        oIYC.wxVkey = 7;var ocZC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oeZC = _v();var ofZC = function(ojZC,oiZC,ohZC,gg){var olZC = _v();
       var omZC = _o(51, ojZC, oiZC, gg);
       var ooZC = _gd('./lib/wxParse/wxParse.wxml', omZC, e_, d_);
       if (ooZC) {
         var onZC = _1(21,ojZC,oiZC,gg);
         ooZC(onZC,onZC,olZC, gg);
       } else _w(omZC, './lib/wxParse/wxParse.wxml', 0, 0);_(ohZC,olZC);return ohZC;};_2(25, ofZC, e, s, gg, oeZC, "item", "index", '');_(ocZC,oeZC);_(oIYC, ocZC);
      }_(oFYC,oIYC);
      }else if (_o(13, e, s, gg)) {
        oFYC.wxVkey = 2;var orZC = _v();
       var osZC = _o(44, e, s, gg);
       var ouZC = _gd('./lib/wxParse/wxParse.wxml', osZC, e_, d_);
       if (ouZC) {
         var otZC = _1(21,e,s,gg);
         ouZC(otZC,otZC,orZC, gg);
       } else _w(osZC, './lib/wxParse/wxParse.wxml', 0, 0);_(oFYC,orZC);
      } _(r,oFYC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };d_["./lib/wxParse/wxParse.wxml"]["wxParse8"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParse8'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var owZC = _v();
      if (_o(16, e, s, gg)) {
        owZC.wxVkey = 1;var ozZC = _v();
      if (_o(22, e, s, gg)) {
        ozZC.wxVkey = 1;var oBaC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oCaC = _v();var oDaC = function(oHaC,oGaC,oFaC,gg){var oJaC = _v();
       var oKaC = _o(52, oHaC, oGaC, gg);
       var oMaC = _gd('./lib/wxParse/wxParse.wxml', oKaC, e_, d_);
       if (oMaC) {
         var oLaC = _1(21,oHaC,oGaC,gg);
         oMaC(oLaC,oLaC,oJaC, gg);
       } else _w(oKaC, './lib/wxParse/wxParse.wxml', 0, 0);_(oFaC,oJaC);return oFaC;};_2(25, oDaC, e, s, gg, oCaC, "item", "index", '');_(oBaC,oCaC);_(ozZC,oBaC);
      }else if (_o(28, e, s, gg)) {
        ozZC.wxVkey = 2;var oPaC = _n("view");_r(oPaC, 'class', 29, e, s, gg);var oQaC = _n("view");_r(oQaC, 'class', 30, e, s, gg);var oRaC = _n("view");_r(oRaC, 'class', 31, e, s, gg);var oSaC = _n("view");_r(oSaC, 'class', 32, e, s, gg);_(oRaC,oSaC);_(oQaC,oRaC);var oTaC = _n("view");_r(oTaC, 'class', 31, e, s, gg);var oUaC = _v();var oVaC = function(oZaC,oYaC,oXaC,gg){var obaC = _v();
       var ocaC = _o(52, oZaC, oYaC, gg);
       var oeaC = _gd('./lib/wxParse/wxParse.wxml', ocaC, e_, d_);
       if (oeaC) {
         var odaC = _1(21,oZaC,oYaC,gg);
         oeaC(odaC,odaC,obaC, gg);
       } else _w(ocaC, './lib/wxParse/wxParse.wxml', 0, 0);_(oXaC,obaC);return oXaC;};_2(25, oVaC, e, s, gg, oUaC, "item", "index", '');_(oTaC,oUaC);_(oQaC,oTaC);_(oPaC,oQaC);_(ozZC,oPaC);
      }else if (_o(33, e, s, gg)) {
        ozZC.wxVkey = 3;var ohaC = _v();
       var oiaC = _o(34, e, s, gg);
       var okaC = _gd('./lib/wxParse/wxParse.wxml', oiaC, e_, d_);
       if (okaC) {
         var ojaC = _1(21,e,s,gg);
         okaC(ojaC,ojaC,ohaC, gg);
       } else _w(oiaC, './lib/wxParse/wxParse.wxml', 0, 0);_(ozZC,ohaC);
      }else if (_o(35, e, s, gg)) {
        ozZC.wxVkey = 4;var onaC = _v();
       var ooaC = _o(36, e, s, gg);
       var oqaC = _gd('./lib/wxParse/wxParse.wxml', ooaC, e_, d_);
       if (oqaC) {
         var opaC = _1(21,e,s,gg);
         oqaC(opaC,opaC,onaC, gg);
       } else _w(ooaC, './lib/wxParse/wxParse.wxml', 0, 0);_(ozZC,onaC);
      }else if (_o(37, e, s, gg)) {
        ozZC.wxVkey = 5;var otaC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ouaC = _v();var ovaC = function(ozaC,oyaC,oxaC,gg){var oAbC = _v();
       var oBbC = _o(52, ozaC, oyaC, gg);
       var oDbC = _gd('./lib/wxParse/wxParse.wxml', oBbC, e_, d_);
       if (oDbC) {
         var oCbC = _1(21,ozaC,oyaC,gg);
         oDbC(oCbC,oCbC,oAbC, gg);
       } else _w(oBbC, './lib/wxParse/wxParse.wxml', 0, 0);_(oxaC,oAbC);return oxaC;};_2(25, ovaC, e, s, gg, ouaC, "item", "index", '');_(otaC,ouaC);_(ozZC,otaC);
      }else if (_o(42, e, s, gg)) {
        ozZC.wxVkey = 6;var oGbC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oHbC = _v();var oIbC = function(oMbC,oLbC,oKbC,gg){var oObC = _v();
       var oPbC = _o(52, oMbC, oLbC, gg);
       var oRbC = _gd('./lib/wxParse/wxParse.wxml', oPbC, e_, d_);
       if (oRbC) {
         var oQbC = _1(21,oMbC,oLbC,gg);
         oRbC(oQbC,oQbC,oObC, gg);
       } else _w(oPbC, './lib/wxParse/wxParse.wxml', 0, 0);_(oKbC,oObC);return oKbC;};_2(25, oIbC, e, s, gg, oHbC, "item", "index", '');_(oGbC,oHbC);_(ozZC,oGbC);
      }else {
        ozZC.wxVkey = 7;var oSbC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oUbC = _v();var oVbC = function(oZbC,oYbC,oXbC,gg){var obbC = _v();
       var ocbC = _o(52, oZbC, oYbC, gg);
       var oebC = _gd('./lib/wxParse/wxParse.wxml', ocbC, e_, d_);
       if (oebC) {
         var odbC = _1(21,oZbC,oYbC,gg);
         oebC(odbC,odbC,obbC, gg);
       } else _w(ocbC, './lib/wxParse/wxParse.wxml', 0, 0);_(oXbC,obbC);return oXbC;};_2(25, oVbC, e, s, gg, oUbC, "item", "index", '');_(oSbC,oUbC);_(ozZC, oSbC);
      }_(owZC,ozZC);
      }else if (_o(13, e, s, gg)) {
        owZC.wxVkey = 2;var ohbC = _v();
       var oibC = _o(44, e, s, gg);
       var okbC = _gd('./lib/wxParse/wxParse.wxml', oibC, e_, d_);
       if (okbC) {
         var ojbC = _1(21,e,s,gg);
         okbC(ojbC,ojbC,ohbC, gg);
       } else _w(oibC, './lib/wxParse/wxParse.wxml', 0, 0);_(owZC,ohbC);
      } _(r,owZC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };d_["./lib/wxParse/wxParse.wxml"]["wxParse9"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParse9'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var ombC = _v();
      if (_o(16, e, s, gg)) {
        ombC.wxVkey = 1;var opbC = _v();
      if (_o(22, e, s, gg)) {
        opbC.wxVkey = 1;var osbC = _m( "button", ["size", 23,"type", 1], e, s, gg);var otbC = _v();var oubC = function(oybC,oxbC,owbC,gg){var o_bC = _v();
       var oAcC = _o(53, oybC, oxbC, gg);
       var oCcC = _gd('./lib/wxParse/wxParse.wxml', oAcC, e_, d_);
       if (oCcC) {
         var oBcC = _1(21,oybC,oxbC,gg);
         oCcC(oBcC,oBcC,o_bC, gg);
       } else _w(oAcC, './lib/wxParse/wxParse.wxml', 0, 0);_(owbC,o_bC);return owbC;};_2(25, oubC, e, s, gg, otbC, "item", "index", '');_(osbC,otbC);_(opbC,osbC);
      }else if (_o(28, e, s, gg)) {
        opbC.wxVkey = 2;var oFcC = _n("view");_r(oFcC, 'class', 29, e, s, gg);var oGcC = _n("view");_r(oGcC, 'class', 30, e, s, gg);var oHcC = _n("view");_r(oHcC, 'class', 31, e, s, gg);var oIcC = _n("view");_r(oIcC, 'class', 32, e, s, gg);_(oHcC,oIcC);_(oGcC,oHcC);var oJcC = _n("view");_r(oJcC, 'class', 31, e, s, gg);var oKcC = _v();var oLcC = function(oPcC,oOcC,oNcC,gg){var oRcC = _v();
       var oScC = _o(53, oPcC, oOcC, gg);
       var oUcC = _gd('./lib/wxParse/wxParse.wxml', oScC, e_, d_);
       if (oUcC) {
         var oTcC = _1(21,oPcC,oOcC,gg);
         oUcC(oTcC,oTcC,oRcC, gg);
       } else _w(oScC, './lib/wxParse/wxParse.wxml', 0, 0);_(oNcC,oRcC);return oNcC;};_2(25, oLcC, e, s, gg, oKcC, "item", "index", '');_(oJcC,oKcC);_(oGcC,oJcC);_(oFcC,oGcC);_(opbC,oFcC);
      }else if (_o(33, e, s, gg)) {
        opbC.wxVkey = 3;var oXcC = _v();
       var oYcC = _o(34, e, s, gg);
       var oacC = _gd('./lib/wxParse/wxParse.wxml', oYcC, e_, d_);
       if (oacC) {
         var oZcC = _1(21,e,s,gg);
         oacC(oZcC,oZcC,oXcC, gg);
       } else _w(oYcC, './lib/wxParse/wxParse.wxml', 0, 0);_(opbC,oXcC);
      }else if (_o(35, e, s, gg)) {
        opbC.wxVkey = 4;var odcC = _v();
       var oecC = _o(36, e, s, gg);
       var ogcC = _gd('./lib/wxParse/wxParse.wxml', oecC, e_, d_);
       if (ogcC) {
         var ofcC = _1(21,e,s,gg);
         ogcC(ofcC,ofcC,odcC, gg);
       } else _w(oecC, './lib/wxParse/wxParse.wxml', 0, 0);_(opbC,odcC);
      }else if (_o(37, e, s, gg)) {
        opbC.wxVkey = 5;var ojcC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var okcC = _v();var olcC = function(opcC,oocC,oncC,gg){var orcC = _v();
       var oscC = _o(53, opcC, oocC, gg);
       var oucC = _gd('./lib/wxParse/wxParse.wxml', oscC, e_, d_);
       if (oucC) {
         var otcC = _1(21,opcC,oocC,gg);
         oucC(otcC,otcC,orcC, gg);
       } else _w(oscC, './lib/wxParse/wxParse.wxml', 0, 0);_(oncC,orcC);return oncC;};_2(25, olcC, e, s, gg, okcC, "item", "index", '');_(ojcC,okcC);_(opbC,ojcC);
      }else if (_o(42, e, s, gg)) {
        opbC.wxVkey = 6;var oxcC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oycC = _v();var ozcC = function(oCdC,oBdC,oAdC,gg){var oEdC = _v();
       var oFdC = _o(53, oCdC, oBdC, gg);
       var oHdC = _gd('./lib/wxParse/wxParse.wxml', oFdC, e_, d_);
       if (oHdC) {
         var oGdC = _1(21,oCdC,oBdC,gg);
         oHdC(oGdC,oGdC,oEdC, gg);
       } else _w(oFdC, './lib/wxParse/wxParse.wxml', 0, 0);_(oAdC,oEdC);return oAdC;};_2(25, ozcC, e, s, gg, oycC, "item", "index", '');_(oxcC,oycC);_(opbC,oxcC);
      }else {
        opbC.wxVkey = 7;var oIdC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oKdC = _v();var oLdC = function(oPdC,oOdC,oNdC,gg){var oRdC = _v();
       var oSdC = _o(53, oPdC, oOdC, gg);
       var oUdC = _gd('./lib/wxParse/wxParse.wxml', oSdC, e_, d_);
       if (oUdC) {
         var oTdC = _1(21,oPdC,oOdC,gg);
         oUdC(oTdC,oTdC,oRdC, gg);
       } else _w(oSdC, './lib/wxParse/wxParse.wxml', 0, 0);_(oNdC,oRdC);return oNdC;};_2(25, oLdC, e, s, gg, oKdC, "item", "index", '');_(oIdC,oKdC);_(opbC, oIdC);
      }_(ombC,opbC);
      }else if (_o(13, e, s, gg)) {
        ombC.wxVkey = 2;var oXdC = _v();
       var oYdC = _o(44, e, s, gg);
       var oadC = _gd('./lib/wxParse/wxParse.wxml', oYdC, e_, d_);
       if (oadC) {
         var oZdC = _1(21,e,s,gg);
         oadC(oZdC,oZdC,oXdC, gg);
       } else _w(oYdC, './lib/wxParse/wxParse.wxml', 0, 0);_(ombC,oXdC);
      } _(r,ombC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };d_["./lib/wxParse/wxParse.wxml"]["wxParse10"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParse10'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var ocdC = _v();
      if (_o(16, e, s, gg)) {
        ocdC.wxVkey = 1;var ofdC = _v();
      if (_o(22, e, s, gg)) {
        ofdC.wxVkey = 1;var oidC = _m( "button", ["size", 23,"type", 1], e, s, gg);var ojdC = _v();var okdC = function(oodC,ondC,omdC,gg){var oqdC = _v();
       var ordC = _o(54, oodC, ondC, gg);
       var otdC = _gd('./lib/wxParse/wxParse.wxml', ordC, e_, d_);
       if (otdC) {
         var osdC = _1(21,oodC,ondC,gg);
         otdC(osdC,osdC,oqdC, gg);
       } else _w(ordC, './lib/wxParse/wxParse.wxml', 0, 0);_(omdC,oqdC);return omdC;};_2(25, okdC, e, s, gg, ojdC, "item", "index", '');_(oidC,ojdC);_(ofdC,oidC);
      }else if (_o(28, e, s, gg)) {
        ofdC.wxVkey = 2;var owdC = _n("view");_r(owdC, 'class', 29, e, s, gg);var oxdC = _n("view");_r(oxdC, 'class', 30, e, s, gg);var oydC = _n("view");_r(oydC, 'class', 31, e, s, gg);var ozdC = _n("view");_r(ozdC, 'class', 32, e, s, gg);_(oydC,ozdC);_(oxdC,oydC);var o_dC = _n("view");_r(o_dC, 'class', 31, e, s, gg);var oAeC = _v();var oBeC = function(oFeC,oEeC,oDeC,gg){var oHeC = _v();
       var oIeC = _o(54, oFeC, oEeC, gg);
       var oKeC = _gd('./lib/wxParse/wxParse.wxml', oIeC, e_, d_);
       if (oKeC) {
         var oJeC = _1(21,oFeC,oEeC,gg);
         oKeC(oJeC,oJeC,oHeC, gg);
       } else _w(oIeC, './lib/wxParse/wxParse.wxml', 0, 0);_(oDeC,oHeC);return oDeC;};_2(25, oBeC, e, s, gg, oAeC, "item", "index", '');_(o_dC,oAeC);_(oxdC,o_dC);_(owdC,oxdC);_(ofdC,owdC);
      }else if (_o(33, e, s, gg)) {
        ofdC.wxVkey = 3;var oNeC = _v();
       var oOeC = _o(34, e, s, gg);
       var oQeC = _gd('./lib/wxParse/wxParse.wxml', oOeC, e_, d_);
       if (oQeC) {
         var oPeC = _1(21,e,s,gg);
         oQeC(oPeC,oPeC,oNeC, gg);
       } else _w(oOeC, './lib/wxParse/wxParse.wxml', 0, 0);_(ofdC,oNeC);
      }else if (_o(35, e, s, gg)) {
        ofdC.wxVkey = 4;var oTeC = _v();
       var oUeC = _o(36, e, s, gg);
       var oWeC = _gd('./lib/wxParse/wxParse.wxml', oUeC, e_, d_);
       if (oWeC) {
         var oVeC = _1(21,e,s,gg);
         oWeC(oVeC,oVeC,oTeC, gg);
       } else _w(oUeC, './lib/wxParse/wxParse.wxml', 0, 0);_(ofdC,oTeC);
      }else if (_o(37, e, s, gg)) {
        ofdC.wxVkey = 5;var oZeC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oaeC = _v();var obeC = function(ofeC,oeeC,odeC,gg){var oheC = _v();
       var oieC = _o(54, ofeC, oeeC, gg);
       var okeC = _gd('./lib/wxParse/wxParse.wxml', oieC, e_, d_);
       if (okeC) {
         var ojeC = _1(21,ofeC,oeeC,gg);
         okeC(ojeC,ojeC,oheC, gg);
       } else _w(oieC, './lib/wxParse/wxParse.wxml', 0, 0);_(odeC,oheC);return odeC;};_2(25, obeC, e, s, gg, oaeC, "item", "index", '');_(oZeC,oaeC);_(ofdC,oZeC);
      }else if (_o(42, e, s, gg)) {
        ofdC.wxVkey = 6;var oneC = _m( "view", ["class", 0,"style", 1], e, s, gg);var ooeC = _v();var opeC = function(oteC,oseC,oreC,gg){var oveC = _v();
       var oweC = _o(54, oteC, oseC, gg);
       var oyeC = _gd('./lib/wxParse/wxParse.wxml', oweC, e_, d_);
       if (oyeC) {
         var oxeC = _1(21,oteC,oseC,gg);
         oyeC(oxeC,oxeC,oveC, gg);
       } else _w(oweC, './lib/wxParse/wxParse.wxml', 0, 0);_(oreC,oveC);return oreC;};_2(25, opeC, e, s, gg, ooeC, "item", "index", '');_(oneC,ooeC);_(ofdC,oneC);
      }else {
        ofdC.wxVkey = 7;var ozeC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oAfC = _v();var oBfC = function(oFfC,oEfC,oDfC,gg){var oHfC = _v();
       var oIfC = _o(54, oFfC, oEfC, gg);
       var oKfC = _gd('./lib/wxParse/wxParse.wxml', oIfC, e_, d_);
       if (oKfC) {
         var oJfC = _1(21,oFfC,oEfC,gg);
         oKfC(oJfC,oJfC,oHfC, gg);
       } else _w(oIfC, './lib/wxParse/wxParse.wxml', 0, 0);_(oDfC,oHfC);return oDfC;};_2(25, oBfC, e, s, gg, oAfC, "item", "index", '');_(ozeC,oAfC);_(ofdC, ozeC);
      }_(ocdC,ofdC);
      }else if (_o(13, e, s, gg)) {
        ocdC.wxVkey = 2;var oNfC = _v();
       var oOfC = _o(44, e, s, gg);
       var oQfC = _gd('./lib/wxParse/wxParse.wxml', oOfC, e_, d_);
       if (oQfC) {
         var oPfC = _1(21,e,s,gg);
         oQfC(oPfC,oPfC,oNfC, gg);
       } else _w(oOfC, './lib/wxParse/wxParse.wxml', 0, 0);_(ocdC,oNfC);
      } _(r,ocdC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };d_["./lib/wxParse/wxParse.wxml"]["wxParse11"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParse11'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var oSfC = _v();
      if (_o(16, e, s, gg)) {
        oSfC.wxVkey = 1;var oVfC = _v();
      if (_o(22, e, s, gg)) {
        oVfC.wxVkey = 1;var oYfC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oZfC = _v();var oafC = function(oefC,odfC,ocfC,gg){var ogfC = _v();
       var ohfC = _o(55, oefC, odfC, gg);
       var ojfC = _gd('./lib/wxParse/wxParse.wxml', ohfC, e_, d_);
       if (ojfC) {
         var oifC = _1(21,oefC,odfC,gg);
         ojfC(oifC,oifC,ogfC, gg);
       } else _w(ohfC, './lib/wxParse/wxParse.wxml', 0, 0);_(ocfC,ogfC);return ocfC;};_2(25, oafC, e, s, gg, oZfC, "item", "index", '');_(oYfC,oZfC);_(oVfC,oYfC);
      }else if (_o(28, e, s, gg)) {
        oVfC.wxVkey = 2;var omfC = _n("view");_r(omfC, 'class', 29, e, s, gg);var onfC = _n("view");_r(onfC, 'class', 30, e, s, gg);var oofC = _n("view");_r(oofC, 'class', 31, e, s, gg);var opfC = _n("view");_r(opfC, 'class', 32, e, s, gg);_(oofC,opfC);_(onfC,oofC);var oqfC = _n("view");_r(oqfC, 'class', 31, e, s, gg);var orfC = _v();var osfC = function(owfC,ovfC,oufC,gg){var oyfC = _v();
       var ozfC = _o(55, owfC, ovfC, gg);
       var oAgC = _gd('./lib/wxParse/wxParse.wxml', ozfC, e_, d_);
       if (oAgC) {
         var o_fC = _1(21,owfC,ovfC,gg);
         oAgC(o_fC,o_fC,oyfC, gg);
       } else _w(ozfC, './lib/wxParse/wxParse.wxml', 0, 0);_(oufC,oyfC);return oufC;};_2(25, osfC, e, s, gg, orfC, "item", "index", '');_(oqfC,orfC);_(onfC,oqfC);_(omfC,onfC);_(oVfC,omfC);
      }else if (_o(33, e, s, gg)) {
        oVfC.wxVkey = 3;var oDgC = _v();
       var oEgC = _o(34, e, s, gg);
       var oGgC = _gd('./lib/wxParse/wxParse.wxml', oEgC, e_, d_);
       if (oGgC) {
         var oFgC = _1(21,e,s,gg);
         oGgC(oFgC,oFgC,oDgC, gg);
       } else _w(oEgC, './lib/wxParse/wxParse.wxml', 0, 0);_(oVfC,oDgC);
      }else if (_o(35, e, s, gg)) {
        oVfC.wxVkey = 4;var oJgC = _v();
       var oKgC = _o(36, e, s, gg);
       var oMgC = _gd('./lib/wxParse/wxParse.wxml', oKgC, e_, d_);
       if (oMgC) {
         var oLgC = _1(21,e,s,gg);
         oMgC(oLgC,oLgC,oJgC, gg);
       } else _w(oKgC, './lib/wxParse/wxParse.wxml', 0, 0);_(oVfC,oJgC);
      }else if (_o(37, e, s, gg)) {
        oVfC.wxVkey = 5;var oPgC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oQgC = _v();var oRgC = function(oVgC,oUgC,oTgC,gg){var oXgC = _v();
       var oYgC = _o(55, oVgC, oUgC, gg);
       var oagC = _gd('./lib/wxParse/wxParse.wxml', oYgC, e_, d_);
       if (oagC) {
         var oZgC = _1(21,oVgC,oUgC,gg);
         oagC(oZgC,oZgC,oXgC, gg);
       } else _w(oYgC, './lib/wxParse/wxParse.wxml', 0, 0);_(oTgC,oXgC);return oTgC;};_2(25, oRgC, e, s, gg, oQgC, "item", "index", '');_(oPgC,oQgC);_(oVfC,oPgC);
      }else if (_o(42, e, s, gg)) {
        oVfC.wxVkey = 6;var odgC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oegC = _v();var ofgC = function(ojgC,oigC,ohgC,gg){var olgC = _v();
       var omgC = _o(55, ojgC, oigC, gg);
       var oogC = _gd('./lib/wxParse/wxParse.wxml', omgC, e_, d_);
       if (oogC) {
         var ongC = _1(21,ojgC,oigC,gg);
         oogC(ongC,ongC,olgC, gg);
       } else _w(omgC, './lib/wxParse/wxParse.wxml', 0, 0);_(ohgC,olgC);return ohgC;};_2(25, ofgC, e, s, gg, oegC, "item", "index", '');_(odgC,oegC);_(oVfC,odgC);
      }else {
        oVfC.wxVkey = 7;var opgC = _m( "view", ["style", 1,"class", 42], e, s, gg);var orgC = _v();var osgC = function(owgC,ovgC,ougC,gg){var oygC = _v();
       var ozgC = _o(55, owgC, ovgC, gg);
       var oAhC = _gd('./lib/wxParse/wxParse.wxml', ozgC, e_, d_);
       if (oAhC) {
         var o_gC = _1(21,owgC,ovgC,gg);
         oAhC(o_gC,o_gC,oygC, gg);
       } else _w(ozgC, './lib/wxParse/wxParse.wxml', 0, 0);_(ougC,oygC);return ougC;};_2(25, osgC, e, s, gg, orgC, "item", "index", '');_(opgC,orgC);_(oVfC, opgC);
      }_(oSfC,oVfC);
      }else if (_o(13, e, s, gg)) {
        oSfC.wxVkey = 2;var oDhC = _v();
       var oEhC = _o(44, e, s, gg);
       var oGhC = _gd('./lib/wxParse/wxParse.wxml', oEhC, e_, d_);
       if (oGhC) {
         var oFhC = _1(21,e,s,gg);
         oGhC(oFhC,oFhC,oDhC, gg);
       } else _w(oEhC, './lib/wxParse/wxParse.wxml', 0, 0);_(oSfC,oDhC);
      } _(r,oSfC);
    }catch(err){
    p_[b]=false
    throw err
    }
    p_[b]=false
    return r
    };
  var m0=function(e,s,r,gg){
    
    return r;
  };
        e_["./lib/wxParse/wxParse.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};d_["./pages/goods/goods.wxml"] = {};
  var m1=function(e,s,r,gg){
    var oYhC = e_["./pages/goods/goods.wxml"].i;var oZhC = _n("view");_r(oZhC, 'class', 56, e, s, gg);var oahC = _m( "scroll-view", ["bindscroll", 57,"class", 1,"scrollIntoView", 2,"scrollY", 3], e, s, gg);var obhC = _m( "swiper", ["autoplay", 60,"indicatorDots", 0,"class", 1,"duration", 2,"id", 3,"interval", 4], e, s, gg);var ochC = _v();var odhC = function(ohhC,oghC,ofhC,gg){var oehC = _n("swiper-item");var ojhC = _m( "image", ["backgroundSize", 67,"src", 1], ohhC, oghC, gg);_(oehC,ojhC);_(ofhC, oehC);return ofhC;};_2(65, odhC, e, s, gg, ochC, "item", "index", '{{item.id}}');_(obhC,ochC);_(oahC,obhC);var okhC = _n("view");_r(okhC, 'class', 69, e, s, gg);var olhC = _n("view");_r(olhC, 'class', 70, e, s, gg);var omhC = _n("text");_r(omhC, 'class', 71, e, s, gg);var onhC = _o(72, e, s, gg);_(omhC,onhC);_(olhC,omhC);var oohC = _m( "image", ["bindtap", 73,"class", 1,"id", 2,"src", 3], e, s, gg);_(olhC,oohC);var ophC = _n("text");_r(ophC, 'class', 77, e, s, gg);_(olhC,ophC);var oqhC = _n("text");_r(oqhC, 'class', 78, e, s, gg);var orhC = _o(79, e, s, gg);_(oqhC,orhC);_(olhC,oqhC);var oshC = _v();
      if (_o(80, e, s, gg)) {
        oshC.wxVkey = 1;var othC = _n("view");_r(othC, 'class', 81, e, s, gg);var ovhC = _n("navigator");_r(ovhC, 'url', 82, e, s, gg);var owhC = _n("text");var oxhC = _o(80, e, s, gg);_(owhC,oxhC);_(ovhC,owhC);_(othC,ovhC);_(oshC, othC);
      } _(olhC,oshC);_(okhC,olhC);_(oahC,okhC);var oyhC = _n("view");_r(oyhC, 'class', 83, e, s, gg);_(oahC,oyhC);var ozhC = _m( "view", ["bindtap", 84,"class", 1], e, s, gg);var o_hC = _n("view");_r(o_hC, 'class', 86, e, s, gg);var oAiC = _o(87, e, s, gg);_(o_hC,oAiC);_(ozhC,o_hC);var oBiC = _m( "image", ["class", 88,"src", 1], e, s, gg);_(ozhC,oBiC);_(oahC,ozhC);var oCiC = _n("view");_r(oCiC, 'class', 83, e, s, gg);_(oahC,oCiC);var oDiC = _m( "view", ["bindtap", -1,"class", 90], e, s, gg);var oEiC = _n("view");_r(oEiC, 'class', 86, e, s, gg);var oFiC = _o(91, e, s, gg);_(oEiC,oFiC);_(oDiC,oEiC);var oGiC = _m( "image", ["class", 88,"src", 1], e, s, gg);_(oDiC,oGiC);_(oahC,oDiC);var oHiC = _n("view");_r(oHiC, 'class', 90, e, s, gg);var oIiC = _n("view");_r(oIiC, 'class', 86, e, s, gg);var oJiC = _n("view");_r(oJiC, 'class', 92, e, s, gg);var oKiC = _o(93, e, s, gg);_(oJiC,oKiC);_(oIiC,oJiC);var oLiC = _n("view");_r(oLiC, 'class', 94, e, s, gg);var oMiC = _o(95, e, s, gg);_(oLiC,oMiC);_(oIiC,oLiC);_(oHiC,oIiC);var oNiC = _m( "image", ["class", 88,"src", 1], e, s, gg);_(oHiC,oNiC);_(oahC,oHiC);var oOiC = _n("view");_r(oOiC, 'class', 83, e, s, gg);_(oahC,oOiC);var oPiC = _n("view");_r(oPiC, 'class', 83, e, s, gg);_(oahC,oPiC);var oQiC = _n("view");_r(oQiC, 'class', 90, e, s, gg);var oRiC = _n("view");_r(oRiC, 'class', 96, e, s, gg);var oSiC = _o(97, e, s, gg);_(oRiC,oSiC);_(oQiC,oRiC);_(oahC,oQiC);var oTiC = _n("view");_r(oTiC, 'class', 98, e, s, gg);var oUiC = _n("view");_r(oUiC, 'class', 98, e, s, gg);var oViC = _n("view");_r(oViC, 'class', 99, e, s, gg);var oWiC = _n("view");_r(oWiC, 'class', 100, e, s, gg);_(oViC,oWiC);_(oUiC,oViC);var oXiC = _n("view");_r(oXiC, 'class', 101, e, s, gg);var oYiC = _n("view");_r(oYiC, 'class', 102, e, s, gg);_ai(oYhC, '../../lib/wxParse/wxParse.wxml', e_, './pages/goods/goods.wxml', 0, 0);var oaiC = _v();
       var obiC = _o(103, e, s, gg);
       var odiC = _gd('./pages/goods/goods.wxml', obiC, e_, d_);
       if (odiC) {
         var ociC = _1(104,e,s,gg);
         odiC(ociC,ociC,oaiC, gg);
       } else _w(obiC, './pages/goods/goods.wxml', 0, 0);_(oYiC,oaiC);_(oXiC,oYiC);var oeiC = _v();var ofiC = function(ojiC,oiiC,ohiC,gg){var ogiC = _n("view");_r(ogiC, 'class', 106, ojiC, oiiC, gg);var oliC = _m( "image", ["src", 68,"class", 39,"mode", 40], ojiC, oiiC, gg);_(ogiC,oliC);_(ohiC, ogiC);return ohiC;};_2(105, ofiC, e, s, gg, oeiC, "item", "index", '');_(oXiC,oeiC);var omiC = _m( "view", ["data-opt", 63,"bindtap", 46,"class", 47], e, s, gg);var oniC = _o(111, e, s, gg);_(omiC,oniC);_(oXiC,omiC);_(oUiC,oXiC);_(oTiC,oUiC);_(oahC,oTiC);_(oZhC,oahC);var ooiC = _m( "view", ["data-opt", 63,"bindtap", 46,"class", 49], e, s, gg);var opiC = _o(113, e, s, gg);_(ooiC,opiC);_(oZhC,ooiC);var oqiC = _v();
      if (_o(114, e, s, gg)) {
        oqiC.wxVkey = 1;var oriC = _n("view");_r(oriC, 'class', 115, e, s, gg);var otiC = _n("view");_r(otiC, 'class', 116, e, s, gg);var ouiC = _n("navigator");_r(ouiC, 'url', 117, e, s, gg);var oviC = _n("text");_r(oviC, 'class', 86, e, s, gg);var owiC = _o(118, e, s, gg);_(oviC,owiC);_(ouiC,oviC);var oxiC = _n("text");_r(oxiC, 'class', 88, e, s, gg);var oyiC = _o(119, e, s, gg);_(oxiC,oyiC);_(ouiC,oxiC);_(otiC,ouiC);_(oriC,otiC);var oziC = _n("view");_r(oziC, 'class', 120, e, s, gg);var o_iC = _n("view");_r(o_iC, 'class', 26, e, s, gg);var oAjC = _n("view");_r(oAjC, 'class', 121, e, s, gg);var oBjC = _n("view");_r(oBjC, 'class', 122, e, s, gg);var oCjC = _n("image");_r(oCjC, 'src', 123, e, s, gg);_(oBjC,oCjC);var oDjC = _n("text");var oEjC = _o(124, e, s, gg);_(oDjC,oEjC);_(oBjC,oDjC);_(oAjC,oBjC);var oFjC = _n("view");_r(oFjC, 'class', 125, e, s, gg);var oGjC = _o(126, e, s, gg);_(oFjC,oGjC);_(oAjC,oFjC);_(o_iC,oAjC);var oHjC = _n("view");_r(oHjC, 'class', 127, e, s, gg);var oIjC = _o(128, e, s, gg);_(oHjC,oIjC);_(o_iC,oHjC);var oJjC = _v();
      if (_o(129, e, s, gg)) {
        oJjC.wxVkey = 1;var oKjC = _n("view");_r(oKjC, 'class', 130, e, s, gg);var oMjC = _v();var oNjC = function(oRjC,oQjC,oPjC,gg){var oOjC = _m( "image", ["class", 132,"src", 1], oRjC, oQjC, gg);_(oPjC, oOjC);return oPjC;};_2(131, oNjC, e, s, gg, oMjC, "item", "index", '{{item.id}}');_(oKjC,oMjC);_(oJjC, oKjC);
      } _(o_iC,oJjC);_(oziC,o_iC);_(oriC,oziC);_(oqiC, oriC);
      } _(oZhC,oqiC);var oTjC = _n("view");_r(oTjC, 'class', 134, e, s, gg);var oUjC = _n("view");var oVjC = _v();var oWjC = function(oajC,oZjC,oYjC,gg){var oXjC = _m( "image", ["class", 132,"src", 1], oajC, oZjC, gg);_(oYjC, oXjC);return oYjC;};_2(135, oWjC, e, s, gg, oVjC, "item", "index", '{{item.id}}');_(oUjC,oVjC);_(oTjC,oUjC);_(oZhC,oTjC);var ocjC = _v();
      if (_o(136, e, s, gg)) {
        ocjC.wxVkey = 1;var odjC = _n("view");_r(odjC, 'class', 137, e, s, gg);var ofjC = _n("view");_r(ofjC, 'class', 116, e, s, gg);var ogjC = _n("view");_r(ogjC, 'class', 138, e, s, gg);_(ofjC,ogjC);var ohjC = _n("text");_r(ohjC, 'class', 139, e, s, gg);var oijC = _o(140, e, s, gg);_(ohjC,oijC);_(ofjC,ohjC);_(odjC,ofjC);var ojjC = _n("view");_r(ojjC, 'class', 120, e, s, gg);var okjC = _v();var oljC = function(opjC,oojC,onjC,gg){var omjC = _n("view");_r(omjC, 'class', 26, opjC, oojC, gg);var orjC = _n("navigator");_r(orjC, 'url', 142, opjC, oojC, gg);var osjC = _m( "image", ["backgroundSize", 67,"class", 65,"src", 76], opjC, oojC, gg);_(orjC,osjC);var otjC = _n("text");_r(otjC, 'class', 71, opjC, oojC, gg);var oujC = _o(144, opjC, oojC, gg);_(otjC,oujC);_(orjC,otjC);var ovjC = _n("text");_r(ovjC, 'class', 78, opjC, oojC, gg);var owjC = _o(145, opjC, oojC, gg);_(ovjC,owjC);_(orjC,ovjC);_(omjC,orjC);_(onjC, omjC);return onjC;};_2(141, oljC, e, s, gg, okjC, "item", "index", '{{item.id}}');_(ojjC,okjC);_(odjC,ojjC);_(ocjC, odjC);
      } _(oZhC,ocjC);_(r,oZhC);var oxjC = _m( "view", ["class", 146,"hidden", 1], e, s, gg);var oyjC = _n("view");_r(oyjC, 'class', 148, e, s, gg);var ozjC = _m( "view", ["catchtap", 149,"class", 1], e, s, gg);var o_jC = _m( "image", ["class", 151,"src", 1], e, s, gg);_(ozjC,o_jC);_(oyjC,ozjC);var oAkC = _n("view");_r(oAkC, 'class', 153, e, s, gg);var oBkC = _m( "image", ["class", 132,"src", 22], e, s, gg);_(oAkC,oBkC);var oCkC = _n("view");_r(oCkC, 'class', 121, e, s, gg);var oDkC = _n("view");_r(oDkC, 'class', 70, e, s, gg);var oEkC = _n("view");_r(oEkC, 'class', 155, e, s, gg);var oFkC = _o(156, e, s, gg);_(oEkC,oFkC);_(oDkC,oEkC);var oGkC = _v();
      if (_o(157, e, s, gg)) {
        oGkC.wxVkey = 1;var oHkC = _n("view");_r(oHkC, 'class', 158, e, s, gg);var oJkC = _o(159, e, s, gg);_(oHkC,oJkC);_(oGkC, oHkC);
      } _(oDkC,oGkC);_(oCkC,oDkC);_(oAkC,oCkC);_(oyjC,oAkC);var oKkC = _n("view");_r(oKkC, 'class', 160, e, s, gg);var oLkC = _v();var oMkC = function(oQkC,oPkC,oOkC,gg){var oNkC = _m( "view", ["data-id", 66,"bindtap", 96,"class", 97], oQkC, oPkC, gg);var oSkC = _n("view");_r(oSkC, 'class', 71, oQkC, oPkC, gg);var oTkC = _o(164, oQkC, oPkC, gg);_(oSkC,oTkC);_(oNkC,oSkC);_(oOkC, oNkC);return oOkC;};_2(161, oMkC, e, s, gg, oLkC, "item", "index", '{{item.id}}');_(oKkC,oLkC);var oUkC = _n("view");_r(oUkC, 'class', 165, e, s, gg);var oVkC = _n("view");_r(oVkC, 'class', 71, e, s, gg);var oWkC = _o(166, e, s, gg);_(oVkC,oWkC);_(oUkC,oVkC);var oXkC = _n("view");_r(oXkC, 'class', 167, e, s, gg);var oYkC = _m( "view", ["bindtap", 168,"class", 1], e, s, gg);var oZkC = _o(170, e, s, gg);_(oYkC,oZkC);_(oXkC,oYkC);var oakC = _m( "input", ["disabled", 60,"class", 111,"type", 111,"value", 112], e, s, gg);_(oXkC,oakC);var obkC = _m( "view", ["bindtap", 173,"class", 1], e, s, gg);var ockC = _o(175, e, s, gg);_(obkC,ockC);_(oXkC,obkC);_(oUkC,oXkC);_(oKkC,oUkC);_(oyjC,oKkC);var odkC = _n("view");_r(odkC, 'class', 176, e, s, gg);var oekC = _n("view");_r(oekC, 'class', 177, e, s, gg);var ofkC = _o(178, e, s, gg);_(oekC,ofkC);_(odkC,oekC);var ogkC = _m( "view", ["bindtap", 179,"class", 1], e, s, gg);var ohkC = _o(181, e, s, gg);_(ogkC,ohkC);_(odkC,ogkC);_(oyjC,odkC);_(oxjC,oyjC);_(r,oxjC);var oikC = _n("view");_r(oikC, 'class', 182, e, s, gg);var ojkC = _m( "view", ["bindtap", -1,"class", 183], e, s, gg);var okkC = _n("view");_r(okkC, 'class', 184, e, s, gg);var olkC = _m( "image", ["class", 151,"src", 34], e, s, gg);_(okkC,olkC);_(ojkC,okkC);var omkC = _n("view");_r(omkC, 'class', 186, e, s, gg);var onkC = _o(187, e, s, gg);_(omkC,onkC);_(ojkC,omkC);_(oikC,ojkC);var ookC = _m( "view", ["bindtap", 188,"class", 1], e, s, gg);var opkC = _n("view");_r(opkC, 'class', 184, e, s, gg);var oqkC = _m( "image", ["class", 151,"src", 39], e, s, gg);_(opkC,oqkC);_(ookC,opkC);var orkC = _n("view");_r(orkC, 'class', 186, e, s, gg);var oskC = _o(191, e, s, gg);_(orkC,oskC);_(ookC,orkC);_(oikC,ookC);var otkC = _n("view");_r(otkC, 'class', 192, e, s, gg);var oukC = _n("text");_r(oukC, 'class', 193, e, s, gg);var ovkC = _o(194, e, s, gg);_(oukC,ovkC);_(otkC,oukC);var owkC = _n("view");_r(owkC, 'class', 184, e, s, gg);var oxkC = _m( "image", ["class", 151,"bindtap", 44,"src", 45], e, s, gg);_(owkC,oxkC);_(otkC,owkC);var oykC = _n("view");_r(oykC, 'class', 186, e, s, gg);var ozkC = _o(197, e, s, gg);_(oykC,ozkC);_(otkC,oykC);_(oikC,otkC);var o_kC = _m( "view", ["bindtap", 198,"class", 1], e, s, gg);var oAlC = _o(200, e, s, gg);_(o_kC,oAlC);_(oikC,o_kC);var oBlC = _m( "view", ["class", 70,"bindtap", 131], e, s, gg);var oClC = _o(202, e, s, gg);_(oBlC,oClC);_(oikC,oBlC);_(r,oikC);oYhC.pop();
    return r;
  };
        e_["./pages/goods/goods.wxml"]={f:m1,j:[],i:[],ti:["../../lib/wxParse/wxParse.wxml"],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:.container{margin-bottom:%%?100rpx?%%}.goodsimgs{width:%%?750rpx?%%;height:%%?750rpx?%%}.list{height:100%}.goodsimgs wx-image{width:%%?750rpx?%%;height:%%?750rpx?%%}.service-policy{width:%%?750rpx?%%;height:%%?73rpx?%%;background:#f4f4f4;padding:0 %%?31.25rpx?%%;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between}.service-policy .item{background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/servicePolicyRed-518d32d74b.png) 0 center no-repeat;background-size:%%?10rpx?%%;padding-left:%%?15rpx?%%;display:flex;align-items:center;font-size:%%?25rpx?%%;color:#666}.goods-info{width:100%;height:%%?245rpx?%%;background:#fff}.goods-info .c{display:block;width:96%;height:100%;margin:0 2%}.goods-info .c wx-text{display:block;width:100%}.goods-info .name{margin-top:%%?30rpx?%%;line-height:%%?50rpx?%%;height:%%?100rpx?%%;font-size:%%?32rpx?%%;color:#333;overflow-y:hidden}.goods-info .desc{height:%%?0rpx?%%;font-size:%%?26rpx?%%;line-height:%%?60rpx?%%;color:#999}.goods-info .price{height:%%?45rpx?%%;font-size:%%?38rpx?%%;font-weight:700;line-height:%%?45rpx?%%;color:#cc2020;margin-bottom:%%?40rpx?%%}.goods-info .brand{margin-top:%%?23rpx?%%;min-height:%%?40rpx?%%;text-align:center}.goods-info .brand wx-text{display:inline-block;width:auto;padding:%%?2rpx?%% %%?30rpx?%% %%?2rpx?%% %%?10.5rpx?%%;line-height:%%?35.5rpx?%%;border:%%?1rpx?%% solid #f48f18;font-size:%%?25rpx?%%;color:#f48f18;border-radius:%%?4rpx?%%;background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/detailTagArrow-18bee52dab.png) 95% center no-repeat;background-size:%%?10.75rpx?%% %%?18.75rpx?%%}.section-nav{width:%%?750rpx?%%;height:%%?89rpx?%%;background:#fff;border-bottom:%%?1rpx?%% solid #f2f2f2}.section-nav .t{float:left;width:%%?600rpx?%%;height:%%?88rpx?%%;line-height:%%?88rpx?%%;font-size:%%?29rpx?%%;color:#333;margin-left:%%?31.25rpx?%%}.section-nav .i{float:right;line-height:%%?88rpx?%%;height:%%?30rpx?%%;width:%%?30rpx?%%;margin-right:%%?16rpx?%%;margin-top:%%?28rpx?%%}.section-act .t{float:left;display:flex;align-items:center;width:%%?600rpx?%%;height:%%?88rpx?%%;overflow:hidden;line-height:%%?88rpx?%%;font-size:%%?29rpx?%%;color:#999;margin-left:%%?31.25rpx?%%}.section-act .label{color:#999}.section-act .tag{display:flex;align-items:center;padding:0 %%?10rpx?%%;border-radius:%%?3rpx?%%;height:%%?37rpx?%%;width:auto;color:#f48f18;overflow:hidden;border:%%?1rpx?%% solid #f48f18;font-size:%%?25rpx?%%;margin:0 %%?10rpx?%%}.section-act .text{display:flex;align-items:center;height:%%?37rpx?%%;width:auto;overflow:hidden;color:#f48f18;font-size:%%?29rpx?%%}.comments{width:100%;height:auto;padding-left:%%?30rpx?%%;background:#fff;margin:%%?20rpx?%% 0}.comments .h{height:%%?102.5rpx?%%;line-height:%%?100.5rpx?%%;width:%%?718.75rpx?%%;padding-right:%%?16rpx?%%;border-bottom:%%?1rpx?%% solid #d9d9d9}.comments .h .t{display:block;float:left;width:50%;font-size:%%?38.5rpx?%%;color:#333}.comments .h .i{display:block;float:right;width:%%?164rpx?%%;height:%%?100.5rpx?%%;line-height:%%?100.5rpx?%%;background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/address-right-990628faa7.png) right center no-repeat;background-size:%%?52rpx?%%}.comments .b{height:auto;width:%%?720rpx?%%}.comments .item{height:auto;width:%%?720rpx?%%;overflow:hidden}.comments .info{height:%%?127rpx?%%;width:100%;padding:%%?33rpx?%% 0 %%?27rpx?%% 0}.comments .user{float:left;width:auto;height:%%?67rpx?%%;line-height:%%?67rpx?%%;font-size:0}.comments .user wx-image{float:left;width:%%?67rpx?%%;height:%%?67rpx?%%;margin-right:%%?17rpx?%%;border-radius:50%}.comments .user wx-text{display:inline-block;width:auto;height:%%?66rpx?%%;overflow:hidden;font-size:%%?29rpx?%%;line-height:%%?66rpx?%%}.comments .time{display:block;float:right;width:auto;height:%%?67rpx?%%;line-height:%%?67rpx?%%;color:#7f7f7f;font-size:%%?25rpx?%%;margin-right:%%?30rpx?%%}.comments .content{width:%%?720rpx?%%;padding-right:%%?30rpx?%%;line-height:%%?45.8rpx?%%;font-size:%%?29rpx?%%;margin-bottom:%%?24rpx?%%}.comments .imgs{width:%%?720rpx?%%;height:auto;margin-bottom:%%?25rpx?%%}.comments .imgs .img{height:%%?150rpx?%%;width:%%?150rpx?%%;margin-right:%%?28rpx?%%}.comments .spec{width:%%?720rpx?%%;padding-right:%%?30rpx?%%;line-height:%%?30rpx?%%;font-size:%%?24rpx?%%;color:#999;margin-bottom:%%?30rpx?%%}.goods-attr{width:%%?750rpx?%%;height:auto;overflow:hidden;padding:0 %%?31.25rpx?%% %%?25rpx?%% %%?31.25rpx?%%;background:#fff}.goods-attr .t{width:%%?687.5rpx?%%;height:%%?104rpx?%%;line-height:%%?104rpx?%%;font-size:%%?38.5rpx?%%}.goods-attr .item{width:%%?687.5rpx?%%;height:%%?68rpx?%%;padding:%%?11rpx?%% %%?20rpx?%%;margin-bottom:%%?11rpx?%%;background:#f7f7f7;font-size:%%?38.5rpx?%%}.goods-attr .left{float:left;font-size:%%?25rpx?%%;width:%%?134rpx?%%;height:%%?45rpx?%%;line-height:%%?45rpx?%%;overflow:hidden;color:#999}.goods-attr .right{float:left;font-size:%%?36.5rpx?%%;margin-left:%%?20rpx?%%;width:%%?480rpx?%%;height:%%?45rpx?%%;line-height:%%?45rpx?%%;overflow:hidden;color:#333}.detail{width:%%?750rpx?%%;height:auto;overflow:hidden}.detail wx-image{width:%%?750rpx?%%;display:block}.common-problem{width:%%?750rpx?%%;height:auto;overflow:hidden}.common-problem .h{position:relative;height:%%?145.5rpx?%%;width:%%?750rpx?%%;padding:%%?56.25rpx?%% 0;background:#fff;text-align:center}.common-problem .h .line{display:inline-block;position:absolute;top:%%?72rpx?%%;left:0;z-index:7;height:%%?1rpx?%%;margin-left:%%?225rpx?%%;width:%%?300rpx?%%;background:#ccc}.common-problem .h .title{display:inline-block;position:absolute;top:%%?56.125rpx?%%;left:0;z-index:3;height:%%?33rpx?%%;margin-left:%%?285rpx?%%;width:%%?180rpx?%%;background:#fff}.common-problem .b{width:%%?750rpx?%%;height:auto;overflow:hidden;padding:%%?0rpx?%% %%?30rpx?%%;background:#fff}.common-problem .item{height:auto;overflow:hidden;padding-bottom:%%?25rpx?%%}.common-problem .question-box .spot{float:left;display:block;height:%%?8rpx?%%;width:%%?8rpx?%%;background:#b4282d;border-radius:50%;margin-top:%%?11rpx?%%}.common-problem .question-box .question{float:left;line-height:%%?30rpx?%%;padding-left:%%?8rpx?%%;display:block;font-size:%%?26rpx?%%;padding-bottom:%%?15rpx?%%;color:#303030}.common-problem .answer{line-height:%%?36rpx?%%;padding-left:%%?16rpx?%%;font-size:%%?26rpx?%%;color:#787878}.related-goods{width:%%?750rpx?%%;height:auto;overflow:hidden}.related-goods .h{position:relative;height:%%?145.5rpx?%%;width:%%?750rpx?%%;padding:%%?56.25rpx?%% 0;background:#fff;text-align:center;border-bottom:%%?1rpx?%% solid #f4f4f4}.related-goods .h .line{display:inline-block;position:absolute;top:%%?72rpx?%%;left:0;z-index:2;height:%%?1rpx?%%;margin-left:%%?225rpx?%%;width:%%?300rpx?%%;background:#ccc}.related-goods .h .title{display:inline-block;position:absolute;top:%%?56.125rpx?%%;left:0;z-index:3;height:%%?33rpx?%%;margin-left:%%?285rpx?%%;width:%%?180rpx?%%;background:#fff}.related-goods .b{width:%%?750rpx?%%;height:auto;overflow:hidden}.related-goods .b .item{float:left;background:#fff;width:%%?375rpx?%%;height:auto;overflow:hidden;text-align:center;padding:%%?15rpx?%% %%?31.25rpx?%%;border-right:%%?1rpx?%% solid #f4f4f4;border-bottom:%%?1rpx?%% solid #f4f4f4}.related-goods .item .img{width:%%?311.45rpx?%%;height:%%?311.45rpx?%%}.related-goods .item .name{display:block;width:%%?311.45rpx?%%;height:%%?35rpx?%%;margin:%%?11.5rpx?%% 0 %%?15rpx?%% 0;text-align:center;overflow:hidden;font-size:%%?30rpx?%%;color:#333}.related-goods .item .price{display:block;width:%%?311.45rpx?%%;height:%%?30rpx?%%;text-align:center;font-size:%%?30rpx?%%;color:#b4282d}.bottom-btn{position:fixed;left:0;bottom:0;z-index:2;width:%%?750rpx?%%;height:%%?98rpx?%%;display:flex;background:#fff}.bottom-btn .l{float:left;height:%%?98rpx?%%;width:%%?136rpx?%%;border:%%?1rpx?%% solid #f4f4f4}.bottom-btn .l .l-text{width:%%?128rpx?%%;height:%%?30rpx?%%;text-align:center;font-size:%%?20rpx?%%;color:#333}.bottom-btn .l .l-imgaes{margin-left:34%;margin-top:10%}.bottom-btn .l .l-customserver{pointer-events:none;cursor:default;opacity:.6;width:%%?132rpx?%%}.bottom-btn .l.l-collect{border-right:none;border-left:none;text-align:center;width:%%?132rpx?%%}.bottom-btn .l.l-cart{width:%%?132rpx?%%}.bottom-btn .l.l-cart .cart-count{height:%%?28rpx?%%;width:%%?28rpx?%%;z-index:10;position:absolute;top:%%?6rpx?%%;left:47%;background:#b4282d;text-align:center;font-size:%%?18rpx?%%;color:#fff;line-height:%%?28rpx?%%;border-radius:50%}.bottom-btn .l .icon{display:block;height:%%?44rpx?%%;width:%%?44rpx?%%}.bottom-btn .c{background:#cc2020;float:left;height:%%?98rpx?%%;line-height:%%?96rpx?%%;flex:1;text-align:center;color:#fffefe}.bottom-btn .r{float:left;height:%%?98rpx?%%;line-height:%%?98rpx?%%;flex:1;text-align:center;color:#666;font-size:%%?30rpx?%%;border-top:%%?1rpx?%% solid #f4f4f4;border-bottom:%%?1rpx?%% solid #f4f4f4}.wxParse{margin:0 5px;font-family:Helvetica,sans-serif;font-size:%%?28rpx?%%;color:#666;line-height:1.8}wx-view{word-break:break-all;overflow:auto}.wxParse-inline{display:inline;margin:0;padding:0}.wxParse-div{margin:0;padding:0}.wxParse-h1{font-size:2em;margin:.67em 0}.wxParse-h2{font-size:1.5em;margin:.75em 0}.wxParse-h3{font-size:1.17em;margin:.83em 0}.wxParse-h4{margin:1.12em 0}.wxParse-h5{font-size:.83em;margin:1.5em 0}.wxParse-h6{font-size:.75em;margin:1.67em 0}.wxParse-h1{font-size:18px;font-weight:400;margin-bottom:.9em}.wxParse-h2{font-size:16px;font-weight:400;margin-bottom:.34em}.wxParse-h3{font-weight:400;font-size:15px;margin-bottom:.34em}.wxParse-h4{font-weight:400;font-size:14px;margin-bottom:.24em}.wxParse-h5{font-weight:400;font-size:13px;margin-bottom:.14em}.wxParse-h6{font-weight:400;font-size:12px;margin-bottom:.04em}.wxParse-b,.wxParse-h1,.wxParse-h2,.wxParse-h3,.wxParse-h4,.wxParse-h5,.wxParse-h6,.wxParse-strong{font-weight:bolder}.wxParse-address,.wxParse-cite,.wxParse-em,.wxParse-i,.wxParse-var{font-style:italic}.wxParse-code,.wxParse-kbd,.wxParse-pre,.wxParse-samp,.wxParse-tt{font-family:monospace}.wxParse-pre{white-space:pre}.wxParse-big{font-size:1.17em}.wxParse-small,.wxParse-sub,.wxParse-sup{font-size:.83em}.wxParse-sub{vertical-align:sub}.wxParse-sup{vertical-align:super}.wxParse-del,.wxParse-s,.wxParse-strike{text-decoration:line-through}.wxParse-strong,wx-wxParse-s{display:inline}.wxParse-a{color:#00bfff;word-break:break-all;overflow:auto}.wxParse-video{text-align:center;margin:10px 0}.wxParse-video-video{width:100%}.wxParse-img{background-color:#efefef;overflow:hidden;width:40px;height:40px}.wxParse-blockquote{margin:0;padding:10px 0 10px 5px;font-family:Courier,Calibri,"宋体";background:#f5f5f5;border-left:3px solid #dbdbdb}.wxParse-code,.wxParse-wxxxcode-style{display:inline;background:#f5f5f5}.wxParse-ul{margin:%%?20rpx?%% %%?10rpx?%%}.wxParse-li,.wxParse-li-inner{display:flex;align-items:baseline;margin:%%?10rpx?%% 0}.wxParse-li-text{align-items:center;line-height:20px}.wxParse-li-circle{display:inline-flex;width:5px;height:5px;background-color:#333;margin-right:5px}.wxParse-li-square{display:inline-flex;width:%%?10rpx?%%;height:%%?10rpx?%%;background-color:#333;margin-right:5px}.wxParse-li-ring{display:inline-flex;width:%%?10rpx?%%;height:%%?10rpx?%%;border:%%?2rpx?%% solid #333;border-radius:50%;background-color:#fff;margin-right:5px}.wxParse-u{text-decoration:underline}.wxParse-hide{display:none}.WxEmojiView{align-items:center}.wxEmoji{width:16px;height:16px}.wxParse-tr{display:flex;border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0}.wxParse-td,.wxParse-th{flex:1;padding:5px;font-size:%%?28rpx?%%;border-left:1px solid #e0e0e0;word-break:break-all}.wxParse-td:last{border-top:1px solid #e0e0e0}.wxParse-th{background:#f0f0f0;border-top:1px solid #e0e0e0}.attr-pop-box{width:100%;height:100%;position:fixed;background:rgba(0,0,0,.5);z-index:8;bottom:0}.attr-pop{width:100%;height:%%?640rpx?%%;padding-top:%%?30rpx?%%;background:#fff;position:fixed;z-index:9;bottom:%%?0rpx?%%}.attr-pop .close{position:absolute;width:%%?48rpx?%%;height:%%?48rpx?%%;right:%%?31.25rpx?%%;overflow:hidden;top:%%?31.25rpx?%%}.attr-pop .close .icon{width:%%?48rpx?%%;height:%%?48rpx?%%}.attr-pop .img-info{width:100%;height:%%?177rpx?%%;margin-left:%%?30rpx?%%;overflow:hidden;margin-bottom:%%?41.5rpx?%%}.attr-pop .img{float:left;height:%%?177rpx?%%;width:%%?177rpx?%%;background:#f4f4f4;margin-right:%%?31.25rpx?%%}.attr-pop .info{float:left;height:%%?45rpx?%%;display:flex;color:#cc2020;font-size:%%?28rpx?%%}.attr-pop .info .c .p{color:#cc2020}.attr-pop .p{font-size:%%?33rpx?%%;color:#333;height:%%?33rpx?%%;line-height:%%?33rpx?%%;margin-bottom:%%?10rpx?%%}.attr-pop .a{font-size:%%?29rpx?%%;color:#333;height:%%?40rpx?%%;line-height:%%?40rpx?%%;position:absolute}.spec-con{width:100%;height:auto;margin-left:%%?30rpx?%%;overflow:hidden}.spec-con .name{height:%%?32rpx?%%;margin-bottom:%%?22rpx?%%;font-size:%%?29rpx?%%;color:#333;overflow:visible}.spec-con .values{height:auto;margin-bottom:%%?31.25rpx?%%;font-size:0}.spec-con .value{display:inline-block;height:%%?62rpx?%%;padding:0 %%?35rpx?%%;line-height:%%?56rpx?%%;text-align:center;margin-right:%%?25rpx?%%;margin-bottom:%%?16.5rpx?%%;border:%%?1rpx?%% solid #333;font-size:%%?25rpx?%%;color:#333}.spec-con .value.disable{border:%%?1rpx?%% solid #ccc;color:#ccc}.spec-con .value.selected{border:%%?1rpx?%% solid #b4282d;color:#b4282d}.spec-con .selected{border:%%?1rpx?%% solid #b4282d;color:#b4282d}.selected .name{color:#b4282d}.number-item .selnum{width:%%?322rpx?%%;height:%%?71rpx?%%;border:%%?1rpx?%% solid #ccc;display:flex}.number-item .cut{width:%%?93.75rpx?%%;height:100%;text-align:center;line-height:%%?65rpx?%%}.number-item .number{flex:1;height:100%;text-align:center;line-height:%%?68.75rpx?%%;border-left:%%?1rpx?%% solid #ccc;border-right:%%?1rpx?%% solid #ccc;float:left}.number-item .add{width:%%?93.75rpx?%%;height:100%;text-align:center;line-height:%%?65rpx?%%}.gray-fill{background:#f2f2f2;height:%%?15rpx?%%}.bottom-second-btn{height:%%?100rpx?%%;position:fixed;bottom:0;width:100%}.bsb-left{display:inline-block;height:inherit;width:50%;color:#fff;font-size:%%?34rpx?%%;line-height:%%?100rpx?%%;text-align:center}.bsb-right{display:inline-block;height:inherit;line-height:%%?100rpx?%%;color:#fff;width:50%;font-size:%%?34rpx?%%;background:#cc2020;color:#fffefe;text-align:center}.t .t-server-text{display:inline-block;float:left;font-size:%%?30rpx?%%;color:#333}.t .t-tip-text{display:inline-block;color:#999;font-size:%%?24rpx?%%;float:left;margin-left:%%?10rpx?%%}.section-nav .more-details{color:#999;font-size:%%?28rpx?%%;text-align:center;width:100%;height:%%?88rpx?%%;line-height:%%?88rpx?%%}.share-icon{width:%%?40rpx?%%;height:%%?40rpx?%%;float:right;margin-right:%%?60rpx?%%}.goods-item .detail-img{width:%%?750rpx?%%}.goods-desc{margin:%%?20rpx?%%}.no-more-data{text-align:center;margin:%%?20rpx?%% 0}.nodata-jump{text-align:center;display:none;position:fixed;bottom:%%?180rpx?%%;right:%%?0rpx?%%;height:%%?70rpx?%%;width:%%?125rpx?%%;line-height:%%?70rpx?%%;border-radius:%%?20rpx?%%;background:#f4f4f4;opacity:.5}.jumpTobtn{display:block}.hidden{display:none}@code-separator-line:__wxRoute = "pages/goods/goods";__wxRouteBegin = true;
define("pages/goods/goods.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var app = getApp();
var WxParse = require('../../lib/wxParse/wxParse.js');
var util = require('../../utils/util.js');
var api = require('../../config/api.js');
var user = require('../../services/user.js');
var wx_share_tmp = require('../../lib/wx/jweixin-1.0.0.js');

var Clipboard = require('../../lib/clipboard/clipboard.js');
Page({
  data: {
    Host: api.Host,
    id: 0,
    selected_p_id : null,
    goods: {},
    current_price:null,
    price_range:null,
    gallery: [],
    detailsGallery:[],
    attribute: [],
    issueList: [],
    comment: [],
    brand: {},
    specificationList: [],
    productList: [],
    relatedGoods: [],
    cartGoodsCount: 0,
    userHasCollect: 0,
    number: 1,
    checkedSpecText: '请选择规格数量',
    openAttr: false,
    goodsDetail: {},
    noCollectImage: "/static/images/icon_collect.png",
    hasCollectImage: "/static/images/icon_collect_checked.png",
    collectBackImage: "/static/images/icon_collect.png",
    add_or_buy: 1,
    scrollTop : 0,
    scrollHeight:0,
    share_code:null,
    toView: '',
    jumpTobtn: 'hide'

  },

  getGoodsInfo: function () {
    let that = this;
    util.request(api.GoodsDetail + that.data.id +'/', {}).then(function (res) {
        WxParse.wxParse('description', 'html', res[0].description, that, 5)
        that.setData({
          goods: res[0],
          gallery: res[0].images,
          detailsGallery: res[0].detail_images,
          goodsDetail: res[0].data,
          specificationList:res[0].children
        });
        if(res[0].children.length == 0){
            that.setData({
              selected_p_id: that.data.id,
              price_range:res[0].stockrecords[0].price_retail,
              current_price:res[0].stockrecords[0].price_retail,
            });
        }else {
            var children = res[0].children;
            var low_price = Number(children[0].stockrecords[0].price_retail);
            var height_price = 0
            var price_tmp
            for(var i=0; i<children.length; i++){
                price_tmp = Number(children[i].stockrecords[0].price_retail)
                if(price_tmp>height_price){
                    height_price = price_tmp
                }else if(price_tmp<low_price){
                    low_price = price_tmp
                }
            }
            if(height_price == low_price){
                that.setData({
                  price_range:height_price,
                  current_price:height_price,
                });
            }else {
                that.setData({
                  price_range:(low_price + '-' + height_price),
                  current_price:(low_price + '-' + height_price)
                });
            }
        }

        that.getCollectInfo();
    });

  },
  getGoodsRelated: function () {
    let that = this;
    util.request(api.GoodsRelated, { id: that.data.id }).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          relatedGoods: res.data.goodsList,
        });
      }
    });

  },

  //
  clickSkuValue: function (event) {
    let that = this;
    let specNameId = event.currentTarget.dataset.nameId;
    let specValueId = event.currentTarget.dataset.valueId;

    //判断是否可以点击

    //TODO 性能优化，可在wx:for中添加index，可以直接获取点击的属性名和属性值，不用循环
    let _specificationList = this.data.specificationList;
    for (let i = 0; i < _specificationList.length; i++) {
      if (_specificationList[i].specification_id == specNameId) {
        for (let j = 0; j < _specificationList[i].valueList.length; j++) {
          if (_specificationList[i].valueList[j].id == specValueId) {
            //如果已经选中，则反选
            if (_specificationList[i].valueList[j].checked) {
              _specificationList[i].valueList[j].checked = false;
            } else {
              _specificationList[i].valueList[j].checked = true;
            }
          } else {
            _specificationList[i].valueList[j].checked = false;
          }
        }
      }
    }
    this.setData({
      'specificationList': _specificationList
    });
    //重新计算spec改变后的信息
    this.changeSpecInfo();

    //重新计算哪些值不可以点击
  },
  select_cate_value: function(event){
      let that = this;
      let p_id = event.currentTarget.dataset.id;
      var specificationList = that.data.specificationList;
      var price_tmp
      var checkedSpecText_tmp
      for(var i=0; i<specificationList.length; i++){
          if(specificationList[i].id == p_id){
              specificationList[i].checked = true;
              price_tmp = specificationList[i].stockrecords[0].price_retail
              checkedSpecText_tmp = specificationList[i].cate_value
          }else {
              specificationList[i].checked = false
          }
      };
      this.setData({
        'specificationList': specificationList,
        selected_p_id: p_id,
        current_price: price_tmp,
        checkedSpecText:checkedSpecText_tmp
      });
  },

  //获取选中的规格信息
  getCheckedSpecValue: function () {
    let checkedValues = [];
    let _specificationList = this.data.specificationList;
    for (let i = 0; i < _specificationList.length; i++) {
      let _checkedObj = {
        nameId: _specificationList[i].specification_id,
        valueId: 0,
        valueText: ''
      };
      for (let j = 0; j < _specificationList[i].valueList.length; j++) {
        if (_specificationList[i].valueList[j].checked) {
          _checkedObj.valueId = _specificationList[i].valueList[j].id;
          _checkedObj.valueText = _specificationList[i].valueList[j].value;
        }
      }
      checkedValues.push(_checkedObj);
    }

    return checkedValues;

  },


  changeSpecInfo: function () {
    let checkedNameValue = this.getCheckedSpecValue();
    //设置选择的信息
    let checkedValue = checkedNameValue.filter(function (v) {
      if (v.valueId != 0) {
        return true;
      } else {
        return false;
      }
    }).map(function (v) {
      return v.valueText;
    });
    if (checkedValue.length > 0) {
      this.setData({
        'checkedSpecText': checkedValue.join('　')
      });
    } else {
      this.setData({
        'checkedSpecText': '请选择规格数量'
      });
    }

  },


  getCollectInfo: function(){
      let that = this;
      util.request(api.CollectInfo, { id: that.data.id }).then(function(res){
          if(res.errno == 0){
              that.setData({
                userHasCollect: res.data.userHasCollect,
              });
              if (res.data.userHasCollect == 1) {
                that.setData({
                  'collectBackImage': that.data.hasCollectImage
                });
              } else {
                that.setData({
                  'collectBackImage': that.data.noCollectImage
                });
              }
          }
      })
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      id: parseInt(options.id),
      share_code: options.share_code
    });
    var that = this;
    this.getGoodsInfo();
    this.getCollectInfo();
    util.request(api.CartGoodsCount).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          cartGoodsCount: res.data.cartTotal.goodsCount
        });

      }
    });
  },


  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    let that = this;
    util.request(api.ShareGoods.replace(/{goods_id}/, that.data.id),
    {}, "POST").then(function (res){
        if(res.errno === 0){
            var share_url = api.SSL  + '/static/h5/index.html#!pages/goods/goods?id=' + that.data.id + '&share_code=' + res.data.share_code;
            var btn = __wxConfig__.document.getElementById('btn');
            var clipboard = new Clipboard(btn, __wxConfig__.document, __wxConfig__.h5_window, {
            // 点击copy按钮，直接通过text直接返回复印的内容
                text: function() {
                    return share_url;
                }
            });
            clipboard.on('success', function(e) {
                wx.showToast({
                    title: '已将链接复制进剪贴版'
                });
            });
            clipboard.on('error', function(e) {
            });

        }else {
            var share_url = api.SSL  + '/static/h5/index.html#!pages/goods/goods?id=' + that.data.id;
              var btn = __wxConfig__.document.getElementById('btn');
              var clipboard = new Clipboard(btn, __wxConfig__.document, __wxConfig__.h5_window, {
              // 点击copy按钮，直接通过text直接返回复印的内容
                  text: function() {
                      return share_url;
                  }
              });
              clipboard.on('success', function(e) {
                  if(typeof(WeixinJSBridge)=="undefined"){
                      wx.showToast({
                          title: '已将链接复制进剪贴版'
                      });
                  }
              });
              clipboard.on('error', function(e) {
              });
        }

    })

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
      // 页面关闭
  },

// 请选择规格数量
  switchAttrPop: function () {
    if (this.data.openAttr == false) {
      this.setData({
        openAttr: !this.data.openAttr
      });
    }
  },

// 隐藏规格弹窗
  closeAttr: function () {
    this.setData({
      openAttr: false,
    });
  },

  // 添加收藏
  addCannelCollect: function () {
    let that = this;
    //添加或是取消收藏
    if( this.data.userHasCollect == 2){
        wx.showToast({
            title: '未登录',
            icon: 'loading',
            duration: 1000,
        });
    }else{
        util.request(api.CollectInfo + this.data.id+'/', { typeId: this.data.userHasCollect}, "POST")
          .then(function (res) {
            let _res = res;
            if (_res.errno == 0) {
              if (_res.data.type == 'add') {
                that.setData({
                      'collectBackImage': that.data.hasCollectImage,
                      'userHasCollect': _res.data.typeid
                    });
                } else if(_res.data.type == 'nooptions'){
                    that.setData({
                      'collectBackImage': that.data.noCollectImage,
                      'userHasCollect': _res.data.typeid
                    });
                } else{
                    that.setData({
                      'collectBackImage': that.data.noCollectImage,
                      'userHasCollect': _res.data.typeid
                    });
                }

            } else {
              wx.showToast({
                image: '/static/images/icon_error.png',
                title: _res.errmsg,
                mask: true
              });
            }
          });
    }
  },

  // 跳转购物车页面
  openCartPage: function () {
    wx.switchTab({
      url: '/pages/cart/cart',
    });
  },

// 商品加入购物车
  addToCart: function () {
    var that = this;
    if (this.data.openAttr === false) {
      //打开规格选择窗口
      this.setData({
        add_or_buy: 1,
        openAttr: !this.data.openAttr
      });
    } else {
        this.setData({
            add_or_buy:1
        })
        util.request(api.CartAdd, { 'goodsId': this.data.selected_p_id, 'quantity': this.data.number}, "POST")
          .then(function (res) {
            let _res = res;
            if (_res.errno == 0) {
              wx.showToast({
                title: '添加成功'
              });
              that.setData({
                openAttr: !that.data.openAttr,
                cartGoodsCount: _res.data.cartTotal.goodsCount
              });
            } else {
              wx.showToast({
                image: '/static/images/icon_error.png',
                title: _res.errmsg,
                mask: true
              });
            }

          });
    }
  },

// 按“确认”创建订单
  goCreateOrder: function(){
      var that = this;
      if(!that.data.selected_p_id){
          wx.showToast({
            title: '请选择规格'
          });
          return
      }

      if(that.data.add_or_buy == 1){
          util.request(api.CartAdd, { 'goodsId': this.data.selected_p_id, 'quantity': this.data.number}, "POST")
            .then(function goodtype(res) {
              let _res = res;
              if (_res.errno == 0) {
                wx.showToast({
                  title: '添加成功'
                });
                that.setData({
                  openAttr: !that.data.openAttr,
                  cartGoodsCount: _res.data.cartTotal.goodsCount
                });
              } else {
                wx.showToast({
                  image: '/static/images/icon_error.png',
                  title: _res.errmsg,
                  mask: true
                });
              }

            });
      }
      if(that.data.add_or_buy == 2){
          if(!Object.keys(app.global.user).length && !(typeof(WeixinJSBridge)=="undefined")){
              wx.showToast({
                image: '/static/images/icon_error.png',
                title: '请先登入',
                mask: true
              });
              setTimeout(function(){
                  wx.navigateTo({
                      url: '/pages/auth/login/login',
                  })
              }, 1000);
              return
          }
          if(!app.global.user.wx && !(typeof(WeixinJSBridge)=="undefined")){
              user.wx_auth();
          }

          if(that.data.share_code){
              var data = { line_data: this.data.selected_p_id + '_' + this.data.number,
              pay_straightly:1 ,
              share_code: that.data.share_code}
          }else {
              var data = { line_data: this.data.selected_p_id + '_' + this.data.number,
              pay_straightly:1}
          }
          util.request(api.Buy,data, "GET")
            .then(function (res) {
              let _res = res;
              if (_res.errno == 0) {
                wx.navigateTo({
                  url: '/pages/shopping/checkout/checkout',
                });
              } else {
                wx.showToast({
                  image: '/static/images/icon_error.png',
                  title: '购买失败',
                  mask: true
                });
              }

            });
      }
  },


  cutNumber: function () {
    this.setData({
      number: (this.data.number - 1 > 1) ? this.data.number - 1 : 1
    });
  },

  addNumber: function () {
    this.setData({
      number: this.data.number + 1
    });
  },

 // 去付款
  buy:function(){
     let that = this
    if (this.data.openAttr === false) {
      //打开规格选择窗口
      this.setData({
        add_or_buy:2,
        openAttr: !this.data.openAttr
      });
      return
    }

    if(that.data.share_code){
        var data = { line_data: this.data.selected_p_id + '_' + this.data.number,
        pay_straightly:1 ,
        share_code: that.data.share_code}
    }else {
        var data = { line_data: this.data.selected_p_id + '_' + this.data.number,
        pay_straightly:1}
    }
    return
    util.request(api.Buy, data, "GET")
      .then(function (res) {
        let _res = res;
        if (_res.errno == 0) {
          wx.navigateTo({
            url: '/pages/shopping/checkout/checkout',
          });
        } else {
          wx.showToast({
            image: '/static/images/icon_error.png',
            title: '购买失败',
            mask: true
          });
        }
      });
  },



  jumpTo: function (e) {
      // 获取标签元素上自定义的 data-opt 属性的值
      let target = e.currentTarget.dataset.opt;
      this.setData({
        toView: target
      })
    },

    scroll: function(e) {
        if(e.detail.scrollTop > 500){
            this.setData({
                jumpTobtn: 'show'
            })
        }else{
            this.setData({
                jumpTobtn: 'hide'
            })
        }
    },
    wx_share: function(){
        let that = this
        if(typeof(WeixinJSBridge)=="undefined"){
            return
        }
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
                    "imgUrl" : (that.data.Host + that.data.gallery[0].original),    // 分享显示的缩略图地址
                    // "link" : (that.data.Host+'/static/h5/index.html#!pages/ucenter/addGenUser/shareQrcode/shareQrcode?'+'profile_openid='+app.global.user.profile_openid),    // 分享地址
                    // "link" : (that.data.Host+'/static/h5/index.html#!pages/ucenter/addGenUser/shareQrcode/shareQrcode?scan_img='+that.data.Host + that.data.scan_img),
                    // http://www.yt131.com/static/h5/index.html#!pages/goods/goods?id=3358
                    "link" : (that.data.Host+'/static/h5/index.html#!pages/goods/goods?id='+that.data.id+ '&share_code=' + res.data.share_code),
                    "desc" : that.data.goods.title,   // 分享描述
                    "title" : ('樱桃乐享商品分享'),   // 分享标题
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
                wx.showToast({
                  image: '',
                  title: '点击右上角分享',
                  mask: false
                });

            }else {
                wx_share.showToast({
                    title: res['desc'],
                    duration: 1000
                });
                return;
            }
        })

    }


})

});require("pages/goods/goods.js")@code-separator-line:["div","template","view","video","image","block","button","scroll-view","swiper","swiper-item","text","navigator","import","input"]