//  ********************  Scope  *********************** //
// the need for a well-defined set of rules for storing variables in some location, and for finding those variables at a later time. We'll call that set of rules: Scope.
//  ********************  Scope  *********************** //

// ******************* lexical scoping ********************* //

var passed = 3; // passed is accessable to addTo function

var addTo = function() {
    var inner = 2; // inner is not accessable from out side 
    return passed + inner;
}

console.log(addTo());

// ******************* lexical scoping ********************* //