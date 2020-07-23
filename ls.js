fs = require('fs')


const listfiles = () => {
    process.stdin.on('data', (input) => {
        cmd = input.toString().trim();
        if(cmd === 'ls') {
             fs.readdir('./', 'utf8' , (err, files) =>  {
                if(err) {
                    throw err;
                } else {
                    process.stdout.write(files.join('  '))
                    process.stdout.write('\nprompt >')
                }
            })
        }

    })
}

module.exports =listfiles;
