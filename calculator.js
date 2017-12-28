/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
    function calculatorModule() {
       var _memory = 0;
       var _total = 0;

       
    

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

    function load(x) {
        validate(x);
        _total = x;
        return _total;
    }

  /**
   * Return the value of `total`
   * @return { Number }
   */

   function getTotal() {
       return _total;
   }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   function add(x){
       validate(x);
       _total += x;
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   function subtract(x) {
       validate(x);
       _total -= x;
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   function multiply(x) {
       validate(x);
       _total *= x;
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */
    function validate(x){
        if (typeof x !== "number"){
            return undefined;
        }
    }

    return calculator = {
        load: load,
        getTotal: getTotal,
        add: add,
        subtract: subtract,
        multiply: multiply
       };

    }