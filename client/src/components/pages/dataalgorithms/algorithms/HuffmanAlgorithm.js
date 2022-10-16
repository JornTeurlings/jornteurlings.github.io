import promiseTimeout from '../../../../helpers/promiseTimeout';

const constructWeightObject = (string) => {
    var counts= {}
    string.toLowerCase().split("").forEach(x => {
        if (counts[x]) {
            counts[x] = counts[x] + 1
        } else {
            counts[x] = 1
        }
    })
    let final = Object.entries(counts);
    const sorted = [...final].sort((a, b) => a[1] - b[1])
    return sorted;
}

const leafNodes = (nodes) => {
    return nodes.map((x, i) => {
        return {id: i + 1, label: x[0], title: `Node ${x[0]}`, value: x[1]}
    })
}

// {id: i + 1, label: selectAlphabet(i + 1), title: `Node ${i+1}`}

const createNodeAndEdges = (element1, element2) => {
    let value = element1[1] + element2[1];
    let label = element1[0] + element2[0];
    let title = `Node ${label}`;
    let temp = {label, title, value}

    let newEdges = [
        {from: 'x', to: element1.i, weight:0, label: '0', nuff: element1[0]},
     {from: 'x', to: element2.id, weight:1, label: '1', nuff: element2[0]}
    ];
    // create The Node
    // Edge from newNode to element1 of weight 0 and edge from newNode to element2 with weight 1
    // return the node and the new edges design
    return [temp, newEdges]
}

const Huffman = async (string, graph, setNodeInformation, visualizationSpeed, setEdgesGraph, addEdge)  => {
    let {nodes, edges} = graph;
    let weightList = constructWeightObject(string);
    let instant = leafNodes(weightList);
    console.log(weightList);
    setEdgesGraph(({ graph: { nodes, edges }, counter, ...rest }) => {
        return {
            counter: counter + instant.length,
            graph: {
                nodes: instant,
                edges: edges
            },
            ...rest
        }
    }); 

    while (weightList.length > 1) {
        const elements = weightList.splice(0, 2);
        let [newNode, newEdges] = createNodeAndEdges(elements[0], elements[1]);
        setEdgesGraph(({ graph: { nodes, edges }, counter, ...rest }) => {
            let newId = counter + 1;
            let foundNodes = nodes.filter(x => x.label === elements[0][0] || x.label === elements[1][0]);
            let neww = newEdges.map(x => ({ ...x, from: newId, to: foundNodes.find(y => y.label === x.nuff).id}));
            addEdge(neww);
            return {
                counter: newId,
                graph: {
                    nodes: [
                        ...nodes,
                        {id: counter + 1, ...newNode}
                    ],
                    edges: edges
                },
                ...rest
            }
        });
        await promiseTimeout({timeout: 1000});
        weightList.push([newNode.label, newNode.value])
        weightList = [...weightList].sort((x, y) => x[1] - y[1]);
    }
}

export default Huffman;