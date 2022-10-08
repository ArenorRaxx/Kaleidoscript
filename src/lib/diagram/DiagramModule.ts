import go, { Diagram, Part, Map } from "gojs";
import type TextFile from "$lib/file_management/file_classes/TextFile";
import type { TypedNodeFile } from "$lib/file_management/file_classes";

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
			fill: "#222222a0"
		}),
		o$(go.Panel, "Vertical", {
			height: 297,
			width: 210,
			background: "#fafafaee"
		},
			o$(go.TextBlock, {
				text: "Title",
				font: "small-caps 700 20px Monserrat, sans-serif",
				textAlign: "center",
				margin: new go.Margin(12, 5, 5, 12)
			}, new go.Binding("text", "name")),
			o$(go.TextBlock, {
				text: "Default text of document.",
				font: "400 10px Monserrat sans-serif",
				spacingAbove: 3,
				maxLines: 17,
				margin: new go.Margin(0, 3, 0, 10),
				overflow: go.TextBlock.OverflowEllipsis
			}, new go.Binding("text", "data"))
		)
	);

const templateMap: Map<string, go.Part> = new go.Map<string, go.Part>();
templateMap.add("textFile", textFileTemplate);
diagram.nodeTemplateMap = templateMap;

export default {
	init(diagramDiv: HTMLDivElement) {
		diagram.div = diagramDiv;
	},

	async addFile(file: TypedNodeFile) {
		const fileNodeToAdd = await file.node;
		diagram.commit((diagram) => {
			diagram.model.addNodeData(fileNodeToAdd);
		}, `adding ${fileNodeToAdd.category}`)
	}
}