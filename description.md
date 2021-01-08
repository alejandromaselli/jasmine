### spec file extensions

*.spec.js
*test.js

spec === test

.js -> javaScript files
.ts -> TypeScript filrd

(Target filename).js
calculator.spec.js

What is a Suite?

Is a group of specs therefore group of tests!

Suites help us to organize our specs

### Spec definition

spec --> test

-> Spec
- Short of specification:
  - Set of expectations that test the state of the code

- expect 1 is the group
  - expectation 1
  - expectation 2

### What is an expectation?

expectation >=> Assertion 

Assertion is an statement

Result >=> true or false

5 + 5 = 10 >=> This is a statement

expect 5 + 5 to be 10
-> true

expect 5 + 4 to be 10 // This is actually 9!
-> false

### Passing and failing Specs

Spec with all true expectations => passing spec
Spec with one or more false expectations => failing spec