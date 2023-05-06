function DownloadFile(NewFileLocation, OnlineFileToDownload){
    modules.request(OnlineFileToDownload)
    .pipe(modules.fs.createWriteStream(NewFileLocation))
    .on('close', function () {
        console.log('File written!');
    });
}

function RunExecutable(cmd){
    const execFile = modules.child_process.exec
    const child = execFile(cmd, [], (error, stdout, stderr) => {
        if (error) {
        throw error;
        }
        console.log(stdout);
    });
}

module.exports = { DownloadFile, RunExecutable }