var __ref = "__ref";
module.exports = function(node) {
    var ref, i = -1, n = node.__refs_length || 0;
    while(++i < n) {
        if((ref = node[__ref + i]) !== undefined) {
            ref.__context = ref.__ref_index = node[__ref + i] = undefined;
        }
    }
    node.__refs_length = undefined
}