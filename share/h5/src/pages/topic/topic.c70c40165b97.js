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
      var obQB = _m( "view", ["class", 0,"style", 1], e, s, gg);var ocQB = _m( "video", ["class", 2,"src", 1], e, s, gg);_(obQB,ocQB);_(r,obQB);
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
      var oeQB = _m( "image", ["class", 0,"data-src", 3,"bindload", 1,"bindtap", 2,"data-from", 3,"data-idx", 4,"mode", 5,"src", 6,"style", 7], e, s, gg);_(r,oeQB);
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
      var ogQB = _m( "view", ["style", 1,"class", 10], e, s, gg);var ohQB = _v();var oiQB = function(omQB,olQB,okQB,gg){var ooQB = _v();
      if (_o(13, omQB, olQB, gg)) {
        ooQB.wxVkey = 1;var orQB = _o(15, omQB, olQB, gg);_(ooQB,orQB);
      }else if (_o(16, omQB, olQB, gg)) {
        ooQB.wxVkey = 2;var ouQB = _m( "image", ["class", 17,"src", 1], e, s, gg);_(ooQB,ouQB);
      } _(okQB,ooQB);return okQB;};_2(12, oiQB, e, s, gg, ohQB, "item", "index", '');_(ogQB,ohQB);_(r,ogQB);
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
      var owQB = _v();var oxQB = function(oARB,o_QB,ozQB,gg){var oCRB = _v();
       var oDRB = _o(20, oARB, o_QB, gg);
       var oFRB = _gd('./lib/wxParse/wxParse.wxml', oDRB, e_, d_);
       if (oFRB) {
         var oERB = _1(21,oARB,o_QB,gg);
         oFRB(oERB,oERB,oCRB, gg);
       } else _w(oDRB, './lib/wxParse/wxParse.wxml', 0, 0);_(ozQB,oCRB);return ozQB;};_2(19, oxQB, e, s, gg, owQB, "item", "index", '');_(r,owQB);
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
      var oHRB = _v();
      if (_o(16, e, s, gg)) {
        oHRB.wxVkey = 1;var oKRB = _v();
      if (_o(22, e, s, gg)) {
        oKRB.wxVkey = 1;var oNRB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oORB = _v();var oPRB = function(oTRB,oSRB,oRRB,gg){var oVRB = _v();
       var oWRB = _o(27, oTRB, oSRB, gg);
       var oYRB = _gd('./lib/wxParse/wxParse.wxml', oWRB, e_, d_);
       if (oYRB) {
         var oXRB = _1(21,oTRB,oSRB,gg);
         oYRB(oXRB,oXRB,oVRB, gg);
       } else _w(oWRB, './lib/wxParse/wxParse.wxml', 0, 0);_(oRRB,oVRB);return oRRB;};_2(25, oPRB, e, s, gg, oORB, "item", "index", '');_(oNRB,oORB);_(oKRB,oNRB);
      }else if (_o(28, e, s, gg)) {
        oKRB.wxVkey = 2;var obRB = _n("view");_r(obRB, 'class', 29, e, s, gg);var ocRB = _n("view");_r(ocRB, 'class', 30, e, s, gg);var odRB = _n("view");_r(odRB, 'class', 31, e, s, gg);var oeRB = _n("view");_r(oeRB, 'class', 32, e, s, gg);_(odRB,oeRB);_(ocRB,odRB);var ofRB = _n("view");_r(ofRB, 'class', 31, e, s, gg);var ogRB = _v();var ohRB = function(olRB,okRB,ojRB,gg){var onRB = _v();
       var ooRB = _o(27, olRB, okRB, gg);
       var oqRB = _gd('./lib/wxParse/wxParse.wxml', ooRB, e_, d_);
       if (oqRB) {
         var opRB = _1(21,olRB,okRB,gg);
         oqRB(opRB,opRB,onRB, gg);
       } else _w(ooRB, './lib/wxParse/wxParse.wxml', 0, 0);_(ojRB,onRB);return ojRB;};_2(25, ohRB, e, s, gg, ogRB, "item", "index", '');_(ofRB,ogRB);_(ocRB,ofRB);_(obRB,ocRB);_(oKRB,obRB);
      }else if (_o(33, e, s, gg)) {
        oKRB.wxVkey = 3;var otRB = _v();
       var ouRB = _o(34, e, s, gg);
       var owRB = _gd('./lib/wxParse/wxParse.wxml', ouRB, e_, d_);
       if (owRB) {
         var ovRB = _1(21,e,s,gg);
         owRB(ovRB,ovRB,otRB, gg);
       } else _w(ouRB, './lib/wxParse/wxParse.wxml', 0, 0);_(oKRB,otRB);
      }else if (_o(35, e, s, gg)) {
        oKRB.wxVkey = 4;var ozRB = _v();
       var o_RB = _o(36, e, s, gg);
       var oBSB = _gd('./lib/wxParse/wxParse.wxml', o_RB, e_, d_);
       if (oBSB) {
         var oASB = _1(21,e,s,gg);
         oBSB(oASB,oASB,ozRB, gg);
       } else _w(o_RB, './lib/wxParse/wxParse.wxml', 0, 0);_(oKRB,ozRB);
      }else if (_o(37, e, s, gg)) {
        oKRB.wxVkey = 5;var oESB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-c", 39], e, s, gg);var oFSB = _v();var oGSB = function(oKSB,oJSB,oISB,gg){var oMSB = _v();
       var oNSB = _o(27, oKSB, oJSB, gg);
       var oPSB = _gd('./lib/wxParse/wxParse.wxml', oNSB, e_, d_);
       if (oPSB) {
         var oOSB = _1(21,oKSB,oJSB,gg);
         oPSB(oOSB,oOSB,oMSB, gg);
       } else _w(oNSB, './lib/wxParse/wxParse.wxml', 0, 0);_(oISB,oMSB);return oISB;};_2(25, oGSB, e, s, gg, oFSB, "item", "index", '');_(oESB,oFSB);_(oKRB,oESB);
      }else if (_o(41, e, s, gg)) {
        oKRB.wxVkey = 6;var oSSB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oTSB = _v();var oUSB = function(oYSB,oXSB,oWSB,gg){var oaSB = _v();
       var obSB = _o(27, oYSB, oXSB, gg);
       var odSB = _gd('./lib/wxParse/wxParse.wxml', obSB, e_, d_);
       if (odSB) {
         var ocSB = _1(21,oYSB,oXSB,gg);
         odSB(ocSB,ocSB,oaSB, gg);
       } else _w(obSB, './lib/wxParse/wxParse.wxml', 0, 0);_(oWSB,oaSB);return oWSB;};_2(25, oUSB, e, s, gg, oTSB, "item", "index", '');_(oSSB,oTSB);_(oKRB,oSSB);
      }else if (_o(42, e, s, gg)) {
        oKRB.wxVkey = 7;var ogSB = _m( "view", ["class", 0,"style", 1], e, s, gg);var ohSB = _v();var oiSB = function(omSB,olSB,okSB,gg){var ooSB = _v();
       var opSB = _o(27, omSB, olSB, gg);
       var orSB = _gd('./lib/wxParse/wxParse.wxml', opSB, e_, d_);
       if (orSB) {
         var oqSB = _1(21,omSB,olSB,gg);
         orSB(oqSB,oqSB,ooSB, gg);
       } else _w(opSB, './lib/wxParse/wxParse.wxml', 0, 0);_(okSB,ooSB);return okSB;};_2(25, oiSB, e, s, gg, ohSB, "item", "index", '');_(ogSB,ohSB);_(oKRB,ogSB);
      }else {
        oKRB.wxVkey = 8;var osSB = _m( "view", ["style", 1,"class", 42], e, s, gg);var ouSB = _v();var ovSB = function(ozSB,oySB,oxSB,gg){var oATB = _v();
       var oBTB = _o(27, ozSB, oySB, gg);
       var oDTB = _gd('./lib/wxParse/wxParse.wxml', oBTB, e_, d_);
       if (oDTB) {
         var oCTB = _1(21,ozSB,oySB,gg);
         oDTB(oCTB,oCTB,oATB, gg);
       } else _w(oBTB, './lib/wxParse/wxParse.wxml', 0, 0);_(oxSB,oATB);return oxSB;};_2(25, ovSB, e, s, gg, ouSB, "item", "index", '');_(osSB,ouSB);_(oKRB, osSB);
      }_(oHRB,oKRB);
      }else if (_o(13, e, s, gg)) {
        oHRB.wxVkey = 2;var oGTB = _v();
       var oHTB = _o(44, e, s, gg);
       var oJTB = _gd('./lib/wxParse/wxParse.wxml', oHTB, e_, d_);
       if (oJTB) {
         var oITB = _1(21,e,s,gg);
         oJTB(oITB,oITB,oGTB, gg);
       } else _w(oHTB, './lib/wxParse/wxParse.wxml', 0, 0);_(oHRB,oGTB);
      } _(r,oHRB);
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
      var oLTB = _v();
      if (_o(16, e, s, gg)) {
        oLTB.wxVkey = 1;var oOTB = _v();
      if (_o(22, e, s, gg)) {
        oOTB.wxVkey = 1;var oRTB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oSTB = _v();var oTTB = function(oXTB,oWTB,oVTB,gg){var oZTB = _v();
       var oaTB = _o(45, oXTB, oWTB, gg);
       var ocTB = _gd('./lib/wxParse/wxParse.wxml', oaTB, e_, d_);
       if (ocTB) {
         var obTB = _1(21,oXTB,oWTB,gg);
         ocTB(obTB,obTB,oZTB, gg);
       } else _w(oaTB, './lib/wxParse/wxParse.wxml', 0, 0);_(oVTB,oZTB);return oVTB;};_2(25, oTTB, e, s, gg, oSTB, "item", "index", '');_(oRTB,oSTB);_(oOTB,oRTB);
      }else if (_o(28, e, s, gg)) {
        oOTB.wxVkey = 2;var ofTB = _n("view");_r(ofTB, 'class', 29, e, s, gg);var ogTB = _n("view");_r(ogTB, 'class', 30, e, s, gg);var ohTB = _n("view");_r(ohTB, 'class', 31, e, s, gg);var oiTB = _n("view");_r(oiTB, 'class', 32, e, s, gg);_(ohTB,oiTB);_(ogTB,ohTB);var ojTB = _n("view");_r(ojTB, 'class', 31, e, s, gg);var okTB = _v();var olTB = function(opTB,ooTB,onTB,gg){var orTB = _v();
       var osTB = _o(45, opTB, ooTB, gg);
       var ouTB = _gd('./lib/wxParse/wxParse.wxml', osTB, e_, d_);
       if (ouTB) {
         var otTB = _1(21,opTB,ooTB,gg);
         ouTB(otTB,otTB,orTB, gg);
       } else _w(osTB, './lib/wxParse/wxParse.wxml', 0, 0);_(onTB,orTB);return onTB;};_2(25, olTB, e, s, gg, okTB, "item", "index", '');_(ojTB,okTB);_(ogTB,ojTB);_(ofTB,ogTB);_(oOTB,ofTB);
      }else if (_o(33, e, s, gg)) {
        oOTB.wxVkey = 3;var oxTB = _v();
       var oyTB = _o(34, e, s, gg);
       var o_TB = _gd('./lib/wxParse/wxParse.wxml', oyTB, e_, d_);
       if (o_TB) {
         var ozTB = _1(21,e,s,gg);
         o_TB(ozTB,ozTB,oxTB, gg);
       } else _w(oyTB, './lib/wxParse/wxParse.wxml', 0, 0);_(oOTB,oxTB);
      }else if (_o(35, e, s, gg)) {
        oOTB.wxVkey = 4;var oCUB = _v();
       var oDUB = _o(36, e, s, gg);
       var oFUB = _gd('./lib/wxParse/wxParse.wxml', oDUB, e_, d_);
       if (oFUB) {
         var oEUB = _1(21,e,s,gg);
         oFUB(oEUB,oEUB,oCUB, gg);
       } else _w(oDUB, './lib/wxParse/wxParse.wxml', 0, 0);_(oOTB,oCUB);
      }else if (_o(37, e, s, gg)) {
        oOTB.wxVkey = 5;var oIUB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oJUB = _v();var oKUB = function(oOUB,oNUB,oMUB,gg){var oQUB = _v();
       var oRUB = _o(45, oOUB, oNUB, gg);
       var oTUB = _gd('./lib/wxParse/wxParse.wxml', oRUB, e_, d_);
       if (oTUB) {
         var oSUB = _1(21,oOUB,oNUB,gg);
         oTUB(oSUB,oSUB,oQUB, gg);
       } else _w(oRUB, './lib/wxParse/wxParse.wxml', 0, 0);_(oMUB,oQUB);return oMUB;};_2(25, oKUB, e, s, gg, oJUB, "item", "index", '');_(oIUB,oJUB);_(oOTB,oIUB);
      }else if (_o(42, e, s, gg)) {
        oOTB.wxVkey = 6;var oWUB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oXUB = _v();var oYUB = function(ocUB,obUB,oaUB,gg){var oeUB = _v();
       var ofUB = _o(45, ocUB, obUB, gg);
       var ohUB = _gd('./lib/wxParse/wxParse.wxml', ofUB, e_, d_);
       if (ohUB) {
         var ogUB = _1(21,ocUB,obUB,gg);
         ohUB(ogUB,ogUB,oeUB, gg);
       } else _w(ofUB, './lib/wxParse/wxParse.wxml', 0, 0);_(oaUB,oeUB);return oaUB;};_2(25, oYUB, e, s, gg, oXUB, "item", "index", '');_(oWUB,oXUB);_(oOTB,oWUB);
      }else {
        oOTB.wxVkey = 7;var oiUB = _m( "view", ["style", 1,"class", 42], e, s, gg);var okUB = _v();var olUB = function(opUB,ooUB,onUB,gg){var orUB = _v();
       var osUB = _o(45, opUB, ooUB, gg);
       var ouUB = _gd('./lib/wxParse/wxParse.wxml', osUB, e_, d_);
       if (ouUB) {
         var otUB = _1(21,opUB,ooUB,gg);
         ouUB(otUB,otUB,orUB, gg);
       } else _w(osUB, './lib/wxParse/wxParse.wxml', 0, 0);_(onUB,orUB);return onUB;};_2(25, olUB, e, s, gg, okUB, "item", "index", '');_(oiUB,okUB);_(oOTB, oiUB);
      }_(oLTB,oOTB);
      }else if (_o(13, e, s, gg)) {
        oLTB.wxVkey = 2;var oxUB = _v();
       var oyUB = _o(44, e, s, gg);
       var o_UB = _gd('./lib/wxParse/wxParse.wxml', oyUB, e_, d_);
       if (o_UB) {
         var ozUB = _1(21,e,s,gg);
         o_UB(ozUB,ozUB,oxUB, gg);
       } else _w(oyUB, './lib/wxParse/wxParse.wxml', 0, 0);_(oLTB,oxUB);
      } _(r,oLTB);
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
      var oBVB = _v();
      if (_o(16, e, s, gg)) {
        oBVB.wxVkey = 1;var oEVB = _v();
      if (_o(22, e, s, gg)) {
        oEVB.wxVkey = 1;var oHVB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oIVB = _v();var oJVB = function(oNVB,oMVB,oLVB,gg){var oPVB = _v();
       var oQVB = _o(46, oNVB, oMVB, gg);
       var oSVB = _gd('./lib/wxParse/wxParse.wxml', oQVB, e_, d_);
       if (oSVB) {
         var oRVB = _1(21,oNVB,oMVB,gg);
         oSVB(oRVB,oRVB,oPVB, gg);
       } else _w(oQVB, './lib/wxParse/wxParse.wxml', 0, 0);_(oLVB,oPVB);return oLVB;};_2(25, oJVB, e, s, gg, oIVB, "item", "index", '');_(oHVB,oIVB);_(oEVB,oHVB);
      }else if (_o(28, e, s, gg)) {
        oEVB.wxVkey = 2;var oVVB = _n("view");_r(oVVB, 'class', 29, e, s, gg);var oWVB = _n("view");_r(oWVB, 'class', 30, e, s, gg);var oXVB = _n("view");_r(oXVB, 'class', 31, e, s, gg);var oYVB = _n("view");_r(oYVB, 'class', 32, e, s, gg);_(oXVB,oYVB);_(oWVB,oXVB);var oZVB = _n("view");_r(oZVB, 'class', 31, e, s, gg);var oaVB = _v();var obVB = function(ofVB,oeVB,odVB,gg){var ohVB = _v();
       var oiVB = _o(46, ofVB, oeVB, gg);
       var okVB = _gd('./lib/wxParse/wxParse.wxml', oiVB, e_, d_);
       if (okVB) {
         var ojVB = _1(21,ofVB,oeVB,gg);
         okVB(ojVB,ojVB,ohVB, gg);
       } else _w(oiVB, './lib/wxParse/wxParse.wxml', 0, 0);_(odVB,ohVB);return odVB;};_2(25, obVB, e, s, gg, oaVB, "item", "index", '');_(oZVB,oaVB);_(oWVB,oZVB);_(oVVB,oWVB);_(oEVB,oVVB);
      }else if (_o(33, e, s, gg)) {
        oEVB.wxVkey = 3;var onVB = _v();
       var ooVB = _o(34, e, s, gg);
       var oqVB = _gd('./lib/wxParse/wxParse.wxml', ooVB, e_, d_);
       if (oqVB) {
         var opVB = _1(21,e,s,gg);
         oqVB(opVB,opVB,onVB, gg);
       } else _w(ooVB, './lib/wxParse/wxParse.wxml', 0, 0);_(oEVB,onVB);
      }else if (_o(35, e, s, gg)) {
        oEVB.wxVkey = 4;var otVB = _v();
       var ouVB = _o(36, e, s, gg);
       var owVB = _gd('./lib/wxParse/wxParse.wxml', ouVB, e_, d_);
       if (owVB) {
         var ovVB = _1(21,e,s,gg);
         owVB(ovVB,ovVB,otVB, gg);
       } else _w(ouVB, './lib/wxParse/wxParse.wxml', 0, 0);_(oEVB,otVB);
      }else if (_o(37, e, s, gg)) {
        oEVB.wxVkey = 5;var ozVB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var o_VB = _v();var oAWB = function(oEWB,oDWB,oCWB,gg){var oGWB = _v();
       var oHWB = _o(46, oEWB, oDWB, gg);
       var oJWB = _gd('./lib/wxParse/wxParse.wxml', oHWB, e_, d_);
       if (oJWB) {
         var oIWB = _1(21,oEWB,oDWB,gg);
         oJWB(oIWB,oIWB,oGWB, gg);
       } else _w(oHWB, './lib/wxParse/wxParse.wxml', 0, 0);_(oCWB,oGWB);return oCWB;};_2(25, oAWB, e, s, gg, o_VB, "item", "index", '');_(ozVB,o_VB);_(oEVB,ozVB);
      }else if (_o(42, e, s, gg)) {
        oEVB.wxVkey = 6;var oMWB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oNWB = _v();var oOWB = function(oSWB,oRWB,oQWB,gg){var oUWB = _v();
       var oVWB = _o(46, oSWB, oRWB, gg);
       var oXWB = _gd('./lib/wxParse/wxParse.wxml', oVWB, e_, d_);
       if (oXWB) {
         var oWWB = _1(21,oSWB,oRWB,gg);
         oXWB(oWWB,oWWB,oUWB, gg);
       } else _w(oVWB, './lib/wxParse/wxParse.wxml', 0, 0);_(oQWB,oUWB);return oQWB;};_2(25, oOWB, e, s, gg, oNWB, "item", "index", '');_(oMWB,oNWB);_(oEVB,oMWB);
      }else {
        oEVB.wxVkey = 7;var oYWB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oaWB = _v();var obWB = function(ofWB,oeWB,odWB,gg){var ohWB = _v();
       var oiWB = _o(46, ofWB, oeWB, gg);
       var okWB = _gd('./lib/wxParse/wxParse.wxml', oiWB, e_, d_);
       if (okWB) {
         var ojWB = _1(21,ofWB,oeWB,gg);
         okWB(ojWB,ojWB,ohWB, gg);
       } else _w(oiWB, './lib/wxParse/wxParse.wxml', 0, 0);_(odWB,ohWB);return odWB;};_2(25, obWB, e, s, gg, oaWB, "item", "index", '');_(oYWB,oaWB);_(oEVB, oYWB);
      }_(oBVB,oEVB);
      }else if (_o(13, e, s, gg)) {
        oBVB.wxVkey = 2;var onWB = _v();
       var ooWB = _o(44, e, s, gg);
       var oqWB = _gd('./lib/wxParse/wxParse.wxml', ooWB, e_, d_);
       if (oqWB) {
         var opWB = _1(21,e,s,gg);
         oqWB(opWB,opWB,onWB, gg);
       } else _w(ooWB, './lib/wxParse/wxParse.wxml', 0, 0);_(oBVB,onWB);
      } _(r,oBVB);
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
      var osWB = _v();
      if (_o(16, e, s, gg)) {
        osWB.wxVkey = 1;var ovWB = _v();
      if (_o(22, e, s, gg)) {
        ovWB.wxVkey = 1;var oyWB = _m( "button", ["size", 23,"type", 1], e, s, gg);var ozWB = _v();var o_WB = function(oDXB,oCXB,oBXB,gg){var oFXB = _v();
       var oGXB = _o(47, oDXB, oCXB, gg);
       var oIXB = _gd('./lib/wxParse/wxParse.wxml', oGXB, e_, d_);
       if (oIXB) {
         var oHXB = _1(21,oDXB,oCXB,gg);
         oIXB(oHXB,oHXB,oFXB, gg);
       } else _w(oGXB, './lib/wxParse/wxParse.wxml', 0, 0);_(oBXB,oFXB);return oBXB;};_2(25, o_WB, e, s, gg, ozWB, "item", "index", '');_(oyWB,ozWB);_(ovWB,oyWB);
      }else if (_o(28, e, s, gg)) {
        ovWB.wxVkey = 2;var oLXB = _n("view");_r(oLXB, 'class', 29, e, s, gg);var oMXB = _n("view");_r(oMXB, 'class', 30, e, s, gg);var oNXB = _n("view");_r(oNXB, 'class', 31, e, s, gg);var oOXB = _n("view");_r(oOXB, 'class', 32, e, s, gg);_(oNXB,oOXB);_(oMXB,oNXB);var oPXB = _n("view");_r(oPXB, 'class', 31, e, s, gg);var oQXB = _v();var oRXB = function(oVXB,oUXB,oTXB,gg){var oXXB = _v();
       var oYXB = _o(47, oVXB, oUXB, gg);
       var oaXB = _gd('./lib/wxParse/wxParse.wxml', oYXB, e_, d_);
       if (oaXB) {
         var oZXB = _1(21,oVXB,oUXB,gg);
         oaXB(oZXB,oZXB,oXXB, gg);
       } else _w(oYXB, './lib/wxParse/wxParse.wxml', 0, 0);_(oTXB,oXXB);return oTXB;};_2(25, oRXB, e, s, gg, oQXB, "item", "index", '');_(oPXB,oQXB);_(oMXB,oPXB);_(oLXB,oMXB);_(ovWB,oLXB);
      }else if (_o(33, e, s, gg)) {
        ovWB.wxVkey = 3;var odXB = _v();
       var oeXB = _o(34, e, s, gg);
       var ogXB = _gd('./lib/wxParse/wxParse.wxml', oeXB, e_, d_);
       if (ogXB) {
         var ofXB = _1(21,e,s,gg);
         ogXB(ofXB,ofXB,odXB, gg);
       } else _w(oeXB, './lib/wxParse/wxParse.wxml', 0, 0);_(ovWB,odXB);
      }else if (_o(35, e, s, gg)) {
        ovWB.wxVkey = 4;var ojXB = _v();
       var okXB = _o(36, e, s, gg);
       var omXB = _gd('./lib/wxParse/wxParse.wxml', okXB, e_, d_);
       if (omXB) {
         var olXB = _1(21,e,s,gg);
         omXB(olXB,olXB,ojXB, gg);
       } else _w(okXB, './lib/wxParse/wxParse.wxml', 0, 0);_(ovWB,ojXB);
      }else if (_o(37, e, s, gg)) {
        ovWB.wxVkey = 5;var opXB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oqXB = _v();var orXB = function(ovXB,ouXB,otXB,gg){var oxXB = _v();
       var oyXB = _o(47, ovXB, ouXB, gg);
       var o_XB = _gd('./lib/wxParse/wxParse.wxml', oyXB, e_, d_);
       if (o_XB) {
         var ozXB = _1(21,ovXB,ouXB,gg);
         o_XB(ozXB,ozXB,oxXB, gg);
       } else _w(oyXB, './lib/wxParse/wxParse.wxml', 0, 0);_(otXB,oxXB);return otXB;};_2(25, orXB, e, s, gg, oqXB, "item", "index", '');_(opXB,oqXB);_(ovWB,opXB);
      }else if (_o(42, e, s, gg)) {
        ovWB.wxVkey = 6;var oCYB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oDYB = _v();var oEYB = function(oIYB,oHYB,oGYB,gg){var oKYB = _v();
       var oLYB = _o(47, oIYB, oHYB, gg);
       var oNYB = _gd('./lib/wxParse/wxParse.wxml', oLYB, e_, d_);
       if (oNYB) {
         var oMYB = _1(21,oIYB,oHYB,gg);
         oNYB(oMYB,oMYB,oKYB, gg);
       } else _w(oLYB, './lib/wxParse/wxParse.wxml', 0, 0);_(oGYB,oKYB);return oGYB;};_2(25, oEYB, e, s, gg, oDYB, "item", "index", '');_(oCYB,oDYB);_(ovWB,oCYB);
      }else {
        ovWB.wxVkey = 7;var oOYB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oQYB = _v();var oRYB = function(oVYB,oUYB,oTYB,gg){var oXYB = _v();
       var oYYB = _o(47, oVYB, oUYB, gg);
       var oaYB = _gd('./lib/wxParse/wxParse.wxml', oYYB, e_, d_);
       if (oaYB) {
         var oZYB = _1(21,oVYB,oUYB,gg);
         oaYB(oZYB,oZYB,oXYB, gg);
       } else _w(oYYB, './lib/wxParse/wxParse.wxml', 0, 0);_(oTYB,oXYB);return oTYB;};_2(25, oRYB, e, s, gg, oQYB, "item", "index", '');_(oOYB,oQYB);_(ovWB, oOYB);
      }_(osWB,ovWB);
      }else if (_o(13, e, s, gg)) {
        osWB.wxVkey = 2;var odYB = _v();
       var oeYB = _o(44, e, s, gg);
       var ogYB = _gd('./lib/wxParse/wxParse.wxml', oeYB, e_, d_);
       if (ogYB) {
         var ofYB = _1(21,e,s,gg);
         ogYB(ofYB,ofYB,odYB, gg);
       } else _w(oeYB, './lib/wxParse/wxParse.wxml', 0, 0);_(osWB,odYB);
      } _(r,osWB);
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
      var oiYB = _v();
      if (_o(16, e, s, gg)) {
        oiYB.wxVkey = 1;var olYB = _v();
      if (_o(22, e, s, gg)) {
        olYB.wxVkey = 1;var ooYB = _m( "button", ["size", 23,"type", 1], e, s, gg);var opYB = _v();var oqYB = function(ouYB,otYB,osYB,gg){var owYB = _v();
       var oxYB = _o(48, ouYB, otYB, gg);
       var ozYB = _gd('./lib/wxParse/wxParse.wxml', oxYB, e_, d_);
       if (ozYB) {
         var oyYB = _1(21,ouYB,otYB,gg);
         ozYB(oyYB,oyYB,owYB, gg);
       } else _w(oxYB, './lib/wxParse/wxParse.wxml', 0, 0);_(osYB,owYB);return osYB;};_2(25, oqYB, e, s, gg, opYB, "item", "index", '');_(ooYB,opYB);_(olYB,ooYB);
      }else if (_o(28, e, s, gg)) {
        olYB.wxVkey = 2;var oBZB = _n("view");_r(oBZB, 'class', 29, e, s, gg);var oCZB = _n("view");_r(oCZB, 'class', 30, e, s, gg);var oDZB = _n("view");_r(oDZB, 'class', 31, e, s, gg);var oEZB = _n("view");_r(oEZB, 'class', 32, e, s, gg);_(oDZB,oEZB);_(oCZB,oDZB);var oFZB = _n("view");_r(oFZB, 'class', 31, e, s, gg);var oGZB = _v();var oHZB = function(oLZB,oKZB,oJZB,gg){var oNZB = _v();
       var oOZB = _o(48, oLZB, oKZB, gg);
       var oQZB = _gd('./lib/wxParse/wxParse.wxml', oOZB, e_, d_);
       if (oQZB) {
         var oPZB = _1(21,oLZB,oKZB,gg);
         oQZB(oPZB,oPZB,oNZB, gg);
       } else _w(oOZB, './lib/wxParse/wxParse.wxml', 0, 0);_(oJZB,oNZB);return oJZB;};_2(25, oHZB, e, s, gg, oGZB, "item", "index", '');_(oFZB,oGZB);_(oCZB,oFZB);_(oBZB,oCZB);_(olYB,oBZB);
      }else if (_o(33, e, s, gg)) {
        olYB.wxVkey = 3;var oTZB = _v();
       var oUZB = _o(34, e, s, gg);
       var oWZB = _gd('./lib/wxParse/wxParse.wxml', oUZB, e_, d_);
       if (oWZB) {
         var oVZB = _1(21,e,s,gg);
         oWZB(oVZB,oVZB,oTZB, gg);
       } else _w(oUZB, './lib/wxParse/wxParse.wxml', 0, 0);_(olYB,oTZB);
      }else if (_o(35, e, s, gg)) {
        olYB.wxVkey = 4;var oZZB = _v();
       var oaZB = _o(36, e, s, gg);
       var ocZB = _gd('./lib/wxParse/wxParse.wxml', oaZB, e_, d_);
       if (ocZB) {
         var obZB = _1(21,e,s,gg);
         ocZB(obZB,obZB,oZZB, gg);
       } else _w(oaZB, './lib/wxParse/wxParse.wxml', 0, 0);_(olYB,oZZB);
      }else if (_o(37, e, s, gg)) {
        olYB.wxVkey = 5;var ofZB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ogZB = _v();var ohZB = function(olZB,okZB,ojZB,gg){var onZB = _v();
       var ooZB = _o(48, olZB, okZB, gg);
       var oqZB = _gd('./lib/wxParse/wxParse.wxml', ooZB, e_, d_);
       if (oqZB) {
         var opZB = _1(21,olZB,okZB,gg);
         oqZB(opZB,opZB,onZB, gg);
       } else _w(ooZB, './lib/wxParse/wxParse.wxml', 0, 0);_(ojZB,onZB);return ojZB;};_2(25, ohZB, e, s, gg, ogZB, "item", "index", '');_(ofZB,ogZB);_(olYB,ofZB);
      }else if (_o(42, e, s, gg)) {
        olYB.wxVkey = 6;var otZB = _m( "view", ["class", 0,"style", 1], e, s, gg);var ouZB = _v();var ovZB = function(ozZB,oyZB,oxZB,gg){var oAaB = _v();
       var oBaB = _o(48, ozZB, oyZB, gg);
       var oDaB = _gd('./lib/wxParse/wxParse.wxml', oBaB, e_, d_);
       if (oDaB) {
         var oCaB = _1(21,ozZB,oyZB,gg);
         oDaB(oCaB,oCaB,oAaB, gg);
       } else _w(oBaB, './lib/wxParse/wxParse.wxml', 0, 0);_(oxZB,oAaB);return oxZB;};_2(25, ovZB, e, s, gg, ouZB, "item", "index", '');_(otZB,ouZB);_(olYB,otZB);
      }else {
        olYB.wxVkey = 7;var oEaB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oGaB = _v();var oHaB = function(oLaB,oKaB,oJaB,gg){var oNaB = _v();
       var oOaB = _o(48, oLaB, oKaB, gg);
       var oQaB = _gd('./lib/wxParse/wxParse.wxml', oOaB, e_, d_);
       if (oQaB) {
         var oPaB = _1(21,oLaB,oKaB,gg);
         oQaB(oPaB,oPaB,oNaB, gg);
       } else _w(oOaB, './lib/wxParse/wxParse.wxml', 0, 0);_(oJaB,oNaB);return oJaB;};_2(25, oHaB, e, s, gg, oGaB, "item", "index", '');_(oEaB,oGaB);_(olYB, oEaB);
      }_(oiYB,olYB);
      }else if (_o(13, e, s, gg)) {
        oiYB.wxVkey = 2;var oTaB = _v();
       var oUaB = _o(44, e, s, gg);
       var oWaB = _gd('./lib/wxParse/wxParse.wxml', oUaB, e_, d_);
       if (oWaB) {
         var oVaB = _1(21,e,s,gg);
         oWaB(oVaB,oVaB,oTaB, gg);
       } else _w(oUaB, './lib/wxParse/wxParse.wxml', 0, 0);_(oiYB,oTaB);
      } _(r,oiYB);
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
      var oYaB = _v();
      if (_o(16, e, s, gg)) {
        oYaB.wxVkey = 1;var obaB = _v();
      if (_o(22, e, s, gg)) {
        obaB.wxVkey = 1;var oeaB = _m( "button", ["size", 23,"type", 1], e, s, gg);var ofaB = _v();var ogaB = function(okaB,ojaB,oiaB,gg){var omaB = _v();
       var onaB = _o(49, okaB, ojaB, gg);
       var opaB = _gd('./lib/wxParse/wxParse.wxml', onaB, e_, d_);
       if (opaB) {
         var ooaB = _1(21,okaB,ojaB,gg);
         opaB(ooaB,ooaB,omaB, gg);
       } else _w(onaB, './lib/wxParse/wxParse.wxml', 0, 0);_(oiaB,omaB);return oiaB;};_2(25, ogaB, e, s, gg, ofaB, "item", "index", '');_(oeaB,ofaB);_(obaB,oeaB);
      }else if (_o(28, e, s, gg)) {
        obaB.wxVkey = 2;var osaB = _n("view");_r(osaB, 'class', 29, e, s, gg);var otaB = _n("view");_r(otaB, 'class', 30, e, s, gg);var ouaB = _n("view");_r(ouaB, 'class', 31, e, s, gg);var ovaB = _n("view");_r(ovaB, 'class', 32, e, s, gg);_(ouaB,ovaB);_(otaB,ouaB);var owaB = _n("view");_r(owaB, 'class', 31, e, s, gg);var oxaB = _v();var oyaB = function(oBbB,oAbB,o_aB,gg){var oDbB = _v();
       var oEbB = _o(49, oBbB, oAbB, gg);
       var oGbB = _gd('./lib/wxParse/wxParse.wxml', oEbB, e_, d_);
       if (oGbB) {
         var oFbB = _1(21,oBbB,oAbB,gg);
         oGbB(oFbB,oFbB,oDbB, gg);
       } else _w(oEbB, './lib/wxParse/wxParse.wxml', 0, 0);_(o_aB,oDbB);return o_aB;};_2(25, oyaB, e, s, gg, oxaB, "item", "index", '');_(owaB,oxaB);_(otaB,owaB);_(osaB,otaB);_(obaB,osaB);
      }else if (_o(33, e, s, gg)) {
        obaB.wxVkey = 3;var oJbB = _v();
       var oKbB = _o(34, e, s, gg);
       var oMbB = _gd('./lib/wxParse/wxParse.wxml', oKbB, e_, d_);
       if (oMbB) {
         var oLbB = _1(21,e,s,gg);
         oMbB(oLbB,oLbB,oJbB, gg);
       } else _w(oKbB, './lib/wxParse/wxParse.wxml', 0, 0);_(obaB,oJbB);
      }else if (_o(35, e, s, gg)) {
        obaB.wxVkey = 4;var oPbB = _v();
       var oQbB = _o(36, e, s, gg);
       var oSbB = _gd('./lib/wxParse/wxParse.wxml', oQbB, e_, d_);
       if (oSbB) {
         var oRbB = _1(21,e,s,gg);
         oSbB(oRbB,oRbB,oPbB, gg);
       } else _w(oQbB, './lib/wxParse/wxParse.wxml', 0, 0);_(obaB,oPbB);
      }else if (_o(37, e, s, gg)) {
        obaB.wxVkey = 5;var oVbB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oWbB = _v();var oXbB = function(obbB,oabB,oZbB,gg){var odbB = _v();
       var oebB = _o(49, obbB, oabB, gg);
       var ogbB = _gd('./lib/wxParse/wxParse.wxml', oebB, e_, d_);
       if (ogbB) {
         var ofbB = _1(21,obbB,oabB,gg);
         ogbB(ofbB,ofbB,odbB, gg);
       } else _w(oebB, './lib/wxParse/wxParse.wxml', 0, 0);_(oZbB,odbB);return oZbB;};_2(25, oXbB, e, s, gg, oWbB, "item", "index", '');_(oVbB,oWbB);_(obaB,oVbB);
      }else if (_o(42, e, s, gg)) {
        obaB.wxVkey = 6;var ojbB = _m( "view", ["class", 0,"style", 1], e, s, gg);var okbB = _v();var olbB = function(opbB,oobB,onbB,gg){var orbB = _v();
       var osbB = _o(49, opbB, oobB, gg);
       var oubB = _gd('./lib/wxParse/wxParse.wxml', osbB, e_, d_);
       if (oubB) {
         var otbB = _1(21,opbB,oobB,gg);
         oubB(otbB,otbB,orbB, gg);
       } else _w(osbB, './lib/wxParse/wxParse.wxml', 0, 0);_(onbB,orbB);return onbB;};_2(25, olbB, e, s, gg, okbB, "item", "index", '');_(ojbB,okbB);_(obaB,ojbB);
      }else {
        obaB.wxVkey = 7;var ovbB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oxbB = _v();var oybB = function(oBcB,oAcB,o_bB,gg){var oDcB = _v();
       var oEcB = _o(49, oBcB, oAcB, gg);
       var oGcB = _gd('./lib/wxParse/wxParse.wxml', oEcB, e_, d_);
       if (oGcB) {
         var oFcB = _1(21,oBcB,oAcB,gg);
         oGcB(oFcB,oFcB,oDcB, gg);
       } else _w(oEcB, './lib/wxParse/wxParse.wxml', 0, 0);_(o_bB,oDcB);return o_bB;};_2(25, oybB, e, s, gg, oxbB, "item", "index", '');_(ovbB,oxbB);_(obaB, ovbB);
      }_(oYaB,obaB);
      }else if (_o(13, e, s, gg)) {
        oYaB.wxVkey = 2;var oJcB = _v();
       var oKcB = _o(44, e, s, gg);
       var oMcB = _gd('./lib/wxParse/wxParse.wxml', oKcB, e_, d_);
       if (oMcB) {
         var oLcB = _1(21,e,s,gg);
         oMcB(oLcB,oLcB,oJcB, gg);
       } else _w(oKcB, './lib/wxParse/wxParse.wxml', 0, 0);_(oYaB,oJcB);
      } _(r,oYaB);
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
      var oOcB = _v();
      if (_o(16, e, s, gg)) {
        oOcB.wxVkey = 1;var oRcB = _v();
      if (_o(22, e, s, gg)) {
        oRcB.wxVkey = 1;var oUcB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oVcB = _v();var oWcB = function(oacB,oZcB,oYcB,gg){var occB = _v();
       var odcB = _o(50, oacB, oZcB, gg);
       var ofcB = _gd('./lib/wxParse/wxParse.wxml', odcB, e_, d_);
       if (ofcB) {
         var oecB = _1(21,oacB,oZcB,gg);
         ofcB(oecB,oecB,occB, gg);
       } else _w(odcB, './lib/wxParse/wxParse.wxml', 0, 0);_(oYcB,occB);return oYcB;};_2(25, oWcB, e, s, gg, oVcB, "item", "index", '');_(oUcB,oVcB);_(oRcB,oUcB);
      }else if (_o(28, e, s, gg)) {
        oRcB.wxVkey = 2;var oicB = _n("view");_r(oicB, 'class', 29, e, s, gg);var ojcB = _n("view");_r(ojcB, 'class', 30, e, s, gg);var okcB = _n("view");_r(okcB, 'class', 31, e, s, gg);var olcB = _n("view");_r(olcB, 'class', 32, e, s, gg);_(okcB,olcB);_(ojcB,okcB);var omcB = _n("view");_r(omcB, 'class', 31, e, s, gg);var oncB = _v();var oocB = function(oscB,orcB,oqcB,gg){var oucB = _v();
       var ovcB = _o(50, oscB, orcB, gg);
       var oxcB = _gd('./lib/wxParse/wxParse.wxml', ovcB, e_, d_);
       if (oxcB) {
         var owcB = _1(21,oscB,orcB,gg);
         oxcB(owcB,owcB,oucB, gg);
       } else _w(ovcB, './lib/wxParse/wxParse.wxml', 0, 0);_(oqcB,oucB);return oqcB;};_2(25, oocB, e, s, gg, oncB, "item", "index", '');_(omcB,oncB);_(ojcB,omcB);_(oicB,ojcB);_(oRcB,oicB);
      }else if (_o(33, e, s, gg)) {
        oRcB.wxVkey = 3;var o_cB = _v();
       var oAdB = _o(34, e, s, gg);
       var oCdB = _gd('./lib/wxParse/wxParse.wxml', oAdB, e_, d_);
       if (oCdB) {
         var oBdB = _1(21,e,s,gg);
         oCdB(oBdB,oBdB,o_cB, gg);
       } else _w(oAdB, './lib/wxParse/wxParse.wxml', 0, 0);_(oRcB,o_cB);
      }else if (_o(35, e, s, gg)) {
        oRcB.wxVkey = 4;var oFdB = _v();
       var oGdB = _o(36, e, s, gg);
       var oIdB = _gd('./lib/wxParse/wxParse.wxml', oGdB, e_, d_);
       if (oIdB) {
         var oHdB = _1(21,e,s,gg);
         oIdB(oHdB,oHdB,oFdB, gg);
       } else _w(oGdB, './lib/wxParse/wxParse.wxml', 0, 0);_(oRcB,oFdB);
      }else if (_o(37, e, s, gg)) {
        oRcB.wxVkey = 5;var oLdB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oMdB = _v();var oNdB = function(oRdB,oQdB,oPdB,gg){var oTdB = _v();
       var oUdB = _o(50, oRdB, oQdB, gg);
       var oWdB = _gd('./lib/wxParse/wxParse.wxml', oUdB, e_, d_);
       if (oWdB) {
         var oVdB = _1(21,oRdB,oQdB,gg);
         oWdB(oVdB,oVdB,oTdB, gg);
       } else _w(oUdB, './lib/wxParse/wxParse.wxml', 0, 0);_(oPdB,oTdB);return oPdB;};_2(25, oNdB, e, s, gg, oMdB, "item", "index", '');_(oLdB,oMdB);_(oRcB,oLdB);
      }else if (_o(42, e, s, gg)) {
        oRcB.wxVkey = 6;var oZdB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oadB = _v();var obdB = function(ofdB,oedB,oddB,gg){var ohdB = _v();
       var oidB = _o(50, ofdB, oedB, gg);
       var okdB = _gd('./lib/wxParse/wxParse.wxml', oidB, e_, d_);
       if (okdB) {
         var ojdB = _1(21,ofdB,oedB,gg);
         okdB(ojdB,ojdB,ohdB, gg);
       } else _w(oidB, './lib/wxParse/wxParse.wxml', 0, 0);_(oddB,ohdB);return oddB;};_2(25, obdB, e, s, gg, oadB, "item", "index", '');_(oZdB,oadB);_(oRcB,oZdB);
      }else {
        oRcB.wxVkey = 7;var oldB = _m( "view", ["style", 1,"class", 42], e, s, gg);var ondB = _v();var oodB = function(osdB,ordB,oqdB,gg){var oudB = _v();
       var ovdB = _o(50, osdB, ordB, gg);
       var oxdB = _gd('./lib/wxParse/wxParse.wxml', ovdB, e_, d_);
       if (oxdB) {
         var owdB = _1(21,osdB,ordB,gg);
         oxdB(owdB,owdB,oudB, gg);
       } else _w(ovdB, './lib/wxParse/wxParse.wxml', 0, 0);_(oqdB,oudB);return oqdB;};_2(25, oodB, e, s, gg, ondB, "item", "index", '');_(oldB,ondB);_(oRcB, oldB);
      }_(oOcB,oRcB);
      }else if (_o(13, e, s, gg)) {
        oOcB.wxVkey = 2;var o_dB = _v();
       var oAeB = _o(44, e, s, gg);
       var oCeB = _gd('./lib/wxParse/wxParse.wxml', oAeB, e_, d_);
       if (oCeB) {
         var oBeB = _1(21,e,s,gg);
         oCeB(oBeB,oBeB,o_dB, gg);
       } else _w(oAeB, './lib/wxParse/wxParse.wxml', 0, 0);_(oOcB,o_dB);
      } _(r,oOcB);
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
      var oEeB = _v();
      if (_o(16, e, s, gg)) {
        oEeB.wxVkey = 1;var oHeB = _v();
      if (_o(22, e, s, gg)) {
        oHeB.wxVkey = 1;var oKeB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oLeB = _v();var oMeB = function(oQeB,oPeB,oOeB,gg){var oSeB = _v();
       var oTeB = _o(51, oQeB, oPeB, gg);
       var oVeB = _gd('./lib/wxParse/wxParse.wxml', oTeB, e_, d_);
       if (oVeB) {
         var oUeB = _1(21,oQeB,oPeB,gg);
         oVeB(oUeB,oUeB,oSeB, gg);
       } else _w(oTeB, './lib/wxParse/wxParse.wxml', 0, 0);_(oOeB,oSeB);return oOeB;};_2(25, oMeB, e, s, gg, oLeB, "item", "index", '');_(oKeB,oLeB);_(oHeB,oKeB);
      }else if (_o(28, e, s, gg)) {
        oHeB.wxVkey = 2;var oYeB = _n("view");_r(oYeB, 'class', 29, e, s, gg);var oZeB = _n("view");_r(oZeB, 'class', 30, e, s, gg);var oaeB = _n("view");_r(oaeB, 'class', 31, e, s, gg);var obeB = _n("view");_r(obeB, 'class', 32, e, s, gg);_(oaeB,obeB);_(oZeB,oaeB);var oceB = _n("view");_r(oceB, 'class', 31, e, s, gg);var odeB = _v();var oeeB = function(oieB,oheB,ogeB,gg){var okeB = _v();
       var oleB = _o(51, oieB, oheB, gg);
       var oneB = _gd('./lib/wxParse/wxParse.wxml', oleB, e_, d_);
       if (oneB) {
         var omeB = _1(21,oieB,oheB,gg);
         oneB(omeB,omeB,okeB, gg);
       } else _w(oleB, './lib/wxParse/wxParse.wxml', 0, 0);_(ogeB,okeB);return ogeB;};_2(25, oeeB, e, s, gg, odeB, "item", "index", '');_(oceB,odeB);_(oZeB,oceB);_(oYeB,oZeB);_(oHeB,oYeB);
      }else if (_o(33, e, s, gg)) {
        oHeB.wxVkey = 3;var oqeB = _v();
       var oreB = _o(34, e, s, gg);
       var oteB = _gd('./lib/wxParse/wxParse.wxml', oreB, e_, d_);
       if (oteB) {
         var oseB = _1(21,e,s,gg);
         oteB(oseB,oseB,oqeB, gg);
       } else _w(oreB, './lib/wxParse/wxParse.wxml', 0, 0);_(oHeB,oqeB);
      }else if (_o(35, e, s, gg)) {
        oHeB.wxVkey = 4;var oweB = _v();
       var oxeB = _o(36, e, s, gg);
       var ozeB = _gd('./lib/wxParse/wxParse.wxml', oxeB, e_, d_);
       if (ozeB) {
         var oyeB = _1(21,e,s,gg);
         ozeB(oyeB,oyeB,oweB, gg);
       } else _w(oxeB, './lib/wxParse/wxParse.wxml', 0, 0);_(oHeB,oweB);
      }else if (_o(37, e, s, gg)) {
        oHeB.wxVkey = 5;var oBfB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oCfB = _v();var oDfB = function(oHfB,oGfB,oFfB,gg){var oJfB = _v();
       var oKfB = _o(51, oHfB, oGfB, gg);
       var oMfB = _gd('./lib/wxParse/wxParse.wxml', oKfB, e_, d_);
       if (oMfB) {
         var oLfB = _1(21,oHfB,oGfB,gg);
         oMfB(oLfB,oLfB,oJfB, gg);
       } else _w(oKfB, './lib/wxParse/wxParse.wxml', 0, 0);_(oFfB,oJfB);return oFfB;};_2(25, oDfB, e, s, gg, oCfB, "item", "index", '');_(oBfB,oCfB);_(oHeB,oBfB);
      }else if (_o(42, e, s, gg)) {
        oHeB.wxVkey = 6;var oPfB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oQfB = _v();var oRfB = function(oVfB,oUfB,oTfB,gg){var oXfB = _v();
       var oYfB = _o(51, oVfB, oUfB, gg);
       var oafB = _gd('./lib/wxParse/wxParse.wxml', oYfB, e_, d_);
       if (oafB) {
         var oZfB = _1(21,oVfB,oUfB,gg);
         oafB(oZfB,oZfB,oXfB, gg);
       } else _w(oYfB, './lib/wxParse/wxParse.wxml', 0, 0);_(oTfB,oXfB);return oTfB;};_2(25, oRfB, e, s, gg, oQfB, "item", "index", '');_(oPfB,oQfB);_(oHeB,oPfB);
      }else {
        oHeB.wxVkey = 7;var obfB = _m( "view", ["style", 1,"class", 42], e, s, gg);var odfB = _v();var oefB = function(oifB,ohfB,ogfB,gg){var okfB = _v();
       var olfB = _o(51, oifB, ohfB, gg);
       var onfB = _gd('./lib/wxParse/wxParse.wxml', olfB, e_, d_);
       if (onfB) {
         var omfB = _1(21,oifB,ohfB,gg);
         onfB(omfB,omfB,okfB, gg);
       } else _w(olfB, './lib/wxParse/wxParse.wxml', 0, 0);_(ogfB,okfB);return ogfB;};_2(25, oefB, e, s, gg, odfB, "item", "index", '');_(obfB,odfB);_(oHeB, obfB);
      }_(oEeB,oHeB);
      }else if (_o(13, e, s, gg)) {
        oEeB.wxVkey = 2;var oqfB = _v();
       var orfB = _o(44, e, s, gg);
       var otfB = _gd('./lib/wxParse/wxParse.wxml', orfB, e_, d_);
       if (otfB) {
         var osfB = _1(21,e,s,gg);
         otfB(osfB,osfB,oqfB, gg);
       } else _w(orfB, './lib/wxParse/wxParse.wxml', 0, 0);_(oEeB,oqfB);
      } _(r,oEeB);
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
      var ovfB = _v();
      if (_o(16, e, s, gg)) {
        ovfB.wxVkey = 1;var oyfB = _v();
      if (_o(22, e, s, gg)) {
        oyfB.wxVkey = 1;var oAgB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oBgB = _v();var oCgB = function(oGgB,oFgB,oEgB,gg){var oIgB = _v();
       var oJgB = _o(52, oGgB, oFgB, gg);
       var oLgB = _gd('./lib/wxParse/wxParse.wxml', oJgB, e_, d_);
       if (oLgB) {
         var oKgB = _1(21,oGgB,oFgB,gg);
         oLgB(oKgB,oKgB,oIgB, gg);
       } else _w(oJgB, './lib/wxParse/wxParse.wxml', 0, 0);_(oEgB,oIgB);return oEgB;};_2(25, oCgB, e, s, gg, oBgB, "item", "index", '');_(oAgB,oBgB);_(oyfB,oAgB);
      }else if (_o(28, e, s, gg)) {
        oyfB.wxVkey = 2;var oOgB = _n("view");_r(oOgB, 'class', 29, e, s, gg);var oPgB = _n("view");_r(oPgB, 'class', 30, e, s, gg);var oQgB = _n("view");_r(oQgB, 'class', 31, e, s, gg);var oRgB = _n("view");_r(oRgB, 'class', 32, e, s, gg);_(oQgB,oRgB);_(oPgB,oQgB);var oSgB = _n("view");_r(oSgB, 'class', 31, e, s, gg);var oTgB = _v();var oUgB = function(oYgB,oXgB,oWgB,gg){var oagB = _v();
       var obgB = _o(52, oYgB, oXgB, gg);
       var odgB = _gd('./lib/wxParse/wxParse.wxml', obgB, e_, d_);
       if (odgB) {
         var ocgB = _1(21,oYgB,oXgB,gg);
         odgB(ocgB,ocgB,oagB, gg);
       } else _w(obgB, './lib/wxParse/wxParse.wxml', 0, 0);_(oWgB,oagB);return oWgB;};_2(25, oUgB, e, s, gg, oTgB, "item", "index", '');_(oSgB,oTgB);_(oPgB,oSgB);_(oOgB,oPgB);_(oyfB,oOgB);
      }else if (_o(33, e, s, gg)) {
        oyfB.wxVkey = 3;var oggB = _v();
       var ohgB = _o(34, e, s, gg);
       var ojgB = _gd('./lib/wxParse/wxParse.wxml', ohgB, e_, d_);
       if (ojgB) {
         var oigB = _1(21,e,s,gg);
         ojgB(oigB,oigB,oggB, gg);
       } else _w(ohgB, './lib/wxParse/wxParse.wxml', 0, 0);_(oyfB,oggB);
      }else if (_o(35, e, s, gg)) {
        oyfB.wxVkey = 4;var omgB = _v();
       var ongB = _o(36, e, s, gg);
       var opgB = _gd('./lib/wxParse/wxParse.wxml', ongB, e_, d_);
       if (opgB) {
         var oogB = _1(21,e,s,gg);
         opgB(oogB,oogB,omgB, gg);
       } else _w(ongB, './lib/wxParse/wxParse.wxml', 0, 0);_(oyfB,omgB);
      }else if (_o(37, e, s, gg)) {
        oyfB.wxVkey = 5;var osgB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var otgB = _v();var ougB = function(oygB,oxgB,owgB,gg){var o_gB = _v();
       var oAhB = _o(52, oygB, oxgB, gg);
       var oChB = _gd('./lib/wxParse/wxParse.wxml', oAhB, e_, d_);
       if (oChB) {
         var oBhB = _1(21,oygB,oxgB,gg);
         oChB(oBhB,oBhB,o_gB, gg);
       } else _w(oAhB, './lib/wxParse/wxParse.wxml', 0, 0);_(owgB,o_gB);return owgB;};_2(25, ougB, e, s, gg, otgB, "item", "index", '');_(osgB,otgB);_(oyfB,osgB);
      }else if (_o(42, e, s, gg)) {
        oyfB.wxVkey = 6;var oFhB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oGhB = _v();var oHhB = function(oLhB,oKhB,oJhB,gg){var oNhB = _v();
       var oOhB = _o(52, oLhB, oKhB, gg);
       var oQhB = _gd('./lib/wxParse/wxParse.wxml', oOhB, e_, d_);
       if (oQhB) {
         var oPhB = _1(21,oLhB,oKhB,gg);
         oQhB(oPhB,oPhB,oNhB, gg);
       } else _w(oOhB, './lib/wxParse/wxParse.wxml', 0, 0);_(oJhB,oNhB);return oJhB;};_2(25, oHhB, e, s, gg, oGhB, "item", "index", '');_(oFhB,oGhB);_(oyfB,oFhB);
      }else {
        oyfB.wxVkey = 7;var oRhB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oThB = _v();var oUhB = function(oYhB,oXhB,oWhB,gg){var oahB = _v();
       var obhB = _o(52, oYhB, oXhB, gg);
       var odhB = _gd('./lib/wxParse/wxParse.wxml', obhB, e_, d_);
       if (odhB) {
         var ochB = _1(21,oYhB,oXhB,gg);
         odhB(ochB,ochB,oahB, gg);
       } else _w(obhB, './lib/wxParse/wxParse.wxml', 0, 0);_(oWhB,oahB);return oWhB;};_2(25, oUhB, e, s, gg, oThB, "item", "index", '');_(oRhB,oThB);_(oyfB, oRhB);
      }_(ovfB,oyfB);
      }else if (_o(13, e, s, gg)) {
        ovfB.wxVkey = 2;var oghB = _v();
       var ohhB = _o(44, e, s, gg);
       var ojhB = _gd('./lib/wxParse/wxParse.wxml', ohhB, e_, d_);
       if (ojhB) {
         var oihB = _1(21,e,s,gg);
         ojhB(oihB,oihB,oghB, gg);
       } else _w(ohhB, './lib/wxParse/wxParse.wxml', 0, 0);_(ovfB,oghB);
      } _(r,ovfB);
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
      var olhB = _v();
      if (_o(16, e, s, gg)) {
        olhB.wxVkey = 1;var oohB = _v();
      if (_o(22, e, s, gg)) {
        oohB.wxVkey = 1;var orhB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oshB = _v();var othB = function(oxhB,owhB,ovhB,gg){var ozhB = _v();
       var o_hB = _o(53, oxhB, owhB, gg);
       var oBiB = _gd('./lib/wxParse/wxParse.wxml', o_hB, e_, d_);
       if (oBiB) {
         var oAiB = _1(21,oxhB,owhB,gg);
         oBiB(oAiB,oAiB,ozhB, gg);
       } else _w(o_hB, './lib/wxParse/wxParse.wxml', 0, 0);_(ovhB,ozhB);return ovhB;};_2(25, othB, e, s, gg, oshB, "item", "index", '');_(orhB,oshB);_(oohB,orhB);
      }else if (_o(28, e, s, gg)) {
        oohB.wxVkey = 2;var oEiB = _n("view");_r(oEiB, 'class', 29, e, s, gg);var oFiB = _n("view");_r(oFiB, 'class', 30, e, s, gg);var oGiB = _n("view");_r(oGiB, 'class', 31, e, s, gg);var oHiB = _n("view");_r(oHiB, 'class', 32, e, s, gg);_(oGiB,oHiB);_(oFiB,oGiB);var oIiB = _n("view");_r(oIiB, 'class', 31, e, s, gg);var oJiB = _v();var oKiB = function(oOiB,oNiB,oMiB,gg){var oQiB = _v();
       var oRiB = _o(53, oOiB, oNiB, gg);
       var oTiB = _gd('./lib/wxParse/wxParse.wxml', oRiB, e_, d_);
       if (oTiB) {
         var oSiB = _1(21,oOiB,oNiB,gg);
         oTiB(oSiB,oSiB,oQiB, gg);
       } else _w(oRiB, './lib/wxParse/wxParse.wxml', 0, 0);_(oMiB,oQiB);return oMiB;};_2(25, oKiB, e, s, gg, oJiB, "item", "index", '');_(oIiB,oJiB);_(oFiB,oIiB);_(oEiB,oFiB);_(oohB,oEiB);
      }else if (_o(33, e, s, gg)) {
        oohB.wxVkey = 3;var oWiB = _v();
       var oXiB = _o(34, e, s, gg);
       var oZiB = _gd('./lib/wxParse/wxParse.wxml', oXiB, e_, d_);
       if (oZiB) {
         var oYiB = _1(21,e,s,gg);
         oZiB(oYiB,oYiB,oWiB, gg);
       } else _w(oXiB, './lib/wxParse/wxParse.wxml', 0, 0);_(oohB,oWiB);
      }else if (_o(35, e, s, gg)) {
        oohB.wxVkey = 4;var ociB = _v();
       var odiB = _o(36, e, s, gg);
       var ofiB = _gd('./lib/wxParse/wxParse.wxml', odiB, e_, d_);
       if (ofiB) {
         var oeiB = _1(21,e,s,gg);
         ofiB(oeiB,oeiB,ociB, gg);
       } else _w(odiB, './lib/wxParse/wxParse.wxml', 0, 0);_(oohB,ociB);
      }else if (_o(37, e, s, gg)) {
        oohB.wxVkey = 5;var oiiB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var ojiB = _v();var okiB = function(ooiB,oniB,omiB,gg){var oqiB = _v();
       var oriB = _o(53, ooiB, oniB, gg);
       var otiB = _gd('./lib/wxParse/wxParse.wxml', oriB, e_, d_);
       if (otiB) {
         var osiB = _1(21,ooiB,oniB,gg);
         otiB(osiB,osiB,oqiB, gg);
       } else _w(oriB, './lib/wxParse/wxParse.wxml', 0, 0);_(omiB,oqiB);return omiB;};_2(25, okiB, e, s, gg, ojiB, "item", "index", '');_(oiiB,ojiB);_(oohB,oiiB);
      }else if (_o(42, e, s, gg)) {
        oohB.wxVkey = 6;var owiB = _m( "view", ["class", 0,"style", 1], e, s, gg);var oxiB = _v();var oyiB = function(oBjB,oAjB,o_iB,gg){var oDjB = _v();
       var oEjB = _o(53, oBjB, oAjB, gg);
       var oGjB = _gd('./lib/wxParse/wxParse.wxml', oEjB, e_, d_);
       if (oGjB) {
         var oFjB = _1(21,oBjB,oAjB,gg);
         oGjB(oFjB,oFjB,oDjB, gg);
       } else _w(oEjB, './lib/wxParse/wxParse.wxml', 0, 0);_(o_iB,oDjB);return o_iB;};_2(25, oyiB, e, s, gg, oxiB, "item", "index", '');_(owiB,oxiB);_(oohB,owiB);
      }else {
        oohB.wxVkey = 7;var oHjB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oJjB = _v();var oKjB = function(oOjB,oNjB,oMjB,gg){var oQjB = _v();
       var oRjB = _o(53, oOjB, oNjB, gg);
       var oTjB = _gd('./lib/wxParse/wxParse.wxml', oRjB, e_, d_);
       if (oTjB) {
         var oSjB = _1(21,oOjB,oNjB,gg);
         oTjB(oSjB,oSjB,oQjB, gg);
       } else _w(oRjB, './lib/wxParse/wxParse.wxml', 0, 0);_(oMjB,oQjB);return oMjB;};_2(25, oKjB, e, s, gg, oJjB, "item", "index", '');_(oHjB,oJjB);_(oohB, oHjB);
      }_(olhB,oohB);
      }else if (_o(13, e, s, gg)) {
        olhB.wxVkey = 2;var oWjB = _v();
       var oXjB = _o(44, e, s, gg);
       var oZjB = _gd('./lib/wxParse/wxParse.wxml', oXjB, e_, d_);
       if (oZjB) {
         var oYjB = _1(21,e,s,gg);
         oZjB(oYjB,oYjB,oWjB, gg);
       } else _w(oXjB, './lib/wxParse/wxParse.wxml', 0, 0);_(olhB,oWjB);
      } _(r,olhB);
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
      var objB = _v();
      if (_o(16, e, s, gg)) {
        objB.wxVkey = 1;var oejB = _v();
      if (_o(22, e, s, gg)) {
        oejB.wxVkey = 1;var ohjB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oijB = _v();var ojjB = function(onjB,omjB,oljB,gg){var opjB = _v();
       var oqjB = _o(54, onjB, omjB, gg);
       var osjB = _gd('./lib/wxParse/wxParse.wxml', oqjB, e_, d_);
       if (osjB) {
         var orjB = _1(21,onjB,omjB,gg);
         osjB(orjB,orjB,opjB, gg);
       } else _w(oqjB, './lib/wxParse/wxParse.wxml', 0, 0);_(oljB,opjB);return oljB;};_2(25, ojjB, e, s, gg, oijB, "item", "index", '');_(ohjB,oijB);_(oejB,ohjB);
      }else if (_o(28, e, s, gg)) {
        oejB.wxVkey = 2;var ovjB = _n("view");_r(ovjB, 'class', 29, e, s, gg);var owjB = _n("view");_r(owjB, 'class', 30, e, s, gg);var oxjB = _n("view");_r(oxjB, 'class', 31, e, s, gg);var oyjB = _n("view");_r(oyjB, 'class', 32, e, s, gg);_(oxjB,oyjB);_(owjB,oxjB);var ozjB = _n("view");_r(ozjB, 'class', 31, e, s, gg);var o_jB = _v();var oAkB = function(oEkB,oDkB,oCkB,gg){var oGkB = _v();
       var oHkB = _o(54, oEkB, oDkB, gg);
       var oJkB = _gd('./lib/wxParse/wxParse.wxml', oHkB, e_, d_);
       if (oJkB) {
         var oIkB = _1(21,oEkB,oDkB,gg);
         oJkB(oIkB,oIkB,oGkB, gg);
       } else _w(oHkB, './lib/wxParse/wxParse.wxml', 0, 0);_(oCkB,oGkB);return oCkB;};_2(25, oAkB, e, s, gg, o_jB, "item", "index", '');_(ozjB,o_jB);_(owjB,ozjB);_(ovjB,owjB);_(oejB,ovjB);
      }else if (_o(33, e, s, gg)) {
        oejB.wxVkey = 3;var oMkB = _v();
       var oNkB = _o(34, e, s, gg);
       var oPkB = _gd('./lib/wxParse/wxParse.wxml', oNkB, e_, d_);
       if (oPkB) {
         var oOkB = _1(21,e,s,gg);
         oPkB(oOkB,oOkB,oMkB, gg);
       } else _w(oNkB, './lib/wxParse/wxParse.wxml', 0, 0);_(oejB,oMkB);
      }else if (_o(35, e, s, gg)) {
        oejB.wxVkey = 4;var oSkB = _v();
       var oTkB = _o(36, e, s, gg);
       var oVkB = _gd('./lib/wxParse/wxParse.wxml', oTkB, e_, d_);
       if (oVkB) {
         var oUkB = _1(21,e,s,gg);
         oVkB(oUkB,oUkB,oSkB, gg);
       } else _w(oTkB, './lib/wxParse/wxParse.wxml', 0, 0);_(oejB,oSkB);
      }else if (_o(37, e, s, gg)) {
        oejB.wxVkey = 5;var oYkB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oZkB = _v();var oakB = function(oekB,odkB,ockB,gg){var ogkB = _v();
       var ohkB = _o(54, oekB, odkB, gg);
       var ojkB = _gd('./lib/wxParse/wxParse.wxml', ohkB, e_, d_);
       if (ojkB) {
         var oikB = _1(21,oekB,odkB,gg);
         ojkB(oikB,oikB,ogkB, gg);
       } else _w(ohkB, './lib/wxParse/wxParse.wxml', 0, 0);_(ockB,ogkB);return ockB;};_2(25, oakB, e, s, gg, oZkB, "item", "index", '');_(oYkB,oZkB);_(oejB,oYkB);
      }else if (_o(42, e, s, gg)) {
        oejB.wxVkey = 6;var omkB = _m( "view", ["class", 0,"style", 1], e, s, gg);var onkB = _v();var ookB = function(oskB,orkB,oqkB,gg){var oukB = _v();
       var ovkB = _o(54, oskB, orkB, gg);
       var oxkB = _gd('./lib/wxParse/wxParse.wxml', ovkB, e_, d_);
       if (oxkB) {
         var owkB = _1(21,oskB,orkB,gg);
         oxkB(owkB,owkB,oukB, gg);
       } else _w(ovkB, './lib/wxParse/wxParse.wxml', 0, 0);_(oqkB,oukB);return oqkB;};_2(25, ookB, e, s, gg, onkB, "item", "index", '');_(omkB,onkB);_(oejB,omkB);
      }else {
        oejB.wxVkey = 7;var oykB = _m( "view", ["style", 1,"class", 42], e, s, gg);var o_kB = _v();var oAlB = function(oElB,oDlB,oClB,gg){var oGlB = _v();
       var oHlB = _o(54, oElB, oDlB, gg);
       var oJlB = _gd('./lib/wxParse/wxParse.wxml', oHlB, e_, d_);
       if (oJlB) {
         var oIlB = _1(21,oElB,oDlB,gg);
         oJlB(oIlB,oIlB,oGlB, gg);
       } else _w(oHlB, './lib/wxParse/wxParse.wxml', 0, 0);_(oClB,oGlB);return oClB;};_2(25, oAlB, e, s, gg, o_kB, "item", "index", '');_(oykB,o_kB);_(oejB, oykB);
      }_(objB,oejB);
      }else if (_o(13, e, s, gg)) {
        objB.wxVkey = 2;var oMlB = _v();
       var oNlB = _o(44, e, s, gg);
       var oPlB = _gd('./lib/wxParse/wxParse.wxml', oNlB, e_, d_);
       if (oPlB) {
         var oOlB = _1(21,e,s,gg);
         oPlB(oOlB,oOlB,oMlB, gg);
       } else _w(oNlB, './lib/wxParse/wxParse.wxml', 0, 0);_(objB,oMlB);
      } _(r,objB);
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
      var oRlB = _v();
      if (_o(16, e, s, gg)) {
        oRlB.wxVkey = 1;var oUlB = _v();
      if (_o(22, e, s, gg)) {
        oUlB.wxVkey = 1;var oXlB = _m( "button", ["size", 23,"type", 1], e, s, gg);var oYlB = _v();var oZlB = function(odlB,oclB,oblB,gg){var oflB = _v();
       var oglB = _o(55, odlB, oclB, gg);
       var oilB = _gd('./lib/wxParse/wxParse.wxml', oglB, e_, d_);
       if (oilB) {
         var ohlB = _1(21,odlB,oclB,gg);
         oilB(ohlB,ohlB,oflB, gg);
       } else _w(oglB, './lib/wxParse/wxParse.wxml', 0, 0);_(oblB,oflB);return oblB;};_2(25, oZlB, e, s, gg, oYlB, "item", "index", '');_(oXlB,oYlB);_(oUlB,oXlB);
      }else if (_o(28, e, s, gg)) {
        oUlB.wxVkey = 2;var ollB = _n("view");_r(ollB, 'class', 29, e, s, gg);var omlB = _n("view");_r(omlB, 'class', 30, e, s, gg);var onlB = _n("view");_r(onlB, 'class', 31, e, s, gg);var oolB = _n("view");_r(oolB, 'class', 32, e, s, gg);_(onlB,oolB);_(omlB,onlB);var oplB = _n("view");_r(oplB, 'class', 31, e, s, gg);var oqlB = _v();var orlB = function(ovlB,oulB,otlB,gg){var oxlB = _v();
       var oylB = _o(55, ovlB, oulB, gg);
       var o_lB = _gd('./lib/wxParse/wxParse.wxml', oylB, e_, d_);
       if (o_lB) {
         var ozlB = _1(21,ovlB,oulB,gg);
         o_lB(ozlB,ozlB,oxlB, gg);
       } else _w(oylB, './lib/wxParse/wxParse.wxml', 0, 0);_(otlB,oxlB);return otlB;};_2(25, orlB, e, s, gg, oqlB, "item", "index", '');_(oplB,oqlB);_(omlB,oplB);_(ollB,omlB);_(oUlB,ollB);
      }else if (_o(33, e, s, gg)) {
        oUlB.wxVkey = 3;var oCmB = _v();
       var oDmB = _o(34, e, s, gg);
       var oFmB = _gd('./lib/wxParse/wxParse.wxml', oDmB, e_, d_);
       if (oFmB) {
         var oEmB = _1(21,e,s,gg);
         oFmB(oEmB,oEmB,oCmB, gg);
       } else _w(oDmB, './lib/wxParse/wxParse.wxml', 0, 0);_(oUlB,oCmB);
      }else if (_o(35, e, s, gg)) {
        oUlB.wxVkey = 4;var oImB = _v();
       var oJmB = _o(36, e, s, gg);
       var oLmB = _gd('./lib/wxParse/wxParse.wxml', oJmB, e_, d_);
       if (oLmB) {
         var oKmB = _1(21,e,s,gg);
         oLmB(oKmB,oKmB,oImB, gg);
       } else _w(oJmB, './lib/wxParse/wxParse.wxml', 0, 0);_(oUlB,oImB);
      }else if (_o(37, e, s, gg)) {
        oUlB.wxVkey = 5;var oOmB = _m( "view", ["style", 1,"bindtap", 37,"class", 38,"data-src", 39], e, s, gg);var oPmB = _v();var oQmB = function(oUmB,oTmB,oSmB,gg){var oWmB = _v();
       var oXmB = _o(55, oUmB, oTmB, gg);
       var oZmB = _gd('./lib/wxParse/wxParse.wxml', oXmB, e_, d_);
       if (oZmB) {
         var oYmB = _1(21,oUmB,oTmB,gg);
         oZmB(oYmB,oYmB,oWmB, gg);
       } else _w(oXmB, './lib/wxParse/wxParse.wxml', 0, 0);_(oSmB,oWmB);return oSmB;};_2(25, oQmB, e, s, gg, oPmB, "item", "index", '');_(oOmB,oPmB);_(oUlB,oOmB);
      }else if (_o(42, e, s, gg)) {
        oUlB.wxVkey = 6;var ocmB = _m( "view", ["class", 0,"style", 1], e, s, gg);var odmB = _v();var oemB = function(oimB,ohmB,ogmB,gg){var okmB = _v();
       var olmB = _o(55, oimB, ohmB, gg);
       var onmB = _gd('./lib/wxParse/wxParse.wxml', olmB, e_, d_);
       if (onmB) {
         var ommB = _1(21,oimB,ohmB,gg);
         onmB(ommB,ommB,okmB, gg);
       } else _w(olmB, './lib/wxParse/wxParse.wxml', 0, 0);_(ogmB,okmB);return ogmB;};_2(25, oemB, e, s, gg, odmB, "item", "index", '');_(ocmB,odmB);_(oUlB,ocmB);
      }else {
        oUlB.wxVkey = 7;var oomB = _m( "view", ["style", 1,"class", 42], e, s, gg);var oqmB = _v();var ormB = function(ovmB,oumB,otmB,gg){var oxmB = _v();
       var oymB = _o(55, ovmB, oumB, gg);
       var o_mB = _gd('./lib/wxParse/wxParse.wxml', oymB, e_, d_);
       if (o_mB) {
         var ozmB = _1(21,ovmB,oumB,gg);
         o_mB(ozmB,ozmB,oxmB, gg);
       } else _w(oymB, './lib/wxParse/wxParse.wxml', 0, 0);_(otmB,oxmB);return otmB;};_2(25, ormB, e, s, gg, oqmB, "item", "index", '');_(oomB,oqmB);_(oUlB, oomB);
      }_(oRlB,oUlB);
      }else if (_o(13, e, s, gg)) {
        oRlB.wxVkey = 2;var oCnB = _v();
       var oDnB = _o(44, e, s, gg);
       var oFnB = _gd('./lib/wxParse/wxParse.wxml', oDnB, e_, d_);
       if (oFnB) {
         var oEnB = _1(21,e,s,gg);
         oFnB(oEnB,oEnB,oCnB, gg);
       } else _w(oDnB, './lib/wxParse/wxParse.wxml', 0, 0);_(oRlB,oCnB);
      } _(r,oRlB);
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
    var oYnB = _n("view");_r(oYnB, 'class', 56, e, s, gg);var oZnB = _n("view");_r(oZnB, 'class', 57, e, s, gg);var oanB = _m( "scroll-view", ["class", 58,"scrollLeft", 1,"scrollX", 2,"style", 3], e, s, gg);var obnB = _v();var ocnB = function(ognB,ofnB,oenB,gg){var odnB = _m( "view", ["bindtap", 63,"class", 1,"data-id", 2,"data-index", 3], ognB, ofnB, gg);var oinB = _n("view");_r(oinB, 'class', 67, ognB, ofnB, gg);var ojnB = _o(68, ognB, ofnB, gg);_(oinB,ojnB);_(odnB,oinB);_(oenB, odnB);return oenB;};_2(62, ocnB, e, s, gg, obnB, "item", "index", '');_(oanB,obnB);var oknB = _n("view");_r(oknB, 'class', 69, e, s, gg);var olnB = _n("view");_r(olnB, 'class', 70, e, s, gg);var omnB = _v();var onnB = function(ornB,oqnB,opnB,gg){var osnB = e_["./pages/topic/topic.wxml"].i;var oonB = _n("view");_r(oonB, 'class', 26, ornB, oqnB, gg);var otnB = _n("view");_r(otnB, 'class', 72, ornB, oqnB, gg);var ounB = _o(73, ornB, oqnB, gg);_(otnB,ounB);_(oonB,otnB);var ovnB = _n("view");_r(ovnB, 'class', 74, ornB, oqnB, gg);_ai(osnB, '../../lib/wxParse/wxParse.wxml', e_, './pages/topic/topic.wxml', 0, 0);var oxnB = _v();
       var oynB = _o(75, ornB, oqnB, gg);
       var o_nB = _gd('./pages/topic/topic.wxml', oynB, e_, d_);
       if (o_nB) {
         var oznB = _1(76,ornB,oqnB,gg);
         o_nB(oznB,oznB,oxnB, gg);
       } else _w(oynB, './pages/topic/topic.wxml', 0, 0);_(ovnB,oxnB);_(oonB,ovnB);var oAoB = _m( "navigator", ["class", 77,"url", 1], ornB, oqnB, gg);var oBoB = _n("view");_r(oBoB, 'class', 79, ornB, oqnB, gg);var oCoB = _v();var oDoB = function(oHoB,oGoB,oFoB,gg){var oEoB = _n("view");_r(oEoB, 'class', 83, oHoB, oGoB, gg);var oJoB = _m( "image", ["class", 84,"src", 1], oHoB, oGoB, gg);_(oEoB,oJoB);_(oFoB, oEoB);return oFoB;};_2(80, oDoB, ornB, oqnB, gg, oCoB, "iitem", "iindex", '');_(oBoB,oCoB);_(oAoB,oBoB);_(oonB,oAoB);var oKoB = _n("view");_r(oKoB, 'class', 86, ornB, oqnB, gg);var oLoB = _m( "navigator", ["hoverClass", 87,"url", 1], ornB, oqnB, gg);var oMoB = _n("view");_r(oMoB, 'class', 89, ornB, oqnB, gg);var oNoB = _o(90, ornB, oqnB, gg);_(oMoB,oNoB);_(oLoB,oMoB);_(oKoB,oLoB);var oOoB = _n("view");_r(oOoB, 'class', 91, ornB, oqnB, gg);var oPoB = _o(92, ornB, oqnB, gg);_(oOoB,oPoB);_(oKoB,oOoB);_(oonB,oKoB);osnB.pop();_(opnB, oonB);return opnB;};_2(71, onnB, e, s, gg, omnB, "item", "index", '');_(olnB,omnB);var oQoB = _v();
      if (_o(93, e, s, gg)) {
        oQoB.wxVkey = 1;var oRoB = _n("view");_r(oRoB, 'class', 94, e, s, gg);var oToB = _n("view");_r(oToB, 'class', 95, e, s, gg);var oUoB = _o(96, e, s, gg);_(oToB,oUoB);_(oRoB,oToB);_(oQoB, oRoB);
      } _(olnB,oQoB);_(oknB,olnB);_(oanB,oknB);_(oZnB,oanB);_(oYnB,oZnB);_(r,oYnB);
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