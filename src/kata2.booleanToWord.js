const booleanToWord = (boolean) => {
   if (boolean.toString() === 'true') {
       return 'Yes'
   };

   if (boolean.toString() === 'false') {
       return 'No'
   };
};

module.exports = booleanToWord;
