//Sun Jul 27 2025 23:52:38 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env('京东CK检测');
var kOO_J9i = Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79'],
  oxQLoKs,
  IuhAdA,
  jcfzYc,
  woStDqA,
  ka7c_l,
  wgcS81V,
  bPE_T0,
  UDNYTGZ,
  SXgKYk;
function WvmPoH9() {
  return globalThis;
}
function AKCgbfB() {
  return global;
}
function guJOB2() {
  return window;
}
function BguY63W() {
  return new Function('\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u0074\u0068\u0069\u0073')();
}
function GXCxP7(kOO_J9i = [WvmPoH9, AKCgbfB, guJOB2, BguY63W], o9tBf34, WCk61u = [], oxQLoKs = 0x0, IuhAdA) {
  o9tBf34 = o9tBf34;
  try {
    o9tBf34 = Object
    WCk61u["push"](''["__proto__"]["constructor"]["name"])
  } catch (e) {}
  LhDo8Nj: for (oxQLoKs = oxQLoKs; oxQLoKs < kOO_J9i["length"]; oxQLoKs++) try {
    o9tBf34 = kOO_J9i[oxQLoKs]();
    for (IuhAdA = 0x0; IuhAdA < WCk61u.length; IuhAdA++) if (typeof o9tBf34[WCk61u[IuhAdA]] === "undefined") {
      continue LhDo8Nj;
    }
    return o9tBf34;
  } catch (e) {}
  return o9tBf34 || this;
}
oxQLoKs = GXCxP7() || {}
IuhAdA = oxQLoKs.TextDecoder
jcfzYc = oxQLoKs["Uint8Array"]
woStDqA = oxQLoKs.Buffer
ka7c_l = oxQLoKs.String || String
wgcS81V = oxQLoKs["Array"] || Array
function gYAOHS(...kOO_J9i) {
  return kOO_J9i[kOO_J9i["length"] - 0x1];
}
function Lp9NBE(Fzg3ZL, kOO_J9i) {
  switch (UDNYTGZ) {
    case 0x15:
      return !Fzg3ZL;
    case 0xe:
      return Fzg3ZL / kOO_J9i;
    case -6:
      return Fzg3ZL + kOO_J9i;
    case 38:
      return Fzg3ZL - kOO_J9i;
    case 22:
      return typeof Fzg3ZL;
  }
}
function NQa6gv(Fzg3ZL) {
  return gYAOHS(Fzg3ZL = UDNYTGZ + (UDNYTGZ = Fzg3ZL, 0x0), Fzg3ZL);
}
UDNYTGZ = UDNYTGZ
SXgKYk = Object["create"](null)
const ABkbjPR = require('./jdCookie.js'),
  QrzNdrU = require('./utils/Rebels_sendJDNotify'),
  tGP2Xs = require('./sendNotify'),
  iNVZVJ = require('./utils/Rebels_jdCommon');
let Uv0GIV = $["isNode"]() && process["env"]["QL_DIR"],
  ce37Lc = process["env"]["jd_CheckCK_showsuccessck"] || "true",
  PkMX8l = process["env"]["jd_CheckCK_alwaysnotify"] || "true",
  UmnWqx = process["env"]["WP_APP_TOKEN_ONE"] || '',
  cmAf2m = process["env"]["jd_CheckCK_autodisable"] || "true",
  y8tGcd = process["env"]["jd_CheckCK_autoenable"] || "true",
  DHvd4l4 = process["env"]["jd_checkck_threads"] || "1";
const DBz24xk = process["env"]["jd_checkck_interval"] || "2000",
  DxrR3uF = 50;
let OX2rDck = '',
  vbxVzx = '',
  sLV8hue = Object["keys"](ABkbjPR)["map"](Fzg3ZL => ABkbjPR[Fzg3ZL])["filter"](Fzg3ZL => Fzg3ZL);
if (Lp9NBE(sLV8hue[0], UDNYTGZ = 0x15)) {
  var iJZICBe = "name";
  $["msg"]($[iJZICBe], "【提示】请先获取京东Cookie")
  process["exit"](0x1)
}
let uMWJKh9 = {};
if (Uv0GIV) {
  try {
    uMWJKh9 = require('./ql');
  } catch (e) {
    var obT6XE = {
      ["xXWZJa"]: "log",
      lBiidk: "log"
    };
    console[obT6XE.xXWZJa](`加载青龙面板API失败: ${e["message"]}`)
    console[obT6XE["lBiidk"]]("将使用普通环境检测")
    Uv0GIV = false
  }
}
Lp9NBE((async () => {
  try {
    const wgcS81V = parseInt(DHvd4l4);
    if (wgcS81V > 0x0) {
      DHvd4l4 = wgcS81V;
    }
  } catch {
    DHvd4l4 = 0x3;
  }
  if (gYAOHS(DHvd4l4 = Math["min"](DHvd4l4, DxrR3uF), $["waitTime"] = null, DBz24xk)) {
    try {
      const bPE_T0 = parseInt(DBz24xk);
      if (bPE_T0 >= 0x0) {
        var TO0nia = "waitTime";
        $[TO0nia] = bPE_T0;
      }
    } catch {
      console["log"]("⚠ 自定义运行间隔时长设置错误")
    }
  }
  if (gYAOHS(console["log"](`==========${$["name"]}变量开启状态==========`), console["log"](`运行环境: [${Uv0GIV ? "青龙面板" : "普通环境"}]`), console["log"](`并发线程: [${DHvd4l4}]个线程同时运行`), console["log"](`间隔时长: [${Lp9NBE($["waitTime"], 0x3e8, UDNYTGZ = 0xe)}秒]运行间隔时长`), console["log"](`代理开关: [${iNVZVJ["getProxyStatus"]()}]`), console["log"](`显示有效: [${ce37Lc === "true" ? "开启" : '关闭'}]`), console["log"](`总是通知: [${PkMX8l === "true" ? "开启" : '关闭'}]`), Uv0GIV)) {
    console["log"](`自动禁用: [${cmAf2m === "true" ? "开启" : '关闭'}]`)
    console["log"](`自动启用: [${y8tGcd === "true" ? '开启' : '关闭'}]`)
  }
  if (gYAOHS(console["log"](`==========${$["name"]}变量状态结束==========`), console["log"](''), QrzNdrU["config"]({
    ["title"]: $["name"]
  }), await UhsjXM4(), (OX2rDck || vbxVzx || PkMX8l === "true") && QrzNdrU["getMessage"]()) && 1) {
    await QrzNdrU["push"]();
  }
})()["catch"](Fzg3ZL => {
  return $["logErr"](Fzg3ZL);
})["finally"](() => $["done"]()), NQa6gv(0x15));
async function UhsjXM4() {
  var o9tBf34;
  o9tBf34 = "qwhmur7" in SXgKYk;
  if (o9tBf34) {
    "(c=ak(<~F$VU'9f)~><&85dBPL-module/from".match(Lp9NBE("q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", NQa6gv(-0x6)))
  }
  try {
    if (gYAOHS($["validCount"] = 0, Uv0GIV)) {
      try {
        const Sffhd2p = await uMWJKh9["getEnvs"]();
        if (Lp9NBE(Sffhd2p[0x0], UDNYTGZ = 21)) {
          var qeFV24 = "open-url";
          return gYAOHS($["msg"]($["name"], "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
            [qeFV24]: "https://bean.m.jd.com/bean/signIndex.action"
          }), undefined);
        }
        let AKCgbfB = [];
        for (let guJOB2 = 0x0; guJOB2 < Sffhd2p["length"]; guJOB2++) if (Sffhd2p[guJOB2]["value"]) {
          let GXCxP7 = 0;
          if (Sffhd2p[guJOB2]["_id"]) {
            GXCxP7 = Sffhd2p[guJOB2]["_id"];
          }
          if (Sffhd2p[guJOB2]["id"]) {
            GXCxP7 = Sffhd2p[guJOB2].id;
          }
          AKCgbfB["push"]({
            ["cookie"]: Sffhd2p[guJOB2]["value"],
            ["index"]: Lp9NBE(guJOB2, 1, UDNYTGZ = -6),
            ["id"]: GXCxP7
          });
        }
        if (gYAOHS(await iNVZVJ["concTask"](DHvd4l4, AKCgbfB, p5dQpf), ce37Lc) === "true") {
          console["log"](`\n📣 共有 ${$["validCount"] || 0} 个有效账号，${Lp9NBE(AKCgbfB["length"], $["validCount"] || 0x0, UDNYTGZ = 0x26)} 个失效账号`)
        }
        const PkMX8l = QrzNdrU["getMessage"]();
        if (PkMX8l) {
          var UmnWqx = "log";
          console[UmnWqx](`\n📣 运行结果\n${PkMX8l["replace"](/：/g, " ➜ ")}`);
        }
      } catch (error) {
        console["log"](`青龙API调用失败: ${error["message"]}`)
        console["log"]("将使用普通环境检测逻辑")
        Uv0GIV = false
        await UhsjXM4()
      }
    } else {
      var cmAf2m = "concTask";
      if (gYAOHS(await iNVZVJ[cmAf2m](DHvd4l4, sLV8hue, QUu5IW), ce37Lc) === "true") {
        console["log"](`\n📣 共有 ${$["validCount"] || 0} 个有效账号，${Lp9NBE(sLV8hue["length"], $["validCount"] || 0x0, UDNYTGZ = 0x26)} 个失效账号`);
      }
      const PkMX8l = QrzNdrU["getMessage"]();
      if (PkMX8l) {
        console["log"](`\n📣 运行结果\n${PkMX8l["replace"](/：/g, " ➜ ")}`);
      }
    }
  } catch (e) {
    console["log"](`❌ 脚本运行遇到了错误\n${e}`);
  }
}
async function p5dQpf(kOO_J9i) {
  var o9tBf34 = "index";
  if ($["runEnd"]) {
    return {
      ["runEnd"]: true
    };
  }
  const {
      ["cookie"]: oxQLoKs,
      [o9tBf34]: IuhAdA,
      id: jcfzYc
    } = kOO_J9i,
    woStDqA = decodeURIComponent(iNVZVJ["getCookieValue"](oxQLoKs, "pt_pin")),
    ka7c_l = `【账号${IuhAdA}】${iNVZVJ["dataMasking"](woStDqA, {
      ["printWidth"]: 0x6
    })}：`,
    wgcS81V = QrzNdrU["create"](IuhAdA, woStDqA);
  try {
    const caaKRLk = gYAOHS($["isLogin"] = true, $["error"] = '', $["nickName"] = '', $["UserName"] = woStDqA, $["cookie"] = oxQLoKs, await uMWJKh9["getstatus"](jcfzYc)),
      epU1nQ = caaKRLk == 0x1;
    if (gYAOHS(await LAjPMp(), $["error"])) {
      console["log"](`检测出错: ${$["error"]}`)
      vbxVzx += `${ka7c_l}${$["error"]}\n`
      wgcS81V["fix"]("检测出错")
    } else {
      if (Lp9NBE($["isLogin"], NQa6gv(21))) {
        let owE2wR = "已失效";
        if (epU1nQ) {
          owE2wR += "，已处于禁用状态";
        } else {
          if (cmAf2m === "true") {
            const ynHXYDc = await uMWJKh9["DisableCk"](jcfzYc);
            owE2wR += ynHXYDc["code"] == 0xc8 ? "，自动禁用成功" : "，自动禁用失败";
          }
        }
        console["log"](`${ka7c_l}${owE2wR}!`)
        OX2rDck += `${ka7c_l}${owE2wR}\n`
        wgcS81V["fix"]("已失效")
      } else {
        if (epU1nQ) {
          if (y8tGcd === "true") {
            const AKCgbfB = await uMWJKh9["EnableCk"](jcfzYc);
            if (AKCgbfB["code"] == 0xc8) {
              console["log"](`${ka7c_l}已恢复，自动启用成功!`)
              wgcS81V["fix"]("状态正常(自动启用成功)")
            } else {
              console["log"](`${ka7c_l}已恢复，但自动启用失败!`)
              wgcS81V["fix"]("状态正常(自动启用失败)")
            }
          } else {
            console["log"](`${ka7c_l}已恢复，可手动启用!`)
            wgcS81V["fix"]("状态正常(可手动启用)")
          }
        } else {
          console["log"](`${ka7c_l}状态正常!`)
          wgcS81V["fix"]("状态正常")
          $["validCount"] = Lp9NBE($["validCount"] || 0x0, 1, NQa6gv(-0x6))
        }
      }
    }
    await $["wait"](parseInt(Lp9NBE($["waitTime"] * 0x1, 0x1f4, UDNYTGZ = -6), 0xa));
  } catch (e) {
    console["log"](`${ka7c_l}❌ 脚本运行遇到了错误\n${e}`)
    vbxVzx += `${ka7c_l}检测出错\n`
    wgcS81V["fix"]("❌ 运行出错")
  }
}
async function QUu5IW(kOO_J9i, o9tBf34) {
  if ($["runEnd"]) {
    return {
      ["runEnd"]: true
    };
  }
  const oxQLoKs = decodeURIComponent(iNVZVJ["getCookieValue"](kOO_J9i, "pt_pin")),
    IuhAdA = `【账号${o9tBf34}】${iNVZVJ["dataMasking"](oxQLoKs, {
      ["printWidth"]: 0x6
    })}：`,
    jcfzYc = QrzNdrU["create"](o9tBf34, oxQLoKs);
  try {
    if (gYAOHS($["isLogin"] = true, $["error"] = '', $["nickName"] = '', $["UserName"] = oxQLoKs, $["cookie"] = kOO_J9i, await LAjPMp(), $["error"])) {
      console["log"](`检测出错: ${$["error"]}`)
      vbxVzx += `${IuhAdA}: ${$["error"]}\n`
      jcfzYc["fix"]("检测出错")
    } else {
      if (Lp9NBE($["isLogin"], NQa6gv(21))) {
        console["log"](`${IuhAdA}已失效!`)
        OX2rDck += `${IuhAdA}已失效\n`
        jcfzYc["fix"]("已失效")
      } else {
        console["log"](`${IuhAdA}状态正常!`)
        jcfzYc["fix"]("状态正常")
        $["validCount"] = Lp9NBE($["validCount"] || 0x0, 1, NQa6gv(-6))
      }
    }
    await $["wait"](parseInt(Lp9NBE($["waitTime"] * 1, 0x1f4, UDNYTGZ = -0x6), 0xa));
  } catch (e) {
    console["log"](`${IuhAdA}❌ 脚本运行遇到了错误\n${e}`)
    vbxVzx += `${IuhAdA}: 检测出错\n`
    jcfzYc["fix"]("❌ 运行出错")
  }
}
function LAjPMp() {
  return new Promise(async kOO_J9i => {
    try {
      const jcfzYc = {
          ["url"]: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
          ["headers"]: {
            ["Cookie"]: $["cookie"],
            ["referer"]: "https://h5.m.jd.com/",
            ["User-Agent"]: iNVZVJ["genUA"]($["UserName"]) || "jdapp;iPhone;10.1.2;15.0;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"
          }
        },
        woStDqA = await iNVZVJ["request"](jcfzYc);
      if (Lp9NBE(woStDqA["success"], UDNYTGZ = 0x15) && 1) {
        $["error"] = `请求失败: ${woStDqA["error"] || "未知错误"}`
        $["isLogin"] = false
      } else {
        var ka7c_l = ["data"];
        let wgcS81V;
        if (Lp9NBE(woStDqA[ka7c_l[0]], NQa6gv(22)) === "string" && true) {
          try {
            wgcS81V = JSON["parse"](woStDqA["data"]);
          } catch (e) {
            return gYAOHS($["error"] = `解析数据出错: ${e["message"]}`, console["log"](e), kOO_J9i(), undefined);
          }
        } else {
          wgcS81V = woStDqA["data"];
        }
        if (wgcS81V) {
          if (wgcS81V["islogin"] === "1" && true) {
            $["nickName"] = $["UserName"]
            $["isLogin"] = true
          } else {
            if (wgcS81V["islogin"] === '\x30' && true) {
              $["isLogin"] = false;
            } else {
              var bPE_T0 = "error";
              $[bPE_T0] = `未知返回...`;
            }
          }
        } else {
          $["error"] = `接口返回空数据`;
        }
      }
    } catch (e) {
      $["error"] = `解析数据出错: ${e["message"]}`
      console["log"](e)
    } finally {
      kOO_J9i();
    }
  });
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}