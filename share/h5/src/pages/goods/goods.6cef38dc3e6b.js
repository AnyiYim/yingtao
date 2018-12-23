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
    Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]]]);Z([[6],[[7],[3, "item"]],[3, "styleStr"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]],[3, '-video']]);Z([[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "src"]]);Z([3, 'wxParseImgLoad']);Z([3, 'wxParseImgTap']);Z([[6],[[7],[3, "item"]],[3, "from"]]);Z([[6],[[7],[3, "item"]],[3, "imgIndex"]]);Z([3, 'aspectFit']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "src"]]]);Z([a, [3, 'width:'],[[6],[[7],[3, "item"]],[3, "width"]],[3, 'px;height:'],[[6],[[7],[3, "item"]],[3, "height"]],[3, 'px;'],[[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "style"]]]);Z([3, 'WxEmojiView wxParse-inline']);Z([[6],[[7],[3, "item"]],[3, "textArray"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "node"]], [1, "text"]]);Z([[2,'?:'],[[2, "=="], [[6],[[7],[3, "item"]],[3, "text"]], [1, "\n"]],[1, "wxParse-hide"],[1, ""]]);Z([a, [[6],[[7],[3, "item"]],[3, "text"]]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "node"]], [1, "element"]]);Z([3, 'wxEmoji']);Z([a, [[6],[[7],[3, "item"]],[3, "baseSrc"]],[[6],[[7],[3, "item"]],[3, "text"]]]);Z([[7],[3, "wxParseData"]]);Z([3, 'wxParse0']);Z([[8], "item", [[7],[3, "item"]]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "button"]]);Z([3, 'mini']);Z([3, 'default']);Z([[6],[[7],[3, "item"]],[3, "nodes"]]);Z([3, 'item']);Z([3, 'wxParse1']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "li"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-inner']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-text']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-circle']]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "video"]]);Z([3, 'wxParseVideo']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "img"]]);Z([3, 'wxParseImg']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "a"]]);Z([3, 'wxParseTagATap']);Z([a, [3, 'wxParse-inline '],[[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]]]);Z([[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "href"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "table"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tagType"]], [1, "block"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tagType"]]]);Z([3, 'WxEmojiView']);Z([3, 'wxParse2']);Z([3, 'wxParse3']);Z([3, 'wxParse4']);Z([3, 'wxParse5']);Z([3, 'wxParse6']);Z([3, 'wxParse7']);Z([3, 'wxParse8']);Z([3, 'wxParse9']);Z([3, 'wxParse10']);Z([3, 'wxParse11']);Z([3, 'wxParse12']);Z([3, 'container']);Z([3, 'scroll']);Z([3, 'list']);Z([[7],[3, "toView"]]);Z([3, 'true']);Z([3, 'goodsimgs']);Z([3, '1000']);Z([3, 'maodian']);Z([3, '3000']);Z([[7],[3, "gallery"]]);Z([[6],[[7],[3, "item"]],[3, "id"]]);Z([3, 'cover']);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "item"]],[3, "original"]]]);Z([3, 'goods-info']);Z([3, 'c']);Z([3, 'name']);Z([a, [[6],[[7],[3, "goods"]],[3, "title"]]]);Z([3, 'share-icon']);Z([3, 'btn']);Z([3, '/static/images/first_page/nav_share@2x.png']);Z([3, 'desc']);Z([3, 'price']);Z([a, [3, '￥'],[[7],[3, "price_range"]]]);Z([[6],[[7],[3, "brand"]],[3, "name"]]);Z([3, 'brand']);Z([a, [3, '../brandDetail/brandDetail?id\x3d'],[[6],[[7],[3, "brand"]],[3, "brandId"]]]);Z([3, 'gray-fill']);Z([3, 'switchAttrPop']);Z([3, 'section-nav section-attr']);Z([3, 't']);Z([3, '请选择规格数量']);Z([3, 'i']);Z([3, '/static/images/first_page/details_right_icon.png']);Z([3, 'section-nav section-attr ']);Z([3, '运费： 免运费']);Z([3, 't-server-text']);Z([3, '服务： ']);Z([3, 't-tip-text']);Z([3, '七天无理由退换货，48小时快速退款']);Z([3, 'more-details']);Z([3, '更多详情']);Z([3, 'details-box']);Z([3, 'details-tip']);Z([3, 'details-border']);Z([3, 'details-content']);Z([3, 'goods-desc']);Z([3, 'wxParse']);Z([[8], "wxParseData", [[6],[[7],[3, "description"]],[3, "nodes"]]]);Z([[7],[3, "detailsGallery"]]);Z([3, 'goods-item']);Z([3, 'detail-img']);Z([3, 'widthFix']);Z([3, 'jumpTo']);Z([3, 'no-more-data']);Z([3, ' 已经到底了 ']);Z([a, [3, 'nodata-jump '],[[2,'?:'],[[2, "=="], [[7],[3, "jumpTobtn"]], [1, "show"]],[1, "jumpTobtn"],[1, ""]]]);Z([3, '回到顶部']);Z([[2, ">"], [[6],[[7],[3, "comment"]],[3, "count"]], [1, 0]]);Z([3, 'comments']);Z([3, 'h']);Z([a, [3, '../comment/comment?valueId\x3d'],[[6],[[7],[3, "goods"]],[3, "id"]],[3, '\x26typeId\x3d0']]);Z([a, [3, '评价('],[[2,'?:'],[[2, ">"], [[6],[[7],[3, "comment"]],[3, "count"]], [1, 999]],[1, "999+"],[[6],[[7],[3, "comment"]],[3, "count"]]],[3, ')']]);Z([3, '查看全部']);Z([3, 'b']);Z([3, 'info']);Z([3, 'user']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "avatar"]]]);Z([a, [[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "nickname"]]]);Z([3, 'time']);Z([a, [[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "add_time"]]]);Z([3, 'content']);Z([a, [3, '\n          '],[[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "content"]],[3, '\n        ']]);Z([[2, ">"], [[6],[[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "pic_list"]],[3, "length"]], [1, 0]]);Z([3, 'imgs']);Z([[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "pic_list"]]);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "item"]],[3, "pic_url"]]]);Z([3, 'detail']);Z([[6],[[7],[3, "goods"]],[3, "pic_list"]]);Z([[2, ">"], [[6],[[7],[3, "relatedGoods"]],[3, "length"]], [1, 0]]);Z([3, 'related-goods']);Z([3, 'line']);Z([3, 'title']);Z([3, '大家都在看']);Z([[7],[3, "relatedGoods"]]);Z([a, [3, '/pages/goods/goods?id\x3d'],[[6],[[7],[3, "item"]],[3, "id"]]]);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "item"]],[3, "list_pic_url"]]]);Z([a, [[6],[[7],[3, "item"]],[3, "name"]]]);Z([a, [3, '￥'],[[6],[[7],[3, "item"]],[3, "retail_price"]]]);Z([3, 'attr-pop-box']);Z([[2, "!"], [[7],[3, "openAttr"]]]);Z([3, 'attr-pop']);Z([3, 'closeAttr']);Z([3, 'close']);Z([3, 'icon']);Z([3, '/static/images/icon_close.png']);Z([3, 'img-info']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[7],[3, "gallery"]],[1, 0]],[3, "original"]]]);Z([3, 'p']);Z([a, [3, '价格：￥'],[[7],[3, "current_price"]]]);Z([[2, ">"], [[6],[[7],[3, "specificationList"]],[3, "length"]], [1, 0]]);Z([3, 'a']);Z([a, [3, '已选择：'],[[7],[3, "checkedSpecText"]]]);Z([3, 'spec-con']);Z([[7],[3, "specificationList"]]);Z([3, 'select_cate_value']);Z([a, [3, 'spec-item value '],[[2,'?:'],[[6],[[7],[3, "item"]],[3, "checked"]],[1, "selected"],[1, ""]]]);Z([a, [[6],[[7],[3, "item"]],[3, "cate_value"]]]);Z([3, 'number-item']);Z([3, '数量']);Z([3, 'selnum']);Z([3, 'cutNumber']);Z([3, 'cut']);Z([3, '-']);Z([3, 'number']);Z([[7],[3, "number"]]);Z([3, 'addNumber']);Z([3, 'add']);Z([3, '+']);Z([3, 'bottom-second-btn']);Z([3, 'bsb-left']);Z([3, '\x26nbsp;']);Z([3, 'goCreateOrder']);Z([3, 'bsb-right']);Z([3, '确认']);Z([3, 'bottom-btn']);Z([3, 'l l-customserver']);Z([3, 'l-imgaes']);Z([3, '/static/images/first_page/details_customeservice.png']);Z([3, 'l-text']);Z([3, '客服']);Z([3, 'addCannelCollect']);Z([3, 'l l-collect']);Z([[7],[3, "collectBackImage"]]);Z([3, '收藏']);Z([3, 'l l-cart']);Z([3, 'cart-count']);Z([a, [[7],[3, "cartGoodsCount"]]]);Z([3, 'openCartPage']);Z([3, '/static/images/first_page/details_shoppingcar.png']);Z([3, '购物车']);Z([3, 'addToCart']);Z([3, 'r']);Z([3, '加入购物车']);Z([3, 'buy']);Z([3, '立即购买']);
  })(z);d_["./lib/wxParse/wxParse.wxml"] = {};d_["./lib/wxParse/wxParse.wxml"]["wxParseVideo"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParseVideo'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var obLC = _m( "view", ["class", 0,"style", 1], e, s, gg);var ocLC = _m( "video", ["class", 2,"src", 1], e, s, gg);_(obLC,ocLC);_(r,obLC);
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
      var oeLC = _m( "image", ["class", 0,"data-src", 3,"bindload", 1,"bindtap", 2,"data-from", 3,"data-idx", 4,"mode", 5,"src", 6,"style", 7], e, s, gg);_(r,oeLC);
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
      var ogLC = _m( "view", ["style", 1,"class", 10], e, s, gg);var ohLC = _v();var oiLC = function(omLC,olLC,okLC,gg){var ooLC = _v();
      if (_o(13, omLC, olLC, gg)) {
        ooLC.wxVkey = 1;var orLC = _o(15, omLC, olLC, gg);_(ooLC,orLC);
      }else if (_o(16, omLC, olLC, gg)) {
        ooLC.wxVkey = 2;var ouLC = _m( "image", ["class", 17,"src", 1], e, s, gg);_(ooLC,ouLC);
      } _(okLC,ooLC);return okLC;};_2(12, oiLC, e, s, gg, ohLC, "item", "index", '');_(ogLC,ohLC);_(r,ogLC);
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
      var owLC = _v();var oxLC = function(oAMC,o_LC,ozLC,gg){var oCMC = _v();
       var oDMC = _o(20, oAMC, o_LC, gg);
       var oFMC = _gd('./lib/wxParse/wxParse.wxml', oDMC, e_, d_);
       if (oFMC) {
         var oEMC = _1(21,oAMC,o_LC,gg);
         oFMC(oEMC,oEMC,oCMC, gg);
       } else _w(oDMC, './lib/wxParse/wxParse.wxml', 0, 0);_(ozLC,oCMC);return ozLC;};_2(19, oxLC, e, s, gg, owLC, "item", "index", '');_(r,owLC);
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
      var oHMC = _v();
      if (_o(16, e, s, gg)) {
        oHMC.wxVkey = 1;var oKMC = _v();
      if (_o(22, e, s, gg)) {
        oKMC.wxVkey = 1;var oNMC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oOMC = _v();var oPMC = function(oTMC,oSMC,oRMC,gg){var oVMC = _v();
       var oWMC = _o(27, oTMC, oSMC, gg);
       var oYMC = _gd('./lib/wxParse/wxParse.wxml', oWMC, e_, d_);
       if (oYMC) {
         var oXMC = _1(21,oTMC,oSMC,gg);
         oYMC(oXMC,oXMC,oVMC, gg);
       } else _w(oWMC, './lib/wxParse/wxParse.wxml', 0, 0);_(oRMC,oVMC);return oRMC;};_2(25, oPMC, e, s, gg, oOMC, "item", "index", '');_(oNMC,oOMC);_(oKMC,oNMC);
      }else if (_o(28, e, s, gg)) {
        oKMC.wxVkey = 2;var obMC = _n("view");_r(obMC, 'class', 29, e, s, gg);var ocMC = _n("view");_r(ocMC, 'class', 30, e, s, gg);var odMC = _n("view");_r(odMC, 'class', 31, e, s, gg);var oeMC = _n("view");_r(oeMC, 'class', 32, e, s, gg);_(odMC,oeMC);_(ocMC,odMC);var ofMC = _n("view");_r(ofMC, 'class', 31, e, s, gg);var ogMC = _v();var ohMC = function(olMC,okMC,ojMC,gg){var onMC = _v();
       var ooMC = _o(27, olMC, okMC, gg);
       var oqMC = _gd('./lib/wxParse/wxParse.wxml', ooMC, e_, d_);
       if (oqMC) {
         var opMC = _1(21,olMC,okMC,gg);
         oqMC(opMC,opMC,onMC, gg);
       } else _w(ooMC, './lib/wxParse/wxParse.wxml', 0, 0);_(ojMC,onMC);return ojMC;};_2(25, ohMC, e, s, gg, ogMC, "item", "index", '');_(ofMC,ogMC);_(ocMC,ofMC);_(obMC,ocMC);_(oKMC,obMC);
      }else if (_o(33, e, s, gg)) {
        oKMC.wxVkey = 3;var otMC = _v();
       var ouMC = _o(34, e, s, gg);
       var owMC = _gd('./lib/wxParse/wxParse.wxml', ouMC, e_, d_);
       if (owMC) {
         var ovMC = _1(21,e,s,gg);
         owMC(ovMC,ovMC,otMC, gg);
       } else _w(ouMC, './lib/wxParse/wxParse.wxml', 0, 0);_(oKMC,otMC);
      }else if (_o(35, e, s, gg)) {
        oKMC.wxVkey = 4;var ozMC = _v();
       var o_MC = _o(36, e, s, gg);
       var oBNC = _gd('./lib/wxParse/wxParse.wxml', o_MC, e_, d_);
       if (oBNC) {
         var oANC = _1(21,e,s,gg);
         oBNC(oANC,oANC,ozMC, gg);
       } else _w(o_MC, './lib/wxParse/wxParse.wxml', 0, 0);_(oKMC,ozMC);
      }else if (_o(37, e, s, gg)) {
        oKMC.wxVkey = 5;var oENC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-c", 39], e, s, gg);var oFNC = _v();var oGNC = function(oKNC,oJNC,oINC,gg){var oMNC = _v();
       var oNNC = _o(27, oKNC, oJNC, gg);
       var oPNC = _gd('./lib/wxParse/wxParse.wxml', oNNC, e_, d_);
       if (oPNC) {
         var oONC = _1(21,oKNC,oJNC,gg);
         oPNC(oONC,oONC,oMNC, gg);
       } else _w(oNNC, './lib/wxParse/wxParse.wxml', 0, 0);_(oINC,oMNC);return oINC;};_2(25, oGNC, e, s, gg, oFNC, "item", "index", '');_(oENC,oFNC);_(oKMC,oENC);
      }else if (_o(41, e, s, gg)) {
        oKMC.wxVkey = 6;var oSNC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oTNC = _v();var oUNC = function(oYNC,oXNC,oWNC,gg){var oaNC = _v();
       var obNC = _o(27, oYNC, oXNC, gg);
       var odNC = _gd('./lib/wxParse/wxParse.wxml', obNC, e_, d_);
       if (odNC) {
         var ocNC = _1(21,oYNC,oXNC,gg);
         odNC(ocNC,ocNC,oaNC, gg);
       } else _w(obNC, './lib/wxParse/wxParse.wxml', 0, 0);_(oWNC,oaNC);return oWNC;};_2(25, oUNC, e, s, gg, oTNC, "item", "index", '');_(oSNC,oTNC);_(oKMC,oSNC);
      }else if (_o(42, e, s, gg)) {
        oKMC.wxVkey = 7;var ogNC = _m( "view", ["class", 0,"style", 1], e, s, gg);var ohNC = _v();var oiNC = function(omNC,olNC,okNC,gg){var ooNC = _v();
       var opNC = _o(27, omNC, olNC, gg);
       var orNC = _gd('./lib/wxParse/wxParse.wxml', opNC, e_, d_);
       if (orNC) {
         var oqNC = _1(21,omNC,olNC,gg);
         orNC(oqNC,oqNC,ooNC, gg);
       } else _w(opNC, './lib/wxParse/wxParse.wxml', 0, 0);_(okNC,ooNC);return okNC;};_2(25, oiNC, e, s, gg, ohNC, "item", "index", '');_(ogNC,ohNC);_(oKMC,ogNC);
      }else {
        oKMC.wxVkey = 8;var osNC = _m( "view", ["style", 1,"class", 42], e, s, gg);var ouNC = _v();var ovNC = function(ozNC,oyNC,oxNC,gg){var oAOC = _v();
       var oBOC = _o(27, ozNC, oyNC, gg);
       var oDOC = _gd('./lib/wxParse/wxParse.wxml', oBOC, e_, d_);
       if (oDOC) {
         var oCOC = _1(21,ozNC,oyNC,gg);
         oDOC(oCOC,oCOC,oAOC, gg);
       } else _w(oBOC, './lib/wxParse/wxParse.wxml', 0, 0);_(oxNC,oAOC);return oxNC;};_2(25, ovNC, e, s, gg, ouNC, "item", "index", '');_(osNC,ouNC);_(oKMC, osNC);
      }_(oHMC,oKMC);
      }else if (_o(13, e, s, gg)) {
        oHMC.wxVkey = 2;var oGOC = _v();
       var oHOC = _o(44, e, s, gg);
       var oJOC = _gd('./lib/wxParse/wxParse.wxml', oHOC, e_, d_);
       if (oJOC) {
         var oIOC = _1(21,e,s,gg);
         oJOC(oIOC,oIOC,oGOC, gg);
       } else _w(oHOC, './lib/wxParse/wxParse.wxml', 0, 0);_(oHMC,oGOC);
      } _(r,oHMC);
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
      var oLOC = _v();
      if (_o(16, e, s, gg)) {
        oLOC.wxVkey = 1;var oOOC = _v();
      if (_o(22, e, s, gg)) {
        oOOC.wxVkey = 1;var oROC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oSOC = _v();var oTOC = function(oXOC,oWOC,oVOC,gg){var oZOC = _v();
       var oaOC = _o(45, oXOC, oWOC, gg);
       var ocOC = _gd('./lib/wxParse/wxParse.wxml', oaOC, e_, d_);
       if (ocOC) {
         var obOC = _1(21,oXOC,oWOC,gg);
         ocOC(obOC,obOC,oZOC, gg);
       } else _w(oaOC, './lib/wxParse/wxParse.wxml', 0, 0);_(oVOC,oZOC);return oVOC;};_2(25, oTOC, e, s, gg, oSOC, "item", "index", '');_(oROC,oSOC);_(oOOC,oROC);
      }else if (_o(28, e, s, gg)) {
        oOOC.wxVkey = 2;var ofOC = _n("view");_r(ofOC, 'class', 29, e, s, gg);var ogOC = _n("view");_r(ogOC, 'class', 30, e, s, gg);var ohOC = _n("view");_r(ohOC, 'class', 31, e, s, gg);var oiOC = _n("view");_r(oiOC, 'class', 32, e, s, gg);_(ohOC,oiOC);_(ogOC,ohOC);var ojOC = _n("view");_r(ojOC, 'class', 31, e, s, gg);var okOC = _v();var olOC = function(opOC,ooOC,onOC,gg){var orOC = _v();
       var osOC = _o(45, opOC, ooOC, gg);
       var ouOC = _gd('./lib/wxParse/wxParse.wxml', osOC, e_, d_);
       if (ouOC) {
         var otOC = _1(21,opOC,ooOC,gg);
         ouOC(otOC,otOC,orOC, gg);
       } else _w(osOC, './lib/wxParse/wxParse.wxml', 0, 0);_(onOC,orOC);return onOC;};_2(25, olOC, e, s, gg, okOC, "item", "index", '');_(ojOC,okOC);_(ogOC,ojOC);_(ofOC,ogOC);_(oOOC,ofOC);
      }else if (_o(33, e, s, gg)) {
        oOOC.wxVkey = 3;var oxOC = _v();
       var oyOC = _o(34, e, s, gg);
       var o_OC = _gd('./lib/wxParse/wxParse.wxml', oyOC, e_, d_);
       if (o_OC) {
         var ozOC = _1(21,e,s,gg);
         o_OC(ozOC,ozOC,oxOC, gg);
       } else _w(oyOC, './lib/wxParse/wxParse.wxml', 0, 0);_(oOOC,oxOC);
      }else if (_o(35, e, s, gg)) {
        oOOC.wxVkey = 4;var oCPC = _v();
       var oDPC = _o(36, e, s, gg);
       var oFPC = _gd('./lib/wxParse/wxParse.wxml', oDPC, e_, d_);
       if (oFPC) {
         var oEPC = _1(21,e,s,gg);
         oFPC(oEPC,oEPC,oCPC, gg);
       } else _w(oDPC, './lib/wxParse/wxParse.wxml', 0, 0);_(oOOC,oCPC);
      }else if (_o(37, e, s, gg)) {
        oOOC.wxVkey = 5;var oIPC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oJPC = _v();var oKPC = function(oOPC,oNPC,oMPC,gg){var oQPC = _v();
       var oRPC = _o(45, oOPC, oNPC, gg);
       var oTPC = _gd('./lib/wxParse/wxParse.wxml', oRPC, e_, d_);
       if (oTPC) {
         var oSPC = _1(21,oOPC,oNPC,gg);
         oTPC(oSPC,oSPC,oQPC, gg);
       } else _w(oRPC, './lib/wxParse/wxParse.wxml', 0, 0);_(oMPC,oQPC);return oMPC;};_2(25, oKPC, e, s, gg, oJPC, "item", "index", '');_(oIPC,oJPC);_(oOOC,oIPC);
      }else if (_o(42, e, s, gg)) {
        oOOC.wxVkey = 6;var oWPC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oXPC = _v();var oYPC = function(ocPC,obPC,oaPC,gg){var oePC = _v();
       var ofPC = _o(45, ocPC, obPC, gg);
       var ohPC = _gd('./lib/wxParse/wxParse.wxml', ofPC, e_, d_);
       if (ohPC) {
         var ogPC = _1(21,ocPC,obPC,gg);
         ohPC(ogPC,ogPC,oePC, gg);
       } else _w(ofPC, './lib/wxParse/wxParse.wxml', 0, 0);_(oaPC,oePC);return oaPC;};_2(25, oYPC, e, s, gg, oXPC, "item", "index", '');_(oWPC,oXPC);_(oOOC,oWPC);
      }else {
        oOOC.wxVkey = 7;var oiPC = _m( "view", ["style", 1,"class", 42], e, s, gg);var okPC = _v();var olPC = function(opPC,ooPC,onPC,gg){var orPC = _v();
       var osPC = _o(45, opPC, ooPC, gg);
       var ouPC = _gd('./lib/wxParse/wxParse.wxml', osPC, e_, d_);
       if (ouPC) {
         var otPC = _1(21,opPC,ooPC,gg);
         ouPC(otPC,otPC,orPC, gg);
       } else _w(osPC, './lib/wxParse/wxParse.wxml', 0, 0);_(onPC,orPC);return onPC;};_2(25, olPC, e, s, gg, okPC, "item", "index", '');_(oiPC,okPC);_(oOOC, oiPC);
      }_(oLOC,oOOC);
      }else if (_o(13, e, s, gg)) {
        oLOC.wxVkey = 2;var oxPC = _v();
       var oyPC = _o(44, e, s, gg);
       var o_PC = _gd('./lib/wxParse/wxParse.wxml', oyPC, e_, d_);
       if (o_PC) {
         var ozPC = _1(21,e,s,gg);
         o_PC(ozPC,ozPC,oxPC, gg);
       } else _w(oyPC, './lib/wxParse/wxParse.wxml', 0, 0);_(oLOC,oxPC);
      } _(r,oLOC);
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
      var oBQC = _v();
      if (_o(16, e, s, gg)) {
        oBQC.wxVkey = 1;var oEQC = _v();
      if (_o(22, e, s, gg)) {
        oEQC.wxVkey = 1;var oHQC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oIQC = _v();var oJQC = function(oNQC,oMQC,oLQC,gg){var oPQC = _v();
       var oQQC = _o(46, oNQC, oMQC, gg);
       var oSQC = _gd('./lib/wxParse/wxParse.wxml', oQQC, e_, d_);
       if (oSQC) {
         var oRQC = _1(21,oNQC,oMQC,gg);
         oSQC(oRQC,oRQC,oPQC, gg);
       } else _w(oQQC, './lib/wxParse/wxParse.wxml', 0, 0);_(oLQC,oPQC);return oLQC;};_2(25, oJQC, e, s, gg, oIQC, "item", "index", '');_(oHQC,oIQC);_(oEQC,oHQC);
      }else if (_o(28, e, s, gg)) {
        oEQC.wxVkey = 2;var oVQC = _n("view");_r(oVQC, 'class', 29, e, s, gg);var oWQC = _n("view");_r(oWQC, 'class', 30, e, s, gg);var oXQC = _n("view");_r(oXQC, 'class', 31, e, s, gg);var oYQC = _n("view");_r(oYQC, 'class', 32, e, s, gg);_(oXQC,oYQC);_(oWQC,oXQC);var oZQC = _n("view");_r(oZQC, 'class', 31, e, s, gg);var oaQC = _v();var obQC = function(ofQC,oeQC,odQC,gg){var ohQC = _v();
       var oiQC = _o(46, ofQC, oeQC, gg);
       var okQC = _gd('./lib/wxParse/wxParse.wxml', oiQC, e_, d_);
       if (okQC) {
         var ojQC = _1(21,ofQC,oeQC,gg);
         okQC(ojQC,ojQC,ohQC, gg);
       } else _w(oiQC, './lib/wxParse/wxParse.wxml', 0, 0);_(odQC,ohQC);return odQC;};_2(25, obQC, e, s, gg, oaQC, "item", "index", '');_(oZQC,oaQC);_(oWQC,oZQC);_(oVQC,oWQC);_(oEQC,oVQC);
      }else if (_o(33, e, s, gg)) {
        oEQC.wxVkey = 3;var onQC = _v();
       var ooQC = _o(34, e, s, gg);
       var oqQC = _gd('./lib/wxParse/wxParse.wxml', ooQC, e_, d_);
       if (oqQC) {
         var opQC = _1(21,e,s,gg);
         oqQC(opQC,opQC,onQC, gg);
       } else _w(ooQC, './lib/wxParse/wxParse.wxml', 0, 0);_(oEQC,onQC);
      }else if (_o(35, e, s, gg)) {
        oEQC.wxVkey = 4;var otQC = _v();
       var ouQC = _o(36, e, s, gg);
       var owQC = _gd('./lib/wxParse/wxParse.wxml', ouQC, e_, d_);
       if (owQC) {
         var ovQC = _1(21,e,s,gg);
         owQC(ovQC,ovQC,otQC, gg);
       } else _w(ouQC, './lib/wxParse/wxParse.wxml', 0, 0);_(oEQC,otQC);
      }else if (_o(37, e, s, gg)) {
        oEQC.wxVkey = 5;var ozQC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var o_QC = _v();var oARC = function(oERC,oDRC,oCRC,gg){var oGRC = _v();
       var oHRC = _o(46, oERC, oDRC, gg);
       var oJRC = _gd('./lib/wxParse/wxParse.wxml', oHRC, e_, d_);
       if (oJRC) {
         var oIRC = _1(21,oERC,oDRC,gg);
         oJRC(oIRC,oIRC,oGRC, gg);
       } else _w(oHRC, './lib/wxParse/wxParse.wxml', 0, 0);_(oCRC,oGRC);return oCRC;};_2(25, oARC, e, s, gg, o_QC, "item", "index", '');_(ozQC,o_QC);_(oEQC,ozQC);
      }else if (_o(42, e, s, gg)) {
        oEQC.wxVkey = 6;var oMRC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oNRC = _v();var oORC = function(oSRC,oRRC,oQRC,gg){var oURC = _v();
       var oVRC = _o(46, oSRC, oRRC, gg);
       var oXRC = _gd('./lib/wxParse/wxParse.wxml', oVRC, e_, d_);
       if (oXRC) {
         var oWRC = _1(21,oSRC,oRRC,gg);
         oXRC(oWRC,oWRC,oURC, gg);
       } else _w(oVRC, './lib/wxParse/wxParse.wxml', 0, 0);_(oQRC,oURC);return oQRC;};_2(25, oORC, e, s, gg, oNRC, "item", "index", '');_(oMRC,oNRC);_(oEQC,oMRC);
      }else {
        oEQC.wxVkey = 7;var oYRC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oaRC = _v();var obRC = function(ofRC,oeRC,odRC,gg){var ohRC = _v();
       var oiRC = _o(46, ofRC, oeRC, gg);
       var okRC = _gd('./lib/wxParse/wxParse.wxml', oiRC, e_, d_);
       if (okRC) {
         var ojRC = _1(21,ofRC,oeRC,gg);
         okRC(ojRC,ojRC,ohRC, gg);
       } else _w(oiRC, './lib/wxParse/wxParse.wxml', 0, 0);_(odRC,ohRC);return odRC;};_2(25, obRC, e, s, gg, oaRC, "item", "index", '');_(oYRC,oaRC);_(oEQC, oYRC);
      }_(oBQC,oEQC);
      }else if (_o(13, e, s, gg)) {
        oBQC.wxVkey = 2;var onRC = _v();
       var ooRC = _o(44, e, s, gg);
       var oqRC = _gd('./lib/wxParse/wxParse.wxml', ooRC, e_, d_);
       if (oqRC) {
         var opRC = _1(21,e,s,gg);
         oqRC(opRC,opRC,onRC, gg);
       } else _w(ooRC, './lib/wxParse/wxParse.wxml', 0, 0);_(oBQC,onRC);
      } _(r,oBQC);
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
      var osRC = _v();
      if (_o(16, e, s, gg)) {
        osRC.wxVkey = 1;var ovRC = _v();
      if (_o(22, e, s, gg)) {
        ovRC.wxVkey = 1;var oyRC = _m( "button", ["size", 23,"type", 1], e, s, gg);var ozRC = _v();var o_RC = function(oDSC,oCSC,oBSC,gg){var oFSC = _v();
       var oGSC = _o(47, oDSC, oCSC, gg);
       var oISC = _gd('./lib/wxParse/wxParse.wxml', oGSC, e_, d_);
       if (oISC) {
         var oHSC = _1(21,oDSC,oCSC,gg);
         oISC(oHSC,oHSC,oFSC, gg);
       } else _w(oGSC, './lib/wxParse/wxParse.wxml', 0, 0);_(oBSC,oFSC);return oBSC;};_2(25, o_RC, e, s, gg, ozRC, "item", "index", '');_(oyRC,ozRC);_(ovRC,oyRC);
      }else if (_o(28, e, s, gg)) {
        ovRC.wxVkey = 2;var oLSC = _n("view");_r(oLSC, 'class', 29, e, s, gg);var oMSC = _n("view");_r(oMSC, 'class', 30, e, s, gg);var oNSC = _n("view");_r(oNSC, 'class', 31, e, s, gg);var oOSC = _n("view");_r(oOSC, 'class', 32, e, s, gg);_(oNSC,oOSC);_(oMSC,oNSC);var oPSC = _n("view");_r(oPSC, 'class', 31, e, s, gg);var oQSC = _v();var oRSC = function(oVSC,oUSC,oTSC,gg){var oXSC = _v();
       var oYSC = _o(47, oVSC, oUSC, gg);
       var oaSC = _gd('./lib/wxParse/wxParse.wxml', oYSC, e_, d_);
       if (oaSC) {
         var oZSC = _1(21,oVSC,oUSC,gg);
         oaSC(oZSC,oZSC,oXSC, gg);
       } else _w(oYSC, './lib/wxParse/wxParse.wxml', 0, 0);_(oTSC,oXSC);return oTSC;};_2(25, oRSC, e, s, gg, oQSC, "item", "index", '');_(oPSC,oQSC);_(oMSC,oPSC);_(oLSC,oMSC);_(ovRC,oLSC);
      }else if (_o(33, e, s, gg)) {
        ovRC.wxVkey = 3;var odSC = _v();
       var oeSC = _o(34, e, s, gg);
       var ogSC = _gd('./lib/wxParse/wxParse.wxml', oeSC, e_, d_);
       if (ogSC) {
         var ofSC = _1(21,e,s,gg);
         ogSC(ofSC,ofSC,odSC, gg);
       } else _w(oeSC, './lib/wxParse/wxParse.wxml', 0, 0);_(ovRC,odSC);
      }else if (_o(35, e, s, gg)) {
        ovRC.wxVkey = 4;var ojSC = _v();
       var okSC = _o(36, e, s, gg);
       var omSC = _gd('./lib/wxParse/wxParse.wxml', okSC, e_, d_);
       if (omSC) {
         var olSC = _1(21,e,s,gg);
         omSC(olSC,olSC,ojSC, gg);
       } else _w(okSC, './lib/wxParse/wxParse.wxml', 0, 0);_(ovRC,ojSC);
      }else if (_o(37, e, s, gg)) {
        ovRC.wxVkey = 5;var opSC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oqSC = _v();var orSC = function(ovSC,ouSC,otSC,gg){var oxSC = _v();
       var oySC = _o(47, ovSC, ouSC, gg);
       var o_SC = _gd('./lib/wxParse/wxParse.wxml', oySC, e_, d_);
       if (o_SC) {
         var ozSC = _1(21,ovSC,ouSC,gg);
         o_SC(ozSC,ozSC,oxSC, gg);
       } else _w(oySC, './lib/wxParse/wxParse.wxml', 0, 0);_(otSC,oxSC);return otSC;};_2(25, orSC, e, s, gg, oqSC, "item", "index", '');_(opSC,oqSC);_(ovRC,opSC);
      }else if (_o(42, e, s, gg)) {
        ovRC.wxVkey = 6;var oCTC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oDTC = _v();var oETC = function(oITC,oHTC,oGTC,gg){var oKTC = _v();
       var oLTC = _o(47, oITC, oHTC, gg);
       var oNTC = _gd('./lib/wxParse/wxParse.wxml', oLTC, e_, d_);
       if (oNTC) {
         var oMTC = _1(21,oITC,oHTC,gg);
         oNTC(oMTC,oMTC,oKTC, gg);
       } else _w(oLTC, './lib/wxParse/wxParse.wxml', 0, 0);_(oGTC,oKTC);return oGTC;};_2(25, oETC, e, s, gg, oDTC, "item", "index", '');_(oCTC,oDTC);_(ovRC,oCTC);
      }else {
        ovRC.wxVkey = 7;var oOTC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oQTC = _v();var oRTC = function(oVTC,oUTC,oTTC,gg){var oXTC = _v();
       var oYTC = _o(47, oVTC, oUTC, gg);
       var oaTC = _gd('./lib/wxParse/wxParse.wxml', oYTC, e_, d_);
       if (oaTC) {
         var oZTC = _1(21,oVTC,oUTC,gg);
         oaTC(oZTC,oZTC,oXTC, gg);
       } else _w(oYTC, './lib/wxParse/wxParse.wxml', 0, 0);_(oTTC,oXTC);return oTTC;};_2(25, oRTC, e, s, gg, oQTC, "item", "index", '');_(oOTC,oQTC);_(ovRC, oOTC);
      }_(osRC,ovRC);
      }else if (_o(13, e, s, gg)) {
        osRC.wxVkey = 2;var odTC = _v();
       var oeTC = _o(44, e, s, gg);
       var ogTC = _gd('./lib/wxParse/wxParse.wxml', oeTC, e_, d_);
       if (ogTC) {
         var ofTC = _1(21,e,s,gg);
         ogTC(ofTC,ofTC,odTC, gg);
       } else _w(oeTC, './lib/wxParse/wxParse.wxml', 0, 0);_(osRC,odTC);
      } _(r,osRC);
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
      var oiTC = _v();
      if (_o(16, e, s, gg)) {
        oiTC.wxVkey = 1;var olTC = _v();
      if (_o(22, e, s, gg)) {
        olTC.wxVkey = 1;var ooTC = _m( "button", ["size", 23,"type", 1], e, s, gg);var opTC = _v();var oqTC = function(ouTC,otTC,osTC,gg){var owTC = _v();
       var oxTC = _o(48, ouTC, otTC, gg);
       var ozTC = _gd('./lib/wxParse/wxParse.wxml', oxTC, e_, d_);
       if (ozTC) {
         var oyTC = _1(21,ouTC,otTC,gg);
         ozTC(oyTC,oyTC,owTC, gg);
       } else _w(oxTC, './lib/wxParse/wxParse.wxml', 0, 0);_(osTC,owTC);return osTC;};_2(25, oqTC, e, s, gg, opTC, "item", "index", '');_(ooTC,opTC);_(olTC,ooTC);
      }else if (_o(28, e, s, gg)) {
        olTC.wxVkey = 2;var oBUC = _n("view");_r(oBUC, 'class', 29, e, s, gg);var oCUC = _n("view");_r(oCUC, 'class', 30, e, s, gg);var oDUC = _n("view");_r(oDUC, 'class', 31, e, s, gg);var oEUC = _n("view");_r(oEUC, 'class', 32, e, s, gg);_(oDUC,oEUC);_(oCUC,oDUC);var oFUC = _n("view");_r(oFUC, 'class', 31, e, s, gg);var oGUC = _v();var oHUC = function(oLUC,oKUC,oJUC,gg){var oNUC = _v();
       var oOUC = _o(48, oLUC, oKUC, gg);
       var oQUC = _gd('./lib/wxParse/wxParse.wxml', oOUC, e_, d_);
       if (oQUC) {
         var oPUC = _1(21,oLUC,oKUC,gg);
         oQUC(oPUC,oPUC,oNUC, gg);
       } else _w(oOUC, './lib/wxParse/wxParse.wxml', 0, 0);_(oJUC,oNUC);return oJUC;};_2(25, oHUC, e, s, gg, oGUC, "item", "index", '');_(oFUC,oGUC);_(oCUC,oFUC);_(oBUC,oCUC);_(olTC,oBUC);
      }else if (_o(33, e, s, gg)) {
        olTC.wxVkey = 3;var oTUC = _v();
       var oUUC = _o(34, e, s, gg);
       var oWUC = _gd('./lib/wxParse/wxParse.wxml', oUUC, e_, d_);
       if (oWUC) {
         var oVUC = _1(21,e,s,gg);
         oWUC(oVUC,oVUC,oTUC, gg);
       } else _w(oUUC, './lib/wxParse/wxParse.wxml', 0, 0);_(olTC,oTUC);
      }else if (_o(35, e, s, gg)) {
        olTC.wxVkey = 4;var oZUC = _v();
       var oaUC = _o(36, e, s, gg);
       var ocUC = _gd('./lib/wxParse/wxParse.wxml', oaUC, e_, d_);
       if (ocUC) {
         var obUC = _1(21,e,s,gg);
         ocUC(obUC,obUC,oZUC, gg);
       } else _w(oaUC, './lib/wxParse/wxParse.wxml', 0, 0);_(olTC,oZUC);
      }else if (_o(37, e, s, gg)) {
        olTC.wxVkey = 5;var ofUC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ogUC = _v();var ohUC = function(olUC,okUC,ojUC,gg){var onUC = _v();
       var ooUC = _o(48, olUC, okUC, gg);
       var oqUC = _gd('./lib/wxParse/wxParse.wxml', ooUC, e_, d_);
       if (oqUC) {
         var opUC = _1(21,olUC,okUC,gg);
         oqUC(opUC,opUC,onUC, gg);
       } else _w(ooUC, './lib/wxParse/wxParse.wxml', 0, 0);_(ojUC,onUC);return ojUC;};_2(25, ohUC, e, s, gg, ogUC, "item", "index", '');_(ofUC,ogUC);_(olTC,ofUC);
      }else if (_o(42, e, s, gg)) {
        olTC.wxVkey = 6;var otUC = _m( "view", ["class", 0,"style", 1], e, s, gg);var ouUC = _v();var ovUC = function(ozUC,oyUC,oxUC,gg){var oAVC = _v();
       var oBVC = _o(48, ozUC, oyUC, gg);
       var oDVC = _gd('./lib/wxParse/wxParse.wxml', oBVC, e_, d_);
       if (oDVC) {
         var oCVC = _1(21,ozUC,oyUC,gg);
         oDVC(oCVC,oCVC,oAVC, gg);
       } else _w(oBVC, './lib/wxParse/wxParse.wxml', 0, 0);_(oxUC,oAVC);return oxUC;};_2(25, ovUC, e, s, gg, ouUC, "item", "index", '');_(otUC,ouUC);_(olTC,otUC);
      }else {
        olTC.wxVkey = 7;var oEVC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oGVC = _v();var oHVC = function(oLVC,oKVC,oJVC,gg){var oNVC = _v();
       var oOVC = _o(48, oLVC, oKVC, gg);
       var oQVC = _gd('./lib/wxParse/wxParse.wxml', oOVC, e_, d_);
       if (oQVC) {
         var oPVC = _1(21,oLVC,oKVC,gg);
         oQVC(oPVC,oPVC,oNVC, gg);
       } else _w(oOVC, './lib/wxParse/wxParse.wxml', 0, 0);_(oJVC,oNVC);return oJVC;};_2(25, oHVC, e, s, gg, oGVC, "item", "index", '');_(oEVC,oGVC);_(olTC, oEVC);
      }_(oiTC,olTC);
      }else if (_o(13, e, s, gg)) {
        oiTC.wxVkey = 2;var oTVC = _v();
       var oUVC = _o(44, e, s, gg);
       var oWVC = _gd('./lib/wxParse/wxParse.wxml', oUVC, e_, d_);
       if (oWVC) {
         var oVVC = _1(21,e,s,gg);
         oWVC(oVVC,oVVC,oTVC, gg);
       } else _w(oUVC, './lib/wxParse/wxParse.wxml', 0, 0);_(oiTC,oTVC);
      } _(r,oiTC);
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
      var oYVC = _v();
      if (_o(16, e, s, gg)) {
        oYVC.wxVkey = 1;var obVC = _v();
      if (_o(22, e, s, gg)) {
        obVC.wxVkey = 1;var oeVC = _m( "button", ["size", 23,"type", 1], e, s, gg);var ofVC = _v();var ogVC = function(okVC,ojVC,oiVC,gg){var omVC = _v();
       var onVC = _o(49, okVC, ojVC, gg);
       var opVC = _gd('./lib/wxParse/wxParse.wxml', onVC, e_, d_);
       if (opVC) {
         var ooVC = _1(21,okVC,ojVC,gg);
         opVC(ooVC,ooVC,omVC, gg);
       } else _w(onVC, './lib/wxParse/wxParse.wxml', 0, 0);_(oiVC,omVC);return oiVC;};_2(25, ogVC, e, s, gg, ofVC, "item", "index", '');_(oeVC,ofVC);_(obVC,oeVC);
      }else if (_o(28, e, s, gg)) {
        obVC.wxVkey = 2;var osVC = _n("view");_r(osVC, 'class', 29, e, s, gg);var otVC = _n("view");_r(otVC, 'class', 30, e, s, gg);var ouVC = _n("view");_r(ouVC, 'class', 31, e, s, gg);var ovVC = _n("view");_r(ovVC, 'class', 32, e, s, gg);_(ouVC,ovVC);_(otVC,ouVC);var owVC = _n("view");_r(owVC, 'class', 31, e, s, gg);var oxVC = _v();var oyVC = function(oBWC,oAWC,o_VC,gg){var oDWC = _v();
       var oEWC = _o(49, oBWC, oAWC, gg);
       var oGWC = _gd('./lib/wxParse/wxParse.wxml', oEWC, e_, d_);
       if (oGWC) {
         var oFWC = _1(21,oBWC,oAWC,gg);
         oGWC(oFWC,oFWC,oDWC, gg);
       } else _w(oEWC, './lib/wxParse/wxParse.wxml', 0, 0);_(o_VC,oDWC);return o_VC;};_2(25, oyVC, e, s, gg, oxVC, "item", "index", '');_(owVC,oxVC);_(otVC,owVC);_(osVC,otVC);_(obVC,osVC);
      }else if (_o(33, e, s, gg)) {
        obVC.wxVkey = 3;var oJWC = _v();
       var oKWC = _o(34, e, s, gg);
       var oMWC = _gd('./lib/wxParse/wxParse.wxml', oKWC, e_, d_);
       if (oMWC) {
         var oLWC = _1(21,e,s,gg);
         oMWC(oLWC,oLWC,oJWC, gg);
       } else _w(oKWC, './lib/wxParse/wxParse.wxml', 0, 0);_(obVC,oJWC);
      }else if (_o(35, e, s, gg)) {
        obVC.wxVkey = 4;var oPWC = _v();
       var oQWC = _o(36, e, s, gg);
       var oSWC = _gd('./lib/wxParse/wxParse.wxml', oQWC, e_, d_);
       if (oSWC) {
         var oRWC = _1(21,e,s,gg);
         oSWC(oRWC,oRWC,oPWC, gg);
       } else _w(oQWC, './lib/wxParse/wxParse.wxml', 0, 0);_(obVC,oPWC);
      }else if (_o(37, e, s, gg)) {
        obVC.wxVkey = 5;var oVWC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oWWC = _v();var oXWC = function(obWC,oaWC,oZWC,gg){var odWC = _v();
       var oeWC = _o(49, obWC, oaWC, gg);
       var ogWC = _gd('./lib/wxParse/wxParse.wxml', oeWC, e_, d_);
       if (ogWC) {
         var ofWC = _1(21,obWC,oaWC,gg);
         ogWC(ofWC,ofWC,odWC, gg);
       } else _w(oeWC, './lib/wxParse/wxParse.wxml', 0, 0);_(oZWC,odWC);return oZWC;};_2(25, oXWC, e, s, gg, oWWC, "item", "index", '');_(oVWC,oWWC);_(obVC,oVWC);
      }else if (_o(42, e, s, gg)) {
        obVC.wxVkey = 6;var ojWC = _m( "view", ["class", 0,"style", 1], e, s, gg);var okWC = _v();var olWC = function(opWC,ooWC,onWC,gg){var orWC = _v();
       var osWC = _o(49, opWC, ooWC, gg);
       var ouWC = _gd('./lib/wxParse/wxParse.wxml', osWC, e_, d_);
       if (ouWC) {
         var otWC = _1(21,opWC,ooWC,gg);
         ouWC(otWC,otWC,orWC, gg);
       } else _w(osWC, './lib/wxParse/wxParse.wxml', 0, 0);_(onWC,orWC);return onWC;};_2(25, olWC, e, s, gg, okWC, "item", "index", '');_(ojWC,okWC);_(obVC,ojWC);
      }else {
        obVC.wxVkey = 7;var ovWC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oxWC = _v();var oyWC = function(oBXC,oAXC,o_WC,gg){var oDXC = _v();
       var oEXC = _o(49, oBXC, oAXC, gg);
       var oGXC = _gd('./lib/wxParse/wxParse.wxml', oEXC, e_, d_);
       if (oGXC) {
         var oFXC = _1(21,oBXC,oAXC,gg);
         oGXC(oFXC,oFXC,oDXC, gg);
       } else _w(oEXC, './lib/wxParse/wxParse.wxml', 0, 0);_(o_WC,oDXC);return o_WC;};_2(25, oyWC, e, s, gg, oxWC, "item", "index", '');_(ovWC,oxWC);_(obVC, ovWC);
      }_(oYVC,obVC);
      }else if (_o(13, e, s, gg)) {
        oYVC.wxVkey = 2;var oJXC = _v();
       var oKXC = _o(44, e, s, gg);
       var oMXC = _gd('./lib/wxParse/wxParse.wxml', oKXC, e_, d_);
       if (oMXC) {
         var oLXC = _1(21,e,s,gg);
         oMXC(oLXC,oLXC,oJXC, gg);
       } else _w(oKXC, './lib/wxParse/wxParse.wxml', 0, 0);_(oYVC,oJXC);
      } _(r,oYVC);
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
      var oOXC = _v();
      if (_o(16, e, s, gg)) {
        oOXC.wxVkey = 1;var oRXC = _v();
      if (_o(22, e, s, gg)) {
        oRXC.wxVkey = 1;var oUXC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oVXC = _v();var oWXC = function(oaXC,oZXC,oYXC,gg){var ocXC = _v();
       var odXC = _o(50, oaXC, oZXC, gg);
       var ofXC = _gd('./lib/wxParse/wxParse.wxml', odXC, e_, d_);
       if (ofXC) {
         var oeXC = _1(21,oaXC,oZXC,gg);
         ofXC(oeXC,oeXC,ocXC, gg);
       } else _w(odXC, './lib/wxParse/wxParse.wxml', 0, 0);_(oYXC,ocXC);return oYXC;};_2(25, oWXC, e, s, gg, oVXC, "item", "index", '');_(oUXC,oVXC);_(oRXC,oUXC);
      }else if (_o(28, e, s, gg)) {
        oRXC.wxVkey = 2;var oiXC = _n("view");_r(oiXC, 'class', 29, e, s, gg);var ojXC = _n("view");_r(ojXC, 'class', 30, e, s, gg);var okXC = _n("view");_r(okXC, 'class', 31, e, s, gg);var olXC = _n("view");_r(olXC, 'class', 32, e, s, gg);_(okXC,olXC);_(ojXC,okXC);var omXC = _n("view");_r(omXC, 'class', 31, e, s, gg);var onXC = _v();var ooXC = function(osXC,orXC,oqXC,gg){var ouXC = _v();
       var ovXC = _o(50, osXC, orXC, gg);
       var oxXC = _gd('./lib/wxParse/wxParse.wxml', ovXC, e_, d_);
       if (oxXC) {
         var owXC = _1(21,osXC,orXC,gg);
         oxXC(owXC,owXC,ouXC, gg);
       } else _w(ovXC, './lib/wxParse/wxParse.wxml', 0, 0);_(oqXC,ouXC);return oqXC;};_2(25, ooXC, e, s, gg, onXC, "item", "index", '');_(omXC,onXC);_(ojXC,omXC);_(oiXC,ojXC);_(oRXC,oiXC);
      }else if (_o(33, e, s, gg)) {
        oRXC.wxVkey = 3;var o_XC = _v();
       var oAYC = _o(34, e, s, gg);
       var oCYC = _gd('./lib/wxParse/wxParse.wxml', oAYC, e_, d_);
       if (oCYC) {
         var oBYC = _1(21,e,s,gg);
         oCYC(oBYC,oBYC,o_XC, gg);
       } else _w(oAYC, './lib/wxParse/wxParse.wxml', 0, 0);_(oRXC,o_XC);
      }else if (_o(35, e, s, gg)) {
        oRXC.wxVkey = 4;var oFYC = _v();
       var oGYC = _o(36, e, s, gg);
       var oIYC = _gd('./lib/wxParse/wxParse.wxml', oGYC, e_, d_);
       if (oIYC) {
         var oHYC = _1(21,e,s,gg);
         oIYC(oHYC,oHYC,oFYC, gg);
       } else _w(oGYC, './lib/wxParse/wxParse.wxml', 0, 0);_(oRXC,oFYC);
      }else if (_o(37, e, s, gg)) {
        oRXC.wxVkey = 5;var oLYC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oMYC = _v();var oNYC = function(oRYC,oQYC,oPYC,gg){var oTYC = _v();
       var oUYC = _o(50, oRYC, oQYC, gg);
       var oWYC = _gd('./lib/wxParse/wxParse.wxml', oUYC, e_, d_);
       if (oWYC) {
         var oVYC = _1(21,oRYC,oQYC,gg);
         oWYC(oVYC,oVYC,oTYC, gg);
       } else _w(oUYC, './lib/wxParse/wxParse.wxml', 0, 0);_(oPYC,oTYC);return oPYC;};_2(25, oNYC, e, s, gg, oMYC, "item", "index", '');_(oLYC,oMYC);_(oRXC,oLYC);
      }else if (_o(42, e, s, gg)) {
        oRXC.wxVkey = 6;var oZYC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oaYC = _v();var obYC = function(ofYC,oeYC,odYC,gg){var ohYC = _v();
       var oiYC = _o(50, ofYC, oeYC, gg);
       var okYC = _gd('./lib/wxParse/wxParse.wxml', oiYC, e_, d_);
       if (okYC) {
         var ojYC = _1(21,ofYC,oeYC,gg);
         okYC(ojYC,ojYC,ohYC, gg);
       } else _w(oiYC, './lib/wxParse/wxParse.wxml', 0, 0);_(odYC,ohYC);return odYC;};_2(25, obYC, e, s, gg, oaYC, "item", "index", '');_(oZYC,oaYC);_(oRXC,oZYC);
      }else {
        oRXC.wxVkey = 7;var olYC = _m( "view", ["style", 1,"class", 42], e, s, gg);var onYC = _v();var ooYC = function(osYC,orYC,oqYC,gg){var ouYC = _v();
       var ovYC = _o(50, osYC, orYC, gg);
       var oxYC = _gd('./lib/wxParse/wxParse.wxml', ovYC, e_, d_);
       if (oxYC) {
         var owYC = _1(21,osYC,orYC,gg);
         oxYC(owYC,owYC,ouYC, gg);
       } else _w(ovYC, './lib/wxParse/wxParse.wxml', 0, 0);_(oqYC,ouYC);return oqYC;};_2(25, ooYC, e, s, gg, onYC, "item", "index", '');_(olYC,onYC);_(oRXC, olYC);
      }_(oOXC,oRXC);
      }else if (_o(13, e, s, gg)) {
        oOXC.wxVkey = 2;var o_YC = _v();
       var oAZC = _o(44, e, s, gg);
       var oCZC = _gd('./lib/wxParse/wxParse.wxml', oAZC, e_, d_);
       if (oCZC) {
         var oBZC = _1(21,e,s,gg);
         oCZC(oBZC,oBZC,o_YC, gg);
       } else _w(oAZC, './lib/wxParse/wxParse.wxml', 0, 0);_(oOXC,o_YC);
      } _(r,oOXC);
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
      var oEZC = _v();
      if (_o(16, e, s, gg)) {
        oEZC.wxVkey = 1;var oHZC = _v();
      if (_o(22, e, s, gg)) {
        oHZC.wxVkey = 1;var oKZC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oLZC = _v();var oMZC = function(oQZC,oPZC,oOZC,gg){var oSZC = _v();
       var oTZC = _o(51, oQZC, oPZC, gg);
       var oVZC = _gd('./lib/wxParse/wxParse.wxml', oTZC, e_, d_);
       if (oVZC) {
         var oUZC = _1(21,oQZC,oPZC,gg);
         oVZC(oUZC,oUZC,oSZC, gg);
       } else _w(oTZC, './lib/wxParse/wxParse.wxml', 0, 0);_(oOZC,oSZC);return oOZC;};_2(25, oMZC, e, s, gg, oLZC, "item", "index", '');_(oKZC,oLZC);_(oHZC,oKZC);
      }else if (_o(28, e, s, gg)) {
        oHZC.wxVkey = 2;var oYZC = _n("view");_r(oYZC, 'class', 29, e, s, gg);var oZZC = _n("view");_r(oZZC, 'class', 30, e, s, gg);var oaZC = _n("view");_r(oaZC, 'class', 31, e, s, gg);var obZC = _n("view");_r(obZC, 'class', 32, e, s, gg);_(oaZC,obZC);_(oZZC,oaZC);var ocZC = _n("view");_r(ocZC, 'class', 31, e, s, gg);var odZC = _v();var oeZC = function(oiZC,ohZC,ogZC,gg){var okZC = _v();
       var olZC = _o(51, oiZC, ohZC, gg);
       var onZC = _gd('./lib/wxParse/wxParse.wxml', olZC, e_, d_);
       if (onZC) {
         var omZC = _1(21,oiZC,ohZC,gg);
         onZC(omZC,omZC,okZC, gg);
       } else _w(olZC, './lib/wxParse/wxParse.wxml', 0, 0);_(ogZC,okZC);return ogZC;};_2(25, oeZC, e, s, gg, odZC, "item", "index", '');_(ocZC,odZC);_(oZZC,ocZC);_(oYZC,oZZC);_(oHZC,oYZC);
      }else if (_o(33, e, s, gg)) {
        oHZC.wxVkey = 3;var oqZC = _v();
       var orZC = _o(34, e, s, gg);
       var otZC = _gd('./lib/wxParse/wxParse.wxml', orZC, e_, d_);
       if (otZC) {
         var osZC = _1(21,e,s,gg);
         otZC(osZC,osZC,oqZC, gg);
       } else _w(orZC, './lib/wxParse/wxParse.wxml', 0, 0);_(oHZC,oqZC);
      }else if (_o(35, e, s, gg)) {
        oHZC.wxVkey = 4;var owZC = _v();
       var oxZC = _o(36, e, s, gg);
       var ozZC = _gd('./lib/wxParse/wxParse.wxml', oxZC, e_, d_);
       if (ozZC) {
         var oyZC = _1(21,e,s,gg);
         ozZC(oyZC,oyZC,owZC, gg);
       } else _w(oxZC, './lib/wxParse/wxParse.wxml', 0, 0);_(oHZC,owZC);
      }else if (_o(37, e, s, gg)) {
        oHZC.wxVkey = 5;var oBaC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oCaC = _v();var oDaC = function(oHaC,oGaC,oFaC,gg){var oJaC = _v();
       var oKaC = _o(51, oHaC, oGaC, gg);
       var oMaC = _gd('./lib/wxParse/wxParse.wxml', oKaC, e_, d_);
       if (oMaC) {
         var oLaC = _1(21,oHaC,oGaC,gg);
         oMaC(oLaC,oLaC,oJaC, gg);
       } else _w(oKaC, './lib/wxParse/wxParse.wxml', 0, 0);_(oFaC,oJaC);return oFaC;};_2(25, oDaC, e, s, gg, oCaC, "item", "index", '');_(oBaC,oCaC);_(oHZC,oBaC);
      }else if (_o(42, e, s, gg)) {
        oHZC.wxVkey = 6;var oPaC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oQaC = _v();var oRaC = function(oVaC,oUaC,oTaC,gg){var oXaC = _v();
       var oYaC = _o(51, oVaC, oUaC, gg);
       var oaaC = _gd('./lib/wxParse/wxParse.wxml', oYaC, e_, d_);
       if (oaaC) {
         var oZaC = _1(21,oVaC,oUaC,gg);
         oaaC(oZaC,oZaC,oXaC, gg);
       } else _w(oYaC, './lib/wxParse/wxParse.wxml', 0, 0);_(oTaC,oXaC);return oTaC;};_2(25, oRaC, e, s, gg, oQaC, "item", "index", '');_(oPaC,oQaC);_(oHZC,oPaC);
      }else {
        oHZC.wxVkey = 7;var obaC = _m( "view", ["style", 1,"class", 42], e, s, gg);var odaC = _v();var oeaC = function(oiaC,ohaC,ogaC,gg){var okaC = _v();
       var olaC = _o(51, oiaC, ohaC, gg);
       var onaC = _gd('./lib/wxParse/wxParse.wxml', olaC, e_, d_);
       if (onaC) {
         var omaC = _1(21,oiaC,ohaC,gg);
         onaC(omaC,omaC,okaC, gg);
       } else _w(olaC, './lib/wxParse/wxParse.wxml', 0, 0);_(ogaC,okaC);return ogaC;};_2(25, oeaC, e, s, gg, odaC, "item", "index", '');_(obaC,odaC);_(oHZC, obaC);
      }_(oEZC,oHZC);
      }else if (_o(13, e, s, gg)) {
        oEZC.wxVkey = 2;var oqaC = _v();
       var oraC = _o(44, e, s, gg);
       var otaC = _gd('./lib/wxParse/wxParse.wxml', oraC, e_, d_);
       if (otaC) {
         var osaC = _1(21,e,s,gg);
         otaC(osaC,osaC,oqaC, gg);
       } else _w(oraC, './lib/wxParse/wxParse.wxml', 0, 0);_(oEZC,oqaC);
      } _(r,oEZC);
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
      var ovaC = _v();
      if (_o(16, e, s, gg)) {
        ovaC.wxVkey = 1;var oyaC = _v();
      if (_o(22, e, s, gg)) {
        oyaC.wxVkey = 1;var oAbC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oBbC = _v();var oCbC = function(oGbC,oFbC,oEbC,gg){var oIbC = _v();
       var oJbC = _o(52, oGbC, oFbC, gg);
       var oLbC = _gd('./lib/wxParse/wxParse.wxml', oJbC, e_, d_);
       if (oLbC) {
         var oKbC = _1(21,oGbC,oFbC,gg);
         oLbC(oKbC,oKbC,oIbC, gg);
       } else _w(oJbC, './lib/wxParse/wxParse.wxml', 0, 0);_(oEbC,oIbC);return oEbC;};_2(25, oCbC, e, s, gg, oBbC, "item", "index", '');_(oAbC,oBbC);_(oyaC,oAbC);
      }else if (_o(28, e, s, gg)) {
        oyaC.wxVkey = 2;var oObC = _n("view");_r(oObC, 'class', 29, e, s, gg);var oPbC = _n("view");_r(oPbC, 'class', 30, e, s, gg);var oQbC = _n("view");_r(oQbC, 'class', 31, e, s, gg);var oRbC = _n("view");_r(oRbC, 'class', 32, e, s, gg);_(oQbC,oRbC);_(oPbC,oQbC);var oSbC = _n("view");_r(oSbC, 'class', 31, e, s, gg);var oTbC = _v();var oUbC = function(oYbC,oXbC,oWbC,gg){var oabC = _v();
       var obbC = _o(52, oYbC, oXbC, gg);
       var odbC = _gd('./lib/wxParse/wxParse.wxml', obbC, e_, d_);
       if (odbC) {
         var ocbC = _1(21,oYbC,oXbC,gg);
         odbC(ocbC,ocbC,oabC, gg);
       } else _w(obbC, './lib/wxParse/wxParse.wxml', 0, 0);_(oWbC,oabC);return oWbC;};_2(25, oUbC, e, s, gg, oTbC, "item", "index", '');_(oSbC,oTbC);_(oPbC,oSbC);_(oObC,oPbC);_(oyaC,oObC);
      }else if (_o(33, e, s, gg)) {
        oyaC.wxVkey = 3;var ogbC = _v();
       var ohbC = _o(34, e, s, gg);
       var ojbC = _gd('./lib/wxParse/wxParse.wxml', ohbC, e_, d_);
       if (ojbC) {
         var oibC = _1(21,e,s,gg);
         ojbC(oibC,oibC,ogbC, gg);
       } else _w(ohbC, './lib/wxParse/wxParse.wxml', 0, 0);_(oyaC,ogbC);
      }else if (_o(35, e, s, gg)) {
        oyaC.wxVkey = 4;var ombC = _v();
       var onbC = _o(36, e, s, gg);
       var opbC = _gd('./lib/wxParse/wxParse.wxml', onbC, e_, d_);
       if (opbC) {
         var oobC = _1(21,e,s,gg);
         opbC(oobC,oobC,ombC, gg);
       } else _w(onbC, './lib/wxParse/wxParse.wxml', 0, 0);_(oyaC,ombC);
      }else if (_o(37, e, s, gg)) {
        oyaC.wxVkey = 5;var osbC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var otbC = _v();var oubC = function(oybC,oxbC,owbC,gg){var o_bC = _v();
       var oAcC = _o(52, oybC, oxbC, gg);
       var oCcC = _gd('./lib/wxParse/wxParse.wxml', oAcC, e_, d_);
       if (oCcC) {
         var oBcC = _1(21,oybC,oxbC,gg);
         oCcC(oBcC,oBcC,o_bC, gg);
       } else _w(oAcC, './lib/wxParse/wxParse.wxml', 0, 0);_(owbC,o_bC);return owbC;};_2(25, oubC, e, s, gg, otbC, "item", "index", '');_(osbC,otbC);_(oyaC,osbC);
      }else if (_o(42, e, s, gg)) {
        oyaC.wxVkey = 6;var oFcC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oGcC = _v();var oHcC = function(oLcC,oKcC,oJcC,gg){var oNcC = _v();
       var oOcC = _o(52, oLcC, oKcC, gg);
       var oQcC = _gd('./lib/wxParse/wxParse.wxml', oOcC, e_, d_);
       if (oQcC) {
         var oPcC = _1(21,oLcC,oKcC,gg);
         oQcC(oPcC,oPcC,oNcC, gg);
       } else _w(oOcC, './lib/wxParse/wxParse.wxml', 0, 0);_(oJcC,oNcC);return oJcC;};_2(25, oHcC, e, s, gg, oGcC, "item", "index", '');_(oFcC,oGcC);_(oyaC,oFcC);
      }else {
        oyaC.wxVkey = 7;var oRcC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oTcC = _v();var oUcC = function(oYcC,oXcC,oWcC,gg){var oacC = _v();
       var obcC = _o(52, oYcC, oXcC, gg);
       var odcC = _gd('./lib/wxParse/wxParse.wxml', obcC, e_, d_);
       if (odcC) {
         var occC = _1(21,oYcC,oXcC,gg);
         odcC(occC,occC,oacC, gg);
       } else _w(obcC, './lib/wxParse/wxParse.wxml', 0, 0);_(oWcC,oacC);return oWcC;};_2(25, oUcC, e, s, gg, oTcC, "item", "index", '');_(oRcC,oTcC);_(oyaC, oRcC);
      }_(ovaC,oyaC);
      }else if (_o(13, e, s, gg)) {
        ovaC.wxVkey = 2;var ogcC = _v();
       var ohcC = _o(44, e, s, gg);
       var ojcC = _gd('./lib/wxParse/wxParse.wxml', ohcC, e_, d_);
       if (ojcC) {
         var oicC = _1(21,e,s,gg);
         ojcC(oicC,oicC,ogcC, gg);
       } else _w(ohcC, './lib/wxParse/wxParse.wxml', 0, 0);_(ovaC,ogcC);
      } _(r,ovaC);
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
      var olcC = _v();
      if (_o(16, e, s, gg)) {
        olcC.wxVkey = 1;var oocC = _v();
      if (_o(22, e, s, gg)) {
        oocC.wxVkey = 1;var orcC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oscC = _v();var otcC = function(oxcC,owcC,ovcC,gg){var ozcC = _v();
       var o_cC = _o(53, oxcC, owcC, gg);
       var oBdC = _gd('./lib/wxParse/wxParse.wxml', o_cC, e_, d_);
       if (oBdC) {
         var oAdC = _1(21,oxcC,owcC,gg);
         oBdC(oAdC,oAdC,ozcC, gg);
       } else _w(o_cC, './lib/wxParse/wxParse.wxml', 0, 0);_(ovcC,ozcC);return ovcC;};_2(25, otcC, e, s, gg, oscC, "item", "index", '');_(orcC,oscC);_(oocC,orcC);
      }else if (_o(28, e, s, gg)) {
        oocC.wxVkey = 2;var oEdC = _n("view");_r(oEdC, 'class', 29, e, s, gg);var oFdC = _n("view");_r(oFdC, 'class', 30, e, s, gg);var oGdC = _n("view");_r(oGdC, 'class', 31, e, s, gg);var oHdC = _n("view");_r(oHdC, 'class', 32, e, s, gg);_(oGdC,oHdC);_(oFdC,oGdC);var oIdC = _n("view");_r(oIdC, 'class', 31, e, s, gg);var oJdC = _v();var oKdC = function(oOdC,oNdC,oMdC,gg){var oQdC = _v();
       var oRdC = _o(53, oOdC, oNdC, gg);
       var oTdC = _gd('./lib/wxParse/wxParse.wxml', oRdC, e_, d_);
       if (oTdC) {
         var oSdC = _1(21,oOdC,oNdC,gg);
         oTdC(oSdC,oSdC,oQdC, gg);
       } else _w(oRdC, './lib/wxParse/wxParse.wxml', 0, 0);_(oMdC,oQdC);return oMdC;};_2(25, oKdC, e, s, gg, oJdC, "item", "index", '');_(oIdC,oJdC);_(oFdC,oIdC);_(oEdC,oFdC);_(oocC,oEdC);
      }else if (_o(33, e, s, gg)) {
        oocC.wxVkey = 3;var oWdC = _v();
       var oXdC = _o(34, e, s, gg);
       var oZdC = _gd('./lib/wxParse/wxParse.wxml', oXdC, e_, d_);
       if (oZdC) {
         var oYdC = _1(21,e,s,gg);
         oZdC(oYdC,oYdC,oWdC, gg);
       } else _w(oXdC, './lib/wxParse/wxParse.wxml', 0, 0);_(oocC,oWdC);
      }else if (_o(35, e, s, gg)) {
        oocC.wxVkey = 4;var ocdC = _v();
       var oddC = _o(36, e, s, gg);
       var ofdC = _gd('./lib/wxParse/wxParse.wxml', oddC, e_, d_);
       if (ofdC) {
         var oedC = _1(21,e,s,gg);
         ofdC(oedC,oedC,ocdC, gg);
       } else _w(oddC, './lib/wxParse/wxParse.wxml', 0, 0);_(oocC,ocdC);
      }else if (_o(37, e, s, gg)) {
        oocC.wxVkey = 5;var oidC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ojdC = _v();var okdC = function(oodC,ondC,omdC,gg){var oqdC = _v();
       var ordC = _o(53, oodC, ondC, gg);
       var otdC = _gd('./lib/wxParse/wxParse.wxml', ordC, e_, d_);
       if (otdC) {
         var osdC = _1(21,oodC,ondC,gg);
         otdC(osdC,osdC,oqdC, gg);
       } else _w(ordC, './lib/wxParse/wxParse.wxml', 0, 0);_(omdC,oqdC);return omdC;};_2(25, okdC, e, s, gg, ojdC, "item", "index", '');_(oidC,ojdC);_(oocC,oidC);
      }else if (_o(42, e, s, gg)) {
        oocC.wxVkey = 6;var owdC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oxdC = _v();var oydC = function(oBeC,oAeC,o_dC,gg){var oDeC = _v();
       var oEeC = _o(53, oBeC, oAeC, gg);
       var oGeC = _gd('./lib/wxParse/wxParse.wxml', oEeC, e_, d_);
       if (oGeC) {
         var oFeC = _1(21,oBeC,oAeC,gg);
         oGeC(oFeC,oFeC,oDeC, gg);
       } else _w(oEeC, './lib/wxParse/wxParse.wxml', 0, 0);_(o_dC,oDeC);return o_dC;};_2(25, oydC, e, s, gg, oxdC, "item", "index", '');_(owdC,oxdC);_(oocC,owdC);
      }else {
        oocC.wxVkey = 7;var oHeC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oJeC = _v();var oKeC = function(oOeC,oNeC,oMeC,gg){var oQeC = _v();
       var oReC = _o(53, oOeC, oNeC, gg);
       var oTeC = _gd('./lib/wxParse/wxParse.wxml', oReC, e_, d_);
       if (oTeC) {
         var oSeC = _1(21,oOeC,oNeC,gg);
         oTeC(oSeC,oSeC,oQeC, gg);
       } else _w(oReC, './lib/wxParse/wxParse.wxml', 0, 0);_(oMeC,oQeC);return oMeC;};_2(25, oKeC, e, s, gg, oJeC, "item", "index", '');_(oHeC,oJeC);_(oocC, oHeC);
      }_(olcC,oocC);
      }else if (_o(13, e, s, gg)) {
        olcC.wxVkey = 2;var oWeC = _v();
       var oXeC = _o(44, e, s, gg);
       var oZeC = _gd('./lib/wxParse/wxParse.wxml', oXeC, e_, d_);
       if (oZeC) {
         var oYeC = _1(21,e,s,gg);
         oZeC(oYeC,oYeC,oWeC, gg);
       } else _w(oXeC, './lib/wxParse/wxParse.wxml', 0, 0);_(olcC,oWeC);
      } _(r,olcC);
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
      var obeC = _v();
      if (_o(16, e, s, gg)) {
        obeC.wxVkey = 1;var oeeC = _v();
      if (_o(22, e, s, gg)) {
        oeeC.wxVkey = 1;var oheC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oieC = _v();var ojeC = function(oneC,omeC,oleC,gg){var opeC = _v();
       var oqeC = _o(54, oneC, omeC, gg);
       var oseC = _gd('./lib/wxParse/wxParse.wxml', oqeC, e_, d_);
       if (oseC) {
         var oreC = _1(21,oneC,omeC,gg);
         oseC(oreC,oreC,opeC, gg);
       } else _w(oqeC, './lib/wxParse/wxParse.wxml', 0, 0);_(oleC,opeC);return oleC;};_2(25, ojeC, e, s, gg, oieC, "item", "index", '');_(oheC,oieC);_(oeeC,oheC);
      }else if (_o(28, e, s, gg)) {
        oeeC.wxVkey = 2;var oveC = _n("view");_r(oveC, 'class', 29, e, s, gg);var oweC = _n("view");_r(oweC, 'class', 30, e, s, gg);var oxeC = _n("view");_r(oxeC, 'class', 31, e, s, gg);var oyeC = _n("view");_r(oyeC, 'class', 32, e, s, gg);_(oxeC,oyeC);_(oweC,oxeC);var ozeC = _n("view");_r(ozeC, 'class', 31, e, s, gg);var o_eC = _v();var oAfC = function(oEfC,oDfC,oCfC,gg){var oGfC = _v();
       var oHfC = _o(54, oEfC, oDfC, gg);
       var oJfC = _gd('./lib/wxParse/wxParse.wxml', oHfC, e_, d_);
       if (oJfC) {
         var oIfC = _1(21,oEfC,oDfC,gg);
         oJfC(oIfC,oIfC,oGfC, gg);
       } else _w(oHfC, './lib/wxParse/wxParse.wxml', 0, 0);_(oCfC,oGfC);return oCfC;};_2(25, oAfC, e, s, gg, o_eC, "item", "index", '');_(ozeC,o_eC);_(oweC,ozeC);_(oveC,oweC);_(oeeC,oveC);
      }else if (_o(33, e, s, gg)) {
        oeeC.wxVkey = 3;var oMfC = _v();
       var oNfC = _o(34, e, s, gg);
       var oPfC = _gd('./lib/wxParse/wxParse.wxml', oNfC, e_, d_);
       if (oPfC) {
         var oOfC = _1(21,e,s,gg);
         oPfC(oOfC,oOfC,oMfC, gg);
       } else _w(oNfC, './lib/wxParse/wxParse.wxml', 0, 0);_(oeeC,oMfC);
      }else if (_o(35, e, s, gg)) {
        oeeC.wxVkey = 4;var oSfC = _v();
       var oTfC = _o(36, e, s, gg);
       var oVfC = _gd('./lib/wxParse/wxParse.wxml', oTfC, e_, d_);
       if (oVfC) {
         var oUfC = _1(21,e,s,gg);
         oVfC(oUfC,oUfC,oSfC, gg);
       } else _w(oTfC, './lib/wxParse/wxParse.wxml', 0, 0);_(oeeC,oSfC);
      }else if (_o(37, e, s, gg)) {
        oeeC.wxVkey = 5;var oYfC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oZfC = _v();var oafC = function(oefC,odfC,ocfC,gg){var ogfC = _v();
       var ohfC = _o(54, oefC, odfC, gg);
       var ojfC = _gd('./lib/wxParse/wxParse.wxml', ohfC, e_, d_);
       if (ojfC) {
         var oifC = _1(21,oefC,odfC,gg);
         ojfC(oifC,oifC,ogfC, gg);
       } else _w(ohfC, './lib/wxParse/wxParse.wxml', 0, 0);_(ocfC,ogfC);return ocfC;};_2(25, oafC, e, s, gg, oZfC, "item", "index", '');_(oYfC,oZfC);_(oeeC,oYfC);
      }else if (_o(42, e, s, gg)) {
        oeeC.wxVkey = 6;var omfC = _m( "view", ["class", 0,"style", 1], e, s, gg);var onfC = _v();var oofC = function(osfC,orfC,oqfC,gg){var oufC = _v();
       var ovfC = _o(54, osfC, orfC, gg);
       var oxfC = _gd('./lib/wxParse/wxParse.wxml', ovfC, e_, d_);
       if (oxfC) {
         var owfC = _1(21,osfC,orfC,gg);
         oxfC(owfC,owfC,oufC, gg);
       } else _w(ovfC, './lib/wxParse/wxParse.wxml', 0, 0);_(oqfC,oufC);return oqfC;};_2(25, oofC, e, s, gg, onfC, "item", "index", '');_(omfC,onfC);_(oeeC,omfC);
      }else {
        oeeC.wxVkey = 7;var oyfC = _m( "view", ["style", 1,"class", 42], e, s, gg);var o_fC = _v();var oAgC = function(oEgC,oDgC,oCgC,gg){var oGgC = _v();
       var oHgC = _o(54, oEgC, oDgC, gg);
       var oJgC = _gd('./lib/wxParse/wxParse.wxml', oHgC, e_, d_);
       if (oJgC) {
         var oIgC = _1(21,oEgC,oDgC,gg);
         oJgC(oIgC,oIgC,oGgC, gg);
       } else _w(oHgC, './lib/wxParse/wxParse.wxml', 0, 0);_(oCgC,oGgC);return oCgC;};_2(25, oAgC, e, s, gg, o_fC, "item", "index", '');_(oyfC,o_fC);_(oeeC, oyfC);
      }_(obeC,oeeC);
      }else if (_o(13, e, s, gg)) {
        obeC.wxVkey = 2;var oMgC = _v();
       var oNgC = _o(44, e, s, gg);
       var oPgC = _gd('./lib/wxParse/wxParse.wxml', oNgC, e_, d_);
       if (oPgC) {
         var oOgC = _1(21,e,s,gg);
         oPgC(oOgC,oOgC,oMgC, gg);
       } else _w(oNgC, './lib/wxParse/wxParse.wxml', 0, 0);_(obeC,oMgC);
      } _(r,obeC);
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
      var oRgC = _v();
      if (_o(16, e, s, gg)) {
        oRgC.wxVkey = 1;var oUgC = _v();
      if (_o(22, e, s, gg)) {
        oUgC.wxVkey = 1;var oXgC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oYgC = _v();var oZgC = function(odgC,ocgC,obgC,gg){var ofgC = _v();
       var oggC = _o(55, odgC, ocgC, gg);
       var oigC = _gd('./lib/wxParse/wxParse.wxml', oggC, e_, d_);
       if (oigC) {
         var ohgC = _1(21,odgC,ocgC,gg);
         oigC(ohgC,ohgC,ofgC, gg);
       } else _w(oggC, './lib/wxParse/wxParse.wxml', 0, 0);_(obgC,ofgC);return obgC;};_2(25, oZgC, e, s, gg, oYgC, "item", "index", '');_(oXgC,oYgC);_(oUgC,oXgC);
      }else if (_o(28, e, s, gg)) {
        oUgC.wxVkey = 2;var olgC = _n("view");_r(olgC, 'class', 29, e, s, gg);var omgC = _n("view");_r(omgC, 'class', 30, e, s, gg);var ongC = _n("view");_r(ongC, 'class', 31, e, s, gg);var oogC = _n("view");_r(oogC, 'class', 32, e, s, gg);_(ongC,oogC);_(omgC,ongC);var opgC = _n("view");_r(opgC, 'class', 31, e, s, gg);var oqgC = _v();var orgC = function(ovgC,ougC,otgC,gg){var oxgC = _v();
       var oygC = _o(55, ovgC, ougC, gg);
       var o_gC = _gd('./lib/wxParse/wxParse.wxml', oygC, e_, d_);
       if (o_gC) {
         var ozgC = _1(21,ovgC,ougC,gg);
         o_gC(ozgC,ozgC,oxgC, gg);
       } else _w(oygC, './lib/wxParse/wxParse.wxml', 0, 0);_(otgC,oxgC);return otgC;};_2(25, orgC, e, s, gg, oqgC, "item", "index", '');_(opgC,oqgC);_(omgC,opgC);_(olgC,omgC);_(oUgC,olgC);
      }else if (_o(33, e, s, gg)) {
        oUgC.wxVkey = 3;var oChC = _v();
       var oDhC = _o(34, e, s, gg);
       var oFhC = _gd('./lib/wxParse/wxParse.wxml', oDhC, e_, d_);
       if (oFhC) {
         var oEhC = _1(21,e,s,gg);
         oFhC(oEhC,oEhC,oChC, gg);
       } else _w(oDhC, './lib/wxParse/wxParse.wxml', 0, 0);_(oUgC,oChC);
      }else if (_o(35, e, s, gg)) {
        oUgC.wxVkey = 4;var oIhC = _v();
       var oJhC = _o(36, e, s, gg);
       var oLhC = _gd('./lib/wxParse/wxParse.wxml', oJhC, e_, d_);
       if (oLhC) {
         var oKhC = _1(21,e,s,gg);
         oLhC(oKhC,oKhC,oIhC, gg);
       } else _w(oJhC, './lib/wxParse/wxParse.wxml', 0, 0);_(oUgC,oIhC);
      }else if (_o(37, e, s, gg)) {
        oUgC.wxVkey = 5;var oOhC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oPhC = _v();var oQhC = function(oUhC,oThC,oShC,gg){var oWhC = _v();
       var oXhC = _o(55, oUhC, oThC, gg);
       var oZhC = _gd('./lib/wxParse/wxParse.wxml', oXhC, e_, d_);
       if (oZhC) {
         var oYhC = _1(21,oUhC,oThC,gg);
         oZhC(oYhC,oYhC,oWhC, gg);
       } else _w(oXhC, './lib/wxParse/wxParse.wxml', 0, 0);_(oShC,oWhC);return oShC;};_2(25, oQhC, e, s, gg, oPhC, "item", "index", '');_(oOhC,oPhC);_(oUgC,oOhC);
      }else if (_o(42, e, s, gg)) {
        oUgC.wxVkey = 6;var ochC = _m( "view", ["class", 0,"style", 1], e, s, gg);var odhC = _v();var oehC = function(oihC,ohhC,oghC,gg){var okhC = _v();
       var olhC = _o(55, oihC, ohhC, gg);
       var onhC = _gd('./lib/wxParse/wxParse.wxml', olhC, e_, d_);
       if (onhC) {
         var omhC = _1(21,oihC,ohhC,gg);
         onhC(omhC,omhC,okhC, gg);
       } else _w(olhC, './lib/wxParse/wxParse.wxml', 0, 0);_(oghC,okhC);return oghC;};_2(25, oehC, e, s, gg, odhC, "item", "index", '');_(ochC,odhC);_(oUgC,ochC);
      }else {
        oUgC.wxVkey = 7;var oohC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oqhC = _v();var orhC = function(ovhC,ouhC,othC,gg){var oxhC = _v();
       var oyhC = _o(55, ovhC, ouhC, gg);
       var o_hC = _gd('./lib/wxParse/wxParse.wxml', oyhC, e_, d_);
       if (o_hC) {
         var ozhC = _1(21,ovhC,ouhC,gg);
         o_hC(ozhC,ozhC,oxhC, gg);
       } else _w(oyhC, './lib/wxParse/wxParse.wxml', 0, 0);_(othC,oxhC);return othC;};_2(25, orhC, e, s, gg, oqhC, "item", "index", '');_(oohC,oqhC);_(oUgC, oohC);
      }_(oRgC,oUgC);
      }else if (_o(13, e, s, gg)) {
        oRgC.wxVkey = 2;var oCiC = _v();
       var oDiC = _o(44, e, s, gg);
       var oFiC = _gd('./lib/wxParse/wxParse.wxml', oDiC, e_, d_);
       if (oFiC) {
         var oEiC = _1(21,e,s,gg);
         oFiC(oEiC,oEiC,oCiC, gg);
       } else _w(oDiC, './lib/wxParse/wxParse.wxml', 0, 0);_(oRgC,oCiC);
      } _(r,oRgC);
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
    var oXiC = e_["./pages/goods/goods.wxml"].i;var oYiC = _n("view");_r(oYiC, 'class', 56, e, s, gg);var oZiC = _m( "scroll-view", ["bindscroll", 57,"class", 1,"scrollIntoView", 2,"scrollY", 3], e, s, gg);var oaiC = _m( "swiper", ["autoplay", 60,"indicatorDots", 0,"class", 1,"duration", 2,"id", 3,"interval", 4], e, s, gg);var obiC = _v();var ociC = function(ogiC,ofiC,oeiC,gg){var odiC = _n("swiper-item");var oiiC = _m( "image", ["backgroundSize", 67,"src", 1], ogiC, ofiC, gg);_(odiC,oiiC);_(oeiC, odiC);return oeiC;};_2(65, ociC, e, s, gg, obiC, "item", "index", '{{item.id}}');_(oaiC,obiC);_(oZiC,oaiC);var ojiC = _n("view");_r(ojiC, 'class', 69, e, s, gg);var okiC = _n("view");_r(okiC, 'class', 70, e, s, gg);var oliC = _n("text");_r(oliC, 'class', 71, e, s, gg);var omiC = _o(72, e, s, gg);_(oliC,omiC);_(okiC,oliC);var oniC = _m( "image", ["class", 73,"id", 1,"src", 2], e, s, gg);_(okiC,oniC);var ooiC = _n("text");_r(ooiC, 'class', 76, e, s, gg);_(okiC,ooiC);var opiC = _n("text");_r(opiC, 'class', 77, e, s, gg);var oqiC = _o(78, e, s, gg);_(opiC,oqiC);_(okiC,opiC);var oriC = _v();
      if (_o(79, e, s, gg)) {
        oriC.wxVkey = 1;var osiC = _n("view");_r(osiC, 'class', 80, e, s, gg);var ouiC = _n("navigator");_r(ouiC, 'url', 81, e, s, gg);var oviC = _n("text");var owiC = _o(79, e, s, gg);_(oviC,owiC);_(ouiC,oviC);_(osiC,ouiC);_(oriC, osiC);
      } _(okiC,oriC);_(ojiC,okiC);_(oZiC,ojiC);var oxiC = _n("view");_r(oxiC, 'class', 82, e, s, gg);_(oZiC,oxiC);var oyiC = _m( "view", ["bindtap", 83,"class", 1], e, s, gg);var oziC = _n("view");_r(oziC, 'class', 85, e, s, gg);var o_iC = _o(86, e, s, gg);_(oziC,o_iC);_(oyiC,oziC);var oAjC = _m( "image", ["class", 87,"src", 1], e, s, gg);_(oyiC,oAjC);_(oZiC,oyiC);var oBjC = _n("view");_r(oBjC, 'class', 82, e, s, gg);_(oZiC,oBjC);var oCjC = _m( "view", ["bindtap", -1,"class", 89], e, s, gg);var oDjC = _n("view");_r(oDjC, 'class', 85, e, s, gg);var oEjC = _o(90, e, s, gg);_(oDjC,oEjC);_(oCjC,oDjC);var oFjC = _m( "image", ["class", 87,"src", 1], e, s, gg);_(oCjC,oFjC);_(oZiC,oCjC);var oGjC = _n("view");_r(oGjC, 'class', 89, e, s, gg);var oHjC = _n("view");_r(oHjC, 'class', 85, e, s, gg);var oIjC = _n("view");_r(oIjC, 'class', 91, e, s, gg);var oJjC = _o(92, e, s, gg);_(oIjC,oJjC);_(oHjC,oIjC);var oKjC = _n("view");_r(oKjC, 'class', 93, e, s, gg);var oLjC = _o(94, e, s, gg);_(oKjC,oLjC);_(oHjC,oKjC);_(oGjC,oHjC);var oMjC = _m( "image", ["class", 87,"src", 1], e, s, gg);_(oGjC,oMjC);_(oZiC,oGjC);var oNjC = _n("view");_r(oNjC, 'class', 82, e, s, gg);_(oZiC,oNjC);var oOjC = _n("view");_r(oOjC, 'class', 82, e, s, gg);_(oZiC,oOjC);var oPjC = _n("view");_r(oPjC, 'class', 89, e, s, gg);var oQjC = _n("view");_r(oQjC, 'class', 95, e, s, gg);var oRjC = _o(96, e, s, gg);_(oQjC,oRjC);_(oPjC,oQjC);_(oZiC,oPjC);var oSjC = _n("view");_r(oSjC, 'class', 97, e, s, gg);var oTjC = _n("view");_r(oTjC, 'class', 97, e, s, gg);var oUjC = _n("view");_r(oUjC, 'class', 98, e, s, gg);var oVjC = _n("view");_r(oVjC, 'class', 99, e, s, gg);_(oUjC,oVjC);_(oTjC,oUjC);var oWjC = _n("view");_r(oWjC, 'class', 100, e, s, gg);var oXjC = _n("view");_r(oXjC, 'class', 101, e, s, gg);_ai(oXiC, '../../lib/wxParse/wxParse.wxml', e_, './pages/goods/goods.wxml', 0, 0);var oZjC = _v();
       var oajC = _o(102, e, s, gg);
       var ocjC = _gd('./pages/goods/goods.wxml', oajC, e_, d_);
       if (ocjC) {
         var objC = _1(103,e,s,gg);
         ocjC(objC,objC,oZjC, gg);
       } else _w(oajC, './pages/goods/goods.wxml', 0, 0);_(oXjC,oZjC);_(oWjC,oXjC);var odjC = _v();var oejC = function(oijC,ohjC,ogjC,gg){var ofjC = _n("view");_r(ofjC, 'class', 105, oijC, ohjC, gg);var okjC = _m( "image", ["src", 68,"class", 38,"mode", 39], oijC, ohjC, gg);_(ofjC,okjC);_(ogjC, ofjC);return ogjC;};_2(104, oejC, e, s, gg, odjC, "item", "index", '');_(oWjC,odjC);var oljC = _m( "view", ["data-opt", 63,"bindtap", 45,"class", 46], e, s, gg);var omjC = _o(110, e, s, gg);_(oljC,omjC);_(oWjC,oljC);_(oTjC,oWjC);_(oSjC,oTjC);_(oZiC,oSjC);_(oYiC,oZiC);var onjC = _m( "view", ["data-opt", 63,"bindtap", 45,"class", 48], e, s, gg);var oojC = _o(112, e, s, gg);_(onjC,oojC);_(oYiC,onjC);var opjC = _v();
      if (_o(113, e, s, gg)) {
        opjC.wxVkey = 1;var oqjC = _n("view");_r(oqjC, 'class', 114, e, s, gg);var osjC = _n("view");_r(osjC, 'class', 115, e, s, gg);var otjC = _n("navigator");_r(otjC, 'url', 116, e, s, gg);var oujC = _n("text");_r(oujC, 'class', 85, e, s, gg);var ovjC = _o(117, e, s, gg);_(oujC,ovjC);_(otjC,oujC);var owjC = _n("text");_r(owjC, 'class', 87, e, s, gg);var oxjC = _o(118, e, s, gg);_(owjC,oxjC);_(otjC,owjC);_(osjC,otjC);_(oqjC,osjC);var oyjC = _n("view");_r(oyjC, 'class', 119, e, s, gg);var ozjC = _n("view");_r(ozjC, 'class', 26, e, s, gg);var o_jC = _n("view");_r(o_jC, 'class', 120, e, s, gg);var oAkC = _n("view");_r(oAkC, 'class', 121, e, s, gg);var oBkC = _n("image");_r(oBkC, 'src', 122, e, s, gg);_(oAkC,oBkC);var oCkC = _n("text");var oDkC = _o(123, e, s, gg);_(oCkC,oDkC);_(oAkC,oCkC);_(o_jC,oAkC);var oEkC = _n("view");_r(oEkC, 'class', 124, e, s, gg);var oFkC = _o(125, e, s, gg);_(oEkC,oFkC);_(o_jC,oEkC);_(ozjC,o_jC);var oGkC = _n("view");_r(oGkC, 'class', 126, e, s, gg);var oHkC = _o(127, e, s, gg);_(oGkC,oHkC);_(ozjC,oGkC);var oIkC = _v();
      if (_o(128, e, s, gg)) {
        oIkC.wxVkey = 1;var oJkC = _n("view");_r(oJkC, 'class', 129, e, s, gg);var oLkC = _v();var oMkC = function(oQkC,oPkC,oOkC,gg){var oNkC = _m( "image", ["class", 131,"src", 1], oQkC, oPkC, gg);_(oOkC, oNkC);return oOkC;};_2(130, oMkC, e, s, gg, oLkC, "item", "index", '{{item.id}}');_(oJkC,oLkC);_(oIkC, oJkC);
      } _(ozjC,oIkC);_(oyjC,ozjC);_(oqjC,oyjC);_(opjC, oqjC);
      } _(oYiC,opjC);var oSkC = _n("view");_r(oSkC, 'class', 133, e, s, gg);var oTkC = _n("view");var oUkC = _v();var oVkC = function(oZkC,oYkC,oXkC,gg){var oWkC = _m( "image", ["class", 131,"src", 1], oZkC, oYkC, gg);_(oXkC, oWkC);return oXkC;};_2(134, oVkC, e, s, gg, oUkC, "item", "index", '{{item.id}}');_(oTkC,oUkC);_(oSkC,oTkC);_(oYiC,oSkC);var obkC = _v();
      if (_o(135, e, s, gg)) {
        obkC.wxVkey = 1;var ockC = _n("view");_r(ockC, 'class', 136, e, s, gg);var oekC = _n("view");_r(oekC, 'class', 115, e, s, gg);var ofkC = _n("view");_r(ofkC, 'class', 137, e, s, gg);_(oekC,ofkC);var ogkC = _n("text");_r(ogkC, 'class', 138, e, s, gg);var ohkC = _o(139, e, s, gg);_(ogkC,ohkC);_(oekC,ogkC);_(ockC,oekC);var oikC = _n("view");_r(oikC, 'class', 119, e, s, gg);var ojkC = _v();var okkC = function(ookC,onkC,omkC,gg){var olkC = _n("view");_r(olkC, 'class', 26, ookC, onkC, gg);var oqkC = _n("navigator");_r(oqkC, 'url', 141, ookC, onkC, gg);var orkC = _m( "image", ["backgroundSize", 67,"class", 64,"src", 75], ookC, onkC, gg);_(oqkC,orkC);var oskC = _n("text");_r(oskC, 'class', 71, ookC, onkC, gg);var otkC = _o(143, ookC, onkC, gg);_(oskC,otkC);_(oqkC,oskC);var oukC = _n("text");_r(oukC, 'class', 77, ookC, onkC, gg);var ovkC = _o(144, ookC, onkC, gg);_(oukC,ovkC);_(oqkC,oukC);_(olkC,oqkC);_(omkC, olkC);return omkC;};_2(140, okkC, e, s, gg, ojkC, "item", "index", '{{item.id}}');_(oikC,ojkC);_(ockC,oikC);_(obkC, ockC);
      } _(oYiC,obkC);_(r,oYiC);var owkC = _m( "view", ["class", 145,"hidden", 1], e, s, gg);var oxkC = _n("view");_r(oxkC, 'class', 147, e, s, gg);var oykC = _m( "view", ["catchtap", 148,"class", 1], e, s, gg);var ozkC = _m( "image", ["class", 150,"src", 1], e, s, gg);_(oykC,ozkC);_(oxkC,oykC);var o_kC = _n("view");_r(o_kC, 'class', 152, e, s, gg);var oAlC = _m( "image", ["class", 131,"src", 22], e, s, gg);_(o_kC,oAlC);var oBlC = _n("view");_r(oBlC, 'class', 120, e, s, gg);var oClC = _n("view");_r(oClC, 'class', 70, e, s, gg);var oDlC = _n("view");_r(oDlC, 'class', 154, e, s, gg);var oElC = _o(155, e, s, gg);_(oDlC,oElC);_(oClC,oDlC);var oFlC = _v();
      if (_o(156, e, s, gg)) {
        oFlC.wxVkey = 1;var oGlC = _n("view");_r(oGlC, 'class', 157, e, s, gg);var oIlC = _o(158, e, s, gg);_(oGlC,oIlC);_(oFlC, oGlC);
      } _(oClC,oFlC);_(oBlC,oClC);_(o_kC,oBlC);_(oxkC,o_kC);var oJlC = _n("view");_r(oJlC, 'class', 159, e, s, gg);var oKlC = _v();var oLlC = function(oPlC,oOlC,oNlC,gg){var oMlC = _m( "view", ["data-id", 66,"bindtap", 95,"class", 96], oPlC, oOlC, gg);var oRlC = _n("view");_r(oRlC, 'class', 71, oPlC, oOlC, gg);var oSlC = _o(163, oPlC, oOlC, gg);_(oRlC,oSlC);_(oMlC,oRlC);_(oNlC, oMlC);return oNlC;};_2(160, oLlC, e, s, gg, oKlC, "item", "index", '{{item.id}}');_(oJlC,oKlC);var oTlC = _n("view");_r(oTlC, 'class', 164, e, s, gg);var oUlC = _n("view");_r(oUlC, 'class', 71, e, s, gg);var oVlC = _o(165, e, s, gg);_(oUlC,oVlC);_(oTlC,oUlC);var oWlC = _n("view");_r(oWlC, 'class', 166, e, s, gg);var oXlC = _m( "view", ["bindtap", 167,"class", 1], e, s, gg);var oYlC = _o(169, e, s, gg);_(oXlC,oYlC);_(oWlC,oXlC);var oZlC = _m( "input", ["disabled", 60,"class", 110,"type", 110,"value", 111], e, s, gg);_(oWlC,oZlC);var oalC = _m( "view", ["bindtap", 172,"class", 1], e, s, gg);var oblC = _o(174, e, s, gg);_(oalC,oblC);_(oWlC,oalC);_(oTlC,oWlC);_(oJlC,oTlC);_(oxkC,oJlC);var oclC = _n("view");_r(oclC, 'class', 175, e, s, gg);var odlC = _n("view");_r(odlC, 'class', 176, e, s, gg);var oelC = _o(177, e, s, gg);_(odlC,oelC);_(oclC,odlC);var oflC = _m( "view", ["bindtap", 178,"class", 1], e, s, gg);var oglC = _o(180, e, s, gg);_(oflC,oglC);_(oclC,oflC);_(oxkC,oclC);_(owkC,oxkC);_(r,owkC);var ohlC = _n("view");_r(ohlC, 'class', 181, e, s, gg);var oilC = _m( "view", ["bindtap", -1,"class", 182], e, s, gg);var ojlC = _n("view");_r(ojlC, 'class', 183, e, s, gg);var oklC = _m( "image", ["class", 150,"src", 34], e, s, gg);_(ojlC,oklC);_(oilC,ojlC);var ollC = _n("view");_r(ollC, 'class', 185, e, s, gg);var omlC = _o(186, e, s, gg);_(ollC,omlC);_(oilC,ollC);_(ohlC,oilC);var onlC = _m( "view", ["bindtap", 187,"class", 1], e, s, gg);var oolC = _n("view");_r(oolC, 'class', 183, e, s, gg);var oplC = _m( "image", ["class", 150,"src", 39], e, s, gg);_(oolC,oplC);_(onlC,oolC);var oqlC = _n("view");_r(oqlC, 'class', 185, e, s, gg);var orlC = _o(190, e, s, gg);_(oqlC,orlC);_(onlC,oqlC);_(ohlC,onlC);var oslC = _n("view");_r(oslC, 'class', 191, e, s, gg);var otlC = _n("text");_r(otlC, 'class', 192, e, s, gg);var oulC = _o(193, e, s, gg);_(otlC,oulC);_(oslC,otlC);var ovlC = _n("view");_r(ovlC, 'class', 183, e, s, gg);var owlC = _m( "image", ["class", 150,"bindtap", 44,"src", 45], e, s, gg);_(ovlC,owlC);_(oslC,ovlC);var oxlC = _n("view");_r(oxlC, 'class', 185, e, s, gg);var oylC = _o(196, e, s, gg);_(oxlC,oylC);_(oslC,oxlC);_(ohlC,oslC);var ozlC = _m( "view", ["bindtap", 197,"class", 1], e, s, gg);var o_lC = _o(199, e, s, gg);_(ozlC,o_lC);_(ohlC,ozlC);var oAmC = _m( "view", ["class", 70,"bindtap", 130], e, s, gg);var oBmC = _o(201, e, s, gg);_(oAmC,oBmC);_(ohlC,oAmC);_(r,ohlC);oXiC.pop();
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
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:.container{margin-bottom:%%?100rpx?%%}.goodsimgs{width:%%?750rpx?%%;height:%%?750rpx?%%}.list{height:100%}.goodsimgs wx-image{width:%%?750rpx?%%;height:%%?750rpx?%%}.service-policy{width:%%?750rpx?%%;height:%%?73rpx?%%;background:#f4f4f4;padding:0 %%?31.25rpx?%%;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between}.service-policy .item{background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/servicePolicyRed-518d32d74b.png) 0 center no-repeat;background-size:%%?10rpx?%%;padding-left:%%?15rpx?%%;display:flex;align-items:center;font-size:%%?25rpx?%%;color:#666}.goods-info{width:100%;height:%%?245rpx?%%;background:#fff}.goods-info .c{display:block;width:96%;height:100%;margin:0 2%}.goods-info .c wx-text{display:block;width:100%}.goods-info .name{margin-top:%%?30rpx?%%;line-height:%%?50rpx?%%;height:%%?100rpx?%%;font-size:%%?32rpx?%%;color:#333;overflow-y:hidden}.goods-info .desc{height:%%?0rpx?%%;font-size:%%?26rpx?%%;line-height:%%?60rpx?%%;color:#999}.goods-info .price{height:%%?45rpx?%%;font-size:%%?38rpx?%%;font-weight:700;line-height:%%?45rpx?%%;color:#cc2020;margin-bottom:%%?40rpx?%%}.goods-info .brand{margin-top:%%?23rpx?%%;min-height:%%?40rpx?%%;text-align:center}.goods-info .brand wx-text{display:inline-block;width:auto;padding:%%?2rpx?%% %%?30rpx?%% %%?2rpx?%% %%?10.5rpx?%%;line-height:%%?35.5rpx?%%;border:%%?1rpx?%% solid #f48f18;font-size:%%?25rpx?%%;color:#f48f18;border-radius:%%?4rpx?%%;background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/detailTagArrow-18bee52dab.png) 95% center no-repeat;background-size:%%?10.75rpx?%% %%?18.75rpx?%%}.section-nav{width:%%?750rpx?%%;height:%%?89rpx?%%;background:#fff;border-bottom:%%?1rpx?%% solid #f2f2f2}.section-nav .t{float:left;width:%%?600rpx?%%;height:%%?88rpx?%%;line-height:%%?88rpx?%%;font-size:%%?29rpx?%%;color:#333;margin-left:%%?31.25rpx?%%}.section-nav .i{float:right;line-height:%%?88rpx?%%;height:%%?30rpx?%%;width:%%?30rpx?%%;margin-right:%%?16rpx?%%;margin-top:%%?28rpx?%%}.section-act .t{float:left;display:flex;align-items:center;width:%%?600rpx?%%;height:%%?88rpx?%%;overflow:hidden;line-height:%%?88rpx?%%;font-size:%%?29rpx?%%;color:#999;margin-left:%%?31.25rpx?%%}.section-act .label{color:#999}.section-act .tag{display:flex;align-items:center;padding:0 %%?10rpx?%%;border-radius:%%?3rpx?%%;height:%%?37rpx?%%;width:auto;color:#f48f18;overflow:hidden;border:%%?1rpx?%% solid #f48f18;font-size:%%?25rpx?%%;margin:0 %%?10rpx?%%}.section-act .text{display:flex;align-items:center;height:%%?37rpx?%%;width:auto;overflow:hidden;color:#f48f18;font-size:%%?29rpx?%%}.comments{width:100%;height:auto;padding-left:%%?30rpx?%%;background:#fff;margin:%%?20rpx?%% 0}.comments .h{height:%%?102.5rpx?%%;line-height:%%?100.5rpx?%%;width:%%?718.75rpx?%%;padding-right:%%?16rpx?%%;border-bottom:%%?1rpx?%% solid #d9d9d9}.comments .h .t{display:block;float:left;width:50%;font-size:%%?38.5rpx?%%;color:#333}.comments .h .i{display:block;float:right;width:%%?164rpx?%%;height:%%?100.5rpx?%%;line-height:%%?100.5rpx?%%;background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/address-right-990628faa7.png) right center no-repeat;background-size:%%?52rpx?%%}.comments .b{height:auto;width:%%?720rpx?%%}.comments .item{height:auto;width:%%?720rpx?%%;overflow:hidden}.comments .info{height:%%?127rpx?%%;width:100%;padding:%%?33rpx?%% 0 %%?27rpx?%% 0}.comments .user{float:left;width:auto;height:%%?67rpx?%%;line-height:%%?67rpx?%%;font-size:0}.comments .user wx-image{float:left;width:%%?67rpx?%%;height:%%?67rpx?%%;margin-right:%%?17rpx?%%;border-radius:50%}.comments .user wx-text{display:inline-block;width:auto;height:%%?66rpx?%%;overflow:hidden;font-size:%%?29rpx?%%;line-height:%%?66rpx?%%}.comments .time{display:block;float:right;width:auto;height:%%?67rpx?%%;line-height:%%?67rpx?%%;color:#7f7f7f;font-size:%%?25rpx?%%;margin-right:%%?30rpx?%%}.comments .content{width:%%?720rpx?%%;padding-right:%%?30rpx?%%;line-height:%%?45.8rpx?%%;font-size:%%?29rpx?%%;margin-bottom:%%?24rpx?%%}.comments .imgs{width:%%?720rpx?%%;height:auto;margin-bottom:%%?25rpx?%%}.comments .imgs .img{height:%%?150rpx?%%;width:%%?150rpx?%%;margin-right:%%?28rpx?%%}.comments .spec{width:%%?720rpx?%%;padding-right:%%?30rpx?%%;line-height:%%?30rpx?%%;font-size:%%?24rpx?%%;color:#999;margin-bottom:%%?30rpx?%%}.goods-attr{width:%%?750rpx?%%;height:auto;overflow:hidden;padding:0 %%?31.25rpx?%% %%?25rpx?%% %%?31.25rpx?%%;background:#fff}.goods-attr .t{width:%%?687.5rpx?%%;height:%%?104rpx?%%;line-height:%%?104rpx?%%;font-size:%%?38.5rpx?%%}.goods-attr .item{width:%%?687.5rpx?%%;height:%%?68rpx?%%;padding:%%?11rpx?%% %%?20rpx?%%;margin-bottom:%%?11rpx?%%;background:#f7f7f7;font-size:%%?38.5rpx?%%}.goods-attr .left{float:left;font-size:%%?25rpx?%%;width:%%?134rpx?%%;height:%%?45rpx?%%;line-height:%%?45rpx?%%;overflow:hidden;color:#999}.goods-attr .right{float:left;font-size:%%?36.5rpx?%%;margin-left:%%?20rpx?%%;width:%%?480rpx?%%;height:%%?45rpx?%%;line-height:%%?45rpx?%%;overflow:hidden;color:#333}.detail{width:%%?750rpx?%%;height:auto;overflow:hidden}.detail wx-image{width:%%?750rpx?%%;display:block}.common-problem{width:%%?750rpx?%%;height:auto;overflow:hidden}.common-problem .h{position:relative;height:%%?145.5rpx?%%;width:%%?750rpx?%%;padding:%%?56.25rpx?%% 0;background:#fff;text-align:center}.common-problem .h .line{display:inline-block;position:absolute;top:%%?72rpx?%%;left:0;z-index:7;height:%%?1rpx?%%;margin-left:%%?225rpx?%%;width:%%?300rpx?%%;background:#ccc}.common-problem .h .title{display:inline-block;position:absolute;top:%%?56.125rpx?%%;left:0;z-index:3;height:%%?33rpx?%%;margin-left:%%?285rpx?%%;width:%%?180rpx?%%;background:#fff}.common-problem .b{width:%%?750rpx?%%;height:auto;overflow:hidden;padding:%%?0rpx?%% %%?30rpx?%%;background:#fff}.common-problem .item{height:auto;overflow:hidden;padding-bottom:%%?25rpx?%%}.common-problem .question-box .spot{float:left;display:block;height:%%?8rpx?%%;width:%%?8rpx?%%;background:#b4282d;border-radius:50%;margin-top:%%?11rpx?%%}.common-problem .question-box .question{float:left;line-height:%%?30rpx?%%;padding-left:%%?8rpx?%%;display:block;font-size:%%?26rpx?%%;padding-bottom:%%?15rpx?%%;color:#303030}.common-problem .answer{line-height:%%?36rpx?%%;padding-left:%%?16rpx?%%;font-size:%%?26rpx?%%;color:#787878}.related-goods{width:%%?750rpx?%%;height:auto;overflow:hidden}.related-goods .h{position:relative;height:%%?145.5rpx?%%;width:%%?750rpx?%%;padding:%%?56.25rpx?%% 0;background:#fff;text-align:center;border-bottom:%%?1rpx?%% solid #f4f4f4}.related-goods .h .line{display:inline-block;position:absolute;top:%%?72rpx?%%;left:0;z-index:2;height:%%?1rpx?%%;margin-left:%%?225rpx?%%;width:%%?300rpx?%%;background:#ccc}.related-goods .h .title{display:inline-block;position:absolute;top:%%?56.125rpx?%%;left:0;z-index:3;height:%%?33rpx?%%;margin-left:%%?285rpx?%%;width:%%?180rpx?%%;background:#fff}.related-goods .b{width:%%?750rpx?%%;height:auto;overflow:hidden}.related-goods .b .item{float:left;background:#fff;width:%%?375rpx?%%;height:auto;overflow:hidden;text-align:center;padding:%%?15rpx?%% %%?31.25rpx?%%;border-right:%%?1rpx?%% solid #f4f4f4;border-bottom:%%?1rpx?%% solid #f4f4f4}.related-goods .item .img{width:%%?311.45rpx?%%;height:%%?311.45rpx?%%}.related-goods .item .name{display:block;width:%%?311.45rpx?%%;height:%%?35rpx?%%;margin:%%?11.5rpx?%% 0 %%?15rpx?%% 0;text-align:center;overflow:hidden;font-size:%%?30rpx?%%;color:#333}.related-goods .item .price{display:block;width:%%?311.45rpx?%%;height:%%?30rpx?%%;text-align:center;font-size:%%?30rpx?%%;color:#b4282d}.bottom-btn{position:fixed;left:0;bottom:0;z-index:2;width:%%?750rpx?%%;height:%%?98rpx?%%;display:flex;background:#fff}.bottom-btn .l{float:left;height:%%?98rpx?%%;width:%%?136rpx?%%;border:%%?1rpx?%% solid #f4f4f4}.bottom-btn .l .l-text{width:%%?128rpx?%%;height:%%?30rpx?%%;text-align:center;font-size:%%?20rpx?%%;color:#333}.bottom-btn .l .l-imgaes{margin-left:34%;margin-top:10%}.bottom-btn .l .l-customserver{pointer-events:none;cursor:default;opacity:.6;width:%%?132rpx?%%}.bottom-btn .l.l-collect{border-right:none;border-left:none;text-align:center;width:%%?132rpx?%%}.bottom-btn .l.l-cart{width:%%?132rpx?%%}.bottom-btn .l.l-cart .cart-count{height:%%?28rpx?%%;width:%%?28rpx?%%;z-index:10;position:absolute;top:%%?6rpx?%%;left:47%;background:#b4282d;text-align:center;font-size:%%?18rpx?%%;color:#fff;line-height:%%?28rpx?%%;border-radius:50%}.bottom-btn .l .icon{display:block;height:%%?44rpx?%%;width:%%?44rpx?%%}.bottom-btn .c{background:#cc2020;float:left;height:%%?98rpx?%%;line-height:%%?96rpx?%%;flex:1;text-align:center;color:#fffefe}.bottom-btn .r{float:left;height:%%?98rpx?%%;line-height:%%?98rpx?%%;flex:1;text-align:center;color:#666;font-size:%%?30rpx?%%;border-top:%%?1rpx?%% solid #f4f4f4;border-bottom:%%?1rpx?%% solid #f4f4f4}.wxParse{margin:0 5px;font-family:Helvetica,sans-serif;font-size:%%?28rpx?%%;color:#666;line-height:1.8}wx-view{word-break:break-all;overflow:auto}.wxParse-inline{display:inline;margin:0;padding:0}.wxParse-div{margin:0;padding:0}.wxParse-h1{font-size:2em;margin:.67em 0}.wxParse-h2{font-size:1.5em;margin:.75em 0}.wxParse-h3{font-size:1.17em;margin:.83em 0}.wxParse-h4{margin:1.12em 0}.wxParse-h5{font-size:.83em;margin:1.5em 0}.wxParse-h6{font-size:.75em;margin:1.67em 0}.wxParse-h1{font-size:18px;font-weight:400;margin-bottom:.9em}.wxParse-h2{font-size:16px;font-weight:400;margin-bottom:.34em}.wxParse-h3{font-weight:400;font-size:15px;margin-bottom:.34em}.wxParse-h4{font-weight:400;font-size:14px;margin-bottom:.24em}.wxParse-h5{font-weight:400;font-size:13px;margin-bottom:.14em}.wxParse-h6{font-weight:400;font-size:12px;margin-bottom:.04em}.wxParse-b,.wxParse-h1,.wxParse-h2,.wxParse-h3,.wxParse-h4,.wxParse-h5,.wxParse-h6,.wxParse-strong{font-weight:bolder}.wxParse-address,.wxParse-cite,.wxParse-em,.wxParse-i,.wxParse-var{font-style:italic}.wxParse-code,.wxParse-kbd,.wxParse-pre,.wxParse-samp,.wxParse-tt{font-family:monospace}.wxParse-pre{white-space:pre}.wxParse-big{font-size:1.17em}.wxParse-small,.wxParse-sub,.wxParse-sup{font-size:.83em}.wxParse-sub{vertical-align:sub}.wxParse-sup{vertical-align:super}.wxParse-del,.wxParse-s,.wxParse-strike{text-decoration:line-through}.wxParse-strong,wx-wxParse-s{display:inline}.wxParse-a{color:#00bfff;word-break:break-all;overflow:auto}.wxParse-video{text-align:center;margin:10px 0}.wxParse-video-video{width:100%}.wxParse-img{background-color:#efefef;overflow:hidden;width:40px;height:40px}.wxParse-blockquote{margin:0;padding:10px 0 10px 5px;font-family:Courier,Calibri,"宋体";background:#f5f5f5;border-left:3px solid #dbdbdb}.wxParse-code,.wxParse-wxxxcode-style{display:inline;background:#f5f5f5}.wxParse-ul{margin:%%?20rpx?%% %%?10rpx?%%}.wxParse-li,.wxParse-li-inner{display:flex;align-items:baseline;margin:%%?10rpx?%% 0}.wxParse-li-text{align-items:center;line-height:20px}.wxParse-li-circle{display:inline-flex;width:5px;height:5px;background-color:#333;margin-right:5px}.wxParse-li-square{display:inline-flex;width:%%?10rpx?%%;height:%%?10rpx?%%;background-color:#333;margin-right:5px}.wxParse-li-ring{display:inline-flex;width:%%?10rpx?%%;height:%%?10rpx?%%;border:%%?2rpx?%% solid #333;border-radius:50%;background-color:#fff;margin-right:5px}.wxParse-u{text-decoration:underline}.wxParse-hide{display:none}.WxEmojiView{align-items:center}.wxEmoji{width:16px;height:16px}.wxParse-tr{display:flex;border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0}.wxParse-td,.wxParse-th{flex:1;padding:5px;font-size:%%?28rpx?%%;border-left:1px solid #e0e0e0;word-break:break-all}.wxParse-td:last{border-top:1px solid #e0e0e0}.wxParse-th{background:#f0f0f0;border-top:1px solid #e0e0e0}.attr-pop-box{width:100%;height:100%;position:fixed;background:rgba(0,0,0,.5);z-index:8;bottom:0}.attr-pop{width:100%;height:%%?640rpx?%%;padding-top:%%?30rpx?%%;background:#fff;position:fixed;z-index:9;bottom:%%?0rpx?%%}.attr-pop .close{position:absolute;width:%%?48rpx?%%;height:%%?48rpx?%%;right:%%?31.25rpx?%%;overflow:hidden;top:%%?31.25rpx?%%}.attr-pop .close .icon{width:%%?48rpx?%%;height:%%?48rpx?%%}.attr-pop .img-info{width:100%;height:%%?177rpx?%%;margin-left:%%?30rpx?%%;overflow:hidden;margin-bottom:%%?41.5rpx?%%}.attr-pop .img{float:left;height:%%?177rpx?%%;width:%%?177rpx?%%;background:#f4f4f4;margin-right:%%?31.25rpx?%%}.attr-pop .info{float:left;height:%%?45rpx?%%;display:flex;color:#cc2020;font-size:%%?28rpx?%%}.attr-pop .info .c .p{color:#cc2020}.attr-pop .p{font-size:%%?33rpx?%%;color:#333;height:%%?33rpx?%%;line-height:%%?33rpx?%%;margin-bottom:%%?10rpx?%%}.attr-pop .a{font-size:%%?29rpx?%%;color:#333;height:%%?40rpx?%%;line-height:%%?40rpx?%%;position:absolute}.spec-con{width:100%;height:auto;margin-left:%%?30rpx?%%;overflow:hidden}.spec-con .name{height:%%?32rpx?%%;margin-bottom:%%?22rpx?%%;font-size:%%?29rpx?%%;color:#333;overflow:visible}.spec-con .values{height:auto;margin-bottom:%%?31.25rpx?%%;font-size:0}.spec-con .value{display:inline-block;height:%%?62rpx?%%;padding:0 %%?35rpx?%%;line-height:%%?56rpx?%%;text-align:center;margin-right:%%?25rpx?%%;margin-bottom:%%?16.5rpx?%%;border:%%?1rpx?%% solid #333;font-size:%%?25rpx?%%;color:#333}.spec-con .value.disable{border:%%?1rpx?%% solid #ccc;color:#ccc}.spec-con .value.selected{border:%%?1rpx?%% solid #b4282d;color:#b4282d}.spec-con .selected{border:%%?1rpx?%% solid #b4282d;color:#b4282d}.selected .name{color:#b4282d}.number-item .selnum{width:%%?322rpx?%%;height:%%?71rpx?%%;border:%%?1rpx?%% solid #ccc;display:flex}.number-item .cut{width:%%?93.75rpx?%%;height:100%;text-align:center;line-height:%%?65rpx?%%}.number-item .number{flex:1;height:100%;text-align:center;line-height:%%?68.75rpx?%%;border-left:%%?1rpx?%% solid #ccc;border-right:%%?1rpx?%% solid #ccc;float:left}.number-item .add{width:%%?93.75rpx?%%;height:100%;text-align:center;line-height:%%?65rpx?%%}.gray-fill{background:#f2f2f2;height:%%?15rpx?%%}.bottom-second-btn{height:%%?100rpx?%%;position:fixed;bottom:0;width:100%}.bsb-left{display:inline-block;height:inherit;width:50%;color:#fff;font-size:%%?34rpx?%%;line-height:%%?100rpx?%%;text-align:center}.bsb-right{display:inline-block;height:inherit;line-height:%%?100rpx?%%;color:#fff;width:50%;font-size:%%?34rpx?%%;background:#cc2020;color:#fffefe;text-align:center}.t .t-server-text{display:inline-block;float:left;font-size:%%?30rpx?%%;color:#333}.t .t-tip-text{display:inline-block;color:#999;font-size:%%?24rpx?%%;float:left;margin-left:%%?10rpx?%%}.section-nav .more-details{color:#999;font-size:%%?28rpx?%%;text-align:center;width:100%;height:%%?88rpx?%%;line-height:%%?88rpx?%%}.share-icon{width:%%?40rpx?%%;height:%%?40rpx?%%;float:right;margin-right:%%?60rpx?%%}.goods-item .detail-img{width:%%?750rpx?%%}.goods-desc{margin:%%?20rpx?%%}.no-more-data{text-align:center;margin:%%?20rpx?%% 0}.nodata-jump{text-align:center;display:none;position:fixed;bottom:%%?180rpx?%%;right:%%?0rpx?%%;height:%%?70rpx?%%;width:%%?125rpx?%%;line-height:%%?70rpx?%%;border-radius:%%?20rpx?%%;background:#f4f4f4;opacity:.5}.jumpTobtn{display:block}@code-separator-line:__wxRoute = "pages/goods/goods";__wxRouteBegin = true;
define("pages/goods/goods.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var app = getApp();
var WxParse = require('../../lib/wxParse/wxParse.js');
var util = require('../../utils/util.js');
var api = require('../../config/api.js');
var user = require('../../services/user.js');

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
                  wx.showToast({
                        title: '已将链接复制进剪贴版'
                      });
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


})

});require("pages/goods/goods.js")@code-separator-line:["div","template","view","video","image","block","button","scroll-view","swiper","swiper-item","text","navigator","import","input"]