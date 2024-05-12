module.exports = {
    // get parent absolute path
    getParentPath : function(dir) {
        try {
            n_dir = "";
            dir = dir.split("");
            // determine the type of slash, which will be different between windows and linux
            if (dir.includes("/")) {
                slash_type = "/";
            }
            else {
                slash_type = "\\";
            }
            // pop the last one directory
            while (dir.pop() != "\\") {
                // pass
            }
            // restructure the full path
            for (let i = 0;i < dir.length;i++) {
                n_dir += dir[i];
            }
            return n_dir;
        }
        catch(e) {
            console.log(e);
        }
    }
}
