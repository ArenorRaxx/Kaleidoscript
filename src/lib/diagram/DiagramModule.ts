import go, { Diagram, Part, Map } from "gojs";

const o$ = go.GraphObject.make;
const diagram: Diagram = new go.Diagram();
diagram.model = new go.GraphLinksModel([ ]);

const textFileTemplate: Part =
	o$(go.Node, "Auto",
		o$(go.Shape, {
			fromLinkable: true,
			toLinkable: true,
			portId: "",
			figure: "RoundedRectangle",
			height: 307,
			width: 220,
			fill: "#909090"
		}),
		o$(go.Panel, "Vertical", {
			height: 297,
			width: 210,
			background: "#f5f5f5"
		},
			o$(go.TextBlock, {
				text: "Title",
				font: "small-caps 700 20px Monserrat, sans-serif",
				margin: new go.Margin(12, 5, 5, 12)
			}, new go.Binding("text", "nameOfFile")),
			o$(go.TextBlock, {
				text: "Default text of document.",
				font: "400 10px Monserrat sans-serif",
				spacingAbove: 3,
				maxLines: 17,
				margin: new go.Margin(0, 3, 0, 10),
				overflow: go.TextBlock.OverflowEllipsis
			}, new go.Binding("text"))
		)
	);

const templateMap: Map<string, go.Part> = new go.Map<string, go.Part>();
templateMap.add("textFile", textFileTemplate);
diagram.nodeTemplateMap = templateMap;

export default {
	init(diagramDiv: HTMLDivElement) {
		diagram.div = diagramDiv;
	},

	async addFile(file: File) {
		const nameOfFile = file.name;
		const textOfFile = await file.text();
		diagram.commit((diagram) => {
			diagram.model.addNodeData({ name: nameOfFile, text: textOfFile, category: "textFile" });
			console.log(diagram.model.nodeDataArray);
		}, "add node")
	}
}