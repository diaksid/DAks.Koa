/* Polyfill service v3.25.1
 * For detailed credits and licence information see https://github.com/financial-times/polyfill-service.
 *
 * UA detected: ie/11.0.0
 * Features requested: es6
 *
 * - Object.assign, License: CC0 (required by "es6", "_Iterator", "_ArrayIterator", "Array.from", "Array.prototype.@@iterator", "Array.prototype.entries", "Array.prototype.keys", "_StringIterator", "String.prototype.@@iterator")
 * - Symbol, License: MIT (required by "es6", "Map", "Set", "Symbol.hasInstance", "Symbol.isConcatSpreadable", "Symbol.iterator", "Array.prototype.@@iterator", "Array.prototype.entries", "Array.prototype.keys", "Array.prototype.values", "String.prototype.@@iterator", "Symbol.match", "Symbol.replace", "Symbol.search", "Symbol.species", "Symbol.split", "Symbol.toPrimitive", "Symbol.toStringTag", "Symbol.unscopables", "_Iterator", "_ArrayIterator", "Array.from", "_StringIterator")
 * - Symbol.iterator, License: MIT (required by "es6", "Array.prototype.@@iterator", "Array.prototype.entries", "Array.prototype.keys", "Array.prototype.values", "Map", "Set", "String.prototype.@@iterator", "_Iterator", "_ArrayIterator", "Array.from", "_StringIterator")
 * - Symbol.toStringTag, License: MIT (required by "es6", "_Iterator", "_ArrayIterator", "Array.from", "Array.prototype.@@iterator", "Array.prototype.entries", "Array.prototype.keys", "_StringIterator", "String.prototype.@@iterator")
 * - _Iterator, License: MIT (required by "_ArrayIterator", "Array.from", "es6", "Array.prototype.@@iterator", "Array.prototype.entries", "Array.prototype.keys", "_StringIterator", "String.prototype.@@iterator")
 * - Object.setPrototypeOf, License: MIT (required by "es6", "_ArrayIterator", "Array.from", "Array.prototype.@@iterator", "Array.prototype.entries", "Array.prototype.keys", "_StringIterator", "String.prototype.@@iterator")
 * - String.prototype.includes, License: CC0 (required by "es6", "String.prototype.contains", "_ArrayIterator", "Array.from", "Array.prototype.@@iterator", "Array.prototype.entries", "Array.prototype.keys")
 * - String.prototype.contains, License: CC0 (required by "_ArrayIterator", "Array.from", "es6", "Array.prototype.@@iterator", "Array.prototype.entries", "Array.prototype.keys")
 * - _ArrayIterator, License: MIT (required by "Array.from", "es6", "Array.prototype.@@iterator", "Array.prototype.entries", "Array.prototype.keys")
 * - Number.isFinite, License: MIT (required by "es6", "Array.from")
 * - Number.isNaN, License: MIT (required by "es6", "Array.from", "Map", "Set")
 * - Array.from, License: CC0 (required by "es6")
 * - Array.of, License: MIT (required by "es6")
 * - Array.prototype.@@iterator, License: CC0 (required by "es6", "Array.prototype.values")
 * - Array.prototype.copyWithin, License: MIT (required by "es6")
 * - Array.prototype.entries, License: CC0 (required by "es6")
 * - Array.prototype.fill, License: CC0 (required by "es6")
 * - Array.prototype.find, License: CC0 (required by "es6")
 * - Array.prototype.findIndex, License: CC0 (required by "es6")
 * - Array.prototype.keys, License: CC0 (required by "es6")
 * - Array.prototype.values, License: MIT (required by "es6")
 * - Function.name, License: MIT (required by "es6")
 * - Symbol.species, License: MIT (required by "es6", "Map", "Set")
 * - Map, License: CC0 (required by "es6")
 * - Math.acosh, License: CC0 (required by "es6")
 * - Math.asinh, License: CC0 (required by "es6")
 * - Math.atanh, License: CC0 (required by "es6")
 * - Math.cbrt, License: CC0 (required by "es6")
 * - Math.clz32, License: CC0 (required by "es6")
 * - Math.cosh, License: CC0 (required by "es6")
 * - Math.expm1, License: CC0 (required by "es6")
 * - Math.hypot, License: CC0 (required by "es6")
 * - Math.imul, License: CC0 (required by "es6")
 * - Math.log10, License: CC0 (required by "es6")
 * - Math.log1p, License: CC0 (required by "es6")
 * - Math.log2, License: CC0 (required by "es6")
 * - Math.sign, License: CC0 (required by "es6")
 * - Math.sinh, License: CC0 (required by "es6")
 * - Math.tanh, License: CC0 (required by "es6")
 * - Math.trunc, License: CC0 (required by "es6")
 * - Number.Epsilon, License: MIT (required by "es6")
 * - Number.MAX_SAFE_INTEGER, License: MIT (required by "es6")
 * - Number.MIN_SAFE_INTEGER, License: MIT (required by "es6")
 * - Number.isInteger, License: MIT (required by "es6")
 * - Number.isSafeInteger, License: MIT (required by "es6")
 * - Number.parseFloat, License: MIT (required by "es6")
 * - Number.parseInt, License: MIT (required by "es6")
 * - Object.is, License: CC0 (required by "es6")
 * - Promise, License: MIT (required by "es6")
 * - RegExp.prototype.flags, License: MIT (required by "es6")
 * - Set, License: CC0 (required by "es6")
 * - _StringIterator, License: MIT (required by "String.prototype.@@iterator", "es6")
 * - String.prototype.@@iterator, License: CC0 (required by "es6")
 * - String.prototype.codePointAt, License: MIT (required by "es6")
 * - String.prototype.endsWith, License: CC0 (required by "es6")
 * - String.prototype.repeat, License: CC0 (required by "es6")
 * - String.prototype.startsWith, License: CC0 (required by "es6")
 * - Symbol.hasInstance, License: MIT (required by "es6")
 * - Symbol.isConcatSpreadable, License: MIT (required by "es6")
 * - Symbol.match, License: MIT (required by "es6")
 * - Symbol.replace, License: MIT (required by "es6")
 * - Symbol.search, License: MIT (required by "es6")
 * - Symbol.split, License: MIT (required by "es6")
 * - Symbol.toPrimitive, License: MIT (required by "es6")
 * - Symbol.unscopables, License: MIT (required by "es6")
 * - WeakMap, License: https://github.com/webcomponents/webcomponentsjs/blob/master/LICENSE.md (required by "es6")
 * - WeakSet, License: https://github.com/webcomponents/webcomponentsjs/blob/master/LICENSE.md (required by "es6") */

(function(undefined) {

// Object.assign
  (function() {

    // 7.1.13 ToObject ( argument )
    function toObject(argument) {
      if (argument === null || argument === undefined) {
        throw new TypeError('Cannot call method on ' + argument);
      }
      return Object(argument);
    }

    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      // 19.1.2.1 Object.assign ( target, ...sources )
      value: function assign(target, source) { // eslint-disable-line no-unused-vars

        // 1. Let to be ? ToObject(target).
        var to = toObject(target);

        // 2. If only one argument was passed, return to.
        if (arguments.length === 1) {
          return to;
        }

        // 3. Let sources be the List of argument values starting with the second argument
        var sources = Array.prototype.slice.call(arguments, 1);

        // 4. For each element nextSource of sources, in ascending index order, do
        var index1;
        var index2;
        var keys;
        var key;
        var from;
        for (index1 = 0; index1 < sources.length; index1++) {
          var nextSource = sources[index1];
          // 4a. If nextSource is undefined or null, let keys be a new empty List.
          if (nextSource === undefined || nextSource === null) {
            keys = [];
            // 4b. Else,
          } else {
            // 4bi. Let from be ! ToObject(nextSource).
            from = toObject(nextSource);
            // 4bii. Let keys be ? from.[[OwnPropertyKeys]]().
            /*
              This step in our polyfill is not complying with the specification.
              [[OwnPropertyKeys]] is meant to return ALL keys, including non-enumerable and symbols.
              TODO: When we have Reflect.ownKeys, use that instead as it is the userland equivalent of [[OwnPropertyKeys]].
            */
            keys = Object.keys(from);
          }

          // 4c. For each element nextKey of keys in List order, do
          for (index2 = 0; index2 < keys.length; index2++) {
            var nextKey = keys[index2];
            // 4ci. Let desc be ? from.[[GetOwnProperty]](nextKey).
            var desc = Object.getOwnPropertyDescriptor(from, nextKey);
            // 4cii. If desc is not undefined and desc.[[Enumerable]] is true, then
            if (desc !== undefined && desc.enumerable) {
              // 4cii1. Let propValue be ? Get(from, nextKey).
              var propValue = from[nextKey];
              // 4cii2. Perform ? Set(to, nextKey, propValue, true).
              to[nextKey] = propValue;
            }
          }
        }
        // 5. Return to.
        return to;
      }
    });
  }());

// Symbol
// A modification of https://github.com/WebReflection/get-own-property-symbols
// (C) Andrea Giammarchi - MIT Licensed

  (function (Object, GOPS, global) {

    var	setDescriptor;
    var id = 0;
    var random = '' + Math.random();
    var prefix = '__\x01symbol:';
    var prefixLength = prefix.length;
    var internalSymbol = '__\x01symbol@@' + random;
    var DP = 'defineProperty';
    var DPies = 'defineProperties';
    var GOPN = 'getOwnPropertyNames';
    var GOPD = 'getOwnPropertyDescriptor';
    var PIE = 'propertyIsEnumerable';
    var ObjectProto = Object.prototype;
    var hOP = ObjectProto.hasOwnProperty;
    var pIE = ObjectProto[PIE];
    var toString = ObjectProto.toString;
    var concat = Array.prototype.concat;
    var cachedWindowNames = typeof window === 'object' ? Object.getOwnPropertyNames(window) : [];
    var nGOPN = Object[GOPN];
    var gOPN = function getOwnPropertyNames (obj) {
      if (toString.call(obj) === '[object Window]') {
        try {
          return nGOPN(obj);
        } catch (e) {
          // IE bug where layout engine calls userland gOPN for cross-domain `window` objects
          return concat.call([], cachedWindowNames);
        }
      }
      return nGOPN(obj);
    };
    var gOPD = Object[GOPD];
    var create = Object.create;
    var keys = Object.keys;
    var freeze = Object.freeze || Object;
    var defineProperty = Object[DP];
    var $defineProperties = Object[DPies];
    var descriptor = gOPD(Object, GOPN);
    var addInternalIfNeeded = function (o, uid, enumerable) {
      if (!hOP.call(o, internalSymbol)) {
        try {
          defineProperty(o, internalSymbol, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: {}
          });
        } catch (e) {
          o[internalSymbol] = {};
        }
      }
      o[internalSymbol]['@@' + uid] = enumerable;
    };
    var createWithSymbols = function (proto, descriptors) {
      var self = create(proto);
      gOPN(descriptors).forEach(function (key) {
        if (propertyIsEnumerable.call(descriptors, key)) {
          $defineProperty(self, key, descriptors[key]);
        }
      });
      return self;
    };
    var copyAsNonEnumerable = function (descriptor) {
      var newDescriptor = create(descriptor);
      newDescriptor.enumerable = false;
      return newDescriptor;
    };
    var get = function get(){};
    var onlyNonSymbols = function (name) {
      return name != internalSymbol &&
        !hOP.call(source, name);
    };
    var onlySymbols = function (name) {
      return name != internalSymbol &&
        hOP.call(source, name);
    };
    var propertyIsEnumerable = function propertyIsEnumerable(key) {
      var uid = '' + key;
      return onlySymbols(uid) ? (
        hOP.call(this, uid) &&
        this[internalSymbol]['@@' + uid]
      ) : pIE.call(this, key);
    };
    var setAndGetSymbol = function (uid) {
      var descriptor = {
        enumerable: false,
        configurable: true,
        get: get,
        set: function (value) {
          setDescriptor(this, uid, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value
          });
          addInternalIfNeeded(this, uid, true);
        }
      };
      try {
        defineProperty(ObjectProto, uid, descriptor);
      } catch (e) {
        ObjectProto[uid] = descriptor.value;
      }
      return freeze(source[uid] = defineProperty(
        Object(uid),
        'constructor',
        sourceConstructor
      ));
    };
    var Symbol = function Symbol(description) {
      if (this instanceof Symbol) {
        throw new TypeError('Symbol is not a constructor');
      }
      return setAndGetSymbol(
        prefix.concat(description || '', random, ++id)
      );
    };
    var source = create(null);
    var sourceConstructor = {value: Symbol};
    var sourceMap = function (uid) {
      return source[uid];
    };
    var $defineProperty = function defineProp(o, key, descriptor) {
      var uid = '' + key;
      if (onlySymbols(uid)) {
        setDescriptor(o, uid, descriptor.enumerable ?
          copyAsNonEnumerable(descriptor) : descriptor);
        addInternalIfNeeded(o, uid, !!descriptor.enumerable);
      } else {
        defineProperty(o, key, descriptor);
      }
      return o;
    };

    var onlyInternalSymbols = function (obj) {
      return function (name) {
        return hOP.call(obj, internalSymbol) && hOP.call(obj[internalSymbol], '@@' + name);
      };
    };
    var $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
        return gOPN(o).filter(o === ObjectProto ? onlyInternalSymbols(o) : onlySymbols).map(sourceMap);
      }
    ;

    descriptor.value = $defineProperty;
    defineProperty(Object, DP, descriptor);

    descriptor.value = $getOwnPropertySymbols;
    defineProperty(Object, GOPS, descriptor);

    descriptor.value = function getOwnPropertyNames(o) {
      return gOPN(o).filter(onlyNonSymbols);
    };
    defineProperty(Object, GOPN, descriptor);

    descriptor.value = function defineProperties(o, descriptors) {
      var symbols = $getOwnPropertySymbols(descriptors);
      if (symbols.length) {
        keys(descriptors).concat(symbols).forEach(function (uid) {
          if (propertyIsEnumerable.call(descriptors, uid)) {
            $defineProperty(o, uid, descriptors[uid]);
          }
        });
      } else {
        $defineProperties(o, descriptors);
      }
      return o;
    };
    defineProperty(Object, DPies, descriptor);

    descriptor.value = propertyIsEnumerable;
    defineProperty(ObjectProto, PIE, descriptor);

    descriptor.value = Symbol;
    defineProperty(global, 'Symbol', descriptor);

    // defining `Symbol.for(key)`
    descriptor.value = function (key) {
      var uid = prefix.concat(prefix, key, random);
      return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
    };
    defineProperty(Symbol, 'for', descriptor);

    // defining `Symbol.keyFor(symbol)`
    descriptor.value = function (symbol) {
      if (onlyNonSymbols(symbol))
        throw new TypeError(symbol + ' is not a symbol');
      return hOP.call(source, symbol) ?
        symbol.slice(prefixLength * 2, -random.length) :
        void 0
        ;
    };
    defineProperty(Symbol, 'keyFor', descriptor);

    descriptor.value = function getOwnPropertyDescriptor(o, key) {
      var descriptor = gOPD(o, key);
      if (descriptor && onlySymbols(key)) {
        descriptor.enumerable = propertyIsEnumerable.call(o, key);
      }
      return descriptor;
    };
    defineProperty(Object, GOPD, descriptor);

    descriptor.value = function (proto, descriptors) {
      return arguments.length === 1 || typeof descriptors === "undefined" ?
        create(proto) :
        createWithSymbols(proto, descriptors);
    };
    defineProperty(Object, 'create', descriptor);

    descriptor.value = function () {
      var str = toString.call(this);
      return (str === '[object String]' && onlySymbols(this)) ? '[object Symbol]' : str;
    };
    defineProperty(ObjectProto, 'toString', descriptor);


    setDescriptor = function (o, key, descriptor) {
      var protoDescriptor = gOPD(ObjectProto, key);
      delete ObjectProto[key];
      defineProperty(o, key, descriptor);
      if (o !== ObjectProto) {
        defineProperty(ObjectProto, key, protoDescriptor);
      }
    };

  }(Object, 'getOwnPropertySymbols', this));

// Symbol.iterator
  Object.defineProperty(Symbol, 'iterator', {value: Symbol('iterator')});

// Symbol.toStringTag
  Object.defineProperty(Symbol, 'toStringTag', {
    value: Symbol('toStringTag')
  });

// _Iterator
// A modification of https://github.com/medikoo/es6-iterator
// Copyright (C) 2013-2015 Mariusz Nowak (www.medikoo.com)

  var Iterator = (function () { // eslint-disable-line no-unused-vars
    var clear = function () {
      this.length = 0;
      return this;
    };
    var callable = function (fn) {
      if (typeof fn !== 'function') throw new TypeError(fn + " is not a function");
      return fn;
    };

    var Iterator = function (list, context) {
      if (!(this instanceof Iterator)) {
        return new Iterator(list, context);
      }
      Object.defineProperties(this, {
        __list__: {
          writable: true,
          value: list
        },
        __context__: {
          writable: true,
          value: context
        },
        __nextIndex__: {
          writable: true,
          value: 0
        }
      });
      if (!context) return;
      callable(context.on);
      context.on('_add', this._onAdd.bind(this));
      context.on('_delete', this._onDelete.bind(this));
      context.on('_clear', this._onClear.bind(this));
    };

    Object.defineProperties(Iterator.prototype, Object.assign({
      constructor: {
        value: Iterator,
        configurable: true,
        enumerable: false,
        writable: true
      },
      _next: {
        value: function () {
          var i;
          if (!this.__list__) return;
          if (this.__redo__) {
            i = this.__redo__.shift();
            if (i !== undefined) return i;
          }
          if (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;
          this._unBind();
        },
        configurable: true,
        enumerable: false,
        writable: true
      },
      next: {
        value: function () {
          return this._createResult(this._next());
        },
        configurable: true,
        enumerable: false,
        writable: true
      },
      _createResult: {
        value: function (i) {
          if (i === undefined) return {
            done: true,
            value: undefined
          };
          return {
            done: false,
            value: this._resolve(i)
          };
        },
        configurable: true,
        enumerable: false,
        writable: true
      },
      _resolve: {
        value: function (i) {
          return this.__list__[i];
        },
        configurable: true,
        enumerable: false,
        writable: true
      },
      _unBind: {
        value: function () {
          this.__list__ = null;
          delete this.__redo__;
          if (!this.__context__) return;
          this.__context__.off('_add', this._onAdd.bind(this));
          this.__context__.off('_delete', this._onDelete.bind(this));
          this.__context__.off('_clear', this._onClear.bind(this));
          this.__context__ = null;
        },
        configurable: true,
        enumerable: false,
        writable: true
      },
      toString: {
        value: function () {
          return '[object Iterator]';
        },
        configurable: true,
        enumerable: false,
        writable: true
      }
    }, {
      _onAdd: {
        value: function (index) {
          if (index >= this.__nextIndex__) return;
          ++this.__nextIndex__;
          if (!this.__redo__) {
            Object.defineProperty(this, '__redo__', {
              value: [index],
              configurable: true,
              enumerable: false,
              writable: false
            });
            return;
          }
          this.__redo__.forEach(function (redo, i) {
            if (redo >= index) this.__redo__[i] = ++redo;
          }, this);
          this.__redo__.push(index);
        },
        configurable: true,
        enumerable: false,
        writable: true
      },
      _onDelete: {
        value: function (index) {
          var i;
          if (index >= this.__nextIndex__) return;
          --this.__nextIndex__;
          if (!this.__redo__) return;
          i = this.__redo__.indexOf(index);
          if (i !== -1) this.__redo__.splice(i, 1);
          this.__redo__.forEach(function (redo, i) {
            if (redo > index) this.__redo__[i] = --redo;
          }, this);
        },
        configurable: true,
        enumerable: false,
        writable: true
      },
      _onClear: {
        value: function () {
          if (this.__redo__) clear.call(this.__redo__);
          this.__nextIndex__ = 0;
        },
        configurable: true,
        enumerable: false,
        writable: true
      }
    }));

    Object.defineProperty(Iterator.prototype, Symbol.iterator, {
      value: function () {
        return this;
      },
      configurable: true,
      enumerable: false,
      writable: true
    });
    Object.defineProperty(Iterator.prototype, Symbol.toStringTag, {
      value: 'Iterator',
      configurable: false,
      enumerable: false,
      writable: true
    });

    return Iterator;
  }());

// Object.setPrototypeOf
// ES6-shim 0.16.0 (c) 2013-2014 Paul Miller (http://paulmillr.com)
// ES6-shim may be freely distributed under the MIT license.
// For more details and documentation:
// https://github.com/paulmillr/es6-shim/

  // NOTE:  This versions needs object ownership
  //        because every promoted object needs to be reassigned
  //        otherwise uncompatible browsers cannot work as expected
  //
  // NOTE:  This might need es5-shim or polyfills upfront
  //        because it's based on ES5 API.
  //        (probably just an IE <= 8 problem)
  //
  // NOTE:  nodejs is fine in version 0.8, 0.10, and future versions.
  (function () {
    if (Object.setPrototypeOf) { return; }

    /*jshint proto: true */
    // @author    Andrea Giammarchi - @WebReflection

    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var create = Object.create;
    var defineProperty = Object.defineProperty;
    var getPrototypeOf = Object.getPrototypeOf;
    var objProto = Object.prototype;

    var copyDescriptors = function (target, source) {
      // define into target descriptors from source
      getOwnPropertyNames(source).forEach(function (key) {
        defineProperty(
          target,
          key,
          getOwnPropertyDescriptor(source, key)
        );
      });
      return target;
    };
    // used as fallback when no promotion is possible
    var createAndCopy = function (origin, proto) {
      return copyDescriptors(create(proto), origin);
    };
    var set, setPrototypeOf;
    try {
      // this might fail for various reasons
      // ignore if Chrome cought it at runtime
      set = getOwnPropertyDescriptor(objProto, '__proto__').set;
      set.call({}, null);
      // setter not poisoned, it can promote
      // Firefox, Chrome
      setPrototypeOf = function (origin, proto) {
        set.call(origin, proto);
        return origin;
      };
    } catch (e) {
      // do one or more feature detections
      set = { __proto__: null };
      // if proto does not work, needs to fallback
      // some Opera, Rhino, ducktape
      if (set instanceof Object) {
        setPrototypeOf = createAndCopy;
      } else {
        // verify if null objects are buggy
        /* eslint-disable no-proto */
        set.__proto__ = objProto;
        /* eslint-enable no-proto */
        // if null objects are buggy
        // nodejs 0.8 to 0.10
        if (set instanceof Object) {
          setPrototypeOf = function (origin, proto) {
            // use such bug to promote
            /* eslint-disable no-proto */
            origin.__proto__ = proto;
            /* eslint-enable no-proto */
            return origin;
          };
        } else {
          // try to use proto or fallback
          // Safari, old Firefox, many others
          setPrototypeOf = function (origin, proto) {
            // if proto is not null
            if (getPrototypeOf(origin)) {
              // use __proto__ to promote
              /* eslint-disable no-proto */
              origin.__proto__ = proto;
              /* eslint-enable no-proto */
              return origin;
            } else {
              // otherwise unable to promote: fallback
              return createAndCopy(origin, proto);
            }
          };
        }
      }
    }
    Object.setPrototypeOf = setPrototypeOf;
  }());

// String.prototype.includes
  String.prototype.includes = function (string, index) {
    if (typeof string === 'object' && string instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
    return this.indexOf(string, index) !== -1;
  };

// String.prototype.contains
  String.prototype.contains = String.prototype.includes;

// _ArrayIterator
// A modification of https://github.com/medikoo/es6-iterator
// Copyright (C) 2013-2015 Mariusz Nowak (www.medikoo.com)

  var ArrayIterator = (function() { // eslint-disable-line no-unused-vars

    var ArrayIterator = function(arr, kind) {
      if (!(this instanceof ArrayIterator)) return new ArrayIterator(arr, kind);
      Iterator.call(this, arr);
      if (!kind) kind = 'value';
      else if (String.prototype.contains.call(kind, 'key+value')) kind = 'key+value';
      else if (String.prototype.contains.call(kind, 'key')) kind = 'key';
      else kind = 'value';
      Object.defineProperty(this, '__kind__', {
        value: kind,
        configurable: false,
        enumerable: false,
        writable: false
      });
    };
    if (Object.setPrototypeOf) Object.setPrototypeOf(ArrayIterator, Iterator.prototype);

    ArrayIterator.prototype = Object.create(Iterator.prototype, {
      constructor: {
        value: ArrayIterator,
        configurable: true,
        enumerable: false,
        writable: true
      },
      _resolve: {
        value: function(i) {
          if (this.__kind__ === 'value') return this.__list__[i];
          if (this.__kind__ === 'key+value') return [i, this.__list__[i]];
          return i;
        },
        configurable: true,
        enumerable: false,
        writable: true
      },
      toString: {
        value: function() {
          return '[object Array Iterator]';
        },
        configurable: true,
        enumerable: false,
        writable: true
      }
    });

    return ArrayIterator;
  }());

// Number.isFinite
  Number.isFinite = Number.isFinite || function(value) {
    return typeof value === "number" && isFinite(value);
  };

// Number.isNaN
  Number.isNaN = Number.isNaN || function(value) {
    return typeof value === "number" && isNaN(value);
  };

// Array.from
// Wrapped in IIFE to prevent leaking to global scope.
  (function () {
    'use strict';

    function toInteger(value) {
      var number = Number(value);
      return sign(number) * Math.floor(Math.abs(Math.min(Math.max(number || 0, 0), 9007199254740991)));
    }

    var has = Object.prototype.hasOwnProperty;
    var strValue = String.prototype.valueOf;

    var tryStringObject = function tryStringObject(value) {
      try {
        strValue.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };

    function sign(number) {
      return number >= 0 ? 1 : -1;
    }

    var toStr = Object.prototype.toString;
    var strClass = '[object String]';
    var hasSymbols = typeof Symbol === 'function';
    var hasToStringTag = hasSymbols && 'toStringTag' in Symbol;

    function isString(value) {
      if (typeof value === 'string') {
        return true;
      }
      if (typeof value !== 'object') {
        return false;
      }
      return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
    }

    var fnToStr = Function.prototype.toString;

    var constructorRegex = /^\s*class /;
    var isES6ClassFn = function isES6ClassFn(value) {
      try {
        var fnStr = fnToStr.call(value);
        var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
        var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
        var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
        return constructorRegex.test(spaceStripped);
      } catch (e) {
        return false; // not a function
      }
    };

    var tryFunctionObject = function tryFunctionObject(value) {
      try {
        if (isES6ClassFn(value)) {
          return false;
        }
        fnToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var fnClass = '[object Function]';
    var genClass = '[object GeneratorFunction]';

    function isCallable(value) {
      if (!value) {
        return false;
      }
      if (typeof value !== 'function' && typeof value !== 'object') {
        return false;
      }
      if (hasToStringTag) {
        return tryFunctionObject(value);
      }
      if (isES6ClassFn(value)) {
        return false;
      }
      var strClass = toStr.call(value);
      return strClass === fnClass || strClass === genClass;
    };
    var isArray = Array.isArray;

    var parseIterable = function (iterator) {
      var done = false;
      var iterableResponse;
      var tempArray = [];

      if (iterator && typeof iterator.next === 'function') {
        while (!done) {
          iterableResponse = iterator.next();
          if (
            has.call(iterableResponse, 'value') &&
            has.call(iterableResponse, 'done')
          ) {
            if (iterableResponse.done === true) {
              done = true;
              break; // eslint-disable-line no-restricted-syntax

            } else if (iterableResponse.done !== false) {
              break; // eslint-disable-line no-restricted-syntax
            }

            tempArray.push(iterableResponse.value);
          } else if (iterableResponse.done === true) {
            done = true;
            break; // eslint-disable-line no-restricted-syntax
          } else {
            break; // eslint-disable-line no-restricted-syntax
          }
        }
      }

      return done ? tempArray : false;
    };

    var iteratorSymbol;
    var forOf;
    var hasSet = typeof Set === 'function';
    var hasMap = typeof Map === 'function';

    if (hasSymbols) {
      iteratorSymbol = Symbol.iterator;
    } else {
      var iterate;
      try {
        iterate = Function('iterable', 'var arr = []; for (var value of iterable) arr.push(value); return arr;'); // eslint-disable-line no-new-func
      } catch (e) {}
      var supportsStrIterator = (function () {
        try {
          var supported = false;
          var obj = { // eslint-disable-line no-unused-vars
            '@@iterator': function () {
              return {
                'next': function () {
                  supported = true;
                  return {
                    'done': true,
                    'value': undefined
                  };
                }
              };
            }
          };

          iterate(obj);
          return supported;
        } catch (e) {
          return false;
        }
      }());

      if (supportsStrIterator) {
        iteratorSymbol = '@@iterator';
      } else if (typeof Set === 'function') {
        var s = new Set();
        s.add(0);
        try {
          if (iterate(s).length === 1) {
            forOf = iterate;
          }
        } catch (e) {}
      }
    }

    var isSet;
    if (hasSet) {
      var setSize = Object.getOwnPropertyDescriptor(Set.prototype, 'size').get;
      isSet = function (set) {
        try {
          setSize.call(set);
          return true;
        } catch (e) {
          return false;
        }
      };
    }

    var isMap;
    if (hasMap) {
      var mapSize = Object.getOwnPropertyDescriptor(Map.prototype, 'size').get;
      isMap = function (m) {
        try {
          mapSize.call(m);
          return true;
        } catch (e) {
          return false;
        }
      };
    }

    var setForEach = hasSet && Set.prototype.forEach;
    var mapForEach = hasMap && Map.prototype.forEach;
    var usingIterator = function (items) {
      var tempArray = [];
      if (has.call(items, iteratorSymbol)) {
        return items[iteratorSymbol]();
      } else if (setForEach && isSet(items)) {
        setForEach.call(items, function (val) {
          tempArray.push(val);
        });
        return {
          next: function () {
            return tempArray.length === 0
              ? {
                done: true
              }
              : {
                value: tempArray.splice(0, 1)[0],
                done: false
              };
          }
        };
      } else if (mapForEach && isMap(items)) {
        mapForEach.call(items, function (val, key) {
          tempArray.push([key, val]);
        });
        return {
          next: function () {
            return tempArray.length === 0
              ? {
                done: true
              }
              : {
                value: tempArray.splice(0, 1)[0],
                done: false
              };
          }
        };
      }
      return items;
    };

    var strMatch = String.prototype.match;

    var parseIterableLike = function (items) {
      var arr = parseIterable(usingIterator(items));

      if (!arr) {
        if (isString(items)) {
          arr = strMatch.call(items, /[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || [];
        } else if (forOf && !isArray(items)) {
          // Safari 8's native Map or Set can't be iterated except with for..of
          try {
            arr = forOf(items);
          } catch (e) {}
        }
      }
      return arr || items;
    };

    /*! https://mths.be/array-from v0.2.0 by @mathias */
    Object.defineProperty(Array, 'from', {
      configurable: true,
      value: function from(items) {
        var C = this;
        if (items === null || typeof items === 'undefined') {
          throw new TypeError('`Array.from` requires an array-like object, not `null` or `undefined`');
        }
        var mapFn, T;
        if (typeof arguments[1] !== 'undefined') {
          mapFn = arguments[1];
          if (!isCallable(mapFn)) {
            throw new TypeError('When provided, the second argument to `Array.from` must be a function');
          }
          if (arguments.length > 2) {
            T = arguments[2];
          }
        }

        var arrayLike = Object(parseIterableLike(items));
        var len = toInteger(arrayLike.length);
        var A = isCallable(C) ? Object(new C(len)) : new Array(len);
        var k = 0;
        var kValue, mappedValue;

        while (k < len) {
          kValue = arrayLike[k];
          if (mapFn) {
            mappedValue = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.apply(T, [kValue, k]);
          } else {
            mappedValue = kValue;
          }
          Object.defineProperty(A, k, {
            'configurable': true,
            'enumerable': true,
            'value': mappedValue,
            'writable': true
          });
          k += 1;
        }
        A.length = len;
        return A;
      },
      writable: true
    });
  }());

// Array.of
  /*! https://mths.be/array-of v0.1.0 by @mathias */
  (function () {
    'use strict';
    var defineProperty = (function () {
      // IE 8 only supports `Object.defineProperty` on DOM elements
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) && $defineProperty;
      } catch (error) { /**/ }
      return result;
    }());
    var isConstructor = function isConstructor(Constructor) {
      try {
        return !!new Constructor();
      } catch (_) {
        return false;
      }
    };
    var of = function of() {
      var items = arguments;
      var length = items.length;
      var Me = this;
      var result = isConstructor(Me) ? new Me(length) : new Array(length);
      var index = 0;
      var value;
      while (index < length) {
        value = items[index];
        if (defineProperty) {
          defineProperty(result, index, {
            'value': value,
            'writable': true,
            'enumerable': true,
            'configurable': true
          });
        } else {
          result[index] = value;
        }
        index += 1;
      }
      result.length = length;
      return result;
    };
    if (defineProperty) {
      defineProperty(Array, 'of', {
        'value': of,
        'configurable': true,
        'writable': true
      });
    } else {
      Array.of = of;
    }
  }());

// Array.prototype.@@iterator
  /* global Symbol, ArrayIterator*/
  Array.prototype[Symbol.iterator] = function values () {
    return new ArrayIterator(this);
  };

// Array.prototype.copyWithin
  (function () {

    function hasProperty(o, p) {
      while (o) {
        if (Object.prototype.hasOwnProperty.call(o, p)) {
          return true;
        }
        if (typeof o !== 'object') {
          return false;
        }
        o = Object.getPrototypeOf(o);
      }
      return false;
    }

    function toInteger(n) {
      n = Number(n);
      if (isNaN(n)) {
        return 0;
      }
      if (n === 0 || n === Infinity || n === -Infinity) {
        return n;
      } else {
        return ((n < 0) ? -1 : 1) * Math.floor(Math.abs(n));
      }
    }

    Object.defineProperty(Array.prototype, 'copyWithin', {
      configurable: true,
      enumerable: false,
      writable: true,
      // 22.1.3.3 Array.prototype.copyWithin ( target, start [ , end ] )
      value: function (target, start/*, end*/) {
        var end = arguments[2];

        // 22.1.3.3.1 Let O be ? ToObject(this value).
        if (this === null || this === undefined) {
          throw new TypeError('Cannot call method on ' + this);
        }

        var o = Object(this);

        // 22.1.3.3.2 Let len be ? ToLength(? Get(O, "length")).
        var len = toInteger(o.length);
        if (len <= 0) {
          len = 0;
        }
        if (len === Infinity) {
          len = Math.pow(2, 53) - 1;
        } else {
          len = Math.min(len, Math.pow(2, 53) - 1);
        }
        len = Math.max(len, 0);

        // 22.1.3.3.3 Let relativeTarget be ? ToInteger(target).
        var relativeTarget = toInteger(target);

        // 22.1.3.3.4 If relativeTarget < 0, let to be max((len + relativeTarget), 0); else let to be min(relativeTarget, len).
        var to;
        if (relativeTarget < 0) {
          to = Math.max(len + relativeTarget, 0);
        } else {
          to = Math.min(relativeTarget, len);
        }

        // 22.1.3.3.5 Let relativeStart be ? ToInteger(start).
        var relativeStart = toInteger(start);

        // 22.1.3.3.6 If relativeStart < 0, let from be max((len + relativeStart), 0); else let from be min(relativeStart, len).
        var from;
        if (relativeStart < 0) {
          from = Math.max(len + relativeStart, 0);
        } else {
          from = Math.min(relativeStart, len);
        }

        // 22.1.3.3.7 If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
        var relativeEnd;
        if (end === undefined) {
          relativeEnd = len;
        } else {
          relativeEnd = toInteger(end);
        }

        // 22.1.3.3.8 If relativeEnd < 0, let final be max((len + relativeEnd), 0); else let final be min(relativeEnd, len).
        var final;
        if (relativeEnd < 0) {
          final = Math.max(len + relativeEnd, 0);
        } else {
          final = Math.min(relativeEnd, len);
        }

        // 22.1.3.3.9 Let count be min(final-from, len-to).
        var count = Math.min(final - from, len - to);

        // 22.1.3.3.10 If from<to and to<from+count, then
        var direction;
        if (from < to && to < from + count) {
          // 22.1.3.3.10.a Let direction be -1.
          direction = -1;

          // 22.1.3.3.10.b Let from be from + count - 1.
          from = from + count - 1;

          // 22.1.3.3.10.c Let to be to + count - 1.
          to = to + count - 1;
        } else {
          // 22.1.3.3.11 Else,
          // 22.1.3.3.11.a Let direction be 1.
          direction = 1;
        }

        // 22.1.3.3.12 Repeat, while count > 0
        while (count > 0) {
          // 22.1.3.3.12.a Let fromKey be ! ToString(from).
          var fromKey = String(from);
          // 22.1.3.3.12.b Let toKey be ! ToString(to).
          var toKey = String(to);
          // 22.1.3.3.12.c Let fromPresent be ? HasProperty(O, fromKey).
          var fromPresent = hasProperty(o, fromKey);
          // 22.1.3.3.12.d If fromPresent is true, then
          if (fromPresent) {
            // 22.1.3.3.12.d.i Let fromVal be ? Get(O, fromKey).
            var fromVal = o[fromKey];
            // 22.1.3.3.12.d.ii Perform ? Set(O, toKey, fromVal, true).
            o[toKey] = fromVal;
          } else {
            // 22.1.3.3.12.e Else fromPresent is false,
            // 22.1.3.3.12.e.i Perform ? DeletePropertyOrThrow(O, toKey).
            delete o[toKey];
          }
          // 22.1.3.3.12.f Let from be from + direction.
          from = from + direction;
          // 22.1.3.3.12.g Let to be to + direction.
          to = to + direction;
          // 22.1.3.3.12.h Let count be count - 1.
          count = count - 1;
        }
        // 22.1.3.3.13 Return O.
        return o;
      }
    });
  }());


// Array.prototype.entries
  Object.defineProperty(Array.prototype, 'entries', {
    value: function () {
      return new ArrayIterator(this, 'key+value');
    }
  });

// Array.prototype.fill
  Object.defineProperty(Array.prototype, 'fill', {
    configurable: true,
    value: function fill(value) {
      if (this === undefined || this === null) {
        throw new TypeError(this + ' is not an object');
      }

      var arrayLike = Object(this);

      var length = Math.max(Math.min(arrayLike.length, 9007199254740991), 0) || 0;

      var relativeStart = 1 in arguments ? parseInt(Number(arguments[1]), 10) || 0 : 0;

      relativeStart = relativeStart < 0 ? Math.max(length + relativeStart, 0) : Math.min(relativeStart, length);

      var relativeEnd = 2 in arguments && arguments[2] !== undefined ? parseInt(Number(arguments[2]), 10) || 0 : length;

      relativeEnd = relativeEnd < 0 ? Math.max(length + arguments[2], 0) : Math.min(relativeEnd, length);

      while (relativeStart < relativeEnd) {
        arrayLike[relativeStart] = value;

        ++relativeStart;
      }

      return arrayLike;
    },
    writable: true
  });

// Array.prototype.find
  Object.defineProperty(Array.prototype, 'find', {
    configurable: true,
    value: function find(callback) {
      if (this === undefined || this === null) {
        throw new TypeError(this + ' is not an object');
      }

      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }

      var
        object = Object(this),
        scope = arguments[1],
        arraylike = object instanceof String ? object.split('') : object,
        length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        index = -1,
        element;

      while (++index < length) {
        if (index in arraylike) {
          element = arraylike[index];

          if (callback.call(scope, element, index, object)) {
            return element;
          }
        }
      }
    },
    writable: true
  });

// Array.prototype.findIndex
  Object.defineProperty(Array.prototype, 'findIndex', {
    configurable: true,
    value: function findIndex(callback) {
      if (this === undefined || this === null) {
        throw new TypeError(this + ' is not an object');
      }

      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }

      var
        object = Object(this),
        scope = arguments[1],
        arraylike = object instanceof String ? object.split('') : object,
        length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
        index = -1;

      while (++index < length) {
        if (index in arraylike) {
          if (callback.call(scope, arraylike[index], index, object)) {
            return index;
          }
        }
      }

      return -1;
    },
    writable: true
  });

// Array.prototype.keys
  /* global ArrayIterator*/
  Object.defineProperty(Array.prototype, 'keys', {
    value: function () {
      return new ArrayIterator(this, 'key');
    }
  });

// Array.prototype.values
  /* global Symbol */
  Object.defineProperty(Array.prototype, 'values', {
    value: Array.prototype[Symbol.iterator],
    enumerable: false,
    writable: false
  });

// Function.name
  (function () {

    var
      accessorName = 'name',
      fnNameMatchRegex = /^\s*function\s+([^\(\s]*)\s*/,
      $Function = Function,
      FunctionName = 'Function',
      FunctionProto = $Function.prototype,
      FunctionProtoCtor = FunctionProto.constructor,

      getFunctionName = function(fn) {
        var match, name;

        if (fn === $Function || fn === FunctionProtoCtor) {
          name = FunctionName;
        }
        else if (fn !== FunctionProto) {
          match = ('' + fn).match(fnNameMatchRegex);
          name = match && match[1];
        }
        return name || '';
      };


    Object.defineProperty(FunctionProto, accessorName, {
      get: function Function$name() {
        var
          fn = this,
          fnName = getFunctionName(fn);

        // Since named function definitions have immutable names, also memoize the
        // output by defining the `name` property directly on this Function
        // instance so the accessor function will not need to be invoked again.
        if (fn !== FunctionProto) {
          Object.defineProperty(fn, accessorName, {
            value: fnName,
            configurable: true
          });
        }

        return fnName;
      },
      configurable: true
    });

  }());

// Symbol.species
  Object.defineProperty(Symbol, 'species', {value: Symbol('species')});

// Map
  (function (global) {
    // 7.2.11. SameValueZero ( x, y )
    var sameValueZero = function (x, y) {
      // 1. If Type(x) is different from Type(y), return false.
      if (typeof x !== typeof y) {
        return false;
      }
      // 2. If Type(x) is Number, then
      if (typeof x === 'number') {
        // a. If x is NaN and y is NaN, return true.
        if (isNaN(x) && isNaN(y)) {
          return true;
        }
        // b. If x is +0 and y is -0, return true.
        if (x === +0 && y === -0) {
          return true;
        }
        // c. If x is -0 and y is +0, return true.
        if (x === -0 && y === +0) {
          return true;
        }
        // d. If x is the same Number value as y, return true.
        if (x === y) {
          return true;
        }
        // e. Return false.
        return false;
      }
      // 3. Return SameValueNonNumber(x, y).
      return x === y;
    };

    // 7.3.9. GetMethod ( V, P )
    function getMethod(V, P) {
      // 1. Assert: IsPropertyKey(P) is true.
      // 2. Let func be ? GetV(V, P).
      var func = V[P];
      // 3. If func is either undefined or null, return undefined.
      if (func === null || func === undefined) {
        return undefined;
      }
      // 4. If IsCallable(func) is false, throw a TypeError exception.
      if (typeof func !== 'function') {
        throw new TypeError('Method not callable: ' + P);
      }
      // 5. Return func.
      return func;
    }

    // 7.4.1. GetIterator ( obj [ , method ] )
    // The abstract operation GetIterator with argument obj and optional argument method performs the following steps:
    function getIterator(obj /*, method */) {
      // 1. If method is not present, then
      if (!(1 in arguments)) {
        // a. Set method to ? GetMethod(obj, @@iterator).
        var method = getMethod(obj, Symbol.iterator);
      }
      // 2. Let iterator be ? Call(method, obj).
      var iterator = method.call(obj);
      // 3. If Type(iterator) is not Object, throw a TypeError exception.
      if (typeof iterator !== 'object') {
        throw new TypeError('bad iterator');
      }
      // 4. Let nextMethod be ? GetV(iterator, "next").
      var nextMethod = iterator.next;
      // 5. Let iteratorRecord be Record {[[Iterator]]: iterator, [[NextMethod]]: nextMethod, [[Done]]: false}.
      var iteratorRecord = Object.create(null);
      iteratorRecord['[[Iterator]]'] = iterator;
      iteratorRecord['[[NextMethod]]'] = nextMethod;
      iteratorRecord['[[Done]]'] = false;
      // 6. Return iteratorRecord.
      return iteratorRecord;
    }

    // 7.4.2. IteratorNext ( iteratorRecord [ , value ] )
    function iteratorNext(iteratorRecord /* [, value] */) {
      // 1. If value is not present, then
      if (!(1 in arguments)) {
        // a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « »).
        var result = iteratorRecord['[[NextMethod]]'].call(iteratorRecord['[[Iterator]]']);
        // 2. Else,
      } else {
        // a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « value »).
        var result = iteratorRecord['[[NextMethod]]'].call(iteratorRecord['[[Iterator]]'], arguments[1]);
      }
      // 3. If Type(result) is not Object, throw a TypeError exception.
      if (typeof result !== 'object') {
        throw new TypeError('bad iterator');
      }
      // 4. Return result.
      return result;
    }

    // 7.4.3 IteratorComplete ( iterResult )
    function iteratorComplete(iterResult) {
      // 1. Assert: Type(iterResult) is Object.
      if (typeof iterResult !== 'object') {
        throw new Error(Object.prototype.toString.call(iterResult) + 'is not an Object.');
      }
      // 2. Return ToBoolean(? Get(iterResult, "done")).
      return Boolean(iterResult['done']);
    }

    // 7.4.4 IteratorValue ( iterResult )
    function iteratorValue(iterResult) {
      // Assert: Type(iterResult) is Object.
      if (typeof iterResult !== 'object') {
        throw new Error(Object.prototype.toString.call(iterResult) + 'is not an Object.');
      }
      // Return ? Get(iterResult, "value").
      return iterResult.value;
    }

    // 7.4.5. IteratorStep ( iteratorRecord )
    function iteratorStep(iteratorRecord) {
      // 1. Let result be ? IteratorNext(iteratorRecord).
      var result = iteratorNext(iteratorRecord);
      // 2. Let done be ? IteratorComplete(result).
      var done = iteratorComplete(result);
      // 3. If done is true, return false.
      if (done === true) {
        return false;
      }
      // 4. Return result.
      return result;
    }

    // 7.4.6. IteratorClose ( iteratorRecord, completion )
    function iteratorClose(iteratorRecord, completion) {
      // 1. Assert: Type(iteratorRecord.[[Iterator]]) is Object.
      if (typeof iteratorRecord['[[Iterator]]'] !== 'object') {
        throw new Error(Object.prototype.toString.call(iteratorRecord['[[Iterator]]']) + 'is not an Object.');
      }
      // 2. Assert: completion is a Completion Record.
      // Polyfill.io - Ignoring this step as there is no way to check if something is a Completion Record in userland JavaScript.

      // 3. Let iterator be iteratorRecord.[[Iterator]].
      var iterator = iteratorRecord['[[Iterator]]'];
      // 4. Let return be ? GetMethod(iterator, "return").
      // Polyfill.io - We name it  returnMethod because return is a keyword and can not be used as an identifier (E.G. variable name, function name etc).
      var returnMethod = getMethod(iterator, "return");
      // 5. If return is undefined, return Completion(completion).
      if (returnMethod === undefined) {
        return completion;
      }
      // 6. Let innerResult be Call(return, iterator, « »).
      try {
        var innerResult = returnMethod.call(iterator);
      } catch (error) {
        var innerException = error;
      }
      // 7. If completion.[[Type]] is throw, return Completion(completion).
      if (completion) {
        return completion;
      }
      // 8. If innerResult.[[Type]] is throw, return Completion(innerResult).
      if (innerException) {
        throw innerException;
      }
      // 9. If Type(innerResult.[[Value]]) is not Object, throw a TypeError exception.
      if (!(typeof innerResult !== 'object')) {
        throw new TypeError("Iterator's return method returned a non-object.");
      }
      // 10. Return Completion(completion).
      return completion;
    }

    // 7.4.7. CreateIterResultObject ( value, done )
    function createIterResultObject(value, done) {
      // 1. Assert: Type(done) is Boolean.
      if (typeof done !== 'boolean') {
        throw new Error();
      }
      // 2. Let obj be ObjectCreate(%ObjectPrototype%).
      var obj = {};
      // 3. Perform CreateDataProperty(obj, "value", value).
      obj.value = value;
      // 4. Perform CreateDataProperty(obj, "done", done).
      obj.done = done;
      // 5. Return obj.
      return obj;
    }
    // 9.1.13. OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto [ , internalSlotsList ] )
    var ordinaryCreateFromConstructor = function (constructor, intrinsicDefaultProto) { // eslint-disable-line no-unused-vars
      var internalSlotsList = arguments[2] || {};
      /*
        1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object.
        The corresponding object must be an intrinsic that is intended to be used as the[[Prototype]] value of an object.
      */
      // Polyfill.io - We ignore the above step and instead pass the intrinsic directly.

      // 2. Let proto be ? GetPrototypeFromConstructor(constructor, intrinsicDefaultProto).
      // Polyfill.io - We ignore the above step and always use the prototype of the constructor.
      var proto = Object.getPrototypeOf(constructor);

      // 3. Return ObjectCreate(proto, internalSlotsList).
      // Polyfill.io - We do not pass internalSlotsList to Object.create because Object.create does use the default ordinary object definitions specified in 9.1.
      var obj = Object.create(proto);
      for (var name in internalSlotsList) {
        if (Object.prototype.hasOwnProperty.call(internalSlotsList, name)) {
          Object.defineProperty(obj, name, {
            configurable: true,
            enumerable: false,
            writable: true,
            value: internalSlotsList[name]
          });
        }
      }
      return obj;
    };

    // Deleted map items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
    var undefMarker = Symbol('undef');

    var supportsGetters = (function () {
      try {
        var a = {};
        Object.defineProperty(a, 't', {
          configurable: true,
          enumerable: false,
          get: function () {
            return true;
          },
          set: undefined
        });
        return !!a.t;
      } catch (e) {
        return false;
      }
    }());

    var isCallable = function (fn) {
      return typeof fn === 'function';
    };

    // 23.1.1.1 Map ( [ iterable ] )
    var Map = function Map(/* iterable */) {
      // 1. If NewTarget is undefined, throw a TypeError exception.
      if (!(this instanceof Map)) {
        throw new TypeError('Constructor Map requires "new"');
      }
      // 2. Let map be ? OrdinaryCreateFromConstructor(NewTarget, "%MapPrototype%", « [[MapData]] »).
      var map = ordinaryCreateFromConstructor(this, "%MapPrototype%", {
        _keys: [],
        _values: [],
        _size: 0,
        _es6Map: true
      });

      // 3. Set map.[[MapData]] to a new empty List.
      // Polyfill.io - This step was done as part of step two.

      // Some old engines do not support ES5 getters/setters.  Since Map only requires these for the size property, we can fall back to setting the size property statically each time the size of the map changes.
      if (!supportsGetters) {
        Object.defineProperty(map, 'size', {
          configurable: true,
          enumerable: false,
          writable: true,
          value: 0
        });
      }

      // 4. If iterable is not present, let iterable be undefined.
      var iterable = arguments[0] || undefined;

      // 5. If iterable is either undefined or null, return map.
      if (iterable === null || iterable === undefined) {
        return map;
      }

      // 6. Let adder be ? Get(map, "set").
      var adder = map.set;

      // 7. If IsCallable(adder) is false, throw a TypeError exception.
      if (!isCallable(adder)) {
        throw new TypeError("Map.prototype.set is not a function");
      }

      // 8. Let iteratorRecord be ? GetIterator(iterable).
      try {
        var iteratorRecord = getIterator(iterable);
        // 9. Repeat,
        while (true) {
          // a. Let next be ? IteratorStep(iteratorRecord).
          var next = iteratorStep(iteratorRecord);
          // b. If next is false, return map.
          if (next === false) {
            return map;
          }
          // c. Let nextItem be ? IteratorValue(next).
          var nextItem = iteratorValue(next);
          // d. If Type(nextItem) is not Object, then
          if (typeof nextItem !== 'object') {
            // i. Let error be Completion{[[Type]]: throw, [[Value]]: a newly created TypeError object, [[Target]]: empty}.
            try {
              throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
            } catch (error) {
              // ii. Return ? IteratorClose(iteratorRecord, error).
              return iteratorClose(iteratorRecord, error);
            }
          }
          try {
            // Polyfill.io - The try catch accounts for steps: f, h, and j.

            // e. Let k be Get(nextItem, "0").
            var k = nextItem[0];
            // f. If k is an abrupt completion, return ? IteratorClose(iteratorRecord, k).
            // g. Let v be Get(nextItem, "1").
            var v = nextItem[1];
            // h. If v is an abrupt completion, return ? IteratorClose(iteratorRecord, v).
            // i. Let status be Call(adder, map, « k.[[Value]], v.[[Value]] »).
            adder.call(map, k, v);
          } catch (e) {
            // j. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
            return iteratorClose(iteratorRecord, e);
          }
        }
      } catch (e) {
        // Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
        if (Array.isArray(iterable) ||
          Object.prototype.toString.call(iterable) === '[object Arguments]' ||
          // IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
          (!!iterable.callee)) {
          var index;
          var length = iterable.length;
          for (index = 0; index < length; index++) {
            adder.call(map, iterable[index][0], iterable[index][1]);
          }
        }
      }
      return map;
    };

    // 23.1.2.1. Map.prototype
    // The initial value of Map.prototype is the intrinsic object %MapPrototype%.
    // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
    Object.defineProperty(Map, 'prototype', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: {}
    });

    // 23.1.2.2 get Map [ @@species ]
    if (supportsGetters) {
      Object.defineProperty(Map, Symbol.species, {
        configurable: true,
        enumerable: false,
        get: function () {
          // 1. Return the this value.
          return this;
        },
        set: undefined
      });
    } else {
      Object.defineProperty(Map, Symbol.species, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: Map
      });
    }

    // 23.1.3.1 Map.prototype.clear ( )
    Object.defineProperty(Map.prototype, 'clear', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function clear() {
        // 1. Let M be the this value.
        var M = this;
        // 2. If Type(M) is not Object, throw a TypeError exception.
        if (typeof M !== 'object') {
          throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
        }
        // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
        if (M._es6Map !== true) {
          throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
        }
        // 4. Let entries be the List that is M.[[MapData]].
        var entries = M._keys;
        // 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
        for (var i = 0; i < entries.length; i++) {
          // 5.a. Set p.[[Key]] to empty.
          M._keys[i] = undefMarker;
          // 5.b. Set p.[[Value]] to empty.
          M._values[i] = undefMarker;
        }
        this._size = 0;
        if (!supportsGetters) {
          this.size = this._size;
        }
        // 6. Return undefined.
        return undefined;
      }
    });

    // 23.1.3.2. Map.prototype.constructor
    Object.defineProperty(Map.prototype, 'constructor', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: Map
    });

    // 23.1.3.3. Map.prototype.delete ( key )
    Object.defineProperty(Map.prototype, 'delete', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function (key) {
        // 1. Let M be the this value.
        var M = this;
        // 2. If Type(M) is not Object, throw a TypeError exception.
        if (typeof M !== 'object') {
          throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
        }
        // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
        if (M._es6Map !== true) {
          throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
        }
        // 4. Let entries be the List that is M.[[MapData]].
        var entries = M._keys;
        // 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
        for (var i = 0; i < entries.length; i++) {
          // a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, then
          if (M._keys[i] !== undefMarker && sameValueZero(M._keys[i], key)) {
            // i. Set p.[[Key]] to empty.
            this._keys[i] = undefMarker;
            // ii. Set p.[[Value]] to empty.
            this._values[i] = undefMarker;
            --this._size;
            if (!supportsGetters) {
              this.size = this._size;
            }
            // iii. Return true.
            return true;
          }
        }
        // 6. Return false.
        return false;
      }
    });

    // 23.1.3.4. Map.prototype.entries ( )
    Object.defineProperty(Map.prototype, 'entries', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function entries () {
        // 1. Let M be the this value.
        var M = this;
        // 2. Return ? CreateMapIterator(M, "key+value").
        return createMapIterator(M, 'key+value');
      }
    });

    // 23.1.3.5. Map.prototype.forEach ( callbackfn [ , thisArg ] )
    Object.defineProperty(Map.prototype, 'forEach', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function (callbackFn) {
        // 1. Let M be the this value.
        var M = this;
        // 2. If Type(M) is not Object, throw a TypeError exception.
        if (typeof M !== 'object') {
          throw new TypeError('Method Map.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(M));
        }
        // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
        if (M._es6Map !== true) {
          throw new TypeError('Method Map.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(M));
        }
        // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
        if (!isCallable(callbackFn)) {
          throw new TypeError(Object.prototype.toString.call(callbackFn) + ' is not a function.');
        }
        // 5. If thisArg is present, let T be thisArg; else let T be undefined.
        if (arguments[1]) {
          var T = arguments[1];
        }
        // 6. Let entries be the List that is M.[[MapData]].
        var entries = M._keys;
        // 7. For each Record {[[Key]], [[Value]]} e that is an element of entries, in original key insertion order, do
        for (var i = 0; i < entries.length; i++) {
          // a. If e.[[Key]] is not empty, then
          if (M._keys[i] !== undefMarker && M._values[i] !== undefMarker ) {
            // i. Perform ? Call(callbackfn, T, « e.[[Value]], e.[[Key]], M »).
            callbackFn.call(T, M._values[i], M._keys[i], M);
          }
        }
        // 8. Return undefined.
        return undefined;
      }
    });

    // 23.1.3.6. Map.prototype.get ( key )
    Object.defineProperty(Map.prototype, 'get', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function get(key) {
        // 1. Let M be the this value.
        var M = this;
        // 2. If Type(M) is not Object, throw a TypeError exception.
        if (typeof M !== 'object') {
          throw new TypeError('Method Map.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
        }
        // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
        if (M._es6Map !== true) {
          throw new TypeError('Method Map.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
        }
        // 4. Let entries be the List that is M.[[MapData]].
        var entries = M._keys;
        // 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
        for (var i = 0; i < entries.length; i++) {
          // a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, return p.[[Value]].
          if (M._keys[i] !== undefMarker && sameValueZero(M._keys[i], key)) {
            return M._values[i];
          }
        }
        // 6. Return undefined.
        return undefined;
      }
    });

    // 23.1.3.7. Map.prototype.has ( key )
    Object.defineProperty(Map.prototype, 'has', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function has (key) {
        // 1. Let M be the this value.
        var M = this;
        // 2. If Type(M) is not Object, throw a TypeError exception.
        if (typeof M !== 'object') {
          throw new TypeError('Method Map.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
        }
        // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
        if (M._es6Map !== true) {
          throw new TypeError('Method Map.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
        }
        // 4. Let entries be the List that is M.[[MapData]].
        var entries = M._keys;
        // 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
        for (var i = 0; i < entries.length; i++) {
          // a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, return true.
          if (M._keys[i] !== undefMarker && sameValueZero(M._keys[i], key)) {
            return true;
          }
        }
        // 6. Return false.
        return false;
      }
    });

    // 23.1.3.8. Map.prototype.keys ( )
    Object.defineProperty(Map.prototype, 'keys', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function keys () {
        // 1. Let M be the this value.
        var M = this;
        // 2. Return ? CreateMapIterator(M, "key").
        return createMapIterator(M, "key");
      }
    });

    // 23.1.3.9. Map.prototype.set ( key, value )
    Object.defineProperty(Map.prototype, 'set', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function set(key, value) {
        // 1. Let M be the this value.
        var M = this;
        // 2. If Type(M) is not Object, throw a TypeError exception.
        if (typeof M !== 'object') {
          throw new TypeError('Method Map.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
        }
        // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
        if (M._es6Map !== true) {
          throw new TypeError('Method Map.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
        }
        // 4. Let entries be the List that is M.[[MapData]].
        var entries = M._keys;
        // 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
        for (var i = 0; i < entries.length; i++) {
          // a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, then
          if (M._keys[i] !== undefMarker && sameValueZero(M._keys[i], key)) {
            // i. Set p.[[Value]] to value.
            M._values[i] = value;
            // Return M.
            return M;
          }
        }
        // 6. If key is -0, let key be +0.
        if (key === -0) {
          key = 0;
        }
        // 7. Let p be the Record {[[Key]]: key, [[Value]]: value}.
        var p = {};
        p['[[Key]]'] = key;
        p['[[Value]]'] = value;
        // 8. Append p as the last element of entries.
        M._keys.push(p['[[Key]]']);
        M._values.push(p['[[Value]]']);
        ++M._size;
        if (!supportsGetters) {
          M.size = M._size;
        }
        // 9. Return M.
        return M;
      }
    });

    // 23.1.3.10. get Map.prototype.size
    if (supportsGetters) {
      Object.defineProperty(Map.prototype, 'size', {
        configurable: true,
        enumerable: false,
        get: function () {
          // 1. Let M be the this value.
          var M = this;
          // 2. If Type(M) is not Object, throw a TypeError exception.
          if (typeof M !== 'object') {
            throw new TypeError('Method Map.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(M));
          }
          // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
          if (M._es6Map !== true) {
            throw new TypeError('Method Map.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(M));
          }
          // 4. Let entries be the List that is M.[[MapData]].
          var entries = M._keys;
          // 5. Let count be 0.
          var count = 0;
          // 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
          for (var i = 0; i < entries.length; i++) {
            // a. If p.[[Key]] is not empty, set count to count+1.
            if (M._keys[i] !== undefMarker) {
              count = count + 1;
            }
          }
          // 7. Return count.
          return count;
        },
        set: undefined
      });
    }

    // 23.1.3.11. Map.prototype.values ( )
    Object.defineProperty(Map.prototype, 'values', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function values () {
        // 1. Let M be the this value.
        var M = this;
        // 2. Return ? CreateMapIterator(M, "value").
        return createMapIterator(M, 'value');
      }
    });

    // 23.1.3.12. Map.prototype [ @@iterator ] ( )
    // The initial value of the @@iterator property is the same function object as the initial value of the entries property.
    Object.defineProperty(Map.prototype, Symbol.iterator, {
      configurable: true,
      enumerable: false,
      writable: true,
      value: Map.prototype.entries
    });

    // 23.1.3.13. Map.prototype [ @@toStringTag ]
    // The initial value of the @@toStringTag property is the String value "Map".
    // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

    // Polyfill.io - Safari 8 implements Map.name but as a non-configurable property, which means it would throw an error if we try and configure it here.
    if (!('name' in Map)) {
      // 19.2.4.2 name
      Object.defineProperty(Map, 'name', {
        configurable: true,
        enumerable: false,
        writable: false,
        value: 'Map'
      });
    }

    // 23.1.5.1. CreateMapIterator ( map, kind )
    function createMapIterator(map, kind) {
      // 1. If Type(map) is not Object, throw a TypeError exception.
      if (typeof map !== 'object') {
        throw new TypeError('createMapIterator called on incompatible receiver ' + Object.prototype.toString.call(map));
      }
      // 2. If map does not have a [[MapData]] internal slot, throw a TypeError exception.
      if (map._es6Map !== true) {
        throw new TypeError('createMapIterator called on incompatible receiver ' + Object.prototype.toString.call(map));
      }
      // 3. Let iterator be ObjectCreate(%MapIteratorPrototype%, « [[Map]], [[MapNextIndex]], [[MapIterationKind]] »).
      var iterator = Object.create(MapIteratorPrototype);
      // 4. Set iterator.[[Map]] to map.
      Object.defineProperty(iterator, '[[Map]]', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: map
      });
      // 5. Set iterator.[[MapNextIndex]] to 0.
      Object.defineProperty(iterator, '[[MapNextIndex]]', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: 0
      });
      // 6. Set iterator.[[MapIterationKind]] to kind.
      Object.defineProperty(iterator, '[[MapIterationKind]]', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: kind
      });
      // 7. Return iterator.
      return iterator;
    }

    // 23.1.5.2. The %MapIteratorPrototype% Object
    var MapIteratorPrototype = {
      // Polyfill.io - We use this as a quick way to check if an object is a Map Iterator instance.
      isMapIterator: true,
      // 23.1.5.2.1. %MapIteratorPrototype%.next ( )
      next: function next () {
        // 1. Let O be the this value.
        var O = this;
        // 2. If Type(O) is not Object, throw a TypeError exception.
        if (typeof O !== 'object') {
          throw new TypeError('Method %MapIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
        }
        // 3. If O does not have all of the internal slots of a Map Iterator Instance (23.1.5.3), throw a TypeError exception.
        if (!O.isMapIterator) {
          throw new TypeError('Method %MapIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
        }
        // 4. Let m be O.[[Map]].
        var m = O['[[Map]]'];
        // 5. Let index be O.[[MapNextIndex]].
        var index = O['[[MapNextIndex]]'];
        // 6. Let itemKind be O.[[MapIterationKind]].
        var itemKind = O['[[MapIterationKind]]'];
        // 7. If m is undefined, return CreateIterResultObject(undefined, true).
        if (m === undefined) {
          return createIterResultObject(undefined, true);
        }
        // 8. Assert: m has a [[MapData]] internal slot.
        if (!m._es6Map) {
          throw new Error();
        }
        // 9. Let entries be the List that is m.[[MapData]].
        var entries = m._keys;
        // 10. Let numEntries be the number of elements of entries.
        var numEntries = entries.length;
        // 11. NOTE: numEntries must be redetermined each time this method is evaluated.
        // 12. Repeat, while index is less than numEntries,
        while (index < numEntries) {
          // a. Let e be the Record {[[Key]], [[Value]]} that is the value of entries[index].
          var e = Object.create(null);
          e['[[Key]]'] = m._keys[index];
          e['[[Value]]'] = m._values[index];
          // b. Set index to index+1.
          index = index + 1;
          // c. Set O.[[MapNextIndex]] to index.
          O['[[MapNextIndex]]'] = index;
          // d. If e.[[Key]] is not empty, then
          if (e['[[Key]]'] !== undefMarker) {
            // i. If itemKind is "key", let result be e.[[Key]].
            if (itemKind === 'key') {
              var result = e['[[Key]]'];
              // ii. Else if itemKind is "value", let result be e.[[Value]].
            } else if (itemKind === 'value') {
              var result = e['[[Value]]'];
              // iii. Else,
            } else {
              // 1. Assert: itemKind is "key+value".
              if (itemKind !== 'key+value') {
                throw new Error();
              }
              // 2. Let result be CreateArrayFromList(« e.[[Key]], e.[[Value]] »).
              var result = [
                e['[[Key]]'],
                e['[[Value]]']
              ];
            }
            // iv. Return CreateIterResultObject(result, false).
            return createIterResultObject(result, false);
          }
        }
        // 13. Set O.[[Map]] to undefined.
        O['[[Map]]'] = undefined;
        // 14. Return CreateIterResultObject(undefined, true).
        return createIterResultObject(undefined, true);
      }

      // 23.1.5.2.2 %MapIteratorPrototype% [ @@toStringTag ]
      // The initial value of the @@toStringTag property is the String value "Map Iterator".
      // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
    };
    Object.defineProperty(MapIteratorPrototype, Symbol.iterator, {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function iterator() {
        return this;
      }
    });

    // Export the object
    try {
      Object.defineProperty(global, 'Map', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: Map
      });
    } catch (e) {
      // IE8 throws an error here if we set enumerable to false.
      // More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
      global['Map'] = Map;
    }
  }(this));

// Math.acosh
  Math.acosh = function (x) {
    return Math.log(x + Math.sqrt(x * x - 1));
  };
// Math.asinh
  Math.asinh = function asinh(x) {
    return x === -Infinity ? x : Math.log(x + Math.sqrt(x * x + 1));
  };

// Math.atanh
  Math.atanh = function atanh(x) {
    return Math.log((1 + x) / (1 - x)) / 2;
  };

// Math.cbrt
  Math.cbrt = function cbrt(x) {
    var y = Math.pow(Math.abs(x), 1 / 3);

    return x < 0 ? -y : y;
  };

// Math.clz32
  Math.clz32 = function clz32(x) {
    var value = Number(x) >>> 0;

    return value ? 32 - value.toString(2).length : 32;
  };

// Math.cosh
  Math.cosh = function cosh(x) {
    var y = Math.exp(x);

    return (y + 1 / y) / 2;
  };

// Math.expm1
  Math.expm1 = function expm1(x) {
    return Math.exp(x) - 1;
  };

// Math.hypot
  Math.hypot = function hypot() {
    var args = arguments, index = -1, y = 0;

    while (++index in args && Math.abs(y) !== Infinity) {
      y += args[index] * args[index];
    }

    return Math.abs(y) === Infinity ? Infinity : Math.sqrt(y);
  };

// Math.imul
  Math.imul = function imul(a, b) {
    var
      ah = (a >>> 16) & 0xffff,
      al = a & 0xffff,
      bh = (b >>> 16) & 0xffff,
      bl = b & 0xffff;

    return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
  };

// Math.log10
  Math.log10 = function log10(x) {
    return Math.log(x) / Math.LN10;
  };

// Math.log1p
  Math.log1p = function log1p(x) {
    return Math.log(1 + x);
  };

// Math.log2
  Math.log2 = function log2(x) {
    return Math.log(x) / Math.LN2;
  };

// Math.sign
  Math.sign = function sign(x) {
    return !(x = Number(x)) ? x : x > 0 ? 1 : -1;
  };

// Math.sinh
  Math.sinh = function sinh(x) {
    var y = Math.exp(x);

    return (y - 1 / y) / 2;
  };

// Math.tanh
  Math.tanh = function tanh(x) {
    var y;

    return x === Infinity ? 1 : x === -Infinity ? -1 : (y = Math.exp(2 * x), (y - 1) / (y + 1));
  };

// Math.trunc
  Math.trunc = function trunc(x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
  };

// Number.Epsilon
  Object.defineProperty(Number, 'EPSILON', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: Math.pow(2, -52)
  });

// Number.MAX_SAFE_INTEGER
  Number.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;

// Number.MIN_SAFE_INTEGER
  Number.MIN_SAFE_INTEGER = -(Math.pow(2, 53) - 1);

// Number.isInteger
  Number.isInteger = Number.isInteger || function (value) {
    return typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value;
  };

// Number.isSafeInteger
  Object.defineProperty(Number, 'isSafeInteger', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (number) {
      if (typeof number !== 'number') {
        return false;
      }
      if (isNaN(number) || number === +Infinity || number === -Infinity) {
        return false;
      }
      var integer = parseInt(number, 10);
      if (integer !== number) return false;
      if (Math.abs(integer) <= (Math.pow(2, 53) - 1)) {
        return true;
      }
      return false;
    }
  });

// Number.parseFloat
  Number.parseFloat = Number.parseFloat || parseFloat;

// Number.parseInt
  Number.parseInt = Number.parseInt || parseInt;

// Object.is
  Object.is = function is(a, b) {
    return (a === b && (a !== 0 || 1 / a === 1 / b)) || (a !== a && b !== b);
  };

// Promise
  !function(n){function t(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return n[e].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=n,t.c=r,t.p="",t(0)}({0:/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
      function(n,t,r){(function(n){var t=r(/*! ./yaku */80);try{(n||{}).Promise=t,window.Promise=t}catch(err){}}).call(t,function(){return this}())},80:/*!*********************!*\
  !*** ./src/yaku.js ***!
  \*********************/
      function(n,t){(function(t){!function(){"use strict";function r(){return un[B][G]||J}function e(n,t){for(var r in t)n[r]=t[r]}function o(n){return n&&"object"==typeof n}function i(n){return"function"==typeof n}function u(n,t){return n instanceof t}function c(n){return u(n,U)}function f(n,t,r){if(!t(n))throw v(r)}function s(){try{return C.apply(F,arguments)}catch(e){return rn.e=e,rn}}function a(n,t){return C=n,F=t,s}function l(n,t){function r(){for(var r=0;r<o;)t(e[r],e[r+1]),e[r++]=S,e[r++]=S;o=0,e.length>n&&(e.length=n)}var e=O(n),o=0;return function(n,t){e[o++]=n,e[o++]=t,2===o&&un.nextTick(r)}}function h(n,t){var r,e,o,c,f=0;if(!n)throw v(W);var s=n[un[B][D]];if(i(s))e=s.call(n);else{if(!i(n.next)){if(u(n,O)){for(r=n.length;f<r;)t(n[f],f++);return f}throw v(W)}e=n}for(;!(o=e.next()).done;)if(c=a(t)(o.value,f++),c===rn)throw i(e[K])&&e[K](),c.e;return f}function v(n){return new TypeError(n)}function _(n){return(n?"":X)+(new U).stack}function d(n,t){var r="on"+n.toLowerCase(),e=H[r];I&&I.listeners(n).length?n===tn?I.emit(n,t._v,t):I.emit(n,t):e?e({reason:t._v,promise:t}):un[n](t._v,t)}function p(n){return n&&n._s}function w(n){if(p(n))return new n(en);var t,r,e;return t=new n(function(n,o){if(t)throw v();r=n,e=o}),f(r,i),f(e,i),t}function m(n,t){return function(r){A&&(n[Q]=_(!0)),t===q?T(n,r):k(n,t,r)}}function y(n,t,r,e){return i(r)&&(t._onFulfilled=r),i(e)&&(n[M]&&d(nn,n),t._onRejected=e),A&&(t._p=n),n[n._c++]=t,n._s!==z&&cn(n,t),t}function j(n){if(n._umark)return!0;n._umark=!0;for(var t,r=0,e=n._c;r<e;)if(t=n[r++],t._onRejected||j(t))return!0}function x(n,t){function r(n){return e.push(n.replace(/^\s+|\s+$/g,""))}var e=[];return A&&(t[Q]&&r(t[Q]),function o(n){n&&N in n&&(o(n._next),r(n[N]+""),o(n._p))}(t)),(n&&n.stack?n.stack:n)+("\n"+e.join("\n")).replace(on,"")}function g(n,t){return n(t)}function k(n,t,r){var e=0,o=n._c;if(n._s===z)for(n._s=t,n._v=r,t===$&&(A&&c(r)&&(r.longStack=x(r,n)),fn(n));e<o;)cn(n,n[e++]);return n}function T(n,t){if(t===n&&t)return k(n,$,v(Y)),n;if(t!==P&&(i(t)||o(t))){var r=a(b)(t);if(r===rn)return k(n,$,r.e),n;i(r)?(A&&p(t)&&(n._next=t),p(t)?R(n,t,r):un.nextTick(function(){R(n,t,r)})):k(n,q,t)}else k(n,q,t);return n}function b(n){return n.then}function R(n,t,r){var e=a(r,t)(function(r){t&&(t=P,T(n,r))},function(r){t&&(t=P,k(n,$,r))});e===rn&&t&&(k(n,$,e.e),t=P)}var S,C,F,P=null,E="object"==typeof window,H=E?window:t,I=H.process,L=H.console,A=!1,O=Array,U=Error,$=1,q=2,z=3,B="Symbol",D="iterator",G="species",J=B+"("+G+")",K="return",M="_uh",N="_pt",Q="_st",V="Invalid this",W="Invalid argument",X="\nFrom previous ",Y="Chaining cycle detected for promise",Z="Uncaught (in promise)",nn="rejectionHandled",tn="unhandledRejection",rn={e:P},en=function(){},on=/^.+\/node_modules\/yaku\/.+\n?/gm,un=n.exports=function(n){var t,r=this;if(!o(r)||r._s!==S)throw v(V);if(r._s=z,A&&(r[N]=_()),n!==en){if(!i(n))throw v(W);t=a(n)(m(r,q),m(r,$)),t===rn&&k(r,$,t.e)}};un["default"]=un,e(un.prototype,{then:function(n,t){if(void 0===this._s)throw v();return y(this,w(un.speciesConstructor(this,un)),n,t)},"catch":function(n){return this.then(S,n)},"finally":function(n){function t(t){return un.resolve(n()).then(function(){return t})}return this.then(t,t)},_c:0,_p:P}),un.resolve=function(n){return p(n)?n:T(w(this),n)},un.reject=function(n){return k(w(this),$,n)},un.race=function(n){var t=this,r=w(t),e=function(n){k(r,q,n)},o=function(n){k(r,$,n)},i=a(h)(n,function(n){t.resolve(n).then(e,o)});return i===rn?t.reject(i.e):r},un.all=function(n){function t(n){k(o,$,n)}var r,e=this,o=w(e),i=[];return r=a(h)(n,function(n,u){e.resolve(n).then(function(n){i[u]=n,--r||k(o,q,i)},t)}),r===rn?e.reject(r.e):(r||k(o,q,[]),o)},un.Symbol=H[B]||{},a(function(){Object.defineProperty(un,r(),{get:function(){return this}})})(),un.speciesConstructor=function(n,t){var e=n.constructor;return e?e[r()]||t:t},un.unhandledRejection=function(n,t){L&&L.error(Z,A?t.longStack:x(n,t))},un.rejectionHandled=en,un.enableLongStackTrace=function(){A=!0},un.nextTick=E?function(n){setTimeout(n)}:I.nextTick,un._s=1;var cn=l(999,function(n,t){var r,e;return e=n._s!==$?t._onFulfilled:t._onRejected,e===S?void k(t,n._s,n._v):(r=a(g)(e,n._v),r===rn?void k(t,$,r.e):void T(t,r))}),fn=l(9,function(n){j(n)||(n[M]=1,d(tn,n))})}()}).call(t,function(){return this}())}});
// RegExp.prototype.flags
  Object.defineProperty(RegExp.prototype, 'flags', {
    configurable: true,
    enumerable: false,
    get: function () {
      // 21.2.5.3.1 Let R be the this value.
      var r = this;

      // 21.2.5.3.2 If Type(R) is not Object, throw a TypeError exception.
      if (typeof r !== 'object') {
        throw new TypeError('Method called on incompatible type: must be an object.');
      }
      // 21.2.5.3.3 Let result be the empty String.
      var result = '';

      // 21.2.5.3.4 Let global be ToBoolean(? Get(R, "global")).
      var global = !!r.global;

      // 21.2.5.3.5 If global is true, append the code unit 0x0067 (LATIN SMALL LETTER G) as the last code unit of result.
      if (global) {
        result += 'g';
      }

      // 21.2.5.3.6 Let ignoreCase be ToBoolean(? Get(R, "ignoreCase")).
      var ignoreCase = !!r.ignoreCase;

      // 21.2.5.3.7 If ignoreCase is true, append the code unit 0x0069 (LATIN SMALL LETTER I) as the last code unit of result.
      if (ignoreCase) {
        result += 'i';
      }

      // 21.2.5.3.8 Let multiline be ToBoolean(? Get(R, "multiline")).
      var multiline = !!r.multiline;

      // 21.2.5.3.9 If multiline is true, append the code unit 0x006D (LATIN SMALL LETTER M) as the last code unit of result.
      if (multiline) {
        result += 'm';
      }

      // 21.2.5.3.10 Let unicode be ToBoolean(? Get(R, "unicode")).
      var unicode = !!r.unicode;

      // 21.2.5.3.11 If unicode is true, append the code unit 0x0075 (LATIN SMALL LETTER U) as the last code unit of result.
      if (unicode) {
        result += 'u';
      }

      // 21.2.5.3.12 Let sticky be ToBoolean(? Get(R, "sticky")).
      var sticky = !!sticky;

      // 21.2.5.3.13 If sticky is true, append the code unit 0x0079 (LATIN SMALL LETTER Y) as the last code unit of result.
      if (sticky) {
        result += 'y';
      }

      // 21.2.5.3.14 Return result.
      return result;
    }
  });

// Set
  (function(global) {


    // Deleted map items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
    var undefMarker = Symbol('undef');

    // NaN cannot be found in an array using indexOf, so we encode NaNs using a private symbol.
    var NaNMarker = Symbol('NaN');

    function encodeVal(data) {
      return Number.isNaN(data) ? NaNMarker : data;
    }
    function decodeVal(encodedData) {
      return (encodedData === NaNMarker) ? NaN : encodedData;
    }

    function makeIterator(setInst, getter) {
      var nextIdx = 0;
      return {
        next: function() {
          while (setInst._values[nextIdx] === undefMarker) nextIdx++;
          if (nextIdx === setInst._values.length) {
            return {value: void 0, done: true};
          }
          else {
            return {value: getter.call(setInst, nextIdx++), done: false};
          }
        }
      };
    }

    var Set = function Set() {
      var data = arguments[0];
      this._values = [];
      this.size = this._size = 0;

      // If `data` is iterable (indicated by presence of a forEach method), pre-populate the set
      data && (typeof data.forEach === 'function') && data.forEach(function (item) {
        this.add.call(this, item);
      }, this);
    };

    // Some old engines do not support ES5 getters/setters.  Since Set only requires these for the size property, we can fall back to setting the size property statically each time the size of the set changes.
    try {
      Object.defineProperty(Set.prototype, 'size', {
        get: function() {
          return this._size;
        }
      });
    } catch(e) {
    }

    Set.prototype['add'] = function(value) {
      value = encodeVal(value);
      if (this._values.indexOf(value) === -1) {
        this._values.push(value);
        this.size = ++this._size;
      }
      return this;
    };
    Set.prototype['has'] = function(value) {
      return (this._values.indexOf(encodeVal(value)) !== -1);
    };
    Set.prototype['delete'] = function(value) {
      var idx = this._values.indexOf(encodeVal(value));
      if (idx === -1) return false;
      this._values[idx] = undefMarker;
      this.size = --this._size;
      return true;
    };
    Set.prototype['clear'] = function() {
      this._values = [];
      this.size = this._size = 0;
    };
    Set.prototype[Symbol.iterator] =
      Set.prototype['values'] =
        Set.prototype['keys'] = function() {
          var iterator = makeIterator(this, function(i) { return decodeVal(this._values[i]); });
          iterator[Symbol.iterator] = this.keys.bind(this);
          return iterator;
        };
    Set.prototype['entries'] = function() {
      var iterator = makeIterator(this, function(i) { return [decodeVal(this._values[i]), decodeVal(this._values[i])]; });
      iterator[Symbol.iterator] = this.entries.bind(this);
      return iterator;
    };
    Set.prototype['forEach'] = function(callbackFn, thisArg) {
      thisArg = thisArg || global;
      var iterator = this.entries();
      var result = iterator.next();
      while (result.done === false) {
        callbackFn.call(thisArg, result.value[1], result.value[0], this);
        result = iterator.next();
      }
    };
    Set.prototype['constructor'] =
      Set.prototype[Symbol.species] = Set;

    Set.prototype.constructor = Set;
    Set.name = "Set";

    // Export the object
    global.Set = Set;

  }(this));

// _StringIterator
// A modification of https://github.com/medikoo/es6-iterator
// Copyright (C) 2013-2015 Mariusz Nowak (www.medikoo.com)

  /* global Iterator */

  var StringIterator = (function() { // eslint-disable-line no-unused-vars

    var StringIterator = function (str) {
      if (!(this instanceof StringIterator)) return new StringIterator(str);
      str = String(str);
      Iterator.call(this, str);
      Object.defineProperty(this, '__length__', {
        value: str.length,
        configurable: false,
        enumerable: false,
        writable: false
      });
    };
    if (Object.setPrototypeOf) Object.setPrototypeOf(StringIterator, Iterator);

    StringIterator.prototype = Object.create(Iterator.prototype, {
      constructor: {
        value: StringIterator,
        configurable: true,
        enumerable: false,
        writable: true
      },
      _next: {
        value: function() {
          if (!this.__list__) return;
          if (this.__nextIndex__ < this.__length__) return this.__nextIndex__++;
          this._unBind();
        },
        configurable: true,
        enumerable: false,
        writable: true
      },
      _resolve: {
        value: function (i) {
          var char = this.__list__[i], code;
          if (this.__nextIndex__ === this.__length__) return char;
          code = char.charCodeAt(0);
          if ((code >= 0xD800) && (code <= 0xDBFF)) return char + this.__list__[this.__nextIndex__++];
          return char;
        },
        configurable: true,
        enumerable: false,
        writable: true
      },
      toString: {
        value: function() {
          return '[object String Iterator]';
        },
        configurable: true,
        enumerable: false,
        writable: true
      }
    });

    return StringIterator;
  }());

// String.prototype.@@iterator
  /* global Symbol, StringIterator */
  String.prototype[Symbol.iterator] = function () {
    return new StringIterator(this);
  };

// String.prototype.codePointAt
  (function () {
    function toInteger(n) {
      // 7.1.4.1 Let number be ? ToNumber(argument).
      n = Number(n);

      // 7.1.4.2 If number is NaN, return +0.
      if (isNaN(n)) {
        return 0;
      }

      // 7.1.4.3 If number is +0, -0, +∞, or -∞, return number.
      if (n === 0 || n === Infinity || n === -Infinity) {
        return n;
      }

      // 7.1.4.4 Return the number value that is the same sign as number and whose magnitude is floor(abs(number)).
      return ((n < 0) ? -1 : 1) * Math.floor(Math.abs(n));
    }

    Object.defineProperty(String.prototype, 'codePointAt', {
      value: function (pos) {
        // 21.1.3.3.1 Let O be ? RequireObjectCoercible(this value).
        var o;
        if (this === null || this === undefined) {
          throw new TypeError('Cannot call String.prototype.codePointAt on ' + this);
        } else {
          o = this;
        }

        // 21.1.3.3.2 Let S be ? ToString(O).
        var s = String(o);

        // 21.1.3.3.3 Let position be ? ToInteger(pos).
        var position = toInteger(pos);

        // 21.1.3.3.4 Let size be the length of S.
        var size = s.length;

        // 21.1.3.3.5 If position < 0 or position ≥ size, return undefined.
        if (position < 0 || position >= size) return undefined;

        // 21.1.3.3.6 Let first be the numeric value of the code unit at index position within the String S.
        var first = s.charCodeAt(position);

        // 21.1.3.3.7 If first < 0xD800 or first > 0xDBFF or position+1 = size, return first.
        if (first < 0xD800 || first > 0xDBFF || position + 1 === size) return first;

        // 21.1.3.3.8 Let second be the numeric value of the code unit at index position+1 within the String S.
        var second = s.charCodeAt(position + 1);

        // 21.1.3.3.9 If second < 0xDC00 or second > 0xDFFF, return first.
        if (second < 0xDC00 || second > 0xDFFF) return first;

        // 21.1.3.3.10 Return UTF16Decode(first, second).
        return ((first - 0xD800) * 1024) + (second - 0xDC00) + 0x10000;
      }
    });
  }());

// String.prototype.endsWith
  String.prototype.endsWith = function (string) {
    var index = arguments.length < 2 ? this.length : arguments[1];
    var foundIndex = this.lastIndexOf(string);
    return foundIndex !== -1 && foundIndex === index - string.length;
  };

// String.prototype.repeat
  String.prototype.repeat = function repeat(count) {
    'use strict';

    if (this === undefined || this === null) {
      throw new TypeError(this + ' is not an object');
    }

    if (count < 0 || count === Infinity) {
      throw new RangeError(count + ' is less than zero or equal to infinity');
    }

    return new Array((parseInt(count, 10) || 0) + 1).join(this);
  };

// String.prototype.startsWith
  String.prototype.startsWith = function (string) {
    var index = arguments.length < 2 ? 0 : arguments[1];

    return this.slice(index).indexOf(string) === 0;
  };

// Symbol.hasInstance
  Object.defineProperty(Symbol, 'hasInstance', {value: Symbol('hasInstance')});

// Symbol.isConcatSpreadable
  Object.defineProperty(Symbol, 'isConcatSpreadable', {value: Symbol('isConcatSpreadable')});

// Symbol.match
  Object.defineProperty(Symbol, 'match', {value: Symbol('match')});

// Symbol.replace
  Object.defineProperty(Symbol, 'replace', {value: Symbol('replace')});

// Symbol.search
  Object.defineProperty(Symbol, 'search', {value: Symbol('search')});

// Symbol.split
  Object.defineProperty(Symbol, 'split', {value: Symbol('split')});

// Symbol.toPrimitive
  Object.defineProperty(Symbol, 'toPrimitive', {value: Symbol('toPrimitive')});

// Symbol.unscopables
  Object.defineProperty(Symbol, 'unscopables', {value: Symbol('unscopables')});

// WeakMap
  /**
   * @license
   *
   * Portions of this polyfill are a derivative work of the Polymer project, which requires the following licence notice:
   *
   * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */

  (function() {
    var defineProperty = Object.defineProperty;
    var counter = Date.now() % 1e9;

    var WeakMap = function WeakMap (data) {
      this.name = '__st' + (Math.random() * 1e9 >>> 0) + (counter++ + '__');

      // If data is iterable (indicated by presence of a forEach method), pre-populate the map
      data && data.forEach && data.forEach(function (item) {
        this.set.apply(this, item);
      }, this);
    };

    WeakMap.prototype["set"] = function(key, value) {
      if (typeof key !== 'object' && typeof key !== 'function')
        throw new TypeError('Invalid value used as weak map key');

      var entry = key[this.name];
      if (entry && entry[0] === key)
        entry[1] = value;
      else
        defineProperty(key, this.name, {value: [key, value], writable: true});
      return this;
    };
    WeakMap.prototype["get"] = function(key) {
      var entry;
      return (entry = key[this.name]) && entry[0] === key ?
        entry[1] : undefined;
    };
    WeakMap.prototype["delete"] = function(key) {
      var entry = key[this.name];
      if (!entry || entry[0] !== key) return false;
      entry[0] = entry[1] = undefined;
      return true;
    };
    WeakMap.prototype["has"] = function(key) {
      var entry = key[this.name];
      if (!entry) return false;
      return entry[0] === key;
    };

    WeakMap.prototype.constructor = WeakMap;
    WeakMap.name = "WeakMap";


    this.WeakMap = WeakMap;
  }());

// WeakSet
  /**
   * @license
   *
   * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */

  (function(global) {
    var counter = Date.now() % 1e9;

    var WeakSet = function WeakSet(data) {
      this.name = '__st' + (Math.random() * 1e9 >>> 0) + (counter++ + '__');
      data && data.forEach && data.forEach(this.add, this);
    };

    WeakSet.prototype["add"] = function(obj) {
      var name = this.name;
      if (!obj[name]) Object.defineProperty(obj, name, {value: true, writable: true});
      return this;
    };
    WeakSet.prototype["delete"] = function(obj) {
      if (!obj[this.name]) return false;
      obj[this.name] = undefined;
      return true;
    };
    WeakSet.prototype["has"] = function(obj) {
      return !!obj[this.name];
    };

    WeakSet.prototype.constructor = WeakSet;
    WeakSet.name = "WeakSet";

    global.WeakSet = WeakSet;
  }(this));
})
  .call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
