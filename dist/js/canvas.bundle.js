/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/block.png":
/*!***************************!*\
  !*** ./src/img/block.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fac88169424b827f4bbca82bd7a01a9f.png");

/***/ }),

/***/ "./src/img/blockTri.png":
/*!******************************!*\
  !*** ./src/img/blockTri.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0f732b622c2a2a256940ec159c5a7941.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/lgPlatform.png":
/*!********************************!*\
  !*** ./src/img/lgPlatform.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "08b228664ecabddb2b575dd45bde1899.png");

/***/ }),

/***/ "./src/img/mdPlatform.png":
/*!********************************!*\
  !*** ./src/img/mdPlatform.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "14408ab95621e4d0e636104c0d045106.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/spriteFireFlower.png":
/*!**************************************!*\
  !*** ./src/img/spriteFireFlower.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "434554c25d0262d9ae16c700febfa462.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerJumpLeft.png":
/*!**********************************************!*\
  !*** ./src/img/spriteFireFlowerJumpLeft.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fe7f83abbc33795c55d5bbab3ab117f3.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerJumpRight.png":
/*!***********************************************!*\
  !*** ./src/img/spriteFireFlowerJumpRight.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b5b7bdebff9886acfe07b077e9357d84.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerRunLeft.png":
/*!*********************************************!*\
  !*** ./src/img/spriteFireFlowerRunLeft.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dac857eaeda937793a54db5301b14e46.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerRunRight.png":
/*!**********************************************!*\
  !*** ./src/img/spriteFireFlowerRunRight.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c957f14ac99dfa4f90a424a042a43e7b.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerStandLeft.png":
/*!***********************************************!*\
  !*** ./src/img/spriteFireFlowerStandLeft.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "078c954a7e3c7b68639b3a5fbe448e8e.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerStandRight.png":
/*!************************************************!*\
  !*** ./src/img/spriteFireFlowerStandRight.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9c8c09ed0463034dc3480fc1eb36234b.png");

/***/ }),

/***/ "./src/img/spriteGoomba.png":
/*!**********************************!*\
  !*** ./src/img/spriteGoomba.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a1de12fbeda5f4cadc1c0cec27c01014.png");

/***/ }),

/***/ "./src/img/spriteMarioJumpLeft.png":
/*!*****************************************!*\
  !*** ./src/img/spriteMarioJumpLeft.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "79a87181aec94b5e1d21942963ebe634.png");

/***/ }),

/***/ "./src/img/spriteMarioJumpRight.png":
/*!******************************************!*\
  !*** ./src/img/spriteMarioJumpRight.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffdd5958ac8fc0192de1a8855d128203.png");

/***/ }),

/***/ "./src/img/spriteMarioRunLeft.png":
/*!****************************************!*\
  !*** ./src/img/spriteMarioRunLeft.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bd67564ba49a9b4944f1ac5c812adc9d.png");

/***/ }),

/***/ "./src/img/spriteMarioRunRight.png":
/*!*****************************************!*\
  !*** ./src/img/spriteMarioRunRight.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0a0b6df309febe5e8b6c74c066c6a08e.png");

/***/ }),

/***/ "./src/img/spriteMarioStandLeft.png":
/*!******************************************!*\
  !*** ./src/img/spriteMarioStandLeft.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5278df33f538bbd50783473847521409.png");

/***/ }),

/***/ "./src/img/spriteMarioStandRight.png":
/*!*******************************************!*\
  !*** ./src/img/spriteMarioStandRight.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5a31f024f6d43f2604bafd029981127f.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/img/tPlatform.png":
/*!*******************************!*\
  !*** ./src/img/tPlatform.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d119235cfb5fe1e6bcc3010e83e9968e.png");

/***/ }),

/***/ "./src/img/xtPlatform.png":
/*!********************************!*\
  !*** ./src/img/xtPlatform.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1e48f47873af05232d20d003b68fdecd.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_block_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/block.png */ "./src/img/block.png");
/* harmony import */ var _img_blockTri_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/blockTri.png */ "./src/img/blockTri.png");
/* harmony import */ var _img_mdPlatform_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/mdPlatform.png */ "./src/img/mdPlatform.png");
/* harmony import */ var _img_lgPlatform_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/lgPlatform.png */ "./src/img/lgPlatform.png");
/* harmony import */ var _img_tPlatform_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/tPlatform.png */ "./src/img/tPlatform.png");
/* harmony import */ var _img_xtPlatform_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/xtPlatform.png */ "./src/img/xtPlatform.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_spriteMarioRunLeft_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/spriteMarioRunLeft.png */ "./src/img/spriteMarioRunLeft.png");
/* harmony import */ var _img_spriteMarioRunRight_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/spriteMarioRunRight.png */ "./src/img/spriteMarioRunRight.png");
/* harmony import */ var _img_spriteMarioStandLeft_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../img/spriteMarioStandLeft.png */ "./src/img/spriteMarioStandLeft.png");
/* harmony import */ var _img_spriteMarioStandRight_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../img/spriteMarioStandRight.png */ "./src/img/spriteMarioStandRight.png");
/* harmony import */ var _img_spriteMarioJumpRight_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../img/spriteMarioJumpRight.png */ "./src/img/spriteMarioJumpRight.png");
/* harmony import */ var _img_spriteMarioJumpLeft_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../img/spriteMarioJumpLeft.png */ "./src/img/spriteMarioJumpLeft.png");
/* harmony import */ var _img_spriteFireFlowerRunRight_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../img/spriteFireFlowerRunRight.png */ "./src/img/spriteFireFlowerRunRight.png");
/* harmony import */ var _img_spriteFireFlowerRunLeft_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../img/spriteFireFlowerRunLeft.png */ "./src/img/spriteFireFlowerRunLeft.png");
/* harmony import */ var _img_spriteFireFlowerStandRight_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../img/spriteFireFlowerStandRight.png */ "./src/img/spriteFireFlowerStandRight.png");
/* harmony import */ var _img_spriteFireFlowerStandLeft_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../img/spriteFireFlowerStandLeft.png */ "./src/img/spriteFireFlowerStandLeft.png");
/* harmony import */ var _img_spriteFireFlowerJumpRight_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../img/spriteFireFlowerJumpRight.png */ "./src/img/spriteFireFlowerJumpRight.png");
/* harmony import */ var _img_spriteFireFlowerJumpLeft_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../img/spriteFireFlowerJumpLeft.png */ "./src/img/spriteFireFlowerJumpLeft.png");
/* harmony import */ var _img_spriteFireFlower_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../img/spriteFireFlower.png */ "./src/img/spriteFireFlower.png");
/* harmony import */ var _img_spriteGoomba_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../img/spriteGoomba.png */ "./src/img/spriteGoomba.png");

































var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 1.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Player);

    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.scale = 0.3;
    this.width = 398 * this.scale;
    this.height = 353 * this.scale;
    this.image = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_18__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteMarioStandRight_png__WEBPACK_IMPORTED_MODULE_22__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteMarioStandLeft_png__WEBPACK_IMPORTED_MODULE_21__["default"]),
        fireFlower: {
          right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteFireFlowerStandRight_png__WEBPACK_IMPORTED_MODULE_27__["default"]),
          left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteFireFlowerStandLeft_png__WEBPACK_IMPORTED_MODULE_28__["default"])
        }
      },
      run: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteMarioRunRight_png__WEBPACK_IMPORTED_MODULE_20__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteMarioRunLeft_png__WEBPACK_IMPORTED_MODULE_19__["default"]),
        fireFlower: {
          right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteFireFlowerRunRight_png__WEBPACK_IMPORTED_MODULE_25__["default"]),
          left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteFireFlowerRunLeft_png__WEBPACK_IMPORTED_MODULE_26__["default"])
        }
      },
      jump: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteMarioJumpRight_png__WEBPACK_IMPORTED_MODULE_23__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteMarioJumpLeft_png__WEBPACK_IMPORTED_MODULE_24__["default"]),
        fireFlower: {
          right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteFireFlowerJumpRight_png__WEBPACK_IMPORTED_MODULE_29__["default"]),
          left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteFireFlowerJumpLeft_png__WEBPACK_IMPORTED_MODULE_30__["default"])
        }
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 398;
    this.powerUps = {
      fireFlower: false
    };
    this.invincible = false;
    this.opacity = 1;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Player, [{
    key: "draw",
    value: function draw() {
      c.save();
      c.globalAlpha = this.opacity;
      c.fillStyle = 'rgba(255, 0, 0, .2)';
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 353, this.position.x, this.position.y, this.width, this.height);
      c.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      var currentSprite = this.currentSprite,
          sprites = this.sprites;
      if (this.frames > 58 && (currentSprite === sprites.stand.right || currentSprite === sprites.stand.left || currentSprite === sprites.stand.fireFlower.left || currentSprite === sprites.stand.fireFlower.right)) this.frames = 0;else if (this.frames > 28 && (currentSprite === sprites.run.right || currentSprite === sprites.run.left || currentSprite === sprites.run.fireFlower.right || currentSprite === sprites.run.fireFlower.left)) this.frames = 0;else if (currentSprite === sprites.jump.right || currentSprite === sprites.jump.left || currentSprite === sprites.jump.fireFlower.right || currentSprite === sprites.jump.fireFlower.left) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;

      if (this.invincible) {
        if (this.opacity === 1) this.opacity = 0;else this.opacity = 1;
      } else this.opacity = 1;
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image,
        block = _ref.block,
        text = _ref.text;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.block = block;
    this.text = text;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);

      if (this.text) {
        c.font = '20px Arial';
        c.fillStyle = 'red';
        c.fillText(this.text, this.position.x, this.position.y);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
    }
  }]);

  return GenericObject;
}();

var Goomba = /*#__PURE__*/function () {
  function Goomba(_ref3) {
    var position = _ref3.position,
        velocity = _ref3.velocity,
        _ref3$distance = _ref3.distance,
        distance = _ref3$distance === void 0 ? {
      limit: 50,
      traveled: 0
    } : _ref3$distance;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Goomba);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.width = 43.33;
    this.height = 50;
    this.image = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteGoomba_png__WEBPACK_IMPORTED_MODULE_32__["default"]);
    this.frames = 0;
    this.distance = distance;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Goomba, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = 'red'
      // c.fillRect(this.position.x, this.position.y, this.width, this.height)
      c.drawImage(this.image, 130 * this.frames, 0, 130, 150, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames >= 58) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity; // walk the goomba back and forth

      this.distance.traveled += Math.abs(this.velocity.x);

      if (this.distance.traveled > this.distance.limit) {
        this.distance.traveled = 0;
        this.velocity.x = -this.velocity.x;
      }
    }
  }]);

  return Goomba;
}();

var FireFlower = /*#__PURE__*/function () {
  function FireFlower(_ref4) {
    var position = _ref4.position,
        velocity = _ref4.velocity;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FireFlower);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.width = 56;
    this.height = 60;
    this.image = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteFireFlower_png__WEBPACK_IMPORTED_MODULE_31__["default"]);
    this.frames = 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(FireFlower, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = 'red'
      // c.fillRect(this.position.x, this.position.y, this.width, this.height)
      c.drawImage(this.image, 56 * this.frames, 0, 56, 60, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames >= 75) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);

  return FireFlower;
}();

var Particle = /*#__PURE__*/function () {
  function Particle(_ref5) {
    var position = _ref5.position,
        velocity = _ref5.velocity,
        radius = _ref5.radius,
        _ref5$color = _ref5.color,
        color = _ref5$color === void 0 ? '#654428' : _ref5$color,
        _ref5$fireball = _ref5.fireball,
        fireball = _ref5$fireball === void 0 ? false : _ref5$fireball;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Particle);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.radius = radius;
    this.ttl = 300;
    this.color = color;
    this.fireball = fireball;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Particle, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.ttl--;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.radius + this.velocity.y <= canvas.height) this.velocity.y += gravity * 0.4;
    }
  }]);

  return Particle;
}();

var platformImage;
var platformSmallTallImage;
var blockTriImage;
var lgPlatformImage;
var tPlatformImage;
var xtPlatformImage;
var blockImage;
var player = new Player();
var platforms = [];
var genericObjects = [];
var goombas = [];
var particles = [];
var fireFlowers = [];
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
    var goombaWidth, platformsMap, platformDistance;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_platform_png__WEBPACK_IMPORTED_MODULE_5__["default"]);

          case 2:
            platformImage = _context.sent;
            _context.next = 5;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_8__["default"]);

          case 5:
            platformSmallTallImage = _context.sent;
            _context.next = 8;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_blockTri_png__WEBPACK_IMPORTED_MODULE_10__["default"]);

          case 8:
            blockTriImage = _context.sent;
            _context.next = 11;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_block_png__WEBPACK_IMPORTED_MODULE_9__["default"]);

          case 11:
            blockImage = _context.sent;
            _context.next = 14;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_lgPlatform_png__WEBPACK_IMPORTED_MODULE_12__["default"]);

          case 14:
            lgPlatformImage = _context.sent;
            _context.next = 17;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_tPlatform_png__WEBPACK_IMPORTED_MODULE_13__["default"]);

          case 17:
            tPlatformImage = _context.sent;
            _context.next = 20;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_xtPlatform_png__WEBPACK_IMPORTED_MODULE_14__["default"]);

          case 20:
            xtPlatformImage = _context.sent;
            fireFlowers = [new FireFlower({
              position: {
                x: 400,
                y: 100
              },
              velocity: {
                x: 0,
                y: 0
              }
            })];
            player = new Player();
            goombaWidth = 43.33;
            goombas = [new Goomba({
              position: {
                x: 908 + lgPlatformImage.width - goombaWidth,
                y: 100
              },
              velocity: {
                x: -0.3,
                y: 0
              },
              distance: {
                limit: 400,
                traveled: 0
              }
            }), new Goomba({
              position: {
                x: 3249 + lgPlatformImage.width - goombaWidth,
                y: 100
              },
              velocity: {
                x: -0.3,
                y: 0
              },
              distance: {
                limit: 400,
                traveled: 0
              }
            }), new Goomba({
              position: {
                x: 3249 + lgPlatformImage.width - goombaWidth - goombaWidth,
                y: 100
              },
              velocity: {
                x: -0.3,
                y: 0
              },
              distance: {
                limit: 400,
                traveled: 0
              }
            }), new Goomba({
              position: {
                x: 3249 + lgPlatformImage.width - goombaWidth - goombaWidth - goombaWidth,
                y: 100
              },
              velocity: {
                x: -0.3,
                y: 0
              },
              distance: {
                limit: 400,
                traveled: 0
              }
            }), new Goomba({
              position: {
                x: 3249 + lgPlatformImage.width - goombaWidth - goombaWidth - goombaWidth - goombaWidth,
                y: 100
              },
              velocity: {
                x: -0.3,
                y: 0
              },
              distance: {
                limit: 400,
                traveled: 0
              }
            }), new Goomba({
              position: {
                x: 5135 + xtPlatformImage.width / 2 + goombaWidth,
                y: 100
              },
              velocity: {
                x: -0.3,
                y: 0
              },
              distance: {
                limit: 100,
                traveled: 0
              }
            }), new Goomba({
              position: {
                x: 6968,
                y: 0
              },
              velocity: {
                x: -0.3,
                y: 0
              },
              distance: {
                limit: 100,
                traveled: 0
              }
            })];
            particles = [];
            platforms = [new Platform({
              x: 908 + 100,
              y: 300,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 908 + 100 + blockImage.width,
              y: 100,
              image: blockImage,
              block: true
            }), new Platform({
              x: 1991 + lgPlatformImage.width - tPlatformImage.width,
              y: canvas.height - lgPlatformImage.height - tPlatformImage.height,
              image: tPlatformImage,
              block: false
            }), new Platform({
              x: 1991 + lgPlatformImage.width - tPlatformImage.width - 100,
              y: canvas.height - lgPlatformImage.height - tPlatformImage.height + blockImage.height,
              image: blockImage,
              block: true
            }), new Platform({
              x: 5712 + xtPlatformImage.width + 175,
              y: canvas.height - xtPlatformImage.height,
              image: blockImage,
              block: true,
              text: 5712 + xtPlatformImage.width + 175
            }), new Platform({
              x: 6116 + 175,
              y: canvas.height - xtPlatformImage.height,
              image: blockImage,
              block: true
            }), new Platform({
              x: 6116 + 175 * 2,
              y: canvas.height - xtPlatformImage.height,
              image: blockImage,
              block: true
            }), new Platform({
              x: 6116 + 175 * 3,
              y: canvas.height - xtPlatformImage.height - 100,
              image: blockImage,
              block: true
            }), new Platform({
              x: 6116 + 175 * 4,
              y: canvas.height - xtPlatformImage.height - 200,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 6116 + 175 * 4 + blockTriImage.width,
              y: canvas.height - xtPlatformImage.height - 200,
              image: blockTriImage,
              block: true,
              text: 6116 + 175 * 4 + blockTriImage.width
            }), new Platform({
              x: 6968 + 300,
              y: canvas.height - lgPlatformImage.height,
              image: lgPlatformImage,
              block: true,
              text: 6968 + 300
            })];
            genericObjects = [new GenericObject({
              x: -1,
              y: -1,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_background_png__WEBPACK_IMPORTED_MODULE_7__["default"])
            }), new GenericObject({
              x: -1,
              y: -1,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_hills_png__WEBPACK_IMPORTED_MODULE_6__["default"])
            })];
            scrollOffset = 0;
            platformsMap = ['lg', 'lg', 'gap', 'lg', 'gap', 'gap', 'lg', 'gap', 't', 'gap', 'xt', 'gap', 'xt', 'gap', 'gap', 'xt'];
            platformDistance = 0;
            platformsMap.forEach(function (symbol) {
              switch (symbol) {
                case 'lg':
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - lgPlatformImage.height,
                    image: lgPlatformImage,
                    block: true,
                    text: platformDistance
                  }));
                  platformDistance += lgPlatformImage.width - 2;
                  break;

                case 'gap':
                  platformDistance += 175;
                  break;

                case 't':
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - tPlatformImage.height,
                    image: tPlatformImage,
                    block: true
                  }));
                  platformDistance += tPlatformImage.width - 2;
                  break;

                case 'xt':
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - xtPlatformImage.height,
                    image: xtPlatformImage,
                    block: true,
                    text: platformDistance
                  }));
                  platformDistance += xtPlatformImage.width - 2;
                  break;
              }
            });

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _init.apply(this, arguments);
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.update();
    genericObject.velocity.x = 0;
  });
  platforms.forEach(function (platform) {
    platform.update();
    platform.velocity.x = 0;
  }); // mario obtains powerup

  fireFlowers.forEach(function (fireFlower, i) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["objectsTouch"])({
      object1: player,
      object2: fireFlower
    })) {
      player.powerUps.fireFlower = true;
      setTimeout(function () {
        fireFlowers.splice(i, 1);
      }, 0);
    } else fireFlower.update();
  });
  goombas.forEach(function (goomba, index) {
    goomba.update(); // remove goomba on fireball hit

    particles.filter(function (particle) {
      return particle.fireball;
    }).forEach(function (particle, particleIndex) {
      if (particle.position.x + particle.radius >= goomba.position.x && particle.position.y + particle.radius >= goomba.position.y && particle.position.x - particle.radius <= goomba.position.x + goomba.width && particle.position.y - particle.radius <= goomba.position.y + goomba.height) {
        for (var i = 0; i < 50; i++) {
          particles.push(new Particle({
            position: {
              x: goomba.position.x + goomba.width / 2,
              y: goomba.position.y + goomba.height / 2
            },
            velocity: {
              x: (Math.random() - 0.5) * 7,
              y: (Math.random() - 0.5) * 15
            },
            radius: Math.random() * 3
          }));
        }

        setTimeout(function () {
          goombas.splice(index, 1);
          particles.splice(particleIndex, 1);
        }, 0);
      }
    }); // goomba stomp squish

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["collisionTop"])({
      object1: player,
      object2: goomba
    })) {
      for (var i = 0; i < 50; i++) {
        particles.push(new Particle({
          position: {
            x: goomba.position.x + goomba.width / 2,
            y: goomba.position.y + goomba.height / 2
          },
          velocity: {
            x: (Math.random() - 0.5) * 7,
            y: (Math.random() - 0.5) * 15
          },
          radius: Math.random() * 3
        }));
      }

      player.velocity.y -= 40;
      setTimeout(function () {
        goombas.splice(index, 1);
      }, 0);
    } else if (player.position.x + player.width >= goomba.position.x && player.position.y + player.height >= goomba.position.y && player.position.x <= goomba.position.x + goomba.width) {
      // player hits goomba
      if (player.powerUps.fireFlower) {
        player.invincible = true;
        player.powerUps.fireFlower = false;
        setTimeout(function () {
          player.invincible = false;
        }, 1000);
      } else if (!player.invincible) init();
    }
  });
  particles.forEach(function (particle, i) {
    particle.update();
    if (particle.fireball && (particle.position.x - particle.radius >= canvas.width || particle.position.x + particle.radius <= 0)) setTimeout(function () {
      particles.splice(i, 1);
    }, 0);
  });
  player.update();
  var hitSide = false;

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0; // scrolling code

    if (keys.right.pressed) {
      for (var i = 0; i < platforms.length; i++) {
        var _platform = platforms[i];
        _platform.velocity.x = -player.speed;

        if (_platform.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
          object: player,
          platform: _platform
        })) {
          platforms.forEach(function (platform) {
            platform.velocity.x = 0;
          });
          hitSide = true;
          break;
        }
      }

      if (!hitSide) {
        scrollOffset += player.speed;
        genericObjects.forEach(function (genericObject) {
          genericObject.velocity.x = -player.speed * 0.66;
        });
        goombas.forEach(function (goomba) {
          goomba.position.x -= player.speed;
        });
        fireFlowers.forEach(function (fireFlower) {
          fireFlower.position.x -= player.speed;
        });
        particles.forEach(function (particle) {
          particle.position.x -= player.speed;
        });
      }
    } else if (keys.left.pressed && scrollOffset > 0) {
      for (var _i = 0; _i < platforms.length; _i++) {
        var _platform2 = platforms[_i];
        _platform2.velocity.x = player.speed;

        if (_platform2.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
          object: player,
          platform: _platform2
        })) {
          platforms.forEach(function (platform) {
            platform.velocity.x = 0;
          });
          hitSide = true;
          break;
        }
      }

      if (!hitSide) {
        scrollOffset -= player.speed;
        genericObjects.forEach(function (genericObject) {
          genericObject.velocity.x = player.speed * 0.66;
        });
        goombas.forEach(function (goomba) {
          goomba.position.x += player.speed;
        });
        fireFlowers.forEach(function (fireFlower) {
          fireFlower.position.x += player.speed;
        });
        particles.forEach(function (particle) {
          particle.position.x += player.speed;
        });
      }
    }
  } // platform collision detection


  platforms.forEach(function (platform) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.y = 0;
    }

    if (platform.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitBottomOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.y = -player.velocity.y;
    }

    if (platform.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.x = 0;
    } // particles bounce


    particles.forEach(function (particle, index) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatformCircle"])({
        object: particle,
        platform: platform
      })) {
        var bounce = 0.9;
        particle.velocity.y = -particle.velocity.y * 0.99;
        if (particle.radius - 0.4 < 0) particles.splice(index, 1);else particle.radius -= 0.4;
      }

      if (particle.ttl < 0) particles.splice(index, 1);
    });
    goombas.forEach(function (goomba) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
        object: goomba,
        platform: platform
      })) goomba.velocity.y = 0;
    });
    fireFlowers.forEach(function (fireFlower) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
        object: fireFlower,
        platform: platform
      })) fireFlower.velocity.y = 0;
    });
  }); // win condition

  if (platformImage && scrollOffset + 400 + player.width > 6968 + 300) {
    console.log('you win');
  } // lose condition


  if (player.position.y > canvas.height) {
    init();
  } // sprite switching


  if (player.velocity.y !== 0) return;

  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.currentSprite = player.sprites.run.right;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
  } // fireflower sprites


  if (!player.powerUps.fireFlower) return;

  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.fireFlower.right) {
    player.currentSprite = player.sprites.run.fireFlower.right;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.fireFlower.left) {
    player.currentSprite = player.sprites.run.fireFlower.left;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.fireFlower.left) {
    player.currentSprite = player.sprites.stand.fireFlower.left;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.fireFlower.right) {
    player.currentSprite = player.sprites.stand.fireFlower.right;
  }
}

init();
animate();
addEventListener('keydown', function (_ref6) {
  var keyCode = _ref6.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = true;
      lastKey = 'left';
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case 87:
      console.log('up');
      player.velocity.y -= 25;
      if (lastKey === 'right') player.currentSprite = player.sprites.jump.right;else player.currentSprite = player.sprites.jump.left;
      if (!player.powerUps.fireFlower) break;
      if (lastKey === 'right') player.currentSprite = player.sprites.jump.fireFlower.right;else player.currentSprite = player.sprites.jump.fireFlower.left;
      break;

    case 32:
      console.log('space');
      if (!player.powerUps.fireFlower) return;
      var velocity = 15;
      if (lastKey === 'left') velocity = -velocity;
      particles.push(new Particle({
        position: {
          x: player.position.x + player.width / 2,
          y: player.position.y + player.height / 2
        },
        velocity: {
          x: velocity,
          y: 0
        },
        radius: 5,
        color: 'red',
        fireball: true
      }));
      break;
  }
});
addEventListener('keyup', function (_ref7) {
  var keyCode = _ref7.keyCode;

  // console.log(keyCode)
  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = false;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = false;
      break;

    case 87:
      console.log('up');
      break;
  }
});

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: createImage, createImageAsync, isOnTopOfPlatform, collisionTop, isOnTopOfPlatformCircle, hitBottomOfPlatform, hitSideOfPlatform, objectsTouch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImage", function() { return createImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImageAsync", function() { return createImageAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnTopOfPlatform", function() { return isOnTopOfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collisionTop", function() { return collisionTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnTopOfPlatformCircle", function() { return isOnTopOfPlatformCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitBottomOfPlatform", function() { return hitBottomOfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitSideOfPlatform", function() { return hitSideOfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectsTouch", function() { return objectsTouch; });
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}
function createImageAsync(imageSrc) {
  return new Promise(function (resolve) {
    var image = new Image();

    image.onload = function () {
      resolve(image);
    };

    image.src = imageSrc;
  });
}
function isOnTopOfPlatform(_ref) {
  var object = _ref.object,
      platform = _ref.platform;
  return object.position.y + object.height <= platform.position.y && object.position.y + object.height + object.velocity.y >= platform.position.y && object.position.x + object.width >= platform.position.x && object.position.x <= platform.position.x + platform.width;
}
function collisionTop(_ref2) {
  var object1 = _ref2.object1,
      object2 = _ref2.object2;
  return object1.position.y + object1.height <= object2.position.y && object1.position.y + object1.height + object1.velocity.y >= object2.position.y && object1.position.x + object1.width >= object2.position.x && object1.position.x <= object2.position.x + object2.width;
}
function isOnTopOfPlatformCircle(_ref3) {
  var object = _ref3.object,
      platform = _ref3.platform;
  return object.position.y + object.radius <= platform.position.y && object.position.y + object.radius + object.velocity.y >= platform.position.y && object.position.x + object.radius >= platform.position.x && object.position.x <= platform.position.x + platform.width;
}
function hitBottomOfPlatform(_ref4) {
  var object = _ref4.object,
      platform = _ref4.platform;
  return object.position.y <= platform.position.y + platform.height && object.position.y - object.velocity.y >= platform.position.y + platform.height && object.position.x + object.width >= platform.position.x && object.position.x <= platform.position.x + platform.width;
}
function hitSideOfPlatform(_ref5) {
  var object = _ref5.object,
      platform = _ref5.platform;
  return object.position.x + object.width + object.velocity.x - platform.velocity.x >= platform.position.x && object.position.x + object.velocity.x <= platform.position.x + platform.width && object.position.y <= platform.position.y + platform.height && object.position.y + object.height >= platform.position.y;
}
function objectsTouch(_ref6) {
  var object1 = _ref6.object1,
      object2 = _ref6.object2;
  return object1.position.x + object1.width >= object2.position.x && object1.position.x <= object2.position.x + object2.width && object1.position.y + object1.height >= object2.position.y && object1.position.y <= object2.position.y + object2.height;
}

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map