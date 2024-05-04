module.exports = {
    // get parent absolute path
    getParentPath : function(dir) {
        n_dir = "";
        dir = dir.split("");
        while (dir.pop() != "/") {
            // pass
        }
        for (let i = 0;i < dir.length;i++) {
            n_dir += dir[i];
        }
        return n_dir;
    }
}
