function receivesAFunction(callback) {
    callback();
  };

function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function.");
    }
    return namedFunction;
  }

function returnsAnAnonymousFunction() {
    return () => console.log("Mojito all the day");
};