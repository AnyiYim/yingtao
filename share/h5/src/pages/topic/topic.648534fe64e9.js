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
    Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]]]);Z([[6],[[7],[3, "item"]],[3, "styleStr"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]],[3, '-video']]);Z([[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "src"]]);Z([3, 'wxParseImgLoad']);Z([3, 'wxParseImgTap']);Z([[6],[[7],[3, "item"]],[3, "from"]]);Z([[6],[[7],[3, "item"]],[3, "imgIndex"]]);Z([3, 'aspectFit']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "src"]]]);Z([a, [3, 'width:'],[[6],[[7],[3, "item"]],[3, "width"]],[3, 'px;height:'],[[6],[[7],[3, "item"]],[3, "height"]],[3, 'px;'],[[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "style"]]]);Z([3, 'WxEmojiView wxParse-inline']);Z([[6],[[7],[3, "item"]],[3, "textArray"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "node"]], [1, "text"]]);Z([[2,'?:'],[[2, "=="], [[6],[[7],[3, "item"]],[3, "text"]], [1, "\n"]],[1, "wxParse-hide"],[1, ""]]);Z([a, [[6],[[7],[3, "item"]],[3, "text"]]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "node"]], [1, "element"]]);Z([3, 'wxEmoji']);Z([a, [[6],[[7],[3, "item"]],[3, "baseSrc"]],[[6],[[7],[3, "item"]],[3, "text"]]]);Z([[7],[3, "wxParseData"]]);Z([3, 'wxParse0']);Z([[8], "item", [[7],[3, "item"]]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "button"]]);Z([3, 'mini']);Z([3, 'default']);Z([[6],[[7],[3, "item"]],[3, "nodes"]]);Z([3, 'item']);Z([3, 'wxParse1']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "li"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-inner']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-text']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-circle']]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "video"]]);Z([3, 'wxParseVideo']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "img"]]);Z([3, 'wxParseImg']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "a"]]);Z([3, 'wxParseTagATap']);Z([a, [3, 'wxParse-inline '],[[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]]]);Z([[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "href"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "table"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tagType"]], [1, "block"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tagType"]]]);Z([3, 'WxEmojiView']);Z([3, 'wxParse2']);Z([3, 'wxParse3']);Z([3, 'wxParse4']);Z([3, 'wxParse5']);Z([3, 'wxParse6']);Z([3, 'wxParse7']);Z([3, 'wxParse8']);Z([3, 'wxParse9']);Z([3, 'wxParse10']);Z([3, 'wxParse11']);Z([3, 'wxParse12']);Z([3, 'container']);Z([3, 'title-bar']);Z([3, 'cate-nav-body']);Z([[7],[3, "scrollLeft"]]);Z([3, 'true']);Z([3, 'width: 750rpx;']);Z([[7],[3, "goodtype"]]);Z([3, 'switchCate']);Z([a, [3, 'list-item    '],[[2,'?:'],[[2, "=="], [[7],[3, "typenum"]], [[6],[[7],[3, "item"]],[3, "id"]]],[1, "activate"],[1, "tb-list"]]]);Z([[6],[[7],[3, "item"]],[3, "id"]]);Z([[7],[3, "index"]]);Z([a, [3, 'name  '],[[2,'?:'],[[2, "=="], [[7],[3, "typenum"]], [[6],[[7],[3, "item"]],[3, "id"]]],[1, "name-color"],[1, ""]]]);Z([a, [3, '\n                    '],[[6],[[7],[3, "item"]],[3, "name"]],[3, '\n                ']]);Z([3, 'content']);Z([3, 'goods-list']);Z([[7],[3, "goodsinfo"]]);Z([3, 'gl-name']);Z([a, [[6],[[7],[3, "item"]],[3, "title"]]]);Z([3, 'gl-bref']);Z([3, 'wxParse']);Z([[8], "wxParseData", [[6],[[7],[3, "replyTemArray"]],[[7],[3, "index"]]]]);Z([3, 'gl-nav']);Z([a, [3, '/pages/goods/goods?id\x3d'],[[6],[[7],[3, "item"]],[3, "id"]]]);Z([3, 'gl-img']);Z([[6],[[7],[3, "item"]],[3, "images"]]);Z([3, 'iitem']);Z([3, 'iindex']);Z([3, 'gli-images']);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "iitem"]],[3, "thumb"]]]);Z([3, 'item-option']);Z([3, 'navigator-hover']);Z([a, [3, '/pages/goods/goods?id\x3d'],[[6],[[7],[3, "goodId"]],[1, 0]]]);Z([3, 'gl-label']);Z([a, [3, '￥'],[[6],[[6],[[6],[[7],[3, "item"]],[3, "stockrecords"]],[1, 0]],[3, "price_retail"]]]);Z([3, 'gl-share']);Z([3, ' 去购买']);Z([[2, "!"], [[7],[3, "loading_next"]]]);Z([3, 'show-loading']);Z([3, 'show-loading-text']);Z([3, '加载中...']);
  })(z);d_["./lib/wxParse/wxParse.wxml"] = {};d_["./lib/wxParse/wxParse.wxml"]["wxParseVideo"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParseVideo'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var oDs = _m( "view", ["class", 0,"style", 1], e, s, gg);var oEs = _m( "video", ["class", 2,"src", 1], e, s, gg);_(oDs,oEs);_(r,oDs);
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
      var oGs = _m( "image", ["class", 0,"data-src", 3,"bindload", 1,"bindtap", 2,"data-from", 3,"data-idx", 4,"mode", 5,"src", 6,"style", 7], e, s, gg);_(r,oGs);
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
      var oIs = _m( "view", ["style", 1,"class", 10], e, s, gg);var oJs = _v();var oKs = function(oOs,oNs,oMs,gg){var oQs = _v();
      if (_o(13, oOs, oNs, gg)) {
        oQs.wxVkey = 1;var oTs = _o(15, oOs, oNs, gg);_(oQs,oTs);
      }else if (_o(16, oOs, oNs, gg)) {
        oQs.wxVkey = 2;var oWs = _m( "image", ["class", 17,"src", 1], e, s, gg);_(oQs,oWs);
      } _(oMs,oQs);return oMs;};_2(12, oKs, e, s, gg, oJs, "item", "index", '');_(oIs,oJs);_(r,oIs);
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
      var oYs = _v();var oZs = function(ods,ocs,obs,gg){var ofs = _v();
       var ogs = _o(20, ods, ocs, gg);
       var ois = _gd('./lib/wxParse/wxParse.wxml', ogs, e_, d_);
       if (ois) {
         var ohs = _1(21,ods,ocs,gg);
         ois(ohs,ohs,ofs, gg);
       } else _w(ogs, './lib/wxParse/wxParse.wxml', 0, 0);_(obs,ofs);return obs;};_2(19, oZs, e, s, gg, oYs, "item", "index", '');_(r,oYs);
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
      var oks = _v();
      if (_o(16, e, s, gg)) {
        oks.wxVkey = 1;var ons = _v();
      if (_o(22, e, s, gg)) {
        ons.wxVkey = 1;var oqs = _m( "button", ["size", 23,"type", 1], e, s, gg);var ors = _v();var oss = function(ows,ovs,ous,gg){var oys = _v();
       var ozs = _o(27, ows, ovs, gg);
       var oAt = _gd('./lib/wxParse/wxParse.wxml', ozs, e_, d_);
       if (oAt) {
         var o_s = _1(21,ows,ovs,gg);
         oAt(o_s,o_s,oys, gg);
       } else _w(ozs, './lib/wxParse/wxParse.wxml', 0, 0);_(ous,oys);return ous;};_2(25, oss, e, s, gg, ors, "item", "index", '');_(oqs,ors);_(ons,oqs);
      }else if (_o(28, e, s, gg)) {
        ons.wxVkey = 2;var oDt = _n("view");_r(oDt, 'class', 29, e, s, gg);var oEt = _n("view");_r(oEt, 'class', 30, e, s, gg);var oFt = _n("view");_r(oFt, 'class', 31, e, s, gg);var oGt = _n("view");_r(oGt, 'class', 32, e, s, gg);_(oFt,oGt);_(oEt,oFt);var oHt = _n("view");_r(oHt, 'class', 31, e, s, gg);var oIt = _v();var oJt = function(oNt,oMt,oLt,gg){var oPt = _v();
       var oQt = _o(27, oNt, oMt, gg);
       var oSt = _gd('./lib/wxParse/wxParse.wxml', oQt, e_, d_);
       if (oSt) {
         var oRt = _1(21,oNt,oMt,gg);
         oSt(oRt,oRt,oPt, gg);
       } else _w(oQt, './lib/wxParse/wxParse.wxml', 0, 0);_(oLt,oPt);return oLt;};_2(25, oJt, e, s, gg, oIt, "item", "index", '');_(oHt,oIt);_(oEt,oHt);_(oDt,oEt);_(ons,oDt);
      }else if (_o(33, e, s, gg)) {
        ons.wxVkey = 3;var oVt = _v();
       var oWt = _o(34, e, s, gg);
       var oYt = _gd('./lib/wxParse/wxParse.wxml', oWt, e_, d_);
       if (oYt) {
         var oXt = _1(21,e,s,gg);
         oYt(oXt,oXt,oVt, gg);
       } else _w(oWt, './lib/wxParse/wxParse.wxml', 0, 0);_(ons,oVt);
      }else if (_o(35, e, s, gg)) {
        ons.wxVkey = 4;var obt = _v();
       var oct = _o(36, e, s, gg);
       var oet = _gd('./lib/wxParse/wxParse.wxml', oct, e_, d_);
       if (oet) {
         var odt = _1(21,e,s,gg);
         oet(odt,odt,obt, gg);
       } else _w(oct, './lib/wxParse/wxParse.wxml', 0, 0);_(ons,obt);
      }else if (_o(37, e, s, gg)) {
        ons.wxVkey = 5;var oht = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-c", 39], e, s, gg);var oit = _v();var ojt = function(ont,omt,olt,gg){var opt = _v();
       var oqt = _o(27, ont, omt, gg);
       var ost = _gd('./lib/wxParse/wxParse.wxml', oqt, e_, d_);
       if (ost) {
         var ort = _1(21,ont,omt,gg);
         ost(ort,ort,opt, gg);
       } else _w(oqt, './lib/wxParse/wxParse.wxml', 0, 0);_(olt,opt);return olt;};_2(25, ojt, e, s, gg, oit, "item", "index", '');_(oht,oit);_(ons,oht);
      }else if (_o(41, e, s, gg)) {
        ons.wxVkey = 6;var ovt = _m( "view", ["class", 0,"style", 1], e, s, gg);var owt = _v();var oxt = function(oAu,o_t,ozt,gg){var oCu = _v();
       var oDu = _o(27, oAu, o_t, gg);
       var oFu = _gd('./lib/wxParse/wxParse.wxml', oDu, e_, d_);
       if (oFu) {
         var oEu = _1(21,oAu,o_t,gg);
         oFu(oEu,oEu,oCu, gg);
       } else _w(oDu, './lib/wxParse/wxParse.wxml', 0, 0);_(ozt,oCu);return ozt;};_2(25, oxt, e, s, gg, owt, "item", "index", '');_(ovt,owt);_(ons,ovt);
      }else if (_o(42, e, s, gg)) {
        ons.wxVkey = 7;var oIu = _m( "view", ["class", 0,"style", 1], e, s, gg);var oJu = _v();var oKu = function(oOu,oNu,oMu,gg){var oQu = _v();
       var oRu = _o(27, oOu, oNu, gg);
       var oTu = _gd('./lib/wxParse/wxParse.wxml', oRu, e_, d_);
       if (oTu) {
         var oSu = _1(21,oOu,oNu,gg);
         oTu(oSu,oSu,oQu, gg);
       } else _w(oRu, './lib/wxParse/wxParse.wxml', 0, 0);_(oMu,oQu);return oMu;};_2(25, oKu, e, s, gg, oJu, "item", "index", '');_(oIu,oJu);_(ons,oIu);
      }else {
        ons.wxVkey = 8;var oUu = _m( "view", ["style", 1,"class", 42], e, s, gg);var oWu = _v();var oXu = function(obu,oau,oZu,gg){var odu = _v();
       var oeu = _o(27, obu, oau, gg);
       var ogu = _gd('./lib/wxParse/wxParse.wxml', oeu, e_, d_);
       if (ogu) {
         var ofu = _1(21,obu,oau,gg);
         ogu(ofu,ofu,odu, gg);
       } else _w(oeu, './lib/wxParse/wxParse.wxml', 0, 0);_(oZu,odu);return oZu;};_2(25, oXu, e, s, gg, oWu, "item", "index", '');_(oUu,oWu);_(ons, oUu);
      }_(oks,ons);
      }else if (_o(13, e, s, gg)) {
        oks.wxVkey = 2;var oju = _v();
       var oku = _o(44, e, s, gg);
       var omu = _gd('./lib/wxParse/wxParse.wxml', oku, e_, d_);
       if (omu) {
         var olu = _1(21,e,s,gg);
         omu(olu,olu,oju, gg);
       } else _w(oku, './lib/wxParse/wxParse.wxml', 0, 0);_(oks,oju);
      } _(r,oks);
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
      var oou = _v();
      if (_o(16, e, s, gg)) {
        oou.wxVkey = 1;var oru = _v();
      if (_o(22, e, s, gg)) {
        oru.wxVkey = 1;var ouu = _m( "button", ["size", 23,"type", 1], e, s, gg);var ovu = _v();var owu = function(o_u,ozu,oyu,gg){var oBv = _v();
       var oCv = _o(45, o_u, ozu, gg);
       var oEv = _gd('./lib/wxParse/wxParse.wxml', oCv, e_, d_);
       if (oEv) {
         var oDv = _1(21,o_u,ozu,gg);
         oEv(oDv,oDv,oBv, gg);
       } else _w(oCv, './lib/wxParse/wxParse.wxml', 0, 0);_(oyu,oBv);return oyu;};_2(25, owu, e, s, gg, ovu, "item", "index", '');_(ouu,ovu);_(oru,ouu);
      }else if (_o(28, e, s, gg)) {
        oru.wxVkey = 2;var oHv = _n("view");_r(oHv, 'class', 29, e, s, gg);var oIv = _n("view");_r(oIv, 'class', 30, e, s, gg);var oJv = _n("view");_r(oJv, 'class', 31, e, s, gg);var oKv = _n("view");_r(oKv, 'class', 32, e, s, gg);_(oJv,oKv);_(oIv,oJv);var oLv = _n("view");_r(oLv, 'class', 31, e, s, gg);var oMv = _v();var oNv = function(oRv,oQv,oPv,gg){var oTv = _v();
       var oUv = _o(45, oRv, oQv, gg);
       var oWv = _gd('./lib/wxParse/wxParse.wxml', oUv, e_, d_);
       if (oWv) {
         var oVv = _1(21,oRv,oQv,gg);
         oWv(oVv,oVv,oTv, gg);
       } else _w(oUv, './lib/wxParse/wxParse.wxml', 0, 0);_(oPv,oTv);return oPv;};_2(25, oNv, e, s, gg, oMv, "item", "index", '');_(oLv,oMv);_(oIv,oLv);_(oHv,oIv);_(oru,oHv);
      }else if (_o(33, e, s, gg)) {
        oru.wxVkey = 3;var oZv = _v();
       var oav = _o(34, e, s, gg);
       var ocv = _gd('./lib/wxParse/wxParse.wxml', oav, e_, d_);
       if (ocv) {
         var obv = _1(21,e,s,gg);
         ocv(obv,obv,oZv, gg);
       } else _w(oav, './lib/wxParse/wxParse.wxml', 0, 0);_(oru,oZv);
      }else if (_o(35, e, s, gg)) {
        oru.wxVkey = 4;var ofv = _v();
       var ogv = _o(36, e, s, gg);
       var oiv = _gd('./lib/wxParse/wxParse.wxml', ogv, e_, d_);
       if (oiv) {
         var ohv = _1(21,e,s,gg);
         oiv(ohv,ohv,ofv, gg);
       } else _w(ogv, './lib/wxParse/wxParse.wxml', 0, 0);_(oru,ofv);
      }else if (_o(37, e, s, gg)) {
        oru.wxVkey = 5;var olv = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var omv = _v();var onv = function(orv,oqv,opv,gg){var otv = _v();
       var ouv = _o(45, orv, oqv, gg);
       var owv = _gd('./lib/wxParse/wxParse.wxml', ouv, e_, d_);
       if (owv) {
         var ovv = _1(21,orv,oqv,gg);
         owv(ovv,ovv,otv, gg);
       } else _w(ouv, './lib/wxParse/wxParse.wxml', 0, 0);_(opv,otv);return opv;};_2(25, onv, e, s, gg, omv, "item", "index", '');_(olv,omv);_(oru,olv);
      }else if (_o(42, e, s, gg)) {
        oru.wxVkey = 6;var ozv = _m( "view", ["class", 0,"style", 1], e, s, gg);var o_v = _v();var oAw = function(oEw,oDw,oCw,gg){var oGw = _v();
       var oHw = _o(45, oEw, oDw, gg);
       var oJw = _gd('./lib/wxParse/wxParse.wxml', oHw, e_, d_);
       if (oJw) {
         var oIw = _1(21,oEw,oDw,gg);
         oJw(oIw,oIw,oGw, gg);
       } else _w(oHw, './lib/wxParse/wxParse.wxml', 0, 0);_(oCw,oGw);return oCw;};_2(25, oAw, e, s, gg, o_v, "item", "index", '');_(ozv,o_v);_(oru,ozv);
      }else {
        oru.wxVkey = 7;var oKw = _m( "view", ["style", 1,"class", 42], e, s, gg);var oMw = _v();var oNw = function(oRw,oQw,oPw,gg){var oTw = _v();
       var oUw = _o(45, oRw, oQw, gg);
       var oWw = _gd('./lib/wxParse/wxParse.wxml', oUw, e_, d_);
       if (oWw) {
         var oVw = _1(21,oRw,oQw,gg);
         oWw(oVw,oVw,oTw, gg);
       } else _w(oUw, './lib/wxParse/wxParse.wxml', 0, 0);_(oPw,oTw);return oPw;};_2(25, oNw, e, s, gg, oMw, "item", "index", '');_(oKw,oMw);_(oru, oKw);
      }_(oou,oru);
      }else if (_o(13, e, s, gg)) {
        oou.wxVkey = 2;var oZw = _v();
       var oaw = _o(44, e, s, gg);
       var ocw = _gd('./lib/wxParse/wxParse.wxml', oaw, e_, d_);
       if (ocw) {
         var obw = _1(21,e,s,gg);
         ocw(obw,obw,oZw, gg);
       } else _w(oaw, './lib/wxParse/wxParse.wxml', 0, 0);_(oou,oZw);
      } _(r,oou);
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
      var oew = _v();
      if (_o(16, e, s, gg)) {
        oew.wxVkey = 1;var ohw = _v();
      if (_o(22, e, s, gg)) {
        ohw.wxVkey = 1;var okw = _m( "button", ["size", 23,"type", 1], e, s, gg);var olw = _v();var omw = function(oqw,opw,oow,gg){var osw = _v();
       var otw = _o(46, oqw, opw, gg);
       var ovw = _gd('./lib/wxParse/wxParse.wxml', otw, e_, d_);
       if (ovw) {
         var ouw = _1(21,oqw,opw,gg);
         ovw(ouw,ouw,osw, gg);
       } else _w(otw, './lib/wxParse/wxParse.wxml', 0, 0);_(oow,osw);return oow;};_2(25, omw, e, s, gg, olw, "item", "index", '');_(okw,olw);_(ohw,okw);
      }else if (_o(28, e, s, gg)) {
        ohw.wxVkey = 2;var oyw = _n("view");_r(oyw, 'class', 29, e, s, gg);var ozw = _n("view");_r(ozw, 'class', 30, e, s, gg);var o_w = _n("view");_r(o_w, 'class', 31, e, s, gg);var oAx = _n("view");_r(oAx, 'class', 32, e, s, gg);_(o_w,oAx);_(ozw,o_w);var oBx = _n("view");_r(oBx, 'class', 31, e, s, gg);var oCx = _v();var oDx = function(oHx,oGx,oFx,gg){var oJx = _v();
       var oKx = _o(46, oHx, oGx, gg);
       var oMx = _gd('./lib/wxParse/wxParse.wxml', oKx, e_, d_);
       if (oMx) {
         var oLx = _1(21,oHx,oGx,gg);
         oMx(oLx,oLx,oJx, gg);
       } else _w(oKx, './lib/wxParse/wxParse.wxml', 0, 0);_(oFx,oJx);return oFx;};_2(25, oDx, e, s, gg, oCx, "item", "index", '');_(oBx,oCx);_(ozw,oBx);_(oyw,ozw);_(ohw,oyw);
      }else if (_o(33, e, s, gg)) {
        ohw.wxVkey = 3;var oPx = _v();
       var oQx = _o(34, e, s, gg);
       var oSx = _gd('./lib/wxParse/wxParse.wxml', oQx, e_, d_);
       if (oSx) {
         var oRx = _1(21,e,s,gg);
         oSx(oRx,oRx,oPx, gg);
       } else _w(oQx, './lib/wxParse/wxParse.wxml', 0, 0);_(ohw,oPx);
      }else if (_o(35, e, s, gg)) {
        ohw.wxVkey = 4;var oVx = _v();
       var oWx = _o(36, e, s, gg);
       var oYx = _gd('./lib/wxParse/wxParse.wxml', oWx, e_, d_);
       if (oYx) {
         var oXx = _1(21,e,s,gg);
         oYx(oXx,oXx,oVx, gg);
       } else _w(oWx, './lib/wxParse/wxParse.wxml', 0, 0);_(ohw,oVx);
      }else if (_o(37, e, s, gg)) {
        ohw.wxVkey = 5;var obx = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ocx = _v();var odx = function(ohx,ogx,ofx,gg){var ojx = _v();
       var okx = _o(46, ohx, ogx, gg);
       var omx = _gd('./lib/wxParse/wxParse.wxml', okx, e_, d_);
       if (omx) {
         var olx = _1(21,ohx,ogx,gg);
         omx(olx,olx,ojx, gg);
       } else _w(okx, './lib/wxParse/wxParse.wxml', 0, 0);_(ofx,ojx);return ofx;};_2(25, odx, e, s, gg, ocx, "item", "index", '');_(obx,ocx);_(ohw,obx);
      }else if (_o(42, e, s, gg)) {
        ohw.wxVkey = 6;var opx = _m( "view", ["class", 0,"style", 1], e, s, gg);var oqx = _v();var orx = function(ovx,oux,otx,gg){var oxx = _v();
       var oyx = _o(46, ovx, oux, gg);
       var o_x = _gd('./lib/wxParse/wxParse.wxml', oyx, e_, d_);
       if (o_x) {
         var ozx = _1(21,ovx,oux,gg);
         o_x(ozx,ozx,oxx, gg);
       } else _w(oyx, './lib/wxParse/wxParse.wxml', 0, 0);_(otx,oxx);return otx;};_2(25, orx, e, s, gg, oqx, "item", "index", '');_(opx,oqx);_(ohw,opx);
      }else {
        ohw.wxVkey = 7;var oAy = _m( "view", ["style", 1,"class", 42], e, s, gg);var oCy = _v();var oDy = function(oHy,oGy,oFy,gg){var oJy = _v();
       var oKy = _o(46, oHy, oGy, gg);
       var oMy = _gd('./lib/wxParse/wxParse.wxml', oKy, e_, d_);
       if (oMy) {
         var oLy = _1(21,oHy,oGy,gg);
         oMy(oLy,oLy,oJy, gg);
       } else _w(oKy, './lib/wxParse/wxParse.wxml', 0, 0);_(oFy,oJy);return oFy;};_2(25, oDy, e, s, gg, oCy, "item", "index", '');_(oAy,oCy);_(ohw, oAy);
      }_(oew,ohw);
      }else if (_o(13, e, s, gg)) {
        oew.wxVkey = 2;var oPy = _v();
       var oQy = _o(44, e, s, gg);
       var oSy = _gd('./lib/wxParse/wxParse.wxml', oQy, e_, d_);
       if (oSy) {
         var oRy = _1(21,e,s,gg);
         oSy(oRy,oRy,oPy, gg);
       } else _w(oQy, './lib/wxParse/wxParse.wxml', 0, 0);_(oew,oPy);
      } _(r,oew);
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
      var oUy = _v();
      if (_o(16, e, s, gg)) {
        oUy.wxVkey = 1;var oXy = _v();
      if (_o(22, e, s, gg)) {
        oXy.wxVkey = 1;var oay = _m( "button", ["size", 23,"type", 1], e, s, gg);var oby = _v();var ocy = function(ogy,ofy,oey,gg){var oiy = _v();
       var ojy = _o(47, ogy, ofy, gg);
       var oly = _gd('./lib/wxParse/wxParse.wxml', ojy, e_, d_);
       if (oly) {
         var oky = _1(21,ogy,ofy,gg);
         oly(oky,oky,oiy, gg);
       } else _w(ojy, './lib/wxParse/wxParse.wxml', 0, 0);_(oey,oiy);return oey;};_2(25, ocy, e, s, gg, oby, "item", "index", '');_(oay,oby);_(oXy,oay);
      }else if (_o(28, e, s, gg)) {
        oXy.wxVkey = 2;var ooy = _n("view");_r(ooy, 'class', 29, e, s, gg);var opy = _n("view");_r(opy, 'class', 30, e, s, gg);var oqy = _n("view");_r(oqy, 'class', 31, e, s, gg);var ory = _n("view");_r(ory, 'class', 32, e, s, gg);_(oqy,ory);_(opy,oqy);var osy = _n("view");_r(osy, 'class', 31, e, s, gg);var oty = _v();var ouy = function(oyy,oxy,owy,gg){var o_y = _v();
       var oAz = _o(47, oyy, oxy, gg);
       var oCz = _gd('./lib/wxParse/wxParse.wxml', oAz, e_, d_);
       if (oCz) {
         var oBz = _1(21,oyy,oxy,gg);
         oCz(oBz,oBz,o_y, gg);
       } else _w(oAz, './lib/wxParse/wxParse.wxml', 0, 0);_(owy,o_y);return owy;};_2(25, ouy, e, s, gg, oty, "item", "index", '');_(osy,oty);_(opy,osy);_(ooy,opy);_(oXy,ooy);
      }else if (_o(33, e, s, gg)) {
        oXy.wxVkey = 3;var oFz = _v();
       var oGz = _o(34, e, s, gg);
       var oIz = _gd('./lib/wxParse/wxParse.wxml', oGz, e_, d_);
       if (oIz) {
         var oHz = _1(21,e,s,gg);
         oIz(oHz,oHz,oFz, gg);
       } else _w(oGz, './lib/wxParse/wxParse.wxml', 0, 0);_(oXy,oFz);
      }else if (_o(35, e, s, gg)) {
        oXy.wxVkey = 4;var oLz = _v();
       var oMz = _o(36, e, s, gg);
       var oOz = _gd('./lib/wxParse/wxParse.wxml', oMz, e_, d_);
       if (oOz) {
         var oNz = _1(21,e,s,gg);
         oOz(oNz,oNz,oLz, gg);
       } else _w(oMz, './lib/wxParse/wxParse.wxml', 0, 0);_(oXy,oLz);
      }else if (_o(37, e, s, gg)) {
        oXy.wxVkey = 5;var oRz = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oSz = _v();var oTz = function(oXz,oWz,oVz,gg){var oZz = _v();
       var oaz = _o(47, oXz, oWz, gg);
       var ocz = _gd('./lib/wxParse/wxParse.wxml', oaz, e_, d_);
       if (ocz) {
         var obz = _1(21,oXz,oWz,gg);
         ocz(obz,obz,oZz, gg);
       } else _w(oaz, './lib/wxParse/wxParse.wxml', 0, 0);_(oVz,oZz);return oVz;};_2(25, oTz, e, s, gg, oSz, "item", "index", '');_(oRz,oSz);_(oXy,oRz);
      }else if (_o(42, e, s, gg)) {
        oXy.wxVkey = 6;var ofz = _m( "view", ["class", 0,"style", 1], e, s, gg);var ogz = _v();var ohz = function(olz,okz,ojz,gg){var onz = _v();
       var ooz = _o(47, olz, okz, gg);
       var oqz = _gd('./lib/wxParse/wxParse.wxml', ooz, e_, d_);
       if (oqz) {
         var opz = _1(21,olz,okz,gg);
         oqz(opz,opz,onz, gg);
       } else _w(ooz, './lib/wxParse/wxParse.wxml', 0, 0);_(ojz,onz);return ojz;};_2(25, ohz, e, s, gg, ogz, "item", "index", '');_(ofz,ogz);_(oXy,ofz);
      }else {
        oXy.wxVkey = 7;var orz = _m( "view", ["style", 1,"class", 42], e, s, gg);var otz = _v();var ouz = function(oyz,oxz,owz,gg){var o_z = _v();
       var oA_ = _o(47, oyz, oxz, gg);
       var oC_ = _gd('./lib/wxParse/wxParse.wxml', oA_, e_, d_);
       if (oC_) {
         var oB_ = _1(21,oyz,oxz,gg);
         oC_(oB_,oB_,o_z, gg);
       } else _w(oA_, './lib/wxParse/wxParse.wxml', 0, 0);_(owz,o_z);return owz;};_2(25, ouz, e, s, gg, otz, "item", "index", '');_(orz,otz);_(oXy, orz);
      }_(oUy,oXy);
      }else if (_o(13, e, s, gg)) {
        oUy.wxVkey = 2;var oF_ = _v();
       var oG_ = _o(44, e, s, gg);
       var oI_ = _gd('./lib/wxParse/wxParse.wxml', oG_, e_, d_);
       if (oI_) {
         var oH_ = _1(21,e,s,gg);
         oI_(oH_,oH_,oF_, gg);
       } else _w(oG_, './lib/wxParse/wxParse.wxml', 0, 0);_(oUy,oF_);
      } _(r,oUy);
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
      var oK_ = _v();
      if (_o(16, e, s, gg)) {
        oK_.wxVkey = 1;var oN_ = _v();
      if (_o(22, e, s, gg)) {
        oN_.wxVkey = 1;var oQ_ = _m( "button", ["size", 23,"type", 1], e, s, gg);var oR_ = _v();var oS_ = function(oW_,oV_,oU_,gg){var oY_ = _v();
       var oZ_ = _o(48, oW_, oV_, gg);
       var ob_ = _gd('./lib/wxParse/wxParse.wxml', oZ_, e_, d_);
       if (ob_) {
         var oa_ = _1(21,oW_,oV_,gg);
         ob_(oa_,oa_,oY_, gg);
       } else _w(oZ_, './lib/wxParse/wxParse.wxml', 0, 0);_(oU_,oY_);return oU_;};_2(25, oS_, e, s, gg, oR_, "item", "index", '');_(oQ_,oR_);_(oN_,oQ_);
      }else if (_o(28, e, s, gg)) {
        oN_.wxVkey = 2;var oe_ = _n("view");_r(oe_, 'class', 29, e, s, gg);var of_ = _n("view");_r(of_, 'class', 30, e, s, gg);var og_ = _n("view");_r(og_, 'class', 31, e, s, gg);var oh_ = _n("view");_r(oh_, 'class', 32, e, s, gg);_(og_,oh_);_(of_,og_);var oi_ = _n("view");_r(oi_, 'class', 31, e, s, gg);var oj_ = _v();var ok_ = function(oo_,on_,om_,gg){var oq_ = _v();
       var or_ = _o(48, oo_, on_, gg);
       var ot_ = _gd('./lib/wxParse/wxParse.wxml', or_, e_, d_);
       if (ot_) {
         var os_ = _1(21,oo_,on_,gg);
         ot_(os_,os_,oq_, gg);
       } else _w(or_, './lib/wxParse/wxParse.wxml', 0, 0);_(om_,oq_);return om_;};_2(25, ok_, e, s, gg, oj_, "item", "index", '');_(oi_,oj_);_(of_,oi_);_(oe_,of_);_(oN_,oe_);
      }else if (_o(33, e, s, gg)) {
        oN_.wxVkey = 3;var ow_ = _v();
       var ox_ = _o(34, e, s, gg);
       var oz_ = _gd('./lib/wxParse/wxParse.wxml', ox_, e_, d_);
       if (oz_) {
         var oy_ = _1(21,e,s,gg);
         oz_(oy_,oy_,ow_, gg);
       } else _w(ox_, './lib/wxParse/wxParse.wxml', 0, 0);_(oN_,ow_);
      }else if (_o(35, e, s, gg)) {
        oN_.wxVkey = 4;var oBAB = _v();
       var oCAB = _o(36, e, s, gg);
       var oEAB = _gd('./lib/wxParse/wxParse.wxml', oCAB, e_, d_);
       if (oEAB) {
         var oDAB = _1(21,e,s,gg);
         oEAB(oDAB,oDAB,oBAB, gg);
       } else _w(oCAB, './lib/wxParse/wxParse.wxml', 0, 0);_(oN_,oBAB);
      }else if (_o(37, e, s, gg)) {
        oN_.wxVkey = 5;var oHAB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oIAB = _v();var oJAB = function(oNAB,oMAB,oLAB,gg){var oPAB = _v();
       var oQAB = _o(48, oNAB, oMAB, gg);
       var oSAB = _gd('./lib/wxParse/wxParse.wxml', oQAB, e_, d_);
       if (oSAB) {
         var oRAB = _1(21,oNAB,oMAB,gg);
         oSAB(oRAB,oRAB,oPAB, gg);
       } else _w(oQAB, './lib/wxParse/wxParse.wxml', 0, 0);_(oLAB,oPAB);return oLAB;};_2(25, oJAB, e, s, gg, oIAB, "item", "index", '');_(oHAB,oIAB);_(oN_,oHAB);
      }else if (_o(42, e, s, gg)) {
        oN_.wxVkey = 6;var oVAB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oWAB = _v();var oXAB = function(obAB,oaAB,oZAB,gg){var odAB = _v();
       var oeAB = _o(48, obAB, oaAB, gg);
       var ogAB = _gd('./lib/wxParse/wxParse.wxml', oeAB, e_, d_);
       if (ogAB) {
         var ofAB = _1(21,obAB,oaAB,gg);
         ogAB(ofAB,ofAB,odAB, gg);
       } else _w(oeAB, './lib/wxParse/wxParse.wxml', 0, 0);_(oZAB,odAB);return oZAB;};_2(25, oXAB, e, s, gg, oWAB, "item", "index", '');_(oVAB,oWAB);_(oN_,oVAB);
      }else {
        oN_.wxVkey = 7;var ohAB = _m( "view", ["style", 1,"class", 42], e, s, gg);var ojAB = _v();var okAB = function(ooAB,onAB,omAB,gg){var oqAB = _v();
       var orAB = _o(48, ooAB, onAB, gg);
       var otAB = _gd('./lib/wxParse/wxParse.wxml', orAB, e_, d_);
       if (otAB) {
         var osAB = _1(21,ooAB,onAB,gg);
         otAB(osAB,osAB,oqAB, gg);
       } else _w(orAB, './lib/wxParse/wxParse.wxml', 0, 0);_(omAB,oqAB);return omAB;};_2(25, okAB, e, s, gg, ojAB, "item", "index", '');_(ohAB,ojAB);_(oN_, ohAB);
      }_(oK_,oN_);
      }else if (_o(13, e, s, gg)) {
        oK_.wxVkey = 2;var owAB = _v();
       var oxAB = _o(44, e, s, gg);
       var ozAB = _gd('./lib/wxParse/wxParse.wxml', oxAB, e_, d_);
       if (ozAB) {
         var oyAB = _1(21,e,s,gg);
         ozAB(oyAB,oyAB,owAB, gg);
       } else _w(oxAB, './lib/wxParse/wxParse.wxml', 0, 0);_(oK_,owAB);
      } _(r,oK_);
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
      var oABB = _v();
      if (_o(16, e, s, gg)) {
        oABB.wxVkey = 1;var oDBB = _v();
      if (_o(22, e, s, gg)) {
        oDBB.wxVkey = 1;var oGBB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oHBB = _v();var oIBB = function(oMBB,oLBB,oKBB,gg){var oOBB = _v();
       var oPBB = _o(49, oMBB, oLBB, gg);
       var oRBB = _gd('./lib/wxParse/wxParse.wxml', oPBB, e_, d_);
       if (oRBB) {
         var oQBB = _1(21,oMBB,oLBB,gg);
         oRBB(oQBB,oQBB,oOBB, gg);
       } else _w(oPBB, './lib/wxParse/wxParse.wxml', 0, 0);_(oKBB,oOBB);return oKBB;};_2(25, oIBB, e, s, gg, oHBB, "item", "index", '');_(oGBB,oHBB);_(oDBB,oGBB);
      }else if (_o(28, e, s, gg)) {
        oDBB.wxVkey = 2;var oUBB = _n("view");_r(oUBB, 'class', 29, e, s, gg);var oVBB = _n("view");_r(oVBB, 'class', 30, e, s, gg);var oWBB = _n("view");_r(oWBB, 'class', 31, e, s, gg);var oXBB = _n("view");_r(oXBB, 'class', 32, e, s, gg);_(oWBB,oXBB);_(oVBB,oWBB);var oYBB = _n("view");_r(oYBB, 'class', 31, e, s, gg);var oZBB = _v();var oaBB = function(oeBB,odBB,ocBB,gg){var ogBB = _v();
       var ohBB = _o(49, oeBB, odBB, gg);
       var ojBB = _gd('./lib/wxParse/wxParse.wxml', ohBB, e_, d_);
       if (ojBB) {
         var oiBB = _1(21,oeBB,odBB,gg);
         ojBB(oiBB,oiBB,ogBB, gg);
       } else _w(ohBB, './lib/wxParse/wxParse.wxml', 0, 0);_(ocBB,ogBB);return ocBB;};_2(25, oaBB, e, s, gg, oZBB, "item", "index", '');_(oYBB,oZBB);_(oVBB,oYBB);_(oUBB,oVBB);_(oDBB,oUBB);
      }else if (_o(33, e, s, gg)) {
        oDBB.wxVkey = 3;var omBB = _v();
       var onBB = _o(34, e, s, gg);
       var opBB = _gd('./lib/wxParse/wxParse.wxml', onBB, e_, d_);
       if (opBB) {
         var ooBB = _1(21,e,s,gg);
         opBB(ooBB,ooBB,omBB, gg);
       } else _w(onBB, './lib/wxParse/wxParse.wxml', 0, 0);_(oDBB,omBB);
      }else if (_o(35, e, s, gg)) {
        oDBB.wxVkey = 4;var osBB = _v();
       var otBB = _o(36, e, s, gg);
       var ovBB = _gd('./lib/wxParse/wxParse.wxml', otBB, e_, d_);
       if (ovBB) {
         var ouBB = _1(21,e,s,gg);
         ovBB(ouBB,ouBB,osBB, gg);
       } else _w(otBB, './lib/wxParse/wxParse.wxml', 0, 0);_(oDBB,osBB);
      }else if (_o(37, e, s, gg)) {
        oDBB.wxVkey = 5;var oyBB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ozBB = _v();var o_BB = function(oDCB,oCCB,oBCB,gg){var oFCB = _v();
       var oGCB = _o(49, oDCB, oCCB, gg);
       var oICB = _gd('./lib/wxParse/wxParse.wxml', oGCB, e_, d_);
       if (oICB) {
         var oHCB = _1(21,oDCB,oCCB,gg);
         oICB(oHCB,oHCB,oFCB, gg);
       } else _w(oGCB, './lib/wxParse/wxParse.wxml', 0, 0);_(oBCB,oFCB);return oBCB;};_2(25, o_BB, e, s, gg, ozBB, "item", "index", '');_(oyBB,ozBB);_(oDBB,oyBB);
      }else if (_o(42, e, s, gg)) {
        oDBB.wxVkey = 6;var oLCB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oMCB = _v();var oNCB = function(oRCB,oQCB,oPCB,gg){var oTCB = _v();
       var oUCB = _o(49, oRCB, oQCB, gg);
       var oWCB = _gd('./lib/wxParse/wxParse.wxml', oUCB, e_, d_);
       if (oWCB) {
         var oVCB = _1(21,oRCB,oQCB,gg);
         oWCB(oVCB,oVCB,oTCB, gg);
       } else _w(oUCB, './lib/wxParse/wxParse.wxml', 0, 0);_(oPCB,oTCB);return oPCB;};_2(25, oNCB, e, s, gg, oMCB, "item", "index", '');_(oLCB,oMCB);_(oDBB,oLCB);
      }else {
        oDBB.wxVkey = 7;var oXCB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oZCB = _v();var oaCB = function(oeCB,odCB,ocCB,gg){var ogCB = _v();
       var ohCB = _o(49, oeCB, odCB, gg);
       var ojCB = _gd('./lib/wxParse/wxParse.wxml', ohCB, e_, d_);
       if (ojCB) {
         var oiCB = _1(21,oeCB,odCB,gg);
         ojCB(oiCB,oiCB,ogCB, gg);
       } else _w(ohCB, './lib/wxParse/wxParse.wxml', 0, 0);_(ocCB,ogCB);return ocCB;};_2(25, oaCB, e, s, gg, oZCB, "item", "index", '');_(oXCB,oZCB);_(oDBB, oXCB);
      }_(oABB,oDBB);
      }else if (_o(13, e, s, gg)) {
        oABB.wxVkey = 2;var omCB = _v();
       var onCB = _o(44, e, s, gg);
       var opCB = _gd('./lib/wxParse/wxParse.wxml', onCB, e_, d_);
       if (opCB) {
         var ooCB = _1(21,e,s,gg);
         opCB(ooCB,ooCB,omCB, gg);
       } else _w(onCB, './lib/wxParse/wxParse.wxml', 0, 0);_(oABB,omCB);
      } _(r,oABB);
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
      var orCB = _v();
      if (_o(16, e, s, gg)) {
        orCB.wxVkey = 1;var ouCB = _v();
      if (_o(22, e, s, gg)) {
        ouCB.wxVkey = 1;var oxCB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oyCB = _v();var ozCB = function(oCDB,oBDB,oADB,gg){var oEDB = _v();
       var oFDB = _o(50, oCDB, oBDB, gg);
       var oHDB = _gd('./lib/wxParse/wxParse.wxml', oFDB, e_, d_);
       if (oHDB) {
         var oGDB = _1(21,oCDB,oBDB,gg);
         oHDB(oGDB,oGDB,oEDB, gg);
       } else _w(oFDB, './lib/wxParse/wxParse.wxml', 0, 0);_(oADB,oEDB);return oADB;};_2(25, ozCB, e, s, gg, oyCB, "item", "index", '');_(oxCB,oyCB);_(ouCB,oxCB);
      }else if (_o(28, e, s, gg)) {
        ouCB.wxVkey = 2;var oKDB = _n("view");_r(oKDB, 'class', 29, e, s, gg);var oLDB = _n("view");_r(oLDB, 'class', 30, e, s, gg);var oMDB = _n("view");_r(oMDB, 'class', 31, e, s, gg);var oNDB = _n("view");_r(oNDB, 'class', 32, e, s, gg);_(oMDB,oNDB);_(oLDB,oMDB);var oODB = _n("view");_r(oODB, 'class', 31, e, s, gg);var oPDB = _v();var oQDB = function(oUDB,oTDB,oSDB,gg){var oWDB = _v();
       var oXDB = _o(50, oUDB, oTDB, gg);
       var oZDB = _gd('./lib/wxParse/wxParse.wxml', oXDB, e_, d_);
       if (oZDB) {
         var oYDB = _1(21,oUDB,oTDB,gg);
         oZDB(oYDB,oYDB,oWDB, gg);
       } else _w(oXDB, './lib/wxParse/wxParse.wxml', 0, 0);_(oSDB,oWDB);return oSDB;};_2(25, oQDB, e, s, gg, oPDB, "item", "index", '');_(oODB,oPDB);_(oLDB,oODB);_(oKDB,oLDB);_(ouCB,oKDB);
      }else if (_o(33, e, s, gg)) {
        ouCB.wxVkey = 3;var ocDB = _v();
       var odDB = _o(34, e, s, gg);
       var ofDB = _gd('./lib/wxParse/wxParse.wxml', odDB, e_, d_);
       if (ofDB) {
         var oeDB = _1(21,e,s,gg);
         ofDB(oeDB,oeDB,ocDB, gg);
       } else _w(odDB, './lib/wxParse/wxParse.wxml', 0, 0);_(ouCB,ocDB);
      }else if (_o(35, e, s, gg)) {
        ouCB.wxVkey = 4;var oiDB = _v();
       var ojDB = _o(36, e, s, gg);
       var olDB = _gd('./lib/wxParse/wxParse.wxml', ojDB, e_, d_);
       if (olDB) {
         var okDB = _1(21,e,s,gg);
         olDB(okDB,okDB,oiDB, gg);
       } else _w(ojDB, './lib/wxParse/wxParse.wxml', 0, 0);_(ouCB,oiDB);
      }else if (_o(37, e, s, gg)) {
        ouCB.wxVkey = 5;var ooDB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var opDB = _v();var oqDB = function(ouDB,otDB,osDB,gg){var owDB = _v();
       var oxDB = _o(50, ouDB, otDB, gg);
       var ozDB = _gd('./lib/wxParse/wxParse.wxml', oxDB, e_, d_);
       if (ozDB) {
         var oyDB = _1(21,ouDB,otDB,gg);
         ozDB(oyDB,oyDB,owDB, gg);
       } else _w(oxDB, './lib/wxParse/wxParse.wxml', 0, 0);_(osDB,owDB);return osDB;};_2(25, oqDB, e, s, gg, opDB, "item", "index", '');_(ooDB,opDB);_(ouCB,ooDB);
      }else if (_o(42, e, s, gg)) {
        ouCB.wxVkey = 6;var oBEB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oCEB = _v();var oDEB = function(oHEB,oGEB,oFEB,gg){var oJEB = _v();
       var oKEB = _o(50, oHEB, oGEB, gg);
       var oMEB = _gd('./lib/wxParse/wxParse.wxml', oKEB, e_, d_);
       if (oMEB) {
         var oLEB = _1(21,oHEB,oGEB,gg);
         oMEB(oLEB,oLEB,oJEB, gg);
       } else _w(oKEB, './lib/wxParse/wxParse.wxml', 0, 0);_(oFEB,oJEB);return oFEB;};_2(25, oDEB, e, s, gg, oCEB, "item", "index", '');_(oBEB,oCEB);_(ouCB,oBEB);
      }else {
        ouCB.wxVkey = 7;var oNEB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oPEB = _v();var oQEB = function(oUEB,oTEB,oSEB,gg){var oWEB = _v();
       var oXEB = _o(50, oUEB, oTEB, gg);
       var oZEB = _gd('./lib/wxParse/wxParse.wxml', oXEB, e_, d_);
       if (oZEB) {
         var oYEB = _1(21,oUEB,oTEB,gg);
         oZEB(oYEB,oYEB,oWEB, gg);
       } else _w(oXEB, './lib/wxParse/wxParse.wxml', 0, 0);_(oSEB,oWEB);return oSEB;};_2(25, oQEB, e, s, gg, oPEB, "item", "index", '');_(oNEB,oPEB);_(ouCB, oNEB);
      }_(orCB,ouCB);
      }else if (_o(13, e, s, gg)) {
        orCB.wxVkey = 2;var ocEB = _v();
       var odEB = _o(44, e, s, gg);
       var ofEB = _gd('./lib/wxParse/wxParse.wxml', odEB, e_, d_);
       if (ofEB) {
         var oeEB = _1(21,e,s,gg);
         ofEB(oeEB,oeEB,ocEB, gg);
       } else _w(odEB, './lib/wxParse/wxParse.wxml', 0, 0);_(orCB,ocEB);
      } _(r,orCB);
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
      var ohEB = _v();
      if (_o(16, e, s, gg)) {
        ohEB.wxVkey = 1;var okEB = _v();
      if (_o(22, e, s, gg)) {
        okEB.wxVkey = 1;var onEB = _m( "button", ["size", 23,"type", 1], e, s, gg);var ooEB = _v();var opEB = function(otEB,osEB,orEB,gg){var ovEB = _v();
       var owEB = _o(51, otEB, osEB, gg);
       var oyEB = _gd('./lib/wxParse/wxParse.wxml', owEB, e_, d_);
       if (oyEB) {
         var oxEB = _1(21,otEB,osEB,gg);
         oyEB(oxEB,oxEB,ovEB, gg);
       } else _w(owEB, './lib/wxParse/wxParse.wxml', 0, 0);_(orEB,ovEB);return orEB;};_2(25, opEB, e, s, gg, ooEB, "item", "index", '');_(onEB,ooEB);_(okEB,onEB);
      }else if (_o(28, e, s, gg)) {
        okEB.wxVkey = 2;var oAFB = _n("view");_r(oAFB, 'class', 29, e, s, gg);var oBFB = _n("view");_r(oBFB, 'class', 30, e, s, gg);var oCFB = _n("view");_r(oCFB, 'class', 31, e, s, gg);var oDFB = _n("view");_r(oDFB, 'class', 32, e, s, gg);_(oCFB,oDFB);_(oBFB,oCFB);var oEFB = _n("view");_r(oEFB, 'class', 31, e, s, gg);var oFFB = _v();var oGFB = function(oKFB,oJFB,oIFB,gg){var oMFB = _v();
       var oNFB = _o(51, oKFB, oJFB, gg);
       var oPFB = _gd('./lib/wxParse/wxParse.wxml', oNFB, e_, d_);
       if (oPFB) {
         var oOFB = _1(21,oKFB,oJFB,gg);
         oPFB(oOFB,oOFB,oMFB, gg);
       } else _w(oNFB, './lib/wxParse/wxParse.wxml', 0, 0);_(oIFB,oMFB);return oIFB;};_2(25, oGFB, e, s, gg, oFFB, "item", "index", '');_(oEFB,oFFB);_(oBFB,oEFB);_(oAFB,oBFB);_(okEB,oAFB);
      }else if (_o(33, e, s, gg)) {
        okEB.wxVkey = 3;var oSFB = _v();
       var oTFB = _o(34, e, s, gg);
       var oVFB = _gd('./lib/wxParse/wxParse.wxml', oTFB, e_, d_);
       if (oVFB) {
         var oUFB = _1(21,e,s,gg);
         oVFB(oUFB,oUFB,oSFB, gg);
       } else _w(oTFB, './lib/wxParse/wxParse.wxml', 0, 0);_(okEB,oSFB);
      }else if (_o(35, e, s, gg)) {
        okEB.wxVkey = 4;var oYFB = _v();
       var oZFB = _o(36, e, s, gg);
       var obFB = _gd('./lib/wxParse/wxParse.wxml', oZFB, e_, d_);
       if (obFB) {
         var oaFB = _1(21,e,s,gg);
         obFB(oaFB,oaFB,oYFB, gg);
       } else _w(oZFB, './lib/wxParse/wxParse.wxml', 0, 0);_(okEB,oYFB);
      }else if (_o(37, e, s, gg)) {
        okEB.wxVkey = 5;var oeFB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ofFB = _v();var ogFB = function(okFB,ojFB,oiFB,gg){var omFB = _v();
       var onFB = _o(51, okFB, ojFB, gg);
       var opFB = _gd('./lib/wxParse/wxParse.wxml', onFB, e_, d_);
       if (opFB) {
         var ooFB = _1(21,okFB,ojFB,gg);
         opFB(ooFB,ooFB,omFB, gg);
       } else _w(onFB, './lib/wxParse/wxParse.wxml', 0, 0);_(oiFB,omFB);return oiFB;};_2(25, ogFB, e, s, gg, ofFB, "item", "index", '');_(oeFB,ofFB);_(okEB,oeFB);
      }else if (_o(42, e, s, gg)) {
        okEB.wxVkey = 6;var osFB = _m( "view", ["class", 0,"style", 1], e, s, gg);var otFB = _v();var ouFB = function(oyFB,oxFB,owFB,gg){var o_FB = _v();
       var oAGB = _o(51, oyFB, oxFB, gg);
       var oCGB = _gd('./lib/wxParse/wxParse.wxml', oAGB, e_, d_);
       if (oCGB) {
         var oBGB = _1(21,oyFB,oxFB,gg);
         oCGB(oBGB,oBGB,o_FB, gg);
       } else _w(oAGB, './lib/wxParse/wxParse.wxml', 0, 0);_(owFB,o_FB);return owFB;};_2(25, ouFB, e, s, gg, otFB, "item", "index", '');_(osFB,otFB);_(okEB,osFB);
      }else {
        okEB.wxVkey = 7;var oDGB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oFGB = _v();var oGGB = function(oKGB,oJGB,oIGB,gg){var oMGB = _v();
       var oNGB = _o(51, oKGB, oJGB, gg);
       var oPGB = _gd('./lib/wxParse/wxParse.wxml', oNGB, e_, d_);
       if (oPGB) {
         var oOGB = _1(21,oKGB,oJGB,gg);
         oPGB(oOGB,oOGB,oMGB, gg);
       } else _w(oNGB, './lib/wxParse/wxParse.wxml', 0, 0);_(oIGB,oMGB);return oIGB;};_2(25, oGGB, e, s, gg, oFGB, "item", "index", '');_(oDGB,oFGB);_(okEB, oDGB);
      }_(ohEB,okEB);
      }else if (_o(13, e, s, gg)) {
        ohEB.wxVkey = 2;var oSGB = _v();
       var oTGB = _o(44, e, s, gg);
       var oVGB = _gd('./lib/wxParse/wxParse.wxml', oTGB, e_, d_);
       if (oVGB) {
         var oUGB = _1(21,e,s,gg);
         oVGB(oUGB,oUGB,oSGB, gg);
       } else _w(oTGB, './lib/wxParse/wxParse.wxml', 0, 0);_(ohEB,oSGB);
      } _(r,ohEB);
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
      var oXGB = _v();
      if (_o(16, e, s, gg)) {
        oXGB.wxVkey = 1;var oaGB = _v();
      if (_o(22, e, s, gg)) {
        oaGB.wxVkey = 1;var odGB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oeGB = _v();var ofGB = function(ojGB,oiGB,ohGB,gg){var olGB = _v();
       var omGB = _o(52, ojGB, oiGB, gg);
       var ooGB = _gd('./lib/wxParse/wxParse.wxml', omGB, e_, d_);
       if (ooGB) {
         var onGB = _1(21,ojGB,oiGB,gg);
         ooGB(onGB,onGB,olGB, gg);
       } else _w(omGB, './lib/wxParse/wxParse.wxml', 0, 0);_(ohGB,olGB);return ohGB;};_2(25, ofGB, e, s, gg, oeGB, "item", "index", '');_(odGB,oeGB);_(oaGB,odGB);
      }else if (_o(28, e, s, gg)) {
        oaGB.wxVkey = 2;var orGB = _n("view");_r(orGB, 'class', 29, e, s, gg);var osGB = _n("view");_r(osGB, 'class', 30, e, s, gg);var otGB = _n("view");_r(otGB, 'class', 31, e, s, gg);var ouGB = _n("view");_r(ouGB, 'class', 32, e, s, gg);_(otGB,ouGB);_(osGB,otGB);var ovGB = _n("view");_r(ovGB, 'class', 31, e, s, gg);var owGB = _v();var oxGB = function(oAHB,o_GB,ozGB,gg){var oCHB = _v();
       var oDHB = _o(52, oAHB, o_GB, gg);
       var oFHB = _gd('./lib/wxParse/wxParse.wxml', oDHB, e_, d_);
       if (oFHB) {
         var oEHB = _1(21,oAHB,o_GB,gg);
         oFHB(oEHB,oEHB,oCHB, gg);
       } else _w(oDHB, './lib/wxParse/wxParse.wxml', 0, 0);_(ozGB,oCHB);return ozGB;};_2(25, oxGB, e, s, gg, owGB, "item", "index", '');_(ovGB,owGB);_(osGB,ovGB);_(orGB,osGB);_(oaGB,orGB);
      }else if (_o(33, e, s, gg)) {
        oaGB.wxVkey = 3;var oIHB = _v();
       var oJHB = _o(34, e, s, gg);
       var oLHB = _gd('./lib/wxParse/wxParse.wxml', oJHB, e_, d_);
       if (oLHB) {
         var oKHB = _1(21,e,s,gg);
         oLHB(oKHB,oKHB,oIHB, gg);
       } else _w(oJHB, './lib/wxParse/wxParse.wxml', 0, 0);_(oaGB,oIHB);
      }else if (_o(35, e, s, gg)) {
        oaGB.wxVkey = 4;var oOHB = _v();
       var oPHB = _o(36, e, s, gg);
       var oRHB = _gd('./lib/wxParse/wxParse.wxml', oPHB, e_, d_);
       if (oRHB) {
         var oQHB = _1(21,e,s,gg);
         oRHB(oQHB,oQHB,oOHB, gg);
       } else _w(oPHB, './lib/wxParse/wxParse.wxml', 0, 0);_(oaGB,oOHB);
      }else if (_o(37, e, s, gg)) {
        oaGB.wxVkey = 5;var oUHB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oVHB = _v();var oWHB = function(oaHB,oZHB,oYHB,gg){var ocHB = _v();
       var odHB = _o(52, oaHB, oZHB, gg);
       var ofHB = _gd('./lib/wxParse/wxParse.wxml', odHB, e_, d_);
       if (ofHB) {
         var oeHB = _1(21,oaHB,oZHB,gg);
         ofHB(oeHB,oeHB,ocHB, gg);
       } else _w(odHB, './lib/wxParse/wxParse.wxml', 0, 0);_(oYHB,ocHB);return oYHB;};_2(25, oWHB, e, s, gg, oVHB, "item", "index", '');_(oUHB,oVHB);_(oaGB,oUHB);
      }else if (_o(42, e, s, gg)) {
        oaGB.wxVkey = 6;var oiHB = _m( "view", ["class", 0,"style", 1], e, s, gg);var ojHB = _v();var okHB = function(ooHB,onHB,omHB,gg){var oqHB = _v();
       var orHB = _o(52, ooHB, onHB, gg);
       var otHB = _gd('./lib/wxParse/wxParse.wxml', orHB, e_, d_);
       if (otHB) {
         var osHB = _1(21,ooHB,onHB,gg);
         otHB(osHB,osHB,oqHB, gg);
       } else _w(orHB, './lib/wxParse/wxParse.wxml', 0, 0);_(omHB,oqHB);return omHB;};_2(25, okHB, e, s, gg, ojHB, "item", "index", '');_(oiHB,ojHB);_(oaGB,oiHB);
      }else {
        oaGB.wxVkey = 7;var ouHB = _m( "view", ["style", 1,"class", 42], e, s, gg);var owHB = _v();var oxHB = function(oAIB,o_HB,ozHB,gg){var oCIB = _v();
       var oDIB = _o(52, oAIB, o_HB, gg);
       var oFIB = _gd('./lib/wxParse/wxParse.wxml', oDIB, e_, d_);
       if (oFIB) {
         var oEIB = _1(21,oAIB,o_HB,gg);
         oFIB(oEIB,oEIB,oCIB, gg);
       } else _w(oDIB, './lib/wxParse/wxParse.wxml', 0, 0);_(ozHB,oCIB);return ozHB;};_2(25, oxHB, e, s, gg, owHB, "item", "index", '');_(ouHB,owHB);_(oaGB, ouHB);
      }_(oXGB,oaGB);
      }else if (_o(13, e, s, gg)) {
        oXGB.wxVkey = 2;var oIIB = _v();
       var oJIB = _o(44, e, s, gg);
       var oLIB = _gd('./lib/wxParse/wxParse.wxml', oJIB, e_, d_);
       if (oLIB) {
         var oKIB = _1(21,e,s,gg);
         oLIB(oKIB,oKIB,oIIB, gg);
       } else _w(oJIB, './lib/wxParse/wxParse.wxml', 0, 0);_(oXGB,oIIB);
      } _(r,oXGB);
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
      var oNIB = _v();
      if (_o(16, e, s, gg)) {
        oNIB.wxVkey = 1;var oQIB = _v();
      if (_o(22, e, s, gg)) {
        oQIB.wxVkey = 1;var oTIB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oUIB = _v();var oVIB = function(oZIB,oYIB,oXIB,gg){var obIB = _v();
       var ocIB = _o(53, oZIB, oYIB, gg);
       var oeIB = _gd('./lib/wxParse/wxParse.wxml', ocIB, e_, d_);
       if (oeIB) {
         var odIB = _1(21,oZIB,oYIB,gg);
         oeIB(odIB,odIB,obIB, gg);
       } else _w(ocIB, './lib/wxParse/wxParse.wxml', 0, 0);_(oXIB,obIB);return oXIB;};_2(25, oVIB, e, s, gg, oUIB, "item", "index", '');_(oTIB,oUIB);_(oQIB,oTIB);
      }else if (_o(28, e, s, gg)) {
        oQIB.wxVkey = 2;var ohIB = _n("view");_r(ohIB, 'class', 29, e, s, gg);var oiIB = _n("view");_r(oiIB, 'class', 30, e, s, gg);var ojIB = _n("view");_r(ojIB, 'class', 31, e, s, gg);var okIB = _n("view");_r(okIB, 'class', 32, e, s, gg);_(ojIB,okIB);_(oiIB,ojIB);var olIB = _n("view");_r(olIB, 'class', 31, e, s, gg);var omIB = _v();var onIB = function(orIB,oqIB,opIB,gg){var otIB = _v();
       var ouIB = _o(53, orIB, oqIB, gg);
       var owIB = _gd('./lib/wxParse/wxParse.wxml', ouIB, e_, d_);
       if (owIB) {
         var ovIB = _1(21,orIB,oqIB,gg);
         owIB(ovIB,ovIB,otIB, gg);
       } else _w(ouIB, './lib/wxParse/wxParse.wxml', 0, 0);_(opIB,otIB);return opIB;};_2(25, onIB, e, s, gg, omIB, "item", "index", '');_(olIB,omIB);_(oiIB,olIB);_(ohIB,oiIB);_(oQIB,ohIB);
      }else if (_o(33, e, s, gg)) {
        oQIB.wxVkey = 3;var ozIB = _v();
       var o_IB = _o(34, e, s, gg);
       var oBJB = _gd('./lib/wxParse/wxParse.wxml', o_IB, e_, d_);
       if (oBJB) {
         var oAJB = _1(21,e,s,gg);
         oBJB(oAJB,oAJB,ozIB, gg);
       } else _w(o_IB, './lib/wxParse/wxParse.wxml', 0, 0);_(oQIB,ozIB);
      }else if (_o(35, e, s, gg)) {
        oQIB.wxVkey = 4;var oEJB = _v();
       var oFJB = _o(36, e, s, gg);
       var oHJB = _gd('./lib/wxParse/wxParse.wxml', oFJB, e_, d_);
       if (oHJB) {
         var oGJB = _1(21,e,s,gg);
         oHJB(oGJB,oGJB,oEJB, gg);
       } else _w(oFJB, './lib/wxParse/wxParse.wxml', 0, 0);_(oQIB,oEJB);
      }else if (_o(37, e, s, gg)) {
        oQIB.wxVkey = 5;var oKJB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oLJB = _v();var oMJB = function(oQJB,oPJB,oOJB,gg){var oSJB = _v();
       var oTJB = _o(53, oQJB, oPJB, gg);
       var oVJB = _gd('./lib/wxParse/wxParse.wxml', oTJB, e_, d_);
       if (oVJB) {
         var oUJB = _1(21,oQJB,oPJB,gg);
         oVJB(oUJB,oUJB,oSJB, gg);
       } else _w(oTJB, './lib/wxParse/wxParse.wxml', 0, 0);_(oOJB,oSJB);return oOJB;};_2(25, oMJB, e, s, gg, oLJB, "item", "index", '');_(oKJB,oLJB);_(oQIB,oKJB);
      }else if (_o(42, e, s, gg)) {
        oQIB.wxVkey = 6;var oYJB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oZJB = _v();var oaJB = function(oeJB,odJB,ocJB,gg){var ogJB = _v();
       var ohJB = _o(53, oeJB, odJB, gg);
       var ojJB = _gd('./lib/wxParse/wxParse.wxml', ohJB, e_, d_);
       if (ojJB) {
         var oiJB = _1(21,oeJB,odJB,gg);
         ojJB(oiJB,oiJB,ogJB, gg);
       } else _w(ohJB, './lib/wxParse/wxParse.wxml', 0, 0);_(ocJB,ogJB);return ocJB;};_2(25, oaJB, e, s, gg, oZJB, "item", "index", '');_(oYJB,oZJB);_(oQIB,oYJB);
      }else {
        oQIB.wxVkey = 7;var okJB = _m( "view", ["style", 1,"class", 42], e, s, gg);var omJB = _v();var onJB = function(orJB,oqJB,opJB,gg){var otJB = _v();
       var ouJB = _o(53, orJB, oqJB, gg);
       var owJB = _gd('./lib/wxParse/wxParse.wxml', ouJB, e_, d_);
       if (owJB) {
         var ovJB = _1(21,orJB,oqJB,gg);
         owJB(ovJB,ovJB,otJB, gg);
       } else _w(ouJB, './lib/wxParse/wxParse.wxml', 0, 0);_(opJB,otJB);return opJB;};_2(25, onJB, e, s, gg, omJB, "item", "index", '');_(okJB,omJB);_(oQIB, okJB);
      }_(oNIB,oQIB);
      }else if (_o(13, e, s, gg)) {
        oNIB.wxVkey = 2;var ozJB = _v();
       var o_JB = _o(44, e, s, gg);
       var oBKB = _gd('./lib/wxParse/wxParse.wxml', o_JB, e_, d_);
       if (oBKB) {
         var oAKB = _1(21,e,s,gg);
         oBKB(oAKB,oAKB,ozJB, gg);
       } else _w(o_JB, './lib/wxParse/wxParse.wxml', 0, 0);_(oNIB,ozJB);
      } _(r,oNIB);
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
      var oDKB = _v();
      if (_o(16, e, s, gg)) {
        oDKB.wxVkey = 1;var oGKB = _v();
      if (_o(22, e, s, gg)) {
        oGKB.wxVkey = 1;var oJKB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oKKB = _v();var oLKB = function(oPKB,oOKB,oNKB,gg){var oRKB = _v();
       var oSKB = _o(54, oPKB, oOKB, gg);
       var oUKB = _gd('./lib/wxParse/wxParse.wxml', oSKB, e_, d_);
       if (oUKB) {
         var oTKB = _1(21,oPKB,oOKB,gg);
         oUKB(oTKB,oTKB,oRKB, gg);
       } else _w(oSKB, './lib/wxParse/wxParse.wxml', 0, 0);_(oNKB,oRKB);return oNKB;};_2(25, oLKB, e, s, gg, oKKB, "item", "index", '');_(oJKB,oKKB);_(oGKB,oJKB);
      }else if (_o(28, e, s, gg)) {
        oGKB.wxVkey = 2;var oXKB = _n("view");_r(oXKB, 'class', 29, e, s, gg);var oYKB = _n("view");_r(oYKB, 'class', 30, e, s, gg);var oZKB = _n("view");_r(oZKB, 'class', 31, e, s, gg);var oaKB = _n("view");_r(oaKB, 'class', 32, e, s, gg);_(oZKB,oaKB);_(oYKB,oZKB);var obKB = _n("view");_r(obKB, 'class', 31, e, s, gg);var ocKB = _v();var odKB = function(ohKB,ogKB,ofKB,gg){var ojKB = _v();
       var okKB = _o(54, ohKB, ogKB, gg);
       var omKB = _gd('./lib/wxParse/wxParse.wxml', okKB, e_, d_);
       if (omKB) {
         var olKB = _1(21,ohKB,ogKB,gg);
         omKB(olKB,olKB,ojKB, gg);
       } else _w(okKB, './lib/wxParse/wxParse.wxml', 0, 0);_(ofKB,ojKB);return ofKB;};_2(25, odKB, e, s, gg, ocKB, "item", "index", '');_(obKB,ocKB);_(oYKB,obKB);_(oXKB,oYKB);_(oGKB,oXKB);
      }else if (_o(33, e, s, gg)) {
        oGKB.wxVkey = 3;var opKB = _v();
       var oqKB = _o(34, e, s, gg);
       var osKB = _gd('./lib/wxParse/wxParse.wxml', oqKB, e_, d_);
       if (osKB) {
         var orKB = _1(21,e,s,gg);
         osKB(orKB,orKB,opKB, gg);
       } else _w(oqKB, './lib/wxParse/wxParse.wxml', 0, 0);_(oGKB,opKB);
      }else if (_o(35, e, s, gg)) {
        oGKB.wxVkey = 4;var ovKB = _v();
       var owKB = _o(36, e, s, gg);
       var oyKB = _gd('./lib/wxParse/wxParse.wxml', owKB, e_, d_);
       if (oyKB) {
         var oxKB = _1(21,e,s,gg);
         oyKB(oxKB,oxKB,ovKB, gg);
       } else _w(owKB, './lib/wxParse/wxParse.wxml', 0, 0);_(oGKB,ovKB);
      }else if (_o(37, e, s, gg)) {
        oGKB.wxVkey = 5;var oALB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oBLB = _v();var oCLB = function(oGLB,oFLB,oELB,gg){var oILB = _v();
       var oJLB = _o(54, oGLB, oFLB, gg);
       var oLLB = _gd('./lib/wxParse/wxParse.wxml', oJLB, e_, d_);
       if (oLLB) {
         var oKLB = _1(21,oGLB,oFLB,gg);
         oLLB(oKLB,oKLB,oILB, gg);
       } else _w(oJLB, './lib/wxParse/wxParse.wxml', 0, 0);_(oELB,oILB);return oELB;};_2(25, oCLB, e, s, gg, oBLB, "item", "index", '');_(oALB,oBLB);_(oGKB,oALB);
      }else if (_o(42, e, s, gg)) {
        oGKB.wxVkey = 6;var oOLB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oPLB = _v();var oQLB = function(oULB,oTLB,oSLB,gg){var oWLB = _v();
       var oXLB = _o(54, oULB, oTLB, gg);
       var oZLB = _gd('./lib/wxParse/wxParse.wxml', oXLB, e_, d_);
       if (oZLB) {
         var oYLB = _1(21,oULB,oTLB,gg);
         oZLB(oYLB,oYLB,oWLB, gg);
       } else _w(oXLB, './lib/wxParse/wxParse.wxml', 0, 0);_(oSLB,oWLB);return oSLB;};_2(25, oQLB, e, s, gg, oPLB, "item", "index", '');_(oOLB,oPLB);_(oGKB,oOLB);
      }else {
        oGKB.wxVkey = 7;var oaLB = _m( "view", ["style", 1,"class", 42], e, s, gg);var ocLB = _v();var odLB = function(ohLB,ogLB,ofLB,gg){var ojLB = _v();
       var okLB = _o(54, ohLB, ogLB, gg);
       var omLB = _gd('./lib/wxParse/wxParse.wxml', okLB, e_, d_);
       if (omLB) {
         var olLB = _1(21,ohLB,ogLB,gg);
         omLB(olLB,olLB,ojLB, gg);
       } else _w(okLB, './lib/wxParse/wxParse.wxml', 0, 0);_(ofLB,ojLB);return ofLB;};_2(25, odLB, e, s, gg, ocLB, "item", "index", '');_(oaLB,ocLB);_(oGKB, oaLB);
      }_(oDKB,oGKB);
      }else if (_o(13, e, s, gg)) {
        oDKB.wxVkey = 2;var opLB = _v();
       var oqLB = _o(44, e, s, gg);
       var osLB = _gd('./lib/wxParse/wxParse.wxml', oqLB, e_, d_);
       if (osLB) {
         var orLB = _1(21,e,s,gg);
         osLB(orLB,orLB,opLB, gg);
       } else _w(oqLB, './lib/wxParse/wxParse.wxml', 0, 0);_(oDKB,opLB);
      } _(r,oDKB);
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
      var ouLB = _v();
      if (_o(16, e, s, gg)) {
        ouLB.wxVkey = 1;var oxLB = _v();
      if (_o(22, e, s, gg)) {
        oxLB.wxVkey = 1;var o_LB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oAMB = _v();var oBMB = function(oFMB,oEMB,oDMB,gg){var oHMB = _v();
       var oIMB = _o(55, oFMB, oEMB, gg);
       var oKMB = _gd('./lib/wxParse/wxParse.wxml', oIMB, e_, d_);
       if (oKMB) {
         var oJMB = _1(21,oFMB,oEMB,gg);
         oKMB(oJMB,oJMB,oHMB, gg);
       } else _w(oIMB, './lib/wxParse/wxParse.wxml', 0, 0);_(oDMB,oHMB);return oDMB;};_2(25, oBMB, e, s, gg, oAMB, "item", "index", '');_(o_LB,oAMB);_(oxLB,o_LB);
      }else if (_o(28, e, s, gg)) {
        oxLB.wxVkey = 2;var oNMB = _n("view");_r(oNMB, 'class', 29, e, s, gg);var oOMB = _n("view");_r(oOMB, 'class', 30, e, s, gg);var oPMB = _n("view");_r(oPMB, 'class', 31, e, s, gg);var oQMB = _n("view");_r(oQMB, 'class', 32, e, s, gg);_(oPMB,oQMB);_(oOMB,oPMB);var oRMB = _n("view");_r(oRMB, 'class', 31, e, s, gg);var oSMB = _v();var oTMB = function(oXMB,oWMB,oVMB,gg){var oZMB = _v();
       var oaMB = _o(55, oXMB, oWMB, gg);
       var ocMB = _gd('./lib/wxParse/wxParse.wxml', oaMB, e_, d_);
       if (ocMB) {
         var obMB = _1(21,oXMB,oWMB,gg);
         ocMB(obMB,obMB,oZMB, gg);
       } else _w(oaMB, './lib/wxParse/wxParse.wxml', 0, 0);_(oVMB,oZMB);return oVMB;};_2(25, oTMB, e, s, gg, oSMB, "item", "index", '');_(oRMB,oSMB);_(oOMB,oRMB);_(oNMB,oOMB);_(oxLB,oNMB);
      }else if (_o(33, e, s, gg)) {
        oxLB.wxVkey = 3;var ofMB = _v();
       var ogMB = _o(34, e, s, gg);
       var oiMB = _gd('./lib/wxParse/wxParse.wxml', ogMB, e_, d_);
       if (oiMB) {
         var ohMB = _1(21,e,s,gg);
         oiMB(ohMB,ohMB,ofMB, gg);
       } else _w(ogMB, './lib/wxParse/wxParse.wxml', 0, 0);_(oxLB,ofMB);
      }else if (_o(35, e, s, gg)) {
        oxLB.wxVkey = 4;var olMB = _v();
       var omMB = _o(36, e, s, gg);
       var ooMB = _gd('./lib/wxParse/wxParse.wxml', omMB, e_, d_);
       if (ooMB) {
         var onMB = _1(21,e,s,gg);
         ooMB(onMB,onMB,olMB, gg);
       } else _w(omMB, './lib/wxParse/wxParse.wxml', 0, 0);_(oxLB,olMB);
      }else if (_o(37, e, s, gg)) {
        oxLB.wxVkey = 5;var orMB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var osMB = _v();var otMB = function(oxMB,owMB,ovMB,gg){var ozMB = _v();
       var o_MB = _o(55, oxMB, owMB, gg);
       var oBNB = _gd('./lib/wxParse/wxParse.wxml', o_MB, e_, d_);
       if (oBNB) {
         var oANB = _1(21,oxMB,owMB,gg);
         oBNB(oANB,oANB,ozMB, gg);
       } else _w(o_MB, './lib/wxParse/wxParse.wxml', 0, 0);_(ovMB,ozMB);return ovMB;};_2(25, otMB, e, s, gg, osMB, "item", "index", '');_(orMB,osMB);_(oxLB,orMB);
      }else if (_o(42, e, s, gg)) {
        oxLB.wxVkey = 6;var oENB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oFNB = _v();var oGNB = function(oKNB,oJNB,oINB,gg){var oMNB = _v();
       var oNNB = _o(55, oKNB, oJNB, gg);
       var oPNB = _gd('./lib/wxParse/wxParse.wxml', oNNB, e_, d_);
       if (oPNB) {
         var oONB = _1(21,oKNB,oJNB,gg);
         oPNB(oONB,oONB,oMNB, gg);
       } else _w(oNNB, './lib/wxParse/wxParse.wxml', 0, 0);_(oINB,oMNB);return oINB;};_2(25, oGNB, e, s, gg, oFNB, "item", "index", '');_(oENB,oFNB);_(oxLB,oENB);
      }else {
        oxLB.wxVkey = 7;var oQNB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oSNB = _v();var oTNB = function(oXNB,oWNB,oVNB,gg){var oZNB = _v();
       var oaNB = _o(55, oXNB, oWNB, gg);
       var ocNB = _gd('./lib/wxParse/wxParse.wxml', oaNB, e_, d_);
       if (ocNB) {
         var obNB = _1(21,oXNB,oWNB,gg);
         ocNB(obNB,obNB,oZNB, gg);
       } else _w(oaNB, './lib/wxParse/wxParse.wxml', 0, 0);_(oVNB,oZNB);return oVNB;};_2(25, oTNB, e, s, gg, oSNB, "item", "index", '');_(oQNB,oSNB);_(oxLB, oQNB);
      }_(ouLB,oxLB);
      }else if (_o(13, e, s, gg)) {
        ouLB.wxVkey = 2;var ofNB = _v();
       var ogNB = _o(44, e, s, gg);
       var oiNB = _gd('./lib/wxParse/wxParse.wxml', ogNB, e_, d_);
       if (oiNB) {
         var ohNB = _1(21,e,s,gg);
         oiNB(ohNB,ohNB,ofNB, gg);
       } else _w(ogNB, './lib/wxParse/wxParse.wxml', 0, 0);_(ouLB,ofNB);
      } _(r,ouLB);
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
        e_["./lib/wxParse/wxParse.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};d_["./pages/topic/topic.wxml"] = {};
  var m1=function(e,s,r,gg){
    var oAOB = _n("view");_r(oAOB, 'class', 56, e, s, gg);var oBOB = _n("view");_r(oBOB, 'class', 57, e, s, gg);var oCOB = _m( "scroll-view", ["class", 58,"scrollLeft", 1,"scrollX", 2,"style", 3], e, s, gg);var oDOB = _v();var oEOB = function(oIOB,oHOB,oGOB,gg){var oFOB = _m( "view", ["bindtap", 63,"class", 1,"data-id", 2,"data-index", 3], oIOB, oHOB, gg);var oKOB = _n("view");_r(oKOB, 'class', 67, oIOB, oHOB, gg);var oLOB = _o(68, oIOB, oHOB, gg);_(oKOB,oLOB);_(oFOB,oKOB);_(oGOB, oFOB);return oGOB;};_2(62, oEOB, e, s, gg, oDOB, "item", "index", '');_(oCOB,oDOB);_(oBOB,oCOB);var oMOB = _n("view");_r(oMOB, 'class', 69, e, s, gg);var oNOB = _n("view");_r(oNOB, 'class', 70, e, s, gg);var oOOB = _v();var oPOB = function(oTOB,oSOB,oROB,gg){var oUOB = e_["./pages/topic/topic.wxml"].i;var oQOB = _n("view");_r(oQOB, 'class', 26, oTOB, oSOB, gg);var oVOB = _n("view");_r(oVOB, 'class', 72, oTOB, oSOB, gg);var oWOB = _o(73, oTOB, oSOB, gg);_(oVOB,oWOB);_(oQOB,oVOB);var oXOB = _n("view");_r(oXOB, 'class', 74, oTOB, oSOB, gg);_ai(oUOB, '../../lib/wxParse/wxParse.wxml', e_, './pages/topic/topic.wxml', 0, 0);var oZOB = _v();
       var oaOB = _o(75, oTOB, oSOB, gg);
       var ocOB = _gd('./pages/topic/topic.wxml', oaOB, e_, d_);
       if (ocOB) {
         var obOB = _1(76,oTOB,oSOB,gg);
         ocOB(obOB,obOB,oZOB, gg);
       } else _w(oaOB, './pages/topic/topic.wxml', 0, 0);_(oXOB,oZOB);_(oQOB,oXOB);var odOB = _m( "navigator", ["class", 77,"url", 1], oTOB, oSOB, gg);var oeOB = _n("view");_r(oeOB, 'class', 79, oTOB, oSOB, gg);var ofOB = _v();var ogOB = function(okOB,ojOB,oiOB,gg){var ohOB = _n("view");_r(ohOB, 'class', 83, okOB, ojOB, gg);var omOB = _m( "image", ["class", 84,"src", 1], okOB, ojOB, gg);_(ohOB,omOB);_(oiOB, ohOB);return oiOB;};_2(80, ogOB, oTOB, oSOB, gg, ofOB, "iitem", "iindex", '');_(oeOB,ofOB);_(odOB,oeOB);_(oQOB,odOB);var onOB = _n("view");_r(onOB, 'class', 86, oTOB, oSOB, gg);var ooOB = _m( "navigator", ["hoverClass", 87,"url", 1], oTOB, oSOB, gg);var opOB = _n("view");_r(opOB, 'class', 89, oTOB, oSOB, gg);var oqOB = _o(90, oTOB, oSOB, gg);_(opOB,oqOB);_(ooOB,opOB);var orOB = _n("view");_r(orOB, 'class', 91, oTOB, oSOB, gg);var osOB = _o(92, oTOB, oSOB, gg);_(orOB,osOB);_(ooOB,orOB);_(onOB,ooOB);_(oQOB,onOB);oUOB.pop();_(oROB, oQOB);return oROB;};_2(71, oPOB, e, s, gg, oOOB, "item", "index", '');_(oNOB,oOOB);var otOB = _v();
      if (_o(93, e, s, gg)) {
        otOB.wxVkey = 1;var ouOB = _n("view");_r(ouOB, 'class', 94, e, s, gg);var owOB = _n("view");_r(owOB, 'class', 95, e, s, gg);var oxOB = _o(96, e, s, gg);_(owOB,oxOB);_(ouOB,owOB);_(otOB, ouOB);
      } _(oNOB,otOB);_(oMOB,oNOB);_(oBOB,oMOB);_(oAOB,oBOB);_(r,oAOB);
    return r;
  };
        e_["./pages/topic/topic.wxml"]={f:m1,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:.head{display:none}.scrollable{position:absolute;margin-top:-42px}.container,body{width:%%?750rpx?%%;height:100%;background:#f4f4f4}.title-bar{height:%%?78rpx?%%;background:#f4f4f4;line-height:%%?78rpx?%%}.title-bar .tb-list{padding:0 %%?16rpx?%%;margin-left:%%?30rpx?%%;height:%%?36rpx?%%;line-height:%%?36rpx?%%;border-radius:%%?18rpx?%%;font-size:%%?22rpx?%%;text-align:center;border:1px solid rgba(255,255,255,0);display:inline-block;background-color:#f4f4f4}.title-bar .activate{padding:0 %%?16rpx?%%;margin-left:%%?30rpx?%%;height:%%?36rpx?%%;line-height:%%?36rpx?%%;border-radius:%%?18rpx?%%;font-size:%%?22rpx?%%;text-align:center;border:1px solid rgba(255,255,255,0);display:inline-block;color:#fff;background:#cc2020}.tb-list .name{color:#a2a2a2}.goods-list{background:#fff;min-width:%%?300rpx?%%}.goods-list .item{width:%%?750rpx?%%;padding:%%?26rpx?%% %%?20rpx?%%}.goods-list .hide-item{display:none}.goods-list .item .gl-name{font-size:%%?32.6rpx?%%;color:#333;line-height:%%?54rpx?%%;word-break:break-all;word-wrap:break-word;white-space:pre-line}.goods-list .item .gl-bref{color:#101010;font-size:%%?25rpx?%%;word-break:break-all;word-wrap:break-word;white-space:pre-line;line-height:%%?50rpx?%%}.goods-list .item .gl-img{width:100%}.goods-list .item .gl-nav{overflow:hidden;display:block;min-height:%%?271rpx?%%}.goods-list .item .gli-images{width:100%;margin-right:%%?14.5rpx?%%}.goods-list .item .gli-images .img{display:inline-block;float:left;margin:%%?9rpx?%%;width:%%?202rpx?%%;height:%%?202rpx?%%;border:1px solid rgba(187,187,187,1)}.item-option{margin-top:%%?54rpx?%%;height:%%?54.3rpx?%%;margin-bottom:%%?27rpx?%%}.gl-label{display:inline-block;width:%%?108.6rpx?%%;height:%%?54.3rpx?%%;line-height:%%?54.3rpx?%%;color:#cc2020;font-size:%%?28rpx?%%;text-align:center;border-radius:%%?12rpx?%%;float:left}.gl-share{display:inline-block;width:%%?181rpx?%%;height:%%?54.3rpx?%%;line-height:%%?54.3rpx?%%;background:#cc2020;color:#fff;text-align:center;float:right}.cate-nav-body{white-space:nowrap;background:#fff;overflow:hidden}.wxParse-inline{min-height:55px;color:#101010;font-size:13px;word-break:break-all;word-wrap:break-word;white-space:pre-line;line-height:27px}.name-color{color:#fff}.show-loading{margin-top:%%?20rpx?%% 0;width:%%?750rpx?%%;text-align:center;opacity:.7;height:%%?50rpx?%%;line-height:%%?50rpx?%%}.show-loading-text{height:100%;text-align:center}@code-separator-line:__wxRoute = "pages/topic/topic";__wxRouteBegin = true;
define("pages/topic/topic.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../utils/util.js');
var api = require('../../config/api.js');
var WxParse = require('../../lib/wxParse/wxParse.js');
var npage = require('../../services/page.js');
var app = getApp()

Page({
    data: {
        // text:"这是一个页面"
        selectItem: 'all',
        goodId: [3, 4, 6],
        itemName:'',
        goodtype: [],
        typenum : null,
        goodsinfo : [],
        Host:api.Host,
        urls: '/api/promotions/product/',
        'desc': '',
        cur_id : null,
        loading_next:false,
    },
    onLoad: function () {
        // 页面初始化 options为页面跳转所带来的参数
        this.getHotType();
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
    selectType: function(e){
        this.setData({
            selectItem: e.target.dataset.type
        })
    },

    getHotType: function(){
        var that= this
        util.request('/api/handpickedproductlist/', {}).then(res =>{
            if(res.data.handpickedproductlist.length == 0){
                __wxConfig__.reLaunch();
                wx.showToast({
                    title: '暂时没有商品参加活动',
                    success: 'none',
                    complete: wx.redirectTo({url:'../index/index'})
                })
                // return
            }else{
                that.setData({
                    goodtype: res.data.handpickedproductlist,
                    typenum: res.data.handpickedproductlist[0].id,
                    loading_next:false,
                });
                var url= '/api/promotions/product/' + res.data.handpickedproductlist[0].id +'/';
                that.getGoodsInfo(url);
            }
        });
    },
    getGoodsInfo: function(url){
        var that = this
        util.request(url, {}).then(res =>{
            var replyArr = [];
            for (var i=0; i<res.data.products.length; i++){
                replyArr.push(res.data.products[i].description)
            }
            for (let i = 0; i < replyArr.length; i++) {
              WxParse.wxParse('reply' + i, 'html', replyArr[i], that);
              if (i === replyArr.length - 1) {
                WxParse.wxParseTemArray("replyTemArray",'reply', replyArr.length, that)
              }
            }
            that.setData({
                // goodsinfo: list_,
                goodsinfo: res.data.products,
                url: res.data.next_url,
                loading_next: true
            })
            // wx.hideLoading();
        });
    },
    switchCate: function(e){
        this.setData({
            selectItem: 'all',
            goodId: [],
            goodsinfo : [],
            Host:api.Host,
            urls: '/api/promotions/product/',
            'desc': '',
            cur_id : null,
            typenum: e.currentTarget.dataset.id
        })
         var url= '/api/promotions/product/' + this.data.typenum + '/'
        this.getGoodsInfo(url)

    },

    onReachBottom: function(){
        if (this.data.url){
            if (this.data.loading_next){
                var that = this
                var url = this.data.url;
                var data = {};
                var method = 'GET';
                that.setData({
                    loading_next: false,
                })
                npage.nextPage(url, data, method).then(function(res){
                    var replyArr = [];
                    for (var i=0; i<res.data.products.length; i++){
                        replyArr.push(res.data.products[i].description)
                    }
                    for (let i = 0; i < replyArr.length; i++) {
                      WxParse.wxParse('reply' + i, 'html', replyArr[i], that);
                      if (i === replyArr.length - 1) {
                        WxParse.wxParseTemArray("replyTemArray",'reply', replyArr.length, that)
                      }
                    }
                    // 添加下一页数据
                    var list_ = that.data.goodsinfo
                    var res_list = res.data.products
                    list_ = list_.concat(res_list);

                    that.setData({
                        goodsinfo: list_,
                        url: res.data.next_url,
                        loading_next: true,
                    })
                })
            }
            // this.getGoodsInfo(this.data.url);
        }else{
          // wx.showToast({
          //     title:'已经是全部了',
          //     icon: 'none',
          // })
        }
    },

});

});require("pages/topic/topic.js")@code-separator-line:["div","template","view","video","image","block","button","scroll-view","import","navigator"]