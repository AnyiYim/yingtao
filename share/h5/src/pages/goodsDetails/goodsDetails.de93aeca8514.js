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
    Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]]]);Z([[6],[[7],[3, "item"]],[3, "styleStr"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]],[3, '-video']]);Z([[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "src"]]);Z([3, 'wxParseImgLoad']);Z([3, 'wxParseImgTap']);Z([[6],[[7],[3, "item"]],[3, "from"]]);Z([[6],[[7],[3, "item"]],[3, "imgIndex"]]);Z([3, 'aspectFit']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "src"]]]);Z([a, [3, 'width:'],[[6],[[7],[3, "item"]],[3, "width"]],[3, 'px;height:'],[[6],[[7],[3, "item"]],[3, "height"]],[3, 'px;'],[[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "style"]]]);Z([3, 'WxEmojiView wxParse-inline']);Z([[6],[[7],[3, "item"]],[3, "textArray"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "node"]], [1, "text"]]);Z([[2,'?:'],[[2, "=="], [[6],[[7],[3, "item"]],[3, "text"]], [1, "\n"]],[1, "wxParse-hide"],[1, ""]]);Z([a, [[6],[[7],[3, "item"]],[3, "text"]]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "node"]], [1, "element"]]);Z([3, 'wxEmoji']);Z([a, [[6],[[7],[3, "item"]],[3, "baseSrc"]],[[6],[[7],[3, "item"]],[3, "text"]]]);Z([[7],[3, "wxParseData"]]);Z([3, 'wxParse0']);Z([[8], "item", [[7],[3, "item"]]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "button"]]);Z([3, 'mini']);Z([3, 'default']);Z([[6],[[7],[3, "item"]],[3, "nodes"]]);Z([3, 'item']);Z([3, 'wxParse1']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "li"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-inner']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-text']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-circle']]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "video"]]);Z([3, 'wxParseVideo']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "img"]]);Z([3, 'wxParseImg']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "a"]]);Z([3, 'wxParseTagATap']);Z([a, [3, 'wxParse-inline '],[[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]]]);Z([[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "href"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "table"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tagType"]], [1, "block"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tagType"]]]);Z([3, 'WxEmojiView']);Z([3, 'wxParse2']);Z([3, 'wxParse3']);Z([3, 'wxParse4']);Z([3, 'wxParse5']);Z([3, 'wxParse6']);Z([3, 'wxParse7']);Z([3, 'wxParse8']);Z([3, 'wxParse9']);Z([3, 'wxParse10']);Z([3, 'wxParse11']);Z([3, 'wxParse12']);Z([3, 'container']);Z([3, 'topLoad']);Z([3, 'list']);Z([3, 'true']);Z([a, [3, 'height:'],[[7],[3, "scrollHeight"]],[3, 'px;']]);Z([3, 'details-box']);Z([3, 'details-tip']);Z([3, 'details-border']);Z([3, 'details-text']);Z([3, '商品详情']);Z([3, 'details-content']);Z([3, 'goods-desc']);Z([3, 'wxParse']);Z([[8], "wxParseData", [[6],[[7],[3, "description"]],[3, "nodes"]]]);Z([[7],[3, "detailsGallery"]]);Z([3, 'goods-item']);Z([3, 'detail-img']);Z([3, 'widthFix']);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "item"]],[3, "original"]]]);Z([3, 'no-more-data']);Z([3, ' 已经到底了']);Z([3, 'attr-pop-box']);Z([[2, "!"], [[7],[3, "openAttr"]]]);Z([3, 'attr-pop']);Z([3, 'closeAttr']);Z([3, 'close']);Z([3, 'icon']);Z([3, '/static/images/icon_close.png']);Z([3, 'img-info']);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[7],[3, "gallery"]],[1, 0]],[3, "original"]]]);Z([3, 'info']);Z([3, 'c']);Z([3, 'p']);Z([a, [3, '价格：￥'],[[6],[[6],[[6],[[7],[3, "goods"]],[3, "stockrecords"]],[1, 0]],[3, "price_retail"]]]);Z([[2, ">"], [[6],[[7],[3, "productList"]],[3, "length"]], [1, 0]]);Z([3, 'a']);Z([a, [3, '已选择：'],[[7],[3, "checkedSpecText"]]]);Z([3, 'spec-con']);Z([[7],[3, "specificationList"]]);Z([[6],[[7],[3, "item"]],[3, "specification_id"]]);Z([3, 'spec-item']);Z([3, 'name']);Z([a, [[6],[[7],[3, "item"]],[3, "name"]]]);Z([3, 'values']);Z([[6],[[7],[3, "item"]],[3, "valueList"]]);Z([3, 'vitem']);Z([[6],[[7],[3, "vitem"]],[3, "id"]]);Z([3, 'clickSkuValue']);Z([a, [3, 'value '],[[2,'?:'],[[6],[[7],[3, "vitem"]],[3, "checked"]],[1, "selected"],[1, ""]]]);Z([[6],[[7],[3, "vitem"]],[3, "specification_id"]]);Z([a, [3, '\n              '],[[6],[[7],[3, "vitem"]],[3, "value"]],[3, '\n          ']]);Z([3, 'number-item']);Z([3, '数量']);Z([3, 'selnum']);Z([3, 'cutNumber']);Z([3, 'cut']);Z([3, '-']);Z([3, 'number']);Z([[7],[3, "number"]]);Z([3, 'addNumber']);Z([3, 'add']);Z([3, '+']);Z([3, 'bottom-second-btn']);Z([3, 'bsb-left']);Z([3, '\x26nbsp;']);Z([3, 'goCreateOrder']);Z([3, 'bsb-right']);Z([3, '确认']);Z([3, 'bottom-btn']);Z([3, 'l l-customserver']);Z([3, 'l-imgaes']);Z([3, '/static/images/first_page/details_customeservice.png']);Z([3, 'l-text']);Z([3, '客服']);Z([3, 'addCannelCollect']);Z([3, 'l l-collect']);Z([[7],[3, "collectBackImage"]]);Z([3, '收藏']);Z([3, 'l l-cart']);Z([3, 'cart-count']);Z([a, [[7],[3, "cartGoodsCount"]]]);Z([3, 'openCartPage']);Z([3, '/static/images/first_page/details_shoppingcar.png']);Z([3, '购物车']);Z([3, 'addToCart']);Z([3, 'r']);Z([3, '加入购物车']);Z([3, 'buy']);Z([3, '立即购买']);
  })(z);d_["./lib/wxParse/wxParse.wxml"] = {};d_["./lib/wxParse/wxParse.wxml"]["wxParseVideo"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParseVideo'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var ozOB = _m( "view", ["class", 0,"style", 1], e, s, gg);var o_OB = _m( "video", ["class", 2,"src", 1], e, s, gg);_(ozOB,o_OB);_(r,ozOB);
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
      var oBPB = _m( "image", ["class", 0,"data-src", 3,"bindload", 1,"bindtap", 2,"data-from", 3,"data-idx", 4,"mode", 5,"src", 6,"style", 7], e, s, gg);_(r,oBPB);
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
      var oDPB = _m( "view", ["style", 1,"class", 10], e, s, gg);var oEPB = _v();var oFPB = function(oJPB,oIPB,oHPB,gg){var oLPB = _v();
      if (_o(13, oJPB, oIPB, gg)) {
        oLPB.wxVkey = 1;var oOPB = _o(15, oJPB, oIPB, gg);_(oLPB,oOPB);
      }else if (_o(16, oJPB, oIPB, gg)) {
        oLPB.wxVkey = 2;var oRPB = _m( "image", ["class", 17,"src", 1], e, s, gg);_(oLPB,oRPB);
      } _(oHPB,oLPB);return oHPB;};_2(12, oFPB, e, s, gg, oEPB, "item", "index", '');_(oDPB,oEPB);_(r,oDPB);
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
      var oTPB = _v();var oUPB = function(oYPB,oXPB,oWPB,gg){var oaPB = _v();
       var obPB = _o(20, oYPB, oXPB, gg);
       var odPB = _gd('./lib/wxParse/wxParse.wxml', obPB, e_, d_);
       if (odPB) {
         var ocPB = _1(21,oYPB,oXPB,gg);
         odPB(ocPB,ocPB,oaPB, gg);
       } else _w(obPB, './lib/wxParse/wxParse.wxml', 0, 0);_(oWPB,oaPB);return oWPB;};_2(19, oUPB, e, s, gg, oTPB, "item", "index", '');_(r,oTPB);
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
      var ofPB = _v();
      if (_o(16, e, s, gg)) {
        ofPB.wxVkey = 1;var oiPB = _v();
      if (_o(22, e, s, gg)) {
        oiPB.wxVkey = 1;var olPB = _m( "button", ["size", 23,"type", 1], e, s, gg);var omPB = _v();var onPB = function(orPB,oqPB,opPB,gg){var otPB = _v();
       var ouPB = _o(27, orPB, oqPB, gg);
       var owPB = _gd('./lib/wxParse/wxParse.wxml', ouPB, e_, d_);
       if (owPB) {
         var ovPB = _1(21,orPB,oqPB,gg);
         owPB(ovPB,ovPB,otPB, gg);
       } else _w(ouPB, './lib/wxParse/wxParse.wxml', 0, 0);_(opPB,otPB);return opPB;};_2(25, onPB, e, s, gg, omPB, "item", "index", '');_(olPB,omPB);_(oiPB,olPB);
      }else if (_o(28, e, s, gg)) {
        oiPB.wxVkey = 2;var ozPB = _n("view");_r(ozPB, 'class', 29, e, s, gg);var o_PB = _n("view");_r(o_PB, 'class', 30, e, s, gg);var oAQB = _n("view");_r(oAQB, 'class', 31, e, s, gg);var oBQB = _n("view");_r(oBQB, 'class', 32, e, s, gg);_(oAQB,oBQB);_(o_PB,oAQB);var oCQB = _n("view");_r(oCQB, 'class', 31, e, s, gg);var oDQB = _v();var oEQB = function(oIQB,oHQB,oGQB,gg){var oKQB = _v();
       var oLQB = _o(27, oIQB, oHQB, gg);
       var oNQB = _gd('./lib/wxParse/wxParse.wxml', oLQB, e_, d_);
       if (oNQB) {
         var oMQB = _1(21,oIQB,oHQB,gg);
         oNQB(oMQB,oMQB,oKQB, gg);
       } else _w(oLQB, './lib/wxParse/wxParse.wxml', 0, 0);_(oGQB,oKQB);return oGQB;};_2(25, oEQB, e, s, gg, oDQB, "item", "index", '');_(oCQB,oDQB);_(o_PB,oCQB);_(ozPB,o_PB);_(oiPB,ozPB);
      }else if (_o(33, e, s, gg)) {
        oiPB.wxVkey = 3;var oQQB = _v();
       var oRQB = _o(34, e, s, gg);
       var oTQB = _gd('./lib/wxParse/wxParse.wxml', oRQB, e_, d_);
       if (oTQB) {
         var oSQB = _1(21,e,s,gg);
         oTQB(oSQB,oSQB,oQQB, gg);
       } else _w(oRQB, './lib/wxParse/wxParse.wxml', 0, 0);_(oiPB,oQQB);
      }else if (_o(35, e, s, gg)) {
        oiPB.wxVkey = 4;var oWQB = _v();
       var oXQB = _o(36, e, s, gg);
       var oZQB = _gd('./lib/wxParse/wxParse.wxml', oXQB, e_, d_);
       if (oZQB) {
         var oYQB = _1(21,e,s,gg);
         oZQB(oYQB,oYQB,oWQB, gg);
       } else _w(oXQB, './lib/wxParse/wxParse.wxml', 0, 0);_(oiPB,oWQB);
      }else if (_o(37, e, s, gg)) {
        oiPB.wxVkey = 5;var ocQB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-c", 39], e, s, gg);var odQB = _v();var oeQB = function(oiQB,ohQB,ogQB,gg){var okQB = _v();
       var olQB = _o(27, oiQB, ohQB, gg);
       var onQB = _gd('./lib/wxParse/wxParse.wxml', olQB, e_, d_);
       if (onQB) {
         var omQB = _1(21,oiQB,ohQB,gg);
         onQB(omQB,omQB,okQB, gg);
       } else _w(olQB, './lib/wxParse/wxParse.wxml', 0, 0);_(ogQB,okQB);return ogQB;};_2(25, oeQB, e, s, gg, odQB, "item", "index", '');_(ocQB,odQB);_(oiPB,ocQB);
      }else if (_o(41, e, s, gg)) {
        oiPB.wxVkey = 6;var oqQB = _m( "view", ["class", 0,"style", 1], e, s, gg);var orQB = _v();var osQB = function(owQB,ovQB,ouQB,gg){var oyQB = _v();
       var ozQB = _o(27, owQB, ovQB, gg);
       var oARB = _gd('./lib/wxParse/wxParse.wxml', ozQB, e_, d_);
       if (oARB) {
         var o_QB = _1(21,owQB,ovQB,gg);
         oARB(o_QB,o_QB,oyQB, gg);
       } else _w(ozQB, './lib/wxParse/wxParse.wxml', 0, 0);_(ouQB,oyQB);return ouQB;};_2(25, osQB, e, s, gg, orQB, "item", "index", '');_(oqQB,orQB);_(oiPB,oqQB);
      }else if (_o(42, e, s, gg)) {
        oiPB.wxVkey = 7;var oDRB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oERB = _v();var oFRB = function(oJRB,oIRB,oHRB,gg){var oLRB = _v();
       var oMRB = _o(27, oJRB, oIRB, gg);
       var oORB = _gd('./lib/wxParse/wxParse.wxml', oMRB, e_, d_);
       if (oORB) {
         var oNRB = _1(21,oJRB,oIRB,gg);
         oORB(oNRB,oNRB,oLRB, gg);
       } else _w(oMRB, './lib/wxParse/wxParse.wxml', 0, 0);_(oHRB,oLRB);return oHRB;};_2(25, oFRB, e, s, gg, oERB, "item", "index", '');_(oDRB,oERB);_(oiPB,oDRB);
      }else {
        oiPB.wxVkey = 8;var oPRB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oRRB = _v();var oSRB = function(oWRB,oVRB,oURB,gg){var oYRB = _v();
       var oZRB = _o(27, oWRB, oVRB, gg);
       var obRB = _gd('./lib/wxParse/wxParse.wxml', oZRB, e_, d_);
       if (obRB) {
         var oaRB = _1(21,oWRB,oVRB,gg);
         obRB(oaRB,oaRB,oYRB, gg);
       } else _w(oZRB, './lib/wxParse/wxParse.wxml', 0, 0);_(oURB,oYRB);return oURB;};_2(25, oSRB, e, s, gg, oRRB, "item", "index", '');_(oPRB,oRRB);_(oiPB, oPRB);
      }_(ofPB,oiPB);
      }else if (_o(13, e, s, gg)) {
        ofPB.wxVkey = 2;var oeRB = _v();
       var ofRB = _o(44, e, s, gg);
       var ohRB = _gd('./lib/wxParse/wxParse.wxml', ofRB, e_, d_);
       if (ohRB) {
         var ogRB = _1(21,e,s,gg);
         ohRB(ogRB,ogRB,oeRB, gg);
       } else _w(ofRB, './lib/wxParse/wxParse.wxml', 0, 0);_(ofPB,oeRB);
      } _(r,ofPB);
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
      var ojRB = _v();
      if (_o(16, e, s, gg)) {
        ojRB.wxVkey = 1;var omRB = _v();
      if (_o(22, e, s, gg)) {
        omRB.wxVkey = 1;var opRB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oqRB = _v();var orRB = function(ovRB,ouRB,otRB,gg){var oxRB = _v();
       var oyRB = _o(45, ovRB, ouRB, gg);
       var o_RB = _gd('./lib/wxParse/wxParse.wxml', oyRB, e_, d_);
       if (o_RB) {
         var ozRB = _1(21,ovRB,ouRB,gg);
         o_RB(ozRB,ozRB,oxRB, gg);
       } else _w(oyRB, './lib/wxParse/wxParse.wxml', 0, 0);_(otRB,oxRB);return otRB;};_2(25, orRB, e, s, gg, oqRB, "item", "index", '');_(opRB,oqRB);_(omRB,opRB);
      }else if (_o(28, e, s, gg)) {
        omRB.wxVkey = 2;var oCSB = _n("view");_r(oCSB, 'class', 29, e, s, gg);var oDSB = _n("view");_r(oDSB, 'class', 30, e, s, gg);var oESB = _n("view");_r(oESB, 'class', 31, e, s, gg);var oFSB = _n("view");_r(oFSB, 'class', 32, e, s, gg);_(oESB,oFSB);_(oDSB,oESB);var oGSB = _n("view");_r(oGSB, 'class', 31, e, s, gg);var oHSB = _v();var oISB = function(oMSB,oLSB,oKSB,gg){var oOSB = _v();
       var oPSB = _o(45, oMSB, oLSB, gg);
       var oRSB = _gd('./lib/wxParse/wxParse.wxml', oPSB, e_, d_);
       if (oRSB) {
         var oQSB = _1(21,oMSB,oLSB,gg);
         oRSB(oQSB,oQSB,oOSB, gg);
       } else _w(oPSB, './lib/wxParse/wxParse.wxml', 0, 0);_(oKSB,oOSB);return oKSB;};_2(25, oISB, e, s, gg, oHSB, "item", "index", '');_(oGSB,oHSB);_(oDSB,oGSB);_(oCSB,oDSB);_(omRB,oCSB);
      }else if (_o(33, e, s, gg)) {
        omRB.wxVkey = 3;var oUSB = _v();
       var oVSB = _o(34, e, s, gg);
       var oXSB = _gd('./lib/wxParse/wxParse.wxml', oVSB, e_, d_);
       if (oXSB) {
         var oWSB = _1(21,e,s,gg);
         oXSB(oWSB,oWSB,oUSB, gg);
       } else _w(oVSB, './lib/wxParse/wxParse.wxml', 0, 0);_(omRB,oUSB);
      }else if (_o(35, e, s, gg)) {
        omRB.wxVkey = 4;var oaSB = _v();
       var obSB = _o(36, e, s, gg);
       var odSB = _gd('./lib/wxParse/wxParse.wxml', obSB, e_, d_);
       if (odSB) {
         var ocSB = _1(21,e,s,gg);
         odSB(ocSB,ocSB,oaSB, gg);
       } else _w(obSB, './lib/wxParse/wxParse.wxml', 0, 0);_(omRB,oaSB);
      }else if (_o(37, e, s, gg)) {
        omRB.wxVkey = 5;var ogSB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ohSB = _v();var oiSB = function(omSB,olSB,okSB,gg){var ooSB = _v();
       var opSB = _o(45, omSB, olSB, gg);
       var orSB = _gd('./lib/wxParse/wxParse.wxml', opSB, e_, d_);
       if (orSB) {
         var oqSB = _1(21,omSB,olSB,gg);
         orSB(oqSB,oqSB,ooSB, gg);
       } else _w(opSB, './lib/wxParse/wxParse.wxml', 0, 0);_(okSB,ooSB);return okSB;};_2(25, oiSB, e, s, gg, ohSB, "item", "index", '');_(ogSB,ohSB);_(omRB,ogSB);
      }else if (_o(42, e, s, gg)) {
        omRB.wxVkey = 6;var ouSB = _m( "view", ["class", 0,"style", 1], e, s, gg);var ovSB = _v();var owSB = function(o_SB,ozSB,oySB,gg){var oBTB = _v();
       var oCTB = _o(45, o_SB, ozSB, gg);
       var oETB = _gd('./lib/wxParse/wxParse.wxml', oCTB, e_, d_);
       if (oETB) {
         var oDTB = _1(21,o_SB,ozSB,gg);
         oETB(oDTB,oDTB,oBTB, gg);
       } else _w(oCTB, './lib/wxParse/wxParse.wxml', 0, 0);_(oySB,oBTB);return oySB;};_2(25, owSB, e, s, gg, ovSB, "item", "index", '');_(ouSB,ovSB);_(omRB,ouSB);
      }else {
        omRB.wxVkey = 7;var oFTB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oHTB = _v();var oITB = function(oMTB,oLTB,oKTB,gg){var oOTB = _v();
       var oPTB = _o(45, oMTB, oLTB, gg);
       var oRTB = _gd('./lib/wxParse/wxParse.wxml', oPTB, e_, d_);
       if (oRTB) {
         var oQTB = _1(21,oMTB,oLTB,gg);
         oRTB(oQTB,oQTB,oOTB, gg);
       } else _w(oPTB, './lib/wxParse/wxParse.wxml', 0, 0);_(oKTB,oOTB);return oKTB;};_2(25, oITB, e, s, gg, oHTB, "item", "index", '');_(oFTB,oHTB);_(omRB, oFTB);
      }_(ojRB,omRB);
      }else if (_o(13, e, s, gg)) {
        ojRB.wxVkey = 2;var oUTB = _v();
       var oVTB = _o(44, e, s, gg);
       var oXTB = _gd('./lib/wxParse/wxParse.wxml', oVTB, e_, d_);
       if (oXTB) {
         var oWTB = _1(21,e,s,gg);
         oXTB(oWTB,oWTB,oUTB, gg);
       } else _w(oVTB, './lib/wxParse/wxParse.wxml', 0, 0);_(ojRB,oUTB);
      } _(r,ojRB);
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
      var oZTB = _v();
      if (_o(16, e, s, gg)) {
        oZTB.wxVkey = 1;var ocTB = _v();
      if (_o(22, e, s, gg)) {
        ocTB.wxVkey = 1;var ofTB = _m( "button", ["size", 23,"type", 1], e, s, gg);var ogTB = _v();var ohTB = function(olTB,okTB,ojTB,gg){var onTB = _v();
       var ooTB = _o(46, olTB, okTB, gg);
       var oqTB = _gd('./lib/wxParse/wxParse.wxml', ooTB, e_, d_);
       if (oqTB) {
         var opTB = _1(21,olTB,okTB,gg);
         oqTB(opTB,opTB,onTB, gg);
       } else _w(ooTB, './lib/wxParse/wxParse.wxml', 0, 0);_(ojTB,onTB);return ojTB;};_2(25, ohTB, e, s, gg, ogTB, "item", "index", '');_(ofTB,ogTB);_(ocTB,ofTB);
      }else if (_o(28, e, s, gg)) {
        ocTB.wxVkey = 2;var otTB = _n("view");_r(otTB, 'class', 29, e, s, gg);var ouTB = _n("view");_r(ouTB, 'class', 30, e, s, gg);var ovTB = _n("view");_r(ovTB, 'class', 31, e, s, gg);var owTB = _n("view");_r(owTB, 'class', 32, e, s, gg);_(ovTB,owTB);_(ouTB,ovTB);var oxTB = _n("view");_r(oxTB, 'class', 31, e, s, gg);var oyTB = _v();var ozTB = function(oCUB,oBUB,oAUB,gg){var oEUB = _v();
       var oFUB = _o(46, oCUB, oBUB, gg);
       var oHUB = _gd('./lib/wxParse/wxParse.wxml', oFUB, e_, d_);
       if (oHUB) {
         var oGUB = _1(21,oCUB,oBUB,gg);
         oHUB(oGUB,oGUB,oEUB, gg);
       } else _w(oFUB, './lib/wxParse/wxParse.wxml', 0, 0);_(oAUB,oEUB);return oAUB;};_2(25, ozTB, e, s, gg, oyTB, "item", "index", '');_(oxTB,oyTB);_(ouTB,oxTB);_(otTB,ouTB);_(ocTB,otTB);
      }else if (_o(33, e, s, gg)) {
        ocTB.wxVkey = 3;var oKUB = _v();
       var oLUB = _o(34, e, s, gg);
       var oNUB = _gd('./lib/wxParse/wxParse.wxml', oLUB, e_, d_);
       if (oNUB) {
         var oMUB = _1(21,e,s,gg);
         oNUB(oMUB,oMUB,oKUB, gg);
       } else _w(oLUB, './lib/wxParse/wxParse.wxml', 0, 0);_(ocTB,oKUB);
      }else if (_o(35, e, s, gg)) {
        ocTB.wxVkey = 4;var oQUB = _v();
       var oRUB = _o(36, e, s, gg);
       var oTUB = _gd('./lib/wxParse/wxParse.wxml', oRUB, e_, d_);
       if (oTUB) {
         var oSUB = _1(21,e,s,gg);
         oTUB(oSUB,oSUB,oQUB, gg);
       } else _w(oRUB, './lib/wxParse/wxParse.wxml', 0, 0);_(ocTB,oQUB);
      }else if (_o(37, e, s, gg)) {
        ocTB.wxVkey = 5;var oWUB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oXUB = _v();var oYUB = function(ocUB,obUB,oaUB,gg){var oeUB = _v();
       var ofUB = _o(46, ocUB, obUB, gg);
       var ohUB = _gd('./lib/wxParse/wxParse.wxml', ofUB, e_, d_);
       if (ohUB) {
         var ogUB = _1(21,ocUB,obUB,gg);
         ohUB(ogUB,ogUB,oeUB, gg);
       } else _w(ofUB, './lib/wxParse/wxParse.wxml', 0, 0);_(oaUB,oeUB);return oaUB;};_2(25, oYUB, e, s, gg, oXUB, "item", "index", '');_(oWUB,oXUB);_(ocTB,oWUB);
      }else if (_o(42, e, s, gg)) {
        ocTB.wxVkey = 6;var okUB = _m( "view", ["class", 0,"style", 1], e, s, gg);var olUB = _v();var omUB = function(oqUB,opUB,ooUB,gg){var osUB = _v();
       var otUB = _o(46, oqUB, opUB, gg);
       var ovUB = _gd('./lib/wxParse/wxParse.wxml', otUB, e_, d_);
       if (ovUB) {
         var ouUB = _1(21,oqUB,opUB,gg);
         ovUB(ouUB,ouUB,osUB, gg);
       } else _w(otUB, './lib/wxParse/wxParse.wxml', 0, 0);_(ooUB,osUB);return ooUB;};_2(25, omUB, e, s, gg, olUB, "item", "index", '');_(okUB,olUB);_(ocTB,okUB);
      }else {
        ocTB.wxVkey = 7;var owUB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oyUB = _v();var ozUB = function(oCVB,oBVB,oAVB,gg){var oEVB = _v();
       var oFVB = _o(46, oCVB, oBVB, gg);
       var oHVB = _gd('./lib/wxParse/wxParse.wxml', oFVB, e_, d_);
       if (oHVB) {
         var oGVB = _1(21,oCVB,oBVB,gg);
         oHVB(oGVB,oGVB,oEVB, gg);
       } else _w(oFVB, './lib/wxParse/wxParse.wxml', 0, 0);_(oAVB,oEVB);return oAVB;};_2(25, ozUB, e, s, gg, oyUB, "item", "index", '');_(owUB,oyUB);_(ocTB, owUB);
      }_(oZTB,ocTB);
      }else if (_o(13, e, s, gg)) {
        oZTB.wxVkey = 2;var oKVB = _v();
       var oLVB = _o(44, e, s, gg);
       var oNVB = _gd('./lib/wxParse/wxParse.wxml', oLVB, e_, d_);
       if (oNVB) {
         var oMVB = _1(21,e,s,gg);
         oNVB(oMVB,oMVB,oKVB, gg);
       } else _w(oLVB, './lib/wxParse/wxParse.wxml', 0, 0);_(oZTB,oKVB);
      } _(r,oZTB);
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
      var oPVB = _v();
      if (_o(16, e, s, gg)) {
        oPVB.wxVkey = 1;var oSVB = _v();
      if (_o(22, e, s, gg)) {
        oSVB.wxVkey = 1;var oVVB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oWVB = _v();var oXVB = function(obVB,oaVB,oZVB,gg){var odVB = _v();
       var oeVB = _o(47, obVB, oaVB, gg);
       var ogVB = _gd('./lib/wxParse/wxParse.wxml', oeVB, e_, d_);
       if (ogVB) {
         var ofVB = _1(21,obVB,oaVB,gg);
         ogVB(ofVB,ofVB,odVB, gg);
       } else _w(oeVB, './lib/wxParse/wxParse.wxml', 0, 0);_(oZVB,odVB);return oZVB;};_2(25, oXVB, e, s, gg, oWVB, "item", "index", '');_(oVVB,oWVB);_(oSVB,oVVB);
      }else if (_o(28, e, s, gg)) {
        oSVB.wxVkey = 2;var ojVB = _n("view");_r(ojVB, 'class', 29, e, s, gg);var okVB = _n("view");_r(okVB, 'class', 30, e, s, gg);var olVB = _n("view");_r(olVB, 'class', 31, e, s, gg);var omVB = _n("view");_r(omVB, 'class', 32, e, s, gg);_(olVB,omVB);_(okVB,olVB);var onVB = _n("view");_r(onVB, 'class', 31, e, s, gg);var ooVB = _v();var opVB = function(otVB,osVB,orVB,gg){var ovVB = _v();
       var owVB = _o(47, otVB, osVB, gg);
       var oyVB = _gd('./lib/wxParse/wxParse.wxml', owVB, e_, d_);
       if (oyVB) {
         var oxVB = _1(21,otVB,osVB,gg);
         oyVB(oxVB,oxVB,ovVB, gg);
       } else _w(owVB, './lib/wxParse/wxParse.wxml', 0, 0);_(orVB,ovVB);return orVB;};_2(25, opVB, e, s, gg, ooVB, "item", "index", '');_(onVB,ooVB);_(okVB,onVB);_(ojVB,okVB);_(oSVB,ojVB);
      }else if (_o(33, e, s, gg)) {
        oSVB.wxVkey = 3;var oAWB = _v();
       var oBWB = _o(34, e, s, gg);
       var oDWB = _gd('./lib/wxParse/wxParse.wxml', oBWB, e_, d_);
       if (oDWB) {
         var oCWB = _1(21,e,s,gg);
         oDWB(oCWB,oCWB,oAWB, gg);
       } else _w(oBWB, './lib/wxParse/wxParse.wxml', 0, 0);_(oSVB,oAWB);
      }else if (_o(35, e, s, gg)) {
        oSVB.wxVkey = 4;var oGWB = _v();
       var oHWB = _o(36, e, s, gg);
       var oJWB = _gd('./lib/wxParse/wxParse.wxml', oHWB, e_, d_);
       if (oJWB) {
         var oIWB = _1(21,e,s,gg);
         oJWB(oIWB,oIWB,oGWB, gg);
       } else _w(oHWB, './lib/wxParse/wxParse.wxml', 0, 0);_(oSVB,oGWB);
      }else if (_o(37, e, s, gg)) {
        oSVB.wxVkey = 5;var oMWB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oNWB = _v();var oOWB = function(oSWB,oRWB,oQWB,gg){var oUWB = _v();
       var oVWB = _o(47, oSWB, oRWB, gg);
       var oXWB = _gd('./lib/wxParse/wxParse.wxml', oVWB, e_, d_);
       if (oXWB) {
         var oWWB = _1(21,oSWB,oRWB,gg);
         oXWB(oWWB,oWWB,oUWB, gg);
       } else _w(oVWB, './lib/wxParse/wxParse.wxml', 0, 0);_(oQWB,oUWB);return oQWB;};_2(25, oOWB, e, s, gg, oNWB, "item", "index", '');_(oMWB,oNWB);_(oSVB,oMWB);
      }else if (_o(42, e, s, gg)) {
        oSVB.wxVkey = 6;var oaWB = _m( "view", ["class", 0,"style", 1], e, s, gg);var obWB = _v();var ocWB = function(ogWB,ofWB,oeWB,gg){var oiWB = _v();
       var ojWB = _o(47, ogWB, ofWB, gg);
       var olWB = _gd('./lib/wxParse/wxParse.wxml', ojWB, e_, d_);
       if (olWB) {
         var okWB = _1(21,ogWB,ofWB,gg);
         olWB(okWB,okWB,oiWB, gg);
       } else _w(ojWB, './lib/wxParse/wxParse.wxml', 0, 0);_(oeWB,oiWB);return oeWB;};_2(25, ocWB, e, s, gg, obWB, "item", "index", '');_(oaWB,obWB);_(oSVB,oaWB);
      }else {
        oSVB.wxVkey = 7;var omWB = _m( "view", ["style", 1,"class", 42], e, s, gg);var ooWB = _v();var opWB = function(otWB,osWB,orWB,gg){var ovWB = _v();
       var owWB = _o(47, otWB, osWB, gg);
       var oyWB = _gd('./lib/wxParse/wxParse.wxml', owWB, e_, d_);
       if (oyWB) {
         var oxWB = _1(21,otWB,osWB,gg);
         oyWB(oxWB,oxWB,ovWB, gg);
       } else _w(owWB, './lib/wxParse/wxParse.wxml', 0, 0);_(orWB,ovWB);return orWB;};_2(25, opWB, e, s, gg, ooWB, "item", "index", '');_(omWB,ooWB);_(oSVB, omWB);
      }_(oPVB,oSVB);
      }else if (_o(13, e, s, gg)) {
        oPVB.wxVkey = 2;var oAXB = _v();
       var oBXB = _o(44, e, s, gg);
       var oDXB = _gd('./lib/wxParse/wxParse.wxml', oBXB, e_, d_);
       if (oDXB) {
         var oCXB = _1(21,e,s,gg);
         oDXB(oCXB,oCXB,oAXB, gg);
       } else _w(oBXB, './lib/wxParse/wxParse.wxml', 0, 0);_(oPVB,oAXB);
      } _(r,oPVB);
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
      var oFXB = _v();
      if (_o(16, e, s, gg)) {
        oFXB.wxVkey = 1;var oIXB = _v();
      if (_o(22, e, s, gg)) {
        oIXB.wxVkey = 1;var oLXB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oMXB = _v();var oNXB = function(oRXB,oQXB,oPXB,gg){var oTXB = _v();
       var oUXB = _o(48, oRXB, oQXB, gg);
       var oWXB = _gd('./lib/wxParse/wxParse.wxml', oUXB, e_, d_);
       if (oWXB) {
         var oVXB = _1(21,oRXB,oQXB,gg);
         oWXB(oVXB,oVXB,oTXB, gg);
       } else _w(oUXB, './lib/wxParse/wxParse.wxml', 0, 0);_(oPXB,oTXB);return oPXB;};_2(25, oNXB, e, s, gg, oMXB, "item", "index", '');_(oLXB,oMXB);_(oIXB,oLXB);
      }else if (_o(28, e, s, gg)) {
        oIXB.wxVkey = 2;var oZXB = _n("view");_r(oZXB, 'class', 29, e, s, gg);var oaXB = _n("view");_r(oaXB, 'class', 30, e, s, gg);var obXB = _n("view");_r(obXB, 'class', 31, e, s, gg);var ocXB = _n("view");_r(ocXB, 'class', 32, e, s, gg);_(obXB,ocXB);_(oaXB,obXB);var odXB = _n("view");_r(odXB, 'class', 31, e, s, gg);var oeXB = _v();var ofXB = function(ojXB,oiXB,ohXB,gg){var olXB = _v();
       var omXB = _o(48, ojXB, oiXB, gg);
       var ooXB = _gd('./lib/wxParse/wxParse.wxml', omXB, e_, d_);
       if (ooXB) {
         var onXB = _1(21,ojXB,oiXB,gg);
         ooXB(onXB,onXB,olXB, gg);
       } else _w(omXB, './lib/wxParse/wxParse.wxml', 0, 0);_(ohXB,olXB);return ohXB;};_2(25, ofXB, e, s, gg, oeXB, "item", "index", '');_(odXB,oeXB);_(oaXB,odXB);_(oZXB,oaXB);_(oIXB,oZXB);
      }else if (_o(33, e, s, gg)) {
        oIXB.wxVkey = 3;var orXB = _v();
       var osXB = _o(34, e, s, gg);
       var ouXB = _gd('./lib/wxParse/wxParse.wxml', osXB, e_, d_);
       if (ouXB) {
         var otXB = _1(21,e,s,gg);
         ouXB(otXB,otXB,orXB, gg);
       } else _w(osXB, './lib/wxParse/wxParse.wxml', 0, 0);_(oIXB,orXB);
      }else if (_o(35, e, s, gg)) {
        oIXB.wxVkey = 4;var oxXB = _v();
       var oyXB = _o(36, e, s, gg);
       var o_XB = _gd('./lib/wxParse/wxParse.wxml', oyXB, e_, d_);
       if (o_XB) {
         var ozXB = _1(21,e,s,gg);
         o_XB(ozXB,ozXB,oxXB, gg);
       } else _w(oyXB, './lib/wxParse/wxParse.wxml', 0, 0);_(oIXB,oxXB);
      }else if (_o(37, e, s, gg)) {
        oIXB.wxVkey = 5;var oCYB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oDYB = _v();var oEYB = function(oIYB,oHYB,oGYB,gg){var oKYB = _v();
       var oLYB = _o(48, oIYB, oHYB, gg);
       var oNYB = _gd('./lib/wxParse/wxParse.wxml', oLYB, e_, d_);
       if (oNYB) {
         var oMYB = _1(21,oIYB,oHYB,gg);
         oNYB(oMYB,oMYB,oKYB, gg);
       } else _w(oLYB, './lib/wxParse/wxParse.wxml', 0, 0);_(oGYB,oKYB);return oGYB;};_2(25, oEYB, e, s, gg, oDYB, "item", "index", '');_(oCYB,oDYB);_(oIXB,oCYB);
      }else if (_o(42, e, s, gg)) {
        oIXB.wxVkey = 6;var oQYB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oRYB = _v();var oSYB = function(oWYB,oVYB,oUYB,gg){var oYYB = _v();
       var oZYB = _o(48, oWYB, oVYB, gg);
       var obYB = _gd('./lib/wxParse/wxParse.wxml', oZYB, e_, d_);
       if (obYB) {
         var oaYB = _1(21,oWYB,oVYB,gg);
         obYB(oaYB,oaYB,oYYB, gg);
       } else _w(oZYB, './lib/wxParse/wxParse.wxml', 0, 0);_(oUYB,oYYB);return oUYB;};_2(25, oSYB, e, s, gg, oRYB, "item", "index", '');_(oQYB,oRYB);_(oIXB,oQYB);
      }else {
        oIXB.wxVkey = 7;var ocYB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oeYB = _v();var ofYB = function(ojYB,oiYB,ohYB,gg){var olYB = _v();
       var omYB = _o(48, ojYB, oiYB, gg);
       var ooYB = _gd('./lib/wxParse/wxParse.wxml', omYB, e_, d_);
       if (ooYB) {
         var onYB = _1(21,ojYB,oiYB,gg);
         ooYB(onYB,onYB,olYB, gg);
       } else _w(omYB, './lib/wxParse/wxParse.wxml', 0, 0);_(ohYB,olYB);return ohYB;};_2(25, ofYB, e, s, gg, oeYB, "item", "index", '');_(ocYB,oeYB);_(oIXB, ocYB);
      }_(oFXB,oIXB);
      }else if (_o(13, e, s, gg)) {
        oFXB.wxVkey = 2;var orYB = _v();
       var osYB = _o(44, e, s, gg);
       var ouYB = _gd('./lib/wxParse/wxParse.wxml', osYB, e_, d_);
       if (ouYB) {
         var otYB = _1(21,e,s,gg);
         ouYB(otYB,otYB,orYB, gg);
       } else _w(osYB, './lib/wxParse/wxParse.wxml', 0, 0);_(oFXB,orYB);
      } _(r,oFXB);
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
      var owYB = _v();
      if (_o(16, e, s, gg)) {
        owYB.wxVkey = 1;var ozYB = _v();
      if (_o(22, e, s, gg)) {
        ozYB.wxVkey = 1;var oBZB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oCZB = _v();var oDZB = function(oHZB,oGZB,oFZB,gg){var oJZB = _v();
       var oKZB = _o(49, oHZB, oGZB, gg);
       var oMZB = _gd('./lib/wxParse/wxParse.wxml', oKZB, e_, d_);
       if (oMZB) {
         var oLZB = _1(21,oHZB,oGZB,gg);
         oMZB(oLZB,oLZB,oJZB, gg);
       } else _w(oKZB, './lib/wxParse/wxParse.wxml', 0, 0);_(oFZB,oJZB);return oFZB;};_2(25, oDZB, e, s, gg, oCZB, "item", "index", '');_(oBZB,oCZB);_(ozYB,oBZB);
      }else if (_o(28, e, s, gg)) {
        ozYB.wxVkey = 2;var oPZB = _n("view");_r(oPZB, 'class', 29, e, s, gg);var oQZB = _n("view");_r(oQZB, 'class', 30, e, s, gg);var oRZB = _n("view");_r(oRZB, 'class', 31, e, s, gg);var oSZB = _n("view");_r(oSZB, 'class', 32, e, s, gg);_(oRZB,oSZB);_(oQZB,oRZB);var oTZB = _n("view");_r(oTZB, 'class', 31, e, s, gg);var oUZB = _v();var oVZB = function(oZZB,oYZB,oXZB,gg){var obZB = _v();
       var ocZB = _o(49, oZZB, oYZB, gg);
       var oeZB = _gd('./lib/wxParse/wxParse.wxml', ocZB, e_, d_);
       if (oeZB) {
         var odZB = _1(21,oZZB,oYZB,gg);
         oeZB(odZB,odZB,obZB, gg);
       } else _w(ocZB, './lib/wxParse/wxParse.wxml', 0, 0);_(oXZB,obZB);return oXZB;};_2(25, oVZB, e, s, gg, oUZB, "item", "index", '');_(oTZB,oUZB);_(oQZB,oTZB);_(oPZB,oQZB);_(ozYB,oPZB);
      }else if (_o(33, e, s, gg)) {
        ozYB.wxVkey = 3;var ohZB = _v();
       var oiZB = _o(34, e, s, gg);
       var okZB = _gd('./lib/wxParse/wxParse.wxml', oiZB, e_, d_);
       if (okZB) {
         var ojZB = _1(21,e,s,gg);
         okZB(ojZB,ojZB,ohZB, gg);
       } else _w(oiZB, './lib/wxParse/wxParse.wxml', 0, 0);_(ozYB,ohZB);
      }else if (_o(35, e, s, gg)) {
        ozYB.wxVkey = 4;var onZB = _v();
       var ooZB = _o(36, e, s, gg);
       var oqZB = _gd('./lib/wxParse/wxParse.wxml', ooZB, e_, d_);
       if (oqZB) {
         var opZB = _1(21,e,s,gg);
         oqZB(opZB,opZB,onZB, gg);
       } else _w(ooZB, './lib/wxParse/wxParse.wxml', 0, 0);_(ozYB,onZB);
      }else if (_o(37, e, s, gg)) {
        ozYB.wxVkey = 5;var otZB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ouZB = _v();var ovZB = function(ozZB,oyZB,oxZB,gg){var oAaB = _v();
       var oBaB = _o(49, ozZB, oyZB, gg);
       var oDaB = _gd('./lib/wxParse/wxParse.wxml', oBaB, e_, d_);
       if (oDaB) {
         var oCaB = _1(21,ozZB,oyZB,gg);
         oDaB(oCaB,oCaB,oAaB, gg);
       } else _w(oBaB, './lib/wxParse/wxParse.wxml', 0, 0);_(oxZB,oAaB);return oxZB;};_2(25, ovZB, e, s, gg, ouZB, "item", "index", '');_(otZB,ouZB);_(ozYB,otZB);
      }else if (_o(42, e, s, gg)) {
        ozYB.wxVkey = 6;var oGaB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oHaB = _v();var oIaB = function(oMaB,oLaB,oKaB,gg){var oOaB = _v();
       var oPaB = _o(49, oMaB, oLaB, gg);
       var oRaB = _gd('./lib/wxParse/wxParse.wxml', oPaB, e_, d_);
       if (oRaB) {
         var oQaB = _1(21,oMaB,oLaB,gg);
         oRaB(oQaB,oQaB,oOaB, gg);
       } else _w(oPaB, './lib/wxParse/wxParse.wxml', 0, 0);_(oKaB,oOaB);return oKaB;};_2(25, oIaB, e, s, gg, oHaB, "item", "index", '');_(oGaB,oHaB);_(ozYB,oGaB);
      }else {
        ozYB.wxVkey = 7;var oSaB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oUaB = _v();var oVaB = function(oZaB,oYaB,oXaB,gg){var obaB = _v();
       var ocaB = _o(49, oZaB, oYaB, gg);
       var oeaB = _gd('./lib/wxParse/wxParse.wxml', ocaB, e_, d_);
       if (oeaB) {
         var odaB = _1(21,oZaB,oYaB,gg);
         oeaB(odaB,odaB,obaB, gg);
       } else _w(ocaB, './lib/wxParse/wxParse.wxml', 0, 0);_(oXaB,obaB);return oXaB;};_2(25, oVaB, e, s, gg, oUaB, "item", "index", '');_(oSaB,oUaB);_(ozYB, oSaB);
      }_(owYB,ozYB);
      }else if (_o(13, e, s, gg)) {
        owYB.wxVkey = 2;var ohaB = _v();
       var oiaB = _o(44, e, s, gg);
       var okaB = _gd('./lib/wxParse/wxParse.wxml', oiaB, e_, d_);
       if (okaB) {
         var ojaB = _1(21,e,s,gg);
         okaB(ojaB,ojaB,ohaB, gg);
       } else _w(oiaB, './lib/wxParse/wxParse.wxml', 0, 0);_(owYB,ohaB);
      } _(r,owYB);
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
      var omaB = _v();
      if (_o(16, e, s, gg)) {
        omaB.wxVkey = 1;var opaB = _v();
      if (_o(22, e, s, gg)) {
        opaB.wxVkey = 1;var osaB = _m( "button", ["size", 23,"type", 1], e, s, gg);var otaB = _v();var ouaB = function(oyaB,oxaB,owaB,gg){var o_aB = _v();
       var oAbB = _o(50, oyaB, oxaB, gg);
       var oCbB = _gd('./lib/wxParse/wxParse.wxml', oAbB, e_, d_);
       if (oCbB) {
         var oBbB = _1(21,oyaB,oxaB,gg);
         oCbB(oBbB,oBbB,o_aB, gg);
       } else _w(oAbB, './lib/wxParse/wxParse.wxml', 0, 0);_(owaB,o_aB);return owaB;};_2(25, ouaB, e, s, gg, otaB, "item", "index", '');_(osaB,otaB);_(opaB,osaB);
      }else if (_o(28, e, s, gg)) {
        opaB.wxVkey = 2;var oFbB = _n("view");_r(oFbB, 'class', 29, e, s, gg);var oGbB = _n("view");_r(oGbB, 'class', 30, e, s, gg);var oHbB = _n("view");_r(oHbB, 'class', 31, e, s, gg);var oIbB = _n("view");_r(oIbB, 'class', 32, e, s, gg);_(oHbB,oIbB);_(oGbB,oHbB);var oJbB = _n("view");_r(oJbB, 'class', 31, e, s, gg);var oKbB = _v();var oLbB = function(oPbB,oObB,oNbB,gg){var oRbB = _v();
       var oSbB = _o(50, oPbB, oObB, gg);
       var oUbB = _gd('./lib/wxParse/wxParse.wxml', oSbB, e_, d_);
       if (oUbB) {
         var oTbB = _1(21,oPbB,oObB,gg);
         oUbB(oTbB,oTbB,oRbB, gg);
       } else _w(oSbB, './lib/wxParse/wxParse.wxml', 0, 0);_(oNbB,oRbB);return oNbB;};_2(25, oLbB, e, s, gg, oKbB, "item", "index", '');_(oJbB,oKbB);_(oGbB,oJbB);_(oFbB,oGbB);_(opaB,oFbB);
      }else if (_o(33, e, s, gg)) {
        opaB.wxVkey = 3;var oXbB = _v();
       var oYbB = _o(34, e, s, gg);
       var oabB = _gd('./lib/wxParse/wxParse.wxml', oYbB, e_, d_);
       if (oabB) {
         var oZbB = _1(21,e,s,gg);
         oabB(oZbB,oZbB,oXbB, gg);
       } else _w(oYbB, './lib/wxParse/wxParse.wxml', 0, 0);_(opaB,oXbB);
      }else if (_o(35, e, s, gg)) {
        opaB.wxVkey = 4;var odbB = _v();
       var oebB = _o(36, e, s, gg);
       var ogbB = _gd('./lib/wxParse/wxParse.wxml', oebB, e_, d_);
       if (ogbB) {
         var ofbB = _1(21,e,s,gg);
         ogbB(ofbB,ofbB,odbB, gg);
       } else _w(oebB, './lib/wxParse/wxParse.wxml', 0, 0);_(opaB,odbB);
      }else if (_o(37, e, s, gg)) {
        opaB.wxVkey = 5;var ojbB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var okbB = _v();var olbB = function(opbB,oobB,onbB,gg){var orbB = _v();
       var osbB = _o(50, opbB, oobB, gg);
       var oubB = _gd('./lib/wxParse/wxParse.wxml', osbB, e_, d_);
       if (oubB) {
         var otbB = _1(21,opbB,oobB,gg);
         oubB(otbB,otbB,orbB, gg);
       } else _w(osbB, './lib/wxParse/wxParse.wxml', 0, 0);_(onbB,orbB);return onbB;};_2(25, olbB, e, s, gg, okbB, "item", "index", '');_(ojbB,okbB);_(opaB,ojbB);
      }else if (_o(42, e, s, gg)) {
        opaB.wxVkey = 6;var oxbB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oybB = _v();var ozbB = function(oCcB,oBcB,oAcB,gg){var oEcB = _v();
       var oFcB = _o(50, oCcB, oBcB, gg);
       var oHcB = _gd('./lib/wxParse/wxParse.wxml', oFcB, e_, d_);
       if (oHcB) {
         var oGcB = _1(21,oCcB,oBcB,gg);
         oHcB(oGcB,oGcB,oEcB, gg);
       } else _w(oFcB, './lib/wxParse/wxParse.wxml', 0, 0);_(oAcB,oEcB);return oAcB;};_2(25, ozbB, e, s, gg, oybB, "item", "index", '');_(oxbB,oybB);_(opaB,oxbB);
      }else {
        opaB.wxVkey = 7;var oIcB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oKcB = _v();var oLcB = function(oPcB,oOcB,oNcB,gg){var oRcB = _v();
       var oScB = _o(50, oPcB, oOcB, gg);
       var oUcB = _gd('./lib/wxParse/wxParse.wxml', oScB, e_, d_);
       if (oUcB) {
         var oTcB = _1(21,oPcB,oOcB,gg);
         oUcB(oTcB,oTcB,oRcB, gg);
       } else _w(oScB, './lib/wxParse/wxParse.wxml', 0, 0);_(oNcB,oRcB);return oNcB;};_2(25, oLcB, e, s, gg, oKcB, "item", "index", '');_(oIcB,oKcB);_(opaB, oIcB);
      }_(omaB,opaB);
      }else if (_o(13, e, s, gg)) {
        omaB.wxVkey = 2;var oXcB = _v();
       var oYcB = _o(44, e, s, gg);
       var oacB = _gd('./lib/wxParse/wxParse.wxml', oYcB, e_, d_);
       if (oacB) {
         var oZcB = _1(21,e,s,gg);
         oacB(oZcB,oZcB,oXcB, gg);
       } else _w(oYcB, './lib/wxParse/wxParse.wxml', 0, 0);_(omaB,oXcB);
      } _(r,omaB);
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
      var occB = _v();
      if (_o(16, e, s, gg)) {
        occB.wxVkey = 1;var ofcB = _v();
      if (_o(22, e, s, gg)) {
        ofcB.wxVkey = 1;var oicB = _m( "button", ["size", 23,"type", 1], e, s, gg);var ojcB = _v();var okcB = function(oocB,oncB,omcB,gg){var oqcB = _v();
       var orcB = _o(51, oocB, oncB, gg);
       var otcB = _gd('./lib/wxParse/wxParse.wxml', orcB, e_, d_);
       if (otcB) {
         var oscB = _1(21,oocB,oncB,gg);
         otcB(oscB,oscB,oqcB, gg);
       } else _w(orcB, './lib/wxParse/wxParse.wxml', 0, 0);_(omcB,oqcB);return omcB;};_2(25, okcB, e, s, gg, ojcB, "item", "index", '');_(oicB,ojcB);_(ofcB,oicB);
      }else if (_o(28, e, s, gg)) {
        ofcB.wxVkey = 2;var owcB = _n("view");_r(owcB, 'class', 29, e, s, gg);var oxcB = _n("view");_r(oxcB, 'class', 30, e, s, gg);var oycB = _n("view");_r(oycB, 'class', 31, e, s, gg);var ozcB = _n("view");_r(ozcB, 'class', 32, e, s, gg);_(oycB,ozcB);_(oxcB,oycB);var o_cB = _n("view");_r(o_cB, 'class', 31, e, s, gg);var oAdB = _v();var oBdB = function(oFdB,oEdB,oDdB,gg){var oHdB = _v();
       var oIdB = _o(51, oFdB, oEdB, gg);
       var oKdB = _gd('./lib/wxParse/wxParse.wxml', oIdB, e_, d_);
       if (oKdB) {
         var oJdB = _1(21,oFdB,oEdB,gg);
         oKdB(oJdB,oJdB,oHdB, gg);
       } else _w(oIdB, './lib/wxParse/wxParse.wxml', 0, 0);_(oDdB,oHdB);return oDdB;};_2(25, oBdB, e, s, gg, oAdB, "item", "index", '');_(o_cB,oAdB);_(oxcB,o_cB);_(owcB,oxcB);_(ofcB,owcB);
      }else if (_o(33, e, s, gg)) {
        ofcB.wxVkey = 3;var oNdB = _v();
       var oOdB = _o(34, e, s, gg);
       var oQdB = _gd('./lib/wxParse/wxParse.wxml', oOdB, e_, d_);
       if (oQdB) {
         var oPdB = _1(21,e,s,gg);
         oQdB(oPdB,oPdB,oNdB, gg);
       } else _w(oOdB, './lib/wxParse/wxParse.wxml', 0, 0);_(ofcB,oNdB);
      }else if (_o(35, e, s, gg)) {
        ofcB.wxVkey = 4;var oTdB = _v();
       var oUdB = _o(36, e, s, gg);
       var oWdB = _gd('./lib/wxParse/wxParse.wxml', oUdB, e_, d_);
       if (oWdB) {
         var oVdB = _1(21,e,s,gg);
         oWdB(oVdB,oVdB,oTdB, gg);
       } else _w(oUdB, './lib/wxParse/wxParse.wxml', 0, 0);_(ofcB,oTdB);
      }else if (_o(37, e, s, gg)) {
        ofcB.wxVkey = 5;var oZdB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oadB = _v();var obdB = function(ofdB,oedB,oddB,gg){var ohdB = _v();
       var oidB = _o(51, ofdB, oedB, gg);
       var okdB = _gd('./lib/wxParse/wxParse.wxml', oidB, e_, d_);
       if (okdB) {
         var ojdB = _1(21,ofdB,oedB,gg);
         okdB(ojdB,ojdB,ohdB, gg);
       } else _w(oidB, './lib/wxParse/wxParse.wxml', 0, 0);_(oddB,ohdB);return oddB;};_2(25, obdB, e, s, gg, oadB, "item", "index", '');_(oZdB,oadB);_(ofcB,oZdB);
      }else if (_o(42, e, s, gg)) {
        ofcB.wxVkey = 6;var ondB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oodB = _v();var opdB = function(otdB,osdB,ordB,gg){var ovdB = _v();
       var owdB = _o(51, otdB, osdB, gg);
       var oydB = _gd('./lib/wxParse/wxParse.wxml', owdB, e_, d_);
       if (oydB) {
         var oxdB = _1(21,otdB,osdB,gg);
         oydB(oxdB,oxdB,ovdB, gg);
       } else _w(owdB, './lib/wxParse/wxParse.wxml', 0, 0);_(ordB,ovdB);return ordB;};_2(25, opdB, e, s, gg, oodB, "item", "index", '');_(ondB,oodB);_(ofcB,ondB);
      }else {
        ofcB.wxVkey = 7;var ozdB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oAeB = _v();var oBeB = function(oFeB,oEeB,oDeB,gg){var oHeB = _v();
       var oIeB = _o(51, oFeB, oEeB, gg);
       var oKeB = _gd('./lib/wxParse/wxParse.wxml', oIeB, e_, d_);
       if (oKeB) {
         var oJeB = _1(21,oFeB,oEeB,gg);
         oKeB(oJeB,oJeB,oHeB, gg);
       } else _w(oIeB, './lib/wxParse/wxParse.wxml', 0, 0);_(oDeB,oHeB);return oDeB;};_2(25, oBeB, e, s, gg, oAeB, "item", "index", '');_(ozdB,oAeB);_(ofcB, ozdB);
      }_(occB,ofcB);
      }else if (_o(13, e, s, gg)) {
        occB.wxVkey = 2;var oNeB = _v();
       var oOeB = _o(44, e, s, gg);
       var oQeB = _gd('./lib/wxParse/wxParse.wxml', oOeB, e_, d_);
       if (oQeB) {
         var oPeB = _1(21,e,s,gg);
         oQeB(oPeB,oPeB,oNeB, gg);
       } else _w(oOeB, './lib/wxParse/wxParse.wxml', 0, 0);_(occB,oNeB);
      } _(r,occB);
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
      var oSeB = _v();
      if (_o(16, e, s, gg)) {
        oSeB.wxVkey = 1;var oVeB = _v();
      if (_o(22, e, s, gg)) {
        oVeB.wxVkey = 1;var oYeB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oZeB = _v();var oaeB = function(oeeB,odeB,oceB,gg){var ogeB = _v();
       var oheB = _o(52, oeeB, odeB, gg);
       var ojeB = _gd('./lib/wxParse/wxParse.wxml', oheB, e_, d_);
       if (ojeB) {
         var oieB = _1(21,oeeB,odeB,gg);
         ojeB(oieB,oieB,ogeB, gg);
       } else _w(oheB, './lib/wxParse/wxParse.wxml', 0, 0);_(oceB,ogeB);return oceB;};_2(25, oaeB, e, s, gg, oZeB, "item", "index", '');_(oYeB,oZeB);_(oVeB,oYeB);
      }else if (_o(28, e, s, gg)) {
        oVeB.wxVkey = 2;var omeB = _n("view");_r(omeB, 'class', 29, e, s, gg);var oneB = _n("view");_r(oneB, 'class', 30, e, s, gg);var ooeB = _n("view");_r(ooeB, 'class', 31, e, s, gg);var opeB = _n("view");_r(opeB, 'class', 32, e, s, gg);_(ooeB,opeB);_(oneB,ooeB);var oqeB = _n("view");_r(oqeB, 'class', 31, e, s, gg);var oreB = _v();var oseB = function(oweB,oveB,oueB,gg){var oyeB = _v();
       var ozeB = _o(52, oweB, oveB, gg);
       var oAfB = _gd('./lib/wxParse/wxParse.wxml', ozeB, e_, d_);
       if (oAfB) {
         var o_eB = _1(21,oweB,oveB,gg);
         oAfB(o_eB,o_eB,oyeB, gg);
       } else _w(ozeB, './lib/wxParse/wxParse.wxml', 0, 0);_(oueB,oyeB);return oueB;};_2(25, oseB, e, s, gg, oreB, "item", "index", '');_(oqeB,oreB);_(oneB,oqeB);_(omeB,oneB);_(oVeB,omeB);
      }else if (_o(33, e, s, gg)) {
        oVeB.wxVkey = 3;var oDfB = _v();
       var oEfB = _o(34, e, s, gg);
       var oGfB = _gd('./lib/wxParse/wxParse.wxml', oEfB, e_, d_);
       if (oGfB) {
         var oFfB = _1(21,e,s,gg);
         oGfB(oFfB,oFfB,oDfB, gg);
       } else _w(oEfB, './lib/wxParse/wxParse.wxml', 0, 0);_(oVeB,oDfB);
      }else if (_o(35, e, s, gg)) {
        oVeB.wxVkey = 4;var oJfB = _v();
       var oKfB = _o(36, e, s, gg);
       var oMfB = _gd('./lib/wxParse/wxParse.wxml', oKfB, e_, d_);
       if (oMfB) {
         var oLfB = _1(21,e,s,gg);
         oMfB(oLfB,oLfB,oJfB, gg);
       } else _w(oKfB, './lib/wxParse/wxParse.wxml', 0, 0);_(oVeB,oJfB);
      }else if (_o(37, e, s, gg)) {
        oVeB.wxVkey = 5;var oPfB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oQfB = _v();var oRfB = function(oVfB,oUfB,oTfB,gg){var oXfB = _v();
       var oYfB = _o(52, oVfB, oUfB, gg);
       var oafB = _gd('./lib/wxParse/wxParse.wxml', oYfB, e_, d_);
       if (oafB) {
         var oZfB = _1(21,oVfB,oUfB,gg);
         oafB(oZfB,oZfB,oXfB, gg);
       } else _w(oYfB, './lib/wxParse/wxParse.wxml', 0, 0);_(oTfB,oXfB);return oTfB;};_2(25, oRfB, e, s, gg, oQfB, "item", "index", '');_(oPfB,oQfB);_(oVeB,oPfB);
      }else if (_o(42, e, s, gg)) {
        oVeB.wxVkey = 6;var odfB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oefB = _v();var offB = function(ojfB,oifB,ohfB,gg){var olfB = _v();
       var omfB = _o(52, ojfB, oifB, gg);
       var oofB = _gd('./lib/wxParse/wxParse.wxml', omfB, e_, d_);
       if (oofB) {
         var onfB = _1(21,ojfB,oifB,gg);
         oofB(onfB,onfB,olfB, gg);
       } else _w(omfB, './lib/wxParse/wxParse.wxml', 0, 0);_(ohfB,olfB);return ohfB;};_2(25, offB, e, s, gg, oefB, "item", "index", '');_(odfB,oefB);_(oVeB,odfB);
      }else {
        oVeB.wxVkey = 7;var opfB = _m( "view", ["style", 1,"class", 42], e, s, gg);var orfB = _v();var osfB = function(owfB,ovfB,oufB,gg){var oyfB = _v();
       var ozfB = _o(52, owfB, ovfB, gg);
       var oAgB = _gd('./lib/wxParse/wxParse.wxml', ozfB, e_, d_);
       if (oAgB) {
         var o_fB = _1(21,owfB,ovfB,gg);
         oAgB(o_fB,o_fB,oyfB, gg);
       } else _w(ozfB, './lib/wxParse/wxParse.wxml', 0, 0);_(oufB,oyfB);return oufB;};_2(25, osfB, e, s, gg, orfB, "item", "index", '');_(opfB,orfB);_(oVeB, opfB);
      }_(oSeB,oVeB);
      }else if (_o(13, e, s, gg)) {
        oSeB.wxVkey = 2;var oDgB = _v();
       var oEgB = _o(44, e, s, gg);
       var oGgB = _gd('./lib/wxParse/wxParse.wxml', oEgB, e_, d_);
       if (oGgB) {
         var oFgB = _1(21,e,s,gg);
         oGgB(oFgB,oFgB,oDgB, gg);
       } else _w(oEgB, './lib/wxParse/wxParse.wxml', 0, 0);_(oSeB,oDgB);
      } _(r,oSeB);
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
      var oIgB = _v();
      if (_o(16, e, s, gg)) {
        oIgB.wxVkey = 1;var oLgB = _v();
      if (_o(22, e, s, gg)) {
        oLgB.wxVkey = 1;var oOgB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oPgB = _v();var oQgB = function(oUgB,oTgB,oSgB,gg){var oWgB = _v();
       var oXgB = _o(53, oUgB, oTgB, gg);
       var oZgB = _gd('./lib/wxParse/wxParse.wxml', oXgB, e_, d_);
       if (oZgB) {
         var oYgB = _1(21,oUgB,oTgB,gg);
         oZgB(oYgB,oYgB,oWgB, gg);
       } else _w(oXgB, './lib/wxParse/wxParse.wxml', 0, 0);_(oSgB,oWgB);return oSgB;};_2(25, oQgB, e, s, gg, oPgB, "item", "index", '');_(oOgB,oPgB);_(oLgB,oOgB);
      }else if (_o(28, e, s, gg)) {
        oLgB.wxVkey = 2;var ocgB = _n("view");_r(ocgB, 'class', 29, e, s, gg);var odgB = _n("view");_r(odgB, 'class', 30, e, s, gg);var oegB = _n("view");_r(oegB, 'class', 31, e, s, gg);var ofgB = _n("view");_r(ofgB, 'class', 32, e, s, gg);_(oegB,ofgB);_(odgB,oegB);var oggB = _n("view");_r(oggB, 'class', 31, e, s, gg);var ohgB = _v();var oigB = function(omgB,olgB,okgB,gg){var oogB = _v();
       var opgB = _o(53, omgB, olgB, gg);
       var orgB = _gd('./lib/wxParse/wxParse.wxml', opgB, e_, d_);
       if (orgB) {
         var oqgB = _1(21,omgB,olgB,gg);
         orgB(oqgB,oqgB,oogB, gg);
       } else _w(opgB, './lib/wxParse/wxParse.wxml', 0, 0);_(okgB,oogB);return okgB;};_2(25, oigB, e, s, gg, ohgB, "item", "index", '');_(oggB,ohgB);_(odgB,oggB);_(ocgB,odgB);_(oLgB,ocgB);
      }else if (_o(33, e, s, gg)) {
        oLgB.wxVkey = 3;var ougB = _v();
       var ovgB = _o(34, e, s, gg);
       var oxgB = _gd('./lib/wxParse/wxParse.wxml', ovgB, e_, d_);
       if (oxgB) {
         var owgB = _1(21,e,s,gg);
         oxgB(owgB,owgB,ougB, gg);
       } else _w(ovgB, './lib/wxParse/wxParse.wxml', 0, 0);_(oLgB,ougB);
      }else if (_o(35, e, s, gg)) {
        oLgB.wxVkey = 4;var o_gB = _v();
       var oAhB = _o(36, e, s, gg);
       var oChB = _gd('./lib/wxParse/wxParse.wxml', oAhB, e_, d_);
       if (oChB) {
         var oBhB = _1(21,e,s,gg);
         oChB(oBhB,oBhB,o_gB, gg);
       } else _w(oAhB, './lib/wxParse/wxParse.wxml', 0, 0);_(oLgB,o_gB);
      }else if (_o(37, e, s, gg)) {
        oLgB.wxVkey = 5;var oFhB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oGhB = _v();var oHhB = function(oLhB,oKhB,oJhB,gg){var oNhB = _v();
       var oOhB = _o(53, oLhB, oKhB, gg);
       var oQhB = _gd('./lib/wxParse/wxParse.wxml', oOhB, e_, d_);
       if (oQhB) {
         var oPhB = _1(21,oLhB,oKhB,gg);
         oQhB(oPhB,oPhB,oNhB, gg);
       } else _w(oOhB, './lib/wxParse/wxParse.wxml', 0, 0);_(oJhB,oNhB);return oJhB;};_2(25, oHhB, e, s, gg, oGhB, "item", "index", '');_(oFhB,oGhB);_(oLgB,oFhB);
      }else if (_o(42, e, s, gg)) {
        oLgB.wxVkey = 6;var oThB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oUhB = _v();var oVhB = function(oZhB,oYhB,oXhB,gg){var obhB = _v();
       var ochB = _o(53, oZhB, oYhB, gg);
       var oehB = _gd('./lib/wxParse/wxParse.wxml', ochB, e_, d_);
       if (oehB) {
         var odhB = _1(21,oZhB,oYhB,gg);
         oehB(odhB,odhB,obhB, gg);
       } else _w(ochB, './lib/wxParse/wxParse.wxml', 0, 0);_(oXhB,obhB);return oXhB;};_2(25, oVhB, e, s, gg, oUhB, "item", "index", '');_(oThB,oUhB);_(oLgB,oThB);
      }else {
        oLgB.wxVkey = 7;var ofhB = _m( "view", ["style", 1,"class", 42], e, s, gg);var ohhB = _v();var oihB = function(omhB,olhB,okhB,gg){var oohB = _v();
       var ophB = _o(53, omhB, olhB, gg);
       var orhB = _gd('./lib/wxParse/wxParse.wxml', ophB, e_, d_);
       if (orhB) {
         var oqhB = _1(21,omhB,olhB,gg);
         orhB(oqhB,oqhB,oohB, gg);
       } else _w(ophB, './lib/wxParse/wxParse.wxml', 0, 0);_(okhB,oohB);return okhB;};_2(25, oihB, e, s, gg, ohhB, "item", "index", '');_(ofhB,ohhB);_(oLgB, ofhB);
      }_(oIgB,oLgB);
      }else if (_o(13, e, s, gg)) {
        oIgB.wxVkey = 2;var ouhB = _v();
       var ovhB = _o(44, e, s, gg);
       var oxhB = _gd('./lib/wxParse/wxParse.wxml', ovhB, e_, d_);
       if (oxhB) {
         var owhB = _1(21,e,s,gg);
         oxhB(owhB,owhB,ouhB, gg);
       } else _w(ovhB, './lib/wxParse/wxParse.wxml', 0, 0);_(oIgB,ouhB);
      } _(r,oIgB);
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
      var ozhB = _v();
      if (_o(16, e, s, gg)) {
        ozhB.wxVkey = 1;var oBiB = _v();
      if (_o(22, e, s, gg)) {
        oBiB.wxVkey = 1;var oEiB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oFiB = _v();var oGiB = function(oKiB,oJiB,oIiB,gg){var oMiB = _v();
       var oNiB = _o(54, oKiB, oJiB, gg);
       var oPiB = _gd('./lib/wxParse/wxParse.wxml', oNiB, e_, d_);
       if (oPiB) {
         var oOiB = _1(21,oKiB,oJiB,gg);
         oPiB(oOiB,oOiB,oMiB, gg);
       } else _w(oNiB, './lib/wxParse/wxParse.wxml', 0, 0);_(oIiB,oMiB);return oIiB;};_2(25, oGiB, e, s, gg, oFiB, "item", "index", '');_(oEiB,oFiB);_(oBiB,oEiB);
      }else if (_o(28, e, s, gg)) {
        oBiB.wxVkey = 2;var oSiB = _n("view");_r(oSiB, 'class', 29, e, s, gg);var oTiB = _n("view");_r(oTiB, 'class', 30, e, s, gg);var oUiB = _n("view");_r(oUiB, 'class', 31, e, s, gg);var oViB = _n("view");_r(oViB, 'class', 32, e, s, gg);_(oUiB,oViB);_(oTiB,oUiB);var oWiB = _n("view");_r(oWiB, 'class', 31, e, s, gg);var oXiB = _v();var oYiB = function(ociB,obiB,oaiB,gg){var oeiB = _v();
       var ofiB = _o(54, ociB, obiB, gg);
       var ohiB = _gd('./lib/wxParse/wxParse.wxml', ofiB, e_, d_);
       if (ohiB) {
         var ogiB = _1(21,ociB,obiB,gg);
         ohiB(ogiB,ogiB,oeiB, gg);
       } else _w(ofiB, './lib/wxParse/wxParse.wxml', 0, 0);_(oaiB,oeiB);return oaiB;};_2(25, oYiB, e, s, gg, oXiB, "item", "index", '');_(oWiB,oXiB);_(oTiB,oWiB);_(oSiB,oTiB);_(oBiB,oSiB);
      }else if (_o(33, e, s, gg)) {
        oBiB.wxVkey = 3;var okiB = _v();
       var oliB = _o(34, e, s, gg);
       var oniB = _gd('./lib/wxParse/wxParse.wxml', oliB, e_, d_);
       if (oniB) {
         var omiB = _1(21,e,s,gg);
         oniB(omiB,omiB,okiB, gg);
       } else _w(oliB, './lib/wxParse/wxParse.wxml', 0, 0);_(oBiB,okiB);
      }else if (_o(35, e, s, gg)) {
        oBiB.wxVkey = 4;var oqiB = _v();
       var oriB = _o(36, e, s, gg);
       var otiB = _gd('./lib/wxParse/wxParse.wxml', oriB, e_, d_);
       if (otiB) {
         var osiB = _1(21,e,s,gg);
         otiB(osiB,osiB,oqiB, gg);
       } else _w(oriB, './lib/wxParse/wxParse.wxml', 0, 0);_(oBiB,oqiB);
      }else if (_o(37, e, s, gg)) {
        oBiB.wxVkey = 5;var owiB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oxiB = _v();var oyiB = function(oBjB,oAjB,o_iB,gg){var oDjB = _v();
       var oEjB = _o(54, oBjB, oAjB, gg);
       var oGjB = _gd('./lib/wxParse/wxParse.wxml', oEjB, e_, d_);
       if (oGjB) {
         var oFjB = _1(21,oBjB,oAjB,gg);
         oGjB(oFjB,oFjB,oDjB, gg);
       } else _w(oEjB, './lib/wxParse/wxParse.wxml', 0, 0);_(o_iB,oDjB);return o_iB;};_2(25, oyiB, e, s, gg, oxiB, "item", "index", '');_(owiB,oxiB);_(oBiB,owiB);
      }else if (_o(42, e, s, gg)) {
        oBiB.wxVkey = 6;var oJjB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oKjB = _v();var oLjB = function(oPjB,oOjB,oNjB,gg){var oRjB = _v();
       var oSjB = _o(54, oPjB, oOjB, gg);
       var oUjB = _gd('./lib/wxParse/wxParse.wxml', oSjB, e_, d_);
       if (oUjB) {
         var oTjB = _1(21,oPjB,oOjB,gg);
         oUjB(oTjB,oTjB,oRjB, gg);
       } else _w(oSjB, './lib/wxParse/wxParse.wxml', 0, 0);_(oNjB,oRjB);return oNjB;};_2(25, oLjB, e, s, gg, oKjB, "item", "index", '');_(oJjB,oKjB);_(oBiB,oJjB);
      }else {
        oBiB.wxVkey = 7;var oVjB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oXjB = _v();var oYjB = function(ocjB,objB,oajB,gg){var oejB = _v();
       var ofjB = _o(54, ocjB, objB, gg);
       var ohjB = _gd('./lib/wxParse/wxParse.wxml', ofjB, e_, d_);
       if (ohjB) {
         var ogjB = _1(21,ocjB,objB,gg);
         ohjB(ogjB,ogjB,oejB, gg);
       } else _w(ofjB, './lib/wxParse/wxParse.wxml', 0, 0);_(oajB,oejB);return oajB;};_2(25, oYjB, e, s, gg, oXjB, "item", "index", '');_(oVjB,oXjB);_(oBiB, oVjB);
      }_(ozhB,oBiB);
      }else if (_o(13, e, s, gg)) {
        ozhB.wxVkey = 2;var okjB = _v();
       var oljB = _o(44, e, s, gg);
       var onjB = _gd('./lib/wxParse/wxParse.wxml', oljB, e_, d_);
       if (onjB) {
         var omjB = _1(21,e,s,gg);
         onjB(omjB,omjB,okjB, gg);
       } else _w(oljB, './lib/wxParse/wxParse.wxml', 0, 0);_(ozhB,okjB);
      } _(r,ozhB);
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
      var opjB = _v();
      if (_o(16, e, s, gg)) {
        opjB.wxVkey = 1;var osjB = _v();
      if (_o(22, e, s, gg)) {
        osjB.wxVkey = 1;var ovjB = _m( "button", ["size", 23,"type", 1], e, s, gg);var owjB = _v();var oxjB = function(oAkB,o_jB,ozjB,gg){var oCkB = _v();
       var oDkB = _o(55, oAkB, o_jB, gg);
       var oFkB = _gd('./lib/wxParse/wxParse.wxml', oDkB, e_, d_);
       if (oFkB) {
         var oEkB = _1(21,oAkB,o_jB,gg);
         oFkB(oEkB,oEkB,oCkB, gg);
       } else _w(oDkB, './lib/wxParse/wxParse.wxml', 0, 0);_(ozjB,oCkB);return ozjB;};_2(25, oxjB, e, s, gg, owjB, "item", "index", '');_(ovjB,owjB);_(osjB,ovjB);
      }else if (_o(28, e, s, gg)) {
        osjB.wxVkey = 2;var oIkB = _n("view");_r(oIkB, 'class', 29, e, s, gg);var oJkB = _n("view");_r(oJkB, 'class', 30, e, s, gg);var oKkB = _n("view");_r(oKkB, 'class', 31, e, s, gg);var oLkB = _n("view");_r(oLkB, 'class', 32, e, s, gg);_(oKkB,oLkB);_(oJkB,oKkB);var oMkB = _n("view");_r(oMkB, 'class', 31, e, s, gg);var oNkB = _v();var oOkB = function(oSkB,oRkB,oQkB,gg){var oUkB = _v();
       var oVkB = _o(55, oSkB, oRkB, gg);
       var oXkB = _gd('./lib/wxParse/wxParse.wxml', oVkB, e_, d_);
       if (oXkB) {
         var oWkB = _1(21,oSkB,oRkB,gg);
         oXkB(oWkB,oWkB,oUkB, gg);
       } else _w(oVkB, './lib/wxParse/wxParse.wxml', 0, 0);_(oQkB,oUkB);return oQkB;};_2(25, oOkB, e, s, gg, oNkB, "item", "index", '');_(oMkB,oNkB);_(oJkB,oMkB);_(oIkB,oJkB);_(osjB,oIkB);
      }else if (_o(33, e, s, gg)) {
        osjB.wxVkey = 3;var oakB = _v();
       var obkB = _o(34, e, s, gg);
       var odkB = _gd('./lib/wxParse/wxParse.wxml', obkB, e_, d_);
       if (odkB) {
         var ockB = _1(21,e,s,gg);
         odkB(ockB,ockB,oakB, gg);
       } else _w(obkB, './lib/wxParse/wxParse.wxml', 0, 0);_(osjB,oakB);
      }else if (_o(35, e, s, gg)) {
        osjB.wxVkey = 4;var ogkB = _v();
       var ohkB = _o(36, e, s, gg);
       var ojkB = _gd('./lib/wxParse/wxParse.wxml', ohkB, e_, d_);
       if (ojkB) {
         var oikB = _1(21,e,s,gg);
         ojkB(oikB,oikB,ogkB, gg);
       } else _w(ohkB, './lib/wxParse/wxParse.wxml', 0, 0);_(osjB,ogkB);
      }else if (_o(37, e, s, gg)) {
        osjB.wxVkey = 5;var omkB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var onkB = _v();var ookB = function(oskB,orkB,oqkB,gg){var oukB = _v();
       var ovkB = _o(55, oskB, orkB, gg);
       var oxkB = _gd('./lib/wxParse/wxParse.wxml', ovkB, e_, d_);
       if (oxkB) {
         var owkB = _1(21,oskB,orkB,gg);
         oxkB(owkB,owkB,oukB, gg);
       } else _w(ovkB, './lib/wxParse/wxParse.wxml', 0, 0);_(oqkB,oukB);return oqkB;};_2(25, ookB, e, s, gg, onkB, "item", "index", '');_(omkB,onkB);_(osjB,omkB);
      }else if (_o(42, e, s, gg)) {
        osjB.wxVkey = 6;var o_kB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oAlB = _v();var oBlB = function(oFlB,oElB,oDlB,gg){var oHlB = _v();
       var oIlB = _o(55, oFlB, oElB, gg);
       var oKlB = _gd('./lib/wxParse/wxParse.wxml', oIlB, e_, d_);
       if (oKlB) {
         var oJlB = _1(21,oFlB,oElB,gg);
         oKlB(oJlB,oJlB,oHlB, gg);
       } else _w(oIlB, './lib/wxParse/wxParse.wxml', 0, 0);_(oDlB,oHlB);return oDlB;};_2(25, oBlB, e, s, gg, oAlB, "item", "index", '');_(o_kB,oAlB);_(osjB,o_kB);
      }else {
        osjB.wxVkey = 7;var oLlB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oNlB = _v();var oOlB = function(oSlB,oRlB,oQlB,gg){var oUlB = _v();
       var oVlB = _o(55, oSlB, oRlB, gg);
       var oXlB = _gd('./lib/wxParse/wxParse.wxml', oVlB, e_, d_);
       if (oXlB) {
         var oWlB = _1(21,oSlB,oRlB,gg);
         oXlB(oWlB,oWlB,oUlB, gg);
       } else _w(oVlB, './lib/wxParse/wxParse.wxml', 0, 0);_(oQlB,oUlB);return oQlB;};_2(25, oOlB, e, s, gg, oNlB, "item", "index", '');_(oLlB,oNlB);_(osjB, oLlB);
      }_(opjB,osjB);
      }else if (_o(13, e, s, gg)) {
        opjB.wxVkey = 2;var oalB = _v();
       var oblB = _o(44, e, s, gg);
       var odlB = _gd('./lib/wxParse/wxParse.wxml', oblB, e_, d_);
       if (odlB) {
         var oclB = _1(21,e,s,gg);
         odlB(oclB,oclB,oalB, gg);
       } else _w(oblB, './lib/wxParse/wxParse.wxml', 0, 0);_(opjB,oalB);
      } _(r,opjB);
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
        e_["./lib/wxParse/wxParse.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};d_["./pages/goodsDetails/goodsDetails.wxml"] = {};
  var m1=function(e,s,r,gg){
    var ovlB = e_["./pages/goodsDetails/goodsDetails.wxml"].i;var owlB = _n("view");_r(owlB, 'class', 56, e, s, gg);var oxlB = _m( "scroll-view", ["bindscrolltoupper", 57,"class", 1,"scrollY", 2,"style", 3], e, s, gg);var oylB = _n("view");_r(oylB, 'class', 61, e, s, gg);var ozlB = _n("view");_r(ozlB, 'class', 62, e, s, gg);var o_lB = _n("view");_r(o_lB, 'class', 63, e, s, gg);_(ozlB,o_lB);var oAmB = _n("view");_r(oAmB, 'class', 64, e, s, gg);var oBmB = _o(65, e, s, gg);_(oAmB,oBmB);_(ozlB,oAmB);_(oylB,ozlB);var oCmB = _n("view");_r(oCmB, 'class', 66, e, s, gg);var oDmB = _n("view");_r(oDmB, 'class', 67, e, s, gg);_ai(ovlB, '../../lib/wxParse/wxParse.wxml', e_, './pages/goodsDetails/goodsDetails.wxml', 0, 0);var oFmB = _v();
       var oGmB = _o(68, e, s, gg);
       var oImB = _gd('./pages/goodsDetails/goodsDetails.wxml', oGmB, e_, d_);
       if (oImB) {
         var oHmB = _1(69,e,s,gg);
         oImB(oHmB,oHmB,oFmB, gg);
       } else _w(oGmB, './pages/goodsDetails/goodsDetails.wxml', 0, 0);_(oDmB,oFmB);_(oCmB,oDmB);var oJmB = _v();var oKmB = function(oOmB,oNmB,oMmB,gg){var oLmB = _n("view");_r(oLmB, 'class', 71, oOmB, oNmB, gg);var oQmB = _m( "image", ["class", 72,"mode", 1,"src", 2], oOmB, oNmB, gg);_(oLmB,oQmB);_(oMmB, oLmB);return oMmB;};_2(70, oKmB, e, s, gg, oJmB, "item", "index", '');_(oCmB,oJmB);var oRmB = _n("view");_r(oRmB, 'class', 75, e, s, gg);var oSmB = _o(76, e, s, gg);_(oRmB,oSmB);_(oCmB,oRmB);_(oylB,oCmB);_(oxlB,oylB);_(owlB,oxlB);_(r,owlB);var oTmB = _m( "view", ["class", 77,"hidden", 1], e, s, gg);var oUmB = _n("view");_r(oUmB, 'class', 79, e, s, gg);var oVmB = _m( "view", ["catchtap", 80,"class", 1], e, s, gg);var oWmB = _m( "image", ["class", 82,"src", 1], e, s, gg);_(oVmB,oWmB);_(oUmB,oVmB);var oXmB = _n("view");_r(oXmB, 'class', 84, e, s, gg);var oYmB = _m( "image", ["class", 85,"src", 1], e, s, gg);_(oXmB,oYmB);var oZmB = _n("view");_r(oZmB, 'class', 87, e, s, gg);var oamB = _n("view");_r(oamB, 'class', 88, e, s, gg);var obmB = _n("view");_r(obmB, 'class', 89, e, s, gg);var ocmB = _o(90, e, s, gg);_(obmB,ocmB);_(oamB,obmB);var odmB = _v();
      if (_o(91, e, s, gg)) {
        odmB.wxVkey = 1;var oemB = _n("view");_r(oemB, 'class', 92, e, s, gg);var ogmB = _o(93, e, s, gg);_(oemB,ogmB);_(odmB, oemB);
      } _(oamB,odmB);_(oZmB,oamB);_(oXmB,oZmB);_(oUmB,oXmB);var ohmB = _n("view");_r(ohmB, 'class', 94, e, s, gg);var oimB = _v();var ojmB = function(onmB,ommB,olmB,gg){var okmB = _n("view");_r(okmB, 'class', 97, onmB, ommB, gg);var opmB = _n("view");_r(opmB, 'class', 98, onmB, ommB, gg);var oqmB = _o(99, onmB, ommB, gg);_(opmB,oqmB);_(okmB,opmB);var ormB = _n("view");_r(ormB, 'class', 100, onmB, ommB, gg);var osmB = _v();var otmB = function(oxmB,owmB,ovmB,gg){var oumB = _m( "view", ["data-value-id", 103,"bindtap", 1,"class", 2,"data-name-id", 3], oxmB, owmB, gg);var ozmB = _o(107, oxmB, owmB, gg);_(oumB,ozmB);_(ovmB, oumB);return ovmB;};_2(101, otmB, onmB, ommB, gg, osmB, "vitem", "index", '{{vitem.id}}');_(ormB,osmB);_(okmB,ormB);_(olmB, okmB);return olmB;};_2(95, ojmB, e, s, gg, oimB, "item", "index", '{{item.specification_id}}');_(ohmB,oimB);var o_mB = _n("view");_r(o_mB, 'class', 108, e, s, gg);var oAnB = _n("view");_r(oAnB, 'class', 98, e, s, gg);var oBnB = _o(109, e, s, gg);_(oAnB,oBnB);_(o_mB,oAnB);var oCnB = _n("view");_r(oCnB, 'class', 110, e, s, gg);var oDnB = _m( "view", ["bindtap", 111,"class", 1], e, s, gg);var oEnB = _o(113, e, s, gg);_(oDnB,oEnB);_(oCnB,oDnB);var oFnB = _m( "input", ["disabled", 59,"class", 55,"type", 55,"value", 56], e, s, gg);_(oCnB,oFnB);var oGnB = _m( "view", ["bindtap", 116,"class", 1], e, s, gg);var oHnB = _o(118, e, s, gg);_(oGnB,oHnB);_(oCnB,oGnB);_(o_mB,oCnB);_(ohmB,o_mB);_(oUmB,ohmB);var oInB = _n("view");_r(oInB, 'class', 119, e, s, gg);var oJnB = _n("view");_r(oJnB, 'class', 120, e, s, gg);var oKnB = _o(121, e, s, gg);_(oJnB,oKnB);_(oInB,oJnB);var oLnB = _m( "view", ["bindtap", 122,"class", 1], e, s, gg);var oMnB = _o(124, e, s, gg);_(oLnB,oMnB);_(oInB,oLnB);_(oUmB,oInB);_(oTmB,oUmB);_(r,oTmB);var oNnB = _n("view");_r(oNnB, 'class', 125, e, s, gg);var oOnB = _m( "view", ["bindtap", -1,"class", 126], e, s, gg);var oPnB = _n("view");_r(oPnB, 'class', 127, e, s, gg);var oQnB = _m( "image", ["class", 82,"src", 46], e, s, gg);_(oPnB,oQnB);_(oOnB,oPnB);var oRnB = _n("view");_r(oRnB, 'class', 129, e, s, gg);var oSnB = _o(130, e, s, gg);_(oRnB,oSnB);_(oOnB,oRnB);_(oNnB,oOnB);var oTnB = _m( "view", ["bindtap", 131,"class", 1], e, s, gg);var oUnB = _n("view");_r(oUnB, 'class', 127, e, s, gg);var oVnB = _m( "image", ["class", 82,"src", 51], e, s, gg);_(oUnB,oVnB);_(oTnB,oUnB);var oWnB = _n("view");_r(oWnB, 'class', 129, e, s, gg);var oXnB = _o(134, e, s, gg);_(oWnB,oXnB);_(oTnB,oWnB);_(oNnB,oTnB);var oYnB = _n("view");_r(oYnB, 'class', 135, e, s, gg);var oZnB = _n("text");_r(oZnB, 'class', 136, e, s, gg);var oanB = _o(137, e, s, gg);_(oZnB,oanB);_(oYnB,oZnB);var obnB = _n("view");_r(obnB, 'class', 127, e, s, gg);var ocnB = _m( "image", ["class", 82,"bindtap", 56,"src", 57], e, s, gg);_(obnB,ocnB);_(oYnB,obnB);var odnB = _n("view");_r(odnB, 'class', 129, e, s, gg);var oenB = _o(140, e, s, gg);_(odnB,oenB);_(oYnB,odnB);_(oNnB,oYnB);var ofnB = _m( "view", ["bindtap", 141,"class", 1], e, s, gg);var ognB = _o(143, e, s, gg);_(ofnB,ognB);_(oNnB,ofnB);var ohnB = _m( "view", ["class", 88,"bindtap", 56], e, s, gg);var oinB = _o(145, e, s, gg);_(ohnB,oinB);_(oNnB,ohnB);_(r,oNnB);ovlB.pop();
    return r;
  };
        e_["./pages/goodsDetails/goodsDetails.wxml"]={f:m1,j:[],i:[],ti:["../../lib/wxParse/wxParse.wxml"],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:.container{margin-bottom:%%?100rpx?%%}.details-tip{height:%%?80rpx?%%;line-height:%%?80rpx?%%;text-align:center}.details-tip .details-border{height:%%?2rpx?%%;border:%%?1rpx?%% solid #ccc;position:absolute;text-align:center;left:30%;top:%%?40rpx?%%;width:40%;z-index:57}.details-tip .details-text{position:relative;color:#333;font-size:%%?28rpx?%%;height:%%?80rpx?%%;z-index:58;line-height:%%?80rpx?%%;width:26%;left:37%;background:#fff}.goods-item .detail-img{width:%%?750rpx?%%}.section-nav{width:%%?750rpx?%%;height:%%?89rpx?%%;background:#fff;border-bottom:%%?1rpx?%% solid #999}.section-nav .t{float:left;width:%%?600rpx?%%;height:%%?88rpx?%%;line-height:%%?88rpx?%%;font-size:%%?29rpx?%%;color:#333;margin-left:%%?31.25rpx?%%}.section-nav .i{float:right;line-height:%%?88rpx?%%;height:%%?30rpx?%%;width:%%?30rpx?%%;margin-right:%%?16rpx?%%;margin-top:%%?28rpx?%%}.section-act .t{float:left;display:flex;align-items:center;width:%%?600rpx?%%;height:%%?88rpx?%%;overflow:hidden;line-height:%%?88rpx?%%;font-size:%%?29rpx?%%;color:#999;margin-left:%%?31.25rpx?%%}.section-act .label{color:#999}.section-act .tag{display:flex;align-items:center;padding:0 %%?10rpx?%%;border-radius:%%?3rpx?%%;height:%%?37rpx?%%;width:auto;color:#f48f18;overflow:hidden;border:%%?1rpx?%% solid #f48f18;font-size:%%?25rpx?%%;margin:0 %%?10rpx?%%}.section-act .text{display:flex;align-items:center;height:%%?37rpx?%%;width:auto;overflow:hidden;color:#f48f18;font-size:%%?29rpx?%%}.comments{width:100%;height:auto;padding-left:%%?30rpx?%%;background:#fff;margin:%%?20rpx?%% 0}.comments .h{height:%%?102.5rpx?%%;line-height:%%?100.5rpx?%%;width:%%?718.75rpx?%%;padding-right:%%?16rpx?%%;border-bottom:%%?1rpx?%% solid #d9d9d9}.comments .h .t{display:block;float:left;width:50%;font-size:%%?38.5rpx?%%;color:#333}.comments .h .i{display:block;float:right;width:%%?164rpx?%%;height:%%?100.5rpx?%%;line-height:%%?100.5rpx?%%;background:url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/address-right-990628faa7.png) right center no-repeat;background-size:%%?52rpx?%%}.comments .b{height:auto;width:%%?720rpx?%%}.comments .item{height:auto;width:%%?720rpx?%%;overflow:hidden}.comments .info{height:%%?127rpx?%%;width:100%;padding:%%?33rpx?%% 0 %%?27rpx?%% 0}.comments .user{float:left;width:auto;height:%%?67rpx?%%;line-height:%%?67rpx?%%;font-size:0}.comments .user wx-image{float:left;width:%%?67rpx?%%;height:%%?67rpx?%%;margin-right:%%?17rpx?%%;border-radius:50%}.comments .user wx-text{display:inline-block;width:auto;height:%%?66rpx?%%;overflow:hidden;font-size:%%?29rpx?%%;line-height:%%?66rpx?%%}.comments .time{display:block;float:right;width:auto;height:%%?67rpx?%%;line-height:%%?67rpx?%%;color:#7f7f7f;font-size:%%?25rpx?%%;margin-right:%%?30rpx?%%}.comments .content{width:%%?720rpx?%%;padding-right:%%?30rpx?%%;line-height:%%?45.8rpx?%%;font-size:%%?29rpx?%%;margin-bottom:%%?24rpx?%%}.comments .imgs{width:%%?720rpx?%%;height:auto;margin-bottom:%%?25rpx?%%}.comments .imgs .img{height:%%?150rpx?%%;width:%%?150rpx?%%;margin-right:%%?28rpx?%%}.comments .spec{width:%%?720rpx?%%;padding-right:%%?30rpx?%%;line-height:%%?30rpx?%%;font-size:%%?24rpx?%%;color:#999;margin-bottom:%%?30rpx?%%}.goods-attr{width:%%?750rpx?%%;height:auto;overflow:hidden;padding:0 %%?31.25rpx?%% %%?25rpx?%% %%?31.25rpx?%%;background:#fff}.goods-attr .t{width:%%?687.5rpx?%%;height:%%?104rpx?%%;line-height:%%?104rpx?%%;font-size:%%?38.5rpx?%%}.goods-attr .item{width:%%?687.5rpx?%%;height:%%?68rpx?%%;padding:%%?11rpx?%% %%?20rpx?%%;margin-bottom:%%?11rpx?%%;background:#f7f7f7;font-size:%%?38.5rpx?%%}.goods-attr .left{float:left;font-size:%%?25rpx?%%;width:%%?134rpx?%%;height:%%?45rpx?%%;line-height:%%?45rpx?%%;overflow:hidden;color:#999}.goods-attr .right{float:left;font-size:%%?36.5rpx?%%;margin-left:%%?20rpx?%%;width:%%?480rpx?%%;height:%%?45rpx?%%;line-height:%%?45rpx?%%;overflow:hidden;color:#333}.detail{width:%%?750rpx?%%;height:auto;overflow:hidden}.detail wx-image{width:%%?750rpx?%%;display:block}.common-problem{width:%%?750rpx?%%;height:auto;overflow:hidden}.common-problem .h{position:relative;height:%%?145.5rpx?%%;width:%%?750rpx?%%;padding:%%?56.25rpx?%% 0;background:#fff;text-align:center}.common-problem .h .line{display:inline-block;position:absolute;top:%%?72rpx?%%;left:0;z-index:7;height:%%?1rpx?%%;margin-left:%%?225rpx?%%;width:%%?300rpx?%%;background:#ccc}.common-problem .h .title{display:inline-block;position:absolute;top:%%?56.125rpx?%%;left:0;z-index:3;height:%%?33rpx?%%;margin-left:%%?285rpx?%%;width:%%?180rpx?%%;background:#fff}.common-problem .b{width:%%?750rpx?%%;height:auto;overflow:hidden;padding:%%?0rpx?%% %%?30rpx?%%;background:#fff}.common-problem .item{height:auto;overflow:hidden;padding-bottom:%%?25rpx?%%}.common-problem .question-box .spot{float:left;display:block;height:%%?8rpx?%%;width:%%?8rpx?%%;background:#b4282d;border-radius:50%;margin-top:%%?11rpx?%%}.common-problem .question-box .question{float:left;line-height:%%?30rpx?%%;padding-left:%%?8rpx?%%;display:block;font-size:%%?26rpx?%%;padding-bottom:%%?15rpx?%%;color:#303030}.common-problem .answer{line-height:%%?36rpx?%%;padding-left:%%?16rpx?%%;font-size:%%?26rpx?%%;color:#787878}.related-goods{width:%%?750rpx?%%;height:auto;overflow:hidden}.related-goods .h{position:relative;height:%%?145.5rpx?%%;width:%%?750rpx?%%;padding:%%?56.25rpx?%% 0;background:#fff;text-align:center;border-bottom:%%?1rpx?%% solid #f4f4f4}.related-goods .h .line{display:inline-block;position:absolute;top:%%?72rpx?%%;left:0;z-index:2;height:%%?1rpx?%%;margin-left:%%?225rpx?%%;width:%%?300rpx?%%;background:#ccc}.related-goods .h .title{display:inline-block;position:absolute;top:%%?56.125rpx?%%;left:0;z-index:3;height:%%?33rpx?%%;margin-left:%%?285rpx?%%;width:%%?180rpx?%%;background:#fff}.related-goods .b{width:%%?750rpx?%%;height:auto;overflow:hidden}.related-goods .b .item{float:left;background:#fff;width:%%?375rpx?%%;height:auto;overflow:hidden;text-align:center;padding:%%?15rpx?%% %%?31.25rpx?%%;border-right:%%?1rpx?%% solid #f4f4f4;border-bottom:%%?1rpx?%% solid #f4f4f4}.related-goods .item .img{width:%%?311.45rpx?%%;height:%%?311.45rpx?%%}.related-goods .item .name{display:block;width:%%?311.45rpx?%%;height:%%?35rpx?%%;margin:%%?11.5rpx?%% 0 %%?15rpx?%% 0;text-align:center;overflow:hidden;font-size:%%?30rpx?%%;color:#333}.related-goods .item .price{display:block;width:%%?311.45rpx?%%;height:%%?30rpx?%%;text-align:center;font-size:%%?30rpx?%%;color:#b4282d}.bottom-btn{position:fixed;left:0;bottom:0;z-index:2;width:%%?750rpx?%%;height:%%?98rpx?%%;display:flex;background:#fff}.bottom-btn .l{float:left;height:%%?98rpx?%%;width:%%?136rpx?%%;border:%%?1rpx?%% solid #f4f4f4}.bottom-btn .l .l-text{width:%%?128rpx?%%;height:%%?30rpx?%%;text-align:center;font-size:%%?20rpx?%%;color:#333}.bottom-btn .l .l-imgaes{margin-left:34%;margin-top:10%}.bottom-btn .l .l-customserver{pointer-events:none;cursor:default;opacity:.6;width:%%?132rpx?%%}.bottom-btn .l.l-collect{border-right:none;border-left:none;text-align:center;width:%%?132rpx?%%}.bottom-btn .l.l-cart{width:%%?132rpx?%%}.bottom-btn .l.l-cart .cart-count{height:%%?28rpx?%%;width:%%?28rpx?%%;z-index:10;position:absolute;top:%%?6rpx?%%;left:47%;background:#b4282d;text-align:center;font-size:%%?18rpx?%%;color:#fff;line-height:%%?28rpx?%%;border-radius:50%}.bottom-btn .l .icon{display:block;height:%%?44rpx?%%;width:%%?44rpx?%%}.bottom-btn .c{background:#cc2020;float:left;height:%%?98rpx?%%;line-height:%%?96rpx?%%;flex:1;text-align:center;color:#fffefe}.bottom-btn .r{float:left;height:%%?98rpx?%%;line-height:%%?98rpx?%%;flex:1;text-align:center;color:#666;font-size:%%?30rpx?%%;border-top:%%?1rpx?%% solid #f4f4f4;border-bottom:%%?1rpx?%% solid #f4f4f4}.attr-pop-box{width:100%;height:100%;position:fixed;background:rgba(0,0,0,.5);z-index:8;bottom:0}.attr-pop{width:100%;height:%%?640rpx?%%;padding-top:%%?30rpx?%%;background:#fff;position:fixed;z-index:9;bottom:%%?0rpx?%%}.attr-pop .close{position:absolute;width:%%?48rpx?%%;height:%%?48rpx?%%;right:%%?31.25rpx?%%;overflow:hidden;top:%%?31.25rpx?%%}.attr-pop .close .icon{width:%%?48rpx?%%;height:%%?48rpx?%%}.attr-pop .img-info{width:100%;height:%%?177rpx?%%;margin-left:%%?30rpx?%%;overflow:hidden;margin-bottom:%%?41.5rpx?%%}.attr-pop .img{float:left;height:%%?177rpx?%%;width:%%?177rpx?%%;background:#f4f4f4;margin-right:%%?31.25rpx?%%}.attr-pop .info{float:left;height:%%?45rpx?%%;display:flex;color:#cc2020;font-size:%%?28rpx?%%}.attr-pop .info .c .p{color:#cc2020}.attr-pop .p{font-size:%%?33rpx?%%;color:#333;height:%%?33rpx?%%;line-height:%%?33rpx?%%;margin-bottom:%%?10rpx?%%}.attr-pop .a{font-size:%%?29rpx?%%;color:#333;height:%%?40rpx?%%;line-height:%%?40rpx?%%}.spec-con{width:100%;height:auto;margin-left:%%?30rpx?%%;overflow:hidden}.spec-con .name{height:%%?32rpx?%%;margin-bottom:%%?22rpx?%%;font-size:%%?29rpx?%%;color:#333}.spec-con .values{height:auto;margin-bottom:%%?31.25rpx?%%;font-size:0}.spec-con .value{display:inline-block;height:%%?62rpx?%%;padding:0 %%?35rpx?%%;line-height:%%?56rpx?%%;text-align:center;margin-right:%%?25rpx?%%;margin-bottom:%%?16.5rpx?%%;border:%%?1rpx?%% solid #333;font-size:%%?25rpx?%%;color:#333}.spec-con .value.disable{border:%%?1rpx?%% solid #ccc;color:#ccc}.spec-con .value.selected{border:%%?1rpx?%% solid #b4282d;color:#b4282d}.number-item .selnum{width:%%?322rpx?%%;height:%%?71rpx?%%;border:%%?1rpx?%% solid #ccc;display:flex}.number-item .cut{width:%%?93.75rpx?%%;height:100%;text-align:center;line-height:%%?65rpx?%%}.number-item .number{flex:1;height:100%;text-align:center;line-height:%%?68.75rpx?%%;border-left:%%?1rpx?%% solid #ccc;border-right:%%?1rpx?%% solid #ccc;float:left}.number-item .add{width:%%?93.75rpx?%%;height:100%;text-align:center;line-height:%%?65rpx?%%}.bottom-second-btn{height:%%?100rpx?%%;position:fixed;bottom:0;width:100%}.bsb-left{display:inline-block;height:inherit;width:50%;color:#fff;font-size:%%?34rpx?%%;line-height:%%?100rpx?%%;text-align:center}.bsb-right{display:inline-block;height:inherit;line-height:%%?100rpx?%%;color:#fff;width:50%;font-size:%%?34rpx?%%;background:#cc2020;color:#fffefe;text-align:center}.t .t-server-text{display:inline-block;float:left;font-size:%%?30rpx?%%;color:#333}.t .t-tip-text{display:inline-block;color:#999;font-size:%%?24rpx?%%;float:left;margin-left:%%?10rpx?%%}.section-nav .more-details{color:#999;font-size:%%?28rpx?%%;text-align:center;width:100%;height:%%?88rpx?%%;line-height:%%?88rpx?%%}.goods-desc{margin:%%?10rpx?%% %%?20rpx?%%}.no-more-data{text-align:center;color:#999;height:%%?30rpx?%%;line-height:%%?30rpx?%%;margin-bottom:%%?90rpx?%%}@code-separator-line:__wxRoute = "pages/goodsDetails/goodsDetails";__wxRouteBegin = true;
define("pages/goodsDetails/goodsDetails.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var app = getApp();
var WxParse = require('../../lib/wxParse/wxParse.js');
var util = require('../../utils/util.js');
var api = require('../../config/api.js');
var user = require('../../services/user.js');

Page({
  data: {
    id: 0,
    goods: {},
    gallery: [],
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
    Host: api.Host,
    goodsDetail: {},
    noCollectImage: "/static/images/icon_collect.png",
    hasCollectImage: "/static/images/icon_collect_checked.png",
    collectBackImage: "/static/images/icon_collect.png",
    add_or_buy: 1,
    scrollHeight: 0,

  },


  getGoodsInfo: function () {
    let that = this;
    util.request(api.GoodsDetail + that.data.id +'/', {}).then(function (res) {
        WxParse.wxParse('description', 'html', res[0].description, that, 5)

        that.setData({
          goods: res[0],
          gallery: res[0].images,
          detailsGallery: res[0].detail_images,
          goodsDetail: res[0]
        });
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
  //根据已选的值，计算其GoodsRelated它值的状态
  setSpecValueStatus: function () {

  },
  //判断规格是否选择完整
  isCheckedAllSpec: function () {
    return !this.getCheckedSpecValue().some(function (v) {
      if (v.valueId == 0) {
        return true;
      }
    });
  },
  getCheckedSpecKey: function () {
    let checkedValue = this.getCheckedSpecValue().map(function (v) {
      return v.valueId;
    });

    return checkedValue.join('_');
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

  getCheckedProductItem: function (key) {
    return this.data.productList.filter(function (v) {
      if (v.goods_specification_ids == key) {
        return true;
      } else {
        return false;
      }
    });
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
      id: parseInt(options.id)
      // id: 1181000
    });
    var that = this;
    wx.getSystemInfo({
        success:function(res){
            that.setData({
                scrollHeight:res.windowHeight
            });
        }
    });
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

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  },
  switchAttrPop: function () {
    if (this.data.openAttr == false) {
      this.setData({
        openAttr: !this.data.openAttr
      });
    }
  },
  closeAttr: function () {
    this.setData({
      openAttr: false,
    });
  },
  addCannelCollect: function () {
    let that = this;
    //添加或是取消收藏
    if( this.data.userHasCollect == 2){
        wx.showToast({
            title: '未登录',
            icon: 'loading',
            duration: 1000,
        });
        // this.data.userHasCollect = 0;
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

  openCartPage: function () {
    wx.switchTab({
      url: '/pages/cart/cart',
    });
  },

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
        util.request(api.CartAdd, { 'goodsId': this.data.goods.id, 'quantity': this.data.number}, "POST")
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

  goCreateOrder: function(){
      var that = this;
      if(that.data.add_or_buy == 1){
          util.request(api.CartAdd, { 'goodsId': this.data.goods.id, 'quantity': this.data.number}, "POST")
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
      if(that.data.add_or_buy == 2){
          if(!app.global.user.wx && !(typeof(WeixinJSBridge)=="undefined")){
              user.wx_auth();
          }
          util.request(api.Buy, { line_data: this.data.goods.id + '_' + this.data.number, pay_straightly:1 }, "GET")
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
    util.request(api.Buy, { line_data: this.data.goods.id + '_' + this.data.number, pay_straightly:1 }, "GET")
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

     scroll:function(event){
       //该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
        this.setData({
            scrollTop : event.detail.scrollTop
        });
     },
  topLoad:function(event){
    //   该方法绑定了页面滑动到顶部的事件，然后做上拉刷新
    wx.navigateBack({
        delta:1
    })
   }
})

});require("pages/goodsDetails/goodsDetails.js")@code-separator-line:["div","template","view","video","image","block","button","scroll-view","import","input","text"]