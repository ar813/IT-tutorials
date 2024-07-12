"use strict";
let now = new Date();
console.log(now); // 2024-06-29T08:14:31.004Z
// 1. toDateString
console.log(now.toDateString()); // Sat Jun 29 2024
// 2. getDate()
console.log(now.getDate()); // 29
// 3. getFullYear()
console.log(now.getFullYear()); // 2024
// 4. getMonth()
console.log(now.getMonth() + 1); // 6 (0-indexed, so we add 1)
// 5. getDay()
console.log(now.getDay()); // 6 (0-indexed, 0 is Sunday, 6 is Saturday)
let now2 = new Date('October 25 2005');
console.log(now2.getDay()); // 2 (0-indexed, 0 is Sunday, 6 is Saturday)
// us waqat din tuesday tha
// is ka sath app date ki taqriba tamam properties ka use kr saktay hai
console.clear();
// 6. getHours()
console.log(now.getHours());
// 7. getMinutes()
console.log(now.getMinutes());
// 8. getSeconds()
console.log(now.getSeconds());
// 9. getMilliseconds()
console.log(now.getMilliseconds());
console.clear();
// future ki chizay maloom krnay klye ham set ka use krtay hai
// 10 setDate()
let future = new Date();
future.setDate(7);
console.log(future.toDateString()); // 2024-06-07T16:35:01.033Z
// 11. setFullYear()
let future1 = new Date();
future1.setFullYear(2020);
console.log(future1.toDateString()); // Mon Jun 29 2020
// 12. setHours()
// 13. setMinutes()
// 14. setSeconds()
// 15. setMilliseconds()
