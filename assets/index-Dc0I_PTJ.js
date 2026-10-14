(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const _c="186",zd=0,nh=1,Gd=2,ao=1,Hd=2,Ks=3,qi=0,on=1,li=2,hi=0,tr=1,pl=2,ih=3,sh=4,Vd=5,ys=100,Wd=101,Xd=102,qd=103,Yd=104,$d=200,Zd=201,Kd=202,Jd=203,nu=204,iu=205,Qd=206,jd=207,t0=208,e0=209,n0=210,i0=211,s0=212,r0=213,o0=214,ml=0,gl=1,_l=2,rr=3,vl=4,xl=5,Ml=6,Sl=7,vc=0,a0=1,l0=2,Kn=0,su=1,ru=2,ou=3,au=4,lu=5,cu=6,hu=7,fu=300,Yi=301,Ps=302,lo=303,Jo=304,Bo=306,$i=1e3,Yn=1001,yl=1002,Qe=1003,c0=1004,Mr=1005,Ce=1006,Qo=1007,Pi=1008,Je=1009,uu=1010,du=1011,or=1012,xc=1013,Jn=1014,$n=1015,Qn=1016,Mc=1017,Sc=1018,ar=1020,pu=35902,mu=35899,gu=1021,_u=1022,wn=1023,pi=1026,Wi=1027,mr=1028,yc=1029,Zi=1030,bc=1031,wc=1033,co=33776,ho=33777,fo=33778,uo=33779,bl=35840,wl=35841,El=35842,Tl=35843,Al=36196,Rl=37492,Cl=37496,Pl=37488,Ll=37489,So=37490,Il=37491,Dl=37808,Nl=37809,Ul=37810,Fl=37811,Ol=37812,Bl=37813,kl=37814,zl=37815,Gl=37816,Hl=37817,Vl=37818,Wl=37819,Xl=37820,ql=37821,Yl=36492,$l=36494,Zl=36495,Kl=36283,Jl=36284,yo=36285,Ql=36286,h0=3200,jl=0,f0=1,Ri="",Ne="srgb",bo="srgb-linear",wo="linear",ye="srgb",jo=7680,u0=519,d0=512,p0=513,m0=514,Ec=515,g0=516,_0=517,Tc=518,v0=519,x0=35044,rh="300 es",Zn=2e3,lr=2001;function M0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function S0(){const n=Eo("canvas");return n.style.display="block",n}const oh={};function ah(...n){const t="THREE."+n.shift();console.log(t,...n)}function vu(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $t(...n){n=vu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function de(...n){n=vu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Rs(...n){const t=n.join(" ");t in oh||(oh[t]=!0,$t(...n))}function y0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const b0={[ml]:gl,[_l]:Ml,[vl]:Sl,[rr]:xl,[gl]:ml,[Ml]:_l,[Sl]:vl,[xl]:rr};class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ta=Math.PI/180,tc=180/Math.PI;function Ns(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function oe(n,t,e){return Math.max(t,Math.min(e,n))}function w0(n,t){return(n%t+t)%t}function ea(n,t,e){return(1-e)*n+e*t}function Bs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class gt{static{gt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ts{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],m=r[o+1],g=r[o+2],S=r[o+3];if(u!==S||l!==f||c!==m||h!==g){let v=l*f+c*m+h*g+u*S;v<0&&(f=-f,m=-m,g=-g,S=-S,v=-v);let _=1-a;if(v<.9995){const E=Math.acos(v),A=Math.sin(E);_=Math.sin(_*E)/A,a=Math.sin(a*E)/A,l=l*_+f*a,c=c*_+m*a,h=h*_+g*a,u=u*_+S*a}else{l=l*_+f*a,c=c*_+m*a,h=h*_+g*a,u=u*_+S*a;const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-a*m,t[e+2]=c*g+h*m+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{static{I.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return na.copy(this).projectOnVector(t),this.sub(na)}reflect(t){return this.sub(na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new I,lh=new ts;class Zt{static{Zt.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],g=i[8],S=s[0],v=s[3],_=s[6],E=s[1],A=s[4],y=s[7],R=s[2],w=s[5],P=s[8];return r[0]=o*S+a*E+l*R,r[3]=o*v+a*A+l*w,r[6]=o*_+a*y+l*P,r[1]=c*S+h*E+u*R,r[4]=c*v+h*A+u*w,r[7]=c*_+h*y+u*P,r[2]=f*S+m*E+g*R,r[5]=f*v+m*A+g*w,r[8]=f*_+m*y+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=e*u+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return t[0]=u*S,t[1]=(s*c-h*i)*S,t[2]=(a*i-s*o)*S,t[3]=f*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-a*e)*S,t[6]=m*S,t[7]=(i*l-c*e)*S,t[8]=(o*e-i*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ia.makeScale(t,e)),this}rotate(t){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ia.makeRotation(-t)),this}translate(t,e){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new Zt,ch=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E0(){const n={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?wo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[bo]:{primaries:t,whitePoint:i,transfer:wo,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),n}const he=E0();function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let is;class T0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{is===void 0&&(is=Eo("canvas")),is.width=t.width,is.height=t.height;const s=is.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=is}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Eo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(fi(e[i]/255)*255):e[i]=fi(e[i]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let A0=0;class Ac{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sa(s[o].image)):r.push(sa(s[o]))}else r=sa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?T0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}let R0=0;const ra=new I;class an extends ji{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,i=Yn,s=Yn,r=Ce,o=Pi,a=wn,l=Je,c=an.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Ns(),this.name="",this.source=new Ac(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ra).x}get height(){return this.source.getSize(ra).y}get depth(){return this.source.getSize(ra).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $i:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $i:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=fu;an.DEFAULT_ANISOTROPY=1;class Ue{static{Ue.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],S=l[2],v=l[6],_=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-S)<.01&&Math.abs(g-v)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+S)<.1&&Math.abs(g+v)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,y=(m+1)/2,R=(_+1)/2,w=(h+f)/4,P=(u+S)/4,x=(g+v)/4;return A>y&&A>R?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=w/i,r=P/i):y>R?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=x/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=P/r,s=x/r),this.set(i,s,r,e),this}let E=Math.sqrt((v-g)*(v-g)+(u-S)*(u-S)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(v-g)/E,this.y=(u-S)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C0 extends ji{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new an(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ce,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ac(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends C0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class xu extends an{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class P0 extends an{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class Ie{static{Ie.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,l,c,h,u,f,m,g,S,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,m,g,S,v)}set(t,e,i,s,r,o,a,l,c,h,u,f,m,g,S,v){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=f,_[3]=m,_[7]=g,_[11]=S,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),o=1/ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*u,g=a*h,S=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-S*c,e[9]=-a*l,e[2]=S-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,g=c*h,S=c*u;e[0]=f+S*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=S+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,g=c*h,S=c*u;e[0]=f-S*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=S-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*u,g=a*h,S=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+S,e[1]=l*u,e[5]=S*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,S=a*c;e[0]=l*h,e[4]=S-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-S*u}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,S=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+S,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=S*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(L0,t,I0)}lookAt(t,e,i){const s=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Mi.crossVectors(i,_n),Mi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Mi.crossVectors(i,_n)),Mi.normalize(),Sr.crossVectors(_n,Mi),s[0]=Mi.x,s[4]=Sr.x,s[8]=_n.x,s[1]=Mi.y,s[5]=Sr.y,s[9]=_n.y,s[2]=Mi.z,s[6]=Sr.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],g=i[2],S=i[6],v=i[10],_=i[14],E=i[3],A=i[7],y=i[11],R=i[15],w=s[0],P=s[4],x=s[8],T=s[12],L=s[1],U=s[5],k=s[9],H=s[13],O=s[2],z=s[6],Z=s[10],V=s[14],at=s[3],K=s[7],it=s[11],et=s[15];return r[0]=o*w+a*L+l*O+c*at,r[4]=o*P+a*U+l*z+c*K,r[8]=o*x+a*k+l*Z+c*it,r[12]=o*T+a*H+l*V+c*et,r[1]=h*w+u*L+f*O+m*at,r[5]=h*P+u*U+f*z+m*K,r[9]=h*x+u*k+f*Z+m*it,r[13]=h*T+u*H+f*V+m*et,r[2]=g*w+S*L+v*O+_*at,r[6]=g*P+S*U+v*z+_*K,r[10]=g*x+S*k+v*Z+_*it,r[14]=g*T+S*H+v*V+_*et,r[3]=E*w+A*L+y*O+R*at,r[7]=E*P+A*U+y*z+R*K,r[11]=E*x+A*k+y*Z+R*it,r[15]=E*T+A*H+y*V+R*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],S=t[7],v=t[11],_=t[15],E=l*m-c*f,A=a*m-c*u,y=a*f-l*u,R=o*m-c*h,w=o*f-l*h,P=o*u-a*h;return e*(S*E-v*A+_*y)-i*(g*E-v*R+_*w)+s*(g*A-S*R+_*P)-r*(g*y-S*w+v*P)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],S=t[13],v=t[14],_=t[15],E=e*a-i*o,A=e*l-s*o,y=e*c-r*o,R=i*l-s*a,w=i*c-r*a,P=s*c-r*l,x=h*S-u*g,T=h*v-f*g,L=h*_-m*g,U=u*v-f*S,k=u*_-m*S,H=f*_-m*v,O=E*H-A*k+y*U+R*L-w*T+P*x;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/O;return t[0]=(a*H-l*k+c*U)*z,t[1]=(s*k-i*H-r*U)*z,t[2]=(S*P-v*w+_*R)*z,t[3]=(f*w-u*P-m*R)*z,t[4]=(l*L-o*H-c*T)*z,t[5]=(e*H-s*L+r*T)*z,t[6]=(v*y-g*P-_*A)*z,t[7]=(h*P-f*y+m*A)*z,t[8]=(o*k-a*L+c*x)*z,t[9]=(i*L-e*k-r*x)*z,t[10]=(g*w-S*y+_*E)*z,t[11]=(u*y-h*w-m*E)*z,t[12]=(a*T-o*U-l*x)*z,t[13]=(e*U-i*T+s*x)*z,t[14]=(S*A-g*R-v*E)*z,t[15]=(h*R-u*A+f*E)*z,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,g=r*u,S=o*h,v=o*u,_=a*u,E=l*c,A=l*h,y=l*u,R=i.x,w=i.y,P=i.z;return s[0]=(1-(S+_))*R,s[1]=(m+y)*R,s[2]=(g-A)*R,s[3]=0,s[4]=(m-y)*w,s[5]=(1-(f+_))*w,s[6]=(v+E)*w,s[7]=0,s[8]=(g+A)*P,s[9]=(v-E)*P,s[10]=(1-(f+S))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=ss.set(s[0],s[1],s[2]).length();const a=ss.set(s[4],s[5],s[6]).length(),l=ss.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Pn.copy(this);const c=1/o,h=1/a,u=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Zn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),m=(i+s)/(i-s);let g,S;if(l)g=r/(o-r),S=o*r/(o-r);else if(a===Zn)g=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===lr)g=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Zn,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),m=-(i+s)/(i-s);let g,S;if(l)g=1/(o-r),S=o/(o-r);else if(a===Zn)g=-2/(o-r),S=-(o+r)/(o-r);else if(a===lr)g=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ss=new I,Pn=new Ie,L0=new I(0,0,0),I0=new I(1,1,1),Mi=new I,Sr=new I,_n=new I,fh=new Ie,uh=new ts;class Ui{constructor(t=0,e=0,i=0,s=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uh.setFromEuler(this),this.setFromQuaternion(uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let D0=0;const dh=new I,rs=new ts,ei=new Ie,yr=new I,ks=new I,N0=new I,U0=new ts,ph=new I(1,0,0),mh=new I(0,1,0),gh=new I(0,0,1),_h={type:"added"},F0={type:"removed"},os={type:"childadded",child:null},oa={type:"childremoved",child:null};class Ke extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new I,e=new Ui,i=new ts,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Zt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(ph,t)}rotateY(t){return this.rotateOnAxis(mh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return dh.copy(t).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ph,t)}translateY(t){return this.translateOnAxis(mh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?yr.copy(t):yr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ks,yr,this.up):ei.lookAt(yr,ks,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(ei),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(de("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_h),os.child=t,this.dispatchEvent(os),os.child=null):de("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(F0),oa.child=t,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_h),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,N0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,U0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ke.DEFAULT_UP=new I(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rn extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O0={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const S of t.hand.values()){const v=e.getJointPose(S,i),_=this._getHandJoint(c,S);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new rn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},br={h:0,s:0,l:0};function la(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ut{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=w0(t,1),e=oe(e,0,1),i=oe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=la(o,r,t+1/3),this.g=la(o,r,t),this.b=la(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=Ne){function i(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const i=Mu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return he.workingToColorSpace(en.copy(this),t),Math.round(oe(en.r*255,0,255))*65536+Math.round(oe(en.g*255,0,255))*256+Math.round(oe(en.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(en.copy(this),e);const i=en.r,s=en.g,r=en.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Ne){he.workingToColorSpace(en.copy(this),t);const e=en.r,i=en.g,s=en.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(br);const i=ea(Si.h,br.h,e),s=ea(Si.s,br.s,e),r=ea(Si.l,br.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new ut;ut.NAMES=Mu;class Cc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ut(t),this.near=e,this.far=i}clone(){return new Cc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class B0 extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ln=new I,ni=new I,ca=new I,ii=new I,as=new I,ls=new I,vh=new I,ha=new I,fa=new I,ua=new I,da=new Ue,pa=new Ue,ma=new Ue;class On{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ln.subVectors(s,e),ni.subVectors(i,e),ca.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(ni),l=Ln.dot(ca),c=ni.dot(ni),h=ni.dot(ca),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return da.setScalar(0),pa.setScalar(0),ma.setScalar(0),da.fromBufferAttribute(t,e),pa.fromBufferAttribute(t,i),ma.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(da,r.x),o.addScaledVector(pa,r.y),o.addScaledVector(ma,r.z),o}static isFrontFacing(t,e,i,s){return Ln.subVectors(i,e),ni.subVectors(t,e),Ln.cross(ni).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Ln.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return On.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;as.subVectors(s,i),ls.subVectors(r,i),ha.subVectors(t,i);const l=as.dot(ha),c=ls.dot(ha);if(l<=0&&c<=0)return e.copy(i);fa.subVectors(t,s);const h=as.dot(fa),u=ls.dot(fa);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(as,o);ua.subVectors(t,r);const m=as.dot(ua),g=ls.dot(ua);if(g>=0&&m<=g)return e.copy(r);const S=m*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ls,a);const v=h*g-m*u;if(v<=0&&u-h>=0&&m-g>=0)return vh.subVectors(r,s),a=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(vh,a);const _=1/(v+S+f);return o=S*_,a=f*_,e.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class gr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wr.copy(i.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),Er.subVectors(this.max,zs),cs.subVectors(t.a,zs),hs.subVectors(t.b,zs),fs.subVectors(t.c,zs),yi.subVectors(hs,cs),bi.subVectors(fs,hs),Oi.subVectors(cs,fs);let e=[0,-yi.z,yi.y,0,-bi.z,bi.y,0,-Oi.z,Oi.y,yi.z,0,-yi.x,bi.z,0,-bi.x,Oi.z,0,-Oi.x,-yi.y,yi.x,0,-bi.y,bi.x,0,-Oi.y,Oi.x,0];return!ga(e,cs,hs,fs,Er)||(e=[1,0,0,0,1,0,0,0,1],!ga(e,cs,hs,fs,Er))?!1:(Tr.crossVectors(yi,bi),e=[Tr.x,Tr.y,Tr.z],ga(e,cs,hs,fs,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const si=[new I,new I,new I,new I,new I,new I,new I,new I],In=new I,wr=new gr,cs=new I,hs=new I,fs=new I,yi=new I,bi=new I,Oi=new I,zs=new I,Er=new I,Tr=new I,Bi=new I;function ga(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Bi.fromArray(n,r);const a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=i.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ze=new I,Ar=new gt;let k0=0;class un extends ji{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=x0,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=dn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Su extends un{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class yu extends un{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ue extends un{constructor(t,e,i){super(new Float32Array(t),e,i)}}const z0=new gr,Gs=new I,_a=new I;class ko{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):z0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);const e=Gs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Gs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(_a)),this.expandByPoint(Gs.copy(t.center).sub(_a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let G0=0;const yn=new Ie,va=new Ke,us=new I,vn=new gr,Hs=new gr,$e=new I;class Oe extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(M0(t)?yu:Su)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,i){return yn.makeTranslation(t,e,i),this.applyMatrix4(yn),this}scale(t,e,i){return yn.makeScale(t,e,i),this.applyMatrix4(yn),this}lookAt(t){return va.lookAt(t),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&de('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ko);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(vn.min,Hs.min),vn.expandByPoint($e),$e.addVectors(vn.max,Hs.max),vn.expandByPoint($e)):(vn.expandByPoint(Hs.min),vn.expandByPoint(Hs.max))}vn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($e));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$e.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(t,c),$e.add(us)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&de('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){de("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new un(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new I,l[x]=new I;const c=new I,h=new I,u=new I,f=new gt,m=new gt,g=new gt,S=new I,v=new I;function _(x,T,L){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,L),f.fromBufferAttribute(r,x),m.fromBufferAttribute(r,T),g.fromBufferAttribute(r,L),h.sub(c),u.sub(c),m.sub(f),g.sub(f);const U=1/(m.x*g.y-g.x*m.y);isFinite(U)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(U),v.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(U),a[x].add(S),a[T].add(S),a[L].add(S),l[x].add(v),l[T].add(v),l[L].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,T=E.length;x<T;++x){const L=E[x],U=L.start,k=L.count;for(let H=U,O=U+k;H<O;H+=3)_(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const A=new I,y=new I,R=new I,w=new I;function P(x){R.fromBufferAttribute(s,x),w.copy(R);const T=a[x];A.copy(T),A.sub(R.multiplyScalar(R.dot(T))).normalize(),y.crossVectors(w,T);const U=y.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,U)}for(let x=0,T=E.length;x<T;++x){const L=E[x],U=L.start,k=L.count;for(let H=U,O=U+k;H<O;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),S=t.getX(f+1),v=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,v),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,v),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let S=0,v=l.length;S<v;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*h;for(let _=0;_<h;_++)f[g++]=c[m++]}return new un(f,h,u)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xa=new I,H0=new I,V0=new Zt;class ai{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=xa.subVectors(i,e).cross(H0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(xa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||V0.getNormalMatrix(t),s=this.coplanarPoint(xa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let W0=0;class Us extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=tr,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nu,this.blendDst=iu,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ai().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new gt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ri=new I,Ma=new I,Rr=new I,Cr=new I;class Pc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ma.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),Cr.copy(this.origin).sub(Ma);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Rr),a=Cr.dot(this.direction),l=-Cr.dot(Rr),c=Cr.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const S=1/h;u*=S,f*=S,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ma).addScaledVector(Rr,f),m}intersectSphere(t,e){if(t.radius<0)return null;ri.subVectors(t.center,this.origin);const i=ri.dot(this.direction),s=ri.dot(ri)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,i,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,m=t.z-o.z,g=e.x-o.x,S=e.y-o.y,v=e.z-o.z,_=i.x-o.x,E=i.y-o.y,A=i.z-o.z,y=Math.abs(l),R=Math.abs(c),w=Math.abs(h);let P,x,T,L,U,k,H,O,z,Z,V,at;if(y>=R&&y>=w?(T=l,k=u,z=g,at=_,l>=0?(P=c,x=h,L=f,U=m,H=S,O=v,Z=E,V=A):(P=h,x=c,L=m,U=f,H=v,O=S,Z=A,V=E)):R>=w?(T=c,k=f,z=S,at=E,c>=0?(P=h,x=l,L=m,U=u,H=v,O=g,Z=A,V=_):(P=l,x=h,L=u,U=m,H=g,O=v,Z=_,V=A)):(T=h,k=m,z=v,at=A,h>=0?(P=l,x=c,L=u,U=f,H=g,O=S,Z=_,V=E):(P=c,x=l,L=f,U=u,H=S,O=g,Z=E,V=_)),T===0)return null;const K=P/T,it=x/T,et=1/T,Ut=L-K*k,Ct=U-it*k,pe=H-K*z,se=O-it*z,le=Z-K*at,Q=V-it*at,st=le*se-Q*pe,_t=Ut*Q-Ct*le,Vt=pe*Ct-se*Ut;if(s){if(st<0||_t<0||Vt<0)return null}else if((st<0||_t<0||Vt<0)&&(st>0||_t>0||Vt>0))return null;const At=st+_t+Vt;if(At===0)return null;const Wt=et*(st*k+_t*z+Vt*at);return(At>0?Wt<0:Wt>0)?null:this.at(Wt/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn extends Us{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xh=new Ie,ki=new Pc,Pr=new ko,Mh=new I,Lr=new I,Ir=new I,Dr=new I,Sa=new I,Nr=new I,Sh=new I,Ur=new I;class Yt extends Ke{constructor(t=new Oe,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Sa.fromBufferAttribute(u,t),o?Nr.addScaledVector(Sa,h):Nr.addScaledVector(Sa.sub(e),h))}e.add(Nr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere),Pr.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(Pr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Pr,Mh)===null||ki.origin.distanceToSquared(Mh)>(t.far-t.near)**2))&&(xh.copy(r).invert(),ki.copy(t.ray).applyMatrix4(xh),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=f.length;g<S;g++){const v=f[g],_=o[v.materialIndex],E=Math.max(v.start,m.start),A=Math.min(a.count,Math.min(v.start+v.count,m.start+m.count));for(let y=E,R=A;y<R;y+=3){const w=a.getX(y),P=a.getX(y+1),x=a.getX(y+2);s=Fr(this,_,t,i,c,h,u,w,P,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let v=g,_=S;v<_;v+=3){const E=a.getX(v),A=a.getX(v+1),y=a.getX(v+2);s=Fr(this,o,t,i,c,h,u,E,A,y),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=f.length;g<S;g++){const v=f[g],_=o[v.materialIndex],E=Math.max(v.start,m.start),A=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let y=E,R=A;y<R;y+=3){const w=y,P=y+1,x=y+2;s=Fr(this,_,t,i,c,h,u,w,P,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let v=g,_=S;v<_;v+=3){const E=v,A=v+1,y=v+2;s=Fr(this,o,t,i,c,h,u,E,A,y),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}}}function X0(n,t,e,i,s,r,o,a){let l;if(t.side===on?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===qi,a),l===null)return null;Ur.copy(a),Ur.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ur);return c<e.near||c>e.far?null:{distance:c,point:Ur.clone(),object:n}}function Fr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Lr),n.getVertexPosition(l,Ir),n.getVertexPosition(c,Dr);const h=X0(n,t,e,i,Lr,Ir,Dr,Sh);if(h){const u=new I;On.getBarycoord(Sh,Lr,Ir,Dr,u),s&&(h.uv=On.getInterpolatedAttribute(s,a,l,c,u,new gt)),r&&(h.uv1=On.getInterpolatedAttribute(r,a,l,c,u,new gt)),o&&(h.normal=On.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};On.getNormal(Lr,Ir,Dr,f.normal),h.face=f,h.barycoord=u}return h}class _r extends an{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Qe,h=Qe,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zi=new ko,q0=new gt(.5,.5),Or=new I;class Lc{constructor(t=new ai,e=new ai,i=new ai,s=new ai,r=new ai,o=new ai){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Zn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],m=r[7],g=r[8],S=r[9],v=r[10],_=r[11],E=r[12],A=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-o,m-h,_-g,R-E).normalize(),s[1].setComponents(c+o,m+h,_+g,R+E).normalize(),s[2].setComponents(c+a,m+u,_+S,R+A).normalize(),s[3].setComponents(c-a,m-u,_-S,R-A).normalize(),i)s[4].setComponents(l,f,v,y).normalize(),s[5].setComponents(c-l,m-f,_-v,R-y).normalize();else if(s[4].setComponents(c-l,m-f,_-v,R-y).normalize(),e===Zn)s[5].setComponents(c+l,m+f,_+v,R+y).normalize();else if(e===lr)s[5].setComponents(l,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){zi.center.set(0,0,0);const e=q0.distanceTo(t.center);return zi.radius=.7071067811865476+e,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Or.x=s.normal.x>0?t.max.x:t.min.x,Or.y=s.normal.y>0?t.max.y:t.min.y,Or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zo extends Us{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yh=new Ie,ec=new Pc,Br=new ko,kr=new I;class Ic extends Ke{constructor(t=new Oe,e=new zo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(s),Br.radius+=r,t.ray.intersectsSphere(Br)===!1)return;yh.copy(s).invert(),ec.copy(t.ray).applyMatrix4(yh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,S=m;g<S;g++){const v=c.getX(g);kr.fromBufferAttribute(u,v),bh(kr,v,l,s,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,S=m;g<S;g++)kr.fromBufferAttribute(u,g),bh(kr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function bh(n,t,e,i,s,r,o){const a=ec.distanceSqToPoint(n);if(a<e){const l=new I;ec.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class bu extends an{constructor(t=[],e=Yi,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gn extends an{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cr extends an{constructor(t,e,i=Jn,s,r,o,a=Qe,l=Qe,c,h=pi,u=1){if(h!==pi&&h!==Wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ac(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Y0 extends cr{constructor(t,e=Jn,i=Yi,s,r,o=Qe,a=Qe,l,c=pi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class wu extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ze extends Oe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function g(S,v,_,E,A,y,R,w,P,x,T){const L=y/P,U=R/x,k=y/2,H=R/2,O=w/2,z=P+1,Z=x+1;let V=0,at=0;const K=new I;for(let it=0;it<Z;it++){const et=it*U-H;for(let Ut=0;Ut<z;Ut++){const Ct=Ut*L-k;K[S]=Ct*E,K[v]=et*A,K[_]=O,c.push(K.x,K.y,K.z),K[S]=0,K[v]=0,K[_]=w>0?1:-1,h.push(K.x,K.y,K.z),u.push(Ut/P),u.push(1-it/x),V+=1}}for(let it=0;it<x;it++)for(let et=0;et<P;et++){const Ut=f+et+z*it,Ct=f+et+z*(it+1),pe=f+(et+1)+z*(it+1),se=f+(et+1)+z*it;l.push(Ut,Ct,se),l.push(Ct,pe,se),at+=6}a.addGroup(m,at,T),m+=at,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class we extends Oe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],m=[];let g=0;const S=[],v=i/2;let _=0;E(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(m,2));function E(){const y=new I,R=new I;let w=0;const P=(e-t)/i;for(let x=0;x<=r;x++){const T=[],L=x/r,U=L*(e-t)+t;for(let k=0;k<=s;k++){const H=k/s,O=H*l+a,z=Math.sin(O),Z=Math.cos(O);R.x=U*z,R.y=-L*i+v,R.z=U*Z,u.push(R.x,R.y,R.z),y.set(z,P,Z).normalize(),f.push(y.x,y.y,y.z),m.push(H,1-L),T.push(g++)}S.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const L=S[T][x],U=S[T+1][x],k=S[T+1][x+1],H=S[T][x+1];(t>0||T!==0)&&(h.push(L,U,H),w+=3),(e>0||T!==r-1)&&(h.push(U,k,H),w+=3)}c.addGroup(_,w,0),_+=w}function A(y){const R=g,w=new gt,P=new I;let x=0;const T=y===!0?t:e,L=y===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,v*L,0),f.push(0,L,0),m.push(.5,.5),g++;const U=g;for(let k=0;k<=s;k++){const O=k/s*l+a,z=Math.cos(O),Z=Math.sin(O);P.x=T*Z,P.y=v*L,P.z=T*z,u.push(P.x,P.y,P.z),f.push(0,L,0),w.x=z*.5+.5,w.y=Z*.5*L+.5,m.push(w.x,w.y),g++}for(let k=0;k<s;k++){const H=R+k,O=U+k;y===!0?h.push(O,O+1,H):h.push(O+1,O,H),x+=3}c.addGroup(_,x,y===!0?1:2),_+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dc extends we{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Dc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nc extends Oe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const A=new I,y=new I,R=new I;for(let w=0;w<e.length;w+=3)m(e[w+0],A),m(e[w+1],y),m(e[w+2],R),l(A,y,R,E)}function l(E,A,y,R){const w=R+1,P=[];for(let x=0;x<=w;x++){P[x]=[];const T=E.clone().lerp(y,x/w),L=A.clone().lerp(y,x/w),U=w-x;for(let k=0;k<=U;k++)k===0&&x===w?P[x][k]=T:P[x][k]=T.clone().lerp(L,k/U)}for(let x=0;x<w;x++)for(let T=0;T<2*(w-x)-1;T++){const L=Math.floor(T/2);T%2===0?(f(P[x][L+1]),f(P[x+1][L]),f(P[x][L])):(f(P[x][L+1]),f(P[x+1][L+1]),f(P[x+1][L]))}}function c(E){const A=new I;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(E),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function h(){const E=new I;for(let A=0;A<r.length;A+=3){E.x=r[A+0],E.y=r[A+1],E.z=r[A+2];const y=v(E)/2/Math.PI+.5,R=_(E)/Math.PI+.5;o.push(y,1-R)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const A=o[E+0],y=o[E+2],R=o[E+4],w=Math.max(A,y,R),P=Math.min(A,y,R);w>.9&&P<.1&&(A<.2&&(o[E+0]+=1),y<.2&&(o[E+2]+=1),R<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function m(E,A){const y=E*3;A.x=t[y+0],A.y=t[y+1],A.z=t[y+2]}function g(){const E=new I,A=new I,y=new I,R=new I,w=new gt,P=new gt,x=new gt;for(let T=0,L=0;T<r.length;T+=9,L+=6){E.set(r[T+0],r[T+1],r[T+2]),A.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),w.set(o[L+0],o[L+1]),P.set(o[L+2],o[L+3]),x.set(o[L+4],o[L+5]),R.copy(E).add(A).add(y).divideScalar(3);const U=v(R);S(w,L+0,E,U),S(P,L+2,A,U),S(x,L+4,y,U)}}function S(E,A,y,R){R<0&&E.x===1&&(o[A]=E.x-1),y.x===0&&y.z===0&&(o[A]=R/2/Math.PI+.5)}function v(E){return Math.atan2(E.z,-E.x)}function _(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.vertices,t.indices,t.radius,t.detail)}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,m=(o-h)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new gt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new I,s=[],r=[],o=[],a=new I,l=new Ie;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(oe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(oe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Uc extends ti{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $0 extends Uc{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,s(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const wh=new I,Eh=new I,ya=new Fc,ba=new Fc,wa=new Fc;class Eu extends ti{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Eh.subVectors(s[0],s[1]).add(s[0]),c=Eh);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(wh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wh),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),S=Math.pow(u.distanceToSquared(f),m),v=Math.pow(f.distanceToSquared(h),m);S<1e-4&&(S=1),g<1e-4&&(g=S),v<1e-4&&(v=S),ya.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,S,v),ba.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,S,v),wa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,S,v)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ba.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),wa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(ya.calc(l),ba.calc(l),wa.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Th(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Z0(n,t){const e=1-n;return e*e*t}function K0(n,t){return 2*(1-n)*n*t}function J0(n,t){return n*n*t}function er(n,t,e,i){return Z0(n,t)+K0(n,e)+J0(n,i)}function Q0(n,t){const e=1-n;return e*e*e*t}function j0(n,t){const e=1-n;return 3*e*e*n*t}function tp(n,t){return 3*(1-n)*n*n*t}function ep(n,t){return n*n*n*t}function nr(n,t,e,i,s){return Q0(n,t)+j0(n,e)+tp(n,i)+ep(n,s)}class Tu extends ti{constructor(t=new gt,e=new gt,i=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new gt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class np extends ti{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y),nr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Au extends ti{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ip extends ti{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ru extends ti{constructor(t=new gt,e=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new gt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cu extends ti{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y),er(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pu extends ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Th(a,l.x,c.x,h.x,u.x),Th(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var To=Object.freeze({__proto__:null,ArcCurve:$0,CatmullRomCurve3:Eu,CubicBezierCurve:Tu,CubicBezierCurve3:np,EllipseCurve:Uc,LineCurve:Au,LineCurve3:ip,QuadraticBezierCurve:Ru,QuadraticBezierCurve3:Cu,SplineCurve:Pu});class sp extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new To[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new To[s.type]().fromJSON(s))}return this}}class Ao extends sp{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Au(this.currentPoint.clone(),new gt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Ru(this.currentPoint.clone(),new gt(t,e),new gt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Tu(this.currentPoint.clone(),new gt(t,e),new gt(i,s),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Pu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Uc(t,e,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nc extends Ao{constructor(t){super(t),this.uuid=Ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Ao().fromJSON(s))}return this}}function rp(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Lu(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=hp(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,u=l;for(let f=e;f<s;f+=e){const m=n[f],g=n[f+1];m<a&&(a=m),g<l&&(l=g),m>h&&(h=m),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return hr(r,o,e,a,l,c,0),o}function Lu(n,t,e,i,s){let r;if(s===Sp(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Ah(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Ah(o/i|0,n[o],n[o+1],r);return r&&Ls(r,r.next)&&(ur(r),r=r.next),r}function Ki(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ls(e,e.next)||Fe(e.prev,e,e.next)===0)){if(ur(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function hr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&mp(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?ap(n,i,s,r):op(n)){t.push(l.i,n.i,c.i),ur(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=lp(Ki(n),t),hr(n,t,e,i,s,r,2)):o===2&&cp(n,t,e,i,s,r):hr(Ki(n),t,e,i,s,r,1);break}}}function op(n){const t=n.prev,e=n,i=n.next;if(Fe(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),m=Math.max(a,l,c);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&Js(s,a,r,l,o,c,g.x,g.y)&&Fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ap(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Fe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,m=Math.min(a,l,c),g=Math.min(h,u,f),S=Math.max(a,l,c),v=Math.max(h,u,f),_=ic(m,g,t,e,i),E=ic(S,v,t,e,i);let A=n.prevZ,y=n.nextZ;for(;A&&A.z>=_&&y&&y.z<=E;){if(A.x>=m&&A.x<=S&&A.y>=g&&A.y<=v&&A!==s&&A!==o&&Js(a,h,l,u,c,f,A.x,A.y)&&Fe(A.prev,A,A.next)>=0||(A=A.prevZ,y.x>=m&&y.x<=S&&y.y>=g&&y.y<=v&&y!==s&&y!==o&&Js(a,h,l,u,c,f,y.x,y.y)&&Fe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;A&&A.z>=_;){if(A.x>=m&&A.x<=S&&A.y>=g&&A.y<=v&&A!==s&&A!==o&&Js(a,h,l,u,c,f,A.x,A.y)&&Fe(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;y&&y.z<=E;){if(y.x>=m&&y.x<=S&&y.y>=g&&y.y<=v&&y!==s&&y!==o&&Js(a,h,l,u,c,f,y.x,y.y)&&Fe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function lp(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Ls(i,s)&&Du(i,e,e.next,s)&&fr(i,s)&&fr(s,i)&&(t.push(i.i,e.i,s.i),ur(e),ur(e.next),e=n=s),e=e.next}while(e!==n);return Ki(e)}function cp(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vp(o,a)){let l=Nu(o,a);o=Ki(o,o.next),l=Ki(l,l.next),hr(o,t,e,i,s,r,0),hr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function hp(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Lu(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(_p(c))}s.sort(fp);for(let r=0;r<s.length;r++)e=up(s[r],e);return e}function fp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function up(n,t){const e=dp(n,t);if(!e)return t;const i=Nu(e,n);return Ki(i,i.next),Ki(e,e.next)}function dp(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(Ls(n,e))return e;do{if(Ls(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Iu(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const u=Math.abs(s-e.y)/(i-e.x);fr(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&pp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function pp(n,t){return Fe(n.prev,n,t.prev)<0&&Fe(t.next,n,n.next)<0}function mp(n,t,e,i){let s=n;do s.z===0&&(s.z=ic(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,gp(s)}function gp(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function ic(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function _p(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Iu(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Js(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Iu(n,t,e,i,s,r,o,a)}function vp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!xp(n,t)&&(fr(n,t)&&fr(t,n)&&Mp(n,t)&&(Fe(n.prev,n,t.prev)||Fe(n,t.prev,t))||Ls(n,t)&&Fe(n.prev,n,n.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ls(n,t){return n.x===t.x&&n.y===t.y}function Du(n,t,e,i){const s=Gr(Fe(n,t,e)),r=Gr(Fe(n,t,i)),o=Gr(Fe(e,i,n)),a=Gr(Fe(e,i,t));return!!(s!==r&&o!==a||s===0&&zr(n,e,t)||r===0&&zr(n,i,t)||o===0&&zr(e,n,i)||a===0&&zr(e,t,i))}function zr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Gr(n){return n>0?1:n<0?-1:0}function xp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Du(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function fr(n,t){return Fe(n.prev,n,n.next)<0?Fe(n,t,n.next)>=0&&Fe(n,n.prev,t)>=0:Fe(n,t,n.prev)<0||Fe(n,n.next,t)<0}function Mp(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Nu(n,t){const e=sc(n.i,n.x,n.y),i=sc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Ah(n,t,e,i){const s=sc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ur(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function sc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sp(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class yp{static triangulate(t,e,i=2){return rp(t,e,i)}}class ws{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return ws.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Rh(t),Ch(i,t);let o=t.length;e.forEach(Rh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ch(i,e[l]);const a=yp.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Rh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ch(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Ro extends Oe{constructor(t=new nc([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,v=e.bevelSegments!==void 0?e.bevelSegments:3;const _=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:bp;let A,y=!1,R,w,P,x;if(_){A=_.getSpacedPoints(h),y=!0,f=!1;const rt=_.isCatmullRomCurve3?_.closed:!1;R=_.computeFrenetFrames(h,rt),w=new I,P=new I,x=new I}f||(v=0,m=0,g=0,S=0);const T=a.extractPoints(c);let L=T.shape;const U=T.holes;if(!ws.isClockWise(L)){L=L.reverse();for(let rt=0,ct=U.length;rt<ct;rt++){const ft=U[rt];ws.isClockWise(ft)&&(U[rt]=ft.reverse())}}function H(rt){const ft=10000000000000001e-36;let W=rt[0];for(let tt=1;tt<=rt.length;tt++){const pt=tt%rt.length,ht=rt[pt],Pt=ht.x-W.x,Bt=ht.y-W.y,N=Pt*Pt+Bt*Bt,ce=Math.max(Math.abs(ht.x),Math.abs(ht.y),Math.abs(W.x),Math.abs(W.y)),jt=ft*ce*ce;if(N<=jt){rt.splice(pt,1),tt--;continue}W=ht}}H(L),U.forEach(H);const O=U.length,z=L;for(let rt=0;rt<O;rt++){const ct=U[rt];L=L.concat(ct)}function Z(rt,ct,ft){return ct||de("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ct,ft)}const V=L.length;function at(rt,ct,ft){let W,tt,pt;const ht=rt.x-ct.x,Pt=rt.y-ct.y,Bt=ft.x-rt.x,N=ft.y-rt.y,ce=ht*ht+Pt*Pt,jt=ht*N-Pt*Bt;if(Math.abs(jt)>Number.EPSILON){const C=Math.sqrt(ce),M=Math.sqrt(Bt*Bt+N*N),G=ct.x-Pt/C,Y=ct.y+ht/C,J=ft.x-N/M,dt=ft.y+Bt/M,mt=((J-G)*N-(dt-Y)*Bt)/(ht*N-Pt*Bt);W=G+ht*mt-rt.x,tt=Y+Pt*mt-rt.y;const j=W*W+tt*tt;if(j<=2)return new gt(W,tt);pt=Math.sqrt(j/2)}else{let C=!1;ht>Number.EPSILON?Bt>Number.EPSILON&&(C=!0):ht<-Number.EPSILON?Bt<-Number.EPSILON&&(C=!0):Math.sign(Pt)===Math.sign(N)&&(C=!0),C?(W=-Pt,tt=ht,pt=Math.sqrt(ce)):(W=ht,tt=Pt,pt=Math.sqrt(ce/2))}return new gt(W/pt,tt/pt)}const K=[];for(let rt=0,ct=z.length,ft=ct-1,W=rt+1;rt<ct;rt++,ft++,W++)ft===ct&&(ft=0),W===ct&&(W=0),K[rt]=at(z[rt],z[ft],z[W]);const it=[];let et,Ut=K.concat();for(let rt=0,ct=O;rt<ct;rt++){const ft=U[rt];et=[];for(let W=0,tt=ft.length,pt=tt-1,ht=W+1;W<tt;W++,pt++,ht++)pt===tt&&(pt=0),ht===tt&&(ht=0),et[W]=at(ft[W],ft[pt],ft[ht]);it.push(et),Ut=Ut.concat(et)}let Ct;if(v===0)Ct=ws.triangulateShape(z,U);else{const rt=[],ct=[];for(let ft=0;ft<v;ft++){const W=ft/v,tt=m*Math.cos(W*Math.PI/2),pt=g*Math.sin(W*Math.PI/2)+S;for(let ht=0,Pt=z.length;ht<Pt;ht++){const Bt=Z(z[ht],K[ht],pt);_t(Bt.x,Bt.y,-tt),W===0&&rt.push(Bt)}for(let ht=0,Pt=O;ht<Pt;ht++){const Bt=U[ht];et=it[ht];const N=[];for(let ce=0,jt=Bt.length;ce<jt;ce++){const C=Z(Bt[ce],et[ce],pt);_t(C.x,C.y,-tt),W===0&&N.push(C)}W===0&&ct.push(N)}}Ct=ws.triangulateShape(rt,ct)}const pe=Ct.length,se=g+S;for(let rt=0;rt<V;rt++){const ct=f?Z(L[rt],Ut[rt],se):L[rt];y?(P.copy(R.normals[0]).multiplyScalar(ct.x),w.copy(R.binormals[0]).multiplyScalar(ct.y),x.copy(A[0]).add(P).add(w),_t(x.x,x.y,x.z)):_t(ct.x,ct.y,0)}for(let rt=1;rt<=h;rt++)for(let ct=0;ct<V;ct++){const ft=f?Z(L[ct],Ut[ct],se):L[ct];y?(P.copy(R.normals[rt]).multiplyScalar(ft.x),w.copy(R.binormals[rt]).multiplyScalar(ft.y),x.copy(A[rt]).add(P).add(w),_t(x.x,x.y,x.z)):_t(ft.x,ft.y,u/h*rt)}for(let rt=v-1;rt>=0;rt--){const ct=rt/v,ft=m*Math.cos(ct*Math.PI/2),W=g*Math.sin(ct*Math.PI/2)+S;for(let tt=0,pt=z.length;tt<pt;tt++){const ht=Z(z[tt],K[tt],W);_t(ht.x,ht.y,u+ft)}for(let tt=0,pt=U.length;tt<pt;tt++){const ht=U[tt];et=it[tt];for(let Pt=0,Bt=ht.length;Pt<Bt;Pt++){const N=Z(ht[Pt],et[Pt],W);y?_t(N.x,N.y+A[h-1].y,A[h-1].x+ft):_t(N.x,N.y,u+ft)}}}le(),Q();function le(){const rt=s.length/3;if(f){let ct=0,ft=V*ct;for(let W=0;W<pe;W++){const tt=Ct[W];Vt(tt[2]+ft,tt[1]+ft,tt[0]+ft)}ct=h+v*2,ft=V*ct;for(let W=0;W<pe;W++){const tt=Ct[W];Vt(tt[0]+ft,tt[1]+ft,tt[2]+ft)}}else{for(let ct=0;ct<pe;ct++){const ft=Ct[ct];Vt(ft[2],ft[1],ft[0])}for(let ct=0;ct<pe;ct++){const ft=Ct[ct];Vt(ft[0]+V*h,ft[1]+V*h,ft[2]+V*h)}}i.addGroup(rt,s.length/3-rt,0)}function Q(){const rt=s.length/3;let ct=0;st(z,ct),ct+=z.length;for(let ft=0,W=U.length;ft<W;ft++){const tt=U[ft];st(tt,ct),ct+=tt.length}i.addGroup(rt,s.length/3-rt,1)}function st(rt,ct){let ft=rt.length;for(;--ft>=0;){const W=ft;let tt=ft-1;tt<0&&(tt=rt.length-1);for(let pt=0,ht=h+v*2;pt<ht;pt++){const Pt=V*pt,Bt=V*(pt+1),N=ct+W+Pt,ce=ct+tt+Pt,jt=ct+tt+Bt,C=ct+W+Bt;At(N,ce,jt,C)}}}function _t(rt,ct,ft){l.push(rt),l.push(ct),l.push(ft)}function Vt(rt,ct,ft){Wt(rt),Wt(ct),Wt(ft);const W=s.length/3,tt=E.generateTopUV(i,s,W-3,W-2,W-1);me(tt[0]),me(tt[1]),me(tt[2])}function At(rt,ct,ft,W){Wt(rt),Wt(ct),Wt(W),Wt(ct),Wt(ft),Wt(W);const tt=s.length/3,pt=E.generateSideWallUV(i,s,tt-6,tt-3,tt-2,tt-1);me(pt[0]),me(pt[1]),me(pt[3]),me(pt[1]),me(pt[2]),me(pt[3])}function Wt(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function me(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return wp(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new To[s.type]().fromJSON(s)),new Ro(i,t.options)}}const bp={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new gt(r,o),new gt(a,l),new gt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],m=t[s*3+1],g=t[s*3+2],S=t[r*3],v=t[r*3+1],_=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new gt(o,1-l),new gt(c,1-u),new gt(f,1-g),new gt(S,1-_)]:[new gt(a,1-l),new gt(h,1-u),new gt(m,1-g),new gt(v,1-_)]}};function wp(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class dr extends Nc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new dr(t.radius,t.detail)}}class jn extends Oe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,m=[],g=[],S=[],v=[];for(let _=0;_<h;_++){const E=_*f-o;for(let A=0;A<c;A++){const y=A*u-r;g.push(y,-E,0),S.push(0,0,1),v.push(A/a),v.push(1-_/l)}}for(let _=0;_<l;_++)for(let E=0;E<a;E++){const A=E+c*_,y=E+c*(_+1),R=E+1+c*(_+1),w=E+1+c*_;m.push(A,y,w),m.push(y,R,w)}this.setIndex(m),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(S,3)),this.setAttribute("uv",new ue(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.widthSegments,t.heightSegments)}}class hn extends Oe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,f=new I,m=[],g=[],S=[],v=[];for(let _=0;_<=i;_++){const E=[],A=_/i,y=o+A*a,R=t*Math.cos(y),w=Math.sqrt(t*t-R*R);let P=0;_===0&&o===0?P=.5/e:_===i&&l===Math.PI&&(P=-.5/e);for(let x=0;x<=e;x++){const T=x/e,L=s+T*r;u.x=-w*Math.cos(L),u.y=R,u.z=w*Math.sin(L),g.push(u.x,u.y,u.z),f.copy(u).normalize(),S.push(f.x,f.y,f.z),v.push(T+P,1-A),E.push(c++)}h.push(E)}for(let _=0;_<i;_++)for(let E=0;E<e;E++){const A=h[_][E+1],y=h[_][E],R=h[_+1][E],w=h[_+1][E+1];(_!==0||o>0)&&m.push(A,y,w),(_!==i-1||l<Math.PI)&&m.push(y,R,w)}this.setIndex(m),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(S,3)),this.setAttribute("uv",new ue(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oc extends Oe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],h=[],u=[],f=new I,m=new I,g=new I;for(let S=0;S<=i;S++){const v=o+S/i*a;for(let _=0;_<=s;_++){const E=_/s*r;m.x=(t+e*Math.cos(v))*Math.cos(E),m.y=(t+e*Math.cos(v))*Math.sin(E),m.z=e*Math.sin(v),c.push(m.x,m.y,m.z),f.x=t*Math.cos(E),f.y=t*Math.sin(E),g.subVectors(m,f).normalize(),h.push(g.x,g.y,g.z),u.push(_/s),u.push(S/i)}}for(let S=1;S<=i;S++)for(let v=1;v<=s;v++){const _=(s+1)*S+v-1,E=(s+1)*(S-1)+v-1,A=(s+1)*(S-1)+v,y=(s+1)*S+v;l.push(_,E,y),l.push(E,A,y)}this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Bc extends Oe{constructor(t=new Cu(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new gt;let h=new I;const u=[],f=[],m=[],g=[];S(),this.setIndex(g),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(m,2));function S(){for(let A=0;A<e;A++)v(A);v(r===!1?e:0),E(),_()}function v(A){h=t.getPointAt(A/e,h);const y=o.normals[A],R=o.binormals[A];for(let w=0;w<=s;w++){const P=w/s*Math.PI*2,x=Math.sin(P),T=-Math.cos(P);l.x=T*y.x+x*R.x,l.y=T*y.y+x*R.y,l.z=T*y.z+x*R.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function _(){for(let A=1;A<=e;A++)for(let y=1;y<=s;y++){const R=(s+1)*(A-1)+(y-1),w=(s+1)*A+(y-1),P=(s+1)*A+y,x=(s+1)*(A-1)+y;g.push(R,w,x),g.push(w,P,x)}}function E(){for(let A=0;A<=e;A++)for(let y=0;y<=s;y++)c.x=A/e,c.y=y/s,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Bc(new To[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Is(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Ph(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Ph(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function cn(n){const t={};for(let e=0;e<n.length;e++){const i=Is(n[e]);for(const s in i)t[s]=i[s]}return t}function Ph(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ep(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Uu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const Tp={clone:Is,merge:cn};var Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Us{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ap,this.fragmentShader=Rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ut().setHex(s.value);break;case"v2":this.uniforms[i].value=new gt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ue().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ie().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Cp extends An{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _e extends Us{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=vc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pp extends Us{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lp extends Us{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Fu extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Ip extends Fu{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ea=new Ie,Lh=new I,Ih=new I;class Dp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=Je,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lc,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lh),Ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ih),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Ea,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===lr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hr=new I,Vr=new ts,Wn=new I;class Ou extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hr,Vr,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Vr,Wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Hr,Vr,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Vr,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wi=new I,Dh=new gt,Nh=new gt;class bn extends Ou{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=tc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tc*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,Dh,Nh),e.subVectors(Nh,Dh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ta*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class kc extends Ou{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Np extends Dp{constructor(){super(new kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Up extends Fu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new Np}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ds=-90,ps=1;class Fp extends Ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(ds,ps,t,e);s.layers=this.layers,this.add(s);const r=new bn(ds,ps,t,e);r.layers=this.layers,this.add(r);const o=new bn(ds,ps,t,e);o.layers=this.layers,this.add(o);const a=new bn(ds,ps,t,e);a.layers=this.layers,this.add(a);const l=new bn(ds,ps,t,e);l.layers=this.layers,this.add(l);const c=new bn(ds,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;t.isWebGLRenderer===!0?v=t.state.buffers.depth.getReversed():v=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Op extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Uh=new Ie;class Bp{constructor(t,e,i=0,s=1/0){this.ray=new Pc(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):de("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uh),this}intersectObject(t,e=!0,i=[]){return rc(t,this,i,e),i.sort(Fh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)rc(t[s],this,i,e);return i.sort(Fh),i}}function Fh(n,t){return n.distance-t.distance}function rc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)rc(r[o],t,e,!0)}}class Bu{static{Bu.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}}function Oh(n,t,e,i){const s=kp(i);switch(e){case gu:return n*t;case mr:return n*t/s.components*s.byteLength;case yc:return n*t/s.components*s.byteLength;case Zi:return n*t*2/s.components*s.byteLength;case bc:return n*t*2/s.components*s.byteLength;case _u:return n*t*3/s.components*s.byteLength;case wn:return n*t*4/s.components*s.byteLength;case wc:return n*t*4/s.components*s.byteLength;case co:case ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fo:case uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wl:case Tl:return Math.max(n,16)*Math.max(t,8)/4;case bl:case El:return Math.max(n,8)*Math.max(t,8)/2;case Al:case Rl:case Pl:case Ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cl:case So:case Il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Yl:case $l:case Zl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Kl:case Jl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case yo:case Ql:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kp(n){switch(n){case Je:case uu:return{byteLength:1,components:1};case or:case du:case Qn:return{byteLength:2,components:1};case Mc:case Sc:return{byteLength:2,components:4};case Jn:case xc:case $n:return{byteLength:4,components:1};case pu:case mu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);function ku(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function zp(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],S=u[m];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++f,u[f]=S)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const S=u[m];n.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,em=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,um=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Dm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Um=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,km=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ug=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$g=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,o_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,u_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,__=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:Gp,alphahash_pars_fragment:Hp,alphamap_fragment:Vp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:qp,aomap_fragment:Yp,aomap_pars_fragment:$p,batching_pars_vertex:Zp,batching_vertex:Kp,begin_vertex:Jp,beginnormal_vertex:Qp,bsdfs:jp,iridescence_fragment:tm,bumpmap_pars_fragment:em,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:sm,clipping_planes_vertex:rm,color_fragment:om,color_pars_fragment:am,color_pars_vertex:lm,color_vertex:cm,common:hm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:um,displacementmap_pars_vertex:dm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:gm,colorspace_fragment:_m,colorspace_pars_fragment:vm,envmap_fragment:xm,envmap_common_pars_fragment:Mm,envmap_pars_fragment:Sm,envmap_pars_vertex:ym,envmap_physical_pars_fragment:Dm,envmap_vertex:bm,fog_vertex:wm,fog_pars_vertex:Em,fog_fragment:Tm,fog_pars_fragment:Am,gradientmap_pars_fragment:Rm,lightmap_pars_fragment:Cm,lights_lambert_fragment:Pm,lights_lambert_pars_fragment:Lm,lights_pars_begin:Im,lights_toon_fragment:Nm,lights_toon_pars_fragment:Um,lights_phong_fragment:Fm,lights_phong_pars_fragment:Om,lights_physical_fragment:Bm,lights_physical_pars_fragment:km,lights_fragment_begin:zm,lights_fragment_maps:Gm,lights_fragment_end:Hm,lightprobes_pars_fragment:Vm,logdepthbuf_fragment:Wm,logdepthbuf_pars_fragment:Xm,logdepthbuf_pars_vertex:qm,logdepthbuf_vertex:Ym,map_fragment:$m,map_pars_fragment:Zm,map_particle_fragment:Km,map_particle_pars_fragment:Jm,metalnessmap_fragment:Qm,metalnessmap_pars_fragment:jm,morphinstance_vertex:tg,morphcolor_vertex:eg,morphnormal_vertex:ng,morphtarget_pars_vertex:ig,morphtarget_vertex:sg,normal_fragment_begin:rg,normal_fragment_maps:og,normal_pars_fragment:ag,normal_pars_vertex:lg,normal_vertex:cg,normalmap_pars_fragment:hg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:ug,clearcoat_pars_fragment:dg,iridescence_pars_fragment:pg,opaque_fragment:mg,packing:gg,premultiplied_alpha_fragment:_g,project_vertex:vg,dithering_fragment:xg,dithering_pars_fragment:Mg,roughnessmap_fragment:Sg,roughnessmap_pars_fragment:yg,shadowmap_pars_fragment:bg,shadowmap_pars_vertex:wg,shadowmap_vertex:Eg,shadowmask_pars_fragment:Tg,skinbase_vertex:Ag,skinning_pars_vertex:Rg,skinning_vertex:Cg,skinnormal_vertex:Pg,specularmap_fragment:Lg,specularmap_pars_fragment:Ig,tonemapping_fragment:Dg,tonemapping_pars_fragment:Ng,transmission_fragment:Ug,transmission_pars_fragment:Fg,uv_pars_fragment:Og,uv_pars_vertex:Bg,uv_vertex:kg,worldpos_vertex:zg,background_vert:Gg,background_frag:Hg,backgroundCube_vert:Vg,backgroundCube_frag:Wg,cube_vert:Xg,cube_frag:qg,depth_vert:Yg,depth_frag:$g,distance_vert:Zg,distance_frag:Kg,equirect_vert:Jg,equirect_frag:Qg,linedashed_vert:jg,linedashed_frag:t_,meshbasic_vert:e_,meshbasic_frag:n_,meshlambert_vert:i_,meshlambert_frag:s_,meshmatcap_vert:r_,meshmatcap_frag:o_,meshnormal_vert:a_,meshnormal_frag:l_,meshphong_vert:c_,meshphong_frag:h_,meshphysical_vert:f_,meshphysical_frag:u_,meshtoon_vert:d_,meshtoon_frag:p_,points_vert:m_,points_frag:g_,shadow_vert:__,shadow_frag:v_,sprite_vert:x_,sprite_frag:M_},bt={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},qn={basic:{uniforms:cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:cn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:cn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ut(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:cn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:cn([bt.points,bt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:cn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:cn([bt.common,bt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:cn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:cn([bt.sprite,bt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:cn([bt.common,bt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:cn([bt.lights,bt.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};qn.physical={uniforms:cn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Wr={r:0,b:0,g:0},S_=new Ie,zu=new Zt;zu.set(-1,0,0,0,1,0,0,0,1);function y_(n,t,e,i,s,r){const o=new ut(0);let a=s===!0?0:1,l,c,h=null,u=0,f=null;function m(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){const y=E.backgroundBlurriness>0;A=t.get(A,y)}return A}function g(E){let A=!1;const y=m(E);y===null?v(o,a):y&&y.isColor&&(v(y,1),A=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(E,A){const y=m(A);y&&(y.isCubeTexture||y.mapping===Bo)?(c===void 0&&(c=new Yt(new Ze(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Is(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(S_.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zu),c.material.toneMapped=he.getTransfer(y.colorSpace)!==ye,(h!==y||u!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Yt(new jn(2,2),new An({name:"BackgroundMaterial",uniforms:Is(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=he.getTransfer(y.colorSpace)!==ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function v(E,A){E.getRGB(Wr,Uu(n)),e.buffers.color.setClear(Wr.r,Wr.g,Wr.b,A,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,A=1){o.set(E),a=A,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,v(o,a)},render:g,addToRenderList:S,dispose:_}}function b_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(U,k,H,O,z){let Z=!1;const V=u(U,O,H,k);r!==V&&(r=V,c(r.object)),Z=m(U,O,H,z),Z&&g(U,O,H,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(U,k,H,O),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function u(U,k,H,O){const z=O.wireframe===!0;let Z=i[k.id];Z===void 0&&(Z={},i[k.id]=Z);const V=U.isInstancedMesh===!0?U.id:0;let at=Z[V];at===void 0&&(at={},Z[V]=at);let K=at[H.id];K===void 0&&(K={},at[H.id]=K);let it=K[z];return it===void 0&&(it=f(l()),K[z]=it),it}function f(U){const k=[],H=[],O=[];for(let z=0;z<e;z++)k[z]=0,H[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:O,object:U,attributes:{},index:null}}function m(U,k,H,O){const z=r.attributes,Z=k.attributes;let V=0;const at=H.getAttributes();for(const K in at)if(at[K].location>=0){const et=z[K];let Ut=Z[K];if(Ut===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(Ut=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(Ut=U.instanceColor)),et===void 0||et.attribute!==Ut||Ut&&et.data!==Ut.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function g(U,k,H,O){const z={},Z=k.attributes;let V=0;const at=H.getAttributes();for(const K in at)if(at[K].location>=0){let et=Z[K];et===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(et=U.instanceColor));const Ut={};Ut.attribute=et,et&&et.data&&(Ut.data=et.data),z[K]=Ut,V++}r.attributes=z,r.attributesNum=V,r.index=O}function S(){const U=r.newAttributes;for(let k=0,H=U.length;k<H;k++)U[k]=0}function v(U){_(U,0)}function _(U,k){const H=r.newAttributes,O=r.enabledAttributes,z=r.attributeDivisors;H[U]=1,O[U]===0&&(n.enableVertexAttribArray(U),O[U]=1),z[U]!==k&&(n.vertexAttribDivisor(U,k),z[U]=k)}function E(){const U=r.newAttributes,k=r.enabledAttributes;for(let H=0,O=k.length;H<O;H++)k[H]!==U[H]&&(n.disableVertexAttribArray(H),k[H]=0)}function A(U,k,H,O,z,Z,V){V===!0?n.vertexAttribIPointer(U,k,H,z,Z):n.vertexAttribPointer(U,k,H,O,z,Z)}function y(U,k,H,O){S();const z=O.attributes,Z=H.getAttributes(),V=k.defaultAttributeValues;for(const at in Z){const K=Z[at];if(K.location>=0){let it=z[at];if(it===void 0&&(at==="instanceMatrix"&&U.instanceMatrix&&(it=U.instanceMatrix),at==="instanceColor"&&U.instanceColor&&(it=U.instanceColor)),it!==void 0){const et=it.normalized,Ut=it.itemSize,Ct=t.get(it);if(Ct===void 0)continue;const pe=Ct.buffer,se=Ct.type,le=Ct.bytesPerElement,Q=se===n.INT||se===n.UNSIGNED_INT||it.gpuType===xc;if(it.isInterleavedBufferAttribute){const st=it.data,_t=st.stride,Vt=it.offset;if(st.isInstancedInterleavedBuffer){for(let At=0;At<K.locationSize;At++)_(K.location+At,st.meshPerAttribute);U.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let At=0;At<K.locationSize;At++)v(K.location+At);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let At=0;At<K.locationSize;At++)A(K.location+At,Ut/K.locationSize,se,et,_t*le,(Vt+Ut/K.locationSize*At)*le,Q)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<K.locationSize;st++)_(K.location+st,it.meshPerAttribute);U.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<K.locationSize;st++)v(K.location+st);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let st=0;st<K.locationSize;st++)A(K.location+st,Ut/K.locationSize,se,et,Ut*le,Ut/K.locationSize*st*le,Q)}}else if(V!==void 0){const et=V[at];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(K.location,et);break;case 3:n.vertexAttrib3fv(K.location,et);break;case 4:n.vertexAttrib4fv(K.location,et);break;default:n.vertexAttrib1fv(K.location,et)}}}}E()}function R(){T();for(const U in i){const k=i[U];for(const H in k){const O=k[H];for(const z in O){const Z=O[z];for(const V in Z)h(Z[V].object),delete Z[V];delete O[z]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;const k=i[U.id];for(const H in k){const O=k[H];for(const z in O){const Z=O[z];for(const V in Z)h(Z[V].object),delete Z[V];delete O[z]}}delete i[U.id]}function P(U){for(const k in i){const H=i[k];for(const O in H){const z=H[O];if(z[U.id]===void 0)continue;const Z=z[U.id];for(const V in Z)h(Z[V].object),delete Z[V];delete z[U.id]}}}function x(U){for(const k in i){const H=i[k],O=U.isInstancedMesh===!0?U.id:0,z=H[O];if(z!==void 0){for(const Z in z){const V=z[Z];for(const at in V)h(V[at].object),delete V[at];delete z[Z]}delete H[O],Object.keys(H).length===0&&delete i[k]}}}function T(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:v,disableUnusedAttributes:E}}function w_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let m=0;m<h;m++)f+=c[m];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function E_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==wn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const x=P===Qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Je&&P!==$n&&!x&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&($t("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:y,maxSamples:R,samples:w}}function T_(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new ai,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,S=u.clipIntersection,v=u.clipShadows,_=n.get(u);if(!s||g===null||g.length===0||r&&!v)r?h(null):c();else{const E=r?0:i,A=E*4;let y=_.clippingState||null;l.value=y,y=h(g,f,A,m);for(let R=0;R!==A;++R)y[R]=e[R];_.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,m,g){const S=u!==null?u.length:0;let v=null;if(S!==0){if(v=l.value,g!==!0||v===null){const _=m+S*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(v===null||v.length<_)&&(v=new Float32Array(_));for(let A=0,y=m;A!==S;++A,y+=4)o.copy(u[A]).applyMatrix4(E,a),o.normal.toArray(v,y),v[y+3]=o.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,v}}const Es=4,A_=6,R_=20,C_=256,Vs=new kc,Bh=new ut;let Ta=null,Aa=0,Ra=0,Ca=!1;const P_=new I,Gi=new I;class kh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=P_}=r;Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ta,Aa,Ra),this._renderer.xr.enabled=Ca,t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:Qn,format:wn,colorSpace:bo,depthBuffer:!1},s=zh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=L_(r)),this._blurMaterial=D_(r,t,e),this._ggxMaterial=I_(r,t,e)}return s}_compileMaterial(t){const e=new Yt(new Oe,t);this._renderer.compile(e,Vs)}_sceneToCubeUV(t,e,i,s,r){const l=new bn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(Bh),u.toneMapping=Kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yt(new Ze,new sn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,v=S.material;let _=!1;const E=t.background;E?E.isColor&&(v.color.copy(E),t.background=null,_=!0):(v.color.copy(Bh),_=!0);for(let A=0;A<6;A++){const y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));const R=this._cubeSize;ms(s,y*R,A>2?R:0,R,R),u.setRenderTarget(s),_&&u.render(S,l),u.render(t,l)}u.toneMapping=m,u.autoClear=f,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Yi||t.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ms(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Vs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,m=u*f,{_lodMax:g}=this,S=this._sizeLods[i],v=3*S*(i>g-Es?i-g+Es:0),_=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=g-e,ms(r,v,_,3*S,2*S),s.setRenderTarget(r),s.render(a,Vs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ms(t,v,_,3*S,2*S),s.setRenderTarget(t),s.render(a,Vs)}_blur(t,e,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[s],u=3*h*(s>this._lodMax-Es?s-this._lodMax+Es:0),f=4*(this._cubeSize-h);ms(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Vs)}}function L_(n){const t=[],e=[];let i=n;const s=n-Es+1+A_;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,m=3,g=new Float32Array(m*f*u),S=new Float32Array(m*f*u);for(let _=0;_<u;_++){const E=_%3*2/3-1,A=_>2?0:-1,y=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];g.set(y,m*f*_);for(let R=0;R<f;R++){const w=h[R*2]*2-1,P=h[R*2+1]*2-1;_===0?Gi.set(1,P,w):_===1?Gi.set(-w,1,-P):_===2?Gi.set(-w,P,1):_===3?Gi.set(-1,P,-w):_===4?Gi.set(-w,-1,P):Gi.set(w,P,-1),Gi.toArray(S,(_*f+R)*m)}}const v=new Oe;v.setAttribute("position",new un(g,m)),v.setAttribute("outputDirection",new un(S,m)),e.push(new Yt(v,null)),i>Es&&i--}return{lodMeshes:e,sizeLods:t}}function zh(n,t,e){const i=new kn(n,t,e);return i.texture.mapping=Bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function I_(n,t,e){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function D_(n,t,e){return new An({name:"SphericalGaussianBlur",defines:{SAMPLES:R_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Gh(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Hh(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Go(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gu extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new bu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ze(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:hi});r.uniforms.tEquirect.value=e;const o=new Yt(s,r),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=Ce),new Fp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function N_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,m=!1){return f==null?null:m?o(f):r(f)}function r(f){if(f&&f.isTexture){const m=f.mapping;if(m===lo||m===Jo)if(t.has(f)){const g=t.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const S=new Gu(g.height);return S.fromEquirectangularTexture(n,f),t.set(f,S),f.addEventListener("dispose",c),a(S.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const m=f.mapping,g=m===lo||m===Jo,S=m===Yi||m===Ps;if(g||S){let v=e.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return i===null&&(i=new kh(n)),v=g?i.fromEquirectangular(f,v):i.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const E=f.image;return g&&E&&E.height>0||S&&E&&l(E)?(i===null&&(i=new kh(n)),v=g?i.fromEquirectangular(f):i.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",h),v.texture):null}}}return f}function a(f,m){return m===lo?f.mapping=Yi:m===Jo&&(f.mapping=Ps),f}function l(f){let m=0;const g=6;for(let S=0;S<g;S++)f[S]!==void 0&&m++;return m===g}function c(f){const m=f.target;m.removeEventListener("dispose",c);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(f){const m=f.target;m.removeEventListener("dispose",h);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function U_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Rs("WebGLRenderer: "+i+" extension not supported."),s}}}function F_(n,t,e,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)t.update(f[m],n.ARRAY_BUFFER)}function c(u){const f=[],m=u.index,g=u.attributes.position;let S=0;if(g===void 0)return;if(m!==null){const E=m.array;S=m.version;for(let A=0,y=E.length;A<y;A+=3){const R=E[A+0],w=E[A+1],P=E[A+2];f.push(R,w,w,P,P,R)}}else{const E=g.array;S=g.version;for(let A=0,y=E.length/3-1;A<y;A+=3){const R=A+0,w=A+1,P=A+2;f.push(R,w,w,P,P,R)}}const v=new(g.count>=65535?yu:Su)(f,1);v.version=S;const _=r.get(u);_&&t.remove(_),r.set(u,v)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function O_(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),e.update(f,i,1)}function c(u,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,u*o,m),e.update(f,i,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,m);let S=0;for(let v=0;v<m;v++)S+=f[v];e.update(S,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function B_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:de("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function k_(n,t,e){const i=new WeakMap,s=new Ue;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let L=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",L)};var m=L;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),S===!0&&(y=2),v===!0&&(y=3);let R=a.attributes.position.count*y,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const P=new Float32Array(R*w*4*u),x=new xu(P,R,w,u);x.type=$n,x.needsUpdate=!0;const T=y*4;for(let U=0;U<u;U++){const k=_[U],H=E[U],O=A[U],z=R*w*4*U;for(let Z=0;Z<k.count;Z++){const V=Z*T;g===!0&&(s.fromBufferAttribute(k,Z),P[z+V+0]=s.x,P[z+V+1]=s.y,P[z+V+2]=s.z,P[z+V+3]=0),S===!0&&(s.fromBufferAttribute(H,Z),P[z+V+4]=s.x,P[z+V+5]=s.y,P[z+V+6]=s.z,P[z+V+7]=0),v===!0&&(s.fromBufferAttribute(O,Z),P[z+V+8]=s.x,P[z+V+9]=s.y,P[z+V+10]=s.z,P[z+V+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new gt(R,w)},i.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];const S=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function z_(n,t,e,i,s){let r=new WeakMap;function o(c){const h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const G_={[su]:"LINEAR_TONE_MAPPING",[ru]:"REINHARD_TONE_MAPPING",[ou]:"CINEON_TONE_MAPPING",[au]:"ACES_FILMIC_TONE_MAPPING",[cu]:"AGX_TONE_MAPPING",[hu]:"NEUTRAL_TONE_MAPPING",[lu]:"CUSTOM_TONE_MAPPING"};function H_(n,t,e,i,s,r){const o=new kn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Oe;c.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ue([0,2,0,0,2,0],2));const h=new Cp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Yt(c,h),f=new kc(-1,1,1,-1,0,1);let m=null,g=null,S=!1,v,_=null,E=[],A=!1;this.setSize=function(y,R){o.setSize(y,R),a!==null&&a.setSize(y,R),l!==null&&l.setSize(y,R);for(let w=0;w<E.length;w++){const P=E[w];P.setSize&&P.setSize(y,R)}},this.setEffects=function(y){E=y,A=E.length>0&&E[0].isRenderPass===!0;const R=o.width,w=o.height;E.length>0&&a===null&&(a=new kn(R,w,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),l=new kn(R,w,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<E.length;P++){const x=E[P];x.setSize&&x.setSize(R,w)}},this.begin=function(y,R){if(S||y.toneMapping===Kn&&E.length===0)return!1;if(_=R,R!==null){const w=R.width,P=R.height;(o.width!==w||o.height!==P)&&this.setSize(w,P)}return A===!1&&y.setRenderTarget(o),v=y.toneMapping,y.toneMapping=Kn,!0},this.hasRenderPass=function(){return A},this.end=function(y,R){y.toneMapping=v,S=!0;let w=o,P=a;for(let x=0;x<E.length;x++){const T=E[x];T.enabled!==!1&&(T.render(y,P,w,R),T.needsSwap!==!1&&(w=P,P=P===a?l:a))}if(m!==y.outputColorSpace||g!==y.toneMapping){m=y.outputColorSpace,g=y.toneMapping,h.defines={},he.getTransfer(m)===ye&&(h.defines.SRGB_TRANSFER="");const x=G_[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(_),y.render(u,f),_=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Hu=new an,oc=new cr(1,1),Vu=new xu,Wu=new P0,Xu=new bu,Vh=[],Wh=[],Xh=new Float32Array(16),qh=new Float32Array(9),Yh=new Float32Array(4);function Fs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Vh[s];if(r===void 0&&(r=new Float32Array(s),Vh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ho(n,t){let e=Wh[t];e===void 0&&(e=new Int32Array(t),Wh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function V_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function W_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),Ye(e,t)}}function X_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),Ye(e,t)}}function q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),Ye(e,t)}}function Y_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Yh.set(i),n.uniformMatrix2fv(this.addr,!1,Yh),Ye(e,i)}}function $_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;qh.set(i),n.uniformMatrix3fv(this.addr,!1,qh),Ye(e,i)}}function Z_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Xh.set(i),n.uniformMatrix4fv(this.addr,!1,Xh),Ye(e,i)}}function K_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function J_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),Ye(e,t)}}function Q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),Ye(e,t)}}function j_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),Ye(e,t)}}function tv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ev(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),Ye(e,t)}}function nv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),Ye(e,t)}}function iv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),Ye(e,t)}}function sv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(oc.compareFunction=e.isReversedDepthBuffer()?Tc:Ec,r=oc):r=Hu,e.setTexture2D(t||r,s)}function rv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Wu,s)}function ov(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Xu,s)}function av(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Vu,s)}function lv(n){switch(n){case 5126:return V_;case 35664:return W_;case 35665:return X_;case 35666:return q_;case 35674:return Y_;case 35675:return $_;case 35676:return Z_;case 5124:case 35670:return K_;case 35667:case 35671:return J_;case 35668:case 35672:return Q_;case 35669:case 35673:return j_;case 5125:return tv;case 36294:return ev;case 36295:return nv;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return av}}function cv(n,t){n.uniform1fv(this.addr,t)}function hv(n,t){const e=Fs(t,this.size,2);n.uniform2fv(this.addr,e)}function fv(n,t){const e=Fs(t,this.size,3);n.uniform3fv(this.addr,e)}function uv(n,t){const e=Fs(t,this.size,4);n.uniform4fv(this.addr,e)}function dv(n,t){const e=Fs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function pv(n,t){const e=Fs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function mv(n,t){const e=Fs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function gv(n,t){n.uniform1iv(this.addr,t)}function _v(n,t){n.uniform2iv(this.addr,t)}function vv(n,t){n.uniform3iv(this.addr,t)}function xv(n,t){n.uniform4iv(this.addr,t)}function Mv(n,t){n.uniform1uiv(this.addr,t)}function Sv(n,t){n.uniform2uiv(this.addr,t)}function yv(n,t){n.uniform3uiv(this.addr,t)}function bv(n,t){n.uniform4uiv(this.addr,t)}function wv(n,t,e){const i=this.cache,s=t.length,r=Ho(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=oc:o=Hu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Ev(n,t,e){const i=this.cache,s=t.length,r=Ho(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wu,r[o])}function Tv(n,t,e){const i=this.cache,s=t.length,r=Ho(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xu,r[o])}function Av(n,t,e){const i=this.cache,s=t.length,r=Ho(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vu,r[o])}function Rv(n){switch(n){case 5126:return cv;case 35664:return hv;case 35665:return fv;case 35666:return uv;case 35674:return dv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return _v;case 35668:case 35672:return vv;case 35669:case 35673:return xv;case 5125:return Mv;case 36294:return Sv;case 36295:return yv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Av}}class Cv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=lv(e.type)}}class Pv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rv(e.type)}}class Lv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function $h(n,t){n.seq.push(t),n.map[t.id]=t}function Iv(n,t,e){const i=n.name,s=i.length;for(Pa.lastIndex=0;;){const r=Pa.exec(i),o=Pa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$h(e,c===void 0?new Cv(a,n,t):new Pv(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Lv(a),$h(e,u)),e=u}}}class po{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Iv(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Zh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Dv=37297;let Nv=0;function Uv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Kh=new Zt;function Fv(n){he._getMatrix(Kh,he.workingColorSpace,n);const t=`mat3( ${Kh.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case wo:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Jh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Uv(n.getShaderSource(t),a)}else return r}function Ov(n,t){const e=Fv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Bv={[su]:"Linear",[ru]:"Reinhard",[ou]:"Cineon",[au]:"ACESFilmic",[cu]:"AgX",[hu]:"Neutral",[lu]:"Custom"};function kv(n,t){const e=Bv[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xr=new I;function zv(){he.getLuminanceCoefficients(Xr);const n=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Hv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Vv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Qs(n){return n!==""}function Qh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(n){return n.replace(Wv,qv)}const Xv=new Map;function qv(n,t){let e=ee[t];if(e===void 0){const i=Xv.get(t);if(i!==void 0)e=ee[i],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ac(e)}const Yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tf(n){return n.replace(Yv,$v)}function $v(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ef(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Zv={[ao]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function Kv(n){return Zv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Jv={[Yi]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[Bo]:"ENVMAP_TYPE_CUBE_UV"};function Qv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Jv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const jv={[Ps]:"ENVMAP_MODE_REFRACTION"};function tx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":jv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ex={[vc]:"ENVMAP_BLENDING_MULTIPLY",[a0]:"ENVMAP_BLENDING_MIX",[l0]:"ENVMAP_BLENDING_ADD"};function nx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ex[n.combine]||"ENVMAP_BLENDING_NONE"}function ix(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function sx(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Kv(e),c=Qv(e),h=tx(e),u=nx(e),f=ix(e),m=Gv(e),g=Hv(r),S=s.createProgram();let v,_,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),_.length>0&&(_+=`
`)):(v=[ef(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),_=[ef(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?ee.tonemapping_pars_fragment:"",e.toneMapping!==Kn?kv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Ov("linearToOutputTexel",e.outputColorSpace),zv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),o=ac(o),o=Qh(o,e),o=jh(o,e),a=ac(a),a=Qh(a,e),a=jh(a,e),o=tf(o),a=tf(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",e.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=E+v+o,y=E+_+a,R=Zh(s,s.VERTEX_SHADER,A),w=Zh(s,s.FRAGMENT_SHADER,y);s.attachShader(S,R),s.attachShader(S,w),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function P(U){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(S)||"",H=s.getShaderInfoLog(R)||"",O=s.getShaderInfoLog(w)||"",z=k.trim(),Z=H.trim(),V=O.trim();let at=!0,K=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(at=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,R,w);else{const it=Jh(s,R,"vertex"),et=Jh(s,w,"fragment");de("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+z+`
`+it+`
`+et)}else z!==""?$t("WebGLProgram: Program Info Log:",z):(Z===""||V==="")&&(K=!1);K&&(U.diagnostics={runnable:at,programLog:z,vertexShader:{log:Z,prefix:v},fragmentShader:{log:V,prefix:_}})}s.deleteShader(R),s.deleteShader(w),x=new po(s,S),T=Vv(s,S)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(S,Dv)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nv++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=w,this}let rx=0;class ox{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new ax(t),e.set(t,i)),i}}class ax{constructor(t){this.id=rx++,this.code=t,this.usedTimes=0}}function lx(n){return n===Zi||n===So||n===yo}function cx(n,t,e,i,s,r){const o=new Rc,a=new ox,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,T,L,U,k,H){const O=U.fog,z=k.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,at=t.get(x.envMap||Z,V),K=at&&at.mapping===Bo?at.image.height:null,it=m[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&$t("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const et=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ut=et!==void 0?et.length:0;let Ct=0;z.morphAttributes.position!==void 0&&(Ct=1),z.morphAttributes.normal!==void 0&&(Ct=2),z.morphAttributes.color!==void 0&&(Ct=3);let pe,se,le,Q;if(it){const Pe=qn[it];pe=Pe.vertexShader,se=Pe.fragmentShader}else{pe=x.vertexShader,se=x.fragmentShader;const Pe=a.getVertexShaderStage(x),xe=a.getFragmentShaderStage(x);a.update(x,Pe,xe),le=Pe.id,Q=xe.id}const st=n.getRenderTarget(),_t=n.state.buffers.depth.getReversed(),Vt=k.isInstancedMesh===!0,At=k.isBatchedMesh===!0,Wt=!!x.map,me=!!x.matcap,rt=!!at,ct=!!x.aoMap,ft=!!x.lightMap,W=!!x.bumpMap&&x.wireframe===!1,tt=!!x.normalMap,pt=!!x.displacementMap,ht=!!x.emissiveMap,Pt=!!x.metalnessMap,Bt=!!x.roughnessMap,N=x.anisotropy>0,ce=x.clearcoat>0,jt=x.dispersion>0,C=x.retroreflectivity>0,M=x.iridescence>0,G=x.sheen>0,Y=x.transmission>0,J=N&&!!x.anisotropyMap,dt=ce&&!!x.clearcoatMap,mt=ce&&!!x.clearcoatNormalMap,j=ce&&!!x.clearcoatRoughnessMap,ot=M&&!!x.iridescenceMap,vt=M&&!!x.iridescenceThicknessMap,kt=G&&!!x.sheenColorMap,yt=G&&!!x.sheenRoughnessMap,xt=!!x.specularMap,zt=!!x.specularColorMap,qt=!!x.specularIntensityMap,Qt=Y&&!!x.transmissionMap,B=Y&&!!x.thicknessMap,Mt=!!x.gradientMap,nt=!!x.alphaMap,St=x.alphaTest>0,Rt=!!x.alphaHash,lt=!!x.extensions;let Gt=Kn;x.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Gt=n.toneMapping);const Ft={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:pe,fragmentShader:se,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:At,batchingColor:At&&k._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&k.instanceColor!==null,instancingMorph:Vt&&k.morphTexture!==null,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Wt,matcap:me,envMap:rt,envMapMode:rt&&at.mapping,envMapCubeUVHeight:K,aoMap:ct,lightMap:ft,bumpMap:W,normalMap:tt,displacementMap:pt,emissiveMap:ht,normalMapObjectSpace:tt&&x.normalMapType===f0,normalMapTangentSpace:tt&&x.normalMapType===jl,packedNormalMap:tt&&x.normalMapType===jl&&lx(x.normalMap.format),metalnessMap:Pt,roughnessMap:Bt,anisotropy:N,anisotropyMap:J,clearcoat:ce,clearcoatMap:dt,clearcoatNormalMap:mt,clearcoatRoughnessMap:j,dispersion:jt,retroreflection:C,iridescence:M,iridescenceMap:ot,iridescenceThicknessMap:vt,sheen:G,sheenColorMap:kt,sheenRoughnessMap:yt,specularMap:xt,specularColorMap:zt,specularIntensityMap:qt,transmission:Y,transmissionMap:Qt,thicknessMap:B,gradientMap:Mt,opaque:x.transparent===!1&&x.blending===tr&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:St,alphaHash:Rt,combine:x.combine,mapUv:Wt&&g(x.map.channel),aoMapUv:ct&&g(x.aoMap.channel),lightMapUv:ft&&g(x.lightMap.channel),bumpMapUv:W&&g(x.bumpMap.channel),normalMapUv:tt&&g(x.normalMap.channel),displacementMapUv:pt&&g(x.displacementMap.channel),emissiveMapUv:ht&&g(x.emissiveMap.channel),metalnessMapUv:Pt&&g(x.metalnessMap.channel),roughnessMapUv:Bt&&g(x.roughnessMap.channel),anisotropyMapUv:J&&g(x.anisotropyMap.channel),clearcoatMapUv:dt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:mt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(x.sheenRoughnessMap.channel),specularMapUv:xt&&g(x.specularMap.channel),specularColorMapUv:zt&&g(x.specularColorMap.channel),specularIntensityMapUv:qt&&g(x.specularIntensityMap.channel),transmissionMapUv:Qt&&g(x.transmissionMap.channel),thicknessMapUv:B&&g(x.thicknessMap.channel),alphaMapUv:nt&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(tt||N),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(Wt||nt),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&tt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Ct,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Wt&&x.map.isVideoTexture===!0&&he.getTransfer(x.map.colorSpace)===ye,decodeVideoTextureEmissive:ht&&x.emissiveMap.isVideoTexture===!0&&he.getTransfer(x.emissiveMap.colorSpace)===ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===li,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:lt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&x.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function v(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)T.push(L),T.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(_(T,x),E(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function _(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){const T=m[x.type];let L;if(T){const U=qn[T];L=Tp.clone(U.uniforms)}else L=x.uniforms;return L}function y(x,T){let L=h.get(T);return L!==void 0?++L.usedTimes:(L=new sx(n,T,x,s),c.push(L),h.set(T,L)),L}function R(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function P(){a.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:A,acquireProgram:y,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:P}}function hx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function fx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function nf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function sf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function a(f,m,g,S,v,_){let E=n[t];return E===void 0?(E={id:f.id,object:f,geometry:m,material:g,materialVariant:o(f),groupOrder:S,renderOrder:f.renderOrder,z:v,group:_},n[t]=E):(E.id=f.id,E.object=f,E.geometry=m,E.material=g,E.materialVariant=o(f),E.groupOrder=S,E.renderOrder=f.renderOrder,E.z=v,E.group=_),t++,E}function l(f,m,g,S,v,_,E){E.reversedDepth===!0&&(v=-v);const A=a(f,m,g,S,v,_);g.transmission>0?i.push(A):g.transparent===!0?s.push(A):e.push(A)}function c(f,m,g,S,v,_){const E=a(f,m,g,S,v,_);g.transmission>0?i.unshift(E):g.transparent===!0?s.unshift(E):e.unshift(E)}function h(f,m){e.length>1&&e.sort(f||fx),i.length>1&&i.sort(m||nf),s.length>1&&s.sort(m||nf)}function u(){for(let f=t,m=n.length;f<m;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function ux(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new sf,n.set(i,[o])):s>=r.length?(o=new sf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function dx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new ut};break;case"SpotLight":e={position:new I,direction:new I,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function px(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let mx=0;function gx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function _x(n){const t=new dx,e=px(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const s=new I,r=new Ie,o=new Ie;function a(c){let h=0,u=0,f=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let m=0,g=0,S=0,v=0,_=0,E=0,A=0,y=0,R=0,w=0,P=0,x=0,T=0,L=0;c.sort(gx);for(let k=0,H=c.length;k<H;k++){const O=c[k],z=O.color,Z=O.intensity,V=O.distance;let at=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Zi?at=O.shadow.map.texture:at=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=z.r*Z,u+=z.g*Z,f+=z.b*Z;else if(O.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(O.sh.coefficients[K],Z);L++}else if(O.isSunLight){const K=t.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const it=O.shadow,et=e.get(O);et.shadowIntensity=it.intensity,et.shadowBias=it.bias,et.shadowNormalBias=it.normalBias,et.shadowRadius=it.radius,et.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),i.sunShadow[g]=et,i.sunShadowMap[g]=at;const Ut=it.getViewportCount();for(let Ct=0;Ct<Ut;Ct++)i.sunShadowMatrix[S+Ct]=it.getMatrix(Ct),i.sunShadowCascade[S+Ct]=it._cascadeData[Ct];S+=Ut,g++}i.sun[m]=K,m++}else if(O.isDirectionalLight){const K=t.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const it=O.shadow,et=e.get(O);et.shadowIntensity=it.intensity,et.shadowBias=it.bias,et.shadowNormalBias=it.normalBias,et.shadowRadius=it.radius,et.shadowMapSize=it.mapSize,i.directionalShadow[v]=et,i.directionalShadowMap[v]=at,i.directionalShadowMatrix[v]=O.shadow.matrix,R++}i.directional[v]=K,v++}else if(O.isSpotLight){const K=t.get(O);K.position.setFromMatrixPosition(O.matrixWorld),K.color.copy(z).multiplyScalar(Z),K.distance=V,K.coneCos=Math.cos(O.angle),K.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),K.decay=O.decay,i.spot[E]=K;const it=O.shadow;if(O.map&&(i.spotLightMap[x]=O.map,x++,it.updateMatrices(O),O.castShadow&&T++),i.spotLightMatrix[E]=it.matrix,O.castShadow){const et=e.get(O);et.shadowIntensity=it.intensity,et.shadowBias=it.bias,et.shadowNormalBias=it.normalBias,et.shadowRadius=it.radius,et.shadowMapSize=it.mapSize,i.spotShadow[E]=et,i.spotShadowMap[E]=at,P++}E++}else if(O.isRectAreaLight){const K=t.get(O);K.color.copy(z).multiplyScalar(Z),K.halfWidth.set(O.width*.5,0,0),K.halfHeight.set(0,O.height*.5,0),i.rectArea[A]=K,A++}else if(O.isPointLight){const K=t.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),K.distance=O.distance,K.decay=O.decay,O.castShadow){const it=O.shadow,et=e.get(O);et.shadowIntensity=it.intensity,et.shadowBias=it.bias,et.shadowNormalBias=it.normalBias,et.shadowRadius=it.radius,et.shadowMapSize=it.mapSize,et.shadowCameraNear=it.camera.near,et.shadowCameraFar=it.camera.far,i.pointShadow[_]=et,i.pointShadowMap[_]=at,i.pointShadowMatrix[_]=O.shadow.matrix,w++}i.point[_]=K,_++}else if(O.isHemisphereLight){const K=t.get(O);K.skyColor.copy(O.color).multiplyScalar(Z),K.groundColor.copy(O.groundColor).multiplyScalar(Z),i.hemi[y]=K,y++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const U=i.hash;(U.sunLength!==m||U.directionalLength!==v||U.pointLength!==_||U.spotLength!==E||U.rectAreaLength!==A||U.hemiLength!==y||U.numSunShadows!==g||U.numDirectionalShadows!==R||U.numPointShadows!==w||U.numSpotShadows!==P||U.numSpotMaps!==x||U.numLightProbes!==L)&&(i.sun.length=m,i.directional.length=v,i.spot.length=E,i.rectArea.length=A,i.point.length=_,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+x-T,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=L,U.sunLength=m,U.directionalLength=v,U.pointLength=_,U.spotLength=E,U.rectAreaLength=A,U.hemiLength=y,U.numSunShadows=g,U.numDirectionalShadows=R,U.numPointShadows=w,U.numSpotShadows=P,U.numSpotMaps=x,U.numLightProbes=L,i.version=mx++)}function l(c,h){let u=0,f=0,m=0,g=0,S=0,v=0;const _=h.matrixWorldInverse;for(let E=0,A=c.length;E<A;E++){const y=c[E];if(y.isSunLight){const R=i.sun[u];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(_),u++}else if(y.isDirectionalLight){const R=i.directional[f];R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(_),f++}else if(y.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const R=i.rectArea[S];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(_),o.identity(),r.copy(y.matrixWorld),r.premultiply(_),o.extractRotation(r),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),S++}else if(y.isPointLight){const R=i.point[m];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const R=i.hemi[v];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(_),v++}}}return{setup:a,setupView:l,state:i}}function rf(n){const t=new _x(n),e=[],i=[],s=[];function r(f){u.camera=f,e.length=0,i.length=0,s.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function vx(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new rf(n),t.set(s,[a])):r>=o.length?(a=new rf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const xx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Sx=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],yx=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],of=new Ie,Ws=new I,La=new I;function bx(n,t,e){let i=new Lc;const s=new gt,r=new gt,o=new Ue,a=new Pp,l=new Lp,c={},h=e.maxTextureSize,u={[qi]:on,[on]:qi,[li]:li},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:xx,fragmentShader:Mx}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Yt(g,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let _=this.type;this.render=function(w,P,x){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;this.type===Hd&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ao);const T=n.getRenderTarget(),L=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),k=n.state;k.setBlending(hi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=_!==this.type;H&&P.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(z=>z.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,z=w.length;O<z;O++){const Z=w[O],V=Z.shadow;if(V===void 0){$t("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const at=V.getFrameExtents();s.multiply(at),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,V.mapSize.y=r.y));const K=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=K,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ks){if(Z.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new kn(s.x,s.y,{format:Zi,type:Qn,minFilter:Ce,magFilter:Ce,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new cr(s.x,s.y,$n),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=pi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Qe,V.map.depthTexture.magFilter=Qe}else Z.isPointLight?(V.map=new Gu(s.x),V.map.depthTexture=new Y0(s.x,Jn)):(V.map=new kn(s.x,s.y),V.map.depthTexture=new cr(s.x,s.y,Jn)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=pi,this.type===ao?(V.map.depthTexture.compareFunction=K?Tc:Ec,V.map.depthTexture.minFilter=Ce,V.map.depthTexture.magFilter=Ce):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Qe,V.map.depthTexture.magFilter=Qe);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);const it=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Z.isPointLight!==!0&&V.updateMatrices(Z,x);for(let et=0;et<it;et++){const Ut=V.getCamera(et);if(Z.isPointLight){const Ct=V.camera,pe=V.matrix,se=Z.distance||Ct.far;se!==Ct.far&&(Ct.far=se,Ct.updateProjectionMatrix()),Ws.setFromMatrixPosition(Z.matrixWorld),Ct.position.copy(Ws),La.copy(Ct.position),La.add(Sx[et]),Ct.up.copy(yx[et]),Ct.lookAt(La),Ct.updateMatrixWorld(),pe.makeTranslation(-Ws.x,-Ws.y,-Ws.z),of.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),V._frustum.setFromProjectionMatrix(of,Ct.coordinateSystem,Ct.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,et),n.clear();else{et===0&&(n.setRenderTarget(V.map),n.clear());const Ct=V.getViewport(et);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),k.viewport(o)}i=V.getFrustum(et),y(P,x,Ut,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Ks&&E(V,x),V.needsUpdate=!1}_=this.type,v.needsUpdate=!1,n.setRenderTarget(T,L,U)};function E(w,P){const x=t.update(S);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new kn(s.x,s.y,{format:Zi,type:Qn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(P,null,x,f,S,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(P,null,x,m,S,null)}function A(w,P,x,T){let L=null;const U=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)L=U;else if(L=x.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const k=L.uuid,H=P.uuid;let O=c[k];O===void 0&&(O={},c[k]=O);let z=O[H];z===void 0&&(z=L.clone(),O[H]=z,P.addEventListener("dispose",R)),L=z}if(L.visible=P.visible,L.wireframe=P.wireframe,T===Ks?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:u[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const k=n.properties.get(L);k.light=x}return L}function y(w,P,x,T,L){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Ks)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const H=t.update(w),O=w.material;if(Array.isArray(O)){const z=H.groups;for(let Z=0,V=z.length;Z<V;Z++){const at=z[Z],K=O[at.materialIndex];if(K&&K.visible){const it=A(w,K,T,L);w.onBeforeShadow(n,w,P,x,H,it,at),n.renderBufferDirect(x,null,H,it,w,at),w.onAfterShadow(n,w,P,x,H,it,at)}}}else if(O.visible){const z=A(w,O,T,L);w.onBeforeShadow(n,w,P,x,H,z,null),n.renderBufferDirect(x,null,H,z,w,null),w.onAfterShadow(n,w,P,x,H,z,null)}}const k=w.children;for(let H=0,O=k.length;H<O;H++)y(k[H],P,x,T,L)}function R(w){w.target.removeEventListener("dispose",R);for(const x in c){const T=c[x],L=w.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function wx(n,t){function e(){let B=!1;const Mt=new Ue;let nt=null;const St=new Ue(0,0,0,0);return{setMask:function(Rt){nt!==Rt&&!B&&(n.colorMask(Rt,Rt,Rt,Rt),nt=Rt)},setLocked:function(Rt){B=Rt},setClear:function(Rt,lt,Gt,Ft,Pe){Pe===!0&&(Rt*=Ft,lt*=Ft,Gt*=Ft),Mt.set(Rt,lt,Gt,Ft),St.equals(Mt)===!1&&(n.clearColor(Rt,lt,Gt,Ft),St.copy(Mt))},reset:function(){B=!1,nt=null,St.set(-1,0,0,0)}}}function i(){let B=!1,Mt=!1,nt=null,St=null,Rt=null;return{setReversed:function(lt){if(Mt!==lt){const Gt=t.get("EXT_clip_control");lt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),Mt=lt;const Ft=Rt;Rt=null,this.setClear(Ft)}},getReversed:function(){return Mt},setTest:function(lt){lt?st(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(lt){nt!==lt&&!B&&(n.depthMask(lt),nt=lt)},setFunc:function(lt){if(Mt&&(lt=b0[lt]),St!==lt){switch(lt){case ml:n.depthFunc(n.NEVER);break;case gl:n.depthFunc(n.ALWAYS);break;case _l:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case vl:n.depthFunc(n.EQUAL);break;case xl:n.depthFunc(n.GEQUAL);break;case Ml:n.depthFunc(n.GREATER);break;case Sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=lt}},setLocked:function(lt){B=lt},setClear:function(lt){Rt!==lt&&(Rt=lt,Mt&&(lt=1-lt),n.clearDepth(lt))},reset:function(){B=!1,nt=null,St=null,Rt=null,Mt=!1}}}function s(){let B=!1,Mt=null,nt=null,St=null,Rt=null,lt=null,Gt=null,Ft=null,Pe=null;return{setTest:function(xe){B||(xe?st(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(xe){Mt!==xe&&!B&&(n.stencilMask(xe),Mt=xe)},setFunc:function(xe,Cn,Hn){(nt!==xe||St!==Cn||Rt!==Hn)&&(n.stencilFunc(xe,Cn,Hn),nt=xe,St=Cn,Rt=Hn)},setOp:function(xe,Cn,Hn){(lt!==xe||Gt!==Cn||Ft!==Hn)&&(n.stencilOp(xe,Cn,Hn),lt=xe,Gt=Cn,Ft=Hn)},setLocked:function(xe){B=xe},setClear:function(xe){Pe!==xe&&(n.clearStencil(xe),Pe=xe)},reset:function(){B=!1,Mt=null,nt=null,St=null,Rt=null,lt=null,Gt=null,Ft=null,Pe=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f={},m=new WeakMap,g=[],S=null,v=!1,_=null,E=null,A=null,y=null,R=null,w=null,P=null,x=new ut(0,0,0),T=0,L=!1,U=null,k=null,H=null,O=null,z=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,at=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(K)[1]),V=at>=1):K.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),V=at>=2);let it=null,et={};const Ut=n.getParameter(n.SCISSOR_BOX),Ct=n.getParameter(n.VIEWPORT),pe=new Ue().fromArray(Ut),se=new Ue().fromArray(Ct);function le(B,Mt,nt,St){const Rt=new Uint8Array(4),lt=n.createTexture();n.bindTexture(B,lt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<nt;Gt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,St,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(Mt+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return lt}const Q={};Q[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(n.DEPTH_TEST),o.setFunc(rr),W(!1),tt(nh),st(n.CULL_FACE),ct(hi);function st(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function _t(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function Vt(B,Mt){return f[B]!==Mt?(n.bindFramebuffer(B,Mt),f[B]=Mt,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Mt),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function At(B,Mt){let nt=g,St=!1;if(B){nt=m.get(Mt),nt===void 0&&(nt=[],m.set(Mt,nt));const Rt=B.textures;if(nt.length!==Rt.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Gt=Rt.length;lt<Gt;lt++)nt[lt]=n.COLOR_ATTACHMENT0+lt;nt.length=Rt.length,St=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,St=!0);St&&n.drawBuffers(nt)}function Wt(B){return S!==B?(n.useProgram(B),S=B,!0):!1}const me={[ys]:n.FUNC_ADD,[Wd]:n.FUNC_SUBTRACT,[Xd]:n.FUNC_REVERSE_SUBTRACT};me[qd]=n.MIN,me[Yd]=n.MAX;const rt={[$d]:n.ZERO,[Zd]:n.ONE,[Kd]:n.SRC_COLOR,[nu]:n.SRC_ALPHA,[n0]:n.SRC_ALPHA_SATURATE,[t0]:n.DST_COLOR,[Qd]:n.DST_ALPHA,[Jd]:n.ONE_MINUS_SRC_COLOR,[iu]:n.ONE_MINUS_SRC_ALPHA,[e0]:n.ONE_MINUS_DST_COLOR,[jd]:n.ONE_MINUS_DST_ALPHA,[i0]:n.CONSTANT_COLOR,[s0]:n.ONE_MINUS_CONSTANT_COLOR,[r0]:n.CONSTANT_ALPHA,[o0]:n.ONE_MINUS_CONSTANT_ALPHA};function ct(B,Mt,nt,St,Rt,lt,Gt,Ft,Pe,xe){if(B===hi){v===!0&&(_t(n.BLEND),v=!1);return}if(v===!1&&(st(n.BLEND),v=!0),B!==Vd){if(B!==_||xe!==L){if((E!==ys||R!==ys)&&(n.blendEquation(n.FUNC_ADD),E=ys,R=ys),xe)switch(B){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pl:n.blendFunc(n.ONE,n.ONE);break;case ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:de("WebGLState: Invalid blending: ",B);break}else switch(B){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ih:de("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sh:de("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:de("WebGLState: Invalid blending: ",B);break}A=null,y=null,w=null,P=null,x.set(0,0,0),T=0,_=B,L=xe}return}Rt=Rt||Mt,lt=lt||nt,Gt=Gt||St,(Mt!==E||Rt!==R)&&(n.blendEquationSeparate(me[Mt],me[Rt]),E=Mt,R=Rt),(nt!==A||St!==y||lt!==w||Gt!==P)&&(n.blendFuncSeparate(rt[nt],rt[St],rt[lt],rt[Gt]),A=nt,y=St,w=lt,P=Gt),(Ft.equals(x)===!1||Pe!==T)&&(n.blendColor(Ft.r,Ft.g,Ft.b,Pe),x.copy(Ft),T=Pe),_=B,L=!1}function ft(B,Mt){B.side===li?_t(n.CULL_FACE):st(n.CULL_FACE);let nt=B.side===on;Mt&&(nt=!nt),W(nt),B.blending===tr&&B.transparent===!1?ct(hi):ct(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const St=B.stencilWrite;a.setTest(St),St&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ht(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function W(B){U!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),U=B)}function tt(B){B!==zd?(st(n.CULL_FACE),B!==k&&(B===nh?n.cullFace(n.BACK):B===Gd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),k=B}function pt(B){B!==H&&(V&&n.lineWidth(B),H=B)}function ht(B,Mt,nt){B?(st(n.POLYGON_OFFSET_FILL),(O!==Mt||z!==nt)&&(O=Mt,z=nt,o.getReversed()&&(Mt=-Mt),n.polygonOffset(Mt,nt))):_t(n.POLYGON_OFFSET_FILL)}function Pt(B){B?st(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function Bt(B){B===void 0&&(B=n.TEXTURE0+Z-1),it!==B&&(n.activeTexture(B),it=B)}function N(B,Mt,nt){nt===void 0&&(it===null?nt=n.TEXTURE0+Z-1:nt=it);let St=et[nt];St===void 0&&(St={type:void 0,texture:void 0},et[nt]=St),(St.type!==B||St.texture!==Mt)&&(it!==nt&&(n.activeTexture(nt),it=nt),n.bindTexture(B,Mt||Q[B]),St.type=B,St.texture=Mt)}function ce(){const B=et[it];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function jt(){try{n.compressedTexImage2D(...arguments)}catch(B){de("WebGLState:",B)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(B){de("WebGLState:",B)}}function M(){try{n.texSubImage2D(...arguments)}catch(B){de("WebGLState:",B)}}function G(){try{n.texSubImage3D(...arguments)}catch(B){de("WebGLState:",B)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(B){de("WebGLState:",B)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(B){de("WebGLState:",B)}}function dt(){try{n.texStorage2D(...arguments)}catch(B){de("WebGLState:",B)}}function mt(){try{n.texStorage3D(...arguments)}catch(B){de("WebGLState:",B)}}function j(){try{n.texImage2D(...arguments)}catch(B){de("WebGLState:",B)}}function ot(){try{n.texImage3D(...arguments)}catch(B){de("WebGLState:",B)}}function vt(B){return u[B]!==void 0?u[B]:n.getParameter(B)}function kt(B,Mt){u[B]!==Mt&&(n.pixelStorei(B,Mt),u[B]=Mt)}function yt(B){pe.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),pe.copy(B))}function xt(B){se.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),se.copy(B))}function zt(B,Mt){let nt=c.get(Mt);nt===void 0&&(nt=new WeakMap,c.set(Mt,nt));let St=nt.get(B);St===void 0&&(St=n.getUniformBlockIndex(Mt,B.name),nt.set(B,St))}function qt(B,Mt){const St=c.get(Mt).get(B);l.get(Mt)!==St&&(n.uniformBlockBinding(Mt,St,B.__bindingPointIndex),l.set(Mt,St))}function Qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},it=null,et={},f={},m=new WeakMap,g=[],S=null,v=!1,_=null,E=null,A=null,y=null,R=null,w=null,P=null,x=new ut(0,0,0),T=0,L=!1,U=null,k=null,H=null,O=null,z=null,pe.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:_t,bindFramebuffer:Vt,drawBuffers:At,useProgram:Wt,setBlending:ct,setMaterial:ft,setFlipSided:W,setCullFace:tt,setLineWidth:pt,setPolygonOffset:ht,setScissorTest:Pt,activeTexture:Bt,bindTexture:N,unbindTexture:ce,compressedTexImage2D:jt,compressedTexImage3D:C,texImage2D:j,texImage3D:ot,pixelStorei:kt,getParameter:vt,updateUBOMapping:zt,uniformBlockBinding:qt,texStorage2D:dt,texStorage3D:mt,texSubImage2D:M,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:yt,viewport:xt,reset:Qt}}function Ex(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,u=new Set;let f;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,M){return g?new OffscreenCanvas(C,M):Eo("canvas")}function v(C,M,G){let Y=1;const J=jt(C);if((J.width>G||J.height>G)&&(Y=G/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const dt=Math.floor(Y*J.width),mt=Math.floor(Y*J.height);f===void 0&&(f=S(dt,mt));const j=M?S(dt,mt):f;return j.width=dt,j.height=mt,j.getContext("2d").drawImage(C,0,0,dt,mt),$t("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+dt+"x"+mt+")."),j}else return"data"in C&&$t("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function _(C){return C.generateMipmaps}function E(C){n.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(C,M,G,Y,J,dt=!1){if(C!==null){if(n[C]!==void 0)return n[C];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let mt;Y&&(mt=t.get("EXT_texture_norm16"),mt||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=M;if(M===n.RED&&(G===n.FLOAT&&(j=n.R32F),G===n.HALF_FLOAT&&(j=n.R16F),G===n.UNSIGNED_BYTE&&(j=n.R8),G===n.UNSIGNED_SHORT&&mt&&(j=mt.R16_EXT),G===n.SHORT&&mt&&(j=mt.R16_SNORM_EXT)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.R8UI),G===n.UNSIGNED_SHORT&&(j=n.R16UI),G===n.UNSIGNED_INT&&(j=n.R32UI),G===n.BYTE&&(j=n.R8I),G===n.SHORT&&(j=n.R16I),G===n.INT&&(j=n.R32I)),M===n.RG&&(G===n.FLOAT&&(j=n.RG32F),G===n.HALF_FLOAT&&(j=n.RG16F),G===n.UNSIGNED_BYTE&&(j=n.RG8),G===n.UNSIGNED_SHORT&&mt&&(j=mt.RG16_EXT),G===n.SHORT&&mt&&(j=mt.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RG8UI),G===n.UNSIGNED_SHORT&&(j=n.RG16UI),G===n.UNSIGNED_INT&&(j=n.RG32UI),G===n.BYTE&&(j=n.RG8I),G===n.SHORT&&(j=n.RG16I),G===n.INT&&(j=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGB8UI),G===n.UNSIGNED_SHORT&&(j=n.RGB16UI),G===n.UNSIGNED_INT&&(j=n.RGB32UI),G===n.BYTE&&(j=n.RGB8I),G===n.SHORT&&(j=n.RGB16I),G===n.INT&&(j=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),G===n.UNSIGNED_INT&&(j=n.RGBA32UI),G===n.BYTE&&(j=n.RGBA8I),G===n.SHORT&&(j=n.RGBA16I),G===n.INT&&(j=n.RGBA32I)),M===n.RGB&&(G===n.UNSIGNED_SHORT&&mt&&(j=mt.RGB16_EXT),G===n.SHORT&&mt&&(j=mt.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),M===n.RGBA){const ot=dt?wo:he.getTransfer(J);G===n.FLOAT&&(j=n.RGBA32F),G===n.HALF_FLOAT&&(j=n.RGBA16F),G===n.UNSIGNED_BYTE&&(j=ot===ye?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&mt&&(j=mt.RGBA16_EXT),G===n.SHORT&&mt&&(j=mt.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function R(C,M){let G;return C?M===null||M===Jn||M===ar?G=n.DEPTH24_STENCIL8:M===$n?G=n.DEPTH32F_STENCIL8:M===or&&(G=n.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jn||M===ar?G=n.DEPTH_COMPONENT24:M===$n?G=n.DEPTH_COMPONENT32F:M===or&&(G=n.DEPTH_COMPONENT16),G}function w(C,M){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qe&&C.minFilter!==Ce?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function P(C){const M=C.target;M.removeEventListener("dispose",P),T(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function x(C){const M=C.target;M.removeEventListener("dispose",x),U(M)}function T(C){const M=i.get(C);if(M.__webglInit===void 0)return;const G=C.source,Y=m.get(G);if(Y){const J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&L(C),Object.keys(Y).length===0&&m.delete(G)}i.remove(C)}function L(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const G=C.source,Y=m.get(G);delete Y[M.__cacheKey],o.memory.textures--}function U(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)n.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else n.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[Y]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=C.textures;for(let Y=0,J=G.length;Y<J;Y++){const dt=i.get(G[Y]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),o.memory.textures--),i.remove(G[Y])}i.remove(C)}let k=0;function H(){k=0}function O(){return k}function z(C){k=C}function Z(){const C=k;return C>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,C}function V(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function at(C,M){const G=i.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const Y=C.image;if(Y===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(G,C,M);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function K(C,M){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){_t(G,C,M);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function it(C,M){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){_t(G,C,M);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function et(C,M){const G=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&G.__version!==C.version){Vt(G,C,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}const Ut={[$i]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[yl]:n.MIRRORED_REPEAT},Ct={[Qe]:n.NEAREST,[c0]:n.NEAREST_MIPMAP_NEAREST,[Mr]:n.NEAREST_MIPMAP_LINEAR,[Ce]:n.LINEAR,[Qo]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},pe={[d0]:n.NEVER,[v0]:n.ALWAYS,[p0]:n.LESS,[Ec]:n.LEQUAL,[m0]:n.EQUAL,[Tc]:n.GEQUAL,[g0]:n.GREATER,[_0]:n.NOTEQUAL};function se(C,M){if(M.type===$n&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ce||M.magFilter===Qo||M.magFilter===Mr||M.magFilter===Pi||M.minFilter===Ce||M.minFilter===Qo||M.minFilter===Mr||M.minFilter===Pi)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Ut[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Ut[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Ut[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Ct[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Ct[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,pe[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qe||M.minFilter!==Mr&&M.minFilter!==Pi||M.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function le(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",P));const Y=M.source;let J=m.get(Y);J===void 0&&(J={},m.set(Y,J));const dt=V(M);if(dt!==C.__cacheKey){J[dt]===void 0&&(J[dt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[dt].usedTimes++;const mt=J[C.__cacheKey];mt!==void 0&&(J[C.__cacheKey].usedTimes--,mt.usedTimes===0&&L(M)),C.__cacheKey=dt,C.__webglTexture=J[dt].texture}return G}function Q(C,M,G){return Math.floor(Math.floor(C/G)/M)}function st(C,M,G,Y){const dt=C.updateRanges;if(dt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,G,Y,M.data);else{dt.sort((kt,yt)=>kt.start-yt.start);let mt=0;for(let kt=1;kt<dt.length;kt++){const yt=dt[mt],xt=dt[kt],zt=yt.start+yt.count,qt=Q(xt.start,M.width,4),Qt=Q(yt.start,M.width,4);xt.start<=zt+1&&qt===Qt&&Q(xt.start+xt.count-1,M.width,4)===qt?yt.count=Math.max(yt.count,xt.start+xt.count-yt.start):(++mt,dt[mt]=xt)}dt.length=mt+1;const j=e.getParameter(n.UNPACK_ROW_LENGTH),ot=e.getParameter(n.UNPACK_SKIP_PIXELS),vt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let kt=0,yt=dt.length;kt<yt;kt++){const xt=dt[kt],zt=Math.floor(xt.start/4),qt=Math.ceil(xt.count/4),Qt=zt%M.width,B=Math.floor(zt/M.width),Mt=qt,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(n.UNPACK_SKIP_ROWS,B),e.texSubImage2D(n.TEXTURE_2D,0,Qt,B,Mt,nt,G,Y,M.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(n.UNPACK_SKIP_ROWS,vt)}}function _t(C,M,G){let Y=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=n.TEXTURE_3D);const J=le(C,M),dt=M.source;e.bindTexture(Y,C.__webglTexture,n.TEXTURE0+G);const mt=i.get(dt);if(dt.version!==mt.__version||J===!0){if(e.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const nt=he.getPrimaries(he.workingColorSpace),St=M.colorSpace===Ri?null:he.getPrimaries(M.colorSpace),Rt=M.colorSpace===Ri||nt===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let ot=v(M.image,!1,s.maxTextureSize);ot=ce(M,ot);const vt=r.convert(M.format,M.colorSpace),kt=r.convert(M.type);let yt=y(M.internalFormat,vt,kt,M.normalized,M.colorSpace,M.isVideoTexture);se(Y,M);let xt;const zt=M.mipmaps,qt=M.isVideoTexture!==!0,Qt=mt.__version===void 0||J===!0,B=dt.dataReady,Mt=w(M,ot);if(M.isDepthTexture)yt=R(M.format===Wi,M.type),Qt&&(qt?e.texStorage2D(n.TEXTURE_2D,1,yt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,yt,ot.width,ot.height,0,vt,kt,null));else if(M.isDataTexture)if(zt.length>0){qt&&Qt&&e.texStorage2D(n.TEXTURE_2D,Mt,yt,zt[0].width,zt[0].height);for(let nt=0,St=zt.length;nt<St;nt++)xt=zt[nt],qt?B&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,xt.width,xt.height,vt,kt,xt.data):e.texImage2D(n.TEXTURE_2D,nt,yt,xt.width,xt.height,0,vt,kt,xt.data);M.generateMipmaps=!1}else qt?(Qt&&e.texStorage2D(n.TEXTURE_2D,Mt,yt,ot.width,ot.height),B&&st(M,ot,vt,kt)):e.texImage2D(n.TEXTURE_2D,0,yt,ot.width,ot.height,0,vt,kt,ot.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qt&&Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,yt,zt[0].width,zt[0].height,ot.depth);for(let nt=0,St=zt.length;nt<St;nt++)if(xt=zt[nt],M.format!==wn)if(vt!==null)if(qt){if(B)if(M.layerUpdates.size>0){const Rt=Oh(xt.width,xt.height,M.format,M.type);for(const lt of M.layerUpdates){const Gt=xt.data.subarray(lt*Rt/xt.data.BYTES_PER_ELEMENT,(lt+1)*Rt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,lt,xt.width,xt.height,1,vt,Gt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,ot.depth,vt,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,yt,xt.width,xt.height,ot.depth,0,xt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,ot.depth,vt,kt,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,yt,xt.width,xt.height,ot.depth,0,vt,kt,xt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{qt&&Qt&&e.texStorage2D(n.TEXTURE_2D,Mt,yt,zt[0].width,zt[0].height);for(let nt=0,St=zt.length;nt<St;nt++)xt=zt[nt],M.format!==wn?vt!==null?qt?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,yt,xt.width,xt.height,0,xt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?B&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,xt.width,xt.height,vt,kt,xt.data):e.texImage2D(n.TEXTURE_2D,nt,yt,xt.width,xt.height,0,vt,kt,xt.data)}else if(M.isDataArrayTexture)if(qt){if(Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,yt,ot.width,ot.height,ot.depth),B)if(M.layerUpdates.size>0){const nt=Oh(ot.width,ot.height,M.format,M.type);for(const St of M.layerUpdates){const Rt=ot.data.subarray(St*nt/ot.data.BYTES_PER_ELEMENT,(St+1)*nt/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,St,ot.width,ot.height,1,vt,kt,Rt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,vt,kt,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,ot.width,ot.height,ot.depth,0,vt,kt,ot.data);else if(M.isData3DTexture)qt?(Qt&&e.texStorage3D(n.TEXTURE_3D,Mt,yt,ot.width,ot.height,ot.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,vt,kt,ot.data)):e.texImage3D(n.TEXTURE_3D,0,yt,ot.width,ot.height,ot.depth,0,vt,kt,ot.data);else if(M.isFramebufferTexture){if(Qt)if(qt)e.texStorage2D(n.TEXTURE_2D,Mt,yt,ot.width,ot.height);else{let nt=ot.width,St=ot.height;for(let Rt=0;Rt<Mt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,yt,nt,St,0,vt,kt,null),nt>>=1,St>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),ot.parentNode!==nt){nt.appendChild(ot),u.add(M),nt.onpaint=St=>{const Rt=St.changedElements;for(const lt of u)Rt.includes(lt.image)&&(lt.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ot);else{const Rt=n.RGBA,lt=n.RGBA,Gt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Rt,lt,Gt,ot)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(zt.length>0){if(qt&&Qt){const nt=jt(zt[0]);e.texStorage2D(n.TEXTURE_2D,Mt,yt,nt.width,nt.height)}for(let nt=0,St=zt.length;nt<St;nt++)xt=zt[nt],qt?B&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,vt,kt,xt):e.texImage2D(n.TEXTURE_2D,nt,yt,vt,kt,xt);M.generateMipmaps=!1}else if(qt){if(Qt){const nt=jt(ot);e.texStorage2D(n.TEXTURE_2D,Mt,yt,nt.width,nt.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,kt,ot)}else e.texImage2D(n.TEXTURE_2D,0,yt,vt,kt,ot);_(M)&&E(Y),mt.__version=dt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Vt(C,M,G){if(M.image.length!==6)return;const Y=le(C,M),J=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);const dt=i.get(J);if(J.version!==dt.__version||Y===!0){e.activeTexture(n.TEXTURE0+G);const mt=he.getPrimaries(he.workingColorSpace),j=M.colorSpace===Ri?null:he.getPrimaries(M.colorSpace),ot=M.colorSpace===Ri||mt===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const vt=M.isCompressedTexture||M.image[0].isCompressedTexture,kt=M.image[0]&&M.image[0].isDataTexture,yt=[];for(let lt=0;lt<6;lt++)!vt&&!kt?yt[lt]=v(M.image[lt],!0,s.maxCubemapSize):yt[lt]=kt?M.image[lt].image:M.image[lt],yt[lt]=ce(M,yt[lt]);const xt=yt[0],zt=r.convert(M.format,M.colorSpace),qt=r.convert(M.type),Qt=y(M.internalFormat,zt,qt,M.normalized,M.colorSpace),B=M.isVideoTexture!==!0,Mt=dt.__version===void 0||Y===!0,nt=J.dataReady;let St=w(M,xt);se(n.TEXTURE_CUBE_MAP,M);let Rt;if(vt){B&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,Qt,xt.width,xt.height);for(let lt=0;lt<6;lt++){Rt=yt[lt].mipmaps;for(let Gt=0;Gt<Rt.length;Gt++){const Ft=Rt[Gt];M.format!==wn?zt!==null?B?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt,0,0,Ft.width,Ft.height,zt,Ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt,Qt,Ft.width,Ft.height,0,Ft.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt,0,0,Ft.width,Ft.height,zt,qt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt,Qt,Ft.width,Ft.height,0,zt,qt,Ft.data)}}}else{if(Rt=M.mipmaps,B&&Mt){Rt.length>0&&St++;const lt=jt(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,Qt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(kt){B?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,yt[lt].width,yt[lt].height,zt,qt,yt[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Qt,yt[lt].width,yt[lt].height,0,zt,qt,yt[lt].data);for(let Gt=0;Gt<Rt.length;Gt++){const Pe=Rt[Gt].image[lt].image;B?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt+1,0,0,Pe.width,Pe.height,zt,qt,Pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt+1,Qt,Pe.width,Pe.height,0,zt,qt,Pe.data)}}else{B?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,zt,qt,yt[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Qt,zt,qt,yt[lt]);for(let Gt=0;Gt<Rt.length;Gt++){const Ft=Rt[Gt];B?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt+1,0,0,zt,qt,Ft.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt+1,Qt,zt,qt,Ft.image[lt])}}}_(M)&&E(n.TEXTURE_CUBE_MAP),dt.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function At(C,M,G,Y,J,dt){const mt=r.convert(G.format,G.colorSpace),j=r.convert(G.type),ot=y(G.internalFormat,mt,j,G.normalized,G.colorSpace),vt=i.get(M),kt=i.get(G);if(kt.__renderTarget=M,!vt.__hasExternalTextures){const yt=Math.max(1,M.width>>dt),xt=Math.max(1,M.height>>dt);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,dt,ot,yt,xt,M.depth,0,mt,j,null):e.texImage2D(J,dt,ot,yt,xt,0,mt,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Bt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,J,kt.__webglTexture,0,Pt(M)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,J,kt.__webglTexture,dt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(C,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){const Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,dt=R(M.stencilBuffer,J),mt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Bt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(M),dt,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(M),dt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,dt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,C)}else{const Y=M.textures;for(let J=0;J<Y.length;J++){const dt=Y[J],mt=r.convert(dt.format,dt.colorSpace),j=r.convert(dt.type),ot=y(dt.internalFormat,mt,j,dt.normalized,dt.colorSpace);Bt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(M),ot,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(M),ot,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ot,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(C,M,G){const Y=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(M.depthTexture);if(J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,M.depthTexture.addEventListener("dispose",P)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),se(n.TEXTURE_CUBE_MAP,M.depthTexture);const vt=r.convert(M.depthTexture.format),kt=r.convert(M.depthTexture.type);let yt;M.depthTexture.format===pi?yt=n.DEPTH_COMPONENT24:M.depthTexture.format===Wi&&(yt=n.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,yt,M.width,M.height,0,vt,kt,null)}}else at(M.depthTexture,0);const dt=J.__webglTexture,mt=Pt(M),j=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,ot=M.depthTexture.format===Wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===pi)Bt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,j,dt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,ot,j,dt,0);else if(M.depthTexture.format===Wi)Bt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,j,dt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,ot,j,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(C){const M=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)me(M.__webglFramebuffer[Y],C,Y);else{const Y=C.texture.mipmaps;Y&&Y.length>0?me(M.__webglFramebuffer[0],C,0):me(M.__webglFramebuffer,C,0)}else if(G){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=n.createRenderbuffer(),Wt(M.__webglDepthbuffer[Y],C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=M.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,dt)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Wt(M.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,dt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(C,M,G){const Y=i.get(C);M!==void 0&&At(Y.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&rt(C)}function ft(C){const M=C.texture,G=i.get(C),Y=i.get(M);C.addEventListener("dispose",x);const J=C.textures,dt=C.isWebGLCubeRenderTarget===!0,mt=J.length>1;if(mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=M.version,o.memory.textures++),dt){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let ot=0;ot<M.mipmaps.length;ot++)G.__webglFramebuffer[j][ot]=n.createFramebuffer()}else G.__webglFramebuffer[j]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<M.mipmaps.length;j++)G.__webglFramebuffer[j]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(mt)for(let j=0,ot=J.length;j<ot;j++){const vt=i.get(J[j]);vt.__webglTexture===void 0&&(vt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Bt(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){const ot=J[j];G.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[j]);const vt=r.convert(ot.format,ot.colorSpace),kt=r.convert(ot.type),yt=y(ot.internalFormat,vt,kt,ot.normalized,ot.colorSpace,C.isXRRenderTarget===!0),xt=Pt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,yt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,G.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Wt(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(dt){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),se(n.TEXTURE_CUBE_MAP,M);for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0)for(let ot=0;ot<M.mipmaps.length;ot++)At(G.__webglFramebuffer[j][ot],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot);else At(G.__webglFramebuffer[j],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);_(M)&&E(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let j=0,ot=J.length;j<ot;j++){const vt=J[j],kt=i.get(vt);let yt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,kt.__webglTexture),se(yt,vt),At(G.__webglFramebuffer,C,vt,n.COLOR_ATTACHMENT0+j,yt,0),_(vt)&&E(yt)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,Y.__webglTexture),se(j,M),M.mipmaps&&M.mipmaps.length>0)for(let ot=0;ot<M.mipmaps.length;ot++)At(G.__webglFramebuffer[ot],C,M,n.COLOR_ATTACHMENT0,j,ot);else At(G.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,j,0);_(M)&&E(j),e.unbindTexture()}C.depthBuffer&&rt(C)}function W(C){const M=C.textures;for(let G=0,Y=M.length;G<Y;G++){const J=M[G];if(_(J)){const dt=A(C),mt=i.get(J).__webglTexture;e.bindTexture(dt,mt),E(dt),e.unbindTexture()}}}const tt=[],pt=[];function ht(C){if(C.samples>0){if(Bt(C)===!1){const M=C.textures,G=C.width,Y=C.height;let J=n.COLOR_BUFFER_BIT;const dt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(C),j=M.length>1;if(j)for(let vt=0;vt<M.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);const ot=C.texture.mipmaps;ot&&ot.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);const kt=i.get(M[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,kt,0)}n.blitFramebuffer(0,0,G,Y,0,0,G,Y,J,n.NEAREST),l===!0&&(tt.length=0,pt.length=0,tt.push(n.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(tt.push(dt),pt.push(dt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,pt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let vt=0;vt<M.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);const kt=i.get(M[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,kt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Pt(C){return Math.min(s.maxSamples,C.samples)}function Bt(C){const M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function N(C){const M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function ce(C,M){const G=C.colorSpace,Y=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==bo&&G!==Ri&&(he.getTransfer(G)===ye?(Y!==wn||J!==Je)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):de("WebGLTextures: Unsupported texture color space:",G)),M}function jt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=H,this.getTextureUnits=O,this.setTextureUnits=z,this.setTexture2D=at,this.setTexture2DArray=K,this.setTexture3D=it,this.setTextureCube=et,this.rebindTextures=ct,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Tx(n,t){function e(i,s=Ri){let r;const o=he.getTransfer(s);if(i===Je)return n.UNSIGNED_BYTE;if(i===Mc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===uu)return n.BYTE;if(i===du)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===xc)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===Qn)return n.HALF_FLOAT;if(i===gu)return n.ALPHA;if(i===_u)return n.RGB;if(i===wn)return n.RGBA;if(i===pi)return n.DEPTH_COMPONENT;if(i===Wi)return n.DEPTH_STENCIL;if(i===mr)return n.RED;if(i===yc)return n.RED_INTEGER;if(i===Zi)return n.RG;if(i===bc)return n.RG_INTEGER;if(i===wc)return n.RGBA_INTEGER;if(i===co||i===ho||i===fo||i===uo)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bl||i===wl||i===El||i===Tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Al||i===Rl||i===Cl||i===Pl||i===Ll||i===So||i===Il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Al||i===Rl)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pl)return r.COMPRESSED_R11_EAC;if(i===Ll)return r.COMPRESSED_SIGNED_R11_EAC;if(i===So)return r.COMPRESSED_RG11_EAC;if(i===Il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dl||i===Nl||i===Ul||i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Gl||i===Hl||i===Vl||i===Wl||i===Xl||i===ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ul)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ql)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===$l||i===Zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Yl)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kl||i===Jl||i===yo||i===Ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new wu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new An({vertexShader:Ax,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new jn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Px extends ji{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const S=typeof XRWebGLBinding<"u",v=new Cx,_={},E=e.getContextAttributes();let A=null,y=null;const R=[],w=[],P=new gt;let x=null,T=null;const L=new bn;L.viewport=new Ue;const U=new bn;U.viewport=new Ue;const k=[L,U],H=new Op;let O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let st=R[Q];return st===void 0&&(st=new aa,R[Q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Q){let st=R[Q];return st===void 0&&(st=new aa,R[Q]=st),st.getGripSpace()},this.getHand=function(Q){let st=R[Q];return st===void 0&&(st=new aa,R[Q]=st),st.getHandSpace()};function Z(Q){const st=w.indexOf(Q.inputSource);if(st===-1)return;const _t=R[st];_t!==void 0&&(_t.update(Q.inputSource,Q.frame,c||o),_t.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",at);for(let Q=0;Q<R.length;Q++){const st=w[Q];st!==null&&(w[Q]=null,R[Q].disconnect(st))}O=null,z=null,v.reset();for(const Q in _)delete _[Q];if(t.setRenderTarget(A),m=null,f=null,u=null,s=null,y=null,le.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(P.width,P.height,!1),T!==null){const Q=T.camera;Q.fov=T.fov,Q.zoom=T.zoom,Q.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",at),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Vt=null,At=null;E.depth&&(At=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=E.stencil?Wi:pi,Vt=E.stencil?ar:Jn);const Wt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new kn(f.textureWidth,f.textureHeight,{format:wn,type:Je,depthTexture:new cr(f.textureWidth,f.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const _t={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new kn(m.framebufferWidth,m.framebufferHeight,{format:wn,type:Je,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function at(Q){for(let st=0;st<Q.removed.length;st++){const _t=Q.removed[st],Vt=w.indexOf(_t);Vt>=0&&(w[Vt]=null,R[Vt].disconnect(_t))}for(let st=0;st<Q.added.length;st++){const _t=Q.added[st];let Vt=w.indexOf(_t);if(Vt===-1){for(let Wt=0;Wt<R.length;Wt++)if(Wt>=w.length){w.push(_t),Vt=Wt;break}else if(w[Wt]===null){w[Wt]=_t,Vt=Wt;break}if(Vt===-1)break}const At=R[Vt];At&&At.connect(_t)}}const K=new I,it=new I;function et(Q,st,_t){K.setFromMatrixPosition(st.matrixWorld),it.setFromMatrixPosition(_t.matrixWorld);const Vt=K.distanceTo(it),At=st.projectionMatrix.elements,Wt=_t.projectionMatrix.elements,me=At[14]/(At[10]-1),rt=At[14]/(At[10]+1),ct=(At[9]+1)/At[5],ft=(At[9]-1)/At[5],W=(At[8]-1)/At[0],tt=(Wt[8]+1)/Wt[0],pt=me*W,ht=me*tt,Pt=Vt/(-W+tt),Bt=Pt*-W;if(st.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Bt),Q.translateZ(Pt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),At[10]===-1)Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const N=me+Pt,ce=rt+Pt,jt=pt-Bt,C=ht+(Vt-Bt),M=ct*rt/ce*N,G=ft*rt/ce*N;Q.projectionMatrix.makePerspective(jt,C,M,G,N,ce),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ut(Q,st){st===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(st.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let st=Q.near,_t=Q.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(_t=v.depthFar)),H.near=U.near=L.near=st,H.far=U.far=L.far=_t,(O!==H.near||z!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),O=H.near,z=H.far),H.layers.mask=Q.layers.mask|6,L.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;const Vt=Q.parent,At=H.cameras;Ut(H,Vt);for(let Wt=0;Wt<At.length;Wt++)Ut(At[Wt],Vt);At.length===2?et(H,L,U):H.projectionMatrix.copy(L.projectionMatrix),T===null&&Q.isPerspectiveCamera&&(T={camera:Q,fov:Q.fov,zoom:Q.zoom}),Ct(Q,H,Vt)};function Ct(Q,st,_t){_t===null?Q.matrix.copy(st.matrixWorld):(Q.matrix.copy(_t.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(st.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=tc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(H)},this.getCameraTexture=function(Q){return _[Q]};let pe=null;function se(Q,st){if(h=st.getViewerPose(c||o),g=st,h!==null){const _t=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let Vt=!1;_t.length!==H.cameras.length&&(H.cameras.length=0,Vt=!0);for(let rt=0;rt<_t.length;rt++){const ct=_t[rt];let ft=null;if(m!==null)ft=m.getViewport(ct);else{const tt=u.getViewSubImage(f,ct);ft=tt.viewport,rt===0&&(t.setRenderTargetTextures(y,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(y))}let W=k[rt];W===void 0&&(W=new bn,W.layers.enable(rt),W.viewport=new Ue,k[rt]=W),W.matrix.fromArray(ct.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(ct.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(ft.x,ft.y,ft.width,ft.height),rt===0&&(H.matrix.copy(W.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Vt===!0&&H.cameras.push(W)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=i.getBinding();const rt=u.getDepthInformation(_t[0]);rt&&rt.isValid&&rt.texture&&v.init(rt,s.renderState)}if(At&&At.includes("camera-access")&&S){t.state.unbindTexture(),u=i.getBinding();for(let rt=0;rt<_t.length;rt++){const ct=_t[rt].camera;if(ct){let ft=_[ct];ft||(ft=new wu,_[ct]=ft);const W=u.getCameraImage(ct);ft.sourceTexture=W}}}}for(let _t=0;_t<R.length;_t++){const Vt=w[_t],At=R[_t];Vt!==null&&At!==void 0&&At.update(Vt,st,c||o)}pe&&pe(Q,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),g=null}const le=new ku;le.setAnimationLoop(se),this.setAnimationLoop=function(Q){pe=Q},this.dispose=function(){}}}const Lx=new Ie,qu=new Zt;qu.set(-1,0,0,0,1,0,0,0,1);function Ix(n,t){function e(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function i(v,_){_.color.getRGB(v.fogColor.value,Uu(n)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function s(v,_,E,A,y){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(v,_):_.isMeshLambertMaterial?(r(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(v,_),u(v,_)):_.isMeshPhongMaterial?(r(v,_),h(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(v,_),f(v,_),_.isMeshPhysicalMaterial&&m(v,_,y)):_.isMeshMatcapMaterial?(r(v,_),g(v,_)):_.isMeshDepthMaterial?r(v,_):_.isMeshDistanceMaterial?(r(v,_),S(v,_)):_.isMeshNormalMaterial?r(v,_):_.isLineBasicMaterial?(o(v,_),_.isLineDashedMaterial&&a(v,_)):_.isPointsMaterial?l(v,_,E,A):_.isSpriteMaterial?c(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,e(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===on&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,e(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===on&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,e(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,e(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const E=t.get(_),A=E.envMap,y=E.envMapRotation;A&&(v.envMap.value=A,v.envMapRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(qu),v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,v.aoMapTransform))}function o(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform))}function a(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function l(v,_,E,A){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*E,v.scale.value=A*.5,_.map&&(v.map.value=_.map,e(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function c(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function h(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function u(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function f(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function m(v,_,E){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===on&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.retroreflectivity>0&&(v.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=E.texture,v.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,_){_.matcap&&(v.matcap.value=_.matcap)}function S(v,_){const E=t.get(_).light;v.referencePosition.value.setFromMatrixPosition(E.matrixWorld),v.nearDistance.value=E.shadow.camera.near,v.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Dx(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,R){const w=R.program;i.uniformBlockBinding(y,w)}function c(y,R){let w=s[y.id];w===void 0&&(v(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",E));const P=R.program;i.updateUBOMapping(y,P);const x=t.render.frame;r[y.id]!==x&&(f(y),r[y.id]=x)}function h(y){const R=u();y.__bindingPointIndex=R;const w=n.createBuffer(),P=y.__size,x=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,P,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,w),w}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return de("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const R=s[y.id],w=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let x=0,T=w.length;x<T;x++){const L=w[x];if(Array.isArray(L))for(let U=0,k=L.length;U<k;U++)m(L[U],x,U,P);else m(L,x,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,R,w,P){if(S(y,R,w,P)===!0){const x=y.__offset,T=y.value;if(Array.isArray(T)){let L=0;for(let U=0;U<T.length;U++){const k=T[U],H=_(k);g(k,y.__data,L),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(L+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,y.__data)}}function g(y,R,w){typeof y=="number"||typeof y=="boolean"?R[0]=y:y.isMatrix3?(R[0]=y.elements[0],R[1]=y.elements[1],R[2]=y.elements[2],R[3]=0,R[4]=y.elements[3],R[5]=y.elements[4],R[6]=y.elements[5],R[7]=0,R[8]=y.elements[6],R[9]=y.elements[7],R[10]=y.elements[8],R[11]=0):ArrayBuffer.isView(y)?R.set(new y.constructor(y.buffer,y.byteOffset,R.length)):y.toArray(R,w)}function S(y,R,w,P){const x=y.value,T=R+"_"+w;if(P[T]===void 0)return typeof x=="number"||typeof x=="boolean"?P[T]=x:ArrayBuffer.isView(x)?P[T]=x.slice():P[T]=x.clone(),!0;{const L=P[T];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return P[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function v(y){const R=y.uniforms;let w=0;const P=16;for(let T=0,L=R.length;T<L;T++){const U=Array.isArray(R[T])?R[T]:[R[T]];for(let k=0,H=U.length;k<H;k++){const O=U[k],z=Array.isArray(O.value)?O.value:[O.value];for(let Z=0,V=z.length;Z<V;Z++){const at=z[Z],K=_(at),it=w%P,et=it%K.boundary,Ut=it+et;w+=et,Ut!==0&&P-Ut<K.storage&&(w+=P-Ut),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=w,w+=K.storage}}}const x=w%P;return x>0&&(w+=P-x),y.__size=w,y.__cache={},this}function _(y){const R={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(R.boundary=4,R.storage=4):y.isVector2?(R.boundary=8,R.storage=8):y.isVector3||y.isColor?(R.boundary=16,R.storage=12):y.isVector4?(R.boundary=16,R.storage=16):y.isMatrix3?(R.boundary=48,R.storage=48):y.isMatrix4?(R.boundary=64,R.storage=64):y.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(R.boundary=16,R.storage=y.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",y),R}function E(y){const R=y.target;R.removeEventListener("dispose",E);const w=o.indexOf(R.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function A(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:A}}const Nx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xn=null;function Ux(){return Xn===null&&(Xn=new _r(Nx,16,16,Zi,Qn),Xn.name="DFG_LUT",Xn.minFilter=Ce,Xn.magFilter=Ce,Xn.wrapS=Yn,Xn.wrapT=Yn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}class Fx{constructor(t={}){const{canvas:e=S0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Je}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const S=m,v=new Set([wc,bc,yc]),_=new Set([Je,Jn,or,ar,Mc,Sc]),E=new Uint32Array(4),A=new Int32Array(4),y=new I;let R=null,w=null;const P=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,k=null,H=null,O=null,z=null;this._outputColorSpace=Ne;let Z=0,V=0,at=null,K=-1,it=null;const et=new Ue,Ut=new Ue;let Ct=null;const pe=new ut(0);let se=0,le=e.width,Q=e.height,st=1,_t=null,Vt=null;const At=new Ue(0,0,le,Q),Wt=new Ue(0,0,le,Q);let me=!1;const rt=new Lc;let ct=!1,ft=!1;const W=new Ie,tt=new I,pt=new Ue,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Bt(){return at===null?st:1}let N=i;function ce(b,F){return e.getContext(b,F)}let jt,C,M,G,Y,J,dt,mt,j,ot,vt,kt,yt,xt,zt,qt,Qt,B,Mt,nt,St,Rt,lt;try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_c}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Cn,!1),N===null){const F="webgl2";if(N=ce(F,b),N===null)throw ce(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(b){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),de("WebGLRenderer: "+b.message),b}function Gt(){jt=new U_(N),jt.init(),St=new Tx(N,jt),C=new E_(N,jt,t,St),M=new wx(N,jt),C.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),H=N.createFramebuffer(),O=N.createFramebuffer(),z=N.createFramebuffer(),G=new B_(N),Y=new hx,J=new Ex(N,jt,M,Y,C,St,G),dt=new N_(L),mt=new zp(N),Rt=new b_(N,mt),j=new F_(N,mt,G,Rt),ot=new z_(N,j,mt,Rt,G),B=new k_(N,C,J),zt=new T_(Y),vt=new cx(L,dt,jt,C,Rt,zt),kt=new Ix(L,Y),yt=new ux,xt=new vx(jt),Qt=new y_(L,dt,M,ot,g,l),qt=new bx(L,ot,C),lt=new Dx(N,G,C,M),Mt=new w_(N,jt,G),nt=new O_(N,jt,G),G.programs=vt.programs,L.capabilities=C,L.extensions=jt,L.properties=Y,L.renderLists=yt,L.shadowMap=qt,L.state=M,L.info=G}S!==Je&&(T=new H_(S,e.width,e.height,a,s,r));const Ft=new Px(L,N);this.xr=Ft,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=jt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=jt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(b){b!==void 0&&(st=b,this.setSize(le,Q,!1))},this.getSize=function(b){return b.set(le,Q)},this.setSize=function(b,F,$=!0){if(Ft.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}le=b,Q=F,e.width=Math.floor(b*st),e.height=Math.floor(F*st),$===!0&&(e.style.width=b+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(le*st,Q*st).floor()},this.setDrawingBufferSize=function(b,F,$){le=b,Q=F,st=$,e.width=Math.floor(b*$),e.height=Math.floor(F*$),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(S===Je){de("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(et)},this.getViewport=function(b){return b.copy(At)},this.setViewport=function(b,F,$,X){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,F,$,X),M.viewport(et.copy(At).multiplyScalar(st).round())},this.getScissor=function(b){return b.copy(Wt)},this.setScissor=function(b,F,$,X){b.isVector4?Wt.set(b.x,b.y,b.z,b.w):Wt.set(b,F,$,X),M.scissor(Ut.copy(Wt).multiplyScalar(st).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(b){M.setScissorTest(me=b)},this.setOpaqueSort=function(b){_t=b},this.setTransparentSort=function(b){Vt=b},this.getClearColor=function(b){return b.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,$=!0){let X=0;if(b){let q=!1;if(at!==null){const Et=at.texture.format;q=v.has(Et)}if(q){const Et=at.texture.type,It=_.has(Et),wt=Qt.getClearColor(),Dt=Qt.getClearAlpha(),Ot=wt.r,te=wt.g,re=wt.b;It?(E[0]=Ot,E[1]=te,E[2]=re,E[3]=Dt,N.clearBufferuiv(N.COLOR,0,E)):(A[0]=Ot,A[1]=te,A[2]=re,A[3]=Dt,N.clearBufferiv(N.COLOR,0,A))}else X|=N.COLOR_BUFFER_BIT}F&&(X|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),k=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),Qt.dispose(),yt.dispose(),xt.dispose(),Y.dispose(),dt.dispose(),ot.dispose(),Rt.dispose(),lt.dispose(),vt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Yc),Ft.removeEventListener("sessionend",$c),Fi.stop()};function Pe(b){b.preventDefault(),ah("WebGLRenderer: Context Lost."),U=!0}function xe(){ah("WebGLRenderer: Context Restored."),U=!1;const b=G.autoReset,F=qt.enabled,$=qt.autoUpdate,X=qt.needsUpdate,q=qt.type;Gt(),G.autoReset=b,qt.enabled=F,qt.autoUpdate=$,qt.needsUpdate=X,qt.type=q}function Cn(b){de("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Hn(b){const F=b.target;F.removeEventListener("dispose",Hn),Dd(F)}function Dd(b){Nd(b),Y.remove(b)}function Nd(b){const F=Y.get(b).programs;F!==void 0&&(F.forEach(function($){vt.releaseProgram($)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,$,X,q,Et){F===null&&(F=ht);const It=q.isMesh&&q.matrixWorld.determinantAffine()<0,wt=Od(b,F,$,X,q);M.setMaterial(X,It);let Dt=$.index,Ot=1;if(X.wireframe===!0){if(Dt=j.getWireframeAttribute($),Dt===void 0)return;Ot=2}const te=$.drawRange,re=$.attributes.position;let Nt=te.start*Ot,Me=(te.start+te.count)*Ot;Et!==null&&(Nt=Math.max(Nt,Et.start*Ot),Me=Math.min(Me,(Et.start+Et.count)*Ot)),Dt!==null?(Nt=Math.max(Nt,0),Me=Math.min(Me,Dt.count)):re!=null&&(Nt=Math.max(Nt,0),Me=Math.min(Me,re.count));const ke=Me-Nt;if(ke<0||ke===1/0)return;Rt.setup(q,X,wt,$,Dt);let De,Ee=Mt;if(Dt!==null&&(De=mt.get(Dt),Ee=nt,Ee.setIndex(De)),q.isMesh)X.wireframe===!0?(M.setLineWidth(X.wireframeLinewidth*Bt()),Ee.setMode(N.LINES)):Ee.setMode(N.TRIANGLES);else if(q.isLine){let je=X.linewidth;je===void 0&&(je=1),M.setLineWidth(je*Bt()),q.isLineSegments?Ee.setMode(N.LINES):q.isLineLoop?Ee.setMode(N.LINE_LOOP):Ee.setMode(N.LINE_STRIP)}else q.isPoints?Ee.setMode(N.POINTS):q.isSprite&&Ee.setMode(N.TRIANGLES);if(q.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))Ee.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const je=q._multiDrawStarts,Lt=q._multiDrawCounts,ln=q._multiDrawCount,ge=Dt?mt.get(Dt).bytesPerElement:1,Sn=Y.get(X).currentProgram.getUniforms();for(let Vn=0;Vn<ln;Vn++)Sn.setValue(N,"_gl_DrawID",Vn),Ee.render(je[Vn]/ge,Lt[Vn])}else if(q.isInstancedMesh)Ee.renderInstances(Nt,ke,q.count);else if($.isInstancedBufferGeometry){const je=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Lt=Math.min($.instanceCount,je);Ee.renderInstances(Nt,ke,Lt)}else Ee.render(Nt,ke)};function qc(b,F,$,X){k!==null&&b.isNodeMaterial&&k.setObject(X,b),ct===!0&&zt.setState(b,$,!1),b.transparent===!0&&b.side===li&&b.forceSinglePass===!1?(b.side=on,b.needsUpdate=!0,xr(b,F,X),b.side=qi,b.needsUpdate=!0,xr(b,F,X),b.side=li):xr(b,F,X)}this.compile=function(b,F,$=null){$===null&&($=b),k!==null&&k.renderStart(b,F,$),w=xt.get($),w.init(F),x.push(w),$.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),b!==$&&b.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),k!==null&&k.updateLights(w.state.lightsArray),ft=this.localClippingEnabled,ct=zt.init(this.clippingPlanes,ft),ct===!0&&zt.setGlobalState(this.clippingPlanes,F),k!==null&&qt.render(w.state.shadowsArray,$,F);const X=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Et=q.material;if(Et)if(Array.isArray(Et))for(let It=0;It<Et.length;It++){const wt=Et[It];qc(wt,$,F,q),X.add(wt)}else qc(Et,$,F,q),X.add(Et)}),w=x.pop(),k!==null&&k.renderEnd(),X},this.compileAsync=function(b,F,$=null){const X=this.compile(b,F,$);return new Promise(q=>{function Et(){if(X.forEach(function(It){const Dt=Y.get(It).currentProgram;(Dt===void 0||Dt.isReady())&&X.delete(It)}),X.size===0){q(b);return}setTimeout(Et,10)}jt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Zo=null;function Ud(b){Zo&&Zo(b)}function Yc(){Fi.stop()}function $c(){Fi.start()}const Fi=new ku;Fi.setAnimationLoop(Ud),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(b){Zo=b,Ft.setAnimationLoop(b),b===null?Fi.stop():Fi.start()},Ft.addEventListener("sessionstart",Yc),Ft.addEventListener("sessionend",$c),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){de("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;k!==null&&k.renderStart(b,F);const $=Ft.enabled===!0&&Ft.isPresenting===!0,X=T!==null&&(at===null||$)&&T.begin(L,at);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(F),F=Ft.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,F,at),w=xt.get(b,x.length),w.init(F),w.state.textureUnits=J.getTextureUnits(),x.push(w),W.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),rt.setFromProjectionMatrix(W,Zn,F.reversedDepth),ft=this.localClippingEnabled,ct=zt.init(this.clippingPlanes,ft),R=yt.get(b,P.length),R.init(),P.push(R),Ft.enabled===!0&&Ft.isPresenting===!0){const It=L.xr.getDepthSensingMesh();It!==null&&Ko(It,F,-1/0,L.sortObjects)}Ko(b,F,0,L.sortObjects),R.finish(),k!==null&&k.updateLights(w.state.lightsArray),L.sortObjects===!0&&R.sort(_t,Vt),Pt=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,Pt&&Qt.addToRenderList(R,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&zt.beginShadows();const q=w.state.shadowsArray;if(qt.render(q,b,F),ct===!0&&zt.endShadows(),(X&&T.hasRenderPass())===!1){const It=R.opaque,wt=R.transmissive;if(w.setupLights(),F.isArrayCamera){const Dt=F.cameras;if(wt.length>0)for(let Ot=0,te=Dt.length;Ot<te;Ot++){const re=Dt[Ot];Kc(It,wt,b,re)}Pt&&Qt.render(b);for(let Ot=0,te=Dt.length;Ot<te;Ot++){const re=Dt[Ot];Zc(R,b,re,re.viewport)}}else wt.length>0&&Kc(It,wt,b,F),Pt&&Qt.render(b),Zc(R,b,F)}at!==null&&V===0&&(J.updateMultisampleRenderTarget(at),J.updateRenderTargetMipmap(at)),X&&T.end(L),b.isScene===!0&&b.onAfterRender(L,b,F),Rt.resetDefaultState(),K=-1,it=null,x.pop(),x.length>0?(w=x[x.length-1],J.setTextureUnits(w.state.textureUnits),ct===!0&&zt.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?R=P[P.length-1]:R=null,k!==null&&k.renderEnd()};function Ko(b,F,$,X){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(rt)){X&&pt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(W);const It=ot.update(b),wt=b.material;wt.visible&&R.push(b,It,wt,$,pt.z,null,F)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(rt))){const It=ot.update(b),wt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),pt.copy(b.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),pt.copy(It.boundingSphere.center)),pt.applyMatrix4(b.matrixWorld).applyMatrix4(W)),Array.isArray(wt)){const Dt=It.groups;for(let Ot=0,te=Dt.length;Ot<te;Ot++){const re=Dt[Ot],Nt=wt[re.materialIndex];Nt&&Nt.visible&&R.push(b,It,Nt,$,pt.z,re,F)}}else wt.visible&&R.push(b,It,wt,$,pt.z,null,F)}}const Et=b.children;for(let It=0,wt=Et.length;It<wt;It++)Ko(Et[It],F,$,X)}function Zc(b,F,$,X){const{opaque:q,transmissive:Et,transparent:It}=b;w.setupLightsView($),ct===!0&&zt.setGlobalState(L.clippingPlanes,$),X&&M.viewport(et.copy(X)),q.length>0&&vr(q,F,$),Et.length>0&&vr(Et,F,$),It.length>0&&vr(It,F,$),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Kc(b,F,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){const Nt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new kn(1,1,{generateMipmaps:!0,type:Nt?Qn:Je,minFilter:Pi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}const Et=w.state.transmissionRenderTarget[X.id],It=X.viewport||et;Et.setSize(It.z*L.transmissionResolutionScale,It.w*L.transmissionResolutionScale);const wt=L.getRenderTarget(),Dt=L.getActiveCubeFace(),Ot=L.getActiveMipmapLevel();L.setRenderTarget(Et),L.getClearColor(pe),se=L.getClearAlpha(),se<1&&L.setClearColor(16777215,.5),L.clear(),Pt&&Qt.render($);const te=L.toneMapping;L.toneMapping=Kn;const re=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),ct===!0&&zt.setGlobalState(L.clippingPlanes,X),vr(b,$,X),J.updateMultisampleRenderTarget(Et),J.updateRenderTargetMipmap(Et),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Me=0,ke=F.length;Me<ke;Me++){const De=F[Me],{object:Ee,geometry:je,material:Lt,group:ln}=De;if(Lt.side===li&&Ee.layers.test(X.layers)){const ge=Lt.side;Lt.side=on,Lt.needsUpdate=!0,Jc(Ee,$,X,je,Lt,ln),Lt.side=ge,Lt.needsUpdate=!0,Nt=!0}}Nt===!0&&(J.updateMultisampleRenderTarget(Et),J.updateRenderTargetMipmap(Et))}L.setRenderTarget(wt,Dt,Ot),L.setClearColor(pe,se),re!==void 0&&(X.viewport=re),L.toneMapping=te}function vr(b,F,$){const X=F.isScene===!0?F.overrideMaterial:null;for(let q=0,Et=b.length;q<Et;q++){const It=b[q],{object:wt,geometry:Dt,group:Ot}=It;let te=It.material;te.allowOverride===!0&&X!==null&&(te=X),wt.layers.test($.layers)&&Jc(wt,F,$,Dt,te,Ot)}}function Jc(b,F,$,X,q,Et){k!==null&&q.isNodeMaterial&&k.setObject(b,q),b.onBeforeRender(L,F,$,X,q,Et),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(L,F,$,X,b,Et),q.transparent===!0&&q.side===li&&q.forceSinglePass===!1?(q.side=on,q.needsUpdate=!0,L.renderBufferDirect($,F,X,q,b,Et),q.side=qi,q.needsUpdate=!0,L.renderBufferDirect($,F,X,q,b,Et),q.side=li):L.renderBufferDirect($,F,X,q,b,Et),b.onAfterRender(L,F,$,X,q,Et)}function xr(b,F,$){F.isScene!==!0&&(F=ht);const X=Y.get(b),q=w.state.lights,Et=w.state.shadowsArray,It=q.state.version,wt=vt.getParameters(b,q.state,Et,F,$,w.state.lightProbeGridArray),Dt=vt.getProgramCacheKey(wt);let Ot=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;const te=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=dt.get(b.envMap||X.environment,te),X.envMapRotation=X.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ot===void 0&&(b.addEventListener("dispose",Hn),Ot=new Map,X.programs=Ot);let re=Ot.get(Dt);if(re!==void 0){if(X.currentProgram===re&&X.lightsStateVersion===It)return jc(b,wt),re}else wt.uniforms=vt.getUniforms(b),k!==null&&b.isNodeMaterial&&k.build(b,$,wt),b.onBeforeCompile(wt,L),re=vt.acquireProgram(wt,Dt),Ot.set(Dt,re),X.uniforms=wt.uniforms;const Nt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Nt.clippingPlanes=zt.uniform),jc(b,wt),X.needsLights=kd(b),X.lightsStateVersion=It,X.needsLights&&(Nt.ambientLightColor.value=q.state.ambient,Nt.lightProbe.value=q.state.probe,Nt.sunLights.value=q.state.sun,Nt.sunLightShadows.value=q.state.sunShadow,Nt.directionalLights.value=q.state.directional,Nt.directionalLightShadows.value=q.state.directionalShadow,Nt.spotLights.value=q.state.spot,Nt.spotLightShadows.value=q.state.spotShadow,Nt.rectAreaLights.value=q.state.rectArea,Nt.ltc_1.value=q.state.rectAreaLTC1,Nt.ltc_2.value=q.state.rectAreaLTC2,Nt.pointLights.value=q.state.point,Nt.pointLightShadows.value=q.state.pointShadow,Nt.hemisphereLights.value=q.state.hemi,Nt.sunShadowMatrix.value=q.state.sunShadowMatrix,Nt.sunShadowCascade.value=q.state.sunShadowCascade,Nt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Nt.spotLightMatrix.value=q.state.spotLightMatrix,Nt.spotLightMap.value=q.state.spotLightMap,Nt.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=w.state.lightProbeGridArray.length>0,X.currentProgram=re,X.uniformsList=null,re}function Qc(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=po.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function jc(b,F){const $=Y.get(b);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Fd(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let $=0,X=b.length;$<X;$++){const q=b[$];if(q.texture!==null&&q.boundingBox.containsPoint(y))return q}return null}function Od(b,F,$,X,q){F.isScene!==!0&&(F=ht),J.resetTextureUnits();const Et=F.fog,It=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,wt=at===null?L.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:he.workingColorSpace,Dt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ot=dt.get(X.envMap||It,Dt),te=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,re=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Nt=!!$.morphAttributes.position,Me=!!$.morphAttributes.normal,ke=!!$.morphAttributes.color;let De=Kn;X.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(De=L.toneMapping);const Ee=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,je=Ee!==void 0?Ee.length:0,Lt=Y.get(X),ln=w.state.lights;if(ct===!0&&(ft===!0||b!==it)){const Le=b===it&&X.id===K;zt.setState(X,b,Le)}let ge=!1;X.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==ln.state.version||Lt.outputColorSpace!==wt||q.isBatchedMesh&&Lt.batching===!1||!q.isBatchedMesh&&Lt.batching===!0||q.isBatchedMesh&&Lt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Lt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Lt.instancing===!1||!q.isInstancedMesh&&Lt.instancing===!0||q.isSkinnedMesh&&Lt.skinning===!1||!q.isSkinnedMesh&&Lt.skinning===!0||q.isInstancedMesh&&Lt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Lt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Lt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Lt.instancingMorph===!1&&q.morphTexture!==null||Lt.envMap!==Ot||X.fog===!0&&Lt.fog!==Et||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==zt.numPlanes||Lt.numIntersection!==zt.numIntersection)||Lt.vertexAlphas!==te||Lt.vertexTangents!==re||Lt.morphTargets!==Nt||Lt.morphNormals!==Me||Lt.morphColors!==ke||Lt.toneMapping!==De||Lt.morphTargetsCount!==je||!!Lt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Lt.__version=X.version);let Sn=Lt.currentProgram;ge===!0&&(Sn=xr(X,F,q),k&&X.isNodeMaterial&&k.onUpdateProgram(X,Sn,Lt));let Vn=!1,_i=!1,es=!1;const be=Sn.getUniforms(),Be=Lt.uniforms;if(M.useProgram(Sn.program)&&(Vn=!0,_i=!0,es=!0),X.id!==K&&(K=X.id,_i=!0),Lt.needsLights){const Le=Fd(w.state.lightProbeGridArray,q);Lt.lightProbeGrid!==Le&&(Lt.lightProbeGrid=Le,_i=!0)}if(Vn||it!==b){M.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),be.setValue(N,"projectionMatrix",b.projectionMatrix),be.setValue(N,"viewMatrix",b.matrixWorldInverse);const xi=be.map.cameraPosition;xi!==void 0&&xi.setValue(N,tt.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&be.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&be.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),it!==b&&(it=b,_i=!0,es=!0)}if(Lt.needsLights&&(ln.state.sunShadowMap.length>0&&be.setValue(N,"sunShadowMap",ln.state.sunShadowMap,J),ln.state.directionalShadowMap.length>0&&be.setValue(N,"directionalShadowMap",ln.state.directionalShadowMap,J),ln.state.spotShadowMap.length>0&&be.setValue(N,"spotShadowMap",ln.state.spotShadowMap,J),ln.state.pointShadowMap.length>0&&be.setValue(N,"pointShadowMap",ln.state.pointShadowMap,J)),q.isSkinnedMesh){be.setOptional(N,q,"bindMatrix"),be.setOptional(N,q,"bindMatrixInverse");const Le=q.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),be.setValue(N,"boneTexture",Le.boneTexture,J))}q.isBatchedMesh&&(be.setOptional(N,q,"batchingTexture"),be.setValue(N,"batchingTexture",q._matricesTexture,J),be.setOptional(N,q,"batchingIdTexture"),be.setValue(N,"batchingIdTexture",q._indirectTexture,J),be.setOptional(N,q,"batchingColorTexture"),q._colorsTexture!==null&&be.setValue(N,"batchingColorTexture",q._colorsTexture,J));const vi=$.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&B.update(q,$,Sn),(_i||Lt.receiveShadow!==q.receiveShadow)&&(Lt.receiveShadow=q.receiveShadow,be.setValue(N,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(Be.envMapIntensity.value=F.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=Ux()),_i){if(be.setValue(N,"toneMappingExposure",L.toneMappingExposure),Lt.needsLights&&Bd(Be,es),Et&&X.fog===!0&&kt.refreshFogUniforms(Be,Et),kt.refreshMaterialUniforms(Be,X,st,Q,w.state.transmissionRenderTarget[b.id]),Lt.needsLights&&Lt.lightProbeGrid){const Le=Lt.lightProbeGrid;Be.probesSH.value=Le.texture,Be.probesMin.value.copy(Le.boundingBox.min),Be.probesMax.value.copy(Le.boundingBox.max),Be.probesResolution.value.copy(Le.resolution)}po.upload(N,Qc(Lt),Be,J)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(po.upload(N,Qc(Lt),Be,J),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&be.setValue(N,"center",q.center),be.setValue(N,"modelViewMatrix",q.modelViewMatrix),be.setValue(N,"normalMatrix",q.normalMatrix),be.setValue(N,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){const Le=X.uniformsGroups;for(let xi=0,ns=Le.length;xi<ns;xi++){const eh=Le[xi];lt.update(eh,Sn),lt.bind(eh,Sn)}}return Sn}function Bd(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function kd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(b,F,$){const X=Y.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Y.get(b.texture).__webglTexture=F,Y.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const $=Y.get(b);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,$=0){at=b,Z=F,V=$;let X=null,q=!1,Et=!1;if(b){const wt=Y.get(b);if(wt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(N.FRAMEBUFFER,wt.__webglFramebuffer),et.copy(b.viewport),Ut.copy(b.scissor),Ct=b.scissorTest,M.viewport(et),M.scissor(Ut),M.setScissorTest(Ct),K=-1;return}else if(wt.__webglFramebuffer===void 0)J.setupRenderTarget(b);else if(wt.__hasExternalTextures)J.rebindTextures(b,Y.get(b.texture).__webglTexture,Y.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const te=b.depthTexture;if(wt.__boundDepthTexture!==te){if(te!==null&&Y.has(te)&&(b.width!==te.image.width||b.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(b)}}const Dt=b.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Et=!0);const Ot=Y.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[F])?X=Ot[F][$]:X=Ot[F],q=!0):b.samples>0&&J.useMultisampledRTT(b)===!1?X=Y.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?X=Ot[$]:X=Ot,et.copy(b.viewport),Ut.copy(b.scissor),Ct=b.scissorTest}else et.copy(At).multiplyScalar(st).floor(),Ut.copy(Wt).multiplyScalar(st).floor(),Ct=me;if($!==0&&(X=H),M.bindFramebuffer(N.FRAMEBUFFER,X)&&M.drawBuffers(b,X),M.viewport(et),M.scissor(Ut),M.setScissorTest(Ct),q){const wt=Y.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,wt.__webglTexture,$)}else if(Et){const wt=F;for(let Dt=0;Dt<b.textures.length;Dt++){const Ot=Y.get(b.textures[Dt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Dt,Ot.__webglTexture,$,wt)}}else if(b!==null&&$!==0){const wt=Y.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,wt.__webglTexture,$)}K=-1};function th(b){const F=Y.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=C.textureFormatReadable(b.format),F.__typeReadable=C.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,$,X,q,Et,It,wt=0){if(!(b&&b.isWebGLRenderTarget)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt){M.bindFramebuffer(N.FRAMEBUFFER,Dt);try{const Ot=b.textures[wt],te=Ot.format,re=Ot.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+wt);const Nt=th(Ot);if(Nt.__formatReadable===!1){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-X&&$>=0&&$<=b.height-q&&N.readPixels(F,$,X,q,St.convert(te),St.convert(re),Et)}finally{const Ot=at!==null?Y.get(at).__webglFramebuffer:null;M.bindFramebuffer(N.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(b,F,$,X,q,Et,It,wt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt)if(F>=0&&F<=b.width-X&&$>=0&&$<=b.height-q){M.bindFramebuffer(N.FRAMEBUFFER,Dt);const Ot=b.textures[wt],te=Ot.format,re=Ot.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+wt);const Nt=th(Ot);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Me),N.bufferData(N.PIXEL_PACK_BUFFER,Et.byteLength,N.STREAM_READ),N.readPixels(F,$,X,q,St.convert(te),St.convert(re),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const ke=at!==null?Y.get(at).__webglFramebuffer:null;M.bindFramebuffer(N.FRAMEBUFFER,ke);const De=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await y0(N,De,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Me),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Et),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Me),N.deleteSync(De),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,$=0){const X=Math.pow(2,-$),q=Math.floor(b.image.width*X),Et=Math.floor(b.image.height*X),It=F!==null?F.x:0,wt=F!==null?F.y:0;J.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,It,wt,q,Et),M.unbindTexture()},this.copyTextureToTexture=function(b,F,$=null,X=null,q=0,Et=0){let It,wt,Dt,Ot,te,re,Nt,Me,ke;const De=b.isCompressedTexture?b.mipmaps[Et]:b.image;if($!==null)It=$.max.x-$.min.x,wt=$.max.y-$.min.y,Dt=$.isBox3?$.max.z-$.min.z:1,Ot=$.min.x,te=$.min.y,re=$.isBox3?$.min.z:0;else{const Be=Math.pow(2,-q);It=Math.floor(De.width*Be),wt=Math.floor(De.height*Be),b.isDataArrayTexture?Dt=De.depth:b.isData3DTexture?Dt=Math.floor(De.depth*Be):Dt=1,Ot=0,te=0,re=0}X!==null?(Nt=X.x,Me=X.y,ke=X.z):(Nt=0,Me=0,ke=0);const Ee=St.convert(F.format),je=St.convert(F.type);let Lt;F.isData3DTexture?(J.setTexture3D(F,0),Lt=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(J.setTexture2DArray(F,0),Lt=N.TEXTURE_2D_ARRAY):(J.setTexture2D(F,0),Lt=N.TEXTURE_2D),M.activeTexture(N.TEXTURE0),M.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const ln=M.getParameter(N.UNPACK_ROW_LENGTH),ge=M.getParameter(N.UNPACK_IMAGE_HEIGHT),Sn=M.getParameter(N.UNPACK_SKIP_PIXELS),Vn=M.getParameter(N.UNPACK_SKIP_ROWS),_i=M.getParameter(N.UNPACK_SKIP_IMAGES);M.pixelStorei(N.UNPACK_ROW_LENGTH,De.width),M.pixelStorei(N.UNPACK_IMAGE_HEIGHT,De.height),M.pixelStorei(N.UNPACK_SKIP_PIXELS,Ot),M.pixelStorei(N.UNPACK_SKIP_ROWS,te),M.pixelStorei(N.UNPACK_SKIP_IMAGES,re);const es=b.isDataArrayTexture||b.isData3DTexture,be=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const Be=Y.get(b),vi=Y.get(F),Le=Y.get(Be.__renderTarget),xi=Y.get(vi.__renderTarget);M.bindFramebuffer(N.READ_FRAMEBUFFER,Le.__webglFramebuffer),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let ns=0;ns<Dt;ns++)es&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(b).__webglTexture,q,re+ns),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(F).__webglTexture,Et,ke+ns)),N.blitFramebuffer(Ot,te,It,wt,Nt,Me,It,wt,N.DEPTH_BUFFER_BIT,N.NEAREST);M.bindFramebuffer(N.READ_FRAMEBUFFER,null),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||Y.has(b)){const Be=Y.get(b),vi=Y.get(F);M.bindFramebuffer(N.READ_FRAMEBUFFER,O),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let Le=0;Le<Dt;Le++)es?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.__webglTexture,q,re+Le):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Be.__webglTexture,q),be?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,vi.__webglTexture,Et,ke+Le):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,vi.__webglTexture,Et),q!==0?N.blitFramebuffer(Ot,te,It,wt,Nt,Me,It,wt,N.COLOR_BUFFER_BIT,N.NEAREST):be?N.copyTexSubImage3D(Lt,Et,Nt,Me,ke+Le,Ot,te,It,wt):N.copyTexSubImage2D(Lt,Et,Nt,Me,Ot,te,It,wt);M.bindFramebuffer(N.READ_FRAMEBUFFER,null),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else be?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(Lt,Et,Nt,Me,ke,It,wt,Dt,Ee,je,De.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Lt,Et,Nt,Me,ke,It,wt,Dt,Ee,De.data):N.texSubImage3D(Lt,Et,Nt,Me,ke,It,wt,Dt,Ee,je,De):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Et,Nt,Me,It,wt,Ee,je,De.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Et,Nt,Me,De.width,De.height,Ee,De.data):N.texSubImage2D(N.TEXTURE_2D,Et,Nt,Me,It,wt,Ee,je,De);M.pixelStorei(N.UNPACK_ROW_LENGTH,ln),M.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ge),M.pixelStorei(N.UNPACK_SKIP_PIXELS,Sn),M.pixelStorei(N.UNPACK_SKIP_ROWS,Vn),M.pixelStorei(N.UNPACK_SKIP_IMAGES,_i),Et===0&&F.generateMipmaps&&N.generateMipmap(Lt),M.unbindTexture()},this.initRenderTarget=function(b){Y.get(b).__webglFramebuffer===void 0&&J.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?J.setTextureCube(b,0):b.isData3DTexture?J.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?J.setTexture2DArray(b,0):J.setTexture2D(b,0),M.unbindTexture()},this.resetState=function(){Z=0,V=0,at=null,M.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}class Ox{constructor(t,e,i="a"){this.variant=t,this.muted=e,this.squeakVariant=i}variant;muted;squeakVariant;context=null;master=null;wipeGain=null;wipeFilter=null;motor=null;squeakVoice=null;chirpAt=0;chirp=1;unlocked=!1;holds=new Set;lastChirp=0;lastFoam=0;lastBehind=0;noise=null;unlock(){if(this.muted)return!0;const t=this.ensure();return t?t.state==="running"?(this.started(),!0):(t.resume().then(()=>{t.state==="running"&&this.started()}).catch(e=>console.warn("[sound] resume не прошёл",e)),!1):!0}started(){this.unlocked||(this.unlocked=!0,this.startWipe(),console.info(`[sound] включён, вариант стирания ${this.variant}`))}wipe(t,e){const i=this.running();if(!i||!this.wipeGain||!this.wipeFilter)return;const s=i.currentTime,r=this.variant==="b"?.34*t+.03*e:.38*t+.04*e,o=this.variant==="b"?1300+1700*e+600*t:520+1100*e+300*t;this.wipeGain.gain.setTargetAtTime(r,s,.035),this.wipeFilter.frequency.setTargetAtTime(o,s,.05)}squeak(t){const e=this.running(),i=this.squeakVoice;if(!e||!i)return;const s=e.currentTime,r=t>.06;s>=this.chirpAt&&(this.chirpAt=s+.12+Math.random()*.28,this.chirp=.86+Math.random()*.3);const o=this.squeakVariant==="b",a=((o?1600:1050)+(o?1100:850)*t)*this.chirp;i.level.gain.setTargetAtTime(r?(o?.035:.05)+.06*t:0,s,r?.025:.05),i.osc.frequency.setTargetAtTime(a,s,.03),i.band.frequency.setTargetAtTime(a*1.08,s,.03),i.lfo.frequency.setTargetAtTime(22+28*t,s,.05)}clean(t){if(this.variant!=="c"||t<=0)return;const e=this.running();if(!e||!this.master)return;const i=e.currentTime;if(i-this.lastChirp<.11)return;this.lastChirp=i;const s=e.createOscillator(),r=e.createGain();s.type="sine";const o=1500+Math.random()*300;s.frequency.setValueAtTime(o,i),s.frequency.exponentialRampToValueAtTime(o*1.35,i+.07),r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(.035,i+.012),r.gain.exponentialRampToValueAtTime(5e-4,i+.09),s.connect(r).connect(this.master),s.start(i),s.stop(i+.1)}ding(){const t=this.running();if(!t||!this.master)return;const e=t.currentTime,i=[[1568,.2,1.1],[1568*2.76,.08,.6],[1568*5.4,.035,.35],[2093,.12,.8]];for(const[s,r,o]of i){const a=t.createOscillator(),l=t.createGain();a.type="sine",a.frequency.value=s,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(r,e+.004),l.gain.exponentialRampToValueAtTime(1e-4,e+o),a.connect(l).connect(this.master),a.start(e),a.stop(e+o+.05)}}coin(t){const e=this.running();if(!e||!this.master)return;const i=e.currentTime,s=1175*2**(Math.min(t,12)/12);for(const[r,o]of[[1,.12],[2,.05]]){const a=e.createOscillator(),l=e.createGain();a.type="triangle",a.frequency.setValueAtTime(s*r,i),a.frequency.exponentialRampToValueAtTime(s*r*1.08,i+.05),l.gain.setValueAtTime(0,i),l.gain.linearRampToValueAtTime(o,i+.005),l.gain.exponentialRampToValueAtTime(1e-4,i+.16),a.connect(l).connect(this.master),a.start(i),a.stop(i+.2)}}drained(){const t=this.running();if(!t||!this.master)return;const e=t.currentTime;this.tone(t,"sine",620,140,e,.02,.4,.22),this.tone(t,"sine",1400,2200,e+.45,.004,.09,.07),this.tone(t,"sine",1150,1850,e+.66,.004,.09,.05)}knock(){const t=this.running();if(!t)return;const e=t.currentTime;this.tone(t,"sine",260,130,e,.003,.09,.3),this.burst(t,e,.03,2600,1.4,.12)}radio(){const t=this.running();if(!t)return;const e=t.currentTime;this.burst(t,e,.12,2400,.8,.07),this.tone(t,"square",1320,1320,e+.02,.005,.06,.025)}buy(){const t=this.running();if(!t)return;const e=t.currentTime;this.tone(t,"triangle",1568,1650,e,.004,.14,.12),this.tone(t,"triangle",2093,2200,e+.08,.004,.18,.12),this.tone(t,"sine",3136,3136,e+.16,.003,.6,.06)}coo(){const t=this.running();if(!t||!this.master)return;const e=t.currentTime;for(const[i,s,r]of[[0,380,460],[.22,470,330]]){const o=t.createOscillator(),a=t.createOscillator(),l=t.createGain(),c=t.createGain();o.type="triangle",o.frequency.setValueAtTime(s,e+i),o.frequency.linearRampToValueAtTime(r,e+i+.18),a.frequency.value=26,l.gain.value=30,a.connect(l).connect(o.frequency),c.gain.setValueAtTime(0,e+i),c.gain.linearRampToValueAtTime(.09,e+i+.03),c.gain.exponentialRampToValueAtTime(1e-4,e+i+.2),o.connect(c).connect(this.master),a.start(e+i),o.start(e+i),a.stop(e+i+.25),o.stop(e+i+.25)}}foam(t){if(t<=0)return;const e=this.running();if(!e)return;const i=e.currentTime;i-this.lastFoam<.09||(this.lastFoam=i,this.burst(e,i,.14,4200+Math.random()*900,.7,Math.min(.16,.05+t/900)))}behind(t){const e=this.running();if(!e)return;const i=e.currentTime;if(!(i-this.lastBehind<2.6))if(this.lastBehind=i,t==="director")[392,494,587,494].forEach((s,r)=>this.tone(e,"triangle",s,s,i+r*.18,.04,.22,.05));else{for(let s=0;s<5;s+=1)this.burst(e,i+s*.08,.12,180+s*25,1.4,.07+s*.02);this.tone(e,"sine",900,620,i+.6,.05,.3,.025)}}reveal(t){const e=this.running();if(!e)return;const i=e.currentTime;t==="director"?[1319,1568,1760,2093,2637].forEach((s,r)=>this.tone(e,"sine",s,s,i+r*.06,.004,.25,.08)):(this.tone(e,"square",150,140,i,.01,.32,.07),this.tone(e,"square",150,135,i+.4,.01,.32,.07))}beep(){const t=this.running();if(!t)return;const e=t.currentTime;this.tone(t,"square",880,880,e,.005,.07,.03),this.tone(t,"square",1320,1320,e+.09,.005,.08,.03),this.burst(t,e+.5,.05,700,2,.08)}bubbles(t){const e=this.running();if(!e)return;const i=e.currentTime;for(let s=0;s<4+t*2;s+=1){const r=500+Math.random()*700+s*60;this.tone(e,"sine",r,r*1.8,i+s*.07+Math.random()*.03,.004,.08,.06)}}flap(){const t=this.running();if(!t)return;const e=t.currentTime;for(let i=0;i<4;i+=1)this.burst(t,e+i*.07,.05,900+i*60,.9,.09)}splat(){const t=this.running();if(!t)return;const e=t.currentTime;this.burst(t,e,.12,420,.7,.3),this.tone(t,"sine",180,70,e,.004,.14,.18)}fanfare(){const t=this.running();if(!t)return;const e=t.currentTime;[523,659,784,1047].forEach((i,s)=>{this.tone(t,"triangle",i,i,e+s*.11,.01,.35,.13),this.tone(t,"sine",i*2,i*2,e+s*.11,.01,.25,.04)}),this.tone(t,"triangle",1047,1047,e+.48,.01,.9,.12),this.tone(t,"sine",2093,2093,e+.5,.005,1.1,.06)}pour(t){const e=this.running();if(!e||!this.master||!this.noise)return;const i=e.currentTime,s=e.createBufferSource();s.buffer=this.noise,s.loop=!0;const r=e.createBiquadFilter();r.type="bandpass",r.Q.value=1.6,r.frequency.setValueAtTime(420,i),r.frequency.exponentialRampToValueAtTime(1500,i+t);const o=e.createGain();o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(.16,i+.08),o.gain.setValueAtTime(.16,i+t-.15),o.gain.linearRampToValueAtTime(0,i+t),s.connect(r).connect(o).connect(this.master),s.start(i),s.stop(i+t+.05);for(let a=.05;a<t-.1;a+=.05+Math.random()*.08){const c=380+520*(a/t)+Math.random()*160;this.tone(e,"sine",c,c*1.6,i+a,.004,.06,.035)}}lift(t){const e=this.running();if(!e||!this.master)return;const i=e.currentTime;if(t&&!this.motor){const s=e.createOscillator(),r=e.createBiquadFilter(),o=e.createGain();s.type="sawtooth",s.frequency.setValueAtTime(62,i),s.frequency.linearRampToValueAtTime(88,i+1.2),r.type="lowpass",r.frequency.value=380,o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(.07,i+.15),s.connect(r).connect(o).connect(this.master),s.start(i),this.motor={osc:s,gain:o}}else if(!t&&this.motor){const{osc:s,gain:r}=this.motor;r.gain.cancelScheduledValues(i),r.gain.setValueAtTime(r.gain.value,i),r.gain.linearRampToValueAtTime(0,i+.2),s.stop(i+.25),this.motor=null}}hold(t){this.holds.add(t),this.context?.suspend()}release(t){this.holds.delete(t),!(!this.unlocked||this.holds.size)&&this.context?.resume()}tone(t,e,i,s,r,o,a,l){if(!this.master)return;const c=t.createOscillator(),h=t.createGain();c.type=e,c.frequency.setValueAtTime(i,r),c.frequency.exponentialRampToValueAtTime(s,r+a*.8),h.gain.setValueAtTime(0,r),h.gain.linearRampToValueAtTime(l,r+o),h.gain.exponentialRampToValueAtTime(1e-4,r+a),c.connect(h).connect(this.master),c.start(r),c.stop(r+a+.05)}burst(t,e,i,s,r,o){if(!this.master)return;if(!this.noise){const h=Math.floor(t.sampleRate*.5);this.noise=t.createBuffer(1,h,t.sampleRate);const u=this.noise.getChannelData(0);for(let f=0;f<h;f+=1)u[f]=Math.random()*2-1}const a=t.createBufferSource();a.buffer=this.noise;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=s,l.Q.value=r;const c=t.createGain();c.gain.setValueAtTime(o,e),c.gain.exponentialRampToValueAtTime(1e-4,e+i),a.connect(l).connect(c).connect(this.master),a.start(e,Math.random()*.3,i+.02)}running(){const t=this.context;return t&&this.unlocked&&t.state==="running"?t:null}startWipe(){const t=this.context;if(!t||!this.master||this.wipeGain)return;const e=t.sampleRate*2,i=t.createBuffer(1,e,t.sampleRate),s=i.getChannelData(0);for(let l=0;l<e;l+=1)s[l]=Math.random()*2-1;const r=t.createBufferSource();r.buffer=i,r.loop=!0;const o=t.createBiquadFilter();o.type="bandpass",o.Q.value=this.variant==="b"?2.4:.9,o.frequency.value=800;const a=t.createGain();if(a.gain.value=0,this.variant==="b"){const l=t.createGain();l.gain.value=.6;const c=t.createOscillator(),h=t.createGain();c.frequency.value=22,h.gain.value=.4,c.connect(h).connect(l.gain),c.start(),r.connect(o).connect(l).connect(a).connect(this.master)}else r.connect(o).connect(a).connect(this.master);r.start(),this.wipeGain=a,this.wipeFilter=o,this.startSqueak()}startSqueak(){const t=this.context;if(!t||!this.master||this.squeakVoice)return;const e=this.squeakVariant==="b",i=t.createOscillator();i.type=e?"sawtooth":"triangle",i.frequency.value=1200;const s=t.createBiquadFilter();s.type="bandpass",s.Q.value=e?9:5,s.frequency.value=1300;const r=t.createGain();r.gain.value=.55;const o=t.createOscillator();o.frequency.value=30;const a=t.createGain();a.gain.value=.45,o.connect(a).connect(r.gain);const l=t.createGain();l.gain.value=0,i.connect(s).connect(r).connect(l).connect(this.master),i.start(),o.start(),this.squeakVoice={osc:i,band:s,lfo:o,level:l}}ensure(){if(this.context)return this.context;const t=window.AudioContext??window.webkitAudioContext;if(!t)return console.warn("[sound] Web Audio нет — играем без звука"),null;try{const e=new t,i=e.createGain();return i.gain.value=.9,i.connect(e.destination),this.context=e,this.master=i,e}catch(e){return console.warn("[sound] контекст не создался",e),null}}}const Bx=720,kx=1280;function zx(n){const t=Math.max(1,n.clientWidth),e=Math.max(1,n.clientHeight),i=Math.min(t/Bx,e/kx);return{width:t,height:e,scale:i}}function Gx(n,t){document.documentElement.style.setProperty("--u",`${t.scale}px`),n.dataset.scale=t.scale.toFixed(3)}const pn=new URLSearchParams(location.search);function Hx(){const n=pn.get("wipe");return n==="b"||n==="c"?n:"a"}function af(n){const t=Number.parseInt(pn.get(n)??"",10);return Number.isFinite(t)?t:null}const Se={debug:pn.has("debug"),autoplay:pn.has("autoplay"),mute:pn.has("mute"),lang:pn.get("lang"),wipe:Hx(),squeak:pn.get("squeak")==="b"?"b":"a",floor:af("floor"),building:af("building"),pigeons:pn.has("pigeons"),foam:pn.has("foam"),drain:pn.has("drain"),rich:pn.has("rich"),gallery:pn.has("gallery"),newgame:pn.has("newgame"),nosave:pn.has("nosave")},lf=!Se.nosave&&!Se.autoplay&&!Se.rich&&!Se.drain&&!Se.pigeons&&!Se.foam&&!Se.gallery&&Se.floor===null&&Se.building===null,Vx=performance.now(),cf=new Set;function Ge(n,t={}){if(n.startsWith("first_")){if(cf.has(n))return;cf.add(n)}const e=((performance.now()-Vx)/1e3).toFixed(1),i=Object.entries(t).map(([s,r])=>`${s}=${r}`).join(" ");console.info(`ВОРОНКА ${n} t=${e}${i?` ${i}`:""}`)}function Rn(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Li(...n){let t=2166136261;for(const e of n)t^=e|0,t=Math.imul(t,16777619);return t>>>0}function Ds(n,t,e){return n<t?t:n>e?e:n}const Ii=1.55,Ts=128,mo=Math.round(Ts*Ii),xn=16,hf=.12,Yu=.93,Wx=.9,Xx=.05,qx=1,Xs=[0,1,4,6,2,2],qr=4,Yx=.8,$x=8,Ia=3.5,Hi=4,Da=2,mi=3,Zx=.35,Kx=.7,Jx=1.9,Qx=1.3,go={bucket:{values:[44,60,80,106,140],prices:[25,70,160,320]},squeegee:{values:[.34,.41,.48,.55],prices:[45,110,240]},lift:{values:[1,1.4,1.85,2.4],prices:[50,120,260]},soap:{values:[1,1.25,1.5,2],prices:[60,150,320]},robot:{values:[0,90,140,200],prices:[80,220,480]}},jx=["soap","robot"],ff=.2,t1=.55,e1=.25,n1=.9,$u=1.5,uf=-1,df=.6,i1=.7,s1=.32,pf=2.5,r1=[4.5,8],o1=2,Zu=1.2,Ku=.9,a1=2.8,l1=.45,c1=.6,h1=5,f1=1/3,u1=1.2,d1=2.5,Xt=1,ae=Xt*Ii,Co=.32,Di=.42,Bn=.6,Po=ae+Bn,fe=mi*Xt+(mi-1)*Co+2*Di,ui=-.16,ve=.06,zc=-.18,Yr=.12,p1=4.95,mf=7.6,m1=1.15,Ni=-Bn/2,Jt=-2.85;function zn(n,t){return{x:(t-(mi-1)/2)*(Xt+Co),y:En(n)}}function En(n){return n*Po+Po/2}function Ju(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Oe;let c=0;for(let h=0;h<n.length;++h){const u=n[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in u.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(u.morphAttributes[m])}if(t){let m;if(e)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0;const u=[];for(let f=0;f<n.length;++f){const m=n[f].index;for(let g=0;g<m.count;++g)u.push(m.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=gf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const m=[];for(let S=0;S<o[h].length;++S)m.push(o[h][S][f]);const g=gf(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function gf(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new un(o,e,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,m=h.count;f<m;f++)for(let g=0;g<e;g++){const S=h.getComponent(f,g);a.setComponent(f+u,g,S)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Lo(n){const{x:t}=zn(n.floor,n.column);return{x:t+n.offset*Xt,y:En(n.floor)-ae/2+.02,z:ve+.1}}const g1=n=>n*n*(3-2*n);class _1{group=new rn;birds=new Map;pool=[];bodyGeometry=v1();wingGeometry=new hn(1,8,6).scale(.085,.018,.05).translate(-.03,0,.05);bodyMaterial=new _e({vertexColors:!0});wingMaterial=new _e({color:"#8a93a3"});feathers;time=0;warm=null;constructor(t){this.feathers=new x1(t),this.group.add(this.feathers.points)}warmup(t){t?(this.warm??=this.createBird(),this.group.add(this.warm.group)):this.warm&&(this.group.remove(this.warm.group),this.pool.push(this.warm),this.warm=null)}puff(t){const e=Lo(t);this.feathers.emit(e.x,e.y+.08,e.z+.05,7)}splash(t,e,i){this.feathers.emit(t,e,i+.05,12)}update(t,e){this.time+=t;const i=new Set;for(const s of e){i.add(s.id);let r=this.birds.get(s.id);r||(r=this.pool.pop()??this.createBird(),this.birds.set(s.id,r),this.group.add(r.group)),this.pose(r,s)}for(const[s,r]of this.birds)i.has(s)||(this.group.remove(r.group),this.birds.delete(s),this.pool.push(r));this.feathers.update(t)}pose(t,e){const i=Lo(e),{group:s,body:r,wings:o}=t;let a=0,l=-e.side;if(r.rotation.set(0,0,0),e.state==="in"){const h=Math.min(1,e.t/Zu),u=g1(h),f=e.side*3.4;s.position.set(f+(i.x-f)*u,i.y+1.6*(1-u)+Math.sin(u*Math.PI)*.35,1.1+(i.z-1.1)*u),a=h<.85?1:.4,r.rotation.z=-.25*(1-u)}else if(e.state==="out"){const h=Math.min(1,e.t/Ku),u=h*h,f=-e.side*3.6;l=e.side,s.position.set(i.x+(f-i.x)*u,i.y+2*u+Math.sin(h*Math.PI)*.2,i.z+1.2*u),a=1,r.rotation.z=.35*Math.min(1,h*3)}else if(s.position.set(i.x,i.y,i.z),e.state==="flutter")s.position.y+=Math.abs(Math.sin(e.t*22))*.06,s.position.z-=.05,a=1;else{const h=Math.max(0,Math.sin(this.time*3+e.id))**6;r.rotation.z=-.45*h}s.rotation.y=l>0?-.5:Math.PI+.5;const c=a?Math.sin(this.time*34+e.id)*1.1*a:0;o[0].rotation.x=.15+c,o[1].rotation.x=-.15-c}createBird(){const t=new rn;t.scale.setScalar(1.5);const e=new rn;e.add(new Yt(this.bodyGeometry,this.bodyMaterial));const i=[-1,1].map(s=>{const r=new Yt(this.wingGeometry,this.wingMaterial);return r.position.set(0,.08,s*.03),r.scale.z=s,e.add(r),r});return t.add(e),{group:t,body:e,wings:i}}}function v1(){const n=[],t=(i,s)=>{const r=new ut(s),o=i.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l+=1)r.toArray(a,l*3);i.setAttribute("color",new un(a,3)),i.deleteAttribute("uv"),n.push(i.index?i.toNonIndexed():i)};t(new hn(1,10,8).scale(.12,.075,.075).translate(0,.06,0),"#a3aab6"),t(new hn(1,8,6).scale(.05,.05,.055).translate(.09,.1,0),"#5f9c8a"),t(new hn(.045,8,6).translate(.12,.14,0),"#6c7484"),t(new Dc(.012,.035,6).rotateZ(-Math.PI/2).translate(.172,.135,0),"#e2b04a");for(const i of[-1,1])t(new hn(.009,6,4).translate(.145,.15,i*.033),"#1d1d24"),t(new we(.007,.007,.05,4).translate(.01,0,i*.03),"#e07a52");t(new hn(1,6,4).scale(.08,.014,.045).rotateZ(.25).translate(-.15,.07,0),"#5c6370");const e=Ju(n);if(!e)throw new Error("голубь не собрался");return e}class x1{points;count=40;positions=new Float32Array(this.count*3);velocities=new Float32Array(this.count*3);life=new Float32Array(this.count);next=0;constructor(t){const e=new Oe;e.setAttribute("position",new un(this.positions,3)),this.points=new Ic(e,new zo({size:.06,map:t,color:"#e9edf2",transparent:!0,depthWrite:!1})),this.points.frustumCulled=!1,this.positions.fill(-1e3)}emit(t,e,i,s){for(let r=0;r<s;r+=1){const o=this.next;this.next=(this.next+1)%this.count,this.positions.set([t+(Math.random()-.5)*.15,e+(Math.random()-.5)*.1,i],o*3),this.velocities.set([(Math.random()-.5)*.8,.3+Math.random()*.5,.2+Math.random()*.3],o*3),this.life[o]=1.4+Math.random()*.6}}update(t){for(let e=0;e<this.count;e+=1)if(!(this.life[e]<=0)){if(this.life[e]-=t,this.life[e]<=0){this.positions[e*3+1]=-1e3;continue}this.velocities[e*3+1]=Math.max(-.35,this.velocities[e*3+1]-1.6*t),this.positions[e*3]+=(this.velocities[e*3]+Math.sin(this.life[e]*7)*.25)*t,this.positions[e*3+1]+=this.velocities[e*3+1]*t,this.positions[e*3+2]+=this.velocities[e*3+2]*t}this.points.geometry.attributes.position.needsUpdate=!0}}class M1{constructor(t,e,i,s,r,o){this.host=t,this.camera=e,this.game=i,this.squeegee=s,this.droplets=r,this.flakes=o}host;camera;game;squeegee;droplets;flakes;removed=0;travel=0;cleared=0;glide=0;foamed=0;hover=null;get contact(){return this.last}raycaster=new Bp;ndc=new gt;glassPlane=new ai(new I(0,0,1),-ui);hit=new I;target=new I;last=null;lastClient=null;move(t,e){this.lastClient={x:t,y:e};const i=this.toGlass(t,e);if(!i)return;if(!this.game.canWash){this.last=null;return}const s=this.last??i;this.shoo(i),this.hover=this.paneAt(i),this.game.spend(this.sweep(s,i)),this.squeegee.aim(i.x-s.x,i.y-s.y),this.travel+=Math.hypot(i.x-s.x,i.y-s.y),this.last=i}release(){this.last=null,this.hover=null;for(const t of this.game.panes(this.game.floor))t.mask.release()}update(t){const e=this.game.phase,i=!this.game.canWash&&e!=="rest"&&e!=="lift",s=this.squeegee.group.position;if(i)this.squeegee.aim(1,0),this.target.set(-1.3,En(this.game.cradle)-ae/2+.05,1.33);else{const o=this.lastClient?this.toGlass(this.lastClient.x,this.lastClient.y):this.restingPoint();if(o){const a=this.camera.position,l=(Yr-a.z)/(ui-a.z);this.target.set(a.x+(o.x-a.x)*l,a.y+(o.y-a.y)*l,Yr)}}const r=s.distanceTo(this.target)>.3;i||r?s.lerp(this.target,Math.min(1,t*14)):s.copy(this.target),this.squeegee.update(t)}endFrame(){this.removed=0,this.travel=0,this.cleared=0,this.glide=0,this.foamed=0}paneAt(t){for(const e of this.game.panes(this.game.floor)){const i=zn(e.floor,e.column);if(Math.abs(t.x-i.x)<=Xt/2&&Math.abs(t.y-i.y)<=ae/2)return e}return null}shoo(t){for(const e of this.game.pigeons.list){if(e.state==="out"||e.floor!==this.game.floor)continue;const i=Lo(e);Math.hypot(t.x-i.x,t.y-i.y)<c1&&this.game.pigeons.shoo(e)}}sweep(t,e){const i=this.game.value("squeegee")*Xt/2;let s=0;for(const r of this.game.panes(this.game.floor)){const o=zn(r.floor,r.column),a=o.x-Xt/2,l=o.y-ae/2;if(!(Math.max(t.x,e.x)+i>a&&Math.min(t.x,e.x)-i<a+Xt&&Math.max(t.y,e.y)+i>l&&Math.min(t.y,e.y)-i<l+ae)){r.mask.release();continue}const h=r.mask.width/Xt,u=r.mask.height/ae,f=this.game.sweep(r,(t.x-a)*h,(t.y-l)*u,(e.x-a)*h,(e.y-l)*u),m=S1(t,e,a,l,a+Xt,l+ae);if(f.removed<=0&&(this.glide+=m),f.foamed>0&&(this.foamed+=f.foamed,this.flakes.emit(e.x,e.y,Yr,Math.min(3,1+Math.floor(f.foamed/40)),i)),f.removed>0){Ge("first_stroke"),s+=m,this.removed+=f.removed,this.cleared+=f.cellsCleared;const g=Math.min(4,1+Math.floor(f.removed/220));this.droplets.emit(e.x,e.y-i*.6,Yr,g,i)}}return s}toGlass(t,e){const i=this.host.getBoundingClientRect();if(i.width===0||i.height===0||(this.ndc.set((t-i.left)/i.width*2-1,-((e-i.top)/i.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.camera),!this.raycaster.ray.intersectPlane(this.glassPlane,this.hit)))return null;const s=En(this.game.cradle);return{x:Ds(this.hit.x,-fe/2+.12,fe/2-.12),y:Ds(this.hit.y,s-ae/2,s+ae/2)}}restingPoint(){return{x:.08,y:En(this.game.cradle)-ae*.32}}}function S1(n,t,e,i,s,r){const o=t.x-n.x,a=t.y-n.y;let l=0,c=1;for(const[h,u]of[[-o,n.x-e],[o,s-n.x],[-a,n.y-i],[a,r-n.y]]){if(h===0){if(u<0)return 0;continue}const f=u/h;if(h<0?l=Math.max(l,f):c=Math.min(c,f),l>c)return 0}return(c-l)*Math.hypot(o,a)}function y1(n,t){n.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse"&&e.buttons===0)return;const i=e.getCoalescedEvents?.()??[];for(const s of i.length?i:[e])t.move(s.clientX,s.clientY)}),n.addEventListener("pointerdown",e=>{t.release(),t.move(e.clientX,e.clientY)}),n.addEventListener("pointerup",e=>{e.pointerType!=="mouse"&&t.release()}),n.addEventListener("pointercancel",()=>t.release()),n.addEventListener("pointerleave",()=>t.release())}const b1=3.2,_f=1.2;class w1{constructor(t,e,i,s){this.host=t,this.camera=e,this.game=i,this.sink=s}host;camera;game;sink;path=[];index=0;at={x:0,y:0};floor=Number.NaN;point=new I;reading=0;chased=new Set;update(t){if(this.game.phase==="summary"){this.reading+=t,this.reading>=_f&&(this.reading=0,this.press("[data-buy]:not(:disabled)")||this.press('[data-action="go"]'));return}if(this.game.phase==="roof"){this.reading+=t,this.reading>=_f*2&&(this.reading=0,this.press('[data-action="next"]'));return}if(this.reading=0,!this.game.canWash){this.floor=Number.NaN;return}(this.floor!==this.game.floor||this.index>=this.path.length)&&(this.floor=this.game.floor,this.build()),this.chase();let e=b1*t;for(;e>0&&this.index<this.path.length;){const i=this.path[this.index],s=i.x-this.at.x,r=i.y-this.at.y,o=Math.hypot(s,r),a=Math.min(o,e,.12);o>1e-6&&(this.at={x:this.at.x+s/o*a,y:this.at.y+r/o*a}),e-=a,o-a<1e-6&&(this.index+=1),this.send()}}build(){const t=this.game.value("squeegee")*Xt/2,e=t*1.6;this.path=[];for(const i of this.game.panes(this.game.floor)){if(i.clean)continue;const s=zn(i.floor,i.column),r=s.x-Xt/2+t*.5,o=s.x+Xt/2-t*.5,a=s.y-ae/2,l=i.mask.cleanFraction>.6?i.mask.toughBox():null;if(l){const h=Xt/i.mask.width,u=ae/i.mask.height,f=Math.max(r,s.x-Xt/2+l.x0*h-t*1.2),m=Math.min(o,s.x-Xt/2+l.x1*h+t*1.2);for(let g=a+l.y1*u;g>=a+l.y0*u-t*.5;g-=t*1.1)for(let S=0;S<3;S+=1)this.path.push({x:f,y:g},{x:m,y:g});continue}let c=!0;for(let h=s.y+ae/2-t*.6;h>a;h-=e)this.path.push({x:c?r:o,y:h},{x:c?o:r,y:h}),c=!c}this.path.length&&(this.at={...this.path[0]}),this.index=0,this.sink.release()}chase(){for(const t of this.game.pigeons.list){if(t.state!=="sit"||t.floor!==this.game.floor||this.chased.has(t.id))continue;this.chased.add(t.id);const e=Lo(t);this.path.splice(this.index,0,{x:e.x,y:e.y+.12},{...this.at})}}press(t){const e=this.host.querySelector(`#panel.open ${t}`);return e?(console.info(`[autoplay] жму ${e.dataset.buy??e.dataset.action}`),e.click(),!0):!1}send(){this.point.set(this.at.x,this.at.y,ui).project(this.camera);const t=this.host.getBoundingClientRect();this.sink.move(t.left+(this.point.x+1)/2*t.width,t.top+(1-this.point.y)/2*t.height)}}const E1=50;class T1{constructor(t,e,i){this.renderer=e,this.game=i,this.element=document.createElement("div"),this.element.id="debug",t.appendChild(this.element)}renderer;game;element;frames=0;time=0;worst=0;update(t,e){if(this.frames+=1,this.time+=t,this.worst=Math.max(this.worst,t),t*1e3>E1&&this.frames>1&&console.info(`ДОЛГИЙ КАДР ${(t*1e3).toFixed(0)} мс, работа ${e.toFixed(1)} мс, фаза ${this.game.phase}`),this.time<.5)return;const i=this.frames/this.time,s=this.renderer.info;this.element.textContent=`FPS ${i.toFixed(0)}  худший кадр ${(this.worst*1e3).toFixed(0)} мс
вызовов ${s.render.calls}  треуг. ${s.render.triangles}  текстур ${s.memory.textures}
этаж ${this.game.floor}  монет ${this.game.coins}  окон ${this.game.panesCleaned}`,this.frames=0,this.time=0,this.worst=0}}const Fn={splashes:[0,0],gifts:[0,0],haze:1},lc={splashes:[1,3],gifts:[0,0],haze:1},_o={splashes:[1,3],gifts:[0,1],haze:1},Qu={id:"house",window:{mullionX:.5,mullionY:.72,bar:.05},pay:1,bonus:30,roofLine:"foremanHouseDone",floors:[{dirt:{...Fn,haze:.72},windows:[void 0,{resident:"granny",knock:!0,ask:"grannyAsk",thanks:"grannyThanks"}]},{dirt:Fn,windows:[{resident:"grandpa",thanks:"grandpaThanks"},void 0,{resident:"kid",thanks:"kidThanks"}]},{dirt:lc,foreman:"foremanSplash",windows:[void 0,void 0,{resident:"cat",knock:!0,thanks:"catThanks"}]},{dirt:lc,foreman:"foremanHalfway",windows:[void 0,{resident:"undershirt",thanks:"undershirtThanks"},void 0]},{dirt:_o,foreman:"foremanPigeons",pigeons:!0,windows:[{resident:"pies",thanks:"piesThanks"},void 0,void 0]},{dirt:_o,pigeons:!0,windows:[void 0,{resident:"gamer",thanks:"gamerThanks"},void 0]},{dirt:_o,pigeons:!0,foreman:"foremanHouseTop",windows:[void 0,void 0,{resident:"artist",thanks:"artistThanks"}]}]},ju={mullionX:null,mullionY:.15,bar:.03,frame:.032},A1={mullionX:null,mullionY:null,bar:0,frame:.022},R1={mullionX:.7,mullionY:null,bar:.035,frame:.04},C1={mullionX:null,mullionY:null,bar:0,frame:.045,round:.5},P1={splashes:[0,1],gifts:[0,0],haze:1,marker:[1,2],palms:[1,2]},vf={...lc,marker:[0,1],palms:[0,1]},xf={..._o,palms:[0,1]},Mf={splashes:[0,2],gifts:[0,0],haze:1},L1={splashes:[0,2],gifts:[0,1],haze:1},cc={resident:"director",closed:"director",thanks:"directorThanks"},hc={resident:"guard",closed:"guard",thanks:"guardThanks"},ir={band:"ribbon",window:ju},td={band:"glass",window:A1},fc={band:"frames",window:R1},Io={band:"capsule",window:C1},ed={id:"office",window:ju,pay:2,bonus:60,roofLine:"foremanOfficeDone",floors:[{...ir,dirt:Mf,foreman:"foremanOffice",windows:[void 0,{resident:"clerk",knock:!0,ask:"clerkAsk",thanks:"clerkThanks"},void 0]},{...ir,dirt:L1,pigeons:!0,foreman:"foremanOfficePigeons",windows:[{resident:"coffee",thanks:"coffeeThanks"},void 0,{resident:"coder",thanks:"coderThanks"}]},{...ir,dirt:Mf,windows:[void 0,{resident:"sleepy",thanks:"sleepyThanks"},void 0]},{...td,dirt:P1,foreman:"foremanMeeting",windows:[void 0,{resident:"boss",thanks:"bossThanks"},void 0]},{...fc,dirt:vf,foreman:"foremanFrames",windows:[{resident:"intern",thanks:"internThanks"},void 0,{resident:"accountant",thanks:"accountantThanks"}]},{...fc,dirt:xf,pigeons:!0,foreman:"foremanBlinds",windows:[cc,{resident:"sales",thanks:"salesThanks"},hc]},{...Io,dirt:vf,foreman:"foremanExecutive",windows:[void 0,hc,{resident:"dog",knock:!0,thanks:"dogThanks"}]},{...Io,dirt:xf,pigeons:!0,foreman:"foremanOfficeTop",windows:[{resident:"golfer",thanks:"golferThanks"},void 0,cc]}]},As=[Qu,ed],I1={...Qu,floors:[{dirt:Fn,windows:[{resident:"granny",knock:!0},{resident:"grandpa"},{resident:"kid"}]},{dirt:Fn,windows:[{resident:"cat",knock:!0},{resident:"undershirt"},{resident:"pies"}]},{dirt:Fn,windows:[{resident:"gamer"},{resident:"artist"},void 0]}]},D1={...ed,floors:[{...ir,dirt:Fn,windows:[{resident:"coffee"},{resident:"clerk",knock:!0},{resident:"coder"}]},{...ir,dirt:Fn,windows:[void 0,{resident:"sleepy"},void 0]},{...td,dirt:Fn,windows:[void 0,{resident:"boss"},void 0]},{...fc,dirt:Fn,windows:[{resident:"intern"},{resident:"sales"},{resident:"accountant"}]},{...Io,dirt:Fn,windows:[{resident:"golfer"},void 0,{resident:"dog",knock:!0}]},{...Io,dirt:Fn,windows:[cc,void 0,hc]}]};function Vo(n){return n.frame??Xx}function Gc(n,t,e){const i=e*Ii,s=n.round??0,r=Math.abs(t-.5)-(.5-s),o=Math.abs(i-Ii/2)-(Ii/2-s);let l=-(Math.hypot(Math.max(r,0),Math.max(o,0))+Math.min(Math.max(r,o),0)-s)-Vo(n);const c=n.bar/2;return n.mullionX!==null&&(l=Math.min(l,Math.abs(t-n.mullionX)-c)),n.mullionY!==null&&(l=Math.min(l,Math.abs(i-n.mullionY*Ii)-c)),l}const Na={removed:0,cellsCleared:0,foamed:0,blocked:0},N1=(()=>{const n=[],t=Math.ceil(Ia);for(let e=-t;e<=t;e+=1)for(let i=-t;i<=t;i+=1){const s=Math.hypot(i,e);s<=Ia&&n.push({dx:i,dy:e,w:Math.round(110*(1-.7*(s/Ia)))})}return n})(),U1=(()=>{const n=new Uint16Array(Ts*mo),t=Ts/xn,e=mo/xn;for(let i=0;i<mo;i+=1)for(let s=0;s<Ts;s+=1)n[i*Ts+s]=Math.floor(i/e)*xn+Math.floor(s/t);return n})();class F1{width=Ts;height=mo;hp;kind;density;display;dirty=!0;foam;foamDirty=!1;foamLeft=0;dustLeft=0;haze;shape;glass;finished=!1;cellOf=U1;cellLeft=new Float32Array(xn*xn);cellTotal=new Float32Array(xn*xn);cellClean=new Uint8Array(xn*xn);cellTough=new Uint8Array(xn*xn);cellsWithDirt=0;cleanCells=0;toughCells=0;toughClean=0;foamCover;touched;touchedList=[];nextList=[];constructor(t,e){const i=this.width*this.height;this.hp=new Float32Array(i),this.kind=new Uint8Array(i),this.density=new Uint8Array(i),this.display=new Uint8Array(i),this.touched=new Uint8Array(i),this.foam=new Uint8Array(i),this.foamCover=new Uint16Array(i),this.haze=e.haze,this.shape=e.shape,this.glass=new Uint8Array(i);for(let s=0;s<this.height;s+=1)for(let r=0;r<this.width;r+=1){const o=Gc(this.shape,(r+.5)/this.width,(s+.5)/this.height);this.glass[s*this.width+r]=o>0?1:0}O1(this,t,e);for(let s=0;s<i;s+=1){const r=this.kind[s],o=Xs[r];this.hp[s]=o,this.display[s]=o>0?255:0,this.cellTotal[this.cellOf[s]]+=o,r>=2&&(this.cellTough[this.cellOf[s]]=1),r>=qr&&(this.foamLeft+=1),r===1&&(this.dustLeft+=1)}this.cellLeft.set(this.cellTotal);for(let s=0;s<xn*xn;s+=1)this.cellTotal[s]>0?this.cellsWithDirt+=1:this.cellClean[s]=1,this.cellTough[s]&&(this.toughCells+=1)}get cleanFraction(){return this.cellsWithDirt?this.cleanCells/this.cellsWithDirt:1}get toughFraction(){return this.toughCells?this.toughClean/this.toughCells:1}get snapReady(){return this.cleanFraction>=Yu&&this.toughFraction>=Wx}sweep(t,e,i,s,r,o,a=!1){const l=this.width,c=Math.max(0,Math.floor(Math.min(t,i)-r)),h=Math.min(l-1,Math.ceil(Math.max(t,i)+r)),u=Math.max(0,Math.floor(Math.min(e,s)-r)),f=Math.min(this.height-1,Math.ceil(Math.max(e,s)+r));if(c>h||u>f)return this.release(),Na;const m=i-t,g=s-e,S=m*m+g*g,v=r*r,_=this.nextList;_.length=0;let E=0,A=0,y=0,R=0;for(let w=u;w<=f;w+=1){const P=w+.5-e;for(let x=c;x<=h;x+=1){const T=x+.5-t,L=S>0?Ds((T*m+P*g)/S,0,1):0,U=T-L*m,k=P-L*g;if(U*U+k*k>v)continue;const H=w*l+x;if(_.push(H),this.touched[H]||this.hp[H]<=0)continue;const O=this.kind[H];if(O>=qr&&!a){R+=1;continue}const z=this.hp[H],Z=Math.max(0,z-o);if(this.hp[H]=Z,E+=z-Z,this.display[H]=Math.round(255*Z/Xs[O]),O>=qr){const at=Xs[O];z===at&&Z>0?(this.foamAt(H,1),y+=1):z<at&&Z===0&&this.foamAt(H,-1),Z===0&&(this.foamLeft-=1)}O===1&&Z===0&&(this.dustLeft-=1);const V=this.cellOf[H];this.cellLeft[V]-=z-Z,!this.cellClean[V]&&this.cellLeft[V]<=this.cellTotal[V]*hf&&(this.cellClean[V]=1,this.cleanCells+=1,this.cellTough[V]&&(this.toughClean+=1),A+=1)}}for(const w of this.touchedList)this.touched[w]=0;for(const w of _)this.touched[w]=1;return this.nextList=this.touchedList,this.touchedList=_,E>0&&(this.dirty=!0),E>0||A>0||R>0?{removed:E,cellsCleared:A,foamed:y,blocked:R}:Na}foamAt(t,e){const i=t%this.width,s=(t-i)/this.width;for(const{dx:r,dy:o,w:a}of N1){const l=i+r,c=s+o;if(l<0||c<0||l>=this.width||c>=this.height)continue;const h=c*this.width+l;this.glass[h]&&(this.foamCover[h]=Math.max(0,this.foamCover[h]+e*a),this.foam[h]=Math.min(255,this.foamCover[h]))}this.foamDirty=!0}scrub(t,e,i,s,r){const o=this.width,a=Math.max(0,Math.floor(Math.min(t,i)-r)),l=Math.min(o-1,Math.ceil(Math.max(t,i)+r)),c=Math.max(0,Math.floor(Math.min(e,s)-r)),h=Math.min(this.height-1,Math.ceil(Math.max(e,s)+r)),u=i-t,f=s-e,m=u*u+f*f,g=r*r;let S=0,v=0;for(let _=c;_<=h;_+=1){const E=_+.5-e;for(let A=a;A<=l;A+=1){const y=_*o+A;if(this.kind[y]!==1||this.hp[y]<=0)continue;const R=A+.5-t,w=m>0?Ds((R*u+E*f)/m,0,1):0;if((R-w*u)**2+(E-w*f)**2>g)continue;const P=this.hp[y];this.hp[y]=0,this.display[y]=0,this.dustLeft-=1,S+=P;const x=this.cellOf[y];this.cellLeft[x]-=P,!this.cellClean[x]&&this.cellLeft[x]<=this.cellTotal[x]*hf&&(this.cellClean[x]=1,this.cleanCells+=1,this.cellTough[x]&&(this.toughClean+=1),v+=1)}}return S>0&&(this.dirty=!0),S>0||v>0?{removed:S,cellsCleared:v,foamed:0,blocked:0}:Na}release(){for(const t of this.touchedList)this.touched[t]=0;this.touchedList.length=0}finish(){this.hp.fill(0),this.display.fill(0),this.foamLeft=0,this.dustLeft=0,this.cellLeft.fill(0),this.cellClean.fill(1),this.cleanCells=this.cellsWithDirt,this.toughClean=this.toughCells,this.finished=!0,this.release(),this.dirty=!0}splat(t,e,i){const s=new Map,r=(h,u)=>{s.set(h,Math.min(s.get(h)??1,u))},o=Math.round(Vo(this.shape)*this.width),a=17+i()*4;Xi(this,i,t,e,a,o,r);for(let h=0;h<6;h+=1){const u=i()*Math.PI*2,f=a*(1.25+i()*.6);Xi(this,i,t+Math.cos(u)*f,e+Math.sin(u)*f,2+i()*2.5,o,r)}const l=14+i()*14;for(let h=0;h<l;h+=1)Xi(this,i,t+(i()-.5)*1.5,e-a-h,2.6-h/l*1.4,o,r);this.finished&&(this.finished=!1,this.foam.fill(0),this.foamCover.fill(0),this.foamDirty=!0,this.cellTotal.fill(0),this.cellLeft.fill(0),this.cellClean.fill(1),this.cellTough.fill(0),this.cellsWithDirt=0,this.cleanCells=0,this.toughCells=0,this.toughClean=0);const c=Xs[3];for(const[h,u]of s){if(!this.glass[h]||this.hp[h]>=c)continue;const f=this.kind[h];f>=qr&&this.hp[h]>0&&(this.hp[h]<Xs[f]&&this.foamAt(h,-1),this.foamLeft-=1),f===1&&this.hp[h]>0&&(this.dustLeft-=1);const m=c-this.hp[h];this.kind[h]=3,this.density[h]=Math.round(u*255),this.hp[h]=c,this.display[h]=255;const g=this.cellOf[h];this.cellTotal[g]===0?(this.cellsWithDirt+=1,this.cellClean[g]=0):this.cellClean[g]&&(this.cellClean[g]=0,this.cleanCells-=1,this.cellTough[g]&&(this.toughClean-=1)),this.cellTough[g]||(this.cellTough[g]=1,this.toughCells+=1),this.cellTotal[g]+=m,this.cellLeft[g]+=m}this.dirty=!0}toughBox(){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let r=0;r<this.hp.length;r+=1){if(this.kind[r]<2||this.hp[r]<=0)continue;const o=r%this.width,a=(r-o)/this.width;o<t&&(t=o),o>i&&(i=o),a<e&&(e=a),a>s&&(s=a)}return i<0?null:{x0:t,y0:e,x1:i,y1:s}}get mullionX(){return this.shape.mullionX}}function O1(n,t,e){const{width:i,height:s}=n,r=Rn(t),o=Math.round(Vo(e.shape)*i),a=z1(r,6),l=Array.from({length:9},()=>({x:o+r()*(i-2*o),width:1.2+r()*2.2,strength:.12+r()*.2}));for(let c=0;c<s;c+=1)for(let h=0;h<i;h+=1){const u=c*i+h;if(!n.glass[u])continue;const f=Gc(e.shape,(h+.5)/i,(c+.5)/s)*i,m=Math.max(0,1-f/14);let g=0;for(const _ of l)g+=_.strength*Math.max(0,1-Math.abs(h-_.x)/_.width);const S=Math.max(0,1-c/(s*.45))*.18,v=.5+.32*a(h/i,c/s)+.2*m+S+g;n.kind[u]=1,n.density[u]=Math.round(255*Ds(v,0,1))}for(let c=0;c<e.splashes;c+=1){const h=o+14+r()*(i-2*o-28),u=o+14+r()*(s-2*o-28),f=6+r()*7;Xi(n,r,h,u,f,o,$r(n,2));const m=4+Math.floor(r()*6);for(let g=0;g<m;g+=1){const S=r()*Math.PI*2,v=f*(1.15+r()*.9);Xi(n,r,h+Math.cos(S)*v,u+Math.sin(S)*v,1.4+r()*1.8,o,$r(n,2))}}for(let c=0;c<e.gifts;c+=1){const h=o+16+r()*(i-2*o-32),u=o+30+r()*(s-2*o-46),f=6+r()*2.5;Xi(n,r,h,u,f,o,$r(n,3));const m=8+r()*12;for(let g=0;g<m;g+=1)Xi(n,r,h+(r()-.5)*1.5,u-f-g,1.6-g/m*.8,o,$r(n,3))}for(let c=0;c<e.marker;c+=1)B1(n,r,o);for(let c=0;c<e.palms;c+=1)k1(n,r,o)}function Sf(n,t,e,i=0,s=Math.PI*2,r=20){return Array.from({length:r+1},(o,a)=>{const l=i+(s-i)*a/r;return[n+Math.cos(l)*e,t+Math.sin(l)*e]})}const yf=[[[[.05,.95],[.05,.05],[.95,.05]],[[.12,.2],[.38,.45],[.55,.35],[.88,.85]],[[.88,.85],[.66,.82]],[[.88,.85],[.84,.62]]],[Array.from({length:25},(n,t)=>{const e=t/24*Math.PI*2,i=16*Math.sin(e)**3,s=13*Math.cos(e)-5*Math.cos(2*e)-2*Math.cos(3*e)-Math.cos(4*e);return[.5+i/34,.55+s/34]})],[Sf(.5,.5,.45),[[.35,.6],[.35,.67]],[[.65,.6],[.65,.67]],Sf(.5,.5,.27,Math.PI*1.15,Math.PI*1.85,10)],[Array.from({length:11},(n,t)=>{const e=Math.PI/2+t*Math.PI/5,i=t%2?.2:.48;return[.5+Math.cos(e)*i,.5+Math.sin(e)*i]})],[[[.08,.5],[.38,.15],[.95,.92]]],[Array.from({length:33},(n,t)=>{const e=t/32*Math.PI*4,i=.06+.42*e/(Math.PI*4);return[.5+Math.cos(e)*i,.5+Math.sin(e)*i]})]];function B1(n,t,e){const{width:i,height:s}=n,r=yf[Math.floor(t()*yf.length)],o=36+t()*24,a=e+2+t()*Math.max(1,i-2*e-4-o),l=e+6+t()*Math.max(1,s-2*e-12-o),c=Math.floor(t()*4),h=2.3;for(const u of r)for(let f=1;f<u.length;f+=1){const m=a+u[f-1][0]*o,g=l+u[f-1][1]*o,S=a+u[f][0]*o,v=l+u[f][1]*o;uc(n,m,g,S,v,h,_=>{n.kind[_]>4||(n.kind[_]=4,n.density[_]=c)})}}function k1(n,t,e){const{width:i,height:s}=n,r=.9+t()*.3,o=e+20+t()*(i-2*e-40),a=e+22+t()*(s-2*e-52),l=(t()-.5)*.9,c=Math.cos(l),h=Math.sin(l),u=(w,P)=>[o+(w*c-P*h)*r,a+(w*h+P*c)*r],f=w=>{const P=w%i+.5-o,x=Math.floor(w/i)+.5-a;n.kind[w]=5,n.density[w]=Math.round(127.5+127.5*Math.sin(Math.hypot(P,x*1.3)*1.4))},[m,g]=u(0,0),S=10*r,v=12*r;for(let w=Math.floor(g-v-2);w<=Math.ceil(g+v+2);w+=1)for(let P=Math.floor(m-v-2);P<=Math.ceil(m+v+2);P+=1){if(P<0||w<0||P>=i||w>=s)continue;const x=(P+.5-m)*c+(w+.5-g)*h,T=-(P+.5-m)*h+(w+.5-g)*c;(x/S)**2+(T/v)**2<=1&&n.glass[w*i+P]&&f(w*i+P)}const _=[[-7,9,-.18,10],[-2.4,11,-.06,13],[2.4,11,.06,12.5],[7,9,.18,9.5]];for(const[w,P,x,T]of _){const[L,U]=u(w,P),[k,H]=u(w+Math.sin(x)*T,P+Math.cos(x)*T);uc(n,L,U,k,H,2.7*r,f)}const[E,A]=u(-9,-2),[y,R]=u(-17,4);uc(n,E,A,y,R,3*r,f)}function uc(n,t,e,i,s,r,o){const{width:a,height:l}=n,c=i-t,h=s-e,u=c*c+h*h;for(let f=Math.max(0,Math.floor(Math.min(e,s)-r));f<=Math.min(l-1,Math.ceil(Math.max(e,s)+r));f+=1)for(let m=Math.max(0,Math.floor(Math.min(t,i)-r));m<=Math.min(a-1,Math.ceil(Math.max(t,i)+r));m+=1){const g=f*a+m;if(!n.glass[g])continue;const S=m+.5-t,v=f+.5-e,_=u>0?Ds((S*c+v*h)/u,0,1):0;(S-_*c)**2+(v-_*h)**2<=r*r&&o(g)}}function Xi(n,t,e,i,s,r,o){const{width:a,height:l}=n,c=3+Math.floor(t()*4),h=t()*Math.PI*2,u=.18+t()*.2,f=s*(1+u);for(let m=Math.floor(i-f);m<=Math.ceil(i+f);m+=1)for(let g=Math.floor(e-f);g<=Math.ceil(e+f);g+=1){if(g<r||m<r||g>=a-r||m>=l-r||!n.glass[m*a+g])continue;const S=g+.5-e,v=m+.5-i,_=Math.atan2(v,S),E=s*(1+u*Math.sin(c*_+h)),A=S*S+v*v;A>E*E||o(m*a+g,Math.sqrt(A)/E)}}function $r(n,t){return(e,i)=>{const s=Math.round(i*255);n.kind[e]<t?(n.kind[e]=t,n.density[e]=s):n.kind[e]===t&&(n.density[e]=Math.min(n.density[e],s))}}function z1(n,t){const e=Array.from({length:(t+1)*(t+1)},()=>n()*2-1),i=(r,o)=>e[o*(t+1)+r],s=r=>r*r*(3-2*r);return(r,o)=>{const a=r*t,l=o*t,c=Math.min(t-1,Math.floor(a)),h=Math.min(t-1,Math.floor(l)),u=s(a-c),f=s(l-h),m=i(c,h)*(1-u)+i(c+1,h)*u,g=i(c,h+1)*(1-u)+i(c+1,h+1)*u;return m*(1-f)+g*f}}class G1{constructor(t){this.game=t}game;list=[];everywhere=!1;next=pf;ids=0;random=Rn(596448);get active(){return this.everywhere||!!this.game.floorDef(this.game.floor).pigeons}arrive(){this.next=pf}shoo(t){t.state!=="out"&&(t.state="out",t.t=0,t.scared=!0,this.game.events.emit("pigeon",{pigeon:t,what:"shoo"}))}update(t){const e=this.game.canWash;for(const r of this.list)switch(r.t+=t,!e&&r.state!=="out"&&this.leave(r),r.state){case"in":r.t>=Zu&&this.set(r,"sit");break;case"sit":r.t>=a1&&this.set(r,"flutter");break;case"flutter":r.t>=l1&&(this.splat(r),this.leave(r));break}for(let r=this.list.length-1;r>=0;r-=1){const o=this.list[r];o.state==="out"&&o.t>=Ku&&this.list.splice(r,1)}if(!e||!this.active||(this.next-=t,this.next>0))return;const[i,s]=r1;this.next=i+this.random()*(s-i),this.spawn()}spawn(){if(this.list.filter(a=>a.state!=="out").length>=o1)return;const t=new Set(this.list.filter(a=>a.state!=="out").map(a=>a.column)),e=this.game.panes(this.game.floor).filter(a=>!t.has(a.column));if(!e.length)return;const i=e.filter(a=>a.clean),s=i.length?i:e,r=s[Math.floor(this.random()*s.length)],o={id:this.ids+=1,floor:r.floor,column:r.column,offset:(this.random()-.5)*.6,side:r.column===0?-1:r.column===2?1:this.random()<.5?-1:1,state:"in",t:0,scared:!1};this.list.push(o),this.game.events.emit("pigeon",{pigeon:o,what:"arrive"})}set(t,e){t.state=e,t.t=0,e==="sit"&&this.game.events.emit("pigeon",{pigeon:t,what:"land"})}leave(t){t.state="out",t.t=0}splat(t){const e=this.game.panes(t.floor)[t.column];if(!e)return;const{width:i,height:s}=e.mask;let r=Math.min(i*.8,Math.max(i*.2,(.5+t.offset)*i));const o=e.mask.mullionX;o!==null&&Math.abs(r-o*i)<i*.17&&(r=o*i+Math.sign(r-o*i||1)*i*.17);const a=s*(.2+this.random()*.28);this.game.soil(e,r,a,this.random),this.game.events.emit("pigeon",{pigeon:t,what:"splat",at:{u:r/i,v:a/s}})}}class H1{constructor(t){this.game=t}game;spot=null;hopFrom=null;hop=-1;path=[];index=0;swept=new WeakSet;get owned(){return this.game.value("robot")>0}update(t){const e=this.game;if(!this.owned)return;if(this.hop>=0){if(this.hop+=t/t1,this.hop<1)return;this.hop=-1,this.hopFrom=null}if(!e.canWash){this.spot&&this.jump(null);return}const i=this.spot;if(i&&this.index>=this.path.length&&this.swept.add(i.pane),!(i&&this.index<this.path.length&&i.pane.floor===e.floor&&!i.pane.clean&&i.pane.mask.dustLeft>0)){const r=this.pick();r&&this.start(r);return}this.crawl(t*e.value("robot"))}pick(){const t=this.spot?.pane.column??1;let e=null;for(const i of this.game.panes(this.game.floor))i.clean||i.mask.dustLeft===0||this.swept.has(i)||i.window?.closed||(!e||Math.abs(i.column-t)<Math.abs(e.column-t))&&(e=i);return e}start(t){const{width:e,height:i}=t.mask,s=ff*e,r=0,o=e;this.path=[];let a=!0;for(let l=i-s*.7;l>s*.3;l-=s*1.5)this.path.push({x:a?r:o,y:l},{x:a?o:r,y:l}),a=!a;this.index=1,this.jump({pane:t,x:this.path[0].x,y:this.path[0].y}),this.game.events.emit("robot",{what:"hop"})}jump(t){this.hopFrom=this.spot,this.spot=t,this.hop=0}crawl(t){const e=this.spot;if(!e)return;const i=ff*e.pane.mask.width;let s=t;for(;s>0&&this.index<this.path.length;){const r=this.path[this.index],o=r.x-e.x,a=r.y-e.y,l=Math.hypot(o,a),c=Math.min(l,s),h=l>1e-6?e.x+o/l*c:r.x,u=l>1e-6?e.y+a/l*c:r.y;this.game.scrub(e.pane,e.x,e.y,h,u,i),e.x=h,e.y=u,s-=c,l-c<1e-6&&(this.index+=1)}}}class V1{handlers=new Map;on(t,e){let i=this.handlers.get(t);return i||(i=new Set,this.handlers.set(t,i)),i.add(e),()=>i.delete(e)}emit(t,e){const i=this.handlers.get(t);if(i)for(const s of[...i])s(e)}}const W1={removed:0,cellsCleared:0,foamed:0,blocked:0},X1=n=>n*n*(3-2*n);class q1{constructor(t){this.seed=t}seed;events=new V1;coins=0;floor=0;cradle=0;panesCleaned=0;levels={bucket:0,squeegee:0,lift:0,soap:0,robot:0};best=0;water=go.bucket.values[0];waterCost=1;foam=!1;phase="wash";run={number:1,windows:0,coins:0,fromFloor:0};pigeons=new G1(this);robot=new H1(this);floors=new Map;phaseTime=0;clock=0;lineAt=-1/0;move={from:0,to:0,duration:1};dry=!1;closedAt=new WeakMap;regularDone=null;rubbing=!1;rubbed=0;buildingIndex=0;building=As[0];moved=!1;get hasNextBuilding(){return this.buildingIndex+1<As.length}nextBuilding(){this.phase!=="roof"||!this.hasNextBuilding||(this.moved=!1,this.setPhase("move"))}standOnRoof(){this.floor=this.floorCount,this.cradle=this.floor,this.best=this.floor,this.floors.clear(),this.setPhase("roof")}showGallery(t,e=1){this.building=t,this.startAt(e);for(let i=0;i<this.floorCount;i+=1)for(const s of this.panes(i))s.mask.finish(),s.clean=!0,s.washed=Math.max(1,s.washed)}startBuilding(t){this.enter(Math.max(0,Math.min(t,As.length-1))),this.cradle=this.floor}get capacity(){return this.value("bucket")}value(t){const e=go[t].values;return e[Math.min(this.levels[t],e.length-1)]}price(t){return go[t].prices[this.levels[t]]??null}available(t){return this.buildingIndex>=1||!jx.includes(t)}buy(t){const e=this.price(t);return this.phase!=="summary"||!this.available(t)||e===null||this.coins<e?!1:(this.coins-=e,this.levels[t]+=1,t==="bucket"&&(this.water=this.capacity),this.events.emit("bought",{id:t,level:this.levels[t],price:e}),!0)}isAsking(t){const e=t.window;return!e||!(e.ask||e.knock)?!1:this.canWash&&!t.clean&&t.floor===this.floor&&t.mask.cleanFraction<Zx}floorDef(t){const e=this.building.floors;return e[Math.max(0,Math.min(t,e.length-1))]}get canWash(){return this.phase==="wash"}get floorCount(){return this.building.floors.length}panes(t){if(t<0||t>=this.floorCount)return[];let e=this.floors.get(t);return e||(e=Array.from({length:mi},(i,s)=>this.createPane(t,s)),this.floors.set(t,e)),e}sweep(t,e,i,s,r){if(!this.canWash||t.clean||t.floor!==this.floor)return W1;const o=this.value("squeegee")*t.mask.width/2,a=t.mask.sweep(e,i,s,r,o,qx,this.foam);return a.blocked>0&&(this.rubbing=!0),a.removed>0&&t.window?.closed&&this.closedAt.set(t,this.clock),a.cellsCleared>0&&this.progress(t),a}scrub(t,e,i,s,r,o){if(!this.canWash||t.clean||t.floor!==this.floor)return;t.mask.scrub(e,i,s,r,o).cellsCleared>0&&this.progress(t,"robot")}spend(t){t<=0||this.water<=0||(this.water=Math.max(0,this.water-t*this.waterCost),!(this.water>0)&&(this.phase==="wash"?this.setPhase("drained"):this.dry=!0))}startAt(t){this.floor=Math.max(0,Math.min(t,this.floorCount-1)),this.cradle=this.floor,this.best=this.floor,this.run.fromFloor=this.floor,this.floors.clear()}startRun(){this.phase==="summary"&&(this.run={number:this.run.number+1,windows:0,coins:0,fromFloor:this.floor},this.water=this.capacity,this.dry=!1,this.travel(this.floor,"ascend"))}soil(t,e,i,s){t.mask.splat(e,i,s);const r=t.clean;t.clean=!1,this.events.emit("soiled",{pane:t,wasClean:r})}update(t){if(this.phaseTime+=t,this.clock+=t,this.pigeons.update(t),this.robot.update(t),!this.foam&&this.phase==="wash"){this.rubbing&&(this.rubbed+=t);const e=this.rubbed>=Yx,i=this.phaseTime>=$x&&this.panes(this.floor).some(s=>s.mask.foamLeft>0);(e||i)&&this.giveFoam()}switch(this.rubbing=!1,this.phase==="wash"&&this.floorDone()&&this.floorClean(),this.phase){case"rest":this.phaseTime>=Kx&&this.clock-this.lineAt>=Jx&&(this.move={from:this.floor,to:this.floor+1,duration:Qx/this.value("lift")},this.setPhase("lift"));break;case"drained":this.phaseTime>=n1&&this.travel(uf,"descend");break;case"refill":{const e=Math.min(1,this.phaseTime/$u);this.water=this.capacity*(1-(1-e)*(1-e)),e>=1&&(this.water=this.capacity,this.setPhase("summary"));break}case"move":!this.moved&&this.phaseTime>=df&&(this.moved=!0,this.enter(this.buildingIndex+1),this.cradle=uf),this.phaseTime>=df*2&&this.travel(0,"ascend");break;case"lift":case"descend":case"ascend":{const e=Math.min(1,this.phaseTime/this.move.duration);this.cradle=this.move.from+(this.move.to-this.move.from)*X1(e),e>=1&&this.arrive();break}}}giveFoam(){this.foam||(this.foam=!0,this.events.emit("tool",{id:"foam"}))}enter(t){this.buildingIndex=t,this.building=As[t],this.floors.clear(),this.pigeons.list.length=0,this.floor=0,this.best=0,this.water=this.capacity,this.dry=!1,this.run={number:this.run.number+1,windows:0,coins:0,fromFloor:0},this.events.emit("building",{index:t})}travel(t,e){const i=Math.abs(t-this.cradle),s=(i1+i*s1)/this.value("lift");this.move={from:this.cradle,to:t,duration:s},this.setPhase(e)}arrive(){if(this.cradle=this.move.to,this.phase==="lift"){if(this.floor+=1,this.best=Math.max(this.best,this.floor),this.floor>=this.floorCount){this.setPhase("roof"),this.coins+=this.building.bonus,this.events.emit("bonus",{amount:this.building.bonus});return}if(this.dry){this.dry=!1,this.setPhase("drained");return}this.setPhase("wash")}else this.phase==="descend"?(this.water=0,this.setPhase("refill")):this.setPhase("wash")}setPhase(t){const e=this.phase;this.phase=t,this.phaseTime=0,t==="wash"&&this.pigeons.arrive(),this.events.emit("phase",{phase:t,previous:e}),t==="drained"&&this.events.emit("drained",{run:this.run})}createPane(t,e){const i=Li(this.seed,t,e),s=Rn(i^2654435769),r=this.floorDef(t),o=([c,h])=>Math.floor(c+s()*(h-c+.999)),a=new F1(i,{splashes:o(r.dirt.splashes),gifts:o(r.dirt.gifts),marker:o(r.dirt.marker??[0,0]),palms:o(r.dirt.palms??[0,0]),haze:r.dirt.haze,shape:r.window??this.building.window}),l={floor:t,column:e,mask:a,paid:0,clean:!1,washed:0,window:r.windows?.[e]};return t<this.floor&&(a.finish(),l.clean=!0,l.washed=1,l.paid=Hi),l}progress(t,e="blade"){const i=t.mask.cleanFraction;if(t.mask.snapReady){this.finishPane(t);return}const s=Math.min(Hi,Math.floor(i/Yu*(Hi+1)));if(s>t.paid){const r=s-t.paid;t.paid=s,this.pay(t,r,e)}}finishPane(t){t.mask.finish(),t.clean=!0,t.washed+=1,t.washed===1&&t.window?.thanks&&(this.lineAt=this.clock),this.panesCleaned+=1,this.run.windows+=1;const e=Math.round((Hi+Da)*(this.value("soap")-1)),i=Hi-t.paid+Da+e;t.paid=Hi,this.events.emit("paneClean",{pane:t}),this.pay(t,i,"pane"),t.window?.closed&&t.washed===1&&this.reveal(t,t.window.closed),this.floorDone()&&this.floorClean()}floorDone(){const t=this.panes(this.floor);if(!t.every(i=>i.clean||i.window?.closed))return!1;this.regularDone?.floor!==this.floor&&(this.regularDone={floor:this.floor,at:this.clock});const e=this.clock-this.regularDone.at>d1;return t.every(i=>i.clean||e&&this.clock-(this.closedAt.get(i)??-1/0)>u1)}floorClean(){this.events.emit("floorClean",{floor:this.floor}),this.setPhase("rest")}reveal(t,e){const i=e==="director"?(Hi+Da)*this.building.pay*(h1-1):-Math.floor(this.run.coins*f1);this.coins+=i,this.run.coins+=i,this.events.emit("reveal",{pane:t,who:e,amount:i})}pay(t,e,i){const s=e*this.building.pay;this.coins+=s,this.run.coins+=s,this.events.emit("coins",{pane:t,amount:s,from:i})}}const Wo={bucketEmpty:"Bucket's empty!",runWindows:"Windows: {n}",runCoins:"{n}",goUp:"Back up!",upBucket:"Bigger bucket",upSqueegee:"Wider squeegee",upLift:"Faster lift",upSoap:"Detergent",upRobot:"Window robot",maxed:"MAX",recordNew:"New record: floor {n}!",houseDone:"House done!",foamGot:"Foam nozzle!",tips:"Tips ×5!",fined:"Fined: −{n}",officeDone:"Office done!",buildingPay:"Job paid",toOffice:"To the office!",toBeContinued:"To be continued…",letterTitle:"A letter from the client",letterBody:"Brilliant! My office sparkles. Next job: the Seventh Heaven hotel — arches, balconies and very fussy guests. I'll be waiting for you there.",letterPs:"P.S. And after that — come up to me, in the Spire.",letterSign:"— The one at the top",record:"Record: floor {n}",foreman:"Foreman",foremanBucket:"With a bucket like that we'll make the roof. Next job's an office — double pay!",foremanSplash:"Mud splashes from the road. Those take two passes.",foremanSqueegee:"Wider squeegee — fewer strokes, less water.",foremanLift:"A faster lift — less riding, more washing.",foremanSoap:"With detergent the glass sparkles — and pays more.",foremanRobot:"Got it off a classified ad. Washes by itself, but only dust. The hard stuff is on you!",foremanPigeons:"Pigeons! They mess up clean glass. Swipe near one to shoo it.",foremanHalfway:"Halfway up! Don't look down — look in the windows.",foremanHouseTop:"Top floor! The roof's right over our heads.",foremanHouseDone:"House done! Next job's an office — they pay double.",foremanOffice:"Office folk pay double — they like to see the city they work for.",foremanOfficePigeons:"Pigeons here too — downtown crumbs taste better.",foremanMeeting:"Meeting rooms — glass floor to ceiling. And somebody drew on it in marker!",foremanFoam:"No way without foam! Take the nozzle: first pass foams, second wipes clean.",foremanFrames:"Departments! Candy-colored frames — the architect had a sweet tooth.",foremanBlinds:"Closed blinds are optional. A crown mug on the sill — a generous director. A cactus — a grumpy guard!",blindsAsk:"Wash?",foremanExecutive:"Executive floor! Rocket-ship windows — wash with care.",foremanOfficeTop:"Last office floor — the roof's right there!",foremanOfficeDone:"Office done! And here comes a letter from the client — by pigeon post!",grannyAsk:"I can't see a thing! Wipe it!",grannyThanks:"Oh, how bright! Thank you, dear!",grandpaThanks:"At last! Thirty years I've read my paper by lamplight.",kidThanks:"Mom! Spider-Man is outside!",catThanks:"Mrrow?",undershirtThanks:"Hey! I'm not decent!",piesThanks:"Come in for pies! …Oh, you're outside.",gamerThanks:"Don't block the light, I'm in a raid!",artistThanks:"Light! Now I can finish my sunset.",clerkAsk:"Wipe it! I need something to stare at besides spreadsheets!",clerkThanks:"A view! Now I can pretend to think.",coffeeThanks:"Sunshine! My coffee tastes better already.",coderThanks:"Did you try turning the window off and on? Oh, it works.",sleepyThanks:"I wasn't sleeping! I was… strategizing.",bossThanks:"See this chart? It's going up — just like you!",internThanks:"Take me with you! The copier bites.",accountantThanks:"Window: twelve coins. Filed under “joy”.",salesThanks:"I'll call you back — our view just went up in price!",dogThanks:"Woof! Woof!",golferThanks:"Splendid! Now I can see where the ball lands.",directorThanks:"Brilliant! Here, a little tip — don't be shy!",guardThanks:"Who authorized this?! I'm calling the manager!",officeSign:"TRANSPARENCY INC."},Y1={bucketEmpty:"Ведро пустое!",runWindows:"Окон: {n}",runCoins:"{n}",goUp:"Наверх!",upBucket:"Ведро побольше",upSqueegee:"Сквиджи пошире",upLift:"Подъёмник быстрее",upSoap:"Моющее средство",upRobot:"Робот на присосках",maxed:"МАКС",recordNew:"Новый рекорд: {n}-й этаж!",houseDone:"Дом сдали!",foamGot:"Пенная насадка!",tips:"Чаевые ×5!",fined:"Штраф: −{n}",officeDone:"Офис сдали!",buildingPay:"За заказ",toOffice:"В офис!",toBeContinued:"Продолжение следует…",letterTitle:"Письмо от заказчика",letterBody:"Блестяще! Мой офис сверкает. Следующий заказ — отель «Седьмое небо»: арки, балконы и очень капризные гости. Жду вас там.",letterPs:"P.S. А потом — ко мне, в Шпиль.",letterSign:"— Тот, кто наверху",record:"Рекорд: {n}-й этаж",foreman:"Бригадир",foremanBucket:"С таким ведром дотянем до крыши. А потом — офис, там платят вдвое!",foremanSplash:"Брызги с дороги. Такие — в два прохода.",foremanSqueegee:"Сквиджи шире — меньше махать, меньше воды.",foremanLift:"Подъёмник быстрее — меньше катаемся, больше моем.",foremanSoap:"С моющим средством стекло блестит — и платят больше.",foremanRobot:"Купил по объявлению. Моет сам, но только пыль. Сложное — на тебе!",foremanPigeons:"Голуби! Пачкают вымытое. Проведи рядом — улетят.",foremanHalfway:"Полдома позади! Не смотри вниз — смотри в окна.",foremanHouseTop:"Последний этаж! Крыша прямо над головой.",foremanHouseDone:"Дом сдали! Следующий заказ — офис, там платят вдвое.",foremanOffice:"Офисные платят вдвое — им же надо видеть, как они работают.",foremanOfficePigeons:"И тут голуби — в центре крошки вкуснее.",foremanMeeting:"Переговорки — стекло в пол. И кто-то рисовал по нему маркером!",foremanFoam:"Тут без пены никак! Держи насадку: первый проход пенит, второй — чисто.",foremanFrames:"Отделы! Рамы цветные — архитектор любил конфеты.",foremanBlinds:"Закрытые жалюзи мыть не обязательно. Кружка с короной — там щедрый директор, кактус — злой охранник!",blindsAsk:"Мыть?",foremanExecutive:"Директорский этаж! Окна как в ракете — мой аккуратно.",foremanOfficeTop:"Последний этаж офиса — крыша уже видна!",foremanOfficeDone:"Офис сдали! А вот и письмо от заказчика — голубиной почтой!",grannyAsk:"Ничего не вижу! Протрите!",grannyThanks:"Ой, светло-то как! Спасибо!",grandpaThanks:"Наконец-то! Тридцать лет газету при лампе читал.",kidThanks:"Мама! Там человек-паук!",catThanks:"Мррр?",undershirtThanks:"Эй! Я вообще-то не одет!",piesThanks:"Заходи на пирожки! …Ой, ты же снаружи.",gamerThanks:"Не загораживай свет, у меня рейд!",artistThanks:"Свет! Теперь допишу закат.",clerkAsk:"Протрите! Мне же надо куда-то смотреть, кроме таблиц!",clerkThanks:"Вид! Теперь можно делать вид, что думаю.",coffeeThanks:"Солнце! Кофе сразу вкуснее.",coderThanks:"Окно перезагрузили? О, заработало!",sleepyThanks:"Я не спал! Я… обдумывал стратегию.",bossThanks:"Видите график? Растёт — как вы!",internThanks:"Возьмите меня в люльку! Тут ксерокс кусается.",accountantThanks:"Окно — двенадцать монет. Проведу как «радость».",salesThanks:"Перезвоню! У нас вид подорожал!",dogThanks:"Гав! Гав!",golferThanks:"Отлично! Теперь видно, куда летит мяч.",directorThanks:"Блестяще! Держите на чай — да не стесняйтесь!",guardThanks:"Кто разрешил?! Вызываю управляющего!",officeSign:"ПРОЗРАЧНОСТЬ"},bf={en:Wo,ru:Y1};let nd=Wo,wf="en";function $1(n){const t=(n??"").toLowerCase().split(/[-_]/)[0];nd=bf[t]??Wo,wf=bf[t]?t:"en",document.documentElement.lang=wf}const Z1=/\{(\w+)\}/g;function Ae(n,t){const e=nd[n]??Wo[n];return t?e.replace(Z1,(i,s)=>s in t?String(t[s]):i):e}class K1{id="local";locale;constructor(t){this.locale=t||navigator.language||"en"}async init(){console.info(`[platform] local, язык ${this.locale}`)}loadingStart(){}loadingStop(){}gameplayStart(){}gameplayStop(){}async save(t,e){try{localStorage.setItem(t,e)}catch(i){console.warn(`[platform] не сохранить ${t}`,i)}}async load(t){try{return localStorage.getItem(t)}catch(e){return console.warn(`[platform] не прочитать ${t}`,e),null}}}async function J1(n){const t=new K1(n);return await t.init(),t}const Zr=.58,Do=.95,Ti=fe*.86*.28,Nn=0,vo=.62,Q1="#2b2233";class j1{group=new rn;water;waterBottom=.3;waterTop=.585;ropes=[];outline=new sn({color:Q1,side:on});bottle=new rn;foam=[];constructor(){const t=fe*.86,e=.72,i=new _e({color:"#1e63c8"}),s=new _e({color:"#174f9f"}),r=new _e({color:"#ffffff"}),o=new _e({color:"#3d4554"}),a=new _e({color:"#ffc93a"}),l=new _e({color:"#e8392f"}),c=new _e({color:"#2a2d36"}),h=new _e({color:"#b07a42"}),u=new _e({color:"#2f9bff"}),f=new _e({color:"#3b3f46"}),m=new _e({color:"#8fdcff",emissive:"#1d6fa8",emissiveIntensity:.45}),g=(w,P,x,T,L,U,k,H=.018)=>this.part(new Ze(w,P,x),k,T,L,U,H);g(t,.08,e,0,0,0,o),g(t,.34,.05,0,.19,e/2-.025,i),g(t+.004,.055,.056,0,.27,e/2-.022,r,0);for(const w of[-1,1])g(.05,.34,e,w*(t/2-.025),.19,0,i);g(t,.2,.04,0,.12,-e/2+.02,s);const S=.88;g(t,.075,.075,0,S,e/2-.025,a),g(t,.075,.075,0,S,-e/2+.025,a);for(const w of[-1,1])g(.075,.075,e,w*(t/2-.035),S,0,a);g(t,.05,.05,0,.6,e/2-.025,a);for(let w=0;w<=4;w+=1)g(.06,S-.36,.06,-t/2+.035+w*(t-.07)/4,(S+.36)/2,e/2-.025,a);for(const w of[-t/2+.035,0,t/2-.035])g(.06,S-.2,.06,w,(S+.2)/2,-e/2+.025,a);const v=new we(.02,.02,1,6).translate(0,.5,0);for(const w of[-1,1]){const P=w*(t/2-.12);g(.26,.3,.32,P,Zr-.15,0,l),this.part(new we(.09,.09,.28,14).rotateZ(Math.PI/2),c,P,Zr-.15,.17,.012);const x=new Yt(v,f);x.position.set(P,Zr,0),this.group.add(x),this.ropes.push(x)}g(.42,.22,.42,Ti,.15,Nn,h),this.part(new we(.21,.16,.36,22),u,Ti,.44,Nn,.014),this.part(new we(.218,.218,.035,22),r,Ti,vo-.01,Nn,0);const _=this.part(new Oc(.2,.014,6,24,Math.PI),c,Ti,vo,Nn,0);_.rotation.y=.3,this.water=this.part(new we(.19,.19,.02,22),m,Ti,this.waterTop,Nn,0);const E=new _e({color:"#ffffff",emissive:"#d8ecff",emissiveIntensity:.35});for(let w=0;w<12;w+=1){const P=w*2.4,x=.04+w%4*.035,T=new Yt(new hn(.045+w%3*.012,10,8),E);T.position.set(Math.cos(P)*x,.02+w%3*.01,Math.sin(P)*x),T.visible=!1,this.water.add(T),this.foam.push(T)}const A=new _e({color:"#13b0a2"}),y=Ti-.4;this.bottle.add(this.part(new Ze(.22,.2,.22),h,y,.14,Nn,.014)),this.bottle.add(this.part(new we(.075,.08,.26,16),A,y,.37,Nn,.012)),this.bottle.add(this.part(new we(.035,.035,.07,10),r,y,.535,Nn,.008)),this.bottle.add(this.part(new Ze(.1,.025,.03),r,y-.04,.565,Nn,.006)),this.bottle.visible=!1,this.group.add(this.bottle);const R=new Yt(new jn(t*1.12,1.35),new sn({map:tM(),transparent:!0,depthWrite:!1,opacity:.5}));R.position.set(0,.3,ve+.012-Do),this.group.add(R)}part(t,e,i,s,r,o){const a=new Yt(t,e);if(a.position.set(i,s,r),this.group.add(a),o>0){t.computeBoundingBox();const l=t.boundingBox?.getSize(new I)??new I(1,1,1),c=new Yt(t,this.outline);c.scale.set(1+2*o/Math.max(l.x,.01),1+2*o/Math.max(l.y,.01),1+2*o/Math.max(l.z,.01)),a.add(c)}return a}setRopes(t){const e=Math.max(.01,t-this.group.position.y-Zr);for(const i of this.ropes)i.scale.y=e}waterSurface(){return this.group.position.y+this.water.position.y}setSoap(t){this.bottle.visible=t>0,this.foam.forEach((e,i)=>e.visible=t>0&&i<3+t*3)}bucketTop(t){return t.set(this.group.position.x+Ti,this.group.position.y+vo,this.group.position.z+Nn)}setWater(t){const e=Math.min(1,Math.max(0,t));this.water.visible=e>.01,this.water.position.y=this.waterBottom+(this.waterTop-this.waterBottom)*e;const i=.84+.16*e;this.water.scale.set(i,1,i)}}function tM(){const n=document.createElement("canvas");n.width=128,n.height=64;const t=n.getContext("2d");if(!t)throw new Error("2D canvas недоступен");t.translate(64,32),t.scale(1,.5);const e=t.createRadialGradient(0,0,4,0,0,64);e.addColorStop(0,"rgba(40,20,30,0.85)"),e.addColorStop(.6,"rgba(40,20,30,0.45)"),e.addColorStop(1,"rgba(40,20,30,0)"),t.fillStyle=e,t.fillRect(-64,-64,128,128);const i=new Gn(n);return i.colorSpace=Ne,i}const qs=160,eM={color:"#8fd0ff",size:.07,gravity:-7,opacity:.85},nM={color:"#ffffff",size:.1,gravity:-2.2,opacity:.95};class Ef{constructor(t,e=eM){this.look=e;const i=new Oe;i.setAttribute("position",new un(this.positions,3));const s=new zo({size:e.size,map:t,color:e.color,transparent:!0,depthWrite:!1,opacity:e.opacity});this.points=new Ic(i,s),this.points.frustumCulled=!1,this.positions.fill(-1e3)}look;points;positions=new Float32Array(qs*3);velocities=new Float32Array(qs*3);life=new Float32Array(qs);next=0;emit(t,e,i,s,r){for(let o=0;o<s;o+=1){const a=this.next;this.next=(this.next+1)%qs,this.positions[a*3]=t+(Math.random()-.5)*r,this.positions[a*3+1]=e+(Math.random()-.5)*r,this.positions[a*3+2]=i+.02,this.velocities[a*3]=(Math.random()-.5)*1.2,this.velocities[a*3+1]=Math.random()*.8,this.velocities[a*3+2]=.3+Math.random()*.6,this.life[a]=.45+Math.random()*.35}}update(t){for(let e=0;e<qs;e+=1)if(!(this.life[e]<=0)){if(this.life[e]-=t,this.life[e]<=0){this.positions[e*3+1]=-1e3;continue}this.velocities[e*3+1]+=this.look.gravity*t,this.positions[e*3]+=this.velocities[e*3]*t,this.positions[e*3+1]+=this.velocities[e*3+1]*t,this.positions[e*3+2]+=this.velocities[e*3+2]*t}this.points.geometry.attributes.position.needsUpdate=!0}}const iM="#2b2233",sM=ui+.05,rM=.35,Ua=.2,oM=.17,aM=n=>n*n*(3-2*n);class lM{group=new rn;eyes=[];beacon;outline=new sn({color:iM,side:on});last=new I;from=new I;to=new I;look=0;time=0;constructor(){const t=new _e({color:"#f4f7fa"}),e=new _e({color:"#13b0a2"}),i=new _e({color:"#1f2633"}),s=new sn({color:"#5ad2ff"}),r=new _e({color:"#9aa3b4"}),o=new sn({color:"#ff4a3a"});for(const[a,l]of[[-.14,.11],[.14,.11],[-.14,-.11],[.14,-.11]])this.part(new we(.05,.05,.03,14).rotateX(Math.PI/2),r,a,l,-.03,.012);this.part(new Ze(.3,.24,.07),t,0,0,0,.016),this.part(new Ze(.302,.05,.072),e,0,-.06,0,0),this.part(new Ze(.2,.085,.012),i,0,.035,.038,.008);for(const a of[-.045,.045]){const l=new Yt(new hn(.018,10,8),s);l.position.set(a,.035,.046),this.group.add(l),this.eyes.push(l)}this.part(new we(.008,.008,.08,6),i,.09,.16,0,0),this.beacon=new Yt(new hn(.02,8,6),o),this.beacon.position.set(.09,.205,0),this.group.add(this.beacon),this.group.visible=!1}update(t,e,i){if(this.group.visible=e.owned,!e.owned)return;this.time+=t;const s=this.world(e.spot,i,this.to),r=this.group.position;if(e.hop>=0){const l=aM(Math.min(1,e.hop));this.world(e.hopFrom,i,this.from),r.lerpVectors(this.from,s,l),r.y+=rM*Math.sin(Math.PI*Math.min(1,e.hop))}else r.copy(s),e.spot&&(r.y+=.008*Math.sin(this.time*18));const o=(r.x-this.last.x)/Math.max(t,.001);this.look+=(Math.max(-1,Math.min(1,o*.6))-this.look)*Math.min(1,t*8);const a=this.time%3.4<.12?.15:1;this.eyes.forEach((l,c)=>{l.position.x=(c?.045:-.045)+this.look*.02,l.scale.y=a}),this.beacon.visible=this.time%1<.5,this.last.copy(r)}world(t,e,i){if(!t)return i.copy(e);const s=zn(t.pane.floor,t.pane.column),{width:r,height:o,shape:a}=t.pane.mask,l=oM/Ii;let c=Math.min(1-Ua,Math.max(Ua,t.x/r)),h=Math.min(1-l,Math.max(l,t.y/o));const u=()=>[-1,1].every(f=>[-1,1].every(m=>Gc(a,c+f*Ua*.8,h+m*l*.8)>-.02));for(let f=0;f<12&&!u();f+=1)c+=(.5-c)*.15,h+=(.5-h)*.15;return i.set(s.x+(c-.5)*Xt,s.y+(h-.5)*ae,sM)}part(t,e,i,s,r,o){const a=new Yt(t,e);if(a.position.set(i,s,r),this.group.add(a),o>0){t.computeBoundingBox();const l=t.boundingBox?.getSize(new I)??new I(1,1,1),c=new Yt(t,this.outline);c.scale.set(1+2*o/Math.max(l.x,.01),1+2*o/Math.max(l.y,.01),1+2*o/Math.max(l.z,.01)),a.add(c)}return a}}const Tf=140,Af=260,Rf=[[1,.86,.96],[.82,.95,1],[1,.97,.8],[.86,1,.9]];function Cf(n,t,e){const i=new Float32Array(n*3).fill(-1e3),s=new Float32Array(n*4),r=new Oe;r.setAttribute("position",new un(i,3)),r.setAttribute("color",new un(s,4));const o=new zo({size:e,map:t,vertexColors:!0,transparent:!0,depthWrite:!1}),a=new Ic(r,o);return a.frustumCulled=!1,{points:a,position:i,color:s,velocity:new Float32Array(n*3),life:new Float32Array(n),age:new Float32Array(n),next:0}}class cM{bubbles;suds;level=0;bucketDue=0;time=0;constructor(){this.bubbles=Cf(Tf,hM(),.08),this.suds=Cf(Af,fM(),.13)}get objects(){return[this.suds.points,this.bubbles.points]}setLevel(t){this.level=t,this.bubbles.points.material.size=.1+.035*t,this.suds.points.material.size=.2+.05*t}wipe(t,e,i,s){if(!(this.level<=0)){for(let r=0;r<=this.level;r+=1)this.sud(t+(Math.random()-.5)*s,e+(Math.random()-.5)*s*.5,i);Math.random()<.25*this.level&&this.bubble(t,e,i+.08,.25)}}burst(t,e,i,s){for(let r=0;r<s;r+=1)this.bubble(t+(Math.random()-.5)*.3,e,i,.6)}update(t,e){if(this.time+=t,this.level>0)for(this.bucketDue+=t*1.6*this.level;this.bucketDue>=1;)this.bucketDue-=1,this.bubble(e.x+(Math.random()-.5)*.25,e.y,e.z+(Math.random()-.5)*.2,.15);this.step(this.bubbles,t,!0),this.step(this.suds,t,!1)}bubble(t,e,i,s){const r=this.bubbles,o=r.next;r.next=(r.next+1)%Tf,r.position.set([t,e,i],o*3),r.velocity.set([(Math.random()-.5)*s,.35+Math.random()*.35,.1+Math.random()*.2],o*3),r.life[o]=1.4+Math.random()*(.8+.3*this.level),r.age[o]=0;const a=Rf[Math.floor(Math.random()*Rf.length)];r.color.set([a[0],a[1],a[2],0],o*4)}sud(t,e,i){const s=this.suds,r=s.next;s.next=(s.next+1)%Af,s.position.set([t,e,i],r*3),s.velocity.set([0,-.04-Math.random()*.04,0],r*3),s.life[r]=.9+.4*this.level+Math.random()*.3,s.age[r]=0,s.color.set([1,1,1,0],r*4)}step(t,e,i){const s=t.life.length;for(let r=0;r<s;r+=1){if(t.life[r]<=0)continue;t.age[r]+=e;const o=t.age[r]/t.life[r];if(o>=1){t.life[r]=0,t.position[r*3+1]=-1e3,t.color[r*4+3]=0;continue}const a=i?Math.sin((this.time+r)*5)*.12*e:0;t.position[r*3]+=t.velocity[r*3]*e+a,t.position[r*3+1]+=t.velocity[r*3+1]*e,t.position[r*3+2]+=t.velocity[r*3+2]*e,t.color[r*4+3]=Math.min(1,o*8)*(1-o*o)}t.points.geometry.attributes.position.needsUpdate=!0,t.points.geometry.attributes.color.needsUpdate=!0}}function hM(){const[n,t]=id(64),e=t.createRadialGradient(32,32,18,32,32,30);return e.addColorStop(0,"rgba(255,255,255,0.18)"),e.addColorStop(.7,"rgba(255,255,255,0.5)"),e.addColorStop(.93,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),t.strokeStyle="rgba(60,110,190,0.85)",t.lineWidth=3,t.beginPath(),t.arc(32,32,29,0,Math.PI*2),t.stroke(),t.fillStyle="rgba(255,255,255,0.95)",t.beginPath(),t.ellipse(23,21,6,3.5,-.6,0,Math.PI*2),t.fill(),sd(n)}function fM(){const[n,t]=id(64),e=t.createRadialGradient(32,32,6,32,32,31);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.65,"rgba(250,252,255,0.9)"),e.addColorStop(1,"rgba(235,245,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),t.strokeStyle="rgba(150,185,220,0.6)",t.lineWidth=1.6;for(const[i,s,r]of[[26,28,7],[39,36,5],[36,22,4]])t.beginPath(),t.arc(i,s,r,0,Math.PI*2),t.stroke();return sd(n)}function id(n){const t=document.createElement("canvas");t.width=n,t.height=n;const e=t.getContext("2d");if(!e)throw new Error("2D canvas недоступен");return[t,e]}function sd(n){const t=new Gn(n);return t.colorSpace=Ne,t}const bs=256,Un=1024,rd=.29,uM=35;class dM{group=new rn;glow;time=0;constructor(){const e=10*Un/bs,i=new Yt(new jn(10,e),new sn({map:pM(),transparent:!0,depthWrite:!1,fog:!1}));this.group.add(i),this.glow=new Yt(new jn(10*.9,10*.9),new sn({map:mM(),transparent:!0,depthWrite:!1,fog:!1,blending:pl})),this.glow.position.set(0,e/2-e*rd,.01),this.group.add(this.glow),this.group.position.set(15,uM-this.glow.position.y,-100)}update(t){this.time+=t,this.glow.material.opacity=.7+.3*Math.sin(this.time*2.4)}}function od(n,t){const e=document.createElement("canvas");e.width=n,e.height=t;const i=e.getContext("2d");if(!i)throw new Error("2D canvas недоступен");return[e,i]}function pM(){const[n,t]=od(bs,Un),e=Rn(4242),i=bs/2,s=Un*rd,r=62,o=34,a=s+26;t.save(),t.beginPath(),t.moveTo(i-r,Un),t.lineTo(i-o,a),t.lineTo(i+o,a),t.lineTo(i+r,Un),t.closePath(),t.clip();const l=t.createLinearGradient(i-r,0,i+r,0);l.addColorStop(0,"#2d5f9e"),l.addColorStop(.35,"#7fbef0"),l.addColorStop(.5,"#bfe4ff"),l.addColorStop(.65,"#6aaee6"),l.addColorStop(1,"#24508a"),t.fillStyle=l,t.fillRect(0,a,bs,Un);for(let f=a+8;f<Un;f+=12){t.fillStyle="rgba(20,50,90,0.35)",t.fillRect(0,f,bs,2);for(let m=i-r;m<i+r;m+=9)e()<.08&&(t.fillStyle="rgba(255,226,150,0.85)",t.fillRect(m,f-7,6,5))}t.restore(),t.fillStyle="#1d3c66",t.fillRect(i-o-4,s-22,(o+4)*2,48),t.fillStyle="#ffd96a",t.fillRect(i-o+6,s-12,(o-6)*2,26),t.fillStyle="rgba(255,255,255,0.7)",t.fillRect(i-o+6,s-12,(o-6)*2,5),t.beginPath(),t.moveTo(i-o-4,s-22),t.lineTo(i,s-120),t.lineTo(i+o+4,s-22),t.closePath();const c=t.createLinearGradient(i-o,0,i+o,0);c.addColorStop(0,"#3d74b8"),c.addColorStop(.5,"#cfeaff"),c.addColorStop(1,"#2f5f9c"),t.fillStyle=c,t.fill(),t.fillStyle="#9fb3c8",t.fillRect(i-2,s-200,4,84),t.fillStyle="#ff4b4b",t.beginPath(),t.arc(i,s-202,6,0,Math.PI*2),t.fill();for(let f=0;f<34;f+=1){const m=s+70+e()*240,g=i+(e()-.5)*240,S=22+e()*38,v=t.createRadialGradient(g,m,0,g,m,S);v.addColorStop(0,"rgba(255,255,255,0.95)"),v.addColorStop(.6,"rgba(255,255,255,0.6)"),v.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=v,t.fillRect(g-S,m-S,S*2,S*2)}t.globalCompositeOperation="destination-out";const h=t.createLinearGradient(0,Un*.62,0,Un);h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(1,"rgba(0,0,0,1)"),t.fillStyle=h,t.fillRect(0,Un*.62,bs,Un*.38),t.globalCompositeOperation="source-over";const u=new Gn(n);return u.colorSpace=Ne,u}function mM(){const[n,t]=od(128,128),e=t.createRadialGradient(64,64,2,64,64,64);e.addColorStop(0,"rgba(255,230,140,0.9)"),e.addColorStop(.3,"rgba(255,200,90,0.35)"),e.addColorStop(1,"rgba(255,180,60,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new Gn(n);return i.colorSpace=Ne,i}const gs=new I(.17,-.42,.46),Ys=new I(0,0,.055);class gM{group=new rn;head=new rn;blade;channel;caps=[];nozzle=new rn;width=0;angle=0;target=0;constructor(){const t=new _e({color:"#1c1d22"}),e=new _e({color:"#d9e1ea"}),i=new _e({color:"#3a4150"}),s=new _e({color:"#ffb01f"}),r=new _e({color:"#2b2f38"});this.blade=new Yt(new Ze(.07,Xt,.04),t),this.blade.position.z=-.03,this.channel=new Yt(new Ze(.045,Xt,.05),e),this.channel.position.z=.012,this.head.add(this.blade,this.channel);for(let E=0;E<2;E+=1){const A=new Yt(new Ze(.08,.035,.065),i);A.position.z=.005,this.caps.push(A),this.head.add(A)}const o=new Yt(new Ze(.09,.14,.04),s);o.position.z=.04,this.head.add(o);const a=new Yt(new hn(.048,14,10),s);a.position.copy(Ys);const l=gs.distanceTo(Ys),c=Kr(new Yt(new we(.027,.027,l,10),s),Ys,gs),h=Ys.clone().lerp(gs,.62),u=Kr(new Yt(new we(.035,.035,l*.4,10),r),h,gs);this.group.add(this.head,a,c,u);const f=new _e({color:"#13b0a2"}),m=new _e({color:"#ffffff"}),g=Ys.clone().lerp(gs,.3),S=Kr(new Yt(new we(.05,.05,.16,12),f),g,g.clone().lerp(gs,.25)),v=new Yt(new hn(.05,12,8),m);v.position.copy(g);const _=Kr(new Yt(new we(.016,.022,.1,8),m),g,g.clone().add(new I(-.04,.04,-.07)));this.nozzle.add(S,v,_),this.nozzle.visible=!1,this.group.add(this.nozzle),this.setWidth(.34)}setFoam(t){this.nozzle.visible=t}setWidth(t){if(t===this.width)return;this.width=t;const e=t*Xt;this.blade.scale.y=t,this.channel.scale.y=t*1.02,this.caps[0].position.y=e*.51+.012,this.caps[1].position.y=-e*.51-.012}aim(t,e){if(t*t+e*e<1e-6)return;let i=Math.atan2(e,t);for(;i-this.target>Math.PI/2;)i-=Math.PI;for(;i-this.target<-Math.PI/2;)i+=Math.PI;this.target=i}update(t){this.angle+=(this.target-this.angle)*Math.min(1,t*14),this.head.rotation.z=this.angle}}function Kr(n,t,e){const i=new I().subVectors(e,t);return n.position.copy(t).addScaledVector(i,.5),n.quaternion.copy(new ts().setFromUnitVectors(new I(0,1,0),i.normalize())),n}const sr={color:new ut("#cfe9f6"),near:16,far:46};class _M{constructor(t,e){this.host=t,this.renderer=new Fx({antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ne,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.prepend(this.renderer.domElement),e.mapping=lo,this.scene.background=e,this.scene.fog=new Cc(sr.color,sr.near,sr.far),this.scene.add(new Ip("#eaf6ff","#f2c99a",1.85));const i=new Up("#fff3dc",2.35);i.position.set(-4,7,6),this.scene.add(i),this.resize()}host;renderer;scene=new B0;camera=new bn(50,9/16,.1,200);target=new I;resize(){const t=Math.max(1,this.host.clientWidth),e=Math.max(1,this.host.clientHeight);this.renderer.setSize(t,e,!1);const i=t/e;this.camera.aspect=i;const s=p1/2/i;this.camera.fov=2*Math.atan(s/mf)*180/Math.PI,this.camera.updateProjectionMatrix()}frame(t){const e=En(t)-.55;this.target.set(0,e,0),this.camera.position.set(0,e+m1,mf),this.camera.lookAt(this.target)}render(){this.renderer.render(this.scene,this.camera)}}const mn=new I(Ti,Jt+.05+vo+.55,Do+Nn+.01);class vM{group=new rn;stream;splash;pouring=0;time=0;constructor(){const t=new _e({color:"#cfcac0"}),e=new _e({color:"#a9a49a"}),i=new _e({color:"#5a5f68"}),s=new _e({color:"#f3f0e6"}),r=new _e({color:"#2f86e0"}),o=new _e({color:"#1f5a9e"}),a=new _e({color:"#f2b53a"}),l=(A,y,R,w,P)=>{const x=new Yt(new jn(A,y),R);return x.rotation.x=-Math.PI/2,x.position.set(0,w,P),this.group.add(x),x};l(40,3.4,t,Jt,1.7),l(60,30,i,Jt-.16,3.6+15);for(let A=-18;A<=18;A+=3){const y=l(1.4,.16,s,Jt-.155,7.2);y.position.x=A}const c=new Yt(new Ze(40,.18,.2),e);c.position.set(0,Jt-.07,3.45),this.group.add(c);const h=new I(fe/2-.58,Jt,1.85),u=mn.y-Jt+.12,f=new Yt(new we(.1,.13,u,14),r);f.position.set(h.x,Jt+u/2,h.z);const m=new Yt(new we(.17,.19,.1,14),o);m.position.set(h.x,Jt+.05,h.z);const g=new Yt(new hn(.13,14,8,0,Math.PI*2,0,Math.PI/2),o);g.position.set(h.x,Jt+u,h.z);const S=new Yt(new Ze(.06,.06,.34),a);S.position.set(h.x+.12,Jt+u-.12,h.z+.06),S.rotation.x=-.5;const v=new Eu([new I(h.x,Jt+u-.04,h.z),new I(h.x-.06,Jt+u+.14,h.z-.2),new I((h.x+mn.x)/2,Jt+u+.12,(h.z+mn.z)/2),new I(mn.x+.04,mn.y+.16,mn.z+.08),mn.clone()]),_=new Yt(new Bc(v,24,.045,10,!1),r),E=new Yt(new we(.055,.055,.06,12),a);E.position.copy(mn),this.group.add(f,m,g,S,_,E),this.stream=new Yt(new we(.065,.05,1,14,1,!0).translate(0,-.5,0),new sn({color:"#d6f5ff",transparent:!0,opacity:.95,depthWrite:!1})),this.stream.position.copy(mn),this.stream.visible=!1,this.splash=new Yt(new hn(.11,12,6,0,Math.PI*2,0,Math.PI/2),new sn({color:"#e4f8ff",transparent:!0,opacity:.8,depthWrite:!1})),this.splash.visible=!1,this.group.add(this.stream,this.splash)}pour(t){this.pouring=t?Math.max(this.pouring,.001):0,t||(this.stream.visible=!1,this.splash.visible=!1)}update(t,e){if(this.pouring<=0)return;this.time+=t,this.pouring=Math.min(1,this.pouring+t/.18);const i=Math.max(.05,mn.y-e);this.stream.visible=!0,this.stream.scale.set(1+.12*Math.sin(this.time*41),i*this.pouring,1+.12*Math.cos(this.time*37)),this.splash.visible=this.pouring>=1,this.splash.position.set(mn.x,e,mn.z);const s=.8+.25*Math.sin(this.time*23);this.splash.scale.set(s,.5+.2*Math.sin(this.time*31),s)}}const _s=(n,t=0,e="#eef1f4",i=n)=>({frame:new ut(n),panel:new ut(i),blinds:t,blindColor:new ut(e)}),Pf={house:{facade:"house",panes:{base:_s("#f4f0e6")}},office:{facade:"office",panes:{base:_s("#3a4558",.3),ribbon:_s("#3a4558",.3),glass:_s("#c9d3de",.2,"#e4ebf1"),frames:_s("#f7f7f2",.3,"#f5efe2"),capsule:_s("#f2b53a",.26,"#f6e3bd","#22304a")}}},Tn=(ve+zc)/2,Mn=ve-zc;function gi(n){return n*Po+Ni+Bn/2}function No(n){return gi(n)+1.55}const xo=fe*.86/2-.12,Ci=.95;function Tt(n,t,e,i,s,r,o){return gn(new Ze(n,t,e).translate(i,s,r),o)}function gn(n,t){const e=n.attributes.position.count,i=new Float32Array(e*3);for(let s=0;s<e;s+=1)t.toArray(i,s*3);return n.setAttribute("color",new ue(i,3)),n.deleteAttribute("uv"),n}function xM(n,t,e,i,s){const r=new Oe,o=[n,t,e,i].flatMap(l=>[l.x,l.y,l.z]),a=new I().subVectors(t,n).cross(new I().subVectors(i,n)).normalize();return r.setAttribute("position",new ue(o,3)),r.setAttribute("normal",new ue(Array.from({length:4},()=>a.toArray()).flat(),3)),r.setIndex([0,1,2,0,2,3]),gn(r,s)}function Uo(n){const t=n.map(i=>i.index?i.toNonIndexed():i),e=Ju(t);for(const i of[...n,...t])i.dispose();if(!e)throw new Error("фасад не собрался");return ad(e)}const Lf=new I(.25,.55,.8).normalize(),MM=.08;function ad(n){const t=n.attributes.normal,e=n.attributes.color,i=n.attributes.position,s=new I,r=.62+.38*Lf.z,o=Math.max(1,gi(8)-Jt);for(let a=0;a<t.count;a+=1){s.set(t.getX(a),t.getY(a),t.getZ(a));const l=Math.min(1,Math.max(0,(i.getY(a)-Jt)/o)),c=Math.min(1.06,(.62+.38*Math.max(0,s.dot(Lf)))/r)*(1-MM*(1-l));e.setXYZ(a,e.getX(a)*c,e.getY(a)*c,e.getZ(a)*c)}return e.needsUpdate=!0,n}const Ji=new ut("#f4f7fa"),Hc=new ut("#e1e8f0"),dc=new ut("#3a4558"),ci=new ut("#c9d3de"),ld=new ut("#13b0a2"),cd=new ut("#22304a"),Mo=new ut("#f2b53a"),Fa=new ut("#3b4252"),SM=new ut("#8d97a3"),Jr=new ut("#ffc21a"),Qr=new ut("#2b2f38"),Fo=new ut("#1d4f80"),If=new ut("#17607a"),yM=new ut("#3fae5a"),bM=new ut("#7a5236"),Df=["#ff7a3d","#13b0a2","#ffc93a","#ff5f87","#4f8cff"].map(n=>new ut(n)),wM=-.16,hd=.02;function EM(n){return[{x:0,y:gi(n)+.57,z:.115,w:3.3,h:.62},{x:0,y:Jt+2.12,z:-.02,w:1.7,h:.34}]}function TM(n){const t=n.length,e=[],i=[],s=[],r={trim:[],glass:[],shadow(a,l,c,h,u){const f=e.length/3;e.push(a,c-h,u,l,c-h,u,l,c,u,a,c,u),i.push(0,0,1,0,1,1,0,1),s.push(f,f+1,f+2,f,f+2,f+3)}};LM(r),n.forEach((a,l)=>{a==="glass"?RM(r,l):a==="frames"?CM(r,l):a==="capsule"?PM(r,l):AM(r,l)}),IM(r,t,n[t-1]);const o=new Oe;return o.setAttribute("position",new ue(e,3)),o.setAttribute("uv",new ue(i,2)),o.setIndex(s),{plaster:null,trim:Uo(r.trim),glass:Uo(r.glass),slope:null,shadows:o}}const Re=fe/2;function Qi(n,t,e,i,s){return Tt(t-n,i-e,Mn,(n+t)/2,(e+i)/2,Tn,s)}function pc(n,t,e,i,s){return Tt(t-n,i-e,hd,(n+t)/2,(e+i)/2,wM,s)}function Xo(n){const t=En(n),e=Array.from({length:mi},(i,s)=>zn(n,s).x);return{bottom:t-ae/2,top:t+ae/2,base:t-ae/2-Bn,xs:e}}function qo(n){return n.slice(1).map((t,e)=>[n[e]+Xt/2,t-Xt/2])}function Vc(n,t,e,i){n.trim.push(Qi(-Re,-Re+Di,t,e,i),Qi(Re-Di,Re,t,e,i))}function AM(n,t){const{bottom:e,top:i,base:s,xs:r}=Xo(t);n.trim.push(Qi(-Re,Re,s,e,Ji)),n.trim.push(Tt(fe+.024,.09,.02,0,s+.2,ve+.002,ld)),Vc(n,e,i,Hc);for(const[o,a]of qo(r))n.glass.push(pc(o,a,e,i,Fo));for(const o of r)for(const a of[-1,1])n.trim.push(Tt(.07,i-e+.04,.09,o+a*Xt/2,(i+e)/2,-.125,dc));n.trim.push(Tt(fe+.08,.05,.42,0,e-.005,.06,dc)),n.shadow(-Re,Re,e-.03,.22,ve+.004)}function RM(n,t){const{bottom:e,top:i,base:s,xs:r}=Xo(t),o=s+.16;n.trim.push(Qi(-Re,Re,s,o,Ji)),Vc(n,o,i,Hc),n.glass.push(pc(-Re+Di,Re-Di,o,e,If));for(const[a,l]of qo(r))n.glass.push(pc(a,l,e,i,If));for(const a of r)for(const l of[-1,1])n.trim.push(Tt(.06,i-o+.04,.08,a+l*Xt/2,(i+o)/2,-.13,ci));n.trim.push(Tt(fe+.04,.04,.42,0,e,.04,ci))}function CM(n,t){const{bottom:e,top:i,base:s,xs:r}=Xo(t);n.trim.push(Qi(-Re,Re,s,e,Ji)),Vc(n,e,i,Hc);for(const[o,a]of qo(r))n.trim.push(Qi(o,a,e,i,Ji));r.forEach((o,a)=>{const l=Df[(a+t*2)%Df.length],c=.18+Rn(Li(t,a,4242))()*.12,h=ve+c/2,u=.12;for(const f of[-1,1])n.trim.push(Tt(u,ae+u*2,c,o+f*(Xt/2+u/2),(i+e)/2,h,l));n.trim.push(Tt(Xt,u,c,o,i+u/2,h,l)),n.trim.push(Tt(Xt,u,c,o,e-u/2,h,l)),n.shadow(o-Xt/2-u,o+Xt/2+u,e-u,.2,ve+.004)})}function PM(n,t){const{bottom:e,top:i,base:s,xs:r}=Xo(t),o=new nc;o.moveTo(-Re,s),o.lineTo(Re,s),o.lineTo(Re,i),o.lineTo(-Re,i),o.closePath();const a=(i+e)/2;for(const l of r)o.holes.push(Oa(new Ao,l,a,Xt/2,ae/2));n.trim.push(gn(new Ro(o,{depth:Mn,bevelEnabled:!1,curveSegments:18}).translate(0,0,zc),cd));for(const l of r){const c=Oa(new nc,l,a,Xt/2+.06,ae/2+.06);c.holes.push(Oa(new Ao,l,a,Xt/2,ae/2)),n.trim.push(gn(new Ro(c,{depth:.035,bevelEnabled:!1,curveSegments:18}).translate(0,0,ve),Mo)),n.trim.push(Tt(.7,.04,.3,l,e-.005,ve+.1,Mo)),n.shadow(l-.35,l+.35,e-.025,.14,ve+.004)}for(const[l,c]of qo(r))n.trim.push(Tt(.05,i-s,.14,(l+c)/2,(i+s)/2,ve+.07,Mo))}function Oa(n,t,e,i,s){const r=i,o=s-r;return n.moveTo(t+r,e-o),n.lineTo(t+r,e+o),n.absarc(t,e+o,r,0,Math.PI,!1),n.lineTo(t-r,e-o),n.absarc(t,e-o,r,Math.PI,Math.PI*2,!1),n}function LM(n){const t=Ni-.2,e=Re-.4;n.trim.push(Tt(fe+.1,Ni-t,Mn+.1,0,(Ni+t)/2,Tn,Ji));for(const o of[-1,1])n.trim.push(Tt(Re+.02-e,t-Jt,Mn+.04,o*(e+Re+.02)/2,(t+Jt)/2,Tn,Fa)),n.trim.push(Tt(e-.62,.2,.16,o*(e+.62)/2,Jt+.1,-.08,Fa));n.glass.push(Tt(e*2,t-Jt-.2,hd,0,(t+Jt+.2)/2,-.11,Fo));for(let o=1;o<6;o+=1){const a=-e+o*e*2/6;Math.abs(a)<.6||n.trim.push(Tt(.05,t-Jt-.2,.06,a,(t+Jt+.2)/2,-.07,ci))}n.trim.push(Tt(e*2,.05,.06,0,Jt+1.8,-.07,ci));const i=1.7,s=new we(.52,.52,i,6,1,!0,-Math.PI/2,Math.PI).toNonIndexed();s.computeVertexNormals(),n.glass.push(gn(s.translate(0,Jt+i/2,-.1),Fo)),n.trim.push(gn(new we(.57,.57,.1,20,1,!1,-Math.PI/2,Math.PI).translate(0,Jt+i+.05,-.1),ci));for(const o of[-1,1])n.trim.push(Tt(.06,i,.06,o*.53,Jt+i/2,-.08,ci));n.trim.push(Tt(.04,i,.03,0,Jt+i/2,.435,ci));const r=Jt+1.89;n.trim.push(Tt(2.4,.1,.62,0,r,.21,Ji)),n.trim.push(Tt(2.42,.045,.02,0,r,.53,ld));for(const o of[-1,1]){const a=o*1.3;n.trim.push(Tt(.5,.4,.4,a,Jt+.2,.3,Fa)),n.trim.push(gn(new we(.04,.05,.3,6).translate(a,Jt+.55,.3),bM)),n.trim.push(gn(new dr(.3,1).translate(a,Jt+.92,.3),yM))}}function IM(n,t,e){const i=gi(t),s=En(t-1)+ae/2;n.trim.push(Qi(-Re,Re,s,i,e==="capsule"?cd:Ji)),n.trim.push(Tt(fe+.06,.12,Mn+.06,0,i+.06,Tn,Mo)),n.shadow(-Re,Re,i,.16,ve+.004);const r=i+1.02;n.glass.push(Tt(fe,r-i-.12,.04,0,(r+i+.12)/2,.02,Fo));for(const l of[-Re+.03,-1.32,0,1.32,Re-.03])n.trim.push(Tt(.05,r-i-.08,.06,l,(r+i+.12)/2,.05,ci));n.trim.push(Tt(fe+.1,.08,.36,0,r+.04,0,ci)),n.trim.push(Tt(fe-.1,.05,4.4,0,i+.14,-2.3,SM)),n.trim.push(gn(new we(.035,.035,2.4,6).translate(1.6,i+1.37,-3.4),Qr)),n.trim.push(Tt(.12,.12,.12,1.6,i+2.6,-3.4,new ut("#ff4a3a")));const o=-1.9,a=No(t);for(const l of[-1.3,-2.5])n.trim.push(Tt(fe-.4,.06,.1,0,i+.195,l,dc));n.trim.push(Tt(1.4,1.1,1.3,0,i+.78,o,Jr)),n.trim.push(Tt(.8,.36,.02,0,i+.98,o+.66,Qr)),n.trim.push(Tt(.22,a-i-1.3,.22,0,(a+i+1.3)/2,o,Jr)),n.trim.push(Tt(.2,.2,Ci-o+.1,0,a+.1,(Ci+o)/2,Jr)),n.trim.push(Tt(xo*2+.3,.16,.16,0,a+.09,Ci,Jr));for(const l of[-1,1])n.trim.push(Tt(.16,.14,.12,l*xo,a-.06,Ci,Qr)),n.trim.push(Tt(.12,.18,.18,l*(xo+.095),a+.09,Ci,Qr))}function DM(n,t){const e=t.length;return n==="office"?TM(t):{plaster:Uo(UM(e)),glass:null,trim:Uo([...kM(),...FM(e),...HM(e)]),slope:ad(zM(e)),shadows:GM(e)}}const Nf=2.6;function NM(n){const t=n.attributes.position,e=n.attributes.normal,i=new Float32Array(t.count*2);for(let s=0;s<t.count;s+=1){const r=Math.abs(e.getX(s)),o=Math.abs(e.getY(s)),a=t.getX(s),l=t.getY(s),c=t.getZ(s),[h,u]=r>.5?[c,l]:o>.5?[a,c]:[a,l];i[s*2]=h/Nf,i[s*2+1]=u/Nf}return n.setAttribute("uv",new ue(i,2)),n}function UM(n){const t=new ut("#ffffff"),e=new ut("#f2e6dc"),i=[],s=(r,o,a,l,c,h,u)=>{i.push(NM(Tt(r,o,a,l,c,h,u)))};for(let r=0;r<n;r+=1){const o=En(r);s(fe,Bn,Mn,0,o-ae/2-Bn/2,Tn,t);for(let a=0;a<=mi;a+=1){const l=a===0||a===mi,c=l?Di:Co,h=-fe/2+(l?a===0?0:fe-Di:Di+a*Xt+(a-1)*Co)+c/2;s(c,ae,Mn+(l?.06:0),h,o,Tn+(l?.01:0),l?e:t)}}return s(fe,Bn/2,Mn,0,gi(n)-Bn/4,Tn,t),i}function FM(n){const t=new ut("#fff8ec"),e=new ut("#ffffff"),i=new ut("#8b96a6"),s=[];for(let c=0;c<n;c+=1){const h=En(c),u=h+ae/2,f=h-ae/2;c>0&&s.push(Tt(fe+.12,.1,.08,0,f-Bn+.05,ve+.04,t));for(let m=0;m<mi;m+=1){const{x:g}=zn(c,m);for(const _ of[-1,1])s.push(Tt(.09,ae+.1,.05,g+_*(Xt/2+.035),h+.03,ve+.02,t));s.push(Tt(Xt+.3,.13,.06,g,u+.1,ve+.025,t)),s.push(Tt(Xt+.4,.05,.13,g,u+.19,ve+.05,t)),s.push(Tt(Xt+.24,.07,.22,g,f-.02,ve+.05,e));const S=Rn(Li(c,m,991)),v=S();v<.36?s.push(...OM(S,g,f-.15)):v<.58&&c>0&&s.push(...BM(S,g,f-.1))}}const r=fe/2-.13,o=ve+.1,a=gi(n)+.1,l=Jt+.25;s.push(gn(new we(.05,.05,a-l,8).translate(r,(a+l)/2,o),i)),s.push(gn(new we(.11,.05,.16,8).translate(r,a+.04,o),i));for(let c=0;c<=n;c+=1)s.push(Tt(.14,.04,.14,r,c*Po+Ni-.4,o-.02,i));return s}function OM(n,t,e){const i=new ut("#2f8f5b"),s=new ut("#24704a"),r=[new ut("#45b04a"),new ut("#69c95a")],o=[new ut("#ff2f4f"),new ut("#ff5a7a"),new ut("#ffd23f")],a=ve+.15,l=Xt*.82,c=[Tt(l,.17,.2,t,e,a,i),Tt(l+.04,.04,.22,t,e+.08,a,s)];for(let h=0;h<8;h+=1){const u=t+(h/7-.5)*l*.9,f=.07+n()*.04;c.push(gn(new dr(f,0).translate(u,e+.12+n()*.05,a+(n()-.5)*.08),r[h%2]))}for(let h=0;h<9;h+=1){const u=t+(n()-.5)*l*.9,f=.04+n()*.025,m=o[n()<.75?0:n()<.5?1:2];c.push(gn(new dr(f,0).translate(u,e+.2+n()*.09,a+.03+n()*.07),m))}return c}function BM(n,t,e){const i=new ut("#ffffff"),s=new ut("#8a5638"),r=new ut("#2b2233"),o=["#ffffff","#2f9bff","#2b4c9a","#2fbf6a","#9b5de5","#ff5fa8","#14b8c4"].map(f=>new ut(f)),a=ve+.17,l=Xt*1.2,c=[Tt(l,.02,.02,t,e,a,i)];for(const f of[-1,1])c.push(Tt(.035,.07,.17,t+f*l/2,e,a-.08,s));const h=(f,m,g,S,v)=>{c.push(Tt(f+.035,m+.035,.01,g,S,a-.008,r)),c.push(Tt(f,m,.014,g,S,a,v))};let u=t-l/2+.1;for(;u<t+l/2-.16;){const f=o[Math.floor(n()*o.length)],m=n();let g;if(m<.35)g=.34,h(.26,.34,u+.17,e-.19,f),h(.4,.1,u+.17,e-.06,f);else if(m<.6){g=.26;for(const S of[.07,.19])h(.07,.18,u+S,e-.1,f),h(.1,.06,u+S+.016,e-.2,f)}else if(m<.8)g=.3,h(.26,.38,u+.15,e-.19,f),c.push(Tt(.26,.05,.016,u+.15,e-.3,a+.002,o[0]));else{g=.32,h(.28,.07,u+.16,e-.04,f);for(const S of[.085,.235])h(.11,.36,u+S,e-.24,f)}c.push(Tt(.03,.06,.035,u+g/2,e-.005,a+.012,s)),u+=g+.05+n()*.05}return c}function kM(){const n=new ut("#d3c3ad"),t=new ut("#a8977f"),e=new ut("#6b3f2a"),i=new ut("#f3ead8"),s=new ut("#3c4a5e"),r=new ut("#ffe6a0"),o=new ut("#33465c"),a=Ni-.06-Jt,l=[Tt(fe+.04,a,Mn+.04,0,Jt+a/2,Tn,n),Tt(fe+.08,.3,Mn+.08,0,Jt+.15,Tn,t),Tt(fe+.1,.12,Mn+.12,0,Ni-.06,Tn,i),Tt(1.08,1.78,.04,0,Jt+.89,ve+.03,i),Tt(.9,1.66,.04,0,Jt+.83,ve+.05,e),Tt(1.3,.06,.42,0,Jt+1.95,ve+.2,s),Tt(.12,.16,.1,.7,Jt+1.62,ve+.06,r)];for(const c of[-1,1]){const h=c*(fe/2-.85);l.push(Tt(.7,.5,.04,h,Jt+1.15,ve+.03,i)),l.push(Tt(.6,.4,.04,h,Jt+1.15,ve+.05,o))}return l}function fd(n){const t=gi(n);return{eaveY:t+.3,eaveZ:ve+.2,ridgeY:t+2.3,ridgeZ:-3.6,half:fe/2+.22}}const Uf=1.2;function zM(n){const{eaveY:t,eaveZ:e,ridgeY:i,ridgeZ:s,half:r}=fd(n),o=Math.hypot(i-t,s-e),a=new I(-r,t,e),l=new I(r,t,e),c=new I(r,i,s),h=new I(-r,i,s),u=xM(a,l,c,h,new ut("#ffffff")),f=r*2/Uf,m=o/Uf;return u.setAttribute("uv",new ue([0,0,f,0,f,m,0,m],2)),u}function GM(n){const t=[],e=[],i=[],s=(a,l,c,h,u)=>{const f=t.length/3;t.push(a,c-h,u,l,c-h,u,l,c,u,a,c,u),e.push(0,0,1,0,1,1,0,1),i.push(f,f+1,f+2,f,f+2,f+3)},r=ve+.004;for(let a=0;a<n;a+=1){const l=En(a),c=l+ae/2,h=l-ae/2;a>0&&s(-fe/2,fe/2,h-Bn,.14,r);for(let u=0;u<mi;u+=1){const{x:f}=zn(a,u);s(f-(Xt+.3)/2,f+(Xt+.3)/2,c+.165,.1,ve+.0565),s(f-(Xt+.24)/2,f+(Xt+.24)/2,h-.055,.17,r);const g=Rn(Li(a,u,991))();g<.36?s(f-Xt*.45,f+Xt*.45,h-.235,.2,r):g<.58&&a>0&&s(f-Xt*.55,f+Xt*.65,h-.13,.5,r)}}s(-fe/2,fe/2,gi(n),Bn/2,r),s(-fe/2-.02,fe/2+.02,Ni-.12,.18,ve+.024);const o=new Oe;return o.setAttribute("position",new ue(t,3)),o.setAttribute("uv",new ue(e,2)),o.setIndex(i),o}function HM(n){const t=gi(n),e=new ut("#fff8ec"),i=new ut("#a8472a"),s=new ut("#a24a32"),r=new ut("#5c4a40"),o=new ut("#5c6b80"),a=new ut("#ffc93a"),l=[];l.push(Tt(fe+.2,.16,Mn+.2,0,t+.08,Tn+.06,e)),l.push(Tt(fe+.36,.14,Mn+.36,0,t+.23,Tn+.1,e));const{eaveY:c,eaveZ:h,ridgeY:u,ridgeZ:f,half:m}=fd(n);l.push(Tt(m*2+.06,.14,.24,0,u+.02,f,i)),l.push(Tt(m*2,.08,.2,0,c-.03,h+.02,i));const g=E=>c+(E-h)/(f-h)*(u-c);for(const[E,A,y]of[[-1.25,-1.6,1],[1.15,-2.7,.8]]){const R=g(A)-.3,w=g(A)+y;l.push(Tt(.42,w-R,.42,E,(w+R)/2,A,s)),l.push(Tt(.5,.1,.5,E,w+.05,A,r))}const S=.35,v=u+1.6;l.push(gn(new we(.04,.04,v-u,8).translate(S,(v+u)/2,f),o));for(const[E,A]of[[v-.1,.9],[v-.4,.7],[v-.7,.5]])l.push(Tt(A,.05,.05,S,E,f,o));const _=No(n);for(const E of[-1,1]){const A=E*xo,y=-.5,R=g(y)-.2;l.push(Tt(.1,_-R,.1,A,(_+R)/2,y,o)),l.push(Tt(.1,.1,Ci-y+.1,A,_,(Ci+y)/2,o)),l.push(Tt(.16,.16,.08,A,_-.08,Ci,a))}return l}const VM=`
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying vec3 vTint;
  varying float vDist;
  void main() {
    vTint = color;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vec4 view = viewMatrix * world;
    vDist = -view.z;
    gl_Position = projectionMatrix * view;
  }
`,WM=`
  #define PI 3.141592653589793
  uniform sampler2D uSky;
  uniform vec3 uFogColor;
  uniform vec2 uFog;
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying vec3 vTint;
  varying float vDist;

  vec3 sky(vec3 dir) {
    vec2 uv = vec2(atan(dir.x, -dir.z) / (2.0 * PI) + 0.5, asin(clamp(dir.y, -1.0, 1.0)) / PI + 0.5);
    return texture2D(uSky, uv).rgb;
  }

  void main() {
    vec3 V = normalize(cameraPosition - vWorld);
    vec3 N = normalize(vNormal);
    vec3 R = reflect(-V, N);
    // Как у окон: в стекле небо и облака, а не улица под камерой.
    R.y += 0.42;
    R = normalize(R);
    float facing = max(dot(N, V), 0.0);
    float fresnel = 0.3 + 0.55 * pow(1.0 - facing, 2.0);
    vec3 color = mix(vTint, sky(R) * vec3(0.78, 0.88, 1.0), fresnel);
    // Косые блики по миру — одна полоса через несколько панелей, как на настоящем стекле.
    float diag = fract((vWorld.x * 0.55 + vWorld.y) * 0.19);
    color += smoothstep(0.05, 0.0, abs(diag - 0.5)) * 0.07 + smoothstep(0.012, 0.0, abs(diag - 0.58)) * 0.05;
    color = mix(color, uFogColor, smoothstep(uFog.x, uFog.y, vDist));
    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
  }
`;function ud(n,t){return new An({uniforms:{uSky:{value:n},uFogColor:{value:t.color},uFog:{value:[t.near,t.far]}},vertexShader:VM,fragmentShader:WM,vertexColors:!0})}const Dn=Ii.toFixed(2),XM=`
  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vDist;
  void main() {
    vUv = uv;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vec4 view = viewMatrix * world;
    vDist = -view.z;
    gl_Position = projectionMatrix * view;
  }
`,qM=`
  #define PI 3.141592653589793
  uniform sampler2D uSky;
  uniform sampler2D uRooms;
  // Жилец «куклой» из трёх слоёв атласа: xy — угол ячейки, zw — размер (z = 0 — слоя нет).
  uniform vec4 uBg;            // комната (непрозрачная)
  uniform vec4 uBody;          // тело с неподвижной рукой (прозрачное)
  uniform vec4 uArm;           // подвижная рука с вещью (прозрачная), нарисована в позе действия
  uniform vec2 uPivot;         // плечо руки, доли ячейки (y вверх)
  uniform vec2 uArmPose;       // поворот руки вокруг плеча (рад) и масштаб («к стеклу»)
  uniform vec2 uBodyShift;     // сдвиг тела (подскок, дыхание), доли ячейки
  uniform vec2 uHalfTexel;     // полтекселя ячейки — не цеплять соседнюю
  uniform sampler2D uDirt;
  uniform sampler2D uMask;
  uniform sampler2D uFoam;     // пена пенной насадки 0..1 (ПЛАН 2.2)
  uniform float uClear;        // 0..1 — остаток грязи тает после «домывается само»
  uniform float uGlint;        // < 0 — нет; 0..1 — бегущая полоса блика
  uniform float uFlash;        // 0..1 — вспышка чистого окна
  uniform float uTilt;         // у каждого окна чуть свой наклон — отражения разные
  uniform vec2 uMullion;       // переплёт: x вертикального бруска, y фрамуги (доли окна); < 0 — нет
  uniform float uBar;          // половина толщины бруска, доля ширины окна
  uniform float uFrameW;       // рама по краю, доля ширины окна
  uniform float uRound;        // скругление углов, радиус в долях ширины (0.5 — «капсула»)
  uniform vec3 uFrameColor;
  uniform vec3 uPanel;         // за скруглением — облицовка проёма
  uniform float uBlinds;       // жалюзи опущены сверху на долю высоты окна; 0 — нет
  uniform vec3 uBlindColor;
  uniform vec3 uFogColor;
  uniform vec2 uFog;           // ближняя и дальняя граница дымки
  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vDist;

  vec4 cell(vec4 rect, vec2 uv) {
    if (rect.z <= 0.0) return vec4(0.0);
    vec2 inside = step(vec2(0.0), uv) * step(uv, vec2(1.0));
    vec2 c = clamp(uv, uHalfTexel, 1.0 - uHalfTexel);
    return texture2D(uRooms, rect.xy + c * rect.zw) * inside.x * inside.y;
  }

  // Насколько точка внутри края окна (до рамы), в долях ширины: < 0 — за скруглением.
  float edgeInset(vec2 uv) {
    vec2 q = vec2(uv.x, uv.y * ${Dn});
    vec2 hs = vec2(0.5, ${Dn} * 0.5);
    vec2 d = abs(q - hs) - (hs - uRound);
    return -(length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - uRound);
  }

  vec3 sky(vec3 dir) {
    vec2 uv = vec2(atan(dir.x, -dir.z) / (2.0 * PI) + 0.5, asin(clamp(dir.y, -1.0, 1.0)) / PI + 0.5);
    return texture2D(uSky, uv).rgb;
  }

  void main() {
    vec3 V = normalize(cameraPosition - vWorld);
    vec3 N = normalize(vec3(uTilt * 0.5, uTilt * 0.8, 1.0));
    vec3 R = reflect(-V, N);
    // Стилизация: окна отражают небо и облака, а не улицу под камерой.
    R.y += 0.42;
    R = normalize(R);
    float facing = max(dot(N, V), 0.0);
    float fresnel = 0.2 + 0.6 * pow(1.0 - facing, 2.0);

    // Комната с ложной глубиной: сдвиг против взгляда.
    vec2 p = clamp(vUv + vec2(-V.x, -V.y) * 0.07, 0.0, 1.0);
    vec3 room = cell(uBg, p).rgb;
    vec4 body = cell(uBody, p - uBodyShift);
    room = mix(room, body.rgb, body.a);
    // Рука: обратный поворот вокруг плеча — в квадратных единицах ячейки, иначе её сплющит.
    vec2 aspect = vec2(1.0, ${Dn});
    vec2 fromShoulder = (p - uBodyShift - uPivot) * aspect;
    float ca = cos(uArmPose.x);
    float sa = sin(uArmPose.x);
    fromShoulder = vec2(ca * fromShoulder.x + sa * fromShoulder.y, -sa * fromShoulder.x + ca * fromShoulder.y) / uArmPose.y;
    vec4 arm = cell(uArm, fromShoulder / aspect + uPivot);
    room = mix(room, arm.rgb, arm.a);
    // Комнаты — сочнее: чуть насыщеннее и светлее (владелец 13.10: «тусклые цвета»).
    float gray = dot(room, vec3(0.299, 0.587, 0.114));
    room = mix(vec3(gray), room, 1.18) * 1.06;

    // Жалюзи — сразу за стеклом (сдвиг меньше, чем у комнаты): ламели сверху вниз,
    // в щелях между ними — комната в тени; снизу — планка потолще и шнур.
    if (uBlinds > 0.0) {
      vec2 b = vUv + vec2(-V.x, -V.y) * 0.02;
      float edge = 1.0 - uBlinds;
      if (b.y > edge) {
        float s = fract((b.y - edge) * ${Dn} / 0.048);
        float slat = smoothstep(0.0, 0.1, s) * (1.0 - smoothstep(0.86, 0.96, s));
        vec3 lamella = uBlindColor * (0.8 + 0.28 * s);
        room = mix(room * 0.5, lamella, slat * 0.94);
        float rail = 1.0 - smoothstep(0.012, 0.022, (b.y - edge) * ${Dn});
        room = mix(room, uBlindColor * 0.62, rail);
      }
      float cord = smoothstep(0.006, 0.002, abs(b.x - 0.83)) * step(edge - 0.1, b.y) * step(b.y, edge);
      room = mix(room, uBlindColor * 0.55, cord);
      float knob = smoothstep(0.016, 0.01, length((b - vec2(0.83, edge - 0.105)) * vec2(1.0, ${Dn})));
      room = mix(room, uBlindColor * 0.7, knob);
    }

    // Небо в стекле — лёгкое: раньше его было ≥ 38% поверх комнаты, и всё за окном блёкло.
    vec3 glass = mix(room, sky(R), fresnel * 0.45 + 0.03);
    // Косые блики на чистом стекле — «стекло», а не картинка.
    float diag = vUv.x * 0.7 + vUv.y;
    float streak = smoothstep(0.035, 0.0, abs(diag - 0.55 - uTilt)) * 0.1
                 + smoothstep(0.012, 0.0, abs(diag - 0.67 - uTilt)) * 0.07;
    glass += streak;

    vec4 dirt = texture2D(uDirt, vUv);
    float left = texture2D(uMask, vUv).r * (1.0 - uClear);
    vec3 color = mix(glass, dirt.rgb, dirt.a * left);

    // Пена: белая шапка с пузырями — у каждой ячейки сетки свой пузырь со своим
    // размером, светлой серединой и голубоватой кромкой. Тает вместе с остатком грязи.
    float foamRaw = texture2D(uFoam, vUv).r;
    float foam = smoothstep(0.12, 0.55, foamRaw) * (1.0 - uClear);
    if (foam > 0.0) {
      vec2 grid = vUv * vec2(30.0, 30.0 * ${Dn});
      vec2 id = floor(grid);
      vec2 f = fract(grid) - 0.5;
      float h = fract(sin(dot(id, vec2(12.9898, 78.233))) * 43758.5453);
      vec2 jitter = vec2(fract(h * 7.31), fract(h * 3.17)) - 0.5;
      float d = length(f - jitter * 0.3) / (0.22 + 0.2 * h);
      float rimLine = smoothstep(0.75, 0.95, d) * (1.0 - smoothstep(0.95, 1.1, d));
      vec3 suds = mix(vec3(1.0, 1.0, 0.99), vec3(0.78, 0.88, 0.96), 0.5 * rimLine + 0.12 * h);
      suds += 0.1 * (1.0 - smoothstep(0.0, 0.35, length(f - jitter * 0.3 + 0.12)));
      // Кромка пены голубовато-серая: на светлой комнате шапка не сливается с фоном.
      float edge = smoothstep(0.12, 0.28, foamRaw) * (1.0 - smoothstep(0.3, 0.55, foamRaw));
      suds = mix(suds, vec3(0.58, 0.7, 0.84), edge * 0.8);
      color = mix(color, suds, foam * 0.94);
    }

    // Окно утоплено в стену: у рамы темнее, под перемычкой — тень (дом не плоский).
    float inset = edgeInset(vUv);
    float rim = smoothstep(uFrameW, uFrameW + 0.1, inset);
    float lintel = smoothstep(1.0 - uFrameW - 0.14, 1.0 - uFrameW, vUv.y);
    color *= mix(0.74, 1.0, rim) * (1.0 - 0.22 * lintel);

    if (uGlint >= 0.0) {
      float d = (vUv.x + vUv.y / ${Dn}) * 0.5 - (uGlint * 1.5 - 0.25);
      float band = exp(-d * d * 700.0) + 0.6 * exp(-(d + 0.07) * (d + 0.07) * 3000.0);
      color += vec3(1.0, 0.98, 0.9) * band;
    }
    color += uFlash * vec3(0.32, 0.36, 0.4);

    // Переплёт: бруски поперёк стекла, середина светлее краёв, у фрамуги верх светлее.
    float mx = uMullion.x < 0.0 ? 1.0 : abs(vUv.x - uMullion.x);
    float my = uMullion.y < 0.0 ? 1.0 : abs(vUv.y - uMullion.y) * ${Dn};
    float m = min(mx, my);
    if (m < uBar) {
      float round = 0.78 + 0.32 * (1.0 - m / uBar);
      float lit = my < mx ? (vUv.y > uMullion.y ? 1.12 : 0.86) : (vUv.x < uMullion.x ? 1.05 : 0.9);
      color = uFrameColor * round * lit;
    }

    // Рама с фаской: светлее у стекла, верх светлее низа; у скруглённой — свет по
    // направлению от середины. За скруглением — облицовка проёма в тени.
    if (inset < uFrameW) {
      float bevel = 0.7 + 0.5 * clamp(inset / uFrameW, 0.0, 1.0);
      vec2 dir = vec2(vUv.x - 0.5, (vUv.y - 0.5) * ${Dn});
      float dx = 0.5 - abs(dir.x);
      float dy = ${Dn} * 0.5 - abs(dir.y);
      float side = uRound > 0.0
        ? 1.0 + 0.25 * normalize(dir + 1e-4).y - 0.12 * normalize(dir + 1e-4).x
        : dy < dx ? (vUv.y > 0.5 ? 1.25 : 0.7) : (vUv.x < 0.5 ? 1.1 : 0.85);
      color = inset < 0.0 ? uPanel * (0.8 + 0.2 * smoothstep(-0.12, 0.0, inset)) : uFrameColor * bevel * side;
    }

    color = mix(color, uFogColor, smoothstep(uFog.x, uFog.y, vDist));
    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
  }
`;function YM(n){return new An({uniforms:n,vertexShader:XM,fragmentShader:qM})}function Os(n,t){const e=document.createElement("canvas");e.width=n,e.height=t;const i=e.getContext("2d");if(!i)throw new Error("2D canvas недоступен");return[e,i]}function Wc(n){return n.colorSpace=Ne,n.minFilter=Ce,n.magFilter=Ce,n.generateMipmaps=!1,n.needsUpdate=!0,n}function $M(){const[e,i]=Os(1024,512),s=Rn(7),r=i.createLinearGradient(0,0,0,512);r.addColorStop(0,"#1c68dc"),r.addColorStop(.36,"#44a6f2"),r.addColorStop(.5,"#bde9ff"),r.addColorStop(.53,"#dcf2fb"),r.addColorStop(.7,"#a9c8d8"),r.addColorStop(1,"#6f8ea3"),i.fillStyle=r,i.fillRect(0,0,1024,512);for(let c=0;c<26;c+=1){const h=s()*1024,u=512*(.18+s()*.3),f=18+s()*34;for(let m=0;m<9;m+=1){const g=h+(s()-.5)*f*4,S=u+(s()-.5)*f*.9,v=f*(.6+s()*.7),_=i.createRadialGradient(g,S,0,g,S,v);_.addColorStop(0,"rgba(255,255,255,0.9)"),_.addColorStop(.6,"rgba(255,255,255,0.55)"),_.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=_,i.fillRect(g-v,S-v,v*2,v*2)}}const o=[{top:.53,color:"rgba(120,150,175,0.55)",lit:.25},{top:.56,color:"rgba(95,125,152,0.7)",lit:.35},{top:.6,color:"rgba(78,104,130,0.85)",lit:.45}];for(const c of o){let h=0;for(;h<1024;){const u=10+s()*26,f=512*(.02+s()*.07),m=512*c.top-f+512*.03;i.fillStyle=c.color,i.fillRect(h,m,u,512-m),i.fillStyle=`rgba(255,236,170,${c.lit})`;for(let g=m+3;g<512*.72;g+=5)for(let S=h+2;S<h+u-2;S+=4)s()<.18&&i.fillRect(S,g,1.5,2);h+=u+s()*4}}const a=i.createLinearGradient(0,512*.5,0,512);a.addColorStop(0,"rgba(220,240,250,0.0)"),a.addColorStop(.25,"rgba(220,240,250,0.35)"),a.addColorStop(1,"rgba(200,225,238,0.55)"),i.fillStyle=a,i.fillRect(0,512*.5,1024,512*.5);const l=new Gn(e);return l.wrapS=Yn,Wc(l)}function ZM(){const[t,e]=Os(512,512),i=Rn(31337);e.fillStyle="#ffb26a",e.fillRect(0,0,512,512);const s=o=>{for(const a of[-512,0,512])for(const l of[-512,0,512])o(a,l)};for(let o=0;o<40;o+=1){const a=i()*512,l=i()*512,c=40+i()*110,h=.08+i()*.12;s((u,f)=>{const m=e.createRadialGradient(a+u,l+f,0,a+u,l+f,c);m.addColorStop(0,`rgba(255,214,160,${h})`),m.addColorStop(1,"rgba(255,214,160,0)"),e.fillStyle=m,e.fillRect(a+u-c,l+f-c,c*2,c*2)})}for(let o=0;o<14;o+=1){const a=i()*512,l=i()*512,c=6+i()*18,h=60+i()*140;s((u,f)=>{const m=e.createLinearGradient(0,l+f,0,l+f+h);m.addColorStop(0,"rgba(210,120,60,0.08)"),m.addColorStop(1,"rgba(210,120,60,0)"),e.fillStyle=m,e.fillRect(a+u-c/2,l+f,c,h)})}for(let o=0;o<2;o+=1){const a=60+i()*352,l=60+i()*352,c=60+i()*50,h=36+i()*30;e.save(),e.beginPath();const u=14;for(let f=0;f<u;f+=1){const m=f/u*Math.PI*2,g=.75+i()*.35;e.lineTo(a+Math.cos(m)*c*.5*g,l+Math.sin(m)*h*.5*g)}e.closePath(),e.fillStyle="#c98a6a",e.fill(),e.clip();for(let f=-4;f<6;f+=1){const m=l+f*10;for(let g=-6;g<7;g+=1){const S=a+g*22+f%2*11;e.fillStyle=i()<.5?"#b5583f":"#a24d36",e.fillRect(S,m,19,7)}}e.restore(),e.strokeStyle="rgba(110,70,45,0.35)",e.lineWidth=2,e.stroke()}e.strokeStyle="rgba(150,80,40,0.35)",e.lineWidth=1.2;for(let o=0;o<6;o+=1){let a=i()*512,l=i()*512;e.beginPath(),e.moveTo(a,l);for(let c=0;c<6;c+=1)a+=(i()-.5)*30,l+=8+i()*16,e.lineTo(a,l);e.stroke()}for(let o=0;o<5e3;o+=1)e.fillStyle=i()<.6?"rgba(255,226,180,0.22)":"rgba(220,120,60,0.1)",e.fillRect(i()*512,i()*512,1.5,1.5);const r=new Gn(t);return r.wrapS=$i,r.wrapT=$i,r.colorSpace=Ne,r.anisotropy=4,r.needsUpdate=!0,r}function KM(){const[t,e]=Os(256,256),i=Rn(808),s=256/8,r=256/8;e.fillStyle="#b9502c",e.fillRect(0,0,256,256);for(let a=0;a<8;a+=1){const l=a*s,c=a%2*(r/2);for(let h=-1;h<=8;h+=1){const u=h*r+c,f=.92+i()*.16,m=S=>Math.round(Math.min(255,S*f)),g=e.createLinearGradient(0,l,0,l+s);g.addColorStop(0,`rgb(${m(255)},${m(140)},${m(92)})`),g.addColorStop(.7,`rgb(${m(236)},${m(106)},${m(60)})`),g.addColorStop(1,`rgb(${m(176)},${m(70)},${m(38)})`),e.fillStyle=g,e.beginPath(),e.moveTo(u+1,l),e.lineTo(u+r-1,l),e.lineTo(u+r-1,l+s*.62),e.quadraticCurveTo(u+r/2,l+s*1.12,u+1,l+s*.62),e.closePath(),e.fill()}}const o=new Gn(t);return o.wrapS=$i,o.wrapT=$i,o.colorSpace=Ne,o.anisotropy=8,o.needsUpdate=!0,o}function JM(n){const[i,s]=Os(1024,192),r="#22304a";s.fillStyle="#ffffff",s.strokeStyle=r,s.lineWidth=10,s.beginPath(),s.roundRect(8,8,1008,176,40),s.fill(),s.stroke();const o=120,a=44,l=(192-o)/2;s.fillStyle="#13b0a2",s.beginPath(),s.roundRect(a,l,o,o,26),s.fill(),s.fillStyle="#ffffff";const c=10,h=(o-c*3)/2;for(let S=0;S<4;S+=1)s.beginPath(),s.roundRect(a+c+S%2*(h+c),l+c+Math.floor(S/2)*(h+c),h,h,8),s.fill();s.strokeStyle="#13b0a2",s.lineWidth=9,s.beginPath(),s.moveTo(a+o*.28,l+o*.62),s.lineTo(a+o*.62,l+o*.28),s.stroke();const u=a+o+30,f=1024-u-46;let m=112;for(s.font=`800 ${m}px Rubik, system-ui, sans-serif`;s.measureText(n).width>f&&m>40;)m-=4,s.font=`800 ${m}px Rubik, system-ui, sans-serif`;s.fillStyle=r,s.textAlign="center",s.textBaseline="middle",s.fillText(n,u+f/2,192/2+m*.04);const g=new Gn(i);return g.colorSpace=Ne,g.minFilter=Pi,g.magFilter=Ce,g.generateMipmaps=!0,g.anisotropy=4,g.needsUpdate=!0,g}function QM(){const[n,t]=Os(4,64),e=t.createLinearGradient(0,0,0,64);return e.addColorStop(0,"rgba(60,25,10,0.42)"),e.addColorStop(.45,"rgba(60,25,10,0.16)"),e.addColorStop(1,"rgba(60,25,10,0)"),t.fillStyle=e,t.fillRect(0,0,4,64),Wc(new Gn(n))}function Ff(n,t){const{width:e,height:i}=n,s=new Uint8Array(e*i*4),r=Rn(t^20973);for(let a=0;a<e*i;a+=1){const l=n.kind[a];if(l===0)continue;const c=(r()-.5)*18,h=n.density[a]/255;let u,f,m,g;if(l===1)u=156+c,f=134+c,m=100+c,g=(150+h*90)*n.haze;else if(l===2){const v=h;u=128-v*52+c,f=96-v*40+c,m=62-v*26+c,g=236+v*19}else if(l===4){const[v,_,E]=Of[n.density[a]%Of.length];u=v+c*.4,f=_+c*.4,m=E+c*.4,g=248}else if(l===5){const v=n.density[a]/255;u=96+v*52+c*.5,f=88+v*46+c*.5,m=76+v*34+c*.5,g=196+v*40}else{const v=h;if(v<.4){const _=v/.4;u=70+_*130+c*.5,f=84+_*120+c*.5,m=46+_*150+c*.5}else if(v<.82){const _=r()<.12?-34:0;u=252+_+c*.3,f=251+_+c*.3,m=244+_+c*.3}else u=92+c,f=96+c,m=86+c;g=255}const S=a*4;s[S]=u,s[S+1]=f,s[S+2]=m,s[S+3]=g}const o=new _r(s,e,i,wn,Je);return o.colorSpace=Ne,o.minFilter=Ce,o.magFilter=Ce,o.needsUpdate=!0,o}const Of=[[228,52,60],[40,104,222],[30,160,84],[128,64,196]];function jM(n){const t=new _r(n.foam,n.width,n.height,mr,Je);return t.minFilter=Ce,t.magFilter=Ce,t.needsUpdate=!0,t}function Bf(n){const t=new _r(n.display,n.width,n.height,mr,Je);return t.minFilter=Ce,t.magFilter=Ce,t.needsUpdate=!0,t}function Ba(){const[n,t]=Os(32,32),e=t.createRadialGradient(12,11,1,16,16,14);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(225,245,255,1)"),e.addColorStop(.75,"rgba(150,205,245,0.85)"),e.addColorStop(1,"rgba(120,185,235,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),Wc(new Gn(n))}const tS=2.2,ka=.19,eS=.11,za=2,Ga=9,kf=.065,nS=2.4,iS=.8;class sS{constructor(t,e,i,s,r){this.sky=t,this.rooms=e,this.fog=i,this.building=s,this.style=r,this.floors=s.floors.length;const o=DM(r.facade,s.floors.map(a=>a.band));if(o.plaster&&(this.plaster=ZM(),this.facade.push(new Yt(o.plaster,new sn({map:this.plaster,vertexColors:!0})))),this.facade.push(new Yt(o.trim,new sn({vertexColors:!0}))),o.glass&&this.facade.push(new Yt(o.glass,ud(t,i))),o.slope&&(this.tiles=KM(),this.facade.push(new Yt(o.slope,new sn({map:this.tiles,vertexColors:!0})))),o.shadows){this.shade=QM();const a=new sn({map:this.shade,transparent:!0,depthWrite:!1});a.polygonOffset=!0,a.polygonOffsetFactor=-1,a.polygonOffsetUnits=-4,this.facade.push(new Yt(o.shadows,a))}if(r.facade==="office"){this.sign=JM(Ae("officeSign"));for(const a of EM(this.floors)){const l=new Yt(new jn(a.w,a.h),new sn({map:this.sign,transparent:!0}));l.position.set(a.x,a.y,a.z),this.facade.push(l)}}this.group.add(...this.facade),this.cleanMask=new _r(new Uint8Array([0]),1,1,mr,Je),this.cleanMask.needsUpdate=!0}sky;rooms;fog;building;style;group=new rn;paneGeometry=new jn(Xt,ae);views=new Map;cleanMask;onKnock=null;facade=[];plaster=null;tiles=null;shade=null;sign=null;floors;build(t){for(let e=0;e<this.floors;e+=1)for(const i of t.panes(e)){const s=`${e}:${i.column}`;this.views.has(s)||this.views.set(s,this.createView(i))}}update(t,e){for(const i of this.views.values()){const{pane:s,uniforms:r}=i;if(i.mask&&s.mask.dirty&&(i.mask.needsUpdate=!0,s.mask.dirty=!1),i.foam&&s.mask.foamDirty&&(i.foam.needsUpdate=!0,s.mask.foamDirty=!1),i.glint>=0){i.glint+=t;const a=i.glint;r.uClear.value=Math.min(1,a/.25),r.uGlint.value=a<.8?a/.8:-1,r.uFlash.value=Math.max(0,1-a/.45),a>=.8&&(i.glint=-1,this.dropDirt(i))}this.animate(i,t,e.isAsking(s));const o=s.washed>0?Math.min(i.blindsDown,kf):i.blindsDown;i.blinds+=(o-i.blinds)*Math.min(1,t*nS),r.uBlinds.value=i.blinds}}celebrate(t){const e=this.views.get(`${t.floor}:${t.column}`);e&&(e.glint=0,e.wave=0,this.setScene(e,this.sceneOf(t)))}resoil(t){const e=this.views.get(`${t.floor}:${t.column}`);e&&(e.dirt?.dispose(),e.dirt=Ff(t.mask,Li(t.floor,t.column,77)),e.mask=e.mask??Bf(t.mask),e.glint=-1,e.uniforms.uDirt.value=e.dirt,e.uniforms.uMask.value=e.mask,e.foam&&(e.foam.needsUpdate=!0),e.uniforms.uClear.value=0,e.uniforms.uGlint.value=-1)}paneWorld(t){const e=zn(t.floor,t.column);return{x:e.x,y:e.y,z:ui}}animate(t,e,i){const s=t.scene.rig,r=zn(t.pane.floor,t.pane.column);if(!s)return;t.time+=e;const o=t.time+t.phase,a=Math.PI*2;let l=s.rest,c=s.idle.amp*Math.sin(a*s.idle.hz*o),h=0,u=0,f=0;if(s.idle.sip){const v=Math.max(0,Math.sin(a*s.idle.hz*o))**6;c=-s.rest*v}if(i&&!!t.pane.window?.knock){t.knock+=e,l=0,c*=.4;const v=t.knock%tS,_=Math.floor(t.knock/ka);if(t.knock>=0&&v<ka*3){const E=v%ka/eS;E<1&&(f=Math.sin(Math.PI*E),_!==t.tap&&(t.tap=_,this.onKnock?.(t.pane)))}c-=s.act.amp*f,h=s.act.reach*f}if(t.wave>=0){t.wave+=e;const v=t.wave,_=zf(0,.3,v)*(1-zf(za-.6,za,v));l=s.rest*(1-_),c=c*(1-_)+s.act.amp*Math.sin(a*s.act.hz*v)*_,u=s.act.hop*Math.abs(Math.sin(a*1.4*v))*_,h=s.act.reach*(.5-.5*Math.cos(a*s.act.hz*v))*_,v>=za&&(t.wave=-1)}const g=Math.min(1,e*Ga);t.angle+=(l-t.angle)*g,t.reach+=(h-t.reach)*Math.min(1,e*Ga*3),t.hop+=(u-t.hop)*Math.min(1,e*Ga*2);const S=.004*Math.sin(a*.3*o);t.uniforms.uArmPose.value=[t.angle+c,1+t.reach],t.uniforms.uBodyShift.value=[0,t.hop+S],t.mesh.position.x=r.x+.007*f}sceneOf(t){return this.rooms.scene(t.window?.resident,t.washed>0,Li(t.floor,t.column,77))}setScene(t,e){const i=[0,0,0,0];t.scene=e,t.uniforms.uBg.value=e.bg,t.uniforms.uBody.value=e.body??i,t.uniforms.uArm.value=e.arm??i,t.uniforms.uPivot.value=e.rig?.pivot??[0,0]}lookOf(t){const e=this.building.floors[t.floor]?.band;return e&&this.style.panes[e]||this.style.panes.base}createView(t){const e=zn(t.floor,t.column),i=Li(t.floor,t.column,77),s=t.clean,r=this.lookOf(t),o=t.mask.shape,a=t.window?.closed?iS:r.blinds*(.55+.45*Rn(Li(t.floor,t.column,313))()),l=t.washed>0?Math.min(a,kf):a,c=s?null:Ff(t.mask,i),h=s?null:Bf(t.mask),u=s||t.mask.foamLeft===0?null:jM(t.mask),f=this.sceneOf(t),m={uSky:{value:this.sky},uRooms:{value:this.rooms.texture},uBg:{value:f.bg},uBody:{value:[0,0,0,0]},uArm:{value:[0,0,0,0]},uPivot:{value:[0,0]},uArmPose:{value:[f.rig?.rest??0,1]},uBodyShift:{value:[0,0]},uHalfTexel:{value:this.rooms.halfTexel},uDirt:{value:c??this.cleanMask},uMask:{value:h??this.cleanMask},uFoam:{value:u??this.cleanMask},uClear:{value:s?1:0},uGlint:{value:-1},uFlash:{value:0},uTilt:{value:(i%1e3/1e3-.5)*.12},uMullion:{value:[o.mullionX??-1,o.mullionY??-1]},uBar:{value:o.bar/2},uFrameW:{value:Vo(o)},uRound:{value:o.round??0},uFrameColor:{value:r.frame},uPanel:{value:r.panel},uBlinds:{value:l},uBlindColor:{value:r.blindColor},uFogColor:{value:this.fog.color},uFog:{value:[this.fog.near,this.fog.far]}},g=new Yt(this.paneGeometry,YM(m));g.position.set(e.x,e.y,ui),this.group.add(g);const S={pane:t,mesh:g,uniforms:m,dirt:c,mask:h,foam:u,scene:f,glint:-1,wave:-1,knock:-.8,tap:-1,time:0,phase:i%1e3/97,angle:f.rig?.rest??0,reach:0,hop:0,blindsDown:a,blinds:l};return this.setScene(S,f),S}dropDirt(t){t.dirt?.dispose(),t.mask?.dispose(),t.foam?.dispose(),t.dirt=null,t.mask=null,t.foam=null,t.uniforms.uDirt.value=this.cleanMask,t.uniforms.uMask.value=this.cleanMask,t.uniforms.uFoam.value=this.cleanMask}dispose(){for(const t of this.views.values())this.disposeView(t);this.views.clear();for(const t of this.facade)t.geometry.dispose(),t.material.dispose();this.plaster?.dispose(),this.tiles?.dispose(),this.shade?.dispose(),this.sign?.dispose(),this.paneGeometry.dispose(),this.cleanMask.dispose(),this.group.removeFromParent()}disposeView(t){this.group.remove(t.mesh),t.mesh.material.dispose(),t.dirt?.dispose(),t.mask?.dispose(),t.foam?.dispose()}}function zf(n,t,e){const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)}const p=160,d=Math.round(p*1.55),Ei=6,fn="#2b2233",di=2.6,ne="#f6cfae";function dd(n,t,e){const i=Object.keys(t),s=Math.ceil(n.length/Ei)*Ei,r=s+i.length*4,o=Math.ceil(r/Ei),a=p*Ei,l=d*o,c=document.createElement("canvas");c.width=a,c.height=l;const h=c.getContext("2d");if(!h)throw new Error("2D canvas недоступен");h.lineJoin="round",h.lineCap="round";const u=(g,S)=>{h.save(),h.translate(g%Ei*p,Math.floor(g/Ei)*d),h.beginPath(),h.rect(0,0,p,d),h.clip(),S(),h.restore()};n.forEach((g,S)=>u(S,()=>g(h))),i.forEach((g,S)=>{const v=t[g];if(!v)return;const _=s+S*4;u(_,()=>v.body(h,!1)),u(_+1,()=>v.body(h,!0)),u(_+2,()=>v.arm(h,!1)),u(_+3,()=>v.arm(h,!0))});const f=new Gn(c);f.colorSpace=Ne,f.minFilter=Ce,f.magFilter=Ce,f.generateMipmaps=!1,f.needsUpdate=!0;const m=g=>{const S=g%Ei,v=Math.floor(g/Ei);return[S*p/a,1-(v+1)*d/l,p/a,d/l]};return{texture:f,halfTexel:[.5/p,.5/d],scene(g,S,v){const _=g?t[g]:void 0;if(!g||!_)return{bg:m(v%e),body:null,arm:null,rig:null};const E=s+i.indexOf(g)*4;return{bg:m(_.room),body:m(E+(S?1:0)),arm:m(E+(S?3:2)),rig:S?_.rig.clean:_.rig.dirty}}}}function ie(n,t){return[n/p,1-t/d]}function Xe(n,t,e){let i=Math.atan2(-t[1],t[0])-Math.atan2(-n[1],n[0]);for(;e<0&&i>0;)i-=Math.PI*2;for(;e>0&&i<0;)i+=Math.PI*2;return i}const nn={amp:0,hz:0,hop:0,reach:0};function D(n,t,e,i=di){n.beginPath(),e(),n.fillStyle=t,n.fill(),i>0&&(n.strokeStyle=fn,n.lineWidth=i,n.stroke())}function Ht(n,t,e,i=fn){n.beginPath(),e(),n.strokeStyle=i,n.lineWidth=t,n.stroke()}function He(n,t,e){const i=n.createRadialGradient(t,e,4,t,e,p*.5);i.addColorStop(0,"rgba(255,250,228,0.75)"),i.addColorStop(1,"rgba(255,250,228,0)"),n.fillStyle=i,n.fillRect(0,0,p,d)}function Ve(n,t,e,i,s,r){D(n,s,()=>n.arc(t,e,i,0,Math.PI*2));for(const o of[-1,1])D(n,s,()=>n.ellipse(t+o*i*.98,e+i*.08,i*.17,i*.24,0,0,Math.PI*2),2);if(rS(n,t,e,i,r),oS(n,t,e,i,r),r==="happy"){n.fillStyle="rgba(240,90,110,0.45)";for(const o of[-1,1])n.beginPath(),n.ellipse(t+o*i*.6,e+i*.3,i*.2,i*.13,0,0,Math.PI*2),n.fill()}Ht(n,2,()=>n.arc(t,e+i*.12,i*.12,Math.PI*.15,Math.PI*.85))}function rS(n,t,e,i,s){for(const r of[-1,1]){const o=t+r*i*.36,a=e-i*.08;if(s==="happy"||s==="squint"||s==="asleep"||s==="annoyed"&&r<0)Ht(n,3,()=>{s==="happy"?n.arc(o,a+i*.1,i*.17,Math.PI*1.15,Math.PI*1.85):s==="asleep"?n.arc(o,a-i*.08,i*.17,Math.PI*.15,Math.PI*.85):(n.moveTo(o-i*.17,a-i*.03),n.lineTo(o+i*.17,a+i*.03))});else{const u=s==="shock"?i*.3:i*.24;D(n,"#ffffff",()=>n.ellipse(o,a,i*.2,u,0,0,Math.PI*2),2);const f=s==="focus"?i*.08:0;n.fillStyle=fn,n.beginPath(),n.arc(o,a+f,i*(s==="shock"?.08:.11),0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.arc(o-i*.04,a+f-i*.05,i*.035,0,Math.PI*2),n.fill(),s==="sleepy"&&D(n,"#e7b48f",()=>n.ellipse(o,a-i*.1,i*.22,i*.16,0,Math.PI,Math.PI*2),2)}const c=s==="shock"?-i*.48:-i*.38,h=s==="angry"?-r*i*.16:s==="squint"||s==="annoyed"||s==="focus"?r*i*.1:s==="shock"?-r*i*.06:0;Ht(n,3,()=>{n.moveTo(o-i*.16,a+c-h),n.lineTo(o+i*.16,a+c+h)})}}function oS(n,t,e,i,s){const r=e+i*.48;if(s==="happy")D(n,"#a3343f",()=>{n.moveTo(t-i*.34,r-i*.05),n.quadraticCurveTo(t,r+i*.42,t+i*.34,r-i*.05),n.closePath()},2);else if(s==="angry")Ht(n,3,()=>n.arc(t,r+i*.16,i*.24,Math.PI*1.2,Math.PI*1.8));else if(s==="asleep")D(n,"#a3343f",()=>n.ellipse(t+i*.05,r,i*.08,i*.1,0,0,Math.PI*2),1.6);else if(s==="shock"||s==="squint"){const o=s==="shock";D(n,"#a3343f",()=>n.ellipse(t,r+i*.02,i*(o?.16:.1),i*(o?.2:.13),0,0,Math.PI*2),2)}else s==="annoyed"?Ht(n,3,()=>{n.moveTo(t-i*.24,r+i*.04),n.lineTo(t+i*.24,r-i*.06)}):Ht(n,3,()=>n.arc(t,r-i*.18,i*.24,Math.PI*.3,Math.PI*.7))}function We(n,t,e,i,s){D(n,s,()=>n.roundRect(t-i/2,e,i,d-e+20,i*.34))}function Kt(n,t,e,i,s,r,o,a=!1){const l=p*.085,c=(h,u)=>Ht(n,h,()=>{n.moveTo(t,e),n.lineTo(i,s)},u);if(c(l+di*2,fn),c(l,r),a){const h=Math.atan2(s-e,i-t);for(let u=-1.5;u<=1.5;u+=1){const f=h+u*.34,m=i+Math.cos(f)*l*.95,g=s+Math.sin(f)*l*.95,S=(v,_)=>Ht(n,v,()=>{n.moveTo(i,s),n.lineTo(m,g)},_);S(l*.36+di*2,fn),S(l*.36,o)}}D(n,o,()=>n.arc(i,s,l*.62,0,Math.PI*2))}function Oo(n,t,e,i){for(const s of[-1,1])Ht(n,2.4,()=>n.arc(t+s*i*.36,e-i*.08,i*.29,0,Math.PI*2));Ht(n,2.4,()=>{n.moveTo(t-i*.07,e-i*.1),n.lineTo(t+i*.07,e-i*.1)})}const Yo=.26,$o=.7;function aS(){return dd(lS,cS,4)}function vs(n,t,e,i){if(n.fillStyle=t,n.fillRect(0,0,p,d),n.fillStyle=e,i==="stripes")for(let s=8;s<p;s+=22)n.fillRect(s,0,7,d);else if(i==="diamonds")for(let s=14;s<d;s+=26)for(let r=10+s/26%2*13;r<p;r+=26)n.beginPath(),n.moveTo(r,s-4),n.lineTo(r+4,s),n.lineTo(r,s+4),n.lineTo(r-4,s),n.fill();else for(let s=12;s<d;s+=22)for(let r=8+s/22%2*11;r<p;r+=22)n.beginPath(),n.arc(r,s,2.6,0,Math.PI*2),n.fill();n.fillStyle="#8a5638",n.fillRect(0,d*.87,p,d*.13),n.fillStyle="rgba(0,0,0,0.12)",n.fillRect(0,d*.87,p,3)}function xs(n){const t=n.createRadialGradient(p*.5,d*.5,p*.4,p*.5,d*.5,p*1.05);t.addColorStop(0,"rgba(40,20,30,0)"),t.addColorStop(1,"rgba(40,20,30,0.28)"),n.fillStyle=t,n.fillRect(0,0,p,d),n.fillStyle="rgba(255,255,255,0.8)";for(let e=0;e<p;e+=14)n.beginPath(),n.ellipse(e+7,4,8,10,0,0,Math.PI),n.fill()}const lS=[n=>{vs(n,"#ffd9a8","rgba(220,130,80,0.18)","dots"),D(n,"#c8303d",()=>n.roundRect(p*.12,d*.28,p*.76,d*.32,6)),Ht(n,3,()=>n.roundRect(p*.17,d*.31,p*.66,d*.26,4),"#ffd25a"),D(n,"#2f5cb8",()=>n.ellipse(p*.5,d*.44,p*.17,d*.075,0,0,Math.PI*2),2),D(n,"#ffd25a",()=>n.ellipse(p*.5,d*.44,p*.06,d*.03,0,0,Math.PI*2),2),D(n,"#3f9a5a",()=>n.roundRect(p*.06,d*.6,p*.88,d*.1,8)),D(n,"#4fb36b",()=>n.roundRect(p*.04,d*.68,p*.92,d*.16,8)),xs(n)},n=>{vs(n,"#e6f3ff","rgba(70,130,200,0.15)","diamonds");for(let t=d*.52;t<d*.87;t+=13)for(let e=0;e<p;e+=13)n.fillStyle=(Math.round(e/13)+Math.round(t/13))%2?"#ffffff":"#bfe0ff",n.fillRect(e,t,12,12);D(n,"#f4efe6",()=>n.roundRect(p*.52,d*.6,p*.42,d*.27,4)),D(n,"#3a3a44",()=>n.roundRect(p*.58,d*.585,p*.14,d*.025,2),1.5),D(n,"#e8392f",()=>n.ellipse(p*.66,d*.545,p*.085,d*.042,0,0,Math.PI*2)),Ht(n,3,()=>{n.moveTo(p*.74,d*.54),n.lineTo(p*.8,d*.52)}),D(n,"#8a5638",()=>n.rect(p*.08,d*.3,p*.38,d*.02),2),["#ffc93a","#ff7a5c","#5cc46b","#ffa53a"].forEach((t,e)=>{D(n,t,()=>n.roundRect(p*(.1+e*.088),d*.235,p*.065,d*.065,3),2)}),xs(n)},n=>{vs(n,"#d8e8ff","rgba(80,110,190,0.16)","stripes"),D(n,"#8a5638",()=>n.rect(p*.04,d*.5,p*.08,d*.37));for(let t=0;t<3;t+=1)for(let e=0;e<6;e+=1)n.fillStyle=["#ff6b7a","#ffc93a","#4aa3ff","#5cc46b"][(e+t*2)%4],n.fillRect(p*(.12+e*.1),d*(.62+t*.065),p*.1,d*.065);Ht(n,di,()=>n.rect(p*.12,d*.62,p*.6,d*.195)),D(n,"#ffffff",()=>n.roundRect(p*.13,d*.555,p*.24,d*.06,6)),D(n,"#8a5638",()=>n.rect(p*.78,d*.68,p*.16,d*.19)),D(n,"#ffb347",()=>{n.moveTo(p*.8,d*.52),n.lineTo(p*.92,d*.52),n.lineTo(p*.96,d*.61),n.lineTo(p*.76,d*.61),n.closePath()}),xs(n)},n=>{vs(n,"#ffe4b8","rgba(190,120,60,0.18)","dots"),D(n,"#8a5034",()=>n.rect(p*.05,d*.24,p*.44,d*.63)),D(n,"rgba(210,236,255,0.8)",()=>n.rect(p*.09,d*.28,p*.36,d*.28),2),["#ffffff","#ff7a5c","#4aa3ff","#ffc93a"].forEach((t,e)=>{D(n,t,()=>n.arc(p*(.14+e*.088),d*.36,p*.034,0,Math.PI*2),1.6),D(n,t,()=>n.rect(p*(.12+e*.088),d*.46,p*.05,d*.06),1.6)}),D(n,"#5c4433",()=>n.rect(p*.58,d*.66,p*.34,d*.21)),D(n,"#3b3b44",()=>n.roundRect(p*.58,d*.45,p*.34,d*.21,4)),D(n,"#7fd0ff",()=>n.roundRect(p*.61,d*.48,p*.24,d*.15,3),2),Ht(n,2.4,()=>{n.moveTo(p*.75,d*.45),n.lineTo(p*.66,d*.34),n.moveTo(p*.75,d*.45),n.lineTo(p*.87,d*.35)}),xs(n)},n=>{vs(n,"#3a3d5c","rgba(140,130,230,0.16)","dots"),D(n,"#ff5fa8",()=>n.roundRect(p*.6,d*.14,p*.3,d*.2,3)),D(n,"#ffd23f",()=>n.arc(p*.75,d*.24,p*.06,0,Math.PI*2),2),n.fillStyle="#5ad2ff",n.fillRect(0,d*.085,p,4);const t=n.createRadialGradient(p*.25,d*.55,4,p*.25,d*.55,p*.7);t.addColorStop(0,"rgba(90,190,255,0.5)"),t.addColorStop(1,"rgba(90,190,255,0)"),n.fillStyle=t,n.fillRect(0,0,p,d),D(n,"#5c4433",()=>n.rect(p*.02,d*.72,p*.5,d*.04)),D(n,"#1a1c28",()=>n.roundRect(p*.04,d*.48,p*.36,d*.22,4)),D(n,"#5ad2ff",()=>n.roundRect(p*.07,d*.51,p*.3,d*.16,3),2),D(n,"#ff5f5f",()=>n.rect(p*.12,d*.56,p*.06,d*.03),0),D(n,"#ffd23f",()=>n.rect(p*.24,d*.6,p*.08,d*.03),0),xs(n)},n=>{vs(n,"#f6f1e6","rgba(150,140,120,0.16)","dots"),D(n,"#8a5638",()=>n.rect(p*.6,d*.4,p*.035,d*.47),2),D(n,"#8a5638",()=>n.rect(p*.87,d*.4,p*.035,d*.47),2);const t=n.createLinearGradient(0,d*.3,0,d*.58);t.addColorStop(0,"#5b5fe7"),t.addColorStop(.5,"#ff8a5d"),t.addColorStop(1,"#ffd56e"),D(n,t,()=>n.rect(p*.55,d*.3,p*.4,d*.27)),D(n,"#fff08a",()=>n.arc(p*.75,d*.555,p*.065,Math.PI,Math.PI*2),2),["#ff3355","#2f9bff","#ffd23f"].forEach((e,i)=>{D(n,e,()=>n.roundRect(p*(.62+i*.1),d*.8,p*.08,d*.07,2),2)}),xs(n)}],pd=p*Yo,Ha=[pd+p*.16,d*.68],jr=[p*.08,-d*.26],mc=p*$o,Va=[mc+p*.17,d*.68],md=p*Yo,Wa=[md,d*.75],gd=p*$o,_d=d*.87,Xa=[gd-p*.06,_d-d*.17],to=[-p*.14,-d*.12],js=p*$o,qa=[js+p*.19,d*.68],vd=p*Yo,Ya=[vd,d*.7],Xc=p*$o,Gf=[Xc,d*.7],Hf=[Xc+p*.17,d*.68],xd=p*Yo,$a=[xd+p*.16,d*.68];function Vf(n,t,e,i,s,r){n.save(),n.translate(t,e),n.rotate(r),D(n,"#f4f2e8",()=>n.rect(-i/2,-s/2,i,s)),n.fillStyle=fn,n.fillRect(-i*.4,-s*.4,i*.6,s*.1),n.fillStyle="#8f8f88";for(let o=0;o<5;o+=1)n.fillRect(-i*.4,-s*.18+o*s*.13,i*(o%2?.5:.8),2.4);n.restore()}function Wf(n,t,e,i=1){D(n,"#2a2d3a",()=>n.roundRect(t-p*.11*i,e-d*.025*i,p*.22*i,d*.05*i,8*i)),n.fillStyle="#ff5f5f",n.beginPath(),n.arc(t+p*.05*i,e,2.6*i,0,Math.PI*2),n.fill(),n.fillStyle="#5ad2ff",n.beginPath(),n.arc(t-p*.05*i,e,2.6*i,0,Math.PI*2),n.fill()}const cS={granny:{room:0,body(n,t){const e=pd,i=d*.538,s=p*.15,r="#b35fd6";He(n,e,d*.5),We(n,e,d*.62,p*.46,r);for(let o=-2;o<=2;o+=1)D(n,"#ffffff",()=>n.arc(e+o*p*.04,d*.635,p*.026,0,Math.PI),1.5);for(let o=0;o<3;o+=1)D(n,"#ffd25a",()=>n.arc(e,d*(.71+o*.07),p*.015,0,Math.PI*2),1.5);Kt(n,e-p*.16,d*.68,e-p*.04,d*.81,r,ne),D(n,"#d9d9e4",()=>n.arc(e,i-s*1.02,s*.45,0,Math.PI*2)),Ve(n,e,i,s,ne,t?"happy":"squint"),D(n,"#e6e6ef",()=>{n.arc(e,i-s*.12,s*1.04,Math.PI*1.05,Math.PI*1.95),n.quadraticCurveTo(e,i-s*.55,e-s*1,i-s*.3)}),Oo(n,e,i,s)},arm(n,t){const[e,i]=Ha;Kt(n,e,i,e+jr[0],i+jr[1],"#b35fd6",ne,t)},rig:{dirty:{pivot:ie(...Ha),rest:Xe(jr,[-p*.11,d*.12],-1),idle:{amp:.03,hz:.5},act:{amp:.1,hz:0,hop:0,reach:.16}},clean:{pivot:ie(...Ha),rest:Xe(jr,[p*.04,d*.18],-1),idle:{amp:.03,hz:.4},act:{amp:.42,hz:2.4,hop:0,reach:0}}}},grandpa:{room:3,body(n,t){const e=mc,i=d*.528,s=p*.15;He(n,e,d*.5),We(n,e,d*.61,p*.44,"#ffffff"),D(n,"#3f8f5a",()=>{n.moveTo(e-p*.22,d*.66),n.lineTo(e-p*.05,d*.66),n.lineTo(e-p*.02,d),n.lineTo(e-p*.22,d),n.closePath(),n.moveTo(e+p*.22,d*.66),n.lineTo(e+p*.05,d*.66),n.lineTo(e+p*.02,d),n.lineTo(e+p*.22,d),n.closePath()}),Kt(n,e-p*.17,d*.68,e-p*.12,d*.85,"#ffffff","#f2c3a0"),Ve(n,e,i,s,"#f2c3a0",t?"happy":"focus");for(const r of[-1,1])D(n,"#f2f2f7",()=>n.ellipse(e+r*s*.95,i-s*.2,s*.26,s*.36,0,0,Math.PI*2),2);Oo(n,e,i,s),D(n,"#f2f2f7",()=>n.ellipse(e,i+s*.36,s*.5,s*.15,0,0,Math.PI*2),2)},arm(n,t){const[e,i]=Va;t?(Kt(n,e,i,e-p*.05,i-d*.32,"#ffffff","#f2c3a0"),Vf(n,e-p*.1,i-d*.4,p*.28,d*.15,-.2)):(Vf(n,mc,d*.74,p*.42,d*.24,0),Kt(n,e,i,e-p*.03,i+d*.04,"#ffffff","#f2c3a0"))},rig:{dirty:{pivot:ie(...Va),rest:0,idle:{amp:.035,hz:.35},act:nn},clean:{pivot:ie(...Va),rest:Xe([-p*.05,-d*.32],[-p*.12,d*.06],1),idle:{amp:.03,hz:.4},act:{amp:.35,hz:2,hop:0,reach:0}}}},kid:{room:2,body(n,t){const e=md,i=d*.615,s=p*.14;He(n,e,d*.6),We(n,e,d*.69,p*.38,"#3b8fe8"),n.save(),n.beginPath(),n.roundRect(e-p*.19,d*.69,p*.38,d,p*.12),n.clip(),n.fillStyle="#ffffff";for(let r=d*.73;r<d;r+=12)n.fillRect(e-p*.2,r,p*.4,5);n.restore(),Ve(n,e,i,s,"#f8d6bd",t?"happy":"neutral"),n.fillStyle="#d9895a";for(const[r,o]of[[-.5,.18],[-.38,.28],[.42,.2],[.55,.3]])n.beginPath(),n.arc(e+r*s,i+o*s,1.6,0,Math.PI*2),n.fill();D(n,"#e8392f",()=>n.arc(e,i-s*.2,s*1.02,Math.PI*1.02,Math.PI*1.98)),D(n,"#e8392f",()=>n.roundRect(e-s*.1,i-s*.42,s*1.45,s*.26,s*.12))},arm(n,t){const[e,i]=Wa;for(const s of[-1,1]){const r=e+s*p*.14;t?Kt(n,r,i,r+s*p*.07,d*.42,"#3b8fe8","#f8d6bd",!0):Kt(n,r,i,r+s*p*.03,d*.88,"#3b8fe8","#f8d6bd")}},rig:{dirty:{pivot:ie(...Wa),rest:0,idle:{amp:.015,hz:.5},act:nn},clean:{pivot:ie(...Wa),rest:0,idle:{amp:.02,hz:.6},act:{amp:.08,hz:2.6,hop:.06,reach:0}}}},cat:{room:1,body(n,t){const e=gd,i=_d,s="#ff9a3a";He(n,e,i-d*.2),D(n,"#e9dcc6",()=>n.rect(-4,i,p+8,d*.2));const r=(l,c)=>Ht(n,l,()=>{n.moveTo(e+p*.13,i-d*.03),n.quadraticCurveTo(e+p*.3,i-d*.02,e+p*.25,i-d*.17)},c);r(p*.07+di*2,fn),r(p*.07,s),D(n,s,()=>n.ellipse(e,i-d*.11,p*.17,d*.12,0,0,Math.PI*2)),D(n,"#fff1dc",()=>n.ellipse(e,i-d*.08,p*.09,d*.075,0,0,Math.PI*2),2);for(let l=0;l<3;l+=1)Ht(n,3.4,()=>{n.moveTo(e-p*.13+l*p*.035,i-d*.2),n.lineTo(e-p*.11+l*p*.035,i-d*.13)},"#cf6a1e");D(n,s,()=>n.ellipse(e+p*.06,i-d*.015,p*.05,d*.02,0,0,Math.PI*2),2);const o=i-d*.27,a=p*.13;for(const l of[-1,1])D(n,s,()=>{n.moveTo(e+l*a*.95,o-a*.25),n.lineTo(e+l*a*.8,o-a*1.35),n.lineTo(e+l*a*.1,o-a*.85),n.closePath()}),D(n,"#ffb8c2",()=>{n.moveTo(e+l*a*.78,o-a*.45),n.lineTo(e+l*a*.72,o-a*1.05),n.lineTo(e+l*a*.32,o-a*.8),n.closePath()},0);D(n,s,()=>n.arc(e,o,a,0,Math.PI*2)),D(n,"#fff1dc",()=>n.ellipse(e,o+a*.38,a*.55,a*.38,0,0,Math.PI*2),2);for(const l of[-1,1]){const c=e+l*a*.4,h=o-a*.08;t?Ht(n,3,()=>n.arc(c,h+a*.1,a*.18,Math.PI*1.15,Math.PI*1.85)):(D(n,"#c8f05a",()=>n.ellipse(c,h,a*.2,a*.25,0,0,Math.PI*2),2),n.fillStyle=fn,n.beginPath(),n.ellipse(c,h,a*.06,a*.2,0,0,Math.PI*2),n.fill()),Ht(n,1.6,()=>{n.moveTo(e+l*a*.25,o+a*.35),n.lineTo(e+l*a*1.15,o+a*.22),n.moveTo(e+l*a*.25,o+a*.45),n.lineTo(e+l*a*1.15,o+a*.5)})}D(n,"#ff6b8a",()=>n.ellipse(e,o+a*.24,a*.12,a*.08,0,0,Math.PI*2),1.6)},arm(n){const[t,e]=Xa,i=t+to[0],s=e+to[1],r="#ff9a3a",o=(a,l)=>Ht(n,a,()=>{n.moveTo(t,e),n.lineTo(i,s)},l);o(p*.075+di*2,fn),o(p*.075,r),D(n,r,()=>n.ellipse(i,s,p*.06,d*.045,0,0,Math.PI*2)),D(n,"#ffb8c2",()=>n.arc(i,s+d*.006,p*.024,0,Math.PI*2),1.4);for(let a=-1;a<=1;a+=1)D(n,"#ffb8c2",()=>n.arc(i+a*p*.022,s-d*.026,p*.011,0,Math.PI*2),1)},rig:{dirty:{pivot:ie(...Xa),rest:Xe(to,[-p*.02,d*.15],-1),idle:{amp:.02,hz:.5},act:{amp:.12,hz:0,hop:0,reach:.16}},clean:{pivot:ie(...Xa),rest:Xe(to,[-p*.02,d*.15],-1),idle:{amp:.02,hz:.5},act:{amp:.4,hz:2.2,hop:0,reach:0}}}},undershirt:{room:1,body(n,t){const e=js,i=d*.518,s=p*.15,r="#efb58e";He(n,e,d*.5),We(n,e,d*.6,p*.46,r),D(n,"#ffffff",()=>{n.moveTo(e-p*.17,d),n.lineTo(e-p*.17,d*.66),n.quadraticCurveTo(e-p*.11,d*.7,e-p*.08,d*.62),n.quadraticCurveTo(e,d*.72,e+p*.08,d*.62),n.quadraticCurveTo(e+p*.11,d*.7,e+p*.17,d*.66),n.lineTo(e+p*.17,d),n.closePath()}),n.fillStyle="#6b4a2f";for(let o=0;o<7;o+=1)n.fillRect(e-p*.04+o%4*4,d*.61+Math.floor(o/4)*4,2,3);t?Kt(n,e-p*.19,d*.68,e+p*.06,d*.72,r,r):Kt(n,e-p*.19,d*.68,e-p*.16,d*.86,r,r),Ve(n,e,i,s,r,t?"shock":"sleepy"),D(n,"#4a3020",()=>{n.arc(e,i-s*.2,s*1.03,Math.PI*1.05,Math.PI*1.95),n.lineTo(e+s*.5,i-s*.62),n.lineTo(e+s*.2,i-s*.78),n.lineTo(e-s*.2,i-s*.6),n.closePath()}),D(n,"#4a3020",()=>n.ellipse(e,i+s*.3,s*.44,s*.13,0,0,Math.PI*2),2)},arm(n,t){const[e,i]=qa,s="#efb58e";t?(D(n,"#ff8fb0",()=>n.roundRect(js-p*.2,d*.6,p*.4,d*.25,p*.08)),Ht(n,2,()=>{n.moveTo(js-p*.14,d*.65),n.lineTo(js+p*.14,d*.8)},"rgba(255,255,255,0.7)"),Kt(n,e,i,e-p*.06,i+d*.06,s,s)):(Kt(n,e,i,e-p*.14,i-d*.17,s,s),D(n,"#e8392f",()=>n.roundRect(e-p*.2,i-d*.22,p*.11,d*.08,3)),Ht(n,2.4,()=>n.arc(e-p*.21,i-d*.18,p*.025,Math.PI*.5,Math.PI*1.5)))},rig:{dirty:{pivot:ie(...qa),rest:Xe([-p*.14,-d*.17],[-p*.1,d*.04],1),idle:{amp:0,hz:.18,sip:!0},act:nn},clean:{pivot:ie(...qa),rest:0,idle:{amp:.02,hz:.5},act:{amp:.06,hz:6,hop:0,reach:.05}}}},pies:{room:1,body(n,t){const e=vd,i=d*.511,s=p*.14;He(n,e,d*.5),We(n,e,d*.61,p*.46,"#4a7fe0"),D(n,"#ffffff",()=>n.roundRect(e-p*.14,d*.68,p*.28,d,6)),Ve(n,e,i+s*.1,s*.9,ne,t?"happy":"neutral"),n.beginPath(),n.ellipse(e,i-s*.05,s*1.22,s*1.3,0,0,Math.PI*2),n.ellipse(e,i+s*.2,s*.8,s*.86,0,0,Math.PI*2),n.fillStyle="#e8392f",n.fill("evenodd"),n.strokeStyle=fn,n.lineWidth=di,n.stroke(),n.fillStyle="#ffffff";for(const[r,o]of[[-.62,-.78],[0,-1.08],[.62,-.78],[-1.02,-.05],[1.02,-.05],[-.85,.55],[.85,.55]])n.beginPath(),n.arc(e+r*s,i+o*s,s*.085,0,Math.PI*2),n.fill();for(const r of[-1,1])D(n,"#e8392f",()=>{n.moveTo(e,i+s*1.1),n.lineTo(e+r*s*.42,i+s*1.42),n.lineTo(e+r*s*.12,i+s*1.5),n.closePath()},2);D(n,"#e8392f",()=>n.arc(e,i+s*1.12,s*.15,0,Math.PI*2),2)},arm(n,t){const[e]=Ya,i=t?d*.7:d*.78,s=p*.46,r=e+p*.04;for(const o of[-1,1])Kt(n,e+o*p*.18,d*.68,r+o*s*.42,i+d*.02,"#4a7fe0",ne);D(n,"#c9c9d6",()=>n.roundRect(r-s/2,i,s,d*.03,3));for(let o=0;o<3;o+=1)D(n,"#f2a33a",()=>n.ellipse(r-s/2+s*(.2+o*.3),i-d*.012,p*.055,d*.024,0,0,Math.PI*2),2);if(t)for(let o=0;o<3;o+=1){const a=r-s/2+s*(.2+o*.3);Ht(n,2.4,()=>{n.moveTo(a,i-d*.04),n.quadraticCurveTo(a+7,i-d*.07,a,i-d*.11)},"rgba(255,255,255,0.9)")}},rig:{dirty:{pivot:ie(...Ya),rest:0,idle:{amp:.012,hz:.5},act:nn},clean:{pivot:ie(...Ya),rest:0,idle:{amp:.015,hz:.5},act:{amp:.04,hz:1.2,hop:0,reach:.14}}}},gamer:{room:4,body(n,t){const e=Xc,i=d*.528,s=p*.15,r="#8a52e0";He(n,e,d*.5),We(n,e,d*.61,p*.46,r),D(n,"#a77af0",()=>n.arc(e,d*.62,p*.14,0,Math.PI),2),t&&(Kt(n,e-p*.17,d*.68,e-p*.1,d*.84,r,"#f2c3a0"),Wf(n,e-p*.1,d*.88,.8)),Ve(n,e,i,s,t?"#f2c3a0":"#bfe2ff",t?"annoyed":"focus"),D(n,"#2a1e1a",()=>{n.arc(e,i-s*.25,s*1.04,Math.PI*1.08,Math.PI*1.92),n.quadraticCurveTo(e+s*.2,i-s*.5,e-s*.95,i-s*.55)}),Ht(n,5,()=>n.arc(e,i-s*.15,s*1.15,Math.PI*1.12,Math.PI*1.88));for(const o of[-1,1])D(n,"#e8392f",()=>n.roundRect(e+o*s*1.05-s*.24,i-s*.3,s*.48,s*.65,s*.16))},arm(n,t){const e="#8a52e0";if(t){const[i,s]=Hf;Kt(n,i,s,i-p*.05,s-d*.27,e,"#f2c3a0",!0)}else{const[i,s]=Gf;for(const r of[-1,1])Kt(n,i+r*p*.17,d*.68,i+r*p*.09,s+d*.08,e,"#bfe2ff");Wf(n,i,s+d*.08)}},rig:{dirty:{pivot:ie(...Gf),rest:0,idle:{amp:.025,hz:7},act:nn},clean:{pivot:ie(...Hf),rest:Xe([-p*.05,-d*.27],[p*.02,d*.17],-1),idle:{amp:.02,hz:.5},act:{amp:.16,hz:4,hop:0,reach:.06}}}},artist:{room:5,body(n,t){const e=xd,i=d*.531,s=p*.145;He(n,e,d*.5),We(n,e,d*.61,p*.46,"#ffffff"),n.save(),n.beginPath(),n.roundRect(e-p*.23,d*.61,p*.46,d,p*.15),n.clip(),n.fillStyle="#2a4a8a";for(let r=d*.64;r<d;r+=11)n.fillRect(e-p*.24,r,p*.48,5);n.restore(),Kt(n,e-p*.16,d*.68,e-p*.12,d*.82,"#ffffff",ne),D(n,"#e9c58a",()=>n.ellipse(e-p*.12,d*.86,p*.12,d*.045,-.2,0,Math.PI*2)),["#ff3355","#2f9bff","#ffd23f","#2fbf6a"].forEach((r,o)=>{D(n,r,()=>n.arc(e-p*.2+o*p*.05,d*.855,3.4,0,Math.PI*2),1.2)}),Ve(n,e,i,s,ne,t?"happy":"focus"),Ht(n,2.6,()=>{n.moveTo(e,i+s*.32),n.quadraticCurveTo(e-s*.35,i+s*.2,e-s*.5,i+s*.05),n.moveTo(e,i+s*.32),n.quadraticCurveTo(e+s*.35,i+s*.2,e+s*.5,i+s*.05)}),D(n,"#1d1d28",()=>n.ellipse(e-s*.12,i-s*.82,s*1.1,s*.42,-.18,0,Math.PI*2)),D(n,"#1d1d28",()=>n.rect(e-s*.18,i-s*1.38,s*.18,s*.24),2)},arm(n,t){const[e,i]=$a,s=t?e+p*.06:e+p*.15,r=t?i-d*.32:i-d*.1;Kt(n,e,i,s,r,"#ffffff",ne),Ht(n,4,()=>{n.moveTo(s,r),n.lineTo(s+p*.08,r-d*.07)},"#8a5638"),D(n,"#e8392f",()=>n.arc(s+p*.085,r-d*.075,3.6,0,Math.PI*2),1.6)},rig:{dirty:{pivot:ie(...$a),rest:0,idle:{amp:.12,hz:.9},act:nn},clean:{pivot:ie(...$a),rest:Xe([p*.06,-d*.32],[p*.15,-d*.1],-1),idle:{amp:.04,hz:.5},act:{amp:.35,hz:1.8,hop:0,reach:0}}}}};function hS(){return dd(uS,_S,6)}function eo(n,t,e="#6f7d92"){n.fillStyle=t,n.fillRect(0,0,p,d),n.fillStyle="rgba(40,60,90,0.07)";for(let s=26;s<p;s+=40)n.fillRect(s,0,2,d*.88);const i=n.createRadialGradient(p*.5,d*.03,4,p*.5,d*.03,p*.6);i.addColorStop(0,"rgba(255,255,240,0.9)"),i.addColorStop(1,"rgba(255,255,240,0)"),n.fillStyle=i,n.fillRect(0,0,p,d*.4),D(n,"#ffffff",()=>n.roundRect(p*.2,d*.012,p*.6,d*.022,3),1.6),n.fillStyle=e,n.fillRect(0,d*.88,p,d*.12),n.fillStyle="rgba(0,0,0,0.14)",n.fillRect(0,d*.88,p,3)}function oi(n){const t=n.createRadialGradient(p*.5,d*.5,p*.4,p*.5,d*.5,p*1.05);t.addColorStop(0,"rgba(30,30,50,0)"),t.addColorStop(1,"rgba(30,30,50,0.26)"),n.fillStyle=t,n.fillRect(0,0,p,d)}function Ai(n,t,e="#f3e4c6",i="#d8bf94"){D(n,i,()=>n.rect(-4,t+d*.026,p+8,d)),D(n,e,()=>n.rect(-4,t,p+8,d*.03))}function gc(n,t,e,i,s){D(n,"#5b6475",()=>n.rect(t+i*.42,e+s,i*.16,s*.28),2),D(n,"#7b8496",()=>n.roundRect(t,e,i,s,4)),D(n,"#9aa3b4",()=>n.roundRect(t+i*.38,e+s*.35,i*.24,s*.3,3),0)}function fS(n,t,e,i=1){for(let s=0;s<7;s+=1){const r=-Math.PI/2+(s-3)*.38;D(n,s%2?"#3fae5a":"#5cc46b",()=>n.ellipse(t+Math.cos(r)*14*i,e-16*i+Math.sin(r)*16*i,6*i,15*i,r+Math.PI/2,0,Math.PI*2),2)}D(n,"#e06a3a",()=>n.roundRect(t-11*i,e-4*i,22*i,20*i,3))}function Za(n,t,e,i,s,r=ne){D(n,i,()=>n.roundRect(t-13,e+8,26,30,9),2),D(n,r,()=>n.arc(t,e,9.5,0,Math.PI*2),2),D(n,s,()=>n.arc(t,e-2,10,Math.PI*1.05,Math.PI*1.95),2)}function Xf(n,t,e){D(n,e,()=>n.rect(-4,t,p+8,d*.12)),n.fillStyle="rgba(255,255,255,0.35)",n.fillRect(0,t+3,p,3)}const uS=[n=>{eo(n,"#e3edf7"),D(n,"#ffffff",()=>n.roundRect(p*.08,d*.16,p*.36,d*.17,3)),["#13b0a2","#ffc93a","#ff7a3d","#4f8cff"].forEach((t,e)=>{const i=d*(.04+e*.025);D(n,t,()=>n.rect(p*(.12+e*.075),d*.3-i,p*.05,i),1.4)}),D(n,"#ffffff",()=>n.arc(p*.8,d*.2,p*.07,0,Math.PI*2)),Ht(n,2.4,()=>{n.moveTo(p*.8,d*.2),n.lineTo(p*.8,d*.17),n.moveTo(p*.8,d*.2),n.lineTo(p*.83,d*.21)}),Za(n,p*.18,d*.56,"#ff8fb0","#3a2a20"),Za(n,p*.8,d*.57,"#4f8cff","#1d1d1d","#d9a079"),Xf(n,d*.62,"#5cc7bd"),gc(n,p*.3,d*.52,p*.2,d*.08),fS(n,p*.9,d*.86,.9),oi(n)},n=>{eo(n,"#f4ece0","#7d8a9c"),D(n,"#9fd8ff",()=>n.roundRect(p*.08,d*.38,p*.16,d*.12,8)),D(n,"#ffffff",()=>n.roundRect(p*.06,d*.5,p*.2,d*.38,4)),D(n,"#4f8cff",()=>n.rect(p*.13,d*.56,p*.06,d*.03),1.4),D(n,"#b9c0cc",()=>n.rect(p*.72,d*.42,p*.24,d*.46));for(let t=0;t<3;t+=1)Ht(n,2,()=>n.rect(p*.75,d*(.45+t*.14),p*.18,d*.11)),D(n,"#5b6475",()=>n.rect(p*.8,d*(.49+t*.14),p*.08,d*.015),0);Za(n,p*.48,d*.55,"#3fae6a","#e0b04a"),Xf(n,d*.62,"#ffb067"),oi(n)},n=>{n.fillStyle="#e7f5ef",n.fillRect(0,0,p,d),n.fillStyle="rgba(60,140,120,0.12)";for(let t=0;t<d*.88;t+=16)n.fillRect(0,t,p,1.5);for(let t=0;t<p;t+=16)n.fillRect(t,0,1.5,d*.88);n.fillStyle="#7d8a9c",n.fillRect(0,d*.88,p,d*.12),D(n,"#ffffff",()=>n.roundRect(p*.04,d*.22,p*.28,d*.66,5)),Ht(n,2,()=>{n.moveTo(p*.04,d*.46),n.lineTo(p*.32,d*.46)}),["#ffe45c","#ff8fb0","#9fd8ff","#ffe45c"].forEach((t,e)=>{D(n,t,()=>n.rect(p*(.08+e%2*.11),d*(.27+Math.floor(e/2)*.08),p*.09,d*.055),1.4)}),D(n,"#ffffff",()=>n.rect(-4,d*.62,p+8,d*.04)),D(n,"#d8dde6",()=>n.rect(-4,d*.66,p+8,d)),D(n,"#c9ced6",()=>n.roundRect(p*.6,d*.42,p*.22,d*.2,4)),D(n,"#2b2f38",()=>n.roundRect(p*.64,d*.47,p*.14,d*.06,3),1.6),D(n,"#e8392f",()=>n.arc(p*.71,d*.58,p*.025,0,Math.PI*2),1.4),D(n,"#ffffff",()=>n.roundRect(p*.38,d*.2,p*.3,d*.12,3)),D(n,"#2b2f38",()=>n.roundRect(p*.41,d*.225,p*.18,d*.07,2),1.4),D(n,"#ffb8d0",()=>n.roundRect(p*.86,d*.57,p*.12,d*.05,2),1.6),oi(n)},n=>{eo(n,"#eef0f7"),D(n,"#d2d7e0",()=>n.roundRect(p*.55,d*.5,p*.38,d*.38,5)),D(n,"#5b6475",()=>n.rect(p*.55,d*.46,p*.38,d*.05)),D(n,"#ffffff",()=>n.rect(p*.6,d*.43,p*.24,d*.03),1.4),D(n,"#5cc46b",()=>n.arc(p*.86,d*.55,3.4,0,Math.PI*2),1.2);for(let t=0;t<3;t+=1)D(n,"#c9a46a",()=>n.rect(p*.05,d*(.76-t*.11),p*.3,d*.11),2);D(n,"#d9a46a",()=>n.roundRect(p*.12,d*.14,p*.5,d*.16,3)),["#ffe45c","#ff8fb0","#9fd8ff"].forEach((t,e)=>{D(n,t,()=>n.rect(p*(.16+e*.15),d*(.17+e%2*.04),p*.1,d*.06),1.2)});for(const[t,e,i]of[[.7,.3,.4],[.85,.24,-.3],[.45,.36,.8]])n.save(),n.translate(p*t,d*e),n.rotate(i),D(n,"#ffffff",()=>n.rect(-7,-9,14,18),1.6),n.restore();oi(n)},n=>{eo(n,"#e2ebf5"),D(n,"#2b2f38",()=>n.roundRect(p*.04,d*.16,p*.5,d*.24,4)),D(n,"#ffffff",()=>n.rect(p*.065,d*.175,p*.45,d*.205),0),["#4f8cff","#13b0a2","#ffc93a","#ff7a3d"].forEach((t,e)=>{const i=d*(.04+e*.035);D(n,t,()=>n.rect(p*(.1+e*.1),d*.36-i,p*.07,i),1.4)}),Ht(n,4,()=>{n.moveTo(p*.1,d*.32),n.lineTo(p*.46,d*.2)},"#2fbf6a"),D(n,"#2fbf6a",()=>{n.moveTo(p*.49,d*.19),n.lineTo(p*.42,d*.19),n.lineTo(p*.46,d*.24),n.closePath()},1.6);for(const t of[.12,.88])D(n,"#2b2f38",()=>n.roundRect(p*t-14,d*.66,28,d*.22,8));D(n,"#6b4a33",()=>n.rect(-4,d*.84,p+8,d)),D(n,"#8a5f42",()=>n.rect(-4,d*.82,p+8,d*.03)),D(n,"rgba(200,235,255,0.85)",()=>n.roundRect(p*.08,d*.76,p*.07,d*.06,2),1.6),oi(n)},n=>{n.fillStyle="#283043",n.fillRect(0,0,p,d);const t=n.createRadialGradient(p*.5,d*.45,6,p*.5,d*.45,p*.75);t.addColorStop(0,"rgba(90,190,255,0.35)"),t.addColorStop(1,"rgba(90,190,255,0)"),n.fillStyle=t,n.fillRect(0,0,p,d);for(const e of[.03,.7]){D(n,"#1a1f2c",()=>n.rect(p*e,d*.12,p*.27,d*.76));for(let i=0;i<9;i+=1){const s=d*(.15+i*.08);n.fillStyle="#353c4f",n.fillRect(p*(e+.02),s,p*.23,d*.06),["#5cff8a","#5ad2ff",i%3?"#5cff8a":"#ff5f5f"].forEach((r,o)=>{n.fillStyle=r,n.beginPath(),n.arc(p*(e+.05+o*.04),s+d*.03,2.2,0,Math.PI*2),n.fill()})}}Ht(n,4,()=>{n.moveTo(p*.3,d*.2),n.quadraticCurveTo(p*.5,d*.32,p*.7,d*.22)},"#ffc93a"),n.fillStyle="#3a4256",n.fillRect(0,d*.88,p,d*.12),oi(n)},n=>{n.fillStyle="#f4ead8",n.fillRect(0,0,p,d),n.fillStyle="rgba(170,130,80,0.14)";for(let t=10;t<p;t+=20)n.fillRect(t,0,6,d*.5);D(n,"#8a5a3c",()=>n.rect(-4,d*.5,p+8,d));for(let t=6;t<p;t+=38)Ht(n,2,()=>n.rect(t,d*.54,30,d*.3),"#6b4128");D(n,"#6b4128",()=>n.rect(p*.02,d*.12,p*.26,d*.38));for(let t=0;t<3;t+=1)for(let e=0;e<4;e+=1)n.fillStyle=["#e8392f","#2f6fe0","#ffc93a","#2fbf6a"][(e+t)%4],n.fillRect(p*(.05+e*.055),d*(.15+t*.12),p*.04,d*.09);D(n,"#f2b53a",()=>n.rect(p*.62,d*.13,p*.24,d*.14)),D(n,"#ffffff",()=>n.rect(p*.65,d*.15,p*.18,d*.1),1.4),D(n,"#7a2531",()=>n.roundRect(p*.26,d*.36,p*.48,d*.5,22));for(let t=0;t<3;t+=1)D(n,"#5c1a24",()=>n.arc(p*(.38+t*.12),d*.46,3,0,Math.PI*2),1.2);D(n,"#4aa3ff",()=>n.arc(p*.88,d*.42,p*.08,0,Math.PI*2)),D(n,"#5cc46b",()=>n.ellipse(p*.86,d*.41,p*.04,p*.03,.4,0,Math.PI*2),1.2),Ht(n,3,()=>{n.moveTo(p*.88,d*.47),n.lineTo(p*.88,d*.6)}),Ai(n,d*.84,"#7a4a2c","#5c3620"),oi(n)},n=>{n.fillStyle="#e9f1e4",n.fillRect(0,0,p,d),D(n,"#f2b53a",()=>n.rect(p*.08,d*.12,p*.56,d*.2));const t=n.createLinearGradient(0,d*.13,0,d*.31);t.addColorStop(0,"#8fd4ff"),t.addColorStop(1,"#dff4ff"),D(n,t,()=>n.rect(p*.1,d*.135,p*.52,d*.17),0),D(n,"#5cc46b",()=>n.ellipse(p*.36,d*.33,p*.3,d*.08,0,Math.PI,Math.PI*2),0),Ht(n,2,()=>{n.moveTo(p*.42,d*.26),n.lineTo(p*.42,d*.19)}),D(n,"#e8392f",()=>{n.moveTo(p*.42,d*.19),n.lineTo(p*.48,d*.205),n.lineTo(p*.42,d*.22)},1.2),D(n,"#8a5638",()=>n.rect(p*.72,d*.3,p*.24,d*.025),2);for(let e=0;e<2;e+=1){const i=p*(.78+e*.11);D(n,"#ffc93a",()=>{n.moveTo(i-7,d*.22),n.lineTo(i+7,d*.22),n.lineTo(i+3,d*.27),n.lineTo(i-3,d*.27),n.closePath()},1.6),D(n,"#ffc93a",()=>n.rect(i-5,d*.27,10,d*.03),1.6)}n.fillStyle="#7d8a9c",n.fillRect(0,d*.86,p,d*.14),D(n,"#4cbf5e",()=>n.ellipse(p*.5,d*.94,p*.62,d*.08,0,0,Math.PI*2)),D(n,"#1d2a1d",()=>n.ellipse(p*.16,d*.93,p*.04,d*.012,0,0,Math.PI*2),0),Ht(n,2.4,()=>{n.moveTo(p*.16,d*.93),n.lineTo(p*.16,d*.78)}),D(n,"#ff3355",()=>{n.moveTo(p*.16,d*.78),n.lineTo(p*.26,d*.8),n.lineTo(p*.16,d*.82)},1.4),oi(n)},n=>{n.fillStyle="#3a4a66",n.fillRect(0,0,p,d),D(n,"#1f2633",()=>n.rect(p*.04,d*.12,p*.92,d*.36));for(let t=0;t<6;t+=1){const e=p*(.07+t%3*.3),i=d*(.145+Math.floor(t/3)*.165);D(n,"#7fb5c9",()=>n.rect(e,i,p*.26,d*.14),1.6),n.fillStyle="rgba(30,50,70,0.55)",n.beginPath(),n.arc(e+p*(.08+t%2*.1),i+d*.08,5,0,Math.PI*2),n.fill(),n.fillRect(e+p*(.05+t%2*.1),i+d*.1,p*.06,d*.04)}D(n,"#c9a46a",()=>n.rect(p*.7,d*.54,p*.24,d*.16));for(let t=0;t<4;t+=1)D(n,"#ffc93a",()=>n.arc(p*(.74+t*.055),d*.6,3,0,Math.PI*2),1.2);n.fillStyle="#5b6475",n.fillRect(0,d*.88,p,d*.12),oi(n)}],Vi="#ffffff";function $s(n,t,e,i,s){D(n,s,()=>{n.arc(t,e-i*.15,i*1.04,Math.PI*1.02,Math.PI*1.98),n.quadraticCurveTo(t+i*.3,e-i*.55,t-i*1,e-i*.35)})}function no(n,t,e,i){D(n,"#ffffff",()=>{n.moveTo(t-p*.08,e),n.lineTo(t,e+d*.04),n.lineTo(t+p*.08,e),n.closePath()},2),D(n,i,()=>{n.moveTo(t-p*.025,e+d*.035),n.lineTo(t+p*.025,e+d*.035),n.lineTo(t+p*.035,e+d*.2),n.lineTo(t,e+d*.23),n.lineTo(t-p*.035,e+d*.2),n.closePath()},2)}function qf(n,t,e,i,s=1){const r=p*.1*s,o=d*.065*s;D(n,i,()=>n.roundRect(t-r/2,e-o/2,r,o,3)),Ht(n,2.4,()=>n.arc(t+r/2,e,o*.3,-Math.PI/2,Math.PI/2))}function dS(n,t,e,i,s){D(n,"#ffffff",()=>n.rect(t-i/2,e-s,i,s));for(let r=1;r<7;r+=1)Ht(n,1.2,()=>{n.moveTo(t-i/2+2,e-s*r/7),n.lineTo(t+i/2-2,e-s*r/7)},"#b9c0cc")}const Md=p*.42,Ka=[Md+p*.16,d*.68],io=[p*.08,-d*.26],Yf=[p*.16,d*.1],Sd=p*.42,Ja=[Sd+p*.17,d*.68],so=[-p*.1,-d*.12],yd=p*.56,Qa=[yd+p*.17,d*.68],$f=[-p*.06,d*.13],ja=[p*.05,-d*.26],bd=p*.5,tl=[bd+p*.17,d*.68],el=[p*.07,-d*.27],wd=p*.64,nl=[wd-p*.17,d*.68],Zf=[-p*.13,-d*.2],Ed=p*.34,il=[Ed,d*.74],Td=p*.34,sl=[Td+p*.16,d*.68],Kf=[p*.01,d*.13],rl=[p*.05,-d*.27],Ad=p*.34,ol=[Ad+p*.17,d*.68],Jf=[-p*.02,-d*.17],Rd=p*.5,Cd=d*.84,al=[Rd+p*.07,Cd-d*.17],ro=[p*.13,-d*.12],Pd=p*.44,ll=[Pd+p*.17,d*.66],pS=[p*.03,d*.17],Qf=[p*.06,-d*.26],Ld=p*.4,cl=[Ld+p*.17,d*.68],hl=[p*.06,-d*.27],Id=p*.4,fl=[Id+p*.17,d*.68],jf=[-p*.02,-d*.17];function tu(n){D(n,"#f4f7fa",()=>n.rect(-4,d*.93,p+8,d*.1))}function mS(n,t){const e=d*.93,i=p*.21,s=d*.11;D(n,"#ffffff",()=>n.roundRect(t-i/2,e-s,i,s,4)),Ht(n,3.4,()=>n.arc(t+i/2,e-s*.5,s*.3,-Math.PI/2,Math.PI/2)),D(n,"#ffc93a",()=>{n.moveTo(t-i*.32,e-s*.22),n.lineTo(t-i*.32,e-s*.72),n.lineTo(t-i*.14,e-s*.5),n.lineTo(t,e-s*.84),n.lineTo(t+i*.14,e-s*.5),n.lineTo(t+i*.32,e-s*.72),n.lineTo(t+i*.32,e-s*.22),n.closePath()},1.8)}function gS(n,t){const e=d*.93,i=p*.1;D(n,"#3fae5a",()=>n.roundRect(t-i/2,e-d*.16,i,d*.13,i/2));for(const s of[-1,1])D(n,"#3fae5a",()=>n.roundRect(t+s*i*.95-i*.25,e-d*.13,i*.5,d*.06,i*.25),2);n.fillStyle="#ffffff";for(let s=0;s<7;s+=1)n.fillRect(t-i*.25+s%2*i*.5,e-d*(.145-s*.016),2,2);D(n,"#e06a3a",()=>{n.moveTo(t-i*.85,e-d*.04),n.lineTo(t+i*.85,e-d*.04),n.lineTo(t+i*.65,e),n.lineTo(t-i*.65,e),n.closePath()})}const _S={clerk:{room:0,body(n,t){const e=Md,i=d*.525,s=p*.15;He(n,e,d*.5),We(n,e,d*.61,p*.46,Vi),no(n,e,d*.61,"#2f6fe0"),Kt(n,e-p*.17,d*.68,e-p*.1,d*.8,Vi,ne),Ve(n,e,i,s,ne,t?"happy":"squint"),$s(n,e,i,s,"#6b4128"),Ai(n,d*.8),D(n,"#c7ccd6",()=>n.roundRect(p*.02,d*.66,p*.26,d*.14,4)),D(n,"#13b0a2",()=>n.roundRect(p*.11,d*.7,p*.08,p*.08,3),1.4),qf(n,p*.86,d*.77,"#ffc93a",.8)},arm(n,t){const[e,i]=Ka;Kt(n,e,i,e+io[0],i+io[1],Vi,ne,t)},rig:{dirty:{pivot:ie(...Ka),rest:Xe(io,Yf,-1),idle:{amp:.03,hz:.5},act:{amp:.1,hz:0,hop:0,reach:.16}},clean:{pivot:ie(...Ka),rest:Xe(io,Yf,-1),idle:{amp:.03,hz:.4},act:{amp:.42,hz:2.4,hop:0,reach:0}}}},coffee:{room:2,body(n,t){const e=Sd,i=d*.52,s=p*.145;He(n,e,d*.5);for(const[r,o,a]of[[-1,-.2,.42],[1,-.2,.42],[-.95,.35,.38],[.95,.35,.38],[-.6,-.85,.42],[.6,-.85,.42],[0,-1,.45]])D(n,"#e0612b",()=>n.arc(e+r*s,i+o*s,s*a,0,Math.PI*2));We(n,e,d*.61,p*.46,"#3fae6a"),D(n,"#ffffff",()=>n.arc(e,d*.615,p*.11,0,Math.PI),2),Ai(n,d*.82,"#ffffff","#d8dde6"),Kt(n,e-p*.17,d*.68,e-p*.12,d*.82,"#3fae6a",ne),Ve(n,e,i,s,ne,t?"happy":"sleepy");for(const[r,o]of[[-.5,-.75],[0,-.9],[.5,-.75]])D(n,"#e0612b",()=>n.arc(e+r*s,i+o*s,s*.3,0,Math.PI*2),2)},arm(n,t){const[e,i]=Ja,s=e+so[0],r=i+so[1];if(Kt(n,e,i,s,r,"#3fae6a",ne),qf(n,s-p*.02,r+d*.012,"#ff5f87",1.25),D(n,"#ffffff",()=>n.arc(s-p*.02,r+d*.01,4,0,Math.PI*2),1.2),t)for(let o=0;o<2;o+=1)Ht(n,2.2,()=>{n.moveTo(s-p*(.08-o*.05),r-d*.07),n.quadraticCurveTo(s-p*(.05-o*.05),r-d*.1,s-p*(.08-o*.05),r-d*.13)},"rgba(255,255,255,0.9)")},rig:{dirty:{pivot:ie(...Ja),rest:Xe(so,[-p*.1,d*.04],1),idle:{amp:0,hz:.16,sip:!0},act:nn},clean:{pivot:ie(...Ja),rest:Xe(so,[-p*.1,d*.04],1),idle:{amp:0,hz:.2,sip:!0},act:{amp:.22,hz:1.4,hop:0,reach:.06}}}},coder:{room:5,body(n,t){const e=yd,i=d*.53,s=p*.15,r="#1f7a8c";He(n,e,d*.5),D(n,r,()=>n.roundRect(e-s*1.2,i-s*1.15,s*2.4,s*2.2,s)),We(n,e,d*.61,p*.46,r);for(const o of[-1,1])Ht(n,2.4,()=>{n.moveTo(e+o*p*.05,d*.63),n.lineTo(e+o*p*.06,d*.72)},"#ffffff");Kt(n,e-p*.17,d*.68,e-p*.08,d*.8,r,t?ne:"#bfe2ff"),Ve(n,e,i,s,t?ne:"#bfe2ff",t?"happy":"focus"),$s(n,e,i,s,"#1d1d1d"),Ht(n,5,()=>n.arc(e,i-s*.05,s*1.12,Math.PI*1.1,Math.PI*1.9));for(const o of[-1,1])D(n,"#ff7a3d",()=>n.roundRect(e+o*s*1.05-s*.22,i-s*.2,s*.44,s*.6,s*.15));Ht(n,2.6,()=>{n.moveTo(e-s*1,i+s*.3),n.quadraticCurveTo(e-s*.8,i+s*.75,e-s*.3,i+s*.7)}),Ai(n,d*.8,"#e9edf3","#c3cad6"),D(n,"#2b2f38",()=>n.rect(e-p*.2,d*.79,p*.4,d*.015),1.4),gc(n,p*0,d*.6,p*.22,d*.13),D(n,"#5ad2ff",()=>n.rect(p*0,d*.6,p*.015,d*.13),0)},arm(n,t){const[e,i]=Qa;if(t){const s=e+ja[0],r=i+ja[1];Kt(n,e,i,s,r,"#1f7a8c",ne),Ht(n,p*.035+di*2,()=>{n.moveTo(s,r-d*.01),n.lineTo(s+p*.005,r-d*.055)}),Ht(n,p*.035,()=>{n.moveTo(s,r-d*.01),n.lineTo(s+p*.005,r-d*.055)},ne)}else Kt(n,e,i,e+$f[0],i+$f[1],"#1f7a8c","#bfe2ff")},rig:{dirty:{pivot:ie(...Qa),rest:0,idle:{amp:.03,hz:6},act:nn},clean:{pivot:ie(...Qa),rest:Xe(ja,[p*.12,d*.06],-1),idle:{amp:.02,hz:.5},act:{amp:.1,hz:3,hop:.02,reach:.08}}}},sleepy:{room:1,body(n,t){const e=bd,i=p*.145,s="#9fd8ff";if(He(n,e,d*.55),t){const r=d*.525;We(n,e,d*.61,p*.46,s),no(n,e,d*.61,"#e8392f"),Kt(n,e-p*.17,d*.68,e-p*.1,d*.8,s,ne),Ve(n,e,r,i,ne,"shock");for(let o=-2;o<=2;o+=1)D(n,"#c98a3a",()=>{n.moveTo(e+o*i*.36-i*.2,r-i*.75),n.lineTo(e+o*i*.42,r-i*(1.35-Math.abs(o)*.1)),n.lineTo(e+o*i*.36+i*.2,r-i*.75),n.closePath()},2);$s(n,e,r,i,"#c98a3a"),Ai(n,d*.8)}else{We(n,e,d*.69,p*.5,s),Ai(n,d*.8),Kt(n,e-p*.28,d*.78,e+p*.2,d*.79,s,ne),n.save(),n.translate(e-p*.02,d*.68),n.rotate(-.42),Ve(n,0,0,i,ne,"asleep"),$s(n,0,0,i,"#c98a3a"),n.restore(),D(n,"rgba(170,220,255,0.9)",()=>n.ellipse(e+p*.1,d*.77,p*.05,d*.01,0,0,Math.PI*2),1.2);for(let r=0;r<3;r+=1){const o=10+r*5,a=e+p*(.12+r*.1),l=d*(.52-r*.09);n.font=`800 ${o}px Rubik, system-ui, sans-serif`,n.lineWidth=3,n.strokeStyle=fn,n.strokeText("Z",a,l),n.fillStyle="#ffffff",n.fillText("Z",a,l)}}gc(n,p*.76,d*.6,p*.22,d*.13)},arm(n,t){if(!t)return;const[e,i]=tl;Kt(n,e,i,e+el[0],i+el[1],"#9fd8ff",ne,!0)},rig:{dirty:{pivot:ie(...tl),rest:0,idle:{amp:0,hz:0},act:nn},clean:{pivot:ie(...tl),rest:Xe(el,[p*.12,d*.1],-1),idle:{amp:.03,hz:.6},act:{amp:.5,hz:3.4,hop:.03,reach:0}}}},boss:{room:4,body(n,t){const e=wd,i=d*.52,s=p*.145;He(n,e,d*.5),D(n,"#2a1e1a",()=>n.roundRect(e-s*1.2,i-s*1.05,s*2.4,s*2,s*.9)),We(n,e,d*.61,p*.46,"#e8392f"),D(n,"#ffffff",()=>{n.moveTo(e-p*.08,d*.61),n.lineTo(e,d*.72),n.lineTo(e+p*.08,d*.61),n.closePath()},2),D(n,"#2b2f38",()=>n.roundRect(e+p*.04,d*.7,p*.16,d*.12,3)),D(n,"#5ad2ff",()=>n.rect(e+p*.06,d*.715,p*.12,d*.09),0),Kt(n,e+p*.17,d*.68,e+p*.16,d*.8,"#e8392f",ne),Ve(n,e,i,s,ne,t?"happy":"focus"),D(n,"#2a1e1a",()=>{n.arc(e,i-s*.2,s*1.03,Math.PI*1,Math.PI*2),n.lineTo(e+s*1.03,i-s*.1),n.quadraticCurveTo(e,i-s*.5,e-s*1.03,i-s*.1),n.closePath()}),Oo(n,e,i,s)},arm(n){const[t,e]=nl,i=t+Zf[0],s=e+Zf[1];Ht(n,4.4,()=>{n.moveTo(i,s),n.lineTo(i-p*.17,s-d*.13)},fn),Ht(n,2.4,()=>{n.moveTo(i,s),n.lineTo(i-p*.17,s-d*.13)},"#ffd23f"),Kt(n,t,e,i,s,"#e8392f",ne)},rig:{dirty:{pivot:ie(...nl),rest:0,idle:{amp:.07,hz:1.1},act:nn},clean:{pivot:ie(...nl),rest:0,idle:{amp:.04,hz:.6},act:{amp:.32,hz:2.2,hop:0,reach:0}}}},intern:{room:3,body(n,t){const e=Ed,i=d*.5,s=p*.14;He(n,e,d*.5),We(n,e,d*.59,p*.44,"#7fc8ff"),Ht(n,2.6,()=>{n.moveTo(e-p*.08,d*.6),n.lineTo(e,d*.7),n.lineTo(e+p*.08,d*.6)},"#13b0a2"),Ve(n,e,i,s,ne,t?"happy":"shock");for(let r=-2;r<=2;r+=1)D(n,"#ff8a3d",()=>{n.moveTo(e+r*s*.4-s*.24,i-s*.7),n.lineTo(e+r*s*.5+s*.1,i-s*(1.4-Math.abs(r)*.12)),n.lineTo(e+r*s*.4+s*.24,i-s*.7),n.closePath()},2);$s(n,e,i,s,"#ff8a3d"),n.fillStyle="#d9895a";for(const[r,o]of[[-.5,.2],[-.36,.3],[.42,.22],[.54,.32]])n.beginPath(),n.arc(e+r*s,i+o*s,1.6,0,Math.PI*2),n.fill()},arm(n,t){const[e,i]=il;dS(n,e+p*.02,d*.9,p*.34,d*.24),t&&(n.save(),n.translate(e+p*.04,d*.655),n.rotate(.25),D(n,"#ffffff",()=>n.rect(-p*.14,-d*.012,p*.28,d*.024),1.6),n.restore());for(const s of[-1,1])Kt(n,e+s*p*.17,i-d*.06,e+s*p*.17,d*.84,"#7fc8ff",ne);D(n,"#ffffff",()=>n.roundRect(e-p*.05,d*.69,p*.1,d*.06,2),1.6),D(n,"#13b0a2",()=>n.rect(e-p*.03,d*.7,p*.06,d*.012),0)},rig:{dirty:{pivot:ie(...il),rest:0,idle:{amp:.02,hz:.7},act:nn},clean:{pivot:ie(...il),rest:0,idle:{amp:.025,hz:.8},act:{amp:.07,hz:3.2,hop:.04,reach:0}}}},accountant:{room:1,body(n,t){const e=Td,i=d*.525,s=p*.15;He(n,e,d*.5),We(n,e,d*.61,p*.46,Vi),D(n,"#8a6a4a",()=>{n.moveTo(e-p*.23,d*.66),n.lineTo(e-p*.04,d*.66),n.lineTo(e,d*.8),n.lineTo(e+p*.04,d*.66),n.lineTo(e+p*.23,d*.66),n.lineTo(e+p*.23,d),n.lineTo(e-p*.23,d),n.closePath()});for(const r of[-1,1])D(n,"#e8392f",()=>{n.moveTo(e,d*.635),n.lineTo(e+r*p*.07,d*.61),n.lineTo(e+r*p*.07,d*.66),n.closePath()},2);Kt(n,e-p*.17,d*.68,e-p*.1,d*.8,Vi,"#f2c3a0"),Ve(n,e,i,s,"#f2c3a0",t?"happy":"focus");for(const r of[-1,1])D(n,"#e6e6ef",()=>n.ellipse(e+r*s*.95,i-s*.2,s*.24,s*.34,0,0,Math.PI*2),2);Oo(n,e,i,s),D(n,"#9a9aa6",()=>n.ellipse(e,i+s*.36,s*.46,s*.14,0,0,Math.PI*2),2),Ai(n,d*.8),D(n,"#efe6cf",()=>n.roundRect(e+p*.06,d*.765,p*.24,d*.05,3));for(let r=0;r<4;r+=1)D(n,"#5b6475",()=>n.rect(e+p*(.08+r*.055),d*.78,p*.035,d*.018),0);D(n,"#ffffff",()=>n.rect(e+p*.27,d*.82,p*.07,d*.12),1.4)},arm(n,t){const[e,i]=sl;if(t){const s=e+rl[0],r=i+rl[1];D(n,"#ffffff",()=>{n.moveTo(s-5,r),n.quadraticCurveTo(s+p*.12,r+d*.1,s+p*.05,r+d*.2),n.lineTo(s+p*.1,r+d*.2),n.quadraticCurveTo(s+p*.17,r+d*.1,s+5,r),n.closePath()},1.6),Kt(n,e,i,s,r,Vi,"#f2c3a0")}else Kt(n,e,i,e+Kf[0],i+Kf[1],Vi,"#f2c3a0")},rig:{dirty:{pivot:ie(...sl),rest:0,idle:{amp:.035,hz:4.5},act:nn},clean:{pivot:ie(...sl),rest:Xe(rl,[p*.1,d*.08],-1),idle:{amp:.02,hz:.4},act:{amp:.3,hz:2,hop:0,reach:0}}}},sales:{room:0,body(n,t){const e=Ad,i=d*.525,s=p*.15,r="#2a3f6e";He(n,e,d*.5),We(n,e,d*.61,p*.46,r),no(n,e,d*.61,"#e8392f"),Kt(n,e-p*.17,d*.68,e-p*.1,d*.8,r,ne),Ve(n,e,i,s,ne,t?"happy":"annoyed"),D(n,"#1d1d28",()=>{n.arc(e,i-s*.18,s*1.04,Math.PI*1,Math.PI*2),n.quadraticCurveTo(e-s*.2,i-s*.62,e-s*1.04,i-s*.18)}),Ht(n,2.4,()=>n.arc(e+s*.2,i-s*.6,s*.5,Math.PI*1.2,Math.PI*1.6),"rgba(255,255,255,0.7)"),Ai(n,d*.8,"#f3f5f8","#c3cad6"),D(n,"#ffc93a",()=>{n.moveTo(p*.74,d*.68),n.lineTo(p*.88,d*.68),n.lineTo(p*.84,d*.75),n.lineTo(p*.78,d*.75),n.closePath()},1.8),D(n,"#ffc93a",()=>n.rect(p*.76,d*.75,p*.1,d*.05),1.8)},arm(n){const[t,e]=ol,i=t+Jf[0],s=e+Jf[1];Kt(n,t,e,i,s,"#2a3f6e",ne),D(n,"#2b2f38",()=>n.roundRect(i-p*.035,s-d*.07,p*.07,d*.1,4)),D(n,"#5ad2ff",()=>n.rect(i-p*.02,s-d*.06,p*.04,d*.07),0)},rig:{dirty:{pivot:ie(...ol),rest:0,idle:{amp:.03,hz:.7},act:nn},clean:{pivot:ie(...ol),rest:0,idle:{amp:.03,hz:.5},act:{amp:.3,hz:2.6,hop:.02,reach:0}}}},dog:{room:6,body(n,t){const e=Rd,i=Cd,s="#f5953a";He(n,e,i-d*.22),D(n,s,()=>n.ellipse(e,i-d*.1,p*.2,d*.12,0,0,Math.PI*2)),D(n,"#fff4e4",()=>n.ellipse(e,i-d*.09,p*.1,d*.09,0,0,Math.PI*2),2),D(n,s,()=>n.ellipse(e-p*.1,i-d*.01,p*.06,d*.022,0,0,Math.PI*2),2);const r=i-d*.27,o=p*.14;for(const a of[-1,1])D(n,s,()=>{n.moveTo(e+a*o*.9,r-o*.2),n.lineTo(e+a*o*1,r-o*1.55),n.lineTo(e+a*o*.15,r-o*.8),n.closePath()}),D(n,"#ffb8c2",()=>{n.moveTo(e+a*o*.82,r-o*.45),n.lineTo(e+a*o*.9,r-o*1.2),n.lineTo(e+a*o*.35,r-o*.8),n.closePath()},0);D(n,s,()=>n.arc(e,r,o,0,Math.PI*2)),D(n,"#fff4e4",()=>n.ellipse(e,r+o*.42,o*.62,o*.45,0,0,Math.PI*2),2),D(n,"#fff4e4",()=>n.ellipse(e,r-o*.35,o*.14,o*.42,0,0,Math.PI*2),0);for(const a of[-1,1]){const l=e+a*o*.4,c=r-o*.05;t?Ht(n,3,()=>n.arc(l,c+o*.1,o*.17,Math.PI*1.15,Math.PI*1.85)):(D(n,"#ffffff",()=>n.ellipse(l,c,o*.18,o*.22,0,0,Math.PI*2),2),n.fillStyle=fn,n.beginPath(),n.arc(l,c+o*.02,o*.11,0,Math.PI*2),n.fill())}D(n,fn,()=>n.ellipse(e,r+o*.25,o*.16,o*.11,0,0,Math.PI*2),0),t&&D(n,"#ff6b8a",()=>n.roundRect(e-o*.12,r+o*.5,o*.24,o*.4,o*.12),1.6),D(n,"#2f6fe0",()=>n.roundRect(e-o*.75,r+o*.85,o*1.5,o*.22,o*.1),1.6),D(n,"#ffc93a",()=>n.arc(e,r+o*1.15,o*.14,0,Math.PI*2),1.4)},arm(n){const[t,e]=al,i=t+ro[0],s=e+ro[1],r="#f5953a";Ht(n,p*.075+di*2,()=>{n.moveTo(t,e),n.lineTo(i,s)}),Ht(n,p*.075,()=>{n.moveTo(t,e),n.lineTo(i,s)},r),D(n,"#fff4e4",()=>n.ellipse(i,s,p*.06,d*.045,0,0,Math.PI*2)),D(n,"#ffb8c2",()=>n.arc(i,s+d*.006,p*.024,0,Math.PI*2),1.4);for(let o=-1;o<=1;o+=1)D(n,"#ffb8c2",()=>n.arc(i+o*p*.022,s-d*.026,p*.011,0,Math.PI*2),1)},rig:{dirty:{pivot:ie(...al),rest:Xe(ro,[p*.02,d*.15],-1),idle:{amp:.02,hz:.5},act:{amp:.12,hz:0,hop:0,reach:.16}},clean:{pivot:ie(...al),rest:Xe(ro,[p*.02,d*.15],-1),idle:{amp:.02,hz:.5},act:{amp:.4,hz:2.4,hop:.03,reach:0}}}},golfer:{room:7,body(n,t){const e=Pd,i=d*.505,s=p*.145;He(n,e,d*.5),We(n,e,d*.59,p*.46,"#ff8fb0"),D(n,"#ffffff",()=>{n.moveTo(e-p*.09,d*.59),n.lineTo(e,d*.65),n.lineTo(e+p*.09,d*.59),n.closePath()},2),Kt(n,e-p*.17,d*.66,e-p*.13,d*.82,"#ff8fb0","#f2c3a0"),Ve(n,e,i,s,"#f2c3a0",t?"happy":"focus");for(const r of[-1,1])D(n,"#e6e6ef",()=>n.ellipse(e+r*s*.95,i-s*.15,s*.24,s*.34,0,0,Math.PI*2),2);D(n,"#e6e6ef",()=>n.ellipse(e,i+s*.36,s*.5,s*.15,0,0,Math.PI*2),2),D(n,"#ffffff",()=>n.arc(e,i-s*.4,s*1.02,Math.PI*1.05,Math.PI*1.95)),D(n,"#ffffff",()=>n.roundRect(e-s*.1,i-s*.74,s*1.45,s*.2,s*.1)),D(n,"#e8392f",()=>n.arc(e,i-s*1.4,s*.12,0,Math.PI*2),1.6),D(n,"#ffffff",()=>n.arc(p*.42,d*.965,4,0,Math.PI*2),1.4)},arm(n,t){const[e,i]=ll,s=t?Qf:pS,r=e+s[0],o=i+s[1],a=t?r+p*.02:r-p*.1,l=t?o-d*.2:o+d*.14;Ht(n,4.6,()=>{n.moveTo(r,o),n.lineTo(a,l)},fn),Ht(n,2.6,()=>{n.moveTo(r,o),n.lineTo(a,l)},"#d9e1ea"),D(n,"#5b6475",()=>n.roundRect(a-p*.06,l-d*.012,p*.08,d*.024,3),1.8),Kt(n,e,i,r,o,"#ff8fb0","#f2c3a0")},rig:{dirty:{pivot:ie(...ll),rest:0,idle:{amp:.14,hz:.6},act:nn},clean:{pivot:ie(...ll),rest:Xe(Qf,[p*.1,d*.12],-1),idle:{amp:.03,hz:.5},act:{amp:.3,hz:2,hop:.03,reach:0}}}},director:{room:6,body(n,t){const e=Ld,i=d*.52,s=p*.15,r="#6a3fb5";He(n,e,d*.5),We(n,e,d*.61,p*.48,r),no(n,e,d*.61,"#ffc93a"),Kt(n,e-p*.17,d*.68,e-p*.1,d*.82,r,ne),Ve(n,e,i,s,ne,t?"happy":"sleepy"),D(n,"#e0612b",()=>{n.arc(e,i+s*.25,s*.95,Math.PI*.05,Math.PI*.95),n.quadraticCurveTo(e,i+s*.75,e+s*.95,i+s*.32)}),D(n,"#e0612b",()=>n.arc(e,i-s*.2,s*1.03,Math.PI*1.08,Math.PI*1.92)),Ht(n,2.4,()=>{for(const o of[-1,1])n.arc(e+o*s*.36,i-s*.08,s*.29,0,Math.PI*2)},"#d9a400"),tu(n),mS(n,p*.35)},arm(n,t){const[e,i]=cl;if(!t){Kt(n,e,i,e+p*.02,i+d*.13,"#6a3fb5",ne);return}const s=e+hl[0],r=i+hl[1];for(let o=-2;o<=2;o+=1)n.save(),n.translate(s,r),n.rotate(o*.28),D(n,"#7ccf6a",()=>n.rect(-p*.035,-d*.12,p*.07,d*.11),1.6),D(n,"#4f9e43",()=>n.arc(0,-d*.065,p*.017,0,Math.PI*2),0),n.restore();Kt(n,e,i,s,r,"#6a3fb5",ne)},rig:{dirty:{pivot:ie(...cl),rest:0,idle:{amp:.02,hz:.4},act:nn},clean:{pivot:ie(...cl),rest:Xe(hl,[p*.12,d*.08],-1),idle:{amp:.03,hz:.5},act:{amp:.32,hz:2.2,hop:.03,reach:.08}}}},guard:{room:8,body(n,t){const e=Id,i=d*.525,s=p*.15,r="#2c3e66";He(n,e,d*.5),We(n,e,d*.61,p*.5,r),D(n,"#ffc93a",()=>{const o=e-p*.12,a=d*.7;for(let l=0;l<10;l+=1){const c=-Math.PI/2+l*Math.PI/5,h=l%2?p*.018:p*.042;l===0?n.moveTo(o+Math.cos(c)*h,a+Math.sin(c)*h):n.lineTo(o+Math.cos(c)*h,a+Math.sin(c)*h)}n.closePath()},1.4),Kt(n,e-p*.18,d*.68,e-p*.11,d*.82,r,ne),Ve(n,e,i,s,ne,t?"angry":"asleep"),D(n,"#3a2a20",()=>n.ellipse(e,i+s*.34,s*.5,s*.15,0,0,Math.PI*2),2),D(n,r,()=>n.roundRect(e-s*1.1,i-s*1.25,s*2.2,s*.7,s*.3)),D(n,"#1d2a44",()=>n.roundRect(e-s*.95,i-s*.62,s*1.9,s*.2,s*.1)),D(n,"#ffc93a",()=>n.arc(e,i-s*.9,s*.14,0,Math.PI*2),1.4),tu(n),gS(n,p*.35)},arm(n,t){const[e,i]=fl;if(!t){Kt(n,e,i,e+p*.02,i+d*.13,"#2c3e66",ne);return}const s=e+jf[0],r=i+jf[1];Kt(n,e,i,s,r,"#2c3e66",ne),D(n,"#2b2f38",()=>n.roundRect(s-p*.04,r-d*.08,p*.08,d*.1,3)),Ht(n,3,()=>{n.moveTo(s+p*.025,r-d*.08),n.lineTo(s+p*.025,r-d*.13)}),D(n,"#ff5f5f",()=>n.arc(s,r-d*.05,2.6,0,Math.PI*2),0)},rig:{dirty:{pivot:ie(...fl),rest:0,idle:{amp:.01,hz:.3},act:nn},clean:{pivot:ie(...fl),rest:0,idle:{amp:.03,hz:.6},act:{amp:.14,hz:4.5,hop:.02,reach:.06}}}}},eu=.9;class vS{constructor(t,e,i,s){this.game=t,this.speech=e,this.radio=i,this.anchor=s,t.events.on("phase",({phase:r})=>{r==="wash"&&this.arrive(),r==="drained"&&this.speech.clear(),r==="roof"&&this.once(this.game.building.roofLine)}),t.events.on("paneClean",({pane:r})=>{this.speech.hide(Zs(r),!0);const o=r.window?.thanks;o&&r.washed===1&&this.speech.say(Zs(r),Ae(o),this.anchor(r),3.4)}),t.events.on("tool",()=>this.once("foremanFoam")),t.events.on("bought",({id:r,level:o})=>{if(o!==1)return;const a={bucket:"foremanBucket",squeegee:"foremanSqueegee",lift:"foremanLift",soap:"foremanSoap",robot:"foremanRobot"};this.once(a[r])})}game;speech;radio;anchor;askIn=eu;said=new Set;arrive(){this.askIn=eu;const t=this.game.floorDef(this.game.floor).foreman;t&&this.once(t)}update(t){this.askIn>=0&&(this.askIn-=t,this.askIn<0&&this.ask());for(const e of this.game.panes(this.game.floor))e.window?.ask&&!this.game.isAsking(e)&&!e.clean&&this.speech.hide(Zs(e))}ask(){if(this.game.canWash)for(const t of this.game.panes(this.game.floor)){const e=t.window?.ask;e&&this.game.isAsking(t)&&this.speech.say(Zs(t),Ae(e),this.anchor(t),1/0);const i=t.window?.closed;i&&t.washed===0&&!t.clean&&this.speech.say(Zs(t),Ae("blindsAsk"),this.anchor(t),1/0,`hint ${i}`)}}once(t){this.said.has(t)||(this.said.add(t),this.radio.say(Ae(t)))}}function Zs(n){return`${n.floor}:${n.column}`}const ul="sky-wash.save",pr=1,xS=5e3;class MS{constructor(t,e){this.platform=t,this.enabled=e}platform;enabled;pending=null;timer=null;async load(){if(!this.enabled)return console.info("[save] выключено словом режима — игра без записи"),null;const t=await this.platform.load(ul);if(!t)return console.info("[save] сохранения нет — новая игра"),null;try{const e=JSON.parse(t);if(e.version!==pr)return console.info(`[save] версия ${String(e.version)} ≠ ${pr} — новая игра`),null;const i=yS(e);return console.info(`[save] загружено: здание ${i.building+1}, этаж ${i.floor+1}, монет ${i.coins}`),i}catch(e){return console.warn("[save] не разобрать — новая игра",e),null}}async clear(){await this.platform.save(ul,""),console.info("[save] стёрто словом newgame")}schedule(t){this.enabled&&(this.pending=t,this.timer===null&&(this.timer=window.setTimeout(()=>{this.timer=null,this.flush()},xS)))}async flush(){if(!this.pending)return;const t=JSON.stringify(this.pending);this.pending=null,await this.platform.save(ul,t)}}function SS(){return{version:pr,coins:0,building:0,floor:0,levels:{bucket:0,squeegee:0,lift:0,soap:0,robot:0},runs:1,windows:0,said:[],foam:!1}}function yS(n){const t=SS(),e=Ms(n.building,0,As.length-1,t.building),i={...t.levels};for(const s of Object.keys(i))i[s]=Ms(n.levels?.[s],0,go[s].values.length-1,0);return{version:pr,coins:Ms(n.coins,0,1e9,0),building:e,floor:Ms(n.floor,0,As[e].floors.length,0),levels:i,runs:Ms(n.runs,1,1e6,1),windows:Ms(n.windows,0,1e7,0),said:Array.isArray(n.said)?n.said.filter(s=>typeof s=="string"):[],foam:n.foam===!0}}function Ms(n,t,e,i){return typeof n!="number"||!Number.isFinite(n)?i:Math.max(t,Math.min(e,Math.floor(n)))}function bS(n,t){return{version:pr,coins:n.coins,building:n.buildingIndex,floor:n.floor,levels:{...n.levels},runs:n.run.number,windows:n.panesCleaned,said:[...t],foam:n.foam}}function wS(n,t){n.startBuilding(t.building),t.floor>=n.floorCount&&n.hasNextBuilding?n.startBuilding(t.building+1):t.floor>=n.floorCount?n.standOnRoof():n.startAt(t.floor),n.coins=t.coins,Object.assign(n.levels,t.levels),n.water=n.capacity,n.run.number=Math.max(n.run.number,t.runs),n.panesCleaned=t.windows,n.foam=t.foam}const ES=`
<svg viewBox="0 0 64 120" aria-hidden="true">
  <defs>
    <linearGradient id="spire-glass" x1="0" x2="1">
      <stop offset="0" stop-color="#2a63b8"/>
      <stop offset="0.45" stop-color="#9fd8ff"/>
      <stop offset="1" stop-color="#1f4f99"/>
    </linearGradient>
    <radialGradient id="spire-glow">
      <stop offset="0" stop-color="#ffe58a" stop-opacity="1"/>
      <stop offset="1" stop-color="#ffb43c" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle class="glow" cx="32" cy="27" r="20" fill="url(#spire-glow)"/>
  <rect x="31" y="1" width="2" height="12" fill="#cfe0f2"/>
  <circle class="beacon" cx="32" cy="2.5" r="2.6" fill="#ff4b4b"/>
  <polygon points="24,22 32,10 40,22" fill="url(#spire-glass)" stroke="#0f2342" stroke-width="1.6" stroke-linejoin="round"/>
  <rect x="22" y="21" width="20" height="11" fill="#ffd96a" stroke="#0f2342" stroke-width="1.6"/>
  <rect x="19" y="32" width="26" height="30" fill="url(#spire-glass)" stroke="#0f2342" stroke-width="1.6"/>
  <rect x="14" y="62" width="36" height="58" fill="url(#spire-glass)" stroke="#0f2342" stroke-width="1.6"/>
  <g fill="#e8f6ff" opacity="0.85">
    <rect x="22" y="36" width="4" height="4"/><rect x="30" y="36" width="4" height="4"/><rect x="38" y="36" width="4" height="4"/>
    <rect x="22" y="45" width="4" height="4"/><rect x="30" y="45" width="4" height="4"/><rect x="38" y="45" width="4" height="4"/>
    <rect x="22" y="54" width="4" height="4"/><rect x="38" y="54" width="4" height="4"/>
    <rect x="18" y="67" width="5" height="4"/><rect x="27" y="67" width="5" height="4"/><rect x="36" y="67" width="5" height="4"/><rect x="44" y="67" width="3" height="4"/>
    <rect x="18" y="76" width="5" height="4"/><rect x="36" y="76" width="5" height="4"/>
  </g>
  <g fill="#ffffff">
    <ellipse cx="12" cy="98" rx="16" ry="9"/>
    <ellipse cx="32" cy="104" rx="22" ry="11"/>
    <ellipse cx="54" cy="96" rx="14" ry="8"/>
    <ellipse cx="22" cy="90" rx="12" ry="7"/>
  </g>
</svg>`;class TS{marker;label;track;shownFloor=Number.NaN;floors=0;constructor(t,e){const i=document.createElement("div");i.id="goal";const s=document.createElement("div");s.className="spire",s.innerHTML=ES;const r=document.createElement("div");r.className="rail";const o=document.createElement("div");o.className="roof",this.track=document.createElement("div"),this.track.className="track",this.marker=document.createElement("div"),this.marker.className="marker",this.label=document.createElement("span"),this.marker.appendChild(this.label),r.append(o,this.track),i.append(s,r),t.appendChild(i),this.setFloors(e)}setFloors(t){this.floors=t,this.shownFloor=Number.NaN;const e=Array.from({length:t},(i,s)=>{const r=document.createElement("i");return r.style.bottom=`${(s+.5)/(t+.5)*100}%`,r});this.track.replaceChildren(...e,this.marker)}update(t,e){const i=Math.max(0,Math.min(1,(t+.5)/(this.floors+.5)));this.marker.style.bottom=`${i*100}%`;const s=Math.min(e+1,this.floors);s!==this.shownFloor&&(this.shownFloor=s,this.label.textContent=`${s}/${this.floors}`)}}class AS{constructor(t,e){this.host=t,this.onArrive=e,this.counter=oo("coins"),this.value=oo("coins-value"),this.fx=oo("fx"),this.water=oo("water")}host;onArrive;shown=0;counter;value;fx;water;flights=[];waterShown=1;waterTarget=1;waterLow=!1;setWater(t,e){this.waterTarget=Math.max(0,Math.min(1,t)),e!==this.waterLow&&(this.waterLow=e,this.water.classList.toggle("low",e))}setCoins(t){this.shown=t,this.value.textContent=String(t)}spend(t){this.shown=Math.max(0,this.shown-t),this.value.textContent=String(this.shown),this.bump()}banner(t){const e=document.createElement("div");e.className="banner",e.textContent=t,e.addEventListener("animationend",()=>e.remove()),this.fx.appendChild(e)}fly(t,e,i){const s=this.unit(),r=Math.min(i,15);for(let o=0;o<r;o+=1){const a=Math.floor(i/r)+(o<i%r?1:0),l=document.createElement("div");l.className="coin",l.style.transform=`translate(${t}px, ${e}px) scale(0)`,this.fx.appendChild(l);const c=(Math.random()-.5)*220*s;this.flights.push({element:l,t:-o*.07,duration:.55+Math.random()*.12,from:[t+(Math.random()-.5)*30*s,e+(Math.random()-.5)*30*s],via:[t+c,e-(120+Math.random()*120)*s],index:o,value:a})}}bubbles(t,e,i){const s=this.unit();for(let r=0;r<i;r+=1){const o=document.createElement("div");o.className="soap-bubble";const a=(22+Math.random()*34)*s;o.style.width=`${a}px`,o.style.height=`${a}px`,o.style.left=`${t+(Math.random()-.5)*260*s}px`,o.style.top=`${e+(Math.random()-.5)*40*s}px`,o.style.setProperty("--rise",`${-(320+Math.random()*420)*s}px`),o.style.setProperty("--sway",`${(Math.random()-.5)*120*s}px`),o.style.animationDelay=`${r*.035}s`,o.style.animationDuration=`${1.5+Math.random()*.9}s`,o.addEventListener("animationend",()=>o.remove()),this.fx.appendChild(o)}}sparkle(t,e,i,s){for(let r=0;r<6;r+=1){const o=document.createElement("div");o.className="spark",o.textContent="✦",o.style.left=`${t+Math.random()*i}px`,o.style.top=`${e+Math.random()*s}px`,o.style.animationDelay=`${r*.05}s`,o.addEventListener("animationend",()=>o.remove()),this.fx.appendChild(o)}}update(t){if(this.updateWater(t),!this.flights.length)return;const e=this.target(),s=22*this.unit();this.flights=this.flights.filter(r=>{if(r.t+=t,r.t<0)return!0;const o=Math.min(1,r.t/r.duration),a=o*o*(3-2*o),l=1-a,c=l*l*r.from[0]+2*l*a*r.via[0]+a*a*e[0],h=l*l*r.from[1]+2*l*a*r.via[1]+a*a*e[1],u=o<.15?o/.15:1-.35*a;return r.element.style.transform=`translate(${c-s}px, ${h-s}px) scale(${u})`,o<1?!0:(r.element.remove(),this.shown+=r.value,this.value.textContent=String(this.shown),this.bump(),this.onArrive(r.index),!1)})}updateWater(t){const e=this.waterTarget-this.waterShown;Math.abs(e)<.001||(this.waterShown=e<0?this.waterTarget:Math.min(this.waterTarget,this.waterShown+t*1.25),this.water.style.setProperty("--level",this.waterShown.toFixed(3)))}bump(){this.counter.classList.remove("bump"),this.counter.offsetWidth,this.counter.classList.add("bump")}target(){const e=(this.counter.querySelector(".coin")??this.counter).getBoundingClientRect(),i=this.host.getBoundingClientRect();return[e.left-i.left+e.width/2,e.top-i.top+e.height/2]}unit(){return Number.parseFloat(this.host.dataset.scale??"1")||1}}function oo(n){const t=document.getElementById(n);if(!t)throw new Error(`нет #${n} в index.html`);return t}const RS=[{id:"bucket",label:"upBucket"},{id:"squeegee",label:"upSqueegee"},{id:"lift",label:"upLift"},{id:"soap",label:"upSoap"},{id:"robot",label:"upRobot"}];class CS{root;shop=null;constructor(t){this.root=document.createElement("div"),this.root.id="panel",t.appendChild(this.root)}get open(){return this.root.classList.contains("open")}summary(t,e){const i=t.run,s=Te("div","card");s.append(Te("div","title",Ae("bucketEmpty")));const r=Te("div","stats");r.append(Te("span","",Ae("runWindows",{n:i.windows})),Te("span","dot","·")),r.append(dl(Ae("runCoins",{n:i.coins}))),s.append(r);const o=t.floor>i.fromFloor,a=Te("div",o?"record new":"record");a.textContent=Ae(o?"recordNew":"record",{n:t.best+1}),s.append(a),this.shop=Te("div","shop"),s.append(this.shop),this.refresh(t,e);const l=Te("button","go",Ae("goUp"));l.dataset.action="go",l.addEventListener("click",()=>e.go(),{once:!0}),s.append(l),this.root.replaceChildren(s),this.root.classList.add("open")}roof(t,e,i){const s=Te("div","card roof");s.append(Te("div","title",Ae(t.building.id==="house"?"houseDone":"officeDone")));const r=Te("div","stats");if(r.append(Te("span","",Ae("buildingPay")),dl(`+${t.building.bonus}`)),s.append(r),t.hasNextBuilding){const o=Te("button","go",Ae("toOffice"));o.dataset.action="next",o.addEventListener("click",()=>e(),{once:!0}),s.append(o)}else{s.classList.add("letter");const o=Te("div","paper");o.append(Te("div","envelope"),Te("div","head",Ae("letterTitle")),Te("p","body",Ae("letterBody")),Te("p","ps",Ae("letterPs")),Te("div","sign",Ae("letterSign"))),s.append(o),s.append(Te("div","record",Ae("toBeContinued"))),i?.()}this.root.replaceChildren(s),this.root.classList.add("open")}refresh(t,e){if(!this.shop)return;const i=RS.filter(({id:s})=>t.available(s)).map(({id:s,label:r})=>{const o=t.price(s),a=o!==null&&t.coins>=o,l=Te("button",`item ${s}${a?" can":""}`);return l.dataset.buy=s,l.disabled=!a,l.append(Te("span","icon"),Te("span","name",Ae(r))),l.append(o===null?Te("span","price",Ae("maxed")):dl(String(o),"price")),l.addEventListener("click",()=>e.buy(s)),l});this.shop.replaceChildren(...i)}hide(){this.root.classList.remove("open"),this.shop=null}}function dl(n,t="money"){const e=Te("span",t);return e.append(Te("span","coin"),Te("span","",n)),e}function Te(n,t,e){const i=document.createElement(n);return t&&(i.className=t),e!==void 0&&(i.textContent=e),i}class PS{constructor(t,e=()=>0){this.layer=t,this.reserveRight=e}layer;reserveRight;bubbles=new Map;say(t,e,i,s=3.2,r=""){if(this.hide(t,!0),!i())return;const o=document.createElement("div");o.className=r?`bubble ${r}`:"bubble";const a=document.createElement("div");a.className="say",a.textContent=e,o.appendChild(a),this.layer.appendChild(o);const l={element:o,say:a,anchor:i,left:s};this.bubbles.set(t,l),this.place(l)}has(t){return this.bubbles.has(t)}hide(t,e=!1){const i=this.bubbles.get(t);if(i){if(this.bubbles.delete(t),e){i.element.remove();return}i.element.classList.add("gone"),i.element.addEventListener("animationend",()=>i.element.remove(),{once:!0})}}clear(){for(const t of[...this.bubbles.keys()])this.hide(t)}update(t){for(const[e,i]of this.bubbles)i.left-=t,(i.left<=0||!this.place(i))&&this.hide(e)}place(t){const e=t.anchor();if(!e)return!1;const i=t.say.offsetWidth/2,s=8,r=this.layer.clientWidth-this.reserveRight(),o=Math.min(Math.max(e[0],i+s),r-i-s);t.element.style.transform=`translate(${o}px, ${e[1]}px)`;const a=Math.max(-i+16,Math.min(i-16,e[0]-o));return t.element.style.setProperty("--tail",`${a}px`),!0}}class LS{constructor(t,e,i){this.onShow=i,this.element=document.createElement("div"),this.element.id="radio";const s=document.createElement("div");s.className="face";const r=document.createElement("div");r.className="body";const o=document.createElement("div");o.className="who",o.textContent=e,this.text=document.createElement("div"),this.text.className="text",r.append(o,this.text),this.element.append(s,r),t.appendChild(this.element)}onShow;element;text;queue=[];left=0;get busy(){return this.left>0||this.queue.length>0}say(t){this.queue.push(t),this.left<=0&&this.next()}update(t){this.left<=0||(this.left-=t,!(this.left>0)&&(this.element.classList.remove("open"),this.queue.length&&window.setTimeout(()=>this.next(),350)))}next(){const t=this.queue.shift();t!==void 0&&(this.text.textContent=t,this.element.classList.add("open"),this.left=Math.max(3,1.2+t.length/14),this.onShow())}}async function Ss(n){const t=document.getElementById("boot"),e=t?.querySelector(".bar"),i=t?.querySelector(".fill");if(t&&e&&i&&t.classList.contains("fake")){const s=i.getBoundingClientRect().width/Math.max(1,e.getBoundingClientRect().width);t.style.setProperty("--p",`${(s*100).toFixed(1)}%`),t.classList.remove("fake"),i.offsetWidth}t?.style.setProperty("--p",`${Math.round(n*100)}%`),await new Promise(s=>requestAnimationFrame(()=>requestAnimationFrame(()=>s())))}async function IS(){const n=document.getElementById("game");if(!n)throw new Error("нет #game в index.html");await Ss(.6);const t=await J1(Se.lang);$1(t.locale),t.loadingStart();const e=new MS(t,lf);if(Se.newgame&&lf){await e.clear();const W=new URLSearchParams(location.search);W.delete("newgame"),history.replaceState(null,"",`${location.pathname}${W.size?`?${W}`:""}`)}const i=await e.load(),s=new q1(1);i&&wS(s,i),Se.building!==null&&s.startBuilding(Se.building-1),Se.floor!==null&&s.startAt(Se.floor-1),Se.rich&&(s.coins+=5e3),Se.drain&&(s.waterCost=10),s.pigeons.everywhere=Se.pigeons,Se.foam&&(s.foam=!0),Se.gallery&&s.showGallery(s.building.id==="office"?D1:I1,(Se.floor??2)-1);const r=new Ox(Se.wipe,Se.mute,Se.squeak);await Ss(.66);const o=$M(),a=new _M(n,o);await Ss(.72),await document.fonts.load("800 100px Rubik",Ae("officeSign")).then(W=>console.info(`[boot] шрифт вывески: ${W.length} начертаний`)).catch(W=>console.warn("[boot] шрифт вывески не загрузился — будет системный",W));const l=aS();await Ss(.8);let c=null;const h=()=>{const W=s.building.id==="house",tt=W?l:c??=hS(),pt=W?Pf.house:Pf.office,ht=new sS(o,tt,sr,s.building,pt);return ht.onKnock=()=>r.knock(),a.scene.add(ht.group),ht};let u=h(),f=No(s.floorCount);const m=new vM,g=new j1,S=new gM,v=new Ef(Ba()),_=new Ef(Ba(),nM),E=new dM,A=new _1(Ba()),y=new lM,R=new cM,w=new I,P=()=>{R.setLevel(s.levels.soap),g.setSoap(s.levels.soap)},x=new I;a.scene.add(E.group,m.group,g.group,S.group,v.points,_.points,A.group,y.group,...R.objects),P(),S.setFoam(s.foam),u.build(s),await Ss(.9);const T=new AS(n,W=>{Ge("first_coin"),r.coin(W)}),L=new CS(n),U=new TS(n,s.floorCount),k=document.createElement("div");k.id="talk",n.appendChild(k);const H=document.getElementById("goal"),O=new PS(k,()=>H?n.getBoundingClientRect().right-H.getBoundingClientRect().left+4:0),z=new LS(n,Ae("foreman"),()=>r.radio()),Z=document.createElement("div");Z.id="fade",n.appendChild(Z);const V=new M1(n,a.camera,s,S,v,_);y1(n,V);const at=Se.autoplay?new w1(n,a.camera,s,V):null,K=Se.debug?new T1(n,a.renderer,s):null,it=new I,et=(W,tt,pt)=>(it.set(W,tt,pt).project(a.camera),[(it.x+1)/2*n.clientWidth,(1-it.y)/2*n.clientHeight]),Ut=W=>()=>{const tt=u.paneWorld(W),[pt,ht]=et(tt.x,tt.y+ae/2+.03,tt.z),Pt=et(tt.x,tt.y+ae*.12,tt.z)[1],Bt=et(0,g.group.position.y+.92,Do+.36)[1],N=n.clientHeight*.13;return ht>N&&ht<n.clientHeight&&Pt<Bt?[pt,ht]:null},Ct=new vS(s,O,z,Ut);for(const W of i?.said??[])Ct.said.add(W);Ct.arrive(),T.setCoins(s.coins);const pe=()=>e.schedule(bS(s,Ct.said));for(const W of["coins","bought","phase","building","bonus"])s.events.on(W,pe);window.addEventListener("pagehide",()=>{e.flush()}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e.flush()}),s.events.on("coins",({pane:W,amount:tt,from:pt})=>{const ht=pt==="blade"?S.group.position:pt==="robot"?y.group.position:new I(u.paneWorld(W).x,u.paneWorld(W).y,ui),[Pt,Bt]=et(ht.x,ht.y,ht.z);T.fly(Pt,Bt,tt)}),s.events.on("paneClean",({pane:W})=>{u.celebrate(W),r.ding();for(let tt=0;tt<=s.levels.soap;tt+=1)se(W);Ge("first_window"),Ge("window",{n:s.panesCleaned,floor:W.floor})});const se=W=>{const tt=u.paneWorld(W),[pt,ht]=et(tt.x-Xt/2,tt.y+ae/2,tt.z),[Pt,Bt]=et(tt.x+Xt/2,tt.y-ae/2,tt.z);T.sparkle(pt,ht,Pt-pt,Bt-ht)};s.events.on("pigeon",({pigeon:W,what:tt,at:pt})=>{if(tt==="land")r.coo();else if(tt==="arrive")r.flap();else if(tt==="shoo")r.flap(),A.puff(W),Ge("first_shoo");else{r.splat();const ht=s.panes(W.floor)[W.column];if(ht&&pt){const Pt=u.paneWorld(ht);A.splash(Pt.x+(pt.u-.5)*Xt,Pt.y+(pt.v-.5)*ae,ui)}Ge("pigeon_splat",{floor:W.floor+1})}}),s.events.on("soiled",({pane:W})=>u.resoil(W)),s.events.on("robot",()=>r.beep()),s.events.on("reveal",({pane:W,who:tt,amount:pt})=>{if(r.reveal(tt),tt==="director"){const ht=u.paneWorld(W),[Pt,Bt]=et(ht.x,ht.y,ht.z);T.fly(Pt,Bt,pt),T.banner(Ae("tips"))}else T.spend(-pt),T.banner(Ae("fined",{n:-pt}));Ge("blinds",{who:tt,amount:pt,floor:W.floor+1})}),s.events.on("tool",()=>{S.setFoam(!0),T.banner(Ae("foamGot")),r.buy(),Ge("foam_given",{floor:s.floor+1})}),s.events.on("floorClean",({floor:W})=>{Ge("first_floor"),Ge("floor",{n:W+1})}),s.events.on("drained",({run:W})=>{r.drained(),T.banner(Ae("bucketEmpty")),Ge("first_run_end"),Ge("run_end",{n:W.number,windows:W.windows,coins:W.coins,floor:s.floor+1})}),s.events.on("phase",({phase:W,previous:tt})=>{W!=="wash"&&V.release();const pt=W==="lift"||W==="descend"||W==="ascend";pt!==(tt==="lift"||tt==="descend"||tt==="ascend")&&r.lift(pt),W==="refill"&&(m.pour(!0),r.pour($u)),tt==="refill"&&m.pour(!1),W==="summary"&&L.summary(s,st),W==="roof"&&Q(),W==="move"&&(L.hide(),Z.classList.add("dark"))});const le=()=>{window.setTimeout(()=>{r.flap(),r.coo()},450),Ge("letter")},Q=()=>{r.fanfare(),T.banner(Ae(s.building.id==="house"?"houseDone":"officeDone")),Ge("first_building_done"),Ge("building_done",{n:s.buildingIndex+1}),window.setTimeout(()=>{s.phase==="roof"&&L.roof(s,()=>s.nextBuilding(),le)},1600)};s.events.on("bonus",({amount:W})=>{T.fly(n.clientWidth/2,n.clientHeight*.45,W)}),s.events.on("building",({index:W})=>{u.dispose(),u=h(),f=No(s.floorCount),U.setFloors(s.floorCount),u.build(s),O.clear(),requestAnimationFrame(()=>requestAnimationFrame(()=>Z.classList.remove("dark"))),Ge("building",{n:W+1})});const st={buy:W=>{s.buy(W)&&L.refresh(s,st)},go:()=>{L.hide(),s.startRun(),Ge("run_start",{n:s.run.number,floor:s.floor+1})}};s.events.on("bought",({id:W,level:tt,price:pt})=>{if(T.spend(pt),r.buy(),W==="soap"){P();const ht=g.bucketTop(w);R.burst(ht.x,ht.y,ht.z,14+tt*10);const Pt=n.querySelector('#panel [data-buy="soap"]')?.getBoundingClientRect(),Bt=n.getBoundingClientRect(),[N,ce]=Pt?[Pt.left-Bt.left+Pt.width*.15,Pt.top-Bt.top]:[n.clientWidth/2,n.clientHeight*.6];T.bubbles(N,ce,10+tt*8),r.bubbles(tt)}Ge("first_buy"),Ge("buy",{id:W,level:tt,price:pt,coins:s.coins})});const _t=()=>{Gx(n,zx(n)),a.resize()};new ResizeObserver(_t).observe(n),_t();const Vt=["pointerdown","pointerup","touchend","click","keydown"],At=W=>{if(!(W.type==="pointerdown"&&W.pointerType!=="mouse")&&r.unlock())for(const tt of Vt)window.removeEventListener(tt,At,!0)};for(const W of Vt)window.addEventListener(W,At,{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>document.visibilityState==="hidden"?r.hold("hidden"):r.release("hidden"));let Wt=0;Se.gallery&&(g.group.visible=!1);let me=0,rt=performance.now();a.renderer.setAnimationLoop(W=>{const tt=performance.now(),pt=(W-rt)/1e3,ht=Math.min(.1,pt);rt=W,s.update(ht);const Pt=s.cradle;a.frame(Pt),g.group.position.set(0,En(Pt)-ae/2-.95,Do),g.setRopes(f),g.setWater(s.water/s.capacity),at?.update(ht),S.setWidth(s.value("squeegee")),V.update(ht);const Bt=Math.min(1,V.travel/ht/6),N=Math.min(1,V.removed/ht/9e3);r.wipe(N,Bt),r.squeak(s.canWash?Math.min(1,V.glide/ht/5):0),r.clean(V.cleared),r.foam(V.foamed);const ce=V.contact;ce&&V.removed>0&&R.wipe(ce.x,ce.y,ui+.02,s.value("squeegee")*Xt*.8);const jt=V.hover;if(jt?.window?.closed&&s.canWash&&jt.washed===0&&r.behind(jt.window.closed),V.endFrame(),Se.gallery&&(Wt-=ht,Wt<=0)){Wt=3;for(let M=0;M<s.floorCount;M+=1)for(const G of s.panes(M))u.celebrate(G)}if(u.update(ht,s),Ct.update(ht),O.update(ht),z.update(ht),s.phase==="refill"){const M=g.waterSurface();m.update(ht,M),v.emit(mn.x,M+.03,mn.z,2,.12)}v.update(ht),_.update(ht),A.update(ht,s.pigeons.list);const C=g.group.position;x.set(C.x-1.15,C.y+1.03,C.z+.3),y.update(ht,s.robot,x),R.update(ht,g.bucketTop(w)),E.update(ht),U.update(s.cradle,s.floor),T.setWater(s.water/s.capacity,s.water/s.capacity<e1&&s.canWash),T.update(ht),a.render(),K?.update(pt,performance.now()-tt),at&&(me+=ht,me>=2&&(me=0,console.info(`СМОУК монеты=${s.coins} окна=${s.panesCleaned} этаж=${s.floor} заход=${s.run.number} фаза=${s.phase}`)))}),s.phase==="roof"&&L.roof(s,()=>s.nextBuilding(),le),A.warmup(!0);const ct=new Yt(Tt(.01,.01,.01,0,0,0,new ut("#1d4f80")),ud(o,sr));a.scene.add(ct),await a.renderer.compileAsync(a.scene,a.camera).catch(W=>console.warn("[boot] шейдеры не прогрелись заранее",W)),A.warmup(!1),a.scene.remove(ct),ct.geometry.dispose(),await Ss(1);const ft=document.getElementById("boot");n.classList.remove("loading"),ft?.classList.add("done"),window.setTimeout(()=>ft?.remove(),350),t.loadingStop(),t.gameplayStart(),Ge("boot",{platform:t.id,wipe:Se.wipe})}IS().catch(n=>{console.error("[boot] не запустилась",n);const t=document.getElementById("boot");t&&(t.textContent="Failed to start")});
