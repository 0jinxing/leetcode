/**
 * @description https://leetcode.com/problems/loud-and-rich/
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
    var graph = richer.reduce((graph, vector) => {
        if (graph.has(vector[1])) graph.get(vector[1]).push(vector[0]);
        else graph.set(vector[1], [vector[0]]);
        return graph;
    }, new Map());

    var ans = Array(quiet.length).fill(-1);
    for (var i = 0; i < ans.length; i++) {
        dfs(quiet, graph, i, ans);
    }
    return ans;
};

var dfs = function(quiet, graph, key, ans) {
    if (ans[key] >= 0) return ans[key];
    var an = key;
    var childs = graph.get(key) || [];
    for (var c of childs) {
        var can = dfs(quiet, graph, c, ans);
        if (quiet[can] < quiet[an]) an = can;
    }
    ans[key] = an;
    return ans[key];
}
