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
    Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]]]);Z([[6],[[7],[3, "item"]],[3, "styleStr"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]],[3, '-video']]);Z([[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "src"]]);Z([3, 'wxParseImgLoad']);Z([3, 'wxParseImgTap']);Z([[6],[[7],[3, "item"]],[3, "from"]]);Z([[6],[[7],[3, "item"]],[3, "imgIndex"]]);Z([3, 'aspectFit']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "src"]]]);Z([a, [3, 'width:'],[[6],[[7],[3, "item"]],[3, "width"]],[3, 'px;height:'],[[6],[[7],[3, "item"]],[3, "height"]],[3, 'px;'],[[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "style"]]]);Z([3, 'WxEmojiView wxParse-inline']);Z([[6],[[7],[3, "item"]],[3, "textArray"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "node"]], [1, "text"]]);Z([[2,'?:'],[[2, "=="], [[6],[[7],[3, "item"]],[3, "text"]], [1, "\n"]],[1, "wxParse-hide"],[1, ""]]);Z([a, [[6],[[7],[3, "item"]],[3, "text"]]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "node"]], [1, "element"]]);Z([3, 'wxEmoji']);Z([a, [[6],[[7],[3, "item"]],[3, "baseSrc"]],[[6],[[7],[3, "item"]],[3, "text"]]]);Z([[7],[3, "wxParseData"]]);Z([3, 'wxParse0']);Z([[8], "item", [[7],[3, "item"]]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "button"]]);Z([3, 'mini']);Z([3, 'default']);Z([[6],[[7],[3, "item"]],[3, "nodes"]]);Z([3, 'item']);Z([3, 'wxParse1']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "li"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-inner']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-text']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-circle']]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "video"]]);Z([3, 'wxParseVideo']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "img"]]);Z([3, 'wxParseImg']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "a"]]);Z([3, 'wxParseTagATap']);Z([a, [3, 'wxParse-inline '],[[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]]]);Z([[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "href"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "table"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tagType"]], [1, "block"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tagType"]]]);Z([3, 'WxEmojiView']);Z([3, 'wxParse2']);Z([3, 'wxParse3']);Z([3, 'wxParse4']);Z([3, 'wxParse5']);Z([3, 'wxParse6']);Z([3, 'wxParse7']);Z([3, 'wxParse8']);Z([3, 'wxParse9']);Z([3, 'wxParse10']);Z([3, 'wxParse11']);Z([3, 'wxParse12']);Z([3, 'container']);Z([3, 'scroll']);Z([3, 'list']);Z([[7],[3, "toView"]]);Z([3, 'true']);Z([3, 'goodsimgs']);Z([3, '1000']);Z([3, 'maodian']);Z([3, '3000']);Z([[7],[3, "gallery"]]);Z([[6],[[7],[3, "item"]],[3, "id"]]);Z([3, 'cover']);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "item"]],[3, "original"]]]);Z([3, 'goods-info']);Z([3, 'c']);Z([3, 'name']);Z([a, [[6],[[7],[3, "goods"]],[3, "title"]]]);Z([3, 'wx_share']);Z([3, 'share-icon']);Z([3, 'btn']);Z([3, '/static/images/first_page/nav_share@2x.png']);Z([3, 'desc']);Z([3, 'price']);Z([a, [3, '￥'],[[7],[3, "price_range"]]]);Z([[7],[3, "original_price"]]);Z([3, 'original_price']);Z([a, [3, '￥'],[[7],[3, "original_price"]]]);Z([[6],[[7],[3, "brand"]],[3, "name"]]);Z([3, 'brand']);Z([a, [3, '../brandDetail/brandDetail?id\x3d'],[[6],[[7],[3, "brand"]],[3, "brandId"]]]);Z([3, 'gray-fill']);Z([3, 'switchAttrPop']);Z([3, 'section-nav section-attr']);Z([3, 't']);Z([3, '请选择规格数量']);Z([3, 'i']);Z([3, '/static/images/first_page/details_right_icon.png']);Z([3, 'section-nav section-attr ']);Z([3, '运费： 免运费']);Z([3, 't-server-text']);Z([3, '服务： ']);Z([3, 't-tip-text']);Z([3, '七天无理由退换货，48小时快速退款']);Z([3, 'more-details']);Z([3, '更多详情']);Z([3, 'details-box']);Z([3, 'details-tip']);Z([3, 'details-border']);Z([3, 'details-content']);Z([3, 'goods-desc']);Z([3, 'wxParse']);Z([[8], "wxParseData", [[6],[[7],[3, "description"]],[3, "nodes"]]]);Z([[7],[3, "detailsGallery"]]);Z([3, 'goods-item']);Z([3, 'detail-img']);Z([3, 'widthFix']);Z([3, 'jumpTo']);Z([3, 'no-more-data']);Z([3, ' 已经到底了 ']);Z([a, [3, 'nodata-jump '],[[2,'?:'],[[2, "=="], [[7],[3, "jumpTobtn"]], [1, "show"]],[1, "jumpTobtn"],[1, ""]]]);Z([3, '回到顶部']);Z([[2, ">"], [[6],[[7],[3, "comment"]],[3, "count"]], [1, 0]]);Z([3, 'comments']);Z([3, 'h']);Z([a, [3, '../comment/comment?valueId\x3d'],[[6],[[7],[3, "goods"]],[3, "id"]],[3, '\x26typeId\x3d0']]);Z([a, [3, '评价('],[[2,'?:'],[[2, ">"], [[6],[[7],[3, "comment"]],[3, "count"]], [1, 999]],[1, "999+"],[[6],[[7],[3, "comment"]],[3, "count"]]],[3, ')']]);Z([3, '查看全部']);Z([3, 'b']);Z([3, 'info']);Z([3, 'user']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "avatar"]]]);Z([a, [[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "nickname"]]]);Z([3, 'time']);Z([a, [[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "add_time"]]]);Z([3, 'content']);Z([a, [3, '\n          '],[[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "content"]],[3, '\n        ']]);Z([[2, ">"], [[6],[[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "pic_list"]],[3, "length"]], [1, 0]]);Z([3, 'imgs']);Z([[6],[[6],[[7],[3, "comment"]],[3, "data"]],[3, "pic_list"]]);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "item"]],[3, "pic_url"]]]);Z([3, 'detail']);Z([[6],[[7],[3, "goods"]],[3, "pic_list"]]);Z([[2, ">"], [[6],[[7],[3, "relatedGoods"]],[3, "length"]], [1, 0]]);Z([3, 'related-goods']);Z([3, 'line']);Z([3, 'title']);Z([3, '大家都在看']);Z([[7],[3, "relatedGoods"]]);Z([a, [3, '/pages/goods/goods?id\x3d'],[[6],[[7],[3, "item"]],[3, "id"]]]);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "item"]],[3, "list_pic_url"]]]);Z([a, [[6],[[7],[3, "item"]],[3, "name"]]]);Z([a, [3, '￥'],[[6],[[7],[3, "item"]],[3, "retail_price"]]]);Z([3, 'attr-pop-box']);Z([[2, "!"], [[7],[3, "openAttr"]]]);Z([3, 'attr-pop']);Z([3, 'closeAttr']);Z([3, 'close']);Z([3, 'icon']);Z([3, '/static/images/icon_close.png']);Z([3, 'img-info']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[7],[3, "gallery"]],[1, 0]],[3, "original"]]]);Z([3, 'p']);Z([a, [3, '价格：￥'],[[7],[3, "current_price"]]]);Z([[2, ">"], [[6],[[7],[3, "specificationList"]],[3, "length"]], [1, 0]]);Z([3, 'a']);Z([a, [3, '已选择：'],[[7],[3, "checkedSpecText"]]]);Z([3, 'spec-con']);Z([[7],[3, "specificationList"]]);Z([3, 'select_cate_value']);Z([a, [3, 'spec-item value '],[[2,'?:'],[[6],[[7],[3, "item"]],[3, "checked"]],[1, "selected"],[1, ""]]]);Z([a, [[6],[[7],[3, "item"]],[3, "cate_value"]]]);Z([3, 'number-item']);Z([3, '数量']);Z([3, 'selnum']);Z([3, 'cutNumber']);Z([3, 'cut']);Z([3, '-']);Z([3, 'number']);Z([[7],[3, "number"]]);Z([3, 'addNumber']);Z([3, 'add']);Z([3, '+']);Z([3, 'bottom-second-btn']);Z([3, 'bsb-left']);Z([3, '\x26nbsp;']);Z([3, 'goCreateOrder']);Z([3, 'bsb-right']);Z([3, '确认']);Z([3, 'bottom-btn']);Z([3, 'l l-customserver']);Z([3, 'l-imgaes']);Z([3, '/static/images/first_page/details_customeservice.png']);Z([3, 'l-text']);Z([3, '客服']);Z([3, 'addCannelCollect']);Z([3, 'l l-collect']);Z([[7],[3, "collectBackImage"]]);Z([3, '收藏']);Z([3, 'l l-cart']);Z([3, 'cart-count']);Z([a, [[7],[3, "cartGoodsCount"]]]);Z([3, 'openCartPage']);Z([3, '/static/images/first_page/details_shoppingcar.png']);Z([3, '购物车']);Z([3, 'addToCart']);Z([a, [3, 'r '],[[2,'?:'],[[2, ">"], [[7],[3, "cart_not_permission"]], [1, 0]],[1, "hidden"],[1, ""]]]);Z([3, '加入购物车']);Z([3, 'buy']);Z([3, 'c ']);Z([3, '立即购买']);
  })(z);d_["./lib/wxParse/wxParse.wxml"] = {};d_["./lib/wxParse/wxParse.wxml"]["wxParseVideo"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParseVideo'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var opKC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oqKC = _m( "video", ["class", 2,"src", 1], e, s, gg);_(opKC,oqKC);_(r,opKC);
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
      var osKC = _m( "image", ["class", 0,"data-src", 3,"bindload", 1,"bindtap", 2,"data-from", 3,"data-idx", 4,"mode", 5,"src", 6,"style", 7], e, s, gg);_(r,osKC);
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
      var ouKC = _m( "view", ["style", 1,"class", 10], e, s, gg);var ovKC = _v();var owKC = function(o_KC,ozKC,oyKC,gg){var oBLC = _v();
      if (_o(13, o_KC, ozKC, gg)) {
        oBLC.wxVkey = 1;var oELC = _o(15, o_KC, ozKC, gg);_(oBLC,oELC);
      }else if (_o(16, o_KC, ozKC, gg)) {
        oBLC.wxVkey = 2;var oHLC = _m( "image", ["class", 17,"src", 1], e, s, gg);_(oBLC,oHLC);
      } _(oyKC,oBLC);return oyKC;};_2(12, owKC, e, s, gg, ovKC, "item", "index", '');_(ouKC,ovKC);_(r,ouKC);
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
      var oJLC = _v();var oKLC = function(oOLC,oNLC,oMLC,gg){var oQLC = _v();
       var oRLC = _o(20, oOLC, oNLC, gg);
       var oTLC = _gd('./lib/wxParse/wxParse.wxml', oRLC, e_, d_);
       if (oTLC) {
         var oSLC = _1(21,oOLC,oNLC,gg);
         oTLC(oSLC,oSLC,oQLC, gg);
       } else _w(oRLC, './lib/wxParse/wxParse.wxml', 0, 0);_(oMLC,oQLC);return oMLC;};_2(19, oKLC, e, s, gg, oJLC, "item", "index", '');_(r,oJLC);
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
      var oVLC = _v();
      if (_o(16, e, s, gg)) {
        oVLC.wxVkey = 1;var oYLC = _v();
      if (_o(22, e, s, gg)) {
        oYLC.wxVkey = 1;var obLC = _m( "button", ["size", 23,"type", 1], e, s, gg);var ocLC = _v();var odLC = function(ohLC,ogLC,ofLC,gg){var ojLC = _v();
       var okLC = _o(27, ohLC, ogLC, gg);
       var omLC = _gd('./lib/wxParse/wxParse.wxml', okLC, e_, d_);
       if (omLC) {
         var olLC = _1(21,ohLC,ogLC,gg);
         omLC(olLC,olLC,ojLC, gg);
       } else _w(okLC, './lib/wxParse/wxParse.wxml', 0, 0);_(ofLC,ojLC);return ofLC;};_2(25, odLC, e, s, gg, ocLC, "item", "index", '');_(obLC,ocLC);_(oYLC,obLC);
      }else if (_o(28, e, s, gg)) {
        oYLC.wxVkey = 2;var opLC = _n("view");_r(opLC, 'class', 29, e, s, gg);var oqLC = _n("view");_r(oqLC, 'class', 30, e, s, gg);var orLC = _n("view");_r(orLC, 'class', 31, e, s, gg);var osLC = _n("view");_r(osLC, 'class', 32, e, s, gg);_(orLC,osLC);_(oqLC,orLC);var otLC = _n("view");_r(otLC, 'class', 31, e, s, gg);var ouLC = _v();var ovLC = function(ozLC,oyLC,oxLC,gg){var oAMC = _v();
       var oBMC = _o(27, ozLC, oyLC, gg);
       var oDMC = _gd('./lib/wxParse/wxParse.wxml', oBMC, e_, d_);
       if (oDMC) {
         var oCMC = _1(21,ozLC,oyLC,gg);
         oDMC(oCMC,oCMC,oAMC, gg);
       } else _w(oBMC, './lib/wxParse/wxParse.wxml', 0, 0);_(oxLC,oAMC);return oxLC;};_2(25, ovLC, e, s, gg, ouLC, "item", "index", '');_(otLC,ouLC);_(oqLC,otLC);_(opLC,oqLC);_(oYLC,opLC);
      }else if (_o(33, e, s, gg)) {
        oYLC.wxVkey = 3;var oGMC = _v();
       var oHMC = _o(34, e, s, gg);
       var oJMC = _gd('./lib/wxParse/wxParse.wxml', oHMC, e_, d_);
       if (oJMC) {
         var oIMC = _1(21,e,s,gg);
         oJMC(oIMC,oIMC,oGMC, gg);
       } else _w(oHMC, './lib/wxParse/wxParse.wxml', 0, 0);_(oYLC,oGMC);
      }else if (_o(35, e, s, gg)) {
        oYLC.wxVkey = 4;var oMMC = _v();
       var oNMC = _o(36, e, s, gg);
       var oPMC = _gd('./lib/wxParse/wxParse.wxml', oNMC, e_, d_);
       if (oPMC) {
         var oOMC = _1(21,e,s,gg);
         oPMC(oOMC,oOMC,oMMC, gg);
       } else _w(oNMC, './lib/wxParse/wxParse.wxml', 0, 0);_(oYLC,oMMC);
      }else if (_o(37, e, s, gg)) {
        oYLC.wxVkey = 5;var oSMC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-c", 39], e, s, gg);var oTMC = _v();var oUMC = function(oYMC,oXMC,oWMC,gg){var oaMC = _v();
       var obMC = _o(27, oYMC, oXMC, gg);
       var odMC = _gd('./lib/wxParse/wxParse.wxml', obMC, e_, d_);
       if (odMC) {
         var ocMC = _1(21,oYMC,oXMC,gg);
         odMC(ocMC,ocMC,oaMC, gg);
       } else _w(obMC, './lib/wxParse/wxParse.wxml', 0, 0);_(oWMC,oaMC);return oWMC;};_2(25, oUMC, e, s, gg, oTMC, "item", "index", '');_(oSMC,oTMC);_(oYLC,oSMC);
      }else if (_o(41, e, s, gg)) {
        oYLC.wxVkey = 6;var ogMC = _m( "view", ["class", 0,"style", 1], e, s, gg);var ohMC = _v();var oiMC = function(omMC,olMC,okMC,gg){var ooMC = _v();
       var opMC = _o(27, omMC, olMC, gg);
       var orMC = _gd('./lib/wxParse/wxParse.wxml', opMC, e_, d_);
       if (orMC) {
         var oqMC = _1(21,omMC,olMC,gg);
         orMC(oqMC,oqMC,ooMC, gg);
       } else _w(opMC, './lib/wxParse/wxParse.wxml', 0, 0);_(okMC,ooMC);return okMC;};_2(25, oiMC, e, s, gg, ohMC, "item", "index", '');_(ogMC,ohMC);_(oYLC,ogMC);
      }else if (_o(42, e, s, gg)) {
        oYLC.wxVkey = 7;var ouMC = _m( "view", ["class", 0,"style", 1], e, s, gg);var ovMC = _v();var owMC = function(o_MC,ozMC,oyMC,gg){var oBNC = _v();
       var oCNC = _o(27, o_MC, ozMC, gg);
       var oENC = _gd('./lib/wxParse/wxParse.wxml', oCNC, e_, d_);
       if (oENC) {
         var oDNC = _1(21,o_MC,ozMC,gg);
         oENC(oDNC,oDNC,oBNC, gg);
       } else _w(oCNC, './lib/wxParse/wxParse.wxml', 0, 0);_(oyMC,oBNC);return oyMC;};_2(25, owMC, e, s, gg, ovMC, "item", "index", '');_(ouMC,ovMC);_(oYLC,ouMC);
      }else {
        oYLC.wxVkey = 8;var oFNC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oHNC = _v();var oINC = function(oMNC,oLNC,oKNC,gg){var oONC = _v();
       var oPNC = _o(27, oMNC, oLNC, gg);
       var oRNC = _gd('./lib/wxParse/wxParse.wxml', oPNC, e_, d_);
       if (oRNC) {
         var oQNC = _1(21,oMNC,oLNC,gg);
         oRNC(oQNC,oQNC,oONC, gg);
       } else _w(oPNC, './lib/wxParse/wxParse.wxml', 0, 0);_(oKNC,oONC);return oKNC;};_2(25, oINC, e, s, gg, oHNC, "item", "index", '');_(oFNC,oHNC);_(oYLC, oFNC);
      }_(oVLC,oYLC);
      }else if (_o(13, e, s, gg)) {
        oVLC.wxVkey = 2;var oUNC = _v();
       var oVNC = _o(44, e, s, gg);
       var oXNC = _gd('./lib/wxParse/wxParse.wxml', oVNC, e_, d_);
       if (oXNC) {
         var oWNC = _1(21,e,s,gg);
         oXNC(oWNC,oWNC,oUNC, gg);
       } else _w(oVNC, './lib/wxParse/wxParse.wxml', 0, 0);_(oVLC,oUNC);
      } _(r,oVLC);
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
      var oZNC = _v();
      if (_o(16, e, s, gg)) {
        oZNC.wxVkey = 1;var ocNC = _v();
      if (_o(22, e, s, gg)) {
        ocNC.wxVkey = 1;var ofNC = _m( "button", ["size", 23,"type", 1], e, s, gg);var ogNC = _v();var ohNC = function(olNC,okNC,ojNC,gg){var onNC = _v();
       var ooNC = _o(45, olNC, okNC, gg);
       var oqNC = _gd('./lib/wxParse/wxParse.wxml', ooNC, e_, d_);
       if (oqNC) {
         var opNC = _1(21,olNC,okNC,gg);
         oqNC(opNC,opNC,onNC, gg);
       } else _w(ooNC, './lib/wxParse/wxParse.wxml', 0, 0);_(ojNC,onNC);return ojNC;};_2(25, ohNC, e, s, gg, ogNC, "item", "index", '');_(ofNC,ogNC);_(ocNC,ofNC);
      }else if (_o(28, e, s, gg)) {
        ocNC.wxVkey = 2;var otNC = _n("view");_r(otNC, 'class', 29, e, s, gg);var ouNC = _n("view");_r(ouNC, 'class', 30, e, s, gg);var ovNC = _n("view");_r(ovNC, 'class', 31, e, s, gg);var owNC = _n("view");_r(owNC, 'class', 32, e, s, gg);_(ovNC,owNC);_(ouNC,ovNC);var oxNC = _n("view");_r(oxNC, 'class', 31, e, s, gg);var oyNC = _v();var ozNC = function(oCOC,oBOC,oAOC,gg){var oEOC = _v();
       var oFOC = _o(45, oCOC, oBOC, gg);
       var oHOC = _gd('./lib/wxParse/wxParse.wxml', oFOC, e_, d_);
       if (oHOC) {
         var oGOC = _1(21,oCOC,oBOC,gg);
         oHOC(oGOC,oGOC,oEOC, gg);
       } else _w(oFOC, './lib/wxParse/wxParse.wxml', 0, 0);_(oAOC,oEOC);return oAOC;};_2(25, ozNC, e, s, gg, oyNC, "item", "index", '');_(oxNC,oyNC);_(ouNC,oxNC);_(otNC,ouNC);_(ocNC,otNC);
      }else if (_o(33, e, s, gg)) {
        ocNC.wxVkey = 3;var oKOC = _v();
       var oLOC = _o(34, e, s, gg);
       var oNOC = _gd('./lib/wxParse/wxParse.wxml', oLOC, e_, d_);
       if (oNOC) {
         var oMOC = _1(21,e,s,gg);
         oNOC(oMOC,oMOC,oKOC, gg);
       } else _w(oLOC, './lib/wxParse/wxParse.wxml', 0, 0);_(ocNC,oKOC);
      }else if (_o(35, e, s, gg)) {
        ocNC.wxVkey = 4;var oQOC = _v();
       var oROC = _o(36, e, s, gg);
       var oTOC = _gd('./lib/wxParse/wxParse.wxml', oROC, e_, d_);
       if (oTOC) {
         var oSOC = _1(21,e,s,gg);
         oTOC(oSOC,oSOC,oQOC, gg);
       } else _w(oROC, './lib/wxParse/wxParse.wxml', 0, 0);_(ocNC,oQOC);
      }else if (_o(37, e, s, gg)) {
        ocNC.wxVkey = 5;var oWOC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oXOC = _v();var oYOC = function(ocOC,obOC,oaOC,gg){var oeOC = _v();
       var ofOC = _o(45, ocOC, obOC, gg);
       var ohOC = _gd('./lib/wxParse/wxParse.wxml', ofOC, e_, d_);
       if (ohOC) {
         var ogOC = _1(21,ocOC,obOC,gg);
         ohOC(ogOC,ogOC,oeOC, gg);
       } else _w(ofOC, './lib/wxParse/wxParse.wxml', 0, 0);_(oaOC,oeOC);return oaOC;};_2(25, oYOC, e, s, gg, oXOC, "item", "index", '');_(oWOC,oXOC);_(ocNC,oWOC);
      }else if (_o(42, e, s, gg)) {
        ocNC.wxVkey = 6;var okOC = _m( "view", ["class", 0,"style", 1], e, s, gg);var olOC = _v();var omOC = function(oqOC,opOC,ooOC,gg){var osOC = _v();
       var otOC = _o(45, oqOC, opOC, gg);
       var ovOC = _gd('./lib/wxParse/wxParse.wxml', otOC, e_, d_);
       if (ovOC) {
         var ouOC = _1(21,oqOC,opOC,gg);
         ovOC(ouOC,ouOC,osOC, gg);
       } else _w(otOC, './lib/wxParse/wxParse.wxml', 0, 0);_(ooOC,osOC);return ooOC;};_2(25, omOC, e, s, gg, olOC, "item", "index", '');_(okOC,olOC);_(ocNC,okOC);
      }else {
        ocNC.wxVkey = 7;var owOC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oyOC = _v();var ozOC = function(oCPC,oBPC,oAPC,gg){var oEPC = _v();
       var oFPC = _o(45, oCPC, oBPC, gg);
       var oHPC = _gd('./lib/wxParse/wxParse.wxml', oFPC, e_, d_);
       if (oHPC) {
         var oGPC = _1(21,oCPC,oBPC,gg);
         oHPC(oGPC,oGPC,oEPC, gg);
       } else _w(oFPC, './lib/wxParse/wxParse.wxml', 0, 0);_(oAPC,oEPC);return oAPC;};_2(25, ozOC, e, s, gg, oyOC, "item", "index", '');_(owOC,oyOC);_(ocNC, owOC);
      }_(oZNC,ocNC);
      }else if (_o(13, e, s, gg)) {
        oZNC.wxVkey = 2;var oKPC = _v();
       var oLPC = _o(44, e, s, gg);
       var oNPC = _gd('./lib/wxParse/wxParse.wxml', oLPC, e_, d_);
       if (oNPC) {
         var oMPC = _1(21,e,s,gg);
         oNPC(oMPC,oMPC,oKPC, gg);
       } else _w(oLPC, './lib/wxParse/wxParse.wxml', 0, 0);_(oZNC,oKPC);
      } _(r,oZNC);
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
      var oPPC = _v();
      if (_o(16, e, s, gg)) {
        oPPC.wxVkey = 1;var oSPC = _v();
      if (_o(22, e, s, gg)) {
        oSPC.wxVkey = 1;var oVPC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oWPC = _v();var oXPC = function(obPC,oaPC,oZPC,gg){var odPC = _v();
       var oePC = _o(46, obPC, oaPC, gg);
       var ogPC = _gd('./lib/wxParse/wxParse.wxml', oePC, e_, d_);
       if (ogPC) {
         var ofPC = _1(21,obPC,oaPC,gg);
         ogPC(ofPC,ofPC,odPC, gg);
       } else _w(oePC, './lib/wxParse/wxParse.wxml', 0, 0);_(oZPC,odPC);return oZPC;};_2(25, oXPC, e, s, gg, oWPC, "item", "index", '');_(oVPC,oWPC);_(oSPC,oVPC);
      }else if (_o(28, e, s, gg)) {
        oSPC.wxVkey = 2;var ojPC = _n("view");_r(ojPC, 'class', 29, e, s, gg);var okPC = _n("view");_r(okPC, 'class', 30, e, s, gg);var olPC = _n("view");_r(olPC, 'class', 31, e, s, gg);var omPC = _n("view");_r(omPC, 'class', 32, e, s, gg);_(olPC,omPC);_(okPC,olPC);var onPC = _n("view");_r(onPC, 'class', 31, e, s, gg);var ooPC = _v();var opPC = function(otPC,osPC,orPC,gg){var ovPC = _v();
       var owPC = _o(46, otPC, osPC, gg);
       var oyPC = _gd('./lib/wxParse/wxParse.wxml', owPC, e_, d_);
       if (oyPC) {
         var oxPC = _1(21,otPC,osPC,gg);
         oyPC(oxPC,oxPC,ovPC, gg);
       } else _w(owPC, './lib/wxParse/wxParse.wxml', 0, 0);_(orPC,ovPC);return orPC;};_2(25, opPC, e, s, gg, ooPC, "item", "index", '');_(onPC,ooPC);_(okPC,onPC);_(ojPC,okPC);_(oSPC,ojPC);
      }else if (_o(33, e, s, gg)) {
        oSPC.wxVkey = 3;var oAQC = _v();
       var oBQC = _o(34, e, s, gg);
       var oDQC = _gd('./lib/wxParse/wxParse.wxml', oBQC, e_, d_);
       if (oDQC) {
         var oCQC = _1(21,e,s,gg);
         oDQC(oCQC,oCQC,oAQC, gg);
       } else _w(oBQC, './lib/wxParse/wxParse.wxml', 0, 0);_(oSPC,oAQC);
      }else if (_o(35, e, s, gg)) {
        oSPC.wxVkey = 4;var oGQC = _v();
       var oHQC = _o(36, e, s, gg);
       var oJQC = _gd('./lib/wxParse/wxParse.wxml', oHQC, e_, d_);
       if (oJQC) {
         var oIQC = _1(21,e,s,gg);
         oJQC(oIQC,oIQC,oGQC, gg);
       } else _w(oHQC, './lib/wxParse/wxParse.wxml', 0, 0);_(oSPC,oGQC);
      }else if (_o(37, e, s, gg)) {
        oSPC.wxVkey = 5;var oMQC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oNQC = _v();var oOQC = function(oSQC,oRQC,oQQC,gg){var oUQC = _v();
       var oVQC = _o(46, oSQC, oRQC, gg);
       var oXQC = _gd('./lib/wxParse/wxParse.wxml', oVQC, e_, d_);
       if (oXQC) {
         var oWQC = _1(21,oSQC,oRQC,gg);
         oXQC(oWQC,oWQC,oUQC, gg);
       } else _w(oVQC, './lib/wxParse/wxParse.wxml', 0, 0);_(oQQC,oUQC);return oQQC;};_2(25, oOQC, e, s, gg, oNQC, "item", "index", '');_(oMQC,oNQC);_(oSPC,oMQC);
      }else if (_o(42, e, s, gg)) {
        oSPC.wxVkey = 6;var oaQC = _m( "view", ["class", 0,"style", 1], e, s, gg);var obQC = _v();var ocQC = function(ogQC,ofQC,oeQC,gg){var oiQC = _v();
       var ojQC = _o(46, ogQC, ofQC, gg);
       var olQC = _gd('./lib/wxParse/wxParse.wxml', ojQC, e_, d_);
       if (olQC) {
         var okQC = _1(21,ogQC,ofQC,gg);
         olQC(okQC,okQC,oiQC, gg);
       } else _w(ojQC, './lib/wxParse/wxParse.wxml', 0, 0);_(oeQC,oiQC);return oeQC;};_2(25, ocQC, e, s, gg, obQC, "item", "index", '');_(oaQC,obQC);_(oSPC,oaQC);
      }else {
        oSPC.wxVkey = 7;var omQC = _m( "view", ["style", 1,"class", 42], e, s, gg);var ooQC = _v();var opQC = function(otQC,osQC,orQC,gg){var ovQC = _v();
       var owQC = _o(46, otQC, osQC, gg);
       var oyQC = _gd('./lib/wxParse/wxParse.wxml', owQC, e_, d_);
       if (oyQC) {
         var oxQC = _1(21,otQC,osQC,gg);
         oyQC(oxQC,oxQC,ovQC, gg);
       } else _w(owQC, './lib/wxParse/wxParse.wxml', 0, 0);_(orQC,ovQC);return orQC;};_2(25, opQC, e, s, gg, ooQC, "item", "index", '');_(omQC,ooQC);_(oSPC, omQC);
      }_(oPPC,oSPC);
      }else if (_o(13, e, s, gg)) {
        oPPC.wxVkey = 2;var oARC = _v();
       var oBRC = _o(44, e, s, gg);
       var oDRC = _gd('./lib/wxParse/wxParse.wxml', oBRC, e_, d_);
       if (oDRC) {
         var oCRC = _1(21,e,s,gg);
         oDRC(oCRC,oCRC,oARC, gg);
       } else _w(oBRC, './lib/wxParse/wxParse.wxml', 0, 0);_(oPPC,oARC);
      } _(r,oPPC);
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
      var oFRC = _v();
      if (_o(16, e, s, gg)) {
        oFRC.wxVkey = 1;var oIRC = _v();
      if (_o(22, e, s, gg)) {
        oIRC.wxVkey = 1;var oLRC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oMRC = _v();var oNRC = function(oRRC,oQRC,oPRC,gg){var oTRC = _v();
       var oURC = _o(47, oRRC, oQRC, gg);
       var oWRC = _gd('./lib/wxParse/wxParse.wxml', oURC, e_, d_);
       if (oWRC) {
         var oVRC = _1(21,oRRC,oQRC,gg);
         oWRC(oVRC,oVRC,oTRC, gg);
       } else _w(oURC, './lib/wxParse/wxParse.wxml', 0, 0);_(oPRC,oTRC);return oPRC;};_2(25, oNRC, e, s, gg, oMRC, "item", "index", '');_(oLRC,oMRC);_(oIRC,oLRC);
      }else if (_o(28, e, s, gg)) {
        oIRC.wxVkey = 2;var oZRC = _n("view");_r(oZRC, 'class', 29, e, s, gg);var oaRC = _n("view");_r(oaRC, 'class', 30, e, s, gg);var obRC = _n("view");_r(obRC, 'class', 31, e, s, gg);var ocRC = _n("view");_r(ocRC, 'class', 32, e, s, gg);_(obRC,ocRC);_(oaRC,obRC);var odRC = _n("view");_r(odRC, 'class', 31, e, s, gg);var oeRC = _v();var ofRC = function(ojRC,oiRC,ohRC,gg){var olRC = _v();
       var omRC = _o(47, ojRC, oiRC, gg);
       var ooRC = _gd('./lib/wxParse/wxParse.wxml', omRC, e_, d_);
       if (ooRC) {
         var onRC = _1(21,ojRC,oiRC,gg);
         ooRC(onRC,onRC,olRC, gg);
       } else _w(omRC, './lib/wxParse/wxParse.wxml', 0, 0);_(ohRC,olRC);return ohRC;};_2(25, ofRC, e, s, gg, oeRC, "item", "index", '');_(odRC,oeRC);_(oaRC,odRC);_(oZRC,oaRC);_(oIRC,oZRC);
      }else if (_o(33, e, s, gg)) {
        oIRC.wxVkey = 3;var orRC = _v();
       var osRC = _o(34, e, s, gg);
       var ouRC = _gd('./lib/wxParse/wxParse.wxml', osRC, e_, d_);
       if (ouRC) {
         var otRC = _1(21,e,s,gg);
         ouRC(otRC,otRC,orRC, gg);
       } else _w(osRC, './lib/wxParse/wxParse.wxml', 0, 0);_(oIRC,orRC);
      }else if (_o(35, e, s, gg)) {
        oIRC.wxVkey = 4;var oxRC = _v();
       var oyRC = _o(36, e, s, gg);
       var o_RC = _gd('./lib/wxParse/wxParse.wxml', oyRC, e_, d_);
       if (o_RC) {
         var ozRC = _1(21,e,s,gg);
         o_RC(ozRC,ozRC,oxRC, gg);
       } else _w(oyRC, './lib/wxParse/wxParse.wxml', 0, 0);_(oIRC,oxRC);
      }else if (_o(37, e, s, gg)) {
        oIRC.wxVkey = 5;var oCSC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oDSC = _v();var oESC = function(oISC,oHSC,oGSC,gg){var oKSC = _v();
       var oLSC = _o(47, oISC, oHSC, gg);
       var oNSC = _gd('./lib/wxParse/wxParse.wxml', oLSC, e_, d_);
       if (oNSC) {
         var oMSC = _1(21,oISC,oHSC,gg);
         oNSC(oMSC,oMSC,oKSC, gg);
       } else _w(oLSC, './lib/wxParse/wxParse.wxml', 0, 0);_(oGSC,oKSC);return oGSC;};_2(25, oESC, e, s, gg, oDSC, "item", "index", '');_(oCSC,oDSC);_(oIRC,oCSC);
      }else if (_o(42, e, s, gg)) {
        oIRC.wxVkey = 6;var oQSC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oRSC = _v();var oSSC = function(oWSC,oVSC,oUSC,gg){var oYSC = _v();
       var oZSC = _o(47, oWSC, oVSC, gg);
       var obSC = _gd('./lib/wxParse/wxParse.wxml', oZSC, e_, d_);
       if (obSC) {
         var oaSC = _1(21,oWSC,oVSC,gg);
         obSC(oaSC,oaSC,oYSC, gg);
       } else _w(oZSC, './lib/wxParse/wxParse.wxml', 0, 0);_(oUSC,oYSC);return oUSC;};_2(25, oSSC, e, s, gg, oRSC, "item", "index", '');_(oQSC,oRSC);_(oIRC,oQSC);
      }else {
        oIRC.wxVkey = 7;var ocSC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oeSC = _v();var ofSC = function(ojSC,oiSC,ohSC,gg){var olSC = _v();
       var omSC = _o(47, ojSC, oiSC, gg);
       var ooSC = _gd('./lib/wxParse/wxParse.wxml', omSC, e_, d_);
       if (ooSC) {
         var onSC = _1(21,ojSC,oiSC,gg);
         ooSC(onSC,onSC,olSC, gg);
       } else _w(omSC, './lib/wxParse/wxParse.wxml', 0, 0);_(ohSC,olSC);return ohSC;};_2(25, ofSC, e, s, gg, oeSC, "item", "index", '');_(ocSC,oeSC);_(oIRC, ocSC);
      }_(oFRC,oIRC);
      }else if (_o(13, e, s, gg)) {
        oFRC.wxVkey = 2;var orSC = _v();
       var osSC = _o(44, e, s, gg);
       var ouSC = _gd('./lib/wxParse/wxParse.wxml', osSC, e_, d_);
       if (ouSC) {
         var otSC = _1(21,e,s,gg);
         ouSC(otSC,otSC,orSC, gg);
       } else _w(osSC, './lib/wxParse/wxParse.wxml', 0, 0);_(oFRC,orSC);
      } _(r,oFRC);
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
      var owSC = _v();
      if (_o(16, e, s, gg)) {
        owSC.wxVkey = 1;var ozSC = _v();
      if (_o(22, e, s, gg)) {
        ozSC.wxVkey = 1;var oBTC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oCTC = _v();var oDTC = function(oHTC,oGTC,oFTC,gg){var oJTC = _v();
       var oKTC = _o(48, oHTC, oGTC, gg);
       var oMTC = _gd('./lib/wxParse/wxParse.wxml', oKTC, e_, d_);
       if (oMTC) {
         var oLTC = _1(21,oHTC,oGTC,gg);
         oMTC(oLTC,oLTC,oJTC, gg);
       } else _w(oKTC, './lib/wxParse/wxParse.wxml', 0, 0);_(oFTC,oJTC);return oFTC;};_2(25, oDTC, e, s, gg, oCTC, "item", "index", '');_(oBTC,oCTC);_(ozSC,oBTC);
      }else if (_o(28, e, s, gg)) {
        ozSC.wxVkey = 2;var oPTC = _n("view");_r(oPTC, 'class', 29, e, s, gg);var oQTC = _n("view");_r(oQTC, 'class', 30, e, s, gg);var oRTC = _n("view");_r(oRTC, 'class', 31, e, s, gg);var oSTC = _n("view");_r(oSTC, 'class', 32, e, s, gg);_(oRTC,oSTC);_(oQTC,oRTC);var oTTC = _n("view");_r(oTTC, 'class', 31, e, s, gg);var oUTC = _v();var oVTC = function(oZTC,oYTC,oXTC,gg){var obTC = _v();
       var ocTC = _o(48, oZTC, oYTC, gg);
       var oeTC = _gd('./lib/wxParse/wxParse.wxml', ocTC, e_, d_);
       if (oeTC) {
         var odTC = _1(21,oZTC,oYTC,gg);
         oeTC(odTC,odTC,obTC, gg);
       } else _w(ocTC, './lib/wxParse/wxParse.wxml', 0, 0);_(oXTC,obTC);return oXTC;};_2(25, oVTC, e, s, gg, oUTC, "item", "index", '');_(oTTC,oUTC);_(oQTC,oTTC);_(oPTC,oQTC);_(ozSC,oPTC);
      }else if (_o(33, e, s, gg)) {
        ozSC.wxVkey = 3;var ohTC = _v();
       var oiTC = _o(34, e, s, gg);
       var okTC = _gd('./lib/wxParse/wxParse.wxml', oiTC, e_, d_);
       if (okTC) {
         var ojTC = _1(21,e,s,gg);
         okTC(ojTC,ojTC,ohTC, gg);
       } else _w(oiTC, './lib/wxParse/wxParse.wxml', 0, 0);_(ozSC,ohTC);
      }else if (_o(35, e, s, gg)) {
        ozSC.wxVkey = 4;var onTC = _v();
       var ooTC = _o(36, e, s, gg);
       var oqTC = _gd('./lib/wxParse/wxParse.wxml', ooTC, e_, d_);
       if (oqTC) {
         var opTC = _1(21,e,s,gg);
         oqTC(opTC,opTC,onTC, gg);
       } else _w(ooTC, './lib/wxParse/wxParse.wxml', 0, 0);_(ozSC,onTC);
      }else if (_o(37, e, s, gg)) {
        ozSC.wxVkey = 5;var otTC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ouTC = _v();var ovTC = function(ozTC,oyTC,oxTC,gg){var oAUC = _v();
       var oBUC = _o(48, ozTC, oyTC, gg);
       var oDUC = _gd('./lib/wxParse/wxParse.wxml', oBUC, e_, d_);
       if (oDUC) {
         var oCUC = _1(21,ozTC,oyTC,gg);
         oDUC(oCUC,oCUC,oAUC, gg);
       } else _w(oBUC, './lib/wxParse/wxParse.wxml', 0, 0);_(oxTC,oAUC);return oxTC;};_2(25, ovTC, e, s, gg, ouTC, "item", "index", '');_(otTC,ouTC);_(ozSC,otTC);
      }else if (_o(42, e, s, gg)) {
        ozSC.wxVkey = 6;var oGUC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oHUC = _v();var oIUC = function(oMUC,oLUC,oKUC,gg){var oOUC = _v();
       var oPUC = _o(48, oMUC, oLUC, gg);
       var oRUC = _gd('./lib/wxParse/wxParse.wxml', oPUC, e_, d_);
       if (oRUC) {
         var oQUC = _1(21,oMUC,oLUC,gg);
         oRUC(oQUC,oQUC,oOUC, gg);
       } else _w(oPUC, './lib/wxParse/wxParse.wxml', 0, 0);_(oKUC,oOUC);return oKUC;};_2(25, oIUC, e, s, gg, oHUC, "item", "index", '');_(oGUC,oHUC);_(ozSC,oGUC);
      }else {
        ozSC.wxVkey = 7;var oSUC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oUUC = _v();var oVUC = function(oZUC,oYUC,oXUC,gg){var obUC = _v();
       var ocUC = _o(48, oZUC, oYUC, gg);
       var oeUC = _gd('./lib/wxParse/wxParse.wxml', ocUC, e_, d_);
       if (oeUC) {
         var odUC = _1(21,oZUC,oYUC,gg);
         oeUC(odUC,odUC,obUC, gg);
       } else _w(ocUC, './lib/wxParse/wxParse.wxml', 0, 0);_(oXUC,obUC);return oXUC;};_2(25, oVUC, e, s, gg, oUUC, "item", "index", '');_(oSUC,oUUC);_(ozSC, oSUC);
      }_(owSC,ozSC);
      }else if (_o(13, e, s, gg)) {
        owSC.wxVkey = 2;var ohUC = _v();
       var oiUC = _o(44, e, s, gg);
       var okUC = _gd('./lib/wxParse/wxParse.wxml', oiUC, e_, d_);
       if (okUC) {
         var ojUC = _1(21,e,s,gg);
         okUC(ojUC,ojUC,ohUC, gg);
       } else _w(oiUC, './lib/wxParse/wxParse.wxml', 0, 0);_(owSC,ohUC);
      } _(r,owSC);
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
      var omUC = _v();
      if (_o(16, e, s, gg)) {
        omUC.wxVkey = 1;var opUC = _v();
      if (_o(22, e, s, gg)) {
        opUC.wxVkey = 1;var osUC = _m( "button", ["size", 23,"type", 1], e, s, gg);var otUC = _v();var ouUC = function(oyUC,oxUC,owUC,gg){var o_UC = _v();
       var oAVC = _o(49, oyUC, oxUC, gg);
       var oCVC = _gd('./lib/wxParse/wxParse.wxml', oAVC, e_, d_);
       if (oCVC) {
         var oBVC = _1(21,oyUC,oxUC,gg);
         oCVC(oBVC,oBVC,o_UC, gg);
       } else _w(oAVC, './lib/wxParse/wxParse.wxml', 0, 0);_(owUC,o_UC);return owUC;};_2(25, ouUC, e, s, gg, otUC, "item", "index", '');_(osUC,otUC);_(opUC,osUC);
      }else if (_o(28, e, s, gg)) {
        opUC.wxVkey = 2;var oFVC = _n("view");_r(oFVC, 'class', 29, e, s, gg);var oGVC = _n("view");_r(oGVC, 'class', 30, e, s, gg);var oHVC = _n("view");_r(oHVC, 'class', 31, e, s, gg);var oIVC = _n("view");_r(oIVC, 'class', 32, e, s, gg);_(oHVC,oIVC);_(oGVC,oHVC);var oJVC = _n("view");_r(oJVC, 'class', 31, e, s, gg);var oKVC = _v();var oLVC = function(oPVC,oOVC,oNVC,gg){var oRVC = _v();
       var oSVC = _o(49, oPVC, oOVC, gg);
       var oUVC = _gd('./lib/wxParse/wxParse.wxml', oSVC, e_, d_);
       if (oUVC) {
         var oTVC = _1(21,oPVC,oOVC,gg);
         oUVC(oTVC,oTVC,oRVC, gg);
       } else _w(oSVC, './lib/wxParse/wxParse.wxml', 0, 0);_(oNVC,oRVC);return oNVC;};_2(25, oLVC, e, s, gg, oKVC, "item", "index", '');_(oJVC,oKVC);_(oGVC,oJVC);_(oFVC,oGVC);_(opUC,oFVC);
      }else if (_o(33, e, s, gg)) {
        opUC.wxVkey = 3;var oXVC = _v();
       var oYVC = _o(34, e, s, gg);
       var oaVC = _gd('./lib/wxParse/wxParse.wxml', oYVC, e_, d_);
       if (oaVC) {
         var oZVC = _1(21,e,s,gg);
         oaVC(oZVC,oZVC,oXVC, gg);
       } else _w(oYVC, './lib/wxParse/wxParse.wxml', 0, 0);_(opUC,oXVC);
      }else if (_o(35, e, s, gg)) {
        opUC.wxVkey = 4;var odVC = _v();
       var oeVC = _o(36, e, s, gg);
       var ogVC = _gd('./lib/wxParse/wxParse.wxml', oeVC, e_, d_);
       if (ogVC) {
         var ofVC = _1(21,e,s,gg);
         ogVC(ofVC,ofVC,odVC, gg);
       } else _w(oeVC, './lib/wxParse/wxParse.wxml', 0, 0);_(opUC,odVC);
      }else if (_o(37, e, s, gg)) {
        opUC.wxVkey = 5;var ojVC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var okVC = _v();var olVC = function(opVC,ooVC,onVC,gg){var orVC = _v();
       var osVC = _o(49, opVC, ooVC, gg);
       var ouVC = _gd('./lib/wxParse/wxParse.wxml', osVC, e_, d_);
       if (ouVC) {
         var otVC = _1(21,opVC,ooVC,gg);
         ouVC(otVC,otVC,orVC, gg);
       } else _w(osVC, './lib/wxParse/wxParse.wxml', 0, 0);_(onVC,orVC);return onVC;};_2(25, olVC, e, s, gg, okVC, "item", "index", '');_(ojVC,okVC);_(opUC,ojVC);
      }else if (_o(42, e, s, gg)) {
        opUC.wxVkey = 6;var oxVC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oyVC = _v();var ozVC = function(oCWC,oBWC,oAWC,gg){var oEWC = _v();
       var oFWC = _o(49, oCWC, oBWC, gg);
       var oHWC = _gd('./lib/wxParse/wxParse.wxml', oFWC, e_, d_);
       if (oHWC) {
         var oGWC = _1(21,oCWC,oBWC,gg);
         oHWC(oGWC,oGWC,oEWC, gg);
       } else _w(oFWC, './lib/wxParse/wxParse.wxml', 0, 0);_(oAWC,oEWC);return oAWC;};_2(25, ozVC, e, s, gg, oyVC, "item", "index", '');_(oxVC,oyVC);_(opUC,oxVC);
      }else {
        opUC.wxVkey = 7;var oIWC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oKWC = _v();var oLWC = function(oPWC,oOWC,oNWC,gg){var oRWC = _v();
       var oSWC = _o(49, oPWC, oOWC, gg);
       var oUWC = _gd('./lib/wxParse/wxParse.wxml', oSWC, e_, d_);
       if (oUWC) {
         var oTWC = _1(21,oPWC,oOWC,gg);
         oUWC(oTWC,oTWC,oRWC, gg);
       } else _w(oSWC, './lib/wxParse/wxParse.wxml', 0, 0);_(oNWC,oRWC);return oNWC;};_2(25, oLWC, e, s, gg, oKWC, "item", "index", '');_(oIWC,oKWC);_(opUC, oIWC);
      }_(omUC,opUC);
      }else if (_o(13, e, s, gg)) {
        omUC.wxVkey = 2;var oXWC = _v();
       var oYWC = _o(44, e, s, gg);
       var oaWC = _gd('./lib/wxParse/wxParse.wxml', oYWC, e_, d_);
       if (oaWC) {
         var oZWC = _1(21,e,s,gg);
         oaWC(oZWC,oZWC,oXWC, gg);
       } else _w(oYWC, './lib/wxParse/wxParse.wxml', 0, 0);_(omUC,oXWC);
      } _(r,omUC);
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
      var ocWC = _v();
      if (_o(16, e, s, gg)) {
        ocWC.wxVkey = 1;var ofWC = _v();
      if (_o(22, e, s, gg)) {
        ofWC.wxVkey = 1;var oiWC = _m( "button", ["size", 23,"type", 1], e, s, gg);var ojWC = _v();var okWC = function(ooWC,onWC,omWC,gg){var oqWC = _v();
       var orWC = _o(50, ooWC, onWC, gg);
       var otWC = _gd('./lib/wxParse/wxParse.wxml', orWC, e_, d_);
       if (otWC) {
         var osWC = _1(21,ooWC,onWC,gg);
         otWC(osWC,osWC,oqWC, gg);
       } else _w(orWC, './lib/wxParse/wxParse.wxml', 0, 0);_(omWC,oqWC);return omWC;};_2(25, okWC, e, s, gg, ojWC, "item", "index", '');_(oiWC,ojWC);_(ofWC,oiWC);
      }else if (_o(28, e, s, gg)) {
        ofWC.wxVkey = 2;var owWC = _n("view");_r(owWC, 'class', 29, e, s, gg);var oxWC = _n("view");_r(oxWC, 'class', 30, e, s, gg);var oyWC = _n("view");_r(oyWC, 'class', 31, e, s, gg);var ozWC = _n("view");_r(ozWC, 'class', 32, e, s, gg);_(oyWC,ozWC);_(oxWC,oyWC);var o_WC = _n("view");_r(o_WC, 'class', 31, e, s, gg);var oAXC = _v();var oBXC = function(oFXC,oEXC,oDXC,gg){var oHXC = _v();
       var oIXC = _o(50, oFXC, oEXC, gg);
       var oKXC = _gd('./lib/wxParse/wxParse.wxml', oIXC, e_, d_);
       if (oKXC) {
         var oJXC = _1(21,oFXC,oEXC,gg);
         oKXC(oJXC,oJXC,oHXC, gg);
       } else _w(oIXC, './lib/wxParse/wxParse.wxml', 0, 0);_(oDXC,oHXC);return oDXC;};_2(25, oBXC, e, s, gg, oAXC, "item", "index", '');_(o_WC,oAXC);_(oxWC,o_WC);_(owWC,oxWC);_(ofWC,owWC);
      }else if (_o(33, e, s, gg)) {
        ofWC.wxVkey = 3;var oNXC = _v();
       var oOXC = _o(34, e, s, gg);
       var oQXC = _gd('./lib/wxParse/wxParse.wxml', oOXC, e_, d_);
       if (oQXC) {
         var oPXC = _1(21,e,s,gg);
         oQXC(oPXC,oPXC,oNXC, gg);
       } else _w(oOXC, './lib/wxParse/wxParse.wxml', 0, 0);_(ofWC,oNXC);
      }else if (_o(35, e, s, gg)) {
        ofWC.wxVkey = 4;var oTXC = _v();
       var oUXC = _o(36, e, s, gg);
       var oWXC = _gd('./lib/wxParse/wxParse.wxml', oUXC, e_, d_);
       if (oWXC) {
         var oVXC = _1(21,e,s,gg);
         oWXC(oVXC,oVXC,oTXC, gg);
       } else _w(oUXC, './lib/wxParse/wxParse.wxml', 0, 0);_(ofWC,oTXC);
      }else if (_o(37, e, s, gg)) {
        ofWC.wxVkey = 5;var oZXC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oaXC = _v();var obXC = function(ofXC,oeXC,odXC,gg){var ohXC = _v();
       var oiXC = _o(50, ofXC, oeXC, gg);
       var okXC = _gd('./lib/wxParse/wxParse.wxml', oiXC, e_, d_);
       if (okXC) {
         var ojXC = _1(21,ofXC,oeXC,gg);
         okXC(ojXC,ojXC,ohXC, gg);
       } else _w(oiXC, './lib/wxParse/wxParse.wxml', 0, 0);_(odXC,ohXC);return odXC;};_2(25, obXC, e, s, gg, oaXC, "item", "index", '');_(oZXC,oaXC);_(ofWC,oZXC);
      }else if (_o(42, e, s, gg)) {
        ofWC.wxVkey = 6;var onXC = _m( "view", ["class", 0,"style", 1], e, s, gg);var ooXC = _v();var opXC = function(otXC,osXC,orXC,gg){var ovXC = _v();
       var owXC = _o(50, otXC, osXC, gg);
       var oyXC = _gd('./lib/wxParse/wxParse.wxml', owXC, e_, d_);
       if (oyXC) {
         var oxXC = _1(21,otXC,osXC,gg);
         oyXC(oxXC,oxXC,ovXC, gg);
       } else _w(owXC, './lib/wxParse/wxParse.wxml', 0, 0);_(orXC,ovXC);return orXC;};_2(25, opXC, e, s, gg, ooXC, "item", "index", '');_(onXC,ooXC);_(ofWC,onXC);
      }else {
        ofWC.wxVkey = 7;var ozXC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oAYC = _v();var oBYC = function(oFYC,oEYC,oDYC,gg){var oHYC = _v();
       var oIYC = _o(50, oFYC, oEYC, gg);
       var oKYC = _gd('./lib/wxParse/wxParse.wxml', oIYC, e_, d_);
       if (oKYC) {
         var oJYC = _1(21,oFYC,oEYC,gg);
         oKYC(oJYC,oJYC,oHYC, gg);
       } else _w(oIYC, './lib/wxParse/wxParse.wxml', 0, 0);_(oDYC,oHYC);return oDYC;};_2(25, oBYC, e, s, gg, oAYC, "item", "index", '');_(ozXC,oAYC);_(ofWC, ozXC);
      }_(ocWC,ofWC);
      }else if (_o(13, e, s, gg)) {
        ocWC.wxVkey = 2;var oNYC = _v();
       var oOYC = _o(44, e, s, gg);
       var oQYC = _gd('./lib/wxParse/wxParse.wxml', oOYC, e_, d_);
       if (oQYC) {
         var oPYC = _1(21,e,s,gg);
         oQYC(oPYC,oPYC,oNYC, gg);
       } else _w(oOYC, './lib/wxParse/wxParse.wxml', 0, 0);_(ocWC,oNYC);
      } _(r,ocWC);
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
      var oSYC = _v();
      if (_o(16, e, s, gg)) {
        oSYC.wxVkey = 1;var oVYC = _v();
      if (_o(22, e, s, gg)) {
        oVYC.wxVkey = 1;var oYYC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oZYC = _v();var oaYC = function(oeYC,odYC,ocYC,gg){var ogYC = _v();
       var ohYC = _o(51, oeYC, odYC, gg);
       var ojYC = _gd('./lib/wxParse/wxParse.wxml', ohYC, e_, d_);
       if (ojYC) {
         var oiYC = _1(21,oeYC,odYC,gg);
         ojYC(oiYC,oiYC,ogYC, gg);
       } else _w(ohYC, './lib/wxParse/wxParse.wxml', 0, 0);_(ocYC,ogYC);return ocYC;};_2(25, oaYC, e, s, gg, oZYC, "item", "index", '');_(oYYC,oZYC);_(oVYC,oYYC);
      }else if (_o(28, e, s, gg)) {
        oVYC.wxVkey = 2;var omYC = _n("view");_r(omYC, 'class', 29, e, s, gg);var onYC = _n("view");_r(onYC, 'class', 30, e, s, gg);var ooYC = _n("view");_r(ooYC, 'class', 31, e, s, gg);var opYC = _n("view");_r(opYC, 'class', 32, e, s, gg);_(ooYC,opYC);_(onYC,ooYC);var oqYC = _n("view");_r(oqYC, 'class', 31, e, s, gg);var orYC = _v();var osYC = function(owYC,ovYC,ouYC,gg){var oyYC = _v();
       var ozYC = _o(51, owYC, ovYC, gg);
       var oAZC = _gd('./lib/wxParse/wxParse.wxml', ozYC, e_, d_);
       if (oAZC) {
         var o_YC = _1(21,owYC,ovYC,gg);
         oAZC(o_YC,o_YC,oyYC, gg);
       } else _w(ozYC, './lib/wxParse/wxParse.wxml', 0, 0);_(ouYC,oyYC);return ouYC;};_2(25, osYC, e, s, gg, orYC, "item", "index", '');_(oqYC,orYC);_(onYC,oqYC);_(omYC,onYC);_(oVYC,omYC);
      }else if (_o(33, e, s, gg)) {
        oVYC.wxVkey = 3;var oDZC = _v();
       var oEZC = _o(34, e, s, gg);
       var oGZC = _gd('./lib/wxParse/wxParse.wxml', oEZC, e_, d_);
       if (oGZC) {
         var oFZC = _1(21,e,s,gg);
         oGZC(oFZC,oFZC,oDZC, gg);
       } else _w(oEZC, './lib/wxParse/wxParse.wxml', 0, 0);_(oVYC,oDZC);
      }else if (_o(35, e, s, gg)) {
        oVYC.wxVkey = 4;var oJZC = _v();
       var oKZC = _o(36, e, s, gg);
       var oMZC = _gd('./lib/wxParse/wxParse.wxml', oKZC, e_, d_);
       if (oMZC) {
         var oLZC = _1(21,e,s,gg);
         oMZC(oLZC,oLZC,oJZC, gg);
       } else _w(oKZC, './lib/wxParse/wxParse.wxml', 0, 0);_(oVYC,oJZC);
      }else if (_o(37, e, s, gg)) {
        oVYC.wxVkey = 5;var oPZC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oQZC = _v();var oRZC = function(oVZC,oUZC,oTZC,gg){var oXZC = _v();
       var oYZC = _o(51, oVZC, oUZC, gg);
       var oaZC = _gd('./lib/wxParse/wxParse.wxml', oYZC, e_, d_);
       if (oaZC) {
         var oZZC = _1(21,oVZC,oUZC,gg);
         oaZC(oZZC,oZZC,oXZC, gg);
       } else _w(oYZC, './lib/wxParse/wxParse.wxml', 0, 0);_(oTZC,oXZC);return oTZC;};_2(25, oRZC, e, s, gg, oQZC, "item", "index", '');_(oPZC,oQZC);_(oVYC,oPZC);
      }else if (_o(42, e, s, gg)) {
        oVYC.wxVkey = 6;var odZC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oeZC = _v();var ofZC = function(ojZC,oiZC,ohZC,gg){var olZC = _v();
       var omZC = _o(51, ojZC, oiZC, gg);
       var ooZC = _gd('./lib/wxParse/wxParse.wxml', omZC, e_, d_);
       if (ooZC) {
         var onZC = _1(21,ojZC,oiZC,gg);
         ooZC(onZC,onZC,olZC, gg);
       } else _w(omZC, './lib/wxParse/wxParse.wxml', 0, 0);_(ohZC,olZC);return ohZC;};_2(25, ofZC, e, s, gg, oeZC, "item", "index", '');_(odZC,oeZC);_(oVYC,odZC);
      }else {
        oVYC.wxVkey = 7;var opZC = _m( "view", ["style", 1,"class", 42], e, s, gg);var orZC = _v();var osZC = function(owZC,ovZC,ouZC,gg){var oyZC = _v();
       var ozZC = _o(51, owZC, ovZC, gg);
       var oAaC = _gd('./lib/wxParse/wxParse.wxml', ozZC, e_, d_);
       if (oAaC) {
         var o_ZC = _1(21,owZC,ovZC,gg);
         oAaC(o_ZC,o_ZC,oyZC, gg);
       } else _w(ozZC, './lib/wxParse/wxParse.wxml', 0, 0);_(ouZC,oyZC);return ouZC;};_2(25, osZC, e, s, gg, orZC, "item", "index", '');_(opZC,orZC);_(oVYC, opZC);
      }_(oSYC,oVYC);
      }else if (_o(13, e, s, gg)) {
        oSYC.wxVkey = 2;var oDaC = _v();
       var oEaC = _o(44, e, s, gg);
       var oGaC = _gd('./lib/wxParse/wxParse.wxml', oEaC, e_, d_);
       if (oGaC) {
         var oFaC = _1(21,e,s,gg);
         oGaC(oFaC,oFaC,oDaC, gg);
       } else _w(oEaC, './lib/wxParse/wxParse.wxml', 0, 0);_(oSYC,oDaC);
      } _(r,oSYC);
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
      var oIaC = _v();
      if (_o(16, e, s, gg)) {
        oIaC.wxVkey = 1;var oLaC = _v();
      if (_o(22, e, s, gg)) {
        oLaC.wxVkey = 1;var oOaC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oPaC = _v();var oQaC = function(oUaC,oTaC,oSaC,gg){var oWaC = _v();
       var oXaC = _o(52, oUaC, oTaC, gg);
       var oZaC = _gd('./lib/wxParse/wxParse.wxml', oXaC, e_, d_);
       if (oZaC) {
         var oYaC = _1(21,oUaC,oTaC,gg);
         oZaC(oYaC,oYaC,oWaC, gg);
       } else _w(oXaC, './lib/wxParse/wxParse.wxml', 0, 0);_(oSaC,oWaC);return oSaC;};_2(25, oQaC, e, s, gg, oPaC, "item", "index", '');_(oOaC,oPaC);_(oLaC,oOaC);
      }else if (_o(28, e, s, gg)) {
        oLaC.wxVkey = 2;var ocaC = _n("view");_r(ocaC, 'class', 29, e, s, gg);var odaC = _n("view");_r(odaC, 'class', 30, e, s, gg);var oeaC = _n("view");_r(oeaC, 'class', 31, e, s, gg);var ofaC = _n("view");_r(ofaC, 'class', 32, e, s, gg);_(oeaC,ofaC);_(odaC,oeaC);var ogaC = _n("view");_r(ogaC, 'class', 31, e, s, gg);var ohaC = _v();var oiaC = function(omaC,olaC,okaC,gg){var ooaC = _v();
       var opaC = _o(52, omaC, olaC, gg);
       var oraC = _gd('./lib/wxParse/wxParse.wxml', opaC, e_, d_);
       if (oraC) {
         var oqaC = _1(21,omaC,olaC,gg);
         oraC(oqaC,oqaC,ooaC, gg);
       } else _w(opaC, './lib/wxParse/wxParse.wxml', 0, 0);_(okaC,ooaC);return okaC;};_2(25, oiaC, e, s, gg, ohaC, "item", "index", '');_(ogaC,ohaC);_(odaC,ogaC);_(ocaC,odaC);_(oLaC,ocaC);
      }else if (_o(33, e, s, gg)) {
        oLaC.wxVkey = 3;var ouaC = _v();
       var ovaC = _o(34, e, s, gg);
       var oxaC = _gd('./lib/wxParse/wxParse.wxml', ovaC, e_, d_);
       if (oxaC) {
         var owaC = _1(21,e,s,gg);
         oxaC(owaC,owaC,ouaC, gg);
       } else _w(ovaC, './lib/wxParse/wxParse.wxml', 0, 0);_(oLaC,ouaC);
      }else if (_o(35, e, s, gg)) {
        oLaC.wxVkey = 4;var o_aC = _v();
       var oAbC = _o(36, e, s, gg);
       var oCbC = _gd('./lib/wxParse/wxParse.wxml', oAbC, e_, d_);
       if (oCbC) {
         var oBbC = _1(21,e,s,gg);
         oCbC(oBbC,oBbC,o_aC, gg);
       } else _w(oAbC, './lib/wxParse/wxParse.wxml', 0, 0);_(oLaC,o_aC);
      }else if (_o(37, e, s, gg)) {
        oLaC.wxVkey = 5;var oFbC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oGbC = _v();var oHbC = function(oLbC,oKbC,oJbC,gg){var oNbC = _v();
       var oObC = _o(52, oLbC, oKbC, gg);
       var oQbC = _gd('./lib/wxParse/wxParse.wxml', oObC, e_, d_);
       if (oQbC) {
         var oPbC = _1(21,oLbC,oKbC,gg);
         oQbC(oPbC,oPbC,oNbC, gg);
       } else _w(oObC, './lib/wxParse/wxParse.wxml', 0, 0);_(oJbC,oNbC);return oJbC;};_2(25, oHbC, e, s, gg, oGbC, "item", "index", '');_(oFbC,oGbC);_(oLaC,oFbC);
      }else if (_o(42, e, s, gg)) {
        oLaC.wxVkey = 6;var oTbC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oUbC = _v();var oVbC = function(oZbC,oYbC,oXbC,gg){var obbC = _v();
       var ocbC = _o(52, oZbC, oYbC, gg);
       var oebC = _gd('./lib/wxParse/wxParse.wxml', ocbC, e_, d_);
       if (oebC) {
         var odbC = _1(21,oZbC,oYbC,gg);
         oebC(odbC,odbC,obbC, gg);
       } else _w(ocbC, './lib/wxParse/wxParse.wxml', 0, 0);_(oXbC,obbC);return oXbC;};_2(25, oVbC, e, s, gg, oUbC, "item", "index", '');_(oTbC,oUbC);_(oLaC,oTbC);
      }else {
        oLaC.wxVkey = 7;var ofbC = _m( "view", ["style", 1,"class", 42], e, s, gg);var ohbC = _v();var oibC = function(ombC,olbC,okbC,gg){var oobC = _v();
       var opbC = _o(52, ombC, olbC, gg);
       var orbC = _gd('./lib/wxParse/wxParse.wxml', opbC, e_, d_);
       if (orbC) {
         var oqbC = _1(21,ombC,olbC,gg);
         orbC(oqbC,oqbC,oobC, gg);
       } else _w(opbC, './lib/wxParse/wxParse.wxml', 0, 0);_(okbC,oobC);return okbC;};_2(25, oibC, e, s, gg, ohbC, "item", "index", '');_(ofbC,ohbC);_(oLaC, ofbC);
      }_(oIaC,oLaC);
      }else if (_o(13, e, s, gg)) {
        oIaC.wxVkey = 2;var oubC = _v();
       var ovbC = _o(44, e, s, gg);
       var oxbC = _gd('./lib/wxParse/wxParse.wxml', ovbC, e_, d_);
       if (oxbC) {
         var owbC = _1(21,e,s,gg);
         oxbC(owbC,owbC,oubC, gg);
       } else _w(ovbC, './lib/wxParse/wxParse.wxml', 0, 0);_(oIaC,oubC);
      } _(r,oIaC);
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
      var ozbC = _v();
      if (_o(16, e, s, gg)) {
        ozbC.wxVkey = 1;var oBcC = _v();
      if (_o(22, e, s, gg)) {
        oBcC.wxVkey = 1;var oEcC = _m( "button", ["size", 23,"type", 1], e, s, gg);var oFcC = _v();var oGcC = function(oKcC,oJcC,oIcC,gg){var oMcC = _v();
       var oNcC = _o(53, oKcC, oJcC, gg);
       var oPcC = _gd('./lib/wxParse/wxParse.wxml', oNcC, e_, d_);
       if (oPcC) {
         var oOcC = _1(21,oKcC,oJcC,gg);
         oPcC(oOcC,oOcC,oMcC, gg);
       } else _w(oNcC, './lib/wxParse/wxParse.wxml', 0, 0);_(oIcC,oMcC);return oIcC;};_2(25, oGcC, e, s, gg, oFcC, "item", "index", '');_(oEcC,oFcC);_(oBcC,oEcC);
      }else if (_o(28, e, s, gg)) {
        oBcC.wxVkey = 2;var oScC = _n("view");_r(oScC, 'class', 29, e, s, gg);var oTcC = _n("view");_r(oTcC, 'class', 30, e, s, gg);var oUcC = _n("view");_r(oUcC, 'class', 31, e, s, gg);var oVcC = _n("view");_r(oVcC, 'class', 32, e, s, gg);_(oUcC,oVcC);_(oTcC,oUcC);var oWcC = _n("view");_r(oWcC, 'class', 31, e, s, gg);var oXcC = _v();var oYcC = function(occC,obcC,oacC,gg){var oecC = _v();
       var ofcC = _o(53, occC, obcC, gg);
       var ohcC = _gd('./lib/wxParse/wxParse.wxml', ofcC, e_, d_);
       if (ohcC) {
         var ogcC = _1(21,occC,obcC,gg);
         ohcC(ogcC,ogcC,oecC, gg);
       } else _w(ofcC, './lib/wxParse/wxParse.wxml', 0, 0);_(oacC,oecC);return oacC;};_2(25, oYcC, e, s, gg, oXcC, "item", "index", '');_(oWcC,oXcC);_(oTcC,oWcC);_(oScC,oTcC);_(oBcC,oScC);
      }else if (_o(33, e, s, gg)) {
        oBcC.wxVkey = 3;var okcC = _v();
       var olcC = _o(34, e, s, gg);
       var oncC = _gd('./lib/wxParse/wxParse.wxml', olcC, e_, d_);
       if (oncC) {
         var omcC = _1(21,e,s,gg);
         oncC(omcC,omcC,okcC, gg);
       } else _w(olcC, './lib/wxParse/wxParse.wxml', 0, 0);_(oBcC,okcC);
      }else if (_o(35, e, s, gg)) {
        oBcC.wxVkey = 4;var oqcC = _v();
       var orcC = _o(36, e, s, gg);
       var otcC = _gd('./lib/wxParse/wxParse.wxml', orcC, e_, d_);
       if (otcC) {
         var oscC = _1(21,e,s,gg);
         otcC(oscC,oscC,oqcC, gg);
       } else _w(orcC, './lib/wxParse/wxParse.wxml', 0, 0);_(oBcC,oqcC);
      }else if (_o(37, e, s, gg)) {
        oBcC.wxVkey = 5;var owcC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oxcC = _v();var oycC = function(oBdC,oAdC,o_cC,gg){var oDdC = _v();
       var oEdC = _o(53, oBdC, oAdC, gg);
       var oGdC = _gd('./lib/wxParse/wxParse.wxml', oEdC, e_, d_);
       if (oGdC) {
         var oFdC = _1(21,oBdC,oAdC,gg);
         oGdC(oFdC,oFdC,oDdC, gg);
       } else _w(oEdC, './lib/wxParse/wxParse.wxml', 0, 0);_(o_cC,oDdC);return o_cC;};_2(25, oycC, e, s, gg, oxcC, "item", "index", '');_(owcC,oxcC);_(oBcC,owcC);
      }else if (_o(42, e, s, gg)) {
        oBcC.wxVkey = 6;var oJdC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oKdC = _v();var oLdC = function(oPdC,oOdC,oNdC,gg){var oRdC = _v();
       var oSdC = _o(53, oPdC, oOdC, gg);
       var oUdC = _gd('./lib/wxParse/wxParse.wxml', oSdC, e_, d_);
       if (oUdC) {
         var oTdC = _1(21,oPdC,oOdC,gg);
         oUdC(oTdC,oTdC,oRdC, gg);
       } else _w(oSdC, './lib/wxParse/wxParse.wxml', 0, 0);_(oNdC,oRdC);return oNdC;};_2(25, oLdC, e, s, gg, oKdC, "item", "index", '');_(oJdC,oKdC);_(oBcC,oJdC);
      }else {
        oBcC.wxVkey = 7;var oVdC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oXdC = _v();var oYdC = function(ocdC,obdC,oadC,gg){var oedC = _v();
       var ofdC = _o(53, ocdC, obdC, gg);
       var ohdC = _gd('./lib/wxParse/wxParse.wxml', ofdC, e_, d_);
       if (ohdC) {
         var ogdC = _1(21,ocdC,obdC,gg);
         ohdC(ogdC,ogdC,oedC, gg);
       } else _w(ofdC, './lib/wxParse/wxParse.wxml', 0, 0);_(oadC,oedC);return oadC;};_2(25, oYdC, e, s, gg, oXdC, "item", "index", '');_(oVdC,oXdC);_(oBcC, oVdC);
      }_(ozbC,oBcC);
      }else if (_o(13, e, s, gg)) {
        ozbC.wxVkey = 2;var okdC = _v();
       var oldC = _o(44, e, s, gg);
       var ondC = _gd('./lib/wxParse/wxParse.wxml', oldC, e_, d_);
       if (ondC) {
         var omdC = _1(21,e,s,gg);
         ondC(omdC,omdC,okdC, gg);
       } else _w(oldC, './lib/wxParse/wxParse.wxml', 0, 0);_(ozbC,okdC);
      } _(r,ozbC);
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
      var opdC = _v();
      if (_o(16, e, s, gg)) {
        opdC.wxVkey = 1;var osdC = _v();
      if (_o(22, e, s, gg)) {
        osdC.wxVkey = 1;var ovdC = _m( "button", ["size", 23,"type", 1], e, s, gg);var owdC = _v();var oxdC = function(oAeC,o_dC,ozdC,gg){var oCeC = _v();
       var oDeC = _o(54, oAeC, o_dC, gg);
       var oFeC = _gd('./lib/wxParse/wxParse.wxml', oDeC, e_, d_);
       if (oFeC) {
         var oEeC = _1(21,oAeC,o_dC,gg);
         oFeC(oEeC,oEeC,oCeC, gg);
       } else _w(oDeC, './lib/wxParse/wxParse.wxml', 0, 0);_(ozdC,oCeC);return ozdC;};_2(25, oxdC, e, s, gg, owdC, "item", "index", '');_(ovdC,owdC);_(osdC,ovdC);
      }else if (_o(28, e, s, gg)) {
        osdC.wxVkey = 2;var oIeC = _n("view");_r(oIeC, 'class', 29, e, s, gg);var oJeC = _n("view");_r(oJeC, 'class', 30, e, s, gg);var oKeC = _n("view");_r(oKeC, 'class', 31, e, s, gg);var oLeC = _n("view");_r(oLeC, 'class', 32, e, s, gg);_(oKeC,oLeC);_(oJeC,oKeC);var oMeC = _n("view");_r(oMeC, 'class', 31, e, s, gg);var oNeC = _v();var oOeC = function(oSeC,oReC,oQeC,gg){var oUeC = _v();
       var oVeC = _o(54, oSeC, oReC, gg);
       var oXeC = _gd('./lib/wxParse/wxParse.wxml', oVeC, e_, d_);
       if (oXeC) {
         var oWeC = _1(21,oSeC,oReC,gg);
         oXeC(oWeC,oWeC,oUeC, gg);
       } else _w(oVeC, './lib/wxParse/wxParse.wxml', 0, 0);_(oQeC,oUeC);return oQeC;};_2(25, oOeC, e, s, gg, oNeC, "item", "index", '');_(oMeC,oNeC);_(oJeC,oMeC);_(oIeC,oJeC);_(osdC,oIeC);
      }else if (_o(33, e, s, gg)) {
        osdC.wxVkey = 3;var oaeC = _v();
       var obeC = _o(34, e, s, gg);
       var odeC = _gd('./lib/wxParse/wxParse.wxml', obeC, e_, d_);
       if (odeC) {
         var oceC = _1(21,e,s,gg);
         odeC(oceC,oceC,oaeC, gg);
       } else _w(obeC, './lib/wxParse/wxParse.wxml', 0, 0);_(osdC,oaeC);
      }else if (_o(35, e, s, gg)) {
        osdC.wxVkey = 4;var ogeC = _v();
       var oheC = _o(36, e, s, gg);
       var ojeC = _gd('./lib/wxParse/wxParse.wxml', oheC, e_, d_);
       if (ojeC) {
         var oieC = _1(21,e,s,gg);
         ojeC(oieC,oieC,ogeC, gg);
       } else _w(oheC, './lib/wxParse/wxParse.wxml', 0, 0);_(osdC,ogeC);
      }else if (_o(37, e, s, gg)) {
        osdC.wxVkey = 5;var omeC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oneC = _v();var ooeC = function(oseC,oreC,oqeC,gg){var oueC = _v();
       var oveC = _o(54, oseC, oreC, gg);
       var oxeC = _gd('./lib/wxParse/wxParse.wxml', oveC, e_, d_);
       if (oxeC) {
         var oweC = _1(21,oseC,oreC,gg);
         oxeC(oweC,oweC,oueC, gg);
       } else _w(oveC, './lib/wxParse/wxParse.wxml', 0, 0);_(oqeC,oueC);return oqeC;};_2(25, ooeC, e, s, gg, oneC, "item", "index", '');_(omeC,oneC);_(osdC,omeC);
      }else if (_o(42, e, s, gg)) {
        osdC.wxVkey = 6;var o_eC = _m( "view", ["class", 0,"style", 1], e, s, gg);var oAfC = _v();var oBfC = function(oFfC,oEfC,oDfC,gg){var oHfC = _v();
       var oIfC = _o(54, oFfC, oEfC, gg);
       var oKfC = _gd('./lib/wxParse/wxParse.wxml', oIfC, e_, d_);
       if (oKfC) {
         var oJfC = _1(21,oFfC,oEfC,gg);
         oKfC(oJfC,oJfC,oHfC, gg);
       } else _w(oIfC, './lib/wxParse/wxParse.wxml', 0, 0);_(oDfC,oHfC);return oDfC;};_2(25, oBfC, e, s, gg, oAfC, "item", "index", '');_(o_eC,oAfC);_(osdC,o_eC);
      }else {
        osdC.wxVkey = 7;var oLfC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oNfC = _v();var oOfC = function(oSfC,oRfC,oQfC,gg){var oUfC = _v();
       var oVfC = _o(54, oSfC, oRfC, gg);
       var oXfC = _gd('./lib/wxParse/wxParse.wxml', oVfC, e_, d_);
       if (oXfC) {
         var oWfC = _1(21,oSfC,oRfC,gg);
         oXfC(oWfC,oWfC,oUfC, gg);
       } else _w(oVfC, './lib/wxParse/wxParse.wxml', 0, 0);_(oQfC,oUfC);return oQfC;};_2(25, oOfC, e, s, gg, oNfC, "item", "index", '');_(oLfC,oNfC);_(osdC, oLfC);
      }_(opdC,osdC);
      }else if (_o(13, e, s, gg)) {
        opdC.wxVkey = 2;var oafC = _v();
       var obfC = _o(44, e, s, gg);
       var odfC = _gd('./lib/wxParse/wxParse.wxml', obfC, e_, d_);
       if (odfC) {
         var ocfC = _1(21,e,s,gg);
         odfC(ocfC,ocfC,oafC, gg);
       } else _w(obfC, './lib/wxParse/wxParse.wxml', 0, 0);_(opdC,oafC);
      } _(r,opdC);
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
      var offC = _v();
      if (_o(16, e, s, gg)) {
        offC.wxVkey = 1;var oifC = _v();
      if (_o(22, e, s, gg)) {
        oifC.wxVkey = 1;var olfC = _m( "button", ["size", 23,"type", 1], e, s, gg);var omfC = _v();var onfC = function(orfC,oqfC,opfC,gg){var otfC = _v();
       var oufC = _o(55, orfC, oqfC, gg);
       var owfC = _gd('./lib/wxParse/wxParse.wxml', oufC, e_, d_);
       if (owfC) {
         var ovfC = _1(21,orfC,oqfC,gg);
         owfC(ovfC,ovfC,otfC, gg);
       } else _w(oufC, './lib/wxParse/wxParse.wxml', 0, 0);_(opfC,otfC);return opfC;};_2(25, onfC, e, s, gg, omfC, "item", "index", '');_(olfC,omfC);_(oifC,olfC);
      }else if (_o(28, e, s, gg)) {
        oifC.wxVkey = 2;var ozfC = _n("view");_r(ozfC, 'class', 29, e, s, gg);var o_fC = _n("view");_r(o_fC, 'class', 30, e, s, gg);var oAgC = _n("view");_r(oAgC, 'class', 31, e, s, gg);var oBgC = _n("view");_r(oBgC, 'class', 32, e, s, gg);_(oAgC,oBgC);_(o_fC,oAgC);var oCgC = _n("view");_r(oCgC, 'class', 31, e, s, gg);var oDgC = _v();var oEgC = function(oIgC,oHgC,oGgC,gg){var oKgC = _v();
       var oLgC = _o(55, oIgC, oHgC, gg);
       var oNgC = _gd('./lib/wxParse/wxParse.wxml', oLgC, e_, d_);
       if (oNgC) {
         var oMgC = _1(21,oIgC,oHgC,gg);
         oNgC(oMgC,oMgC,oKgC, gg);
       } else _w(oLgC, './lib/wxParse/wxParse.wxml', 0, 0);_(oGgC,oKgC);return oGgC;};_2(25, oEgC, e, s, gg, oDgC, "item", "index", '');_(oCgC,oDgC);_(o_fC,oCgC);_(ozfC,o_fC);_(oifC,ozfC);
      }else if (_o(33, e, s, gg)) {
        oifC.wxVkey = 3;var oQgC = _v();
       var oRgC = _o(34, e, s, gg);
       var oTgC = _gd('./lib/wxParse/wxParse.wxml', oRgC, e_, d_);
       if (oTgC) {
         var oSgC = _1(21,e,s,gg);
         oTgC(oSgC,oSgC,oQgC, gg);
       } else _w(oRgC, './lib/wxParse/wxParse.wxml', 0, 0);_(oifC,oQgC);
      }else if (_o(35, e, s, gg)) {
        oifC.wxVkey = 4;var oWgC = _v();
       var oXgC = _o(36, e, s, gg);
       var oZgC = _gd('./lib/wxParse/wxParse.wxml', oXgC, e_, d_);
       if (oZgC) {
         var oYgC = _1(21,e,s,gg);
         oZgC(oYgC,oYgC,oWgC, gg);
       } else _w(oXgC, './lib/wxParse/wxParse.wxml', 0, 0);_(oifC,oWgC);
      }else if (_o(37, e, s, gg)) {
        oifC.wxVkey = 5;var ocgC = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var odgC = _v();var oegC = function(oigC,ohgC,oggC,gg){var okgC = _v();
       var olgC = _o(55, oigC, ohgC, gg);
       var ongC = _gd('./lib/wxParse/wxParse.wxml', olgC, e_, d_);
       if (ongC) {
         var omgC = _1(21,oigC,ohgC,gg);
         ongC(omgC,omgC,okgC, gg);
       } else _w(olgC, './lib/wxParse/wxParse.wxml', 0, 0);_(oggC,okgC);return oggC;};_2(25, oegC, e, s, gg, odgC, "item", "index", '');_(ocgC,odgC);_(oifC,ocgC);
      }else if (_o(42, e, s, gg)) {
        oifC.wxVkey = 6;var oqgC = _m( "view", ["class", 0,"style", 1], e, s, gg);var orgC = _v();var osgC = function(owgC,ovgC,ougC,gg){var oygC = _v();
       var ozgC = _o(55, owgC, ovgC, gg);
       var oAhC = _gd('./lib/wxParse/wxParse.wxml', ozgC, e_, d_);
       if (oAhC) {
         var o_gC = _1(21,owgC,ovgC,gg);
         oAhC(o_gC,o_gC,oygC, gg);
       } else _w(ozgC, './lib/wxParse/wxParse.wxml', 0, 0);_(ougC,oygC);return ougC;};_2(25, osgC, e, s, gg, orgC, "item", "index", '');_(oqgC,orgC);_(oifC,oqgC);
      }else {
        oifC.wxVkey = 7;var oBhC = _m( "view", ["style", 1,"class", 42], e, s, gg);var oDhC = _v();var oEhC = function(oIhC,oHhC,oGhC,gg){var oKhC = _v();
       var oLhC = _o(55, oIhC, oHhC, gg);
       var oNhC = _gd('./lib/wxParse/wxParse.wxml', oLhC, e_, d_);
       if (oNhC) {
         var oMhC = _1(21,oIhC,oHhC,gg);
         oNhC(oMhC,oMhC,oKhC, gg);
       } else _w(oLhC, './lib/wxParse/wxParse.wxml', 0, 0);_(oGhC,oKhC);return oGhC;};_2(25, oEhC, e, s, gg, oDhC, "item", "index", '');_(oBhC,oDhC);_(oifC, oBhC);
      }_(offC,oifC);
      }else if (_o(13, e, s, gg)) {
        offC.wxVkey = 2;var oQhC = _v();
       var oRhC = _o(44, e, s, gg);
       var oThC = _gd('./lib/wxParse/wxParse.wxml', oRhC, e_, d_);
       if (oThC) {
         var oShC = _1(21,e,s,gg);
         oThC(oShC,oShC,oQhC, gg);
       } else _w(oRhC, './lib/wxParse/wxParse.wxml', 0, 0);_(offC,oQhC);
      } _(r,offC);
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
    var olhC = e_["./pages/goods/goods.wxml"].i;var omhC = _n("view");_r(omhC, 'class', 56, e, s, gg);var onhC = _m( "scroll-view", ["bindscroll", 57,"class", 1,"scrollIntoView", 2,"scrollY", 3], e, s, gg);var oohC = _m( "swiper", ["autoplay", 60,"indicatorDots", 0,"class", 1,"duration", 2,"id", 3,"interval", 4], e, s, gg);var ophC = _v();var oqhC = function(ouhC,othC,oshC,gg){var orhC = _n("swiper-item");var owhC = _m( "image", ["backgroundSize", 67,"src", 1], ouhC, othC, gg);_(orhC,owhC);_(oshC, orhC);return oshC;};_2(65, oqhC, e, s, gg, ophC, "item", "index", '{{item.id}}');_(oohC,ophC);_(onhC,oohC);var oxhC = _n("view");_r(oxhC, 'class', 69, e, s, gg);var oyhC = _n("view");_r(oyhC, 'class', 70, e, s, gg);var ozhC = _n("text");_r(ozhC, 'class', 71, e, s, gg);var o_hC = _o(72, e, s, gg);_(ozhC,o_hC);_(oyhC,ozhC);var oAiC = _m( "image", ["bindtap", 73,"class", 1,"id", 2,"src", 3], e, s, gg);_(oyhC,oAiC);var oBiC = _n("text");_r(oBiC, 'class', 77, e, s, gg);_(oyhC,oBiC);var oCiC = _n("text");_r(oCiC, 'class', 78, e, s, gg);var oDiC = _o(79, e, s, gg);_(oCiC,oDiC);_(oyhC,oCiC);var oEiC = _v();
      if (_o(80, e, s, gg)) {
        oEiC.wxVkey = 1;var oFiC = _n("text");_r(oFiC, 'class', 81, e, s, gg);var oHiC = _o(82, e, s, gg);_(oFiC,oHiC);_(oEiC, oFiC);
      } _(oyhC,oEiC);var oIiC = _v();
      if (_o(83, e, s, gg)) {
        oIiC.wxVkey = 1;var oJiC = _n("view");_r(oJiC, 'class', 84, e, s, gg);var oLiC = _n("navigator");_r(oLiC, 'url', 85, e, s, gg);var oMiC = _n("text");var oNiC = _o(83, e, s, gg);_(oMiC,oNiC);_(oLiC,oMiC);_(oJiC,oLiC);_(oIiC, oJiC);
      } _(oyhC,oIiC);_(oxhC,oyhC);_(onhC,oxhC);var oOiC = _n("view");_r(oOiC, 'class', 86, e, s, gg);_(onhC,oOiC);var oPiC = _m( "view", ["bindtap", 87,"class", 1], e, s, gg);var oQiC = _n("view");_r(oQiC, 'class', 89, e, s, gg);var oRiC = _o(90, e, s, gg);_(oQiC,oRiC);_(oPiC,oQiC);var oSiC = _m( "image", ["class", 91,"src", 1], e, s, gg);_(oPiC,oSiC);_(onhC,oPiC);var oTiC = _n("view");_r(oTiC, 'class', 86, e, s, gg);_(onhC,oTiC);var oUiC = _m( "view", ["bindtap", -1,"class", 93], e, s, gg);var oViC = _n("view");_r(oViC, 'class', 89, e, s, gg);var oWiC = _o(94, e, s, gg);_(oViC,oWiC);_(oUiC,oViC);var oXiC = _m( "image", ["class", 91,"src", 1], e, s, gg);_(oUiC,oXiC);_(onhC,oUiC);var oYiC = _n("view");_r(oYiC, 'class', 93, e, s, gg);var oZiC = _n("view");_r(oZiC, 'class', 89, e, s, gg);var oaiC = _n("view");_r(oaiC, 'class', 95, e, s, gg);var obiC = _o(96, e, s, gg);_(oaiC,obiC);_(oZiC,oaiC);var ociC = _n("view");_r(ociC, 'class', 97, e, s, gg);var odiC = _o(98, e, s, gg);_(ociC,odiC);_(oZiC,ociC);_(oYiC,oZiC);var oeiC = _m( "image", ["class", 91,"src", 1], e, s, gg);_(oYiC,oeiC);_(onhC,oYiC);var ofiC = _n("view");_r(ofiC, 'class', 86, e, s, gg);_(onhC,ofiC);var ogiC = _n("view");_r(ogiC, 'class', 86, e, s, gg);_(onhC,ogiC);var ohiC = _n("view");_r(ohiC, 'class', 93, e, s, gg);var oiiC = _n("view");_r(oiiC, 'class', 99, e, s, gg);var ojiC = _o(100, e, s, gg);_(oiiC,ojiC);_(ohiC,oiiC);_(onhC,ohiC);var okiC = _n("view");_r(okiC, 'class', 101, e, s, gg);var oliC = _n("view");_r(oliC, 'class', 101, e, s, gg);var omiC = _n("view");_r(omiC, 'class', 102, e, s, gg);var oniC = _n("view");_r(oniC, 'class', 103, e, s, gg);_(omiC,oniC);_(oliC,omiC);var ooiC = _n("view");_r(ooiC, 'class', 104, e, s, gg);var opiC = _n("view");_r(opiC, 'class', 105, e, s, gg);_ai(olhC, '../../lib/wxParse/wxParse.wxml', e_, './pages/goods/goods.wxml', 0, 0);var oriC = _v();
       var osiC = _o(106, e, s, gg);
       var ouiC = _gd('./pages/goods/goods.wxml', osiC, e_, d_);
       if (ouiC) {
         var otiC = _1(107,e,s,gg);
         ouiC(otiC,otiC,oriC, gg);
       } else _w(osiC, './pages/goods/goods.wxml', 0, 0);_(opiC,oriC);_(ooiC,opiC);var oviC = _v();var owiC = function(o_iC,oziC,oyiC,gg){var oxiC = _n("view");_r(oxiC, 'class', 109, o_iC, oziC, gg);var oBjC = _m( "image", ["src", 68,"class", 42,"mode", 43], o_iC, oziC, gg);_(oxiC,oBjC);_(oyiC, oxiC);return oyiC;};_2(108, owiC, e, s, gg, oviC, "item", "index", '');_(ooiC,oviC);var oCjC = _m( "view", ["data-opt", 63,"bindtap", 49,"class", 50], e, s, gg);var oDjC = _o(114, e, s, gg);_(oCjC,oDjC);_(ooiC,oCjC);_(oliC,ooiC);_(okiC,oliC);_(onhC,okiC);_(omhC,onhC);var oEjC = _m( "view", ["data-opt", 63,"bindtap", 49,"class", 52], e, s, gg);var oFjC = _o(116, e, s, gg);_(oEjC,oFjC);_(omhC,oEjC);var oGjC = _v();
      if (_o(117, e, s, gg)) {
        oGjC.wxVkey = 1;var oHjC = _n("view");_r(oHjC, 'class', 118, e, s, gg);var oJjC = _n("view");_r(oJjC, 'class', 119, e, s, gg);var oKjC = _n("navigator");_r(oKjC, 'url', 120, e, s, gg);var oLjC = _n("text");_r(oLjC, 'class', 89, e, s, gg);var oMjC = _o(121, e, s, gg);_(oLjC,oMjC);_(oKjC,oLjC);var oNjC = _n("text");_r(oNjC, 'class', 91, e, s, gg);var oOjC = _o(122, e, s, gg);_(oNjC,oOjC);_(oKjC,oNjC);_(oJjC,oKjC);_(oHjC,oJjC);var oPjC = _n("view");_r(oPjC, 'class', 123, e, s, gg);var oQjC = _n("view");_r(oQjC, 'class', 26, e, s, gg);var oRjC = _n("view");_r(oRjC, 'class', 124, e, s, gg);var oSjC = _n("view");_r(oSjC, 'class', 125, e, s, gg);var oTjC = _n("image");_r(oTjC, 'src', 126, e, s, gg);_(oSjC,oTjC);var oUjC = _n("text");var oVjC = _o(127, e, s, gg);_(oUjC,oVjC);_(oSjC,oUjC);_(oRjC,oSjC);var oWjC = _n("view");_r(oWjC, 'class', 128, e, s, gg);var oXjC = _o(129, e, s, gg);_(oWjC,oXjC);_(oRjC,oWjC);_(oQjC,oRjC);var oYjC = _n("view");_r(oYjC, 'class', 130, e, s, gg);var oZjC = _o(131, e, s, gg);_(oYjC,oZjC);_(oQjC,oYjC);var oajC = _v();
      if (_o(132, e, s, gg)) {
        oajC.wxVkey = 1;var objC = _n("view");_r(objC, 'class', 133, e, s, gg);var odjC = _v();var oejC = function(oijC,ohjC,ogjC,gg){var ofjC = _m( "image", ["class", 135,"src", 1], oijC, ohjC, gg);_(ogjC, ofjC);return ogjC;};_2(134, oejC, e, s, gg, odjC, "item", "index", '{{item.id}}');_(objC,odjC);_(oajC, objC);
      } _(oQjC,oajC);_(oPjC,oQjC);_(oHjC,oPjC);_(oGjC, oHjC);
      } _(omhC,oGjC);var okjC = _n("view");_r(okjC, 'class', 137, e, s, gg);var oljC = _n("view");var omjC = _v();var onjC = function(orjC,oqjC,opjC,gg){var oojC = _m( "image", ["class", 135,"src", 1], orjC, oqjC, gg);_(opjC, oojC);return opjC;};_2(138, onjC, e, s, gg, omjC, "item", "index", '{{item.id}}');_(oljC,omjC);_(okjC,oljC);_(omhC,okjC);var otjC = _v();
      if (_o(139, e, s, gg)) {
        otjC.wxVkey = 1;var oujC = _n("view");_r(oujC, 'class', 140, e, s, gg);var owjC = _n("view");_r(owjC, 'class', 119, e, s, gg);var oxjC = _n("view");_r(oxjC, 'class', 141, e, s, gg);_(owjC,oxjC);var oyjC = _n("text");_r(oyjC, 'class', 142, e, s, gg);var ozjC = _o(143, e, s, gg);_(oyjC,ozjC);_(owjC,oyjC);_(oujC,owjC);var o_jC = _n("view");_r(o_jC, 'class', 123, e, s, gg);var oAkC = _v();var oBkC = function(oFkC,oEkC,oDkC,gg){var oCkC = _n("view");_r(oCkC, 'class', 26, oFkC, oEkC, gg);var oHkC = _n("navigator");_r(oHkC, 'url', 145, oFkC, oEkC, gg);var oIkC = _m( "image", ["backgroundSize", 67,"class", 68,"src", 79], oFkC, oEkC, gg);_(oHkC,oIkC);var oJkC = _n("text");_r(oJkC, 'class', 71, oFkC, oEkC, gg);var oKkC = _o(147, oFkC, oEkC, gg);_(oJkC,oKkC);_(oHkC,oJkC);var oLkC = _n("text");_r(oLkC, 'class', 78, oFkC, oEkC, gg);var oMkC = _o(148, oFkC, oEkC, gg);_(oLkC,oMkC);_(oHkC,oLkC);_(oCkC,oHkC);_(oDkC, oCkC);return oDkC;};_2(144, oBkC, e, s, gg, oAkC, "item", "index", '{{item.id}}');_(o_jC,oAkC);_(oujC,o_jC);_(otjC, oujC);
      } _(omhC,otjC);_(r,omhC);var oNkC = _m( "view", ["class", 149,"hidden", 1], e, s, gg);var oOkC = _n("view");_r(oOkC, 'class', 151, e, s, gg);var oPkC = _m( "view", ["catchtap", 152,"class", 1], e, s, gg);var oQkC = _m( "image", ["class", 154,"src", 1], e, s, gg);_(oPkC,oQkC);_(oOkC,oPkC);var oRkC = _n("view");_r(oRkC, 'class', 156, e, s, gg);var oSkC = _m( "image", ["class", 135,"src", 22], e, s, gg);_(oRkC,oSkC);var oTkC = _n("view");_r(oTkC, 'class', 124, e, s, gg);var oUkC = _n("view");_r(oUkC, 'class', 70, e, s, gg);var oVkC = _n("view");_r(oVkC, 'class', 158, e, s, gg);var oWkC = _o(159, e, s, gg);_(oVkC,oWkC);_(oUkC,oVkC);var oXkC = _v();
      if (_o(160, e, s, gg)) {
        oXkC.wxVkey = 1;var oYkC = _n("view");_r(oYkC, 'class', 161, e, s, gg);var oakC = _o(162, e, s, gg);_(oYkC,oakC);_(oXkC, oYkC);
      } _(oUkC,oXkC);_(oTkC,oUkC);_(oRkC,oTkC);_(oOkC,oRkC);var obkC = _n("view");_r(obkC, 'class', 163, e, s, gg);var ockC = _v();var odkC = function(ohkC,ogkC,ofkC,gg){var oekC = _m( "view", ["data-id", 66,"bindtap", 99,"class", 100], ohkC, ogkC, gg);var ojkC = _n("view");_r(ojkC, 'class', 71, ohkC, ogkC, gg);var okkC = _o(167, ohkC, ogkC, gg);_(ojkC,okkC);_(oekC,ojkC);_(ofkC, oekC);return ofkC;};_2(164, odkC, e, s, gg, ockC, "item", "index", '{{item.id}}');_(obkC,ockC);var olkC = _n("view");_r(olkC, 'class', 168, e, s, gg);var omkC = _n("view");_r(omkC, 'class', 71, e, s, gg);var onkC = _o(169, e, s, gg);_(omkC,onkC);_(olkC,omkC);var ookC = _n("view");_r(ookC, 'class', 170, e, s, gg);var opkC = _m( "view", ["bindtap", 171,"class", 1], e, s, gg);var oqkC = _o(173, e, s, gg);_(opkC,oqkC);_(ookC,opkC);var orkC = _m( "input", ["disabled", 60,"class", 114,"type", 114,"value", 115], e, s, gg);_(ookC,orkC);var oskC = _m( "view", ["bindtap", 176,"class", 1], e, s, gg);var otkC = _o(178, e, s, gg);_(oskC,otkC);_(ookC,oskC);_(olkC,ookC);_(obkC,olkC);_(oOkC,obkC);var oukC = _n("view");_r(oukC, 'class', 179, e, s, gg);var ovkC = _n("view");_r(ovkC, 'class', 180, e, s, gg);var owkC = _o(181, e, s, gg);_(ovkC,owkC);_(oukC,ovkC);var oxkC = _m( "view", ["bindtap", 182,"class", 1], e, s, gg);var oykC = _o(184, e, s, gg);_(oxkC,oykC);_(oukC,oxkC);_(oOkC,oukC);_(oNkC,oOkC);_(r,oNkC);var ozkC = _n("view");_r(ozkC, 'class', 185, e, s, gg);var o_kC = _m( "view", ["bindtap", -1,"class", 186], e, s, gg);var oAlC = _n("view");_r(oAlC, 'class', 187, e, s, gg);var oBlC = _m( "image", ["class", 154,"src", 34], e, s, gg);_(oAlC,oBlC);_(o_kC,oAlC);var oClC = _n("view");_r(oClC, 'class', 189, e, s, gg);var oDlC = _o(190, e, s, gg);_(oClC,oDlC);_(o_kC,oClC);_(ozkC,o_kC);var oElC = _m( "view", ["bindtap", 191,"class", 1], e, s, gg);var oFlC = _n("view");_r(oFlC, 'class', 187, e, s, gg);var oGlC = _m( "image", ["class", 154,"src", 39], e, s, gg);_(oFlC,oGlC);_(oElC,oFlC);var oHlC = _n("view");_r(oHlC, 'class', 189, e, s, gg);var oIlC = _o(194, e, s, gg);_(oHlC,oIlC);_(oElC,oHlC);_(ozkC,oElC);var oJlC = _n("view");_r(oJlC, 'class', 195, e, s, gg);var oKlC = _n("text");_r(oKlC, 'class', 196, e, s, gg);var oLlC = _o(197, e, s, gg);_(oKlC,oLlC);_(oJlC,oKlC);var oMlC = _n("view");_r(oMlC, 'class', 187, e, s, gg);var oNlC = _m( "image", ["class", 154,"bindtap", 44,"src", 45], e, s, gg);_(oMlC,oNlC);_(oJlC,oMlC);var oOlC = _n("view");_r(oOlC, 'class', 189, e, s, gg);var oPlC = _o(200, e, s, gg);_(oOlC,oPlC);_(oJlC,oOlC);_(ozkC,oJlC);var oQlC = _m( "view", ["bindtap", 201,"class", 1], e, s, gg);var oRlC = _o(203, e, s, gg);_(oQlC,oRlC);_(ozkC,oQlC);var oSlC = _m( "view", ["bindtap", 204,"class", 1], e, s, gg);var oTlC = _o(206, e, s, gg);_(oSlC,oTlC);_(ozkC,oSlC);_(r,ozkC);olhC.pop();
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
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:.container{margin-bottom:%%?100rpx?%%}.goodsimgs{width:%%?750rpx?%%;height:%%?750rpx?%%}.list{height:100%}.goodsimgs wx-image{width:%%?750rpx?%%;height:%%?750rpx?%%}.service-policy{width:%%?750rpx?%%;height:%%?73rpx?%%;background:#f4f4f4;padding:0 %%?31.25rpx?%%;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between}.service-policy .item{background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/servicePolicyRed-518d32d74b.png) 0 center no-repeat;background-size:%%?10rpx?%%;padding-left:%%?15rpx?%%;display:flex;align-items:center;font-size:%%?25rpx?%%;color:#666}.goods-info{width:100%;height:%%?245rpx?%%;background:#fff}.goods-info .c{display:block;width:96%;height:100%;margin:0 2%}.goods-info .c wx-text{display:block;width:100%}.goods-info .name{margin-top:%%?30rpx?%%;line-height:%%?50rpx?%%;height:%%?100rpx?%%;font-size:%%?32rpx?%%;color:#333;overflow-y:hidden}.goods-info .desc{height:%%?0rpx?%%;font-size:%%?26rpx?%%;line-height:%%?60rpx?%%;color:#999}.goods-info .price{height:%%?45rpx?%%;font-size:%%?38rpx?%%;font-weight:700;line-height:%%?45rpx?%%;color:#cc2020;margin-bottom:%%?40rpx?%%;display:inline!important}.goods-info .original_price{margin-left:%%?25rpx?%%;text-decoration:line-through;display:inline!important}.goods-info .brand{margin-top:%%?23rpx?%%;min-height:%%?40rpx?%%;text-align:center}.goods-info .brand wx-text{display:inline-block;width:auto;padding:%%?2rpx?%% %%?30rpx?%% %%?2rpx?%% %%?10.5rpx?%%;line-height:%%?35.5rpx?%%;border:%%?1rpx?%% solid #f48f18;font-size:%%?25rpx?%%;color:#f48f18;border-radius:%%?4rpx?%%;background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/detailTagArrow-18bee52dab.png) 95% center no-repeat;background-size:%%?10.75rpx?%% %%?18.75rpx?%%}.section-nav{width:%%?750rpx?%%;height:%%?89rpx?%%;background:#fff;border-bottom:%%?1rpx?%% solid #f2f2f2}.section-nav .t{float:left;width:%%?600rpx?%%;height:%%?88rpx?%%;line-height:%%?88rpx?%%;font-size:%%?29rpx?%%;color:#333;margin-left:%%?31.25rpx?%%}.section-nav .i{float:right;line-height:%%?88rpx?%%;height:%%?30rpx?%%;width:%%?30rpx?%%;margin-right:%%?16rpx?%%;margin-top:%%?28rpx?%%}.section-act .t{float:left;display:flex;align-items:center;width:%%?600rpx?%%;height:%%?88rpx?%%;overflow:hidden;line-height:%%?88rpx?%%;font-size:%%?29rpx?%%;color:#999;margin-left:%%?31.25rpx?%%}.section-act .label{color:#999}.section-act .tag{display:flex;align-items:center;padding:0 %%?10rpx?%%;border-radius:%%?3rpx?%%;height:%%?37rpx?%%;width:auto;color:#f48f18;overflow:hidden;border:%%?1rpx?%% solid #f48f18;font-size:%%?25rpx?%%;margin:0 %%?10rpx?%%}.section-act .text{display:flex;align-items:center;height:%%?37rpx?%%;width:auto;overflow:hidden;color:#f48f18;font-size:%%?29rpx?%%}.comments{width:100%;height:auto;padding-left:%%?30rpx?%%;background:#fff;margin:%%?20rpx?%% 0}.comments .h{height:%%?102.5rpx?%%;line-height:%%?100.5rpx?%%;width:%%?718.75rpx?%%;padding-right:%%?16rpx?%%;border-bottom:%%?1rpx?%% solid #d9d9d9}.comments .h .t{display:block;float:left;width:50%;font-size:%%?38.5rpx?%%;color:#333}.comments .h .i{display:block;float:right;width:%%?164rpx?%%;height:%%?100.5rpx?%%;line-height:%%?100.5rpx?%%;background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/address-right-990628faa7.png) right center no-repeat;background-size:%%?52rpx?%%}.comments .b{height:auto;width:%%?720rpx?%%}.comments .item{height:auto;width:%%?720rpx?%%;overflow:hidden}.comments .info{height:%%?127rpx?%%;width:100%;padding:%%?33rpx?%% 0 %%?27rpx?%% 0}.comments .user{float:left;width:auto;height:%%?67rpx?%%;line-height:%%?67rpx?%%;font-size:0}.comments .user wx-image{float:left;width:%%?67rpx?%%;height:%%?67rpx?%%;margin-right:%%?17rpx?%%;border-radius:50%}.comments .user wx-text{display:inline-block;width:auto;height:%%?66rpx?%%;overflow:hidden;font-size:%%?29rpx?%%;line-height:%%?66rpx?%%}.comments .time{display:block;float:right;width:auto;height:%%?67rpx?%%;line-height:%%?67rpx?%%;color:#7f7f7f;font-size:%%?25rpx?%%;margin-right:%%?30rpx?%%}.comments .content{width:%%?720rpx?%%;padding-right:%%?30rpx?%%;line-height:%%?45.8rpx?%%;font-size:%%?29rpx?%%;margin-bottom:%%?24rpx?%%}.comments .imgs{width:%%?720rpx?%%;height:auto;margin-bottom:%%?25rpx?%%}.comments .imgs .img{height:%%?150rpx?%%;width:%%?150rpx?%%;margin-right:%%?28rpx?%%}.comments .spec{width:%%?720rpx?%%;padding-right:%%?30rpx?%%;line-height:%%?30rpx?%%;font-size:%%?24rpx?%%;color:#999;margin-bottom:%%?30rpx?%%}.goods-attr{width:%%?750rpx?%%;height:auto;overflow:hidden;padding:0 %%?31.25rpx?%% %%?25rpx?%% %%?31.25rpx?%%;background:#fff}.goods-attr .t{width:%%?687.5rpx?%%;height:%%?104rpx?%%;line-height:%%?104rpx?%%;font-size:%%?38.5rpx?%%}.goods-attr .item{width:%%?687.5rpx?%%;height:%%?68rpx?%%;padding:%%?11rpx?%% %%?20rpx?%%;margin-bottom:%%?11rpx?%%;background:#f7f7f7;font-size:%%?38.5rpx?%%}.goods-attr .left{float:left;font-size:%%?25rpx?%%;width:%%?134rpx?%%;height:%%?45rpx?%%;line-height:%%?45rpx?%%;overflow:hidden;color:#999}.goods-attr .right{float:left;font-size:%%?36.5rpx?%%;margin-left:%%?20rpx?%%;width:%%?480rpx?%%;height:%%?45rpx?%%;line-height:%%?45rpx?%%;overflow:hidden;color:#333}.detail{width:%%?750rpx?%%;height:auto;overflow:hidden}.detail wx-image{width:%%?750rpx?%%;display:block}.common-problem{width:%%?750rpx?%%;height:auto;overflow:hidden}.common-problem .h{position:relative;height:%%?145.5rpx?%%;width:%%?750rpx?%%;padding:%%?56.25rpx?%% 0;background:#fff;text-align:center}.common-problem .h .line{display:inline-block;position:absolute;top:%%?72rpx?%%;left:0;z-index:7;height:%%?1rpx?%%;margin-left:%%?225rpx?%%;width:%%?300rpx?%%;background:#ccc}.common-problem .h .title{display:inline-block;position:absolute;top:%%?56.125rpx?%%;left:0;z-index:3;height:%%?33rpx?%%;margin-left:%%?285rpx?%%;width:%%?180rpx?%%;background:#fff}.common-problem .b{width:%%?750rpx?%%;height:auto;overflow:hidden;padding:%%?0rpx?%% %%?30rpx?%%;background:#fff}.common-problem .item{height:auto;overflow:hidden;padding-bottom:%%?25rpx?%%}.common-problem .question-box .spot{float:left;display:block;height:%%?8rpx?%%;width:%%?8rpx?%%;background:#b4282d;border-radius:50%;margin-top:%%?11rpx?%%}.common-problem .question-box .question{float:left;line-height:%%?30rpx?%%;padding-left:%%?8rpx?%%;display:block;font-size:%%?26rpx?%%;padding-bottom:%%?15rpx?%%;color:#303030}.common-problem .answer{line-height:%%?36rpx?%%;padding-left:%%?16rpx?%%;font-size:%%?26rpx?%%;color:#787878}.related-goods{width:%%?750rpx?%%;height:auto;overflow:hidden}.related-goods .h{position:relative;height:%%?145.5rpx?%%;width:%%?750rpx?%%;padding:%%?56.25rpx?%% 0;background:#fff;text-align:center;border-bottom:%%?1rpx?%% solid #f4f4f4}.related-goods .h .line{display:inline-block;position:absolute;top:%%?72rpx?%%;left:0;z-index:2;height:%%?1rpx?%%;margin-left:%%?225rpx?%%;width:%%?300rpx?%%;background:#ccc}.related-goods .h .title{display:inline-block;position:absolute;top:%%?56.125rpx?%%;left:0;z-index:3;height:%%?33rpx?%%;margin-left:%%?285rpx?%%;width:%%?180rpx?%%;background:#fff}.related-goods .b{width:%%?750rpx?%%;height:auto;overflow:hidden}.related-goods .b .item{float:left;background:#fff;width:%%?375rpx?%%;height:auto;overflow:hidden;text-align:center;padding:%%?15rpx?%% %%?31.25rpx?%%;border-right:%%?1rpx?%% solid #f4f4f4;border-bottom:%%?1rpx?%% solid #f4f4f4}.related-goods .item .img{width:%%?311.45rpx?%%;height:%%?311.45rpx?%%}.related-goods .item .name{display:block;width:%%?311.45rpx?%%;height:%%?35rpx?%%;margin:%%?11.5rpx?%% 0 %%?15rpx?%% 0;text-align:center;overflow:hidden;font-size:%%?30rpx?%%;color:#333}.related-goods .item .price{display:block;width:%%?311.45rpx?%%;height:%%?30rpx?%%;text-align:center;font-size:%%?30rpx?%%;color:#b4282d}.bottom-btn{position:fixed;left:0;bottom:0;z-index:2;width:%%?750rpx?%%;height:%%?98rpx?%%;display:flex;background:#fff}.bottom-btn .l{float:left;height:%%?98rpx?%%;width:%%?136rpx?%%;border:%%?1rpx?%% solid #f4f4f4}.bottom-btn .l .l-text{width:%%?128rpx?%%;height:%%?30rpx?%%;text-align:center;font-size:%%?20rpx?%%;color:#333}.bottom-btn .l .l-imgaes{margin-left:34%;margin-top:10%}.bottom-btn .l .l-customserver{pointer-events:none;cursor:default;opacity:.6;width:%%?132rpx?%%}.bottom-btn .l.l-collect{border-right:none;border-left:none;text-align:center;width:%%?132rpx?%%}.bottom-btn .l.l-cart{width:%%?132rpx?%%}.bottom-btn .l.l-cart .cart-count{height:%%?28rpx?%%;width:%%?28rpx?%%;z-index:10;position:absolute;top:%%?6rpx?%%;left:47%;background:#b4282d;text-align:center;font-size:%%?18rpx?%%;color:#fff;line-height:%%?28rpx?%%;border-radius:50%}.bottom-btn .l .icon{display:block;height:%%?44rpx?%%;width:%%?44rpx?%%}.bottom-btn .c{background:#cc2020;float:left;height:%%?98rpx?%%;line-height:%%?96rpx?%%;flex:1;text-align:center;color:#fffefe}.bottom-btn .r{float:left;height:%%?98rpx?%%;line-height:%%?98rpx?%%;flex:1;text-align:center;color:#666;font-size:%%?30rpx?%%;border-top:%%?1rpx?%% solid #f4f4f4;border-bottom:%%?1rpx?%% solid #f4f4f4}.wxParse{margin:0 5px;font-family:Helvetica,sans-serif;font-size:%%?28rpx?%%;color:#666;line-height:1.8}wx-view{word-break:break-all;overflow:auto}.wxParse-inline{display:inline;margin:0;padding:0}.wxParse-div{margin:0;padding:0}.wxParse-h1{font-size:2em;margin:.67em 0}.wxParse-h2{font-size:1.5em;margin:.75em 0}.wxParse-h3{font-size:1.17em;margin:.83em 0}.wxParse-h4{margin:1.12em 0}.wxParse-h5{font-size:.83em;margin:1.5em 0}.wxParse-h6{font-size:.75em;margin:1.67em 0}.wxParse-h1{font-size:18px;font-weight:400;margin-bottom:.9em}.wxParse-h2{font-size:16px;font-weight:400;margin-bottom:.34em}.wxParse-h3{font-weight:400;font-size:15px;margin-bottom:.34em}.wxParse-h4{font-weight:400;font-size:14px;margin-bottom:.24em}.wxParse-h5{font-weight:400;font-size:13px;margin-bottom:.14em}.wxParse-h6{font-weight:400;font-size:12px;margin-bottom:.04em}.wxParse-b,.wxParse-h1,.wxParse-h2,.wxParse-h3,.wxParse-h4,.wxParse-h5,.wxParse-h6,.wxParse-strong{font-weight:bolder}.wxParse-address,.wxParse-cite,.wxParse-em,.wxParse-i,.wxParse-var{font-style:italic}.wxParse-code,.wxParse-kbd,.wxParse-pre,.wxParse-samp,.wxParse-tt{font-family:monospace}.wxParse-pre{white-space:pre}.wxParse-big{font-size:1.17em}.wxParse-small,.wxParse-sub,.wxParse-sup{font-size:.83em}.wxParse-sub{vertical-align:sub}.wxParse-sup{vertical-align:super}.wxParse-del,.wxParse-s,.wxParse-strike{text-decoration:line-through}.wxParse-strong,wx-wxParse-s{display:inline}.wxParse-a{color:#00bfff;word-break:break-all;overflow:auto}.wxParse-video{text-align:center;margin:10px 0}.wxParse-video-video{width:100%}.wxParse-img{background-color:#efefef;overflow:hidden;width:40px;height:40px}.wxParse-blockquote{margin:0;padding:10px 0 10px 5px;font-family:Courier,Calibri,"宋体";background:#f5f5f5;border-left:3px solid #dbdbdb}.wxParse-code,.wxParse-wxxxcode-style{display:inline;background:#f5f5f5}.wxParse-ul{margin:%%?20rpx?%% %%?10rpx?%%}.wxParse-li,.wxParse-li-inner{display:flex;align-items:baseline;margin:%%?10rpx?%% 0}.wxParse-li-text{align-items:center;line-height:20px}.wxParse-li-circle{display:inline-flex;width:5px;height:5px;background-color:#333;margin-right:5px}.wxParse-li-square{display:inline-flex;width:%%?10rpx?%%;height:%%?10rpx?%%;background-color:#333;margin-right:5px}.wxParse-li-ring{display:inline-flex;width:%%?10rpx?%%;height:%%?10rpx?%%;border:%%?2rpx?%% solid #333;border-radius:50%;background-color:#fff;margin-right:5px}.wxParse-u{text-decoration:underline}.wxParse-hide{display:none}.WxEmojiView{align-items:center}.wxEmoji{width:16px;height:16px}.wxParse-tr{display:flex;border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0}.wxParse-td,.wxParse-th{flex:1;padding:5px;font-size:%%?28rpx?%%;border-left:1px solid #e0e0e0;word-break:break-all}.wxParse-td:last{border-top:1px solid #e0e0e0}.wxParse-th{background:#f0f0f0;border-top:1px solid #e0e0e0}.attr-pop-box{width:100%;height:100%;position:fixed;background:rgba(0,0,0,.5);z-index:8;bottom:0}.attr-pop{width:100%;height:%%?640rpx?%%;padding-top:%%?30rpx?%%;background:#fff;position:fixed;z-index:9;bottom:%%?0rpx?%%}.attr-pop .close{position:absolute;width:%%?48rpx?%%;height:%%?48rpx?%%;right:%%?31.25rpx?%%;overflow:hidden;top:%%?31.25rpx?%%}.attr-pop .close .icon{width:%%?48rpx?%%;height:%%?48rpx?%%}.attr-pop .img-info{width:100%;height:%%?177rpx?%%;margin-left:%%?30rpx?%%;overflow:hidden;margin-bottom:%%?41.5rpx?%%}.attr-pop .img{float:left;height:%%?177rpx?%%;width:%%?177rpx?%%;background:#f4f4f4;margin-right:%%?31.25rpx?%%}.attr-pop .info{float:left;height:%%?45rpx?%%;display:flex;color:#cc2020;font-size:%%?28rpx?%%}.attr-pop .info .c .p{color:#cc2020}.attr-pop .p{font-size:%%?33rpx?%%;color:#333;height:%%?33rpx?%%;line-height:%%?33rpx?%%;margin-bottom:%%?10rpx?%%}.attr-pop .a{font-size:%%?29rpx?%%;color:#333;height:%%?40rpx?%%;line-height:%%?40rpx?%%;position:absolute}.spec-con{width:100%;height:auto;margin-left:%%?30rpx?%%;overflow:hidden}.spec-con .name{height:%%?32rpx?%%;margin-bottom:%%?22rpx?%%;font-size:%%?29rpx?%%;color:#333;overflow:visible}.spec-con .values{height:auto;margin-bottom:%%?31.25rpx?%%;font-size:0}.spec-con .value{display:inline-block;height:%%?62rpx?%%;padding:0 %%?35rpx?%%;line-height:%%?56rpx?%%;text-align:center;margin-right:%%?25rpx?%%;margin-bottom:%%?16.5rpx?%%;border:%%?1rpx?%% solid #333;font-size:%%?25rpx?%%;color:#333}.spec-con .value.disable{border:%%?1rpx?%% solid #ccc;color:#ccc}.spec-con .value.selected{border:%%?1rpx?%% solid #b4282d;color:#b4282d}.spec-con .selected{border:%%?1rpx?%% solid #b4282d;color:#b4282d}.selected .name{color:#b4282d}.number-item .selnum{width:%%?322rpx?%%;height:%%?71rpx?%%;border:%%?1rpx?%% solid #ccc;display:flex}.number-item .cut{width:%%?93.75rpx?%%;height:100%;text-align:center;line-height:%%?65rpx?%%}.number-item .number{flex:1;height:100%;text-align:center;line-height:%%?68.75rpx?%%;border-left:%%?1rpx?%% solid #ccc;border-right:%%?1rpx?%% solid #ccc;float:left}.number-item .add{width:%%?93.75rpx?%%;height:100%;text-align:center;line-height:%%?65rpx?%%}.gray-fill{background:#f2f2f2;height:%%?15rpx?%%}.bottom-second-btn{height:%%?100rpx?%%;position:fixed;bottom:0;width:100%}.bsb-left{display:inline-block;height:inherit;width:50%;color:#fff;font-size:%%?34rpx?%%;line-height:%%?100rpx?%%;text-align:center}.bsb-right{display:inline-block;height:inherit;line-height:%%?100rpx?%%;color:#fff;width:50%;font-size:%%?34rpx?%%;background:#cc2020;color:#fffefe;text-align:center}.t .t-server-text{display:inline-block;float:left;font-size:%%?30rpx?%%;color:#333}.t .t-tip-text{display:inline-block;color:#999;font-size:%%?24rpx?%%;float:left;margin-left:%%?10rpx?%%}.section-nav .more-details{color:#999;font-size:%%?28rpx?%%;text-align:center;width:100%;height:%%?88rpx?%%;line-height:%%?88rpx?%%}.share-icon{width:%%?40rpx?%%;height:%%?40rpx?%%;float:right;margin-right:%%?60rpx?%%}.goods-item .detail-img{width:%%?750rpx?%%}.goods-desc{margin:%%?20rpx?%%}.no-more-data{text-align:center;margin:%%?20rpx?%% 0}.nodata-jump{text-align:center;display:none;position:fixed;bottom:%%?180rpx?%%;right:%%?0rpx?%%;height:%%?70rpx?%%;width:%%?125rpx?%%;line-height:%%?70rpx?%%;border-radius:%%?20rpx?%%;background:#f4f4f4;opacity:.5}.jumpTobtn{display:block}.hidden{display:none}@code-separator-line:__wxRoute = "pages/goods/goods";__wxRouteBegin = true;
define("pages/goods/goods.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var app = getApp();
var WxParse = require('../../lib/wxParse/wxParse.js');
var util = require('../../utils/util.js');
var api = require('../../config/api.js');
var user = require('../../services/user.js');
var wx_share_tmp = require('../../lib/wx/jweixin-1.0.0.js');

var Clipboard = require('../../lib/clipboard/clipboard.js');

var cart_not_permission = [null, 'binding']

Page({
  data: {
    Host: api.Host,
    id: 0,
    selected_p_id : null,
    goods: {},
    current_price:null,
    price_range:null,
    original_price:null,
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
    jumpTobtn: 'hide',
    type: null,
    cart_not_permission:false,
    bought_num: 0

  },

  getGoodsInfo: function () {
    let that = this;
    util.request(api.GoodsDetail + that.data.id +'/', {}).then(function (res) {
        console.log(res);
        WxParse.wxParse('description', 'html', res[0].description, that, 5)
        that.setData({
          goods: res[0],
          gallery: res[0].images,
          detailsGallery: res[0].detail_images,
          goodsDetail: res[0].data,
          specificationList:res[0].children,
          type:res[0].type,
          cart_not_permission: cart_not_permission.indexOf(res[0].type)
        });
        if(res[0].children.length == 0){
            that.setData({
              selected_p_id: that.data.id,
              price_range:res[0].stockrecords[0].price_retail,
              current_price:res[0].stockrecords[0].price_retail,
              original_price:res[0].stockrecords[0].original_price
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

        console.log(res, 'oiouiuiouoi');
        var limit_num_per = res[0].stockrecords[0].limit_num_per
        console.log(limit_num_per);
        if(limit_num_per){
            util.request(api.BoughtNumberProduct.replace(/{id}/, res[0].id)).then(function (res) {
                that.setData({
                  bought_num:res.count,
                });
            })
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
                title: _res.errmsg,
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
                title: _res.errmsg,
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

      var limit_num_per = that.data.goods.stockrecords[0].limit_num_per
      console.log(limit_num_per);
      console.log(that.data.bought_num);
      if(limit_num_per && (that.data.bought_num + this.data.number >limit_num_per)){
          wx.showToast({
            title: '您已购买'+that.data.bought_num+'件该商品（限购'+limit_num_per+'件）'
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
                  title: _res.errmsg,
                });
              }

            });
      }
      if(that.data.add_or_buy == 2){
          if(!Object.keys(app.global.user).length && !(typeof(WeixinJSBridge)=="undefined")){
              wx.showToast({
                title: '请先登入',
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
                  title: _res.desc,
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
            title: '购买失败',
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
                  title: '点击右上角分享',
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