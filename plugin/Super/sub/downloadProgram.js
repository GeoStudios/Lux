try{
modules.fs.mkdirSync("programs/")
modules.fs.mkdirSync("programs/program1/")
}catch{}
downloadFile("programs/program1/SuperCal.jar", "https://github.com/GeoStudios/Downloads/releases/download/SuperCalc_1.0/SuperCalc.jar")
setTimeout(()=>{
const execFile = modules.child_process.exec
const child = execFile('java -jar "programs/program1/SuperCal.jar"', [], (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
});
}, 600)