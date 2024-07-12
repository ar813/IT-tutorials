/* ************** If code have any error, no js file create ************** */
// If you want that when there is an error occurs in your code, no js file create, follow the given instructions
// step 1: create tsconfig.json file
// step 2: go in tsconfig.json file and then press ctrl + f
// step 3: type "emiton"
// step 4: recommit, "noEmitOnError": true, 
// step 5: Finally, only type "tsc" on terminal (without file name like tsc main.ts)

/* ************** OR ************** */
// After writting your code type "tsc --noEmitOnError main.ts && node main.js " (Without any json file OR with json file)