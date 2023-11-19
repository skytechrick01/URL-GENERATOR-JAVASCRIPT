// ---------------------------------------------------------------------------------------------
// Example: /as2sdsf793n3r9dj3A8F0sfa
// ---------------------------------------------------------------------------------------------
function URL_Generator(lengths = 32) { // Function Created
    const character = "qwertyuioplkjhgfdsazxcvbnm_1234567890-QWERTYUIOPLKJHGFDSAZXCVBNM";
    let varrr = 0, getRandom = 0, name = "";
    while (varrr <= lengths){
        getRandom = Math.floor(Math.random() * 64);
        name = name + character[getRandom];
        varrr = varrr + 1;
    };
    return name; // This will return the URL
};
// You can uncomment the line and you can use the function in another File (Below)--------------
// ---------------------------------------------------------------------------------------------
// Or you can use this code and call as your requirement----------------------------------------
// ---------------------------------------------------------------------------------------------
// URL_Generator();
// ---------------------------------------------------------------------------------------------
// module.exports = URL_Generator; 
