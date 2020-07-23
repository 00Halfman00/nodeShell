// //output a prompt
// process.stdout.write('prompt > ');

// //The stdin 'data' event fired after a user types in a line
// process.stdin.on('data', (input) => {
//     const cmd = input.toString().toUpperCase().trim(); // remove the newline

//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt > ');
// });

 //process.stdout.write('prompt > '); // output a prompt

// process.stdin.on('data', (input) => {
  
//       cmd = input.toString().trim(); // remove the newline

//       process.stdout.write('You typed:' + cmd);
//       process.stdout.write('\npromt >');
      
  
// });

process.stdin.on('data', (input) => {
    cmd = input.toString().trim();
    
    switch (cmd) {
    case 'pwd' : 
        pwd = process.cwd();
        process.stdout.write(pwd);
    break;

    }
    process.stdout.write('\nprompt > ')
})
