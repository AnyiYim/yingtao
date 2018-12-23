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
    Z([3, 'container']);Z([3, 'header']);Z([3, 'data_2']);Z([a, [3, 'background-image: url('],[[7],[3, "Host"]],[3, '/static/oscar/img/virtul_company/my_company/bg_red@2x.png);']]);Z([3, 'item_title']);Z([3, '\n                合伙人\n            ']);Z([3, 'item-data1']);Z([a, [3, '\n                '],[[7],[3, "company_members_count"]],[3, '人\n            ']]);Z([a, [3, 'background-image: url('],[[7],[3, "Host"]],[3, '/static/oscar/img/virtul_company/my_company/bg_yellow@2x.png);']]);Z([3, '\n                可提现\n            ']);Z([3, '\n                ￥0.00\n            ']);Z([3, 'data_1 data_block hehuo_bonus']);Z([3, 'item_title block_title']);Z([3, '\n            我累计贡献的合伙收益\n        ']);Z([3, 'item-data2']);Z([a, [3, '\n            ￥'],[[7],[3, "hehuo_bonus"]],[3, '\n        ']]);Z([3, 'bonus_container']);Z([3, 'item_title bonus_title']);Z([3, 'bonus_title_img']);Z([3, '/static/images/company/class_position_line@2x.png']);Z([3, '\n\n            收益明细\n        ']);Z([3, 'data_4']);Z([3, 'item']);Z([3, 'data_3 bonus_d_title']);Z([3, '\n                    时间\n                ']);Z([3, '\n                    收益类型\n                ']);Z([3, '\n                    金额\n                ']);Z([[7],[3, "my_bonus"]]);Z([[6],[[7],[3, "item"]],[3, "id"]]);Z([[2, ">"], [[6],[[7],[3, "item"]],[3, "share_bonus"]], [1, 0]]);Z([3, 'data_3 bonus_detail']);Z([a, [3, '\n                        '],[[6],[[7],[3, "item"]],[3, "create_time"]],[3, '\n                    ']]);Z([3, '\n                        股份收益\n                    ']);Z([3, 'data_3 bonus_detail_money']);Z([a, [3, '\n                        '],[[6],[[7],[3, "item"]],[3, "share_bonus"]],[3, '元\n                    ']]);Z([[2, ">"], [[6],[[7],[3, "item"]],[3, "store_amount_bonus"]], [1, 0]]);Z([3, '\n                        业绩收益\n                    ']);Z([a, [3, '\n                        '],[[6],[[7],[3, "item"]],[3, "store_amount_bonus"]],[3, '元\n                    ']]);Z([[6],[[7],[3, "my_bonus"]],[3, "length"]]);Z([3, 'get_more_data']);Z([3, 'bonus_footer bonus_title']);Z([3, '\n            显示更多\x3e\x3e\n        ']);Z([3, '\n            暂时没有收益信息\n        ']);Z([3, 'data_1']);
  })(z);d_["./pages/ucenter/company/my_company/my_company.wxml"] = {};
  var m0=function(e,s,r,gg){
    var oNX = _n("view");_r(oNX, 'class', 0, e, s, gg);var oOX = _n("view");_r(oOX, 'class', 1, e, s, gg);var oPX = _m( "view", ["class", 2,"style", 1], e, s, gg);var oQX = _n("view");_r(oQX, 'class', 4, e, s, gg);var oRX = _o(5, e, s, gg);_(oQX,oRX);_(oPX,oQX);var oSX = _n("view");_r(oSX, 'class', 6, e, s, gg);var oTX = _o(7, e, s, gg);_(oSX,oTX);_(oPX,oSX);_(oOX,oPX);var oUX = _m( "view", ["class", 2,"style", 6], e, s, gg);var oVX = _n("view");_r(oVX, 'class', 4, e, s, gg);var oWX = _o(9, e, s, gg);_(oVX,oWX);_(oUX,oVX);var oXX = _n("view");_r(oXX, 'class', 6, e, s, gg);var oYX = _o(10, e, s, gg);_(oXX,oYX);_(oUX,oXX);_(oOX,oUX);_(oNX,oOX);var oZX = _n("view");_r(oZX, 'class', 11, e, s, gg);var oaX = _n("view");_r(oaX, 'class', 12, e, s, gg);var obX = _o(13, e, s, gg);_(oaX,obX);_(oZX,oaX);var ocX = _n("view");_r(ocX, 'class', 14, e, s, gg);var odX = _o(15, e, s, gg);_(ocX,odX);_(oZX,ocX);_(oNX,oZX);var oeX = _n("view");_r(oeX, 'class', 16, e, s, gg);var ofX = _n("view");_r(ofX, 'class', 17, e, s, gg);var ogX = _m( "image", ["class", 18,"src", 1], e, s, gg);_(ofX,ogX);var ohX = _o(20, e, s, gg);_(ofX,ohX);_(oeX,ofX);var oiX = _n("view");_r(oiX, 'class', 21, e, s, gg);var ojX = _n("view");_r(ojX, 'class', 22, e, s, gg);var okX = _n("view");_r(okX, 'class', 23, e, s, gg);var olX = _o(24, e, s, gg);_(okX,olX);_(ojX,okX);var omX = _n("view");_r(omX, 'class', 23, e, s, gg);var onX = _o(25, e, s, gg);_(omX,onX);_(ojX,omX);var ooX = _n("view");_r(ooX, 'class', 23, e, s, gg);var opX = _o(26, e, s, gg);_(ooX,opX);_(ojX,ooX);_(oiX,ojX);var oqX = _v();var orX = function(ovX,ouX,otX,gg){var osX = _n("view");_r(osX, 'class', 22, ovX, ouX, gg);var oxX = _v();
      if (_o(29, ovX, ouX, gg)) {
        oxX.wxVkey = 1;var oyX = _n("view");var o_X = _n("view");_r(o_X, 'class', 30, ovX, ouX, gg);var oAY = _o(31, ovX, ouX, gg);_(o_X,oAY);_(oyX,o_X);var oBY = _n("view");_r(oBY, 'class', 30, ovX, ouX, gg);var oCY = _o(32, ovX, ouX, gg);_(oBY,oCY);_(oyX,oBY);var oDY = _n("view");_r(oDY, 'class', 33, ovX, ouX, gg);var oEY = _o(34, ovX, ouX, gg);_(oDY,oEY);_(oyX,oDY);_(oxX, oyX);
      } _(osX,oxX);var oFY = _v();
      if (_o(35, ovX, ouX, gg)) {
        oFY.wxVkey = 1;var oGY = _n("view");var oIY = _n("view");_r(oIY, 'class', 30, ovX, ouX, gg);var oJY = _o(31, ovX, ouX, gg);_(oIY,oJY);_(oGY,oIY);var oKY = _n("view");_r(oKY, 'class', 30, ovX, ouX, gg);var oLY = _o(36, ovX, ouX, gg);_(oKY,oLY);_(oGY,oKY);var oMY = _n("view");_r(oMY, 'class', 33, ovX, ouX, gg);var oNY = _o(37, ovX, ouX, gg);_(oMY,oNY);_(oGY,oMY);_(oFY, oGY);
      } _(osX,oFY);_(otX, osX);return otX;};_2(27, orX, e, s, gg, oqX, "item", "index", '{{item.id}}');_(oiX,oqX);_(oeX,oiX);var oOY = _v();
      if (_o(38, e, s, gg)) {
        oOY.wxVkey = 1;var oPY = _m( "view", ["bindtap", 39,"class", 1], e, s, gg);var oRY = _o(41, e, s, gg);_(oPY,oRY);_(oOY, oPY);
      }else {
        oOY.wxVkey = 2;var oSY = _n("view");_r(oSY, 'class', 40, e, s, gg);var oUY = _o(42, e, s, gg);_(oSY,oUY);_(oOY, oSY);
      }_(oeX,oOY);var oVY = _n("view");_r(oVY, 'class', 43, e, s, gg);_(oeX,oVY);_(oNX,oeX);_(r,oNX);
    return r;
  };
        e_["./pages/ucenter/company/my_company/my_company.wxml"]={f:m0,j:[],i:[],ti:[],ic:[]};
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{env=window.__mergeData__(env,dd);}
try{
main(env,{},root,global);
if(typeof(window.__webview_engine_version__)=='undefined'||window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}}catch(err){console.log(err)}return root;}}}@code-separator-line:body{background:#fff;min-height:100%}.container{background:#fff;min-height:100%;padding-top:%%?30rpx?%%}.header{width:100%;display:flex}.header .data_2{width:%%?345rpx?%%;display:inline-block;text-align:center;margin-bottom:%%?10rpx?%%;height:%%?160rpx?%%;background-repeat:no-repeat;background-size:100% 100%;margin:%%?20rpx?%% %%?10rpx?%% %%?20rpx?%% %%?20rpx?%%;color:#fff;font-size:%%?30rpx?%%;padding:%%?35rpx?%%;border-radius:%%?10rpx?%%}.item_title{font-size:%%?30rpx?%%;color:#fff}.item-data1{font-size:%%?36rpx?%%;color:#fff;margin-top:%%?10rpx?%%}.data_1{width:%%?710rpx?%%;text-align:center;margin:%%?10rpx?%% %%?20rpx?%% %%?20rpx?%% %%?20rpx?%%}.data_4{width:100%;height:%%?100rpx?%%;text-align:center;border-bottom:%%?1rpx?%% solid #eaeaea}.data_block{background:#fff;height:%%?181rpx?%%;padding:%%?25rpx?%% %%?35rpx?%%;border-radius:%%?20rpx?%%}.data_block .block_title{color:#000;text-align:left}.data_block .item-data2{text-align:right;font-size:%%?38rpx?%%;margin-top:%%?20rpx?%%}.hehuo_bonus{border:%%?1rpx?%% solid #feb31a}.my_ratio{border:%%?1rpx?%% solid #fb5869}.bonus_container .bonus_title{text-align:left;font-size:%%?30rpx?%%;color:#333;height:%%?68rpx?%%;background:#f2f2f2;padding:%%?19rpx?%% %%?20rpx?%%;line-height:%%?30rpx?%%}.bonus_container .bonus_title_img{display:inline-block;width:%%?7rpx?%%;height:%%?30rpx?%%;height:%%?24rpx?%%}.data_3{width:33%;display:inline-block;text-align:center}.bonus_container .bonus_d_title{font-size:%%?28rpx?%%}.bonus_container .bonus_detail{font-size:%%?26rpx?%%}.bonus_container .bonus_detail_money{font-size:%%?32rpx?%%;color:#fd6071}.bonus_container .item{height:%%?88rpx?%%;padding:%%?28rpx?%% 0}.bonus_container .bonus_footer{margin-top:150px;text-align:center}@code-separator-line:__wxRoute = "pages/ucenter/company/my_company/my_company";__wxRouteBegin = true;
define("pages/ucenter/company/my_company/my_company.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../../../utils/util.js');
var api = require('../../../../config/api.js');
api.MyCompanyData = api.SSL + '/api/virtual_company/member/my_company/'
api.MyCompanyBonusData = api.SSL + '/api/virtual_company/member/bonus/?page=2'

var app = getApp();

Page({
  data: {
    hehuo_bonus:0,
    my_ratio:0,
    company_members_count:0,
    my_bonus:[],
    Host:api.Host,
    next_url:null,
  },

  onLoad: function (options) {
      this.get_data()
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
  get_data:function(){
    wx.showLoading({
      title: '加载中...',
    });

    let that = this;
    util.request(api.MyCompanyData, 'GET').then(function (res) {
      if (res.errno === 0) {
            var data = res.data;
            var next_url = null
            if(data.my_bonus[1]){
                next_url = api.MyCompanyBonusData
            }
            that.setData({
                hehuo_bonus:data.hehuo_bonus,
                my_ratio:Number(data.my_ratio).toFixed(2),
                company_members_count:data.company_members_count,
                my_bonus:data.my_bonus[0],
                next_url:next_url,
            });
        }
      wx.hideLoading();
    });
    },
    get_more_data:function(){
        let that = this;
        if(!that.data.next_url){
            util.showErrorToast('没有更多数据了');
            return
        }
        wx.showLoading({
          title: '加载中...',
        });
        util.request(that.data.next_url,  'GET').then(function (res) {
          if (res.errno === 0) {

            var data = res.data;
            var bonus_data = that.data.my_bonus.concat(data.my_bonus[0])
            that.setData({
                my_bonus:bonus_data,
                next_url:data.my_bonus[1],
            });

          }
          wx.hideLoading();
        });
    }

})

});require("pages/ucenter/company/my_company/my_company.js")@code-separator-line:["div","view","image"]