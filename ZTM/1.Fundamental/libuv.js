/**
 * Go to the libuv code in github
 * 
 * Go to the src folder -> win and unix
 * 
 * unix -> fs.c
 * 
 * in this file there is uv__fs_open function whics actualy open a file when v8 enigne call the 
 * fs module and that call come to this function via nodejs binding
 * 
 * for win it is fs__open , CreateFileW function
 * 
 */