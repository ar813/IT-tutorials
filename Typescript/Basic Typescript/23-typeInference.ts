/* ************** Type Inference ************** */

// Type inference in TypeScript refers to the ability of the TypeScript compiler to automatically determine and assign types to variables, expressions, and function return values based on their usage and context in the code.
// If we write types ourselves, it is called type annotation. But in contast, we are not writting types but typescript assume of that type is called type inference.

let myName = "Arsalan"
myName = 3

// Use type inference for simple cases where the assigned value clearly indicates the intended type.
// When in doubt, provide explicit type annotations to make your intentions clear.
// Avoid relying too heavily on type inference when the assigned value is complex or ambiguous.