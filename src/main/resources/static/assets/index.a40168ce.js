import { g as getDefaultExportFromCjs$1, h, a as getCurrentInstance, e as effectScope, i as inject, o as onMounted, b as onUnmounted, s as shallowRef, r as ref, c as computed, d as onBeforeMount, w as watch, F as Fragment, f as isRef, j as createVNode, T as Text, k as defineComponent, E as ElConfigProvider, l as openBlock, m as createBlock, n as withCtx, p as resolveComponent, u as unref, q as reactive, t as nextTick, v as provide, x as markRaw, y as isVue2, z as toRaw, A as isReactive, B as toRef, C as toRefs, D as commonjsGlobal$1, G as commonjsRequire, H as ElMessage, I as ElLoading, J as createElementBlock, K as createBaseVNode, L as createCommentVNode, M as renderSlot, N as withDirectives, O as normalizeStyle, P as resolveDirective, Q as renderList, R as createTextVNode, S as toDisplayString$1, U as mergeProps, V as createSlots, W as normalizeProps, X as guardReactiveProps, Y as normalizeClass, Z as createApp, _ as ICONS, $ as installer } from './element-plus.97092bf0.js';

const p = function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(script) {
        const fetchOpts = {};
        if (script.integrity)
            fetchOpts.integrity = script.integrity;
        if (script.referrerpolicy)
            fetchOpts.referrerPolicy = script.referrerpolicy;
        if (script.crossorigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (script.crossorigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
};true&&p();

var zhCn = {};

(function (exports) {

Object.defineProperty(exports, '__esModule', { value: true });

var zhCn = {
  name: "zh-cn",
  el: {
    colorpicker: {
      confirm: "\u786E\u5B9A",
      clear: "\u6E05\u7A7A"
    },
    datepicker: {
      now: "\u6B64\u523B",
      today: "\u4ECA\u5929",
      cancel: "\u53D6\u6D88",
      clear: "\u6E05\u7A7A",
      confirm: "\u786E\u5B9A",
      selectDate: "\u9009\u62E9\u65E5\u671F",
      selectTime: "\u9009\u62E9\u65F6\u95F4",
      startDate: "\u5F00\u59CB\u65E5\u671F",
      startTime: "\u5F00\u59CB\u65F6\u95F4",
      endDate: "\u7ED3\u675F\u65E5\u671F",
      endTime: "\u7ED3\u675F\u65F6\u95F4",
      prevYear: "\u524D\u4E00\u5E74",
      nextYear: "\u540E\u4E00\u5E74",
      prevMonth: "\u4E0A\u4E2A\u6708",
      nextMonth: "\u4E0B\u4E2A\u6708",
      year: "\u5E74",
      month1: "1 \u6708",
      month2: "2 \u6708",
      month3: "3 \u6708",
      month4: "4 \u6708",
      month5: "5 \u6708",
      month6: "6 \u6708",
      month7: "7 \u6708",
      month8: "8 \u6708",
      month9: "9 \u6708",
      month10: "10 \u6708",
      month11: "11 \u6708",
      month12: "12 \u6708",
      weeks: {
        sun: "\u65E5",
        mon: "\u4E00",
        tue: "\u4E8C",
        wed: "\u4E09",
        thu: "\u56DB",
        fri: "\u4E94",
        sat: "\u516D"
      },
      months: {
        jan: "\u4E00\u6708",
        feb: "\u4E8C\u6708",
        mar: "\u4E09\u6708",
        apr: "\u56DB\u6708",
        may: "\u4E94\u6708",
        jun: "\u516D\u6708",
        jul: "\u4E03\u6708",
        aug: "\u516B\u6708",
        sep: "\u4E5D\u6708",
        oct: "\u5341\u6708",
        nov: "\u5341\u4E00\u6708",
        dec: "\u5341\u4E8C\u6708"
      }
    },
    select: {
      loading: "\u52A0\u8F7D\u4E2D",
      noMatch: "\u65E0\u5339\u914D\u6570\u636E",
      noData: "\u65E0\u6570\u636E",
      placeholder: "\u8BF7\u9009\u62E9"
    },
    cascader: {
      noMatch: "\u65E0\u5339\u914D\u6570\u636E",
      loading: "\u52A0\u8F7D\u4E2D",
      placeholder: "\u8BF7\u9009\u62E9",
      noData: "\u6682\u65E0\u6570\u636E"
    },
    pagination: {
      goto: "\u524D\u5F80",
      pagesize: "\u6761/\u9875",
      total: "\u5171 {total} \u6761",
      pageClassifier: "\u9875",
      deprecationWarning: "\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863"
    },
    messagebox: {
      title: "\u63D0\u793A",
      confirm: "\u786E\u5B9A",
      cancel: "\u53D6\u6D88",
      error: "\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!"
    },
    upload: {
      deleteTip: "\u6309 delete \u952E\u53EF\u5220\u9664",
      delete: "\u5220\u9664",
      preview: "\u67E5\u770B\u56FE\u7247",
      continue: "\u7EE7\u7EED\u4E0A\u4F20"
    },
    table: {
      emptyText: "\u6682\u65E0\u6570\u636E",
      confirmFilter: "\u7B5B\u9009",
      resetFilter: "\u91CD\u7F6E",
      clearFilter: "\u5168\u90E8",
      sumText: "\u5408\u8BA1"
    },
    tree: {
      emptyText: "\u6682\u65E0\u6570\u636E"
    },
    transfer: {
      noMatch: "\u65E0\u5339\u914D\u6570\u636E",
      noData: "\u65E0\u6570\u636E",
      titles: ["\u5217\u8868 1", "\u5217\u8868 2"],
      filterPlaceholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",
      noCheckedFormat: "\u5171 {total} \u9879",
      hasCheckedFormat: "\u5DF2\u9009 {checked}/{total} \u9879"
    },
    image: {
      error: "\u52A0\u8F7D\u5931\u8D25"
    },
    pageHeader: {
      title: "\u8FD4\u56DE"
    },
    popconfirm: {
      confirmButtonText: "\u786E\u5B9A",
      cancelButtonText: "\u53D6\u6D88"
    }
  }
};

exports["default"] = zhCn;

}(zhCn));

var localeZH = /*@__PURE__*/getDefaultExportFromCjs$1(zhCn);

var en = {};

(function (exports) {

Object.defineProperty(exports, '__esModule', { value: true });

var English = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};

exports["default"] = English;

}(en));

var localeEN = /*@__PURE__*/getDefaultExportFromCjs$1(en);

/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
/**
 * Original Utilities
 * written by kazuya kawaguchi
 */
const inBrowser = typeof window !== 'undefined';
const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
    .replace(/\u0027/g, '\\u0027');
const isNumber$1 = (val) => typeof val === 'number' && isFinite(val);
const isDate$1 = (val) => toTypeString(val) === '[object Date]';
const isRegExp = (val) => toTypeString(val) === '[object RegExp]';
const isEmptyObject = (val) => isPlainObject$2(val) && Object.keys(val).length === 0;
function warn(msg, err) {
    if (typeof console !== 'undefined') {
        console.warn(`[intlify] ` + msg);
        /* istanbul ignore if */
        if (err) {
            console.warn(err.stack);
        }
    }
}
const assign$2 = Object.assign;
let _globalThis;
const getGlobalThis = () => {
    // prettier-ignore
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof global !== 'undefined'
                            ? global
                            : {}));
};
function escapeHtml(rawText) {
    return rawText
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray$2 = Array.isArray;
const isFunction$1 = (val) => typeof val === 'function';
const isString$1 = (val) => typeof val === 'string';
const isBoolean = (val) => typeof val === 'boolean';
const isObject$1 = (val) => // eslint-disable-line
 val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject$2 = (val) => toTypeString(val) === '[object Object]';
// for converting list and named values to displayed strings.
const toDisplayString = (val) => {
    return val == null
        ? ''
        : isArray$2(val) || (isPlainObject$2(val) && val.toString === objectToString)
            ? JSON.stringify(val, null, 2)
            : String(val);
};

/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */

const CompileErrorCodes = {
    // tokenizer error codes
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    // parser error codes
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    // Special value for higher-order compilers to pick up the last code
    // to avoid collision of error codes. This should always be kept as the last
    // item.
    __EXTEND_POINT__: 15
};
function createCompileError(code, loc, options = {}) {
    const { domain, messages, args } = options;
    const msg = code;
    const error = new SyntaxError(String(msg));
    error.code = code;
    if (loc) {
        error.location = loc;
    }
    error.domain = domain;
    return error;
}
/** @internal */
function defaultOnError(error) {
    throw error;
}
function createPosition(line, column, offset) {
    return { line, column, offset };
}
function createLocation(start, end, source) {
    const loc = { start, end };
    if (source != null) {
        loc.source = source;
    }
    return loc;
}

const CHAR_SP = ' ';
const CHAR_CR = '\r';
const CHAR_LF = '\n';
const CHAR_LS = String.fromCharCode(0x2028);
const CHAR_PS = String.fromCharCode(0x2029);
function createScanner(str) {
    const _buf = str;
    let _index = 0;
    let _line = 1;
    let _column = 1;
    let _peekOffset = 0;
    const isCRLF = (index) => _buf[index] === CHAR_CR && _buf[index + 1] === CHAR_LF;
    const isLF = (index) => _buf[index] === CHAR_LF;
    const isPS = (index) => _buf[index] === CHAR_PS;
    const isLS = (index) => _buf[index] === CHAR_LS;
    const isLineEnd = (index) => isCRLF(index) || isLF(index) || isPS(index) || isLS(index);
    const index = () => _index;
    const line = () => _line;
    const column = () => _column;
    const peekOffset = () => _peekOffset;
    const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
    const currentChar = () => charAt(_index);
    const currentPeek = () => charAt(_index + _peekOffset);
    function next() {
        _peekOffset = 0;
        if (isLineEnd(_index)) {
            _line++;
            _column = 0;
        }
        if (isCRLF(_index)) {
            _index++;
        }
        _index++;
        _column++;
        return _buf[_index];
    }
    function peek() {
        if (isCRLF(_index + _peekOffset)) {
            _peekOffset++;
        }
        _peekOffset++;
        return _buf[_index + _peekOffset];
    }
    function reset() {
        _index = 0;
        _line = 1;
        _column = 1;
        _peekOffset = 0;
    }
    function resetPeek(offset = 0) {
        _peekOffset = offset;
    }
    function skipToPeek() {
        const target = _index + _peekOffset;
        // eslint-disable-next-line no-unmodified-loop-condition
        while (target !== _index) {
            next();
        }
        _peekOffset = 0;
    }
    return {
        index,
        line,
        column,
        peekOffset,
        charAt,
        currentChar,
        currentPeek,
        next,
        peek,
        reset,
        resetPeek,
        skipToPeek
    };
}

const EOF = undefined;
const LITERAL_DELIMITER = "'";
const ERROR_DOMAIN$1 = 'tokenizer';
function createTokenizer(source, options = {}) {
    const location = options.location !== false;
    const _scnr = createScanner(source);
    const currentOffset = () => _scnr.index();
    const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
    const _initLoc = currentPosition();
    const _initOffset = currentOffset();
    const _context = {
        currentType: 14 /* EOF */,
        offset: _initOffset,
        startLoc: _initLoc,
        endLoc: _initLoc,
        lastType: 14 /* EOF */,
        lastOffset: _initOffset,
        lastStartLoc: _initLoc,
        lastEndLoc: _initLoc,
        braceNest: 0,
        inLinked: false,
        text: ''
    };
    const context = () => _context;
    const { onError } = options;
    function emitError(code, pos, offset, ...args) {
        const ctx = context();
        pos.column += offset;
        pos.offset += offset;
        if (onError) {
            const loc = createLocation(ctx.startLoc, pos);
            const err = createCompileError(code, loc, {
                domain: ERROR_DOMAIN$1,
                args
            });
            onError(err);
        }
    }
    function getToken(context, type, value) {
        context.endLoc = currentPosition();
        context.currentType = type;
        const token = { type };
        if (location) {
            token.loc = createLocation(context.startLoc, context.endLoc);
        }
        if (value != null) {
            token.value = value;
        }
        return token;
    }
    const getEndToken = (context) => getToken(context, 14 /* EOF */);
    function eat(scnr, ch) {
        if (scnr.currentChar() === ch) {
            scnr.next();
            return ch;
        }
        else {
            emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
            return '';
        }
    }
    function peekSpaces(scnr) {
        let buf = '';
        while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
            buf += scnr.currentPeek();
            scnr.peek();
        }
        return buf;
    }
    function skipSpaces(scnr) {
        const buf = peekSpaces(scnr);
        scnr.skipToPeek();
        return buf;
    }
    function isIdentifierStart(ch) {
        if (ch === EOF) {
            return false;
        }
        const cc = ch.charCodeAt(0);
        return ((cc >= 97 && cc <= 122) || // a-z
            (cc >= 65 && cc <= 90) || // A-Z
            cc === 95 // _
        );
    }
    function isNumberStart(ch) {
        if (ch === EOF) {
            return false;
        }
        const cc = ch.charCodeAt(0);
        return cc >= 48 && cc <= 57; // 0-9
    }
    function isNamedIdentifierStart(scnr, context) {
        const { currentType } = context;
        if (currentType !== 2 /* BraceLeft */) {
            return false;
        }
        peekSpaces(scnr);
        const ret = isIdentifierStart(scnr.currentPeek());
        scnr.resetPeek();
        return ret;
    }
    function isListIdentifierStart(scnr, context) {
        const { currentType } = context;
        if (currentType !== 2 /* BraceLeft */) {
            return false;
        }
        peekSpaces(scnr);
        const ch = scnr.currentPeek() === '-' ? scnr.peek() : scnr.currentPeek();
        const ret = isNumberStart(ch);
        scnr.resetPeek();
        return ret;
    }
    function isLiteralStart(scnr, context) {
        const { currentType } = context;
        if (currentType !== 2 /* BraceLeft */) {
            return false;
        }
        peekSpaces(scnr);
        const ret = scnr.currentPeek() === LITERAL_DELIMITER;
        scnr.resetPeek();
        return ret;
    }
    function isLinkedDotStart(scnr, context) {
        const { currentType } = context;
        if (currentType !== 8 /* LinkedAlias */) {
            return false;
        }
        peekSpaces(scnr);
        const ret = scnr.currentPeek() === "." /* LinkedDot */;
        scnr.resetPeek();
        return ret;
    }
    function isLinkedModifierStart(scnr, context) {
        const { currentType } = context;
        if (currentType !== 9 /* LinkedDot */) {
            return false;
        }
        peekSpaces(scnr);
        const ret = isIdentifierStart(scnr.currentPeek());
        scnr.resetPeek();
        return ret;
    }
    function isLinkedDelimiterStart(scnr, context) {
        const { currentType } = context;
        if (!(currentType === 8 /* LinkedAlias */ ||
            currentType === 12 /* LinkedModifier */)) {
            return false;
        }
        peekSpaces(scnr);
        const ret = scnr.currentPeek() === ":" /* LinkedDelimiter */;
        scnr.resetPeek();
        return ret;
    }
    function isLinkedReferStart(scnr, context) {
        const { currentType } = context;
        if (currentType !== 10 /* LinkedDelimiter */) {
            return false;
        }
        const fn = () => {
            const ch = scnr.currentPeek();
            if (ch === "{" /* BraceLeft */) {
                return isIdentifierStart(scnr.peek());
            }
            else if (ch === "@" /* LinkedAlias */ ||
                ch === "%" /* Modulo */ ||
                ch === "|" /* Pipe */ ||
                ch === ":" /* LinkedDelimiter */ ||
                ch === "." /* LinkedDot */ ||
                ch === CHAR_SP ||
                !ch) {
                return false;
            }
            else if (ch === CHAR_LF) {
                scnr.peek();
                return fn();
            }
            else {
                // other characters
                return isIdentifierStart(ch);
            }
        };
        const ret = fn();
        scnr.resetPeek();
        return ret;
    }
    function isPluralStart(scnr) {
        peekSpaces(scnr);
        const ret = scnr.currentPeek() === "|" /* Pipe */;
        scnr.resetPeek();
        return ret;
    }
    function detectModuloStart(scnr) {
        const spaces = peekSpaces(scnr);
        const ret = scnr.currentPeek() === "%" /* Modulo */ &&
            scnr.peek() === "{" /* BraceLeft */;
        scnr.resetPeek();
        return {
            isModulo: ret,
            hasSpace: spaces.length > 0
        };
    }
    function isTextStart(scnr, reset = true) {
        const fn = (hasSpace = false, prev = '', detectModulo = false) => {
            const ch = scnr.currentPeek();
            if (ch === "{" /* BraceLeft */) {
                return prev === "%" /* Modulo */ ? false : hasSpace;
            }
            else if (ch === "@" /* LinkedAlias */ || !ch) {
                return prev === "%" /* Modulo */ ? true : hasSpace;
            }
            else if (ch === "%" /* Modulo */) {
                scnr.peek();
                return fn(hasSpace, "%" /* Modulo */, true);
            }
            else if (ch === "|" /* Pipe */) {
                return prev === "%" /* Modulo */ || detectModulo
                    ? true
                    : !(prev === CHAR_SP || prev === CHAR_LF);
            }
            else if (ch === CHAR_SP) {
                scnr.peek();
                return fn(true, CHAR_SP, detectModulo);
            }
            else if (ch === CHAR_LF) {
                scnr.peek();
                return fn(true, CHAR_LF, detectModulo);
            }
            else {
                return true;
            }
        };
        const ret = fn();
        reset && scnr.resetPeek();
        return ret;
    }
    function takeChar(scnr, fn) {
        const ch = scnr.currentChar();
        if (ch === EOF) {
            return EOF;
        }
        if (fn(ch)) {
            scnr.next();
            return ch;
        }
        return null;
    }
    function takeIdentifierChar(scnr) {
        const closure = (ch) => {
            const cc = ch.charCodeAt(0);
            return ((cc >= 97 && cc <= 122) || // a-z
                (cc >= 65 && cc <= 90) || // A-Z
                (cc >= 48 && cc <= 57) || // 0-9
                cc === 95 || // _
                cc === 36 // $
            );
        };
        return takeChar(scnr, closure);
    }
    function takeDigit(scnr) {
        const closure = (ch) => {
            const cc = ch.charCodeAt(0);
            return cc >= 48 && cc <= 57; // 0-9
        };
        return takeChar(scnr, closure);
    }
    function takeHexDigit(scnr) {
        const closure = (ch) => {
            const cc = ch.charCodeAt(0);
            return ((cc >= 48 && cc <= 57) || // 0-9
                (cc >= 65 && cc <= 70) || // A-F
                (cc >= 97 && cc <= 102)); // a-f
        };
        return takeChar(scnr, closure);
    }
    function getDigits(scnr) {
        let ch = '';
        let num = '';
        while ((ch = takeDigit(scnr))) {
            num += ch;
        }
        return num;
    }
    function readModulo(scnr) {
        skipSpaces(scnr);
        const ch = scnr.currentChar();
        if (ch !== "%" /* Modulo */) {
            emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
        }
        scnr.next();
        return "%" /* Modulo */;
    }
    function readText(scnr) {
        let buf = '';
        while (true) {
            const ch = scnr.currentChar();
            if (ch === "{" /* BraceLeft */ ||
                ch === "}" /* BraceRight */ ||
                ch === "@" /* LinkedAlias */ ||
                ch === "|" /* Pipe */ ||
                !ch) {
                break;
            }
            else if (ch === "%" /* Modulo */) {
                if (isTextStart(scnr)) {
                    buf += ch;
                    scnr.next();
                }
                else {
                    break;
                }
            }
            else if (ch === CHAR_SP || ch === CHAR_LF) {
                if (isTextStart(scnr)) {
                    buf += ch;
                    scnr.next();
                }
                else if (isPluralStart(scnr)) {
                    break;
                }
                else {
                    buf += ch;
                    scnr.next();
                }
            }
            else {
                buf += ch;
                scnr.next();
            }
        }
        return buf;
    }
    function readNamedIdentifier(scnr) {
        skipSpaces(scnr);
        let ch = '';
        let name = '';
        while ((ch = takeIdentifierChar(scnr))) {
            name += ch;
        }
        if (scnr.currentChar() === EOF) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
        }
        return name;
    }
    function readListIdentifier(scnr) {
        skipSpaces(scnr);
        let value = '';
        if (scnr.currentChar() === '-') {
            scnr.next();
            value += `-${getDigits(scnr)}`;
        }
        else {
            value += getDigits(scnr);
        }
        if (scnr.currentChar() === EOF) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
        }
        return value;
    }
    function readLiteral(scnr) {
        skipSpaces(scnr);
        eat(scnr, `\'`);
        let ch = '';
        let literal = '';
        const fn = (x) => x !== LITERAL_DELIMITER && x !== CHAR_LF;
        while ((ch = takeChar(scnr, fn))) {
            if (ch === '\\') {
                literal += readEscapeSequence(scnr);
            }
            else {
                literal += ch;
            }
        }
        const current = scnr.currentChar();
        if (current === CHAR_LF || current === EOF) {
            emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
            // TODO: Is it correct really?
            if (current === CHAR_LF) {
                scnr.next();
                eat(scnr, `\'`);
            }
            return literal;
        }
        eat(scnr, `\'`);
        return literal;
    }
    function readEscapeSequence(scnr) {
        const ch = scnr.currentChar();
        switch (ch) {
            case '\\':
            case `\'`:
                scnr.next();
                return `\\${ch}`;
            case 'u':
                return readUnicodeEscapeSequence(scnr, ch, 4);
            case 'U':
                return readUnicodeEscapeSequence(scnr, ch, 6);
            default:
                emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
                return '';
        }
    }
    function readUnicodeEscapeSequence(scnr, unicode, digits) {
        eat(scnr, unicode);
        let sequence = '';
        for (let i = 0; i < digits; i++) {
            const ch = takeHexDigit(scnr);
            if (!ch) {
                emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
                break;
            }
            sequence += ch;
        }
        return `\\${unicode}${sequence}`;
    }
    function readInvalidIdentifier(scnr) {
        skipSpaces(scnr);
        let ch = '';
        let identifiers = '';
        const closure = (ch) => ch !== "{" /* BraceLeft */ &&
            ch !== "}" /* BraceRight */ &&
            ch !== CHAR_SP &&
            ch !== CHAR_LF;
        while ((ch = takeChar(scnr, closure))) {
            identifiers += ch;
        }
        return identifiers;
    }
    function readLinkedModifier(scnr) {
        let ch = '';
        let name = '';
        while ((ch = takeIdentifierChar(scnr))) {
            name += ch;
        }
        return name;
    }
    function readLinkedRefer(scnr) {
        const fn = (detect = false, buf) => {
            const ch = scnr.currentChar();
            if (ch === "{" /* BraceLeft */ ||
                ch === "%" /* Modulo */ ||
                ch === "@" /* LinkedAlias */ ||
                ch === "|" /* Pipe */ ||
                !ch) {
                return buf;
            }
            else if (ch === CHAR_SP) {
                return buf;
            }
            else if (ch === CHAR_LF) {
                buf += ch;
                scnr.next();
                return fn(detect, buf);
            }
            else {
                buf += ch;
                scnr.next();
                return fn(true, buf);
            }
        };
        return fn(false, '');
    }
    function readPlural(scnr) {
        skipSpaces(scnr);
        const plural = eat(scnr, "|" /* Pipe */);
        skipSpaces(scnr);
        return plural;
    }
    // TODO: We need refactoring of token parsing ...
    function readTokenInPlaceholder(scnr, context) {
        let token = null;
        const ch = scnr.currentChar();
        switch (ch) {
            case "{" /* BraceLeft */:
                if (context.braceNest >= 1) {
                    emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
                }
                scnr.next();
                token = getToken(context, 2 /* BraceLeft */, "{" /* BraceLeft */);
                skipSpaces(scnr);
                context.braceNest++;
                return token;
            case "}" /* BraceRight */:
                if (context.braceNest > 0 &&
                    context.currentType === 2 /* BraceLeft */) {
                    emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
                }
                scnr.next();
                token = getToken(context, 3 /* BraceRight */, "}" /* BraceRight */);
                context.braceNest--;
                context.braceNest > 0 && skipSpaces(scnr);
                if (context.inLinked && context.braceNest === 0) {
                    context.inLinked = false;
                }
                return token;
            case "@" /* LinkedAlias */:
                if (context.braceNest > 0) {
                    emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
                }
                token = readTokenInLinked(scnr, context) || getEndToken(context);
                context.braceNest = 0;
                return token;
            default:
                let validNamedIdentifier = true;
                let validListIdentifier = true;
                let validLiteral = true;
                if (isPluralStart(scnr)) {
                    if (context.braceNest > 0) {
                        emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
                    }
                    token = getToken(context, 1 /* Pipe */, readPlural(scnr));
                    // reset
                    context.braceNest = 0;
                    context.inLinked = false;
                    return token;
                }
                if (context.braceNest > 0 &&
                    (context.currentType === 5 /* Named */ ||
                        context.currentType === 6 /* List */ ||
                        context.currentType === 7 /* Literal */)) {
                    emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
                    context.braceNest = 0;
                    return readToken(scnr, context);
                }
                if ((validNamedIdentifier = isNamedIdentifierStart(scnr, context))) {
                    token = getToken(context, 5 /* Named */, readNamedIdentifier(scnr));
                    skipSpaces(scnr);
                    return token;
                }
                if ((validListIdentifier = isListIdentifierStart(scnr, context))) {
                    token = getToken(context, 6 /* List */, readListIdentifier(scnr));
                    skipSpaces(scnr);
                    return token;
                }
                if ((validLiteral = isLiteralStart(scnr, context))) {
                    token = getToken(context, 7 /* Literal */, readLiteral(scnr));
                    skipSpaces(scnr);
                    return token;
                }
                if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
                    // TODO: we should be re-designed invalid cases, when we will extend message syntax near the future ...
                    token = getToken(context, 13 /* InvalidPlace */, readInvalidIdentifier(scnr));
                    emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
                    skipSpaces(scnr);
                    return token;
                }
                break;
        }
        return token;
    }
    // TODO: We need refactoring of token parsing ...
    function readTokenInLinked(scnr, context) {
        const { currentType } = context;
        let token = null;
        const ch = scnr.currentChar();
        if ((currentType === 8 /* LinkedAlias */ ||
            currentType === 9 /* LinkedDot */ ||
            currentType === 12 /* LinkedModifier */ ||
            currentType === 10 /* LinkedDelimiter */) &&
            (ch === CHAR_LF || ch === CHAR_SP)) {
            emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
        }
        switch (ch) {
            case "@" /* LinkedAlias */:
                scnr.next();
                token = getToken(context, 8 /* LinkedAlias */, "@" /* LinkedAlias */);
                context.inLinked = true;
                return token;
            case "." /* LinkedDot */:
                skipSpaces(scnr);
                scnr.next();
                return getToken(context, 9 /* LinkedDot */, "." /* LinkedDot */);
            case ":" /* LinkedDelimiter */:
                skipSpaces(scnr);
                scnr.next();
                return getToken(context, 10 /* LinkedDelimiter */, ":" /* LinkedDelimiter */);
            default:
                if (isPluralStart(scnr)) {
                    token = getToken(context, 1 /* Pipe */, readPlural(scnr));
                    // reset
                    context.braceNest = 0;
                    context.inLinked = false;
                    return token;
                }
                if (isLinkedDotStart(scnr, context) ||
                    isLinkedDelimiterStart(scnr, context)) {
                    skipSpaces(scnr);
                    return readTokenInLinked(scnr, context);
                }
                if (isLinkedModifierStart(scnr, context)) {
                    skipSpaces(scnr);
                    return getToken(context, 12 /* LinkedModifier */, readLinkedModifier(scnr));
                }
                if (isLinkedReferStart(scnr, context)) {
                    skipSpaces(scnr);
                    if (ch === "{" /* BraceLeft */) {
                        // scan the placeholder
                        return readTokenInPlaceholder(scnr, context) || token;
                    }
                    else {
                        return getToken(context, 11 /* LinkedKey */, readLinkedRefer(scnr));
                    }
                }
                if (currentType === 8 /* LinkedAlias */) {
                    emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
                }
                context.braceNest = 0;
                context.inLinked = false;
                return readToken(scnr, context);
        }
    }
    // TODO: We need refactoring of token parsing ...
    function readToken(scnr, context) {
        let token = { type: 14 /* EOF */ };
        if (context.braceNest > 0) {
            return readTokenInPlaceholder(scnr, context) || getEndToken(context);
        }
        if (context.inLinked) {
            return readTokenInLinked(scnr, context) || getEndToken(context);
        }
        const ch = scnr.currentChar();
        switch (ch) {
            case "{" /* BraceLeft */:
                return readTokenInPlaceholder(scnr, context) || getEndToken(context);
            case "}" /* BraceRight */:
                emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
                scnr.next();
                return getToken(context, 3 /* BraceRight */, "}" /* BraceRight */);
            case "@" /* LinkedAlias */:
                return readTokenInLinked(scnr, context) || getEndToken(context);
            default:
                if (isPluralStart(scnr)) {
                    token = getToken(context, 1 /* Pipe */, readPlural(scnr));
                    // reset
                    context.braceNest = 0;
                    context.inLinked = false;
                    return token;
                }
                const { isModulo, hasSpace } = detectModuloStart(scnr);
                if (isModulo) {
                    return hasSpace
                        ? getToken(context, 0 /* Text */, readText(scnr))
                        : getToken(context, 4 /* Modulo */, readModulo(scnr));
                }
                if (isTextStart(scnr)) {
                    return getToken(context, 0 /* Text */, readText(scnr));
                }
                break;
        }
        return token;
    }
    function nextToken() {
        const { currentType, offset, startLoc, endLoc } = _context;
        _context.lastType = currentType;
        _context.lastOffset = offset;
        _context.lastStartLoc = startLoc;
        _context.lastEndLoc = endLoc;
        _context.offset = currentOffset();
        _context.startLoc = currentPosition();
        if (_scnr.currentChar() === EOF) {
            return getToken(_context, 14 /* EOF */);
        }
        return readToken(_scnr, _context);
    }
    return {
        nextToken,
        currentOffset,
        currentPosition,
        context
    };
}

const ERROR_DOMAIN = 'parser';
// Backslash backslash, backslash quote, uHHHH, UHHHHHH.
const KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
    switch (match) {
        case `\\\\`:
            return `\\`;
        case `\\\'`:
            return `\'`;
        default: {
            const codePoint = parseInt(codePoint4 || codePoint6, 16);
            if (codePoint <= 0xd7ff || codePoint >= 0xe000) {
                return String.fromCodePoint(codePoint);
            }
            // invalid ...
            // Replace them with U+FFFD REPLACEMENT CHARACTER.
            return '�';
        }
    }
}
function createParser(options = {}) {
    const location = options.location !== false;
    const { onError } = options;
    function emitError(tokenzer, code, start, offset, ...args) {
        const end = tokenzer.currentPosition();
        end.offset += offset;
        end.column += offset;
        if (onError) {
            const loc = createLocation(start, end);
            const err = createCompileError(code, loc, {
                domain: ERROR_DOMAIN,
                args
            });
            onError(err);
        }
    }
    function startNode(type, offset, loc) {
        const node = {
            type,
            start: offset,
            end: offset
        };
        if (location) {
            node.loc = { start: loc, end: loc };
        }
        return node;
    }
    function endNode(node, offset, pos, type) {
        node.end = offset;
        if (type) {
            node.type = type;
        }
        if (location && node.loc) {
            node.loc.end = pos;
        }
    }
    function parseText(tokenizer, value) {
        const context = tokenizer.context();
        const node = startNode(3 /* Text */, context.offset, context.startLoc);
        node.value = value;
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return node;
    }
    function parseList(tokenizer, index) {
        const context = tokenizer.context();
        const { lastOffset: offset, lastStartLoc: loc } = context; // get brace left loc
        const node = startNode(5 /* List */, offset, loc);
        node.index = parseInt(index, 10);
        tokenizer.nextToken(); // skip brach right
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return node;
    }
    function parseNamed(tokenizer, key) {
        const context = tokenizer.context();
        const { lastOffset: offset, lastStartLoc: loc } = context; // get brace left loc
        const node = startNode(4 /* Named */, offset, loc);
        node.key = key;
        tokenizer.nextToken(); // skip brach right
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return node;
    }
    function parseLiteral(tokenizer, value) {
        const context = tokenizer.context();
        const { lastOffset: offset, lastStartLoc: loc } = context; // get brace left loc
        const node = startNode(9 /* Literal */, offset, loc);
        node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
        tokenizer.nextToken(); // skip brach right
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return node;
    }
    function parseLinkedModifier(tokenizer) {
        const token = tokenizer.nextToken();
        const context = tokenizer.context();
        const { lastOffset: offset, lastStartLoc: loc } = context; // get linked dot loc
        const node = startNode(8 /* LinkedModifier */, offset, loc);
        if (token.type !== 12 /* LinkedModifier */) {
            // empty modifier
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
            node.value = '';
            endNode(node, offset, loc);
            return {
                nextConsumeToken: token,
                node
            };
        }
        // check token
        if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        node.value = token.value || '';
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return {
            node
        };
    }
    function parseLinkedKey(tokenizer, value) {
        const context = tokenizer.context();
        const node = startNode(7 /* LinkedKey */, context.offset, context.startLoc);
        node.value = value;
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return node;
    }
    function parseLinked(tokenizer) {
        const context = tokenizer.context();
        const linkedNode = startNode(6 /* Linked */, context.offset, context.startLoc);
        let token = tokenizer.nextToken();
        if (token.type === 9 /* LinkedDot */) {
            const parsed = parseLinkedModifier(tokenizer);
            linkedNode.modifier = parsed.node;
            token = parsed.nextConsumeToken || tokenizer.nextToken();
        }
        // asset check token
        if (token.type !== 10 /* LinkedDelimiter */) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        token = tokenizer.nextToken();
        // skip brace left
        if (token.type === 2 /* BraceLeft */) {
            token = tokenizer.nextToken();
        }
        switch (token.type) {
            case 11 /* LinkedKey */:
                if (token.value == null) {
                    emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                }
                linkedNode.key = parseLinkedKey(tokenizer, token.value || '');
                break;
            case 5 /* Named */:
                if (token.value == null) {
                    emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                }
                linkedNode.key = parseNamed(tokenizer, token.value || '');
                break;
            case 6 /* List */:
                if (token.value == null) {
                    emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                }
                linkedNode.key = parseList(tokenizer, token.value || '');
                break;
            case 7 /* Literal */:
                if (token.value == null) {
                    emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                }
                linkedNode.key = parseLiteral(tokenizer, token.value || '');
                break;
            default:
                // empty key
                emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
                const nextContext = tokenizer.context();
                const emptyLinkedKeyNode = startNode(7 /* LinkedKey */, nextContext.offset, nextContext.startLoc);
                emptyLinkedKeyNode.value = '';
                endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
                linkedNode.key = emptyLinkedKeyNode;
                endNode(linkedNode, nextContext.offset, nextContext.startLoc);
                return {
                    nextConsumeToken: token,
                    node: linkedNode
                };
        }
        endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
        return {
            node: linkedNode
        };
    }
    function parseMessage(tokenizer) {
        const context = tokenizer.context();
        const startOffset = context.currentType === 1 /* Pipe */
            ? tokenizer.currentOffset()
            : context.offset;
        const startLoc = context.currentType === 1 /* Pipe */
            ? context.endLoc
            : context.startLoc;
        const node = startNode(2 /* Message */, startOffset, startLoc);
        node.items = [];
        let nextToken = null;
        do {
            const token = nextToken || tokenizer.nextToken();
            nextToken = null;
            switch (token.type) {
                case 0 /* Text */:
                    if (token.value == null) {
                        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                    }
                    node.items.push(parseText(tokenizer, token.value || ''));
                    break;
                case 6 /* List */:
                    if (token.value == null) {
                        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                    }
                    node.items.push(parseList(tokenizer, token.value || ''));
                    break;
                case 5 /* Named */:
                    if (token.value == null) {
                        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                    }
                    node.items.push(parseNamed(tokenizer, token.value || ''));
                    break;
                case 7 /* Literal */:
                    if (token.value == null) {
                        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
                    }
                    node.items.push(parseLiteral(tokenizer, token.value || ''));
                    break;
                case 8 /* LinkedAlias */:
                    const parsed = parseLinked(tokenizer);
                    node.items.push(parsed.node);
                    nextToken = parsed.nextConsumeToken || null;
                    break;
            }
        } while (context.currentType !== 14 /* EOF */ &&
            context.currentType !== 1 /* Pipe */);
        // adjust message node loc
        const endOffset = context.currentType === 1 /* Pipe */
            ? context.lastOffset
            : tokenizer.currentOffset();
        const endLoc = context.currentType === 1 /* Pipe */
            ? context.lastEndLoc
            : tokenizer.currentPosition();
        endNode(node, endOffset, endLoc);
        return node;
    }
    function parsePlural(tokenizer, offset, loc, msgNode) {
        const context = tokenizer.context();
        let hasEmptyMessage = msgNode.items.length === 0;
        const node = startNode(1 /* Plural */, offset, loc);
        node.cases = [];
        node.cases.push(msgNode);
        do {
            const msg = parseMessage(tokenizer);
            if (!hasEmptyMessage) {
                hasEmptyMessage = msg.items.length === 0;
            }
            node.cases.push(msg);
        } while (context.currentType !== 14 /* EOF */);
        if (hasEmptyMessage) {
            emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
        }
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return node;
    }
    function parseResource(tokenizer) {
        const context = tokenizer.context();
        const { offset, startLoc } = context;
        const msgNode = parseMessage(tokenizer);
        if (context.currentType === 14 /* EOF */) {
            return msgNode;
        }
        else {
            return parsePlural(tokenizer, offset, startLoc, msgNode);
        }
    }
    function parse(source) {
        const tokenizer = createTokenizer(source, assign$2({}, options));
        const context = tokenizer.context();
        const node = startNode(0 /* Resource */, context.offset, context.startLoc);
        if (location && node.loc) {
            node.loc.source = source;
        }
        node.body = parseResource(tokenizer);
        // assert whether achieved to EOF
        if (context.currentType !== 14 /* EOF */) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || '');
        }
        endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
        return node;
    }
    return { parse };
}
function getTokenCaption(token) {
    if (token.type === 14 /* EOF */) {
        return 'EOF';
    }
    const name = (token.value || '').replace(/\r?\n/gu, '\\n');
    return name.length > 10 ? name.slice(0, 9) + '…' : name;
}

function createTransformer(ast, options = {} // eslint-disable-line
) {
    const _context = {
        ast,
        helpers: new Set()
    };
    const context = () => _context;
    const helper = (name) => {
        _context.helpers.add(name);
        return name;
    };
    return { context, helper };
}
function traverseNodes(nodes, transformer) {
    for (let i = 0; i < nodes.length; i++) {
        traverseNode(nodes[i], transformer);
    }
}
function traverseNode(node, transformer) {
    // TODO: if we need pre-hook of transform, should be implemented to here
    switch (node.type) {
        case 1 /* Plural */:
            traverseNodes(node.cases, transformer);
            transformer.helper("plural" /* PLURAL */);
            break;
        case 2 /* Message */:
            traverseNodes(node.items, transformer);
            break;
        case 6 /* Linked */:
            const linked = node;
            traverseNode(linked.key, transformer);
            transformer.helper("linked" /* LINKED */);
            transformer.helper("type" /* TYPE */);
            break;
        case 5 /* List */:
            transformer.helper("interpolate" /* INTERPOLATE */);
            transformer.helper("list" /* LIST */);
            break;
        case 4 /* Named */:
            transformer.helper("interpolate" /* INTERPOLATE */);
            transformer.helper("named" /* NAMED */);
            break;
    }
    // TODO: if we need post-hook of transform, should be implemented to here
}
// transform AST
function transform(ast, options = {} // eslint-disable-line
) {
    const transformer = createTransformer(ast);
    transformer.helper("normalize" /* NORMALIZE */);
    // traverse
    ast.body && traverseNode(ast.body, transformer);
    // set meta information
    const context = transformer.context();
    ast.helpers = Array.from(context.helpers);
}

function createCodeGenerator(ast, options) {
    const { sourceMap, filename, breakLineCode, needIndent: _needIndent } = options;
    const _context = {
        source: ast.loc.source,
        filename,
        code: '',
        column: 1,
        line: 1,
        offset: 0,
        map: undefined,
        breakLineCode,
        needIndent: _needIndent,
        indentLevel: 0
    };
    const context = () => _context;
    function push(code, node) {
        _context.code += code;
    }
    function _newline(n, withBreakLine = true) {
        const _breakLineCode = withBreakLine ? breakLineCode : '';
        push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
    }
    function indent(withNewLine = true) {
        const level = ++_context.indentLevel;
        withNewLine && _newline(level);
    }
    function deindent(withNewLine = true) {
        const level = --_context.indentLevel;
        withNewLine && _newline(level);
    }
    function newline() {
        _newline(_context.indentLevel);
    }
    const helper = (key) => `_${key}`;
    const needIndent = () => _context.needIndent;
    return {
        context,
        push,
        indent,
        deindent,
        newline,
        helper,
        needIndent
    };
}
function generateLinkedNode(generator, node) {
    const { helper } = generator;
    generator.push(`${helper("linked" /* LINKED */)}(`);
    generateNode(generator, node.key);
    if (node.modifier) {
        generator.push(`, `);
        generateNode(generator, node.modifier);
        generator.push(`, _type`);
    }
    else {
        generator.push(`, undefined, _type`);
    }
    generator.push(`)`);
}
function generateMessageNode(generator, node) {
    const { helper, needIndent } = generator;
    generator.push(`${helper("normalize" /* NORMALIZE */)}([`);
    generator.indent(needIndent());
    const length = node.items.length;
    for (let i = 0; i < length; i++) {
        generateNode(generator, node.items[i]);
        if (i === length - 1) {
            break;
        }
        generator.push(', ');
    }
    generator.deindent(needIndent());
    generator.push('])');
}
function generatePluralNode(generator, node) {
    const { helper, needIndent } = generator;
    if (node.cases.length > 1) {
        generator.push(`${helper("plural" /* PLURAL */)}([`);
        generator.indent(needIndent());
        const length = node.cases.length;
        for (let i = 0; i < length; i++) {
            generateNode(generator, node.cases[i]);
            if (i === length - 1) {
                break;
            }
            generator.push(', ');
        }
        generator.deindent(needIndent());
        generator.push(`])`);
    }
}
function generateResource(generator, node) {
    if (node.body) {
        generateNode(generator, node.body);
    }
    else {
        generator.push('null');
    }
}
function generateNode(generator, node) {
    const { helper } = generator;
    switch (node.type) {
        case 0 /* Resource */:
            generateResource(generator, node);
            break;
        case 1 /* Plural */:
            generatePluralNode(generator, node);
            break;
        case 2 /* Message */:
            generateMessageNode(generator, node);
            break;
        case 6 /* Linked */:
            generateLinkedNode(generator, node);
            break;
        case 8 /* LinkedModifier */:
            generator.push(JSON.stringify(node.value), node);
            break;
        case 7 /* LinkedKey */:
            generator.push(JSON.stringify(node.value), node);
            break;
        case 5 /* List */:
            generator.push(`${helper("interpolate" /* INTERPOLATE */)}(${helper("list" /* LIST */)}(${node.index}))`, node);
            break;
        case 4 /* Named */:
            generator.push(`${helper("interpolate" /* INTERPOLATE */)}(${helper("named" /* NAMED */)}(${JSON.stringify(node.key)}))`, node);
            break;
        case 9 /* Literal */:
            generator.push(JSON.stringify(node.value), node);
            break;
        case 3 /* Text */:
            generator.push(JSON.stringify(node.value), node);
            break;
    }
}
// generate code from AST
const generate = (ast, options = {} // eslint-disable-line
) => {
    const mode = isString$1(options.mode) ? options.mode : 'normal';
    const filename = isString$1(options.filename)
        ? options.filename
        : 'message.intl';
    const sourceMap = !!options.sourceMap;
    // prettier-ignore
    const breakLineCode = options.breakLineCode != null
        ? options.breakLineCode
        : mode === 'arrow'
            ? ';'
            : '\n';
    const needIndent = options.needIndent ? options.needIndent : mode !== 'arrow';
    const helpers = ast.helpers || [];
    const generator = createCodeGenerator(ast, {
        mode,
        filename,
        sourceMap,
        breakLineCode,
        needIndent
    });
    generator.push(mode === 'normal' ? `function __msg__ (ctx) {` : `(ctx) => {`);
    generator.indent(needIndent);
    if (helpers.length > 0) {
        generator.push(`const { ${helpers.map(s => `${s}: _${s}`).join(', ')} } = ctx`);
        generator.newline();
    }
    generator.push(`return `);
    generateNode(generator, ast);
    generator.deindent(needIndent);
    generator.push(`}`);
    const { code, map } = generator.context();
    return {
        ast,
        code,
        map: map ? map.toJSON() : undefined // eslint-disable-line @typescript-eslint/no-explicit-any
    };
};

function baseCompile(source, options = {}) {
    const assignedOptions = assign$2({}, options);
    // parse source codes
    const parser = createParser(assignedOptions);
    const ast = parser.parse(source);
    // transform ASTs
    transform(ast, assignedOptions);
    // generate javascript codes
    return generate(ast, assignedOptions);
}

/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const IntlifyDevToolsHooks =  {
    I18nInit: 'i18n:init',
    FunctionTranslate: 'function:translate'
};

/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */

const pathStateMachine =  [];
pathStateMachine[0 /* BEFORE_PATH */] = {
    ["w" /* WORKSPACE */]: [0 /* BEFORE_PATH */],
    ["i" /* IDENT */]: [3 /* IN_IDENT */, 0 /* APPEND */],
    ["[" /* LEFT_BRACKET */]: [4 /* IN_SUB_PATH */],
    ["o" /* END_OF_FAIL */]: [7 /* AFTER_PATH */]
};
pathStateMachine[1 /* IN_PATH */] = {
    ["w" /* WORKSPACE */]: [1 /* IN_PATH */],
    ["." /* DOT */]: [2 /* BEFORE_IDENT */],
    ["[" /* LEFT_BRACKET */]: [4 /* IN_SUB_PATH */],
    ["o" /* END_OF_FAIL */]: [7 /* AFTER_PATH */]
};
pathStateMachine[2 /* BEFORE_IDENT */] = {
    ["w" /* WORKSPACE */]: [2 /* BEFORE_IDENT */],
    ["i" /* IDENT */]: [3 /* IN_IDENT */, 0 /* APPEND */],
    ["0" /* ZERO */]: [3 /* IN_IDENT */, 0 /* APPEND */]
};
pathStateMachine[3 /* IN_IDENT */] = {
    ["i" /* IDENT */]: [3 /* IN_IDENT */, 0 /* APPEND */],
    ["0" /* ZERO */]: [3 /* IN_IDENT */, 0 /* APPEND */],
    ["w" /* WORKSPACE */]: [1 /* IN_PATH */, 1 /* PUSH */],
    ["." /* DOT */]: [2 /* BEFORE_IDENT */, 1 /* PUSH */],
    ["[" /* LEFT_BRACKET */]: [4 /* IN_SUB_PATH */, 1 /* PUSH */],
    ["o" /* END_OF_FAIL */]: [7 /* AFTER_PATH */, 1 /* PUSH */]
};
pathStateMachine[4 /* IN_SUB_PATH */] = {
    ["'" /* SINGLE_QUOTE */]: [5 /* IN_SINGLE_QUOTE */, 0 /* APPEND */],
    ["\"" /* DOUBLE_QUOTE */]: [6 /* IN_DOUBLE_QUOTE */, 0 /* APPEND */],
    ["[" /* LEFT_BRACKET */]: [
        4 /* IN_SUB_PATH */,
        2 /* INC_SUB_PATH_DEPTH */
    ],
    ["]" /* RIGHT_BRACKET */]: [1 /* IN_PATH */, 3 /* PUSH_SUB_PATH */],
    ["o" /* END_OF_FAIL */]: 8 /* ERROR */,
    ["l" /* ELSE */]: [4 /* IN_SUB_PATH */, 0 /* APPEND */]
};
pathStateMachine[5 /* IN_SINGLE_QUOTE */] = {
    ["'" /* SINGLE_QUOTE */]: [4 /* IN_SUB_PATH */, 0 /* APPEND */],
    ["o" /* END_OF_FAIL */]: 8 /* ERROR */,
    ["l" /* ELSE */]: [5 /* IN_SINGLE_QUOTE */, 0 /* APPEND */]
};
pathStateMachine[6 /* IN_DOUBLE_QUOTE */] = {
    ["\"" /* DOUBLE_QUOTE */]: [4 /* IN_SUB_PATH */, 0 /* APPEND */],
    ["o" /* END_OF_FAIL */]: 8 /* ERROR */,
    ["l" /* ELSE */]: [6 /* IN_DOUBLE_QUOTE */, 0 /* APPEND */]
};
/**
 * Check if an expression is a literal value.
 */
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
    return literalValueRE.test(exp);
}
/**
 * Strip quotes from a string
 */
function stripQuotes(str) {
    const a = str.charCodeAt(0);
    const b = str.charCodeAt(str.length - 1);
    return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}
/**
 * Determine the type of a character in a keypath.
 */
function getPathCharType(ch) {
    if (ch === undefined || ch === null) {
        return "o" /* END_OF_FAIL */;
    }
    const code = ch.charCodeAt(0);
    switch (code) {
        case 0x5b: // [
        case 0x5d: // ]
        case 0x2e: // .
        case 0x22: // "
        case 0x27: // '
            return ch;
        case 0x5f: // _
        case 0x24: // $
        case 0x2d: // -
            return "i" /* IDENT */;
        case 0x09: // Tab (HT)
        case 0x0a: // Newline (LF)
        case 0x0d: // Return (CR)
        case 0xa0: // No-break space (NBSP)
        case 0xfeff: // Byte Order Mark (BOM)
        case 0x2028: // Line Separator (LS)
        case 0x2029: // Paragraph Separator (PS)
            return "w" /* WORKSPACE */;
    }
    return "i" /* IDENT */;
}
/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */
function formatSubPath(path) {
    const trimmed = path.trim();
    // invalid leading 0
    if (path.charAt(0) === '0' && isNaN(parseInt(path))) {
        return false;
    }
    return isLiteral(trimmed)
        ? stripQuotes(trimmed)
        : "*" /* ASTARISK */ + trimmed;
}
/**
 * Parse a string path into an array of segments
 */
function parse(path) {
    const keys = [];
    let index = -1;
    let mode = 0 /* BEFORE_PATH */;
    let subPathDepth = 0;
    let c;
    let key; // eslint-disable-line
    let newChar;
    let type;
    let transition;
    let action;
    let typeMap;
    const actions = [];
    actions[0 /* APPEND */] = () => {
        if (key === undefined) {
            key = newChar;
        }
        else {
            key += newChar;
        }
    };
    actions[1 /* PUSH */] = () => {
        if (key !== undefined) {
            keys.push(key);
            key = undefined;
        }
    };
    actions[2 /* INC_SUB_PATH_DEPTH */] = () => {
        actions[0 /* APPEND */]();
        subPathDepth++;
    };
    actions[3 /* PUSH_SUB_PATH */] = () => {
        if (subPathDepth > 0) {
            subPathDepth--;
            mode = 4 /* IN_SUB_PATH */;
            actions[0 /* APPEND */]();
        }
        else {
            subPathDepth = 0;
            if (key === undefined) {
                return false;
            }
            key = formatSubPath(key);
            if (key === false) {
                return false;
            }
            else {
                actions[1 /* PUSH */]();
            }
        }
    };
    function maybeUnescapeQuote() {
        const nextChar = path[index + 1];
        if ((mode === 5 /* IN_SINGLE_QUOTE */ &&
            nextChar === "'" /* SINGLE_QUOTE */) ||
            (mode === 6 /* IN_DOUBLE_QUOTE */ &&
                nextChar === "\"" /* DOUBLE_QUOTE */)) {
            index++;
            newChar = '\\' + nextChar;
            actions[0 /* APPEND */]();
            return true;
        }
    }
    while (mode !== null) {
        index++;
        c = path[index];
        if (c === '\\' && maybeUnescapeQuote()) {
            continue;
        }
        type = getPathCharType(c);
        typeMap = pathStateMachine[mode];
        transition = typeMap[type] || typeMap["l" /* ELSE */] || 8 /* ERROR */;
        // check parse error
        if (transition === 8 /* ERROR */) {
            return;
        }
        mode = transition[0];
        if (transition[1] !== undefined) {
            action = actions[transition[1]];
            if (action) {
                newChar = c;
                if (action() === false) {
                    return;
                }
            }
        }
        // check parse finish
        if (mode === 7 /* AFTER_PATH */) {
            return keys;
        }
    }
}
// path token cache
const cache = new Map();
/**
 * key-value message resolver
 *
 * @remarks
 * Resolves messages with the key-value structure. Note that messages with a hierarchical structure such as objects cannot be resolved
 *
 * @param obj - A target object to be resolved with path
 * @param path - A {@link Path | path} to resolve the value of message
 *
 * @returns A resolved {@link PathValue | path value}
 *
 * @VueI18nGeneral
 */
function resolveWithKeyValue(obj, path) {
    return isObject$1(obj) ? obj[path] : null;
}
/**
 * message resolver
 *
 * @remarks
 * Resolves messages. messages with a hierarchical structure such as objects can be resolved. This resolver is used in VueI18n as default.
 *
 * @param obj - A target object to be resolved with path
 * @param path - A {@link Path | path} to resolve the value of message
 *
 * @returns A resolved {@link PathValue | path value}
 *
 * @VueI18nGeneral
 */
function resolveValue(obj, path) {
    // check object
    if (!isObject$1(obj)) {
        return null;
    }
    // parse path
    let hit = cache.get(path);
    if (!hit) {
        hit = parse(path);
        if (hit) {
            cache.set(path, hit);
        }
    }
    // check hit
    if (!hit) {
        return null;
    }
    // resolve path value
    const len = hit.length;
    let last = obj;
    let i = 0;
    while (i < len) {
        const val = last[hit[i]];
        if (val === undefined) {
            return null;
        }
        last = val;
        i++;
    }
    return last;
}

const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => ''; // eslint-disable-line
const DEFAULT_MESSAGE_DATA_TYPE = 'text';
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? '' : values.join('');
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
    choice = Math.abs(choice);
    if (choicesLength === 2) {
        // prettier-ignore
        return choice
            ? choice > 1
                ? 1
                : 0
            : 1;
    }
    return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
    // prettier-ignore
    const index = isNumber$1(options.pluralIndex)
        ? options.pluralIndex
        : -1;
    // prettier-ignore
    return options.named && (isNumber$1(options.named.count) || isNumber$1(options.named.n))
        ? isNumber$1(options.named.count)
            ? options.named.count
            : isNumber$1(options.named.n)
                ? options.named.n
                : index
        : index;
}
function normalizeNamed(pluralIndex, props) {
    if (!props.count) {
        props.count = pluralIndex;
    }
    if (!props.n) {
        props.n = pluralIndex;
    }
}
function createMessageContext(options = {}) {
    const locale = options.locale;
    const pluralIndex = getPluralIndex(options);
    const pluralRule = isObject$1(options.pluralRules) &&
        isString$1(locale) &&
        isFunction$1(options.pluralRules[locale])
        ? options.pluralRules[locale]
        : pluralDefault;
    const orgPluralRule = isObject$1(options.pluralRules) &&
        isString$1(locale) &&
        isFunction$1(options.pluralRules[locale])
        ? pluralDefault
        : undefined;
    const plural = (messages) => {
        return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
    };
    const _list = options.list || [];
    const list = (index) => _list[index];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _named = options.named || {};
    isNumber$1(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
    const named = (key) => _named[key];
    function message(key) {
        // prettier-ignore
        const msg = isFunction$1(options.messages)
            ? options.messages(key)
            : isObject$1(options.messages)
                ? options.messages[key]
                : false;
        return !msg
            ? options.parent
                ? options.parent.message(key) // resolve from parent messages
                : DEFAULT_MESSAGE
            : msg;
    }
    const _modifier = (name) => options.modifiers
        ? options.modifiers[name]
        : DEFAULT_MODIFIER;
    const normalize = isPlainObject$2(options.processor) && isFunction$1(options.processor.normalize)
        ? options.processor.normalize
        : DEFAULT_NORMALIZE;
    const interpolate = isPlainObject$2(options.processor) &&
        isFunction$1(options.processor.interpolate)
        ? options.processor.interpolate
        : DEFAULT_INTERPOLATE;
    const type = isPlainObject$2(options.processor) && isString$1(options.processor.type)
        ? options.processor.type
        : DEFAULT_MESSAGE_DATA_TYPE;
    const linked = (key, ...args) => {
        const [arg1, arg2] = args;
        let type = 'text';
        let modifier = '';
        if (args.length === 1) {
            if (isObject$1(arg1)) {
                modifier = arg1.modifier || modifier;
                type = arg1.type || type;
            }
            else if (isString$1(arg1)) {
                modifier = arg1 || modifier;
            }
        }
        else if (args.length === 2) {
            if (isString$1(arg1)) {
                modifier = arg1 || modifier;
            }
            if (isString$1(arg2)) {
                type = arg2 || type;
            }
        }
        let msg = message(key)(ctx);
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        if (type === 'vnode' && isArray$2(msg) && modifier) {
            msg = msg[0];
        }
        return modifier ? _modifier(modifier)(msg, type) : msg;
    };
    const ctx = {
        ["list" /* LIST */]: list,
        ["named" /* NAMED */]: named,
        ["plural" /* PLURAL */]: plural,
        ["linked" /* LINKED */]: linked,
        ["message" /* MESSAGE */]: message,
        ["type" /* TYPE */]: type,
        ["interpolate" /* INTERPOLATE */]: interpolate,
        ["normalize" /* NORMALIZE */]: normalize
    };
    return ctx;
}

let devtools = null;
function setDevToolsHook(hook) {
    devtools = hook;
}
function initI18nDevTools(i18n, version, meta) {
    // TODO: queue if devtools is undefined
    devtools &&
        devtools.emit(IntlifyDevToolsHooks.I18nInit, {
            timestamp: Date.now(),
            i18n,
            version,
            meta
        });
}
const translateDevTools = /* #__PURE__*/ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
function createDevToolsHook(hook) {
    return (payloads) => devtools && devtools.emit(hook, payloads);
}

const CoreWarnCodes = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    __EXTEND_POINT__: 7
};

/**
 * Fallback with simple implemenation
 *
 * @remarks
 * A fallback locale function implemented with a simple fallback algorithm.
 *
 * Basically, it returns the value as specified in the `fallbackLocale` props, and is processed with the fallback inside intlify.
 *
 * @param ctx - A {@link CoreContext | context}
 * @param fallback - A {@link FallbackLocale | fallback locale}
 * @param start - A starting {@link Locale | locale}
 *
 * @returns Fallback locales
 *
 * @VueI18nGeneral
 */
function fallbackWithSimple(ctx, fallback, start // eslint-disable-line @typescript-eslint/no-unused-vars
) {
    // prettier-ignore
    return [...new Set([
            start,
            ...(isArray$2(fallback)
                ? fallback
                : isObject$1(fallback)
                    ? Object.keys(fallback)
                    : isString$1(fallback)
                        ? [fallback]
                        : [start])
        ])];
}
/**
 * Fallback with locale chain
 *
 * @remarks
 * A fallback locale function implemented with a fallback chain algorithm. It's used in VueI18n as default.
 *
 * @param ctx - A {@link CoreContext | context}
 * @param fallback - A {@link FallbackLocale | fallback locale}
 * @param start - A starting {@link Locale | locale}
 *
 * @returns Fallback locales
 *
 * @VueI18nSee [Fallbacking](../guide/essentials/fallback)
 *
 * @VueI18nGeneral
 */
function fallbackWithLocaleChain(ctx, fallback, start) {
    const startLocale = isString$1(start) ? start : DEFAULT_LOCALE;
    const context = ctx;
    if (!context.__localeChainCache) {
        context.__localeChainCache = new Map();
    }
    let chain = context.__localeChainCache.get(startLocale);
    if (!chain) {
        chain = [];
        // first block defined by start
        let block = [start];
        // while any intervening block found
        while (isArray$2(block)) {
            block = appendBlockToChain(chain, block, fallback);
        }
        // prettier-ignore
        // last block defined by default
        const defaults = isArray$2(fallback) || !isPlainObject$2(fallback)
            ? fallback
            : fallback['default']
                ? fallback['default']
                : null;
        // convert defaults to array
        block = isString$1(defaults) ? [defaults] : defaults;
        if (isArray$2(block)) {
            appendBlockToChain(chain, block, false);
        }
        context.__localeChainCache.set(startLocale, chain);
    }
    return chain;
}
function appendBlockToChain(chain, block, blocks) {
    let follow = true;
    for (let i = 0; i < block.length && isBoolean(follow); i++) {
        const locale = block[i];
        if (isString$1(locale)) {
            follow = appendLocaleToChain(chain, block[i], blocks);
        }
    }
    return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
    let follow;
    const tokens = locale.split('-');
    do {
        const target = tokens.join('-');
        follow = appendItemToChain(chain, target, blocks);
        tokens.splice(-1, 1);
    } while (tokens.length && follow === true);
    return follow;
}
function appendItemToChain(chain, target, blocks) {
    let follow = false;
    if (!chain.includes(target)) {
        follow = true;
        if (target) {
            follow = target[target.length - 1] !== '!';
            const locale = target.replace(/!/g, '');
            chain.push(locale);
            if ((isArray$2(blocks) || isPlainObject$2(blocks)) &&
                blocks[locale] // eslint-disable-line @typescript-eslint/no-explicit-any
            ) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                follow = blocks[locale];
            }
        }
    }
    return follow;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Intlify core-base version
 * @internal
 */
const VERSION$1 = '9.2.2';
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = 'en-US';
const MISSING_RESOLVE_VALUE = '';
const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
    return {
        upper: (val, type) => {
            // prettier-ignore
            return type === 'text' && isString$1(val)
                ? val.toUpperCase()
                : type === 'vnode' && isObject$1(val) && '__v_isVNode' in val
                    ? val.children.toUpperCase()
                    : val;
        },
        lower: (val, type) => {
            // prettier-ignore
            return type === 'text' && isString$1(val)
                ? val.toLowerCase()
                : type === 'vnode' && isObject$1(val) && '__v_isVNode' in val
                    ? val.children.toLowerCase()
                    : val;
        },
        capitalize: (val, type) => {
            // prettier-ignore
            return (type === 'text' && isString$1(val)
                ? capitalize(val)
                : type === 'vnode' && isObject$1(val) && '__v_isVNode' in val
                    ? capitalize(val.children)
                    : val);
        }
    };
}
let _compiler;
function registerMessageCompiler(compiler) {
    _compiler = compiler;
}
let _resolver;
/**
 * Register the message resolver
 *
 * @param resolver - A {@link MessageResolver} function
 *
 * @VueI18nGeneral
 */
function registerMessageResolver(resolver) {
    _resolver = resolver;
}
let _fallbacker;
/**
 * Register the locale fallbacker
 *
 * @param fallbacker - A {@link LocaleFallbacker} function
 *
 * @VueI18nGeneral
 */
function registerLocaleFallbacker(fallbacker) {
    _fallbacker = fallbacker;
}
// Additional Meta for Intlify DevTools
let _additionalMeta = null;
const setAdditionalMeta =  (meta) => {
    _additionalMeta = meta;
};
const getAdditionalMeta =  () => _additionalMeta;
let _fallbackContext = null;
const setFallbackContext = (context) => {
    _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
// ID for CoreContext
let _cid = 0;
function createCoreContext(options = {}) {
    // setup options
    const version = isString$1(options.version) ? options.version : VERSION$1;
    const locale = isString$1(options.locale) ? options.locale : DEFAULT_LOCALE;
    const fallbackLocale = isArray$2(options.fallbackLocale) ||
        isPlainObject$2(options.fallbackLocale) ||
        isString$1(options.fallbackLocale) ||
        options.fallbackLocale === false
        ? options.fallbackLocale
        : locale;
    const messages = isPlainObject$2(options.messages)
        ? options.messages
        : { [locale]: {} };
    const datetimeFormats = isPlainObject$2(options.datetimeFormats)
            ? options.datetimeFormats
            : { [locale]: {} }
        ;
    const numberFormats = isPlainObject$2(options.numberFormats)
            ? options.numberFormats
            : { [locale]: {} }
        ;
    const modifiers = assign$2({}, options.modifiers || {}, getDefaultLinkedModifiers());
    const pluralRules = options.pluralRules || {};
    const missing = isFunction$1(options.missing) ? options.missing : null;
    const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn)
        ? options.missingWarn
        : true;
    const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn)
        ? options.fallbackWarn
        : true;
    const fallbackFormat = !!options.fallbackFormat;
    const unresolving = !!options.unresolving;
    const postTranslation = isFunction$1(options.postTranslation)
        ? options.postTranslation
        : null;
    const processor = isPlainObject$2(options.processor) ? options.processor : null;
    const warnHtmlMessage = isBoolean(options.warnHtmlMessage)
        ? options.warnHtmlMessage
        : true;
    const escapeParameter = !!options.escapeParameter;
    const messageCompiler = isFunction$1(options.messageCompiler)
        ? options.messageCompiler
        : _compiler;
    const messageResolver = isFunction$1(options.messageResolver)
        ? options.messageResolver
        : _resolver || resolveWithKeyValue;
    const localeFallbacker = isFunction$1(options.localeFallbacker)
        ? options.localeFallbacker
        : _fallbacker || fallbackWithSimple;
    const fallbackContext = isObject$1(options.fallbackContext)
        ? options.fallbackContext
        : undefined;
    const onWarn = isFunction$1(options.onWarn) ? options.onWarn : warn;
    // setup internal options
    const internalOptions = options;
    const __datetimeFormatters = isObject$1(internalOptions.__datetimeFormatters)
            ? internalOptions.__datetimeFormatters
            : new Map()
        ;
    const __numberFormatters = isObject$1(internalOptions.__numberFormatters)
            ? internalOptions.__numberFormatters
            : new Map()
        ;
    const __meta = isObject$1(internalOptions.__meta) ? internalOptions.__meta : {};
    _cid++;
    const context = {
        version,
        cid: _cid,
        locale,
        fallbackLocale,
        messages,
        modifiers,
        pluralRules,
        missing,
        missingWarn,
        fallbackWarn,
        fallbackFormat,
        unresolving,
        postTranslation,
        processor,
        warnHtmlMessage,
        escapeParameter,
        messageCompiler,
        messageResolver,
        localeFallbacker,
        fallbackContext,
        onWarn,
        __meta
    };
    {
        context.datetimeFormats = datetimeFormats;
        context.numberFormats = numberFormats;
        context.__datetimeFormatters = __datetimeFormatters;
        context.__numberFormatters = __numberFormatters;
    }
    // NOTE: experimental !!
    if (__INTLIFY_PROD_DEVTOOLS__) {
        initI18nDevTools(context, version, __meta);
    }
    return context;
}
/** @internal */
function handleMissing(context, key, locale, missingWarn, type) {
    const { missing, onWarn } = context;
    if (missing !== null) {
        const ret = missing(context, locale, key, type);
        return isString$1(ret) ? ret : key;
    }
    else {
        return key;
    }
}
/** @internal */
function updateFallbackLocale(ctx, locale, fallback) {
    const context = ctx;
    context.__localeChainCache = new Map();
    ctx.localeFallbacker(ctx, fallback, locale);
}
const defaultOnCacheKey = (source) => source;
let compileCache = Object.create(null);
function compileToFunction(source, options = {}) {
    {
        // check caches
        const onCacheKey = options.onCacheKey || defaultOnCacheKey;
        const key = onCacheKey(source);
        const cached = compileCache[key];
        if (cached) {
            return cached;
        }
        // compile error detecting
        let occurred = false;
        const onError = options.onError || defaultOnError;
        options.onError = (err) => {
            occurred = true;
            onError(err);
        };
        // compile
        const { code } = baseCompile(source, options);
        // evaluate function
        const msg = new Function(`return ${code}`)();
        // if occurred compile error, don't cache
        return !occurred ? (compileCache[key] = msg) : msg;
    }
}

let code$1 = CompileErrorCodes.__EXTEND_POINT__;
const inc$1 = () => ++code$1;
const CoreErrorCodes = {
    INVALID_ARGUMENT: code$1,
    INVALID_DATE_ARGUMENT: inc$1(),
    INVALID_ISO_DATE_ARGUMENT: inc$1(),
    __EXTEND_POINT__: inc$1() // 18
};
function createCoreError(code) {
    return createCompileError(code, null, undefined);
}

const NOOP_MESSAGE_FUNCTION = () => '';
const isMessageFunction = (val) => isFunction$1(val);
// implementation of `translate` function
function translate(context, ...args) {
    const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
    const [key, options] = parseTranslateArgs(...args);
    const missingWarn = isBoolean(options.missingWarn)
        ? options.missingWarn
        : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn)
        ? options.fallbackWarn
        : context.fallbackWarn;
    const escapeParameter = isBoolean(options.escapeParameter)
        ? options.escapeParameter
        : context.escapeParameter;
    const resolvedMessage = !!options.resolvedMessage;
    // prettier-ignore
    const defaultMsgOrKey = isString$1(options.default) || isBoolean(options.default) // default by function option
        ? !isBoolean(options.default)
            ? options.default
            : (!messageCompiler ? () => key : key)
        : fallbackFormat // default by `fallbackFormat` option
            ? (!messageCompiler ? () => key : key)
            : '';
    const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== '';
    const locale = isString$1(options.locale) ? options.locale : context.locale;
    // escape params
    escapeParameter && escapeParams(options);
    // resolve message format
    // eslint-disable-next-line prefer-const
    let [formatScope, targetLocale, message] = !resolvedMessage
        ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn)
        : [
            key,
            locale,
            messages[locale] || {}
        ];
    // NOTE:
    //  Fix to work around `ssrTransfrom` bug in Vite.
    //  https://github.com/vitejs/vite/issues/4306
    //  To get around this, use temporary variables.
    //  https://github.com/nuxt/framework/issues/1461#issuecomment-954606243
    let format = formatScope;
    // if you use default message, set it as message format!
    let cacheBaseKey = key;
    if (!resolvedMessage &&
        !(isString$1(format) || isMessageFunction(format))) {
        if (enableDefaultMsg) {
            format = defaultMsgOrKey;
            cacheBaseKey = format;
        }
    }
    // checking message format and target locale
    if (!resolvedMessage &&
        (!(isString$1(format) || isMessageFunction(format)) ||
            !isString$1(targetLocale))) {
        return unresolving ? NOT_REOSLVED : key;
    }
    // setup compile error detecting
    let occurred = false;
    const errorDetector = () => {
        occurred = true;
    };
    // compile message format
    const msg = !isMessageFunction(format)
        ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector)
        : format;
    // if occurred compile error, return the message format
    if (occurred) {
        return format;
    }
    // evaluate message with context
    const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
    const msgContext = createMessageContext(ctxOptions);
    const messaged = evaluateMessage(context, msg, msgContext);
    // if use post translation option, proceed it with handler
    const ret = postTranslation
        ? postTranslation(messaged, key)
        : messaged;
    // NOTE: experimental !!
    if (__INTLIFY_PROD_DEVTOOLS__) {
        // prettier-ignore
        const payloads = {
            timestamp: Date.now(),
            key: isString$1(key)
                ? key
                : isMessageFunction(format)
                    ? format.key
                    : '',
            locale: targetLocale || (isMessageFunction(format)
                ? format.locale
                : ''),
            format: isString$1(format)
                ? format
                : isMessageFunction(format)
                    ? format.source
                    : '',
            message: ret
        };
        payloads.meta = assign$2({}, context.__meta, getAdditionalMeta() || {});
        translateDevTools(payloads);
    }
    return ret;
}
function escapeParams(options) {
    if (isArray$2(options.list)) {
        options.list = options.list.map(item => isString$1(item) ? escapeHtml(item) : item);
    }
    else if (isObject$1(options.named)) {
        Object.keys(options.named).forEach(key => {
            if (isString$1(options.named[key])) {
                options.named[key] = escapeHtml(options.named[key]);
            }
        });
    }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
    const { messages, onWarn, messageResolver: resolveValue, localeFallbacker } = context;
    const locales = localeFallbacker(context, fallbackLocale, locale); // eslint-disable-line @typescript-eslint/no-explicit-any
    let message = {};
    let targetLocale;
    let format = null;
    const type = 'translate';
    for (let i = 0; i < locales.length; i++) {
        targetLocale = locales[i];
        message =
            messages[targetLocale] || {};
        if ((format = resolveValue(message, key)) === null) {
            // if null, resolve with object key path
            format = message[key]; // eslint-disable-line @typescript-eslint/no-explicit-any
        }
        if (isString$1(format) || isFunction$1(format))
            break;
        const missingRet = handleMissing(context, // eslint-disable-line @typescript-eslint/no-explicit-any
        key, targetLocale, missingWarn, type);
        if (missingRet !== key) {
            format = missingRet;
        }
    }
    return [format, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) {
    const { messageCompiler, warnHtmlMessage } = context;
    if (isMessageFunction(format)) {
        const msg = format;
        msg.locale = msg.locale || targetLocale;
        msg.key = msg.key || key;
        return msg;
    }
    if (messageCompiler == null) {
        const msg = (() => format);
        msg.locale = targetLocale;
        msg.key = key;
        return msg;
    }
    const msg = messageCompiler(format, getCompileOptions(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, errorDetector));
    msg.locale = targetLocale;
    msg.key = key;
    msg.source = format;
    return msg;
}
function evaluateMessage(context, msg, msgCtx) {
    const messaged = msg(msgCtx);
    return messaged;
}
/** @internal */
function parseTranslateArgs(...args) {
    const [arg1, arg2, arg3] = args;
    const options = {};
    if (!isString$1(arg1) && !isNumber$1(arg1) && !isMessageFunction(arg1)) {
        throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    // prettier-ignore
    const key = isNumber$1(arg1)
        ? String(arg1)
        : isMessageFunction(arg1)
            ? arg1
            : arg1;
    if (isNumber$1(arg2)) {
        options.plural = arg2;
    }
    else if (isString$1(arg2)) {
        options.default = arg2;
    }
    else if (isPlainObject$2(arg2) && !isEmptyObject(arg2)) {
        options.named = arg2;
    }
    else if (isArray$2(arg2)) {
        options.list = arg2;
    }
    if (isNumber$1(arg3)) {
        options.plural = arg3;
    }
    else if (isString$1(arg3)) {
        options.default = arg3;
    }
    else if (isPlainObject$2(arg3)) {
        assign$2(options, arg3);
    }
    return [key, options];
}
function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
    return {
        warnHtmlMessage,
        onError: (err) => {
            errorDetector && errorDetector(err);
            {
                throw err;
            }
        },
        onCacheKey: (source) => generateFormatCacheKey(locale, key, source)
    };
}
function getMessageContextOptions(context, locale, message, options) {
    const { modifiers, pluralRules, messageResolver: resolveValue, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
    const resolveMessage = (key) => {
        let val = resolveValue(message, key);
        // fallback to root context
        if (val == null && fallbackContext) {
            const [, , message] = resolveMessageFormat(fallbackContext, key, locale, fallbackLocale, fallbackWarn, missingWarn);
            val = resolveValue(message, key);
        }
        if (isString$1(val)) {
            let occurred = false;
            const errorDetector = () => {
                occurred = true;
            };
            const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
            return !occurred
                ? msg
                : NOOP_MESSAGE_FUNCTION;
        }
        else if (isMessageFunction(val)) {
            return val;
        }
        else {
            // TODO: should be implemented warning message
            return NOOP_MESSAGE_FUNCTION;
        }
    };
    const ctxOptions = {
        locale,
        modifiers,
        pluralRules,
        messages: resolveMessage
    };
    if (context.processor) {
        ctxOptions.processor = context.processor;
    }
    if (options.list) {
        ctxOptions.list = options.list;
    }
    if (options.named) {
        ctxOptions.named = options.named;
    }
    if (isNumber$1(options.plural)) {
        ctxOptions.pluralIndex = options.plural;
    }
    return ctxOptions;
}

// implementation of `datetime` function
function datetime(context, ...args) {
    const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
    const { __datetimeFormatters } = context;
    const [key, value, options, overrides] = parseDateTimeArgs(...args);
    const missingWarn = isBoolean(options.missingWarn)
        ? options.missingWarn
        : context.missingWarn;
    isBoolean(options.fallbackWarn)
        ? options.fallbackWarn
        : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString$1(options.locale) ? options.locale : context.locale;
    const locales = localeFallbacker(context, // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale, locale);
    if (!isString$1(key) || key === '') {
        return new Intl.DateTimeFormat(locale, overrides).format(value);
    }
    // resolve format
    let datetimeFormat = {};
    let targetLocale;
    let format = null;
    const type = 'datetime format';
    for (let i = 0; i < locales.length; i++) {
        targetLocale = locales[i];
        datetimeFormat =
            datetimeFormats[targetLocale] || {};
        format = datetimeFormat[key];
        if (isPlainObject$2(format))
            break;
        handleMissing(context, key, targetLocale, missingWarn, type); // eslint-disable-line @typescript-eslint/no-explicit-any
    }
    // checking format and target locale
    if (!isPlainObject$2(format) || !isString$1(targetLocale)) {
        return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
        id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __datetimeFormatters.get(id);
    if (!formatter) {
        formatter = new Intl.DateTimeFormat(targetLocale, assign$2({}, format, overrides));
        __datetimeFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
}
/** @internal */
const DATETIME_FORMAT_OPTIONS_KEYS = [
    'localeMatcher',
    'weekday',
    'era',
    'year',
    'month',
    'day',
    'hour',
    'minute',
    'second',
    'timeZoneName',
    'formatMatcher',
    'hour12',
    'timeZone',
    'dateStyle',
    'timeStyle',
    'calendar',
    'dayPeriod',
    'numberingSystem',
    'hourCycle',
    'fractionalSecondDigits'
];
/** @internal */
function parseDateTimeArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    const options = {};
    let overrides = {};
    let value;
    if (isString$1(arg1)) {
        // Only allow ISO strings - other date formats are often supported,
        // but may cause different results in different browsers.
        const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!matches) {
            throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
        }
        // Some browsers can not parse the iso datetime separated by space,
        // this is a compromise solution by replace the 'T'/' ' with 'T'
        const dateTime = matches[3]
            ? matches[3].trim().startsWith('T')
                ? `${matches[1].trim()}${matches[3].trim()}`
                : `${matches[1].trim()}T${matches[3].trim()}`
            : matches[1].trim();
        value = new Date(dateTime);
        try {
            // This will fail if the date is not valid
            value.toISOString();
        }
        catch (e) {
            throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
        }
    }
    else if (isDate$1(arg1)) {
        if (isNaN(arg1.getTime())) {
            throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
        }
        value = arg1;
    }
    else if (isNumber$1(arg1)) {
        value = arg1;
    }
    else {
        throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    if (isString$1(arg2)) {
        options.key = arg2;
    }
    else if (isPlainObject$2(arg2)) {
        Object.keys(arg2).forEach(key => {
            if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
                overrides[key] = arg2[key];
            }
            else {
                options[key] = arg2[key];
            }
        });
    }
    if (isString$1(arg3)) {
        options.locale = arg3;
    }
    else if (isPlainObject$2(arg3)) {
        overrides = arg3;
    }
    if (isPlainObject$2(arg4)) {
        overrides = arg4;
    }
    return [options.key || '', value, options, overrides];
}
/** @internal */
function clearDateTimeFormat(ctx, locale, format) {
    const context = ctx;
    for (const key in format) {
        const id = `${locale}__${key}`;
        if (!context.__datetimeFormatters.has(id)) {
            continue;
        }
        context.__datetimeFormatters.delete(id);
    }
}

// implementation of `number` function
function number(context, ...args) {
    const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
    const { __numberFormatters } = context;
    const [key, value, options, overrides] = parseNumberArgs(...args);
    const missingWarn = isBoolean(options.missingWarn)
        ? options.missingWarn
        : context.missingWarn;
    isBoolean(options.fallbackWarn)
        ? options.fallbackWarn
        : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString$1(options.locale) ? options.locale : context.locale;
    const locales = localeFallbacker(context, // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale, locale);
    if (!isString$1(key) || key === '') {
        return new Intl.NumberFormat(locale, overrides).format(value);
    }
    // resolve format
    let numberFormat = {};
    let targetLocale;
    let format = null;
    const type = 'number format';
    for (let i = 0; i < locales.length; i++) {
        targetLocale = locales[i];
        numberFormat =
            numberFormats[targetLocale] || {};
        format = numberFormat[key];
        if (isPlainObject$2(format))
            break;
        handleMissing(context, key, targetLocale, missingWarn, type); // eslint-disable-line @typescript-eslint/no-explicit-any
    }
    // checking format and target locale
    if (!isPlainObject$2(format) || !isString$1(targetLocale)) {
        return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
        id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __numberFormatters.get(id);
    if (!formatter) {
        formatter = new Intl.NumberFormat(targetLocale, assign$2({}, format, overrides));
        __numberFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
}
/** @internal */
const NUMBER_FORMAT_OPTIONS_KEYS = [
    'localeMatcher',
    'style',
    'currency',
    'currencyDisplay',
    'currencySign',
    'useGrouping',
    'minimumIntegerDigits',
    'minimumFractionDigits',
    'maximumFractionDigits',
    'minimumSignificantDigits',
    'maximumSignificantDigits',
    'compactDisplay',
    'notation',
    'signDisplay',
    'unit',
    'unitDisplay',
    'roundingMode',
    'roundingPriority',
    'roundingIncrement',
    'trailingZeroDisplay'
];
/** @internal */
function parseNumberArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    const options = {};
    let overrides = {};
    if (!isNumber$1(arg1)) {
        throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    const value = arg1;
    if (isString$1(arg2)) {
        options.key = arg2;
    }
    else if (isPlainObject$2(arg2)) {
        Object.keys(arg2).forEach(key => {
            if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
                overrides[key] = arg2[key];
            }
            else {
                options[key] = arg2[key];
            }
        });
    }
    if (isString$1(arg3)) {
        options.locale = arg3;
    }
    else if (isPlainObject$2(arg3)) {
        overrides = arg3;
    }
    if (isPlainObject$2(arg4)) {
        overrides = arg4;
    }
    return [options.key || '', value, options, overrides];
}
/** @internal */
function clearNumberFormat(ctx, locale, format) {
    const context = ctx;
    for (const key in format) {
        const id = `${locale}__${key}`;
        if (!context.__numberFormatters.has(id)) {
            continue;
        }
        context.__numberFormatters.delete(id);
    }
}

// TODO: we could not exports for Node native ES Moudles yet...
{
    if (typeof __INTLIFY_PROD_DEVTOOLS__ !== 'boolean') {
        getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
    }
}

/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */

/**
 * Vue I18n Version
 *
 * @remarks
 * Semver format. Same format as the package.json `version` field.
 *
 * @VueI18nGeneral
 */
const VERSION = '9.2.2';
/**
 * This is only called in esm-bundler builds.
 * istanbul-ignore-next
 */
function initFeatureFlags() {
    if (typeof __VUE_I18N_FULL_INSTALL__ !== 'boolean') {
        getGlobalThis().__VUE_I18N_FULL_INSTALL__ = true;
    }
    if (typeof __VUE_I18N_LEGACY_API__ !== 'boolean') {
        getGlobalThis().__VUE_I18N_LEGACY_API__ = true;
    }
    if (typeof __INTLIFY_PROD_DEVTOOLS__ !== 'boolean') {
        getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
    }
}

CoreWarnCodes.__EXTEND_POINT__;

let code = CompileErrorCodes.__EXTEND_POINT__;
const inc = () => ++code;
const I18nErrorCodes = {
    // composer module errors
    UNEXPECTED_RETURN_TYPE: code,
    // legacy module errors
    INVALID_ARGUMENT: inc(),
    // i18n module errors
    MUST_BE_CALL_SETUP_TOP: inc(),
    NOT_INSLALLED: inc(),
    NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
    // directive module errors
    REQUIRED_VALUE: inc(),
    INVALID_VALUE: inc(),
    // vue-devtools errors
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
    NOT_INSLALLED_WITH_PROVIDE: inc(),
    // unexpected error
    UNEXPECTED_ERROR: inc(),
    // not compatible legacy vue-i18n constructor
    NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
    // bridge support vue 2.x only
    BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
    // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
    // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
    // for enhancement
    __EXTEND_POINT__: inc() // 29
};
function createI18nError(code, ...args) {
    return createCompileError(code, null, undefined);
}

const TransrateVNodeSymbol = 
/* #__PURE__*/ makeSymbol('__transrateVNode');
const DatetimePartsSymbol = /* #__PURE__*/ makeSymbol('__datetimeParts');
const NumberPartsSymbol = /* #__PURE__*/ makeSymbol('__numberParts');
const SetPluralRulesSymbol = makeSymbol('__setPluralRules');
makeSymbol('__intlifyMeta');
const InejctWithOption = /* #__PURE__*/ makeSymbol('__injectWithOption');

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Transform flat json in obj to normal json in obj
 */
function handleFlatJson(obj) {
    // check obj
    if (!isObject$1(obj)) {
        return obj;
    }
    for (const key in obj) {
        // check key
        if (!hasOwn(obj, key)) {
            continue;
        }
        // handle for normal json
        if (!key.includes('.')) {
            // recursive process value if value is also a object
            if (isObject$1(obj[key])) {
                handleFlatJson(obj[key]);
            }
        }
        // handle for flat json, transform to normal json
        else {
            // go to the last object
            const subKeys = key.split('.');
            const lastIndex = subKeys.length - 1;
            let currentObj = obj;
            for (let i = 0; i < lastIndex; i++) {
                if (!(subKeys[i] in currentObj)) {
                    currentObj[subKeys[i]] = {};
                }
                currentObj = currentObj[subKeys[i]];
            }
            // update last object value, delete old property
            currentObj[subKeys[lastIndex]] = obj[key];
            delete obj[key];
            // recursive process value if value is also a object
            if (isObject$1(currentObj[subKeys[lastIndex]])) {
                handleFlatJson(currentObj[subKeys[lastIndex]]);
            }
        }
    }
    return obj;
}
function getLocaleMessages(locale, options) {
    const { messages, __i18n, messageResolver, flatJson } = options;
    // prettier-ignore
    const ret = isPlainObject$2(messages)
        ? messages
        : isArray$2(__i18n)
            ? {}
            : { [locale]: {} };
    // merge locale messages of i18n custom block
    if (isArray$2(__i18n)) {
        __i18n.forEach(custom => {
            if ('locale' in custom && 'resource' in custom) {
                const { locale, resource } = custom;
                if (locale) {
                    ret[locale] = ret[locale] || {};
                    deepCopy(resource, ret[locale]);
                }
                else {
                    deepCopy(resource, ret);
                }
            }
            else {
                isString$1(custom) && deepCopy(JSON.parse(custom), ret);
            }
        });
    }
    // handle messages for flat json
    if (messageResolver == null && flatJson) {
        for (const key in ret) {
            if (hasOwn(ret, key)) {
                handleFlatJson(ret[key]);
            }
        }
    }
    return ret;
}
const isNotObjectOrIsArray = (val) => !isObject$1(val) || isArray$2(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function deepCopy(src, des) {
    // src and des should both be objects, and non of then can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw createI18nError(I18nErrorCodes.INVALID_VALUE);
    }
    for (const key in src) {
        if (hasOwn(src, key)) {
            if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not a object, or
                // src[key] or des[key] is a array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both object, merge them
                deepCopy(src[key], des[key]);
            }
        }
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getComponentOptions(instance) {
    return instance.type ;
}
function adjustI18nResources(global, options, componentOptions // eslint-disable-line @typescript-eslint/no-explicit-any
) {
    let messages = isObject$1(options.messages) ? options.messages : {};
    if ('__i18nGlobal' in componentOptions) {
        messages = getLocaleMessages(global.locale.value, {
            messages,
            __i18n: componentOptions.__i18nGlobal
        });
    }
    // merge locale messages
    const locales = Object.keys(messages);
    if (locales.length) {
        locales.forEach(locale => {
            global.mergeLocaleMessage(locale, messages[locale]);
        });
    }
    {
        // merge datetime formats
        if (isObject$1(options.datetimeFormats)) {
            const locales = Object.keys(options.datetimeFormats);
            if (locales.length) {
                locales.forEach(locale => {
                    global.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
                });
            }
        }
        // merge number formats
        if (isObject$1(options.numberFormats)) {
            const locales = Object.keys(options.numberFormats);
            if (locales.length) {
                locales.forEach(locale => {
                    global.mergeNumberFormat(locale, options.numberFormats[locale]);
                });
            }
        }
    }
}
function createTextNode(key) {
    return createVNode(Text, null, key, 0)
        ;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */
// extend VNode interface
const DEVTOOLS_META = '__INTLIFY_META__';
let composerID = 0;
function defineCoreMissingHandler(missing) {
    return ((ctx, locale, key, type) => {
        return missing(locale, key, getCurrentInstance() || undefined, type);
    });
}
// for Intlify DevTools
const getMetaInfo =  () => {
    const instance = getCurrentInstance();
    let meta = null; // eslint-disable-line @typescript-eslint/no-explicit-any
    return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META])
        ? { [DEVTOOLS_META]: meta } // eslint-disable-line @typescript-eslint/no-explicit-any
        : null;
};
/**
 * Create composer interface factory
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createComposer(options = {}, VueI18nLegacy) {
    const { __root } = options;
    const _isGlobal = __root === undefined;
    let _inheritLocale = isBoolean(options.inheritLocale)
        ? options.inheritLocale
        : true;
    const _locale = ref(
    // prettier-ignore
    __root && _inheritLocale
        ? __root.locale.value
        : isString$1(options.locale)
            ? options.locale
            : DEFAULT_LOCALE);
    const _fallbackLocale = ref(
    // prettier-ignore
    __root && _inheritLocale
        ? __root.fallbackLocale.value
        : isString$1(options.fallbackLocale) ||
            isArray$2(options.fallbackLocale) ||
            isPlainObject$2(options.fallbackLocale) ||
            options.fallbackLocale === false
            ? options.fallbackLocale
            : _locale.value);
    const _messages = ref(getLocaleMessages(_locale.value, options));
    // prettier-ignore
    const _datetimeFormats = ref(isPlainObject$2(options.datetimeFormats)
            ? options.datetimeFormats
            : { [_locale.value]: {} })
        ;
    // prettier-ignore
    const _numberFormats = ref(isPlainObject$2(options.numberFormats)
            ? options.numberFormats
            : { [_locale.value]: {} })
        ;
    // warning suppress options
    // prettier-ignore
    let _missingWarn = __root
        ? __root.missingWarn
        : isBoolean(options.missingWarn) || isRegExp(options.missingWarn)
            ? options.missingWarn
            : true;
    // prettier-ignore
    let _fallbackWarn = __root
        ? __root.fallbackWarn
        : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn)
            ? options.fallbackWarn
            : true;
    // prettier-ignore
    let _fallbackRoot = __root
        ? __root.fallbackRoot
        : isBoolean(options.fallbackRoot)
            ? options.fallbackRoot
            : true;
    // configure fall back to root
    let _fallbackFormat = !!options.fallbackFormat;
    // runtime missing
    let _missing = isFunction$1(options.missing) ? options.missing : null;
    let _runtimeMissing = isFunction$1(options.missing)
        ? defineCoreMissingHandler(options.missing)
        : null;
    // postTranslation handler
    let _postTranslation = isFunction$1(options.postTranslation)
        ? options.postTranslation
        : null;
    // prettier-ignore
    let _warnHtmlMessage = __root
        ? __root.warnHtmlMessage
        : isBoolean(options.warnHtmlMessage)
            ? options.warnHtmlMessage
            : true;
    let _escapeParameter = !!options.escapeParameter;
    // custom linked modifiers
    // prettier-ignore
    const _modifiers = __root
        ? __root.modifiers
        : isPlainObject$2(options.modifiers)
            ? options.modifiers
            : {};
    // pluralRules
    let _pluralRules = options.pluralRules || (__root && __root.pluralRules);
    // runtime context
    // eslint-disable-next-line prefer-const
    let _context;
    const getCoreContext = () => {
        _isGlobal && setFallbackContext(null);
        const ctxOptions = {
            version: VERSION,
            locale: _locale.value,
            fallbackLocale: _fallbackLocale.value,
            messages: _messages.value,
            modifiers: _modifiers,
            pluralRules: _pluralRules,
            missing: _runtimeMissing === null ? undefined : _runtimeMissing,
            missingWarn: _missingWarn,
            fallbackWarn: _fallbackWarn,
            fallbackFormat: _fallbackFormat,
            unresolving: true,
            postTranslation: _postTranslation === null ? undefined : _postTranslation,
            warnHtmlMessage: _warnHtmlMessage,
            escapeParameter: _escapeParameter,
            messageResolver: options.messageResolver,
            __meta: { framework: 'vue' }
        };
        {
            ctxOptions.datetimeFormats = _datetimeFormats.value;
            ctxOptions.numberFormats = _numberFormats.value;
            ctxOptions.__datetimeFormatters = isPlainObject$2(_context)
                ? _context.__datetimeFormatters
                : undefined;
            ctxOptions.__numberFormatters = isPlainObject$2(_context)
                ? _context.__numberFormatters
                : undefined;
        }
        const ctx = createCoreContext(ctxOptions);
        _isGlobal && setFallbackContext(ctx);
        return ctx;
    };
    _context = getCoreContext();
    updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
    // track reactivity
    function trackReactivityValues() {
        return [
                _locale.value,
                _fallbackLocale.value,
                _messages.value,
                _datetimeFormats.value,
                _numberFormats.value
            ]
            ;
    }
    // locale
    const locale = computed({
        get: () => _locale.value,
        set: val => {
            _locale.value = val;
            _context.locale = _locale.value;
        }
    });
    // fallbackLocale
    const fallbackLocale = computed({
        get: () => _fallbackLocale.value,
        set: val => {
            _fallbackLocale.value = val;
            _context.fallbackLocale = _fallbackLocale.value;
            updateFallbackLocale(_context, _locale.value, val);
        }
    });
    // messages
    const messages = computed(() => _messages.value);
    // datetimeFormats
    const datetimeFormats = /* #__PURE__*/ computed(() => _datetimeFormats.value);
    // numberFormats
    const numberFormats = /* #__PURE__*/ computed(() => _numberFormats.value);
    // getPostTranslationHandler
    function getPostTranslationHandler() {
        return isFunction$1(_postTranslation) ? _postTranslation : null;
    }
    // setPostTranslationHandler
    function setPostTranslationHandler(handler) {
        _postTranslation = handler;
        _context.postTranslation = handler;
    }
    // getMissingHandler
    function getMissingHandler() {
        return _missing;
    }
    // setMissingHandler
    function setMissingHandler(handler) {
        if (handler !== null) {
            _runtimeMissing = defineCoreMissingHandler(handler);
        }
        _missing = handler;
        _context.missing = _runtimeMissing;
    }
    const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
        trackReactivityValues(); // track reactive dependency
        // NOTE: experimental !!
        let ret;
        if (__INTLIFY_PROD_DEVTOOLS__) {
            try {
                setAdditionalMeta(getMetaInfo());
                if (!_isGlobal) {
                    _context.fallbackContext = __root
                        ? getFallbackContext()
                        : undefined;
                }
                ret = fn(_context);
            }
            finally {
                setAdditionalMeta(null);
                if (!_isGlobal) {
                    _context.fallbackContext = undefined;
                }
            }
        }
        else {
            ret = fn(_context);
        }
        if (isNumber$1(ret) && ret === NOT_REOSLVED) {
            const [key, arg2] = argumentParser();
            return __root && _fallbackRoot
                ? fallbackSuccess(__root)
                : fallbackFail(key);
        }
        else if (successCondition(ret)) {
            return ret;
        }
        else {
            /* istanbul ignore next */
            throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
        }
    };
    // t
    function t(...args) {
        return wrapWithDeps(context => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), 'translate', root => Reflect.apply(root.t, root, [...args]), key => key, val => isString$1(val));
    }
    // rt
    function rt(...args) {
        const [arg1, arg2, arg3] = args;
        if (arg3 && !isObject$1(arg3)) {
            throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        return t(...[arg1, arg2, assign$2({ resolvedMessage: true }, arg3 || {})]);
    }
    // d
    function d(...args) {
        return wrapWithDeps(context => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), 'datetime format', root => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, val => isString$1(val));
    }
    // n
    function n(...args) {
        return wrapWithDeps(context => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), 'number format', root => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, val => isString$1(val));
    }
    // for custom processor
    function normalize(values) {
        return values.map(val => isString$1(val) || isNumber$1(val) || isBoolean(val)
            ? createTextNode(String(val))
            : val);
    }
    const interpolate = (val) => val;
    const processor = {
        normalize,
        interpolate,
        type: 'vnode'
    };
    // transrateVNode, using for `i18n-t` component
    function transrateVNode(...args) {
        return wrapWithDeps(context => {
            let ret;
            const _context = context;
            try {
                _context.processor = processor;
                ret = Reflect.apply(translate, null, [_context, ...args]);
            }
            finally {
                _context.processor = null;
            }
            return ret;
        }, () => parseTranslateArgs(...args), 'translate', 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        root => root[TransrateVNodeSymbol](...args), key => [createTextNode(key)], val => isArray$2(val));
    }
    // numberParts, using for `i18n-n` component
    function numberParts(...args) {
        return wrapWithDeps(context => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), 'number format', 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        root => root[NumberPartsSymbol](...args), () => [], val => isString$1(val) || isArray$2(val));
    }
    // datetimeParts, using for `i18n-d` component
    function datetimeParts(...args) {
        return wrapWithDeps(context => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), 'datetime format', 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        root => root[DatetimePartsSymbol](...args), () => [], val => isString$1(val) || isArray$2(val));
    }
    function setPluralRules(rules) {
        _pluralRules = rules;
        _context.pluralRules = _pluralRules;
    }
    // te
    function te(key, locale) {
        const targetLocale = isString$1(locale) ? locale : _locale.value;
        const message = getLocaleMessage(targetLocale);
        return _context.messageResolver(message, key) !== null;
    }
    function resolveMessages(key) {
        let messages = null;
        const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
        for (let i = 0; i < locales.length; i++) {
            const targetLocaleMessages = _messages.value[locales[i]] || {};
            const messageValue = _context.messageResolver(targetLocaleMessages, key);
            if (messageValue != null) {
                messages = messageValue;
                break;
            }
        }
        return messages;
    }
    // tm
    function tm(key) {
        const messages = resolveMessages(key);
        // prettier-ignore
        return messages != null
            ? messages
            : __root
                ? __root.tm(key) || {}
                : {};
    }
    // getLocaleMessage
    function getLocaleMessage(locale) {
        return (_messages.value[locale] || {});
    }
    // setLocaleMessage
    function setLocaleMessage(locale, message) {
        _messages.value[locale] = message;
        _context.messages = _messages.value;
    }
    // mergeLocaleMessage
    function mergeLocaleMessage(locale, message) {
        _messages.value[locale] = _messages.value[locale] || {};
        deepCopy(message, _messages.value[locale]);
        _context.messages = _messages.value;
    }
    // getDateTimeFormat
    function getDateTimeFormat(locale) {
        return _datetimeFormats.value[locale] || {};
    }
    // setDateTimeFormat
    function setDateTimeFormat(locale, format) {
        _datetimeFormats.value[locale] = format;
        _context.datetimeFormats = _datetimeFormats.value;
        clearDateTimeFormat(_context, locale, format);
    }
    // mergeDateTimeFormat
    function mergeDateTimeFormat(locale, format) {
        _datetimeFormats.value[locale] = assign$2(_datetimeFormats.value[locale] || {}, format);
        _context.datetimeFormats = _datetimeFormats.value;
        clearDateTimeFormat(_context, locale, format);
    }
    // getNumberFormat
    function getNumberFormat(locale) {
        return _numberFormats.value[locale] || {};
    }
    // setNumberFormat
    function setNumberFormat(locale, format) {
        _numberFormats.value[locale] = format;
        _context.numberFormats = _numberFormats.value;
        clearNumberFormat(_context, locale, format);
    }
    // mergeNumberFormat
    function mergeNumberFormat(locale, format) {
        _numberFormats.value[locale] = assign$2(_numberFormats.value[locale] || {}, format);
        _context.numberFormats = _numberFormats.value;
        clearNumberFormat(_context, locale, format);
    }
    // for debug
    composerID++;
    // watch root locale & fallbackLocale
    if (__root && inBrowser) {
        watch(__root.locale, (val) => {
            if (_inheritLocale) {
                _locale.value = val;
                _context.locale = val;
                updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
            }
        });
        watch(__root.fallbackLocale, (val) => {
            if (_inheritLocale) {
                _fallbackLocale.value = val;
                _context.fallbackLocale = val;
                updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
            }
        });
    }
    // define basic composition API!
    const composer = {
        id: composerID,
        locale,
        fallbackLocale,
        get inheritLocale() {
            return _inheritLocale;
        },
        set inheritLocale(val) {
            _inheritLocale = val;
            if (val && __root) {
                _locale.value = __root.locale.value;
                _fallbackLocale.value = __root.fallbackLocale.value;
                updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
            }
        },
        get availableLocales() {
            return Object.keys(_messages.value).sort();
        },
        messages,
        get modifiers() {
            return _modifiers;
        },
        get pluralRules() {
            return _pluralRules || {};
        },
        get isGlobal() {
            return _isGlobal;
        },
        get missingWarn() {
            return _missingWarn;
        },
        set missingWarn(val) {
            _missingWarn = val;
            _context.missingWarn = _missingWarn;
        },
        get fallbackWarn() {
            return _fallbackWarn;
        },
        set fallbackWarn(val) {
            _fallbackWarn = val;
            _context.fallbackWarn = _fallbackWarn;
        },
        get fallbackRoot() {
            return _fallbackRoot;
        },
        set fallbackRoot(val) {
            _fallbackRoot = val;
        },
        get fallbackFormat() {
            return _fallbackFormat;
        },
        set fallbackFormat(val) {
            _fallbackFormat = val;
            _context.fallbackFormat = _fallbackFormat;
        },
        get warnHtmlMessage() {
            return _warnHtmlMessage;
        },
        set warnHtmlMessage(val) {
            _warnHtmlMessage = val;
            _context.warnHtmlMessage = val;
        },
        get escapeParameter() {
            return _escapeParameter;
        },
        set escapeParameter(val) {
            _escapeParameter = val;
            _context.escapeParameter = val;
        },
        t,
        getLocaleMessage,
        setLocaleMessage,
        mergeLocaleMessage,
        getPostTranslationHandler,
        setPostTranslationHandler,
        getMissingHandler,
        setMissingHandler,
        [SetPluralRulesSymbol]: setPluralRules
    };
    {
        composer.datetimeFormats = datetimeFormats;
        composer.numberFormats = numberFormats;
        composer.rt = rt;
        composer.te = te;
        composer.tm = tm;
        composer.d = d;
        composer.n = n;
        composer.getDateTimeFormat = getDateTimeFormat;
        composer.setDateTimeFormat = setDateTimeFormat;
        composer.mergeDateTimeFormat = mergeDateTimeFormat;
        composer.getNumberFormat = getNumberFormat;
        composer.setNumberFormat = setNumberFormat;
        composer.mergeNumberFormat = mergeNumberFormat;
        composer[InejctWithOption] = options.__injectWithOption;
        composer[TransrateVNodeSymbol] = transrateVNode;
        composer[DatetimePartsSymbol] = datetimeParts;
        composer[NumberPartsSymbol] = numberParts;
    }
    return composer;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Convert to I18n Composer Options from VueI18n Options
 *
 * @internal
 */
function convertComposerOptions(options) {
    const locale = isString$1(options.locale) ? options.locale : DEFAULT_LOCALE;
    const fallbackLocale = isString$1(options.fallbackLocale) ||
        isArray$2(options.fallbackLocale) ||
        isPlainObject$2(options.fallbackLocale) ||
        options.fallbackLocale === false
        ? options.fallbackLocale
        : locale;
    const missing = isFunction$1(options.missing) ? options.missing : undefined;
    const missingWarn = isBoolean(options.silentTranslationWarn) ||
        isRegExp(options.silentTranslationWarn)
        ? !options.silentTranslationWarn
        : true;
    const fallbackWarn = isBoolean(options.silentFallbackWarn) ||
        isRegExp(options.silentFallbackWarn)
        ? !options.silentFallbackWarn
        : true;
    const fallbackRoot = isBoolean(options.fallbackRoot)
        ? options.fallbackRoot
        : true;
    const fallbackFormat = !!options.formatFallbackMessages;
    const modifiers = isPlainObject$2(options.modifiers) ? options.modifiers : {};
    const pluralizationRules = options.pluralizationRules;
    const postTranslation = isFunction$1(options.postTranslation)
        ? options.postTranslation
        : undefined;
    const warnHtmlMessage = isString$1(options.warnHtmlInMessage)
        ? options.warnHtmlInMessage !== 'off'
        : true;
    const escapeParameter = !!options.escapeParameterHtml;
    const inheritLocale = isBoolean(options.sync) ? options.sync : true;
    let messages = options.messages;
    if (isPlainObject$2(options.sharedMessages)) {
        const sharedMessages = options.sharedMessages;
        const locales = Object.keys(sharedMessages);
        messages = locales.reduce((messages, locale) => {
            const message = messages[locale] || (messages[locale] = {});
            assign$2(message, sharedMessages[locale]);
            return messages;
        }, (messages || {}));
    }
    const { __i18n, __root, __injectWithOption } = options;
    const datetimeFormats = options.datetimeFormats;
    const numberFormats = options.numberFormats;
    const flatJson = options.flatJson;
    return {
        locale,
        fallbackLocale,
        messages,
        flatJson,
        datetimeFormats,
        numberFormats,
        missing,
        missingWarn,
        fallbackWarn,
        fallbackRoot,
        fallbackFormat,
        modifiers,
        pluralRules: pluralizationRules,
        postTranslation,
        warnHtmlMessage,
        escapeParameter,
        messageResolver: options.messageResolver,
        inheritLocale,
        __i18n,
        __root,
        __injectWithOption
    };
}
/**
 * create VueI18n interface factory
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createVueI18n(options = {}, VueI18nLegacy) {
    {
        const composer = createComposer(convertComposerOptions(options));
        // defines VueI18n
        const vueI18n = {
            // id
            id: composer.id,
            // locale
            get locale() {
                return composer.locale.value;
            },
            set locale(val) {
                composer.locale.value = val;
            },
            // fallbackLocale
            get fallbackLocale() {
                return composer.fallbackLocale.value;
            },
            set fallbackLocale(val) {
                composer.fallbackLocale.value = val;
            },
            // messages
            get messages() {
                return composer.messages.value;
            },
            // datetimeFormats
            get datetimeFormats() {
                return composer.datetimeFormats.value;
            },
            // numberFormats
            get numberFormats() {
                return composer.numberFormats.value;
            },
            // availableLocales
            get availableLocales() {
                return composer.availableLocales;
            },
            // formatter
            get formatter() {
                // dummy
                return {
                    interpolate() {
                        return [];
                    }
                };
            },
            set formatter(val) {
            },
            // missing
            get missing() {
                return composer.getMissingHandler();
            },
            set missing(handler) {
                composer.setMissingHandler(handler);
            },
            // silentTranslationWarn
            get silentTranslationWarn() {
                return isBoolean(composer.missingWarn)
                    ? !composer.missingWarn
                    : composer.missingWarn;
            },
            set silentTranslationWarn(val) {
                composer.missingWarn = isBoolean(val) ? !val : val;
            },
            // silentFallbackWarn
            get silentFallbackWarn() {
                return isBoolean(composer.fallbackWarn)
                    ? !composer.fallbackWarn
                    : composer.fallbackWarn;
            },
            set silentFallbackWarn(val) {
                composer.fallbackWarn = isBoolean(val) ? !val : val;
            },
            // modifiers
            get modifiers() {
                return composer.modifiers;
            },
            // formatFallbackMessages
            get formatFallbackMessages() {
                return composer.fallbackFormat;
            },
            set formatFallbackMessages(val) {
                composer.fallbackFormat = val;
            },
            // postTranslation
            get postTranslation() {
                return composer.getPostTranslationHandler();
            },
            set postTranslation(handler) {
                composer.setPostTranslationHandler(handler);
            },
            // sync
            get sync() {
                return composer.inheritLocale;
            },
            set sync(val) {
                composer.inheritLocale = val;
            },
            // warnInHtmlMessage
            get warnHtmlInMessage() {
                return composer.warnHtmlMessage ? 'warn' : 'off';
            },
            set warnHtmlInMessage(val) {
                composer.warnHtmlMessage = val !== 'off';
            },
            // escapeParameterHtml
            get escapeParameterHtml() {
                return composer.escapeParameter;
            },
            set escapeParameterHtml(val) {
                composer.escapeParameter = val;
            },
            // preserveDirectiveContent
            get preserveDirectiveContent() {
                return true;
            },
            set preserveDirectiveContent(val) {
            },
            // pluralizationRules
            get pluralizationRules() {
                return composer.pluralRules || {};
            },
            // for internal
            __composer: composer,
            // t
            t(...args) {
                const [arg1, arg2, arg3] = args;
                const options = {};
                let list = null;
                let named = null;
                if (!isString$1(arg1)) {
                    throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
                }
                const key = arg1;
                if (isString$1(arg2)) {
                    options.locale = arg2;
                }
                else if (isArray$2(arg2)) {
                    list = arg2;
                }
                else if (isPlainObject$2(arg2)) {
                    named = arg2;
                }
                if (isArray$2(arg3)) {
                    list = arg3;
                }
                else if (isPlainObject$2(arg3)) {
                    named = arg3;
                }
                // return composer.t(key, (list || named || {}) as any, options)
                return Reflect.apply(composer.t, composer, [
                    key,
                    (list || named || {}),
                    options
                ]);
            },
            rt(...args) {
                return Reflect.apply(composer.rt, composer, [...args]);
            },
            // tc
            tc(...args) {
                const [arg1, arg2, arg3] = args;
                const options = { plural: 1 };
                let list = null;
                let named = null;
                if (!isString$1(arg1)) {
                    throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
                }
                const key = arg1;
                if (isString$1(arg2)) {
                    options.locale = arg2;
                }
                else if (isNumber$1(arg2)) {
                    options.plural = arg2;
                }
                else if (isArray$2(arg2)) {
                    list = arg2;
                }
                else if (isPlainObject$2(arg2)) {
                    named = arg2;
                }
                if (isString$1(arg3)) {
                    options.locale = arg3;
                }
                else if (isArray$2(arg3)) {
                    list = arg3;
                }
                else if (isPlainObject$2(arg3)) {
                    named = arg3;
                }
                // return composer.t(key, (list || named || {}) as any, options)
                return Reflect.apply(composer.t, composer, [
                    key,
                    (list || named || {}),
                    options
                ]);
            },
            // te
            te(key, locale) {
                return composer.te(key, locale);
            },
            // tm
            tm(key) {
                return composer.tm(key);
            },
            // getLocaleMessage
            getLocaleMessage(locale) {
                return composer.getLocaleMessage(locale);
            },
            // setLocaleMessage
            setLocaleMessage(locale, message) {
                composer.setLocaleMessage(locale, message);
            },
            // mergeLocaleMessage
            mergeLocaleMessage(locale, message) {
                composer.mergeLocaleMessage(locale, message);
            },
            // d
            d(...args) {
                return Reflect.apply(composer.d, composer, [...args]);
            },
            // getDateTimeFormat
            getDateTimeFormat(locale) {
                return composer.getDateTimeFormat(locale);
            },
            // setDateTimeFormat
            setDateTimeFormat(locale, format) {
                composer.setDateTimeFormat(locale, format);
            },
            // mergeDateTimeFormat
            mergeDateTimeFormat(locale, format) {
                composer.mergeDateTimeFormat(locale, format);
            },
            // n
            n(...args) {
                return Reflect.apply(composer.n, composer, [...args]);
            },
            // getNumberFormat
            getNumberFormat(locale) {
                return composer.getNumberFormat(locale);
            },
            // setNumberFormat
            setNumberFormat(locale, format) {
                composer.setNumberFormat(locale, format);
            },
            // mergeNumberFormat
            mergeNumberFormat(locale, format) {
                composer.mergeNumberFormat(locale, format);
            },
            // getChoiceIndex
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            getChoiceIndex(choice, choicesLength) {
                return -1;
            },
            // for internal
            __onComponentInstanceCreated(target) {
                const { componentInstanceCreatedListener } = options;
                if (componentInstanceCreatedListener) {
                    componentInstanceCreatedListener(target, vueI18n);
                }
            }
        };
        return vueI18n;
    }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const baseFormatProps = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
        validator: (val /* ComponetI18nScope */) => val === 'parent' || val === 'global',
        default: 'parent' /* ComponetI18nScope */
    },
    i18n: {
        type: Object
    }
};

function getInterpolateArg(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
{ slots }, // SetupContext,
keys) {
    if (keys.length === 1 && keys[0] === 'default') {
        // default slot with list
        const ret = slots.default ? slots.default() : [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return ret.reduce((slot, current) => {
            return (slot = [
                ...slot,
                ...(isArray$2(current.children) ? current.children : [current])
            ]);
        }, []);
    }
    else {
        // named slots
        return keys.reduce((arg, key) => {
            const slot = slots[key];
            if (slot) {
                arg[key] = slot();
            }
            return arg;
        }, {});
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getFragmentableTag(tag) {
    return Fragment ;
}

/**
 * Translation Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [TranslationProps](component#translationprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Component Interpolation](../guide/advanced/component)
 *
 * @example
 * ```html
 * <div id="app">
 *   <!-- ... -->
 *   <i18n path="term" tag="label" for="tos">
 *     <a :href="url" target="_blank">{{ $t('tos') }}</a>
 *   </i18n>
 *   <!-- ... -->
 * </div>
 * ```
 * ```js
 * import { createApp } from 'vue'
 * import { createI18n } from 'vue-i18n'
 *
 * const messages = {
 *   en: {
 *     tos: 'Term of Service',
 *     term: 'I accept xxx {0}.'
 *   },
 *   ja: {
 *     tos: '利用規約',
 *     term: '私は xxx の{0}に同意します。'
 *   }
 * }
 *
 * const i18n = createI18n({
 *   locale: 'en',
 *   messages
 * })
 *
 * const app = createApp({
 *   data: {
 *     url: '/term'
 *   }
 * }).use(i18n).mount('#app')
 * ```
 *
 * @VueI18nComponent
 */
const Translation =  /* defineComponent */ {
    /* eslint-disable */
    name: 'i18n-t',
    props: assign$2({
        keypath: {
            type: String,
            required: true
        },
        plural: {
            type: [Number, String],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            validator: (val) => isNumber$1(val) || !isNaN(val)
        }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
        const { slots, attrs } = context;
        // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
        const i18n = props.i18n ||
            useI18n({
                useScope: props.scope,
                __useComponent: true
            });
        return () => {
            const keys = Object.keys(slots).filter(key => key !== '_');
            const options = {};
            if (props.locale) {
                options.locale = props.locale;
            }
            if (props.plural !== undefined) {
                options.plural = isString$1(props.plural) ? +props.plural : props.plural;
            }
            const arg = getInterpolateArg(context, keys);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const children = i18n[TransrateVNodeSymbol](props.keypath, arg, options);
            const assignedAttrs = assign$2({}, attrs);
            const tag = isString$1(props.tag) || isObject$1(props.tag)
                ? props.tag
                : getFragmentableTag();
            return h(tag, assignedAttrs, children);
        };
    }
};

function isVNode(target) {
    return isArray$2(target) && !isString$1(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
    const { slots, attrs } = context;
    return () => {
        const options = { part: true };
        let overrides = {};
        if (props.locale) {
            options.locale = props.locale;
        }
        if (isString$1(props.format)) {
            options.key = props.format;
        }
        else if (isObject$1(props.format)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (isString$1(props.format.key)) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                options.key = props.format.key;
            }
            // Filter out number format options only
            overrides = Object.keys(props.format).reduce((options, prop) => {
                return slotKeys.includes(prop)
                    ? assign$2({}, options, { [prop]: props.format[prop] }) // eslint-disable-line @typescript-eslint/no-explicit-any
                    : options;
            }, {});
        }
        const parts = partFormatter(...[props.value, options, overrides]);
        let children = [options.key];
        if (isArray$2(parts)) {
            children = parts.map((part, index) => {
                const slot = slots[part.type];
                const node = slot
                    ? slot({ [part.type]: part.value, index, parts })
                    : [part.value];
                if (isVNode(node)) {
                    node[0].key = `${part.type}-${index}`;
                }
                return node;
            });
        }
        else if (isString$1(parts)) {
            children = [parts];
        }
        const assignedAttrs = assign$2({}, attrs);
        const tag = isString$1(props.tag) || isObject$1(props.tag)
            ? props.tag
            : getFragmentableTag();
        return h(tag, assignedAttrs, children);
    };
}

/**
 * Number Format Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [FormattableProps](component#formattableprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Custom Formatting](../guide/essentials/number#custom-formatting)
 *
 * @VueI18nDanger
 * Not supported IE, due to no support `Intl.NumberFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts)
 *
 * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-numberformat)
 *
 * @VueI18nComponent
 */
const NumberFormat =  /* defineComponent */ {
    /* eslint-disable */
    name: 'i18n-n',
    props: assign$2({
        value: {
            type: Number,
            required: true
        },
        format: {
            type: [String, Object]
        }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
        const i18n = props.i18n ||
            useI18n({ useScope: 'parent', __useComponent: true });
        return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n[NumberPartsSymbol](...args));
    }
};

/**
 * Datetime Format Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [FormattableProps](component#formattableprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Custom Formatting](../guide/essentials/datetime#custom-formatting)
 *
 * @VueI18nDanger
 * Not supported IE, due to no support `Intl.DateTimeFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts)
 *
 * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-datetimeformat)
 *
 * @VueI18nComponent
 */
const DatetimeFormat =  /*defineComponent */ {
    /* eslint-disable */
    name: 'i18n-d',
    props: assign$2({
        value: {
            type: [Number, Date],
            required: true
        },
        format: {
            type: [String, Object]
        }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
        const i18n = props.i18n ||
            useI18n({ useScope: 'parent', __useComponent: true });
        return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n[DatetimePartsSymbol](...args));
    }
};

function getComposer$2(i18n, instance) {
    const i18nInternal = i18n;
    if (i18n.mode === 'composition') {
        return (i18nInternal.__getInstance(instance) || i18n.global);
    }
    else {
        const vueI18n = i18nInternal.__getInstance(instance);
        return vueI18n != null
            ? vueI18n.__composer
            : i18n.global.__composer;
    }
}
function vTDirective(i18n) {
    const _process = (binding) => {
        const { instance, modifiers, value } = binding;
        /* istanbul ignore if */
        if (!instance || !instance.$) {
            throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        const composer = getComposer$2(i18n, instance.$);
        const parsedValue = parseValue(value);
        return [
            Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
            composer
        ];
    };
    const register = (el, binding) => {
        const [textContent, composer] = _process(binding);
        if (inBrowser && i18n.global === composer) {
            // global scope only
            el.__i18nWatcher = watch(composer.locale, () => {
                binding.instance && binding.instance.$forceUpdate();
            });
        }
        el.__composer = composer;
        el.textContent = textContent;
    };
    const unregister = (el) => {
        if (inBrowser && el.__i18nWatcher) {
            el.__i18nWatcher();
            el.__i18nWatcher = undefined;
            delete el.__i18nWatcher;
        }
        if (el.__composer) {
            el.__composer = undefined;
            delete el.__composer;
        }
    };
    const update = (el, { value }) => {
        if (el.__composer) {
            const composer = el.__composer;
            const parsedValue = parseValue(value);
            el.textContent = Reflect.apply(composer.t, composer, [
                ...makeParams(parsedValue)
            ]);
        }
    };
    const getSSRProps = (binding) => {
        const [textContent] = _process(binding);
        return { textContent };
    };
    return {
        created: register,
        unmounted: unregister,
        beforeUpdate: update,
        getSSRProps
    };
}
function parseValue(value) {
    if (isString$1(value)) {
        return { path: value };
    }
    else if (isPlainObject$2(value)) {
        if (!('path' in value)) {
            throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, 'path');
        }
        return value;
    }
    else {
        throw createI18nError(I18nErrorCodes.INVALID_VALUE);
    }
}
function makeParams(value) {
    const { path, locale, args, choice, plural } = value;
    const options = {};
    const named = args || {};
    if (isString$1(locale)) {
        options.locale = locale;
    }
    if (isNumber$1(choice)) {
        options.plural = choice;
    }
    if (isNumber$1(plural)) {
        options.plural = plural;
    }
    return [path, named, options];
}

function apply(app, i18n, ...options) {
    const pluginOptions = isPlainObject$2(options[0])
        ? options[0]
        : {};
    const useI18nComponentName = !!pluginOptions.useI18nComponentName;
    const globalInstall = isBoolean(pluginOptions.globalInstall)
        ? pluginOptions.globalInstall
        : true;
    if (globalInstall) {
        // install components
        app.component(!useI18nComponentName ? Translation.name : 'i18n', Translation);
        app.component(NumberFormat.name, NumberFormat);
        app.component(DatetimeFormat.name, DatetimeFormat);
    }
    // install directive
    {
        app.directive('t', vTDirective(i18n));
    }
}

/**
 * Supports compatibility for legacy vue-i18n APIs
 * This mixin is used when we use vue-i18n@v9.x or later
 */
function defineMixin(vuei18n, composer, i18n) {
    return {
        beforeCreate() {
            const instance = getCurrentInstance();
            /* istanbul ignore if */
            if (!instance) {
                throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
            }
            const options = this.$options;
            if (options.i18n) {
                const optionsI18n = options.i18n;
                if (options.__i18n) {
                    optionsI18n.__i18n = options.__i18n;
                }
                optionsI18n.__root = composer;
                if (this === this.$root) {
                    this.$i18n = mergeToRoot(vuei18n, optionsI18n);
                }
                else {
                    optionsI18n.__injectWithOption = true;
                    this.$i18n = createVueI18n(optionsI18n);
                }
            }
            else if (options.__i18n) {
                if (this === this.$root) {
                    this.$i18n = mergeToRoot(vuei18n, options);
                }
                else {
                    this.$i18n = createVueI18n({
                        __i18n: options.__i18n,
                        __injectWithOption: true,
                        __root: composer
                    });
                }
            }
            else {
                // set global
                this.$i18n = vuei18n;
            }
            if (options.__i18nGlobal) {
                adjustI18nResources(composer, options, options);
            }
            vuei18n.__onComponentInstanceCreated(this.$i18n);
            i18n.__setInstance(instance, this.$i18n);
            // defines vue-i18n legacy APIs
            this.$t = (...args) => this.$i18n.t(...args);
            this.$rt = (...args) => this.$i18n.rt(...args);
            this.$tc = (...args) => this.$i18n.tc(...args);
            this.$te = (key, locale) => this.$i18n.te(key, locale);
            this.$d = (...args) => this.$i18n.d(...args);
            this.$n = (...args) => this.$i18n.n(...args);
            this.$tm = (key) => this.$i18n.tm(key);
        },
        mounted() {
        },
        unmounted() {
            const instance = getCurrentInstance();
            /* istanbul ignore if */
            if (!instance) {
                throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
            }
            delete this.$t;
            delete this.$rt;
            delete this.$tc;
            delete this.$te;
            delete this.$d;
            delete this.$n;
            delete this.$tm;
            i18n.__deleteInstance(instance);
            delete this.$i18n;
        }
    };
}
function mergeToRoot(root, options) {
    root.locale = options.locale || root.locale;
    root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
    root.missing = options.missing || root.missing;
    root.silentTranslationWarn =
        options.silentTranslationWarn || root.silentFallbackWarn;
    root.silentFallbackWarn =
        options.silentFallbackWarn || root.silentFallbackWarn;
    root.formatFallbackMessages =
        options.formatFallbackMessages || root.formatFallbackMessages;
    root.postTranslation = options.postTranslation || root.postTranslation;
    root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
    root.escapeParameterHtml =
        options.escapeParameterHtml || root.escapeParameterHtml;
    root.sync = options.sync || root.sync;
    root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
    const messages = getLocaleMessages(root.locale, {
        messages: options.messages,
        __i18n: options.__i18n
    });
    Object.keys(messages).forEach(locale => root.mergeLocaleMessage(locale, messages[locale]));
    if (options.datetimeFormats) {
        Object.keys(options.datetimeFormats).forEach(locale => root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
    }
    if (options.numberFormats) {
        Object.keys(options.numberFormats).forEach(locale => root.mergeNumberFormat(locale, options.numberFormats[locale]));
    }
    return root;
}

/**
 * Injection key for {@link useI18n}
 *
 * @remarks
 * The global injection key for I18n instances with `useI18n`. this injection key is used in Web Components.
 * Specify the i18n instance created by {@link createI18n} together with `provide` function.
 *
 * @VueI18nGeneral
 */
const I18nInjectionKey = 
/* #__PURE__*/ makeSymbol('global-vue-i18n');
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function createI18n(options = {}, VueI18nLegacy) {
    // prettier-ignore
    const __legacyMode = __VUE_I18N_LEGACY_API__ && isBoolean(options.legacy)
            ? options.legacy
            : __VUE_I18N_LEGACY_API__;
    // prettier-ignore
    const __globalInjection = isBoolean(options.globalInjection)
        ? options.globalInjection
        : true;
    // prettier-ignore
    const __allowComposition = __VUE_I18N_LEGACY_API__ && __legacyMode
            ? !!options.allowComposition
            : true;
    const __instances = new Map();
    const [globalScope, __global] = createGlobal(options, __legacyMode);
    const symbol = makeSymbol('');
    function __getInstance(component) {
        return __instances.get(component) || null;
    }
    function __setInstance(component, instance) {
        __instances.set(component, instance);
    }
    function __deleteInstance(component) {
        __instances.delete(component);
    }
    {
        const i18n = {
            // mode
            get mode() {
                return __VUE_I18N_LEGACY_API__ && __legacyMode
                    ? 'legacy'
                    : 'composition';
            },
            // allowComposition
            get allowComposition() {
                return __allowComposition;
            },
            // install plugin
            async install(app, ...options) {
                // setup global provider
                app.__VUE_I18N_SYMBOL__ = symbol;
                app.provide(app.__VUE_I18N_SYMBOL__, i18n);
                // global method and properties injection for Composition API
                if (!__legacyMode && __globalInjection) {
                    injectGlobalFields(app, i18n.global);
                }
                // install built-in components and directive
                if (__VUE_I18N_FULL_INSTALL__) {
                    apply(app, i18n, ...options);
                }
                // setup mixin for Legacy API
                if (__VUE_I18N_LEGACY_API__ && __legacyMode) {
                    app.mixin(defineMixin(__global, __global.__composer, i18n));
                }
                // release global scope
                const unmountApp = app.unmount;
                app.unmount = () => {
                    i18n.dispose();
                    unmountApp();
                };
            },
            // global accessor
            get global() {
                return __global;
            },
            dispose() {
                globalScope.stop();
            },
            // @internal
            __instances,
            // @internal
            __getInstance,
            // @internal
            __setInstance,
            // @internal
            __deleteInstance
        };
        return i18n;
    }
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useI18n(options = {}) {
    const instance = getCurrentInstance();
    if (instance == null) {
        throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
    }
    if (!instance.isCE &&
        instance.appContext.app != null &&
        !instance.appContext.app.__VUE_I18N_SYMBOL__) {
        throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
    }
    const i18n = getI18nInstance(instance);
    const global = getGlobalComposer(i18n);
    const componentOptions = getComponentOptions(instance);
    const scope = getScope(options, componentOptions);
    if (__VUE_I18N_LEGACY_API__) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (i18n.mode === 'legacy' && !options.__useComponent) {
            if (!i18n.allowComposition) {
                throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE);
            }
            return useI18nForLegacy(instance, scope, global, options);
        }
    }
    if (scope === 'global') {
        adjustI18nResources(global, options, componentOptions);
        return global;
    }
    if (scope === 'parent') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let composer = getComposer(i18n, instance, options.__useComponent);
        if (composer == null) {
            composer = global;
        }
        return composer;
    }
    const i18nInternal = i18n;
    let composer = i18nInternal.__getInstance(instance);
    if (composer == null) {
        const composerOptions = assign$2({}, options);
        if ('__i18n' in componentOptions) {
            composerOptions.__i18n = componentOptions.__i18n;
        }
        if (global) {
            composerOptions.__root = global;
        }
        composer = createComposer(composerOptions);
        setupLifeCycle(i18nInternal, instance);
        i18nInternal.__setInstance(instance, composer);
    }
    return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy // eslint-disable-line @typescript-eslint/no-explicit-any
) {
    const scope = effectScope();
    {
        const obj = __VUE_I18N_LEGACY_API__ && legacyMode
            ? scope.run(() => createVueI18n(options))
            : scope.run(() => createComposer(options));
        if (obj == null) {
            throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        return [scope, obj];
    }
}
function getI18nInstance(instance) {
    {
        const i18n = inject(!instance.isCE
            ? instance.appContext.app.__VUE_I18N_SYMBOL__
            : I18nInjectionKey);
        /* istanbul ignore if */
        if (!i18n) {
            throw createI18nError(!instance.isCE
                ? I18nErrorCodes.UNEXPECTED_ERROR
                : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
        }
        return i18n;
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getScope(options, componentOptions) {
    // prettier-ignore
    return isEmptyObject(options)
        ? ('__i18n' in componentOptions)
            ? 'local'
            : 'global'
        : !options.useScope
            ? 'local'
            : options.useScope;
}
function getGlobalComposer(i18n) {
    // prettier-ignore
    return i18n.mode === 'composition'
            ? i18n.global
            : i18n.global.__composer
        ;
}
function getComposer(i18n, target, useComponent = false) {
    let composer = null;
    const root = target.root;
    let current = target.parent;
    while (current != null) {
        const i18nInternal = i18n;
        if (i18n.mode === 'composition') {
            composer = i18nInternal.__getInstance(current);
        }
        else {
            if (__VUE_I18N_LEGACY_API__) {
                const vueI18n = i18nInternal.__getInstance(current);
                if (vueI18n != null) {
                    composer = vueI18n
                        .__composer;
                    if (useComponent &&
                        composer &&
                        !composer[InejctWithOption] // eslint-disable-line @typescript-eslint/no-explicit-any
                    ) {
                        composer = null;
                    }
                }
            }
        }
        if (composer != null) {
            break;
        }
        if (root === current) {
            break;
        }
        current = current.parent;
    }
    return composer;
}
function setupLifeCycle(i18n, target, composer) {
    {
        onMounted(() => {
        }, target);
        onUnmounted(() => {
            i18n.__deleteInstance(target);
        }, target);
    }
}
function useI18nForLegacy(instance, scope, root, options = {} // eslint-disable-line @typescript-eslint/no-explicit-any
) {
    const isLocale = scope === 'local';
    const _composer = shallowRef(null);
    if (isLocale &&
        instance.proxy &&
        !(instance.proxy.$options.i18n || instance.proxy.$options.__i18n)) {
        throw createI18nError(I18nErrorCodes.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
    }
    const _inheritLocale = isBoolean(options.inheritLocale)
        ? options.inheritLocale
        : true;
    const _locale = ref(
    // prettier-ignore
    isLocale && _inheritLocale
        ? root.locale.value
        : isString$1(options.locale)
            ? options.locale
            : DEFAULT_LOCALE);
    const _fallbackLocale = ref(
    // prettier-ignore
    isLocale && _inheritLocale
        ? root.fallbackLocale.value
        : isString$1(options.fallbackLocale) ||
            isArray$2(options.fallbackLocale) ||
            isPlainObject$2(options.fallbackLocale) ||
            options.fallbackLocale === false
            ? options.fallbackLocale
            : _locale.value);
    const _messages = ref(getLocaleMessages(_locale.value, options));
    // prettier-ignore
    const _datetimeFormats = ref(isPlainObject$2(options.datetimeFormats)
        ? options.datetimeFormats
        : { [_locale.value]: {} });
    // prettier-ignore
    const _numberFormats = ref(isPlainObject$2(options.numberFormats)
        ? options.numberFormats
        : { [_locale.value]: {} });
    // prettier-ignore
    const _missingWarn = isLocale
        ? root.missingWarn
        : isBoolean(options.missingWarn) || isRegExp(options.missingWarn)
            ? options.missingWarn
            : true;
    // prettier-ignore
    const _fallbackWarn = isLocale
        ? root.fallbackWarn
        : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn)
            ? options.fallbackWarn
            : true;
    // prettier-ignore
    const _fallbackRoot = isLocale
        ? root.fallbackRoot
        : isBoolean(options.fallbackRoot)
            ? options.fallbackRoot
            : true;
    // configure fall back to root
    const _fallbackFormat = !!options.fallbackFormat;
    // runtime missing
    const _missing = isFunction$1(options.missing) ? options.missing : null;
    // postTranslation handler
    const _postTranslation = isFunction$1(options.postTranslation)
        ? options.postTranslation
        : null;
    // prettier-ignore
    const _warnHtmlMessage = isLocale
        ? root.warnHtmlMessage
        : isBoolean(options.warnHtmlMessage)
            ? options.warnHtmlMessage
            : true;
    const _escapeParameter = !!options.escapeParameter;
    // prettier-ignore
    const _modifiers = isLocale
        ? root.modifiers
        : isPlainObject$2(options.modifiers)
            ? options.modifiers
            : {};
    // pluralRules
    const _pluralRules = options.pluralRules || (isLocale && root.pluralRules);
    // track reactivity
    function trackReactivityValues() {
        return [
            _locale.value,
            _fallbackLocale.value,
            _messages.value,
            _datetimeFormats.value,
            _numberFormats.value
        ];
    }
    // locale
    const locale = computed({
        get: () => {
            return _composer.value ? _composer.value.locale.value : _locale.value;
        },
        set: val => {
            if (_composer.value) {
                _composer.value.locale.value = val;
            }
            _locale.value = val;
        }
    });
    // fallbackLocale
    const fallbackLocale = computed({
        get: () => {
            return _composer.value
                ? _composer.value.fallbackLocale.value
                : _fallbackLocale.value;
        },
        set: val => {
            if (_composer.value) {
                _composer.value.fallbackLocale.value = val;
            }
            _fallbackLocale.value = val;
        }
    });
    // messages
    const messages = computed(() => {
        if (_composer.value) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return _composer.value.messages.value;
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return _messages.value;
        }
    });
    const datetimeFormats = computed(() => _datetimeFormats.value);
    const numberFormats = computed(() => _numberFormats.value);
    function getPostTranslationHandler() {
        return _composer.value
            ? _composer.value.getPostTranslationHandler()
            : _postTranslation;
    }
    function setPostTranslationHandler(handler) {
        if (_composer.value) {
            _composer.value.setPostTranslationHandler(handler);
        }
    }
    function getMissingHandler() {
        return _composer.value ? _composer.value.getMissingHandler() : _missing;
    }
    function setMissingHandler(handler) {
        if (_composer.value) {
            _composer.value.setMissingHandler(handler);
        }
    }
    function warpWithDeps(fn) {
        trackReactivityValues();
        return fn();
    }
    function t(...args) {
        return _composer.value
            ? warpWithDeps(() => Reflect.apply(_composer.value.t, null, [...args]))
            : warpWithDeps(() => '');
    }
    function rt(...args) {
        return _composer.value
            ? Reflect.apply(_composer.value.rt, null, [...args])
            : '';
    }
    function d(...args) {
        return _composer.value
            ? warpWithDeps(() => Reflect.apply(_composer.value.d, null, [...args]))
            : warpWithDeps(() => '');
    }
    function n(...args) {
        return _composer.value
            ? warpWithDeps(() => Reflect.apply(_composer.value.n, null, [...args]))
            : warpWithDeps(() => '');
    }
    function tm(key) {
        return _composer.value ? _composer.value.tm(key) : {};
    }
    function te(key, locale) {
        return _composer.value ? _composer.value.te(key, locale) : false;
    }
    function getLocaleMessage(locale) {
        return _composer.value ? _composer.value.getLocaleMessage(locale) : {};
    }
    function setLocaleMessage(locale, message) {
        if (_composer.value) {
            _composer.value.setLocaleMessage(locale, message);
            _messages.value[locale] = message;
        }
    }
    function mergeLocaleMessage(locale, message) {
        if (_composer.value) {
            _composer.value.mergeLocaleMessage(locale, message);
        }
    }
    function getDateTimeFormat(locale) {
        return _composer.value ? _composer.value.getDateTimeFormat(locale) : {};
    }
    function setDateTimeFormat(locale, format) {
        if (_composer.value) {
            _composer.value.setDateTimeFormat(locale, format);
            _datetimeFormats.value[locale] = format;
        }
    }
    function mergeDateTimeFormat(locale, format) {
        if (_composer.value) {
            _composer.value.mergeDateTimeFormat(locale, format);
        }
    }
    function getNumberFormat(locale) {
        return _composer.value ? _composer.value.getNumberFormat(locale) : {};
    }
    function setNumberFormat(locale, format) {
        if (_composer.value) {
            _composer.value.setNumberFormat(locale, format);
            _numberFormats.value[locale] = format;
        }
    }
    function mergeNumberFormat(locale, format) {
        if (_composer.value) {
            _composer.value.mergeNumberFormat(locale, format);
        }
    }
    const wrapper = {
        get id() {
            return _composer.value ? _composer.value.id : -1;
        },
        locale,
        fallbackLocale,
        messages,
        datetimeFormats,
        numberFormats,
        get inheritLocale() {
            return _composer.value ? _composer.value.inheritLocale : _inheritLocale;
        },
        set inheritLocale(val) {
            if (_composer.value) {
                _composer.value.inheritLocale = val;
            }
        },
        get availableLocales() {
            return _composer.value
                ? _composer.value.availableLocales
                : Object.keys(_messages.value);
        },
        get modifiers() {
            return (_composer.value ? _composer.value.modifiers : _modifiers);
        },
        get pluralRules() {
            return (_composer.value ? _composer.value.pluralRules : _pluralRules);
        },
        get isGlobal() {
            return _composer.value ? _composer.value.isGlobal : false;
        },
        get missingWarn() {
            return _composer.value ? _composer.value.missingWarn : _missingWarn;
        },
        set missingWarn(val) {
            if (_composer.value) {
                _composer.value.missingWarn = val;
            }
        },
        get fallbackWarn() {
            return _composer.value ? _composer.value.fallbackWarn : _fallbackWarn;
        },
        set fallbackWarn(val) {
            if (_composer.value) {
                _composer.value.missingWarn = val;
            }
        },
        get fallbackRoot() {
            return _composer.value ? _composer.value.fallbackRoot : _fallbackRoot;
        },
        set fallbackRoot(val) {
            if (_composer.value) {
                _composer.value.fallbackRoot = val;
            }
        },
        get fallbackFormat() {
            return _composer.value ? _composer.value.fallbackFormat : _fallbackFormat;
        },
        set fallbackFormat(val) {
            if (_composer.value) {
                _composer.value.fallbackFormat = val;
            }
        },
        get warnHtmlMessage() {
            return _composer.value
                ? _composer.value.warnHtmlMessage
                : _warnHtmlMessage;
        },
        set warnHtmlMessage(val) {
            if (_composer.value) {
                _composer.value.warnHtmlMessage = val;
            }
        },
        get escapeParameter() {
            return _composer.value
                ? _composer.value.escapeParameter
                : _escapeParameter;
        },
        set escapeParameter(val) {
            if (_composer.value) {
                _composer.value.escapeParameter = val;
            }
        },
        t,
        getPostTranslationHandler,
        setPostTranslationHandler,
        getMissingHandler,
        setMissingHandler,
        rt,
        d,
        n,
        tm,
        te,
        getLocaleMessage,
        setLocaleMessage,
        mergeLocaleMessage,
        getDateTimeFormat,
        setDateTimeFormat,
        mergeDateTimeFormat,
        getNumberFormat,
        setNumberFormat,
        mergeNumberFormat
    };
    function sync(composer) {
        composer.locale.value = _locale.value;
        composer.fallbackLocale.value = _fallbackLocale.value;
        Object.keys(_messages.value).forEach(locale => {
            composer.mergeLocaleMessage(locale, _messages.value[locale]);
        });
        Object.keys(_datetimeFormats.value).forEach(locale => {
            composer.mergeDateTimeFormat(locale, _datetimeFormats.value[locale]);
        });
        Object.keys(_numberFormats.value).forEach(locale => {
            composer.mergeNumberFormat(locale, _numberFormats.value[locale]);
        });
        composer.escapeParameter = _escapeParameter;
        composer.fallbackFormat = _fallbackFormat;
        composer.fallbackRoot = _fallbackRoot;
        composer.fallbackWarn = _fallbackWarn;
        composer.missingWarn = _missingWarn;
        composer.warnHtmlMessage = _warnHtmlMessage;
    }
    onBeforeMount(() => {
        if (instance.proxy == null || instance.proxy.$i18n == null) {
            throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const composer = (_composer.value = instance.proxy.$i18n
            .__composer);
        if (scope === 'global') {
            _locale.value = composer.locale.value;
            _fallbackLocale.value = composer.fallbackLocale.value;
            _messages.value = composer.messages.value;
            _datetimeFormats.value = composer.datetimeFormats.value;
            _numberFormats.value = composer.numberFormats.value;
        }
        else if (isLocale) {
            sync(composer);
        }
    });
    return wrapper;
}
const globalExportProps = [
    'locale',
    'fallbackLocale',
    'availableLocales'
];
const globalExportMethods = ['t', 'rt', 'd', 'n', 'tm'] ;
function injectGlobalFields(app, composer) {
    const i18n = Object.create(null);
    globalExportProps.forEach(prop => {
        const desc = Object.getOwnPropertyDescriptor(composer, prop);
        if (!desc) {
            throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        const wrap = isRef(desc.value) // check computed props
            ? {
                get() {
                    return desc.value.value;
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                set(val) {
                    desc.value.value = val;
                }
            }
            : {
                get() {
                    return desc.get && desc.get();
                }
            };
        Object.defineProperty(i18n, prop, wrap);
    });
    app.config.globalProperties.$i18n = i18n;
    globalExportMethods.forEach(method => {
        const desc = Object.getOwnPropertyDescriptor(composer, method);
        if (!desc || !desc.value) {
            throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
    });
}

// register message compiler at vue-i18n
registerMessageCompiler(compileToFunction);
// register message resolver at vue-i18n
registerMessageResolver(resolveValue);
// register fallback locale at vue-i18n
registerLocaleFallbacker(fallbackWithLocaleChain);
{
    initFeatureFlags();
}
// NOTE: experimental !!
if (__INTLIFY_PROD_DEVTOOLS__) {
    const target = getGlobalThis();
    target.__INTLIFY__ = true;
    setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}

function useLang() {
  const i18n = useI18n();
  const lang = computed(() => i18n.locale.value);
  const changeLang = value => {
    i18n.locale.value = value;
    localStorage.setItem('__VEA__lang', value);
  };
  return {
    i18n,
    lang,
    changeLang,
  }
}

var App_vue_vue_type_style_index_0_lang = '';

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$2 = defineComponent({
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
  },
  setup() {
    const { lang } = useLang();

    return {
      lang,
      locales: {
        'zh-cn': localeZH,
        en: localeEN,
      },
    }
  },
});

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_el_config_provider = resolveComponent("el-config-provider");

  return (openBlock(), createBlock(_component_el_config_provider, {
    locale: _ctx.locales[_ctx.lang]
  }, {
    default: withCtx(() => [
      createVNode(_component_router_view)
    ]),
    _: 1
  }, 8, ["locale"]))
}
var App = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render$2]]);

var elementVariables = '';

var error$2 = {
  noauth: 'No access',
  servererror: 'Server error',
  notfound: 'Page not found',
  backhome: 'Back to Home',
};

var __glob_2_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    'default': error$2
}, Symbol.toStringTag, { value: 'Module' }));

var login$2 = {
  username: 'Username',
  password: 'Password',
  login: 'Login',
  logining: 'Login...',
  loginsuccess: 'Success',
  'rules-username': 'Please input username',
  'rules-password': 'Please input password',
  'rules-regpassword': '6 to 12 characters in length',
};

var __glob_2_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    'default': login$2
}, Symbol.toStringTag, { value: 'Module' }));

var menu$1 = {
  homepage: 'Homepage',
  dashboard: 'Dashboard',
  test: 'Test page',
  testList: 'List',
  testAdd: 'Add',
  testEdit: 'Edit',
  testAuth: 'Auth',
  testNoAuth: 'No auth',
  'test-cache': 'Cache',
  'test-no-cache': 'No Cache',
  nest: 'Nest page',
  nestPage1: 'Page1',
  nestPage2: 'Page2',
  'test-error-log': 'Error log',
};

var __glob_2_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    'default': menu$1
}, Symbol.toStringTag, { value: 'Module' }));

var _public$1 = {
  sure: 'Sure',
  search: 'Search',
  reset: 'Reset',
  edit: 'Edit',
  add: 'Add',
  delete: 'Delete',
  save: 'Save',
  cancel: 'Cancel',
  yes: 'Yes',
  no: 'No',
  status: 'Status',
  operate: 'Operate',
  enabled: 'Enabled',
  disabled: 'Disabled',
  male: 'Male',
  female: 'Female',
  startdate: 'From',
  enddate: 'To',
  starttime: 'From',
  endtime: 'To',
};

var __glob_2_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    'default': _public$1
}, Symbol.toStringTag, { value: 'Module' }));

var tags$1 = {
  refresh: 'Refresh',
  close: 'Close',
  other: 'Close other',
  left: 'Close left',
  right: 'Close right',
  all: 'Close all',
};

var __glob_2_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    'default': tags$1
}, Symbol.toStringTag, { value: 'Module' }));

var topbar$1 = {
  center: 'User center',
  password: 'Modify password',
  logout: 'Logout',
  'lock-title': 'Lock screen',
  'lock-password': 'Password',
  'lock-rules-password': 'Please input Screen password',
  'lock-locked': 'Screen Locked',
  'lock-lock': 'Unlock',
  'lock-relogin': 'Re-login',
  'lock-rules-password2': 'Screen password or User password',
  'lock-rules-password3': 'Password error',
  'lock-error': 'Your account has been logged out, please log in directly',
  'lock-week0': 'Sunday',
  'lock-week1': 'Monday',
  'lock-week2': 'Tuesday',
  'lock-week3': 'Wednesday',
  'lock-week4': 'Thursday',
  'lock-week5': 'Friday',
  'lock-week6': 'Saturday',
};

var __glob_2_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    'default': topbar$1
}, Symbol.toStringTag, { value: 'Module' }));

var list$1 = {
  title: 'List',
  batchDelete: 'Batch delete',
  add: 'Add one',
  refresh: 'Refresh',
  index: 'Index',
  name: 'Nickname',
  email: 'Email',
  desc: 'Description',
  publish: 'Published',
  nopublish: 'Unpublished',
  gender: 'Gender',
  city: 'City',
  bj: 'Beijing',
  sh: 'Shanghai',
  gz: 'Guangzhou',
  sz: 'Shenzhen',
  hobby: 'Hobby',
  eat: 'Eat',
  sleep: 'Sleep',
  bit: 'Beat',
  fruit: 'Fruit',
  apple: 'Apple',
  banana: 'Banana',
  orange: 'Orange',
  grape: 'Grape',
  date: 'Date',
  daterange: 'Date range',
  time: 'Time',
  timerange: 'Time range',
  num: 'Number',
};

var __glob_2_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    'default': list$1
}, Symbol.toStringTag, { value: 'Module' }));

var error$1 = {
  noauth: '您无权访问此页面',
  servererror: '服务器出错了',
  notfound: '您访问的页面不存在',
  backhome: '返回首页',
};

var __glob_1_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    'default': error$1
}, Symbol.toStringTag, { value: 'Module' }));

var login$1 = {
  username: '用户名',
  password: '密码',
  login: '登录',
  logining: '登录中...',
  loginsuccess: '登录成功',
  'rules-username': '请输入用户名',
  'rules-password': '请输入密码',
  'rules-regpassword': '长度在 6 到 12 个字符',
};

var __glob_1_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    'default': login$1
}, Symbol.toStringTag, { value: 'Module' }));

var menu = {
  homepage: '首页',
  dashboard: '工作台',
  test: '测试页面',
  testList: '列表',
  testAdd: '添加',
  testEdit: '编辑',
  testAuth: '权限测试',
  testNoAuth: '权限页面',
  'test-cache': '该页面可缓存',
  'test-no-cache': '该页面不缓存',
  nest: '二级页面',
  nestPage1: 'Page1',
  nestPage2: 'Page2',
  'test-error-log': '测试错误日志',

  plcVars: '设备信息',
  plcList: 'plc列表',
  varsList: '变量列表',
};

var __glob_1_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    'default': menu
}, Symbol.toStringTag, { value: 'Module' }));

var _public = {
  sure: '确定',
  search: '搜索',
  reset: '重置',
  edit: '编辑',
  add: '新增',
  delete: '删除',
  save: '保存',
  cancel: '取消',
  yes: '是',
  no: '否',
  status: '状态',
  operate: '操作',
  enabled: '启用',
  disabled: '禁用',
  male: '男',
  female: '女',
  startdate: '开始日期',
  enddate: '结束日期',
  starttime: '开始时间',
  endtime: '结束时间',
};

var __glob_1_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    'default': _public
}, Symbol.toStringTag, { value: 'Module' }));

var tags = {
  refresh: '刷新',
  close: '关闭',
  other: '关闭其它',
  left: '关闭左侧',
  right: '关闭右侧',
  all: '关闭全部',
};

var __glob_1_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    'default': tags
}, Symbol.toStringTag, { value: 'Module' }));

var topbar = {
  center: '个人中心',
  password: '修改密码',
  logout: '退出登录',
  'lock-title': '锁定屏幕',
  'lock-password': '锁屏密码',
  'lock-rules-password': '请输入锁屏密码',
  'lock-locked': '屏幕已锁定',
  'lock-lock': '解锁',
  'lock-relogin': '重新登录',
  'lock-rules-password2': '请输入锁屏密码或登录密码',
  'lock-rules-password3': '密码错误',
  'lock-error': '您的账号已退出，请直接登录',
  'lock-week0': '星期日',
  'lock-week1': '星期一',
  'lock-week2': '星期二',
  'lock-week3': '星期三',
  'lock-week4': '星期四',
  'lock-week5': '星期五',
  'lock-week6': '星期六',
};

var __glob_1_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    'default': topbar
}, Symbol.toStringTag, { value: 'Module' }));

var list = {
  title: '列表',
  batchDelete: '批量删除',
  add: '添加一条',
  refresh: '刷新',
  index: '序号',
  name: '昵称',
  email: '邮箱',
  desc: '描述',
  publish: '已发布',
  nopublish: '未发布',
  gender: '性别',
  city: '城市',
  bj: '北京',
  sh: '上海',
  gz: '广州',
  sz: '深圳',
  hobby: '爱好',
  eat: '吃饭',
  sleep: '睡觉',
  bit: '打豆豆',
  fruit: '水果',
  apple: '苹果',
  banana: '香蕉',
  orange: '橘子',
  grape: '葡萄',
  date: '日期',
  daterange: '日期范围',
  time: '时间',
  timerange: '时间范围',
  num: '数量',
};

var __glob_1_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    'default': list
}, Symbol.toStringTag, { value: 'Module' }));

const getMessage = modules => {
  return Object.entries(modules).reduce((module, [path, mod]) => {
    const moduleName = path.replace(/^\.\/locales\/[\w-]+\/(.*)\.\w+$/, '$1');
    module[moduleName] = mod.default;
    return module
  }, {})
};

var i18n = createI18n({
  locale: localStorage.getItem('__VEA__lang') || 'zh-cn',
  messages: {
    'zh-cn': getMessage({ "./locales/zh-cn/error.js": __glob_1_0, "./locales/zh-cn/login.js": __glob_1_1, "./locales/zh-cn/menu.js": __glob_1_2, "./locales/zh-cn/public.js": __glob_1_3, "./locales/zh-cn/tags.js": __glob_1_4, "./locales/zh-cn/topbar.js": __glob_1_5, "./locales/zh-cn/test/list.js": __glob_1_6,}),
    en: getMessage({ "./locales/en/error.js": __glob_2_0, "./locales/en/login.js": __glob_2_1, "./locales/en/menu.js": __glob_2_2, "./locales/en/public.js": __glob_2_3, "./locales/en/tags.js": __glob_2_4, "./locales/en/topbar.js": __glob_2_5, "./locales/en/test/list.js": __glob_2_6,}),
  },
  legacy: false,
  globalInjection: true,
});

/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */

const isBrowser = typeof window !== 'undefined';

function isESModule(obj) {
    return obj.__esModule || obj[Symbol.toStringTag] === 'Module';
}
const assign$1 = Object.assign;
function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
        const value = params[key];
        newParams[key] = isArray$1(value)
            ? value.map(fn)
            : fn(value);
    }
    return newParams;
}
const noop$1 = () => { };
/**
 * Typesafe alternative to Array.isArray
 * https://github.com/microsoft/TypeScript/pull/48228
 */
const isArray$1 = Array.isArray;

const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, '');
/**
 * Transforms a URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */
function parseURL(parseQuery, location, currentLocation = '/') {
    let path, query = {}, searchString = '', hash = '';
    // Could use URL and URLSearchParams but IE 11 doesn't support it
    // TODO: move to new URL()
    const hashPos = location.indexOf('#');
    let searchPos = location.indexOf('?');
    // the hash appears before the search, so it's not part of the search string
    if (hashPos < searchPos && hashPos >= 0) {
        searchPos = -1;
    }
    if (searchPos > -1) {
        path = location.slice(0, searchPos);
        searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
        query = parseQuery(searchString);
    }
    if (hashPos > -1) {
        path = path || location.slice(0, hashPos);
        // keep the # character
        hash = location.slice(hashPos, location.length);
    }
    // no search and no query
    path = resolveRelativePath(path != null ? path : location, currentLocation);
    // empty path means a relative query or hash `?foo=f`, `#thing`
    return {
        fullPath: path + (searchString && '?') + searchString + hash,
        path,
        query,
        hash,
    };
}
/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */
function stringifyURL(stringifyQuery, location) {
    const query = location.query ? stringifyQuery(location.query) : '';
    return location.path + (query && '?') + query + (location.hash || '');
}
/**
 * Strips off the base from the beginning of a location.pathname in a non-case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */
function stripBase(pathname, base) {
    // no base or base is not found at the beginning
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
        return pathname;
    return pathname.slice(base.length) || '/';
}
/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param a - first {@link RouteLocation}
 * @param b - second {@link RouteLocation}
 */
function isSameRouteLocation(stringifyQuery, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return (aLastIndex > -1 &&
        aLastIndex === bLastIndex &&
        isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) &&
        isSameRouteLocationParams(a.params, b.params) &&
        stringifyQuery(a.query) === stringifyQuery(b.query) &&
        a.hash === b.hash);
}
/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a - first {@link RouteRecord}
 * @param b - second {@link RouteRecord}
 */
function isSameRouteRecord(a, b) {
    // since the original record has an undefined value for aliasOf
    // but all aliases point to the original record, this will always compare
    // the original record
    return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
        return false;
    for (const key in a) {
        if (!isSameRouteLocationParamsValue(a[key], b[key]))
            return false;
    }
    return true;
}
function isSameRouteLocationParamsValue(a, b) {
    return isArray$1(a)
        ? isEquivalentArray(a, b)
        : isArray$1(b)
            ? isEquivalentArray(b, a)
            : a === b;
}
/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a - array of values
 * @param b - array of values or a single value
 */
function isEquivalentArray(a, b) {
    return isArray$1(b)
        ? a.length === b.length && a.every((value, i) => value === b[i])
        : a.length === 1 && a[0] === b;
}
/**
 * Resolves a relative path that starts with `.`.
 *
 * @param to - path location we are resolving
 * @param from - currentLocation.path, should start with `/`
 */
function resolveRelativePath(to, from) {
    if (to.startsWith('/'))
        return to;
    if (!to)
        return from;
    const fromSegments = from.split('/');
    const toSegments = to.split('/');
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
        segment = toSegments[toPosition];
        // we stay on the same position
        if (segment === '.')
            continue;
        // go up in the from array
        if (segment === '..') {
            // we can't go below zero, but we still need to increment toPosition
            if (position > 1)
                position--;
            // continue
        }
        // we reached a non-relative path, we stop here
        else
            break;
    }
    return (fromSegments.slice(0, position).join('/') +
        '/' +
        toSegments
            // ensure we use at least the last element in the toSegments
            .slice(toPosition - (toPosition === toSegments.length ? 1 : 0))
            .join('/'));
}

var NavigationType;
(function (NavigationType) {
    NavigationType["pop"] = "pop";
    NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function (NavigationDirection) {
    NavigationDirection["back"] = "back";
    NavigationDirection["forward"] = "forward";
    NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
// Generic utils
/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base - base to normalize
 */
function normalizeBase(base) {
    if (!base) {
        if (isBrowser) {
            // respect <base> tag
            const baseEl = document.querySelector('base');
            base = (baseEl && baseEl.getAttribute('href')) || '/';
            // strip full URL origin
            base = base.replace(/^\w+:\/\/[^\/]+/, '');
        }
        else {
            base = '/';
        }
    }
    // ensure leading slash when it was removed by the regex above avoid leading
    // slash with hash because the file could be read from the disk like file://
    // and the leading slash would cause problems
    if (base[0] !== '/' && base[0] !== '#')
        base = '/' + base;
    // remove the trailing slash so all other method can just do `base + fullPath`
    // to build an href
    return removeTrailingSlash(base);
}
// remove any character before the hash
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location) {
    return base.replace(BEFORE_HASH_RE, '#') + location;
}

function getElementPosition(el, offset) {
    const docRect = document.documentElement.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
        behavior: offset.behavior,
        left: elRect.left - docRect.left - (offset.left || 0),
        top: elRect.top - docRect.top - (offset.top || 0),
    };
}
const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset,
});
function scrollToPosition(position) {
    let scrollToOptions;
    if ('el' in position) {
        const positionEl = position.el;
        const isIdSelector = typeof positionEl === 'string' && positionEl.startsWith('#');
        const el = typeof positionEl === 'string'
            ? isIdSelector
                ? document.getElementById(positionEl.slice(1))
                : document.querySelector(positionEl)
            : positionEl;
        if (!el) {
            return;
        }
        scrollToOptions = getElementPosition(el, position);
    }
    else {
        scrollToOptions = position;
    }
    if ('scrollBehavior' in document.documentElement.style)
        window.scrollTo(scrollToOptions);
    else {
        window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
    }
}
function getScrollKey(path, delta) {
    const position = history.state ? history.state.position - delta : -1;
    return position + path;
}
const scrollPositions = new Map();
function saveScrollPosition(key, scrollPosition) {
    scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
    const scroll = scrollPositions.get(key);
    // consume it so it's not used again
    scrollPositions.delete(key);
    return scroll;
}
// TODO: RFC about how to save scroll position
/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */
// export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }

let createBaseLocation = () => location.protocol + '//' + location.host;
/**
 * Creates a normalized history location from a window.location object
 * @param location -
 */
function createCurrentLocation(base, location) {
    const { pathname, search, hash } = location;
    // allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end
    const hashPos = base.indexOf('#');
    if (hashPos > -1) {
        let slicePos = hash.includes(base.slice(hashPos))
            ? base.slice(hashPos).length
            : 1;
        let pathFromHash = hash.slice(slicePos);
        // prepend the starting slash to hash so the url starts with /#
        if (pathFromHash[0] !== '/')
            pathFromHash = '/' + pathFromHash;
        return stripBase(pathFromHash, '');
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    // TODO: should it be a stack? a Dict. Check if the popstate listener
    // can trigger twice
    let pauseState = null;
    const popStateHandler = ({ state, }) => {
        const to = createCurrentLocation(base, location);
        const from = currentLocation.value;
        const fromState = historyState.value;
        let delta = 0;
        if (state) {
            currentLocation.value = to;
            historyState.value = state;
            // ignore the popstate and reset the pauseState
            if (pauseState && pauseState === from) {
                pauseState = null;
                return;
            }
            delta = fromState ? state.position - fromState.position : 0;
        }
        else {
            replace(to);
        }
        // console.log({ deltaFromCurrent })
        // Here we could also revert the navigation by calling history.go(-delta)
        // this listener will have to be adapted to not trigger again and to wait for the url
        // to be updated before triggering the listeners. Some kind of validation function would also
        // need to be passed to the listeners so the navigation can be accepted
        // call all listeners
        listeners.forEach(listener => {
            listener(currentLocation.value, from, {
                delta,
                type: NavigationType.pop,
                direction: delta
                    ? delta > 0
                        ? NavigationDirection.forward
                        : NavigationDirection.back
                    : NavigationDirection.unknown,
            });
        });
    };
    function pauseListeners() {
        pauseState = currentLocation.value;
    }
    function listen(callback) {
        // set up the listener and prepare teardown callbacks
        listeners.push(callback);
        const teardown = () => {
            const index = listeners.indexOf(callback);
            if (index > -1)
                listeners.splice(index, 1);
        };
        teardowns.push(teardown);
        return teardown;
    }
    function beforeUnloadListener() {
        const { history } = window;
        if (!history.state)
            return;
        history.replaceState(assign$1({}, history.state, { scroll: computeScrollPosition() }), '');
    }
    function destroy() {
        for (const teardown of teardowns)
            teardown();
        teardowns = [];
        window.removeEventListener('popstate', popStateHandler);
        window.removeEventListener('beforeunload', beforeUnloadListener);
    }
    // set up the listeners and prepare teardown callbacks
    window.addEventListener('popstate', popStateHandler);
    window.addEventListener('beforeunload', beforeUnloadListener);
    return {
        pauseListeners,
        listen,
        destroy,
    };
}
/**
 * Creates a state object
 */
function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
        back,
        current,
        forward,
        replaced,
        position: window.history.length,
        scroll: computeScroll ? computeScrollPosition() : null,
    };
}
function useHistoryStateNavigation(base) {
    const { history, location } = window;
    // private variables
    const currentLocation = {
        value: createCurrentLocation(base, location),
    };
    const historyState = { value: history.state };
    // build current history entry as this is a fresh navigation
    if (!historyState.value) {
        changeLocation(currentLocation.value, {
            back: null,
            current: currentLocation.value,
            forward: null,
            // the length is off by one, we need to decrease it
            position: history.length - 1,
            replaced: true,
            // don't add a scroll as the user may have an anchor, and we want
            // scrollBehavior to be triggered without a saved position
            scroll: null,
        }, true);
    }
    function changeLocation(to, state, replace) {
        /**
         * if a base tag is provided, and we are on a normal domain, we have to
         * respect the provided `base` attribute because pushState() will use it and
         * potentially erase anything before the `#` like at
         * https://github.com/vuejs/router/issues/685 where a base of
         * `/folder/#` but a base of `/` would erase the `/folder/` section. If
         * there is no host, the `<base>` tag makes no sense and if there isn't a
         * base tag we can just use everything after the `#`.
         */
        const hashIndex = base.indexOf('#');
        const url = hashIndex > -1
            ? (location.host && document.querySelector('base')
                ? base
                : base.slice(hashIndex)) + to
            : createBaseLocation() + base + to;
        try {
            // BROWSER QUIRK
            // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
            history[replace ? 'replaceState' : 'pushState'](state, '', url);
            historyState.value = state;
        }
        catch (err) {
            {
                console.error(err);
            }
            // Force the navigation, this also resets the call count
            location[replace ? 'replace' : 'assign'](url);
        }
    }
    function replace(to, data) {
        const state = assign$1({}, history.state, buildState(historyState.value.back, 
        // keep back and forward entries but override current position
        to, historyState.value.forward, true), data, { position: historyState.value.position });
        changeLocation(to, state, true);
        currentLocation.value = to;
    }
    function push(to, data) {
        // Add to current entry the information of where we are going
        // as well as saving the current position
        const currentState = assign$1({}, 
        // use current history state to gracefully handle a wrong call to
        // history.replaceState
        // https://github.com/vuejs/router/issues/366
        historyState.value, history.state, {
            forward: to,
            scroll: computeScrollPosition(),
        });
        changeLocation(currentState.current, currentState, true);
        const state = assign$1({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
        changeLocation(to, state, false);
        currentLocation.value = to;
    }
    return {
        location: currentLocation,
        state: historyState,
        push,
        replace,
    };
}
/**
 * Creates an HTML5 history. Most common history for single page applications.
 *
 * @param base -
 */
function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
        if (!triggerListeners)
            historyListeners.pauseListeners();
        history.go(delta);
    }
    const routerHistory = assign$1({
        // it's overridden right after
        location: '',
        base,
        go,
        createHref: createHref.bind(null, base),
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, 'location', {
        enumerable: true,
        get: () => historyNavigation.location.value,
    });
    Object.defineProperty(routerHistory, 'state', {
        enumerable: true,
        get: () => historyNavigation.state.value,
    });
    return routerHistory;
}

/**
 * Creates a hash history. Useful for web applications with no host (e.g. `file://`) or when configuring a server to
 * handle any URL is not possible.
 *
 * @param base - optional base to provide. Defaults to `location.pathname + location.search` If there is a `<base>` tag
 * in the `head`, its value will be ignored in favor of this parameter **but note it affects all the history.pushState()
 * calls**, meaning that if you use a `<base>` tag, it's `href` value **has to match this parameter** (ignoring anything
 * after the `#`).
 *
 * @example
 * ```js
 * // at https://example.com/folder
 * createWebHashHistory() // gives a url of `https://example.com/folder#`
 * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
 * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
 * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
 * // you should avoid doing this because it changes the original url and breaks copying urls
 * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
 *
 * // at file:///usr/etc/folder/index.html
 * // for locations with no `host`, the base is ignored
 * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
 * ```
 */
function createWebHashHistory(base) {
    // Make sure this implementation is fine in terms of encoding, specially for IE11
    // for `file://`, directly use the pathname and ignore the base
    // location.pathname contains an initial `/` even at the root: `https://example.com`
    base = location.host ? base || location.pathname + location.search : '';
    // allow the user to provide a `#` in the middle: `/base/#/app`
    if (!base.includes('#'))
        base += '#';
    return createWebHistory(base);
}

function isRouteLocation(route) {
    return typeof route === 'string' || (route && typeof route === 'object');
}
function isRouteName(name) {
    return typeof name === 'string' || typeof name === 'symbol';
}

/**
 * Initial route location where the router is. Can be used in navigation guards
 * to differentiate the initial navigation.
 *
 * @example
 * ```js
 * import { START_LOCATION } from 'vue-router'
 *
 * router.beforeEach((to, from) => {
 *   if (from === START_LOCATION) {
 *     // initial navigation
 *   }
 * })
 * ```
 */
const START_LOCATION_NORMALIZED = {
    path: '/',
    name: undefined,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: undefined,
};

const NavigationFailureSymbol = Symbol('');
/**
 * Enumeration with all possible types for navigation failures. Can be passed to
 * {@link isNavigationFailure} to check for specific failures.
 */
var NavigationFailureType;
(function (NavigationFailureType) {
    /**
     * An aborted navigation is a navigation that failed because a navigation
     * guard returned `false` or called `next(false)`
     */
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    /**
     * A cancelled navigation is a navigation that failed because a more recent
     * navigation finished started (not necessarily finished).
     */
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    /**
     * A duplicated navigation is a navigation that failed because it was
     * initiated while already being at the exact same location.
     */
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
    // keep full error messages in cjs versions
    {
        return assign$1(new Error(), {
            type,
            [NavigationFailureSymbol]: true,
        }, params);
    }
}
function isNavigationFailure(error, type) {
    return (error instanceof Error &&
        NavigationFailureSymbol in error &&
        (type == null || !!(error.type & type)));
}

// default pattern for a param: non-greedy everything but /
const BASE_PARAM_PATTERN = '[^/]+?';
const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true,
};
// Special Regex characters that must be escaped in static tokens
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */
function tokensToParser(segments, extraOptions) {
    const options = assign$1({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    // the amount of scores is the same as the length of segments except for the root segment "/"
    const score = [];
    // the regexp as a string
    let pattern = options.start ? '^' : '';
    // extracted keys
    const keys = [];
    for (const segment of segments) {
        // the root segment needs special treatment
        const segmentScores = segment.length ? [] : [90 /* PathScore.Root */];
        // allow trailing slash
        if (options.strict && !segment.length)
            pattern += '/';
        for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
            const token = segment[tokenIndex];
            // resets the score if we are inside a sub-segment /:a-other-:b
            let subSegmentScore = 40 /* PathScore.Segment */ +
                (options.sensitive ? 0.25 /* PathScore.BonusCaseSensitive */ : 0);
            if (token.type === 0 /* TokenType.Static */) {
                // prepend the slash if we are starting a new segment
                if (!tokenIndex)
                    pattern += '/';
                pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
                subSegmentScore += 40 /* PathScore.Static */;
            }
            else if (token.type === 1 /* TokenType.Param */) {
                const { value, repeatable, optional, regexp } = token;
                keys.push({
                    name: value,
                    repeatable,
                    optional,
                });
                const re = regexp ? regexp : BASE_PARAM_PATTERN;
                // the user provided a custom regexp /:id(\\d+)
                if (re !== BASE_PARAM_PATTERN) {
                    subSegmentScore += 10 /* PathScore.BonusCustomRegExp */;
                    // make sure the regexp is valid before using it
                    try {
                        new RegExp(`(${re})`);
                    }
                    catch (err) {
                        throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` +
                            err.message);
                    }
                }
                // when we repeat we must take care of the repeating leading slash
                let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
                // prepend the slash if we are starting a new segment
                if (!tokenIndex)
                    subPattern =
                        // avoid an optional / if there are more segments e.g. /:p?-static
                        // or /:p?-:p2
                        optional && segment.length < 2
                            ? `(?:/${subPattern})`
                            : '/' + subPattern;
                if (optional)
                    subPattern += '?';
                pattern += subPattern;
                subSegmentScore += 20 /* PathScore.Dynamic */;
                if (optional)
                    subSegmentScore += -8 /* PathScore.BonusOptional */;
                if (repeatable)
                    subSegmentScore += -20 /* PathScore.BonusRepeatable */;
                if (re === '.*')
                    subSegmentScore += -50 /* PathScore.BonusWildcard */;
            }
            segmentScores.push(subSegmentScore);
        }
        // an empty array like /home/ -> [[{home}], []]
        // if (!segment.length) pattern += '/'
        score.push(segmentScores);
    }
    // only apply the strict bonus to the last score
    if (options.strict && options.end) {
        const i = score.length - 1;
        score[i][score[i].length - 1] += 0.7000000000000001 /* PathScore.BonusStrict */;
    }
    // TODO: dev only warn double trailing slash
    if (!options.strict)
        pattern += '/?';
    if (options.end)
        pattern += '$';
    // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
    else if (options.strict)
        pattern += '(?:/|$)';
    const re = new RegExp(pattern, options.sensitive ? '' : 'i');
    function parse(path) {
        const match = path.match(re);
        const params = {};
        if (!match)
            return null;
        for (let i = 1; i < match.length; i++) {
            const value = match[i] || '';
            const key = keys[i - 1];
            params[key.name] = value && key.repeatable ? value.split('/') : value;
        }
        return params;
    }
    function stringify(params) {
        let path = '';
        // for optional parameters to allow to be empty
        let avoidDuplicatedSlash = false;
        for (const segment of segments) {
            if (!avoidDuplicatedSlash || !path.endsWith('/'))
                path += '/';
            avoidDuplicatedSlash = false;
            for (const token of segment) {
                if (token.type === 0 /* TokenType.Static */) {
                    path += token.value;
                }
                else if (token.type === 1 /* TokenType.Param */) {
                    const { value, repeatable, optional } = token;
                    const param = value in params ? params[value] : '';
                    if (isArray$1(param) && !repeatable) {
                        throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
                    }
                    const text = isArray$1(param)
                        ? param.join('/')
                        : param;
                    if (!text) {
                        if (optional) {
                            // if we have more than one optional param like /:a?-static we don't need to care about the optional param
                            if (segment.length < 2) {
                                // remove the last slash as we could be at the end
                                if (path.endsWith('/'))
                                    path = path.slice(0, -1);
                                // do not append a slash on the next iteration
                                else
                                    avoidDuplicatedSlash = true;
                            }
                        }
                        else
                            throw new Error(`Missing required param "${value}"`);
                    }
                    path += text;
                }
            }
        }
        // avoid empty path when we have multiple optional params
        return path || '/';
    }
    return {
        re,
        score,
        keys,
        parse,
        stringify,
    };
}
/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 *
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */
function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
        const diff = b[i] - a[i];
        // only keep going if diff === 0
        if (diff)
            return diff;
        i++;
    }
    // if the last subsegment was Static, the shorter segments should be sorted first
    // otherwise sort the longest segment first
    if (a.length < b.length) {
        return a.length === 1 && a[0] === 40 /* PathScore.Static */ + 40 /* PathScore.Segment */
            ? -1
            : 1;
    }
    else if (a.length > b.length) {
        return b.length === 1 && b[0] === 40 /* PathScore.Static */ + 40 /* PathScore.Segment */
            ? 1
            : -1;
    }
    return 0;
}
/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 *
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */
function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
        const comp = compareScoreArray(aScore[i], bScore[i]);
        // do not return if both are equal
        if (comp)
            return comp;
        i++;
    }
    if (Math.abs(bScore.length - aScore.length) === 1) {
        if (isLastScoreNegative(aScore))
            return 1;
        if (isLastScoreNegative(bScore))
            return -1;
    }
    // if a and b share the same score entries but b has more, sort b first
    return bScore.length - aScore.length;
    // this is the ternary version
    // return aScore.length < bScore.length
    //   ? 1
    //   : aScore.length > bScore.length
    //   ? -1
    //   : 0
}
/**
 * This allows detecting splats at the end of a path: /home/:id(.*)*
 *
 * @param score - score to check
 * @returns true if the last entry is negative
 */
function isLastScoreNegative(score) {
    const last = score[score.length - 1];
    return score.length > 0 && last[last.length - 1] < 0;
}

const ROOT_TOKEN = {
    type: 0 /* TokenType.Static */,
    value: '',
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
// After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()
function tokenizePath(path) {
    if (!path)
        return [[]];
    if (path === '/')
        return [[ROOT_TOKEN]];
    if (!path.startsWith('/')) {
        throw new Error(`Invalid path "${path}"`);
    }
    // if (tokenCache.has(path)) return tokenCache.get(path)!
    function crash(message) {
        throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0 /* TokenizerState.Static */;
    let previousState = state;
    const tokens = [];
    // the segment will always be valid because we get into the initial state
    // with the leading /
    let segment;
    function finalizeSegment() {
        if (segment)
            tokens.push(segment);
        segment = [];
    }
    // index on the path
    let i = 0;
    // char at index
    let char;
    // buffer of the value read
    let buffer = '';
    // custom regexp for a param
    let customRe = '';
    function consumeBuffer() {
        if (!buffer)
            return;
        if (state === 0 /* TokenizerState.Static */) {
            segment.push({
                type: 0 /* TokenType.Static */,
                value: buffer,
            });
        }
        else if (state === 1 /* TokenizerState.Param */ ||
            state === 2 /* TokenizerState.ParamRegExp */ ||
            state === 3 /* TokenizerState.ParamRegExpEnd */) {
            if (segment.length > 1 && (char === '*' || char === '+'))
                crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
            segment.push({
                type: 1 /* TokenType.Param */,
                value: buffer,
                regexp: customRe,
                repeatable: char === '*' || char === '+',
                optional: char === '*' || char === '?',
            });
        }
        else {
            crash('Invalid state to consume buffer');
        }
        buffer = '';
    }
    function addCharToBuffer() {
        buffer += char;
    }
    while (i < path.length) {
        char = path[i++];
        if (char === '\\' && state !== 2 /* TokenizerState.ParamRegExp */) {
            previousState = state;
            state = 4 /* TokenizerState.EscapeNext */;
            continue;
        }
        switch (state) {
            case 0 /* TokenizerState.Static */:
                if (char === '/') {
                    if (buffer) {
                        consumeBuffer();
                    }
                    finalizeSegment();
                }
                else if (char === ':') {
                    consumeBuffer();
                    state = 1 /* TokenizerState.Param */;
                }
                else {
                    addCharToBuffer();
                }
                break;
            case 4 /* TokenizerState.EscapeNext */:
                addCharToBuffer();
                state = previousState;
                break;
            case 1 /* TokenizerState.Param */:
                if (char === '(') {
                    state = 2 /* TokenizerState.ParamRegExp */;
                }
                else if (VALID_PARAM_RE.test(char)) {
                    addCharToBuffer();
                }
                else {
                    consumeBuffer();
                    state = 0 /* TokenizerState.Static */;
                    // go back one character if we were not modifying
                    if (char !== '*' && char !== '?' && char !== '+')
                        i--;
                }
                break;
            case 2 /* TokenizerState.ParamRegExp */:
                // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
                // it already works by escaping the closing )
                // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
                // is this really something people need since you can also write
                // /prefix_:p()_suffix
                if (char === ')') {
                    // handle the escaped )
                    if (customRe[customRe.length - 1] == '\\')
                        customRe = customRe.slice(0, -1) + char;
                    else
                        state = 3 /* TokenizerState.ParamRegExpEnd */;
                }
                else {
                    customRe += char;
                }
                break;
            case 3 /* TokenizerState.ParamRegExpEnd */:
                // same as finalizing a param
                consumeBuffer();
                state = 0 /* TokenizerState.Static */;
                // go back one character if we were not modifying
                if (char !== '*' && char !== '?' && char !== '+')
                    i--;
                customRe = '';
                break;
            default:
                crash('Unknown state');
                break;
        }
    }
    if (state === 2 /* TokenizerState.ParamRegExp */)
        crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    // tokenCache.set(path, tokens)
    return tokens;
}

function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign$1(parser, {
        record,
        parent,
        // these needs to be populated by the parent
        children: [],
        alias: [],
    });
    if (parent) {
        // both are aliases or both are not aliases
        // we don't want to mix them because the order is used when
        // passing originalRecord in Matcher.addRoute
        if (!matcher.record.aliasOf === !parent.record.aliasOf)
            parent.children.push(matcher);
    }
    return matcher;
}

/**
 * Creates a Router Matcher.
 *
 * @internal
 * @param routes - array of initial routes
 * @param globalOptions - global route options
 */
function createRouterMatcher(routes, globalOptions) {
    // normalized ordered array of matchers
    const matchers = [];
    const matcherMap = new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
        return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
        // used later on to remove by name
        const isRootAdd = !originalRecord;
        const mainNormalizedRecord = normalizeRouteRecord(record);
        // we might be the child of an alias
        mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
        const options = mergeOptions(globalOptions, record);
        // generate an array of records to correctly handle aliases
        const normalizedRecords = [
            mainNormalizedRecord,
        ];
        if ('alias' in record) {
            const aliases = typeof record.alias === 'string' ? [record.alias] : record.alias;
            for (const alias of aliases) {
                normalizedRecords.push(assign$1({}, mainNormalizedRecord, {
                    // this allows us to hold a copy of the `components` option
                    // so that async components cache is hold on the original record
                    components: originalRecord
                        ? originalRecord.record.components
                        : mainNormalizedRecord.components,
                    path: alias,
                    // we might be the child of an alias
                    aliasOf: originalRecord
                        ? originalRecord.record
                        : mainNormalizedRecord,
                    // the aliases are always of the same kind as the original since they
                    // are defined on the same record
                }));
            }
        }
        let matcher;
        let originalMatcher;
        for (const normalizedRecord of normalizedRecords) {
            const { path } = normalizedRecord;
            // Build up the path for nested routes if the child isn't an absolute
            // route. Only add the / delimiter if the child path isn't empty and if the
            // parent path doesn't have a trailing slash
            if (parent && path[0] !== '/') {
                const parentPath = parent.record.path;
                const connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
                normalizedRecord.path =
                    parent.record.path + (path && connectingSlash + path);
            }
            // create the object beforehand, so it can be passed to children
            matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
            // if we are an alias we must tell the original record that we exist,
            // so we can be removed
            if (originalRecord) {
                originalRecord.alias.push(matcher);
            }
            else {
                // otherwise, the first record is the original and others are aliases
                originalMatcher = originalMatcher || matcher;
                if (originalMatcher !== matcher)
                    originalMatcher.alias.push(matcher);
                // remove the route if named and only for the top record (avoid in nested calls)
                // this works because the original record is the first one
                if (isRootAdd && record.name && !isAliasRecord(matcher))
                    removeRoute(record.name);
            }
            if (mainNormalizedRecord.children) {
                const children = mainNormalizedRecord.children;
                for (let i = 0; i < children.length; i++) {
                    addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
                }
            }
            // if there was no original record, then the first one was not an alias and all
            // other aliases (if any) need to reference this record when adding children
            originalRecord = originalRecord || matcher;
            // TODO: add normalized records for more flexibility
            // if (parent && isAliasRecord(originalRecord)) {
            //   parent.children.push(originalRecord)
            // }
            insertMatcher(matcher);
        }
        return originalMatcher
            ? () => {
                // since other matchers are aliases, they should be removed by the original matcher
                removeRoute(originalMatcher);
            }
            : noop$1;
    }
    function removeRoute(matcherRef) {
        if (isRouteName(matcherRef)) {
            const matcher = matcherMap.get(matcherRef);
            if (matcher) {
                matcherMap.delete(matcherRef);
                matchers.splice(matchers.indexOf(matcher), 1);
                matcher.children.forEach(removeRoute);
                matcher.alias.forEach(removeRoute);
            }
        }
        else {
            const index = matchers.indexOf(matcherRef);
            if (index > -1) {
                matchers.splice(index, 1);
                if (matcherRef.record.name)
                    matcherMap.delete(matcherRef.record.name);
                matcherRef.children.forEach(removeRoute);
                matcherRef.alias.forEach(removeRoute);
            }
        }
    }
    function getRoutes() {
        return matchers;
    }
    function insertMatcher(matcher) {
        let i = 0;
        while (i < matchers.length &&
            comparePathParserScore(matcher, matchers[i]) >= 0 &&
            // Adding children with empty path should still appear before the parent
            // https://github.com/vuejs/router/issues/1124
            (matcher.record.path !== matchers[i].record.path ||
                !isRecordChildOf(matcher, matchers[i])))
            i++;
        matchers.splice(i, 0, matcher);
        // only add the original record to the name map
        if (matcher.record.name && !isAliasRecord(matcher))
            matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location, currentLocation) {
        let matcher;
        let params = {};
        let path;
        let name;
        if ('name' in location && location.name) {
            matcher = matcherMap.get(location.name);
            if (!matcher)
                throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND */, {
                    location,
                });
            name = matcher.record.name;
            params = assign$1(
            // paramsFromLocation is a new object
            paramsFromLocation(currentLocation.params, 
            // only keep params that exist in the resolved location
            // TODO: only keep optional params coming from a parent record
            matcher.keys.filter(k => !k.optional).map(k => k.name)), 
            // discard any existing params in the current location that do not exist here
            // #1497 this ensures better active/exact matching
            location.params &&
                paramsFromLocation(location.params, matcher.keys.map(k => k.name)));
            // throws if cannot be stringified
            path = matcher.stringify(params);
        }
        else if ('path' in location) {
            // no need to resolve the path with the matcher as it was provided
            // this also allows the user to control the encoding
            path = location.path;
            matcher = matchers.find(m => m.re.test(path));
            // matcher should have a value after the loop
            if (matcher) {
                // we know the matcher works because we tested the regexp
                params = matcher.parse(path);
                name = matcher.record.name;
            }
            // location is a relative path
        }
        else {
            // match by name or path of current route
            matcher = currentLocation.name
                ? matcherMap.get(currentLocation.name)
                : matchers.find(m => m.re.test(currentLocation.path));
            if (!matcher)
                throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND */, {
                    location,
                    currentLocation,
                });
            name = matcher.record.name;
            // since we are navigating to the same location, we don't need to pick the
            // params like when `name` is provided
            params = assign$1({}, currentLocation.params, location.params);
            path = matcher.stringify(params);
        }
        const matched = [];
        let parentMatcher = matcher;
        while (parentMatcher) {
            // reversed order so parents are at the beginning
            matched.unshift(parentMatcher.record);
            parentMatcher = parentMatcher.parent;
        }
        return {
            name,
            path,
            params,
            matched,
            meta: mergeMetaFields(matched),
        };
    }
    // add initial routes
    routes.forEach(route => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
        if (key in params)
            newParams[key] = params[key];
    }
    return newParams;
}
/**
 * Normalizes a RouteRecordRaw. Creates a copy
 *
 * @param record
 * @returns the normalized version
 */
function normalizeRouteRecord(record) {
    return {
        path: record.path,
        redirect: record.redirect,
        name: record.name,
        meta: record.meta || {},
        aliasOf: undefined,
        beforeEnter: record.beforeEnter,
        props: normalizeRecordProps(record),
        children: record.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        components: 'components' in record
            ? record.components || null
            : record.component && { default: record.component },
    };
}
/**
 * Normalize the optional `props` in a record to always be an object similar to
 * components. Also accept a boolean for components.
 * @param record
 */
function normalizeRecordProps(record) {
    const propsObject = {};
    // props does not exist on redirect records, but we can set false directly
    const props = record.props || false;
    if ('component' in record) {
        propsObject.default = props;
    }
    else {
        // NOTE: we could also allow a function to be applied to every component.
        // Would need user feedback for use cases
        for (const name in record.components)
            propsObject[name] = typeof props === 'boolean' ? props : props[name];
    }
    return propsObject;
}
/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */
function isAliasRecord(record) {
    while (record) {
        if (record.record.aliasOf)
            return true;
        record = record.parent;
    }
    return false;
}
/**
 * Merge meta fields of an array of records
 *
 * @param matched - array of matched records
 */
function mergeMetaFields(matched) {
    return matched.reduce((meta, record) => assign$1(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
    const options = {};
    for (const key in defaults) {
        options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
}
function isRecordChildOf(record, parent) {
    return parent.children.some(child => child === record || isRecordChildOf(record, child));
}

/**
 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
 * < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */
// const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
const HASH_RE = /#/g; // %23
const AMPERSAND_RE = /&/g; // %26
const SLASH_RE = /\//g; // %2F
const EQUAL_RE = /=/g; // %3D
const IM_RE = /\?/g; // %3F
const PLUS_RE = /\+/g; // %2B
/**
 * NOTE: It's not clear to me if we should encode the + symbol in queries, it
 * seems to be less flexible than not doing so and I can't find out the legacy
 * systems requiring this for regular requests like text/html. In the standard,
 * the encoding of the plus character is only mentioned for
 * application/x-www-form-urlencoded
 * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
 * leave the plus character as is in queries. To be more flexible, we allow the
 * plus character on the query, but it can also be manually encoded by the user.
 *
 * Resources:
 * - https://url.spec.whatwg.org/#urlencoded-parsing
 * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
 */
const ENC_BRACKET_OPEN_RE = /%5B/g; // [
const ENC_BRACKET_CLOSE_RE = /%5D/g; // ]
const ENC_CARET_RE = /%5E/g; // ^
const ENC_BACKTICK_RE = /%60/g; // `
const ENC_CURLY_OPEN_RE = /%7B/g; // {
const ENC_PIPE_RE = /%7C/g; // |
const ENC_CURLY_CLOSE_RE = /%7D/g; // }
const ENC_SPACE_RE = /%20/g; // }
/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */
function commonEncode(text) {
    return encodeURI('' + text)
        .replace(ENC_PIPE_RE, '|')
        .replace(ENC_BRACKET_OPEN_RE, '[')
        .replace(ENC_BRACKET_CLOSE_RE, ']');
}
/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeHash(text) {
    return commonEncode(text)
        .replace(ENC_CURLY_OPEN_RE, '{')
        .replace(ENC_CURLY_CLOSE_RE, '}')
        .replace(ENC_CARET_RE, '^');
}
/**
 * Encode characters that need to be encoded query values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeQueryValue(text) {
    return (commonEncode(text)
        // Encode the space as +, encode the + to differentiate it from the space
        .replace(PLUS_RE, '%2B')
        .replace(ENC_SPACE_RE, '+')
        .replace(HASH_RE, '%23')
        .replace(AMPERSAND_RE, '%26')
        .replace(ENC_BACKTICK_RE, '`')
        .replace(ENC_CURLY_OPEN_RE, '{')
        .replace(ENC_CURLY_CLOSE_RE, '}')
        .replace(ENC_CARET_RE, '^'));
}
/**
 * Like `encodeQueryValue` but also encodes the `=` character.
 *
 * @param text - string to encode
 */
function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
}
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
}
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
 * string instead.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeParam(text) {
    return text == null ? '' : encodePath(text).replace(SLASH_RE, '%2F');
}
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */
function decode(text) {
    try {
        return decodeURIComponent('' + text);
    }
    catch (err) {
    }
    return '' + text;
}

/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams

 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */
function parseQuery(search) {
    const query = {};
    // avoid creating an object with an empty key and empty value
    // because of split('&')
    if (search === '' || search === '?')
        return query;
    const hasLeadingIM = search[0] === '?';
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');
    for (let i = 0; i < searchParams.length; ++i) {
        // pre decode the + into space
        const searchParam = searchParams[i].replace(PLUS_RE, ' ');
        // allow the = character
        const eqPos = searchParam.indexOf('=');
        const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
        const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
        if (key in query) {
            // an extra variable for ts types
            let currentValue = query[key];
            if (!isArray$1(currentValue)) {
                currentValue = query[key] = [currentValue];
            }
            currentValue.push(value);
        }
        else {
            query[key] = value;
        }
    }
    return query;
}
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */
function stringifyQuery(query) {
    let search = '';
    for (let key in query) {
        const value = query[key];
        key = encodeQueryKey(key);
        if (value == null) {
            // only null adds the value
            if (value !== undefined) {
                search += (search.length ? '&' : '') + key;
            }
            continue;
        }
        // keep null values
        const values = isArray$1(value)
            ? value.map(v => v && encodeQueryValue(v))
            : [value && encodeQueryValue(value)];
        values.forEach(value => {
            // skip undefined values in arrays as if they were not present
            // smaller code than using filter
            if (value !== undefined) {
                // only append & with non-empty search
                search += (search.length ? '&' : '') + key;
                if (value != null)
                    search += '=' + value;
            }
        });
    }
    return search;
}
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */
function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
        const value = query[key];
        if (value !== undefined) {
            normalizedQuery[key] = isArray$1(value)
                ? value.map(v => (v == null ? null : '' + v))
                : value == null
                    ? value
                    : '' + value;
        }
    }
    return normalizedQuery;
}

/**
 * RouteRecord being rendered by the closest ancestor Router View. Used for
 * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
 * Location Matched
 *
 * @internal
 */
const matchedRouteKey = Symbol('');
/**
 * Allows overriding the router view depth to control which component in
 * `matched` is rendered. rvd stands for Router View Depth
 *
 * @internal
 */
const viewDepthKey = Symbol('');
/**
 * Allows overriding the router instance returned by `useRouter` in tests. r
 * stands for router
 *
 * @internal
 */
const routerKey = Symbol('');
/**
 * Allows overriding the current route returned by `useRoute` in tests. rl
 * stands for route location
 *
 * @internal
 */
const routeLocationKey = Symbol('');
/**
 * Allows overriding the current route used by router-view. Internally this is
 * used when the `route` prop is passed.
 *
 * @internal
 */
const routerViewLocationKey = Symbol('');

/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */
function useCallbacks() {
    let handlers = [];
    function add(handler) {
        handlers.push(handler);
        return () => {
            const i = handlers.indexOf(handler);
            if (i > -1)
                handlers.splice(i, 1);
        };
    }
    function reset() {
        handlers = [];
    }
    return {
        add,
        list: () => handlers,
        reset,
    };
}
function guardToPromiseFn(guard, to, from, record, name) {
    // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
    const enterCallbackArray = record &&
        // name is defined if record is because of the function overload
        (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
        const next = (valid) => {
            if (valid === false) {
                reject(createRouterError(4 /* ErrorTypes.NAVIGATION_ABORTED */, {
                    from,
                    to,
                }));
            }
            else if (valid instanceof Error) {
                reject(valid);
            }
            else if (isRouteLocation(valid)) {
                reject(createRouterError(2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */, {
                    from: to,
                    to: valid,
                }));
            }
            else {
                if (enterCallbackArray &&
                    // since enterCallbackArray is truthy, both record and name also are
                    record.enterCallbacks[name] === enterCallbackArray &&
                    typeof valid === 'function') {
                    enterCallbackArray.push(valid);
                }
                resolve();
            }
        };
        // wrapping with Promise.resolve allows it to work with both async and sync guards
        const guardReturn = guard.call(record && record.instances[name], to, from, next);
        let guardCall = Promise.resolve(guardReturn);
        if (guard.length < 3)
            guardCall = guardCall.then(next);
        guardCall.catch(err => reject(err));
    });
}
function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
        for (const name in record.components) {
            let rawComponent = record.components[name];
            // skip update and leave guards if the route component is not mounted
            if (guardType !== 'beforeRouteEnter' && !record.instances[name])
                continue;
            if (isRouteComponent(rawComponent)) {
                // __vccOpts is added by vue-class-component and contain the regular options
                const options = rawComponent.__vccOpts || rawComponent;
                const guard = options[guardType];
                guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
            }
            else {
                // start requesting the chunk already
                let componentPromise = rawComponent();
                guards.push(() => componentPromise.then(resolved => {
                    if (!resolved)
                        return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
                    const resolvedComponent = isESModule(resolved)
                        ? resolved.default
                        : resolved;
                    // replace the function with the resolved component
                    // cannot be null or undefined because we went into the for loop
                    record.components[name] = resolvedComponent;
                    // __vccOpts is added by vue-class-component and contain the regular options
                    const options = resolvedComponent.__vccOpts || resolvedComponent;
                    const guard = options[guardType];
                    return guard && guardToPromiseFn(guard, to, from, record, name)();
                }));
            }
        }
    }
    return guards;
}
/**
 * Allows differentiating lazy components from functional components and vue-class-component
 * @internal
 *
 * @param component
 */
function isRouteComponent(component) {
    return (typeof component === 'object' ||
        'displayName' in component ||
        'props' in component ||
        '__vccOpts' in component);
}

// TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC
function useLink(props) {
    const router = inject(routerKey);
    const currentRoute = inject(routeLocationKey);
    const route = computed(() => router.resolve(unref(props.to)));
    const activeRecordIndex = computed(() => {
        const { matched } = route.value;
        const { length } = matched;
        const routeMatched = matched[length - 1];
        const currentMatched = currentRoute.matched;
        if (!routeMatched || !currentMatched.length)
            return -1;
        const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
        if (index > -1)
            return index;
        // possible parent record
        const parentRecordPath = getOriginalPath(matched[length - 2]);
        return (
        // we are dealing with nested routes
        length > 1 &&
            // if the parent and matched route have the same path, this link is
            // referring to the empty child. Or we currently are on a different
            // child of the same parent
            getOriginalPath(routeMatched) === parentRecordPath &&
            // avoid comparing the child with its parent
            currentMatched[currentMatched.length - 1].path !== parentRecordPath
            ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2]))
            : index);
    });
    const isActive = computed(() => activeRecordIndex.value > -1 &&
        includesParams(currentRoute.params, route.value.params));
    const isExactActive = computed(() => activeRecordIndex.value > -1 &&
        activeRecordIndex.value === currentRoute.matched.length - 1 &&
        isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
        if (guardEvent(e)) {
            return router[unref(props.replace) ? 'replace' : 'push'](unref(props.to)
            // avoid uncaught errors are they are logged anyway
            ).catch(noop$1);
        }
        return Promise.resolve();
    }
    return {
        route,
        href: computed(() => route.value.href),
        isActive,
        isExactActive,
        navigate,
    };
}
const RouterLinkImpl = /*#__PURE__*/ defineComponent({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
        to: {
            type: [String, Object],
            required: true,
        },
        replace: Boolean,
        activeClass: String,
        // inactiveClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: 'page',
        },
    },
    useLink,
    setup(props, { slots }) {
        const link = reactive(useLink(props));
        const { options } = inject(routerKey);
        const elClass = computed(() => ({
            [getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active')]: link.isActive,
            // [getLinkClass(
            //   props.inactiveClass,
            //   options.linkInactiveClass,
            //   'router-link-inactive'
            // )]: !link.isExactActive,
            [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active')]: link.isExactActive,
        }));
        return () => {
            const children = slots.default && slots.default(link);
            return props.custom
                ? children
                : h('a', {
                    'aria-current': link.isExactActive
                        ? props.ariaCurrentValue
                        : null,
                    href: link.href,
                    // this would override user added attrs but Vue will still add
                    // the listener, so we end up triggering both
                    onClick: link.navigate,
                    class: elClass.value,
                }, children);
        };
    },
});
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to render a link that triggers a navigation on click.
 */
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
    // don't redirect with control keys
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
        return;
    // don't redirect when preventDefault called
    if (e.defaultPrevented)
        return;
    // don't redirect on right click
    if (e.button !== undefined && e.button !== 0)
        return;
    // don't redirect if `target="_blank"`
    // @ts-expect-error getAttribute does exist
    if (e.currentTarget && e.currentTarget.getAttribute) {
        // @ts-expect-error getAttribute exists
        const target = e.currentTarget.getAttribute('target');
        if (/\b_blank\b/i.test(target))
            return;
    }
    // this may be a Weex event which doesn't have this method
    if (e.preventDefault)
        e.preventDefault();
    return true;
}
function includesParams(outer, inner) {
    for (const key in inner) {
        const innerValue = inner[key];
        const outerValue = outer[key];
        if (typeof innerValue === 'string') {
            if (innerValue !== outerValue)
                return false;
        }
        else {
            if (!isArray$1(outerValue) ||
                outerValue.length !== innerValue.length ||
                innerValue.some((value, i) => value !== outerValue[i]))
                return false;
        }
    }
    return true;
}
/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */
function getOriginalPath(record) {
    return record ? (record.aliasOf ? record.aliasOf.path : record.path) : '';
}
/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null
    ? propClass
    : globalClass != null
        ? globalClass
        : defaultClass;

const RouterViewImpl = /*#__PURE__*/ defineComponent({
    name: 'RouterView',
    // #674 we manually inherit them
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            default: 'default',
        },
        route: Object,
    },
    // Better compat for @vue/compat users
    // https://github.com/vuejs/router/issues/1315
    compatConfig: { MODE: 3 },
    setup(props, { attrs, slots }) {
        const injectedRoute = inject(routerViewLocationKey);
        const routeToDisplay = computed(() => props.route || injectedRoute.value);
        const injectedDepth = inject(viewDepthKey, 0);
        // The depth changes based on empty components option, which allows passthrough routes e.g. routes with children
        // that are used to reuse the `path` property
        const depth = computed(() => {
            let initialDepth = unref(injectedDepth);
            const { matched } = routeToDisplay.value;
            let matchedRoute;
            while ((matchedRoute = matched[initialDepth]) &&
                !matchedRoute.components) {
                initialDepth++;
            }
            return initialDepth;
        });
        const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
        provide(viewDepthKey, computed(() => depth.value + 1));
        provide(matchedRouteKey, matchedRouteRef);
        provide(routerViewLocationKey, routeToDisplay);
        const viewRef = ref();
        // watch at the same time the component instance, the route record we are
        // rendering, and the name
        watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
            // copy reused instances
            if (to) {
                // this will update the instance for new instances as well as reused
                // instances when navigating to a new route
                to.instances[name] = instance;
                // the component instance is reused for a different route or name, so
                // we copy any saved update or leave guards. With async setup, the
                // mounting component will mount before the matchedRoute changes,
                // making instance === oldInstance, so we check if guards have been
                // added before. This works because we remove guards when
                // unmounting/deactivating components
                if (from && from !== to && instance && instance === oldInstance) {
                    if (!to.leaveGuards.size) {
                        to.leaveGuards = from.leaveGuards;
                    }
                    if (!to.updateGuards.size) {
                        to.updateGuards = from.updateGuards;
                    }
                }
            }
            // trigger beforeRouteEnter next callbacks
            if (instance &&
                to &&
                // if there is no instance but to and from are the same this might be
                // the first visit
                (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
                (to.enterCallbacks[name] || []).forEach(callback => callback(instance));
            }
        }, { flush: 'post' });
        return () => {
            const route = routeToDisplay.value;
            // we need the value at the time we render because when we unmount, we
            // navigated to a different location so the value is different
            const currentName = props.name;
            const matchedRoute = matchedRouteRef.value;
            const ViewComponent = matchedRoute && matchedRoute.components[currentName];
            if (!ViewComponent) {
                return normalizeSlot(slots.default, { Component: ViewComponent, route });
            }
            // props from route configuration
            const routePropsOption = matchedRoute.props[currentName];
            const routeProps = routePropsOption
                ? routePropsOption === true
                    ? route.params
                    : typeof routePropsOption === 'function'
                        ? routePropsOption(route)
                        : routePropsOption
                : null;
            const onVnodeUnmounted = vnode => {
                // remove the instance reference to prevent leak
                if (vnode.component.isUnmounted) {
                    matchedRoute.instances[currentName] = null;
                }
            };
            const component = h(ViewComponent, assign$1({}, routeProps, attrs, {
                onVnodeUnmounted,
                ref: viewRef,
            }));
            return (
            // pass the vnode to the slot as a prop.
            // h and <component :is="..."> both accept vnodes
            normalizeSlot(slots.default, { Component: component, route }) ||
                component);
        };
    },
});
function normalizeSlot(slot, data) {
    if (!slot)
        return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
}
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to display the current route the user is at.
 */
const RouterView = RouterViewImpl;

/**
 * Creates a Router instance that can be used by a Vue app.
 *
 * @param options - {@link RouterOptions}
 */
function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    // leave the scrollRestoration if no scrollBehavior is provided
    if (isBrowser && options.scrollBehavior && 'scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    const normalizeParams = applyToParams.bind(null, paramValue => '' + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = 
    // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
        let parent;
        let record;
        if (isRouteName(parentOrRoute)) {
            parent = matcher.getRecordMatcher(parentOrRoute);
            record = route;
        }
        else {
            record = parentOrRoute;
        }
        return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
        const recordMatcher = matcher.getRecordMatcher(name);
        if (recordMatcher) {
            matcher.removeRoute(recordMatcher);
        }
    }
    function getRoutes() {
        return matcher.getRoutes().map(routeMatcher => routeMatcher.record);
    }
    function hasRoute(name) {
        return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
        // const objectLocation = routerLocationAsObject(rawLocation)
        // we create a copy to modify it later
        currentLocation = assign$1({}, currentLocation || currentRoute.value);
        if (typeof rawLocation === 'string') {
            const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
            const matchedRoute = matcher.resolve({ path: locationNormalized.path }, currentLocation);
            const href = routerHistory.createHref(locationNormalized.fullPath);
            // locationNormalized is always a new object
            return assign$1(locationNormalized, matchedRoute, {
                params: decodeParams(matchedRoute.params),
                hash: decode(locationNormalized.hash),
                redirectedFrom: undefined,
                href,
            });
        }
        let matcherLocation;
        // path could be relative in object as well
        if ('path' in rawLocation) {
            matcherLocation = assign$1({}, rawLocation, {
                path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path,
            });
        }
        else {
            // remove any nullish param
            const targetParams = assign$1({}, rawLocation.params);
            for (const key in targetParams) {
                if (targetParams[key] == null) {
                    delete targetParams[key];
                }
            }
            // pass encoded values to the matcher, so it can produce encoded path and fullPath
            matcherLocation = assign$1({}, rawLocation, {
                params: encodeParams(rawLocation.params),
            });
            // current location params are decoded, we need to encode them in case the
            // matcher merges the params
            currentLocation.params = encodeParams(currentLocation.params);
        }
        const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
        const hash = rawLocation.hash || '';
        // the matcher might have merged current location params, so
        // we need to run the decoding again
        matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
        const fullPath = stringifyURL(stringifyQuery$1, assign$1({}, rawLocation, {
            hash: encodeHash(hash),
            path: matchedRoute.path,
        }));
        const href = routerHistory.createHref(fullPath);
        return assign$1({
            fullPath,
            // keep the hash encoded so fullPath is effectively path + encodedQuery +
            // hash
            hash,
            query: 
            // if the user is using a custom query lib like qs, we might have
            // nested objects, so we keep the query as is, meaning it can contain
            // numbers at `$route.query`, but at the point, the user will have to
            // use their own type anyway.
            // https://github.com/vuejs/router/issues/328#issuecomment-649481567
            stringifyQuery$1 === stringifyQuery
                ? normalizeQuery(rawLocation.query)
                : (rawLocation.query || {}),
        }, matchedRoute, {
            redirectedFrom: undefined,
            href,
        });
    }
    function locationAsObject(to) {
        return typeof to === 'string'
            ? parseURL(parseQuery$1, to, currentRoute.value.path)
            : assign$1({}, to);
    }
    function checkCanceledNavigation(to, from) {
        if (pendingLocation !== to) {
            return createRouterError(8 /* ErrorTypes.NAVIGATION_CANCELLED */, {
                from,
                to,
            });
        }
    }
    function push(to) {
        return pushWithRedirect(to);
    }
    function replace(to) {
        return push(assign$1(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
        const lastMatched = to.matched[to.matched.length - 1];
        if (lastMatched && lastMatched.redirect) {
            const { redirect } = lastMatched;
            let newTargetLocation = typeof redirect === 'function' ? redirect(to) : redirect;
            if (typeof newTargetLocation === 'string') {
                newTargetLocation =
                    newTargetLocation.includes('?') || newTargetLocation.includes('#')
                        ? (newTargetLocation = locationAsObject(newTargetLocation))
                        : // force empty params
                            { path: newTargetLocation };
                // @ts-expect-error: force empty params when a string is passed to let
                // the router parse them again
                newTargetLocation.params = {};
            }
            return assign$1({
                query: to.query,
                hash: to.hash,
                // avoid transferring params if the redirect has a path
                params: 'path' in newTargetLocation ? {} : to.params,
            }, newTargetLocation);
        }
    }
    function pushWithRedirect(to, redirectedFrom) {
        const targetLocation = (pendingLocation = resolve(to));
        const from = currentRoute.value;
        const data = to.state;
        const force = to.force;
        // to could be a string where `replace` is a function
        const replace = to.replace === true;
        const shouldRedirect = handleRedirectRecord(targetLocation);
        if (shouldRedirect)
            return pushWithRedirect(assign$1(locationAsObject(shouldRedirect), {
                state: typeof shouldRedirect === 'object'
                    ? assign$1({}, data, shouldRedirect.state)
                    : data,
                force,
                replace,
            }), 
            // keep original redirectedFrom if it exists
            redirectedFrom || targetLocation);
        // if it was a redirect we already called `pushWithRedirect` above
        const toLocation = targetLocation;
        toLocation.redirectedFrom = redirectedFrom;
        let failure;
        if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
            failure = createRouterError(16 /* ErrorTypes.NAVIGATION_DUPLICATED */, { to: toLocation, from });
            // trigger scroll to allow scrolling to the same anchor
            handleScroll(from, from, 
            // this is a push, the only way for it to be triggered from a
            // history.listen is with a redirect, which makes it become a push
            true, 
            // This cannot be the first navigation because the initial location
            // cannot be manually navigated to
            false);
        }
        return (failure ? Promise.resolve(failure) : navigate(toLocation, from))
            .catch((error) => isNavigationFailure(error)
            ? // navigation redirects still mark the router as ready
                isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)
                    ? error
                    : markAsReady(error) // also returns the error
            : // reject any unknown error
                triggerError(error, toLocation, from))
            .then((failure) => {
            if (failure) {
                if (isNavigationFailure(failure, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)) {
                    return pushWithRedirect(
                    // keep options
                    assign$1({
                        // preserve an existing replacement but allow the redirect to override it
                        replace,
                    }, locationAsObject(failure.to), {
                        state: typeof failure.to === 'object'
                            ? assign$1({}, data, failure.to.state)
                            : data,
                        force,
                    }), 
                    // preserve the original redirectedFrom if any
                    redirectedFrom || toLocation);
                }
            }
            else {
                // if we fail we don't finalize the navigation
                failure = finalizeNavigation(toLocation, from, true, replace, data);
            }
            triggerAfterEach(toLocation, from, failure);
            return failure;
        });
    }
    /**
     * Helper to reject and skip all navigation guards if a new navigation happened
     * @param to
     * @param from
     */
    function checkCanceledNavigationAndReject(to, from) {
        const error = checkCanceledNavigation(to, from);
        return error ? Promise.reject(error) : Promise.resolve();
    }
    // TODO: refactor the whole before guards by internally using router.beforeEach
    function navigate(to, from) {
        let guards;
        const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
        // all components here have been resolved once because we are leaving
        guards = extractComponentsGuards(leavingRecords.reverse(), 'beforeRouteLeave', to, from);
        // leavingRecords is already reversed
        for (const record of leavingRecords) {
            record.leaveGuards.forEach(guard => {
                guards.push(guardToPromiseFn(guard, to, from));
            });
        }
        const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
        guards.push(canceledNavigationCheck);
        // run the queue of per route beforeRouteLeave guards
        return (runGuardQueue(guards)
            .then(() => {
            // check global guards beforeEach
            guards = [];
            for (const guard of beforeGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        })
            .then(() => {
            // check in components beforeRouteUpdate
            guards = extractComponentsGuards(updatingRecords, 'beforeRouteUpdate', to, from);
            for (const record of updatingRecords) {
                record.updateGuards.forEach(guard => {
                    guards.push(guardToPromiseFn(guard, to, from));
                });
            }
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // check the route beforeEnter
            guards = [];
            for (const record of to.matched) {
                // do not trigger beforeEnter on reused views
                if (record.beforeEnter && !from.matched.includes(record)) {
                    if (isArray$1(record.beforeEnter)) {
                        for (const beforeEnter of record.beforeEnter)
                            guards.push(guardToPromiseFn(beforeEnter, to, from));
                    }
                    else {
                        guards.push(guardToPromiseFn(record.beforeEnter, to, from));
                    }
                }
            }
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
            // clear existing enterCallbacks, these are added by extractComponentsGuards
            to.matched.forEach(record => (record.enterCallbacks = {}));
            // check in-component beforeRouteEnter
            guards = extractComponentsGuards(enteringRecords, 'beforeRouteEnter', to, from);
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // check global guards beforeResolve
            guards = [];
            for (const guard of beforeResolveGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        })
            // catch any navigation canceled
            .catch(err => isNavigationFailure(err, 8 /* ErrorTypes.NAVIGATION_CANCELLED */)
            ? err
            : Promise.reject(err)));
    }
    function triggerAfterEach(to, from, failure) {
        // navigation is confirmed, call afterGuards
        // TODO: wrap with error handlers
        for (const guard of afterGuards.list())
            guard(to, from, failure);
    }
    /**
     * - Cleans up any navigation guards
     * - Changes the url if necessary
     * - Calls the scrollBehavior
     */
    function finalizeNavigation(toLocation, from, isPush, replace, data) {
        // a more recent navigation took place
        const error = checkCanceledNavigation(toLocation, from);
        if (error)
            return error;
        // only consider as push if it's not the first navigation
        const isFirstNavigation = from === START_LOCATION_NORMALIZED;
        const state = !isBrowser ? {} : history.state;
        // change URL only if the user did a push/replace and if it's not the initial navigation because
        // it's just reflecting the url
        if (isPush) {
            // on the initial navigation, we want to reuse the scroll position from
            // history state if it exists
            if (replace || isFirstNavigation)
                routerHistory.replace(toLocation.fullPath, assign$1({
                    scroll: isFirstNavigation && state && state.scroll,
                }, data));
            else
                routerHistory.push(toLocation.fullPath, data);
        }
        // accept current navigation
        currentRoute.value = toLocation;
        handleScroll(toLocation, from, isPush, isFirstNavigation);
        markAsReady();
    }
    let removeHistoryListener;
    // attach listener to history to trigger navigations
    function setupListeners() {
        // avoid setting up listeners twice due to an invalid first navigation
        if (removeHistoryListener)
            return;
        removeHistoryListener = routerHistory.listen((to, _from, info) => {
            if (!router.listening)
                return;
            // cannot be a redirect route because it was in history
            const toLocation = resolve(to);
            // due to dynamic routing, and to hash history with manual navigation
            // (manually changing the url or calling history.hash = '#/somewhere'),
            // there could be a redirect record in history
            const shouldRedirect = handleRedirectRecord(toLocation);
            if (shouldRedirect) {
                pushWithRedirect(assign$1(shouldRedirect, { replace: true }), toLocation).catch(noop$1);
                return;
            }
            pendingLocation = toLocation;
            const from = currentRoute.value;
            // TODO: should be moved to web history?
            if (isBrowser) {
                saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
            }
            navigate(toLocation, from)
                .catch((error) => {
                if (isNavigationFailure(error, 4 /* ErrorTypes.NAVIGATION_ABORTED */ | 8 /* ErrorTypes.NAVIGATION_CANCELLED */)) {
                    return error;
                }
                if (isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)) {
                    // Here we could call if (info.delta) routerHistory.go(-info.delta,
                    // false) but this is bug prone as we have no way to wait the
                    // navigation to be finished before calling pushWithRedirect. Using
                    // a setTimeout of 16ms seems to work but there is no guarantee for
                    // it to work on every browser. So instead we do not restore the
                    // history entry and trigger a new navigation as requested by the
                    // navigation guard.
                    // the error is already handled by router.push we just want to avoid
                    // logging the error
                    pushWithRedirect(error.to, toLocation
                    // avoid an uncaught rejection, let push call triggerError
                    )
                        .then(failure => {
                        // manual change in hash history #916 ending up in the URL not
                        // changing, but it was changed by the manual url change, so we
                        // need to manually change it ourselves
                        if (isNavigationFailure(failure, 4 /* ErrorTypes.NAVIGATION_ABORTED */ |
                            16 /* ErrorTypes.NAVIGATION_DUPLICATED */) &&
                            !info.delta &&
                            info.type === NavigationType.pop) {
                            routerHistory.go(-1, false);
                        }
                    })
                        .catch(noop$1);
                    // avoid the then branch
                    return Promise.reject();
                }
                // do not restore history on unknown direction
                if (info.delta) {
                    routerHistory.go(-info.delta, false);
                }
                // unrecognized error, transfer to the global handler
                return triggerError(error, toLocation, from);
            })
                .then((failure) => {
                failure =
                    failure ||
                        finalizeNavigation(
                        // after navigation, all matched components are resolved
                        toLocation, from, false);
                // revert the navigation
                if (failure) {
                    if (info.delta &&
                        // a new navigation has been triggered, so we do not want to revert, that will change the current history
                        // entry while a different route is displayed
                        !isNavigationFailure(failure, 8 /* ErrorTypes.NAVIGATION_CANCELLED */)) {
                        routerHistory.go(-info.delta, false);
                    }
                    else if (info.type === NavigationType.pop &&
                        isNavigationFailure(failure, 4 /* ErrorTypes.NAVIGATION_ABORTED */ | 16 /* ErrorTypes.NAVIGATION_DUPLICATED */)) {
                        // manual change in hash history #916
                        // it's like a push but lacks the information of the direction
                        routerHistory.go(-1, false);
                    }
                }
                triggerAfterEach(toLocation, from, failure);
            })
                .catch(noop$1);
        });
    }
    // Initialization and Errors
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    /**
     * Trigger errorHandlers added via onError and throws the error as well
     *
     * @param error - error to throw
     * @param to - location we were navigating to when the error happened
     * @param from - location we were navigating from when the error happened
     * @returns the error as a rejected promise
     */
    function triggerError(error, to, from) {
        markAsReady(error);
        const list = errorHandlers.list();
        if (list.length) {
            list.forEach(handler => handler(error, to, from));
        }
        else {
            console.error(error);
        }
        return Promise.reject(error);
    }
    function isReady() {
        if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
            return Promise.resolve();
        return new Promise((resolve, reject) => {
            readyHandlers.add([resolve, reject]);
        });
    }
    function markAsReady(err) {
        if (!ready) {
            // still not ready if an error happened
            ready = !err;
            setupListeners();
            readyHandlers
                .list()
                .forEach(([resolve, reject]) => (err ? reject(err) : resolve()));
            readyHandlers.reset();
        }
        return err;
    }
    // Scroll behavior
    function handleScroll(to, from, isPush, isFirstNavigation) {
        const { scrollBehavior } = options;
        if (!isBrowser || !scrollBehavior)
            return Promise.resolve();
        const scrollPosition = (!isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0))) ||
            ((isFirstNavigation || !isPush) &&
                history.state &&
                history.state.scroll) ||
            null;
        return nextTick()
            .then(() => scrollBehavior(to, from, scrollPosition))
            .then(position => position && scrollToPosition(position))
            .catch(err => triggerError(err, to, from));
    }
    const go = (delta) => routerHistory.go(delta);
    let started;
    const installedApps = new Set();
    const router = {
        currentRoute,
        listening: true,
        addRoute,
        removeRoute,
        hasRoute,
        getRoutes,
        resolve,
        options,
        push,
        replace,
        go,
        back: () => go(-1),
        forward: () => go(1),
        beforeEach: beforeGuards.add,
        beforeResolve: beforeResolveGuards.add,
        afterEach: afterGuards.add,
        onError: errorHandlers.add,
        isReady,
        install(app) {
            const router = this;
            app.component('RouterLink', RouterLink);
            app.component('RouterView', RouterView);
            app.config.globalProperties.$router = router;
            Object.defineProperty(app.config.globalProperties, '$route', {
                enumerable: true,
                get: () => unref(currentRoute),
            });
            // this initial navigation is only necessary on client, on server it doesn't
            // make sense because it will create an extra unnecessary navigation and could
            // lead to problems
            if (isBrowser &&
                // used for the initial navigation client side to avoid pushing
                // multiple times when the router is used in multiple apps
                !started &&
                currentRoute.value === START_LOCATION_NORMALIZED) {
                // see above
                started = true;
                push(routerHistory.location).catch(err => {
                });
            }
            const reactiveRoute = {};
            for (const key in START_LOCATION_NORMALIZED) {
                // @ts-expect-error: the key matches
                reactiveRoute[key] = computed(() => currentRoute.value[key]);
            }
            app.provide(routerKey, router);
            app.provide(routeLocationKey, reactive(reactiveRoute));
            app.provide(routerViewLocationKey, currentRoute);
            const unmountApp = app.unmount;
            installedApps.add(app);
            app.unmount = function () {
                installedApps.delete(app);
                // the router is not attached to an app anymore
                if (installedApps.size < 1) {
                    // invalidate the current navigation
                    pendingLocation = START_LOCATION_NORMALIZED;
                    removeHistoryListener && removeHistoryListener();
                    removeHistoryListener = null;
                    currentRoute.value = START_LOCATION_NORMALIZED;
                    started = false;
                    ready = false;
                }
                unmountApp();
            };
        },
    };
    return router;
}
function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
        const recordFrom = from.matched[i];
        if (recordFrom) {
            if (to.matched.find(record => isSameRouteRecord(record, recordFrom)))
                updatingRecords.push(recordFrom);
            else
                leavingRecords.push(recordFrom);
        }
        const recordTo = to.matched[i];
        if (recordTo) {
            // the type doesn't matter because we are comparing per reference
            if (!from.matched.find(record => isSameRouteRecord(record, recordTo))) {
                enteringRecords.push(recordTo);
            }
        }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
}

/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */
function useRouter() {
    return inject(routerKey);
}
/**
 * Returns the current route location. Equivalent to using `$route` inside
 * templates.
 */
function useRoute() {
    return inject(routeLocationKey);
}

const scriptRel = 'modulepreload';const seen = {};const base = '/';const __vitePreload = function preload(baseModule, deps) {
    // @ts-ignore
    if (!true || !deps || deps.length === 0) {
        return baseModule();
    }
    return Promise.all(deps.map((dep) => {
        // @ts-ignore
        dep = `${base}${dep}`;
        // @ts-ignore
        if (dep in seen)
            return;
        // @ts-ignore
        seen[dep] = true;
        const isCss = dep.endsWith('.css');
        const cssSelector = isCss ? '[rel="stylesheet"]' : '';
        // @ts-ignore check if the file is already preloaded by SSR markup
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
            return;
        }
        // @ts-ignore
        const link = document.createElement('link');
        // @ts-ignore
        link.rel = isCss ? 'stylesheet' : scriptRel;
        if (!isCss) {
            link.as = 'script';
            link.crossOrigin = '';
        }
        link.href = dep;
        // @ts-ignore
        document.head.appendChild(link);
        if (isCss) {
            return new Promise((res, rej) => {
                link.addEventListener('load', res);
                link.addEventListener('error', () => rej(new Error(`Unable to preload CSS for ${dep}`)));
            });
        }
    })).then(() => baseModule());
};

const Layout$3 = () => __vitePreload(() => import('./index.e645ce07.js'),true?["assets/index.e645ce07.js","assets/index.753d6345.css","assets/element-plus.97092bf0.js","assets/index.001b710e.js","assets/index.d26ce6ca.css","assets/ChangeLang.183ac43f.js","assets/ChangeLang.2a486598.css"]:void 0);
const Redirect = () => __vitePreload(() => import('./index.51e17f8a.js'),true?["assets/index.51e17f8a.js","assets/element-plus.97092bf0.js"]:void 0);

var redirect = [
  {
    path: '/redirect/:path(.*)',
    component: Layout$3,
    children: [
      {
        path: '',
        component: Redirect,
      },
    ],
  },
];

/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */

/**
 * setActivePinia must be called to handle SSR at the top of functions like
 * `fetch`, `setup`, `serverPrefetch` and others
 */
let activePinia;
/**
 * Sets or unsets the active pinia. Used in SSR and internally when calling
 * actions and getters
 *
 * @param pinia - Pinia instance
 */
const setActivePinia = (pinia) => (activePinia = pinia);
const piniaSymbol = (/* istanbul ignore next */ Symbol());

function isPlainObject$1(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
o) {
    return (o &&
        typeof o === 'object' &&
        Object.prototype.toString.call(o) === '[object Object]' &&
        typeof o.toJSON !== 'function');
}
// type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }
// TODO: can we change these to numbers?
/**
 * Possible types for SubscriptionCallback
 */
var MutationType;
(function (MutationType) {
    /**
     * Direct mutation of the state:
     *
     * - `store.name = 'new name'`
     * - `store.$state.name = 'new name'`
     * - `store.list.push('new item')`
     */
    MutationType["direct"] = "direct";
    /**
     * Mutated the state with `$patch` and an object
     *
     * - `store.$patch({ name: 'newName' })`
     */
    MutationType["patchObject"] = "patch object";
    /**
     * Mutated the state with `$patch` and a function
     *
     * - `store.$patch(state => state.name = 'newName')`
     */
    MutationType["patchFunction"] = "patch function";
    // maybe reset? for $state = {} and $reset
})(MutationType || (MutationType = {}));

/**
 * Creates a Pinia instance to be used by the application
 */
function createPinia() {
    const scope = effectScope(true);
    // NOTE: here we could check the window object for a state and directly set it
    // if there is anything like it with Vue 3 SSR
    const state = scope.run(() => ref({}));
    let _p = [];
    // plugins added before calling app.use(pinia)
    let toBeInstalled = [];
    const pinia = markRaw({
        install(app) {
            // this allows calling useStore() outside of a component setup after
            // installing pinia's plugin
            setActivePinia(pinia);
            {
                pinia._a = app;
                app.provide(piniaSymbol, pinia);
                app.config.globalProperties.$pinia = pinia;
                toBeInstalled.forEach((plugin) => _p.push(plugin));
                toBeInstalled = [];
            }
        },
        use(plugin) {
            if (!this._a && !isVue2) {
                toBeInstalled.push(plugin);
            }
            else {
                _p.push(plugin);
            }
            return this;
        },
        _p,
        // it's actually undefined here
        // @ts-expect-error
        _a: null,
        _e: scope,
        _s: new Map(),
        state,
    });
    return pinia;
}

const noop = () => { };
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
        const idx = subscriptions.indexOf(callback);
        if (idx > -1) {
            subscriptions.splice(idx, 1);
            onCleanup();
        }
    };
    if (!detached && getCurrentInstance()) {
        onUnmounted(removeSubscription);
    }
    return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
        callback(...args);
    });
}

function mergeReactiveObjects(target, patchToApply) {
    // Handle Map instances
    if (target instanceof Map && patchToApply instanceof Map) {
        patchToApply.forEach((value, key) => target.set(key, value));
    }
    // Handle Set instances
    if (target instanceof Set && patchToApply instanceof Set) {
        patchToApply.forEach(target.add, target);
    }
    // no need to go through symbols because they cannot be serialized anyway
    for (const key in patchToApply) {
        if (!patchToApply.hasOwnProperty(key))
            continue;
        const subPatch = patchToApply[key];
        const targetValue = target[key];
        if (isPlainObject$1(targetValue) &&
            isPlainObject$1(subPatch) &&
            target.hasOwnProperty(key) &&
            !isRef(subPatch) &&
            !isReactive(subPatch)) {
            // NOTE: here I wanted to warn about inconsistent types but it's not possible because in setup stores one might
            // start the value of a property as a certain type e.g. a Map, and then for some reason, during SSR, change that
            // to `undefined`. When trying to hydrate, we want to override the Map with `undefined`.
            target[key] = mergeReactiveObjects(targetValue, subPatch);
        }
        else {
            // @ts-expect-error: subPatch is a valid value
            target[key] = subPatch;
        }
    }
    return target;
}
const skipHydrateSymbol = /* istanbul ignore next */ Symbol();
function shouldHydrate(obj) {
    return !isPlainObject$1(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
    return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
        if (!initialState && (!("production" !== 'production') )) {
            /* istanbul ignore if */
            {
                pinia.state.value[id] = state ? state() : {};
            }
        }
        // avoid creating a state in pinia.state.value
        const localState = toRefs(pinia.state.value[id]);
        return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
            computedGetters[name] = markRaw(computed(() => {
                setActivePinia(pinia);
                // it was created just before
                const store = pinia._s.get(id);
                // @ts-expect-error
                // return getters![name].call(context, context)
                // TODO: avoid reading the getter while assigning with a global variable
                return getters[name].call(store, store);
            }));
            return computedGetters;
        }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    store.$reset = function $reset() {
        const newState = state ? state() : {};
        // we use a patch to group all changes into one single subscription
        this.$patch(($state) => {
            assign($state, newState);
        });
    };
    return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    // watcher options for $subscribe
    const $subscribeOptions = {
        deep: true,
        // flush: 'post',
    };
    // internal state
    let isListening; // set to true at the end
    let isSyncListening; // set to true at the end
    let subscriptions = markRaw([]);
    let actionSubscriptions = markRaw([]);
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    // avoid setting the state for option stores if it is set
    // by the setup
    if (!isOptionsStore && !initialState && (!("production" !== 'production') )) {
        /* istanbul ignore if */
        {
            pinia.state.value[$id] = {};
        }
    }
    ref({});
    // avoid triggering too many listeners
    // https://github.com/vuejs/pinia/issues/1129
    let activeListener;
    function $patch(partialStateOrMutator) {
        let subscriptionMutation;
        isListening = isSyncListening = false;
        if (typeof partialStateOrMutator === 'function') {
            partialStateOrMutator(pinia.state.value[$id]);
            subscriptionMutation = {
                type: MutationType.patchFunction,
                storeId: $id,
                events: debuggerEvents,
            };
        }
        else {
            mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
            subscriptionMutation = {
                type: MutationType.patchObject,
                payload: partialStateOrMutator,
                storeId: $id,
                events: debuggerEvents,
            };
        }
        const myListenerId = (activeListener = Symbol());
        nextTick().then(() => {
            if (activeListener === myListenerId) {
                isListening = true;
            }
        });
        isSyncListening = true;
        // because we paused the watcher, we need to manually call the subscriptions
        triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    /* istanbul ignore next */
    const $reset = noop;
    function $dispose() {
        scope.stop();
        subscriptions = [];
        actionSubscriptions = [];
        pinia._s.delete($id);
    }
    /**
     * Wraps an action to handle subscriptions.
     *
     * @param name - name of the action
     * @param action - action to wrap
     * @returns a wrapped action to handle subscriptions
     */
    function wrapAction(name, action) {
        return function () {
            setActivePinia(pinia);
            const args = Array.from(arguments);
            const afterCallbackList = [];
            const onErrorCallbackList = [];
            function after(callback) {
                afterCallbackList.push(callback);
            }
            function onError(callback) {
                onErrorCallbackList.push(callback);
            }
            // @ts-expect-error
            triggerSubscriptions(actionSubscriptions, {
                args,
                name,
                store,
                after,
                onError,
            });
            let ret;
            try {
                ret = action.apply(this && this.$id === $id ? this : store, args);
                // handle sync errors
            }
            catch (error) {
                triggerSubscriptions(onErrorCallbackList, error);
                throw error;
            }
            if (ret instanceof Promise) {
                return ret
                    .then((value) => {
                    triggerSubscriptions(afterCallbackList, value);
                    return value;
                })
                    .catch((error) => {
                    triggerSubscriptions(onErrorCallbackList, error);
                    return Promise.reject(error);
                });
            }
            // allow the afterCallback to override the return value
            triggerSubscriptions(afterCallbackList, ret);
            return ret;
        };
    }
    const partialStore = {
        _p: pinia,
        // _s: scope,
        $id,
        $onAction: addSubscription.bind(null, actionSubscriptions),
        $patch,
        $reset,
        $subscribe(callback, options = {}) {
            const removeSubscription = addSubscription(subscriptions, callback, options.detached, () => stopWatcher());
            const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
                if (options.flush === 'sync' ? isSyncListening : isListening) {
                    callback({
                        storeId: $id,
                        type: MutationType.direct,
                        events: debuggerEvents,
                    }, state);
                }
            }, assign({}, $subscribeOptions, options)));
            return removeSubscription;
        },
        $dispose,
    };
    const store = reactive(assign({}, partialStore
    // must be added later
    // setupStore
    ));
    // store the partial store now so the setup of stores can instantiate each other before they are finished without
    // creating infinite loops.
    pinia._s.set($id, store);
    // TODO: idea create skipSerialize that marks properties as non serializable and they are skipped
    const setupStore = pinia._e.run(() => {
        scope = effectScope();
        return scope.run(() => setup());
    });
    // overwrite existing actions to support $onAction
    for (const key in setupStore) {
        const prop = setupStore[key];
        if ((isRef(prop) && !isComputed(prop)) || isReactive(prop)) {
            // mark it as a piece of state to be serialized
            if (!isOptionsStore) {
                // in setup stores we must hydrate the state and sync pinia state tree with the refs the user just created
                if (initialState && shouldHydrate(prop)) {
                    if (isRef(prop)) {
                        prop.value = initialState[key];
                    }
                    else {
                        // probably a reactive object, lets recursively assign
                        mergeReactiveObjects(prop, initialState[key]);
                    }
                }
                // transfer the ref to the pinia state to keep everything in sync
                /* istanbul ignore if */
                {
                    pinia.state.value[$id][key] = prop;
                }
            }
            // action
        }
        else if (typeof prop === 'function') {
            // @ts-expect-error: we are overriding the function we avoid wrapping if
            const actionValue = wrapAction(key, prop);
            // this a hot module replacement store because the hotUpdate method needs
            // to do it with the right context
            /* istanbul ignore if */
            {
                // @ts-expect-error
                setupStore[key] = actionValue;
            }
            // list actions so they can be used in plugins
            // @ts-expect-error
            optionsForPlugin.actions[key] = prop;
        }
        else ;
    }
    // add the state, getters, and action properties
    /* istanbul ignore if */
    {
        assign(store, setupStore);
        // allows retrieving reactive objects with `storeToRefs()`. Must be called after assigning to the reactive object.
        // Make `storeToRefs()` work with `reactive()` #799
        assign(toRaw(store), setupStore);
    }
    // use this instead of a computed with setter to be able to create it anywhere
    // without linking the computed lifespan to wherever the store is first
    // created.
    Object.defineProperty(store, '$state', {
        get: () => (pinia.state.value[$id]),
        set: (state) => {
            $patch(($state) => {
                assign($state, state);
            });
        },
    });
    // apply all plugins
    pinia._p.forEach((extender) => {
        /* istanbul ignore else */
        {
            assign(store, scope.run(() => extender({
                store,
                app: pinia._a,
                pinia,
                options: optionsForPlugin,
            })));
        }
    });
    // only apply hydrate to option stores with an initial state in pinia
    if (initialState &&
        isOptionsStore &&
        options.hydrate) {
        options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
}
function defineStore(
// TODO: add proper types from above
idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === 'function';
    if (typeof idOrOptions === 'string') {
        id = idOrOptions;
        // the option store setup will contain the actual options in this case
        options = isSetupStore ? setupOptions : setup;
    }
    else {
        options = idOrOptions;
        id = idOrOptions.id;
    }
    function useStore(pinia, hot) {
        const currentInstance = getCurrentInstance();
        pinia =
            // in test mode, ignore the argument provided as we can always retrieve a
            // pinia instance with getActivePinia()
            (pinia) ||
                (currentInstance && inject(piniaSymbol));
        if (pinia)
            setActivePinia(pinia);
        pinia = activePinia;
        if (!pinia._s.has(id)) {
            // creating the store registers it in `pinia._s`
            if (isSetupStore) {
                createSetupStore(id, setup, options, pinia);
            }
            else {
                createOptionsStore(id, options, pinia);
            }
        }
        const store = pinia._s.get(id);
        // StoreGeneric cannot be casted towards Store
        return store;
    }
    useStore.$id = id;
    return useStore;
}

/**
 * Creates an object of references with all the state, getters, and plugin-added
 * state properties of the store. Similar to `toRefs()` but specifically
 * designed for Pinia stores so methods and non reactive properties are
 * completely ignored.
 *
 * @param store - store to extract the refs from
 */
function storeToRefs(store) {
    // See https://github.com/vuejs/pinia/issues/852
    // It's easier to just use toRefs() even if it includes more stuff
    {
        store = toRaw(store);
        const refs = {};
        for (const key in store) {
            const value = store[key];
            if (isRef(value) || isReactive(value)) {
                // @ts-expect-error: the key is state or getter
                refs[key] =
                    // ---
                    toRef(store, key);
            }
        }
        return refs;
    }
}

var axios$2 = {exports: {}};

var bind$2 = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

var bind$1 = bind$2;

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

var utils$d = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

var utils$c = utils$d;

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL$2 = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$c.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils$c.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils$c.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils$c.forEach(val, function parseValue(v) {
        if (utils$c.isDate(v)) {
          v = v.toISOString();
        } else if (utils$c.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

var utils$b = utils$d;

function InterceptorManager$1() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager$1.prototype.forEach = function forEach(fn) {
  utils$b.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager$1;

var utils$a = utils$d;

var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$a.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError$2 = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

var enhanceError$1 = enhanceError$2;

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError$2 = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError$1(error, config, code, request, response);
};

var createError$1 = createError$2;

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle$1 = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError$1(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

var utils$9 = utils$d;

var cookies$1 = (
  utils$9.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils$9.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils$9.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils$9.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

var isAbsoluteURL = isAbsoluteURL$1;
var combineURLs = combineURLs$1;

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

var utils$8 = utils$d;

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders$1 = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils$8.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils$8.trim(line.substr(0, i)).toLowerCase();
    val = utils$8.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

var utils$7 = utils$d;

var isURLSameOrigin$1 = (
  utils$7.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils$7.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

var utils$6 = utils$d;
var settle = settle$1;
var cookies = cookies$1;
var buildURL$1 = buildURL$2;
var buildFullPath = buildFullPath$1;
var parseHeaders = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError = createError$2;

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;

    if (utils$6.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL$1(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils$6.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$6.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils$6.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

var utils$5 = utils$d;
var normalizeHeaderName = normalizeHeaderName$1;
var enhanceError = enhanceError$2;

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = xhr;
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils$5.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$5.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults$3 = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils$5.isFormData(data) ||
      utils$5.isArrayBuffer(data) ||
      utils$5.isBuffer(data) ||
      utils$5.isStream(data) ||
      utils$5.isFile(data) ||
      utils$5.isBlob(data)
    ) {
      return data;
    }
    if (utils$5.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$5.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils$5.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils$5.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults$3.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils$5.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});

utils$5.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults$3;

var utils$4 = utils$d;
var defaults$2 = defaults_1;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData$1 = function transformData(data, headers, fns) {
  var context = this || defaults$2;
  /*eslint no-param-reassign:0*/
  utils$4.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};

var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

var utils$3 = utils$d;
var transformData = transformData$1;
var isCancel = isCancel$1;
var defaults$1 = defaults_1;

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest$1 = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils$3.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils$3.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults$1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

var utils$2 = utils$d;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig$2 = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source)) {
      return utils$2.merge(target, source);
    } else if (utils$2.isPlainObject(source)) {
      return utils$2.merge({}, source);
    } else if (utils$2.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils$2.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils$2.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils$2.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils$2.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils$2.forEach(otherKeys, mergeDeepProperties);

  return config;
};

const name = "axios";
const version = "0.21.4";
const description = "Promise based HTTP client for the browser and node.js";
const main = "index.js";
const scripts = {
	test: "grunt test",
	start: "node ./sandbox/server.js",
	build: "NODE_ENV=production grunt build",
	preversion: "npm test",
	version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
	postversion: "git push && git push --tags",
	examples: "node ./examples/server.js",
	coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
	fix: "eslint --fix lib/**/*.js"
};
const repository = {
	type: "git",
	url: "https://github.com/axios/axios.git"
};
const keywords = [
	"xhr",
	"http",
	"ajax",
	"promise",
	"node"
];
const author = "Matt Zabriskie";
const license = "MIT";
const bugs = {
	url: "https://github.com/axios/axios/issues"
};
const homepage = "https://axios-http.com";
const devDependencies = {
	coveralls: "^3.0.0",
	"es6-promise": "^4.2.4",
	grunt: "^1.3.0",
	"grunt-banner": "^0.6.0",
	"grunt-cli": "^1.2.0",
	"grunt-contrib-clean": "^1.1.0",
	"grunt-contrib-watch": "^1.0.0",
	"grunt-eslint": "^23.0.0",
	"grunt-karma": "^4.0.0",
	"grunt-mocha-test": "^0.13.3",
	"grunt-ts": "^6.0.0-beta.19",
	"grunt-webpack": "^4.0.2",
	"istanbul-instrumenter-loader": "^1.0.0",
	"jasmine-core": "^2.4.1",
	karma: "^6.3.2",
	"karma-chrome-launcher": "^3.1.0",
	"karma-firefox-launcher": "^2.1.0",
	"karma-jasmine": "^1.1.1",
	"karma-jasmine-ajax": "^0.1.13",
	"karma-safari-launcher": "^1.0.0",
	"karma-sauce-launcher": "^4.3.6",
	"karma-sinon": "^1.0.5",
	"karma-sourcemap-loader": "^0.3.8",
	"karma-webpack": "^4.0.2",
	"load-grunt-tasks": "^3.5.2",
	minimist: "^1.2.0",
	mocha: "^8.2.1",
	sinon: "^4.5.0",
	"terser-webpack-plugin": "^4.2.3",
	typescript: "^4.0.5",
	"url-search-params": "^0.10.0",
	webpack: "^4.44.2",
	"webpack-dev-server": "^3.11.0"
};
const browser = {
	"./lib/adapters/http.js": "./lib/adapters/xhr.js"
};
const jsdelivr = "dist/axios.min.js";
const unpkg = "dist/axios.min.js";
const typings = "./index.d.ts";
const dependencies = {
	"follow-redirects": "^1.14.0"
};
const bundlesize = [
	{
		path: "./dist/axios.min.js",
		threshold: "5kB"
	}
];
var require$$0 = {
	name: name,
	version: version,
	description: description,
	main: main,
	scripts: scripts,
	repository: repository,
	keywords: keywords,
	author: author,
	license: license,
	bugs: bugs,
	homepage: homepage,
	devDependencies: devDependencies,
	browser: browser,
	jsdelivr: jsdelivr,
	unpkg: unpkg,
	typings: typings,
	dependencies: dependencies,
	bundlesize: bundlesize
};

var pkg = require$$0;

var validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);

  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }

    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

var validator$1 = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators$1
};

var utils$1 = utils$d;
var buildURL = buildURL$2;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios$1.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig$1(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios$1.prototype.getUri = function getUri(config) {
  config = mergeConfig$1(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios$1.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig$1(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

var Axios_1 = Axios$1;

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel$1(message) {
  this.message = message;
}

Cancel$1.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel$1.prototype.__CANCEL__ = true;

var Cancel_1 = Cancel$1;

var Cancel = Cancel_1;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
var isAxiosError = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};

var utils = utils$d;
var bind = bind$2;
var Axios = Axios_1;
var mergeConfig = mergeConfig$2;
var defaults = defaults_1;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios$1 = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios$1.Axios = Axios;

// Factory for creating new instances
axios$1.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios$1.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel$1;

// Expose all/spread
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;

// Expose isAxiosError
axios$1.isAxiosError = isAxiosError;

axios$2.exports = axios$1;

// Allow use of default import syntax in TypeScript
axios$2.exports.default = axios$1;

var axios = axios$2.exports;

/*
 *  ┌─────────────────────────────────────────────────────────────┐
 *  │┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐│
 *  ││Esc│!1 │@2 │#3 │$4 │%5 │^6 │&7 │*8 │(9 │)0 │_- │+= │|\ │`~ ││
 *  │├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┤│
 *  ││ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{[ │}] │ BS  ││
 *  │├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤│
 *  ││ Ctrl │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  ││
 *  │├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────┬───┤│
 *  ││ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│Shift │Fn ││
 *  │└─────┬──┴┬──┴──┬┴───┴───┴───┴───┴───┴──┬┴───┴┬──┴┬─────┴───┘│
 *  │      │Fn │ Alt │         Space         │ Alt │Win│   HHKB   │
 *  │      └───┴─────┴───────────────────────┴─────┴───┘          │
 *  └─────────────────────────────────────────────────────────────┘
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 12:48:37
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const getItem = name => {
  const data = window.localStorage.getItem(name);
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
};

const setItem = (name, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }

  window.localStorage.setItem(name, value);
};

const removeItem = name => {
  window.localStorage.removeItem(name);
};

var aes = {exports: {}};

var core = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory();
	}
}(commonjsGlobal$1, function () {

	/*globals window, global, require*/

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined$1) {

	    var crypto;

	    // Native crypto from window (Browser)
	    if (typeof window !== 'undefined' && window.crypto) {
	        crypto = window.crypto;
	    }

	    // Native crypto in web worker (Browser)
	    if (typeof self !== 'undefined' && self.crypto) {
	        crypto = self.crypto;
	    }

	    // Native crypto from worker
	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
	        crypto = globalThis.crypto;
	    }

	    // Native (experimental IE 11) crypto from window (Browser)
	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
	        crypto = window.msCrypto;
	    }

	    // Native crypto from global (NodeJS)
	    if (!crypto && typeof commonjsGlobal$1 !== 'undefined' && commonjsGlobal$1.crypto) {
	        crypto = commonjsGlobal$1.crypto;
	    }

	    // Native crypto import via require (NodeJS)
	    if (!crypto && typeof commonjsRequire === 'function') {
	        try {
	            crypto = require('crypto');
	        } catch (err) {}
	    }

	    /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */
	    var cryptoSecureRandomInt = function () {
	        if (crypto) {
	            // Use getRandomValues method (Browser)
	            if (typeof crypto.getRandomValues === 'function') {
	                try {
	                    return crypto.getRandomValues(new Uint32Array(1))[0];
	                } catch (err) {}
	            }

	            // Use randomBytes method (NodeJS)
	            if (typeof crypto.randomBytes === 'function') {
	                try {
	                    return crypto.randomBytes(4).readInt32LE();
	                } catch (err) {}
	            }
	        }

	        throw new Error('Native crypto module could not be used to get secure random number.');
	    };

	    /*
	     * Local polyfill of Object.create

	     */
	    var create = Object.create || (function () {
	        function F() {}

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }());

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined$1) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var j = 0; j < thatSigBytes; j += 4) {
	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            for (var i = 0; i < nBytes; i += 4) {
	                words.push(cryptoSecureRandomInt());
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            var processedWords;

	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));
}(core));

var encBase64 = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core.exports);
	}
}(commonjsGlobal$1, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              var bitsCombined = bits1 | bits2;
	              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));
}(encBase64));

var md5 = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core.exports);
	}
}(commonjsGlobal$1, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));
}(md5));

var evpkdf = {exports: {}};

var sha1 = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core.exports);
	}
}(commonjsGlobal$1, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	return CryptoJS.SHA1;

}));
}(sha1));

var hmac = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core.exports);
	}
}(commonjsGlobal$1, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


}));
}(hmac));

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, sha1.exports, hmac.exports);
	}
}(commonjsGlobal$1, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var MD5 = C_algo.MD5;

	    /**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */
	    var EvpKDF = C_algo.EvpKDF = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: MD5,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            var block;

	            // Shortcut
	            var cfg = this.cfg;

	            // Init hasher
	            var hasher = cfg.hasher.create();

	            // Initial values
	            var derivedKey = WordArray.create();

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                if (block) {
	                    hasher.update(block);
	                }
	                block = hasher.update(password).finalize(salt);
	                hasher.reset();

	                // Iterations
	                for (var i = 1; i < iterations; i++) {
	                    block = hasher.finalize(block);
	                    hasher.reset();
	                }

	                derivedKey.concat(block);
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.EvpKDF = function (password, salt, cfg) {
	        return EvpKDF.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.EvpKDF;

}));
}(evpkdf));

var cipherCore = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, evpkdf.exports);
	}
}(commonjsGlobal$1, function (CryptoJS) {

	/**
	 * Cipher core components.
	 */
	CryptoJS.lib.Cipher || (function (undefined$1) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
	    var C_enc = C.enc;
	    C_enc.Utf8;
	    var Base64 = C_enc.Base64;
	    var C_algo = C.algo;
	    var EvpKDF = C_algo.EvpKDF;

	    /**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */
	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */
	        cfg: Base.extend(),

	        /**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createEncryptor: function (key, cfg) {
	            return this.create(this._ENC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createDecryptor: function (key, cfg) {
	            return this.create(this._DEC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */
	        init: function (xformMode, key, cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Store transform mode and key
	            this._xformMode = xformMode;
	            this._key = key;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-cipher logic
	            this._doReset();
	        },

	        /**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */
	        process: function (dataUpdate) {
	            // Append
	            this._append(dataUpdate);

	            // Process available blocks
	            return this._process();
	        },

	        /**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */
	        finalize: function (dataUpdate) {
	            // Final data update
	            if (dataUpdate) {
	                this._append(dataUpdate);
	            }

	            // Perform concrete-cipher logic
	            var finalProcessedData = this._doFinalize();

	            return finalProcessedData;
	        },

	        keySize: 128/32,

	        ivSize: 128/32,

	        _ENC_XFORM_MODE: 1,

	        _DEC_XFORM_MODE: 2,

	        /**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */
	        _createHelper: (function () {
	            function selectCipherStrategy(key) {
	                if (typeof key == 'string') {
	                    return PasswordBasedCipher;
	                } else {
	                    return SerializableCipher;
	                }
	            }

	            return function (cipher) {
	                return {
	                    encrypt: function (message, key, cfg) {
	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
	                    },

	                    decrypt: function (ciphertext, key, cfg) {
	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
	                    }
	                };
	            };
	        }())
	    });

	    /**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */
	    C_lib.StreamCipher = Cipher.extend({
	        _doFinalize: function () {
	            // Process partial blocks
	            var finalProcessedBlocks = this._process(!!'flush');

	            return finalProcessedBlocks;
	        },

	        blockSize: 1
	    });

	    /**
	     * Mode namespace.
	     */
	    var C_mode = C.mode = {};

	    /**
	     * Abstract base block cipher mode template.
	     */
	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
	        /**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */
	        createEncryptor: function (cipher, iv) {
	            return this.Encryptor.create(cipher, iv);
	        },

	        /**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */
	        createDecryptor: function (cipher, iv) {
	            return this.Decryptor.create(cipher, iv);
	        },

	        /**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */
	        init: function (cipher, iv) {
	            this._cipher = cipher;
	            this._iv = iv;
	        }
	    });

	    /**
	     * Cipher Block Chaining mode.
	     */
	    var CBC = C_mode.CBC = (function () {
	        /**
	         * Abstract base CBC mode.
	         */
	        var CBC = BlockCipherMode.extend();

	        /**
	         * CBC encryptor.
	         */
	        CBC.Encryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // XOR and encrypt
	                xorBlock.call(this, words, offset, blockSize);
	                cipher.encryptBlock(words, offset);

	                // Remember this block to use with next block
	                this._prevBlock = words.slice(offset, offset + blockSize);
	            }
	        });

	        /**
	         * CBC decryptor.
	         */
	        CBC.Decryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // Remember this block to use with next block
	                var thisBlock = words.slice(offset, offset + blockSize);

	                // Decrypt and XOR
	                cipher.decryptBlock(words, offset);
	                xorBlock.call(this, words, offset, blockSize);

	                // This block becomes the previous block
	                this._prevBlock = thisBlock;
	            }
	        });

	        function xorBlock(words, offset, blockSize) {
	            var block;

	            // Shortcut
	            var iv = this._iv;

	            // Choose mixing block
	            if (iv) {
	                block = iv;

	                // Remove IV for subsequent blocks
	                this._iv = undefined$1;
	            } else {
	                block = this._prevBlock;
	            }

	            // XOR blocks
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= block[i];
	            }
	        }

	        return CBC;
	    }());

	    /**
	     * Padding namespace.
	     */
	    var C_pad = C.pad = {};

	    /**
	     * PKCS #5/7 padding strategy.
	     */
	    var Pkcs7 = C_pad.Pkcs7 = {
	        /**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */
	        pad: function (data, blockSize) {
	            // Shortcut
	            var blockSizeBytes = blockSize * 4;

	            // Count padding bytes
	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	            // Create padding word
	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

	            // Create padding
	            var paddingWords = [];
	            for (var i = 0; i < nPaddingBytes; i += 4) {
	                paddingWords.push(paddingWord);
	            }
	            var padding = WordArray.create(paddingWords, nPaddingBytes);

	            // Add padding
	            data.concat(padding);
	        },

	        /**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */
	        unpad: function (data) {
	            // Get number of padding bytes from last byte
	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	            // Remove padding
	            data.sigBytes -= nPaddingBytes;
	        }
	    };

	    /**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */
	    C_lib.BlockCipher = Cipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */
	        cfg: Cipher.cfg.extend({
	            mode: CBC,
	            padding: Pkcs7
	        }),

	        reset: function () {
	            var modeCreator;

	            // Reset cipher
	            Cipher.reset.call(this);

	            // Shortcuts
	            var cfg = this.cfg;
	            var iv = cfg.iv;
	            var mode = cfg.mode;

	            // Reset block mode
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                modeCreator = mode.createEncryptor;
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                modeCreator = mode.createDecryptor;
	                // Keep at least one block in the buffer for unpadding
	                this._minBufferSize = 1;
	            }

	            if (this._mode && this._mode.__creator == modeCreator) {
	                this._mode.init(this, iv && iv.words);
	            } else {
	                this._mode = modeCreator.call(mode, this, iv && iv.words);
	                this._mode.__creator = modeCreator;
	            }
	        },

	        _doProcessBlock: function (words, offset) {
	            this._mode.processBlock(words, offset);
	        },

	        _doFinalize: function () {
	            var finalProcessedBlocks;

	            // Shortcut
	            var padding = this.cfg.padding;

	            // Finalize
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                // Pad data
	                padding.pad(this._data, this.blockSize);

	                // Process final blocks
	                finalProcessedBlocks = this._process(!!'flush');
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                // Process final blocks
	                finalProcessedBlocks = this._process(!!'flush');

	                // Unpad data
	                padding.unpad(finalProcessedBlocks);
	            }

	            return finalProcessedBlocks;
	        },

	        blockSize: 128/32
	    });

	    /**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */
	    var CipherParams = C_lib.CipherParams = Base.extend({
	        /**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */
	        init: function (cipherParams) {
	            this.mixIn(cipherParams);
	        },

	        /**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */
	        toString: function (formatter) {
	            return (formatter || this.formatter).stringify(this);
	        }
	    });

	    /**
	     * Format namespace.
	     */
	    var C_format = C.format = {};

	    /**
	     * OpenSSL formatting strategy.
	     */
	    var OpenSSLFormatter = C_format.OpenSSL = {
	        /**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            var wordArray;

	            // Shortcuts
	            var ciphertext = cipherParams.ciphertext;
	            var salt = cipherParams.salt;

	            // Format
	            if (salt) {
	                wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
	            } else {
	                wordArray = ciphertext;
	            }

	            return wordArray.toString(Base64);
	        },

	        /**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */
	        parse: function (openSSLStr) {
	            var salt;

	            // Parse base64
	            var ciphertext = Base64.parse(openSSLStr);

	            // Shortcut
	            var ciphertextWords = ciphertext.words;

	            // Test for salt
	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
	                // Extract salt
	                salt = WordArray.create(ciphertextWords.slice(2, 4));

	                // Remove salt from ciphertext
	                ciphertextWords.splice(0, 4);
	                ciphertext.sigBytes -= 16;
	            }

	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
	        }
	    };

	    /**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */
	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */
	        cfg: Base.extend({
	            format: OpenSSLFormatter
	        }),

	        /**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Encrypt
	            var encryptor = cipher.createEncryptor(key, cfg);
	            var ciphertext = encryptor.finalize(message);

	            // Shortcut
	            var cipherCfg = encryptor.cfg;

	            // Create and return serializable cipher params
	            return CipherParams.create({
	                ciphertext: ciphertext,
	                key: key,
	                iv: cipherCfg.iv,
	                algorithm: cipher,
	                mode: cipherCfg.mode,
	                padding: cipherCfg.padding,
	                blockSize: cipher.blockSize,
	                formatter: cfg.format
	            });
	        },

	        /**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Decrypt
	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

	            return plaintext;
	        },

	        /**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */
	        _parse: function (ciphertext, format) {
	            if (typeof ciphertext == 'string') {
	                return format.parse(ciphertext, this);
	            } else {
	                return ciphertext;
	            }
	        }
	    });

	    /**
	     * Key derivation function namespace.
	     */
	    var C_kdf = C.kdf = {};

	    /**
	     * OpenSSL key derivation function.
	     */
	    var OpenSSLKdf = C_kdf.OpenSSL = {
	        /**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */
	        execute: function (password, keySize, ivSize, salt) {
	            // Generate random salt
	            if (!salt) {
	                salt = WordArray.random(64/8);
	            }

	            // Derive key and IV
	            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

	            // Separate key and IV
	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
	            key.sigBytes = keySize * 4;

	            // Return params
	            return CipherParams.create({ key: key, iv: iv, salt: salt });
	        }
	    };

	    /**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */
	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */
	        cfg: SerializableCipher.cfg.extend({
	            kdf: OpenSSLKdf
	        }),

	        /**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Encrypt
	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

	            // Mix in derived params
	            ciphertext.mixIn(derivedParams);

	            return ciphertext;
	        },

	        /**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Decrypt
	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

	            return plaintext;
	        }
	    });
	}());


}));
}(cipherCore));

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, encBase64.exports, md5.exports, evpkdf.exports, cipherCore.exports);
	}
}(commonjsGlobal$1, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Lookup tables
	    var SBOX = [];
	    var INV_SBOX = [];
	    var SUB_MIX_0 = [];
	    var SUB_MIX_1 = [];
	    var SUB_MIX_2 = [];
	    var SUB_MIX_3 = [];
	    var INV_SUB_MIX_0 = [];
	    var INV_SUB_MIX_1 = [];
	    var INV_SUB_MIX_2 = [];
	    var INV_SUB_MIX_3 = [];

	    // Compute lookup tables
	    (function () {
	        // Compute double table
	        var d = [];
	        for (var i = 0; i < 256; i++) {
	            if (i < 128) {
	                d[i] = i << 1;
	            } else {
	                d[i] = (i << 1) ^ 0x11b;
	            }
	        }

	        // Walk GF(2^8)
	        var x = 0;
	        var xi = 0;
	        for (var i = 0; i < 256; i++) {
	            // Compute sbox
	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	            SBOX[x] = sx;
	            INV_SBOX[sx] = x;

	            // Compute multiplication
	            var x2 = d[x];
	            var x4 = d[x2];
	            var x8 = d[x4];

	            // Compute sub bytes, mix columns tables
	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
	            SUB_MIX_3[x] = t;

	            // Compute inv sub bytes, inv mix columns tables
	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
	            INV_SUB_MIX_3[sx] = t;

	            // Compute next counter
	            if (!x) {
	                x = xi = 1;
	            } else {
	                x = x2 ^ d[d[d[x8 ^ x2]]];
	                xi ^= d[d[xi]];
	            }
	        }
	    }());

	    // Precomputed Rcon lookup
	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

	    /**
	     * AES block cipher algorithm.
	     */
	    var AES = C_algo.AES = BlockCipher.extend({
	        _doReset: function () {
	            var t;

	            // Skip reset of nRounds has been set before and key did not change
	            if (this._nRounds && this._keyPriorReset === this._key) {
	                return;
	            }

	            // Shortcuts
	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            // Compute number of rounds
	            var nRounds = this._nRounds = keySize + 6;

	            // Compute number of key schedule rows
	            var ksRows = (nRounds + 1) * 4;

	            // Compute key schedule
	            var keySchedule = this._keySchedule = [];
	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
	                if (ksRow < keySize) {
	                    keySchedule[ksRow] = keyWords[ksRow];
	                } else {
	                    t = keySchedule[ksRow - 1];

	                    if (!(ksRow % keySize)) {
	                        // Rot word
	                        t = (t << 8) | (t >>> 24);

	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

	                        // Mix Rcon
	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
	                    } else if (keySize > 6 && ksRow % keySize == 4) {
	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
	                    }

	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
	                }
	            }

	            // Compute inv key schedule
	            var invKeySchedule = this._invKeySchedule = [];
	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	                var ksRow = ksRows - invKsRow;

	                if (invKsRow % 4) {
	                    var t = keySchedule[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 4];
	                }

	                if (invKsRow < 4 || ksRow <= 4) {
	                    invKeySchedule[invKsRow] = t;
	                } else {
	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
	                }
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
	        },

	        decryptBlock: function (M, offset) {
	            // Swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;

	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

	            // Inv swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;
	        },

	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
	            // Shortcut
	            var nRounds = this._nRounds;

	            // Get input, add round key
	            var s0 = M[offset]     ^ keySchedule[0];
	            var s1 = M[offset + 1] ^ keySchedule[1];
	            var s2 = M[offset + 2] ^ keySchedule[2];
	            var s3 = M[offset + 3] ^ keySchedule[3];

	            // Key schedule row counter
	            var ksRow = 4;

	            // Rounds
	            for (var round = 1; round < nRounds; round++) {
	                // Shift rows, sub bytes, mix columns, add round key
	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

	                // Update state
	                s0 = t0;
	                s1 = t1;
	                s2 = t2;
	                s3 = t3;
	            }

	            // Shift rows, sub bytes, add round key
	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

	            // Set output
	            M[offset]     = t0;
	            M[offset + 1] = t1;
	            M[offset + 2] = t2;
	            M[offset + 3] = t3;
	        },

	        keySize: 256/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */
	    C.AES = BlockCipher._createHelper(AES);
	}());


	return CryptoJS.AES;

}));
}(aes));

var encUtf8 = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core.exports);
	}
}(commonjsGlobal$1, function (CryptoJS) {

	return CryptoJS.enc.Utf8;

}));
}(encUtf8));

var UTF8 = encUtf8.exports;

var padPkcs7 = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, cipherCore.exports);
	}
}(commonjsGlobal$1, function (CryptoJS) {

	return CryptoJS.pad.Pkcs7;

}));
}(padPkcs7));

var pkcs7 = padPkcs7.exports;

var modeEcb = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, cipherCore.exports);
	}
}(commonjsGlobal$1, function (CryptoJS) {

	/**
	 * Electronic Codebook block mode.
	 */
	CryptoJS.mode.ECB = (function () {
	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

	    ECB.Encryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.encryptBlock(words, offset);
	        }
	    });

	    ECB.Decryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.decryptBlock(words, offset);
	        }
	    });

	    return ECB;
	}());


	return CryptoJS.mode.ECB;

}));
}(modeEcb));

var ECB = modeEcb.exports;

/*
 *
 * 　　┏┓　　　┏┓+ +
 * 　┏┛┻━━━┛┻┓ + +
 * 　┃　　　　　　　┃
 * 　┃　　　━　　　┃ ++ + + +
 *  ████━████ ┃+
 * 　┃　　　　　　　┃ +
 * 　┃　　　┻　　　┃
 * 　┃　　　　　　　┃ + +
 * 　┗━┓　　　┏━┛
 * 　　　┃　　　┃
 * 　　　┃　　　┃ + + + +
 * 　　　┃　　　┃
 * 　　　┃　　　┃ +  神兽保佑
 * 　　　┃　　　┃    代码无bug
 * 　　　┃　　　┃　　+
 * 　　　┃　 　　┗━━━┓ + +
 * 　　　┃ 　　　　　　　┣┓
 * 　　　┃ 　　　　　　　┏┛
 * 　　　┗┓┓┏━┳┓┏┛ + + + +
 * 　　　　┃┫┫　┃┫┫
 * 　　　　┗┻┛　┗┻┛+ + + +
 *
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-23 12:35:44
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-23 13:59:04
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

// 16位密钥
const KEY_IV = {
  key: '_11111000001111@',
  iv: '@11111000001111_',
};

// AES加密和解密
class AesEncryption {
  constructor(opt = KEY_IV) {
    const { key, iv } = opt;
    if (key) {
      this.key = encUtf8.exports.parse(key);
    }
    if (iv) {
      this.iv = encUtf8.exports.parse(iv);
    }
  }

  get getOptions() {
    return {
      mode: ECB,
      padding: pkcs7,
      iv: this.iv,
    }
  }

  encryptByAES(cipherText) {
    return aes.exports.encrypt(cipherText, this.key, this.getOptions).toString()
  }

  decryptByAES(cipherText) {
    return aes.exports.decrypt(cipherText, this.key, this.getOptions).toString(UTF8)
  }
}

/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 16:49:31
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
const TAGLIST = 'VEA-TAGLIST';

const useTags = defineStore('tags', {
  state: () => ({
    tagList: getItem(TAGLIST) || [],
    cacheList: [],
    activePosition: -1,
  }),
  actions: {
    saveActivePosition(index) {
      this.activePosition = index;
    },
    addTag({ path, fullPath, name, meta, params, query }) {
      if (this.tagList.some(v => v.path === path)) return false
      // 添加tagList
      const target = Object.assign(
        {},
        { path, fullPath, name, meta, params, query },
        {
          title: meta.title || '未命名',
          fullPath: fullPath || path,
        }
      );
      if (this.activePosition === -1) {
        if (name === 'home') {
          this.tagList.unshift(target);
        } else {
          this.tagList.push(target);
        }
      } else {
        this.tagList.splice(this.activePosition + 1, 0, target);
      }
      // 保存到localStorage
      setItem(TAGLIST, this.tagList);

      // 添加cacheList
      if (this.cacheList.includes(name)) return
      if (!meta.noCache) {
        this.cacheList.push(name);
      }
    },
    deTagList(tag) {
      // 删除tagList
      this.tagList = this.tagList.filter(v => v.path !== tag.path);
      // 保存到localStorage
      setItem(TAGLIST, this.tagList);
    },
    deCacheList(tag) {
      // 删除cacheList
      this.cacheList = this.cacheList.filter(v => v !== tag.name);
    },
    delTag(tag) {
      // 删除tagList
      this.deTagList(tag);

      // 删除cacheList
      this.deCacheList(tag);
    },
    delOtherTags(tag) {
      this.tagList = this.tagList.filter(
        v => !!v.meta.affix || v.path === tag.path
      );
      // 保存到localStorage
      setItem(TAGLIST, this.tagList);

      this.cacheList = this.cacheList.filter(v => v === tag.name);
    },
    delSomeTags(tags) {
      this.tagList = this.tagList.filter(
        v => !!v.meta.affix || tags.every(tag => tag.path !== v.path)
      );
      // 保存到localStorage
      setItem(TAGLIST, this.tagList);

      this.cacheList = this.cacheList.filter(v =>
        tags.every(tag => tag.name !== v)
      );
    },
    delAllTags() {
      this.tagList = this.tagList.filter(v => !!v.meta.affix);
      // 保存到localStorage
      removeItem(TAGLIST);
      this.cacheList = [];
    },
    updateTagList(tag) {
      const index = this.tagList.findIndex(v => v.path === tag.path);
      if (index > -1) {
        this.tagList[index] = Object.assign({}, this.tagList[index], tag);
        // 保存到localStorage
        setItem(TAGLIST, this.tagList);
      }
    },
    clearAllTags() {
      this.cacheList = [];
      this.tagList = [];
      // 保存到localStorage
      removeItem(TAGLIST);
    },
  },
});

/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-07-26 13:37:30
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

// 获取菜单
const GetMenus = params => {
  // 响应内容
  const childs = [
    {
      name: 'testList',
      title: '列表',
    },
    {
      name: 'testAdd',
      title: '添加',
    },
    {
      name: 'testEdit',
      title: '编辑',
    },
    // {
    //   name: 'testAuth',
    //   title: '权限测试',
    // },
    {
      name: 'test-cache',
      title: '该页面可缓存',
    },
    {
      name: 'test-no-cache',
      title: '该页面不可缓存',
    },
    {
      name: 'nest',
      title: '二级菜单',
      children: [
        {
          name: 'nestPage1',
          title: 'page1',
        },
        {
          name: 'nestPage2',
          title: 'page2',
        },
      ],
    },
    {
      name: 'test-error-log',
      title: '测试错误日志',
    },
  ];

  return {
    code: 200,
    message: '获取菜单成功',
    data: [
      {
        name: 'test',
        title: '测试页面',
        children: childs,
      },
    ],
  }

  // return request({
  //   url: '/api/menus',
  //   method: 'get',
  //   params,
  // })
};

/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 16:41:46
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const useMenus = defineStore('menu', () => {
  const generateUrl = (path, parentPath) => {
    return path.startsWith('/')
      ? path
      : path
      ? `${parentPath}/${path}`
      : parentPath
  };

  const getFilterRoutes = (targetRoutes, ajaxRoutes) => {
    const filterRoutes = [];

    ajaxRoutes.forEach(item => {
      const target = targetRoutes.find(target => target.name === item.name);

      if (target) {
        const { children: targetChildren, ...rest } = target;
        const route = {
          ...rest,
        };

        if (item.children) {
          route.children = getFilterRoutes(targetChildren, item.children);
        }

        filterRoutes.push(route);
      }
    });

    return filterRoutes
  };

  const getFilterMenus = (arr, parentPath = '') => {
    const menus = [];

    arr.forEach(item => {
      if (!item.hidden) {
        const menu = {
          url: generateUrl(item.path, parentPath),
          title: item.meta.title,
          icon: item.icon,
        };
        if (item.children) {
          if (item.children.filter(child => !child.hidden).length <= 1) {
            menu.url = generateUrl(item.children[0].path, menu.url);
          } else {
            menu.children = getFilterMenus(item.children, menu.url);
          }
        }
        menus.push(menu);
      }
    });

    return menus
  };

  const menus = ref([]);
  const setMenus = data => {
    menus.value = data;
  };
  const generateMenus = async () => {
    // // 方式一：只有固定菜单
    // const menus = getFilterMenus(fixedRoutes)
    // commit('SET_MENUS', menus)

    // 方式二：有动态菜单
    // 从后台获取菜单
    const { code, data } = await GetMenus();

    if (+code === 200) {
      // 添加路由之前先删除所有动态路由
      asyncRoutes.forEach(item => {
        router$1.removeRoute(item.name);
      });
      // 过滤出需要添加的动态路由
      const filterRoutes = getFilterRoutes(asyncRoutes, data);
      filterRoutes.forEach(route => router$1.addRoute(route));

      // 生成菜单
      const menus = getFilterMenus([...fixedRoutes, ...filterRoutes]);
      setMenus(menus);
    }
  };
  return {
    menus,
    setMenus,
    generateMenus,
  }
});

/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 15:42:35
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
const TOKEN = 'VEA-TOKEN';
const COLLAPSE = 'VEA-COLLAPSE';

const useApp = defineStore('app', {
  state: () => ({
    title: 'PLC通信中间件',
    authorization: getItem(TOKEN),
    sidebar: {
      collapse: getItem(COLLAPSE),
    },
    device: 'desktop',
  }),
  actions: {
    setCollapse(data) {
      this.sidebar.collapse = data;
      // 保存到localStorage
      setItem(COLLAPSE, data);
    },
    clearCollapse() {
      this.sidebar.collapse = '';
      removeItem(COLLAPSE);
    },
    setDevice(device) {
      this.device = device;
    },
    setToken(data) {
      this.authorization = data;
      // 保存到localStorage
      setItem(TOKEN, data);
    },
    initToken(data) {
      this.clearToken();
      this.setToken(data);
    },
    clearToken() {
      // 清除token
      this.authorization = '';
      removeItem(TOKEN);
      // 清除用户信息
      useAccount().clearUserinfo();
      // 清除标签栏
      useTags().clearAllTags();
      // 清空menus
      useMenus().setMenus([]);
    },
    setScreenCode(password) {
      const authorization = toRaw(this.authorization);

      if (!password) {
        try {
          delete authorization.screenCode;
        } catch (err) {
          console.log(err);
        }

        this.authorization = authorization;
        // 保存到localStorage
        setItem(TOKEN, authorization);

        return
      }

      // 对密码加密
      const screenCode = new AesEncryption().encryptByAES(password);

      const res = {
        ...authorization,
        screenCode,
      };
      this.authorization = res;
      // 保存到localStorage
      setItem(TOKEN, res);
    },
  },
});

/*
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 18:17:20
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const service = axios.create({
  baseURL: '/',
  timeout: 10000,
  withCredentials: true,
});

// 拦截请求
service.interceptors.request.use(
  config => {
    const { authorization } = useApp();
    if (authorization) {
      config.headers.Authorization = `Bearer ${authorization.token}`;
    }
    return config
  },
  error => {
    // console.log(error);
    return Promise.reject(error)
  }
);

// 拦截响应
service.interceptors.response.use(
  // 响应成功进入第1个函数，该函数的参数是响应对象
  response => {
    return response.data
  },
  // 响应失败进入第2个函数，该函数的参数是错误对象
  async error => {
    // 如果响应码是 401 ，则请求获取新的 token
    // 响应拦截器中的 error 就是那个响应的错误对象
    if (error.response && error.response.status === 401) {
      // 校验是否有 refresh_token
      const { authorization, clearToken, setToken } = useApp();
      if (!authorization || !authorization.refresh_token) {
        if (router$1.currentRoute.value.name === 'login') {
          return Promise.reject(error)
        }
        const redirect = encodeURIComponent(window.location.href);
        router$1.push(`/login?redirect=${redirect}`);
        // 清除token
        clearToken();
        setTimeout(() => {
          ElMessage.closeAll();
          try {
            ElMessage.error(error.response.data.msg);
          } catch (err) {
            ElMessage.error(error.message);
          }
        });
        // 代码不要往后执行了
        return Promise.reject(error)
      }
      // 如果有refresh_token，则请求获取新的 token
      try {
        const res = await axios({
          method: 'PUT',
          url: '/api/authorizations',
          timeout: 10000,
          headers: {
            Authorization: `Bearer ${authorization.refresh_token}`,
          },
        });
        // 如果获取成功，则把新的 token 更新到容器中
        // console.log('刷新 token  成功', res)
        setToken({
          token: res.data.data.token, // 最新获取的可用 token
          refresh_token: authorization.refresh_token, // 还是原来的 refresh_token
        });
        // 把之前失败的用户请求继续发出去
        // config.js 是一个对象，其中包含本次失败请求相关的那些配置信息，例如 url、method 都有
        // return 把 request 的请求结果继续返回给发请求的具体位置
        return service(error.config)
      } catch (err) {
        // 如果获取失败，直接跳转 登录页
        // console.log('请求刷新 token 失败', err)
        const redirect = encodeURIComponent(window.location.href);
        router$1.push(`/login?redirect=${redirect}`);
        // 清除token
        clearToken();
        return Promise.reject(error)
      }
    }

    // console.dir(error) // 可在此进行错误上报
    ElMessage.closeAll();
    try {
      ElMessage.error(error.response.data.msg);
    } catch (err) {
      ElMessage.error(error.message);
    }

    return Promise.reject(error)
  }
);

/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 09:36:55
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

// 登录接口
const Login$1 = data => {
  return service({
    url: '/api/login',
    method: 'post',
    data,
  })
};

// 获取登录用户信息
const GetUserinfo = () => {
  return service({
    url: '/api/userinfo',
    method: 'get',
  })
};

/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 14:57:06
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const useAccount = defineStore('account', {
  state: () => ({
    userinfo: null,
    permissionList: [],
  }),
  actions: {
    // 清除用户信息
    clearUserinfo() {
      this.userinfo = null;
    },
    // 获取用户信息
    async getUserinfo() {
      const { code, data } = await GetUserinfo();
      if (+code === 200) {
        this.userinfo = data;
        return Promise.resolve(data)
      }
    },
  },
});

const checkUserinfo = (code, fullPath) => {
  const { userinfo } = useAccount();
  if (userinfo) {
    return `/error/${code === '404' ? fullPath : code}`
  }
  return true
};

const Layout$2 = () => __vitePreload(() => import('./index.e645ce07.js'),true?["assets/index.e645ce07.js","assets/index.753d6345.css","assets/element-plus.97092bf0.js","assets/index.001b710e.js","assets/index.d26ce6ca.css","assets/ChangeLang.183ac43f.js","assets/ChangeLang.2a486598.css"]:void 0);
const Error$1 = () => __vitePreload(() => import('./index.f9ff2acd.js'),true?["assets/index.f9ff2acd.js","assets/index.feeaf867.css","assets/element-plus.97092bf0.js"]:void 0);

var error = [
  {
    path: '/error',
    component: Layout$2,
    children: [
      {
        path: '403',
        name: 'error-forbidden',
        component: Error$1,
        meta: { title: '403' },
        props: {
          error: '403',
        },
      },
      {
        path: '500',
        name: 'error-server-error',
        component: Error$1,
        meta: { title: '500' },
        props: {
          error: '500',
        },
      },
      {
        path: ':pathMatch(.*)',
        name: 'error-not-found',
        component: Error$1,
        meta: { title: '404' },
        props: {
          error: '404',
        },
      },
    ],
  },
  {
    path: '/403',
    name: 'forbidden',
    component: Error$1,
    props: {
      error: '403',
    },
    beforeEnter() {
      return checkUserinfo('403')
    },
  },
  {
    path: '/500',
    name: 'server-error',
    component: Error$1,
    props: {
      error: '500',
    },
    beforeEnter() {
      return checkUserinfo('500')
    },
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: Error$1,
    props: {
      error: '404',
    },
    beforeEnter(to) {
      return checkUserinfo('404', to.fullPath.replace('/', ''))
    },
  },
];

// login.js
const Login = () => __vitePreload(() => import('./index.9854b169.js'),true?["assets/index.9854b169.js","assets/index.a3c72f6d.css","assets/ChangeLang.183ac43f.js","assets/ChangeLang.2a486598.css","assets/element-plus.97092bf0.js"]:void 0);

var login = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const Lock = () => __vitePreload(() => import('./index.256dbe6e.js'),true?["assets/index.256dbe6e.js","assets/index.d8af8529.css","assets/element-plus.97092bf0.js","assets/index.001b710e.js","assets/index.d26ce6ca.css"]:void 0);

var lock = [
  {
    path: '/lock',
    name: 'lock',
    component: Lock,
    meta: {
      title: '屏幕已锁定',
    },
  },
];

// home.js
const Layout$1 = () => __vitePreload(() => import('./index.e645ce07.js'),true?["assets/index.e645ce07.js","assets/index.753d6345.css","assets/element-plus.97092bf0.js","assets/index.001b710e.js","assets/index.d26ce6ca.css","assets/ChangeLang.183ac43f.js","assets/ChangeLang.2a486598.css"]:void 0);
const Home = () => __vitePreload(() => import('./index.356a9da2.js'),true?["assets/index.356a9da2.js","assets/element-plus.97092bf0.js"]:void 0);

var home = [
  {
    path: '/home',
    component: Layout$1,
    name: 'Dashboard',
    meta: {
      title: 'menu.dashboard',
    },
    icon: 'icon-home',
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          title: 'menu.homepage',
          affix: true,
        },
      },
    ],
  },
];

const Layout = () => __vitePreload(() => import('./index.e645ce07.js'),true?["assets/index.e645ce07.js","assets/index.753d6345.css","assets/element-plus.97092bf0.js","assets/index.001b710e.js","assets/index.d26ce6ca.css","assets/ChangeLang.183ac43f.js","assets/ChangeLang.2a486598.css"]:void 0);
const Plc = () => __vitePreload(() => import('./plc.3718ffde.js'),true?["assets/plc.3718ffde.js","assets/plc.bee7f0e1.css","assets/config.9a689cdd.js","assets/element-plus.97092bf0.js"]:void 0);
const Vars = () => __vitePreload(() => import('./vars.2fa8c763.js'),true?["assets/vars.2fa8c763.js","assets/vars.62b48d4f.css","assets/config.9a689cdd.js","assets/element-plus.97092bf0.js"]:void 0);

var plc = [
  {
    path: '/plc',
    component: Layout,
    name: 'menu.plcVars',
    meta: {
      title: '设备详细',
    },
    icon: 'Location',
    children: [
      {
        path: '',
        name: 'plc',
        component: Plc,
        meta: {
          title: 'PLC 列表',
        },
      },
      {
        path: '/vars',
        name: '变量列表',
        component: Vars,
        meta: {
          title: '变量列表',
        },
        hidden: false, // 不在菜单中显示
      },
    ],
  },
];

/* 菜单栏的路由 */
// 固定菜单
const fixedRoutes = [...home, ...plc];
// 动态菜单
const asyncRoutes = [];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    ...redirect, // 统一的重定向配置
    ...login,
    ...lock,
    ...fixedRoutes,
    ...error,
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  },
});

var router$1 = router;

/*
 *                   江城子 . 程序员之歌
 *
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 *
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 *
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 14:52:09
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const pinia = createPinia();

/*
 *
 *    ┏┓　　　┏┓
 *  ┏┛┻━━━┛┻┓
 *  ┃　　　　　　　┃
 *  ┃　　　━　　　┃
 *  ┃　＞　　　＜　┃
 *  ┃　　　　　　　┃
 *  ┃...　⌒　...　┃
 *  ┃　　　　　　　┃
 *  ┗━┓　　　┏━┛
 *      ┃　　　┃
 *      ┃　　　┃
 *      ┃　　　┃
 *      ┃　　　┃  神兽保佑
 *      ┃　　　┃  代码无bug
 *      ┃　　　┃
 *      ┃　　　┗━━━┓
 *      ┃　　　　　　　┣┓
 *      ┃　　　　　　　┏┛
 *      ┗┓┓┏━┳┓┏┛
 *        ┃┫┫　┃┫┫
 *        ┗┻┛　┗┻┛
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 16:35:06
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const getPageTitle = title => {
  const { title: appTitle } = useApp();
  if (title) {
    return `${title} - ${appTitle}`
  }
  return appTitle
};

// 白名单，里面是路由对象的name
const WhiteList = ['login', 'lock'];

let loadingInstance = null;

// vue-router4的路由守卫不再是通过next放行，而是通过return返回true或false或者一个路由地址
router$1.beforeEach(async to => {
  loadingInstance = ElLoading.service({
    lock: true,
    // text: '正在加载数据，请稍候~',
    background: 'rgba(0, 0, 0, 0.7)',
  });

  if (WhiteList.includes(to.name)) {
    return true
  }
  if (!window.localStorage[TOKEN]) {
    return {
      name: 'login',
      query: {
        redirect: to.fullPath, // redirect是指登录之后可以跳回到redirect指定的页面
      },
      replace: true,
    }
  } else {
    const { userinfo, getUserinfo } = useAccount();
    // 获取用户角色信息，根据角色判断权限
    if (!userinfo) {
      try {
        // 获取用户信息
        await getUserinfo();
      } catch (err) {
        loadingInstance.close();
        return false
      }

      return to.fullPath
    }

    // 生成菜单（如果你的项目有动态菜单，在此处会添加动态路由）
    const { menus, generateMenus } = useMenus();
    if (menus.length <= 0) {
      try {
        await generateMenus();
        return to.fullPath // 添加动态路由后，必须加这一句触发重定向，否则会404
      } catch (err) {
        loadingInstance.close();
        return false
      }
    }

    // 判断是否处于锁屏状态
    if (to.name !== 'lock') {
      const { authorization } = useApp();
      if (!!authorization && !!authorization.screenCode) {
        return {
          name: 'lock',
          query: {
            redirect: to.path,
          },
          replace: true,
        }
      }
    }
  }
});

router$1.afterEach(to => {
  loadingInstance.close();
  if (router$1.currentRoute.value.name === to.name) {
    nextTick(() => {
      document.title = getPageTitle(!!to.meta && to.meta.truetitle);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
          let body = document.body;
          let svgDom = document.getElementById('__svg__icons__dom__1736330019290__');
          if(!svgDom) {
            svgDom = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgDom.style.display = 'none';
            svgDom.id = '__svg__icons__dom__1736330019290__';
          }
          svgDom.innerHTML = "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 128 128\" id=\"icon-bug\"><path d=\"M127.88 73.143c0 1.412-.506 2.635-1.518 3.669-1.011 1.033-2.209 1.55-3.592 1.55h-17.887c0 9.296-1.783 17.178-5.35 23.645l16.609 17.044c1.011 1.034 1.517 2.257 1.517 3.67 0 1.412-.506 2.635-1.517 3.668-.958 1.033-2.155 1.55-3.593 1.55-1.438 0-2.635-.517-3.593-1.55l-15.811-16.063a15.49 15.49 0 0 1-1.196 1.06c-.532.434-1.65 1.208-3.353 2.322a50.104 50.104 0 0 1-5.192 2.974c-1.758.87-3.94 1.658-6.546 2.364-2.607.706-5.189 1.06-7.748 1.06V47.044H58.89v73.062c-2.716 0-5.417-.367-8.106-1.102-2.688-.734-5.003-1.631-6.945-2.692a66.769 66.769 0 0 1-5.268-3.179c-1.571-1.057-2.73-1.94-3.476-2.65L33.9 109.34l-14.611 16.877c-1.066 1.14-2.344 1.711-3.833 1.711-1.277 0-2.422-.434-3.434-1.304-1.012-.978-1.557-2.187-1.635-3.627-.079-1.44.333-2.705 1.236-3.794l16.129-18.51c-3.087-6.197-4.63-13.644-4.63-22.342H5.235c-1.383 0-2.58-.517-3.592-1.55S.125 74.545.125 73.132c0-1.412.506-2.635 1.518-3.668 1.012-1.034 2.21-1.55 3.592-1.55h17.887V43.939L9.308 29.833c-1.012-1.033-1.517-2.256-1.517-3.669 0-1.412.505-2.635 1.517-3.668 1.012-1.034 2.21-1.55 3.593-1.55s2.58.516 3.593 1.55l13.813 14.106h67.396l13.814-14.106c1.012-1.034 2.21-1.55 3.592-1.55 1.384 0 2.581.516 3.593 1.55 1.012 1.033 1.518 2.256 1.518 3.668 0 1.413-.506 2.636-1.518 3.67l-13.814 14.105v23.975h17.887c1.383 0 2.58.516 3.593 1.55 1.011 1.033 1.517 2.256 1.517 3.668l-.005.01zM89.552 26.175H38.448c0-7.23 2.489-13.386 7.466-18.469C50.892 2.623 56.92.082 64 .082c7.08 0 13.108 2.541 18.086 7.624 4.977 5.083 7.466 11.24 7.466 18.469z\" /></symbol><symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-home\"><path d=\"m510.72 41.856 435.2 361.024a32 32 0 0 1-36.16 52.48l-4.736-3.2L864 418.112V832c0 48.832-32.64 90.752-76.864 95.552l-8.448.448H245.312c-45.696 0-80.96-39.04-84.928-86.912L160 832V407.808l-55.04 44.608a32 32 0 0 1-40.96-.64l-4.032-4.16a32 32 0 0 1 .64-40.96l4.096-4.032 446.08-360.768zm-.512 82.688L223.232 356.672a31.808 31.808 0 0 1 .256 1.152l.512 5.76V832c0 16.768 8.64 28.992 17.92 31.552l3.392.448h533.376c9.216 0 18.88-10.432 20.928-25.92L800 832V364.992L510.208 124.544z\" /></symbol><symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-icon-home\"><path d=\"m510.72 41.856 435.2 361.024a32 32 0 0 1-36.16 52.48l-4.736-3.2L864 418.112V832c0 48.832-32.64 90.752-76.864 95.552l-8.448.448H245.312c-45.696 0-80.96-39.04-84.928-86.912L160 832V407.808l-55.04 44.608a32 32 0 0 1-40.96-.64l-4.032-4.16a32 32 0 0 1 .64-40.96l4.096-4.032 446.08-360.768zm-.512 82.688L223.232 356.672a31.808 31.808 0 0 1 .256 1.152l.512 5.76V832c0 16.768 8.64 28.992 17.92 31.552l3.392.448h533.376c9.216 0 18.88-10.432 20.928-25.92L800 832V364.992L510.208 124.544z\" /></symbol><symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-language\"><path d=\"M848.806 805.572c70.998-81.26 109.78-184.217 109.78-293.144 0-119.205-46.422-231.278-130.714-315.57C744.877 113.863 634.941 67.617 517.79 66.214c-1.925-.6-10.29-.592-12.228.015-116.682 1.717-226.127 47.931-308.826 130.63C113.863 279.732 67.63 389.46 66.095 506.417c-.428 1.65-.437 8.602-.021 10.227 1.083 117.628 47.365 228.058 130.66 311.354 84.292 84.292 196.364 130.713 315.57 130.713 119.205 0 231.277-46.421 315.57-130.713 6.139-6.14 12.054-12.444 17.788-18.872a20.532 20.532 0 0 0 1.472-1.44 20.566 20.566 0 0 0 1.672-2.113zM107.447 532.043H294.95c1.322 65.68 9.253 127.265 22.505 182.113-61.69 16.687-100.82 38.372-121.076 51.906-52.068-64.726-84.702-145.705-88.93-234.019zm88.434-272.635c20.09 13.557 59.243 35.462 121.34 52.26-12.997 54.128-20.826 114.778-22.243 179.433H107.526c4.55-87.37 36.912-167.489 88.355-231.693zm721.2 231.692H729.63c-1.416-64.631-9.24-125.26-22.23-179.374 61.955-16.694 101.236-38.445 121.567-52.021 51.305 64.155 83.571 144.161 88.116 231.395zm-228.403 0h-156.51V335.061c52.208-1.095 97.103-6.454 135.272-14.033C680 373.164 687.286 430.897 688.678 491.1zm-156.51-196.984V109.918c36.84 10.4 72.779 49.206 100.926 110.016 8.81 19.036 16.645 39.642 23.464 61.521-35.026 6.772-76.296 11.608-124.39 12.66zm-40.944-183.842v183.805c-47.505-1.127-88.379-6.002-123.12-12.803 6.807-21.813 14.623-42.36 23.409-61.344 27.839-60.14 63.296-98.756 99.71-109.658zm0 224.767V491.1H335.929c1.392-60.213 8.68-117.955 21.244-170.1 37.835 7.537 82.314 12.887 134.05 14.04zm-155.33 197.002h155.33v158.668c-51.61 1.194-96.02 6.564-133.822 14.103-12.825-52.886-20.208-111.57-21.509-172.77zm155.33 199.63v182.909c-36.416-10.902-71.872-49.519-99.71-109.66-8.68-18.752-16.41-39.034-23.158-60.55 34.64-6.727 75.417-11.552 122.868-12.7zm40.943 183.264V731.609c47.904 1.025 89.104 5.862 124.117 12.656-6.756 21.556-14.497 41.874-23.19 60.656-28.147 60.81-64.086 99.617-100.927 110.016zm0-224.277V532.043h156.547c-1.299 61.097-8.66 119.685-21.446 172.503-38.114-7.532-82.949-12.835-135.1-13.886zM729.66 532.043h187.502c-4.221 88.139-36.733 168.974-88.62 233.636-20.47-13.669-59.636-35.3-121.304-51.869 13.2-54.76 21.102-116.225 22.422-181.767zm71.86-303.3c-18.33 11.57-52.31 29.355-104.858 43.493-19.296-63.056-46.11-115.004-78.062-150.976 70.401 19.15 133.234 56.837 182.92 107.483zM406.008 121.26c-31.906 35.92-58.69 87.769-77.979 150.702-52.404-14.241-86.37-32.099-104.582-43.588 49.63-50.46 112.33-88.01 182.561-107.114zm-182.09 675.703c18.284-11.536 52.098-29.23 104.332-43.336 19.272 62.605 45.976 114.187 77.758 149.969C336 884.55 273.472 847.182 223.918 796.963zm394.68 106.633c31.802-35.804 58.519-87.426 77.794-150.082 51.985 14.023 85.972 31.631 104.533 43.208-49.592 50.34-112.206 87.8-182.326 106.874z\" /></symbol><symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-error-icons-403\"><path d=\"M75.749 449.545v-7.26c0-238.932 193.691-432.62 432.619-432.62h7.264c238.928 0 432.62 193.688 432.62 432.62v7.26c0 238.931-193.689 432.623-432.62 432.623h-7.264c-238.928 0-432.62-193.692-432.62-432.623\" fill=\"#E4EBF7\" /><path d=\"M220.055 463.123a28.679 28.679 0 1 1-57.072-5.749 28.679 28.679 0 0 1 57.072 5.75M220.47 561.936A19.637 19.637 0 1 1 181.39 558a19.637 19.637 0 0 1 39.08 3.937m61.385-55.814a19.78 19.78 0 1 1-39.362-3.965 19.78 19.78 0 0 1 39.362 3.965m143.57-403.282 103.343-.045a15.895 15.895 0 1 0-.014-31.797l-103.342.045a15.899 15.899 0 0 0 .017 31.797m39.525 63.546 103.339-.046a15.899 15.899 0 1 0-.014-31.797l-103.342.046a15.899 15.899 0 1 0 .017 31.797\" fill=\"#FFF\" /><path d=\"M473.18 102.795v-.01l54.696-.025a15.899 15.899 0 1 0 .014 31.797l-54.696.025v-.007a15.895 15.895 0 0 0-.014-31.783m248.562 377.066c-1.917 19.007-18.878 32.863-37.884 30.947-19.01-1.916-32.863-18.877-30.947-37.884 1.916-19.006 18.877-32.863 37.884-30.947 19.006 1.917 32.863 18.878 30.947 37.884M722.247 599.03a23.686 23.686 0 1 1-47.135-4.75 23.686 23.686 0 0 1 47.131 4.75m64.706-57.982a23.86 23.86 0 1 1-47.48-4.79 23.86 23.86 0 0 1 47.477 4.79\" fill=\"#FFF\" /><path d=\"M705.279 102.158C705.279 45.74 751.013 0 807.436 0c56.42 0 102.158 45.737 102.158 102.158 0 56.423-45.738 102.164-102.158 102.164S705.28 158.582 705.28 102.161\" fill=\"#1890ff\" /><path d=\"m847.33 145.313-75.13-.435a6.076 6.076 0 0 1-6.041-6.112l.247-42.612a6.076 6.076 0 0 1 6.111-6.041l75.127.435a6.081 6.081 0 0 1 6.045 6.115l-.247 42.609a6.076 6.076 0 0 1-6.111 6.041\" fill=\"#FFF\" /><path d=\"M825.227 101.712c-.052 8.978-7.14 16.215-15.83 16.166-8.689-.048-15.692-7.369-15.64-16.351l.14-24.128c.055-8.98 7.142-16.216 15.828-16.167 8.69.052 15.693 7.372 15.645 16.351l-.14 24.129zm-15.784-49.037a23.961 23.961 0 0 0-24.097 23.821l-.15 25.672a23.961 23.961 0 0 0 47.923.279l.146-25.672a23.965 23.965 0 0 0-23.822-24.1zM659.587 238.206h-13.693a16.48 16.48 0 0 1-16.435-16.435 16.48 16.48 0 0 1 16.435-16.435h13.693a16.48 16.48 0 0 1 16.435 16.435 16.48 16.48 0 0 1-16.435 16.435\" fill=\"#FFF\" /><path d=\"M661.844 867.008a23.034 23.034 0 0 1-23.03-23.034V613.639a23.034 23.034 0 0 1 46.065 0v230.335a23.034 23.034 0 0 1-23.031 23.03\" fill=\"#5BA02E\" /><path d=\"M689.485 864.702a23.034 23.034 0 0 1-23.031-23.031V726.503a23.034 23.034 0 1 1 46.065 0v115.164a23.034 23.034 0 0 1-23.03 23.035\" fill=\"#92C110\" /><path d=\"M723.794 1023.98H628.41a11.045 11.045 0 0 1-11.045-11.045V853.054a11.045 11.045 0 0 1 11.045-11.045h95.384a11.045 11.045 0 0 1 11.045 11.045v159.877a11.045 11.045 0 0 1-11.045 11.045\" fill=\"#F2D7AD\" /><path d=\"M361.358 514.526s22.219-3.23 61.204-4.46c40.866-1.292 61.218 3.784 61.218 3.784s12.88-13.431 3.372-29.35c4.453-42.08 20.843-114.378 1.167-168.195-3.888-4.665-13.041-5.268-26.257-2.16-4.658 1.097-24.901-.52-27.814-.349l-53.347-1.209s-12.15-.592-27.996-1.77c-5.268-.393-14.728-5.864-19.017-1.177-1.415 1.543-8.45 19.752-6.864 56.016L357.11 489.84s-10.944 12.578 4.248 24.685\" fill=\"#FFF\" /><path d=\"m339.742 255.481-3.136-22.289 41.748-22.717s25.442-.41 28.006 4.199c2.568 4.613-19.567 3.46-19.567 3.46s-6.397 4.836-9.112 8.71c-5.763 8.233-3.435 22.547-28.981 20.857-5.952.99-8.955 7.78-8.955 7.78\" fill=\"#FFC6A0\" /><path d=\"M258.462 270.627s49.535 32.773 87.011 50.326c3.697 1.732-7.296 56.385-41.434 41.152-25.909-11.56-70.25-29.407-74.848-50.507-2.474-11.352 8.86-26.63 29.27-40.975m311.567 8.509s-23.32 10.45-48.236 23.957c-13.567 7.352-35.32 16.39-42.96 27.832-21.686 32.453 12.32 39.093 45.11 26.143 23.38-9.237 101.04-42.254 46.086-77.932\" fill=\"#FFB594\" /><path d=\"m341.128 231.213 10.662 13.523s-9.697 9.302-21.985 20.023c-24.749 21.585-44.609 49.811-55.73 57.281-13.82 9.275-33.986 11.547-42.428-.411-12.38-17.533 1.617-50.967 109.481-90.416\" fill=\"#FFC6A0\" /><path d=\"M301.088 296.563s-8.154 29.313-31.052 50.337c2.272 1.91 64.758 36.62 77.155 35.037 18.25-2.33 22.358-66.088 3.99-71.534-2.447-.725-20.561-4.48-30.847-7.55-3.03-.906-5.613-5.959-12.351-3.262l-6.899-3.028zm221.903 2.474s18.53 6.815 25.522 47.853c-1.902.954-61.148 43.03-76.057 27.194-22.766-24.18-2.67-60.601 14.895-64.841 16.188-3.906 17.525-4.774 35.643-10.206\" fill=\"#FFF\" /><path d=\"m484.044 239.154-23.626-21.522s-18.658-15.031-32.135-3.112c-13.474 11.923 15.55 7.258 19.696 14.512 4.146 7.254 2.955 3.983-7.258 1.554-19.522-4.637-7.254 3.112 10.366 18.658 7.286 6.429 24.362 3.328 24.362 3.328l8.595-13.418z\" fill=\"#FFC6A0\" /><path d=\"m442.575 318.162-1.035-38.107-55.462-.094-1.846 36.41a3.785 3.785 0 0 0 1.794 3.481c7.14 4.359 32.706 17.745 55.047 1.477 1-.731 1.544-1.93 1.502-3.17\" fill=\"#FFB594\" /><path d=\"M450.557 258.669c2.847-3.996 3.422-31.77 3.537-41.56a3.645 3.645 0 0 0-3.362-3.676l-16.098-1.271c-26.863-3.638-59.479 2.174-63.597 22.11-19.1 20.254-1.467 46.146-1.467 46.146s6.84 12.424 15 23.661c2.634 3.627 1.386-13 10.592-20.658 19.247-16.007 55.395-24.748 55.395-24.748\" fill=\"#5C2552\" /><path d=\"M383.845 289.909s9.355 21.609 40.424 22.724c27.247.975 31.264-24.418 25.902-60.992l-3.168-19.104c-21.316-10.093-53.928 1.882-53.928 1.882s-2.007 7.122-.662 19.177c-7.93 7.198-6.356 19.574-6.356 19.574s-3.153-6.696-6.898-8.087c-2.997-1.114-6.61.31-8.09 6.9-3.624 16.138 12.776 17.926 12.776 17.926\" fill=\"#FFC6A0\" /><path d=\"M443.495 258.153c-.077 2.485-1.575 4.457-3.345 4.4-1.777-.055-3.15-2.114-3.073-4.598.073-2.484 1.575-4.453 3.345-4.4 1.777.055 3.15 2.114 3.073 4.598m-27.714.896c-.076 2.484-1.575 4.453-3.348 4.4-1.773-.055-3.15-2.115-3.073-4.599.077-2.484 1.575-4.456 3.348-4.4 1.777.055 3.15 2.111 3.073 4.599\" fill=\"#552950\" /><path d=\"M423.39 285.369s-12.514.808-5.016-9.721c5.54-5.213 17.062-1.603 17.062-1.603s4.028 13.61-12.045 11.324\" fill=\"#DB836E\" /><path d=\"m467.257 229.642-.494 18.536s20.88 15.581 41.619 32.062c15.616 12.41 30.967 25.975 38.274 30.18 16.738 9.638 31.01 11.69 38.591 6.3 14.184-10.084 15.237-34.417-28.348-53.18-14.88-6.404-56.249-22.16-89.642-33.902\" fill=\"#FFC6A0\" /><path d=\"M429.467 1011.283s15.073 7.167 25.812 3.589c9.902-3.303 15.902 2.345 24.849 4.132 8.954 1.79 24.128 3.86 41.016-4.421-.362-19.341-24.177-13.972-41.978-23.564-8.996-4.843-13.281-16.575-12.63-30.881h-33s-4.884 36.919-4.072 51.148\" fill=\"#CBD1D1\" /><path d=\"M429.384 1010.68s8.526 4.464 23.724 2.293c10.735-1.533 13.03 1.69 26.058 3.62 13.028 1.93 37.637-.244 41.498-3.136 1.445 3.86-1.21 7.237-1.21 7.237s-5.306 2.118-16.888 2.895c-7.125.478-20.358 1.021-26.7-1.766-6.27-4.826-18.417-6.68-20.103-.847-13.752 3.338-25.818-1.003-25.818-1.003l-.558-9.293z\" fill=\"#2B0849\" /><path d=\"M454.916 962.309h10.857s-.359 23.522 15.923 30.034c-16.282 2.174-30.034-8.084-26.78-30.034\" fill=\"#A4AABA\" /><path d=\"M276.614 949.522s-7.393 26.027-15.741 43.19c-6.31 12.975-14.826 26.299 19.18 26.299 23.338 0 31.428-1.683 26.059-23.163-5.37-21.477.934-46.326.934-46.326h-30.432z\" fill=\"#CBD1D1\" /><path d=\"M255.326 1010.565s7.355 4.105 23.281 4.105c21.352 0 28.954-5.791 28.954-5.791s2.108 3.91-2.174 7.595c-3.484 3.004-12.627 5.586-25.937 5.432-14.553-.17-20.473-1.986-23.643-4.1-2.896-1.93-2.412-5.55-.481-7.24\" fill=\"#2B0849\" /><path d=\"M279.69 956.204s.12 5.328-1.097 10.279c-1.226 4.986-3.787 10.895-3.968 14.529-.202 4.042 15.923 5.547 18.097.122 2.17-5.432 4.54-22.56 6.714-25.456 2.167-2.895-17.212-7.439-19.745.523\" fill=\"#A4AABA\" /><path d=\"m427.255 965.183 46.361.32s4.498-188.942 6.421-223.185c1.924-34.243 13.087-150.275 3.474-218.768l-43.483-2.23-79.179 2.704s-1.509 13.742-4.146 34.567c-.216 1.718-2.36 2.92-2.592 4.732-.262 2.028 1.463 4.693 1.107 6.815-8.187 48.79-22.1 114.722-30.302 161.755-.404 2.31-4.275 3.498-5.052 9.328-.14 1.045.732 5.282.39 6.219-23.818 64.956-37.943 165.793-49.476 214.458l50.62-.05s7.612-29.699 13.964-58.806c9.742-44.657 80.092-294.602 80.092-294.602l10.452-1.801 3.614 160.623s-.777 4.278 1.163 6.996c1.945 2.725-1.937 3.892-1.358 7.78l1.358 6.216s-1.554 24.878-3.108 41.205c-1.554 16.323-.32 135.724-.32 135.724\" fill=\"#7BB2F9\" /><path d=\"M484.717 513.655s-59.075-10.756-124.387.694c.547 8.714-.007 14.382-.007 14.382s50.894-9.762 123.606-1.08c.875-8.16.788-13.996.788-13.996\" fill=\"#192064\" /><path d=\"m450.341 523.864.014-17.02a2.812 2.812 0 0 0-2.696-2.823c-8.46-.32-17.561-.376-27.16-.048a2.836 2.836 0 0 0-2.732 2.822l-.01 17.003a2.803 2.803 0 0 0 2.881 2.815 490.44 490.44 0 0 1 26.787.06 2.822 2.822 0 0 0 2.916-2.809\" fill=\"#FFF\" /><path d=\"m446.477 520.634.007-10.662a2.23 2.23 0 0 0-2.146-2.24 327.988 327.988 0 0 0-20.327-.031 2.254 2.254 0 0 0-2.181 2.24l-.004 10.648a2.216 2.216 0 0 0 2.269 2.23 416.71 416.71 0 0 1 20.076.042 2.244 2.244 0 0 0 2.306-2.23\" fill=\"#192064\" /></symbol><symbol class=\"icon\" viewBox=\"0 0 1163 1024\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-error-icons-404\"><path d=\"M808.012 462.891h352.85l.005.012C1136.531 203.233 917.997 0 651.963 0c-282.32 0-511.186 228.868-511.186 511.188 0 282.323 228.865 511.188 511.186 511.188 229.079 0 422.955-150.687 487.934-358.345H947.861L808.012 462.89z\" fill=\"#E1F9FF\" /><path d=\"M1163.15 512.812c0 282.32-228.865 511.188-511.19 511.188-282.32 0-511.186-228.868-511.186-511.188S369.64 1.624 651.96 1.624c282.325 0 511.19 228.867 511.19 511.188\" fill=\"#E3F7FC\" /><path d=\"M651.963 1022.4c158.61 0 300.342-72.248 394.104-185.617h-788.21C351.617 950.154 493.348 1022.4 651.962 1022.4\" fill=\"#92DDCE\" /><path d=\"m458.343 127.719 79.928 59.14s50.357-51.822 212.85 4.391c0 0 44.208 15.226 38.939 28.4 0 0-7.03 36.597-64.415 0 0 0-8.78-6.148-14.345 1.465 0 0-5.856 7.318 11.42 12.588 0 0 92.518 25.179 80.22 61.191 0 0-4.684 38.353-60.019-9.369 0 0-31.035-26.935-43.33-20.787 0 0-7.906 3.513 9.076 13.174 0 0 77.585 51.236 69.972 69.388 0 0-10.831 45.966-69.972-20.2 0 0-45.965-52.115-54.748-50.358 0 0-4.1-1.465-3.808 9.075 0 0 24.298 69.388-36.304 100.717 0 0-15.665 9.806-27.23-8.638 0 0-8.638-12.735 8.783-26.935 0 0 56.652-39.158 3.074-77.367 0 0-42.6-28.544-68.728 11.64 0 0-31.182 40.182 22.397 74.436 0 0 34.913 17.787 16.248 32.5-18.665 14.71-46.77 9.66-71.584-29.205 0 0-47.21-70.266-15.59-117.258 0 0 9.442-9.003-19.98-21.739-29.426-12.735-46.992-30.083-46.992-30.083l44.138-66.166z\" fill=\"#F9C193\" /><path d=\"M813.994 762.009c-4.308 0-8.522.332-12.683.807 0-.043.007-.081.007-.126 0-37.173-34.334-67.306-76.687-67.306-29.266 0-54.685 14.392-67.612 35.55a66.126 66.126 0 0 0-5.894-.264c-26.712 0-49.085 16.073-55.423 37.781-29.096 11.494-47.338 37.313-51.72 68.33h355.376c-5.951-42.135-35.747-74.772-85.364-74.772\" fill=\"#3B8BFF\" /><path d=\"m473.091 110.822-58.793-52.168a512.351 512.351 0 0 0-112.873 80.677l103.727 72.666 67.94-101.175z\" fill=\"#92DDCE\" /><path d=\"m651.963 672.534 156.05-209.643L969.974 678.39z\" fill=\"#41C5F9\" /><path d=\"m706.42 614.27 101.592-138.42 118.383 155.404z\" fill=\"#FFF\" /><path d=\"M706.42 614.559h206.993v222.224H706.419z\" fill=\"#FFF\" /><path d=\"M842.121 583.676c0 19.646-15.925 35.574-35.573 35.574-19.643 0-35.569-15.928-35.569-35.574 0-19.643 15.926-35.57 35.569-35.57 19.648-.003 35.573 15.925 35.573 35.57\" fill=\"#3B8BFF\" /><path d=\"M766.146 664.029h94.859V836.78h-94.859z\" fill=\"#A4E3FF\" /><path d=\"M795.05 740.528a10.535 10.535 0 1 1-21.07 0 10.535 10.535 0 0 1 21.07 0\" fill=\"#3B8BFF\" /><path d=\"M973.564 262.352c0 .306.043.6.045.907-6.252-1.104-12.652-1.785-19.222-1.785-56.166 0-91.77 42.094-98.505 96.437h283.868c-21.017-66.933-55.428-127.93-100.093-179.861-37.94 9.293-66.093 43.502-66.093 84.302m-575.6 59.615c-4.878 0-9.645.428-14.354 1.042l.007-.163c0-47.944-38.864-86.81-86.807-86.81-47.943 0-86.81 38.866-86.81 86.81 0 .306.044.6.048.906-6.254-1.103-12.654-1.785-19.222-1.785-4.879 0-9.59.337-14.153.952a506.652 506.652 0 0 0-27.467 95.485h345.39c-6.735-54.343-40.464-96.437-96.632-96.437\" fill=\"#FFF\" /><path d=\"m261.388 626.174-26.973 9.343 15.807 45.648-22.821 7.902-15.81-45.645-81.959 28.383-7.905-22.826 44.115-147.73 19.709-6.827 42.037 121.383 26.973-9.34 6.827 19.709zm-87.122-87.177-29.672 105.55 60.17-20.837-29.458-85.071-1.04.358zM444.658 519.902c18.516 57.655 8.93 93.347-28.756 107.12-19.282 6.677-36.076 4.937-50.393-5.22-16.07-13.142-29.216-33.419-39.42-60.838-10.457-30.2-12.577-55.024-6.35-74.454 5.38-17.684 17.071-29.662 35.07-35.896 38.137-12.479 68.08 10.618 89.85 69.288zm-22.173 7.677c-16.448-45.398-36.673-64.303-60.667-56.721-24.43 8.46-28.62 35.822-12.597 82.092 15.804 45.64 36.02 64.545 60.671 56.721 23.55-8.86 27.752-36.226 12.593-82.092zm236.124-35.348-25.064 8.681 14.688 42.415-21.207 7.344-14.689-42.414-76.155 26.372-7.345-21.207 40.99-137.266 18.317-6.343 39.058 112.785 25.064-8.678 6.343 18.311zm-80.95-81.003-27.572 98.075L606 489.94l-27.374-79.046-.966.334z\" fill=\"#FC7E7F\" /><path d=\"M1060.846 717.097h59.085a507.791 507.791 0 0 0 34.515-111.608H913.413V836.78h132.656a512.09 512.09 0 0 0 42.398-59.532h-27.621v-60.151zm0-67.563h60.151v60.152h-60.151v-60.152zm-7.411 127.714h-60.152v-60.151h60.152v60.151zm0-67.562h-60.152v-60.152h60.152v60.152z\" fill=\"#3B8BFF\" /><path d=\"M1060.846 649.534h60.151v60.152h-60.151z\" fill=\"#3B8BFF\" /><path d=\"M1060.846 649.534h60.151v60.152h-60.151z\" fill=\"#A4E3FF\" /><path d=\"M993.283 649.534h60.152v60.152h-60.152z\" fill=\"#3B8BFF\" /><path d=\"M993.283 649.534h60.152v60.152h-60.152z\" fill=\"#A4E3FF\" /><path d=\"M993.283 717.097h60.152v60.151h-60.152z\" fill=\"#3B8BFF\" /><path d=\"M993.283 717.097h60.152v60.151h-60.152z\" fill=\"#A4E3FF\" /><path d=\"M1060.846 717.097v60.151h27.621a509.372 509.372 0 0 0 31.464-60.151h-59.085z\" fill=\"#3B8BFF\" /><path d=\"M1060.846 717.097v60.151h27.621a509.372 509.372 0 0 0 31.464-60.151h-59.085z\" fill=\"#A4E3FF\" /><path d=\"M1163.127 512.812c.002-.534.024-1.064.024-1.598 0-8.306-.219-16.56-.61-24.765m-.874 63.968a519.954 519.954 0 0 0 1.32-26.36m-12.704 101.576a511.062 511.062 0 0 0 5.286-26.363h-234.12v-11.24h235.955a512.401 512.401 0 0 0 3.266-26.366\" fill=\"#41C5F9\" /><path d=\"m1160.865 462.903-.005-.012H808.012l139.85 201.135H1139.9c15.1-48.261 23.25-99.599 23.25-152.84 0-16.287-.794-32.383-2.285-48.283\" fill=\"#41C5F9\" /><path d=\"M835.681 486.449h326.86a502.087 502.087 0 0 0-.674-11.243H835.68v11.243zM864.176 524.056h298.811c.093-3.736.13-7.486.142-11.242H864.176v11.242zM892.868 561.66h267.802c.366-3.74.712-7.48.997-11.24h-268.8v11.24zM921.45 599.267h234.119c.646-3.736 1.27-7.48 1.835-11.242H921.45v11.242zM948.165 636.875h199.402a531.179 531.179 0 0 0 2.718-11.242H948.167v11.242z\" fill=\"#E1F9FF\" /></symbol><symbol class=\"icon\" viewBox=\"0 0 1536 1024\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-error-icons-500\"><path d=\"M1506.56 689.067c-5.547-10.24-11.52-19.627-18.773-29.44-39.254-54.187-91.734-98.987-115.627-164.267-32-87.04-5.973-189.867-33.28-279.04-19.2-62.72-65.707-113.92-121.173-133.547-48.64-17.493-100.267-11.52-151.467-5.12-34.133 4.267-68.693 8.107-102.827 5.547-69.12-5.973-133.973-40.107-200.533-63.147C729.6 8.533 693.76.427 658.773.427L656.213 0c-33.706 0-66.986 7.68-96 27.307-62.293 42.24-90.88 127.146-140.8 186.453-46.506 55.893-106.666 81.493-165.973 111.787-49.92 25.173-71.253 85.333-79.787 144.64-6.4 46.506-9.386 95.573-29.866 136.106-23.467 46.934-66.987 76.374-97.28 117.76-49.92 68.267-61.014 171.094-25.6 250.454 7.68 17.066 17.493 33.706 32.853 42.24C66.133 1024 80.64 1024 93.867 1024h1248.426c13.654 0 28.16 0 40.107-7.68 19.627-12.8 26.027-40.107 38.827-61.867 24.746-42.24 73.813-58.88 98.986-101.12 11.094-18.773 15.787-39.68 15.787-61.866v-.427c0-34.56-12.373-70.4-29.44-101.973z\" fill=\"#E4EBF7\" /><path d=\"M507.733 277.333H1113.6v537.6H507.733v-537.6z\" fill=\"#FFF\" /><path d=\"M507.733 277.333H1113.6v59.734H507.733v-59.734z\" fill=\"#C5CFD6\" /><path d=\"M1028.267 307.2c0 4.693 3.84 8.533 8.533 8.533s8.533-3.84 8.533-8.533-3.84-8.533-8.533-8.533-8.533 3.84-8.533 8.533z\" fill=\"#ED5565\" /><path d=\"M1053.867 307.2c0 4.693 3.84 8.533 8.533 8.533s8.533-3.84 8.533-8.533-3.84-8.533-8.533-8.533-8.533 3.84-8.533 8.533z\" fill=\"#5CB85C\" /><path d=\"M1079.467 307.2c0 4.693 3.84 8.533 8.533 8.533s8.533-3.84 8.533-8.533-3.84-8.533-8.533-8.533-8.533 3.84-8.533 8.533z\" fill=\"#F0AD4E\" /><path d=\"M477.013 584.107c-5.546-6.827-9.386-14.934-8.96-23.894 1.707-26.453 38.827-20.48 46.08-7.253 7.254 13.227 6.4 46.933-2.986 49.493-3.84.854-11.52-1.28-19.627-5.973l5.12 35.413h-29.867l10.24-47.786z\" fill=\"#FECAC3\" /><path d=\"M500.907 555.093c-3.84 2.134-6.827 6.4-10.24 11.947-.854-.427-1.707-.427-2.56-.427-4.267 0-7.254 3.414-7.254 7.254 0 2.133.854 3.84 2.134 5.12-1.707 2.56-3.84 5.12-5.974 7.68-8.106-4.694-14.506-19.2-6.4-32.854 6.827-27.733 45.227-10.666 52.48-15.36 1.707 9.814-3.413 17.92-22.186 16.64z\" fill=\"#09192A\" /><path d=\"M454.827 733.44 499.2 888.32l32.427 113.92h23.466l-34.56-268.8h-65.706z\" fill=\"#5C648C\" /><path d=\"M442.88 733.44c-.853 79.36-4.693 123.307-5.547 130.56-1.28 7.253-17.493 53.333-49.066 138.24h24.32c40.106-81.493 63.146-127.573 67.84-138.24s19.2-54.187 40.96-130.56H442.88z\" fill=\"#7780AA\" /><path d=\"m385.28 1024 1.28-25.6h25.6c12.373 8.533 28.16 15.36 47.787 20.907V1024h-45.654l-15.786-2.56v2.56H385.28zm143.36 0 1.28-25.6h25.6c12.373 8.533 28.16 15.36 47.787 20.907V1024H556.8l-15.787-2.56v2.56H528.64z\" fill=\"#191847\" /><path d=\"m560.213 705.707 46.507-8.534c9.387-7.253 17.92-11.946 25.6-14.506 2.133 0 5.547.853.427 6.826-5.12 5.974-10.667 12.374-9.387 15.787.853 2.987 5.973 2.133 6.4 6.827.427 3.413-7.253 3.84-23.467 1.706l-37.546 20.48-8.534-28.586zM413.44 720.64h25.6c-28.16 86.613-43.093 132.267-44.373 136.533-2.56 9.387 2.986 23.467 5.546 30.72-8.106 5.12-7.253-13.226-17.493-6.826-9.387 5.973-16.213 16.64-26.88 7.68-1.28-1.28-2.56-5.12.853-8.534 8.534-8.106 21.334-22.186 23.04-26.88 1.707-6.4 13.227-50.773 33.707-132.693z\" fill=\"#FECAC3\" /><path d=\"m484.267 608.853 20.053 1.707c5.12 61.44 32 100.267 93.013 87.04l8.107 78.933c-57.173 10.24-107.093-20.906-116.907-104.96-2.56-20.906-4.693-43.946-4.266-62.72z\" fill=\"#B7CDE6\" /><path d=\"m474.027 600.747 30.72 9.386c0 72.107 16.64 117.76 25.173 170.667h-83.2c-1.28 18.773-1.707 37.547-2.133 56.32H382.72c14.08-101.547 43.52-180.907 89.173-236.373h2.134z\" fill=\"#E1E2F5\" /><path d=\"M460.373 678.4c-2.133 44.8-.853 78.933 3.84 102.4h-16.64c2.134-35.84 6.4-70.4 12.8-102.4z\" fill=\"#B7CDE6\" /><path d=\"M1242.027 624.64c-28.587 2.133-47.36 20.907-55.894 47.36-4.693 14.08-5.12 28.587-7.68 43.093-3.84 21.76-12.373 37.974-28.586 53.76-5.12 5.12-8.96 9.387-11.52 14.934-5.12 5.546-9.814 11.093-13.227 18.773-4.267 8.96-5.547 20.48-.427 29.867 1.28 2.56 4.694 7.253 8.107 9.813-8.533 18.347-14.933 37.547-17.493 57.173-.854-4.266-1.707-7.68-2.134-8.96-2.56-20.053-3.413-39.68-2.986-60.16 0-33.28-.854-66.133 2.56-98.56.426-5.12.853-9.813 2.133-14.933s-.427-2.987 3.84-5.12 9.387-1.707 13.653-4.267c17.067-9.813 26.027-34.56 32.854-51.2 7.68-18.773 12.373-38.826 16.213-58.88 2.987-14.506 4.693-29.013 5.973-43.946.427-4.694.427-9.387 1.28-14.08.427-1.28 1.707-3.414 1.707-4.694 0-2.56-1.707-3.84-1.707-5.973-1.28 1.707-2.56 2.56-3.84 3.84-30.72 30.293-45.653 71.68-57.173 110.933-13.227 43.947-21.76 88.32-22.187 133.974-.426 29.866-1.28 60.16.854 90.026.853 10.667 1.706 21.334 3.413 32 0 .427 1.707 10.24 3.84 15.787 0 4.267-.427 8.533 0 12.8v1.707h5.12c0-26.027 2.56-51.2 13.653-76.374 1.707-3.84 3.414-7.68 5.12-10.666h.427s.427-.427.427-.854c.426-.426.853-1.28 1.28-2.133 1.28-2.133 2.986-4.267 2.986-5.547 9.814-15.36 20.907-30.293 32-44.8 0 0 12.374-16.64 10.24-7.253-.853 4.693-9.813 12.8-13.653 17.493-8.107 10.24-17.493 23.467-25.6 36.267-.853.427-2.56 3.84-3.84 5.973-.427 1.28-1.28 2.134-1.707 3.414 28.16 8.96 49.92-8.96 64.854-30.72 4.693-5.974 8.96-11.52 14.933-16.64 9.813-8.107 20.053-8.96 31.573-12.8 31.147-10.24 44.374-49.92 48.64-79.36 5.547-33.28-17.92-84.48-58.026-81.067z\" fill=\"#92C110\" /><path d=\"M1024 930.133c0 52.054 41.813 93.867 93.867 93.867s93.866-41.813 93.866-93.867H1024z\" fill=\"#F2D7AD\" /><path d=\"M1243.307 886.613c-11.52-19.626-38.827-38.826-63.147-37.12-2.133 0-5.12.854-7.253 2.134h-9.387c-27.307 3.413-40.107 35.84-44.8 59.306-2.133-12.8-6.827-25.6-12.373-37.12-7.254-15.36-17.067-28.16-28.16-40.96-5.974-6.4-7.254-5.973-4.267-13.653 2.56-5.973 3.413-15.36 1.707-21.76-2.56-10.24-12.8-18.347-17.92-27.733-5.547-9.814-8.96-20.48-10.667-31.147-2.133-13.653-1.707-27.307-2.987-40.96-1.706-18.347-24.746-28.587-43.52-27.733-43.946 2.133-32.853 62.293-22.613 87.04 11.52 31.146 40.96 78.506 83.627 69.546-9.814-15.36-20.48-32-29.867-46.933-2.133-2.987-3.84-6.827-6.4-10.667-1.28-2.986-8.96-18.346-.853-10.666 4.266 4.266 7.68 14.506 10.666 20.053 1.707 3.84 5.12 8.96 6.4 11.093 25.174 42.667 64 75.52 72.107 125.867.853 5.12.853 10.24.853 14.933h7.68c0-1.706.427-2.986.427-4.266 2.56-24.32 14.08-62.72 42.24-68.694 2.56-.426 11.52.427 19.2 1.28 2.56.854 5.547 1.707 5.973 3.414 2.134 4.693-11.946-1.28-13.226-1.707-8.107-1.707-13.227 0-12.374 9.387.854 6.826 6.4 10.666 11.094 14.933 2.986 2.56 6.826 5.12 9.813 7.68 13.227 11.52 15.787 26.027 16.213 42.667 0 12.373.854 33.706 18.774 33.706 14.08 0 22.186-16.213 26.453-27.733 4.693-17.067 5.973-37.973-3.413-54.187z\" fill=\"#5BA02E\" /><path d=\"M610.133 637.013c0 7.254 89.6 13.227 200.534 13.227s200.533-5.973 200.533-13.227-89.6-13.226-200.533-13.226-200.534 5.973-200.534 13.226z\" fill=\"#F2F2F2\" /><path d=\"m663.04 493.227-2.987 44.8c7.254-5.12 17.494-8.534 29.44-8.534 28.16 0 44.8 16.64 44.8 45.654S715.52 625.92 682.24 625.92c-22.187 0-40.96-7.68-52.053-19.627l12.8-14.08C652.8 602.453 665.173 608 681.813 608c15.36 0 31.574-8.96 31.574-32.427 0-22.613-15.36-29.44-27.734-29.44-13.226 0-21.76 5.547-28.586 11.094l-14.934-6.827 4.694-74.667h61.013c2.56 0 2.987-.426 3.413-2.56l3.414-12.373 12.8-.853V492.8H663.04v.427z\" fill=\"#ED5565\" /><path d=\"M755.2 545.28c0-37.12 13.227-68.693 57.6-68.693 43.947 0 54.187 29.866 54.187 65.706 0 37.974-11.52 70.827-56.747 70.827-44.8 0-55.04-30.293-55.04-67.84zm90.453-1.28c0-31.573-6.826-49.92-32.853-49.92-26.453 0-35.413 18.773-35.413 52.48 0 29.867 7.68 49.92 34.133 49.92 26.027 0 34.133-20.48 34.133-52.48z\" fill=\"#AFB9C5\" /><path d=\"M887.04 545.28c0-37.12 13.227-68.693 57.6-68.693 43.947 0 54.187 29.866 54.187 65.706 0 37.974-11.52 70.827-56.747 70.827-44.8 0-55.04-30.293-55.04-67.84zm90.453-1.28c0-31.573-6.826-49.92-32.853-49.92-26.453 0-35.413 18.773-35.413 52.48 0 29.867 7.68 49.92 34.133 49.92 26.027 0 34.133-20.48 34.133-52.48z\" fill=\"#ED5565\" /><path d=\"M587.52 612.267c2.133.853 4.267 0 5.547-1.707s1.706-4.267.426-5.973c-1.28-1.707-3.413-2.987-5.546-2.56v2.56l-1.28-2.134c-1.707.854-2.987 2.56-2.987 4.267.427 2.56 1.707 4.693 3.84 5.547zm11.093-23.467c.427-1.707 2.134-2.987 3.84-3.413l.427 2.56.853-2.56c2.134 0 4.267 1.706 4.694 3.84.853 2.133 0 4.693-2.134 5.973-1.706 1.28-4.266 1.28-5.973 0-1.707-2.133-2.56-4.267-1.707-6.4zm6.827 33.707c2.56.853 5.12 0 6.4-2.56s.427-5.12-1.707-6.827l-.426 2.133-.427-2.56c-1.707-.426-3.84-.426-5.12.854-2.133 1.706-2.56 5.12-.427 7.253.427.853.854 1.28 1.707 1.707zM959.147 441.6c2.986 1.28 6.826 0 8.96-2.56s2.56-6.4.426-8.96c-1.706-2.987-5.12-4.267-8.533-3.413v4.266l-1.707-3.413c-2.56 1.28-4.266 3.84-4.266 6.4-.427 2.987 1.706 6.4 5.12 7.68zM992 464.213c.853-2.56 2.987-4.266 5.547-5.12l.853 3.84 1.28-4.266c3.413 0 6.4 2.133 7.253 5.546s-.426 6.827-2.986 8.96c-2.987 2.134-6.4 1.707-9.387-.426-2.987-1.707-3.84-5.12-2.56-8.534zm8.96 61.014c.427 3.84 3.84 6.4 7.253 6.4 3.84 0 6.827-2.56 7.68-5.974s-.853-7.253-4.266-8.96-7.254-.853-9.814 2.134l3.414 5.12-4.694-2.987c0 2.133 0 3.413.427 4.267z\" fill=\"#89C5CC\" /><path d=\"M341.333 256c0-56.747 45.654-102.4 102.4-102.4s102.4 45.653 102.4 102.4-45.653 102.4-102.4 102.4-102.4-45.653-102.4-102.4\" fill=\"#ED5565\" /><path d=\"m450.987 217.173-2.56 52.48c0 2.987-2.56 5.12-5.547 5.12-2.56 0-5.12-2.133-5.12-5.12l-2.56-52.48c0-4.266 2.987-7.68 7.253-8.106 4.267 0 7.68 2.986 8.107 7.253.427.427.427.427.427.853m-1.28 67.414c1.706 1.706 2.56 3.84 2.56 6.4s-.854 4.693-2.56 6.826c-1.707 1.707-4.267 2.56-6.827 2.56s-4.693-.853-6.4-2.56-2.987-3.84-2.987-6.4.854-4.693 2.987-6.4c1.707-1.706 3.84-2.56 6.4-2.56 2.987-.426 5.12.427 6.827 2.134\" fill=\"#FFF\" /></symbol>";
          body.insertBefore(svgDom, body.firstChild);
        });

var index_vue_vue_type_style_index_0_scoped_true_lang$1 = '';

const _sfc_main$1 = defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const symbolId = computed(() => `#icon-${props.name}`);
    return { symbolId }
  },
});
const _hoisted_1$1 = {
  class: "icon",
  "aria-hidden": "true"
};
const _hoisted_2$1 = ["xlink:href"];

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$1, [
    createBaseVNode("use", { "xlink:href": _ctx.symbolId }, null, 8, _hoisted_2$1)
  ]))
}
var index$2 = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-4e6f9f9a"]]);

var index_vue_vue_type_style_index_0_scoped_true_lang = '';

const formatDate = (date, format) => {
  var obj = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S+': date.getMilliseconds(),
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  for (var k in obj) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? obj[k]
          : ('00' + obj[k]).substr(('' + obj[k]).length)
      );
    }
  }
  return format
};
const getSearchModel = search => {
  const searchModel = {};
  if (search && search.fields) {
    search.fields.forEach(item => {
      switch (item.type) {
        case 'checkbox':
        case 'checkbox-button':
          searchModel[item.name] = [];
          break
      }
      if (item.defaultValue !== undefined) {
        searchModel[item.name] = item.defaultValue;
        // 日期范围和时间范围真实变量默认值
        if (
          (item.type === 'daterange' || item.type === 'datetimerange') &&
          !!item.trueNames &&
          Array.isArray(item.defaultValue)
        ) {
          item.defaultValue.forEach((val, index) => {
            searchModel[item.trueNames[index]] = val;
          });
        }
      }
    });
  }
  return searchModel
};
const _sfc_main = defineComponent({
  props: {
    // 请求数据的方法
    request: {
      type: Function,
    },
    // 表格标题
    title: {
      type: String,
      default: '',
    },
    // 是否隐藏标题栏
    hideTitleBar: {
      type: Boolean,
      default: false,
    },
    // 是否隐藏按钮操作
    hideToolbar: {
      type: Boolean,
      default: false,
    },
    // 搜索表单配置，false表示不显示搜索表单
    search: {
      type: [Boolean, Object],
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    // 表头配置
    columns: {
      type: Array,
      default: () => [],
    },
    // 行数据的Key，同elementUI的table组件的row-key
    rowKey: {
      type: [String, Function],
      default: () => {},
    },
    // 分页配置，false表示不显示分页
    pagination: {
      type: [Boolean, Object],
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    // 优化搜索字段，
    // 1、如果搜索配置有transform处理函数，执行transform
    // 2、删除日期范围默认的name字段
    const optimizeFields = search => {
      const searchModel = JSON.parse(JSON.stringify(state.searchModel));
      if (search && search.fields) {
        search.fields.forEach(item => {
          if (!searchModel.hasOwnProperty(item.name)) {
            return
          }
          if (item.transform) {
            searchModel[item.name] = item.transform(searchModel[item.name]);
          }
          if (
            (item.type === 'daterange' || item.type === 'datetimerange') &&
            !!item.trueNames
          ) {
            delete searchModel[item.name];
          }
        });
      }
      return searchModel
    };

    // 请求列表数据
    const getTableData = async () => {
      state.loading = true;
      const searchModel = optimizeFields(props.search);
      const { data, total } = await props.request({
        current: state.pageNum,
        size: state.pageSize,
        ...searchModel,
      });
      state.loading = false;
      state.tableData = data;
      state.total = total;
    };

    const state = reactive({
      searchModel: getSearchModel(props.search),
      loading: false,
      tableData: [],
      total: 0,
      pageNum: 1,
      pageSize: (!!props.pagination && props.pagination.pageSize) || 10,
      paginationConfig: {
        show: false,
      },
      // 搜索
      handleSearch() {
        state.pageNum = 1;
        getTableData();
      },
      // 重置函数
      handleReset() {
        if (JSON.stringify(state.searchModel) === '{}') {
          return
        }
        state.pageNum = 1;
        state.searchModel = getSearchModel(props.search);
        getTableData();
      },
      // 刷新
      refresh() {
        getTableData();
      },

      // 当前页变化
      handleCurrentChange() {
        getTableData();
      },
      // 改变每页size数量
      handleSizeChange() {
        state.pageNum = 1;
        getTableData();
      },
      // 全选
      handleSelectionChange(arr) {
        emit('selectionChange', arr);
      },
      // 过滤方法
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value
      },
      // 日期范围
      handleDateChange(date, item, format) {
        state.searchModel[item.name] = date ? formatDate(date, format) : '';
      },
      handleRangeChange(date, item, format) {
        const arr = !!date && date.map(d => formatDate(d, format));
        state.searchModel[item.name] = arr ? arr : [];

        if (!item.trueNames) {
          return
        }

        if (arr) {
          arr.forEach((val, index) => {
            state.searchModel[item.trueNames[index]] = val;
          });
        } else {
          item.trueNames.forEach(key => {
            delete state.searchModel[key];
          });
        }
      },
    });

    if (typeof props.pagination === 'object') {
      const { layout, pageSizes, style } = props.pagination;
      state.paginationConfig = {
        show: true,
        layout: layout || 'total, sizes, prev, pager, next, jumper',
        pageSizes: pageSizes || [10, 20, 30, 40, 50, 100],
        style: style || {},
      };
    }

    watch(
      () => props.search,
      val => {
        state.searchModel = getSearchModel(val);
      },
      { deep: true }
    );

    onBeforeMount(() => {
      getTableData();
    });

    return {
      ...toRefs(state),
    }
  },
});
const _hoisted_1 = { class: "page-box" };
const _hoisted_2 = {
  key: 1,
  class: "head"
};
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "toolbar" };
const _hoisted_5 = { class: "table" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  const _component_el_radio = resolveComponent("el-radio");
  const _component_el_radio_group = resolveComponent("el-radio-group");
  const _component_el_radio_button = resolveComponent("el-radio-button");
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  const _component_el_checkbox_button = resolveComponent("el-checkbox-button");
  const _component_el_date_picker = resolveComponent("el-date-picker");
  const _component_el_input_number = resolveComponent("el-input-number");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_table = resolveComponent("el-table");
  const _component_el_pagination = resolveComponent("el-pagination");
  const _directive_loading = resolveDirective("loading");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    (!!_ctx.search)
      ? (openBlock(), createBlock(_component_el_form, {
          key: 0,
          class: "search",
          model: _ctx.searchModel,
          inline: true,
          "label-position": "right",
          "label-width": _ctx.search.labelWidth,
          ref: "searchForm"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.search.fields, (item) => {
              return (openBlock(), createBlock(_component_el_form_item, {
                key: item.name,
                label: _ctx.$t(item.label),
                prop: item.name
              }, {
                default: withCtx(() => [
                  (item.type === 'custom')
                    ? renderSlot(_ctx.$slots, item.slot, { key: 0 }, undefined, true)
                    : (item.type === 'select')
                      ? (openBlock(), createBlock(_component_el_select, {
                          key: 1,
                          modelValue: _ctx.searchModel[item.name],
                          "onUpdate:modelValue": $event => ((_ctx.searchModel[item.name]) = $event),
                          filterable: !!item.filterable,
                          multiple: !!item.multiple,
                          clearable: "",
                          placeholder: _ctx.$t(item.label),
                          style: normalizeStyle({ width: _ctx.search.inputWidth, ...item.style })
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(item.options, (option) => {
                              return (openBlock(), createBlock(_component_el_option, {
                                key: option.value,
                                label: _ctx.$t(option.name),
                                value: option.value
                              }, null, 8, ["label", "value"]))
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue", "filterable", "multiple", "placeholder", "style"]))
                      : (item.type === 'radio')
                        ? (openBlock(), createBlock(_component_el_radio_group, {
                            key: 2,
                            modelValue: _ctx.searchModel[item.name],
                            "onUpdate:modelValue": $event => ((_ctx.searchModel[item.name]) = $event),
                            style: normalizeStyle({ width: _ctx.search.inputWidth, ...item.style })
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(item.options, (option) => {
                                return (openBlock(), createBlock(_component_el_radio, {
                                  key: option.value,
                                  label: option.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString$1(_ctx.$t(option.name)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["label"]))
                              }), 128))
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue", "style"]))
                        : (item.type === 'radio-button')
                          ? (openBlock(), createBlock(_component_el_radio_group, {
                              key: 3,
                              modelValue: _ctx.searchModel[item.name],
                              "onUpdate:modelValue": $event => ((_ctx.searchModel[item.name]) = $event),
                              style: normalizeStyle({ width: _ctx.search.inputWidth, ...item.style })
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(item.options, (option) => {
                                  return (openBlock(), createBlock(_component_el_radio_button, {
                                    key: option.value,
                                    label: option.value
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString$1(_ctx.$t(option.name)), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["label"]))
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "style"]))
                          : (item.type === 'checkbox')
                            ? (openBlock(), createBlock(_component_el_checkbox_group, {
                                key: 4,
                                modelValue: _ctx.searchModel[item.name],
                                "onUpdate:modelValue": $event => ((_ctx.searchModel[item.name]) = $event),
                                style: normalizeStyle({ width: _ctx.search.inputWidth, ...item.style })
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.options, (option) => {
                                    return (openBlock(), createBlock(_component_el_checkbox, {
                                      key: option.value,
                                      label: option.value
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString$1(_ctx.$t(option.name)), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["label"]))
                                  }), 128))
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue", "style"]))
                            : (item.type === 'checkbox-button')
                              ? (openBlock(), createBlock(_component_el_checkbox_group, {
                                  key: 5,
                                  modelValue: _ctx.searchModel[item.name],
                                  "onUpdate:modelValue": $event => ((_ctx.searchModel[item.name]) = $event),
                                  style: normalizeStyle({ width: _ctx.search.inputWidth, ...item.style })
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(item.options, (option) => {
                                      return (openBlock(), createBlock(_component_el_checkbox_button, {
                                        key: option.value,
                                        label: option.value
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString$1(_ctx.$t(option.name)), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["label"]))
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "style"]))
                              : (item.type === 'date')
                                ? (openBlock(), createBlock(_component_el_date_picker, {
                                    key: 6,
                                    modelValue: _ctx.searchModel[item.name],
                                    "onUpdate:modelValue": $event => ((_ctx.searchModel[item.name]) = $event),
                                    type: "date",
                                    format: "YYYY-MM-DD",
                                    clearable: "",
                                    onChange: $event => (_ctx.handleDateChange($event, item, 'YYYY-MM-DD')),
                                    placeholder: _ctx.$t(item.label),
                                    style: normalizeStyle({ width: _ctx.search.inputWidth, ...item.style })
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange", "placeholder", "style"]))
                                : (item.type === 'datetime')
                                  ? (openBlock(), createBlock(_component_el_date_picker, {
                                      key: 7,
                                      modelValue: _ctx.searchModel[item.name],
                                      "onUpdate:modelValue": $event => ((_ctx.searchModel[item.name]) = $event),
                                      type: "datetime",
                                      clearable: "",
                                      onChange: $event => (_ctx.handleDateChange($event, item, 'YYYY-MM-DD HH:mm:ss')),
                                      format: "YYYY-MM-DD HH:mm:ss",
                                      placeholder: _ctx.$t(item.label),
                                      style: normalizeStyle({ width: _ctx.search.inputWidth, ...item.style })
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange", "placeholder", "style"]))
                                  : (item.type === 'daterange')
                                    ? (openBlock(), createBlock(_component_el_date_picker, {
                                        key: 8,
                                        modelValue: _ctx.searchModel[item.name],
                                        "onUpdate:modelValue": $event => ((_ctx.searchModel[item.name]) = $event),
                                        type: "daterange",
                                        format: "YYYY-MM-DD",
                                        "range-separator": "-",
                                        "start-placeholder": _ctx.$t('public.startdate'),
                                        "end-placeholder": _ctx.$t('public.enddate'),
                                        clearable: "",
                                        onChange: $event => (_ctx.handleRangeChange($event, item, 'YYYY-MM-DD')),
                                        style: normalizeStyle({ ...item.style })
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "start-placeholder", "end-placeholder", "onChange", "style"]))
                                    : (item.type === 'datetimerange')
                                      ? (openBlock(), createBlock(_component_el_date_picker, {
                                          key: 9,
                                          modelValue: _ctx.searchModel[item.name],
                                          "onUpdate:modelValue": $event => ((_ctx.searchModel[item.name]) = $event),
                                          type: "datetimerange",
                                          format: "YYYY-MM-DD HH:mm:ss",
                                          "range-separator": "-",
                                          "start-placeholder": _ctx.$t('public.starttime'),
                                          "end-placeholder": _ctx.$t('public.endtime'),
                                          clearable: "",
                                          onChange: $event => (_ctx.handleRangeChange($event, item, 'YYYY-MM-DD HH:mm:ss')),
                                          style: normalizeStyle({ ...item.style })
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "start-placeholder", "end-placeholder", "onChange", "style"]))
                                      : (item.type === 'number')
                                        ? (openBlock(), createBlock(_component_el_input_number, {
                                            key: 10,
                                            modelValue: _ctx.searchModel[item.name],
                                            "onUpdate:modelValue": $event => ((_ctx.searchModel[item.name]) = $event),
                                            placeholder: _ctx.$t(item.label),
                                            "controls-position": "right",
                                            min: item.min,
                                            max: item.max,
                                            style: normalizeStyle({ width: _ctx.search.inputWidth, ...item.style })
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "min", "max", "style"]))
                                        : (item.type === 'textarea')
                                          ? (openBlock(), createBlock(_component_el_input, {
                                              key: 11,
                                              maxlength: item.maxlength,
                                              type: "textarea",
                                              clearable: "",
                                              modelValue: _ctx.searchModel[item.name],
                                              "onUpdate:modelValue": $event => ((_ctx.searchModel[item.name]) = $event),
                                              placeholder: _ctx.$t(item.label),
                                              style: normalizeStyle({ width: _ctx.search.inputWidth, ...item.style })
                                            }, null, 8, ["maxlength", "modelValue", "onUpdate:modelValue", "placeholder", "style"]))
                                          : (openBlock(), createBlock(_component_el_input, {
                                              key: 12,
                                              maxlength: item.maxlength,
                                              modelValue: _ctx.searchModel[item.name],
                                              "onUpdate:modelValue": $event => ((_ctx.searchModel[item.name]) = $event),
                                              clearable: "",
                                              placeholder: _ctx.$t(item.label),
                                              style: normalizeStyle({ width: _ctx.search.inputWidth, ...item.style })
                                            }, null, 8, ["maxlength", "modelValue", "onUpdate:modelValue", "placeholder", "style"]))
                ]),
                _: 2
              }, 1032, ["label", "prop"]))
            }), 128)),
            createVNode(_component_el_form_item, { class: "search-btn" }, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  type: "primary",
                  icon: "Search",
                  onClick: _ctx.handleSearch
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString$1(_ctx.$t('public.search')), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_el_button, {
                  onClick: _ctx.handleReset,
                  icon: "RefreshRight"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString$1(_ctx.$t('public.reset')), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          _: 3
        }, 8, ["model", "label-width"]))
      : createCommentVNode("", true),
    (!_ctx.hideTitleBar)
      ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createBaseVNode("span", _hoisted_3, toDisplayString$1(_ctx.title), 1)
          ], true),
          createBaseVNode("div", _hoisted_4, [
            renderSlot(_ctx.$slots, "toolbar", {}, undefined, true)
          ])
        ]))
      : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_5, [
      withDirectives((openBlock(), createBlock(_component_el_table, {
        data: _ctx.tableData,
        "row-key": _ctx.rowKey,
        "tooltip-effect": "dark",
        stripe: "",
        border: _ctx.border,
        onSelectionChange: _ctx.handleSelectionChange
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (item) => {
            return (openBlock(), createBlock(_component_el_table_column, mergeProps({
              key: item.label,
              "filter-method": item.filters && _ctx.filterHandler,
              "show-overflow-tooltip": !item.wrap
            }, item, {
              label: item.label ? _ctx.$t(item.label) : ''
            }), createSlots({ _: 2 }, [
              (!!item.labelSlot)
                ? {
                    name: "header",
                    fn: withCtx((scope) => [
                      renderSlot(_ctx.$slots, item.labelSlot, normalizeProps(guardReactiveProps(scope)), undefined, true)
                    ])
                  }
                : undefined,
              (!!item.tdSlot)
                ? {
                    name: "default",
                    fn: withCtx((scope) => [
                      renderSlot(_ctx.$slots, item.tdSlot, normalizeProps(guardReactiveProps(scope)), undefined, true)
                    ])
                  }
                : undefined
            ]), 1040, ["filter-method", "show-overflow-tooltip", "label"]))
          }), 128))
        ]),
        _: 3
      }, 8, ["data", "row-key", "border", "onSelectionChange"])), [
        [_directive_loading, _ctx.loading]
      ])
    ]),
    (_ctx.paginationConfig.show && _ctx.total > 0)
      ? (openBlock(), createBlock(_component_el_pagination, {
          key: 2,
          class: "pagination",
          style: normalizeStyle(_ctx.paginationConfig.style),
          onSizeChange: _ctx.handleSizeChange,
          currentPage: _ctx.pageNum,
          "onUpdate:currentPage": _cache[0] || (_cache[0] = $event => ((_ctx.pageNum) = $event)),
          onCurrentChange: _ctx.handleCurrentChange,
          "page-sizes": _ctx.paginationConfig.pageSizes,
          pageSize: _ctx.pageSize,
          "onUpdate:pageSize": _cache[1] || (_cache[1] = $event => ((_ctx.pageSize) = $event)),
          layout: _ctx.paginationConfig.layout,
          total: _ctx.total
        }, null, 8, ["style", "onSizeChange", "currentPage", "onCurrentChange", "page-sizes", "pageSize", "layout", "total"]))
      : createCommentVNode("", true)
  ]))
}
var index$1 = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-26c07430"]]);

/*
 *                   江城子 . 程序员之歌
 *
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 *
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 *
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-09-18 09:32:01
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-24 14:43:31
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

var Components = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    SvgIcon: index$2,
    ProTable: index$1
}, Symbol.toStringTag, { value: 'Module' }));

/*
 *
 * 　　┏┓　　　┏┓+ +
 * 　┏┛┻━━━┛┻┓ + +
 * 　┃　　　　　　　┃
 * 　┃　　　━　　　┃ ++ + + +
 *  ████━████ ┃+
 * 　┃　　　　　　　┃ +
 * 　┃　　　┻　　　┃
 * 　┃　　　　　　　┃ + +
 * 　┗━┓　　　┏━┛
 * 　　　┃　　　┃
 * 　　　┃　　　┃ + + + +
 * 　　　┃　　　┃
 * 　　　┃　　　┃ +  神兽保佑
 * 　　　┃　　　┃    代码无bug
 * 　　　┃　　　┃　　+
 * 　　　┃　 　　┗━━━┓ + +
 * 　　　┃ 　　　　　　　┣┓
 * 　　　┃ 　　　　　　　┏┛
 * 　　　┗┓┓┏━┳┓┏┛ + + + +
 * 　　　　┃┫┫　┃┫┫
 * 　　　　┗┻┛　┗┻┛+ + + +
 *
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-09-01 13:58:08
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 18:31:22
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const Permission = app => {
  app.directive('permission', {
    mounted: function(el, binding) {
      const { permissionList } = useAccount();

      if (
        binding.value &&
        permissionList.every(item => item !== binding.value)
      ) {
        // 移除组件
        el.parentNode.removeChild(el);
      }
    },
  });
};

var Directives = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Permission: Permission
}, Symbol.toStringTag, { value: 'Module' }));

/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-21 09:18:32
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 15:45:36
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const useErrorlog = defineStore('errorLog', {
  state: () => ({
    logs: [],
  }),
  actions: {
    addErrorLog(log) {
      // 可以根据需要将错误上报给服务器
      // ....code.......

      this.logs.push(log);
    },
    clearErrorLog() {
      this.logs.splice(0);
    },
  },
});

/*
 *           佛曰:
 *                   写字楼里写字间，写字间里程序员；
 *                   程序人员写程序，又拿程序换酒钱。
 *                   酒醒只在网上坐，酒醉还来网下眠；
 *                   酒醉酒醒日复日，网上网下年复年。
 *                   但愿老死电脑间，不愿鞠躬老板前；
 *                   奔驰宝马贵者趣，公交自行程序员。
 *                   别人笑我忒疯癫，我笑自己命太贱；
 *                   不见满街漂亮妹，哪个归得程序员？
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-21 09:18:32
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 15:53:02
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

var useErrorHandler = app => {
  {
    app.config.errorHandler = function(err, vm, info) {
      nextTick(() => {
        useErrorlog().addErrorLog({
          err,
          // vm, // 这里不保存vm，否则渲染错误日志的时候控制台会有警告
          info,
          url: window.location.href,
          id: Date.now(),
        });
        console.error(err, info);
      });
    };
  }
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

var REG_LINK$1 = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
var script$a = {
    name: 'JsonString',
    props: {
        jsonValue: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {
            expand: true,
            canExtend: false
        };
    },
    mounted: function mounted() {
        if (this.$refs.itemRef.offsetHeight > this.$refs.holderRef.offsetHeight) {
            this.canExtend = true;
        }
    },
    methods: {
        toggle: function toggle() {
            this.expand = !this.expand;
        }
    },
    render: function render() {
        var value = this.jsonValue;
        var islink = REG_LINK$1.test(value);
        var domItem;
        if (!this.expand) {
            domItem = {
                'class': { 'jv-ellipsis': true },
                onClick: this.toggle,
                innerText: '...'
            };
        } else {
            domItem = {
                'class': {
                    'jv-item': true,
                    'jv-string': true
                },
                ref: 'itemRef'
            };
            if (islink) {
                value = '<a href="'.concat(value, '" target="_blank" class="jv-link">').concat(value, '</a>');
                domItem.innerHTML = '"'.concat(value.toString(), '"');
            } else {
                domItem.innerText = '"'.concat(value.toString(), '"');
            }
        }
        return h('span', {}, [
            this.canExtend && h('span', {
                'class': {
                    'jv-toggle': true,
                    open: this.expand
                },
                onClick: this.toggle
            }),
            h('span', {
                'class': { 'jv-holder-node': true },
                ref: 'holderRef'
            }),
            h('span', domItem)
        ]);
    }
};

script$a.__file = "src/Components/types/json-string.vue";

var script$9 = {
    name: 'JsonUndefined',
    functional: true,
    props: {
        jsonValue: {
            type: Object,
            'default': null
        }
    },
    render: function render() {
        return h('span', {
            'class': {
                'jv-item': true,
                'jv-undefined': true
            },
            innerText: this.jsonValue === null ? 'null' : 'undefined'
        });
    }
};

script$9.__file = "src/Components/types/json-undefined.vue";

var script$8 = {
    name: 'JsonNumber',
    functional: true,
    props: {
        jsonValue: {
            type: Number,
            required: true
        }
    },
    render: function render() {
        var isInteger = Number.isInteger(this.jsonValue);
        return h('span', {
            'class': {
                'jv-item': true,
                'jv-number': true,
                'jv-number-integer': isInteger,
                'jv-number-float': !isInteger
            },
            innerText: this.jsonValue.toString()
        });
    }
};

script$8.__file = "src/Components/types/json-number.vue";

var script$7 = {
    name: 'JsonBoolean',
    functional: true,
    props: { jsonValue: Boolean },
    render: function render() {
        return h('span', {
            'class': {
                'jv-item': true,
                'jv-boolean': true
            },
            innerText: this.jsonValue.toString()
        });
    }
};

script$7.__file = "src/Components/types/json-boolean.vue";

var script$6 = {
    name: 'JsonObject',
    props: {
        jsonValue: {
            type: Object,
            required: true
        },
        keyName: {
            type: String,
            'default': ''
        },
        depth: {
            type: Number,
            'default': 0
        },
        expand: Boolean,
        sort: Boolean,
        previewMode: Boolean
    },
    data: function data() {
        return { value: {} };
    },
    computed: {
        ordered: function ordered() {
            var _this = this;
            if (!this.sort) {
                return this.value;
            }
            var ordered = {};
            Object.keys(this.value).sort().forEach(function (key) {
                ordered[key] = _this.value[key];
            });
            return ordered;
        }
    },
    watch: {
        jsonValue: function jsonValue(newVal) {
            this.setValue(newVal);
        }
    },
    mounted: function mounted() {
        this.setValue(this.jsonValue);
    },
    methods: {
        setValue: function setValue(val) {
            var _this2 = this;
            setTimeout(function () {
                _this2.value = val;
            }, 0);
        },
        toggle: function toggle() {
            this.$emit('update:expand', !this.expand);
            this.dispatchEvent();
        },
        dispatchEvent: function dispatchEvent() {
            try {
                this.$el.dispatchEvent(new Event('resized'));
            } catch (e) {
                var evt = document.createEvent('Event');
                evt.initEvent('resized', true, false);
                this.$el.dispatchEvent(evt);
            }
        }
    },
    render: function render() {
        var elements = [];
        if (!this.previewMode && !this.keyName) {
            elements.push(h('span', {
                'class': {
                    'jv-toggle': true,
                    'open': !!this.expand
                },
                onClick: this.toggle
            }));
        }
        elements.push(h('span', {
            'class': {
                'jv-item': true,
                'jv-object': true
            },
            innerText: '{'
        }));
        if (this.expand) {
            for (var key in this.ordered) {
                if (this.ordered.hasOwnProperty(key)) {
                    var value = this.ordered[key];
                    elements.push(h(script$1, {
                        key: key,
                        style: { display: !this.expand ? 'none' : undefined },
                        sort: this.sort,
                        keyName: key,
                        depth: this.depth + 1,
                        value: value,
                        previewMode: this.previewMode
                    }));
                }
            }
        }
        if (!this.expand && Object.keys(this.value).length) {
            elements.push(h('span', {
                style: { display: this.expand ? 'none' : undefined },
                'class': { 'jv-ellipsis': true },
                onClick: this.toggle,
                title: 'click to reveal object content (keys: '.concat(Object.keys(this.ordered).join(', '), ')'),
                innerText: '...'
            }));
        }
        elements.push(h('span', {
            'class': {
                'jv-item': true,
                'jv-object': true
            },
            innerText: '}'
        }));
        return h('span', elements);
    }
};

script$6.__file = "src/Components/types/json-object.vue";

var script$5 = {
    name: 'JsonArray',
    props: {
        jsonValue: {
            type: Array,
            required: true
        },
        keyName: {
            type: String,
            'default': ''
        },
        depth: {
            type: Number,
            'default': 0
        },
        sort: Boolean,
        expand: Boolean,
        previewMode: Boolean
    },
    data: function data() {
        return { value: [] };
    },
    watch: {
        jsonValue: function jsonValue(newVal) {
            this.setValue(newVal);
        }
    },
    mounted: function mounted() {
        this.setValue(this.jsonValue);
    },
    methods: {
        setValue: function setValue(vals) {
            var _this = this;
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            if (index === 0) {
                this.value = [];
            }
            setTimeout(function () {
                if (vals.length > index) {
                    _this.value.push(vals[index]);
                    _this.setValue(vals, index + 1);
                }
            }, 0);
        },
        toggle: function toggle() {
            this.$emit('update:expand', !this.expand);
            try {
                this.$el.dispatchEvent(new Event('resized'));
            } catch (e) {
                var evt = document.createEvent('Event');
                evt.initEvent('resized', true, false);
                this.$el.dispatchEvent(evt);
            }
        }
    },
    render: function render() {
        var _this2 = this;
        var elements = [];
        if (!this.previewMode && !this.keyName) {
            elements.push(h('span', {
                'class': {
                    'jv-toggle': true,
                    'open': !!this.expand
                },
                onClick: this.toggle
            }));
        }
        elements.push(h('span', {
            'class': {
                'jv-item': true,
                'jv-array': true
            },
            innerText: '['
        }));
        if (this.expand) {
            this.value.forEach(function (value, key) {
                elements.push(h(script$1, {
                    key: key,
                    style: { display: _this2.expand ? undefined : 'none' },
                    sort: _this2.sort,
                    depth: _this2.depth + 1,
                    value: value,
                    previewMode: _this2.previewMode
                }));
            });
        }
        if (!this.expand && this.value.length) {
            elements.push(h('span', {
                style: { display: undefined },
                'class': { 'jv-ellipsis': true },
                onClick: this.toggle,
                title: 'click to reveal '.concat(this.value.length, ' hidden items'),
                innerText: '...'
            }));
        }
        elements.push(h('span', {
            'class': {
                'jv-item': true,
                'jv-array': true
            },
            innerText: ']'
        }));
        return h('span', elements);
    }
};

script$5.__file = "src/Components/types/json-array.vue";

var script$4 = {
    name: 'JsonFunction',
    functional: true,
    props: {
        jsonValue: {
            type: Function,
            required: true
        }
    },
    render: function render() {
        return h('span', {
            'class': {
                'jv-item': true,
                'jv-function': true
            },
            attrs: { title: this.jsonValue.toString() },
            innerHTML: '&lt;function&gt;'
        });
    }
};

script$4.__file = "src/Components/types/json-function.vue";

var script$3 = {
    name: 'JsonDate',
    inject: ['timeformat'],
    functional: true,
    props: {
        jsonValue: {
            type: Date,
            required: true
        }
    },
    render: function render() {
        var value = this.jsonValue;
        var timeformat = this.timeformat;
        return h('span', {
            'class': {
                'jv-item': true,
                'jv-string': true
            },
            innerText: '"'.concat(timeformat(value), '"')
        });
    }
};

script$3.__file = "src/Components/types/json-date.vue";

var REG_LINK = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
var script$2 = {
    name: 'JsonString',
    props: {
        jsonValue: {
            type: RegExp,
            required: true
        }
    },
    data: function data() {
        return {
            expand: true,
            canExtend: false
        };
    },
    mounted: function mounted() {
        if (this.$refs.itemRef.offsetHeight > this.$refs.holderRef.offsetHeight) {
            this.canExtend = true;
        }
    },
    methods: {
        toggle: function toggle() {
            this.expand = !this.expand;
        }
    },
    render: function render() {
        var value = this.jsonValue;
        var islink = REG_LINK.test(value);
        var domItem;
        if (!this.expand) {
            domItem = {
                'class': { 'jv-ellipsis': true },
                onClick: this.toggle,
                innerText: '...'
            };
        } else {
            domItem = {
                'class': {
                    'jv-item': true,
                    'jv-string': true
                },
                ref: 'itemRef'
            };
            if (islink) {
                value = '<a href="'.concat(value, '" target="_blank" class="jv-link">').concat(value, '</a>');
                domItem.innerHTML = ''.concat(value.toString());
            } else {
                domItem.innerText = ''.concat(value.toString());
            }
        }
        return h('span', {}, [
            this.canExtend && h('span', {
                'class': {
                    'jv-toggle': true,
                    open: this.expand
                },
                onClick: this.toggle
            }),
            h('span', {
                'class': { 'jv-holder-node': true },
                ref: 'holderRef'
            }),
            h('span', domItem)
        ]);
    }
};

script$2.__file = "src/Components/types/json-regexp.vue";

var script$1 = {
    name: 'JsonBox',
    inject: [
        'expandDepth',
        'keyClick'
    ],
    props: {
        value: {
            type: [
                Object,
                Array,
                String,
                Number,
                Boolean,
                Function,
                Date
            ],
            'default': null
        },
        keyName: {
            type: String,
            'default': ''
        },
        sort: Boolean,
        depth: {
            type: Number,
            'default': 0
        },
        previewMode: Boolean
    },
    data: function data() {
        return { expand: true };
    },
    mounted: function mounted() {
        this.expand = this.previewMode || (this.depth >= this.expandDepth ? false : true);
    },
    methods: {
        toggle: function toggle() {
            this.expand = !this.expand;
            try {
                this.$el.dispatchEvent(new Event('resized'));
            } catch (e) {
                var evt = document.createEvent('Event');
                evt.initEvent('resized', true, false);
                this.$el.dispatchEvent(evt);
            }
        }
    },
    render: function render() {
        var _this = this;
        var elements = [];
        var dataType;
        if (this.value === null || this.value === undefined) {
            dataType = script$9;
        } else if (Array.isArray(this.value)) {
            dataType = script$5;
        } else if (Object.prototype.toString.call(this.value) === '[object Date]') {
            dataType = script$3;
        } else if (this.value.constructor === RegExp) {
            dataType = script$2;
        } else if (_typeof(this.value) === 'object') {
            dataType = script$6;
        } else if (typeof this.value === 'number') {
            dataType = script$8;
        } else if (typeof this.value === 'string') {
            dataType = script$a;
        } else if (typeof this.value === 'boolean') {
            dataType = script$7;
        } else if (typeof this.value === 'function') {
            dataType = script$4;
        }
        var complex = this.keyName && this.value && (Array.isArray(this.value) || _typeof(this.value) === 'object' && Object.prototype.toString.call(this.value) !== '[object Date]');
        if (!this.previewMode && complex) {
            elements.push(h('span', {
                'class': {
                    'jv-toggle': true,
                    open: !!this.expand
                },
                onClick: this.toggle
            }));
        }
        if (this.keyName) {
            elements.push(h('span', {
                'class': { 'jv-key': true },
                onClick: function onClick() {
                    _this.keyClick(_this.keyName);
                },
                innerText: ''.concat(this.keyName, ':')
            }));
        }
        elements.push(h(dataType, {
            'class': { 'jv-push': true },
            jsonValue: this.value,
            keyName: this.keyName,
            sort: this.sort,
            depth: this.depth,
            expand: this.expand,
            previewMode: this.previewMode,
            'onUpdate:expand': function onUpdateExpand(value) {
                _this.expand = value;
            }
        }));
        return h('div', {
            'class': {
                'jv-node': true,
                'jv-key-node': Boolean(this.keyName) && !complex,
                toggle: !this.previewMode && complex
            }
        }, elements);
    }
};

script$1.__file = "src/Components/json-box.vue";

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var clipboard = {exports: {}};

(function (module, exports) {
    (function webpackUniversalModuleDefinition(root, factory) {
        module.exports = factory();
    }(commonjsGlobal, function () {
        return function () {
            var __webpack_modules__ = {
                686: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                    __webpack_require__.d(__webpack_exports__, {
                        'default': function () {
                            return clipboard;
                        }
                    });
                    var tiny_emitter = __webpack_require__(279);
                    var tiny_emitter_default = __webpack_require__.n(tiny_emitter);
                    var listen = __webpack_require__(370);
                    var listen_default = __webpack_require__.n(listen);
                    var src_select = __webpack_require__(817);
                    var select_default = __webpack_require__.n(src_select);
                    function command(type) {
                        try {
                            return document.execCommand(type);
                        } catch (err) {
                            return false;
                        }
                    }
                    var ClipboardActionCut = function ClipboardActionCut(target) {
                        var selectedText = select_default()(target);
                        command('cut');
                        return selectedText;
                    };
                    var actions_cut = ClipboardActionCut;
                    function createFakeElement(value) {
                        var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
                        var fakeElement = document.createElement('textarea');
                        fakeElement.style.fontSize = '12pt';
                        fakeElement.style.border = '0';
                        fakeElement.style.padding = '0';
                        fakeElement.style.margin = '0';
                        fakeElement.style.position = 'absolute';
                        fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px';
                        var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                        fakeElement.style.top = ''.concat(yPosition, 'px');
                        fakeElement.setAttribute('readonly', '');
                        fakeElement.value = value;
                        return fakeElement;
                    }
                    var ClipboardActionCopy = function ClipboardActionCopy(target) {
                        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { container: document.body };
                        var selectedText = '';
                        if (typeof target === 'string') {
                            var fakeElement = createFakeElement(target);
                            options.container.appendChild(fakeElement);
                            selectedText = select_default()(fakeElement);
                            command('copy');
                            fakeElement.remove();
                        } else {
                            selectedText = select_default()(target);
                            command('copy');
                        }
                        return selectedText;
                    };
                    var actions_copy = ClipboardActionCopy;
                    function _typeof(obj) {
                        '@babel/helpers - typeof';
                        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
                            _typeof = function _typeof(obj) {
                                return typeof obj;
                            };
                        } else {
                            _typeof = function _typeof(obj) {
                                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
                            };
                        }
                        return _typeof(obj);
                    }
                    var ClipboardActionDefault = function ClipboardActionDefault() {
                        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        var _options$action = options.action, action = _options$action === void 0 ? 'copy' : _options$action, container = options.container, target = options.target, text = options.text;
                        if (action !== 'copy' && action !== 'cut') {
                            throw new Error('Invalid "action" value, use either "copy" or "cut"');
                        }
                        if (target !== undefined) {
                            if (target && _typeof(target) === 'object' && target.nodeType === 1) {
                                if (action === 'copy' && target.hasAttribute('disabled')) {
                                    throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                }
                                if (action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                                    throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                }
                            } else {
                                throw new Error('Invalid "target" value, use a valid Element');
                            }
                        }
                        if (text) {
                            return actions_copy(text, { container: container });
                        }
                        if (target) {
                            return action === 'cut' ? actions_cut(target) : actions_copy(target, { container: container });
                        }
                    };
                    var actions_default = ClipboardActionDefault;
                    function clipboard_typeof(obj) {
                        '@babel/helpers - typeof';
                        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
                            clipboard_typeof = function _typeof(obj) {
                                return typeof obj;
                            };
                        } else {
                            clipboard_typeof = function _typeof(obj) {
                                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
                            };
                        }
                        return clipboard_typeof(obj);
                    }
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError('Cannot call a class as a function');
                        }
                    }
                    function _defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ('value' in descriptor)
                                descriptor.writable = true;
                            Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }
                    function _createClass(Constructor, protoProps, staticProps) {
                        if (protoProps)
                            _defineProperties(Constructor.prototype, protoProps);
                        if (staticProps)
                            _defineProperties(Constructor, staticProps);
                        return Constructor;
                    }
                    function _inherits(subClass, superClass) {
                        if (typeof superClass !== 'function' && superClass !== null) {
                            throw new TypeError('Super expression must either be null or a function');
                        }
                        subClass.prototype = Object.create(superClass && superClass.prototype, {
                            constructor: {
                                value: subClass,
                                writable: true,
                                configurable: true
                            }
                        });
                        if (superClass)
                            _setPrototypeOf(subClass, superClass);
                    }
                    function _setPrototypeOf(o, p) {
                        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                            o.__proto__ = p;
                            return o;
                        };
                        return _setPrototypeOf(o, p);
                    }
                    function _createSuper(Derived) {
                        var hasNativeReflectConstruct = _isNativeReflectConstruct();
                        return function _createSuperInternal() {
                            var Super = _getPrototypeOf(Derived), result;
                            if (hasNativeReflectConstruct) {
                                var NewTarget = _getPrototypeOf(this).constructor;
                                result = Reflect.construct(Super, arguments, NewTarget);
                            } else {
                                result = Super.apply(this, arguments);
                            }
                            return _possibleConstructorReturn(this, result);
                        };
                    }
                    function _possibleConstructorReturn(self, call) {
                        if (call && (clipboard_typeof(call) === 'object' || typeof call === 'function')) {
                            return call;
                        }
                        return _assertThisInitialized(self);
                    }
                    function _assertThisInitialized(self) {
                        if (self === void 0) {
                            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                        }
                        return self;
                    }
                    function _isNativeReflectConstruct() {
                        if (typeof Reflect === 'undefined' || !Reflect.construct)
                            return false;
                        if (Reflect.construct.sham)
                            return false;
                        if (typeof Proxy === 'function')
                            return true;
                        try {
                            Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                            }));
                            return true;
                        } catch (e) {
                            return false;
                        }
                    }
                    function _getPrototypeOf(o) {
                        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                            return o.__proto__ || Object.getPrototypeOf(o);
                        };
                        return _getPrototypeOf(o);
                    }
                    function getAttributeValue(suffix, element) {
                        var attribute = 'data-clipboard-'.concat(suffix);
                        if (!element.hasAttribute(attribute)) {
                            return;
                        }
                        return element.getAttribute(attribute);
                    }
                    var Clipboard = function (_Emitter) {
                        _inherits(Clipboard, _Emitter);
                        var _super = _createSuper(Clipboard);
                        function Clipboard(trigger, options) {
                            var _this;
                            _classCallCheck(this, Clipboard);
                            _this = _super.call(this);
                            _this.resolveOptions(options);
                            _this.listenClick(trigger);
                            return _this;
                        }
                        _createClass(Clipboard, [
                            {
                                key: 'resolveOptions',
                                value: function resolveOptions() {
                                    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                                    this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                                    this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                                    this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                                    this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
                                }
                            },
                            {
                                key: 'listenClick',
                                value: function listenClick(trigger) {
                                    var _this2 = this;
                                    this.listener = listen_default()(trigger, 'click', function (e) {
                                        return _this2.onClick(e);
                                    });
                                }
                            },
                            {
                                key: 'onClick',
                                value: function onClick(e) {
                                    var trigger = e.delegateTarget || e.currentTarget;
                                    var action = this.action(trigger) || 'copy';
                                    var text = actions_default({
                                        action: action,
                                        container: this.container,
                                        target: this.target(trigger),
                                        text: this.text(trigger)
                                    });
                                    this.emit(text ? 'success' : 'error', {
                                        action: action,
                                        text: text,
                                        trigger: trigger,
                                        clearSelection: function clearSelection() {
                                            if (trigger) {
                                                trigger.focus();
                                            }
                                            document.activeElement.blur();
                                            window.getSelection().removeAllRanges();
                                        }
                                    });
                                }
                            },
                            {
                                key: 'defaultAction',
                                value: function defaultAction(trigger) {
                                    return getAttributeValue('action', trigger);
                                }
                            },
                            {
                                key: 'defaultTarget',
                                value: function defaultTarget(trigger) {
                                    var selector = getAttributeValue('target', trigger);
                                    if (selector) {
                                        return document.querySelector(selector);
                                    }
                                }
                            },
                            {
                                key: 'defaultText',
                                value: function defaultText(trigger) {
                                    return getAttributeValue('text', trigger);
                                }
                            },
                            {
                                key: 'destroy',
                                value: function destroy() {
                                    this.listener.destroy();
                                }
                            }
                        ], [
                            {
                                key: 'copy',
                                value: function copy(target) {
                                    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { container: document.body };
                                    return actions_copy(target, options);
                                }
                            },
                            {
                                key: 'cut',
                                value: function cut(target) {
                                    return actions_cut(target);
                                }
                            },
                            {
                                key: 'isSupported',
                                value: function isSupported() {
                                    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [
                                        'copy',
                                        'cut'
                                    ];
                                    var actions = typeof action === 'string' ? [action] : action;
                                    var support = !!document.queryCommandSupported;
                                    actions.forEach(function (action) {
                                        support = support && !!document.queryCommandSupported(action);
                                    });
                                    return support;
                                }
                            }
                        ]);
                        return Clipboard;
                    }(tiny_emitter_default());
                    var clipboard = Clipboard;
                },
                828: function (module) {
                    var DOCUMENT_NODE_TYPE = 9;
                    if (typeof Element !== 'undefined' && !Element.prototype.matches) {
                        var proto = Element.prototype;
                        proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
                    }
                    function closest(element, selector) {
                        while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                            if (typeof element.matches === 'function' && element.matches(selector)) {
                                return element;
                            }
                            element = element.parentNode;
                        }
                    }
                    module.exports = closest;
                },
                438: function (module, __unused_webpack_exports, __webpack_require__) {
                    var closest = __webpack_require__(828);
                    function _delegate(element, selector, type, callback, useCapture) {
                        var listenerFn = listener.apply(this, arguments);
                        element.addEventListener(type, listenerFn, useCapture);
                        return {
                            destroy: function () {
                                element.removeEventListener(type, listenerFn, useCapture);
                            }
                        };
                    }
                    function delegate(elements, selector, type, callback, useCapture) {
                        if (typeof elements.addEventListener === 'function') {
                            return _delegate.apply(null, arguments);
                        }
                        if (typeof type === 'function') {
                            return _delegate.bind(null, document).apply(null, arguments);
                        }
                        if (typeof elements === 'string') {
                            elements = document.querySelectorAll(elements);
                        }
                        return Array.prototype.map.call(elements, function (element) {
                            return _delegate(element, selector, type, callback, useCapture);
                        });
                    }
                    function listener(element, selector, type, callback) {
                        return function (e) {
                            e.delegateTarget = closest(e.target, selector);
                            if (e.delegateTarget) {
                                callback.call(element, e);
                            }
                        };
                    }
                    module.exports = delegate;
                },
                879: function (__unused_webpack_module, exports) {
                    exports.node = function (value) {
                        return value !== undefined && value instanceof HTMLElement && value.nodeType === 1;
                    };
                    exports.nodeList = function (value) {
                        var type = Object.prototype.toString.call(value);
                        return value !== undefined && (type === '[object NodeList]' || type === '[object HTMLCollection]') && 'length' in value && (value.length === 0 || exports.node(value[0]));
                    };
                    exports.string = function (value) {
                        return typeof value === 'string' || value instanceof String;
                    };
                    exports.fn = function (value) {
                        var type = Object.prototype.toString.call(value);
                        return type === '[object Function]';
                    };
                },
                370: function (module, __unused_webpack_exports, __webpack_require__) {
                    var is = __webpack_require__(879);
                    var delegate = __webpack_require__(438);
                    function listen(target, type, callback) {
                        if (!target && !type && !callback) {
                            throw new Error('Missing required arguments');
                        }
                        if (!is.string(type)) {
                            throw new TypeError('Second argument must be a String');
                        }
                        if (!is.fn(callback)) {
                            throw new TypeError('Third argument must be a Function');
                        }
                        if (is.node(target)) {
                            return listenNode(target, type, callback);
                        } else if (is.nodeList(target)) {
                            return listenNodeList(target, type, callback);
                        } else if (is.string(target)) {
                            return listenSelector(target, type, callback);
                        } else {
                            throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
                        }
                    }
                    function listenNode(node, type, callback) {
                        node.addEventListener(type, callback);
                        return {
                            destroy: function () {
                                node.removeEventListener(type, callback);
                            }
                        };
                    }
                    function listenNodeList(nodeList, type, callback) {
                        Array.prototype.forEach.call(nodeList, function (node) {
                            node.addEventListener(type, callback);
                        });
                        return {
                            destroy: function () {
                                Array.prototype.forEach.call(nodeList, function (node) {
                                    node.removeEventListener(type, callback);
                                });
                            }
                        };
                    }
                    function listenSelector(selector, type, callback) {
                        return delegate(document.body, selector, type, callback);
                    }
                    module.exports = listen;
                },
                817: function (module) {
                    function select(element) {
                        var selectedText;
                        if (element.nodeName === 'SELECT') {
                            element.focus();
                            selectedText = element.value;
                        } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
                            var isReadOnly = element.hasAttribute('readonly');
                            if (!isReadOnly) {
                                element.setAttribute('readonly', '');
                            }
                            element.select();
                            element.setSelectionRange(0, element.value.length);
                            if (!isReadOnly) {
                                element.removeAttribute('readonly');
                            }
                            selectedText = element.value;
                        } else {
                            if (element.hasAttribute('contenteditable')) {
                                element.focus();
                            }
                            var selection = window.getSelection();
                            var range = document.createRange();
                            range.selectNodeContents(element);
                            selection.removeAllRanges();
                            selection.addRange(range);
                            selectedText = selection.toString();
                        }
                        return selectedText;
                    }
                    module.exports = select;
                },
                279: function (module) {
                    function E() {
                    }
                    E.prototype = {
                        on: function (name, callback, ctx) {
                            var e = this.e || (this.e = {});
                            (e[name] || (e[name] = [])).push({
                                fn: callback,
                                ctx: ctx
                            });
                            return this;
                        },
                        once: function (name, callback, ctx) {
                            var self = this;
                            function listener() {
                                self.off(name, listener);
                                callback.apply(ctx, arguments);
                            }
                            listener._ = callback;
                            return this.on(name, listener, ctx);
                        },
                        emit: function (name) {
                            var data = [].slice.call(arguments, 1);
                            var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                            var i = 0;
                            var len = evtArr.length;
                            for (i; i < len; i++) {
                                evtArr[i].fn.apply(evtArr[i].ctx, data);
                            }
                            return this;
                        },
                        off: function (name, callback) {
                            var e = this.e || (this.e = {});
                            var evts = e[name];
                            var liveEvents = [];
                            if (evts && callback) {
                                for (var i = 0, len = evts.length; i < len; i++) {
                                    if (evts[i].fn !== callback && evts[i].fn._ !== callback)
                                        liveEvents.push(evts[i]);
                                }
                            }
                            liveEvents.length ? e[name] = liveEvents : delete e[name];
                            return this;
                        }
                    };
                    module.exports = E;
                    module.exports.TinyEmitter = E;
                }
            };
            var __webpack_module_cache__ = {};
            function __webpack_require__(moduleId) {
                if (__webpack_module_cache__[moduleId]) {
                    return __webpack_module_cache__[moduleId].exports;
                }
                var module = __webpack_module_cache__[moduleId] = { exports: {} };
                __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                return module.exports;
            }
            !function () {
                __webpack_require__.n = function (module) {
                    var getter = module && module.__esModule ? function () {
                        return module['default'];
                    } : function () {
                        return module;
                    };
                    __webpack_require__.d(getter, { a: getter });
                    return getter;
                };
            }();
            !function () {
                __webpack_require__.d = function (exports, definition) {
                    for (var key in definition) {
                        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                            Object.defineProperty(exports, key, {
                                enumerable: true,
                                get: definition[key]
                            });
                        }
                    }
                };
            }();
            !function () {
                __webpack_require__.o = function (obj, prop) {
                    return Object.prototype.hasOwnProperty.call(obj, prop);
                };
            }();
            return __webpack_require__(686);
        }().default;
    }));
}(clipboard));
var Clipboard = getDefaultExportFromCjs(clipboard.exports);

var debounce = function debounce(func, wait) {
    var startTime = Date.now();
    var timer;
    return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        if (Date.now() - startTime < wait && timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            func.apply(void 0, args);
        }, wait);
        startTime = Date.now();
    };
};

var script = {
    name: 'JsonViewer',
    components: { JsonBox: script$1 },
    props: {
        value: {
            type: [
                Object,
                Array,
                String,
                Number,
                Boolean,
                Function
            ],
            required: true
        },
        expanded: {
            type: Boolean,
            'default': false
        },
        expandDepth: {
            type: Number,
            'default': 1
        },
        copyable: {
            type: [
                Boolean,
                Object
            ],
            'default': false
        },
        sort: {
            type: Boolean,
            'default': false
        },
        boxed: {
            type: Boolean,
            'default': false
        },
        theme: {
            type: String,
            'default': 'light'
        },
        timeformat: {
            type: Function,
            'default': function _default(value) {
                return value.toLocaleString();
            }
        },
        previewMode: {
            type: Boolean,
            'default': false
        }
    },
    provide: function provide() {
        return {
            expandDepth: this.expandDepth,
            timeformat: this.timeformat,
            keyClick: this.keyClick
        };
    },
    data: function data() {
        return {
            copied: false,
            expandableCode: false,
            expandCode: this.expanded
        };
    },
    emits: ['onKeyClick'],
    computed: {
        jvClass: function jvClass() {
            return 'jv-container ' + 'jv-' + this.theme + (this.boxed ? ' boxed' : '');
        },
        copyText: function copyText() {
            var _this$copyable = this.copyable, copyText = _this$copyable.copyText, copiedText = _this$copyable.copiedText, timeout = _this$copyable.timeout, align = _this$copyable.align;
            return {
                copyText: copyText || 'copy',
                copiedText: copiedText || 'copied!',
                timeout: timeout || 2000,
                align: align
            };
        }
    },
    watch: {
        value: function value() {
            this.onResized();
        }
    },
    mounted: function mounted() {
        var _this = this;
        this.debounceResized = debounce(this.debResized.bind(this), 200);
        if (this.boxed && this.$refs.jsonBox) {
            this.onResized();
            this.$refs.jsonBox.$el.addEventListener('resized', this.onResized, true);
        }
        if (this.copyable) {
            var clipBoard = new Clipboard(this.$refs.clip, {
                text: function text() {
                    return JSON.stringify(_this.value, null, 2);
                }
            });
            clipBoard.on('success', function (e) {
                _this.onCopied(e);
            });
        }
    },
    methods: {
        onResized: function onResized() {
            this.debounceResized();
        },
        debResized: function debResized() {
            var _this2 = this;
            this.$nextTick(function () {
                if (!_this2.$refs.jsonBox)
                    return;
                if (_this2.$refs.jsonBox.$el.clientHeight >= 250) {
                    _this2.expandableCode = true;
                } else {
                    _this2.expandableCode = false;
                }
            });
        },
        keyClick: function keyClick(keyName) {
            this.$emit('onKeyClick', keyName);
        },
        onCopied: function onCopied(copyEvent) {
            var _this3 = this;
            if (this.copied) {
                return;
            }
            this.copied = true;
            setTimeout(function () {
                _this3.copied = false;
            }, this.copyText.timeout);
            this.$emit('copied', copyEvent);
        },
        toggleExpandCode: function toggleExpandCode() {
            this.expandCode = !this.expandCode;
        }
    }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_json_box = resolveComponent('json-box');
    return openBlock(), createElementBlock('div', { 'class': normalizeClass($options.jvClass) }, [
        $props.copyable ? (openBlock(), createElementBlock('div', {
            key: 0,
            'class': normalizeClass('jv-tooltip '.concat($options.copyText.align || 'right'))
        }, [createBaseVNode('span', {
                ref: 'clip',
                'class': normalizeClass([
                    'jv-button',
                    { copied: $data.copied }
                ])
            }, [renderSlot(_ctx.$slots, 'copy', { copied: $data.copied }, function () {
                    return [createTextVNode(toDisplayString$1($data.copied ? $options.copyText.copiedText : $options.copyText.copyText), 1)];
                })], 2)], 2)) : createCommentVNode('v-if', true),
        createBaseVNode('div', {
            'class': normalizeClass([
                'jv-code',
                {
                    open: $data.expandCode,
                    boxed: $props.boxed
                }
            ])
        }, [createVNode(_component_json_box, {
                ref: 'jsonBox',
                value: $props.value,
                sort: $props.sort,
                'preview-mode': $props.previewMode
            }, null, 8, [
                'value',
                'sort',
                'preview-mode'
            ])], 2),
        $data.expandableCode && $props.boxed ? (openBlock(), createElementBlock('div', {
            key: 1,
            'class': 'jv-more',
            onClick: _cache[0] || (_cache[0] = function () {
                return $options.toggleExpandCode && $options.toggleExpandCode.apply($options, arguments);
            })
        }, [createBaseVNode('span', {
                'class': normalizeClass([
                    'jv-toggle',
                    { open: !!$data.expandCode }
                ])
            }, null, 2)])) : createCommentVNode('v-if', true)
    ], 2);
}

script.render = render;
script.__file = "src/Components/json-viewer.vue";

var install = function install(app) {
    app.component(script.name, script);
};
var index = { install: install };

/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 *
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *            佛祖保佑       永不宕机     永无BUG
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 19:04:15
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

const app = createApp(App);
Object.entries(ICONS).forEach(([key, component]) => {
  // app.component(key === 'PieChart' ? 'PieChartIcon' : key, component)
  app.component(key, component);
});
Object.entries(Components).forEach(([key, component]) => {
  app.component(key, component);
});
Object.values(Directives).forEach(fn => fn(app));
useErrorHandler(app);

app
  .use(i18n)
  .use(installer)
  .use(pinia)
  .use(router$1)
  .use(index)
  // .provide('SocketService', SocketService.Instance)
  .mount('#app');

export { AesEncryption as A, Login$1 as L, _export_sfc as _, useMenus as a, useRoute as b, useApp as c, defineStore as d, setItem as e, useErrorlog as f, getItem as g, useTags as h, useLang as i, useAccount as j, service as k, storeToRefs as s, useRouter as u };
