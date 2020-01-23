export default class Node {
    constructor(data){
        this.data = data
        this.children = [];
    }

    addChildren(nodes){
        const children = nodes.filter(node => node.data.parent_id === this.data.category_id)
        this.children = children;
    }

}

export const dfs = async (node, exec) => {
    const cat_id = await exec(node);
    for(let i = 0; i < node.children.length; i++)
    {
        node.children[i].data.parent_id = cat_id;
        await dfs(node.children[i], exec);
    }
}
