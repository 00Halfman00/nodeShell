const printWdirectory = () => {
  process.stdin.on('data', (input) => {
    cmd = input.toString().trim();
    if (cmd === 'pwd') {
      process.stdout.write(process.cwd());
    }
    process.stdout.write('\nprompt > ');
  });
};

module.exports = printWdirectory;
