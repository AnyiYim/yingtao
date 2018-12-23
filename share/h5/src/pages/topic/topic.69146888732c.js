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
    Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]]]);Z([[6],[[7],[3, "item"]],[3, "styleStr"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]],[3, '-video']]);Z([[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "src"]]);Z([3, 'wxParseImgLoad']);Z([3, 'wxParseImgTap']);Z([[6],[[7],[3, "item"]],[3, "from"]]);Z([[6],[[7],[3, "item"]],[3, "imgIndex"]]);Z([3, 'aspectFit']);Z([a, [[7],[3, "Host"]],[[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "src"]]]);Z([a, [3, 'width:'],[[6],[[7],[3, "item"]],[3, "width"]],[3, 'px;height:'],[[6],[[7],[3, "item"]],[3, "height"]],[3, 'px;'],[[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "style"]]]);Z([3, 'WxEmojiView wxParse-inline']);Z([[6],[[7],[3, "item"]],[3, "textArray"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "node"]], [1, "text"]]);Z([[2,'?:'],[[2, "=="], [[6],[[7],[3, "item"]],[3, "text"]], [1, "\n"]],[1, "wxParse-hide"],[1, ""]]);Z([a, [[6],[[7],[3, "item"]],[3, "text"]]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "node"]], [1, "element"]]);Z([3, 'wxEmoji']);Z([a, [[6],[[7],[3, "item"]],[3, "baseSrc"]],[[6],[[7],[3, "item"]],[3, "text"]]]);Z([[7],[3, "wxParseData"]]);Z([3, 'wxParse0']);Z([[8], "item", [[7],[3, "item"]]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "button"]]);Z([3, 'mini']);Z([3, 'default']);Z([[6],[[7],[3, "item"]],[3, "nodes"]]);Z([3, 'item']);Z([3, 'wxParse1']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "li"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-inner']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-text']]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-li-circle']]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "video"]]);Z([3, 'wxParseVideo']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "img"]]);Z([3, 'wxParseImg']);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "a"]]);Z([3, 'wxParseTagATap']);Z([a, [3, 'wxParse-inline '],[[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]]]);Z([[6],[[6],[[7],[3, "item"]],[3, "attr"]],[3, "href"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tag"]], [1, "table"]]);Z([[2, "=="], [[6],[[7],[3, "item"]],[3, "tagType"]], [1, "block"]]);Z([a, [[6],[[7],[3, "item"]],[3, "classStr"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tag"]],[3, ' wxParse-'],[[6],[[7],[3, "item"]],[3, "tagType"]]]);Z([3, 'WxEmojiView']);Z([3, 'wxParse2']);Z([3, 'wxParse3']);Z([3, 'wxParse4']);Z([3, 'wxParse5']);Z([3, 'wxParse6']);Z([3, 'wxParse7']);Z([3, 'wxParse8']);Z([3, 'wxParse9']);Z([3, 'wxParse10']);Z([3, 'wxParse11']);Z([3, 'wxParse12']);Z([3, 'container']);Z([3, 'title-bar']);Z([3, 'cate-nav-body']);Z([[7],[3, "scrollLeft"]]);Z([3, 'true']);Z([3, 'width: 750rpx;']);Z([[7],[3, "goodtype"]]);Z([3, 'switchCate']);Z([a, [3, 'list-item    '],[[2,'?:'],[[2, "=="], [[7],[3, "typenum"]], [[6],[[7],[3, "item"]],[3, "id"]]],[1, "activate"],[1, "tb-list"]]]);Z([[6],[[7],[3, "item"]],[3, "id"]]);Z([[7],[3, "index"]]);Z([a, [3, 'name  '],[[2,'?:'],[[2, "=="], [[7],[3, "typenum"]], [[6],[[7],[3, "item"]],[3, "id"]]],[1, "name-color"],[1, ""]]]);Z([a, [3, '\n                    '],[[6],[[7],[3, "item"]],[3, "name"]],[3, '\n                ']]);Z([3, 'content']);Z([3, 'goods-list']);Z([[7],[3, "goodsinfo"]]);Z([3, 'gl-name']);Z([a, [[6],[[7],[3, "item"]],[3, "title"]]]);Z([3, 'gl-bref']);Z([3, 'wxParse']);Z([[8], "wxParseData", [[6],[[7],[3, "replyTemArray"]],[[7],[3, "index"]]]]);Z([3, 'gl-nav']);Z([a, [3, '/pages/goods/goods?id\x3d'],[[6],[[7],[3, "item"]],[3, "id"]]]);Z([3, 'gl-img']);Z([[6],[[7],[3, "item"]],[3, "images"]]);Z([3, 'iitem']);Z([3, 'iindex']);Z([3, 'gli-images']);Z([3, 'img']);Z([a, [[7],[3, "Host"]],[[6],[[7],[3, "iitem"]],[3, "thumb"]]]);Z([3, 'item-option']);Z([3, 'navigator-hover']);Z([a, [3, '/pages/goods/goods?id\x3d'],[[6],[[7],[3, "goodId"]],[1, 0]]]);Z([3, 'gl-label']);Z([3, '热卖']);Z([3, 'gl-share']);Z([3, ' 一键分享']);Z([[2, "!"], [[7],[3, "loading_next"]]]);Z([3, 'show-loading']);Z([3, 'show-loading-text']);Z([3, '加载中...']);
  })(z);d_["./lib/wxParse/wxParse.wxml"] = {};d_["./lib/wxParse/wxParse.wxml"]["wxParseVideo"]=function(e,s,r,gg){
    var b='./lib/wxParse/wxParse.wxml:wxParseVideo'
    r.wxVkey=b
    if(p_[b]){_wl(b,'./lib/wxParse/wxParse.wxml');return}
    p_[b]=true
    try{
      var orr = _m( "view", ["class", 0,"style", 1], e, s, gg);var osr = _m( "video", ["class", 2,"src", 1], e, s, gg);_(orr,osr);_(r,orr);
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
      var our = _m( "image", ["class", 0,"data-src", 3,"bindload", 1,"bindtap", 2,"data-from", 3,"data-idx", 4,"mode", 5,"src", 6,"style", 7], e, s, gg);_(r,our);
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
      var owr = _m( "view", ["style", 1,"class", 10], e, s, gg);var oxr = _v();var oyr = function(oBs,oAs,o_r,gg){var oDs = _v();
      if (_o(13, oBs, oAs, gg)) {
        oDs.wxVkey = 1;var oGs = _o(15, oBs, oAs, gg);_(oDs,oGs);
      }else if (_o(16, oBs, oAs, gg)) {
        oDs.wxVkey = 2;var oJs = _m( "image", ["class", 17,"src", 1], e, s, gg);_(oDs,oJs);
      } _(o_r,oDs);return o_r;};_2(12, oyr, e, s, gg, oxr, "item", "index", '');_(owr,oxr);_(r,owr);
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
      var oLs = _v();var oMs = function(oQs,oPs,oOs,gg){var oSs = _v();
       var oTs = _o(20, oQs, oPs, gg);
       var oVs = _gd('./lib/wxParse/wxParse.wxml', oTs, e_, d_);
       if (oVs) {
         var oUs = _1(21,oQs,oPs,gg);
         oVs(oUs,oUs,oSs, gg);
       } else _w(oTs, './lib/wxParse/wxParse.wxml', 0, 0);_(oOs,oSs);return oOs;};_2(19, oMs, e, s, gg, oLs, "item", "index", '');_(r,oLs);
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
      var oXs = _v();
      if (_o(16, e, s, gg)) {
        oXs.wxVkey = 1;var oas = _v();
      if (_o(22, e, s, gg)) {
        oas.wxVkey = 1;var ods = _m( "button", ["size", 23,"type", 1], e, s, gg);var oes = _v();var ofs = function(ojs,ois,ohs,gg){var ols = _v();
       var oms = _o(27, ojs, ois, gg);
       var oos = _gd('./lib/wxParse/wxParse.wxml', oms, e_, d_);
       if (oos) {
         var ons = _1(21,ojs,ois,gg);
         oos(ons,ons,ols, gg);
       } else _w(oms, './lib/wxParse/wxParse.wxml', 0, 0);_(ohs,ols);return ohs;};_2(25, ofs, e, s, gg, oes, "item", "index", '');_(ods,oes);_(oas,ods);
      }else if (_o(28, e, s, gg)) {
        oas.wxVkey = 2;var ors = _n("view");_r(ors, 'class', 29, e, s, gg);var oss = _n("view");_r(oss, 'class', 30, e, s, gg);var ots = _n("view");_r(ots, 'class', 31, e, s, gg);var ous = _n("view");_r(ous, 'class', 32, e, s, gg);_(ots,ous);_(oss,ots);var ovs = _n("view");_r(ovs, 'class', 31, e, s, gg);var ows = _v();var oxs = function(oAt,o_s,ozs,gg){var oCt = _v();
       var oDt = _o(27, oAt, o_s, gg);
       var oFt = _gd('./lib/wxParse/wxParse.wxml', oDt, e_, d_);
       if (oFt) {
         var oEt = _1(21,oAt,o_s,gg);
         oFt(oEt,oEt,oCt, gg);
       } else _w(oDt, './lib/wxParse/wxParse.wxml', 0, 0);_(ozs,oCt);return ozs;};_2(25, oxs, e, s, gg, ows, "item", "index", '');_(ovs,ows);_(oss,ovs);_(ors,oss);_(oas,ors);
      }else if (_o(33, e, s, gg)) {
        oas.wxVkey = 3;var oIt = _v();
       var oJt = _o(34, e, s, gg);
       var oLt = _gd('./lib/wxParse/wxParse.wxml', oJt, e_, d_);
       if (oLt) {
         var oKt = _1(21,e,s,gg);
         oLt(oKt,oKt,oIt, gg);
       } else _w(oJt, './lib/wxParse/wxParse.wxml', 0, 0);_(oas,oIt);
      }else if (_o(35, e, s, gg)) {
        oas.wxVkey = 4;var oOt = _v();
       var oPt = _o(36, e, s, gg);
       var oRt = _gd('./lib/wxParse/wxParse.wxml', oPt, e_, d_);
       if (oRt) {
         var oQt = _1(21,e,s,gg);
         oRt(oQt,oQt,oOt, gg);
       } else _w(oPt, './lib/wxParse/wxParse.wxml', 0, 0);_(oas,oOt);
      }else if (_o(37, e, s, gg)) {
        oas.wxVkey = 5;var oUt = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-c", 39], e, s, gg);var oVt = _v();var oWt = function(oat,oZt,oYt,gg){var oct = _v();
       var odt = _o(27, oat, oZt, gg);
       var oft = _gd('./lib/wxParse/wxParse.wxml', odt, e_, d_);
       if (oft) {
         var oet = _1(21,oat,oZt,gg);
         oft(oet,oet,oct, gg);
       } else _w(odt, './lib/wxParse/wxParse.wxml', 0, 0);_(oYt,oct);return oYt;};_2(25, oWt, e, s, gg, oVt, "item", "index", '');_(oUt,oVt);_(oas,oUt);
      }else if (_o(41, e, s, gg)) {
        oas.wxVkey = 6;var oit = _m( "view", ["class", 0,"style", 1], e, s, gg);var ojt = _v();var okt = function(oot,ont,omt,gg){var oqt = _v();
       var ort = _o(27, oot, ont, gg);
       var ott = _gd('./lib/wxParse/wxParse.wxml', ort, e_, d_);
       if (ott) {
         var ost = _1(21,oot,ont,gg);
         ott(ost,ost,oqt, gg);
       } else _w(ort, './lib/wxParse/wxParse.wxml', 0, 0);_(omt,oqt);return omt;};_2(25, okt, e, s, gg, ojt, "item", "index", '');_(oit,ojt);_(oas,oit);
      }else if (_o(42, e, s, gg)) {
        oas.wxVkey = 7;var owt = _m( "view", ["class", 0,"style", 1], e, s, gg);var oxt = _v();var oyt = function(oBu,oAu,o_t,gg){var oDu = _v();
       var oEu = _o(27, oBu, oAu, gg);
       var oGu = _gd('./lib/wxParse/wxParse.wxml', oEu, e_, d_);
       if (oGu) {
         var oFu = _1(21,oBu,oAu,gg);
         oGu(oFu,oFu,oDu, gg);
       } else _w(oEu, './lib/wxParse/wxParse.wxml', 0, 0);_(o_t,oDu);return o_t;};_2(25, oyt, e, s, gg, oxt, "item", "index", '');_(owt,oxt);_(oas,owt);
      }else {
        oas.wxVkey = 8;var oHu = _m( "view", ["style", 1,"class", 42], e, s, gg);var oJu = _v();var oKu = function(oOu,oNu,oMu,gg){var oQu = _v();
       var oRu = _o(27, oOu, oNu, gg);
       var oTu = _gd('./lib/wxParse/wxParse.wxml', oRu, e_, d_);
       if (oTu) {
         var oSu = _1(21,oOu,oNu,gg);
         oTu(oSu,oSu,oQu, gg);
       } else _w(oRu, './lib/wxParse/wxParse.wxml', 0, 0);_(oMu,oQu);return oMu;};_2(25, oKu, e, s, gg, oJu, "item", "index", '');_(oHu,oJu);_(oas, oHu);
      }_(oXs,oas);
      }else if (_o(13, e, s, gg)) {
        oXs.wxVkey = 2;var oWu = _v();
       var oXu = _o(44, e, s, gg);
       var oZu = _gd('./lib/wxParse/wxParse.wxml', oXu, e_, d_);
       if (oZu) {
         var oYu = _1(21,e,s,gg);
         oZu(oYu,oYu,oWu, gg);
       } else _w(oXu, './lib/wxParse/wxParse.wxml', 0, 0);_(oXs,oWu);
      } _(r,oXs);
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
      var obu = _v();
      if (_o(16, e, s, gg)) {
        obu.wxVkey = 1;var oeu = _v();
      if (_o(22, e, s, gg)) {
        oeu.wxVkey = 1;var ohu = _m( "button", ["size", 23,"type", 1], e, s, gg);var oiu = _v();var oju = function(onu,omu,olu,gg){var opu = _v();
       var oqu = _o(45, onu, omu, gg);
       var osu = _gd('./lib/wxParse/wxParse.wxml', oqu, e_, d_);
       if (osu) {
         var oru = _1(21,onu,omu,gg);
         osu(oru,oru,opu, gg);
       } else _w(oqu, './lib/wxParse/wxParse.wxml', 0, 0);_(olu,opu);return olu;};_2(25, oju, e, s, gg, oiu, "item", "index", '');_(ohu,oiu);_(oeu,ohu);
      }else if (_o(28, e, s, gg)) {
        oeu.wxVkey = 2;var ovu = _n("view");_r(ovu, 'class', 29, e, s, gg);var owu = _n("view");_r(owu, 'class', 30, e, s, gg);var oxu = _n("view");_r(oxu, 'class', 31, e, s, gg);var oyu = _n("view");_r(oyu, 'class', 32, e, s, gg);_(oxu,oyu);_(owu,oxu);var ozu = _n("view");_r(ozu, 'class', 31, e, s, gg);var o_u = _v();var oAv = function(oEv,oDv,oCv,gg){var oGv = _v();
       var oHv = _o(45, oEv, oDv, gg);
       var oJv = _gd('./lib/wxParse/wxParse.wxml', oHv, e_, d_);
       if (oJv) {
         var oIv = _1(21,oEv,oDv,gg);
         oJv(oIv,oIv,oGv, gg);
       } else _w(oHv, './lib/wxParse/wxParse.wxml', 0, 0);_(oCv,oGv);return oCv;};_2(25, oAv, e, s, gg, o_u, "item", "index", '');_(ozu,o_u);_(owu,ozu);_(ovu,owu);_(oeu,ovu);
      }else if (_o(33, e, s, gg)) {
        oeu.wxVkey = 3;var oMv = _v();
       var oNv = _o(34, e, s, gg);
       var oPv = _gd('./lib/wxParse/wxParse.wxml', oNv, e_, d_);
       if (oPv) {
         var oOv = _1(21,e,s,gg);
         oPv(oOv,oOv,oMv, gg);
       } else _w(oNv, './lib/wxParse/wxParse.wxml', 0, 0);_(oeu,oMv);
      }else if (_o(35, e, s, gg)) {
        oeu.wxVkey = 4;var oSv = _v();
       var oTv = _o(36, e, s, gg);
       var oVv = _gd('./lib/wxParse/wxParse.wxml', oTv, e_, d_);
       if (oVv) {
         var oUv = _1(21,e,s,gg);
         oVv(oUv,oUv,oSv, gg);
       } else _w(oTv, './lib/wxParse/wxParse.wxml', 0, 0);_(oeu,oSv);
      }else if (_o(37, e, s, gg)) {
        oeu.wxVkey = 5;var oYv = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oZv = _v();var oav = function(oev,odv,ocv,gg){var ogv = _v();
       var ohv = _o(45, oev, odv, gg);
       var ojv = _gd('./lib/wxParse/wxParse.wxml', ohv, e_, d_);
       if (ojv) {
         var oiv = _1(21,oev,odv,gg);
         ojv(oiv,oiv,ogv, gg);
       } else _w(ohv, './lib/wxParse/wxParse.wxml', 0, 0);_(ocv,ogv);return ocv;};_2(25, oav, e, s, gg, oZv, "item", "index", '');_(oYv,oZv);_(oeu,oYv);
      }else if (_o(42, e, s, gg)) {
        oeu.wxVkey = 6;var omv = _m( "view", ["class", 0,"style", 1], e, s, gg);var onv = _v();var oov = function(osv,orv,oqv,gg){var ouv = _v();
       var ovv = _o(45, osv, orv, gg);
       var oxv = _gd('./lib/wxParse/wxParse.wxml', ovv, e_, d_);
       if (oxv) {
         var owv = _1(21,osv,orv,gg);
         oxv(owv,owv,ouv, gg);
       } else _w(ovv, './lib/wxParse/wxParse.wxml', 0, 0);_(oqv,ouv);return oqv;};_2(25, oov, e, s, gg, onv, "item", "index", '');_(omv,onv);_(oeu,omv);
      }else {
        oeu.wxVkey = 7;var oyv = _m( "view", ["style", 1,"class", 42], e, s, gg);var o_v = _v();var oAw = function(oEw,oDw,oCw,gg){var oGw = _v();
       var oHw = _o(45, oEw, oDw, gg);
       var oJw = _gd('./lib/wxParse/wxParse.wxml', oHw, e_, d_);
       if (oJw) {
         var oIw = _1(21,oEw,oDw,gg);
         oJw(oIw,oIw,oGw, gg);
       } else _w(oHw, './lib/wxParse/wxParse.wxml', 0, 0);_(oCw,oGw);return oCw;};_2(25, oAw, e, s, gg, o_v, "item", "index", '');_(oyv,o_v);_(oeu, oyv);
      }_(obu,oeu);
      }else if (_o(13, e, s, gg)) {
        obu.wxVkey = 2;var oMw = _v();
       var oNw = _o(44, e, s, gg);
       var oPw = _gd('./lib/wxParse/wxParse.wxml', oNw, e_, d_);
       if (oPw) {
         var oOw = _1(21,e,s,gg);
         oPw(oOw,oOw,oMw, gg);
       } else _w(oNw, './lib/wxParse/wxParse.wxml', 0, 0);_(obu,oMw);
      } _(r,obu);
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
      var oRw = _v();
      if (_o(16, e, s, gg)) {
        oRw.wxVkey = 1;var oUw = _v();
      if (_o(22, e, s, gg)) {
        oUw.wxVkey = 1;var oXw = _m( "button", ["size", 23,"type", 1], e, s, gg);var oYw = _v();var oZw = function(odw,ocw,obw,gg){var ofw = _v();
       var ogw = _o(46, odw, ocw, gg);
       var oiw = _gd('./lib/wxParse/wxParse.wxml', ogw, e_, d_);
       if (oiw) {
         var ohw = _1(21,odw,ocw,gg);
         oiw(ohw,ohw,ofw, gg);
       } else _w(ogw, './lib/wxParse/wxParse.wxml', 0, 0);_(obw,ofw);return obw;};_2(25, oZw, e, s, gg, oYw, "item", "index", '');_(oXw,oYw);_(oUw,oXw);
      }else if (_o(28, e, s, gg)) {
        oUw.wxVkey = 2;var olw = _n("view");_r(olw, 'class', 29, e, s, gg);var omw = _n("view");_r(omw, 'class', 30, e, s, gg);var onw = _n("view");_r(onw, 'class', 31, e, s, gg);var oow = _n("view");_r(oow, 'class', 32, e, s, gg);_(onw,oow);_(omw,onw);var opw = _n("view");_r(opw, 'class', 31, e, s, gg);var oqw = _v();var orw = function(ovw,ouw,otw,gg){var oxw = _v();
       var oyw = _o(46, ovw, ouw, gg);
       var o_w = _gd('./lib/wxParse/wxParse.wxml', oyw, e_, d_);
       if (o_w) {
         var ozw = _1(21,ovw,ouw,gg);
         o_w(ozw,ozw,oxw, gg);
       } else _w(oyw, './lib/wxParse/wxParse.wxml', 0, 0);_(otw,oxw);return otw;};_2(25, orw, e, s, gg, oqw, "item", "index", '');_(opw,oqw);_(omw,opw);_(olw,omw);_(oUw,olw);
      }else if (_o(33, e, s, gg)) {
        oUw.wxVkey = 3;var oCx = _v();
       var oDx = _o(34, e, s, gg);
       var oFx = _gd('./lib/wxParse/wxParse.wxml', oDx, e_, d_);
       if (oFx) {
         var oEx = _1(21,e,s,gg);
         oFx(oEx,oEx,oCx, gg);
       } else _w(oDx, './lib/wxParse/wxParse.wxml', 0, 0);_(oUw,oCx);
      }else if (_o(35, e, s, gg)) {
        oUw.wxVkey = 4;var oIx = _v();
       var oJx = _o(36, e, s, gg);
       var oLx = _gd('./lib/wxParse/wxParse.wxml', oJx, e_, d_);
       if (oLx) {
         var oKx = _1(21,e,s,gg);
         oLx(oKx,oKx,oIx, gg);
       } else _w(oJx, './lib/wxParse/wxParse.wxml', 0, 0);_(oUw,oIx);
      }else if (_o(37, e, s, gg)) {
        oUw.wxVkey = 5;var oOx = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oPx = _v();var oQx = function(oUx,oTx,oSx,gg){var oWx = _v();
       var oXx = _o(46, oUx, oTx, gg);
       var oZx = _gd('./lib/wxParse/wxParse.wxml', oXx, e_, d_);
       if (oZx) {
         var oYx = _1(21,oUx,oTx,gg);
         oZx(oYx,oYx,oWx, gg);
       } else _w(oXx, './lib/wxParse/wxParse.wxml', 0, 0);_(oSx,oWx);return oSx;};_2(25, oQx, e, s, gg, oPx, "item", "index", '');_(oOx,oPx);_(oUw,oOx);
      }else if (_o(42, e, s, gg)) {
        oUw.wxVkey = 6;var ocx = _m( "view", ["class", 0,"style", 1], e, s, gg);var odx = _v();var oex = function(oix,ohx,ogx,gg){var okx = _v();
       var olx = _o(46, oix, ohx, gg);
       var onx = _gd('./lib/wxParse/wxParse.wxml', olx, e_, d_);
       if (onx) {
         var omx = _1(21,oix,ohx,gg);
         onx(omx,omx,okx, gg);
       } else _w(olx, './lib/wxParse/wxParse.wxml', 0, 0);_(ogx,okx);return ogx;};_2(25, oex, e, s, gg, odx, "item", "index", '');_(ocx,odx);_(oUw,ocx);
      }else {
        oUw.wxVkey = 7;var oox = _m( "view", ["style", 1,"class", 42], e, s, gg);var oqx = _v();var orx = function(ovx,oux,otx,gg){var oxx = _v();
       var oyx = _o(46, ovx, oux, gg);
       var o_x = _gd('./lib/wxParse/wxParse.wxml', oyx, e_, d_);
       if (o_x) {
         var ozx = _1(21,ovx,oux,gg);
         o_x(ozx,ozx,oxx, gg);
       } else _w(oyx, './lib/wxParse/wxParse.wxml', 0, 0);_(otx,oxx);return otx;};_2(25, orx, e, s, gg, oqx, "item", "index", '');_(oox,oqx);_(oUw, oox);
      }_(oRw,oUw);
      }else if (_o(13, e, s, gg)) {
        oRw.wxVkey = 2;var oCy = _v();
       var oDy = _o(44, e, s, gg);
       var oFy = _gd('./lib/wxParse/wxParse.wxml', oDy, e_, d_);
       if (oFy) {
         var oEy = _1(21,e,s,gg);
         oFy(oEy,oEy,oCy, gg);
       } else _w(oDy, './lib/wxParse/wxParse.wxml', 0, 0);_(oRw,oCy);
      } _(r,oRw);
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
      var oHy = _v();
      if (_o(16, e, s, gg)) {
        oHy.wxVkey = 1;var oKy = _v();
      if (_o(22, e, s, gg)) {
        oKy.wxVkey = 1;var oNy = _m( "button", ["size", 23,"type", 1], e, s, gg);var oOy = _v();var oPy = function(oTy,oSy,oRy,gg){var oVy = _v();
       var oWy = _o(47, oTy, oSy, gg);
       var oYy = _gd('./lib/wxParse/wxParse.wxml', oWy, e_, d_);
       if (oYy) {
         var oXy = _1(21,oTy,oSy,gg);
         oYy(oXy,oXy,oVy, gg);
       } else _w(oWy, './lib/wxParse/wxParse.wxml', 0, 0);_(oRy,oVy);return oRy;};_2(25, oPy, e, s, gg, oOy, "item", "index", '');_(oNy,oOy);_(oKy,oNy);
      }else if (_o(28, e, s, gg)) {
        oKy.wxVkey = 2;var oby = _n("view");_r(oby, 'class', 29, e, s, gg);var ocy = _n("view");_r(ocy, 'class', 30, e, s, gg);var ody = _n("view");_r(ody, 'class', 31, e, s, gg);var oey = _n("view");_r(oey, 'class', 32, e, s, gg);_(ody,oey);_(ocy,ody);var ofy = _n("view");_r(ofy, 'class', 31, e, s, gg);var ogy = _v();var ohy = function(oly,oky,ojy,gg){var ony = _v();
       var ooy = _o(47, oly, oky, gg);
       var oqy = _gd('./lib/wxParse/wxParse.wxml', ooy, e_, d_);
       if (oqy) {
         var opy = _1(21,oly,oky,gg);
         oqy(opy,opy,ony, gg);
       } else _w(ooy, './lib/wxParse/wxParse.wxml', 0, 0);_(ojy,ony);return ojy;};_2(25, ohy, e, s, gg, ogy, "item", "index", '');_(ofy,ogy);_(ocy,ofy);_(oby,ocy);_(oKy,oby);
      }else if (_o(33, e, s, gg)) {
        oKy.wxVkey = 3;var oty = _v();
       var ouy = _o(34, e, s, gg);
       var owy = _gd('./lib/wxParse/wxParse.wxml', ouy, e_, d_);
       if (owy) {
         var ovy = _1(21,e,s,gg);
         owy(ovy,ovy,oty, gg);
       } else _w(ouy, './lib/wxParse/wxParse.wxml', 0, 0);_(oKy,oty);
      }else if (_o(35, e, s, gg)) {
        oKy.wxVkey = 4;var ozy = _v();
       var o_y = _o(36, e, s, gg);
       var oBz = _gd('./lib/wxParse/wxParse.wxml', o_y, e_, d_);
       if (oBz) {
         var oAz = _1(21,e,s,gg);
         oBz(oAz,oAz,ozy, gg);
       } else _w(o_y, './lib/wxParse/wxParse.wxml', 0, 0);_(oKy,ozy);
      }else if (_o(37, e, s, gg)) {
        oKy.wxVkey = 5;var oEz = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oFz = _v();var oGz = function(oKz,oJz,oIz,gg){var oMz = _v();
       var oNz = _o(47, oKz, oJz, gg);
       var oPz = _gd('./lib/wxParse/wxParse.wxml', oNz, e_, d_);
       if (oPz) {
         var oOz = _1(21,oKz,oJz,gg);
         oPz(oOz,oOz,oMz, gg);
       } else _w(oNz, './lib/wxParse/wxParse.wxml', 0, 0);_(oIz,oMz);return oIz;};_2(25, oGz, e, s, gg, oFz, "item", "index", '');_(oEz,oFz);_(oKy,oEz);
      }else if (_o(42, e, s, gg)) {
        oKy.wxVkey = 6;var oSz = _m( "view", ["class", 0,"style", 1], e, s, gg);var oTz = _v();var oUz = function(oYz,oXz,oWz,gg){var oaz = _v();
       var obz = _o(47, oYz, oXz, gg);
       var odz = _gd('./lib/wxParse/wxParse.wxml', obz, e_, d_);
       if (odz) {
         var ocz = _1(21,oYz,oXz,gg);
         odz(ocz,ocz,oaz, gg);
       } else _w(obz, './lib/wxParse/wxParse.wxml', 0, 0);_(oWz,oaz);return oWz;};_2(25, oUz, e, s, gg, oTz, "item", "index", '');_(oSz,oTz);_(oKy,oSz);
      }else {
        oKy.wxVkey = 7;var oez = _m( "view", ["style", 1,"class", 42], e, s, gg);var ogz = _v();var ohz = function(olz,okz,ojz,gg){var onz = _v();
       var ooz = _o(47, olz, okz, gg);
       var oqz = _gd('./lib/wxParse/wxParse.wxml', ooz, e_, d_);
       if (oqz) {
         var opz = _1(21,olz,okz,gg);
         oqz(opz,opz,onz, gg);
       } else _w(ooz, './lib/wxParse/wxParse.wxml', 0, 0);_(ojz,onz);return ojz;};_2(25, ohz, e, s, gg, ogz, "item", "index", '');_(oez,ogz);_(oKy, oez);
      }_(oHy,oKy);
      }else if (_o(13, e, s, gg)) {
        oHy.wxVkey = 2;var otz = _v();
       var ouz = _o(44, e, s, gg);
       var owz = _gd('./lib/wxParse/wxParse.wxml', ouz, e_, d_);
       if (owz) {
         var ovz = _1(21,e,s,gg);
         owz(ovz,ovz,otz, gg);
       } else _w(ouz, './lib/wxParse/wxParse.wxml', 0, 0);_(oHy,otz);
      } _(r,oHy);
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
      var oyz = _v();
      if (_o(16, e, s, gg)) {
        oyz.wxVkey = 1;var oA_ = _v();
      if (_o(22, e, s, gg)) {
        oA_.wxVkey = 1;var oD_ = _m( "button", ["size", 23,"type", 1], e, s, gg);var oE_ = _v();var oF_ = function(oJ_,oI_,oH_,gg){var oL_ = _v();
       var oM_ = _o(48, oJ_, oI_, gg);
       var oO_ = _gd('./lib/wxParse/wxParse.wxml', oM_, e_, d_);
       if (oO_) {
         var oN_ = _1(21,oJ_,oI_,gg);
         oO_(oN_,oN_,oL_, gg);
       } else _w(oM_, './lib/wxParse/wxParse.wxml', 0, 0);_(oH_,oL_);return oH_;};_2(25, oF_, e, s, gg, oE_, "item", "index", '');_(oD_,oE_);_(oA_,oD_);
      }else if (_o(28, e, s, gg)) {
        oA_.wxVkey = 2;var oR_ = _n("view");_r(oR_, 'class', 29, e, s, gg);var oS_ = _n("view");_r(oS_, 'class', 30, e, s, gg);var oT_ = _n("view");_r(oT_, 'class', 31, e, s, gg);var oU_ = _n("view");_r(oU_, 'class', 32, e, s, gg);_(oT_,oU_);_(oS_,oT_);var oV_ = _n("view");_r(oV_, 'class', 31, e, s, gg);var oW_ = _v();var oX_ = function(ob_,oa_,oZ_,gg){var od_ = _v();
       var oe_ = _o(48, ob_, oa_, gg);
       var og_ = _gd('./lib/wxParse/wxParse.wxml', oe_, e_, d_);
       if (og_) {
         var of_ = _1(21,ob_,oa_,gg);
         og_(of_,of_,od_, gg);
       } else _w(oe_, './lib/wxParse/wxParse.wxml', 0, 0);_(oZ_,od_);return oZ_;};_2(25, oX_, e, s, gg, oW_, "item", "index", '');_(oV_,oW_);_(oS_,oV_);_(oR_,oS_);_(oA_,oR_);
      }else if (_o(33, e, s, gg)) {
        oA_.wxVkey = 3;var oj_ = _v();
       var ok_ = _o(34, e, s, gg);
       var om_ = _gd('./lib/wxParse/wxParse.wxml', ok_, e_, d_);
       if (om_) {
         var ol_ = _1(21,e,s,gg);
         om_(ol_,ol_,oj_, gg);
       } else _w(ok_, './lib/wxParse/wxParse.wxml', 0, 0);_(oA_,oj_);
      }else if (_o(35, e, s, gg)) {
        oA_.wxVkey = 4;var op_ = _v();
       var oq_ = _o(36, e, s, gg);
       var os_ = _gd('./lib/wxParse/wxParse.wxml', oq_, e_, d_);
       if (os_) {
         var or_ = _1(21,e,s,gg);
         os_(or_,or_,op_, gg);
       } else _w(oq_, './lib/wxParse/wxParse.wxml', 0, 0);_(oA_,op_);
      }else if (_o(37, e, s, gg)) {
        oA_.wxVkey = 5;var ov_ = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ow_ = _v();var ox_ = function(oAAB,o__,oz_,gg){var oCAB = _v();
       var oDAB = _o(48, oAAB, o__, gg);
       var oFAB = _gd('./lib/wxParse/wxParse.wxml', oDAB, e_, d_);
       if (oFAB) {
         var oEAB = _1(21,oAAB,o__,gg);
         oFAB(oEAB,oEAB,oCAB, gg);
       } else _w(oDAB, './lib/wxParse/wxParse.wxml', 0, 0);_(oz_,oCAB);return oz_;};_2(25, ox_, e, s, gg, ow_, "item", "index", '');_(ov_,ow_);_(oA_,ov_);
      }else if (_o(42, e, s, gg)) {
        oA_.wxVkey = 6;var oIAB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oJAB = _v();var oKAB = function(oOAB,oNAB,oMAB,gg){var oQAB = _v();
       var oRAB = _o(48, oOAB, oNAB, gg);
       var oTAB = _gd('./lib/wxParse/wxParse.wxml', oRAB, e_, d_);
       if (oTAB) {
         var oSAB = _1(21,oOAB,oNAB,gg);
         oTAB(oSAB,oSAB,oQAB, gg);
       } else _w(oRAB, './lib/wxParse/wxParse.wxml', 0, 0);_(oMAB,oQAB);return oMAB;};_2(25, oKAB, e, s, gg, oJAB, "item", "index", '');_(oIAB,oJAB);_(oA_,oIAB);
      }else {
        oA_.wxVkey = 7;var oUAB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oWAB = _v();var oXAB = function(obAB,oaAB,oZAB,gg){var odAB = _v();
       var oeAB = _o(48, obAB, oaAB, gg);
       var ogAB = _gd('./lib/wxParse/wxParse.wxml', oeAB, e_, d_);
       if (ogAB) {
         var ofAB = _1(21,obAB,oaAB,gg);
         ogAB(ofAB,ofAB,odAB, gg);
       } else _w(oeAB, './lib/wxParse/wxParse.wxml', 0, 0);_(oZAB,odAB);return oZAB;};_2(25, oXAB, e, s, gg, oWAB, "item", "index", '');_(oUAB,oWAB);_(oA_, oUAB);
      }_(oyz,oA_);
      }else if (_o(13, e, s, gg)) {
        oyz.wxVkey = 2;var ojAB = _v();
       var okAB = _o(44, e, s, gg);
       var omAB = _gd('./lib/wxParse/wxParse.wxml', okAB, e_, d_);
       if (omAB) {
         var olAB = _1(21,e,s,gg);
         omAB(olAB,olAB,ojAB, gg);
       } else _w(okAB, './lib/wxParse/wxParse.wxml', 0, 0);_(oyz,ojAB);
      } _(r,oyz);
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
      var ooAB = _v();
      if (_o(16, e, s, gg)) {
        ooAB.wxVkey = 1;var orAB = _v();
      if (_o(22, e, s, gg)) {
        orAB.wxVkey = 1;var ouAB = _m( "button", ["size", 23,"type", 1], e, s, gg);var ovAB = _v();var owAB = function(o_AB,ozAB,oyAB,gg){var oBBB = _v();
       var oCBB = _o(49, o_AB, ozAB, gg);
       var oEBB = _gd('./lib/wxParse/wxParse.wxml', oCBB, e_, d_);
       if (oEBB) {
         var oDBB = _1(21,o_AB,ozAB,gg);
         oEBB(oDBB,oDBB,oBBB, gg);
       } else _w(oCBB, './lib/wxParse/wxParse.wxml', 0, 0);_(oyAB,oBBB);return oyAB;};_2(25, owAB, e, s, gg, ovAB, "item", "index", '');_(ouAB,ovAB);_(orAB,ouAB);
      }else if (_o(28, e, s, gg)) {
        orAB.wxVkey = 2;var oHBB = _n("view");_r(oHBB, 'class', 29, e, s, gg);var oIBB = _n("view");_r(oIBB, 'class', 30, e, s, gg);var oJBB = _n("view");_r(oJBB, 'class', 31, e, s, gg);var oKBB = _n("view");_r(oKBB, 'class', 32, e, s, gg);_(oJBB,oKBB);_(oIBB,oJBB);var oLBB = _n("view");_r(oLBB, 'class', 31, e, s, gg);var oMBB = _v();var oNBB = function(oRBB,oQBB,oPBB,gg){var oTBB = _v();
       var oUBB = _o(49, oRBB, oQBB, gg);
       var oWBB = _gd('./lib/wxParse/wxParse.wxml', oUBB, e_, d_);
       if (oWBB) {
         var oVBB = _1(21,oRBB,oQBB,gg);
         oWBB(oVBB,oVBB,oTBB, gg);
       } else _w(oUBB, './lib/wxParse/wxParse.wxml', 0, 0);_(oPBB,oTBB);return oPBB;};_2(25, oNBB, e, s, gg, oMBB, "item", "index", '');_(oLBB,oMBB);_(oIBB,oLBB);_(oHBB,oIBB);_(orAB,oHBB);
      }else if (_o(33, e, s, gg)) {
        orAB.wxVkey = 3;var oZBB = _v();
       var oaBB = _o(34, e, s, gg);
       var ocBB = _gd('./lib/wxParse/wxParse.wxml', oaBB, e_, d_);
       if (ocBB) {
         var obBB = _1(21,e,s,gg);
         ocBB(obBB,obBB,oZBB, gg);
       } else _w(oaBB, './lib/wxParse/wxParse.wxml', 0, 0);_(orAB,oZBB);
      }else if (_o(35, e, s, gg)) {
        orAB.wxVkey = 4;var ofBB = _v();
       var ogBB = _o(36, e, s, gg);
       var oiBB = _gd('./lib/wxParse/wxParse.wxml', ogBB, e_, d_);
       if (oiBB) {
         var ohBB = _1(21,e,s,gg);
         oiBB(ohBB,ohBB,ofBB, gg);
       } else _w(ogBB, './lib/wxParse/wxParse.wxml', 0, 0);_(orAB,ofBB);
      }else if (_o(37, e, s, gg)) {
        orAB.wxVkey = 5;var olBB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var omBB = _v();var onBB = function(orBB,oqBB,opBB,gg){var otBB = _v();
       var ouBB = _o(49, orBB, oqBB, gg);
       var owBB = _gd('./lib/wxParse/wxParse.wxml', ouBB, e_, d_);
       if (owBB) {
         var ovBB = _1(21,orBB,oqBB,gg);
         owBB(ovBB,ovBB,otBB, gg);
       } else _w(ouBB, './lib/wxParse/wxParse.wxml', 0, 0);_(opBB,otBB);return opBB;};_2(25, onBB, e, s, gg, omBB, "item", "index", '');_(olBB,omBB);_(orAB,olBB);
      }else if (_o(42, e, s, gg)) {
        orAB.wxVkey = 6;var ozBB = _m( "view", ["class", 0,"style", 1], e, s, gg);var o_BB = _v();var oACB = function(oECB,oDCB,oCCB,gg){var oGCB = _v();
       var oHCB = _o(49, oECB, oDCB, gg);
       var oJCB = _gd('./lib/wxParse/wxParse.wxml', oHCB, e_, d_);
       if (oJCB) {
         var oICB = _1(21,oECB,oDCB,gg);
         oJCB(oICB,oICB,oGCB, gg);
       } else _w(oHCB, './lib/wxParse/wxParse.wxml', 0, 0);_(oCCB,oGCB);return oCCB;};_2(25, oACB, e, s, gg, o_BB, "item", "index", '');_(ozBB,o_BB);_(orAB,ozBB);
      }else {
        orAB.wxVkey = 7;var oKCB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oMCB = _v();var oNCB = function(oRCB,oQCB,oPCB,gg){var oTCB = _v();
       var oUCB = _o(49, oRCB, oQCB, gg);
       var oWCB = _gd('./lib/wxParse/wxParse.wxml', oUCB, e_, d_);
       if (oWCB) {
         var oVCB = _1(21,oRCB,oQCB,gg);
         oWCB(oVCB,oVCB,oTCB, gg);
       } else _w(oUCB, './lib/wxParse/wxParse.wxml', 0, 0);_(oPCB,oTCB);return oPCB;};_2(25, oNCB, e, s, gg, oMCB, "item", "index", '');_(oKCB,oMCB);_(orAB, oKCB);
      }_(ooAB,orAB);
      }else if (_o(13, e, s, gg)) {
        ooAB.wxVkey = 2;var oZCB = _v();
       var oaCB = _o(44, e, s, gg);
       var ocCB = _gd('./lib/wxParse/wxParse.wxml', oaCB, e_, d_);
       if (ocCB) {
         var obCB = _1(21,e,s,gg);
         ocCB(obCB,obCB,oZCB, gg);
       } else _w(oaCB, './lib/wxParse/wxParse.wxml', 0, 0);_(ooAB,oZCB);
      } _(r,ooAB);
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
      var oeCB = _v();
      if (_o(16, e, s, gg)) {
        oeCB.wxVkey = 1;var ohCB = _v();
      if (_o(22, e, s, gg)) {
        ohCB.wxVkey = 1;var okCB = _m( "button", ["size", 23,"type", 1], e, s, gg);var olCB = _v();var omCB = function(oqCB,opCB,ooCB,gg){var osCB = _v();
       var otCB = _o(50, oqCB, opCB, gg);
       var ovCB = _gd('./lib/wxParse/wxParse.wxml', otCB, e_, d_);
       if (ovCB) {
         var ouCB = _1(21,oqCB,opCB,gg);
         ovCB(ouCB,ouCB,osCB, gg);
       } else _w(otCB, './lib/wxParse/wxParse.wxml', 0, 0);_(ooCB,osCB);return ooCB;};_2(25, omCB, e, s, gg, olCB, "item", "index", '');_(okCB,olCB);_(ohCB,okCB);
      }else if (_o(28, e, s, gg)) {
        ohCB.wxVkey = 2;var oyCB = _n("view");_r(oyCB, 'class', 29, e, s, gg);var ozCB = _n("view");_r(ozCB, 'class', 30, e, s, gg);var o_CB = _n("view");_r(o_CB, 'class', 31, e, s, gg);var oADB = _n("view");_r(oADB, 'class', 32, e, s, gg);_(o_CB,oADB);_(ozCB,o_CB);var oBDB = _n("view");_r(oBDB, 'class', 31, e, s, gg);var oCDB = _v();var oDDB = function(oHDB,oGDB,oFDB,gg){var oJDB = _v();
       var oKDB = _o(50, oHDB, oGDB, gg);
       var oMDB = _gd('./lib/wxParse/wxParse.wxml', oKDB, e_, d_);
       if (oMDB) {
         var oLDB = _1(21,oHDB,oGDB,gg);
         oMDB(oLDB,oLDB,oJDB, gg);
       } else _w(oKDB, './lib/wxParse/wxParse.wxml', 0, 0);_(oFDB,oJDB);return oFDB;};_2(25, oDDB, e, s, gg, oCDB, "item", "index", '');_(oBDB,oCDB);_(ozCB,oBDB);_(oyCB,ozCB);_(ohCB,oyCB);
      }else if (_o(33, e, s, gg)) {
        ohCB.wxVkey = 3;var oPDB = _v();
       var oQDB = _o(34, e, s, gg);
       var oSDB = _gd('./lib/wxParse/wxParse.wxml', oQDB, e_, d_);
       if (oSDB) {
         var oRDB = _1(21,e,s,gg);
         oSDB(oRDB,oRDB,oPDB, gg);
       } else _w(oQDB, './lib/wxParse/wxParse.wxml', 0, 0);_(ohCB,oPDB);
      }else if (_o(35, e, s, gg)) {
        ohCB.wxVkey = 4;var oVDB = _v();
       var oWDB = _o(36, e, s, gg);
       var oYDB = _gd('./lib/wxParse/wxParse.wxml', oWDB, e_, d_);
       if (oYDB) {
         var oXDB = _1(21,e,s,gg);
         oYDB(oXDB,oXDB,oVDB, gg);
       } else _w(oWDB, './lib/wxParse/wxParse.wxml', 0, 0);_(ohCB,oVDB);
      }else if (_o(37, e, s, gg)) {
        ohCB.wxVkey = 5;var obDB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ocDB = _v();var odDB = function(ohDB,ogDB,ofDB,gg){var ojDB = _v();
       var okDB = _o(50, ohDB, ogDB, gg);
       var omDB = _gd('./lib/wxParse/wxParse.wxml', okDB, e_, d_);
       if (omDB) {
         var olDB = _1(21,ohDB,ogDB,gg);
         omDB(olDB,olDB,ojDB, gg);
       } else _w(okDB, './lib/wxParse/wxParse.wxml', 0, 0);_(ofDB,ojDB);return ofDB;};_2(25, odDB, e, s, gg, ocDB, "item", "index", '');_(obDB,ocDB);_(ohCB,obDB);
      }else if (_o(42, e, s, gg)) {
        ohCB.wxVkey = 6;var opDB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oqDB = _v();var orDB = function(ovDB,ouDB,otDB,gg){var oxDB = _v();
       var oyDB = _o(50, ovDB, ouDB, gg);
       var o_DB = _gd('./lib/wxParse/wxParse.wxml', oyDB, e_, d_);
       if (o_DB) {
         var ozDB = _1(21,ovDB,ouDB,gg);
         o_DB(ozDB,ozDB,oxDB, gg);
       } else _w(oyDB, './lib/wxParse/wxParse.wxml', 0, 0);_(otDB,oxDB);return otDB;};_2(25, orDB, e, s, gg, oqDB, "item", "index", '');_(opDB,oqDB);_(ohCB,opDB);
      }else {
        ohCB.wxVkey = 7;var oAEB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oCEB = _v();var oDEB = function(oHEB,oGEB,oFEB,gg){var oJEB = _v();
       var oKEB = _o(50, oHEB, oGEB, gg);
       var oMEB = _gd('./lib/wxParse/wxParse.wxml', oKEB, e_, d_);
       if (oMEB) {
         var oLEB = _1(21,oHEB,oGEB,gg);
         oMEB(oLEB,oLEB,oJEB, gg);
       } else _w(oKEB, './lib/wxParse/wxParse.wxml', 0, 0);_(oFEB,oJEB);return oFEB;};_2(25, oDEB, e, s, gg, oCEB, "item", "index", '');_(oAEB,oCEB);_(ohCB, oAEB);
      }_(oeCB,ohCB);
      }else if (_o(13, e, s, gg)) {
        oeCB.wxVkey = 2;var oPEB = _v();
       var oQEB = _o(44, e, s, gg);
       var oSEB = _gd('./lib/wxParse/wxParse.wxml', oQEB, e_, d_);
       if (oSEB) {
         var oREB = _1(21,e,s,gg);
         oSEB(oREB,oREB,oPEB, gg);
       } else _w(oQEB, './lib/wxParse/wxParse.wxml', 0, 0);_(oeCB,oPEB);
      } _(r,oeCB);
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
      var oUEB = _v();
      if (_o(16, e, s, gg)) {
        oUEB.wxVkey = 1;var oXEB = _v();
      if (_o(22, e, s, gg)) {
        oXEB.wxVkey = 1;var oaEB = _m( "button", ["size", 23,"type", 1], e, s, gg);var obEB = _v();var ocEB = function(ogEB,ofEB,oeEB,gg){var oiEB = _v();
       var ojEB = _o(51, ogEB, ofEB, gg);
       var olEB = _gd('./lib/wxParse/wxParse.wxml', ojEB, e_, d_);
       if (olEB) {
         var okEB = _1(21,ogEB,ofEB,gg);
         olEB(okEB,okEB,oiEB, gg);
       } else _w(ojEB, './lib/wxParse/wxParse.wxml', 0, 0);_(oeEB,oiEB);return oeEB;};_2(25, ocEB, e, s, gg, obEB, "item", "index", '');_(oaEB,obEB);_(oXEB,oaEB);
      }else if (_o(28, e, s, gg)) {
        oXEB.wxVkey = 2;var ooEB = _n("view");_r(ooEB, 'class', 29, e, s, gg);var opEB = _n("view");_r(opEB, 'class', 30, e, s, gg);var oqEB = _n("view");_r(oqEB, 'class', 31, e, s, gg);var orEB = _n("view");_r(orEB, 'class', 32, e, s, gg);_(oqEB,orEB);_(opEB,oqEB);var osEB = _n("view");_r(osEB, 'class', 31, e, s, gg);var otEB = _v();var ouEB = function(oyEB,oxEB,owEB,gg){var o_EB = _v();
       var oAFB = _o(51, oyEB, oxEB, gg);
       var oCFB = _gd('./lib/wxParse/wxParse.wxml', oAFB, e_, d_);
       if (oCFB) {
         var oBFB = _1(21,oyEB,oxEB,gg);
         oCFB(oBFB,oBFB,o_EB, gg);
       } else _w(oAFB, './lib/wxParse/wxParse.wxml', 0, 0);_(owEB,o_EB);return owEB;};_2(25, ouEB, e, s, gg, otEB, "item", "index", '');_(osEB,otEB);_(opEB,osEB);_(ooEB,opEB);_(oXEB,ooEB);
      }else if (_o(33, e, s, gg)) {
        oXEB.wxVkey = 3;var oFFB = _v();
       var oGFB = _o(34, e, s, gg);
       var oIFB = _gd('./lib/wxParse/wxParse.wxml', oGFB, e_, d_);
       if (oIFB) {
         var oHFB = _1(21,e,s,gg);
         oIFB(oHFB,oHFB,oFFB, gg);
       } else _w(oGFB, './lib/wxParse/wxParse.wxml', 0, 0);_(oXEB,oFFB);
      }else if (_o(35, e, s, gg)) {
        oXEB.wxVkey = 4;var oLFB = _v();
       var oMFB = _o(36, e, s, gg);
       var oOFB = _gd('./lib/wxParse/wxParse.wxml', oMFB, e_, d_);
       if (oOFB) {
         var oNFB = _1(21,e,s,gg);
         oOFB(oNFB,oNFB,oLFB, gg);
       } else _w(oMFB, './lib/wxParse/wxParse.wxml', 0, 0);_(oXEB,oLFB);
      }else if (_o(37, e, s, gg)) {
        oXEB.wxVkey = 5;var oRFB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oSFB = _v();var oTFB = function(oXFB,oWFB,oVFB,gg){var oZFB = _v();
       var oaFB = _o(51, oXFB, oWFB, gg);
       var ocFB = _gd('./lib/wxParse/wxParse.wxml', oaFB, e_, d_);
       if (ocFB) {
         var obFB = _1(21,oXFB,oWFB,gg);
         ocFB(obFB,obFB,oZFB, gg);
       } else _w(oaFB, './lib/wxParse/wxParse.wxml', 0, 0);_(oVFB,oZFB);return oVFB;};_2(25, oTFB, e, s, gg, oSFB, "item", "index", '');_(oRFB,oSFB);_(oXEB,oRFB);
      }else if (_o(42, e, s, gg)) {
        oXEB.wxVkey = 6;var ofFB = _m( "view", ["class", 0,"style", 1], e, s, gg);var ogFB = _v();var ohFB = function(olFB,okFB,ojFB,gg){var onFB = _v();
       var ooFB = _o(51, olFB, okFB, gg);
       var oqFB = _gd('./lib/wxParse/wxParse.wxml', ooFB, e_, d_);
       if (oqFB) {
         var opFB = _1(21,olFB,okFB,gg);
         oqFB(opFB,opFB,onFB, gg);
       } else _w(ooFB, './lib/wxParse/wxParse.wxml', 0, 0);_(ojFB,onFB);return ojFB;};_2(25, ohFB, e, s, gg, ogFB, "item", "index", '');_(ofFB,ogFB);_(oXEB,ofFB);
      }else {
        oXEB.wxVkey = 7;var orFB = _m( "view", ["style", 1,"class", 42], e, s, gg);var otFB = _v();var ouFB = function(oyFB,oxFB,owFB,gg){var o_FB = _v();
       var oAGB = _o(51, oyFB, oxFB, gg);
       var oCGB = _gd('./lib/wxParse/wxParse.wxml', oAGB, e_, d_);
       if (oCGB) {
         var oBGB = _1(21,oyFB,oxFB,gg);
         oCGB(oBGB,oBGB,o_FB, gg);
       } else _w(oAGB, './lib/wxParse/wxParse.wxml', 0, 0);_(owFB,o_FB);return owFB;};_2(25, ouFB, e, s, gg, otFB, "item", "index", '');_(orFB,otFB);_(oXEB, orFB);
      }_(oUEB,oXEB);
      }else if (_o(13, e, s, gg)) {
        oUEB.wxVkey = 2;var oFGB = _v();
       var oGGB = _o(44, e, s, gg);
       var oIGB = _gd('./lib/wxParse/wxParse.wxml', oGGB, e_, d_);
       if (oIGB) {
         var oHGB = _1(21,e,s,gg);
         oIGB(oHGB,oHGB,oFGB, gg);
       } else _w(oGGB, './lib/wxParse/wxParse.wxml', 0, 0);_(oUEB,oFGB);
      } _(r,oUEB);
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
      var oKGB = _v();
      if (_o(16, e, s, gg)) {
        oKGB.wxVkey = 1;var oNGB = _v();
      if (_o(22, e, s, gg)) {
        oNGB.wxVkey = 1;var oQGB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oRGB = _v();var oSGB = function(oWGB,oVGB,oUGB,gg){var oYGB = _v();
       var oZGB = _o(52, oWGB, oVGB, gg);
       var obGB = _gd('./lib/wxParse/wxParse.wxml', oZGB, e_, d_);
       if (obGB) {
         var oaGB = _1(21,oWGB,oVGB,gg);
         obGB(oaGB,oaGB,oYGB, gg);
       } else _w(oZGB, './lib/wxParse/wxParse.wxml', 0, 0);_(oUGB,oYGB);return oUGB;};_2(25, oSGB, e, s, gg, oRGB, "item", "index", '');_(oQGB,oRGB);_(oNGB,oQGB);
      }else if (_o(28, e, s, gg)) {
        oNGB.wxVkey = 2;var oeGB = _n("view");_r(oeGB, 'class', 29, e, s, gg);var ofGB = _n("view");_r(ofGB, 'class', 30, e, s, gg);var ogGB = _n("view");_r(ogGB, 'class', 31, e, s, gg);var ohGB = _n("view");_r(ohGB, 'class', 32, e, s, gg);_(ogGB,ohGB);_(ofGB,ogGB);var oiGB = _n("view");_r(oiGB, 'class', 31, e, s, gg);var ojGB = _v();var okGB = function(ooGB,onGB,omGB,gg){var oqGB = _v();
       var orGB = _o(52, ooGB, onGB, gg);
       var otGB = _gd('./lib/wxParse/wxParse.wxml', orGB, e_, d_);
       if (otGB) {
         var osGB = _1(21,ooGB,onGB,gg);
         otGB(osGB,osGB,oqGB, gg);
       } else _w(orGB, './lib/wxParse/wxParse.wxml', 0, 0);_(omGB,oqGB);return omGB;};_2(25, okGB, e, s, gg, ojGB, "item", "index", '');_(oiGB,ojGB);_(ofGB,oiGB);_(oeGB,ofGB);_(oNGB,oeGB);
      }else if (_o(33, e, s, gg)) {
        oNGB.wxVkey = 3;var owGB = _v();
       var oxGB = _o(34, e, s, gg);
       var ozGB = _gd('./lib/wxParse/wxParse.wxml', oxGB, e_, d_);
       if (ozGB) {
         var oyGB = _1(21,e,s,gg);
         ozGB(oyGB,oyGB,owGB, gg);
       } else _w(oxGB, './lib/wxParse/wxParse.wxml', 0, 0);_(oNGB,owGB);
      }else if (_o(35, e, s, gg)) {
        oNGB.wxVkey = 4;var oBHB = _v();
       var oCHB = _o(36, e, s, gg);
       var oEHB = _gd('./lib/wxParse/wxParse.wxml', oCHB, e_, d_);
       if (oEHB) {
         var oDHB = _1(21,e,s,gg);
         oEHB(oDHB,oDHB,oBHB, gg);
       } else _w(oCHB, './lib/wxParse/wxParse.wxml', 0, 0);_(oNGB,oBHB);
      }else if (_o(37, e, s, gg)) {
        oNGB.wxVkey = 5;var oHHB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oIHB = _v();var oJHB = function(oNHB,oMHB,oLHB,gg){var oPHB = _v();
       var oQHB = _o(52, oNHB, oMHB, gg);
       var oSHB = _gd('./lib/wxParse/wxParse.wxml', oQHB, e_, d_);
       if (oSHB) {
         var oRHB = _1(21,oNHB,oMHB,gg);
         oSHB(oRHB,oRHB,oPHB, gg);
       } else _w(oQHB, './lib/wxParse/wxParse.wxml', 0, 0);_(oLHB,oPHB);return oLHB;};_2(25, oJHB, e, s, gg, oIHB, "item", "index", '');_(oHHB,oIHB);_(oNGB,oHHB);
      }else if (_o(42, e, s, gg)) {
        oNGB.wxVkey = 6;var oVHB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oWHB = _v();var oXHB = function(obHB,oaHB,oZHB,gg){var odHB = _v();
       var oeHB = _o(52, obHB, oaHB, gg);
       var ogHB = _gd('./lib/wxParse/wxParse.wxml', oeHB, e_, d_);
       if (ogHB) {
         var ofHB = _1(21,obHB,oaHB,gg);
         ogHB(ofHB,ofHB,odHB, gg);
       } else _w(oeHB, './lib/wxParse/wxParse.wxml', 0, 0);_(oZHB,odHB);return oZHB;};_2(25, oXHB, e, s, gg, oWHB, "item", "index", '');_(oVHB,oWHB);_(oNGB,oVHB);
      }else {
        oNGB.wxVkey = 7;var ohHB = _m( "view", ["style", 1,"class", 42], e, s, gg);var ojHB = _v();var okHB = function(ooHB,onHB,omHB,gg){var oqHB = _v();
       var orHB = _o(52, ooHB, onHB, gg);
       var otHB = _gd('./lib/wxParse/wxParse.wxml', orHB, e_, d_);
       if (otHB) {
         var osHB = _1(21,ooHB,onHB,gg);
         otHB(osHB,osHB,oqHB, gg);
       } else _w(orHB, './lib/wxParse/wxParse.wxml', 0, 0);_(omHB,oqHB);return omHB;};_2(25, okHB, e, s, gg, ojHB, "item", "index", '');_(ohHB,ojHB);_(oNGB, ohHB);
      }_(oKGB,oNGB);
      }else if (_o(13, e, s, gg)) {
        oKGB.wxVkey = 2;var owHB = _v();
       var oxHB = _o(44, e, s, gg);
       var ozHB = _gd('./lib/wxParse/wxParse.wxml', oxHB, e_, d_);
       if (ozHB) {
         var oyHB = _1(21,e,s,gg);
         ozHB(oyHB,oyHB,owHB, gg);
       } else _w(oxHB, './lib/wxParse/wxParse.wxml', 0, 0);_(oKGB,owHB);
      } _(r,oKGB);
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
      var oAIB = _v();
      if (_o(16, e, s, gg)) {
        oAIB.wxVkey = 1;var oDIB = _v();
      if (_o(22, e, s, gg)) {
        oDIB.wxVkey = 1;var oGIB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oHIB = _v();var oIIB = function(oMIB,oLIB,oKIB,gg){var oOIB = _v();
       var oPIB = _o(53, oMIB, oLIB, gg);
       var oRIB = _gd('./lib/wxParse/wxParse.wxml', oPIB, e_, d_);
       if (oRIB) {
         var oQIB = _1(21,oMIB,oLIB,gg);
         oRIB(oQIB,oQIB,oOIB, gg);
       } else _w(oPIB, './lib/wxParse/wxParse.wxml', 0, 0);_(oKIB,oOIB);return oKIB;};_2(25, oIIB, e, s, gg, oHIB, "item", "index", '');_(oGIB,oHIB);_(oDIB,oGIB);
      }else if (_o(28, e, s, gg)) {
        oDIB.wxVkey = 2;var oUIB = _n("view");_r(oUIB, 'class', 29, e, s, gg);var oVIB = _n("view");_r(oVIB, 'class', 30, e, s, gg);var oWIB = _n("view");_r(oWIB, 'class', 31, e, s, gg);var oXIB = _n("view");_r(oXIB, 'class', 32, e, s, gg);_(oWIB,oXIB);_(oVIB,oWIB);var oYIB = _n("view");_r(oYIB, 'class', 31, e, s, gg);var oZIB = _v();var oaIB = function(oeIB,odIB,ocIB,gg){var ogIB = _v();
       var ohIB = _o(53, oeIB, odIB, gg);
       var ojIB = _gd('./lib/wxParse/wxParse.wxml', ohIB, e_, d_);
       if (ojIB) {
         var oiIB = _1(21,oeIB,odIB,gg);
         ojIB(oiIB,oiIB,ogIB, gg);
       } else _w(ohIB, './lib/wxParse/wxParse.wxml', 0, 0);_(ocIB,ogIB);return ocIB;};_2(25, oaIB, e, s, gg, oZIB, "item", "index", '');_(oYIB,oZIB);_(oVIB,oYIB);_(oUIB,oVIB);_(oDIB,oUIB);
      }else if (_o(33, e, s, gg)) {
        oDIB.wxVkey = 3;var omIB = _v();
       var onIB = _o(34, e, s, gg);
       var opIB = _gd('./lib/wxParse/wxParse.wxml', onIB, e_, d_);
       if (opIB) {
         var ooIB = _1(21,e,s,gg);
         opIB(ooIB,ooIB,omIB, gg);
       } else _w(onIB, './lib/wxParse/wxParse.wxml', 0, 0);_(oDIB,omIB);
      }else if (_o(35, e, s, gg)) {
        oDIB.wxVkey = 4;var osIB = _v();
       var otIB = _o(36, e, s, gg);
       var ovIB = _gd('./lib/wxParse/wxParse.wxml', otIB, e_, d_);
       if (ovIB) {
         var ouIB = _1(21,e,s,gg);
         ovIB(ouIB,ouIB,osIB, gg);
       } else _w(otIB, './lib/wxParse/wxParse.wxml', 0, 0);_(oDIB,osIB);
      }else if (_o(37, e, s, gg)) {
        oDIB.wxVkey = 5;var oyIB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ozIB = _v();var o_IB = function(oDJB,oCJB,oBJB,gg){var oFJB = _v();
       var oGJB = _o(53, oDJB, oCJB, gg);
       var oIJB = _gd('./lib/wxParse/wxParse.wxml', oGJB, e_, d_);
       if (oIJB) {
         var oHJB = _1(21,oDJB,oCJB,gg);
         oIJB(oHJB,oHJB,oFJB, gg);
       } else _w(oGJB, './lib/wxParse/wxParse.wxml', 0, 0);_(oBJB,oFJB);return oBJB;};_2(25, o_IB, e, s, gg, ozIB, "item", "index", '');_(oyIB,ozIB);_(oDIB,oyIB);
      }else if (_o(42, e, s, gg)) {
        oDIB.wxVkey = 6;var oLJB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oMJB = _v();var oNJB = function(oRJB,oQJB,oPJB,gg){var oTJB = _v();
       var oUJB = _o(53, oRJB, oQJB, gg);
       var oWJB = _gd('./lib/wxParse/wxParse.wxml', oUJB, e_, d_);
       if (oWJB) {
         var oVJB = _1(21,oRJB,oQJB,gg);
         oWJB(oVJB,oVJB,oTJB, gg);
       } else _w(oUJB, './lib/wxParse/wxParse.wxml', 0, 0);_(oPJB,oTJB);return oPJB;};_2(25, oNJB, e, s, gg, oMJB, "item", "index", '');_(oLJB,oMJB);_(oDIB,oLJB);
      }else {
        oDIB.wxVkey = 7;var oXJB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oZJB = _v();var oaJB = function(oeJB,odJB,ocJB,gg){var ogJB = _v();
       var ohJB = _o(53, oeJB, odJB, gg);
       var ojJB = _gd('./lib/wxParse/wxParse.wxml', ohJB, e_, d_);
       if (ojJB) {
         var oiJB = _1(21,oeJB,odJB,gg);
         ojJB(oiJB,oiJB,ogJB, gg);
       } else _w(ohJB, './lib/wxParse/wxParse.wxml', 0, 0);_(ocJB,ogJB);return ocJB;};_2(25, oaJB, e, s, gg, oZJB, "item", "index", '');_(oXJB,oZJB);_(oDIB, oXJB);
      }_(oAIB,oDIB);
      }else if (_o(13, e, s, gg)) {
        oAIB.wxVkey = 2;var omJB = _v();
       var onJB = _o(44, e, s, gg);
       var opJB = _gd('./lib/wxParse/wxParse.wxml', onJB, e_, d_);
       if (opJB) {
         var ooJB = _1(21,e,s,gg);
         opJB(ooJB,ooJB,omJB, gg);
       } else _w(onJB, './lib/wxParse/wxParse.wxml', 0, 0);_(oAIB,omJB);
      } _(r,oAIB);
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
      var orJB = _v();
      if (_o(16, e, s, gg)) {
        orJB.wxVkey = 1;var ouJB = _v();
      if (_o(22, e, s, gg)) {
        ouJB.wxVkey = 1;var oxJB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oyJB = _v();var ozJB = function(oCKB,oBKB,oAKB,gg){var oEKB = _v();
       var oFKB = _o(54, oCKB, oBKB, gg);
       var oHKB = _gd('./lib/wxParse/wxParse.wxml', oFKB, e_, d_);
       if (oHKB) {
         var oGKB = _1(21,oCKB,oBKB,gg);
         oHKB(oGKB,oGKB,oEKB, gg);
       } else _w(oFKB, './lib/wxParse/wxParse.wxml', 0, 0);_(oAKB,oEKB);return oAKB;};_2(25, ozJB, e, s, gg, oyJB, "item", "index", '');_(oxJB,oyJB);_(ouJB,oxJB);
      }else if (_o(28, e, s, gg)) {
        ouJB.wxVkey = 2;var oKKB = _n("view");_r(oKKB, 'class', 29, e, s, gg);var oLKB = _n("view");_r(oLKB, 'class', 30, e, s, gg);var oMKB = _n("view");_r(oMKB, 'class', 31, e, s, gg);var oNKB = _n("view");_r(oNKB, 'class', 32, e, s, gg);_(oMKB,oNKB);_(oLKB,oMKB);var oOKB = _n("view");_r(oOKB, 'class', 31, e, s, gg);var oPKB = _v();var oQKB = function(oUKB,oTKB,oSKB,gg){var oWKB = _v();
       var oXKB = _o(54, oUKB, oTKB, gg);
       var oZKB = _gd('./lib/wxParse/wxParse.wxml', oXKB, e_, d_);
       if (oZKB) {
         var oYKB = _1(21,oUKB,oTKB,gg);
         oZKB(oYKB,oYKB,oWKB, gg);
       } else _w(oXKB, './lib/wxParse/wxParse.wxml', 0, 0);_(oSKB,oWKB);return oSKB;};_2(25, oQKB, e, s, gg, oPKB, "item", "index", '');_(oOKB,oPKB);_(oLKB,oOKB);_(oKKB,oLKB);_(ouJB,oKKB);
      }else if (_o(33, e, s, gg)) {
        ouJB.wxVkey = 3;var ocKB = _v();
       var odKB = _o(34, e, s, gg);
       var ofKB = _gd('./lib/wxParse/wxParse.wxml', odKB, e_, d_);
       if (ofKB) {
         var oeKB = _1(21,e,s,gg);
         ofKB(oeKB,oeKB,ocKB, gg);
       } else _w(odKB, './lib/wxParse/wxParse.wxml', 0, 0);_(ouJB,ocKB);
      }else if (_o(35, e, s, gg)) {
        ouJB.wxVkey = 4;var oiKB = _v();
       var ojKB = _o(36, e, s, gg);
       var olKB = _gd('./lib/wxParse/wxParse.wxml', ojKB, e_, d_);
       if (olKB) {
         var okKB = _1(21,e,s,gg);
         olKB(okKB,okKB,oiKB, gg);
       } else _w(ojKB, './lib/wxParse/wxParse.wxml', 0, 0);_(ouJB,oiKB);
      }else if (_o(37, e, s, gg)) {
        ouJB.wxVkey = 5;var ooKB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var opKB = _v();var oqKB = function(ouKB,otKB,osKB,gg){var owKB = _v();
       var oxKB = _o(54, ouKB, otKB, gg);
       var ozKB = _gd('./lib/wxParse/wxParse.wxml', oxKB, e_, d_);
       if (ozKB) {
         var oyKB = _1(21,ouKB,otKB,gg);
         ozKB(oyKB,oyKB,owKB, gg);
       } else _w(oxKB, './lib/wxParse/wxParse.wxml', 0, 0);_(osKB,owKB);return osKB;};_2(25, oqKB, e, s, gg, opKB, "item", "index", '');_(ooKB,opKB);_(ouJB,ooKB);
      }else if (_o(42, e, s, gg)) {
        ouJB.wxVkey = 6;var oBLB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oCLB = _v();var oDLB = function(oHLB,oGLB,oFLB,gg){var oJLB = _v();
       var oKLB = _o(54, oHLB, oGLB, gg);
       var oMLB = _gd('./lib/wxParse/wxParse.wxml', oKLB, e_, d_);
       if (oMLB) {
         var oLLB = _1(21,oHLB,oGLB,gg);
         oMLB(oLLB,oLLB,oJLB, gg);
       } else _w(oKLB, './lib/wxParse/wxParse.wxml', 0, 0);_(oFLB,oJLB);return oFLB;};_2(25, oDLB, e, s, gg, oCLB, "item", "index", '');_(oBLB,oCLB);_(ouJB,oBLB);
      }else {
        ouJB.wxVkey = 7;var oNLB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oPLB = _v();var oQLB = function(oULB,oTLB,oSLB,gg){var oWLB = _v();
       var oXLB = _o(54, oULB, oTLB, gg);
       var oZLB = _gd('./lib/wxParse/wxParse.wxml', oXLB, e_, d_);
       if (oZLB) {
         var oYLB = _1(21,oULB,oTLB,gg);
         oZLB(oYLB,oYLB,oWLB, gg);
       } else _w(oXLB, './lib/wxParse/wxParse.wxml', 0, 0);_(oSLB,oWLB);return oSLB;};_2(25, oQLB, e, s, gg, oPLB, "item", "index", '');_(oNLB,oPLB);_(ouJB, oNLB);
      }_(orJB,ouJB);
      }else if (_o(13, e, s, gg)) {
        orJB.wxVkey = 2;var ocLB = _v();
       var odLB = _o(44, e, s, gg);
       var ofLB = _gd('./lib/wxParse/wxParse.wxml', odLB, e_, d_);
       if (ofLB) {
         var oeLB = _1(21,e,s,gg);
         ofLB(oeLB,oeLB,ocLB, gg);
       } else _w(odLB, './lib/wxParse/wxParse.wxml', 0, 0);_(orJB,ocLB);
      } _(r,orJB);
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
      var ohLB = _v();
      if (_o(16, e, s, gg)) {
        ohLB.wxVkey = 1;var okLB = _v();
      if (_o(22, e, s, gg)) {
        okLB.wxVkey = 1;var onLB = _m( "button", ["size", 23,"type", 1], e, s, gg);var ooLB = _v();var opLB = function(otLB,osLB,orLB,gg){var ovLB = _v();
       var owLB = _o(55, otLB, osLB, gg);
       var oyLB = _gd('./lib/wxParse/wxParse.wxml', owLB, e_, d_);
       if (oyLB) {
         var oxLB = _1(21,otLB,osLB,gg);
         oyLB(oxLB,oxLB,ovLB, gg);
       } else _w(owLB, './lib/wxParse/wxParse.wxml', 0, 0);_(orLB,ovLB);return orLB;};_2(25, opLB, e, s, gg, ooLB, "item", "index", '');_(onLB,ooLB);_(okLB,onLB);
      }else if (_o(28, e, s, gg)) {
        okLB.wxVkey = 2;var oAMB = _n("view");_r(oAMB, 'class', 29, e, s, gg);var oBMB = _n("view");_r(oBMB, 'class', 30, e, s, gg);var oCMB = _n("view");_r(oCMB, 'class', 31, e, s, gg);var oDMB = _n("view");_r(oDMB, 'class', 32, e, s, gg);_(oCMB,oDMB);_(oBMB,oCMB);var oEMB = _n("view");_r(oEMB, 'class', 31, e, s, gg);var oFMB = _v();var oGMB = function(oKMB,oJMB,oIMB,gg){var oMMB = _v();
       var oNMB = _o(55, oKMB, oJMB, gg);
       var oPMB = _gd('./lib/wxParse/wxParse.wxml', oNMB, e_, d_);
       if (oPMB) {
         var oOMB = _1(21,oKMB,oJMB,gg);
         oPMB(oOMB,oOMB,oMMB, gg);
       } else _w(oNMB, './lib/wxParse/wxParse.wxml', 0, 0);_(oIMB,oMMB);return oIMB;};_2(25, oGMB, e, s, gg, oFMB, "item", "index", '');_(oEMB,oFMB);_(oBMB,oEMB);_(oAMB,oBMB);_(okLB,oAMB);
      }else if (_o(33, e, s, gg)) {
        okLB.wxVkey = 3;var oSMB = _v();
       var oTMB = _o(34, e, s, gg);
       var oVMB = _gd('./lib/wxParse/wxParse.wxml', oTMB, e_, d_);
       if (oVMB) {
         var oUMB = _1(21,e,s,gg);
         oVMB(oUMB,oUMB,oSMB, gg);
       } else _w(oTMB, './lib/wxParse/wxParse.wxml', 0, 0);_(okLB,oSMB);
      }else if (_o(35, e, s, gg)) {
        okLB.wxVkey = 4;var oYMB = _v();
       var oZMB = _o(36, e, s, gg);
       var obMB = _gd('./lib/wxParse/wxParse.wxml', oZMB, e_, d_);
       if (obMB) {
         var oaMB = _1(21,e,s,gg);
         obMB(oaMB,oaMB,oYMB, gg);
       } else _w(oZMB, './lib/wxParse/wxParse.wxml', 0, 0);_(okLB,oYMB);
      }else if (_o(37, e, s, gg)) {
        okLB.wxVkey = 5;var oeMB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ofMB = _v();var ogMB = function(okMB,ojMB,oiMB,gg){var omMB = _v();
       var onMB = _o(55, okMB, ojMB, gg);
       var opMB = _gd('./lib/wxParse/wxParse.wxml', onMB, e_, d_);
       if (opMB) {
         var ooMB = _1(21,okMB,ojMB,gg);
         opMB(ooMB,ooMB,omMB, gg);
       } else _w(onMB, './lib/wxParse/wxParse.wxml', 0, 0);_(oiMB,omMB);return oiMB;};_2(25, ogMB, e, s, gg, ofMB, "item", "index", '');_(oeMB,ofMB);_(okLB,oeMB);
      }else if (_o(42, e, s, gg)) {
        okLB.wxVkey = 6;var osMB = _m( "view", ["class", 0,"style", 1], e, s, gg);var otMB = _v();var ouMB = function(oyMB,oxMB,owMB,gg){var o_MB = _v();
       var oANB = _o(55, oyMB, oxMB, gg);
       var oCNB = _gd('./lib/wxParse/wxParse.wxml', oANB, e_, d_);
       if (oCNB) {
         var oBNB = _1(21,oyMB,oxMB,gg);
         oCNB(oBNB,oBNB,o_MB, gg);
       } else _w(oANB, './lib/wxParse/wxParse.wxml', 0, 0);_(owMB,o_MB);return owMB;};_2(25, ouMB, e, s, gg, otMB, "item", "index", '');_(osMB,otMB);_(okLB,osMB);
      }else {
        okLB.wxVkey = 7;var oDNB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oFNB = _v();var oGNB = function(oKNB,oJNB,oINB,gg){var oMNB = _v();
       var oNNB = _o(55, oKNB, oJNB, gg);
       var oPNB = _gd('./lib/wxParse/wxParse.wxml', oNNB, e_, d_);
       if (oPNB) {
         var oONB = _1(21,oKNB,oJNB,gg);
         oPNB(oONB,oONB,oMNB, gg);
       } else _w(oNNB, './lib/wxParse/wxParse.wxml', 0, 0);_(oINB,oMNB);return oINB;};_2(25, oGNB, e, s, gg, oFNB, "item", "index", '');_(oDNB,oFNB);_(okLB, oDNB);
      }_(ohLB,okLB);
      }else if (_o(13, e, s, gg)) {
        ohLB.wxVkey = 2;var oSNB = _v();
       var oTNB = _o(44, e, s, gg);
       var oVNB = _gd('./lib/wxParse/wxParse.wxml', oTNB, e_, d_);
       if (oVNB) {
         var oUNB = _1(21,e,s,gg);
         oVNB(oUNB,oUNB,oSNB, gg);
       } else _w(oTNB, './lib/wxParse/wxParse.wxml', 0, 0);_(ohLB,oSNB);
      } _(r,ohLB);
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
    var ooNB = _n("view");_r(ooNB, 'class', 56, e, s, gg);var opNB = _n("view");_r(opNB, 'class', 57, e, s, gg);var oqNB = _m( "scroll-view", ["class", 58,"scrollLeft", 1,"scrollX", 2,"style", 3], e, s, gg);var orNB = _v();var osNB = function(owNB,ovNB,ouNB,gg){var otNB = _m( "view", ["bindtap", 63,"class", 1,"data-id", 2,"data-index", 3], owNB, ovNB, gg);var oyNB = _n("view");_r(oyNB, 'class', 67, owNB, ovNB, gg);var ozNB = _o(68, owNB, ovNB, gg);_(oyNB,ozNB);_(otNB,oyNB);_(ouNB, otNB);return ouNB;};_2(62, osNB, e, s, gg, orNB, "item", "index", '');_(oqNB,orNB);var o_NB = _n("view");_r(o_NB, 'class', 69, e, s, gg);var oAOB = _n("view");_r(oAOB, 'class', 70, e, s, gg);var oBOB = _v();var oCOB = function(oGOB,oFOB,oEOB,gg){var oHOB = e_["./pages/topic/topic.wxml"].i;var oDOB = _n("view");_r(oDOB, 'class', 26, oGOB, oFOB, gg);var oIOB = _n("view");_r(oIOB, 'class', 72, oGOB, oFOB, gg);var oJOB = _o(73, oGOB, oFOB, gg);_(oIOB,oJOB);_(oDOB,oIOB);var oKOB = _n("view");_r(oKOB, 'class', 74, oGOB, oFOB, gg);_ai(oHOB, '../../lib/wxParse/wxParse.wxml', e_, './pages/topic/topic.wxml', 0, 0);var oMOB = _v();
       var oNOB = _o(75, oGOB, oFOB, gg);
       var oPOB = _gd('./pages/topic/topic.wxml', oNOB, e_, d_);
       if (oPOB) {
         var oOOB = _1(76,oGOB,oFOB,gg);
         oPOB(oOOB,oOOB,oMOB, gg);
       } else _w(oNOB, './pages/topic/topic.wxml', 0, 0);_(oKOB,oMOB);_(oDOB,oKOB);var oQOB = _m( "navigator", ["class", 77,"url", 1], oGOB, oFOB, gg);var oROB = _n("view");_r(oROB, 'class', 79, oGOB, oFOB, gg);var oSOB = _v();var oTOB = function(oXOB,oWOB,oVOB,gg){var oUOB = _n("view");_r(oUOB, 'class', 83, oXOB, oWOB, gg);var oZOB = _m( "image", ["class", 84,"src", 1], oXOB, oWOB, gg);_(oUOB,oZOB);_(oVOB, oUOB);return oVOB;};_2(80, oTOB, oGOB, oFOB, gg, oSOB, "iitem", "iindex", '');_(oROB,oSOB);_(oQOB,oROB);_(oDOB,oQOB);var oaOB = _n("view");_r(oaOB, 'class', 86, oGOB, oFOB, gg);var obOB = _m( "navigator", ["hoverClass", 87,"url", 1], oGOB, oFOB, gg);var ocOB = _n("view");_r(ocOB, 'class', 89, oGOB, oFOB, gg);var odOB = _o(90, oGOB, oFOB, gg);_(ocOB,odOB);_(obOB,ocOB);_(oaOB,obOB);var oeOB = _n("view");_r(oeOB, 'class', 91, oGOB, oFOB, gg);var ofOB = _o(92, oGOB, oFOB, gg);_(oeOB,ofOB);_(oaOB,oeOB);_(oDOB,oaOB);oHOB.pop();_(oEOB, oDOB);return oEOB;};_2(71, oCOB, e, s, gg, oBOB, "item", "index", '');_(oAOB,oBOB);var ogOB = _v();
      if (_o(93, e, s, gg)) {
        ogOB.wxVkey = 1;var ohOB = _n("view");_r(ohOB, 'class', 94, e, s, gg);var ojOB = _n("view");_r(ojOB, 'class', 95, e, s, gg);var okOB = _o(96, e, s, gg);_(ojOB,okOB);_(ohOB,ojOB);_(ogOB, ohOB);
      } _(oAOB,ogOB);_(o_NB,oAOB);_(oqNB,o_NB);_(opNB,oqNB);_(ooNB,opNB);_(r,ooNB);
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
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:.head{display:none}.scrollable{position:absolute;margin-top:-42px}.container,body{width:%%?750rpx?%%;height:100%;background:#f4f4f4}.title-bar{height:%%?78rpx?%%;background:#f4f4f4;line-height:%%?78rpx?%%}.title-bar .tb-list{padding:0 %%?16rpx?%%;margin-left:%%?30rpx?%%;height:%%?36rpx?%%;line-height:%%?36rpx?%%;border-radius:%%?18rpx?%%;font-size:%%?22rpx?%%;text-align:center;border:1px solid rgba(255,255,255,0);display:inline-block;background-color:#f4f4f4}.title-bar .activate{padding:0 %%?16rpx?%%;margin-left:%%?30rpx?%%;height:%%?36rpx?%%;line-height:%%?36rpx?%%;border-radius:%%?18rpx?%%;font-size:%%?22rpx?%%;text-align:center;border:1px solid rgba(255,255,255,0);display:inline-block;color:#fff;background:#cc2020}.tb-list .name{color:#a2a2a2}.goods-list{background:#fff;min-width:%%?300rpx?%%}.goods-list .item{width:%%?750rpx?%%;padding:%%?26rpx?%% %%?20rpx?%%}.goods-list .hide-item{display:none}.goods-list .item .gl-name{font-size:%%?32.6rpx?%%;color:#333;line-height:%%?54rpx?%%;word-break:break-all;word-wrap:break-word;white-space:pre-line}.goods-list .item .gl-bref{color:#101010;font-size:%%?25rpx?%%;word-break:break-all;word-wrap:break-word;white-space:pre-line;line-height:%%?50rpx?%%}.goods-list .item .gl-img{width:100%}.goods-list .item .gl-nav{overflow:hidden;display:block;min-height:%%?271rpx?%%}.goods-list .item .gli-images{width:100%;margin-right:%%?14.5rpx?%%}.goods-list .item .gli-images .img{display:inline-block;float:left;margin:%%?9rpx?%%;width:%%?202rpx?%%;height:%%?202rpx?%%;border:1px solid rgba(187,187,187,1)}.item-option{margin-top:%%?54rpx?%%;height:%%?54.3rpx?%%;margin-bottom:%%?27rpx?%%}.gl-label{display:inline-block;width:%%?108.6rpx?%%;height:%%?54.3rpx?%%;line-height:%%?54.3rpx?%%;color:#cc2020;font-size:%%?28rpx?%%;border:%%?1rpx?%% solid #cc2020;text-align:center;border-radius:%%?12rpx?%%;float:left}.gl-share{display:inline-block;width:%%?181rpx?%%;height:%%?54.3rpx?%%;line-height:%%?54.3rpx?%%;background:#cc2020;color:#fff;text-align:center;float:right}.cate-nav-body{white-space:nowrap;background:#fff;overflow:hidden}.wxParse-inline{min-height:55px;color:#101010;font-size:13px;word-break:break-all;word-wrap:break-word;white-space:pre-line;line-height:27px}.name-color{color:#fff}.show-loading{margin-top:%%?20rpx?%% 0;width:%%?750rpx?%%;text-align:center;opacity:.7;height:%%?50rpx?%%;line-height:%%?50rpx?%%}.show-loading-text{height:100%;text-align:center}@code-separator-line:__wxRoute = "pages/topic/topic";__wxRouteBegin = true;
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
          wx.showToast({
              title:'已经是全部了',
              icon: 'none',
          })
        }
    },

});

});require("pages/topic/topic.js")@code-separator-line:["div","template","view","video","image","block","button","scroll-view","import","navigator"]